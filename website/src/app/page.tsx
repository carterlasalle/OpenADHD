import Link from "next/link";

// ── DATA ─────────────────────────────────────────────────────────────────────

const entryCards = [
  {
    emoji: "🧠",
    iconColor: "icon-wrap",
    cardColor: "card-feature",
    title: "I'm overwhelmed and can't start",
    detail: "Brain frozen, everything feels urgent, or you just need one clear next step.",
    href: "/start-here",
    cta: "Open Start Here",
  },
  {
    emoji: "📋",
    iconColor: "icon-wrap icon-wrap-teal",
    cardColor: "card-feature card-feature-teal",
    title: "I need help with school or work",
    detail: "Deadlines, studying, planning, or task follow-through are the biggest problem right now.",
    href: "/tools/planner-generator",
    cta: "Open Planner",
  },
  {
    emoji: "🏥",
    iconColor: "icon-wrap icon-wrap-purple",
    cardColor: "card-feature card-feature-purple",
    title: "I want diagnosis or care guidance",
    detail: "You're trying to get evaluated, understand options, or prepare for a prescriber visit.",
    href: "/care",
    cta: "Open Care Guide",
  },
  {
    emoji: "❤️",
    iconColor: "icon-wrap icon-wrap-amber",
    cardColor: "card-feature card-feature-amber",
    title: "I'm supporting someone with ADHD",
    detail: "You're a parent, partner, teacher, or manager and need practical ways to help.",
    href: "/parents-partners",
    cta: "Open Support Guides",
  },
];

const quickTools = [
  {
    emoji: "🎯",
    title: "Task Breaker",
    time: "2 min",
    detail: "Turn one vague task into micro-steps and a start script.",
    href: "/tools/task-breaker",
    tagColor: "tag tag-brand",
  },
  {
    emoji: "⏱️",
    title: "Time Estimator",
    time: "1 min",
    detail: "Add ADHD buffers before your schedule breaks again.",
    href: "/tools/time-estimator",
    tagColor: "tag tag-teal",
  },
  {
    emoji: "🔄",
    title: "Routine Builder",
    time: "4 min",
    detail: "Build a routine with a bad-day version so it actually survives.",
    href: "/tools/routine-builder",
    tagColor: "tag tag-teal",
  },
  {
    emoji: "💬",
    title: "Script Generator",
    time: "2 min",
    detail: "Get copy-ready words for hard conversations under pressure.",
    href: "/tools/script-generator",
    tagColor: "tag tag-purple",
  },
  {
    emoji: "⚡",
    title: "Bad Day Mode",
    time: "1 min",
    detail: "Strip the day to what matters when your brain is overloaded.",
    href: "/tools/bad-day-mode",
    tagColor: "tag tag-brand",
  },
  {
    emoji: "📅",
    title: "Planner Generator",
    time: "5 min",
    detail: "Turn deadlines into a week plan with buffers and recovery blocks.",
    href: "/tools/planner-generator",
    tagColor: "tag tag-amber",
  },
];

const trustItems = [
  { emoji: "✓", text: "No diagnosis needed" },
  { emoji: "✓", text: "Low energy days welcome" },
  { emoji: "✓", text: "Free forever" },
  { emoji: "✓", text: "Works without reading everything first" },
];

// ── COMPONENT ─────────────────────────────────────────────────────────────────

