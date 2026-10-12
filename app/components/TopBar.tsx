import Link from "next/link";

const LINKS = [
  { label: "  ", href: ""},
  { label: "Home", href: "/" },
  { label: "Skills", href: "/skills" },
  { label: "Projects", href: "/projects" },
  { label: "Art", href: "/art" },
  { label: "Articles", href: "/my-articles" },
];

export default function TopBar() {
  return (
    <nav className="fixed inset-x-0 top-0 z-20 bg-white/60 px-6 py-3 text-sm dark:bg-background/60">
      <div className="mx-auto flex max-w-4xl items-center gap-7">
        {LINKS.map(({ label, href }) => (
          <Link
            key={href}
            href={href}
            className="underline-offset-4 hover:text-orange-500 hover:underline"
          >
            {label}
          </Link>
        ))}
      </div>
    </nav>
  );
}
