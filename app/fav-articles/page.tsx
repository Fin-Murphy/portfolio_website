const ARTICLES = [
  { title: "Teach Yourself Programming in Ten Years - Peter Norvig", href: "https://www.norvig.com/21-days.html" },
  { title: "In the Beginning was the Command Line - Neal Stephenson", href: "https://smorgasborg.artlung.com/C_R_Y_P_T_O_N_O_M_I_C_O_N/" },
  { title: "Thoughts on slowing the fuck down - Mario Zechner", href: "https://mariozechner.at/posts/2026-03-25-thoughts-on-slowing-the-fuck-down" },
  { title: "The 18 mistakes that kill startups - Paul Graham", href: "https://www.paulgraham.com/startupmistakes.html" },
  { title: "The integral of intentionality - Chris Paik", href: "https://docs.google.com/document/d/1W1XARzS8KTI6YWhYNPlryWE7j2mY8ntSRLz1O8NC53E/edit?pli=1&tab=t.0" },
  { title: "Hackers and Painters - Paul Graham", href: "https://www.paulgraham.com/hp.html" },

];



export default function FavArticlesPage() {
  return (
    <main className="flex flex-1 flex-col items-center pt-12">
      <div className="flex flex-1 items-center justify-center px-6">
        <div className="max-w-6xl space-y-6 bg-white/40 px-6 py-5 text-lg text-black sm:text-xl dark:bg-background/40 dark:text-white">
          <h1 className="mb-4 text-2xl font-semibold">What I&apos;m Reading</h1>
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
        </div>
      </div>
    </main>
  );
}
