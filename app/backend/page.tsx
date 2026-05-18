export default function BackendPage() {
  return (
    <main className="flex flex-1 flex-col items-center pt-12">
      <div className="flex flex-1 items-center justify-center px-6">
        <div className="max-w-5xl space-y-8 bg-white/40 px-6 py-5 text-lg text-black sm:text-xl dark:bg-background/40 dark:text-white">
          <h1 className="mb-4 text-3xl font-semibold">Backend Skills</h1>
          <p>Apple SDK: app development (Protocol Tracker, Reverb; see projects page)</p>
          <p>Swift and SwiftUI: iOS app development (See above)</p>
          <p>C++: Low-level Systems programming, B/Red-Black/Binary trees from scratch, graph algorithms, representations, and optimization (as coursework)</p>
          <p>Java: web app development (as coursework)</p>
          <p>Python: microapps and data analysis (personal projects & coursework)</p>
        </div>
      </div>
    </main>
  );
}
