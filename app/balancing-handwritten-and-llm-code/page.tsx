export default function BalancingHandwrittenAndLlmCodePage() {
    return (
        <main className="flex flex-1 flex-col items-center pt-12">
            <div className="flex flex-1 items-start justify-center px-6 pb-16">
                <article className="max-w-3xl space-y-6 bg-white/70 px-6 py-6 text-base leading-relaxed text-black shadow-lg shadow-black/10 sm:text-lg dark:bg-background/60 dark:text-white dark:shadow-black/30">
                    <header className="space-y-2 border-b border-black/20 pb-4 dark:border-white/20">
                        <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
                            Balancing Handwritten and LLM Code
                        </h1>
                        <p className="text-sm opacity-60 sm:text-base">
                            By Finnian Murphy &middot; July 15, 2026
                        </p>
                    </header>

                    <p>
                        How best to balance writing your own code versus letting an LLM do it is still an open question, but I&apos;ve found a pretty good answer for my own workflow.
                    </p>

                    <p>
                        I find that the key limiter when I&apos;m writing my own code is always my powers of concentration. They fizzle out after about two or three hours of difficult coding and leave me unable to keep all the relevant pieces of information in my working memory. So in order to keep my own coding skills up-to-date while also maximizing the amount of coding I can do, for the first hour and a half or so of my coding session when I&apos;m the most fresh, I write my own code, look up my own documentation, write my own test cases. But once my attention starts to slip, I switch to agentic programming and keep working.
                    </p>

                    <p>
                        By following this pattern I can keep myself from falling into technical debt and forgetting how my codebase works, while also getting far more done than I would have been able to originally.
                    </p>
                </article>
            </div>
        </main>
    );
}
