"use client";

import Link from "next/link";
import { categories } from "@/data/tips";
import ScrollReveal from "@/components/ScrollReveal";

/* ── Derived data ────────────────────────────────────────────────────────── */

const favoriteTips = categories
  .flatMap((cat) =>
    cat.tips
      .filter((t) => t.isFavorite)
      .map((t) => ({
        ...t,
        categoryName: cat.name,
        categoryEmoji: cat.emoji,
        categoryColor: cat.color,
      })),
  )
  .slice(0, 6);

const totalTips = categories.reduce((sum, c) => sum + c.tips.length, 0);

/* ── Page ────────────────────────────────────────────────────────────────── */

export default function Home() {
  return (
    <>
      {/* ================================================================
          1. HERO
          ================================================================ */}
      <section className="relative overflow-hidden pt-28 pb-20 md:pt-40 md:pb-32">
        {/* Decorative blobs */}
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
              Your brain works
              <br />
              differently.
              <br />
              <span className="gradient-text">That&apos;s your superpower.</span>
            </h1>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={150}>
            <p className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-ink-muted md:text-xl">
              Free, open-source resources built by the ADHD community. Understand
              your brain, find strategies that actually work, and connect with
              people who truly get it.
            </p>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={300}>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link
                href="/resources"
                className="inline-flex h-14 items-center gap-2 rounded-xl bg-brand px-8 text-lg font-bold text-white shadow-lg shadow-brand/25 transition-transform hover:scale-105"
              >
                Explore {totalTips}+ Tips
                <span aria-hidden="true">→</span>
              </Link>
              <Link
                href="/diagnosis"
                className="inline-flex h-14 items-center gap-2 rounded-xl border-2 border-ink px-8 text-lg font-bold text-ink transition-colors hover:bg-ink hover:text-white"
              >
                Get Diagnosed
              </Link>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={500}>
            <div className="mx-auto mt-16 grid max-w-3xl grid-cols-3 gap-4">
              {[
                { value: `${totalTips}+`, label: "Tips" },
                { value: `${categories.length}`, label: "Categories" },
                { value: "100%", label: "Free" },
              ].map((stat) => (
                <div key={stat.label} className="card px-4 py-5 text-center">
                  <p className="gradient-text text-3xl font-extrabold md:text-4xl">
                    {stat.value}
                  </p>
                  <p className="mt-1 text-sm font-semibold text-ink-muted">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ================================================================
          2. WHAT IS ADHD?
          ================================================================ */}
      <section className="bg-surface-alt py-20 md:py-28">
        <div className="mx-auto max-w-5xl px-6">
          <ScrollReveal direction="up">
            <h2 className="text-center text-3xl font-extrabold tracking-tight md:text-5xl">
              What is <span className="gradient-text">ADHD</span>?
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-center text-ink-muted md:text-lg">
              Attention-Deficit/Hyperactivity Disorder is a neurodevelopmental
              condition affecting how the brain regulates attention, impulses, and
              activity. It&apos;s not a lack of willpower&nbsp;— it&apos;s
              different wiring that comes with real challenges <em>and</em> real
              strengths.
            </p>
          </ScrollReveal>

          <div className="mt-14 grid gap-6 sm:grid-cols-3">
            {([
              {
                emoji: "🔍",
                title: "Inattentive",
                color: "var(--purple)",
                desc: "Difficulty sustaining focus, easily distracted, forgetful in daily activities, trouble organising tasks, often loses things, and may seem like they're daydreaming.",
              },
              {
                emoji: "⚡",
                title: "Hyperactive-Impulsive",
                color: "var(--brand)",
                desc: "Constant restlessness, fidgeting, talking excessively, difficulty waiting turns, acting without thinking, and feeling like an internal motor that won't stop.",
              },
              {
                emoji: "🔄",
                title: "Combined",
                color: "var(--teal)",
                desc: "A mix of both inattentive and hyperactive-impulsive symptoms. The most commonly diagnosed type — symptoms can shift and change over time.",
              },
            ] as const).map((type, i) => (
              <ScrollReveal key={type.title} direction="up" delay={i * 120}>
                <div
                  className="card h-full p-8"
                  style={{ borderLeft: `4px solid ${type.color}` }}
                >
                  <span className="text-5xl" role="img" aria-label={type.title}>
                    {type.emoji}
                  </span>
                  <h3 className="mt-4 text-xl font-bold">{type.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-muted">
                    {type.desc}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ================================================================
          3. COMMUNITY FAVORITES
          ================================================================ */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-6">
          <ScrollReveal direction="up">
            <h2 className="text-center text-3xl font-extrabold tracking-tight md:text-5xl">
              Community <span className="gradient-text">Favourites</span> 🌟
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-center text-ink-muted md:text-lg">
              Hand-picked tips loved by the community&nbsp;— practical advice
              from people who truly get it.
            </p>
          </ScrollReveal>

          <div className="mt-14 grid gap-6 sm:grid-cols-2">
            {favoriteTips.map((tip, i) => (
              <ScrollReveal key={tip.id} direction="up" delay={i * 100}>
                <div className="card flex h-full flex-col p-6">
                  <span className="text-3xl">{tip.categoryEmoji}</span>
                  <p className="mt-3 flex-1 text-[0.95rem] font-semibold leading-snug text-ink">
                    &ldquo;{tip.text}&rdquo;
                  </p>
                  <div className="mt-4 flex items-center justify-between text-xs">
                    <span
                      className="tag"
                      style={{
                        background: `${tip.categoryColor}15`,
                        color: tip.categoryColor,
                      }}
                    >
                      {tip.categoryName}
                    </span>
                    <span className="font-medium text-ink-faint">
                      — {tip.author}
                    </span>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal direction="up" delay={300}>
            <div className="mt-12 text-center">
              <Link
                href="/resources"
                className="inline-flex items-center gap-1 text-lg font-bold text-brand transition-colors hover:text-brand-dark"
              >
                See all {totalTips} tips{" "}
                <span aria-hidden="true">→</span>
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ================================================================
          4. HOW WE HELP
          ================================================================ */}
      <section className="bg-surface-alt py-20 md:py-28">
        <div className="mx-auto max-w-5xl px-6">
          <ScrollReveal direction="up">
            <h2 className="text-center text-3xl font-extrabold tracking-tight md:text-5xl">
              How We <span className="gradient-text">Help</span>
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-center text-ink-muted md:text-lg">
              Whether you&apos;re just starting to wonder or you&apos;ve been
              managing ADHD for years, we&apos;ve got you covered.
            </p>
          </ScrollReveal>

          <div className="mt-14 grid gap-8 sm:grid-cols-2">
            {([
              {
                emoji: "📖",
                title: "Understand ADHD",
                desc: "Learn what ADHD really is and how it affects your daily life, relationships, and potential. Knowledge is the first step to empowerment.",
                href: "/about",
                color: "var(--brand)",
              },
              {
                emoji: "🏥",
                title: "Get Diagnosed",
                desc: "Step-by-step guidance through the diagnosis process — what to expect, how to prepare, and where to find professionals who understand ADHD.",
                href: "/diagnosis",
                color: "var(--teal)",
              },
              {
                emoji: "🛠️",
                title: "Tools & Strategies",
                desc: "Practical, community-tested tools and techniques for daily management — from time blindness hacks to focus strategies that actually work.",
                href: "/resources",
                color: "var(--amber)",
              },
              {
                emoji: "🤝",
                title: "Find Community",
                desc: "Connect with others who understand your journey. You're not alone, and there's a whole community of people who get it.",
                href: "/community",
                color: "var(--purple)",
              },
            ] as const).map((card, i) => (
              <ScrollReveal key={card.title} direction="up" delay={i * 120}>
                <Link
                  href={card.href}
                  className="card group flex h-full flex-col p-8"
                  style={{ borderLeft: `4px solid ${card.color}` }}
                >
                  <span
                    className="flex h-14 w-14 items-center justify-center rounded-2xl text-3xl"
                    style={{ background: `${card.color}15` }}
                  >
                    {card.emoji}
                  </span>
                  <h3 className="mt-5 text-xl font-bold group-hover:text-brand">
                    {card.title}
                  </h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-muted">
                    {card.desc}
                  </p>
                  <span
                    className="mt-4 inline-flex items-center gap-1 text-sm font-bold transition-transform group-hover:translate-x-1"
                    style={{ color: card.color }}
                  >
                    Learn more <span aria-hidden="true">→</span>
                  </span>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ================================================================
          5. CATEGORY BROWSER
          ================================================================ */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-6">
          <ScrollReveal direction="up">
            <h2 className="text-center text-3xl font-extrabold tracking-tight md:text-5xl">
              Browse by <span className="gradient-text">Category</span>
            </h2>
            <p className="mx-auto mt-4 max-w-lg text-center text-ink-muted md:text-lg">
              Jump straight to the tips that matter most to you right now.
            </p>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={200}>
            <div className="mt-12 flex flex-wrap justify-center gap-3 md:gap-4">
              {categories.map((cat) => (
                <Link
                  key={cat.slug}
                  href={`/resources#${cat.slug}`}
                  className="tag transition-transform hover:scale-105"
                  style={{
                    border: `2px solid ${cat.color}`,
                    color: cat.color,
                  }}
                >
                  <span>{cat.emoji}</span>
                  {cat.name}
                  <span
                    className="rounded-full px-2 py-0.5 text-xs font-bold text-ink-muted"
                    style={{ background: `${cat.color}12` }}
                  >
                    {cat.tips.length}
                  </span>
                </Link>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ================================================================
          6. STATISTICS
          ================================================================ */}
      <section className="bg-surface-inv py-20 text-white md:py-28">
        <div className="mx-auto max-w-5xl px-6 text-center">
          <ScrollReveal direction="up">
            <h2 className="text-3xl font-extrabold tracking-tight md:text-5xl">
              You&apos;re <span className="gradient-text">Not Alone</span>
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-white/60 md:text-lg">
              ADHD is far more common than most people realise&nbsp;— and
              it&apos;s one of the most treatable conditions out there.
            </p>
          </ScrollReveal>

          <div className="mt-14 grid gap-8 sm:grid-cols-3">
            {([
              {
                stat: "366M+",
                label: "Adults worldwide live with ADHD",
                icon: "🌍",
              },
              {
                stat: "Only 20%",
                label: "Of adults with ADHD have been diagnosed",
                icon: "🔎",
              },
              {
                stat: "#1",
                label: "Most treatable mental health condition",
                icon: "💚",
              },
            ] as const).map((item, i) => (
              <ScrollReveal key={item.label} direction="up" delay={i * 150}>
                <div className="card-dark p-8 text-center">
                  <span className="text-4xl">{item.icon}</span>
                  <p className="gradient-text mt-4 text-4xl font-extrabold md:text-5xl">
                    {item.stat}
                  </p>
                  <p className="mt-2 text-sm font-medium text-white/50">
                    {item.label}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal direction="up" delay={300}>
            <div className="mx-auto mt-14 max-w-2xl">
              <p className="text-lg leading-relaxed text-white/60">
                If you think you might have ADHD, reaching out for help is one of
                the most important things you can do. A diagnosis can be
                life-changing&nbsp;— and you deserve the support that comes with
                it.
              </p>
              <Link
                href="/diagnosis"
                className="mt-6 inline-flex h-12 items-center gap-2 rounded-xl bg-teal px-8 font-bold text-white shadow-lg shadow-teal/25 transition-transform hover:scale-105"
              >
                Learn About Getting Diagnosed
                <span aria-hidden="true">→</span>
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ================================================================
          7. OPEN SOURCE CTA
          ================================================================ */}
      <section className="bg-surface-inv2 py-20 text-white md:py-28">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <ScrollReveal direction="up">
            <h2 className="text-3xl font-extrabold tracking-tight md:text-5xl">
              Built Open.
              <br />
              <span className="gradient-text">Built Together.</span>
            </h2>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={150}>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-white/60">
              OpenADHD is fully open source under the{" "}
              <strong className="text-white">GPL-3.0 license</strong>. Every
              tip, every resource, every line of code is free for everyone. ADHD
              knowledge should never be behind a paywall.
            </p>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={300}>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a
                href="https://github.com/carterlasalle/OpenADHD"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-14 items-center gap-3 rounded-xl bg-white px-8 text-lg font-bold text-surface-inv shadow-lg transition-transform hover:scale-105"
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
                className="inline-flex h-14 items-center gap-2 rounded-xl border-2 border-white/30 px-8 text-lg font-bold text-white transition-colors hover:border-white hover:bg-white/10"
              >
                ⭐ Star on GitHub
              </a>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={450}>
            <p className="mt-10 text-sm text-white/40">
              Have an ADHD tip that changed your life? We&apos;d love to add it.
              Open a pull request or issue on GitHub!
            </p>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
