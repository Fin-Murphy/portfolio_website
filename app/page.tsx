const NAME = "Finnian Murphy";

export default function Home() {
  return (
    <main className="flex flex-1 items-center justify-center bg-zinc-50 dark:bg-black">
      <h1 className="group flex cursor-default select-none text-6xl font-semibold tracking-tight text-zinc-900 sm:text-8xl md:text-9xl dark:text-zinc-50">
        {NAME.split("").map((char, i) => (
          <span
            key={i}
            className="inline-block transition-all duration-500 ease-out group-hover:-translate-y-3 group-hover:text-indigo-500 dark:group-hover:text-indigo-400"
            style={{ transitionDelay: `${i * 30}ms` }}
          >
            {char === " " ? "\u00A0" : char}
          </span>
        ))}
      </h1>
    </main>
  );
}
