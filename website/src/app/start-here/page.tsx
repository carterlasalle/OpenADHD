"use client";

import Link from "next/link";
import { useState } from "react";
import PageHero from "@/components/PageHero";
import { contextOptions, startPaths } from "@/data/startHere";

const struggleGroups: Array<{ title: string; note: string; ids: string[] }> = [
  {
    title: "Start and momentum",
    note: "Use these if you are stuck, overloaded, or burned out.",
    ids: ["overwhelmed", "executive", "motivation"],
  },
  {
    title: "School and work",
    note: "Use these if deadlines, studying, or daily output are the main problem.",
    ids: ["school", "work", "time"],
  },
  {
    title: "Health and care",
    note: "Use these if diagnosis, anxiety overlap, medication, or sleep are the main issue.",
    ids: ["anxiety", "medication", "evaluation", "sleep"],
  },
  {
    title: "Relationships and support",
    note: "Use these if communication or supporting someone is the main issue.",
    ids: ["emotions", "relationships", "supporters"],
  },
];

const pathEmojis: Record<string, string> = {
  overwhelmed: "🧠",
  school: "📚",
  work: "💼",
  time: "⏰",
  executive: "⚡",
  motivation: "🔋",
  emotions: "🎭",
  sleep: "🌙",
  relationships: "❤️",
  anxiety: "💭",
  medication: "💊",
  evaluation: "🔍",
  supporters: "🤝",
};

const contextEmojis: Record<string, string> = {
  student: "🎒",
  adult: "🏠",
  undiagnosed: "❓",
  diagnosed: "✅",
  "trying-meds": "💊",
  parent: "👨‍👩‍👧",
  partner: "🤝",
  teacher: "🍎",
  manager: "💼",
};

const pathNotes: Record<string, { why: string; next10: string }> = {
  overwhelmed: {
    why: "This path narrows overload into one manageable action and removes decision clutter.",
    next10: "Write one task only, then open Task Breaker and complete the first visible step.",
  },
  school: {
    why: "This path is built for assignment drift, falling behind, and weak study follow-through.",
    next10: "List your next three deadlines, then generate a school support or sprint plan.",
  },
  work: {
    why: "This path helps when you are busy all day but still missing the highest-value work.",
    next10: "Choose one outcome for today and reserve the first work block for it now.",
  },
  time: {
    why: "This path helps when planning falls apart because time feels vague or invisible.",
    next10: "Estimate one task before you start it and add a checkpoint alarm.",
  },
  executive: {
    why: "This path is for knowing what to do but still not being able to start or sequence it.",
    next10: "Turn your next task into a single verb and object, then begin that action only.",
  },
  motivation: {
    why: "This path is for boom-bust cycles, burnout, and energy that disappears under pressure.",
    next10: "Pick one 3-minute reset activity before you ask your brain for more output.",
  },
  emotions: {
    why: "This path is for fast emotional spikes, shame spirals, and hard conversations.",
    next10: "Copy one pause or repair script before your next conversation, not during it.",
  },
  sleep: {
    why: "This path focuses on shutdown friction, late-night activation, and unstable mornings.",
    next10: "Choose tonight's minimum wind-down routine: three steps only.",
  },
  relationships: {
    why: "This path helps when missed tasks or miscommunication are damaging trust.",
    next10: "Schedule one 20-minute check-in instead of waiting for the next conflict.",
  },
  anxiety: {
    why: "This path is for urgency loops, dread, and ADHD symptoms tangled up with anxiety.",
    next10: "Pick one certainty action for the next 10 minutes and ignore every optional task.",
  },
  medication: {
    why: "This path gives structure to medication questions so appointments are clearer and safer.",
    next10: "Start a simple note: dose time, effect window, appetite, sleep, and one question.",
  },
  evaluation: {
    why: "This path helps you decide whether to seek evaluation and how to prepare without guessing.",
    next10: "Write three examples of how ADHD-like patterns are affecting daily life.",
  },
  supporters: {
    why: "This path helps parents, partners, teachers, and managers support without shame or confusion.",
    next10: "Pick one shared system to try this week instead of relying on memory and reminders alone.",
  },
};

const weekDayLabels = ["Day 1", "Day 2–3", "Day 4–5", "Day 7"];

