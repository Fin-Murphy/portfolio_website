import type { Metadata } from "next";
import { Geist_Mono } from "next/font/google";
import { getImageProps } from "next/image";
import RandomBackground from "@/app/components/RandomBackground";
import TopBar from "@/app/components/TopBar";
import { SCAN_DARK, SCAN_LIGHT } from "@/app/lib/scanBackground";
import "./globals.css";

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Finnian Murphy",
  description: "Software engineering portfolio of Finnian Murphy.",
};

// Runs before first paint so there's no light/dark flash. A `theme` cookie
// (written only when the user clicks ThemeToggle) wins; otherwise follow the
// system preference, including live changes to it.
const THEME_SCRIPT = `(function () {
  var root = document.documentElement;
  var media = matchMedia("(prefers-color-scheme: dark)");
  function apply() {
    var cookie = document.cookie.match(/(?:^|; )theme=(light|dark)(?:;|$)/);
    root.classList.toggle("dark", cookie ? cookie[1] === "dark" : media.matches);
  }
  apply();
  media.addEventListener("change", apply);
})();`;

function preloadAttrs({ src, sizes }: typeof SCAN_LIGHT) {
  return { srcSet: getImageProps({ src, sizes, alt: "" }).props.srcSet, sizes };
}

// Coin-flips the background (RandomBackground reads the result from
// `window.__bg`). For the scan, it starts fetching the current theme's image
// during HTML parse instead of after JS loads and hydrates. Must run after
// THEME_SCRIPT so the `.dark` class is already set.
const BG_SCRIPT = `(function () {
  var scan = Math.random() < 0.5;
  window.__bg = scan ? "scan" : "ascii";
  if (!scan) return;
  var images = ${JSON.stringify({ light: preloadAttrs(SCAN_LIGHT), dark: preloadAttrs(SCAN_DARK) })};
  var img = images[document.documentElement.classList.contains("dark") ? "dark" : "light"];
  var link = document.createElement("link");
  link.rel = "preload";
  link.as = "image";
  link.imageSrcset = img.srcSet;
  link.imageSizes = img.sizes;
  link.fetchPriority = "high";
  document.head.appendChild(link);
})();`;

export default function RootLayout({
  children,

}: Readonly<{
  children: React.ReactNode;

}>) {
  return (
    <html
      lang="en"
      className={`${geistMono.variable} h-full antialiased`}
      // THEME_SCRIPT adds `.dark` before hydration.
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: THEME_SCRIPT }} />
        <script dangerouslySetInnerHTML={{ __html: BG_SCRIPT }} />
        {/* LOADER DISABLED — uncomment to re-enable video preload
        <link
          rel="preload"
          as="video"
          href="/loader.mp4"
          type="video/mp4"
          fetchPriority="high"
        />
        */}
      </head>
      <body className="min-h-full flex flex-col pt-12">
        <RandomBackground />
        <TopBar />
        {children}
        {/* LOADER DISABLED — uncomment to re-enable video prefetch
        <video
          src="/loader.mp4"
          preload="auto"
          muted
          playsInline
          aria-hidden="true"
          className="pointer-events-none absolute h-0 w-0 opacity-0"
        />
        */}
      </body>
    </html>
  );
}
