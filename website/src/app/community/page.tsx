"use client";

import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";

/* ─────────────────────────────────────────────────────────────────────────────
   Data
   ───────────────────────────────────────────────────────────────────────────── */

const stats = [
  { value: "10%", label: "of adults have ADHD worldwide" },
  { value: "80%", label: "feel less alone after joining a community" },
  { value: "3×", label: "more likely to stick with strategies with peer support" },
];

const redditCommunities = [
  {
    name: "r/ADHD",
    members: "1.8M+ members",
    description: "The largest ADHD community on the internet — general discussion, tips, and peer support.",
    url: "https://reddit.com/r/ADHD",
  },
  {
    name: "r/adhdwomen",
    members: "400K+ members",
    description: "A supportive space for women navigating ADHD diagnosis, treatment, and daily life.",
    url: "https://reddit.com/r/adhdwomen",
  },
  {
    name: "r/ADHDmemes",
    members: "700K+ members",
    description: "Humor and relatability — sometimes laughter is the best medicine.",
    url: "https://reddit.com/r/ADHDmemes",
  },
  {
    name: "r/ADHD_Programmers",
    members: "100K+ members",
    description: "For developers and tech workers managing ADHD in the workplace.",
    url: "https://reddit.com/r/ADHD_Programmers",
  },
];

const youtubeChannels = [
  {
    name: "How to ADHD",
    creator: "Jessica McCabe",
    description: "Warm, research-backed videos that make ADHD understandable and empowering.",
    url: "https://www.youtube.com/@HowtoADHD",
  },
  {
    name: "Dr. Russell Barkley",
    creator: "Leading ADHD researcher",
    description: "In-depth lectures from one of the world's foremost ADHD scientists.",
    url: "https://www.youtube.com/@RussellBarkley",
  },
  {
    name: "ADHD Jesse",
    creator: "Jesse J. Anderson",
    description: "Personal stories, practical strategies, and deeply relatable content.",
    url: "https://www.youtube.com/@ADHDJesse",
  },
  {
    name: "Dr. Tracey Marks",
    creator: "Psychiatrist",
    description: "Clear, practical mental health education from a practicing psychiatrist.",
    url: "https://www.youtube.com/@DrTraceyMarks",
  },
];

const podcasts = [
  {
    name: "ADHD Essentials",
    description: "Practical strategies for everyday ADHD challenges.",
    emoji: "🎧",
  },
  {
    name: "Hacking Your ADHD",
    description: "Tips and tricks for working with your ADHD brain.",
    emoji: "🧩",
  },
  {
    name: "ADHD reWired",
    description: "Science-based approaches to thriving with ADHD.",
    emoji: "🔬",
  },
  {
    name: "Translating ADHD",
    description: "For couples and relationships affected by ADHD.",
    emoji: "💑",
  },
];

const organizations = [
  {
    name: "CHADD",
    fullName: "Children and Adults with ADHD",
    url: "https://chadd.org",
    description:
      "The leading US nonprofit for ADHD — local chapters, webinars, and advocacy.",
  },
  {
    name: "ADDA",
    fullName: "Attention Deficit Disorder Association",
    url: "https://add.org",
    description:
      "Focused on adults with ADHD — virtual support groups, conferences, and professional directories.",
  },
  {
    name: "ADDitude Magazine",
    fullName: "ADDitude",
    url: "https://additudemag.com",
    description:
      "Leading ADHD media outlet with expert articles, free webinars, and downloadable guides.",
  },
  {
    name: "ADHD Foundation",
    fullName: "ADHD Foundation (UK)",
    url: "https://adhdfoundation.org.uk",
    description:
      "The UK's leading ADHD charity — training, resources, and neurodiversity advocacy.",
  },
  {
    name: "CADDRA",
    fullName: "Canadian ADHD Resource Alliance",
    url: "https://caddra.ca",
    description:
      "Canada's leading ADHD organization — evidence-based clinical guidelines and patient resources.",
  },
];

const supportServices = [
  {
    emoji: "🎯",
    title: "ADHD Coaches",
    description:
      "ADHD coaches help you build systems, develop strategies, and stay accountable. They tailor approaches to your unique strengths.",
  },
  {
    emoji: "🧠",
    title: "Therapists",
    description:
      "ADHD-specialized therapists help with emotional regulation, self-esteem, and coping strategies. CBT is particularly effective.",
  },
  {
    emoji: "🤝",
    title: "Support Groups",
    description:
      "In-person and virtual support groups offer a safe space to share experiences. CHADD and ADDA both host regular groups.",
  },
  {
    emoji: "👥",
    title: "Peer Support & Body Doubling",
    description:
      "Working alongside others — even virtually — can dramatically boost focus. Try Focusmate or Flown for accountability partnerships.",
  },
];

