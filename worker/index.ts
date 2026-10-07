/**
 * Cloudflare Worker for cogstack.co.za
 *
 * The site itself is a static export (./out) served by Workers static assets.
 * This script only runs for /api/* (see `run_worker_first` in wrangler.jsonc):
 *
 *   POST /api/contact  →  validate + Turnstile check → email via Mailgun (mail.cogstack.co.za)
 *
 * Everything else falls through to the static assets.
 */
import { contactSchema } from "../src/lib/validations";

// Minimal local types so the Next.js type-check doesn't need @cloudflare/workers-types.
interface Env {
  ASSETS: { fetch(request: Request): Promise<Response> };
  MAILGUN_API_KEY?: string; // secret — a Mailgun *sending* key for MAILGUN_DOMAIN
  MAILGUN_DOMAIN: string; // e.g. mail.cogstack.co.za
  MAILGUN_API_BASE: string; // https://api.mailgun.net (US) or https://api.eu.mailgun.net (EU)
  CONTACT_FROM: string; // e.g. CogStack Website <website@mail.cogstack.co.za>
  CONTACT_TO: string; // where enquiries are delivered
  TURNSTILE_SECRET_KEY?: string;
}

async function sendViaMailgun(
  env: Env,
  msg: { replyTo: string; subject: string; text: string },
): Promise<void> {
  if (!env.MAILGUN_API_KEY) throw new Error("MAILGUN_API_KEY is not configured");
  const form = new FormData();
  form.append("from", env.CONTACT_FROM);
  form.append("to", env.CONTACT_TO);
  form.append("subject", msg.subject);
  form.append("text", msg.text);
  form.append("h:Reply-To", msg.replyTo);

  const res = await fetch(`${env.MAILGUN_API_BASE}/v3/${env.MAILGUN_DOMAIN}/messages`, {
    method: "POST",
    headers: { Authorization: `Basic ${btoa(`api:${env.MAILGUN_API_KEY}`)}` },
    body: form,
  });
  if (!res.ok) {
    throw new Error(`Mailgun ${res.status}: ${(await res.text()).slice(0, 300)}`);
  }
}

const MAX_BODY_BYTES = 20_000;

function json(body: unknown, status = 200): Response {
  return new Response(JSON.stringify(body), {
    status,
    headers: { "content-type": "application/json; charset=utf-8", "cache-control": "no-store" },
  });
}

/** Strip CR/LF so user input can never inject extra email headers. */
function oneLine(value: string): string {
  return value.replace(/[\r\n]+/g, " ").trim();
}

async function verifyTurnstile(token: string, secret: string, ip: string | null): Promise<boolean> {
  const form = new FormData();
  form.append("secret", secret);
  form.append("response", token);
  if (ip) form.append("remoteip", ip);

  const res = await fetch("https://challenges.cloudflare.com/turnstile/v0/siteverify", {
    method: "POST",
    body: form,
  });
  if (!res.ok) return false;
  const outcome = (await res.json()) as { success?: boolean };
  return outcome.success === true;
}

async function handleContact(request: Request, env: Env): Promise<Response> {
  const length = Number(request.headers.get("content-length") ?? "0");
  if (length > MAX_BODY_BYTES) return json({ ok: false, error: "Message too large." }, 413);

  let payload: Record<string, unknown>;
  try {
    payload = (await request.json()) as Record<string, unknown>;
  } catch {
    return json({ ok: false, error: "Invalid request." }, 400);
  }

  // Honeypot: real visitors never see or fill this field. Pretend success for bots.
  if (typeof payload.website === "string" && payload.website.trim() !== "") {
    return json({ ok: true });
  }

  // Spam protection: Cloudflare Turnstile.
  if (!env.TURNSTILE_SECRET_KEY) {
    console.error("TURNSTILE_SECRET_KEY is not configured");
    return json({ ok: false, error: "Form is temporarily unavailable." }, 503);
  }
  const token = typeof payload.turnstileToken === "string" ? payload.turnstileToken : "";
  const human =
    token !== "" &&
    (await verifyTurnstile(token, env.TURNSTILE_SECRET_KEY, request.headers.get("CF-Connecting-IP")));
  if (!human) {
    return json({ ok: false, error: "Spam check failed. Please try again." }, 403);
  }

  // Same validation rules as the form itself.
  const parsed = contactSchema.safeParse(payload);
  if (!parsed.success) {
    return json({ ok: false, error: "Please check the form fields and try again." }, 400);
  }
  const { name, email, company, message } = parsed.data;

  const text = [
    "New enquiry from cogstack.co.za",
    "",
    `Name:    ${oneLine(name)}`,
    `Email:   ${oneLine(email)}`,
    `Company: ${company ? oneLine(company) : "-"}`,
    "",
    "Message:",
    message,
    "",
    "—",
    "Reply to this email to answer the sender directly.",
  ].join("\n");

  try {
    await sendViaMailgun(env, {
      replyTo: oneLine(email),
      subject: `Website enquiry from ${oneLine(name)}${company ? ` (${oneLine(company)})` : ""}`,
      text,
    });
  } catch (err) {
    console.error("Contact email failed", (err as Error).message);
    return json(
      { ok: false, error: "Sorry, your message could not be sent. Please email charles@cogstack.co.za." },
      502,
    );
  }

  return json({ ok: true });
}

const worker = {
  async fetch(request: Request, env: Env): Promise<Response> {
    const url = new URL(request.url);

    if (url.pathname === "/api/contact") {
      if (request.method !== "POST") return json({ ok: false, error: "Method not allowed." }, 405);
      return handleContact(request, env);
    }

    if (url.pathname.startsWith("/api/")) {
      return json({ ok: false, error: "Not found." }, 404);
    }

    return env.ASSETS.fetch(request);
  },
};

export default worker;
