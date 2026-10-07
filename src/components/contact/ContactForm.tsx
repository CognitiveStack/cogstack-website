"use client";

import { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { contactSchema, type ContactFormData } from "@/lib/validations";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { CheckCircle, Loader2 } from "lucide-react";
import { Turnstile } from "@/components/contact/Turnstile";

export function ContactForm() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [turnstileToken, setTurnstileToken] = useState<string | null>(null);
  const [turnstileReset, setTurnstileReset] = useState(0);
  const honeypotRef = useRef<HTMLInputElement>(null);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      company: "",
      message: "",
    },
  });

  const onSubmit = async (data: ContactFormData) => {
    setSubmitError(null);

    if (!turnstileToken) {
      setSubmitError("Please complete the spam check below the message.");
      return;
    }

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({
          ...data,
          turnstileToken,
          website: honeypotRef.current?.value ?? "",
        }),
      });
      const result = (await res.json().catch(() => null)) as
        | { ok: boolean; error?: string }
        | null;

      if (!res.ok || !result?.ok) {
        setSubmitError(
          result?.error ??
            "Sorry, your message could not be sent. Please email charles@cogstack.co.za.",
        );
        return;
      }

      setIsSubmitted(true);
      reset();
    } catch {
      setSubmitError(
        "Network error — please try again, or email charles@cogstack.co.za.",
      );
    } finally {
      // A Turnstile token can only be used once; get a fresh one either way.
      setTurnstileReset((n) => n + 1);
    }
  };

  if (isSubmitted) {
    return (
      <div className="rounded-lg border border-border bg-background p-8 text-center">
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
          <CheckCircle className="h-8 w-8 text-green-600" />
        </div>
        <h3 className="mt-4 text-xl font-semibold text-foreground">
          Message Sent!
        </h3>
        <p className="mt-2 text-muted-foreground">
          Thank you for reaching out. I&apos;ll get back to you as soon as
          possible.
        </p>
        <Button
          variant="outline"
          className="mt-6"
          onClick={() => setIsSubmitted(false)}
        >
          Send Another Message
        </Button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="relative space-y-6 rounded-lg border border-border bg-background p-6 sm:p-8"
    >
      {/* Name field */}
      <div className="space-y-2">
        <Label htmlFor="name">
          Name <span className="text-red-500">*</span>
        </Label>
        <Input
          id="name"
          placeholder="Your name"
          {...register("name")}
          aria-invalid={errors.name ? "true" : "false"}
          className={errors.name ? "border-red-500" : ""}
        />
        {errors.name && (
          <p className="text-sm text-red-500">{errors.name.message}</p>
        )}
      </div>

      {/* Email field */}
      <div className="space-y-2">
        <Label htmlFor="email">
          Email <span className="text-red-500">*</span>
        </Label>
        <Input
          id="email"
          type="email"
          placeholder="you@example.com"
          {...register("email")}
          aria-invalid={errors.email ? "true" : "false"}
          className={errors.email ? "border-red-500" : ""}
        />
        {errors.email && (
          <p className="text-sm text-red-500">{errors.email.message}</p>
        )}
      </div>

      {/* Company field (optional) */}
      <div className="space-y-2">
        <Label htmlFor="company">Company (optional)</Label>
        <Input
          id="company"
          placeholder="Your company"
          {...register("company")}
          className={errors.company ? "border-red-500" : ""}
        />
        {errors.company && (
          <p className="text-sm text-red-500">{errors.company.message}</p>
        )}
      </div>

      {/* Message field */}
      <div className="space-y-2">
        <Label htmlFor="message">
          Message <span className="text-red-500">*</span>
        </Label>
        <Textarea
          id="message"
          placeholder="Tell me about your project..."
          rows={5}
          {...register("message")}
          aria-invalid={errors.message ? "true" : "false"}
          className={errors.message ? "border-red-500" : ""}
        />
        {errors.message && (
          <p className="text-sm text-red-500">{errors.message.message}</p>
        )}
      </div>

      {/* Honeypot: hidden from people, tempting for bots */}
      <div aria-hidden="true" className="absolute -left-[9999px] h-0 w-0 overflow-hidden">
        <label htmlFor="website">Website</label>
        <input
          id="website"
          name="website"
          type="text"
          tabIndex={-1}
          autoComplete="off"
          ref={honeypotRef}
        />
      </div>

      {/* Spam protection */}
      <Turnstile onToken={setTurnstileToken} resetKey={turnstileReset} />

      {submitError && (
        <p role="alert" className="text-sm text-red-500">
          {submitError}
        </p>
      )}

      {/* Submit button */}
      <Button type="submit" className="w-full" disabled={isSubmitting}>
        {isSubmitting ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Sending...
          </>
        ) : (
          "Send Message"
        )}
      </Button>
    </form>
  );
}
