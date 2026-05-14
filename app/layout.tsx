import type { Metadata } from "next";
import { Geist_Mono } from "next/font/google";
import AsciiBackground from "@/app/components/AsciiBackground";
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

export default function RootLayout({
  children,

}: Readonly<{
  children: React.ReactNode;

}>) {
  return (
    <html
      lang="en"
      className={`${geistMono.variable} h-full antialiased`}
    >
      <head>
        <link
          rel="preload"
          as="video"
          href="/loader.mp4"
          type="video/mp4"
          fetchPriority="high"
        />
      </head>
      <body className="min-h-full flex flex-col pt-12">
        <AsciiBackground />
        <TopBar />
        {children}
      </body>
    </html>
  );
}
