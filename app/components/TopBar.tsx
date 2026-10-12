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
    // px-6 + max-w-4xl mirror the home page's body block, so the bar
    // lines up with it instead of spanning the screen.
    <nav className="fixed inset-x-0 top-0 z-20 px-6 text-sm">
      <div className="mx-auto flex max-w-4xl items-center gap-7 bg-white/65 py-3 dark:bg-background/65">
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
            body block); mr-12 insets it roughly in line with that block's px-13 text. */}
        <div className="ml-auto mr-12 flex">
          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
}
