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

The site is intentionally simple — content is fully decoupled from presentation:

- **`src/data/content.ts`** is the single source of truth for everything shown on the page: profile, skills, projects, Kaggle achievements, experience, education, chess ratings, links, and the nav items. **To change site content, edit this file — not the components.** Sections in `page.tsx` map 1:1 to exports here.
- **`src/app/page.tsx`** is a Server Component that composes the whole page. Each section (Hero, About, Skills, Projects, Kaggle, Experience, Education, Contact, Footer) is a small local function component in this one file, driven by the data module. Section `id`s must stay in sync with `navItems` hrefs in `content.ts`.
- **`src/components/NavBar.tsx`** is the only Client Component (`"use client"`) — it needs scroll state and a mobile menu toggle.
- **`src/app/layout.tsx`** sets fonts (Inter for sans, JetBrains Mono for mono via `next/font`) and page metadata from `profile`.

## Styling

Tailwind, light/minimal theme. Design tokens live in `tailwind.config.ts` (custom colors `ink`, `accent`, `paper`) and reusable component classes (`.container-content`, `.section`, `.section-label`, `.section-title`, `.chip`, `.card`) are defined with `@layer components` in `src/app/globals.css`. Prefer these tokens/classes over ad-hoc hex values to keep the look consistent.

## Content sourcing & privacy

- Project entries in `content.ts` mirror the public GitHub repos at https://github.com/abi1010-git. When adding a project, keep the `href` pointing at the real repo. Keep the Experience "Independent Technical Projects" bullets in sync with these repos.
- **Do not add personal contact details (home address, phone number, personal email) anywhere in the site or repo.** These were deliberately removed. Contact is intentionally routed through LinkedIn / GitHub only.
- **The résumé is intentionally NOT part of the site** — there is no download link and the PDF is not in `public/` (it lives at the repo root, `Abhijith_Aravind_Resume_2026.pdf`, and is shared separately). Do not re-add a résumé link or move the PDF into `public/` without being asked. The PDF is a redacted copy (address/phone/email removed); if it's ever regenerated, re-verify that block is gone.

## Deploy

Static output — deploys cleanly to Vercel (zero config) or any static host via `npm run build`.
