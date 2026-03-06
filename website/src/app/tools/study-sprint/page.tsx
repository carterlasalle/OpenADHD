"use client";

import { useState } from "react";
import Link from "next/link";
import { buildSchoolSupport } from "@/lib/toolGenerators";

type ClassType = "essay" | "problem-set" | "reading-heavy" | "lab";

const CLASS_LABELS: Record<ClassType, string> = {
  "essay": "Essay / Writing",
  "problem-set": "Problem Set / Math",
  "reading-heavy": "Reading-Heavy",
  "lab": "Lab / Practical",
};

export default function StudySprintPage() {
  const [classType, setClassType] = useState<ClassType>("essay");
  const [workloadHours, setWorkloadHours] = useState(4);
  const [deadlineDays, setDeadlineDays] = useState(7);
  const [accommodationCopied, setAccommodationCopied] = useState(false);
  const [professorCopied, setProfessorCopied] = useState(false);

  const result = buildSchoolSupport({ classType, workloadHours, deadlineDays });

  function copyAccommodation() {
    navigator.clipboard.writeText(result.accommodationDraft).catch(() => {});
    setAccommodationCopied(true);
    setTimeout(() => setAccommodationCopied(false), 2000);
  }

  function copyProfessor() {
    navigator.clipboard.writeText(result.explainToProfessor).catch(() => {});
    setProfessorCopied(true);
    setTimeout(() => setProfessorCopied(false), 2000);
  }

  return (
    <section className="section-shell" style={{ paddingTop: "7rem" }}>
      <div style={{ maxWidth: "860px", margin: "0 auto" }}>

        {/* Header */}
        <header className="animate-fade-in-up" style={{ marginBottom: "2rem" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "1rem" }}>
            <div className="icon-wrap icon-wrap-lg">
              <span role="img" aria-label="Books">&#128218;</span>
            </div>
            <div>
              <p className="eyebrow">Productivity Tool</p>
              <h1 style={{ fontSize: "clamp(1.6rem, 3vw, 2.4rem)", marginTop: "0.2rem" }}>
                Study Sprint
              </h1>
            </div>
          </div>
          <p style={{ color: "var(--text-muted)", fontSize: "1.06rem", maxWidth: "60ch", lineHeight: "1.65" }}>
            Generate a study loop based on your class and what&rsquo;s realistic right now.
          </p>
          <div className="page-actions">
            <Link href="/tools" className="btn-muted">
              &#8592; Back to tools
            </Link>
          </div>
        </header>

        <div style={{ display: "grid", gap: "1.25rem" }}>

          {/* Form Panel */}
          <article className="surface-panel animate-fade-in-up stagger-1" style={{ padding: "1.5rem" }}>
            <h2 style={{ fontSize: "1.1rem", marginBottom: "1.1rem" }}>Tell me about your work</h2>
            <div className="tool-form">
              <div className="field-group">
                <label htmlFor="class-type">Class type</label>
                <select
                  id="class-type"
                  value={classType}
                  onChange={(e) => setClassType(e.target.value as ClassType)}
                  style={{
                    width: "100%",
                    border: "1px solid var(--line)",
                    borderRadius: "0.68rem",
                    padding: "0.62rem 0.72rem",
                    background: "var(--surface)",
                    color: "var(--text)",
                  }}
                >
                  {(Object.keys(CLASS_LABELS) as ClassType[]).map((key) => (
                    <option key={key} value={key}>{CLASS_LABELS[key]}</option>
                  ))}
                </select>
              </div>

              <div className="field-group">
                <label htmlFor="workload-hours">Hours of work</label>
                <input
                  id="workload-hours"
                  type="number"
                  min={1}
                  max={40}
                  value={workloadHours}
                  onChange={(e) => setWorkloadHours(Math.max(1, Number(e.target.value) || 1))}
                  style={{
                    width: "100%",
                    border: "1px solid var(--line)",
                    borderRadius: "0.68rem",
                    padding: "0.62rem 0.72rem",
                    background: "var(--surface)",
                    color: "var(--text)",
                  }}
                />
                <p className="field-hint">Rough estimate &mdash; okay if you&rsquo;re not sure</p>
              </div>

              <div className="field-group">
                <label htmlFor="deadline-days">Days until deadline</label>
                <input
                  id="deadline-days"
                  type="number"
                  min={1}
                  max={90}
                  value={deadlineDays}
                  onChange={(e) => setDeadlineDays(Math.max(1, Number(e.target.value) || 1))}
                  style={{
                    width: "100%",
                    border: "1px solid var(--line)",
                    borderRadius: "0.68rem",
                    padding: "0.62rem 0.72rem",
                    background: "var(--surface)",
                    color: "var(--text)",
                  }}
                />
                <p className="field-hint">How many days do you have left?</p>
              </div>
            </div>
          </article>

          {/* Sprint Plan Output */}
          <div className="card-feature animate-fade-in-up stagger-2">
            <p className="kicker-label">Your sprint plan</p>
            <ul className="week-plan-list" aria-label="Sprint plan steps" style={{ marginTop: "0.5rem" }}>
              {result.plan.map((item, index) => (
                <li key={index} className="week-plan-item">
                  <span className="week-day-label" aria-hidden="true">{String(index + 1).padStart(2, "0")}</span>
                  <span style={{ color: "var(--text-muted)", fontSize: "0.94rem", lineHeight: "1.55" }}>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Accommodation Text */}
          <div className="result-block result-block-teal animate-fade-in-up stagger-3">
            <div className="output-header">
              <p className="kicker-label">Accommodation language</p>
              <button
                type="button"
                className="copy-btn"
                onClick={copyAccommodation}
                aria-label="Copy accommodation language to clipboard"
              >
                {accommodationCopied ? "Copied!" : "Copy"}
              </button>
            </div>
            <p style={{ marginTop: "0.35rem", color: "var(--text-muted)", lineHeight: "1.6", fontSize: "0.94rem", fontStyle: "italic" }}>
              {result.accommodationDraft}
            </p>
          </div>

          {/* Professor Message */}
          <div className="result-block result-block-purple animate-fade-in-up stagger-4">
            <div className="output-header">
              <p className="kicker-label">Explain to professor</p>
              <button
                type="button"
                className="copy-btn"
                onClick={copyProfessor}
                aria-label="Copy professor message to clipboard"
              >
                {professorCopied ? "Copied!" : "Copy"}
              </button>
            </div>
            <p style={{ marginTop: "0.35rem", color: "var(--text-muted)", lineHeight: "1.6", fontSize: "0.94rem", fontStyle: "italic" }}>
              {result.explainToProfessor}
            </p>
          </div>

          {/* Encouragement Callout */}
          <div className="callout animate-fade-in-up stagger-5">
            <p style={{ color: "var(--text-muted)", fontSize: "0.94rem", lineHeight: "1.6" }}>
              Starting late is normal. One sprint today beats zero sprints perfectly planned.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
