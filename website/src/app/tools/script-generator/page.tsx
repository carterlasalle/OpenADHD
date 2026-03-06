"use client";

import { useState } from "react";
import Link from "next/link";
import {
  generateQuickScript,
  type ScriptScenario,
  type ScriptTone,
} from "@/lib/toolGenerators";

const scenarios: Array<{
  id: ScriptScenario;
  emoji: string;
  label: string;
  description: string;
}> = [
  {
    id: "parents",
    emoji: "\uD83D\uDC68\u200D\uD83D\uDC69\u200D\uD83D\uDC67",
    label: "Talk to parents",
    description: "Share your ADHD experience with family",
  },
  {
    id: "professor",
    emoji: "\uD83C\uDF93",
    label: "Talk to a professor",
    description: "Request support or accommodations",
  },
  {
    id: "partner",
    emoji: "\u2764\uFE0F",
    label: "Talk to a partner",
    description: "Explain ADHD to someone close to you",
  },
  {
    id: "body-doubling",
    emoji: "\uD83E\uDD1D",
    label: "Ask for body doubling",
    description: "Request a co-working accountability partner",
  },
  {
    id: "work-accommodation",
    emoji: "\uD83D\uDCBC",
    label: "Request work accommodations",
    description: "Start the conversation with your manager",
  },
  {
    id: "repair",
    emoji: "\uD83D\uDD27",
    label: "Repair after missing something",
    description: "Address a dropped ball professionally",
  },
];

const tones: Array<{
  id: ScriptTone;
  label: string;
  description: string;
}> = [
  {
    id: "direct",
    label: "Direct",
    description: "Clear and specific",
  },
  {
    id: "warm",
    label: "Warm",
    description: "Empathetic and relational",
  },
  {
    id: "brief",
    label: "Brief",
    description: "Minimal, just the essentials",
  },
];

export default function ScriptGeneratorPage() {
  const [selectedScenario, setSelectedScenario] =
    useState<ScriptScenario>("parents");
  const [selectedTone, setSelectedTone] = useState<ScriptTone>("warm");
  const [copied, setCopied] = useState(false);

  const script = generateQuickScript(selectedScenario, selectedTone);

  function copyScript() {
    navigator.clipboard.writeText(script).catch(() => {});
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }

  return (
    <section className="section-shell" style={{ paddingTop: "7rem" }}>
      <div style={{ maxWidth: "860px", margin: "0 auto" }}>

        {/* Header */}
        <header className="animate-fade-in-up" style={{ marginBottom: "2.5rem" }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "1rem",
              marginBottom: "1rem",
            }}
          >
            <div className="icon-wrap icon-wrap-lg">
              <span role="img" aria-label="speech bubble">\uD83D\uDCAC</span>
            </div>
            <div>
              <h1
                style={{
                  fontSize: "clamp(1.6rem, 3vw, 2.4rem)",
                  lineHeight: 1.15,
                }}
              >
                Script Generator
              </h1>
              <p
                style={{
                  color: "var(--text-muted)",
                  fontSize: "1.05rem",
                  marginTop: "0.35rem",
                  lineHeight: 1.5,
                }}
              >
                Get copy-ready language for hard conversations &mdash; no blank
                page required.
              </p>
            </div>
          </div>
          <div className="page-actions">
            <Link href="/tools" className="btn-ghost">
              Back to tools
            </Link>
          </div>
        </header>

        {/* Step 1 — Scenario */}
        <article
          className="surface-panel animate-fade-in-up stagger-1"
          style={{ padding: "1.5rem", marginBottom: "1.25rem" }}
        >
          <h2
            style={{
              fontSize: "1.1rem",
              fontWeight: 700,
              marginBottom: "1rem",
            }}
          >
            What do you need to say?
          </h2>
          <div className="grid-auto-3">
            {scenarios.map((scenario) => {
              const isSelected = selectedScenario === scenario.id;
              return (
                <button
                  key={scenario.id}
                  type="button"
                  className={`card-entry${isSelected ? " is-selected" : ""}`}
                  onClick={() => setSelectedScenario(scenario.id)}
                  aria-pressed={isSelected}
                  style={{ textAlign: "left", cursor: "pointer" }}
                >
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "0.6rem",
                      marginBottom: "0.35rem",
                    }}
                  >
                    <div className="icon-wrap icon-wrap-sm" aria-hidden="true">
                      <span>{scenario.emoji}</span>
                    </div>
                    <h3
                      style={{
                        fontSize: "0.92rem",
                        fontWeight: 700,
                        lineHeight: 1.3,
                      }}
                    >
                      {scenario.label}
                    </h3>
                  </div>
                  <p
                    style={{
                      fontSize: "0.83rem",
                      color: "var(--text-muted)",
                      lineHeight: 1.45,
                      margin: 0,
                    }}
                  >
                    {scenario.description}
                  </p>
                </button>
              );
            })}
          </div>
        </article>

        {/* Step 2 — Tone */}
        <article
          className="surface-panel animate-fade-in-up stagger-2"
          style={{ padding: "1.5rem", marginBottom: "1.25rem" }}
        >
          <h2
            style={{
              fontSize: "1.1rem",
              fontWeight: 700,
              marginBottom: "1rem",
            }}
          >
            Choose your tone
          </h2>
          <div
            style={{ display: "flex", gap: "0.6rem", flexWrap: "wrap" }}
            role="group"
            aria-label="Select tone"
          >
            {tones.map((tone) => {
              const isSelected = selectedTone === tone.id;
              return (
                <button
                  key={tone.id}
                  type="button"
                  onClick={() => setSelectedTone(tone.id)}
                  aria-pressed={isSelected}
                  style={{
                    border: `1.5px solid ${
                      isSelected ? "var(--brand)" : "var(--line)"
                    }`,
                    borderRadius: "var(--radius-md)",
                    background: isSelected ? "var(--brand)" : "var(--surface-alt)",
                    color: isSelected ? "#fff" : "var(--text-muted)",
                    padding: "0.55rem 1.1rem",
                    cursor: "pointer",
                    transition: "all 160ms ease",
                    display: "flex",
                    flexDirection: "column",
                    gap: "0.15rem",
                    minWidth: "8rem",
                  }}
                >
                  <span
                    style={{
                      fontWeight: 700,
                      fontSize: "0.93rem",
                    }}
                  >
                    {tone.label}
                  </span>
                  <span
                    style={{
                      fontSize: "0.8rem",
                      opacity: isSelected ? 0.85 : 1,
                    }}
                  >
                    {tone.description}
                  </span>
                </button>
              );
            })}
          </div>
        </article>

        {/* Script output */}
        <article
          className="surface-panel animate-fade-in-up stagger-3"
          style={{ padding: "1.5rem" }}
        >
          <h2
            style={{
              fontSize: "1.1rem",
              fontWeight: 700,
              marginBottom: "1rem",
            }}
          >
            Your script
          </h2>

          <div className="result-block result-block-brand">
            <p
              aria-live="polite"
              style={{
                fontStyle: "italic",
                fontSize: "1.05rem",
                lineHeight: 1.7,
                color: "var(--text)",
                marginBottom: "1rem",
              }}
            >
              &ldquo;{script}&rdquo;
            </p>
            <button
              type="button"
              className="copy-btn"
              onClick={copyScript}
              aria-label="Copy script to clipboard"
            >
              {copied ? "Copied!" : "Copy script"}
            </button>
          </div>

          <p
            className="callout"
            style={{ marginTop: "1rem", fontSize: "0.9rem" }}
          >
            Adapt this to your voice. The structure matters more than the exact
            words.
          </p>
        </article>

      </div>
    </section>
  );
}
