"use client";

import { useState } from "react";
import Link from "next/link";
import { buildWeeklyPlanner } from "@/lib/toolGenerators";

interface DeadlineItem {
  name: string;
  dueInDays: number;
  effort: "low" | "medium" | "high";
}

export default function PlannerGeneratorPage() {
  const [deadlines, setDeadlines] = useState<DeadlineItem[]>([
    { name: "Assignment 1", dueInDays: 3, effort: "medium" },
  ]);

  function addDeadline() {
    if (deadlines.length < 6) {
      setDeadlines((prev) => [...prev, { name: "", dueInDays: 7, effort: "medium" }]);
    }
  }

  function removeDeadline(index: number) {
    setDeadlines((prev) => prev.filter((_, i) => i !== index));
  }

  function updateDeadline(index: number, field: keyof DeadlineItem, value: string | number) {
    setDeadlines((prev) =>
      prev.map((d, i) => (i === index ? { ...d, [field]: value } : d))
    );
  }

  const plan = buildWeeklyPlanner({ deadlines: deadlines.filter((d) => d.name.trim()) });

  const totalBlocks = plan.reduce((sum, p) => sum + p.blockCount, 0);
  const earliestStartInDays = plan.length > 0 ? Math.min(...plan.map((p) => p.startInDays)) : 0;

  function urgencyClass(dueInDays: number): string {
    if (dueInDays <= 3) return "card-feature";
    if (dueInDays <= 7) return "card-feature card-feature-amber";
    return "card-feature card-feature-teal";
  }

  function urgencyTagClass(dueInDays: number): string {
    if (dueInDays <= 3) return "tag tag-brand";
    if (dueInDays <= 7) return "tag tag-amber";
    return "tag tag-teal";
  }

  function urgencyLabel(dueInDays: number): string {
    if (dueInDays <= 3) return "Urgent";
    if (dueInDays <= 7) return "This week";
    return "Relaxed";
  }

  function exportPlan() {
    const text = plan.map((d) => `${d.name}: ${d.suggestion}`).join("\n\n");
    const blob = new Blob([text], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "adhd-week-plan.txt";
    a.click();
    URL.revokeObjectURL(url);
  }

  const inputStyle = {
    width: "100%",
    border: "1px solid var(--line)",
    borderRadius: "0.68rem",
    padding: "0.62rem 0.72rem",
    background: "var(--surface)",
    color: "var(--text)",
  };

  return (
    <section className="section-shell" style={{ paddingTop: "7rem" }}>
      <div style={{ maxWidth: "900px", margin: "0 auto" }}>

        {/* Header */}
        <header className="animate-fade-in-up" style={{ marginBottom: "2rem" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "1rem" }}>
            <div className="icon-wrap icon-wrap-lg icon-wrap-amber">
              <span role="img" aria-label="Calendar">&#128197;</span>
            </div>
            <div>
              <p className="eyebrow">Planning Tool</p>
              <h1 style={{ fontSize: "clamp(1.6rem, 3vw, 2.4rem)", marginTop: "0.2rem" }}>
                ADHD Planner Generator
              </h1>
            </div>
          </div>
          <p style={{ color: "var(--text-muted)", fontSize: "1.06rem", maxWidth: "60ch", lineHeight: "1.65" }}>
            Turn deadlines into a realistic week with built-in ADHD buffers.
          </p>
          <div className="page-actions">
            <Link href="/tools" className="btn-muted">
              &#8592; Back to tools
            </Link>
          </div>
        </header>

        <div style={{ display: "grid", gap: "1.25rem" }}>

          {/* Deadline List Form */}
          <article className="surface-panel animate-fade-in-up stagger-1" style={{ padding: "1.5rem" }}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: "0.5rem", marginBottom: "1.1rem" }}>
              <h2 style={{ fontSize: "1.1rem", margin: 0 }}>Enter your deadlines</h2>
              <span className="tag tag-teal">{deadlines.length} / 6</span>
            </div>

            <div style={{ display: "grid", gap: "0.6rem" }}>
              {deadlines.map((deadline, index) => (
                <div
                  key={index}
                  style={{
                    border: "1px solid var(--line)",
                    borderRadius: "var(--radius-md)",
                    padding: "0.75rem",
                    marginBottom: "0.1rem",
                    display: "grid",
                    gridTemplateColumns: "1fr auto auto auto",
                    gap: "0.65rem",
                    alignItems: "end",
                  }}
                >
                  <div className="field-group">
                    <label htmlFor={`name-${index}`}>Task name</label>
                    <input
                      id={`name-${index}`}
                      type="text"
                      placeholder="Assignment, exam, project..."
                      value={deadline.name}
                      onChange={(e) => updateDeadline(index, "name", e.target.value)}
                      style={inputStyle}
                    />
                  </div>

                  <div className="field-group">
                    <label htmlFor={`days-${index}`}>Due in days</label>
                    <input
                      id={`days-${index}`}
                      type="number"
                      min={1}
                      max={90}
                      value={deadline.dueInDays}
                      onChange={(e) =>
                        updateDeadline(index, "dueInDays", Math.max(1, Number(e.target.value) || 1))
                      }
                      style={{ ...inputStyle, minWidth: "80px" }}
                    />
                  </div>

                  <div className="field-group">
                    <label htmlFor={`effort-${index}`}>Effort</label>
                    <select
                      id={`effort-${index}`}
                      value={deadline.effort}
                      onChange={(e) =>
                        updateDeadline(index, "effort", e.target.value as "low" | "medium" | "high")
                      }
                      style={inputStyle}
                    >
                      <option value="low">Low / Easy</option>
                      <option value="medium">Medium / Normal</option>
                      <option value="high">High / Complex</option>
                    </select>
                  </div>

                  {deadlines.length > 1 ? (
                    <button
                      type="button"
                      onClick={() => removeDeadline(index)}
                      aria-label={`Remove deadline ${index + 1}`}
                      style={{
                        border: "1px solid var(--line)",
                        borderRadius: "0.5rem",
                        background: "var(--surface-alt)",
                        color: "var(--text-muted)",
                        padding: "0.62rem 0.72rem",
                        fontSize: "1rem",
                        fontWeight: 700,
                        cursor: "pointer",
                        lineHeight: 1,
                        alignSelf: "end",
                      }}
                    >
                      &times;
                    </button>
                  ) : (
                    <div style={{ width: "42px" }} aria-hidden="true" />
                  )}
                </div>
              ))}

              {deadlines.length < 6 && (
                <button
                  type="button"
                  onClick={addDeadline}
                  className="btn-soft"
                  style={{ justifyContent: "center", borderStyle: "dashed", width: "100%" }}
                >
                  <span aria-hidden="true">+</span> Add another deadline
                </button>
              )}
            </div>
          </article>

          {/* Plan Output Cards */}
          {plan.length > 0 && (
            <div style={{ display: "grid", gap: "1rem" }} aria-label="Generated plan">
              {plan.map((item) => (
                <div key={item.name} className={`${urgencyClass(item.dueInDays)} animate-fade-in-up stagger-2`}>
                  <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: "0.75rem", flexWrap: "wrap" }}>
                    <h3 style={{ fontSize: "1.05rem", fontWeight: 700, margin: 0 }}>
                      {item.name || "Untitled"}
                    </h3>
                    <span className={urgencyTagClass(item.dueInDays)}>
                      {urgencyLabel(item.dueInDays)}
                    </span>
                  </div>

                  <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
                    <span className="tag tag-brand">Due in {item.dueInDays}d</span>
                    <span className="tag">Start in {item.startInDays}d</span>
                    <span className="tag">{item.blockCount} focus blocks</span>
                    <span className="tag">{item.bufferDays}d buffer</span>
                  </div>

                  <p style={{ color: "var(--text-muted)", fontSize: "0.92rem", lineHeight: "1.55", margin: 0 }}>
                    {item.suggestion}
                  </p>
                </div>
              ))}
            </div>
          )}

          {/* Summary Card */}
          {plan.length > 0 && (
            <div className="card-feature card-feature-purple animate-fade-in-up stagger-3">
              <div style={{ display: "flex", alignItems: "center", gap: "0.7rem" }}>
                <div className="icon-wrap icon-wrap-sm icon-wrap-purple" aria-hidden="true">
                  <span>&#127775;</span>
                </div>
                <h3 style={{ fontSize: "1rem" }}>Your week at a glance</h3>
              </div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "0.75rem", marginTop: "0.25rem" }}>
                <div style={{ display: "grid", gap: "0.1rem" }}>
                  <p className="kicker-label">Total focused blocks needed</p>
                  <p className="stat-big" style={{ fontSize: "2rem" }}>{totalBlocks}</p>
                </div>
                <div style={{ display: "grid", gap: "0.1rem" }}>
                  <p className="kicker-label">Start as early as</p>
                  <p className="stat-big" style={{ fontSize: "2rem", color: "var(--purple)" }}>
                    {earliestStartInDays}d
                  </p>
                </div>
              </div>
              <button
                type="button"
                onClick={exportPlan}
                className="btn-muted"
                style={{ alignSelf: "flex-start", marginTop: "0.25rem", fontSize: "0.84rem" }}
              >
                Export as text
              </button>
            </div>
          )}

          {/* Empty state */}
          {plan.length === 0 && (
            <div className="notice-ok animate-fade-in-up stagger-2">
              <p style={{ fontWeight: 700, color: "var(--ok)", marginBottom: "0.2rem" }}>
                Add a deadline above to generate your plan
              </p>
              <p style={{ color: "var(--text-muted)", fontSize: "0.94rem", lineHeight: "1.6" }}>
                Give each task a name, how many days until it&rsquo;s due, and your effort estimate. The plan generates automatically.
              </p>
            </div>
          )}

        </div>
      </div>
    </section>
  );
}
