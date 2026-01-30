# Feature: CogStack Website MVP

The following plan should be complete, but it's important that you validate documentation and codebase patterns and task sanity before you start implementing.

Pay special attention to naming conventions, file organization, and component patterns. Import from the right files.

## Feature Description

Build the complete MVP marketing website for CogStack - an AI Infrastructure Engineering firm. The website will showcase the company's 4-layer cognitive stack architecture, founder information, and provide a contact form for potential clients. The site will be built with Next.js 14+ App Router, TypeScript, Tailwind CSS, and shadcn/ui, deployed as a static site to Cloudflare Pages.

## User Story

As a potential client visiting cogstack.co.za
I want to quickly understand what CogStack does and how to contact them
So that I can evaluate if they're the right partner for my AI infrastructure needs

## Problem Statement

CogStack needs a professional web presence to showcase their AI infrastructure expertise, establish credibility with enterprise clients in South Africa, and provide an easy way for prospects to make contact.

## Solution Statement

Build a 3-page static website (Home, About, Contact) with responsive design, clear value proposition, interactive 4-layer stack diagram, and a validated contact form. Deploy to Cloudflare Pages for fast loading in South Africa.

## Feature Metadata

**Feature Type**: New Capability
**Estimated Complexity**: Medium
**Primary Systems Affected**: Frontend (Next.js), Static Hosting (Cloudflare Pages)
**Dependencies**: Next.js 14+, TypeScript, Tailwind CSS, shadcn/ui, React Hook Form, Zod, Lucide React

---

## CONTEXT REFERENCES

### Relevant Documentation - READ BEFORE IMPLEMENTING!

| Document | Why Read |
|----------|----------|
| `.claude/PRD.md` | Full requirements, brand colors, content specifications |
| `COGSTACK_WEBSITE_BRIEF.md` | Original brief with detailed content, brand voice |
| `.claude/reference/react-frontend-best-practices.md` | Component patterns, form handling, Tailwind patterns |

### New Files to Create

```
cogstack-website/
├── src/
│   ├── app/
│   │   ├── layout.tsx              # Root layout with nav/footer
│   │   ├── page.tsx                # Home page
│   │   ├── globals.css             # Global styles + Tailwind
│   │   ├── about/
│   │   │   └── page.tsx            # About page
│   │   └── contact/
│   │       └── page.tsx            # Contact page
│   ├── components/
│   │   ├── ui/                     # shadcn/ui components (auto-generated)
│   │   ├── layout/
│   │   │   ├── Header.tsx          # Navigation header
│   │   │   └── Footer.tsx          # Site footer
│   │   ├── home/
│   │   │   ├── Hero.tsx            # Hero section
│   │   │   ├── StackDiagram.tsx    # 4-layer architecture diagram
│   │   │   ├── WhatWeBuild.tsx     # Services cards section
│   │   │   └── TechStack.tsx       # Technology badges
│   │   ├── about/
│   │   │   ├── Founder.tsx         # Founder bio section
│   │   │   └── Approach.tsx        # Company principles
│   │   └── contact/
│   │       └── ContactForm.tsx     # Contact form with validation
│   └── lib/
│       ├── utils.ts                # cn() utility (shadcn)
│       └── validations.ts          # Zod schemas
├── public/
│   └── (empty for now)
├── package.json
├── tsconfig.json
├── tailwind.config.ts
├── next.config.ts
├── postcss.config.mjs
├── components.json                 # shadcn/ui config
└── .eslintrc.json
```

### Patterns to Follow

**Component File Pattern:**
```tsx
// PascalCase filename matching component name
// src/components/home/Hero.tsx

interface HeroProps {
  // Props interface when needed
}

export function Hero({ ...props }: HeroProps) {
  return (
    <section className="...">
      {/* Content */}
    </section>
  );
}
```

