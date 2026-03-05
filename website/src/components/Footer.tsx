import Link from "next/link";

const links = [
  { href: "/resources", label: "Resources" },
  { href: "/diagnosis", label: "Getting Diagnosed" },
  { href: "/tools", label: "Tools" },
  { href: "/community", label: "Community" },
  { href: "/about", label: "About" },
] as const;

const helplines = [
  { label: "988 Suicide & Crisis Lifeline", href: "https://988lifeline.org", note: "Call or text 988" },
  { label: "Crisis Text Line", href: "https://www.crisistextline.org", note: "Text HOME to 741741" },
  { label: "CHADD", href: "https://chadd.org", note: "Children and Adults with ADHD" },
  { label: "ADDA", href: "https://add.org", note: "Attention Deficit Disorder Association" },
] as const;

export default function Footer() {
  return (
    <footer className="bg-surface-inv text-ink-on-dark">
      {/* Top bar - decorative */}
      <div className="flex h-1">
        <div className="flex-1 bg-brand" />
        <div className="flex-1 bg-teal" />
        <div className="flex-1 bg-amber" />
        <div className="flex-1 bg-purple" />
      </div>

      <div className="mx-auto max-w-7xl px-5 pt-16 pb-8 lg:px-8">
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="space-y-5">
            <Link href="/" className="inline-block text-2xl font-bold tracking-tight">
              <span className="text-white">Open</span>
              <span className="text-brand">ADHD</span>
            </Link>
            <p className="text-sm leading-relaxed text-white/75">
              Free, open-source resources to help you understand, manage, and
              thrive with ADHD. Built by the community, for the community.
            </p>
            <div className="flex items-center gap-3">
              <a
                href="https://github.com/carterlasalle/OpenADHD"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 text-white/75 transition-all hover:border-brand hover:text-brand"
                aria-label="GitHub"
              >
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.338c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2Z" clipRule="evenodd" />
                </svg>
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="mb-5 text-xs font-bold uppercase tracking-[0.15em] text-white/60">
              Navigate
            </h3>
            <ul className="space-y-3">
              {links.map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-sm text-white/75 transition-colors hover:text-brand"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Crisis Resources */}
          <div>
            <h3 className="mb-5 text-xs font-bold uppercase tracking-[0.15em] text-brand">
              Crisis Resources
            </h3>
            <ul className="space-y-4">
              {helplines.map(({ label, href, note }) => (
                <li key={href}>
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-medium text-white/80 transition-colors hover:text-amber"
                  >
                    {label}
                  </a>
                  <p className="text-xs text-white/60">{note}</p>
                </li>
              ))}
            </ul>
          </div>

          {/* Open Source */}
          <div>
            <h3 className="mb-5 text-xs font-bold uppercase tracking-[0.15em] text-white/60">
              Open Source
            </h3>
            <p className="text-sm leading-relaxed text-white/75">
              Licensed under{" "}
              <span className="font-semibold text-white">GPL-3.0</span>.
              Everyone can contribute.
            </p>
            <a
              href="https://github.com/carterlasalle/OpenADHD"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center gap-2 rounded-xl bg-white/5 px-4 py-2.5 text-sm font-semibold text-white/80 transition-all hover:bg-brand hover:text-white"
            >
              <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.338c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2Z" clipRule="evenodd" />
              </svg>
              Contribute on GitHub
            </a>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="mt-14 rounded-xl border border-white/5 bg-white/3 px-5 py-4">
          <p className="text-center text-xs leading-relaxed text-white/70">
            <span className="font-semibold text-amber">Disclaimer:</span>{" "}
            OpenADHD provides educational resources only. This is not medical
            advice. Always consult healthcare professionals for diagnosis and
            treatment.
          </p>
        </div>

        {/* Bottom */}
        <div className="mt-8 flex flex-col items-center justify-between gap-3 border-t border-white/5 pt-6 text-xs text-white/60 sm:flex-row">
          <p>&copy; {new Date().getFullYear()} OpenADHD. Open source, free forever.</p>
          <p>Made with 🧠 by the ADHD community</p>
        </div>
      </div>
    </footer>
  );
}
