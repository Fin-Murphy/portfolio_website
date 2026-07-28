"use client";

import { useEffect, useState } from "react";

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

const LOADER_MS = 4200;

// Mirrors Tailwind's default sm/md/lg breakpoints.
function columnCount(width: number): number {
  if (width >= 1024) return 5;
  if (width >= 768) return 4;
  if (width >= 640) return 3;
  return 2;
}

function preloadImage(src: string): Promise<void> {
  return new Promise((resolve) => {
    const img = new Image();
    img.onload = () => resolve();
    img.onerror = () => resolve();
    img.src = src;
  });
}

export default function ArtWall({ images }: { images: string[] }) {
  const [tiles, setTiles] = useState<string[]>(images);
  // Tiles only render once their image is fully cached, so nothing ever
  // paints half-loaded; they appear top-down as the sequential preload runs.
  // They are dealt round-robin into fixed flex columns rather than CSS
  // `columns`, which re-balances (and visibly shifts) every tile on append.
  const [loadedCount, setLoadedCount] = useState(0);
  const [ready, setReady] = useState(false);
  const [cols, setCols] = useState(2);

  useEffect(() => {
    const shuffled = shuffle(images);
    setTiles(shuffled);
    setLoadedCount(0);

    let cancelled = false;
    (async () => {
      for (let i = 0; i < shuffled.length; i++) {
        await preloadImage(`/graphic/${encodeURIComponent(shuffled[i])}`);
        if (cancelled) return;
        setLoadedCount(i + 1);
      }
    })();

    const t = setTimeout(() => setReady(true), LOADER_MS);
    return () => {
      cancelled = true;
      clearTimeout(t);
    };
  }, [images]);

  useEffect(() => {
    const update = () => setCols(columnCount(window.innerWidth));
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  return (
    <>
      {!ready && (
        <div className="pointer-events-none fixed inset-0 z-30 flex items-center justify-center">
          <div className="rounded-3xl bg-zinc-100 p-4 shadow-lg sm:p-6 dark:bg-zinc-900">
            <video
              src="/loader.mp4"
              autoPlay
              muted
              playsInline
              preload="auto"
              // @ts-expect-error fetchPriority is valid HTML but not in React types yet
              fetchpriority="high"
              className="aspect-square w-[min(70vw,70vh,480px)] rounded-2xl object-cover"
            />
          </div>
        </div>
      )}
      <div
        className={`flex gap-6 px-12 transition-opacity duration-300 ease-out ${
          ready ? "opacity-100" : "opacity-0"
        }`}
      >
        {Array.from({ length: cols }, (_, c) => (
          <div key={c} className="flex min-w-0 flex-1 flex-col gap-6">
            {tiles
              .slice(0, loadedCount)
              .filter((_, i) => i % cols === c)
              .map((file) => (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  key={file}
                  src={`/graphic/${encodeURIComponent(file)}`}
                  alt=""
                  className="block h-auto w-full rounded-xl"
                />
              ))}
          </div>
        ))}
      </div>
    </>
  );
}
