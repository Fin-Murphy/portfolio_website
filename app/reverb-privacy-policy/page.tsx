const LAST_UPDATED = "May 13, 2026";

const SECTIONS = [
  {
    heading: "Introduction",
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. This Privacy Policy describes how Reverb (“we”, “us”, or “our”) handles your information when you use the Reverb iOS application. By using the app, you agree to the collection and use of information in accordance with this policy.",
  },
  {
    heading: "Information We Collect",
    body: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. We may collect information you provide directly to us, such as account details, content you create within the app, and any communications you send. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    heading: "How We Use Your Information",
    body: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. We use the information we collect to provide, maintain, and improve the app, to communicate with you, and to protect against fraud or abuse. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
  {
    heading: "Sharing and Disclosure",
    body: "Curabitur pretium tincidunt lacus. Nulla gravida orci a odio. We do not sell your personal information. We may share information with service providers that help us operate the app, or when required by law. Nullam varius, turpis et commodo pharetra, est eros bibendum elit, nec luctus magna felis sollicitudin mauris.",
  },
  {
    heading: "Data Retention",
    body: "Integer in mauris eu nibh euismod gravida. We retain personal information for as long as needed to provide the service and for legitimate business or legal purposes. Duis ac tellus et risus vulputate vehicula. Donec lobortis risus a elit.",
  },
  {
    heading: "Your Rights",
    body: "Etiam tempor. Ullamcorper aliquam ligula. Depending on your jurisdiction, you may have the right to access, correct, or delete the personal information we hold about you. To exercise these rights, contact us using the details below. Nullam adipiscing eros nec orci.",
  },
  {
    heading: "Children’s Privacy",
    body: "The app is not directed to children under the age of 13, and we do not knowingly collect personal information from children. Mauris fermentum dictum magna. Sed laoreet aliquam leo. Ut tellus dolor, dapibus eget, elementum vel, cursus eleifend, elit.",
  },
  {
    heading: "Changes to This Policy",
    body: "We may update this Privacy Policy from time to time. When we do, we will revise the “last updated” date at the top of this page. Aenean auctor wisi et urna. Aliquam erat volutpat. Duis ac turpis. Integer rutrum ante eu lacus.",
  },
  {
    heading: "Contact",
    body: "If you have questions about this Privacy Policy or our practices, contact us at ftm13@georgetown.edu. Vestibulum tincidunt malesuada tellus. Ut ultrices ultrices enim. Curabitur sit amet mauris.",
  },
];

export default function ReverbPrivacyPolicyPage() {
  return (
    <main className="flex flex-1 flex-col items-center pt-12">
      <div className="flex flex-1 justify-center px-6 pb-16">
        <article className="max-w-4xl space-y-6 bg-white px-7 py-7 text-base text-black sm:text-lg dark:bg-background dark:text-white">
          <header className="space-y-1">
            <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
              Reverb — Privacy Policy
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
