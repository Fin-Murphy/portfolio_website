import favicon from "./favicon.png";

const NAME = "Finnian Murphy";

const ABOUT = [
  "Math + CS Double Major @ Georgetown University (CAS '28)",
  "Frontend: Next.js, React, HTML + CSS + Tailwind",
  "Backend: Apple SDK, C++, Java, SwiftUI, Python",
  "Miscellaneous : SQL, Pandas, NumPy, SupaBase, Cloudflare Workers",

  "Photography, Triathlon, and Tricking "
];

export default function Home() {
  return (
    <main className="flex flex-1 flex-col items-center pt-12">
      <div className="group flex cursor-default select-none items-center gap-4 sm:gap-6 md:gap-8">
        {/* <span
          aria-hidden
          style={{
            WebkitMaskImage: `url(${favicon.src})`,
            maskImage: `url(${favicon.src})`,
            WebkitMaskRepeat: "no-repeat",
            maskRepeat: "no-repeat",
            WebkitMaskSize: "contain",
            maskSize: "contain",
            WebkitMaskPosition: "center",
            maskPosition: "center",
          }}
          className="inline-block h-28 w-28 bg-zinc-900 transition-all duration-500 ease-out group-hover:-translate-y-3 group-hover:bg-indigo-500 sm:h-36 sm:w-36 md:h-52 md:w-52 dark:bg-zinc-50 dark:group-hover:bg-indigo-400"
        /> */}

        <h1 className="flex text-6xl font-semibold tracking-tight text-zinc-900 sm:text-6xl md:text-7xl dark:text-zinc-50">
          {NAME.split("").map((char, i) => (
            <span
              key={i}
              className="inline-block transition-all duration-500 ease-[steps(6,jump-end)] group-hover:-translate-y-3 group-hover:text-orange-500 dark:group-hover:text-orange-500"
              style={{ transitionDelay: `${i * 40}ms` }}
            >
              {char === " " ? " " : char}
            </span>
          ))}
        </h1>
      </div>

      <div className="flex flex-1 items-center justify-center px-6">
        <ul className="max-w-4xl space-y-3 text-lg text-black sm:text-xl dark:text-white">
          {ABOUT.map((line) => (
            <li key={line}>{line}</li>
          ))}
        </ul>
      </div>
    </main>
  );
}
