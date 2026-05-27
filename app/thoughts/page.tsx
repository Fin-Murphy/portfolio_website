const THOUGHTS = [
    "TIL: It's basically impossible to create a regex expression that accurately captures all valid email addresses", 
    "More thoughts coming soon. Thinkin hard rn.",

];


export default function ThoughtsPage() {
  return (
    <main className="flex flex-1 flex-col items-center pt-12">
      <div className="flex flex-1 items-center justify-center px-6">
        <div className="max-w-6xl space-y-6 bg-white/40 px-6 py-5 text-lg text-black sm:text-xl dark:bg-background/40 dark:text-white">
          <h1 className="mb-4 space-y-3 text-2xl font-semibold">Thoughts</h1>
          {THOUGHTS.map((thought) => (
            <p> {thought} </p>
          ))}
        </div>
      </div>
    </main>
  );
}
