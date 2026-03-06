import Link from "next/link";
import PageHero from "@/components/PageHero";

const fastRoutes = [
  {
    title: "I cannot start",
    description: "Use the tool that turns one intimidating task into a script, timer, and first few steps.",
    href: "/tools/task-breaker",
    cta: "Open Task Breaker",
    emoji: "⚡",
    iconVariant: "icon-wrap",
  },
  {
    title: "I cannot tell how long this will take",
    description: "Use the estimator when your schedule keeps breaking because your guesses are too optimistic.",
    href: "/tools/time-estimator",
    cta: "Open Time Estimator",
    emoji: "⏱️",
    iconVariant: "icon-wrap icon-wrap-teal",
  },
  {
    title: "I am behind in school",
    description: "Build a study sprint or generate support language before the next deadline gets worse.",
    href: "/tools/study-sprint",
    cta: "Open Study Sprint",
    emoji: "📚",
    iconVariant: "icon-wrap icon-wrap-amber",
  },
  {
    title: "I need words for a hard conversation",
    description: "Generate a script for a professor, partner, manager, parent, or care provider.",
    href: "/tools/script-generator",
    cta: "Open Script Generator",
    emoji: "💬",
    iconVariant: "icon-wrap icon-wrap-purple",
  },
  {
    title: "Today is a bad day",
    description: "Reduce everything down to survival, one next action, and the least harmful plan.",
    href: "/tools/bad-day-mode",
    cta: "Open Bad Day Mode",
    emoji: "🔴",
    iconVariant: "icon-wrap",
  },
];

const toolGroups = [
  {
    title: "Start and Momentum",
    description: "Use these when you are frozen, avoiding the first step, or need structure before you can think clearly.",
    tools: [
      {
        href: "/tools/task-breaker",
        title: "Task Breaker",
        time: "2 min",
        detail: "Turn one vague task into micro-steps, a start script, and a timer suggestion.",
        emoji: "⚡",
      },
      {
        href: "/tools/bad-day-mode",
        title: "Bad Day Mode",
        time: "1 min",
        detail: "Strip the day down to what matters when your brain is overloaded.",
        emoji: "🔴",
      },
      {
        href: "/tools/smart-pomodoro",
        title: "Smart Pomodoro",
        time: "1 min",
        detail: "Choose short cycles, classic focus blocks, body doubling mode, or panic rescue mode.",
        emoji: "⏱️",
      },
      {
        href: "/tools/routine-builder",
        title: "Routine Builder",
        time: "4 min",
        detail: "Create minimum, normal, and bad-day versions of a routine so it survives low-energy days.",
        emoji: "🔄",
      },
    ],
  },
  {
    title: "Planning and Time",
    description: "Use these when lateness, missed transitions, or unrealistic calendars keep making everything harder.",
    tools: [
      {
        href: "/tools/time-estimator",
        title: "Time Estimator",
        time: "1 min",
        detail: "Add realistic ADHD buffers to a task before it blows up your schedule.",
        emoji: "⏳",
      },
      {
        href: "/tools/planner-generator",
        title: "ADHD Planner Generator",
        time: "5 min",
        detail: "Turn deadlines into a usable week plan with transitions, buffers, and recovery blocks.",
        emoji: "📅",
      },
    ],
  },
  {
    title: "School Support",
    description: "Use these when school execution is collapsing even though you understand the material.",
    tools: [
      {
        href: "/tools/study-sprint",
        title: "Study Sprint",
        time: "3 min",
        detail: "Generate a study loop based on the kind of class, urgency, and what you can realistically do now.",
        emoji: "📚",
      },
      {
        href: "/tools/school-support",
        title: "School Support Generator",
        time: "4 min",
        detail: "Draft accommodation requests, explain ADHD to professors, and build a class-specific plan.",
        emoji: "🎓",
      },
    ],
  },
  {
    title: "Regulation and Communication",
    description: "Use these when your brain needs a reset or when you know what to say but cannot say it under pressure.",
    tools: [
      {
        href: "/tools/dopamine-menu",
        title: "Dopamine Menu Builder",
        time: "4 min",
        detail: "Build quick reset options across movement, novelty, social, and sensory categories.",
        emoji: "🎯",
      },
      {
        href: "/tools/script-generator",
        title: "Script Generator",
        time: "2 min",
        detail: "Generate copy-ready language for repair, accommodations, updates, and support requests.",
        emoji: "💬",
      },
    ],
  },
];

