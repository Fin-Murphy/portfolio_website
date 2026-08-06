import Link from "next/link";

const SECTIONS = [
  { id: "frontend", label: "Frontend" },
  { id: "backend", label: "Backend" },
  { id: "frameworks", label: "Frameworks" },
  { id: "ai", label: "AI" },
  { id: "hobbies", label: "Hobbies" },
];

export default function SkillsPage() {
  return (
    <main className="flex flex-1 flex-col items-center pt-12">
      <div className="flex flex-1 justify-center px-6 pb-16">
        <div className="w-full max-w-6xl space-y-10 bg-white/40 px-10 py-6 text-lg text-black sm:text-xl dark:bg-background/40 dark:text-white">
          <ul className="space-y-3 border-b border-black/20 pb-6 dark:border-white/20">
            {SECTIONS.map((s) => (
              <li key={s.id}>
                <Link
                  href={`#${s.id}`}
                  className="flex items-center gap-4 underline-offset-4 hover:text-orange-500 hover:underline"
                >
                  <span className="flex-1 text-2xl">{s.label}</span>
                  <span className="shrink-0">{" >"}</span>
                </Link>
              </li>
            ))}
          </ul>

          <section id="frontend" className="scroll-mt-20 space-y-3">
            <h2 className="text-3xl font-semibold">Frontend</h2>
            <p>HTML + CSS + Tailwind : Portfolio websites, product landing pages</p>
            <p>Next.js, React: Mobile applications, vercel deployments (also for portfolio)</p>
          </section>

          <section id="backend" className="scroll-mt-20 space-y-3">
            <h2 className="text-3xl font-semibold">Backend</h2>
            <p>Apple SDK: app development (Protocol Tracker, Reverb; see projects page)</p>
            <p>Swift and SwiftUI: iOS app development (See above)</p>
            <p>C++: Low-level Systems programming, B/Red-Black/Binary trees from scratch, graph algorithms, representations, and optimization (as coursework)</p>
            <p>Java: web app development (as coursework)</p>
            <p>Python: microapps and data analysis (personal projects & coursework)</p>
          </section>

          <section id="frameworks" className="scroll-mt-20 space-y-3">
            <h2 className="text-3xl font-semibold">Frameworks</h2>
            <p>Cloudflare Worker&apos;s API and frameworks</p>
            <p>Vercel deployment and fast iteration</p>
            <p>Agile development methodologies, primarily the Scrum framework</p>
            <p>Supabase database management</p>
            <p>Multithreaded development and deep systems-level design</p>
            <p>Xcode ide</p>
            <p>VScode ide</p>
            <p>Advanced OOP</p>
          </section>

          <section id="ai" className="scroll-mt-20 space-y-3">
            <h2 className="text-3xl font-semibold">AI</h2>
            <p>Cloudflare Workers API</p>
            <p>OpenAI API</p>
            <p>TTS and speech synthesis through OpenAI&apos;s TTS</p>
            <p>Data processing and organization using Cloudflare Workers AI</p>
            <p>AI-assisted development workflows and loops (Claude Code)</p>
          </section>

          <section id="hobbies" className="scroll-mt-20 space-y-3">
            <h2 className="text-3xl font-semibold">Hobbies</h2>
            <p>Triathlon</p>
            <p>
              <Link
                href="/fav-articles"
                className="underline-offset-4 hover:text-orange-500 hover:underline"
              >
                What I&apos;m Reading
              </Link>
            </p>
                        <p>
              <Link
                href="/my-articles"
                className="underline-offset-4 hover:text-orange-500 hover:underline"
              >
                What I&apos;m Writing
              </Link>
            </p>
            <p>Hybrid Training</p>
            <p>
              Photography
              <Link
                href="https://www.instagram.com/finny_murph/?hl=en"
                aria-label="  -> My Instagram"
                className="shrink-0 text-sm underline-offset-4 hover:text-orange-500 hover:underline"
              >
                {"  - -- -> My Instagram"}
              </Link>
            </p>
            <p>Drawing</p>
            <p>Playing the guitar (poorly)</p>
            <p>Playing the piano (even worse)</p>

          </section>
        </div>
      </div>
    </main>
  );
}