**Page File Pattern (App Router):**
```tsx
// src/app/about/page.tsx
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About | CogStack",
  description: "...",
};

export default function AboutPage() {
  return (
    <main>
      {/* Page content */}
    </main>
  );
}
```

**Tailwind Class Organization:**
```tsx
// Order: layout → sizing → spacing → typography → colors → effects
<div className="flex flex-col w-full max-w-7xl mx-auto px-4 py-16 text-lg text-slate-900 bg-white rounded-lg shadow-md">
```

**Brand Colors (CSS Variables):**
```css
:root {
  --color-primary: 222.2 47.4% 11.2%;      /* Deep blue #1e3a8a */
  --color-accent: 217.2 91.2% 59.8%;       /* Electric blue #3b82f6 */
}
```

**Form Pattern with React Hook Form + Zod:**
```tsx
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

const schema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email"),
});

type FormData = z.infer<typeof schema>;

export function ContactForm() {
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (data: FormData) => {
    // Handle submission
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {/* Form fields */}
    </form>
  );
}
```

---

## IMPLEMENTATION PLAN

### Phase 1: Project Initialization

Set up Next.js project with TypeScript, Tailwind CSS, and shadcn/ui.

**Tasks:**
- Create Next.js 14+ project with TypeScript and Tailwind
- Configure for static export (Cloudflare Pages)
- Initialize shadcn/ui with required components
- Set up brand colors in Tailwind config
- Create directory structure

### Phase 2: Layout & Navigation

Build the shared layout components (Header, Footer) and root layout.

**Tasks:**
- Create Header component with responsive navigation
- Create Footer component with contact info
- Set up root layout with metadata
- Add Inter font from Google Fonts

### Phase 3: Home Page

Build the home page with all sections.

**Tasks:**
- Create Hero section with CTAs
- Create StackDiagram component (4-layer visualization)
- Create WhatWeBuild section (3 service cards)
- Create TechStack section (technology badges)
- Assemble home page

### Phase 4: About Page

Build the about page with founder and approach sections.

**Tasks:**
- Create Founder component with bio
- Create Approach component with 3 principles
- Assemble about page

### Phase 5: Contact Page & Form

Build the contact page with validated form.

**Tasks:**
- Create Zod validation schema
- Create ContactForm component with React Hook Form
- Add form field components (Input, Textarea, Button from shadcn)
- Add success/error states
- Assemble contact page

### Phase 6: Polish & Deploy

Final touches and deployment setup.

**Tasks:**
- Add SEO metadata to all pages
- Test responsive design
- Configure static export
- Test build locally
- Document deployment steps

---

## STEP-BY-STEP TASKS

IMPORTANT: Execute every task in order, top to bottom. Each task is atomic and independently testable.

---

### Phase 1: Project Initialization

#### Task 1.1: CREATE Next.js Project

- **IMPLEMENT**: Initialize Next.js 14+ with TypeScript, Tailwind CSS, ESLint, App Router
- **COMMAND**:
```bash
cd /home/charles/projects/cogstack-website
npx create-next-app@latest . --typescript --tailwind --eslint --app --src-dir --import-alias "@/*" --turbopack --yes
```
- **VALIDATE**: `ls -la src/app/` should show `layout.tsx`, `page.tsx`, `globals.css`

#### Task 1.2: UPDATE next.config.ts for Static Export

- **IMPLEMENT**: Configure Next.js for static export to Cloudflare Pages
- **FILE**: `next.config.ts`
- **CONTENT**:
```typescript
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
```
- **VALIDATE**: `cat next.config.ts` shows `output: "export"`

#### Task 1.3: UPDATE tailwind.config.ts with Brand Colors

- **IMPLEMENT**: Add CogStack brand colors to Tailwind config
- **FILE**: `tailwind.config.ts`
- **PATTERN**: Extend theme with custom colors
- **COLORS**:
  - `primary`: `#1e3a8a` (deep blue)
  - `accent`: `#3b82f6` (electric blue)
