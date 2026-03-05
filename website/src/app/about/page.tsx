"use client";

import Link from "next/link";
import { categories } from "@/data/tips";
import ScrollReveal from "@/components/ScrollReveal";

const totalTips = categories.reduce((sum, c) => sum + c.tips.length, 0);

/* ─────────────────────────────────────────────────────────────────────────────
   Data
   ───────────────────────────────────────────────────────────────────────────── */

const problems = [
  {
    emoji: "🤔",
    title: "Misunderstood & Stigmatized",
    desc: "ADHD is one of the most misunderstood conditions. Myths like \"just try harder\" or \"it's not real\" cause real harm and delay people from getting help.",
  },
  {
    emoji: "🌐",
    title: "Scattered Resources",
    desc: "Quality information is scattered across hundreds of websites, forums, and social media accounts — making it exhausting to find what you need.",
  },
  {
    emoji: "💸",
    title: "Paywalled Knowledge",
    desc: "Too many helpful resources sit behind subscriptions or expensive programs, creating barriers for the people who need them most.",
  },
  {
    emoji: "🏥",
    title: "Confusing Diagnosis",
    desc: "The path to diagnosis is often unclear, expensive, and full of gatekeeping — especially for adults, women, and people of colour.",
  },
  {
    emoji: "😔",
    title: "Isolation & Shame",
    desc: "Without community, many people with ADHD spend years thinking something is fundamentally wrong with them, when the truth is they just think differently.",
  },
  {
    emoji: "✨",
    title: "Our Answer",
    desc: "OpenADHD centralizes, organizes, and democratizes access to ADHD information — so nobody has to navigate this alone.",
  },
];

const values = [
  {
    emoji: "🌍",
    title: "Accessibility",
    desc: "Free and open to everyone, everywhere. No paywalls, no sign-ups, no barriers. If you have an internet connection, you have access.",
    color: "var(--teal)",
  },
  {
    emoji: "🤝",
    title: "Community-Driven",
    desc: "Built by people with ADHD, for people with ADHD. Every tip, guide, and resource comes from lived experience and genuine understanding.",
    color: "var(--brand)",
  },
  {
    emoji: "📖",
    title: "Open Source",
    desc: "Transparent, collaborative, and always improving. Anyone can see our code, suggest changes, and help make this project better.",
    color: "var(--amber)",
  },
  {
    emoji: "💛",
    title: "Empathy First",
    desc: "Designed with understanding and compassion. We know how hard this can be, because many of us live it every day.",
    color: "var(--purple-soft)",
  },
  {
    emoji: "🧠",
    title: "Evidence-Informed",
    desc: "Grounded in research and real-world experience. We combine clinical evidence with practical wisdom from the ADHD community.",
    color: "var(--purple)",
  },
  {
    emoji: "⚡",
    title: "ADHD-Friendly",
    desc: "Designed to be usable by the people who need it most. Clear layouts, scannable content, and no overwhelming walls of text.",
    color: "var(--teal)",
  },
];

const offerings = [
  {
    emoji: "💡",
    stat: `${totalTips}+`,
    title: "Community-Curated Tips",
    desc: `Across ${categories.length} life categories — from focus strategies to relationship advice, all contributed by people who get it.`,
    color: "var(--brand)",
  },
  {
    emoji: "🏥",
    stat: "Complete",
    title: "Diagnosis Guide",
    desc: "Step-by-step walkthrough of the diagnosis process, what to expect, how to prepare, and where to find professionals.",
    color: "var(--teal)",
  },
  {
    emoji: "🛠️",
    stat: "Growing",
    title: "Tools & Strategies",
    desc: "A practical database of tools, techniques, and strategies for daily ADHD management — tested by the community.",
    color: "var(--amber)",
  },
  {
    emoji: "🤝",
    stat: "Connected",
    title: "Community Directory",
    desc: "Support groups, online communities, professional organizations, and resources to help you find your people.",
    color: "var(--purple-soft)",
  },
  {
    emoji: "🆘",
    stat: "24/7",
    title: "Crisis Resources",
    desc: "Immediate access to crisis helplines, text lines, and emergency support — because sometimes you need help right now.",
    color: "var(--purple)",
  },
  {
    emoji: "💰",
    stat: "100%",
    title: "Free & Open Source",
    desc: "Everything on this site is completely free. No subscriptions, no premium tiers, no ads. Just help.",
    color: "var(--brand)",
  },
];

