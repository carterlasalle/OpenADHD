import Link from "next/link";
import { categories } from "@/data/tips";

/* ──────────────────────────────────────────────────────────────────────────
   Gather favourite tips (one per category, up to 6) for the preview section
   ────────────────────────────────────────────────────────────────────────── */
const favoriteTips = categories
  .flatMap((cat) =>
    cat.tips
      .filter((t) => t.isFavorite)
      .map((t) => ({ ...t, categoryName: cat.name, categoryEmoji: cat.emoji })),
  )
  .slice(0, 6);

const totalTips = categories.reduce((sum, c) => sum + c.tips.length, 0);

/* ──────────────────────────────────────────────────────────────────────────
   Page Component
   ────────────────────────────────────────────────────────────────────────── */
export default function Home() {
  return (
    <>
      {/* ================================================================
          1. HERO
          ================================================================ */}
      <section className="relative overflow-hidden py-24 md:py-36">
        {/* Decorative gradient blobs */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-32 -left-32 h-[500px] w-[500px] rounded-full opacity-30 blur-[120px]"
          style={{ background: "var(--accent-coral)" }}
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute top-20 right-0 h-[400px] w-[400px] rounded-full opacity-20 blur-[100px]"
          style={{ background: "var(--accent-lavender)" }}
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-20 left-1/2 h-[350px] w-[350px] -translate-x-1/2 rounded-full opacity-20 blur-[100px]"
          style={{ background: "var(--accent-amber)" }}
        />

        <div className="relative mx-auto max-w-5xl px-6 text-center">
          <h1 className="animate-fade-in-up text-5xl font-extrabold leading-tight tracking-tight md:text-7xl">
            Your ADHD.{" "}
            <span className="gradient-text">Your Superpower.</span>
            <br />
            Your Community.
          </h1>

          <p className="animate-fade-in-up delay-200 mx-auto mt-6 max-w-2xl text-lg text-text-secondary md:text-xl">
            Free, open-source resources to help you understand, manage, and
            thrive with ADHD. Built by the community, for the community.
          </p>

          <div className="animate-fade-in-up delay-300 mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/resources"
              className="inline-flex h-14 items-center gap-2 rounded-full bg-accent-coral px-8 text-lg font-bold text-white shadow-lg transition-transform hover:scale-105"
            >
              Explore Resources
              <span aria-hidden="true">→</span>
            </Link>
            <Link
              href="/diagnosis"
              className="inline-flex h-14 items-center gap-2 rounded-full border-2 border-text-primary px-8 text-lg font-bold text-text-primary transition-colors hover:bg-text-primary hover:text-white"
            >
              Get Started with Diagnosis
            </Link>
          </div>

          {/* Stats bar */}
          <div className="animate-fade-in-up delay-500 mx-auto mt-16 grid max-w-3xl grid-cols-1 gap-6 sm:grid-cols-3">
            {[
              { value: `${totalTips}+`, label: "Community Tips" },
              { value: `${categories.length}`, label: "Categories" },
              { value: "100%", label: "Free & Open Source" },
            ].map((stat) => (
              <div key={stat.label} className="glass-card rounded-2xl px-6 py-5 text-center hover-lift">
                <p className="gradient-text text-3xl font-extrabold md:text-4xl">
                  {stat.value}
                </p>
                <p className="mt-1 text-sm font-semibold text-text-secondary">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================================================================
          2. WHAT IS ADHD?
          ================================================================ */}
      <section className="relative py-20 md:py-28" style={{ background: "linear-gradient(180deg, var(--bg-warm) 0%, #FFF0E5 100%)" }}>
        <div className="mx-auto max-w-5xl px-6">
          <h2 className="animate-fade-in-up text-center text-3xl font-extrabold md:text-5xl">
            What is <span className="gradient-text">ADHD</span>?
          </h2>
          <p className="animate-fade-in-up delay-100 mx-auto mt-4 max-w-2xl text-center text-text-secondary md:text-lg">
            Attention-Deficit/Hyperactivity Disorder is a neurodevelopmental
            condition that affects how the brain regulates attention, impulses,
            and activity levels. It&apos;s not a lack of willpower — it&apos;s a
            difference in brain wiring that comes with real challenges{" "}
            <em>and</em> real strengths.
          </p>

          <div className="mt-14 grid gap-6 sm:grid-cols-3">
            {[
              {
                emoji: "🔍",
                title: "Inattentive",
                desc: "Difficulty sustaining focus, easily distracted, forgetful in daily activities, trouble organising tasks, often loses things, and may seem like they're daydreaming.",
              },
              {
                emoji: "⚡",
                title: "Hyperactive-Impulsive",
                desc: "Constant restlessness, fidgeting, talking excessively, difficulty waiting turns, acting without thinking, and feeling like an internal motor that won't stop.",
              },
              {
                emoji: "🔄",
                title: "Combined",
                desc: "A mix of both inattentive and hyperactive-impulsive symptoms. This is the most commonly diagnosed type, and symptoms can shift over time.",
              },
            ].map((type) => (
              <div
                key={type.title}
                className="glass-card hover-lift animate-fade-in-up rounded-2xl p-8 text-center"
              >
                <span className="text-5xl" role="img" aria-label={type.title}>
                  {type.emoji}
                </span>
                <h3 className="mt-4 text-xl font-bold">{type.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-text-secondary">
                  {type.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================================================================
          3. FEATURED TIPS PREVIEW
          ================================================================ */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="animate-fade-in-up text-center text-3xl font-extrabold md:text-5xl">
            Community <span className="gradient-text">Favourites</span> 🌟
          </h2>
          <p className="animate-fade-in-up delay-100 mx-auto mt-4 max-w-xl text-center text-text-secondary md:text-lg">
            Hand-picked tips loved by the community — practical advice from
            people who truly get it.
          </p>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {favoriteTips.map((tip, i) => (
              <div
                key={tip.id}
                className={`glass-card hover-lift animate-fade-in-up rounded-2xl p-6 ${
                  i > 0 ? `delay-${i * 100}` : ""
                }`}
              >
                <span className="text-3xl">{tip.categoryEmoji}</span>
                <p className="mt-3 font-semibold leading-snug text-text-primary">
                  &ldquo;{tip.text}&rdquo;
                </p>
                <div className="mt-4 flex items-center justify-between text-xs text-text-secondary">
                  <span className="rounded-full bg-black/5 px-3 py-1 font-medium">
                    {tip.categoryName}
                  </span>
                  <span>{tip.author}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/resources"
              className="inline-flex items-center gap-1 text-lg font-bold text-accent-coral transition-colors hover:text-accent-pink"
            >
              See all {totalTips} tips <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* ================================================================
          4. HOW WE HELP
          ================================================================ */}
      <section
        className="py-20 md:py-28"
        style={{ background: "linear-gradient(180deg, #FFF0E5 0%, var(--bg-warm) 100%)" }}
      >
        <div className="mx-auto max-w-5xl px-6">
          <h2 className="animate-fade-in-up text-center text-3xl font-extrabold md:text-5xl">
            How We <span className="gradient-text">Help</span>
          </h2>
          <p className="animate-fade-in-up delay-100 mx-auto mt-4 max-w-xl text-center text-text-secondary md:text-lg">
            Whether you&apos;re just starting to wonder or you&apos;ve been
            managing ADHD for years, we&apos;ve got you covered.
          </p>

          <div className="mt-14 grid gap-8 sm:grid-cols-2">
            {[
              {
                emoji: "📖",
                title: "Understand ADHD",
                desc: "Learn what ADHD really is and how it affects your daily life, relationships, and potential. Knowledge is the first step to empowerment.",
                href: "/about",
                color: "var(--accent-coral)",
              },
              {
                emoji: "🏥",
                title: "Get Diagnosed",
                desc: "Step-by-step guidance through the diagnosis process — what to expect, how to prepare, and where to find professionals who understand ADHD.",
                href: "/diagnosis",
                color: "var(--accent-teal)",
              },
              {
                emoji: "🛠️",
                title: "Tools & Strategies",
                desc: "Practical, community-tested tools and techniques for daily management — from time blindness hacks to focus strategies that actually work.",
                href: "/resources",
                color: "var(--accent-amber)",
              },
              {
                emoji: "🤝",
                title: "Find Community",
                desc: "Connect with others who understand your journey. You're not alone, and there's a whole community of people who get it.",
                href: "/resources",
                color: "var(--accent-lavender)",
              },
            ].map((card, i) => (
              <Link
                key={card.title}
                href={card.href}
                className={`glass-card hover-lift animate-fade-in-up group flex flex-col rounded-2xl p-8 ${
                  i > 0 ? `delay-${i * 100}` : ""
                }`}
              >
                <span
                  className="flex h-14 w-14 items-center justify-center rounded-2xl text-3xl"
                  style={{ background: `${card.color}20` }}
                >
                  {card.emoji}
                </span>
                <h3 className="mt-5 text-xl font-bold group-hover:text-accent-coral">
                  {card.title}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-text-secondary">
                  {card.desc}
                </p>
                <span
                  className="mt-4 inline-flex items-center gap-1 text-sm font-bold transition-transform group-hover:translate-x-1"
                  style={{ color: card.color }}
                >
                  Learn more <span aria-hidden="true">→</span>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ================================================================
          5. QUICK CATEGORY BROWSER
          ================================================================ */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="animate-fade-in-up text-center text-3xl font-extrabold md:text-5xl">
            Browse by <span className="gradient-text">Category</span>
          </h2>
          <p className="animate-fade-in-up delay-100 mx-auto mt-4 max-w-lg text-center text-text-secondary md:text-lg">
            Jump straight to the tips that matter most to you right now.
          </p>

          <div className="mt-12 flex flex-wrap justify-center gap-3">
            {categories.map((cat) => (
              <Link
                key={cat.slug}
                href={`/resources#${cat.slug}`}
                className="hover-lift inline-flex items-center gap-2 rounded-full border-2 px-5 py-2.5 text-sm font-bold transition-all hover:scale-105 hover:text-white"
                style={{
                  borderColor: cat.color,
                  color: cat.color,
                }}

              >
                <span>{cat.emoji}</span>
                {cat.name}
                <span className="rounded-full bg-black/5 px-2 py-0.5 text-xs font-semibold text-text-secondary">
                  {cat.tips.length}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ================================================================
          6. YOU'RE NOT ALONE
          ================================================================ */}
      <section
        className="py-20 md:py-28"
        style={{ background: "linear-gradient(135deg, #FFF0E5 0%, #F0EAFF 50%, #E5FFF8 100%)" }}
      >
        <div className="mx-auto max-w-5xl px-6 text-center">
          <h2 className="animate-fade-in-up text-3xl font-extrabold md:text-5xl">
            You&apos;re <span className="gradient-text">Not Alone</span>
          </h2>
          <p className="animate-fade-in-up delay-100 mx-auto mt-4 max-w-xl text-text-secondary md:text-lg">
            ADHD is far more common than most people realise — and it&apos;s one
            of the most treatable conditions out there.
          </p>

          <div className="mt-14 grid gap-8 sm:grid-cols-3">
            {[
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
                label: "One of the most treatable mental health conditions",
                icon: "💚",
              },
            ].map((item) => (
              <div
                key={item.label}
                className="glass-card hover-lift animate-fade-in-up rounded-2xl p-8"
              >
                <span className="text-4xl">{item.icon}</span>
                <p className="gradient-text mt-4 text-4xl font-extrabold md:text-5xl">
                  {item.stat}
                </p>
                <p className="mt-2 text-sm font-medium text-text-secondary">
                  {item.label}
                </p>
              </div>
            ))}
          </div>

          <div className="animate-fade-in-up delay-300 mx-auto mt-12 max-w-2xl">
            <p className="text-lg leading-relaxed text-text-secondary">
              If you think you might have ADHD, reaching out for help is one of
              the most important things you can do for yourself. A diagnosis can
              be life-changing — and you deserve the support that comes with it.
            </p>
            <Link
              href="/diagnosis"
              className="mt-6 inline-flex h-12 items-center gap-2 rounded-full bg-accent-teal px-8 font-bold text-white shadow-lg transition-transform hover:scale-105"
            >
              Learn About Getting Diagnosed
              <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* ================================================================
          7. OPEN SOURCE CTA
          ================================================================ */}
      <section className="bg-bg-dark py-20 text-white md:py-28">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h2 className="animate-fade-in-up text-3xl font-extrabold md:text-5xl">
            Built by the Community,
            <br />
            <span className="gradient-text">For the Community</span>
          </h2>
          <p className="animate-fade-in-up delay-100 mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-white/70">
            OpenADHD is fully open source under the{" "}
            <strong className="text-white">GPL-3.0 license</strong>. Every tip,
            every resource, and every line of code is free for everyone. We
            believe knowledge about ADHD should never be behind a paywall.
          </p>

          <div className="animate-fade-in-up delay-300 mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
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
              ⭐ Star on GitHub
            </a>
          </div>

          <p className="animate-fade-in-up delay-500 mt-10 text-sm text-white/50">
            Have an ADHD tip that changed your life? We&apos;d love to add it.
            Open a pull request or issue on GitHub!
          </p>
        </div>
      </section>
    </>
  );
}
