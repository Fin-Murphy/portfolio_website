import Link from "next/link";

const NAME = "Finnian Murphy";

const ABOUT = [
  "I'm Fin, a Math and CS double major at Georgetown. I build native iOS apps, AI-integrated full-stack tools, and CLI utils. Build what people AND agents want.",
  { text: "= Frontend: Next.js, React, HTML + CSS + Tailwind", href: "/skills#frontend" },
  { text: "= Backend: Apple SDK, C++, Java, SwiftUI, Python", href: "/skills#backend" },
  { text: "= Frameworks: SupaBase, Cloudflare Workers / AI, Vercel", href: "/skills#frameworks" },
  { text: "= Personal: Art, Athletics, etc ", href: "/skills#hobbies" },
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
          <li className="flex items-center gap-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="size-5 shrink-0"
              aria-hidden="true"
            >
              <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" />
              <circle cx="12" cy="10" r="3" />
            </svg>
            <span>Washington, DC</span>
          </li>
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
