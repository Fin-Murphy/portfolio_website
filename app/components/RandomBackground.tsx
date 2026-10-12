"use client";

import { useSyncExternalStore } from "react";
import Image from "next/image";
import AsciiBackground from "@/app/components/AsciiBackground";

// Coin-flip between the ASCII wave field and the scan image, once per page load.
// Flipped in the browser (not on the server) because the layout is statically
// rendered — a server flip would happen once at build time for everyone.
const flip = typeof window === "undefined" ? null : Math.random() < 0.5 ? "ascii" : "scan";
const noopSubscribe = () => () => {};

export default function RandomBackground() {
  // Server snapshot is null, so SSR/hydration render nothing, then the client
  // re-renders with the flip — no hydration mismatch.
  const choice = useSyncExternalStore(noopSubscribe, () => flip, () => null);

  if (choice === "ascii") return <AsciiBackground />;
  if (choice === null) return null;

  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 -z-10 flex justify-center overflow-hidden">
      {/* Only the visible image loads: both stay lazy (no `preload`) so the
          display:none one is never fetched. */}
      <Image
        src="/graphic/Scan-20.jpeg"
        alt=""
        width={2550}
        height={3300}
        fetchPriority="high"
        sizes="78vh"
        className="h-full w-auto max-w-none opacity-40 dark:hidden"
      />
      <Image
        src="/graphic/S20R-RS.jpeg"
        alt=""
        width={2619}
        height={2423}
        fetchPriority="high"
        sizes="109vh"
        className="hidden h-full w-auto max-w-none opacity-35 dark:block"
      />
    </div>
  );
}
