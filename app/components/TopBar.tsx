import Link from "next/link";
import ThemeToggle from "@/app/components/ThemeToggle";

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
        {/* ml-auto pins it to the row's right edge (the home page's max-w-4xl
            body block); mr-16 insets it a bit past that block's px-13 text. */}
        <div className="ml-auto mr-16 flex">
          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
}