const books = [
  {
    title: "Driven to Distraction",
    author: "Edward M. Hallowell & John J. Ratey",
    description:
      "The groundbreaking classic that brought ADHD into mainstream understanding.",
  },
  {
    title: "Taking Charge of Adult ADHD",
    author: "Russell A. Barkley",
    description:
      "A practical, science-based guide full of concrete strategies from a leading researcher.",
  },
  {
    title: "You Mean I'm Not Lazy, Stupid or Crazy?!",
    author: "Kate Kelly & Peggy Ramundo",
    description:
      "A warm, witty guide written by two women with ADHD covering diagnosis to daily life.",
  },
  {
    title: "Delivered from Distraction",
    author: "Edward M. Hallowell & John J. Ratey",
    description:
      "Updated research, new stories, and an emphasis on ADHD as a strength.",
  },
  {
    title: "The ADHD Effect on Marriage",
    author: "Melissa Orlov",
    description:
      "Essential reading for couples navigating ADHD's impact on relationships.",
  },
  {
    title: "Smart but Stuck",
    author: "Thomas E. Brown",
    description:
      "Explores how intelligent people with ADHD get stuck and the emotional side of executive function.",
  },
];

/* ─────────────────────────────────────────────────────────────────────────────
   Page Component
   ───────────────────────────────────────────────────────────────────────────── */

