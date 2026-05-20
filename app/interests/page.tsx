import Link from "next/link";

export default function InterestsPage() {
  return (
    <main className="flex flex-1 flex-col items-center pt-12">
      <div className="flex flex-1 items-center justify-center px-6">
        <div className="max-w-5xl bg-white/40 space-y-6 px-6 py-5 text-lg text-black sm:text-xl dark:bg-background/40 dark:text-white">
          <h1 className="mb-4 text-2xl font-semibold">Some of my Favorite Things</h1>
          <p>Triathlon
            {/* <Link
              href={"https://youtube.com/@finnian.murphy"}
              aria-label={"  -> Training Jornal"}
              className="shrink-0 underline-offset-4 text-sm hover:text-orange-500 hover:underline"
            >
              {"  - -- -> Training Journal"}
            </Link> */}

          </p>
          <p>
            <Link
              href="/fav-articles"
              className="underline-offset-4 hover:text-orange-500 hover:underline"
            >
              What I&apos;m Reading
            </Link>
          </p>
          <p>Hybrid Training</p>
          <p>Photography
            <Link
              href={"https://www.instagram.com/finny_murph/?hl=en"}
              aria-label={"  -> My Instagram"}
              className="shrink-0 underline-offset-4 text-sm hover:text-orange-500 hover:underline"
            >
              {"  - -- -> My Instagram"}
            </Link>
          </p>
          <p>Drawing</p>
          <p>Playing the guitar (poorly)</p>
          <p>Playing the piano (even worse)</p>
                    <p>
            <Link
              href="/my-articles"
              className="underline-offset-4 hover:text-orange-500 hover:underline"
            >
              What I&apos;m Writing
            </Link>
          </p>

        </div>
      </div>
    </main>
  );
}
