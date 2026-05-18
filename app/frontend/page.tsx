export default function FrontendPage() {
  return (
    <main className="flex flex-1 flex-col items-center pt-12">
      <div className="flex flex-1 items-center justify-center px-6">
        <div className="max-w-5xl space-y-8 bg-white/40 px-6 py-5 text-lg text-black sm:text-xl dark:bg-background/40 dark:text-white">
          <h1 className="mb-4 text-3xl font-semibold">Frontend Skills</h1>
          <p></p>
          <p> HTML + CSS + Tailwind : Portfolio websites, product landing pages </p>
          <p> Next.js, React: Mobile applications, vercel deployments (also for portfolio) </p>
        </div>
      </div>
    </main>
  );
}