export default function CommunityPage() {
  return (
    <>
      {/* ================================================================
          1. HERO
          ================================================================ */}
      <section className="relative overflow-hidden pt-28 pb-20 md:pt-40 md:pb-28">
        <div
          aria-hidden="true"
          className="blob -top-40 -left-40 h-[520px] w-[520px] opacity-30"
          style={{ background: "var(--brand)" }}
        />
        <div
          aria-hidden="true"
          className="blob top-24 -right-20 h-[420px] w-[420px] opacity-20"
          style={{ background: "var(--purple)" }}
        />
        <div
          aria-hidden="true"
          className="blob -bottom-24 left-1/3 h-[360px] w-[360px] opacity-20"
          style={{ background: "var(--teal)" }}
        />

        <div className="relative mx-auto max-w-5xl px-6 text-center">
          <ScrollReveal direction="up" duration={700}>
            <h1 className="text-5xl font-extrabold leading-[1.05] tracking-tight md:text-7xl lg:text-8xl">
              Find Your{" "}
              <span className="gradient-text">People</span>
            </h1>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={150}>
            <p className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-ink-muted md:text-xl">
              Living with ADHD can feel lonely — but it doesn&apos;t have to.
              Millions of people understand exactly what you&apos;re going
              through. Find your community, share your story, and discover
              you&apos;ve never been alone.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* ================================================================
          2. WHY COMMUNITY MATTERS
          ================================================================ */}
      <section className="relative py-16 md:py-24">
        <div className="mx-auto max-w-5xl px-6">
          <ScrollReveal direction="up">
            <h2 className="text-center text-3xl font-extrabold md:text-4xl">
              Why Community{" "}
              <span className="gradient-text">Matters</span>
            </h2>
          </ScrollReveal>

          <p className="mx-auto mt-6 max-w-3xl text-center text-lg leading-relaxed text-ink-muted">
            ADHD can feel incredibly isolating. You might spend years thinking
            you&apos;re &ldquo;lazy&rdquo; or &ldquo;not trying hard
            enough.&rdquo; Finding others who <em>get it</em> changes
            everything. The moment someone describes your exact experience —
            the time blindness, the hyperfocus rabbit holes, the emotional
            intensity — something clicks.{" "}
            <strong>You&apos;re not broken. You never were.</strong>
          </p>

          <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-3">
            {stats.map((stat) => (
              <div key={stat.label} className="card px-6 py-6 text-center">
                <p className="gradient-text text-3xl font-extrabold">
                  {stat.value}
                </p>
                <p className="mt-1 text-sm font-semibold text-ink-muted">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================================================================
          3. ONLINE COMMUNITIES
          ================================================================ */}
      <section className="relative py-16 md:py-24">
        <div
          aria-hidden="true"
          className="blob -bottom-40 -right-32 h-[400px] w-[400px] opacity-20"
          style={{ background: "var(--teal)" }}
        />

        <div className="relative mx-auto max-w-5xl px-6">
          <ScrollReveal direction="up">
            <h2 className="text-center text-3xl font-extrabold md:text-4xl">
              🌐 Online{" "}
              <span className="gradient-text">Communities</span>
            </h2>
          </ScrollReveal>
          <p className="mx-auto mt-3 max-w-2xl text-center text-ink-muted">
            The internet is full of amazing ADHD communities. Here are the best
            places to connect, learn, and feel understood.
          </p>

          {/* ── Reddit ────────────────────────────────────────────────── */}
          <div className="mt-12">
            <h3 className="flex items-center gap-2 text-xl font-bold">
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-brand text-lg text-white">
                📣
              </span>
              Reddit
            </h3>
            <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
              {redditCommunities.map((sub) => (
                <a
                  key={sub.name}
                  href={sub.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="card flex flex-col p-5"
                >
                  <p className="text-lg font-bold text-brand">{sub.name}</p>
                  <p className="mt-0.5 text-xs font-semibold text-ink-faint">
                    {sub.members}
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-ink-muted">
                    {sub.description}
                  </p>
                </a>
              ))}
            </div>
          </div>

          {/* ── YouTube ──────────────────────────────────────────────── */}
          <div className="mt-12">
            <h3 className="flex items-center gap-2 text-xl font-bold">
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-brand text-lg text-white">
                🎥
              </span>
              YouTube
            </h3>
            <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
              {youtubeChannels.map((channel) => (
                <a
                  key={channel.name}
                  href={channel.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="card flex flex-col p-5"
                >
                  <p className="text-lg font-bold text-brand">
                    {channel.name}
                  </p>
                  <p className="mt-0.5 text-xs font-semibold text-ink-faint">
                    {channel.creator}
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-ink-muted">
                    {channel.description}
                  </p>
                </a>
              ))}
            </div>
          </div>

          {/* ── Podcasts ─────────────────────────────────────────────── */}
          <div className="mt-12">
            <h3 className="flex items-center gap-2 text-xl font-bold">
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-teal text-lg text-white">
                🎙️
              </span>
              Podcasts
            </h3>
            <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
              {podcasts.map((pod) => (
                <div
                  key={pod.name}
                  className="card flex items-start gap-4 p-5"
                >
                  <span className="text-2xl">{pod.emoji}</span>
                  <div>
                    <p className="text-lg font-bold text-teal">{pod.name}</p>
                    <p className="mt-1 text-sm leading-relaxed text-ink-muted">
                      {pod.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ================================================================
          4. PROFESSIONAL ORGANIZATIONS
          ================================================================ */}
      <section className="relative py-16 md:py-24">
        <div
          aria-hidden="true"
          className="blob -top-20 -left-40 h-[400px] w-[400px] opacity-15"
          style={{ background: "var(--amber)" }}
        />

        <div className="relative mx-auto max-w-5xl px-6">
          <ScrollReveal direction="up">
            <h2 className="text-center text-3xl font-extrabold md:text-4xl">
              🏛️ Professional{" "}
              <span className="gradient-text">Organizations</span>
            </h2>
          </ScrollReveal>
          <p className="mx-auto mt-3 max-w-2xl text-center text-ink-muted">
            Established organizations providing evidence-based resources,
            advocacy, and support for people with ADHD worldwide.
          </p>

          <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {organizations.map((org) => (
              <div key={org.name} className="card flex flex-col p-6">
                <p className="text-lg font-bold">{org.name}</p>
                <p className="text-xs font-semibold text-ink-faint">
                  {org.fullName}
                </p>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-ink-muted">
                  {org.description}
                </p>
                <a
                  href={org.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex items-center gap-1 text-sm font-bold text-brand transition-colors hover:text-brand-dark"
                >
                  Visit {org.name} <span aria-hidden="true">→</span>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================================================================
          5. SUPPORT SERVICES
          ================================================================ */}
      <section className="relative py-16 md:py-24">
        <div className="mx-auto max-w-5xl px-6">
          <ScrollReveal direction="up">
            <h2 className="text-center text-3xl font-extrabold md:text-4xl">
              🛟 Support{" "}
              <span className="gradient-text">Services</span>
            </h2>
          </ScrollReveal>
          <p className="mx-auto mt-3 max-w-2xl text-center text-ink-muted">
            Professional support can be transformative. Here are the types of
            help available.
          </p>

          <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2">
            {supportServices.map((service) => (
              <div key={service.title} className="card flex flex-col p-6">
                <div className="flex items-center gap-3">
                  <span className="text-3xl">{service.emoji}</span>
                  <h3 className="text-xl font-bold">{service.title}</h3>
                </div>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-ink-muted">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================================================================
          6. RECOMMENDED BOOKS
          ================================================================ */}
      <section className="relative py-16 md:py-24">
        <div
          aria-hidden="true"
          className="blob top-0 right-0 h-[400px] w-[400px] opacity-15"
          style={{ background: "var(--purple)" }}
        />

        <div className="relative mx-auto max-w-5xl px-6">
          <ScrollReveal direction="up">
            <h2 className="text-center text-3xl font-extrabold md:text-4xl">
              📚 Recommended{" "}
              <span className="gradient-text">Books</span>
            </h2>
          </ScrollReveal>
          <p className="mx-auto mt-3 max-w-2xl text-center text-ink-muted">
            These books have helped millions of people understand ADHD — and
            themselves. Start with any one of them.
          </p>

          <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
            {books.map((book) => (
              <div key={book.title} className="card flex flex-col p-6">
                <p className="text-lg font-bold leading-snug">
                  📖 {book.title}
                </p>
                <p className="mt-1 text-xs font-semibold text-brand">
                  by {book.author}
                </p>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-ink-muted">
                  {book.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================================================================
          7. CRISIS RESOURCES
          ================================================================ */}
      <section className="bg-surface-inv py-16 text-ink-on-dark md:py-24">
        <div className="mx-auto max-w-4xl px-6">
          <ScrollReveal direction="up">
            <h2 className="text-center text-3xl font-extrabold md:text-4xl">
              Need Help Right Now?
            </h2>
          </ScrollReveal>
          <p className="mx-auto mt-4 max-w-2xl text-center text-lg leading-relaxed text-ink-on-dark/70">
            If you&apos;re in crisis, <strong>you are not alone</strong>. ADHD
            can come with intense emotions, burnout, and overwhelm. It is{" "}
            <strong>always okay to ask for help</strong>.
          </p>

          <div className="mx-auto mt-10 grid max-w-3xl grid-cols-1 gap-6 sm:grid-cols-2">
            <div className="card-dark rounded-2xl p-6 text-center">
              <span className="text-3xl">📞</span>
              <p className="mt-3 text-sm font-bold text-ink-on-dark">
                988 Suicide &amp; Crisis Lifeline
              </p>
              <p className="mt-1 text-xl font-extrabold text-brand">
                Call or text 988
              </p>
              <p className="mt-1 text-xs text-ink-on-dark/60">
                Free, confidential, 24/7 support in the US
              </p>
            </div>
            <div className="card-dark rounded-2xl p-6 text-center">
              <span className="text-3xl">💬</span>
              <p className="mt-3 text-sm font-bold text-ink-on-dark">
                Crisis Text Line
              </p>
              <p className="mt-1 text-xl font-extrabold text-teal">
                Text HOME to 741741
              </p>
              <p className="mt-1 text-xs text-ink-on-dark/60">
                Free crisis counseling via text message
              </p>
            </div>
          </div>

          <p className="mx-auto mt-8 max-w-xl text-center text-sm text-ink-on-dark/60">
            🌍 Outside the US? Visit the{" "}
            <a
              href="https://www.iasp.info/resources/Crisis_Centres/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-teal underline underline-offset-2 hover:text-teal-dark"
            >
              International Association for Suicide Prevention
            </a>{" "}
            to find crisis centers in your country.
          </p>

          <p className="mt-6 text-center text-sm font-semibold text-ink-on-dark/80">
            💛 You matter. Your struggles are valid. Help is available 24/7.
          </p>
        </div>
      </section>

      {/* ================================================================
          8. JOIN OPENADHD CTA
          ================================================================ */}
      <section className="relative overflow-hidden py-16 md:py-24">
        <div
          aria-hidden="true"
          className="blob -bottom-20 left-1/2 h-[500px] w-[500px] -translate-x-1/2 opacity-20"
          style={{ background: "var(--brand)" }}
        />

        <div className="relative mx-auto max-w-3xl px-6 text-center">
          <ScrollReveal direction="up">
            <h2 className="text-3xl font-extrabold md:text-4xl">
              🚀 Join the{" "}
              <span className="gradient-text">OpenADHD</span> Community
            </h2>
          </ScrollReveal>
          <p className="mt-4 text-lg leading-relaxed text-ink-muted">
            OpenADHD is open-source and community-driven. Contribute your tips,
            share resources, improve the code, or simply spread the word. Every
            contribution helps someone with ADHD feel less alone.
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="https://github.com/OpenADHD/OpenADHD"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-14 items-center gap-2 rounded-xl bg-brand px-8 text-lg font-bold text-white shadow-lg shadow-brand/25 transition-transform hover:scale-105"
            >
              ⭐ Star on GitHub
            </a>
            <Link
              href="/resources"
              className="inline-flex h-14 items-center gap-2 rounded-xl border-2 border-ink px-8 text-lg font-bold text-ink transition-colors hover:bg-ink hover:text-white"
            >
              💡 Share Your Tips
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
