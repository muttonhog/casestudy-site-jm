import Link from "next/link";

type ThumbItem = {
  title: string;
  href: string;
  src: string;
};

const THUMBS: ThumbItem[] = [
  {
    title: "Too Long Didn’t Read",
    href: "/work/too-long-didnt-read",
    src: "/thumbnails/tldr.jpg",
  },
  {
    title: "AI UK",
    href: "/work/ai-uk",
    src: "/thumbnails/ai-uk.jpg",
  },
  {
    title: "BBC Digital Editorial Storytelling",
    href: "/work/bbc-digital-storytelling",
    src: "/thumbnails/bbc-digital.jpg",
  },
  // You can add more later:
  // {
  //   title: "Data Study Group",
  //   href: "/work/data-study-group",
  //   src: "/thumbnails/dsg.jpg",
  // },
];

export default function WorkPage() {
  return (
    <main className="space-y-14">
      <header className="space-y-4">
        <h1 className="text-3xl font-semibold tracking-tight">Selected work</h1>
        <p className="text-lg leading-8 text-zinc-700">
          A small set of projects that show judgement, craft, and what I learned.
        </p>
      </header>

      {/* Case studies */}
      <section className="space-y-10">
        <article className="space-y-2 border-l-2 border-zinc-200 pl-4">
          <h2 className="text-xl font-medium">
            <Link
              href="/work/too-long-didnt-read"
              className="underline-offset-4 hover:underline"
            >
              Too Long Didn’t Read
            </Link>
          </h2>
          <p className="text-zinc-700">
            A public engagement podcast created to offer calm, accessible coverage
            of AI developments during a period of intense media hype.
          </p>
        </article>

        <article className="space-y-2">
          <h2 className="text-xl font-medium">
            <Link
              href="/work/ai-uk"
              className="underline-offset-4 hover:underline"
            >
              AI UK
            </Link>
          </h2>
          <p className="text-zinc-700">
            Video lead for the Turing’s flagship conference: pre-event trailers and
            session assets, live stream direction, on-site crews, and post-event
            edits and publishing.
          </p>
        </article>

        <article className="space-y-2">
          <h2 className="text-xl font-medium">
            <Link
              href="/work/bbc-digital-storytelling"
              className="underline-offset-4 hover:underline"
            >
              BBC Digital Editorial Storytelling
            </Link>
          </h2>
          <p className="text-zinc-700">
            Re-imagining archive, daily programming and live national moments as
            social-first editorial stories for new audiences.
          </p>
        </article>
      </section>

      <hr className="border-zinc-200" />

      {/* Thumbnail wall */}
      <section className="space-y-6">
        <div className="space-y-2">
          <h2 className="text-xl font-medium">Further selected work</h2>
          <p className="text-zinc-700">
            A wider selection of projects. Some link to full case studies, others to
            clips or playlists.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
          {THUMBS.map((item) => (
            <Link
              key={item.title}
              href={item.href}
              className="group block"
              aria-label={item.title}
            >
              <div className="overflow-hidden rounded-md border border-zinc-200 bg-white">
                <img
                  src={item.src}
                  alt={item.title}
                  className="aspect-video w-full object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                  loading="lazy"
                />
              </div>
              <div className="mt-2 text-sm text-zinc-600">
                {item.title}
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}