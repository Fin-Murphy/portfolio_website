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

// Roughly one screenful at the widest column count; the wall stays hidden
// until these have loaded, so the reveal never shows half-loaded tiles.
const REVEAL_COUNT = 12;
const MIN_LOADER_MS = 4200;

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
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const shuffled = shuffle(images);
    setTiles(shuffled);

    let cancelled = false;
    const minDelay = new Promise((r) => setTimeout(r, MIN_LOADER_MS));
    const srcOf = (file: string) => `/graphic/${encodeURIComponent(file)}`;

    (async () => {
      for (const file of shuffled.slice(0, REVEAL_COUNT)) {
        if (cancelled) return;
        await preloadImage(srcOf(file));
      }
      await minDelay;
      if (cancelled) return;
      setReady(true);
      for (const file of shuffled.slice(REVEAL_COUNT)) {
        if (cancelled) return;
        await preloadImage(srcOf(file));
      }
    })();

    return () => {
      cancelled = true;
    };
  }, [images]);

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
        className={`columns-2 gap-6 px-12 transition-opacity duration-300 ease-out sm:columns-3 md:columns-4 lg:columns-5 ${
          ready ? "opacity-100" : "opacity-0"
        }`}
      >
        {tiles.map((file) => (
          <div key={file} className="mb-6 break-inside-avoid">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={`/graphic/${encodeURIComponent(file)}`}
              alt=""
              loading="lazy"
              fetchPriority="low"
              className="block h-auto w-full rounded-xl"
            />
          </div>
        ))}
      </div>
    </>
  );
}
