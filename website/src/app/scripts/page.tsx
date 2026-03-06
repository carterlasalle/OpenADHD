"use client";

import { useState } from "react";

interface ScriptVariant {
  tone: "Direct" | "Warm" | "Formal";
  text: string;
}

interface ScriptEntry {
  id: string;
  title: string;
  context: string;
  variants: ScriptVariant[];
}

const scripts: ScriptEntry[] = [
  {
    id: "parents-eval",
    title: "How to tell my parents I think I have ADHD",
    context: "Use when asking for evaluation support.",
    variants: [
      {
        tone: "Direct",
        text: "I think ADHD might be affecting my life in school and at home. I want to schedule a professional evaluation and I need your help doing that this week.",
      },
      {
        tone: "Warm",
        text: "I want to share something important. I have been struggling in ways that match ADHD, and I would feel supported if we could look into a formal evaluation together.",
      },
      {
        tone: "Formal",
        text: "I am requesting support in arranging an ADHD evaluation. I have persistent attention and executive-function difficulties that are affecting daily functioning.",
      },
    ],
  },
  {
    id: "professor",
    title: "How to tell my professor I need extended time",
    context: "Use early, before major deadlines if possible.",
    variants: [
      {
        tone: "Direct",
        text: "I am managing ADHD-related executive function challenges and I am requesting extended time for [exam/assignment]. I can provide documentation through disability services.",
      },
      {
        tone: "Warm",
        text: "I care about this course and want to stay aligned with expectations. ADHD impacts my processing speed and planning, so I am requesting extended-time support for [exam/assignment].",
      },
      {
        tone: "Formal",
        text: "I am writing to request an accommodation for extended time on [exam/assignment] due to ADHD-related functional impairments. Please advise on next steps and required documentation.",
      },
    ],
  },
  {
    id: "partner",
    title: "How to explain ADHD to a partner without sounding like excuses",
    context: "Use in a calm moment, not mid-conflict.",
    variants: [
      {
        tone: "Direct",
        text: "I am not asking for a pass. I am telling you ADHD affects execution, and I want us to use one shared system so I follow through more reliably.",
      },
      {
        tone: "Warm",
        text: "I care about us and I know missed tasks hurt trust. ADHD affects how I manage time and transitions, so I want us to set up support that makes follow-through easier.",
      },
      {
        tone: "Formal",
        text: "I want to address recurring follow-through issues constructively. ADHD impacts executive function, and I propose we use a shared checklist and weekly review to improve consistency.",
      },
    ],
  },
  {
    id: "body-double",
    title: "How to ask for body doubling",
    context: "Useful when initiation is stuck.",
    variants: [
      {
        tone: "Direct",
        text: "Can you body-double with me for 25 minutes? We do not need to talk. I just need accountability to start.",
      },
      {
        tone: "Warm",
        text: "Would you be up for a short co-working block? Even silent presence helps me get started when my ADHD is flaring.",
      },
      {
        tone: "Formal",
        text: "I am requesting a 25-minute body-doubling session to support task initiation. Silent co-working is sufficient.",
      },
    ],
  },
  {
    id: "work-accommodation",
    title: "How to request workplace accommodations",
    context: "Use with manager or HR when requesting workflow support.",
    variants: [
      {
        tone: "Direct",
        text: "I perform best with written priorities, protected focus blocks, and checkpoint-based deadlines. I am requesting these ADHD-friendly workflow accommodations to improve consistency.",
      },
      {
        tone: "Warm",
        text: "I want to keep improving output quality. A few ADHD-supportive adjustments would help: written action items, protected focus windows, and clearer deadline sequencing.",
      },
      {
        tone: "Formal",
        text: "I am requesting reasonable workplace accommodations related to ADHD, including written priority alignment, reduced interruption windows for focus tasks, and structured checkpoint cadence.",
      },
    ],
  },
  {
    id: "recovery",
    title: "How to recover after missing something important",
    context: "Use immediately after a miss to rebuild trust.",
    variants: [
      {
        tone: "Direct",
        text: "I missed this and I take responsibility. I can deliver [specific fix] by [time], and I have added [system change] to prevent repeat.",
      },
      {
        tone: "Warm",
        text: "I am sorry for the impact. I care about repairing this quickly. Here is what I will do now, and here is the system change I am making for next time.",
      },
      {
        tone: "Formal",
        text: "I acknowledge the missed commitment and its impact. Corrective action: [action] by [deadline]. Preventive measure: [system/process adjustment].",
      },
    ],
  },
];

export default function ScriptsPage() {
  const [copied, setCopied] = useState<string | null>(null);

  return (
    <section className="section-shell" style={{ paddingTop: "7rem" }}>
      <div className="container-wrap">
        <div className="surface-panel" style={{ padding: "1rem" }}>
          <p className="eyebrow">Real-Life Script Library</p>
          <h1 className="hero-title" style={{ marginTop: "0.6rem" }}>
            Copy-paste scripts for high-pressure moments
          </h1>
          <p className="hero-subtext">
            Pick the tone that fits: direct, warm, or formal. Edit only the details in brackets.
          </p>
        </div>

        <div className="grid-cards-wide" style={{ marginTop: "1rem" }}>
          {scripts.map((script) => (
            <article key={script.id} className="surface-panel" style={{ padding: "1rem" }}>
              <h2 style={{ fontSize: "1.2rem" }}>{script.title}</h2>
              <p style={{ marginTop: "0.4rem", color: "var(--text-soft)" }}>{script.context}</p>

              <div style={{ marginTop: "0.8rem", display: "grid", gap: "0.65rem" }}>
                {script.variants.map((variant) => {
                  const key = `${script.id}-${variant.tone}`;
                  return (
                    <div key={key} className="soft-card" style={{ padding: "0.8rem" }}>
                      <p className="kicker-label">{variant.tone} tone</p>
                      <p style={{ marginTop: "0.35rem" }}>{variant.text}</p>
                      <div className="page-actions" style={{ marginTop: "0.6rem" }}>
                        <button
                          type="button"
                          className="button-secondary"
                          onClick={async () => {
                            await navigator.clipboard.writeText(variant.text);
                            setCopied(key);
                            window.setTimeout(() => setCopied(null), 1400);
                          }}
                        >
                          Copy
                        </button>
                        {copied === key ? <span className="badge">Copied</span> : null}
                      </div>
                    </div>
                  );
                })}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
