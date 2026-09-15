"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

type ArtImage = { src: string; width: number; height: number };

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

const LOADER_MS = 2000;

// Mirrors Tailwind's default sm/md/lg breakpoints.
function columnCount(width: number): number {
  if (width >= 1024) return 5;
  if (width >= 768) return 4;
  if (width >= 640) return 3;
  return 2;
}

function Tile({ image }: { image: ArtImage }) {
  const [loaded, setLoaded] = useState(false);
  return (
    <Image
      src={image.src}
      width={image.width}
      height={image.height}
      // Mirrors columnCount() so the browser fetches a ~column-width file.
      sizes="(min-width: 1024px) 20vw, (min-width: 768px) 25vw, (min-width: 640px) 33vw, 50vw"
      alt=""
      onLoad={() => setLoaded(true)}
      className={`block h-auto w-full rounded-xl transition-opacity duration-300 ease-out ${
        loaded ? "opacity-100" : "opacity-0"
      }`}
    />
  );
}

export default function ArtWall({ images }: { images: ArtImage[] }) {
  // Tiles stay empty until the client shuffle, so the server never renders
  // unshuffled images that would start downloading first. Each tile reserves
  // its space and fades in once decoded, so nothing ever paints half-loaded.
  // They are dealt round-robin into fixed flex columns rather than CSS
  // `columns`, which re-balances (and visibly shifts) every tile on append.
  const [tiles, setTiles] = useState<ArtImage[]>([]);
  const [ready, setReady] = useState(false);
  const [cols, setCols] = useState(2);

  useEffect(() => {
    setTiles(shuffle(images));
    const t = setTimeout(() => setReady(true), LOADER_MS);
    return () => clearTimeout(t);
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
              .filter((_, i) => i % cols === c)
              .map((image) => <Tile key={image.src} image={image} />)}
          </div>
        ))}
      </div>
    </>
  );
}
