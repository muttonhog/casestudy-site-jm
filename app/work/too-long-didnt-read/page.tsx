export default function TooLongDidntReadCaseStudy() {
  return (
    <main className="space-y-12">
      <header className="space-y-4">
        <h1 className="text-3xl font-semibold tracking-tight">
          Too Long Didn’t Read
        </h1>
        <p className="text-lg leading-8 text-zinc-700">
          Public engagement podcast on AI for general audiences
        </p>
        <p className="text-sm text-zinc-500">
          The Alan Turing Institute · 2023–present · Co-creator, presenter, producer, editor
        </p>
      </header>

      <section className="space-y-6">
        <h2 className="text-xl font-medium">Context</h2>
        <p className="text-zinc-700 leading-8">
          At a moment of intense public attention on AI and large language models,
          much of the coverage aimed at general audiences was polarised, speculative,
          or inaccessible. As the UK’s national institute for data science and AI,
          the Alan Turing Institute had deep expertise — but no regular, calm,
          public-facing space to interpret the news.
        </p>
      </section>

      <section className="space-y-6">
        <h2 className="text-xl font-medium">The challenge</h2>
        <p className="text-zinc-700 leading-8">
          How do you speak to a broad public audience about fast-moving AI developments
          without hype, fear-mongering, or technical overload — while keeping pace with
          the news cycle?
        </p>
      </section>

      <section className="space-y-6">
        <h2 className="text-xl font-medium">The idea</h2>
        <p className="text-zinc-700 leading-8">
          I co-created Too Long Didn’t Read as a measured editorial filter: a short,
          accessible podcast that reads between the lines of the week’s biggest AI
          stories and explains why they matter — or don’t.
        </p>
        <p className="text-zinc-700 leading-8">
          Pairing the format with an ethics researcher as co-presenter was a deliberate
          editorial choice, bringing social and ethical implications into focus
          alongside technical developments.
        </p>
      </section>

      <section className="space-y-6">
        <h2 className="text-xl font-medium">My role</h2>
        <ul className="list-disc pl-5 space-y-2 text-zinc-700">
          <li>Format development and editorial positioning</li>
          <li>Scriptwriting and story structure</li>
          <li>Identifying and briefing contributors</li>
          <li>Interviewing researchers and external voices</li>
          <li>Presenting and co-hosting</li>
          <li>Editing, publishing, planning and budgeting</li>
        </ul>
        <p className="text-zinc-700 leading-8">
          The first series was produced on a weekly turnaround, requiring fast,
          careful editorial decision-making.
        </p>
      </section>

      <section className="space-y-6">
        <h2 className="text-xl font-medium">Listen</h2>

        {/* Spotify embed */}
        <div className="aspect-video w-full overflow-hidden rounded-lg border">
          <iframe
            src="https://open.spotify.com/embed/show/3dj0qppvPaGDDnVvvoZCuv"
            width="100%"
            height="352"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
          />
        </div>
      </section>

      <section className="space-y-6">
        <h2 className="text-xl font-medium">Outcome & learning</h2>
        <p className="text-zinc-700 leading-8">
          The project demonstrated a clear appetite for calm, non-sensational public
          engagement around AI. It strengthened my approach to long-form scripting,
          interviewing, and editorial judgement under time pressure, and reinforced
          the value of pairing technical insight with ethical perspective when speaking
          to broad audiences.
        </p>
      </section>
    </main>
  );
}