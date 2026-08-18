import Link from "next/link";

const ARTICLES = [
  { title: "Media is evil. Why?", href: "/media-is-evil" },
  { title: "Losing the craft", href: "/losing-the-craft" },
  { title: "Balancing Handwritten and LLM Code", href: "/balancing-handwritten-and-llm-code" },
  { title: "Digital vs. Physical Minimalism", href: "/digital-vs-physical-minimalism" },

];



export default function FavArticlesPage() {
  return (
    <main className="flex flex-1 flex-col items-center pt-12">
      <div className="flex flex-1 items-center justify-center px-6">
        <div className="max-w-6xl space-y-6 bg-white/40 px-6 py-5 text-lg text-black sm:text-xl dark:bg-background/40 dark:text-white">
          <h1 className="mb-4 text-2xl font-semibold">What I&apos;m Writing</h1>
          {/* <p> Sure is empty in here.</p> */}
          {ARTICLES.map((article) => (
            <p key={article.href}>
              <a
                href={article.href}
                target="_blank"
                rel="noreferrer"
                className="underline-offset-4 hover:text-orange-500 hover:underline"
              >
                {article.title}
              </a>
            </p>
          ))}
          <p className="pt-8">
            <Link
              href="/fav-articles"
              className="underline-offset-4 hover:text-orange-500 hover:underline"
            >
              &gt; What I&apos;m Reading
            </Link>
          </p>
        </div>
      </div>
    </main>
  );
}
