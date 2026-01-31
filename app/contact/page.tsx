export default function ContactPage() {
  return (
    <main className="space-y-10">
      <header className="space-y-4">
        <h1 className="text-3xl font-semibold tracking-tight">Contact</h1>
        <p className="text-lg leading-8 text-zinc-700">
          The quickest way to reach me is email.
        </p>
      </header>

      <section className="space-y-4 text-lg leading-8 text-zinc-700">
        <p>
          <a
            className="hover:underline underline-offset-4"
            href="mailto:hello@jonahmaddox.co.uk"
          >
            hello@jonahmaddox.co.uk
          </a>
        </p>
        <p>London & Cambridge</p>
      </section>
    </main>
  );
}