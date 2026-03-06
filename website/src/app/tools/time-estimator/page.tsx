"use client";

import { useState } from "react";
import Link from "next/link";
import { estimateTaskTime, type TimeEstimateInput } from "@/lib/toolGenerators";

const selectStyle: React.CSSProperties = {
  width: "100%",
  border: "1px solid var(--line)",
  borderRadius: "0.68rem",
  padding: "0.62rem 0.72rem",
  background: "var(--surface)",
  color: "var(--text)",
  fontSize: "0.95rem",
  appearance: "auto",
};

export default function TimeEstimatorPage() {
  const [baseMinutes, setBaseMinutes] = useState(30);
  const [complexity, setComplexity] = useState<"low" | "medium" | "high">("medium");
  const [interruptions, setInterruptions] = useState<"rare" | "sometimes" | "frequent">("sometimes");
  const [energy, setEnergy] = useState<"low" | "normal" | "high">("normal");

  const result = estimateTaskTime({ baseMinutes, complexity, interruptions, energy });

  return (
    <section className="section-shell" style={{ paddingTop: "7rem" }}>
      <div style={{ maxWidth: "760px", margin: "0 auto" }}>

        {/* Tool Header */}
        <header className="animate-fade-in-up" style={{ marginBottom: "2rem" }}>
          <div className="icon-wrap icon-wrap-lg icon-wrap-teal" style={{ marginBottom: "1rem" }}>
            <span role="img" aria-label="timer">⏱️</span>
          </div>
          <h1 style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.6rem)", marginBottom: "0.5rem" }}>
            Time Estimator
          </h1>
          <p style={{ color: "var(--text-muted)", fontSize: "1.06rem", maxWidth: "56ch", lineHeight: "1.65", marginBottom: "1.25rem" }}>
            Add realistic ADHD buffers before your schedule breaks again.
          </p>
          <div className="page-actions">
            <Link href="/tools" className="btn-ghost">
              ← Back to tools
            </Link>
          </div>
        </header>

        <div style={{ display: "grid", gap: "1.25rem" }}>

          {/* Form Panel */}
          <article className="surface-panel animate-fade-in-up stagger-1" style={{ padding: "1.5rem" }}>
            <h2 style={{ fontSize: "1.1rem", marginBottom: "1.25rem" }}>Tell me about this task</h2>
            <div className="tool-form">

              <div className="field-group">
                <label htmlFor="base-minutes">Your first guess (minutes)</label>
                <input
                  id="base-minutes"
                  type="number"
                  min={1}
                  value={baseMinutes}
                  onChange={(e) => setBaseMinutes(Math.max(1, Number(e.target.value) || 1))}
                  style={{ width: "100%" }}
                />
                <p className="field-hint">How long do you think it will take? Your first instinct is fine.</p>
              </div>

              <div className="field-group">
                <label htmlFor="complexity-select">Task complexity</label>
                <select
                  id="complexity-select"
                  value={complexity}
                  onChange={(e) => setComplexity(e.target.value as "low" | "medium" | "high")}
                  style={selectStyle}
                >
                  <option value="low">Low — straightforward</option>
                  <option value="medium">Medium — some thinking required</option>
                  <option value="high">High — complex or unfamiliar</option>
                </select>
              </div>

              <div className="field-group">
                <label htmlFor="interruptions-select">Interruption level</label>
                <select
                  id="interruptions-select"
                  value={interruptions}
                  onChange={(e) => setInterruptions(e.target.value as "rare" | "sometimes" | "frequent")}
                  style={selectStyle}
                >
                  <option value="rare">Rare — good focus environment</option>
                  <option value="sometimes">Sometimes — normal distractions</option>
                  <option value="frequent">Frequent — chaotic environment</option>
                </select>
              </div>

              <div className="field-group">
                <label htmlFor="energy-select">Your energy right now</label>
                <select
                  id="energy-select"
                  value={energy}
                  onChange={(e) => setEnergy(e.target.value as "low" | "normal" | "high")}
                  style={selectStyle}
                >
                  <option value="low">Low — tired or struggling</option>
                  <option value="normal">Normal — baseline</option>
                  <option value="high">High — motivated and clear</option>
                </select>
              </div>

            </div>
          </article>

          {/* Result Panel */}
          <article className="surface-panel animate-fade-in-up stagger-2" style={{ padding: "1.5rem" }}>
            <h2 style={{ fontSize: "1.1rem", marginBottom: "1.25rem" }}>Your buffered estimate</h2>

            {/* Two numbers side by side */}
            <div style={{ display: "flex", alignItems: "center", gap: "1.5rem", flexWrap: "wrap", marginBottom: "1.25rem" }}>
              <div style={{ textAlign: "center" }}>
                <p style={{ fontSize: "0.8rem", color: "var(--text-muted)", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: "0.25rem" }}>
                  Your estimate
                </p>
                <p className="stat-big" style={{ color: "var(--text-soft)" }}>
                  {result.estimatedMinutes}
                  <span style={{ fontSize: "1rem", fontWeight: 600, fontFamily: "var(--font-sans)" }}> min</span>
                </p>
              </div>

              <div style={{ fontSize: "2rem", color: "var(--text-faint)", fontWeight: 300, alignSelf: "center" }}>
                →
              </div>

              <div style={{ textAlign: "center" }}>
                <p style={{ fontSize: "0.8rem", color: "var(--accent)", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: "0.25rem" }}>
                  ADHD-buffered
                </p>
                <p className="stat-big">
                  {result.bufferedMinutes}
                  <span style={{ fontSize: "1rem", fontWeight: 600, fontFamily: "var(--font-sans)" }}> min</span>
                </p>
              </div>
            </div>

            {/* Buffer tag */}
            <div style={{ marginBottom: "1rem" }}>
              <span className="tag tag-teal">Buffer added: {result.bufferPercent}%</span>
            </div>

            {/* Note */}
            <div className="callout" role="note" style={{ marginBottom: "1rem" }}>
              <p style={{ fontSize: "0.92rem", lineHeight: "1.6", margin: 0 }}>{result.note}</p>
            </div>

            {/* Why we buffer */}
            <div className="result-block result-block-teal">
              <p style={{ fontSize: "0.88rem", lineHeight: "1.65", margin: 0, color: "var(--text-muted)" }}>
                <strong style={{ color: "var(--text)" }}>Why we add buffer:</strong> ADHD planning often underestimates transitions, setup time, and energy needed. The buffered number is your more realistic target.
              </p>
            </div>
          </article>

          {/* Pairing card */}
          <div className="card-feature card-feature-amber animate-fade-in-up stagger-3">
            <div style={{ display: "flex", alignItems: "center", gap: "0.65rem", marginBottom: "0.5rem" }}>
              <div className="icon-wrap icon-wrap-sm icon-wrap-amber" aria-hidden="true">
                <span>📅</span>
              </div>
              <h3 style={{ fontSize: "1rem", margin: 0 }}>Plug this into your planner</h3>
            </div>
            <p style={{ color: "var(--text-muted)", fontSize: "0.92rem", lineHeight: "1.65", margin: "0 0 1rem" }}>
              Use the buffered time when building your week plan. It prevents the cascade failures that happen when one task runs over.
            </p>
            <Link href="/tools/planner-generator" className="btn-soft">
              Open planner generator
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
}
