# Prajwal R D — Portfolio

A personal portfolio site built with Next.js, Tailwind CSS, and Framer Motion.

## Stack
- Next.js 16 (App Router, TypeScript)
- Tailwind CSS v4
- Framer Motion (scroll-reveal animations, page transitions, animated nav)
- lucide-react (icons)

## Content
All personal content (name, experience, projects, skills, certifications) lives in
`src/lib/data.ts` — edit that one file to update the site.

Currently uses placeholder GitHub/LinkedIn URLs (`https://github.com/` and
`https://linkedin.com/`) and a resume note pulled from your resume — update the
`profile` object in `src/lib/data.ts` with your real profile links.

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
