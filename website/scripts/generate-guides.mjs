import fs from "node:fs";
import path from "node:path";
import PDFDocument from "pdfkit";

const outDir = path.resolve("public/guides");
fs.mkdirSync(outDir, { recursive: true });

const guides = [
  {
    file: "openadhd-launch-playbook.pdf",
    title: "OpenADHD From Zero to Launch Playbook",
    subtitle: "Nonprofit-style informational hub implementation manual",
    sections: [
      {
        heading: "Mission and Product Promise",
        paragraphs: [
          "OpenADHD exists to make high-quality ADHD help free, practical, and easy to use. The promise is action-first support: users should be able to reach a useful next step in under one minute.",
          "The core product model is one-page understanding, one tool for today, one weekly plan, and one deeper guide. This model is designed for real executive-function constraints, not idealized attention spans.",
          "Every decision should be evaluated through five filters: free-first access, low-friction UX, evidence-aware language, nonjudgmental tone, and personalized pathways.",
        ],
      },
      {
        heading: "Information Architecture",
        paragraphs: [
          "Top-level navigation should prioritize utility over brand storytelling. Required sections: Start Here, Tools, Library, Diagnosis and Care, For Students, For Parents and Partners, and About plus Contribute.",
          "Library organization must mirror moments and pain points rather than academic categories. Users search for immediate problems: cannot start, behind in class, time disappeared, conflict at home, medication uncertainty.",
          "Compatibility routes should preserve old links (for example, /resources to /library and /diagnosis to /care) to prevent resource rot and external-link breakage.",
        ],
      },
      {
        heading: "MVP Build Sequence",
        paragraphs: [
          "Phase 1 (2-4 weeks): Start Here chooser, 10 high-impact guides, 10 printable templates, Task Breaker and Routine Builder tools, and core care navigation path pages.",
          "Phase 2: Add Study Sprint, Script Library, Student Portal, and improved diagnosis/cost/medication guidance. Introduce save/favorites and lightweight progress tracking.",
          "Phase 3: Add structured community layer, local resource map starter, volunteer program, translation workflow, and partnership playbooks.",
          "Critical constraint: do not scale content volume before delivery quality is stable on the top 20 user journeys.",
        ],
      },
      {
        heading: "Content Operating Rules",
        paragraphs: [
          "Each page begins with: what this is, who it is for, and what to do first. This prevents orientation fatigue.",
          "Each deep guide includes TL;DR, minimum viable version, if-you-have-energy mode, and crisis mode. This supports variable capacity across the same user.",
          "Use checklists, section caps, and progress visibility. Avoid walls of text and avoid content that requires uninterrupted long-focus sessions.",
          "High-stakes pages must include educational-only framing and clear crisis routing (988 in the U.S.).",
        ],
      },
      {
        heading: "Measurement Framework",
        paragraphs: [
          "Primary metrics: tool completions, template downloads, return visits, time-to-first-helpful-action, and one-click helpfulness rating.",
          "Avoid vanity-only metrics such as pageviews without behavioral outcomes. Page traffic is not equivalent to support impact.",
          "Define healthy latency targets: users should complete first useful action within two minutes from landing.",
          "Review metrics weekly and use evidence of user friction to prioritize product changes.",
        ],
      },
      {
        heading: "Governance and Public-Good Trust",
        paragraphs: [
          "Maintain a transparency page covering content creation, review process, funding disclosures, partnerships, and contribution pathways.",
          "Adopt school-friendly licensing intent for templates so educators and support groups can adapt resources without legal friction.",
          "Use an editorial policy that rejects miracle-cure language, unvetted influencer claims, and unsupported medical certainty.",
          "Trust grows from consistency, clarity, and transparent limits as much as from content volume.",
        ],
      },
    ],
  },
  {
    file: "executive-function-field-manual.pdf",
    title: "Executive Function Field Manual",
    subtitle: "Practical intervention reference for daily execution",
    sections: [
      {
        heading: "Executive Dysfunction Pattern Map",
        paragraphs: [
          "Common patterns include startup paralysis, sequence loss, context-switch collapse, and completion drift. These are regulation and orchestration failures, not evidence of low effort.",
          "Intervention begins by reducing decision load. Replace vague goals with physical first actions and make starts observable and time-bound.",
          "Visible external systems are required: one task board, one calendar, one recovery checklist. Tool sprawl creates hidden cognitive tax.",
        ],
      },
      {
        heading: "Task Initiation Protocol",
        paragraphs: [
          "Use a strict startup script: define done in one sentence, gather materials for step one only, set ten-minute timer, start without renegotiating scope.",
          "If no start after two attempts, add body doubling before trying harder solo. Escalate support early, not after burnout.",
          "Track starts completed instead of only final completions. Start consistency is the leading indicator for long-term execution reliability.",
        ],
      },
      {
        heading: "Time Blindness Countermeasures",
        paragraphs: [
          "Always estimate then buffer. Include setup, transition, and shutdown time explicitly. Most planning errors come from missing hidden segments.",
          "Use visual timers and checkpoint alarms. Time cues must be external and redundant.",
          "Calibrate weekly: compare estimated vs actual durations and adjust default multipliers by task type.",
        ],
      },
      {
        heading: "Routine Engineering",
        paragraphs: [
          "Every routine needs three tiers: minimum, normal, and bad-day. Without fallback tiers, consistency collapses under stress.",
          "Attach routines to stable anchors (after coffee, after shower, before laptop close). Cue-based sequencing outperforms motivation-based plans.",
          "Weekly routine review should remove failing steps before adding new ones.",
        ],
      },
      {
        heading: "Repair After Misses",
        paragraphs: [
          "Misses are expected in ADHD support systems. Reliability comes from rapid repair, not perfect prevention.",
          "Repair script: acknowledge impact, state immediate corrective action with timestamp, state one prevention change.",
          "Use this script across school, work, and relationships to preserve trust while improving systems.",
        ],
      },
      {
        heading: "Sustainability Guardrails",
        paragraphs: [
          "Do not run panic mode as default productivity. Emergency cadence should be temporary and explicitly bounded.",
          "Protect sleep, nutrition, and recovery blocks as execution infrastructure rather than optional wellness extras.",
          "When overload persists, reduce commitments before adding optimization complexity.",
        ],
      },
    ],
  },
  {
    file: "diagnosis-care-navigator.pdf",
    title: "Diagnosis and Care Navigator",
    subtitle: "Educational guidance for evaluation, medication, and support pathways",
    sections: [
      {
        heading: "Scope and Safety",
        paragraphs: [
          "This guide is educational and does not diagnose ADHD. Only licensed clinicians can diagnose and prescribe treatment.",
          "Use this material to prepare for appointments, ask better questions, and navigate options with less confusion.",
          "For immediate crisis support in the U.S., call or text 988.",
        ],
      },
      {
        heading: "When to Seek Evaluation",
        paragraphs: [
          "Consider evaluation when symptoms are persistent, cross-setting, and functionally impairing despite self-help attempts.",
          "Bring examples from school, work, and relationships. Concrete impairment examples are more useful than broad labels.",
          "Track overlap factors such as sleep debt, anxiety, depression, and substance use patterns to support differential assessment.",
        ],
      },
      {
        heading: "Evaluation Process Breakdown",
        paragraphs: [
          "Most evaluations include clinical interview, symptom history, rating scales, and differential screening for overlapping conditions.",
          "Ask providers how they assess adult ADHD, how they evaluate overlap conditions, and what follow-up looks like after diagnosis.",
          "If concerns are dismissed without assessment reasoning, request clarification and consider second opinions.",
        ],
      },
      {
        heading: "Cost-Constrained Care Pathways",
        paragraphs: [
          "Explore community clinics, university psychology clinics, and sliding-scale providers first. Ask about full-cost scope (report + follow-up).",
          "Telehealth can reduce access friction but requires credential clarity and continuity planning.",
          "Avoid services that promise guaranteed diagnosis or hide clinician qualifications.",
        ],
      },
      {
        heading: "Medication Education Basics",
        paragraphs: [
          "Medication pathways can include stimulants and non-stimulants. Selection and adjustment are individualized and clinician-guided.",
          "Track dose timing, effect window, appetite, sleep, mood shifts, and rebound effects to improve appointment quality.",
          "Do not self-adjust dosage. Bring concise data summaries and one clear question per visit.",
        ],
      },
      {
        heading: "Therapy, Coaching, and Skills Support",
        paragraphs: [
          "CBT can support planning, regulation, and thought-pattern reframing. Coaching supports practical system design and accountability.",
          "Skills groups reduce isolation and reinforce practical behavior change through repeated implementation.",
          "Most people do best with integrated care: medication decisions, behavioral systems, and social support together.",
        ],
      },
      {
        heading: "Path-Based Navigation",
        paragraphs: [
          "Path 1: Not diagnosed but struggling - focus on evaluation preparation and self-screening education.",
          "Path 2: Diagnosed and overwhelmed - stabilize daily anchors and reduce system complexity.",
          "Path 3: Trying meds - build tracking discipline and clinical communication scripts.",
          "Path 4: Parent/partner - use shared systems and non-shaming accountability language.",
        ],
      },
    ],
  },
];

