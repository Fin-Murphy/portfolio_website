# portfolio

Source for my personal site

Live: finnian-murphy.me

## Stack

- **Next.js 16** (App Router) + **React 19**
- **TypeScript** (strict)
- **Tailwind CSS v4** — v4 single-import setup with `@theme inline` tokens in `app/globals.css`; no `tailwind.config.*` file
- **Geist Mono** via `next/font/google` (the whole site is monospace by design)
- Deployed on **Vercel**

## Notable bits

- `app/lib/waveField.ts` — pure function that renders a grid of density characters from summed sine waves plus a cursor-halo term.
- `app/hooks/useAnimationFrame.ts` — `requestAnimationFrame` loop throttled to a target fps

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

## License

No license — code is here to read, not to reuse. If you want to use a piece of it, ask.