export default function ToolsHubPage() {
  return (
    <>
      <PageHero
        eyebrow="Tools"
        title={
          <>
            Use a tool by <span className="gradient-word">what is breaking right now</span>
          </>
        }
        subtitle="Each tool is built to produce something usable in a few minutes: a plan, a script, a buffered estimate, or one next step."
        actions={
          <>
            <Link href="/start-here" className="btn-primary">
              Not sure? Start Here
            </Link>
            <Link href="/library" className="btn-muted">
              Browse guides
            </Link>
          </>
        }
      />

      {/* Use This When section */}
      <section className="section-shell-tight" aria-labelledby="fast-routes-heading">
        <div className="container-wrap">
          <div className="section-block">
            <div className="section-label" id="fast-routes-heading">Use This When&hellip;</div>
            <p className="section-subtitle" style={{ marginBottom: "1.1rem" }}>
              Start with the problem in front of you. You do not need to understand the whole system first.
            </p>
            <div className="grid-auto-3">
              {fastRoutes.map((route) => (
                <article key={route.href} className="card-entry" aria-label={route.title}>
                  <div style={{ display: "flex", alignItems: "flex-start", gap: "0.85rem" }}>
                    <span className={route.iconVariant} aria-hidden="true">
                      {route.emoji}
                    </span>
                    <div style={{ flex: 1 }}>
                      <h3 style={{ fontSize: "1.05rem", lineHeight: 1.3 }}>{route.title}</h3>
                      <p style={{ marginTop: "0.4rem", color: "var(--text-soft)", fontSize: "0.9rem" }}>
                        {route.description}
                      </p>
                    </div>
                  </div>
                  <div style={{ marginTop: "0.5rem" }}>
                    <Link href={route.href} className="btn-primary" style={{ fontSize: "0.88rem" }}>
                      {route.cta}
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Tool groups */}
      {toolGroups.map((group) => (
        <section key={group.title} className="section-shell-tight" aria-labelledby={`group-${group.title.replace(/\s+/g, "-").toLowerCase()}`}>
          <div className="container-wrap">
            <div className="section-block">
              <div
                className="section-label"
                id={`group-${group.title.replace(/\s+/g, "-").toLowerCase()}`}
              >
                {group.title}
              </div>
              <p className="section-subtitle" style={{ marginBottom: "1.1rem" }}>
                {group.description}
              </p>
              <div className="grid-auto-2">
                {group.tools.map((tool) => (
                  <Link key={tool.href} href={tool.href} className="card-tool" aria-label={`${tool.title}, ${tool.time}`}>
                    <div style={{ display: "flex", alignItems: "center", gap: "0.85rem" }}>
                      <span className="icon-wrap icon-wrap-sm" aria-hidden="true">
                        {tool.emoji}
                      </span>
                      <div style={{ flex: 1, display: "flex", alignItems: "center", justifyContent: "space-between", gap: "0.5rem" }}>
                        <h3 style={{ fontSize: "1.1rem" }}>{tool.title}</h3>
                        <span className="tag tag-brand" aria-label={`Takes about ${tool.time}`}>{tool.time}</span>
                      </div>
                    </div>
                    <p style={{ color: "var(--text-soft)", fontSize: "0.92rem" }}>{tool.detail}</p>
                    <p style={{ color: "var(--brand)", fontWeight: 700, fontSize: "0.88rem" }} aria-hidden="true">
                      Open tool &rarr;
                    </p>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* Bottom recommendation section */}
      <section className="section-shell-tight" style={{ paddingBottom: "2rem" }} aria-labelledby="recommendations-heading">
        <div className="container-wrap">
          <div className="section-block">
            <h2 className="section-title" id="recommendations-heading" style={{ marginBottom: "1rem" }}>
              Where to start if you are not sure
            </h2>
            <div className="grid-auto-2">
              <article className="card-feature" aria-labelledby="best-first-heading">
                <div style={{ display: "flex", alignItems: "center", gap: "0.6rem", marginBottom: "0.25rem" }}>
                  <span className="icon-wrap icon-wrap-sm" aria-hidden="true">🏆</span>
                  <span style={{ fontSize: "0.76rem", fontWeight: 800, letterSpacing: "0.07em", textTransform: "uppercase", color: "var(--brand)" }}>
                    Best first tools
                  </span>
                </div>
                <h3 id="best-first-heading" style={{ fontSize: "1.2rem" }}>
                  If you only try two, start here
                </h3>
                <ul className="check-list" style={{ marginTop: "0.6rem" }}>
                  <li>Use Task Breaker when the problem is starting.</li>
                  <li>Use Planner Generator when the problem is too many deadlines competing at once.</li>
                  <li>Use Script Generator when the task is communicating before things get worse.</li>
                </ul>
              </article>

              <article className="card-feature card-feature-teal" aria-labelledby="pair-guide-heading">
                <div style={{ display: "flex", alignItems: "center", gap: "0.6rem", marginBottom: "0.25rem" }}>
                  <span className="icon-wrap icon-wrap-sm icon-wrap-teal" aria-hidden="true">📖</span>
                  <span style={{ fontSize: "0.76rem", fontWeight: 800, letterSpacing: "0.07em", textTransform: "uppercase", color: "var(--accent-strong)" }}>
                    Need more context?
                  </span>
                </div>
                <h3 id="pair-guide-heading" style={{ fontSize: "1.2rem" }}>
                  Pair a tool with one guide
                </h3>
                <p style={{ color: "var(--text-soft)", fontSize: "0.92rem", margin: "0.25rem 0 0" }}>
                  Tools are for action. Guides explain the pattern behind the problem so the tool makes more sense next time too.
                </p>
                <div className="page-actions" style={{ marginTop: "0.75rem" }}>
                  <Link href="/library/getting-started-overwhelmed" className="btn-muted" style={{ fontSize: "0.85rem" }}>
                    Overwhelm guide
                  </Link>
                  <Link href="/library/time-blindness" className="btn-muted" style={{ fontSize: "0.85rem" }}>
                    Time blindness guide
                  </Link>
                  <Link href="/library/relationships-and-communication" className="btn-muted" style={{ fontSize: "0.85rem" }}>
                    Relationship guide
                  </Link>
                </div>
              </article>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
