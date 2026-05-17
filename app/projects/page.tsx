const PROJECTS = [
    {
    icon: "🗂️",
    title: "Reverb - an AI-powered productivity tool.",
    href: "https://github.com/Fin-Murphy/Reverb_Public",
  },
  {
    icon: "🔁",
    title: "Protocol Tracker — Proof of concept for Reverb",
    href: "https://github.com/Fin-Murphy/Protocol-Tracker",
  },
  {
    icon: "⌨️",
    title: "ScatterCLI — shell interface with Obsidian Kanban",
    href: "https://github.com/Fin-Murphy/ScatterCLI",
  },
  {
    icon: "📚",
    title: "canvProj — Canvas assignments -> Obsidian.md Kanban",
    href: "https://github.com/Fin-Murphy/canvProj-main",
  },
  // {
  //   icon: "🧠",
  //   title: "scatterbrain — terminal-based productivity concept (the ScatterCLI prototype)",
  //   href: "https://github.com/Fin-Murphy/scatterbrain",
  // },
  // {
  //   icon: "📷",
  //   title: "GGM Media — Instagram-style iOS app with a Firebase backend",
  //   href: "https://github.com/Fin-Murphy/GGM",
  // },
  // {
  //   icon: "🔁",
  //   title: "HabitHub — SwiftUI habit-tracking app",
  //   href: "https://github.com/Fin-Murphy/HabitHub",
  // },
  {
    icon: "🎨",
    title: "Customite — my own orange theme for Obsidian",
    href: "https://github.com/Fin-Murphy/Customite-Theme",
  },
  {
    icon: "🥕",
    title: "carrotTheme — orange theme for VSCode",
    href: "https://github.com/Fin-Murphy/carrotTheme",
  },
  // {
  //   icon: "🎓",
  //   title: "FLON Capstone — capstone project for FLON",
  //   href: "https://github.com/Fin-Murphy/FLON_Capstone",
  // },
];

export default function ProjectsPage() {
  return (
    <main className="flex flex-1 flex-col items-center pt-12">
      <div className="flex flex-1 items-center justify-center px-6">
        <ul className="max-w-4xl space-y-8 bg-white/60 px-7 py-7 text-lg text-black sm:text-xl dark:bg-background/60 dark:text-white">
          {PROJECTS.map((project) => (
            <li key={project.href} className="flex items-center gap-4">
              <span aria-hidden="true" className="shrink-0 text-2xl">
                {project.icon}
              </span>
              <span className="flex-1">{project.title}</span>
              <a
                href={project.href}
                className="shrink-0 underline-offset-4 hover:text-orange-500 hover:underline"
              >
                {" > repo"}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}
