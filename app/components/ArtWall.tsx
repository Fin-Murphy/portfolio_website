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

export default function ArtWall({ images }: { images: string[] }) {
  const [tiles, setTiles] = useState<string[]>(images);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    setTiles(shuffle(images));
    const t = setTimeout(() => setReady(true), 3700);
    return () => clearTimeout(t);
  }, [images]);

  return (
    <>
      {!ready && (
        <div className="fixed inset-0 z-30 flex items-center justify-center">
          <div className="rounded-3xl bg-zinc-100 p-6 shadow-lg dark:bg-zinc-900">
            <video
              src="/loader.mp4"
              autoPlay
              muted
              playsInline
              preload="auto"
              // @ts-expect-error fetchPriority is valid HTML but not in React types yet
              fetchpriority="high"
              className="h-[480px] w-[480px] rounded-2xl object-cover"
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
              fetchPriority="low"
              className="block h-auto w-full rounded-xl"
            />
          </div>
        ))}
      </div>
    </>
  );
}
