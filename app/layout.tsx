import type { Metadata } from "next";
import { Geist_Mono } from "next/font/google";
import RandomBackground from "@/app/components/RandomBackground";
import TopBar from "@/app/components/TopBar";
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
