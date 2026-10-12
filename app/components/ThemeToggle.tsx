"use client";

// The `.dark` class on <html> is the source of truth: the inline script in
// layout.tsx sets it before paint (and on system changes), this toggle flips it.
// Label and knob are driven by the `dark:` variant, so they're correct before
// hydration with no client state.
export default function ThemeToggle() {
  function toggle() {
    const next = document.documentElement.classList.contains("dark") ? "light" : "dark";
    document.documentElement.classList.toggle("dark", next === "dark");
    document.cookie = `theme=${next}; max-age=86400; path=/; samesite=lax`;
  }

  return (
    <button type="button" onClick={toggle} className="group flex cursor-pointer items-center gap-2">
      {/* Names the mode a click switches to. */}
      <span className="underline-offset-4 group-hover:text-orange-500 group-hover:underline">
        <span className="sr-only">Switch to </span>
        <span className="dark:hidden">Dark mode</span>
        <span className="hidden dark:inline">Light mode</span>
      </span>
      <span
        aria-hidden="true"
        className="relative h-5 w-9 shrink-0 border border-black/30 transition-colors group-hover:border-orange-500 dark:border-white/30 dark:group-hover:border-orange-400"
      >
        <span className="absolute top-1/2 left-0.5 size-3.5 -translate-y-1/2 bg-zinc-900 transition-transform dark:translate-x-4 dark:bg-zinc-100" />
      </span>
    </button>
  );
}
