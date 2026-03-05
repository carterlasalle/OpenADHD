import type { Metadata } from "next";
import Link from "next/link";
import { categories } from "@/data/tips";

export const metadata: Metadata = {
  title: "About & Mission | OpenADHD",
  description:
    "Learn about OpenADHD's mission to empower individuals with ADHD through free, open-source resources, community support, and advocacy.",
};

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
    color: "var(--accent-teal)",
  },
  {
    emoji: "🤝",
    title: "Community-Driven",
    desc: "Built by people with ADHD, for people with ADHD. Every tip, guide, and resource comes from lived experience and genuine understanding.",
    color: "var(--accent-coral)",
  },
  {
    emoji: "📖",
    title: "Open Source",
    desc: "Transparent, collaborative, and always improving. Anyone can see our code, suggest changes, and help make this project better.",
    color: "var(--accent-amber)",
  },
  {
    emoji: "💛",
    title: "Empathy First",
    desc: "Designed with understanding and compassion. We know how hard this can be, because many of us live it every day.",
    color: "var(--accent-pink)",
  },
  {
    emoji: "🧠",
    title: "Evidence-Informed",
    desc: "Grounded in research and real-world experience. We combine clinical evidence with practical wisdom from the ADHD community.",
    color: "var(--accent-lavender)",
  },
  {
    emoji: "⚡",
    title: "ADHD-Friendly",
    desc: "Designed to be usable by the people who need it most. Clear layouts, scannable content, and no overwhelming walls of text.",
    color: "var(--accent-teal)",
  },
];

