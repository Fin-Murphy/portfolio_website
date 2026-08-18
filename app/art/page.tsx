import fs from "fs";
import path from "path";
import ArtWall from "@/app/components/ArtWall";

export const dynamic = "force-dynamic";

export default function ArtPage() {
  const dir = path.join(process.cwd(), "public", "graphic");
  const files = fs
    .readdirSync(dir)
    .filter((f) => /\.(jpe?g|png|gif|webp|avif)$/i.test(f));

  return (
    <main className="flex-1 pt-4">
      {/* <h1 className="px-4 pb-4 text-center text-2xl font-bold">
        In a sea of AI slop art, create by hand. Pen, Pencil, Ink, Camera, Crayon.
      </h1> */}
      <ArtWall images={files} />
    </main>
  );
}