- **VALIDATE**: Config file contains `primary` and `accent` color definitions

#### Task 1.4: INIT shadcn/ui

- **IMPLEMENT**: Initialize shadcn/ui with New York style
- **COMMAND**:
```bash
npx shadcn@latest init -d
```
- **NOTE**: Use defaults (New York style, Zinc base color, CSS variables)
- **VALIDATE**: `cat components.json` shows shadcn configuration

#### Task 1.5: ADD shadcn/ui Components

- **IMPLEMENT**: Add required UI components from shadcn
- **COMMAND**:
```bash
npx shadcn@latest add button card input textarea label
```
- **VALIDATE**: `ls src/components/ui/` shows `button.tsx`, `card.tsx`, `input.tsx`, `textarea.tsx`, `label.tsx`

#### Task 1.6: CREATE Directory Structure

- **IMPLEMENT**: Create component directories for organization
- **COMMAND**:
```bash
mkdir -p src/components/layout src/components/home src/components/about src/components/contact
```
- **VALIDATE**: `ls src/components/` shows `ui/`, `layout/`, `home/`, `about/`, `contact/`

#### Task 1.7: ADD Form Dependencies

- **IMPLEMENT**: Install React Hook Form and Zod for form validation
- **COMMAND**:
```bash
npm install react-hook-form @hookform/resolvers zod
```
- **VALIDATE**: `cat package.json | grep -E "(react-hook-form|zod)"` shows both packages

#### Task 1.8: UPDATE globals.css with Brand Styling

- **IMPLEMENT**: Update global CSS with brand colors and base styles
- **FILE**: `src/app/globals.css`
- **CONTENT**: Keep Tailwind imports, update CSS variables for brand colors
- **VALIDATE**: File contains `--primary` and `--accent` CSS variables

---

### Phase 2: Layout & Navigation

#### Task 2.1: CREATE Header Component

- **IMPLEMENT**: Responsive navigation header with logo, nav links, mobile menu
- **FILE**: `src/components/layout/Header.tsx`
- **FEATURES**:
  - Logo/brand name linking to home
  - Nav links: Home, About, Contact
  - Mobile hamburger menu (use useState for toggle)
  - Sticky positioning
- **IMPORTS**: `Link` from `next/link`, `useState` from `react`
- **PATTERN**: Use Tailwind responsive classes `md:hidden`, `md:flex`
- **VALIDATE**: Component exports `Header` function

#### Task 2.2: CREATE Footer Component

- **IMPLEMENT**: Site footer with contact info and links
- **FILE**: `src/components/layout/Footer.tsx`
- **CONTENT**:
  - Email: charles@cogstack.co.za
  - Location: Johannesburg, South Africa
  - GitHub link: github.com/mindset-dev
  - Copyright: © 2025 CogStack
- **VALIDATE**: Component exports `Footer` function

#### Task 2.3: UPDATE Root Layout

- **IMPLEMENT**: Add Header, Footer, Inter font, metadata
- **FILE**: `src/app/layout.tsx`
- **IMPORTS**: 
  - `Inter` from `next/font/google`
  - `Header` and `Footer` from components
- **METADATA**:
  - Title: "CogStack | The Full Stack for AI Intelligence"
  - Description: Brand description
- **VALIDATE**: `npm run build` succeeds

---

### Phase 3: Home Page

#### Task 3.1: CREATE Hero Component

- **IMPLEMENT**: Hero section with headline, subheadline, CTAs
- **FILE**: `src/components/home/Hero.tsx`
- **CONTENT**:
  - Headline: "The Full Stack for AI Intelligence"
  - Subheadline: "We build production-grade cognitive infrastructure..."
  - Primary CTA: "Get in Touch" → /contact
  - Secondary CTA: "Learn More" → /about
- **STYLING**: Full viewport height, centered content, gradient background
- **IMPORTS**: `Link` from `next/link`, `Button` from shadcn
- **VALIDATE**: Component renders with both CTAs

