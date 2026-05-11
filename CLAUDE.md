# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

@AGENTS.md

This is a Next.js application linked to a Vercel account and deployed as a Software Engineer portfolio website.

## Commands

- `npm run dev` — start the dev server (http://localhost:3000)
- `npm run build` — production build
- `npm run start` — serve the production build
- `npm run lint` — run ESLint (`eslint-config-next` flat config: core-web-vitals + typescript)

There is no test runner configured.

## Stack & versions

- Next.js **16.2.6** (App Router) — see `AGENTS.md`: APIs and conventions have breaking changes vs. older Next.js; consult `node_modules/next/dist/docs/` before writing framework code.
- React **19.2.4**
- TypeScript (strict), `@/*` path alias maps to repo root
- Tailwind CSS **v4** via `@tailwindcss/postcss`. Styles use the v4 single-import form (`@import "tailwindcss";`) and the `@theme inline { ... }` block in `app/globals.css` to expose CSS variables as Tailwind tokens — do not reintroduce v3-style `tailwind.config` files or `@tailwind base/components/utilities` directives.

## Architecture

App Router layout under `app/`:

- `app/layout.tsx` — root layout. Loads Geist Sans/Mono via `next/font/google` and exposes them as the `--font-geist-sans` / `--font-geist-mono` CSS variables consumed by the `@theme` block in `globals.css`. Sets `<html>`/`<body>` to a flex column so pages can stretch with `flex-1`.
- `app/page.tsx` — home route.
- `app/globals.css` — Tailwind v4 entry + theme token definitions + dark-mode handling via `prefers-color-scheme`.
- `app/components/` — shared components (currently empty).
- `public/` — static assets served from `/`.

Dark mode is driven by the OS preference (`prefers-color-scheme: dark`) plus `dark:` Tailwind variants — there is no theme toggle or `ThemeProvider`.
