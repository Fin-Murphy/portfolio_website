export default function BalancingHandwrittenAndLlmCodePage() {
    return (
        <main className="flex flex-1 flex-col items-center pt-12">
            <div className="flex flex-1 items-start justify-center px-6 pb-16">
                <article className="max-w-3xl space-y-6 bg-white/70 px-6 py-6 text-base leading-relaxed text-black shadow-lg shadow-black/10 sm:text-lg dark:bg-background/60 dark:text-white dark:shadow-black/30">
                    <header className="space-y-2 border-b border-black/20 pb-4 dark:border-white/20">
                        <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
                            Losing the Craft
                        </h1>
                        <p className="text-sm opacity-60 sm:text-base">
                            By Finnian Murphy &middot; August 6, 2026
                        </p>
                    </header>

                    <p>
                        Agentic programming is like using a microwave.
                    </p>

                    <p>
                        Microwaves are super useful! For tasks like boiling water or reheating frozen pizza, a microwave is perfectly sufficient. But if you're making a steak, using a microwave would be a criminal offense. 
                    </p>

                    <p>
                        Why? Microwaving a steak would cook it, and make it edible. If the only standard you're working for is edibility, then a microwave would suffice. However, a single objective metric (edibility) is not the only standard you are working for; there is aeshtic experience, craftsmanship, and other unquantifiable sensibilities that go into the art of cooking a steak that a microwave has no way of obtaining, one of which is the pride that the cook feels after preparing a good steak. 
                    </p>

                    <p>
                        Push the analogy too far and it falls apart, but the point stands. Leaving out matters of objective functionality, which it is clear that LLMs acheive with consistency, there is beauty in hand-maintained code that has been organized and optimized for human modification and readability. Yes, it's orders of magnitude slower to write and tend to, but beautiful code is one of the pinnacles of human achievement, and I'm sad to see it go away. Decades of style guides going in the garbage. Years of my own adherance to the Google C++ style guide, effectively wasted. 
                    </p>

                    <p>
                        I'm irkerd, but life goes on. I just hope that the craft of clean code doesn't go entirely forgotten.  
                    </p>
                </article>
            </div>
        </main>
    );
}