export default function StartHerePage() {
  const [badDayMode] = useState<boolean>(() => {
    if (typeof window === "undefined") return false;
    return new URLSearchParams(window.location.search).get("badDay") === "1";
  });

  const [selectedPathId, setSelectedPathId] = useState(startPaths[0]?.id ?? "");
  const [selectedContextId, setSelectedContextId] = useState(contextOptions[0]?.id ?? "");

  const selectedPath = startPaths.find((item) => item.id === selectedPathId) ?? startPaths[0];
  const selectedContext =
    contextOptions.find((item) => item.id === selectedContextId) ?? contextOptions[0];
  const note = pathNotes[selectedPath.id];

  if (badDayMode) {
    return (
      <section className="section-shell" style={{ paddingTop: "7rem" }}>
        <div className="container-wrap">
          <article className="bad-day-hero animate-fade-in-up">
            <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "0.75rem" }}>
              <div className="icon-wrap" style={{ background: "color-mix(in oklab, var(--danger) 14%, var(--surface))", fontSize: "1.6rem" }}>
                🔴
              </div>
              <span className="eyebrow">Bad Day Mode</span>
            </div>
            <h1 style={{ fontSize: "clamp(1.8rem, 4vw, 3rem)", fontFamily: "var(--font-serif)", lineHeight: 1.14 }}>
              One step. No browsing.
            </h1>
            <p className="lede" style={{ marginTop: "0.6rem" }}>
              Open Task Breaker and do one 10-minute launch on the task with the biggest
              consequence this week. If that still feels too hard, use the panic reset sheet first.
            </p>
            <div className="page-actions" style={{ marginTop: "1.1rem" }}>
              <Link href="/tools/task-breaker" className="btn-primary">
                Open Task Breaker
              </Link>
              <Link href="/templates/panic-proof-reset-checklist.txt" className="btn-muted">
                Open panic reset sheet
              </Link>
              <Link href="/start-here" className="btn-muted">
                Use full chooser
              </Link>
            </div>
            <div className="notice-warn" style={{ marginTop: "1rem" }}>
              <strong>Crisis support:</strong> If you are in immediate crisis in the U.S., call or text 988.
            </div>
          </article>
        </div>
      </section>
    );
  }

  return (
    <>
      <PageHero
        eyebrow="Start Here"
        title={
          <>
            Pick the problem causing the <span className="gradient-word">most friction today</span>
          </>
        }
        subtitle="You do not need to understand the whole site. Choose the issue that is hurting you this week, add your context, and use the plan below."
        actions={
          <>
            <Link href="/tools/bad-day-mode" className="btn-primary">
              I need one next step only
            </Link>
            <Link href="/care" className="btn-muted">
              I need diagnosis or medication help
            </Link>
          </>
        }
      />

      {/* Step indicator */}
      <section className="section-shell-tight" aria-label="Progress steps">
        <div className="container-wrap">
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0.5rem",
              flexWrap: "wrap",
              padding: "0.75rem 1rem",
              border: "1px solid var(--line)",
              borderRadius: "var(--radius-pill)",
              background: "var(--surface)",
              width: "fit-content",
            }}
          >
            <span className="step-badge" aria-current="step">1</span>
            <span style={{ fontWeight: 700, fontSize: "0.9rem" }}>Pick your struggle</span>
            <span style={{ color: "var(--text-faint)", fontSize: "0.9rem" }} aria-hidden="true">→</span>
            <span className="step-badge step-badge-teal">2</span>
            <span style={{ fontWeight: 700, fontSize: "0.9rem" }}>Add your context</span>
            <span style={{ color: "var(--text-faint)", fontSize: "0.9rem" }} aria-hidden="true">→</span>
            <span className="step-badge step-badge-purple">3</span>
            <span style={{ fontWeight: 700, fontSize: "0.9rem" }}>Get your plan</span>
          </div>
        </div>
      </section>

      {/* Step 1: Problem chooser */}
      <section className="section-shell-tight" aria-labelledby="step1-heading">
        <div className="container-wrap">
          <div className="section-block">
            <div className="step-row" style={{ marginBottom: "0.6rem" }}>
              <span className="step-badge" aria-hidden="true">1</span>
              <div>
                <h2 className="section-title" id="step1-heading">
                  What is the actual problem right now?
                </h2>
                <p className="section-subtitle">
                  Choose the thing creating the biggest consequence this week, not the thing that feels
                  most theoretically important.
                </p>
              </div>
            </div>

            <div style={{ display: "grid", gap: "1.25rem", marginTop: "1.1rem" }}>
              {struggleGroups.map((group) => (
                <section key={group.title} aria-label={group.title}>
                  <div className="section-label">{group.title}</div>
                  <p style={{ color: "var(--text-soft)", fontSize: "0.9rem", marginBottom: "0.75rem" }}>
                    {group.note}
                  </p>
                  <div className="grid-auto-3">
                    {startPaths
                      .filter((path) => group.ids.includes(path.id))
                      .map((path) => (
                        <button
                          key={path.id}
                          type="button"
                          className={`choice-tile${selectedPathId === path.id ? " is-selected" : ""}`}
                          onClick={() => setSelectedPathId(path.id)}
                          aria-pressed={selectedPathId === path.id}
                        >
                          <span
                            className={`icon-wrap icon-wrap-sm${selectedPathId === path.id ? "" : ""}`}
                            aria-hidden="true"
                          >
                            {pathEmojis[path.id] ?? "•"}
                          </span>
                          <span style={{ fontWeight: 700, fontSize: "0.97rem" }}>{path.label}</span>
                        </button>
                      ))}
                  </div>
                </section>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Step 2: Context chooser */}
      <section className="section-shell-tight" aria-labelledby="step2-heading">
        <div className="container-wrap">
          <div className="section-block">
            <div className="step-row" style={{ marginBottom: "0.6rem" }}>
              <span className="step-badge step-badge-teal" aria-hidden="true">2</span>
              <div>
                <h2 className="section-title" id="step2-heading">
                  Where is this happening?
                </h2>
                <p className="section-subtitle">
                  Context changes the best support path, so choose the environment that matches real life.
                </p>
              </div>
            </div>

            <div className="grid-auto-3" style={{ marginTop: "1rem" }}>
              {contextOptions.map((context) => (
                <button
                  key={context.id}
                  type="button"
                  className={`choice-tile${selectedContextId === context.id ? " is-selected" : ""}`}
                  onClick={() => setSelectedContextId(context.id)}
                  aria-pressed={selectedContextId === context.id}
                >
                  <span className="icon-wrap icon-wrap-sm" aria-hidden="true">
                    {contextEmojis[context.id] ?? "👤"}
                  </span>
                  <div style={{ display: "flex", flexDirection: "column", gap: "0.15rem" }}>
                    <span style={{ fontWeight: 700, fontSize: "0.97rem" }}>{context.label}</span>
                    <span style={{ fontSize: "0.8rem", color: "var(--text-soft)" }}>{context.note}</span>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Step 3: Your Plan */}
      <section className="section-shell-tight" aria-labelledby="plan-heading">
        <div className="container-wrap">
          <div className="section-block">
            <div className="step-row" style={{ marginBottom: "0.6rem" }}>
              <span className="step-badge step-badge-purple" aria-hidden="true">3</span>
              <div>
                <h2 className="section-title" id="plan-heading">
                  Your plan
                </h2>
                <p className="section-subtitle">
                  Path: <strong>{selectedPath.label}</strong> &nbsp;&middot;&nbsp; Context: <strong>{selectedContext.label}</strong>
                </p>
              </div>
            </div>

            {/* Why this path */}
            <div className="notice-ok" style={{ marginTop: "1rem" }}>
              <p style={{ fontWeight: 700, marginBottom: "0.25rem" }}>Why this path</p>
              <p style={{ margin: 0 }}>{note.why}</p>
            </div>

            {/* Do this in 10 minutes — highlighted callout */}
            <div className="callout" style={{ marginTop: "1rem" }}>
              <p style={{ fontWeight: 800, fontSize: "0.78rem", letterSpacing: "0.07em", textTransform: "uppercase", marginBottom: "0.35rem", color: "var(--brand)" }}>
                Do this in the next 10 minutes
              </p>
              <p style={{ margin: 0, fontWeight: 600 }}>{note.next10}</p>
            </div>

            {/* Plan cards grid */}
            <div className="grid-auto-3" style={{ marginTop: "1.1rem" }}>
              {/* 1 page */}
              <article className="card-feature card-feature-teal" aria-labelledby="plan-page-heading">
                <div style={{ display: "flex", alignItems: "center", gap: "0.6rem" }}>
                  <span className="icon-wrap icon-wrap-sm icon-wrap-teal" aria-hidden="true">📄</span>
                  <span style={{ fontSize: "0.76rem", fontWeight: 800, letterSpacing: "0.07em", textTransform: "uppercase", color: "var(--accent-strong)" }}>
                    1 page to read
                  </span>
                </div>
                <h3 id="plan-page-heading" style={{ fontSize: "1.05rem" }}>{selectedPath.pageTitle}</h3>
                <p style={{ color: "var(--text-soft)", fontSize: "0.9rem", margin: 0 }}>
                  Read this first if you need orientation before action.
                </p>
                <div className="page-actions" style={{ marginTop: "auto" }}>
                  <Link href={selectedPath.pageHref} className="btn-primary" style={{ fontSize: "0.88rem" }}>
                    Open page
                  </Link>
                </div>
              </article>

              {/* 1 tool */}
              <article className="card-feature" aria-labelledby="plan-tool-heading">
                <div style={{ display: "flex", alignItems: "center", gap: "0.6rem" }}>
                  <span className="icon-wrap icon-wrap-sm" aria-hidden="true">🛠</span>
                  <span style={{ fontSize: "0.76rem", fontWeight: 800, letterSpacing: "0.07em", textTransform: "uppercase", color: "var(--brand)" }}>
                    1 tool to use today
                  </span>
                </div>
                <h3 id="plan-tool-heading" style={{ fontSize: "1.05rem" }}>{selectedPath.toolTitle}</h3>
                <p style={{ color: "var(--text-soft)", fontSize: "0.9rem", margin: 0 }}>
                  Use this if you want an immediate result instead of more reading.
                </p>
                <div className="page-actions" style={{ marginTop: "auto" }}>
                  <Link href={selectedPath.toolHref} className="btn-primary" style={{ fontSize: "0.88rem" }}>
                    Open tool
                  </Link>
                </div>
              </article>

              {/* Deeper guide */}
              <article className="card-feature card-feature-purple" aria-labelledby="plan-guide-heading">
                <div style={{ display: "flex", alignItems: "center", gap: "0.6rem" }}>
                  <span className="icon-wrap icon-wrap-sm icon-wrap-purple" aria-hidden="true">📖</span>
                  <span style={{ fontSize: "0.76rem", fontWeight: 800, letterSpacing: "0.07em", textTransform: "uppercase", color: "var(--purple)" }}>
                    Deeper guide
                  </span>
                </div>
                <h3 id="plan-guide-heading" style={{ fontSize: "1.05rem" }}>{selectedPath.deepGuideTitle}</h3>
                <p style={{ color: "var(--text-soft)", fontSize: "0.9rem", margin: 0 }}>
                  Use this when you want the fuller explanation and a more detailed playbook.
                </p>
                <div className="page-actions" style={{ marginTop: "auto" }}>
                  <Link href={selectedPath.deepGuideHref} className="btn-muted" style={{ fontSize: "0.88rem" }}>
                    Open deeper guide
                  </Link>
                  <Link href={selectedContext.portalHref} className="btn-muted" style={{ fontSize: "0.88rem" }}>
                    Open context guide
                  </Link>
                </div>
              </article>
            </div>

            {/* Week plan */}
            <div className="card-feature card-feature-amber" style={{ marginTop: "1rem" }} aria-labelledby="plan-week-heading">
              <div style={{ display: "flex", alignItems: "center", gap: "0.6rem" }}>
                <span className="icon-wrap icon-wrap-sm icon-wrap-amber" aria-hidden="true">📅</span>
                <span style={{ fontSize: "0.76rem", fontWeight: 800, letterSpacing: "0.07em", textTransform: "uppercase", color: "var(--amber)" }}>
                  1 plan for the week
                </span>
              </div>
              <h3 id="plan-week-heading" style={{ fontSize: "1.05rem", marginBottom: "0.25rem" }}>
                What to do across 7 days
              </h3>
              <ul className="week-plan-list" aria-label="Weekly plan steps">
                {selectedPath.weeklyPlan.map((item, index) => (
                  <li key={item} className="week-plan-item">
                    <span className="week-day-label">{weekDayLabels[index] ?? `Day ${index + 1}`}</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