#### Task 3.2: CREATE StackDiagram Component

- **IMPLEMENT**: Visual 4-layer cognitive stack diagram
- **FILE**: `src/components/home/StackDiagram.tsx`
- **LAYERS** (top to bottom):
  1. Edge & Routing - Cloudflare, Caddy
  2. Orchestration - Kubernetes, Docker
  3. Cognitive Systems - LangChain, n8n, Flowise
  4. Memory Fabric - Supabase, Qdrant, Neo4j, ClickHouse
- **STYLING**: 
  - Stacked boxes with borders
  - Hover effects showing layer details
  - Icons/emojis for each layer
- **VALIDATE**: Component displays 4 distinct layers

#### Task 3.3: CREATE WhatWeBuild Component

- **IMPLEMENT**: Three service cards section
- **FILE**: `src/components/home/WhatWeBuild.tsx`
- **CARDS**:
  1. AI Infrastructure - Multi-database cognitive architectures
  2. MCP Servers - Custom integrations (Revit, SAGE)
  3. Full Platform - End-to-end AI transformation
- **IMPORTS**: `Card` components from shadcn
- **VALIDATE**: Component renders 3 cards in responsive grid

#### Task 3.4: CREATE TechStack Component

- **IMPLEMENT**: Technology badges grid
- **FILE**: `src/components/home/TechStack.tsx`
- **TECHNOLOGIES**: Neo4j, ClickHouse, Qdrant, Supabase, Docker, Kubernetes, LangChain, n8n
- **STYLING**: Badge-style display with hover effects
- **CAPTION**: "33+ integrated services in production"
- **VALIDATE**: Component displays technology grid

#### Task 3.5: UPDATE Home Page

- **IMPLEMENT**: Assemble home page with all sections
- **FILE**: `src/app/page.tsx`
- **IMPORTS**: Hero, StackDiagram, WhatWeBuild, TechStack
- **STRUCTURE**:
  ```tsx
  <main>
    <Hero />
    <StackDiagram />
    <WhatWeBuild />
    <TechStack />
  </main>
  ```
- **VALIDATE**: `npm run dev` shows complete home page

---

### Phase 4: About Page

#### Task 4.1: CREATE Founder Component

- **IMPLEMENT**: Founder bio section
- **FILE**: `src/components/about/Founder.tsx`
- **CONTENT**:
  - Name: Charles Vosloo
  - Title: Founder & Lead Engineer
  - Bio: DevOps → AI Infrastructure evolution, 33+ services, SA focus
- **STYLING**: Professional layout, optional photo placeholder
- **VALIDATE**: Component exports `Founder` function

#### Task 4.2: CREATE Approach Component

- **IMPLEMENT**: Three principles section
- **FILE**: `src/components/about/Approach.tsx`
- **PRINCIPLES**:
  1. Production-grade - No prototypes that fail at scale
  2. Self-hosted option - Data sovereignty
  3. Full-stack integration - Not point solutions
- **INCLUDES**: GitHub link to mindset-dev
- **VALIDATE**: Component displays 3 principles

#### Task 4.3: CREATE About Page

- **IMPLEMENT**: Assemble about page
- **FILE**: `src/app/about/page.tsx`
- **METADATA**:
  - Title: "About | CogStack"
  - Description: About CogStack and founder
- **IMPORTS**: Founder, Approach
- **VALIDATE**: `/about` route renders correctly

---

### Phase 5: Contact Page & Form

#### Task 5.1: CREATE Validation Schema

- **IMPLEMENT**: Zod schema for contact form
- **FILE**: `src/lib/validations.ts`
- **SCHEMA**:
```typescript
export const contactSchema = z.object({
  name: z.string().min(1, "Name is required").max(100),
  email: z.string().email("Please enter a valid email"),
  company: z.string().max(100).optional(),
  message: z.string().min(10, "Message must be at least 10 characters").max(1000),
});

export type ContactFormData = z.infer<typeof contactSchema>;
```
- **VALIDATE**: File exports `contactSchema` and `ContactFormData`

