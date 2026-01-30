# CogStack Website - Product Requirements Document

## 1. Executive Summary

CogStack Website is the marketing and portfolio website for **CogStack** (Cognitive Stack Pty Ltd), an AI Infrastructure Engineering firm based in South Africa. The company specializes in building production-grade cognitive systems for enterprises, differentiating itself from generic "AI consulting" by focusing on the complete infrastructure stack: memory fabric, cognitive systems, and orchestration layers.

The website serves as the primary digital presence for CogStack, showcasing technical expertise, service offerings, and the unique 4-layer cognitive architecture that underpins all client solutions. The target audience includes enterprise decision-makers and technical leaders in South Africa seeking robust AI infrastructure solutions.

**MVP Goal:** Launch a professional, fast-loading marketing website within 2-3 days that clearly communicates CogStack's value proposition, displays the technical architecture, and enables potential clients to make contact.

---

## 2. Mission

### Mission Statement
Establish CogStack's digital presence as the premier AI infrastructure engineering firm in South Africa, demonstrating technical credibility through transparent architecture showcases and enabling seamless client engagement.

### Core Principles

1. **Technical Credibility** - Show, don't just tell. Link to GitHub repos, display real architecture diagrams, use accurate technical terminology.

2. **Production Focus** - Emphasize production-grade solutions over prototypes. No hype or vaporware.

3. **South African First** - Optimize for SA network conditions, address local enterprise needs, pricing in ZAR.

4. **Performance Excellence** - Fast load times (<2s on 4G), mobile-first responsive design.

5. **Professional Simplicity** - Clean, confident design without unnecessary complexity or generic AI imagery.

---

## 3. Target Users

### Primary Persona: Enterprise Technology Leader
- **Role:** CTO, IT Director, Head of Digital Transformation
- **Company Size:** Medium to large enterprises in South Africa
- **Technical Comfort:** High - understands infrastructure, databases, deployment
- **Pain Points:**
  - AI projects that fail to move from prototype to production
  - Vendor lock-in with cloud AI services
  - Data sovereignty concerns
  - Point solutions that don't integrate
- **Goals:**
  - Find a partner who understands production infrastructure
  - Evaluate technical credibility before engagement
  - Understand pricing and service scope

### Secondary Persona: Technical Evaluator
- **Role:** Solutions Architect, Senior Developer
- **Responsibility:** Evaluate and recommend vendors to leadership
- **Needs:**
  - Technical depth and architecture details
  - GitHub repos and code examples
  - Clear technology stack information

---

## 4. MVP Scope

### In Scope (MVP)

**Core Pages:**
- ✅ Home page with hero section and 4-layer stack diagram
- ✅ About page with founder bio and company approach
- ✅ Contact page with functional contact form
- ✅ Responsive navigation with mobile menu

**Technical Features:**
- ✅ Next.js 14+ with App Router
- ✅ TypeScript throughout
- ✅ Tailwind CSS styling
- ✅ shadcn/ui components
- ✅ Mobile-first responsive design
- ✅ Contact form with validation (React Hook Form + Zod)
- ✅ Basic SEO metadata

**Deployment:**
- ✅ Cloudflare Pages hosting
- ✅ SSL/HTTPS configured
- ✅ Domain: cogstack.co.za

### Out of Scope (Post-MVP)

**Deferred Pages:**
- ❌ Services page (detailed)
- ❌ Technology page (detailed)
- ❌ Blog/Insights section
- ❌ Case studies section

**Deferred Features:**
- ❌ Interactive/animated stack diagram
- ❌ Technology grid with filtering
- ❌ Calendly booking integration
- ❌ GitHub API integration (recent commits display)
- ❌ Cloudflare Web Analytics
- ❌ Email notifications via Resend API
- ❌ Open Graph images
- ❌ Structured data (JSON-LD)
- ❌ Sitemap.xml generation

---

## 5. User Stories

### Primary User Stories

**US-1: Understand Value Proposition**
> As a potential client, I want to quickly understand what CogStack does and how it differs from generic AI consultants, so that I can determine if they're relevant to my needs.

*Example:* User lands on homepage, reads tagline "The Full Stack for AI Intelligence", sees the 4-layer architecture diagram, and understands CogStack builds production infrastructure, not just demos.

**US-2: Evaluate Technical Credibility**
> As a technical evaluator, I want to see the actual technology stack and architecture approach, so that I can assess whether CogStack has the expertise for our project.

