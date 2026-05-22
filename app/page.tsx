import Link from "next/link";

const NAME = "Finnian Murphy";

const ABOUT = [
  "I'm Finnian Murphy, a Math and CS double major at Georgetown. I ship native iOS apps and build AI-integrated full-stack tools with Supabase, OpenAI, and Cloudflare Workers.",
  "Build what people AND agents want.",
  { text: "Frontend: Next.js, React, HTML + CSS + Tailwind", href: "/frontend" },
  { text: "Backend: Apple SDK, C++, Java, SwiftUI, Python", href: "/backend" },
  { text: "Assorted: SupaBase, Cloudflare Workers / AI, Vercel", href: "/misc" },
  { text: "Interests: Art, Athletics, etc > ", href: "/interests" },
  { label: " > Linkedin", href: "https://www.linkedin.com/in/finnian-murphy-41a91b332/" },
  { label: " > GitHub", href: "https://github.com/Fin-Murphy" },
  // { label: " > Instagram", href: "https://www.instagram.com/finny_murph/?hl=en" },
];

export default function Home() {
  return (
    <main className="flex flex-1 flex-col items-center space-y-10 pt-12">
      <div className="group flex cursor-default select-none items-center gap-4 sm:gap-6 md:gap-8">
        <h1 className="flex text-6xl font-semibold tracking-tight text-zinc-900 sm:text-6xl md:text-7xl dark:text-zinc-50">
          {NAME.split("").map((char, i) => (
            <span
              key={i}
              className="inline-block transition-all duration-500 ease-[steps(6,jump-end)] group-hover:-translate-y-1 group-hover:text-orange-500 dark:group-hover:text-orange-400"
              style={{ transitionDelay: `${i * 30}ms` }}
            >
              {char === " " ? " " : char}
            </span>
          ))}
        </h1>
      </div>


      <div className="flex flex-1 items-center justify-center px-6">
        <ul className="max-w-4xl space-y-6 bg-white/40 px-13 py-6 text-lg text-black sm:text-xl dark:bg-background/40 dark:text-white">
          {ABOUT.map((item) => {
            if (typeof item === "string") {
              return <li key={item}>{item}</li>;
            }
            if ("text" in item) {
              return (
                <li key={item.text}>
                  <Link
                    href={item.href}
                    className="flex items-center gap-4 underline-offset-4 hover:text-orange-500 hover:underline"
                  >
                    <span className="flex-1">{item.text}</span>
                    <span className="shrink-0">{" >"}</span>
                  </Link>
                </li>
              );
            }
            return (
              <li key={item.label}>
                <a href={item.href} className="underline-offset-4 hover:text-orange-500 hover:underline">
                  {item.label}
                </a>
              </li>
            );
          })}
        </ul>
      </div>

    </main>
  );
}