const offerings = [
  {
    emoji: "💡",
    stat: `${totalTips}+`,
    title: "Community-Curated Tips",
    desc: `Across ${categories.length} life categories — from focus strategies to relationship advice, all contributed by people who get it.`,
    color: "var(--accent-coral)",
  },
  {
    emoji: "🏥",
    stat: "Complete",
    title: "Diagnosis Guide",
    desc: "Step-by-step walkthrough of the diagnosis process, what to expect, how to prepare, and where to find professionals.",
    color: "var(--accent-teal)",
  },
  {
    emoji: "🛠️",
    stat: "Growing",
    title: "Tools & Strategies",
    desc: "A practical database of tools, techniques, and strategies for daily ADHD management — tested by the community.",
    color: "var(--accent-amber)",
  },
  {
    emoji: "🤝",
    stat: "Connected",
    title: "Community Directory",
    desc: "Support groups, online communities, professional organizations, and resources to help you find your people.",
    color: "var(--accent-lavender)",
  },
  {
    emoji: "🆘",
    stat: "24/7",
    title: "Crisis Resources",
    desc: "Immediate access to crisis helplines, text lines, and emergency support — because sometimes you need help right now.",
    color: "var(--accent-pink)",
  },
  {
    emoji: "💰",
    stat: "100%",
    title: "Free & Open Source",
    desc: "Everything on this site is completely free. No subscriptions, no premium tiers, no ads. Just help.",
    color: "var(--accent-coral)",
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
      <section className="relative overflow-hidden py-24 md:py-36">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-32 -left-32 h-[500px] w-[500px] rounded-full opacity-30 blur-[120px]"
          style={{ background: "var(--accent-lavender)" }}
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute top-20 right-0 h-[400px] w-[400px] rounded-full opacity-20 blur-[100px]"
          style={{ background: "var(--accent-coral)" }}
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-20 left-1/2 h-[350px] w-[350px] -translate-x-1/2 rounded-full opacity-20 blur-[100px]"
          style={{ background: "var(--accent-teal)" }}
        />

        <div className="relative mx-auto max-w-5xl px-6 text-center">
          <h1 className="animate-fade-in-up text-5xl font-extrabold leading-tight tracking-tight md:text-7xl">
            About <span className="gradient-text">OpenADHD</span>
          </h1>

          <p className="animate-fade-in-up delay-200 mx-auto mt-6 max-w-2xl text-lg text-text-secondary md:text-xl">
            We believe everyone deserves access to quality ADHD resources,
            regardless of income, location, or background.
          </p>

          <div className="animate-fade-in-up delay-300 mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/resources"
              className="inline-flex h-14 items-center gap-2 rounded-full bg-accent-coral px-8 text-lg font-bold text-white shadow-lg transition-transform hover:scale-105"
            >
              Explore Resources
              <span aria-hidden="true">→</span>
            </Link>
            <a
              href="https://github.com/carterlasalle/OpenADHD"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-14 items-center gap-2 rounded-full border-2 border-text-primary px-8 text-lg font-bold text-text-primary transition-colors hover:bg-text-primary hover:text-white"
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
        </div>
      </section>

      {/* ================================================================
          2. OUR MISSION
          ================================================================ */}
      <section
        className="py-20 md:py-28"
        style={{
          background:
            "linear-gradient(180deg, var(--bg-warm) 0%, #FFF0E5 100%)",
        }}
      >
        <div className="mx-auto max-w-5xl px-6">
          <h2 className="animate-fade-in-up text-center text-3xl font-extrabold md:text-5xl">
            Our <span className="gradient-text">Mission</span>
          </h2>

          <div className="animate-fade-in-up delay-100 mx-auto mt-10 max-w-3xl">
            <blockquote className="glass-card rounded-2xl p-8 text-center md:p-10">
              <p className="text-lg font-semibold leading-relaxed text-text-primary md:text-xl">
                &ldquo;The mission of OpenADHD is to empower and support
                individuals with ADHD and their families by providing accessible
                and comprehensive resources, support, and advocacy to improve the
                quality of life and promote understanding of ADHD.&rdquo;
              </p>
            </blockquote>
          </div>

          <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                emoji: "💪",
                title: "Empower",
                desc: "We give people the knowledge and tools they need to take control of their ADHD journey — from first suspicion through daily management.",
              },
              {
                emoji: "🫂",
                title: "Support",
                desc: "Nobody should face ADHD alone. We connect people with communities, resources, and the understanding that comes from shared experience.",
              },
              {
                emoji: "🌐",
                title: "Accessible",
                desc: "Everything we create is free, open source, and designed to work for everyone — regardless of income, location, or background.",
              },
              {
                emoji: "📚",
                title: "Comprehensive",
                desc: "We cover the full spectrum — diagnosis, treatment, daily strategies, relationships, work, education, and emotional well-being.",
              },
              {
                emoji: "📣",
                title: "Advocacy",
                desc: "We work to break down stigma, correct misinformation, and promote a world that understands and accommodates neurodivergent minds.",
              },
              {
                emoji: "❤️",
                title: "Quality of Life",
                desc: "Everything we do is measured by one question: does this help someone with ADHD live a better, more understood, more fulfilling life?",
              },
            ].map((pillar) => (
              <div
                key={pillar.title}
                className="glass-card hover-lift animate-fade-in-up rounded-2xl p-8 text-center"
              >
                <span className="text-4xl">{pillar.emoji}</span>
                <h3 className="mt-4 text-xl font-bold">{pillar.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-text-secondary">
                  {pillar.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================================================================
          3. WHY OPENADHD?
          ================================================================ */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-5xl px-6">
          <h2 className="animate-fade-in-up text-center text-3xl font-extrabold md:text-5xl">
            Why <span className="gradient-text">OpenADHD</span>?
          </h2>
          <p className="animate-fade-in-up delay-100 mx-auto mt-4 max-w-2xl text-center text-text-secondary md:text-lg">
            We started this project because we saw a gap — and we knew we could
            help fill it.
          </p>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {problems.map((problem, i) => (
              <div
                key={problem.title}
                className={`glass-card hover-lift animate-fade-in-up rounded-2xl p-8 ${
                  i > 0 ? `delay-${i * 100}` : ""
                } ${
                  problem.title === "Our Answer"
                    ? "border-2 sm:col-span-2 lg:col-span-1"
                    : ""
                }`}
                style={
                  problem.title === "Our Answer"
                    ? { borderColor: "var(--accent-coral)" }
                    : undefined
                }
              >
                <span className="text-4xl">{problem.emoji}</span>
                <h3 className="mt-4 text-lg font-bold">{problem.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-text-secondary">
                  {problem.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================================================================
          4. OUR VALUES
          ================================================================ */}
      <section
        className="py-20 md:py-28"
        style={{
          background:
            "linear-gradient(135deg, #FFF0E5 0%, #F0EAFF 50%, #E5FFF8 100%)",
        }}
      >
        <div className="mx-auto max-w-5xl px-6">
          <h2 className="animate-fade-in-up text-center text-3xl font-extrabold md:text-5xl">
            Our <span className="gradient-text">Values</span>
          </h2>
          <p className="animate-fade-in-up delay-100 mx-auto mt-4 max-w-xl text-center text-text-secondary md:text-lg">
            These principles guide every decision we make.
          </p>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {values.map((value) => (
              <div
                key={value.title}
                className="glass-card hover-lift animate-fade-in-up rounded-2xl p-8"
              >
                <span
                  className="flex h-14 w-14 items-center justify-center rounded-2xl text-3xl"
                  style={{ background: `${value.color}20` }}
                >
                  {value.emoji}
                </span>
                <h3 className="mt-5 text-xl font-bold">{value.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-text-secondary">
                  {value.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================================================================
          5. WHAT WE OFFER
          ================================================================ */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="animate-fade-in-up text-center text-3xl font-extrabold md:text-5xl">
            What We <span className="gradient-text">Offer</span>
          </h2>
          <p className="animate-fade-in-up delay-100 mx-auto mt-4 max-w-xl text-center text-text-secondary md:text-lg">
            A growing library of resources designed to help at every stage of
            your ADHD journey.
          </p>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {offerings.map((item) => (
              <div
                key={item.title}
                className="glass-card hover-lift animate-fade-in-up rounded-2xl p-8"
              >
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
                <h3 className="mt-5 text-lg font-bold">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-text-secondary">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

          <div className="animate-fade-in-up delay-300 mt-12 text-center">
            <Link
              href="/resources"
              className="inline-flex items-center gap-1 text-lg font-bold text-accent-coral transition-colors hover:text-accent-pink"
            >
              Explore all resources <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* ================================================================
          6. OPEN SOURCE
          ================================================================ */}
      <section className="bg-bg-dark py-20 text-white md:py-28">
        <div className="mx-auto max-w-5xl px-6">
          <div className="text-center">
            <h2 className="animate-fade-in-up text-3xl font-extrabold md:text-5xl">
              Proudly <span className="gradient-text">Open Source</span>
            </h2>
            <p className="animate-fade-in-up delay-100 mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-white/70">
              OpenADHD is licensed under the{" "}
              <strong className="text-white">GPL-3.0 license</strong>. That
              means every line of code, every resource, and every guide is
              freely available to view, use, modify, and share. We believe
              knowledge about ADHD should never be locked behind a paywall.
            </p>
          </div>

          <div className="animate-fade-in-up delay-200 mx-auto mt-10 max-w-3xl">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-8">
              <h3 className="text-xl font-bold">
                What does open source mean? 🤔
              </h3>
              <p className="mt-3 leading-relaxed text-white/70">
                Open source means our entire project is publicly available on
                GitHub. Anyone can read the code, suggest improvements, report
                issues, or contribute new content. It&apos;s a collaborative
                model that ensures transparency, accountability, and continuous
                improvement — driven by the very community it serves.
              </p>
            </div>
          </div>

          <div className="animate-fade-in-up delay-300 mt-12">
            <h3 className="text-center text-xl font-bold">
              Ways to Contribute
            </h3>
            <div className="mx-auto mt-6 grid max-w-3xl gap-3 sm:grid-cols-2">
              {contributionWays.map((way) => (
                <div
                  key={way.text}
                  className="flex items-start gap-3 rounded-xl border border-white/10 bg-white/5 px-5 py-4"
                >
                  <span className="text-xl">{way.emoji}</span>
                  <p className="text-sm leading-relaxed text-white/80">
                    {way.text}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="animate-fade-in-up delay-500 mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="https://github.com/carterlasalle/OpenADHD"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-14 items-center gap-3 rounded-full bg-white px-8 text-lg font-bold text-bg-dark shadow-lg transition-transform hover:scale-105"
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
              className="inline-flex h-14 items-center gap-2 rounded-full border-2 border-white/30 px-8 text-lg font-bold text-white transition-colors hover:border-white hover:bg-white/10"
            >
              ⭐ Star us on GitHub
            </a>
          </div>
        </div>
      </section>

      {/* ================================================================
          7. ADHD BY THE NUMBERS
          ================================================================ */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="animate-fade-in-up text-center text-3xl font-extrabold md:text-5xl">
            ADHD by the <span className="gradient-text">Numbers</span>
          </h2>
          <p className="animate-fade-in-up delay-100 mx-auto mt-4 max-w-xl text-center text-text-secondary md:text-lg">
            The scale of ADHD is far larger than most people realize — and so is
            the potential for positive change.
          </p>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="glass-card hover-lift animate-fade-in-up rounded-2xl p-6 text-center"
              >
                <span className="text-4xl">{stat.icon}</span>
                <p className="gradient-text mt-3 text-3xl font-extrabold md:text-4xl">
                  {stat.value}
                </p>
                <p className="mt-2 text-sm font-medium leading-snug text-text-secondary">
                  {stat.label}
                </p>
                <p className="mt-2 text-xs text-text-secondary/60">
                  {stat.source}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================================================================
          8. DISCLAIMER
          ================================================================ */}
      <section
        className="py-20 md:py-28"
        style={{
          background:
            "linear-gradient(180deg, var(--bg-warm) 0%, #FFF0E5 100%)",
        }}
      >
        <div className="mx-auto max-w-3xl px-6 text-center">
          <h2 className="animate-fade-in-up text-3xl font-extrabold md:text-5xl">
            ⚕️ Important <span className="gradient-text">Disclaimer</span>
          </h2>

          <div className="animate-fade-in-up delay-100 mx-auto mt-10">
            <div className="glass-card rounded-2xl p-8 text-left md:p-10">
              <div className="space-y-4 text-sm leading-relaxed text-text-secondary md:text-base">
                <p>
                  <strong className="text-text-primary">
                    📚 Educational purposes only.
                  </strong>{" "}
                  OpenADHD provides general educational resources and
                  information about ADHD. Our content is intended to inform and
                  support — not to diagnose, treat, or replace professional
                  medical advice.
                </p>
                <p>
                  <strong className="text-text-primary">
                    🩺 Not medical advice.
                  </strong>{" "}
                  Nothing on this website should be considered a substitute for
                  professional medical advice, diagnosis, or treatment. Always
                  consult with a qualified healthcare professional regarding any
                  medical condition or treatment.
                </p>
                <p>
                  <strong className="text-text-primary">
                    👨‍⚕️ Consult professionals.
                  </strong>{" "}
                  If you suspect you or someone you know has ADHD, please seek
                  evaluation from a licensed healthcare provider — such as a
                  psychiatrist, psychologist, or your primary care doctor.
                </p>
                <p>
                  <strong className="text-text-primary">
                    🏛️ No affiliations.
                  </strong>{" "}
                  OpenADHD is an independent, community-driven project. We are
                  not affiliated with, endorsed by, or connected to any medical
                  organization, pharmaceutical company, or healthcare provider.
                </p>
              </div>
            </div>
          </div>

          <p className="animate-fade-in-up delay-300 mt-8 text-sm text-text-secondary">
            If you&apos;re in crisis or need immediate help, please visit our{" "}
            <Link
              href="/community"
              className="font-bold text-accent-coral hover:text-accent-pink"
            >
              crisis resources page
            </Link>{" "}
            or call <strong>988</strong> (Suicide & Crisis Lifeline).
          </p>
        </div>
      </section>
    </>
  );
}
