# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

Personal portfolio site for Abhijith Aravind (CS undergrad, AI/ML & data science). Single-page marketing site built with Next.js App Router, statically prerendered. There is no backend, database, or API — all content is static.

## Commands

```bash
npm run dev      # dev server at http://localhost:3000
npm run build    # production build (also runs lint + type check)
npm run start    # serve the production build
npm run lint     # ESLint (next/core-web-vitals)
npx tsc --noEmit # standalone type check
```

There is no test suite. `npm run build` is the gate that catches type and lint errors.

## Architecture

Multi-page, fully static (every route is prerendered). Content is decoupled from presentation:

- **`src/data/projects.ts`** holds every project as a case study (problem, pipeline steps, engineering decisions, limits, metrics, screenshots, links). To add a project, add an entry here; its card on `/` and `/work` and its page at `/work/[slug]` are generated automatically. Facts and numbers must be verifiable in that project's GitHub README; don't invent roadmap items. `featured: true` puts a project in the large blocks on the home page.
- **`src/data/content.ts`** holds everything else: profile, hero proof stats, experience, skills, education, achievements, links, nav items.
- **Routes:** `src/app/page.tsx` (home overview: Hero, Work, Experience, Skills, About), `src/app/work/page.tsx` (all projects with category filters), `src/app/work/[slug]/page.tsx` (case study, `generateStaticParams` + `dynamicParams = false`).
- **Components:** `NavBar` (client; rendered once in `layout.tsx`, highlights the section on `/` and Work on `/work/*`), `WorkGrid` (client; filter state), `ProjectCard`, `Cover` (generated SVG cover art per project `motif`, used when a project has no real screenshot), `SiteFooter` (contact CTA + footer), `ui.tsx` (arrows, external link, section heading).
- Home-page section `id`s (`work`, `experience`, `skills`, `about`, `contact`) are referenced by `navItems` and `NavBar`; keep them in sync.
- **Résumé sync:** experience, skills, education, achievements, project names (`name` + `subtitle`, the text either side of the dash in the résumé/LinkedIn title) and headline numbers mirror the latest résumé in `LATEST/`. Each project has a `resumeGroup`, and the display order in `projects.ts` follows the résumé. When the résumé changes, update these to match; when a repo README is stale (e.g. DriveAnalytics), verify against the repo code, not the README.
- Screenshots live in `public/work/`. Only use real screenshots of the product (not AI-generated promo art); otherwise leave `shots` empty and the `Cover` motif is used.

## Styling

Tailwind, editorial theme: warm paper background, near-black ink, orange accent, dark `night` bands for Experience/Contact. Fonts: Geist (sans), Geist Mono, Instrument Serif (italic accent words). Design tokens live in `tailwind.config.ts` (custom colors `ink`, `accent`, `paper`, `night`); project screenshots are in `public/work/` and reusable component classes (`.container-content`, `.section`, `.section-head`, `.section-label`, `.section-title`, `.chip`, `.tag`, `.btn-*`, `.link-arrow`) are defined with `@layer components` in `src/app/globals.css`. Prefer these tokens/classes over ad-hoc hex values to keep the look consistent.

## Content sourcing & privacy

- Project entries in `content.ts` mirror the public GitHub repos at https://github.com/abi1010-git. When adding a project, keep the `href` pointing at the real repo. Keep the Experience "Independent Technical Projects" bullets in sync with these repos.
- **Do not add personal contact details (home address, phone number, personal email) anywhere in the site or repo.** These were deliberately removed. Contact is intentionally routed through LinkedIn / GitHub only.
- **The résumé is intentionally NOT part of the site** — there is no download link and the PDF is not in `public/` (the latest master copy lives in `LATEST/` (gitignored) and is shared separately. That copy is NOT redacted, so never publish it or copy its contact block). Do not re-add a résumé link or move the PDF into `public/` without being asked. The PDF is a redacted copy (address/phone/email removed); if it's ever regenerated, re-verify that block is gone.

## Deploy

Static output — deploys cleanly to Vercel (zero config) or any static host via `npm run build`.