*Example:* User views the stack diagram showing Memory Fabric → Cognitive Systems → Orchestration → Edge layers, with specific technologies listed (Neo4j, Qdrant, LangChain, etc.).

**US-3: Learn About the Team**
> As a decision-maker, I want to know who is behind CogStack, so that I can assess the team's background and credibility.

*Example:* User navigates to About page, reads founder bio highlighting DevOps→AI evolution and 33+ integrated services in production.

**US-4: Make Contact**
> As an interested prospect, I want to easily contact CogStack, so that I can discuss my project requirements.

*Example:* User fills out contact form with name, email, company (optional), and message. Form validates input and confirms submission.

**US-5: Mobile Access**
> As a mobile user, I want to browse the website on my phone, so that I can review CogStack while traveling or in meetings.

*Example:* User opens site on mobile, sees responsive layout, can navigate via hamburger menu, and submit contact form.

### Technical User Stories

**US-6: Fast Loading**
> As a user in South Africa, I want the website to load quickly even on slower connections, so that I don't abandon the site waiting for content.

*Acceptance:* Initial load <2s on 4G connection in South Africa.

**US-7: SEO Discovery**
> As a potential client searching for AI infrastructure services, I want the website to appear in search results, so that I can find CogStack when searching.

*Acceptance:* Proper meta titles, descriptions, and semantic HTML on all pages.

---

## 6. Core Architecture & Patterns

### High-Level Architecture

```
┌─────────────────────────────────────────────────────────┐
│                    Cloudflare Pages                      │
│                   (Static Hosting + CDN)                 │
├─────────────────────────────────────────────────────────┤
│                     Next.js 14+                          │
│                   (App Router, SSG)                      │
├─────────────────────────────────────────────────────────┤
│  ┌─────────────┐  ┌─────────────┐  ┌─────────────┐     │
│  │   Pages     │  │ Components  │  │    Lib      │     │
│  │  (Routes)   │  │    (UI)     │  │  (Utils)    │     │
│  └─────────────┘  └─────────────┘  └─────────────┘     │
└─────────────────────────────────────────────────────────┘
```

### Directory Structure

```
cogstack-website/
├── src/
│   ├── app/
│   │   ├── layout.tsx              # Root layout with nav/footer
│   │   ├── page.tsx                # Home page
│   │   ├── about/
│   │   │   └── page.tsx            # About page
│   │   ├── contact/
│   │   │   └── page.tsx            # Contact page
│   │   └── globals.css             # Global styles
│   ├── components/
│   │   ├── ui/                     # shadcn/ui components
│   │   ├── layout/
│   │   │   ├── Header.tsx          # Navigation header
│   │   │   └── Footer.tsx          # Site footer
│   │   ├── home/
│   │   │   ├── Hero.tsx            # Hero section
│   │   │   ├── StackDiagram.tsx    # 4-layer architecture
│   │   │   ├── WhatWeBuild.tsx     # Services cards
│   │   │   └── TechStack.tsx       # Technology badges
│   │   ├── about/
│   │   │   ├── Founder.tsx         # Founder bio section
│   │   │   └── Approach.tsx        # Company approach
│   │   └── contact/
│   │       └── ContactForm.tsx     # Contact form component
│   └── lib/
│       ├── utils.ts                # Utility functions (cn)
│       └── validations.ts          # Zod schemas
├── public/
│   ├── logos/                      # Technology logos
│   └── images/                     # Site images
├── package.json
├── tsconfig.json
├── tailwind.config.ts
├── next.config.js
└── components.json                 # shadcn/ui config
```

### Design Patterns

**Component Organization:**
- Feature-based grouping under `components/` (home, about, contact)
- Shared UI components in `components/ui/` (shadcn)
- Layout components in `components/layout/`

**Styling Approach:**
- Tailwind CSS utility classes
- CSS variables for theme colors in `globals.css`
- `cn()` utility for conditional class merging

**Form Handling:**
- React Hook Form for form state management
- Zod for schema validation
- Controlled components with proper error display

**Static Generation:**
- All pages statically generated at build time
- No server-side runtime required
- Optimal for Cloudflare Pages deployment

---

## 7. Features

### F1: Navigation Header

**Purpose:** Provide consistent site navigation across all pages.

**Requirements:**
- Logo/brand name linking to home
- Navigation links: Home, About, Contact
- Active page highlighting
- Mobile: Hamburger menu with slide-out drawer
- Sticky positioning on scroll

