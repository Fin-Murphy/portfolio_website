export default function AIPage() {
  return (
    <main className="flex flex-1 flex-col items-center pt-12">
      <div className="flex flex-1 items-center justify-center px-6">
        <div className="max-w-5xl space-y-8 bg-white/40 px-6 py-5 text-lg text-black sm:text-xl dark:bg-background/40 dark:text-white">
          <h1 className="mb-4 text-3xl font-semibold">AI Skills</h1>
          <p>Cloudflare Workers API</p>
          <p>OpenAI API</p>
          <p>TTS and speech synthesis through OpenAI's TTS</p>
          <p>Data processing and organization using Cloudflare Workers AI</p>
          <p>AI-assisted development workflows and loops (Claude Code)</p>
        </div>
      </div>
    </main>
  );
}
