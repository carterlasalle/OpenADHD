"use client";

import { useState } from "react";
import Link from "next/link";
import SaveFavoriteButton from "@/components/SaveFavoriteButton";
import { buildRoutineTiers } from "@/lib/toolGenerators";

export default function RoutineBuilderPage() {
  const [name, setName] = useState("Morning");
  const [anchor, setAnchor] = useState("After first coffee");
  const [goal1, setGoal1] = useState("Show up and get started");
  const [goal2, setGoal2] = useState("");
  const [goal3, setGoal3] = useState("");

  const tiers = buildRoutineTiers({
    name,
    anchor,
    goals: [goal1, goal2, goal3].filter(Boolean),
  });

  const minimumTier = tiers.find((t) => t.tier === "minimum");
  const normalTier = tiers.find((t) => t.tier === "normal");
  const badDayTier = tiers.find((t) => t.tier === "bad-day");

  return (
    <section className="section-shell" style={{ paddingTop: "7rem" }}>
      <div style={{ maxWidth: "860px", margin: "0 auto" }}>

        {/* Tool Header */}
        <header className="animate-fade-in-up" style={{ marginBottom: "2rem" }}>
          <div className="icon-wrap icon-wrap-lg" style={{ marginBottom: "1rem" }}>
            <span role="img" aria-label="routine">🔄</span>
          </div>
          <h1 style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.6rem)", marginBottom: "0.5rem" }}>
            Routine Builder
          </h1>
          <p style={{ color: "var(--text-muted)", fontSize: "1.06rem", maxWidth: "56ch", lineHeight: "1.65", marginBottom: "1.25rem" }}>
            Build a routine with a bad-day version so it actually survives.
          </p>
          <div className="page-actions">
            <SaveFavoriteButton itemId="tool-routine-builder" label="Save tool" />
            <Link href="/tools" className="btn-ghost">
              ← Back to tools
            </Link>
          </div>
        </header>

        <div style={{ display: "grid", gap: "1.25rem" }}>

          {/* Form Panel */}
          <article className="surface-panel animate-fade-in-up stagger-1" style={{ padding: "1.5rem" }}>
            <h2 style={{ fontSize: "1.1rem", marginBottom: "1.25rem" }}>Design your routine</h2>
            <div className="tool-form">

              <div className="field-group">
                <label htmlFor="routine-name">Routine name</label>
                <input
                  id="routine-name"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Morning routine"
                />
                <p className="field-hint">Morning routine, Evening wind-down, Study prep...</p>
              </div>

              <div className="field-group">
                <label htmlFor="routine-anchor">Anchor event</label>
                <input
                  id="routine-anchor"
                  type="text"
                  value={anchor}
                  onChange={(e) => setAnchor(e.target.value)}
                  placeholder="After first coffee"
                />
                <p className="field-hint">After coffee, When I wake up, After school, After dinner...</p>
              </div>

              <div className="field-group">
                <label htmlFor="goal-1">Goal 1</label>
                <input
                  id="goal-1"
                  type="text"
                  value={goal1}
                  onChange={(e) => setGoal1(e.target.value)}
                  placeholder="Show up and get started"
                />
                <p className="field-hint">Main purpose — what should this routine accomplish?</p>
              </div>

              <div className="field-group">
                <label htmlFor="goal-2">Goal 2</label>
                <input
                  id="goal-2"
                  type="text"
                  value={goal2}
                  onChange={(e) => setGoal2(e.target.value)}
                  placeholder="Optional"
                />
                <p className="field-hint">Secondary benefit (optional)</p>
              </div>

              <div className="field-group">
                <label htmlFor="goal-3">Goal 3</label>
                <input
                  id="goal-3"
                  type="text"
                  value={goal3}
                  onChange={(e) => setGoal3(e.target.value)}
                  placeholder="Optional"
                />
                <p className="field-hint">Nice-to-have (optional)</p>
              </div>

            </div>
          </article>

          {/* Three-tier output */}
          <section aria-labelledby="tiers-heading" className="animate-fade-in-up stagger-2">
            <h2 id="tiers-heading" style={{ fontSize: "1.25rem", marginBottom: "0.35rem" }}>
              Your 3-tier routine
            </h2>
            <p style={{ color: "var(--text-muted)", fontSize: "0.94rem", marginBottom: "1.1rem", lineHeight: "1.6" }}>
              Use the tier that matches your energy. Minimum on hard days, Normal most days.
            </p>

            <div className="grid-auto-3">

              {/* Minimum tier */}
              <div className="card-feature">
                <div className="icon-wrap icon-wrap-sm" style={{ marginBottom: "0.5rem" }}>
                  <span role="img" aria-hidden="true">🔋</span>
                </div>
                <p className="kicker-label" style={{ marginBottom: "0.25rem" }}>For Low-Energy Days</p>
                <h3 style={{ fontSize: "1.05rem", marginBottom: "0.75rem" }}>Minimum Tier</h3>
                <ol style={{ listStyle: "none", margin: 0, padding: 0, display: "grid", gap: "0.5rem" }}>
                  {minimumTier?.steps.map((step, i) => (
                    <li key={i} className="step-row">
                      <span className="step-badge" aria-hidden="true">{i + 1}</span>
                      <span style={{ fontSize: "0.9rem", color: "var(--text-muted)", lineHeight: "1.55" }}>{step}</span>
                    </li>
                  ))}
                </ol>
              </div>

              {/* Normal tier */}
              <div className="card-feature card-feature-teal">
                <div className="icon-wrap icon-wrap-sm icon-wrap-teal" style={{ marginBottom: "0.5rem" }}>
                  <span role="img" aria-hidden="true">✅</span>
                </div>
                <p className="kicker-label" style={{ marginBottom: "0.25rem" }}>Your Default</p>
                <h3 style={{ fontSize: "1.05rem", marginBottom: "0.75rem" }}>Normal Tier</h3>
                <ol style={{ listStyle: "none", margin: 0, padding: 0, display: "grid", gap: "0.5rem" }}>
                  {normalTier?.steps.map((step, i) => (
                    <li key={i} className="step-row">
                      <span className="step-badge" style={{ background: "var(--accent)", color: "#fff" }} aria-hidden="true">{i + 1}</span>
                      <span style={{ fontSize: "0.9rem", color: "var(--text-muted)", lineHeight: "1.55" }}>{step}</span>
                    </li>
                  ))}
                </ol>
              </div>

              {/* Bad day tier */}
              <div className="card-feature card-feature-amber">
                <div className="icon-wrap icon-wrap-sm icon-wrap-amber" style={{ marginBottom: "0.5rem" }}>
                  <span role="img" aria-hidden="true">🌧️</span>
                </div>
                <p className="kicker-label" style={{ marginBottom: "0.25rem" }}>For Hard Days</p>
                <h3 style={{ fontSize: "1.05rem", marginBottom: "0.75rem" }}>Bad Day Tier</h3>
                <ol style={{ listStyle: "none", margin: 0, padding: 0, display: "grid", gap: "0.5rem" }}>
                  {badDayTier?.steps.map((step, i) => (
                    <li key={i} className="step-row">
                      <span className="step-badge" style={{ background: "var(--amber)", color: "#fff" }} aria-hidden="true">{i + 1}</span>
                      <span style={{ fontSize: "0.9rem", color: "var(--text-muted)", lineHeight: "1.55" }}>{step}</span>
                    </li>
                  ))}
                </ol>
              </div>

            </div>
          </section>

          {/* Survival note */}
          <div className="notice-ok animate-fade-in-up stagger-3" role="note">
            <p style={{ fontSize: "0.92rem", lineHeight: "1.65", margin: 0 }}>
              Your routine survives bad days when you have a simpler fallback. Even completing the minimum tier keeps momentum.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
