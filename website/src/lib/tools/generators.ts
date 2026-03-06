export type EnergyLevel = "low" | "medium" | "high";

const starterVerbs = [
  "Define",
  "Gather",
  "Set",
  "Start",
  "Sort",
  "Draft",
  "Review",
  "Finish",
];

const activityTemplates = {
  cleaning: [
    "Pick up visible trash",
    "Collect all laundry in one basket",
    "Start one laundry cycle",
    "Clear one surface",
    "Put away five obvious items",
    "Reset one corner of the room",
    "Take a 3-minute water break",
    "Do a final visual scan",
  ],
  study: [
    "Open class portal and list current tasks",
    "Choose one assignment only",
    "Set timer for first 10 minutes",
    "Gather textbook, notes, and charger",
    "Complete first small section",
    "Mark what is still unclear",
    "Draft one question for office hours",
    "Log next study block",
  ],
  writing: [
    "Name the exact output (email, paragraph, draft)",
    "Write a one-sentence goal",
    "Create three bullet points",
    "Draft without editing",
    "Take a short reset break",
    "Edit for clarity",
    "Send or save draft",
    "Set follow-up reminder",
  ],
  default: [
    "Name the task in one line",
    "Define what done means",
    "Gather required materials",
    "Set a 10-minute start timer",
    "Complete one visible step",
    "Take a quick reset break",
    "Do one more step",
    "Schedule next block",
  ],
} as const;

function inferTaskType(task: string) {
  const normalized = task.toLowerCase();
  if (["clean", "laundry", "dishes", "room", "desk"].some((word) => normalized.includes(word))) {
    return "cleaning" as const;
  }
  if (["study", "exam", "class", "homework", "assignment"].some((word) => normalized.includes(word))) {
    return "study" as const;
  }
  if (["write", "email", "proposal", "essay", "report"].some((word) => normalized.includes(word))) {
    return "writing" as const;
  }
  return "default" as const;
}

export function generateTaskBreakdown(task: string, energy: EnergyLevel, minutes: number) {
  const type = inferTaskType(task);
  const base = [...activityTemplates[type]];

  const stepPrefix = starterVerbs;
  const steps = base.map((step, index) => `${stepPrefix[index] ?? "Do"}: ${step}`);

  const timer =
    minutes <= 20
      ? "Use one 10-minute sprint + 3-minute reset"
      : minutes <= 45
        ? "Use a 25/5 cycle, then decide on one more cycle"
        : "Use two 25/5 cycles with a 10-minute movement break";

  const startScript =
    energy === "low"
      ? `I only need to do 10 minutes of "${task}". Stopping is allowed after the timer.`
      : energy === "medium"
        ? `I will complete Step 1 and Step 2 now. I can reassess after the first timer.`
        : `I will finish the first two cycles for "${task}" before opening any new tabs.`;

  return {
    steps,
    timer,
    startScript,
  };
}

export function calculateTimeEstimate(
  baseMinutes: number,
  complexity: "simple" | "moderate" | "complex",
  interruptions: "low" | "medium" | "high",
  energy: EnergyLevel,
) {
  const complexityMultiplier = complexity === "simple" ? 1.1 : complexity === "moderate" ? 1.35 : 1.7;
  const interruptionMultiplier = interruptions === "low" ? 1.05 : interruptions === "medium" ? 1.2 : 1.45;
  const energyMultiplier = energy === "high" ? 1 : energy === "medium" ? 1.15 : 1.35;

  const realisticMinutes = Math.round(baseMinutes * complexityMultiplier * interruptionMultiplier * energyMultiplier);
  const buffer = Math.round(realisticMinutes - baseMinutes);

  return {
    baseMinutes,
    realisticMinutes,
    buffer,
    recommendation:
      realisticMinutes <= 35
        ? "Plan one focused block."
        : realisticMinutes <= 80
          ? "Split into two blocks with a transition break."
          : "Schedule multiple blocks across the day with recovery time.",
  };
}

export type PomodoroMode = "short" | "classic" | "body-double" | "panic";

