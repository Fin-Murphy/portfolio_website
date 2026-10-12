"use client";

// ASCII DISABLED — the scan always renders. To restore the ASCII/scan coin
// flip, uncomment the lines marked below and the matching lines in BG_SCRIPT
// (layout.tsx). With the flip off, the scan is server-rendered into the HTML,
// so it no longer waits for hydration. The art page is the exception: it always
// gets the ASCII background.
// import { useSyncExternalStore } from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import AsciiBackground from "@/app/components/AsciiBackground";
import { SCAN_DARK, SCAN_LIGHT } from "@/app/lib/scanBackground";

// Coin-flip between the ASCII wave field and the scan image, once per page load.
// The flip happens in BG_SCRIPT in layout.tsx (in the browser, not on the
// server, because the layout is statically rendered — a server flip would
// happen once at build time for everyone), which also preloads the scan.
// const flip = typeof window === "undefined" ? null : (window as unknown as { __bg: "ascii" | "scan" }).__bg;
// const noopSubscribe = () => () => {};

export default function RandomBackground() {
  const pathname = usePathname();
  // Server snapshot is null, so SSR/hydration render nothing, then the client
  // re-renders with the flip — no hydration mismatch.
  // const choice = useSyncExternalStore(noopSubscribe, () => flip, () => null);

  // if (choice === "ascii") return <AsciiBackground />;
  // if (choice === null) return null;

  if (pathname === "/art") return <AsciiBackground />;

  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 -z-10 flex justify-center overflow-hidden">
      {/* Only the visible image loads: both stay lazy (no `preload`) so the
          display:none one is never fetched. BG_SCRIPT has usually already
          fetched the visible one by the time this renders. */}
      <Image
        src={SCAN_LIGHT.src}
        alt=""
        placeholder="blur"
        fetchPriority="high"
        sizes={SCAN_LIGHT.sizes}
        className="h-full w-auto max-w-none opacity-40 dark:hidden"
      />
      <Image
        src={SCAN_DARK.src}
        alt=""
        placeholder="blur"
        fetchPriority="high"
        sizes={SCAN_DARK.sizes}
        className="hidden h-full w-auto max-w-none opacity-35 dark:block"
      />
    </div>
  );
}