const stats = [
  {
    value: "~366M",
    label: "Adults worldwide have ADHD",
    icon: "🌍",
    source: "World Federation of ADHD",
  },
  {
    value: "~129M",
    label: "Children worldwide have ADHD",
    icon: "👧",
    source: "Global prevalence studies",
  },
  {
    value: "~20%",
    label: "Of adults with ADHD are actually diagnosed",
    icon: "🔎",
    source: "Estimates from clinical research",
  },
  {
    value: "Age 7",
    label: "Average age of diagnosis for children — much later for adults",
    icon: "📅",
    source: "CDC data",
  },
  {
    value: "$122.8B",
    label: "Annual cost of ADHD to the U.S. economy",
    icon: "💰",
    source: "Journal of Clinical Child & Adolescent Psychology",
  },
  {
    value: "3×",
    label: "More likely to start a business if you have ADHD",
    icon: "🚀",
    source: "Research on ADHD entrepreneurship",
  },
  {
    value: "80%",
    label: "Of people respond positively to ADHD treatment",
    icon: "💚",
    source: "Treatment efficacy studies",
  },
];

const contributionWays = [
  { emoji: "💡", text: "Submit a tip that helped you manage your ADHD" },
  { emoji: "🐛", text: "Report bugs or issues you find on the site" },
  { emoji: "📝", text: "Improve existing content or add new resources" },
  { emoji: "🌐", text: "Help translate content into other languages" },
  { emoji: "📢", text: "Spread the word and share with someone who needs it" },
  { emoji: "⭐", text: "Star us on GitHub to help others discover the project" },
];

/* ─────────────────────────────────────────────────────────────────────────────
   Page Component
   ───────────────────────────────────────────────────────────────────────────── */
