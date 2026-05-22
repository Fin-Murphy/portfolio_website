# portfolio

Source for my personal site — a monospace, dark-by-default portfolio with a live ASCII wave background that responds to the cursor.

Live: finnian-murphy.me

## Stack

- **Next.js 16** (App Router) + **React 19**
- **TypeScript** (strict)
- **Tailwind CSS v4** — v4 single-import setup with `@theme inline` tokens in `app/globals.css`; no `tailwind.config.*` file
- **Geist Mono** via `next/font/google` (the whole site is monospace by design)
- Deployed on **Vercel**

## Notable bits

- `app/lib/waveField.ts` — pure function that renders a grid of density characters from summed sine waves plus a cursor-halo term. Pure ⇒ the first frame is deterministic and SSR-safe.
- `app/hooks/useAnimationFrame.ts` — `requestAnimationFrame` loop throttled to a target fps, accumulating elapsed time from clamped per-frame deltas so backgrounded tabs don't fast-forward on return. Reads its callback from a ref so the loop never restarts on re-render.
- `app/components/AsciiBackground.tsx` — fixed `-z-10` full-viewport layer that measures one monospace cell from an invisible probe span, sizes a `cols × rows` grid to the window, tracks the pointer in cell coordinates, and writes `waveField(...)` output to a `<pre>` on each tick.

The split is intentional: visuals live in `waveField.ts`, timing/lifecycle in `useAnimationFrame.ts`, DOM/measurement/pointer plumbing in `AsciiBackground.tsx`.

## Running locally

```bash
npm install
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000).

```bash
npm run build   # production build
npm run start   # serve the production build
npm run lint    # ESLint (eslint-config-next, flat config)
```

No test runner is configured.

## Layout

```
app/
  layout.tsx              # root layout — loads Geist Mono, renders <AsciiBackground /> + <TopBar />
  page.tsx                # home (name + about list)
  globals.css             # Tailwind v4 entry + theme tokens
  components/             # TopBar, AsciiBackground, ArtWall
  hooks/useAnimationFrame.ts
  lib/waveField.ts
  <route>/page.tsx        # individual sections (projects, art, articles, etc.)
public/
  graphic/                # art / image assets
```

## License

No license — code is here to read, not to reuse. If you want to use a piece of it, ask.