function renderGuide(guide) {
  const outputPath = path.join(outDir, guide.file);
  const doc = new PDFDocument({
    size: "LETTER",
    margins: { top: 48, bottom: 48, left: 54, right: 54 },
  });

  doc.pipe(fs.createWriteStream(outputPath));

  doc.font("Times-Bold").fontSize(24).text(guide.title, { align: "left" });
  doc.moveDown(0.4);
  doc.font("Times-Italic").fontSize(12).text(guide.subtitle);
  doc.moveDown(1.2);

  for (const section of guide.sections) {
    doc.font("Times-Bold").fontSize(15).text(section.heading);
    doc.moveDown(0.35);

    for (const paragraph of section.paragraphs) {
      doc.font("Times-Roman").fontSize(11).text(paragraph, {
        align: "left",
        lineGap: 3,
      });
      doc.moveDown(0.5);
    }

    doc.moveDown(0.3);
  }

  doc.moveDown(1);
  doc.font("Times-Italic").fontSize(10).text("OpenADHD educational resource. Not medical advice.", {
    align: "left",
  });

  doc.end();

  const textCompanion = path.join(outDir, guide.file.replace(/\.pdf$/i, ".txt"));
  const lines = [guide.title, guide.subtitle, ""];
  for (const section of guide.sections) {
    lines.push(section.heading);
    lines.push("-".repeat(section.heading.length));
    lines.push(...section.paragraphs, "");
  }
  lines.push("OpenADHD educational resource. Not medical advice.");
  fs.writeFileSync(textCompanion, lines.join("\n"), "utf8");
}

for (const guide of guides) {
  renderGuide(guide);
}

console.log(`Generated ${guides.length} PDF guides in ${outDir}`);
