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

export default function SchoolSupportPage() {
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
            <div className="icon-wrap icon-wrap-lg icon-wrap-teal">
              <span role="img" aria-label="Graduation cap">&#127891;</span>
            </div>
            <div>
              <p className="eyebrow">School Support</p>
              <h1 style={{ fontSize: "clamp(1.6rem, 3vw, 2.4rem)", marginTop: "0.2rem" }}>
                School Support Generator
              </h1>
            </div>
          </div>
          <p style={{ color: "var(--text-muted)", fontSize: "1.06rem", maxWidth: "60ch", lineHeight: "1.65" }}>
            Draft accommodation requests and professor communication scripts.
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
            <h2 style={{ fontSize: "1.1rem", marginBottom: "1.1rem" }}>Your class situation</h2>
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
                <label htmlFor="workload-hours">Estimated hours of work</label>
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
              </div>
            </div>
          </article>

          {/* Accommodation Request Card */}
          <article className="card-feature animate-fade-in-up stagger-2">
            <div style={{ display: "flex", alignItems: "center", gap: "0.7rem" }}>
              <div className="icon-wrap icon-wrap-sm icon-wrap-teal" aria-hidden="true">
                <span>&#128221;</span>
              </div>
              <div>
                <p className="kicker-label">Output 1</p>
                <h3 style={{ fontSize: "1rem", marginTop: "0.15rem" }}>Accommodation Request Language</h3>
              </div>
            </div>

            <div className="result-block result-block-teal">
              <div className="output-header">
                <p className="kicker-label">Accommodation draft</p>
                <button
                  type="button"
                  className="copy-btn"
                  onClick={copyAccommodation}
                  aria-label="Copy accommodation request to clipboard"
                >
                  {accommodationCopied ? "Copied!" : "Copy"}
                </button>
              </div>
              <p style={{ marginTop: "0.35rem", color: "var(--text-muted)", lineHeight: "1.6", fontSize: "0.94rem", fontStyle: "italic" }}>
                {result.accommodationDraft}
              </p>
            </div>

            <p style={{ fontSize: "0.82rem", color: "var(--text-faint)", lineHeight: "1.5" }}>
              This is a starting template. Personalize to your situation.
            </p>
          </article>

          {/* Professor Message Card */}
          <article className="card-feature card-feature-purple animate-fade-in-up stagger-3">
            <div style={{ display: "flex", alignItems: "center", gap: "0.7rem" }}>
              <div className="icon-wrap icon-wrap-sm icon-wrap-purple" aria-hidden="true">
                <span>&#128172;</span>
              </div>
              <div>
                <p className="kicker-label">Output 2</p>
                <h3 style={{ fontSize: "1rem", marginTop: "0.15rem" }}>How to Explain ADHD to Your Professor</h3>
              </div>
            </div>

            <div className="result-block result-block-purple">
              <div className="output-header">
                <p className="kicker-label">Professor message</p>
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

            <p style={{ fontSize: "0.82rem", color: "var(--text-faint)", lineHeight: "1.5" }}>
              Schedule office hours to have this conversation in person if possible.
            </p>
          </article>

          {/* Sprint Plan Card */}
          <article className="card-feature card-feature-amber animate-fade-in-up stagger-4">
            <div style={{ display: "flex", alignItems: "center", gap: "0.7rem" }}>
              <div className="icon-wrap icon-wrap-sm icon-wrap-amber" aria-hidden="true">
                <span>&#128197;</span>
              </div>
              <div>
                <p className="kicker-label">Output 3</p>
                <h3 style={{ fontSize: "1rem", marginTop: "0.15rem" }}>Study Plan for This Class</h3>
              </div>
            </div>

            <ul className="week-plan-list" aria-label="Study plan steps">
              {result.plan.map((item, index) => (
                <li key={index} className="week-plan-item">
                  <span className="week-day-label" aria-hidden="true">{String(index + 1).padStart(2, "0")}</span>
                  <span style={{ color: "var(--text-muted)", fontSize: "0.94rem", lineHeight: "1.55" }}>{item}</span>
                </li>
              ))}
            </ul>

            <p style={{ fontSize: "0.82rem", color: "var(--text-faint)", lineHeight: "1.5" }}>
              Adjust sprint lengths to what you can actually sustain.
            </p>
          </article>

        </div>
      </div>
    </section>
  );
}