export function getPomodoroMode(mode: PomodoroMode) {
  switch (mode) {
    case "short":
      return {
        label: "10/3 cycles",
        focusMinutes: 10,
        breakMinutes: 3,
        rounds: 6,
        notes: [
          "Best for task initiation and low-energy starts.",
          "Use verbal countdown for first cycle.",
        ],
      };
    case "classic":
      return {
        label: "25/5 classic",
        focusMinutes: 25,
        breakMinutes: 5,
        rounds: 4,
        notes: [
          "Best for moderate complexity tasks.",
          "Take 15-minute long break after round 4.",
        ],
      };
    case "body-double":
      return {
        label: "Body doubling mode",
        focusMinutes: 25,
        breakMinutes: 5,
        rounds: 5,
        notes: [
          "Join silent co-working room or start camera-on accountability call.",
          "Post intention before cycle starts.",
        ],
      };
    default:
      return {
        label: "Panic rescue mode",
        focusMinutes: 15,
        breakMinutes: 2,
        rounds: 5,
        notes: [
          "For deadline rescue only, not daily baseline.",
          "Start with highest grade/impact task piece.",
        ],
      };
  }
}

const dopamineBank: Record<string, string[]> = {
  movement: ["2-minute stretch", "Short walk outside", "10 squats + water", "Dance to one song"],
  novelty: ["Switch workspace for one cycle", "Use a new pen or template", "Change playlist"],
  social: ["Send a check-in text", "Ask for 20-minute body doubling", "Voice note to a friend"],
  sensory: ["Cold water face splash", "Fidget object for 90 seconds", "Deep pressure (blanket or wall press)"],
  quiet: ["60-second breathing reset", "Eyes closed audio break", "One-page journaling dump"],
};

export function buildDopamineMenu(selectedTypes: string[]) {
  const menu = selectedTypes.flatMap((type) => dopamineBank[type] ?? []);
  const now = menu.slice(0, 5);
  const later = menu.slice(5, 12);

  return {
    now,
    later,
    emergency: [
      "Drink water and stand up immediately",
      "Pick one 2-minute movement reset",
      "Run one 10-minute focus sprint",
    ],
  };
}

const routineDefaults = {
  morning: {
    minimum: ["Drink water", "Take meds or vitamins", "Open today checklist"],
    normal: ["Wake routine", "Protein breakfast", "Plan top 3", "Start first task block"],
    badDay: ["Wash face", "Drink water", "One tiny task only"],
  },
  night: {
    minimum: ["Set tomorrow clothes/items", "Plug in phone outside bed", "Set wake alarms"],
    normal: ["30-minute wind-down", "Hygiene routine", "Review tomorrow priorities", "Lights off target"],
    badDay: ["No doom scroll in bed", "Prepare one item for tomorrow", "Sleep as soon as possible"],
  },
} as const;

export function generateRoutine(
  routineType: "morning" | "night",
  mustInclude: string[],
  optionalInclude: string[],
) {
  const defaults = routineDefaults[routineType];

  const minimum = [...defaults.minimum, ...mustInclude].slice(0, 6);
  const normal = [...defaults.normal, ...optionalInclude].slice(0, 8);
  const badDay = [...defaults.badDay, ...mustInclude.slice(0, 1)].slice(0, 5);

  return { minimum, normal, badDay };
}

const toneOpeners = {
  direct: "I want to be direct about what I need.",
  warm: "I care about this relationship and want to communicate clearly.",
  concise: "Quick note:",
} as const;

export function generateConversationScript(
  topic: string,
  tone: keyof typeof toneOpeners,
  context: string,
) {
  const opener = toneOpeners[tone] ?? toneOpeners.direct;

  const scripts: Record<string, string> = {
    parents:
      "I think ADHD may be affecting me in ways that are making school/work and daily life harder. I am asking for support to pursue an evaluation and practical systems.",
    professor:
      "I am managing ADHD-related executive functioning challenges. I am requesting accommodations and a meeting to set a plan for deadlines and exam support.",
    partner:
      "When tasks pile up, my ADHD symptoms can look like avoidance. I am not avoiding you. I need us to use explicit reminders and shared systems instead of assumptions.",
    manager:
      "I work best with clear priorities, written action items, and structured check-ins. I would like to discuss adjustments that improve delivery and consistency.",
    recovery:
      "I missed an important commitment. I take responsibility. Here is my repair plan and how I will prevent this pattern next time.",
    medication:
      "I am tracking medication response and side effects. I want to review patterns and discuss possible adjustments at my next appointment.",
    evaluation:
      "I want to schedule an ADHD evaluation. I have examples from daily life and would like to understand your process, cost, and timeline.",
    family:
      "I want us to reduce conflict by designing support systems. I am asking for one concrete change this week.",
  };

  const base = scripts[topic] ?? scripts.partner;

  return `${opener}\n\n${base}\n\nContext: ${context}\n\nSpecific ask: [add one clear ask]\nTimeline: [add date]\nThank you for working with me.`;
}

