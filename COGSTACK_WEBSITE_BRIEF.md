# CogStack Website - Project Brief

## Project Overview
Build the marketing/portfolio website for **CogStack** (Cognitive Stack) - an AI Infrastructure Engineering firm specializing in production-grade cognitive systems for enterprises in South Africa.

**Domain:** cogstack.co.za (registered, needs DNS setup)  
**Timeline:** Launch MVP in 2-3 days  
**Tech Stack:** Next.js 14+ (App Router), TypeScript, Tailwind CSS, shadcn/ui  
**Hosting:** Cloudflare Pages (free tier, excellent performance in SA)  
**Email:** Cloudflare Email Routing (free)

---

## Brand Identity

### Company Name
**CogStack** (Cognitive Stack Pty Ltd)

### Tagline
"The Full Stack for AI Intelligence"

### Brand Positioning
Not generic "AI consulting" - we're THE cognitive infrastructure specialists. We build the complete stack (memory fabric, cognitive systems, orchestration) that enables enterprises to deploy AI at scale.

### Visual Identity
- **Primary Color:** Deep blue (#1e3a8a) - technical trust
- **Accent Color:** Electric blue (#3b82f6) - innovation
- **Typography:** Inter (modern, professional)
- **Tone:** Confident, technical, no-nonsense

### Core Architecture Diagram
```
┌─────────────────────────────────────────┐
│         COGNITIVE STACK                 │
│  "The Full Stack for AI Intelligence"  │
├─────────────────────────────────────────┤
│  🌍 Edge & Routing                      │
│  🐳 Orchestration Layer                 │
│  🧠 Cognitive Systems                   │
│  💾 Memory Fabric                       │
└─────────────────────────────────────────┘
```

**Layer Details:**
- 🌍 Edge & Routing: Cloudflare DNS, Caddy Reverse Proxy
- 🐳 Orchestration: Kubernetes KIND, Docker Compose
- 🧠 Cognitive Systems: LangChain, LangGraph, n8n, Flowise
- 💾 Memory Fabric: Supabase, Qdrant (vector), Neo4j (graph), ClickHouse (time-series)

---

## Website Structure

### Pages Required

#### 1. Home Page (`/`)
**Hero Section:**
- Headline: "The Full Stack for AI Intelligence"
- Subheadline: "We build production-grade cognitive infrastructure that transforms how South African enterprises deploy AI"
- CTA: "View Our Work" (scroll to case studies) | "Get in Touch"
- Background: Subtle animated gradient or mesh pattern

**The Stack Section:**
- Visual representation of the 4-layer architecture
- Interactive/animated diagram showing how layers connect
- Brief description of each layer

**What We Build:**
- Three cards:
  1. **AI Infrastructure** - Multi-database cognitive architectures
  2. **MCP Servers** - Custom integrations (Revit, SAGE, custom tools)
  3. **Full Platform** - End-to-end AI transformation

**Case Studies Teaser:**
- "Currently in Development: BIM Intelligence Platform for Construction"
- Brief description of Triviron project (once approved)

**Technology Stack:**
- Grid of logos/badges: Neo4j, ClickHouse, Qdrant, Supabase, Docker, Kubernetes, LangChain, n8n
- Caption: "33+ integrated services in production"

**CTA Section:**
- "Ready to Transform Your Infrastructure?"
- Contact button

#### 2. About Page (`/about`)
**The Founder:**
- Photo (if available)
- "Charles Vosloo - Founder & Lead Engineer"
- Bio focusing on:
  - DevOps → AI Infrastructure evolution
  - Self-hosted comprehensive environment (33+ services)
  - South African focus

**Our Approach:**
- "We don't just implement AI - we architect the foundation"
- Three principles:
  1. Production-grade (no prototypes that fail at scale)
  2. Self-hosted option (data sovereignty)
  3. Full-stack integration (not point solutions)

**Infrastructure Overview:**
- Link to GitHub: https://github.com/mindset-dev
- Visual tour of the architecture
- "See the code: github.com/mindset-dev/ai-infra-hostinger"

#### 3. Services Page (`/services`)

**Core Offerings:**

1. **AI Infrastructure Architecture**
   - Multi-database cognitive systems
   - Vector, graph, time-series, relational integration
   - Production deployment & scaling

2. **MCP Server Development**
   - Custom Model Context Protocol servers
   - Enterprise system integration (Revit, SAGE, ERP)
   - AI-native data access

3. **Cognitive Platform Build**
   - End-to-end AI transformation
   - Workflow automation (n8n, LangGraph)
   - Custom AI agents & assistants

4. **DevOps for AI**
   - Containerized AI deployments
   - Kubernetes orchestration
   - Infrastructure as code

**Pricing Model:**
- Discovery & Architecture: From R50,000
- Platform Development: From R200,000
- Ongoing Support: From R5,000/month
- "Every project includes architecture documentation and knowledge transfer"

#### 4. Technology Page (`/technology`)

**The Cognitive Stack Explained:**

Detailed breakdown of each layer with use cases:

**Memory Fabric:**
- PostgreSQL/Supabase: Structured data, metadata
- Qdrant: Vector embeddings, semantic search
- Neo4j: Relationship graphs, dependency analysis
- ClickHouse: Time-series analytics, real-time dashboards

**Cognitive Systems:**
- LangChain/LangGraph: AI orchestration
- n8n: Workflow automation
- Flowise: Visual AI builders
- Custom MCP servers

**Orchestration:**
- Docker Compose: Development & small deployments
- Kubernetes KIND: Production-grade orchestration
- Caddy: Reverse proxy, SSL automation

**Use Cases by Industry:**
- Construction: BIM intelligence, tender automation
- Professional Services: Document processing, compliance
- Manufacturing: Quality monitoring, predictive maintenance

#### 5. Contact Page (`/contact`)

**Primary Contact:**
```
Charles Vosloo
Founder & Lead Engineer
charles@cogstack.co.za
```

**Based in:** Johannesburg, South Africa

**Contact Form:**
- Name
- Email
- Company (optional)
- Message
- Submit → Email to charles@cogstack.co.za

**Or Book a Call:**
- Calendly integration (if you set it up)
- "30-minute discovery call"

---

## Technical Requirements

### Tech Stack
```json
{
  "framework": "Next.js 14.2+",
  "language": "TypeScript",
  "styling": "Tailwind CSS",
  "ui": "shadcn/ui components",
  "animations": "Framer Motion",
  "forms": "React Hook Form + Zod validation",
  "deployment": "Cloudflare Pages",
  "analytics": "Cloudflare Web Analytics (privacy-friendly)"
}
```

### Project Structure
```
cogstack-website/
├── src/
│   ├── app/
│   │   ├── page.tsx                 # Home
│   │   ├── about/page.tsx
│   │   ├── services/page.tsx
│   │   ├── technology/page.tsx
│   │   ├── contact/page.tsx
│   │   └── layout.tsx
│   ├── components/
│   │   ├── ui/                      # shadcn components
│   │   ├── Stack4LayerDiagram.tsx   # Interactive architecture
│   │   ├── TechnologyGrid.tsx
│   │   └── ContactForm.tsx
│   ├── lib/
│   │   └── utils.ts
│   └── styles/
│       └── globals.css
├── public/
│   ├── architecture-diagram.svg
│   └── logos/
├── package.json
├── tsconfig.json
├── tailwind.config.ts
└── next.config.js
```

### Key Features to Implement

1. **Responsive Navigation**
   - Mobile hamburger menu
   - Smooth scroll to sections
   - Active page highlighting

2. **Interactive Stack Diagram**
   - Hover effects showing layer descriptions
   - Click to expand details
   - Mobile-friendly version

3. **Technology Grid**
   - Logo badges with tooltips
   - Filter by category (Databases, AI, Orchestration)
   - Links to documentation

4. **Contact Form**
   - Email submission using Cloudflare Workers
   - Form validation (Zod)
   - Success/error states
   - Optional: Email notification via Resend API

5. **Performance**
   - Optimize images (Next.js Image)
   - Lazy load components
   - Fast initial load (<2s on 4G in SA)

6. **SEO**
   - Metadata for all pages
   - Open Graph images
   - Structured data (Organization, Person)
   - Sitemap.xml

---

## Content to Include

### Architecture Diagram
Source from GitHub: https://github.com/mindset-dev/ai-infra-hostinger

Convert the Mermaid diagram to interactive React component or high-quality SVG.

### GitHub Integration
- Link prominently to: https://github.com/mindset-dev
- Optional: Display recent commits/repos using GitHub API
- Showcase: ai-infra-hostinger, claude-code-template

### Case Study (After Triviron Approval)
```markdown
## BIM Intelligence Platform
**Client:** South African Construction Company  
**Challenge:** Manual tender analysis taking 40 hours per tender  
**Solution:** AI-powered requirement extraction, compliance checking, and historical learning  
**Results:** 75% time reduction, improved accuracy, faster response times  
**Tech Stack:** Revit MCP Server, Qdrant, Neo4j, ClickHouse, LangChain
```

---

## Development Phases

### Phase 1: MVP (2-3 days)
- [x] Domain registered (cogstack.co.za)
- [ ] DNS configured (Cloudflare)
- [ ] Email forwarding setup (charles@cogstack.co.za)
- [ ] Next.js project initialized
- [ ] Home page with hero + stack diagram
- [ ] About page with founder info
- [ ] Contact page with form
- [ ] Deploy to Cloudflare Pages
- [ ] SSL configured

### Phase 2: Content & Polish (1 week)
- [ ] Services page detailed
- [ ] Technology page with interactive elements
- [ ] Architecture diagram interactive component
- [ ] Technology grid with filters
- [ ] Blog/Insights section (optional)
- [ ] SEO optimization
- [ ] Analytics integration

### Phase 3: Enhancements (Ongoing)
- [ ] Case studies (as projects complete)
- [ ] Client testimonials
- [ ] Blog posts on AI infrastructure
- [ ] Video explainers
- [ ] Calendly booking integration

---

## DNS & Email Setup Instructions

### Cloudflare DNS Configuration
1. Add domain to Cloudflare
2. Update nameservers at Xneelo:
   - Go to Xneelo domain management
   - Change nameservers to Cloudflare's
   - Wait 24-48h for propagation

3. Add DNS records in Cloudflare:
```
   Type: CNAME
   Name: @
   Content: [your-cloudflare-pages-url]
   Proxy: Enabled (orange cloud)
   
   Type: CNAME
   Name: www
   Content: cogstack.co.za
   Proxy: Enabled
```

### Email Routing (Cloudflare)
1. In Cloudflare dashboard → Email Routing
2. Enable Email Routing (free)
3. Add route:
   - From: charles@cogstack.co.za
   - To: [your personal email]
4. Verify DNS records (auto-configured)
5. Test by sending email to charles@cogstack.co.za

---

## Deployment Instructions

### Using Cloudflare Pages
```bash
# Install Wrangler CLI
npm install -g wrangler

# Login to Cloudflare
wrangler login

# Deploy
npm run build
wrangler pages deploy out/
```

### Environment Variables
```
NEXT_PUBLIC_SITE_URL=https://cogstack.co.za
CONTACT_EMAIL=charles@cogstack.co.za
```

---

## Success Criteria

### Must Have (Launch)
- ✅ Fast load time (<2s in SA)
- ✅ Mobile responsive
- ✅ Contact form working
- ✅ Email (charles@cogstack.co.za) forwarding
- ✅ SSL configured
- ✅ Professional design
- ✅ Clear value proposition

### Nice to Have (Post-launch)
- Blog/insights section
- Case study with metrics
- Video introduction
- Client testimonials
- Interactive architecture demo

---

## Brand Voice Guidelines

### Do:
- Be confident and direct
- Use technical terminology accurately
- Show, don't just tell (GitHub, architecture)
- Focus on production readiness
- Emphasize South African presence

### Don't:
- Overpromise or hype
- Use generic "AI will change everything" language
- Claim to do everything for everyone
- Hide technical complexity
- Use too much jargon without explanation

### Example Good Copy:
"We build the infrastructure layer that makes AI actually work in production. While others demo ChatGPT wrappers, we architect multi-database cognitive systems that handle real enterprise complexity."

### Example Bad Copy:
"Revolutionizing business with cutting-edge AI solutions! We leverage next-generation technology to unlock unlimited potential!"

---

## References

- GitHub: https://github.com/mindset-dev
- Infrastructure Repo: https://github.com/mindset-dev/ai-infra-hostinger
- Domain: cogstack.co.za (registered with Xneelo)
- Email: charles@cogstack.co.za (to be configured)

---

## Questions for Client (Charles)

1. Do you have a professional photo for the About page?
2. Should we include pricing on the website, or just "Contact for quote"?
3. Any existing client work that can be showcased (with permission)?
4. Do you want a blog/insights section initially, or add later?
5. Preferred color scheme - stick with deep blue, or explore alternatives?
6. Any specific competitors to differentiate from?
7. Timeline pressure - need live before Triviron meeting, or can launch after?

---

## Next Steps

1. **Immediate (Charles):**
   - Add cogstack.co.za to Cloudflare account
   - Change nameservers at Xneelo
   - Provide any existing brand assets (logos, photos)

2. **Development (Claude Code):**
   - Initialize Next.js project with TypeScript + Tailwind
   - Build homepage with hero and stack visualization
   - Implement responsive navigation
   - Create contact form
   - Set up Cloudflare Pages deployment

3. **Launch (Within 3-5 days):**
   - Deploy MVP to cogstack.co.za
   - Configure email forwarding
   - Test on mobile/desktop
   - SEO metadata
   - Share with stakeholders

**Let's build this! 🚀**



