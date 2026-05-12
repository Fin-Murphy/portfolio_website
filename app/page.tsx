import favicon from "./favicon.png";

const NAME = "Finnian Murphy";

export default function Home() {
  return (
    <main className="flex flex-1 items-center justify-center bg-zinc-50 dark:bg-black">
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

        <div className="flex flex-col">
          <h1 className="flex text-6xl font-semibold tracking-tight text-zinc-900 sm:text-8xl md:text-9xl dark:text-zinc-50">
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
          <h1>Under construction! Migrating from old portfolio</h1>
        </div>

      </div>


    </main>
  );
}
