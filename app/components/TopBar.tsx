import Link from "next/link";

const LINKS = [
  { label: "Home", href: "/" },
  { label: "Projects", href: "/projects" },
  { label: "Art", href: "/art" }
];

export default function TopBar() {
  return (
    <nav className="fixed inset-x-0 top-0 z-20 flex items-center gap-7 border-b-1 border-zinc-500 bg-white/40 px-6 py-3 text-sm dark:border-zinc-900 dark:bg-background/40">
      {LINKS.map(({ label, href }) => (
        <Link
          key={href}
          href={href}
          className="underline-offset-4 hover:text-orange-500 hover:underline"
        >
          {label}
        </Link>
      ))}
    </nav>
  );
}
