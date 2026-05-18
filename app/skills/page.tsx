import Link from "next/link";

const SKILLS = [
  { text: "Frontend", href: "/frontend" },
  { text: "Backend", href: "/backend" },
  { text: "Frameworks", href: "/misc" },
  { text: "AI ", href: "/ai" },
  { text: "Hobbies", href: "/interests" },
];

export default function SkillsPage() {
  return (
    <main className="flex flex-1 flex-col items-center pt-12">
      <div className="flex flex-1 items-center justify-center px-6">
        <ul className="max-w-4xl space-y-5 bg-white/40 px-15 py-5 text-lg text-black sm:text-xl dark:bg-background/40 dark:text-white">
          {SKILLS.map((item) => (
            <li key={item.text}>
              <Link
                href={item.href}
                className="flex items-center gap-4 underline-offset-4 hover:text-orange-500 hover:underline"
              >
                <span className="flex-1 py-3 text-2xl">{item.text}</span>
                <span className="shrink-0">{" >"}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}