export function generateSchoolSupport(input: {
  studentName: string;
  classType: "reading-heavy" | "problem-solving" | "project-based" | "mixed";
  needs: string[];
  tone: "formal" | "friendly";
}) {
  const greeting = input.tone === "formal" ? "Dear Professor," : "Hi Professor,";
  const needsLine = input.needs.length > 0 ? input.needs.join(", ") : "extended time and structured deadlines";

  const accommodationDraft = `${greeting}\n\nI am writing to request support related to ADHD. The accommodations that help me most are: ${needsLine}.\n\nI am committed to meeting course expectations and would appreciate guidance on implementing these supports effectively.\n\nThank you,\n${input.studentName || "[Your Name]"}`;

  const explainDraft = `I have ADHD, which mainly affects executive functioning (starting tasks, estimating time, and maintaining focus). I am proactive and using structured systems, and I want to align with your expectations early.`;

  const studyPlan =
    input.classType === "reading-heavy"
      ? [
          "Use 25/5 reading sprints with active notes.",
          "Summarize each section in 3 bullets.",
          "Schedule spaced recall on day 1, 3, 7.",
        ]
      : input.classType === "problem-solving"
        ? [
            "Do one worked example before independent sets.",
            "Group similar problem types into short blocks.",
            "Use error log after each session.",
          ]
        : input.classType === "project-based"
          ? [
              "Break project into milestones with mini-deadlines.",
              "Use weekly stakeholder update script.",
              "Reserve one risk/recovery block per week.",
            ]
          : [
              "Map all tasks in one planner.",
              "Use time estimator before each block.",
              "Plan one review session each weekend.",
            ];

  return { accommodationDraft, explainDraft, studyPlan };
}

export interface DeadlineInput {
  title: string;
  dueDate: string;
  effortHours: number;
  priority: "high" | "medium" | "low";
}

export function generateWeeklyPlanner(deadlines: DeadlineInput[], startDate: string) {
  const start = new Date(startDate);
  const dayPlans: { day: string; actions: string[] }[] = [];

  for (let i = 0; i < 7; i += 1) {
    const date = new Date(start);
    date.setDate(start.getDate() + i);
    dayPlans.push({
      day: date.toLocaleDateString("en-US", {
        weekday: "short",
        month: "short",
        day: "numeric",
      }),
      actions: [],
    });
  }

  const sorted = [...deadlines].sort((a, b) => {
    const dateA = new Date(a.dueDate).getTime();
    const dateB = new Date(b.dueDate).getTime();
    if (dateA !== dateB) return dateA - dateB;

    const rank = { high: 0, medium: 1, low: 2 };
    return rank[a.priority] - rank[b.priority];
  });

  sorted.forEach((item, index) => {
    const blockCount = Math.max(1, Math.ceil(item.effortHours / 1.5));

    for (let b = 0; b < blockCount; b += 1) {
      const targetDay = (index + b) % dayPlans.length;
      const label = b === blockCount - 1 ? "finalize" : "work block";
      dayPlans[targetDay].actions.push(`${item.title}: ${label} (${Math.ceil(item.effortHours / blockCount)}h)`);
    }

    const bufferDay = Math.max(0, (index + blockCount) % dayPlans.length);
    dayPlans[bufferDay].actions.push(`${item.title}: buffer/review (30 min)`);
  });

  dayPlans.forEach((plan) => {
    if (plan.actions.length === 0) {
      plan.actions.push("Recovery/admin block (email, reset, planning)");
    }
  });

  return dayPlans;
}
