import fs from "fs";
import path from "path";
import { imageSizeFromFile } from "image-size/fromFile";
import ArtWall from "@/app/components/ArtWall";

export default async function ArtPage() {
  const dir = path.join(process.cwd(), "public", "graphic");
  const files = fs
    .readdirSync(dir)
    .filter((f) => /\.(jpe?g|png|gif|webp|avif)$/i.test(f));

  const images = await Promise.all(
    files.map(async (f) => {
      const { width, height, orientation } = await imageSizeFromFile(
        path.join(dir, f),
      );
      // EXIF orientations 5–8 are 90° rotations, which browsers and the image
      // optimizer apply, so the displayed width and height are swapped.
      const rotated = (orientation ?? 1) >= 5;
      return {
        src: `/graphic/${encodeURIComponent(f)}`,
        width: rotated ? height : width,
        height: rotated ? width : height,
      };
    }),
  );

  return (
    <main className="flex-1 pt-4">
      {/* <h1 className="px-4 pb-4 text-center text-2xl font-bold">
        In a sea of AI slop art, create by hand. Pen, Pencil, Ink, Camera, Crayon.
      </h1> */}
      <ArtWall images={images} />
    </main>
  );
}
