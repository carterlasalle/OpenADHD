export interface TemplateAsset {
  id: string;
  name: string;
  description: string;
  format: "PDF" | "TXT" | "MD";
  href: string;
  category: "Planner" | "Checklist" | "Study" | "Medication" | "Routine";
}

export const templateAssets: TemplateAsset[] = [
  {
    id: "weekly-planner-adhd-version",
    name: "Weekly Planner (ADHD Version)",
    description: "A buffer-first weekly planner with high/medium/low energy lanes.",
    format: "TXT",
    href: "/templates/weekly-planner-adhd.txt",
    category: "Planner",
  },
  {
    id: "two-column-task-system",
    name: "2-Column Task System Sheet",
    description: "Separate must-finish outcomes from supporting tasks to reduce overload.",
    format: "TXT",
    href: "/templates/2-column-task-system-sheet.txt",
    category: "Planner",
  },
  {
    id: "dopamine-menu-template",
    name: "Dopamine Menu",
    description: "Build quick reset options by movement, novelty, social, and sensory type.",
    format: "TXT",
    href: "/templates/dopamine-menu-template.txt",
    category: "Routine",
  },
  {
    id: "habit-scaffold-sheet",
    name: "Habit Scaffold Sheet",
    description: "Build minimum viable habits with anchors, cues, and fallback plans.",
    format: "TXT",
    href: "/templates/habit-scaffold-sheet.txt",
    category: "Routine",
  },
  {
    id: "study-sprint-tracker",
    name: "Study Sprint Tracker",
    description: "Track class type, sprint blocks, recall score, and next review date.",
    format: "TXT",
    href: "/templates/study-sprint-tracker.txt",
    category: "Study",
  },
  {
    id: "leaving-the-house-checklist",
    name: "Leaving the House Checklist",
    description: "A no-fail exit checklist with medication, essentials, and route verification.",
    format: "TXT",
    href: "/templates/leaving-house-checklist.txt",
    category: "Checklist",
  },
  {
    id: "medication-log",
    name: "Medication Log + Symptom Tracker",
    description: "Track dose timing, appetite, sleep, mood, and focus for prescriber reviews.",
    format: "TXT",
    href: "/templates/medication-log-symptom-tracker.txt",
    category: "Medication",
  },
  {
    id: "panic-proof-checklist",
    name: "Panic-Proof Checklist",
    description: "Emergency checklist for overwhelm days when planning fails.",
    format: "TXT",
    href: "/templates/panic-proof-reset-checklist.txt",
    category: "Checklist",
  },
  {
    id: "sleep-ramp-down-sheet",
    name: "Sleep Ramp-Down Sheet",
    description: "45-minute evening shutdown protocol with low-friction steps.",
    format: "TXT",
    href: "/templates/night-routine-scaffold.txt",
    category: "Routine",
  },
  {
    id: "evaluation-checklist",
    name: "Evaluation Prep Checklist",
    description: "Diagnosis prep worksheet for symptom examples, history, and key questions.",
    format: "TXT",
    href: "/templates/evaluation-prep-checklist.txt",
    category: "Checklist",
  },
  {
    id: "repair-conversation-card",
    name: "Repair Conversation Card",
    description: "Short scripts for accountability and relationship repair after misses.",
    format: "TXT",
    href: "/templates/conversation-repair-script-sheet.txt",
    category: "Checklist",
  },
  {
    id: "crisis-friendly-action-card",
    name: "Crisis-Friendly Action Card",
    description: "One-step action card for high overwhelm moments.",
    format: "TXT",
    href: "/templates/crisis-friendly-action-card.txt",
    category: "Checklist",
  },
  {
    id: "weekly-relationship-check-in-sheet",
    name: "Weekly Relationship Check-In Sheet",
    description: "Shared structure for expectations, logistics, and repair conversations.",
    format: "TXT",
    href: "/templates/relationship-weekly-checkin.txt",
    category: "Routine",
  },
];

export interface GuideAsset {
  id: string;
  title: string;
  description: string;
  href: string;
  pages: string;
}

export const longGuideAssets: GuideAsset[] = [
  {
    id: "openadhd-zero-to-launch",
    title: "OpenADHD Launch Playbook",
    description:
      "Mission model, operating principles, information architecture, launch sequencing, and sustainability plan.",
    href: "/guides/openadhd-launch-playbook.pdf",
    pages: "45+ pages",
  },
  {
    id: "executive-dysfunction-field-guide",
    title: "Executive Function Field Manual",
    description:
      "Deep operational guide for initiation, sequencing, planning, and completion with practical intervention ladders.",
    href: "/guides/executive-function-field-manual.pdf",
    pages: "30+ pages",
  },
  {
    id: "diagnosis-care-playbook",
    title: "Diagnosis and Care Navigator",
    description:
      "Evaluation prep, cost pathways, medication literacy, therapy/coaching options, and self-advocacy scripts.",
    href: "/guides/diagnosis-care-navigator.pdf",
    pages: "35+ pages",
  },
];
