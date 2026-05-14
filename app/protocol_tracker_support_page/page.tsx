const LAST_UPDATED = "May 13, 2026";

const SECTIONS = [
  {
    heading: "Hello!",
    body: "If you have suggestions, bugs, errors, or any type of issue or idea for Protocol Tracker, please send me a quick email at finnianmurph@gmail.com . Thanks for using Protocol Tracker!",
  },
  {
    heading: "Beta Notice",
    body: "Protocol Tracker is currently in beta. While in beta, all data remains on your device. Eventually, an option will be added to offload data to an external server. When that happens, we will notify you of the change, and you will of course be able to opt out.",
  },
  {
    heading: "Changes to This Page",
    body: "We may update this page from time to time. When we do, we will revise the “last updated” date at the top of this page.",
  },
  {
    heading: "Thanks",
    body: "enjoy using Protocol Tracker!",
  },
];

export default function ProTrackSupportPage() {
  return (
    <main className="flex flex-1 flex-col items-center pt-12">
      <div className="flex flex-1 justify-center px-6 pb-16">
        <article className="max-w-4xl space-y-6 bg-white px-7 py-7 text-base text-black sm:text-lg dark:bg-background dark:text-white">
          <header className="space-y-1">
            <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
              Protocol Tracker — Support
            </h1>
            <p className="text-sm opacity-70">Last updated: {LAST_UPDATED}</p>
          </header>

          {SECTIONS.map((section) => (
            <section key={section.heading} className="space-y-2">
              <h2 className="text-xl font-semibold sm:text-2xl">{section.heading}</h2>
              <p className="leading-relaxed">{section.body}</p>
            </section>
          ))}
        </article>
      </div>
    </main>
  );
}
