import Link from "next/link";

const quickLinks = [
  { href: "/", label: "Home" },
  { href: "/resources", label: "Resources" },
  { href: "/diagnosis", label: "Getting Diagnosed" },
  { href: "/tools", label: "Tools" },
  { href: "/community", label: "Community" },
  { href: "/about", label: "About" },
] as const;

const crisisResources = [
  {
    href: "https://988lifeline.org",
    label: "988 Suicide & Crisis Lifeline",
    note: "If you're in crisis, call 988",
  },
  {
    href: "https://chadd.org",
    label: "CHADD",
    note: "Children and Adults with ADHD",
  },
  {
    href: "https://add.org",
    label: "ADDA",
    note: "Attention Deficit Disorder Association",
  },
  {
    href: "https://www.additudemag.com",
    label: "ADDitude Magazine",
  },
] as const;

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-bg-dark text-white/90">
      {/* Main footer grid */}
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* Column 1 — Branding */}
          <div className="space-y-4">
            <Link href="/" className="inline-block text-2xl font-bold tracking-tight">
              <span className="text-white">Open</span>
              <span className="text-accent-coral">ADHD</span>
            </Link>

            <p className="text-sm leading-relaxed text-white/70">
              Free, open-source resources to help people understand, manage, and
              thrive with ADHD&nbsp;— built by the community, for the community.
            </p>

            <p className="text-sm font-medium text-accent-amber">
              Open source, built with ❤️ for the ADHD community
            </p>
          </div>

          {/* Column 2 — Quick Links */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-accent-teal">
              Quick Links
            </h3>

            <ul className="space-y-2">
              {quickLinks.map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-sm text-white/70 transition-colors hover:text-accent-coral"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 — Crisis Resources */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-accent-coral">
              Crisis Resources
            </h3>

            <ul className="space-y-3">
              {crisisResources.map(({ href, label, ...rest }) => (
                <li key={href}>
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-medium text-white/90 transition-colors hover:text-accent-amber"
                  >
                    {label}
                  </a>
                  {"note" in rest && (
                    <p className="text-xs text-white/50">{rest.note}</p>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4 — Open Source */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-accent-lavender">
              Open Source
            </h3>

            <p className="text-sm leading-relaxed text-white/70">
              This project is open source under the{" "}
              <span className="font-medium text-white/90">GPL-3.0</span> license.
            </p>

            <a
              href="https://github.com/carterlasalle/OpenADHD"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 inline-flex items-center gap-2 rounded-lg bg-white/10 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-white/20"
            >
              {/* GitHub icon */}
              <svg
                className="h-5 w-5"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.338c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2Z"
                />
              </svg>
              View on GitHub
            </a>

            <p className="mt-3 text-sm font-medium text-accent-teal">
              Contributions welcome!
            </p>
          </div>
        </div>
      </div>

      {/* Disclaimer */}
      <div className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8">
          <p className="text-center text-xs leading-relaxed text-white/50">
            OpenADHD provides educational resources only. This is not medical
            advice. Always consult healthcare professionals for diagnosis and
            treatment.
          </p>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10 bg-bg-dark">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-4 py-4 text-xs text-white/50 sm:flex-row sm:px-6 lg:px-8">
          <p>&copy; {year} OpenADHD. All rights reserved.</p>
          <p>Made with 🧠 by the OpenADHD community</p>
        </div>
      </div>
    </footer>
  );
}
