import favicon from "./favicon.png";

const NAME = "Finnian Murphy";

const ABOUT = [
  "Sophomore at Georgetown University (CAS '28)",
  "Math + CS Double Major",
  "Apple SDK, C++, SwiftUI, Python, HTML + CSS, Excel, and Visual Basic for Applications",
  "Photography enthusiast",
  "Triathlon and Tricking",
];

export default function Home() {
  return (
    <main className="flex flex-1 flex-col items-center bg-zinc-50 pt-12 dark:bg-black">
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
              className="inline-block transition-all duration-500 ease-out group-hover:-translate-y-3 group-hover:text-indigo-500 dark:group-hover:text-indigo-400"
              style={{ transitionDelay: `${i * 30}ms` }}
            >
              {char === " " ? " " : char}
            </span>
          ))}
        </h1>
      </div>

      <div className="flex flex-1 items-center justify-center px-6">
        <ul className="max-w-4xl space-y-3 text-lg text-zinc-900 sm:text-xl dark:text-white">
          {ABOUT.map((line) => (
            <li key={line}>{line}</li>
          ))}
        </ul>
      </div>
    </main>
  );
}