export default function HomePage() {
  return (
    <div className="page-wrap page-hero">

      {/* ── 1. HERO ────────────────────────────────────────────────────────── */}
      <section aria-labelledby="hero-heading">
        <div className="animate-fade-in-up">
          <span className="eyebrow">Free · Practical · No diagnosis required</span>
          <h1
            id="hero-heading"
            className="display-title"
            style={{ maxWidth: "22ch", marginTop: "0.9rem" }}
          >
            ADHD support that works{" "}
            <span className="gradient-word">with your brain</span>, not against it.
          </h1>
          <p className="lede" style={{ maxWidth: "56ch" }}>
            OpenADHD is a free, practical hub for real ADHD problems. Pick what is hard right
            now and get one tool, one plan, and a clearer path forward — no reading required.
          </p>

          <div className="page-actions stagger-2">
            <Link href="/start-here" className="btn btn-primary">
              Find What I Need
            </Link>
            <Link
              href="/tools/bad-day-mode"
              className="btn btn-soft"
              aria-label="Open Bad Day Mode — stripped-down help for overloaded days"
            >
              ⚡ Bad Day Mode
            </Link>
            <Link href="/tools" className="btn btn-muted">
              All Tools
            </Link>
          </div>

          <p
            style={{
              marginTop: "0.75rem",
              fontSize: "0.86rem",
              color: "var(--text-faint)",
              fontWeight: 600,
            }}
          >
            No diagnosis needed. Start anywhere.
          </p>
        </div>
      </section>

      {/* ── 2. WHAT DO YOU NEED RIGHT NOW? ────────────────────────────────── */}
      <section
        className="section-block animate-fade-in-up stagger-2"
        aria-labelledby="entry-heading"
        style={{ marginTop: "1.8rem" }}
      >
        <header className="section-header">
          <p className="section-label">Start here</p>
          <h2 id="entry-heading" className="section-title">
            What do you need right now?
          </h2>
          <p className="section-subtitle">
            Choose the situation causing the most friction this week. You can always come back and
            pick a different one.
          </p>
        </header>

        <div className="grid-auto-2" style={{ marginTop: "1.1rem" }}>
          {entryCards.map((card, i) => (
            <article
              key={card.href}
              className={`${card.cardColor} animate-fade-in-up stagger-${i + 1}`}
            >
              <div className={card.iconColor} aria-hidden="true" style={{ fontSize: "1.6rem" }}>
                {card.emoji}
              </div>
              <h2 style={{ fontSize: "1.2rem", marginTop: "0.1rem" }}>{card.title}</h2>
              <p style={{ color: "var(--text-muted)", fontSize: "0.95rem", margin: 0 }}>
                {card.detail}
              </p>
              <Link
                href={card.href}
                className="btn btn-muted"
                style={{ marginTop: "0.25rem", alignSelf: "flex-start" }}
              >
                {card.cta} →
              </Link>
            </article>
          ))}
        </div>
      </section>

      {/* ── 3. QUICK TOOLS STRIP ──────────────────────────────────────────── */}
      <section
        className="section-block animate-fade-in-up stagger-3"
        aria-labelledby="tools-heading"
      >
        <header className="section-header">
          <p className="section-label">Tools</p>
          <h2 id="tools-heading" className="section-title">
            Quick tools — get a result in minutes
          </h2>
          <p className="section-subtitle">
            Each tool produces something you can use immediately: a plan, a script, a buffered
            estimate, or one next step. No account needed.
          </p>
        </header>

        <div className="grid-auto-3" style={{ marginTop: "1rem" }}>
          {quickTools.map((tool) => (
            <Link
              key={tool.href}
              href={tool.href}
              className="card-tool"
              aria-label={`${tool.title} — ${tool.detail}`}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  gap: "0.5rem",
                }}
              >
                <div className="icon-wrap icon-wrap-sm" aria-hidden="true">
                  {tool.emoji}
                </div>
                <span className={tool.tagColor}>{tool.time}</span>
              </div>
              <h3 style={{ fontSize: "1.05rem", marginTop: "0.15rem" }}>{tool.title}</h3>
              <p style={{ color: "var(--text-muted)", fontSize: "0.89rem", margin: 0 }}>
                {tool.detail}
              </p>
              <p
                style={{
                  marginTop: "auto",
                  paddingTop: "0.6rem",
                  color: "var(--brand)",
                  fontWeight: 700,
                  fontSize: "0.88rem",
                }}
              >
                Open →
              </p>
            </Link>
          ))}
        </div>

        <div style={{ marginTop: "1rem", textAlign: "center" }}>
          <Link href="/tools" className="chip">
            See all tools →
          </Link>
        </div>
      </section>

      {/* ── 4. TRUST / "EVEN IF" CALLOUT ─────────────────────────────────── */}
      <section
        className="notice-ok animate-fade-in-up stagger-4"
        aria-label="Who this site is for"
        style={{ marginTop: "1rem" }}
      >
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            gap: "0.5rem 1.4rem",
          }}
        >
          <strong style={{ color: "var(--ok)", fontSize: "0.9rem", whiteSpace: "nowrap" }}>
            Use OpenADHD even if:
          </strong>
          {trustItems.map((item) => (
            <span
              key={item.text}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.3rem",
                fontSize: "0.9rem",
                color: "var(--text-muted)",
                fontWeight: 600,
              }}
            >
              <span style={{ color: "var(--ok)", fontWeight: 800 }}>{item.emoji}</span>
              {item.text}
            </span>
          ))}
        </div>
      </section>

      {/* ── 5. SAFETY NOTE ────────────────────────────────────────────────── */}
      <section
        className="section-block notice-warn animate-fade-in-up stagger-5"
        aria-label="Safety information"
        style={{ marginTop: "1rem" }}
      >
        <h2 className="section-title" style={{ fontSize: "1rem", fontFamily: "var(--font-sans)" }}>
          Safety note
        </h2>
        <p style={{ marginTop: "0.35rem", fontSize: "0.9rem" }}>
          OpenADHD is educational support, not medical or emergency care. If you are in
          immediate crisis in the U.S., call or text{" "}
          <a href="tel:988" style={{ fontWeight: 700, color: "var(--danger)" }}>
            988
          </a>
          .
        </p>
      </section>

    </div>
  );
}
