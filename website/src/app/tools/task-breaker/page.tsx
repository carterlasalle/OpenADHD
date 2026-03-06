"use client";

import { useState } from "react";
import Link from "next/link";
import SaveFavoriteButton from "@/components/SaveFavoriteButton";
import { buildTaskBreakdown } from "@/lib/toolGenerators";

export default function TaskBreakerPage() {
  const [task, setTask] = useState("Clean my room");
  const [context, setContext] = useState("Home");
  const [copied, setCopied] = useState(false);

  const result = buildTaskBreakdown(task, context);

  function copyScript() {
    navigator.clipboard.writeText(result.startScript).catch(() => {});
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }

  return (
    <section className="section-shell" style={{ paddingTop: "7rem" }}>
      <div style={{ maxWidth: "860px", margin: "0 auto" }}>

        {/* Tool Header */}
        <header className="animate-fade-in-up" style={{ marginBottom: "2rem" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "1rem" }}>
            <div className="icon-wrap icon-wrap-lg">
              <span role="img" aria-hidden="true">⚡</span>
            </div>
            <div>
              <p className="eyebrow">Productivity Tool</p>
              <h1 style={{ fontSize: "clamp(1.6rem, 3vw, 2.4rem)", marginTop: "0.2rem" }}>
                Task Breaker
              </h1>
            </div>
          </div>
          <p style={{ color: "var(--text-muted)", fontSize: "1.06rem", maxWidth: "60ch", lineHeight: "1.65" }}>
            Turn one overwhelming task into launchable micro-steps with a starter script and timer suggestion.
          </p>
          <div className="page-actions">
            <SaveFavoriteButton itemId="tool-task-breaker" label="Save tool" />
            <Link href="/tools" className="btn-ghost">
              Back to tools
            </Link>
          </div>
        </header>

        <div style={{ display: "grid", gap: "1.25rem" }}>

          {/* Form Panel */}
          <article className="surface-panel animate-fade-in-up stagger-1" style={{ padding: "1.5rem" }}>
            <h2 style={{ fontSize: "1.1rem", marginBottom: "1.1rem" }}>What do you need to do?</h2>
            <div className="tool-form">
              <div className="field-group">
                <label htmlFor="task-input">Task</label>
                <input
                  id="task-input"
                  value={task}
                  onChange={(e) => setTask(e.target.value)}
                  placeholder="Clean my room"
                />
                <p className="field-hint">
                  Example: &ldquo;Write my history essay intro&rdquo; or &ldquo;Clean the bathroom&rdquo;
                </p>
              </div>
              <div className="field-group">
                <label htmlFor="context-input">Context (optional)</label>
                <input
                  id="context-input"
                  value={context}
                  onChange={(e) => setContext(e.target.value)}
                  placeholder="Home, school, work"
                />
                <p className="field-hint">
                  Home, school, work, virtual &mdash; any context helps tailor your steps
                </p>
              </div>
            </div>
          </article>

          {/* Output Panel */}
          <article className="surface-panel animate-fade-in-up stagger-2" style={{ padding: "1.5rem" }}>
            <p className="kicker-label">Your micro-step plan</p>
            <h2 style={{ fontSize: "1.25rem", marginTop: "0.3rem", marginBottom: "1.1rem" }}>
              8 steps to get started
            </h2>

            <div className="output-section">
              {/* Micro Steps */}
              <ol style={{ listStyle: "none", margin: 0, padding: 0, display: "grid", gap: "0.6rem" }}>
                {result.microSteps.map((step, index) => (
                  <li key={step} className="step-row">
                    <span className="step-badge" aria-hidden="true">{index + 1}</span>
                    <div style={{ display: "flex", alignItems: "flex-start", gap: "0.65rem", flex: 1, paddingTop: "0.15rem" }}>
                      <input
                        type="checkbox"
                        id={`step-${index}`}
                        style={{ marginTop: "0.18rem", flexShrink: 0, width: "16px", height: "16px", accentColor: "var(--brand)" }}
                        aria-label={`Step ${index + 1}: ${step}`}
                      />
                      <label
                        htmlFor={`step-${index}`}
                        style={{ color: "var(--text-muted)", cursor: "pointer", lineHeight: "1.55" }}
                      >
                        {step}
                      </label>
                    </div>
                  </li>
                ))}
              </ol>

              {/* Starter Script */}
              <div className="result-block result-block-brand">
                <div className="output-header">
                  <p className="kicker-label">10-minute starter script</p>
                  <button
                    type="button"
                    className="copy-btn"
                    onClick={copyScript}
                    aria-label="Copy starter script to clipboard"
                  >
                    {copied ? "Copied!" : "Copy"}
                  </button>
                </div>
                <p style={{ marginTop: "0.35rem", fontStyle: "italic", color: "var(--text-strong)", lineHeight: "1.6" }}>
                  &ldquo;{result.startScript}&rdquo;
                </p>
              </div>

              {/* Timer Suggestion */}
              <div className="result-block result-block-teal">
                <p className="kicker-label">Timer suggestion</p>
                <p style={{ marginTop: "0.35rem", color: "var(--text-muted)" }}>
                  {result.timerSuggestion}
                </p>
              </div>
            </div>
          </article>

          {/* What to do next */}
          <div className="card-feature card-feature-teal animate-fade-in-up stagger-3">
            <div style={{ display: "flex", alignItems: "center", gap: "0.7rem" }}>
              <div className="icon-wrap icon-wrap-sm icon-wrap-teal" aria-hidden="true">
                <span>🍅</span>
              </div>
              <h3 style={{ fontSize: "1rem" }}>Once you&rsquo;ve started&hellip;</h3>
            </div>
            <p style={{ color: "var(--text-muted)", fontSize: "0.92rem" }}>
              Use the Smart Pomodoro to stay on track once you&rsquo;ve launched. It pairs perfectly with these micro-steps &mdash; pick 10/3 for low energy or 25/5 for normal.
            </p>
            <div>
              <Link href="/tools/smart-pomodoro" className="btn-soft" style={{ fontSize: "0.88rem", padding: "0.5rem 0.85rem" }}>
                Open Smart Pomodoro
              </Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
