const LAST_UPDATED = "May 13, 2026";

const SECTIONS = [
  {
    heading: "Introduction",
    body: "This is a pretty simple privacy policy — we don’t collect data of any sort. This Privacy Policy describes how Protocol Tracker (“we”, “us”, or “our”) handles your information when you use the Protocol Tracker iOS application.",
  },
  {
    heading: "Information We Collect",
    body: "None. All of your task and habit data is stored locally on your device, meaning you are the only one who ever has access to it. So rest assured!",
  },
  {
    heading: "Beta Notice",
    body: "Protocol Tracker is currently in beta. While in beta, all data remains on your device. Eventually, an option will be added to offload data to an external server. When that happens, we will notify you of the change, and you will of course be able to opt out.",
  },
  {
    heading: "Changes to This Policy",
    body: "We may update this Privacy Policy from time to time. When we do, we will revise the “last updated” date at the top of this page.",
  },
  {
    heading: "Thanks",
    body: "enjoy using Protocol Tracker!",
  },
];




export default function ProTrackPrivacyPolicyPage() {
  return (
    <main className="flex flex-1 flex-col items-center pt-12">
      <div className="flex flex-1 justify-center px-6 pb-16">
        <article className="max-w-4xl space-y-6 bg-white px-7 py-7 text-base text-black sm:text-lg dark:bg-background dark:text-white">
          <header className="space-y-1">
            <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
              Protocol Tracker — Privacy Policy
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
