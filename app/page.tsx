const NAME = "Finnian Murphy";

const ABOUT = [
  "Math + CS @ Georgetown University (CAS '28)",
  "Frontend: Next.js, React, HTML + CSS + Tailwind",
  "Backend: Apple SDK, C++, Java, SwiftUI, Python",
  "Miscellaneous : SQL, Pandas, NumPy, SupaBase, Cloudflare Workers",
  "Photography, Triathlon, and Tricking",
  "\n  . . .",
  { label: " > Linkedin", href: "https://www.linkedin.com/in/finnian-murphy-41a91b332/" },
  { label: " > GitHub", href: "https://github.com/Fin-Murphy" },
  { label: " > Instagram", href: "https://www.instagram.com/finny_murph/?hl=en" },
];

export default function Home() {
  return (
    <main className="flex flex-1 flex-col items-center pt-12">
      <div className="group flex cursor-default select-none items-center gap-4 sm:gap-6 md:gap-8">

        <h1 className="text-6xl font-semibold tracking-tight text-zinc-900 transition-colors duration-500 group-hover:text-orange-500 sm:text-6xl md:text-7xl dark:text-zinc-50">
          {NAME}
        </h1>
      </div>

      <div className="flex flex-1 items-center justify-center px-6">
        <ul className="max-w-4xl space-y-3 bg-white/50 px-6 py-5 text-lg text-black sm:text-xl dark:bg-background/40 dark:text-white">
          {ABOUT.map((item) =>
            typeof item === "string" ? (
              <li key={item}>{item}</li>
            ) : (
              <li key={item.label}>
                <a href={item.href} className="underline-offset-4 hover:text-orange-500 hover:underline">
                  {item.label}
                </a>
              </li>
            ),
          )}
        </ul>
      </div>
    </main>
  );
}
