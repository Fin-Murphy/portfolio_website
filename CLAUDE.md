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
- TypeScript (strict), `@/*` path alias maps to repo root (so imports look like `@/app/lib/waveField`)
- Tailwind CSS **v4** via `@tailwindcss/postcss`. Styles use the v4 single-import form (`@import "tailwindcss";`) and the `@theme inline { ... }` block in `app/globals.css` to expose CSS variables as Tailwind tokens — do not reintroduce v3-style `tailwind.config` files or `@tailwind base/components/utilities` directives.

## Architecture

App Router layout under `app/`:

- `app/layout.tsx` — root layout. Loads **Geist Mono** via `next/font/google` as the `--font-geist-mono` CSS variable; `globals.css` then maps *both* `--font-sans` and `--font-mono` to it, so the whole site is monospace. Renders `<AsciiBackground />` then `<TopBar />` above `{children}`. `<html>`/`<body>` are a flex column (`min-h-full flex flex-col`) so pages stretch with `flex-1`.
- `app/globals.css` — Tailwind v4 entry + theme tokens (`--background`, `--foreground`, the font vars) + dark-mode handling via `prefers-color-scheme`. Dark mode is OS-preference-driven plus `dark:` Tailwind variants — there is no theme toggle or `ThemeProvider`.
- Routes: `app/page.tsx` (home — name + about list with social links, data in module-level `NAME`/`ABOUT` consts), `app/projects/page.tsx`, `app/art/page.tsx`. The latter two are currently placeholder stubs.
- `app/components/` — `TopBar.tsx` (nav, link list in a `LINKS` const) and `AsciiBackground.tsx`.
- `app/hooks/useAnimationFrame.ts` — `requestAnimationFrame` loop throttled to a target fps, accumulating elapsed time from clamped per-frame deltas (survives backgrounded tabs); reads its callback from a ref each render so the loop never restarts. Intentionally does **not** honor `prefers-reduced-motion` — gate on that at the call site.
- `app/lib/waveField.ts` — `waveField(timeMs, ctx)`: a pure function rendering a grid of density characters from summed sine waves plus a cursor-halo term. Pure ⇒ `waveField(0, …)` is a stable first frame safe for SSR.

### ASCII background subsystem

`AsciiBackground` is a fixed, `pointer-events-none`, `-z-10` full-viewport layer behind all content. It measures one monospace character cell from an invisible probe `<span>`, sizes a `cols × rows` grid to the window, tracks the pointer in cell coordinates, and on each `useAnimationFrame` tick sets `<pre>.textContent` to `waveField(...)`. It paints one static frame immediately on mount/resize so there's no blank flash and so reduced-motion users still see something. When touching it: visuals (the character ramp, wave frequencies, halo falloff) live in `waveField.ts`; timing/lifecycle lives in `useAnimationFrame.ts`; DOM/measurement/pointer plumbing lives in `AsciiBackground.tsx`.
