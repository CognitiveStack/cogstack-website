# CogStack Website

Source for **[cogstack.co.za](https://cogstack.co.za)** — the CogStack company site.

## Stack

- **Next.js 16** (App Router) with **static export** (`output: "export"` → `./out`)
- React 19, TypeScript, Tailwind CSS 4, shadcn/ui
- Hosted on **Cloudflare Workers** (static assets) — Worker name `cogstack-website`

## Pages

| Route | Source |
|---|---|
| `/` | `src/app/page.tsx`, `src/components/home/` |
| `/about` | `src/app/about/page.tsx`, `src/components/about/` |
| `/products` | `src/app/products/page.tsx`, `src/components/products/` |
| `/contact` | `src/app/contact/page.tsx`, `src/components/contact/` |

Images live in `public/images/` (e.g. founder and partner headshots).

## Local development

```bash
npm ci
npm run dev      # http://localhost:3000
npm run lint
npm run build    # static export to ./out
```

## Deployment

Deploys are automatic via **Cloudflare Workers Builds**, connected to this repo:

- **Merge to `main`** → production build → live on cogstack.co.za in ~2 minutes
- **Every PR** → preview build; the preview URL appears in the PR's
  *Workers Builds* check (Details)

Build: `npm run build` · Deploy: `npx wrangler deploy` (config in `wrangler.jsonc`)

### Workflow

1. Branch from `main` (`feat/…`, `fix/…`, `chore/…`)
2. Commit, push, open a PR
3. Review the preview link
4. Merge → it's live

### Manual deploy (fallback)

```bash
npm run build
npx wrangler deploy
```

Requires `CLOUDFLARE_API_TOKEN` (Workers Scripts: Edit) and `CLOUDFLARE_ACCOUNT_ID`.

### Rollback

Cloudflare dashboard → Workers & Pages → `cogstack-website` → **Deployments** →
⋯ on a previous version → **Rollback**, or:

```bash
npx wrangler deployments list
npx wrangler rollback <version-id>
```

## Repository notes

- `.claude/` — Claude Code commands and reference docs for AI-assisted development
  (PIV Loop). Full documentation:
  [journeyman33/claude-code-template](https://github.com/journeyman33/claude-code-template)
- `COGSTACK_WEBSITE_BRIEF.md` — original site brief
