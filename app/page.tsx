export default function Home() {
  return (
    <main className="min-h-screen bg-zinc-50 text-zinc-900">
      <div className="mx-auto max-w-3xl px-6 py-24">
        <header className="space-y-6">
          <h1 className="text-4xl font-semibold tracking-tight">
            Jonah Maddox
          </h1>

          <p className="text-lg leading-8 text-zinc-700">
            Producer / Director working with mission-driven organisations to make
            complex ideas clear, careful and human.
          </p>
        </header>

        <nav className="mt-16">
          <ul className="space-y-4 text-lg">
            <li>
              <a
                href="/work"
                className="underline-offset-4 hover:underline"
              >
                Selected work
              </a>
            </li>
            <li>
              <a
                href="/thinking"
                className="underline-offset-4 hover:underline"
              >
                Reflections
              </a>
            </li>
            <li>
              <a
                href="/about"
                className="underline-offset-4 hover:underline"
              >
                About
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </main>
  );
}