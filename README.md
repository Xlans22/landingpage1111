# Flamingo Emerging Technologies — Technical Landing Page

Enterprise technical landing page and digital architecture for **Flamingo Emerging Technologies - L.L.C - S.P.C**, showcasing deterministic AI orchestration, human-in-the-loop (HITL) workflows, proprietary B2B R&D engines, and licensed systems engineering capabilities.

---

## Architecture & Technology Stack

- **Framework:** [Next.js 15](https://nextjs.org/) (App Router, Static Export ready)
- **Library:** [React 19](https://react.dev/) + TypeScript
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com/) + CSS Design Tokens
- **Typography:** Nacelle (Display typography) + Inter (Body) + Monospace (Telemetry HUD)
- **Motion:** [AOS](https://michalsnik.github.io/aos/) (Animate on Scroll)
- **Deployment:** Static HTML/CSS/JS export (`out/` directory), compatible with GitHub Pages, Cloudflare Pages, Vercel, AWS S3, or Nginx.

---

## Content & Section Mapping (1:1 with `landing_page_copy.md`)

| Section Anchor | Component | Description |
| :--- | :--- | :--- |
| `[NAVBAR]` | `components/ui/header.tsx` | Sticky glassmorphic navigation with brand title and quick routes |
| `#hero` | `components/hero-home.tsx` | Clean enterprise headline, mission-critical advisory sub-headline, and CTAs |
| `#capabilities` | `components/capabilities.tsx` | **Engineering Disciplines** 3-card spotlight grid detailing licensed activities, engineering scope, and implementations |
| `#products` | `components/proprietary-rd.tsx` | **Proprietary Engines** Enterprise Workflow Engines: **Flamingo DocuVerify Engine™** and **Flamingo SynapseSearch™** with spotlight hover cards |
| `#governance` | `components/governance.tsx` | **Governance & Compliance** The 3 Immutable Design Laws in spotlight cards (Advisory Sandboxing, Mandatory Operator Sign-Off, Deterministic Guardrails) |
| `#contact` | `components/cta.tsx` & `components/ui/footer.tsx` | Technical Briefing intake actions with native spotlight card, commercial license registration, licensed activities list, headquarters, and copyright notice |

---

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18.18.0 or newer; v20+ recommended)
- `npm` or `pnpm`

### Installation

Clone the repository and install dependencies:

```bash
# Using npm
npm install

# Or using pnpm
pnpm install
```

### Local Development

Start the development server with Turbopack:

```bash
# Using npm
npm run dev

# Or using pnpm
pnpm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## Production Build & Static Export

The project is configured with `output: 'export'` in `next.config.js`. Running the build script generates an optimized, zero-server-dependency static bundle inside the `out/` folder:

```bash
# Build production bundle and export static HTML
npm run build
# (or pnpm run build)
```

The resulting files in `out/` can be served directly from any web server or static CDN.

---

## GitHub Pages Deployment

1. **Option A: GitHub Actions (Recommended)**
   - Go to your repository settings: **Settings > Pages > Build and deployment**.
   - Under **Source**, select **GitHub Actions**.
   - Next.js will automatically detect and deploy the static `out` artifact on push to `main`.

2. **Option B: Manual `gh-pages` Branch**
   ```bash
   npm run build
   npx gh-pages -d out
   ```

---

## Legal & Compliance Registration

- **Trade Name:** `FLAMINGO EMERGING TECHNOLOGIES - L.L.C - S.P.C`
- **Commercial License / Registration No:** `101-2024-200009262`
- **Jurisdiction & Headquarters:** Mussafah M-11, Abu Dhabi, United Arab Emirates
- **Inquiries & Technical Intake:** `info@flamingo-technology.com`
- **Compliance Certification:** All automated workflows operate under strict Human-In-The-Loop (HITL) advisory standards.
- **Copyright:** `© 2026 FLAMINGO EMERGING TECHNOLOGIES - L.L.C - S.P.C. All rights reserved.`
