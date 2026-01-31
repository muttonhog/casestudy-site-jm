export default function WorkPage() {
  return (
    <main className="space-y-10">
      <header className="space-y-4">
        <h1 className="text-3xl font-semibold tracking-tight">Selected work</h1>
        <p className="text-lg leading-8 text-zinc-700">
          A small set of projects that show judgement, craft, and what I learned.
        </p>
      </header>

      <section className="space-y-10">
        <article className="space-y-2">
          <h2 className="text-xl font-medium">Project title</h2>
          <p className="text-zinc-700">
            One-line context. Who it was for and what was at stake.
          </p>
        </article>

        <article className="space-y-2">
          <h2 className="text-xl font-medium">Project title</h2>
          <p className="text-zinc-700">
            One-line context. What decision mattered most.
          </p>
        </article>

        <article className="space-y-2">
          <h2 className="text-xl font-medium">Project title</h2>
          <p className="text-zinc-700">One-line context. Outcome + learning.</p>
        </article>
      </section>
    </main>
  );
}