**Key Features:**
- Responsive breakpoints (mobile < 768px)
- Smooth transitions on mobile menu
- Accessible keyboard navigation

### F2: Hero Section

**Purpose:** Immediately communicate CogStack's value proposition.

**Requirements:**
- Headline: "The Full Stack for AI Intelligence"
- Subheadline: Value proposition text
- Primary CTA: "Get in Touch" → Contact page
- Secondary CTA: "View Our Work" → Scroll to stack section
- Background: Subtle gradient or mesh pattern (deep blue theme)

**Visual Design:**
- Full viewport height on desktop
- Text centered or left-aligned
- Deep blue (#1e3a8a) primary, electric blue (#3b82f6) accents

### F3: Stack Diagram

**Purpose:** Visually communicate the 4-layer cognitive architecture.

**Requirements:**
- Display 4 layers with icons and labels:
  1. Edge & Routing (Cloudflare, Caddy)
  2. Orchestration (Kubernetes, Docker)
  3. Cognitive Systems (LangChain, n8n, Flowise)
  4. Memory Fabric (Supabase, Qdrant, Neo4j, ClickHouse)
- Hover states showing layer descriptions
- Mobile-friendly stacked layout

**MVP Implementation:**
- Static diagram with CSS hover effects
- No complex animations (deferred to post-MVP)

### F4: What We Build Section

**Purpose:** Summarize core service offerings.

**Requirements:**
- Three cards:
  1. AI Infrastructure - Multi-database cognitive architectures
  2. MCP Servers - Custom integrations
  3. Full Platform - End-to-end AI transformation
- Each card: Icon, title, brief description
- Visual consistency with brand colors

### F5: Technology Stack Display

**Purpose:** Show breadth of technical expertise.

**Requirements:**
- Grid of technology logos/badges
- Technologies: Neo4j, ClickHouse, Qdrant, Supabase, Docker, Kubernetes, LangChain, n8n
- Caption: "33+ integrated services in production"
- Link to GitHub: mindset-dev

### F6: Founder Bio Section

**Purpose:** Establish credibility through founder background.

**Requirements:**
- Name: Charles Vosloo
- Title: Founder & Lead Engineer
- Bio highlighting:
  - DevOps → AI Infrastructure evolution
  - 33+ services in production
  - South African focus
- Optional: Photo placeholder

### F7: Company Approach Section

**Purpose:** Communicate differentiating principles.

**Requirements:**
- Three principles:
  1. Production-grade (no prototypes)
  2. Self-hosted option (data sovereignty)
  3. Full-stack integration (not point solutions)
- GitHub link: mindset-dev

### F8: Contact Form

**Purpose:** Enable prospect inquiries.

**Requirements:**
- Fields:
  - Name (required)
  - Email (required, validated)
  - Company (optional)
  - Message (required, min 10 chars)
- Validation with clear error messages
- Submit button with loading state
- Success/error feedback
- Form data: Log to console (MVP), email integration (post-MVP)

**Technical:**
- React Hook Form for state
- Zod schema for validation
- Accessible form labels and error announcements

### F9: Footer

**Purpose:** Provide secondary navigation and contact info.

**Requirements:**
- Contact email: charles@cogstack.co.za
- Location: Johannesburg, South Africa
- GitHub link: mindset-dev
- Copyright notice
- Navigation links (optional)

---

## 8. Technology Stack

### Core Framework
| Technology | Version | Purpose |
|------------|---------|---------|
| Next.js | 14.2+ | React framework with App Router |
| React | 18+ | UI library |
| TypeScript | 5+ | Type safety |

### Styling & UI
| Technology | Version | Purpose |
|------------|---------|---------|
| Tailwind CSS | 3.4+ | Utility-first CSS |
| shadcn/ui | Latest | Component library |
| Lucide React | Latest | Icon library |

### Forms & Validation
| Technology | Version | Purpose |
|------------|---------|---------|
| React Hook Form | 7+ | Form state management |
| Zod | 3+ | Schema validation |
| @hookform/resolvers | Latest | Zod integration |

### Development
| Technology | Version | Purpose |
|------------|---------|---------|
| ESLint | 8+ | Code linting |
| Prettier | 3+ | Code formatting |

### Deployment
| Technology | Purpose |
|------------|---------|
| Cloudflare Pages | Static hosting with global CDN |
| Wrangler CLI | Deployment tool |

### Post-MVP Dependencies
| Technology | Purpose |
|------------|---------|
| Framer Motion | Animations |
| Resend | Email API |
| next-sitemap | Sitemap generation |

---

## 9. Security & Configuration

### Authentication
- No authentication required (public marketing site)
- Contact form: No authentication, basic spam considerations

### Configuration

**Environment Variables:**
```
NEXT_PUBLIC_SITE_URL=https://cogstack.co.za
CONTACT_EMAIL=charles@cogstack.co.za
```

**Build-time Configuration:**
- `next.config.js` for Next.js settings
- `tailwind.config.ts` for theme customization
- `components.json` for shadcn/ui

### Security Scope

**In Scope:**
- ✅ HTTPS via Cloudflare (automatic)
- ✅ Form validation (client-side)
- ✅ Content Security Policy headers (Cloudflare)
- ✅ No sensitive data storage

**Out of Scope:**
- ❌ Server-side form validation (no server runtime)
- ❌ Rate limiting (consider for post-MVP)
- ❌ CAPTCHA (consider for post-MVP)

### Deployment

**Cloudflare Pages Configuration:**
- Build command: `npm run build`
- Output directory: `out/` (static export)
- Node.js version: 18+

---

## 10. API Specification

### MVP: No Backend API

The MVP uses static generation with no server-side API. The contact form will:
1. Validate client-side with Zod
2. Log submission to console (development)
3. Display success message

### Post-MVP: Contact Form Endpoint

**Option A: Cloudflare Workers**
```
POST /api/contact
Content-Type: application/json

{
  "name": "string",
  "email": "string",
  "company": "string | null",
  "message": "string"
}

Response 200:
{
  "success": true,
  "message": "Thank you for your message"
}

Response 400:
{
  "success": false,
  "errors": [...]
}
```

**Option B: Resend API (Direct)**
- Client-side call to Resend API
- Requires API key (environment variable)

---

## 11. Success Criteria

### MVP Success Definition
The MVP is successful when:
1. Website is live at cogstack.co.za
2. All three pages (Home, About, Contact) are functional
3. Contact form submits without errors
4. Site loads in <2s on 4G in South Africa
5. Site is fully responsive on mobile devices

### Functional Requirements

**Must Have:**
- ✅ Home page displays hero and stack diagram
- ✅ About page displays founder info and approach
- ✅ Contact form validates and shows success state
- ✅ Navigation works on all pages
- ✅ Mobile hamburger menu functions correctly
- ✅ All links work (no 404s)

**Quality Indicators:**
- ✅ Lighthouse Performance score > 90
- ✅ Lighthouse Accessibility score > 90
- ✅ No TypeScript errors
- ✅ No console errors in production
- ✅ Consistent styling across pages

### User Experience Goals
- Clear value proposition visible within 5 seconds
- Contact form completable in <1 minute
- No confusion about navigation
- Professional, trustworthy appearance

---

## 12. Implementation Phases

### Phase 1: Project Setup (Day 1 - Morning)

**Goal:** Initialize project with all tooling configured.

**Deliverables:**
- ✅ Next.js 14+ project with TypeScript
- ✅ Tailwind CSS configured with brand colors
- ✅ shadcn/ui initialized with required components
- ✅ Project structure created
- ✅ ESLint and Prettier configured

**Validation:**
- `npm run dev` starts without errors
- `npm run build` completes successfully
- Brand colors visible in Tailwind config

### Phase 2: Core Pages (Day 1 - Afternoon to Day 2)

**Goal:** Build all three MVP pages with content.

**Deliverables:**
- ✅ Layout component with Header and Footer
- ✅ Home page with Hero, StackDiagram, WhatWeBuild, TechStack
- ✅ About page with Founder and Approach sections
- ✅ Contact page with ContactForm

**Validation:**
- All pages render without errors
- Navigation between pages works
- Responsive on mobile and desktop
- Content matches brand guidelines

### Phase 3: Contact Form (Day 2)

**Goal:** Functional contact form with validation.

**Deliverables:**
- ✅ ContactForm component with all fields
- ✅ Zod validation schema
- ✅ React Hook Form integration
- ✅ Error display for invalid fields
- ✅ Success state after submission

**Validation:**
- Form rejects invalid email
- Form requires name and message
- Success message displays after valid submission
- Form is accessible (labels, error announcements)

### Phase 4: Deployment (Day 2-3)

**Goal:** Site live at cogstack.co.za.

**Deliverables:**
- ✅ Static export configured in Next.js
- ✅ Cloudflare Pages project created
- ✅ Domain connected (cogstack.co.za)
- ✅ SSL/HTTPS working
- ✅ Email routing configured (charles@cogstack.co.za)

**Validation:**
- Site accessible at https://cogstack.co.za
- All pages load correctly in production
- Contact form works in production
- Mobile testing on real device

---

## 13. Future Considerations

### Post-MVP Enhancements (Phase 2)

**Additional Pages:**
- Services page with detailed offerings and pricing
- Technology page with interactive stack explorer
- Blog/Insights section for thought leadership

**Enhanced Features:**
- Framer Motion animations for stack diagram
- Technology grid with category filtering
- Calendly integration for booking calls
- GitHub API showing recent activity

**Technical Improvements:**
- Cloudflare Web Analytics integration
- Open Graph images for social sharing
- JSON-LD structured data
- Automated sitemap generation
- Email notifications via Resend

### Long-term Roadmap (Phase 3+)

**Content:**
- Case studies with client approval
- Video explainers and demos
- Client testimonials

**Functionality:**
- Blog with MDX support
- RSS feed
- Newsletter signup
- Multi-language support (Afrikaans)

---

## 14. Risks & Mitigations

### Risk 1: Cloudflare Pages Deployment Issues
**Impact:** High - Site cannot go live
**Probability:** Low
**Mitigation:**
- Test deployment early in Phase 1
- Have Vercel as backup hosting option
- Document deployment steps clearly

### Risk 2: Contact Form Spam
**Impact:** Medium - Inbox flooded with spam
**Probability:** Medium (post-launch)
**Mitigation:**
- MVP: Accept risk, monitor manually
- Post-MVP: Add honeypot field or CAPTCHA
- Consider Cloudflare Turnstile (free)

### Risk 3: Slow Load Times in SA
**Impact:** High - Users abandon site
**Probability:** Low (Cloudflare CDN helps)
**Mitigation:**
- Optimize images with Next.js Image
- Minimize JavaScript bundle size
- Use static generation (no server latency)
- Test from SA network conditions

### Risk 4: Mobile Experience Issues
**Impact:** Medium - Poor impression on mobile users
**Probability:** Medium
**Mitigation:**
- Mobile-first development approach
- Test on real devices, not just DevTools
- Use responsive shadcn/ui components

### Risk 5: Scope Creep
**Impact:** Medium - MVP delayed
**Probability:** High
**Mitigation:**
- Strict MVP scope defined above
- Defer all "nice to have" to Phase 2
- Time-box each phase

---

## 15. Appendix

### A. Brand Colors

```css
:root {
  --color-primary: #1e3a8a;      /* Deep blue - trust */
  --color-accent: #3b82f6;       /* Electric blue - innovation */
  --color-background: #ffffff;   /* White */
  --color-foreground: #0f172a;   /* Slate 900 - text */
  --color-muted: #64748b;        /* Slate 500 - secondary text */
}
```

### B. Typography

- **Font Family:** Inter (Google Fonts)
- **Headings:** Bold (700)
- **Body:** Regular (400)
- **Scale:** Tailwind defaults

### C. Key Links

| Resource | URL |
|----------|-----|
| GitHub (mindset-dev) | https://github.com/mindset-dev |
| Infrastructure Repo | https://github.com/mindset-dev/ai-infra-hostinger |
| Domain Registrar | Xneelo |
| Hosting | Cloudflare Pages |
| Website Repo | https://github.com/CognitiveStack/cogstack-website |

### D. Contact Information

```
Charles Vosloo
Founder & Lead Engineer
CogStack (Cognitive Stack Pty Ltd)
Email: charles@cogstack.co.za
Location: Johannesburg, South Africa
```

### E. Content Snippets

**Tagline:**
> "The Full Stack for AI Intelligence"

**Value Proposition:**
> "We build production-grade cognitive infrastructure that transforms how South African enterprises deploy AI"

**Differentiator:**
> "We build the infrastructure layer that makes AI actually work in production. While others demo ChatGPT wrappers, we architect multi-database cognitive systems that handle real enterprise complexity."

---

*Document Version: 1.0*
*Created: January 2025*
*Status: Ready for Implementation*