#### Task 5.2: CREATE ContactForm Component

- **IMPLEMENT**: Contact form with React Hook Form + Zod validation
- **FILE**: `src/components/contact/ContactForm.tsx`
- **FEATURES**:
  - Name input (required)
  - Email input (required, validated)
  - Company input (optional)
  - Message textarea (required, min 10 chars)
  - Submit button with loading state
  - Error display per field
  - Success message on submit
- **IMPORTS**: 
  - `useForm` from react-hook-form
  - `zodResolver` from @hookform/resolvers/zod
  - `contactSchema` from lib/validations
  - Input, Textarea, Button, Label from shadcn
- **STATE**: `isSubmitted` for success message
- **SUBMIT**: Console log for MVP, show success message
- **DIRECTIVE**: Add `"use client"` at top (client component)
- **VALIDATE**: Form validates and shows errors/success

#### Task 5.3: CREATE Contact Page

- **IMPLEMENT**: Assemble contact page
- **FILE**: `src/app/contact/page.tsx`
- **METADATA**:
  - Title: "Contact | CogStack"
  - Description: Get in touch with CogStack
- **CONTENT**:
  - Heading: "Get in Touch"
  - Subheading: Contact details
  - Email: charles@cogstack.co.za
  - Location: Johannesburg, South Africa
  - ContactForm component
- **IMPORTS**: ContactForm
- **VALIDATE**: `/contact` route renders with form

---

### Phase 6: Polish & Deploy

#### Task 6.1: ADD SEO Metadata

- **IMPLEMENT**: Ensure all pages have proper metadata
- **FILES**: All page.tsx files
- **CHECK**:
  - Title unique per page
  - Description present
  - Open Graph basics (optional for MVP)
- **VALIDATE**: View page source shows `<title>` and `<meta name="description">`

#### Task 6.2: TEST Responsive Design

- **IMPLEMENT**: Verify mobile/tablet/desktop layouts
- **CHECKLIST**:
  - [ ] Header mobile menu works
  - [ ] Hero section readable on mobile
  - [ ] Stack diagram stacks vertically on mobile
  - [ ] Cards stack on mobile
  - [ ] Contact form usable on mobile
  - [ ] Footer readable on mobile
- **VALIDATE**: Manual testing at 375px, 768px, 1280px widths

#### Task 6.3: BUILD Static Export

- **IMPLEMENT**: Generate static files for deployment
- **COMMAND**:
```bash
npm run build
```
- **VALIDATE**: 
  - Build completes without errors
  - `ls out/` shows HTML files for all routes

#### Task 6.4: TEST Static Build Locally

- **IMPLEMENT**: Serve static files and test
- **COMMAND**:
```bash
npx serve out
```
- **VALIDATE**: Site works at http://localhost:3000 with all pages functional

---

## TESTING STRATEGY

### Build Validation
```bash
# Must pass with no errors
npm run build
```

### Linting
```bash
# Must pass with no errors
npm run lint
```

### Manual Testing Checklist

**Navigation:**
- [ ] Logo links to home
- [ ] All nav links work
- [ ] Mobile menu opens/closes
- [ ] Active page highlighted (if implemented)

**Home Page:**
- [ ] Hero displays correctly
- [ ] CTAs link to correct pages
- [ ] Stack diagram shows 4 layers
- [ ] Service cards display
- [ ] Tech stack badges visible

**About Page:**
- [ ] Founder info displays
- [ ] 3 principles listed
- [ ] GitHub link works

**Contact Page:**
- [ ] Form displays all fields
- [ ] Validation errors appear for invalid input
- [ ] Success message shows on valid submit
- [ ] Form is accessible (labels, focus states)

