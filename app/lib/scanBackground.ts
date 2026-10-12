import scanLight from "@/public/graphic/Scan-20.jpeg";
import scanDark from "@/public/graphic/S20R-RS.jpeg";

// Shared by RandomBackground (renders the images) and layout.tsx (preloads them
// from <head>). Both must produce the same srcset/sizes or the preload is wasted.
// Static imports give us the blur placeholder and a content-hashed URL.
export const SCAN_LIGHT = { src: scanLight, sizes: "78vh" };
export const SCAN_DARK = { src: scanDark, sizes: "109vh" };
