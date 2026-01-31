import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Jonah Maddox",
  description:
    "Producer / Director working with mission-driven organisations to make complex ideas clear, careful and human.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-zinc-50 text-zinc-900">
        <div className="mx-auto max-w-3xl px-6 py-16">
          <header className="flex items-baseline justify-between gap-6">
            <a href="/" className="text-lg font-semibold tracking-tight">
              Jonah Maddox
            </a>

            <nav className="text-sm text-zinc-700">
              <ul className="flex flex-wrap gap-x-6 gap-y-2">
                <li>
                  <a className="hover:underline underline-offset-4" href="/work">
                    Work
                  </a>
                </li>
                <li>
                  <a
                    className="hover:underline underline-offset-4"
                    href="/thinking"
                  >
                    Reflections
                  </a>
                </li>
                <li>
                  <a
                    className="hover:underline underline-offset-4"
                    href="/about"
                  >
                    About
                  </a>
                </li>
                <li>
                  <a
                    className="hover:underline underline-offset-4"
                    href="/contact"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </nav>
          </header>

          <div className="mt-16">{children}</div>

          <footer className="mt-24 border-t border-zinc-200 pt-8 text-sm text-zinc-600">
            <p>
              London & Cambridge ·{" "}
              <a
                className="hover:underline underline-offset-4"
                href="mailto:hello@jonahmaddox.co.uk"
              >
                hello@jonahmaddox.co.uk
              </a>
            </p>
          </footer>
        </div>
      </body>
    </html>
  );
}