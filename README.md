# Prajwal Ravi Devadiga — Portfolio

A personal portfolio site built with Next.js, Tailwind CSS, and Framer Motion.

## Stack
- Next.js 16 (App Router, TypeScript)
- Tailwind CSS v4
- Framer Motion (scroll-reveal animations, page transitions, animated nav)
- lucide-react (icons)

## Content
All personal content (name, experience, projects, skills, certifications) lives in
`src/lib/data.ts` — edit that one file to update the site.

The profile uses verified GitHub and LinkedIn links. The selected-work section links directly to repositories and describes research limitations and starter provenance.

## Interaction design
- Pointer-responsive orbital hero and project cards (mouse only).
- Animated orbital paths, scan sweep and search-data bars.
- Scroll progress, section reveals and an active navigation indicator.
- Responsive layouts, keyboard focus, skip link and reduced-motion support.
- CSS/SVG-style artwork; no additional runtime dependencies or large media downloads.

## Local development

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Build

```bash
npm run build
npm start
```

## Deploy to Vercel

### Option A — Vercel CLI (fastest)
```bash
npm i -g vercel
vercel login
vercel        # deploys a preview
vercel --prod # deploys to production
```

### Option B — GitHub + Vercel dashboard
1. Push this project to a new GitHub repo.
2. Go to https://vercel.com/new and import the repo.
3. Framework preset "Next.js" is auto-detected — no config needed.
4. Click Deploy.

Every push to `main` will auto-deploy after that.