**Responsive:**
- [ ] Mobile (375px): All content readable, menu works
- [ ] Tablet (768px): Layout adapts appropriately
- [ ] Desktop (1280px): Full layout displays

---

## VALIDATION COMMANDS

Execute every command to ensure zero regressions and 100% feature correctness.

### Level 1: Build & Lint

```bash
# TypeScript compilation and Next.js build
npm run build

# ESLint check
npm run lint
```

### Level 2: Static Export Verification

```bash
# Verify static files generated
ls -la out/
ls -la out/about/
ls -la out/contact/

# Should show index.html in each directory
```

### Level 3: Local Server Test

```bash
# Serve static build
npx serve out -p 3000

# Open in browser and test all pages
# http://localhost:3000
# http://localhost:3000/about
# http://localhost:3000/contact
```

### Level 4: Manual Validation

1. Open http://localhost:3000
2. Click through all navigation links
3. Test mobile menu (resize to 375px or use DevTools)
4. Fill contact form with invalid data → verify errors
5. Fill contact form with valid data → verify success
6. Check console for form submission log

---

## ACCEPTANCE CRITERIA

- [ ] Home page displays hero, stack diagram, services, tech stack
- [ ] About page displays founder bio and company approach
- [ ] Contact page displays form with working validation
- [ ] Navigation works on all pages (desktop and mobile)
- [ ] Mobile responsive design functions correctly
- [ ] `npm run build` completes without errors
- [ ] `npm run lint` passes without errors
- [ ] Static export generates files in `out/` directory
- [ ] All pages load correctly from static build

---

## COMPLETION CHECKLIST

- [ ] Phase 1: Project initialized with Next.js, Tailwind, shadcn
- [ ] Phase 2: Header and Footer components created, layout working
- [ ] Phase 3: Home page complete with all sections
- [ ] Phase 4: About page complete with founder and approach
- [ ] Phase 5: Contact page complete with validated form
- [ ] Phase 6: Build passes, static export works
- [ ] All validation commands executed successfully
- [ ] Manual testing confirms all features work
- [ ] Site ready for Cloudflare Pages deployment

---

## DEPLOYMENT NOTES

### Cloudflare Pages Deployment

After MVP is complete, deploy to Cloudflare Pages:

1. **Connect GitHub Repository:**
   - Go to Cloudflare Dashboard → Pages
   - Create new project → Connect to Git
   - Select `CognitiveStack/cogstack-website`

2. **Build Settings:**
   - Build command: `npm run build`
   - Build output directory: `out`
   - Node.js version: 18+

3. **Custom Domain:**
   - Add custom domain: `cogstack.co.za`
   - Configure DNS (CNAME to pages.dev subdomain)

4. **Environment Variables:**
   - `NEXT_PUBLIC_SITE_URL=https://cogstack.co.za`

### Email Routing (Post-MVP)

Configure Cloudflare Email Routing for charles@cogstack.co.za to forward to personal email.

---

## NOTES

### Design Decisions

1. **Static Export**: Using `output: 'export'` for Cloudflare Pages compatibility. No server-side features.

2. **Contact Form MVP**: Form logs to console and shows success message. Email integration deferred to post-MVP.

3. **No Framer Motion**: Deferred animations to post-MVP to reduce complexity and bundle size.

4. **shadcn/ui New York Style**: Cleaner, more professional look suitable for enterprise clients.

### Known Limitations

1. **Images**: Using `unoptimized: true` for static export. Consider image optimization service post-MVP.

2. **No Analytics**: Cloudflare Web Analytics can be added post-deployment.

3. **No Email Sending**: Contact form submissions only logged client-side for MVP.

### Post-MVP Enhancements

1. Add Framer Motion animations to stack diagram
2. Integrate email sending via Cloudflare Workers or Resend
3. Add Services and Technology pages
4. Add case studies section
5. Add Calendly booking integration
6. Add Open Graph images for social sharing