export default function AboutPage() {
  return (
    <>
      {/* ================================================================
          1. HERO
          ================================================================ */}
      <section className="relative overflow-hidden pt-28 pb-20 md:pb-28">
        <div
          aria-hidden="true"
          className="blob absolute -top-32 -left-32 h-[500px] w-[500px] opacity-30"
          style={{ background: "var(--purple-soft)" }}
        />
        <div
          aria-hidden="true"
          className="blob absolute top-20 right-0 h-[400px] w-[400px] opacity-20"
          style={{ background: "var(--brand)" }}
        />
        <div
          aria-hidden="true"
          className="blob absolute -bottom-20 left-1/2 h-[350px] w-[350px] -translate-x-1/2 opacity-20"
          style={{ background: "var(--teal)" }}
        />

        <div className="relative mx-auto max-w-5xl px-6 text-center">
          <ScrollReveal>
            <h1 className="text-5xl font-extrabold leading-[1.1] tracking-tight text-ink md:text-7xl">
              About <span className="gradient-text">OpenADHD</span>
            </h1>
          </ScrollReveal>

          <ScrollReveal delay={120}>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-ink-muted md:text-xl">
              Democratizing access to ADHD resources — so that everyone,
              regardless of income, location, or background, can get the help
              they deserve.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={240}>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link
                href="/resources"
                className="inline-flex h-14 items-center gap-2 rounded-xl bg-brand px-8 text-lg font-bold text-white shadow-lg shadow-brand/25 transition-transform hover:scale-105"
              >
                Explore Resources
                <span aria-hidden="true">→</span>
              </Link>
              <a
                href="https://github.com/carterlasalle/OpenADHD"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-14 items-center gap-2 rounded-xl border-2 border-ink px-8 text-lg font-bold text-ink transition-colors hover:bg-ink hover:text-white"
              >
                <svg
                  className="h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                    clipRule="evenodd"
                  />
                </svg>
                View on GitHub
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ================================================================
          2. MISSION STATEMENT
          ================================================================ */}
      <section className="bg-surface-alt py-20 md:py-28">
        <div className="mx-auto max-w-5xl px-6">
          <ScrollReveal>
            <h2 className="text-center text-3xl font-extrabold tracking-tight text-ink md:text-5xl">
              Our <span className="gradient-text">Mission</span>
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={100}>
            <div className="mx-auto mt-10 max-w-3xl">
              <blockquote
                className="card rounded-2xl border-l-4 p-8 md:p-10"
                style={{ borderLeftColor: "var(--brand)" }}
              >
                <p className="text-lg font-semibold leading-relaxed text-ink md:text-xl">
                  &ldquo;The mission of OpenADHD is to empower and support
                  individuals with ADHD and their families by providing
                  accessible and comprehensive resources, support, and advocacy
                  to improve the quality of life and promote understanding of
                  ADHD.&rdquo;
                </p>
              </blockquote>
            </div>
          </ScrollReveal>

          <div className="mx-auto mt-12 max-w-3xl space-y-6">
            <ScrollReveal delay={200}>
              <p className="text-base leading-relaxed text-ink-muted md:text-lg">
                In practice, this means building a single, trusted destination
                where anyone — newly diagnosed adults, concerned parents,
                educators, or partners — can find clear, actionable information
                about ADHD without hitting a paywall or wading through
                misinformation.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={280}>
              <p className="text-base leading-relaxed text-ink-muted md:text-lg">
                We curate tips from people with lived experience, maintain
                up-to-date guides on diagnosis and treatment, and connect
                visitors with vetted communities and crisis support. Everything
                is open source, community-reviewed, and designed to be
                ADHD-friendly — scannable, honest, and free of clutter.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={360}>
              <p className="text-base leading-relaxed text-ink-muted md:text-lg">
                Our ultimate goal is a world where an ADHD diagnosis is the
                start of empowerment, not confusion — and where no one has to
                figure things out alone.
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ================================================================
          3. WHY OPENADHD — The Problem
          ================================================================ */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-5xl px-6">
          <ScrollReveal>
            <h2 className="text-center text-3xl font-extrabold tracking-tight text-ink md:text-5xl">
              Why <span className="gradient-text">OpenADHD</span>?
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <p className="mx-auto mt-4 max-w-2xl text-center text-ink-muted md:text-lg">
              We started this project because we saw a gap — and we knew we
              could help fill it.
            </p>
          </ScrollReveal>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {problems.map((problem, i) => (
              <ScrollReveal key={problem.title} delay={i * 80}>
                <div
                  className={`card h-full rounded-2xl p-8 ${
                    problem.title === "Our Answer"
                      ? "border-2 sm:col-span-2 lg:col-span-1"
                      : ""
                  }`}
                  style={
                    problem.title === "Our Answer"
                      ? { borderColor: "var(--brand)" }
                      : undefined
                  }
                >
                  <span className="text-4xl">{problem.emoji}</span>
                  <h3 className="mt-4 text-lg font-bold text-ink">
                    {problem.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-muted">
                    {problem.desc}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ================================================================
          4. OUR VALUES
          ================================================================ */}
      <section className="bg-surface-alt py-20 md:py-28">
        <div className="mx-auto max-w-5xl px-6">
          <ScrollReveal>
            <h2 className="text-center text-3xl font-extrabold tracking-tight text-ink md:text-5xl">
              Our <span className="gradient-text">Values</span>
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <p className="mx-auto mt-4 max-w-xl text-center text-ink-muted md:text-lg">
              These principles guide every decision we make.
            </p>
          </ScrollReveal>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {values.map((value, i) => (
              <ScrollReveal key={value.title} delay={i * 80}>
                <div className="card h-full rounded-2xl p-8">
                  <span
                    className="flex h-14 w-14 items-center justify-center rounded-2xl text-3xl"
                    style={{ background: `${value.color}20` }}
                  >
                    {value.emoji}
                  </span>
                  <h3 className="mt-5 text-xl font-bold text-ink">
                    {value.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-muted">
                    {value.desc}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ================================================================
          5. WHAT WE OFFER
          ================================================================ */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-6">
          <ScrollReveal>
            <h2 className="text-center text-3xl font-extrabold tracking-tight text-ink md:text-5xl">
              What We <span className="gradient-text">Offer</span>
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <p className="mx-auto mt-4 max-w-xl text-center text-ink-muted md:text-lg">
              A growing library of resources designed to help at every stage of
              your ADHD journey.
            </p>
          </ScrollReveal>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {offerings.map((item, i) => (
              <ScrollReveal key={item.title} delay={i * 80}>
                <div className="card h-full rounded-2xl p-8">
                  <div className="flex items-start justify-between">
                    <span
                      className="flex h-14 w-14 items-center justify-center rounded-2xl text-3xl"
                      style={{ background: `${item.color}20` }}
                    >
                      {item.emoji}
                    </span>
                    <span
                      className="text-2xl font-extrabold"
                      style={{ color: item.color }}
                    >
                      {item.stat}
                    </span>
                  </div>
                  <h3 className="mt-5 text-lg font-bold text-ink">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-muted">
                    {item.desc}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal delay={300}>
            <div className="mt-12 text-center">
              <Link
                href="/resources"
                className="inline-flex items-center gap-1 text-lg font-bold text-brand transition-colors hover:text-brand-dark"
              >
                Explore all resources <span aria-hidden="true">→</span>
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ================================================================
          6. OPEN SOURCE
          ================================================================ */}
      <section className="bg-surface-inv py-20 text-ink-on-dark md:py-28">
        <div className="mx-auto max-w-5xl px-6">
          <div className="text-center">
            <ScrollReveal>
              <h2 className="text-3xl font-extrabold tracking-tight md:text-5xl">
                Proudly <span className="gradient-text">Open Source</span>
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={100}>
              <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-ink-on-dark/70">
                OpenADHD is licensed under the{" "}
                <strong className="text-ink-on-dark">GPL-3.0 license</strong>.
                That means every line of code, every resource, and every guide
                is freely available to view, use, modify, and share. We believe
                knowledge about ADHD should never be locked behind a paywall.
              </p>
            </ScrollReveal>
          </div>

          <ScrollReveal delay={200}>
            <div className="mx-auto mt-10 max-w-3xl">
              <div className="card-dark rounded-2xl p-8">
                <h3 className="text-xl font-bold text-ink-on-dark">
                  What does open source mean? 🤔
                </h3>
                <p className="mt-3 leading-relaxed text-ink-on-dark/70">
                  Open source means our entire project is publicly available on
                  GitHub. Anyone can read the code, suggest improvements, report
                  issues, or contribute new content. It&apos;s a collaborative
                  model that ensures transparency, accountability, and
                  continuous improvement — driven by the very community it
                  serves.
                </p>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={300}>
            <div className="mt-12">
              <h3 className="text-center text-xl font-bold text-ink-on-dark">
                Ways to Contribute
              </h3>
              <div className="mx-auto mt-6 grid max-w-3xl gap-3 sm:grid-cols-2">
                {contributionWays.map((way) => (
                  <div
                    key={way.text}
                    className="card-dark flex items-start gap-3 rounded-xl px-5 py-4"
                  >
                    <span className="text-xl">{way.emoji}</span>
                    <p className="text-sm leading-relaxed text-ink-on-dark/80">
                      {way.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={400}>
            <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a
                href="https://github.com/carterlasalle/OpenADHD"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-14 items-center gap-3 rounded-xl bg-white px-8 text-lg font-bold text-ink shadow-lg transition-transform hover:scale-105"
              >
                <svg
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                    clipRule="evenodd"
                  />
                </svg>
                Contribute on GitHub
              </a>
              <a
                href="https://github.com/carterlasalle/OpenADHD"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-14 items-center gap-2 rounded-xl border-2 border-ink-on-dark/50 px-8 text-lg font-bold text-ink-on-dark transition-colors hover:border-ink-on-dark hover:bg-white/10"
              >
                ⭐ Star us on GitHub
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ================================================================
          7. ADHD BY THE NUMBERS
          ================================================================ */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-6">
          <ScrollReveal>
            <h2 className="text-center text-3xl font-extrabold tracking-tight text-ink md:text-5xl">
              ADHD by the <span className="gradient-text">Numbers</span>
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <p className="mx-auto mt-4 max-w-xl text-center text-ink-muted md:text-lg">
              The scale of ADHD is far larger than most people realize — and so
              is the potential for positive change.
            </p>
          </ScrollReveal>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat, i) => (
              <ScrollReveal key={stat.label} delay={i * 80}>
                <div className="card h-full rounded-2xl p-6 text-center">
                  <span className="text-4xl">{stat.icon}</span>
                  <p className="gradient-text mt-3 text-3xl font-extrabold md:text-4xl">
                    {stat.value}
                  </p>
                  <p className="mt-2 text-sm font-medium leading-snug text-ink-muted">
                    {stat.label}
                  </p>
                  <p className="mt-2 text-xs text-ink-faint">{stat.source}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ================================================================
          8. DISCLAIMER
          ================================================================ */}
      <section className="bg-surface-alt py-20 md:py-28">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <ScrollReveal>
            <h2 className="text-3xl font-extrabold tracking-tight text-ink md:text-5xl">
              ⚕️ Important <span className="gradient-text">Disclaimer</span>
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={100}>
            <div className="mx-auto mt-10">
              <div className="card rounded-2xl p-8 text-left md:p-10">
                <div className="space-y-4 text-sm leading-relaxed text-ink-muted md:text-base">
                  <p>
                    <strong className="text-ink">
                      📚 Educational purposes only.
                    </strong>{" "}
                    OpenADHD provides general educational resources and
                    information about ADHD. Our content is intended to inform
                    and support — not to diagnose, treat, or replace
                    professional medical advice.
                  </p>
                  <p>
                    <strong className="text-ink">
                      🩺 Not medical advice.
                    </strong>{" "}
                    Nothing on this website should be considered a substitute
                    for professional medical advice, diagnosis, or treatment.
                    Always consult with a qualified healthcare professional
                    regarding any medical condition or treatment.
                  </p>
                  <p>
                    <strong className="text-ink">
                      👨‍⚕️ Consult professionals.
                    </strong>{" "}
                    If you suspect you or someone you know has ADHD, please
                    seek evaluation from a licensed healthcare provider — such
                    as a psychiatrist, psychologist, or your primary care
                    doctor.
                  </p>
                  <p>
                    <strong className="text-ink">
                      🏛️ No affiliations.
                    </strong>{" "}
                    OpenADHD is an independent, community-driven project. We
                    are not affiliated with, endorsed by, or connected to any
                    medical organization, pharmaceutical company, or healthcare
                    provider.
                  </p>
                </div>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <p className="mt-8 text-sm text-ink-muted">
              If you&apos;re in crisis or need immediate help, please visit
              our{" "}
              <Link
                href="/community"
                className="font-bold text-brand hover:text-brand-dark"
              >
                crisis resources page
              </Link>{" "}
              or call <strong className="text-ink">988</strong> (Suicide &amp;
              Crisis Lifeline).
            </p>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
