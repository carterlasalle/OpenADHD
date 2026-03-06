export interface TaskBreakdownResult {
  microSteps: string[];
  startScript: string;
  timerSuggestion: string;
}

export function buildTaskBreakdown(task: string, context: string): TaskBreakdownResult {
  const cleanTask = task.trim() || "the task";
  const contextPrefix = context.trim() ? `${context.trim()} - ` : "";

  const microSteps = [
    `${contextPrefix}Define success for "${cleanTask}" in one sentence.`,
    `Remove distractions and set up only the first tool for "${cleanTask}".`,
    "Do the smallest visible action for 6-10 minutes.",
    "Take a 2-minute reset: breathe, water, stretch.",
    `Continue with the next tiny step for "${cleanTask}".`,
    "Write down blockers in plain language.",
    "Message someone for accountability if blocked.",
    "Stop with a written next step for your next session.",
  ];

  return {
    microSteps,
    startScript: `I am not finishing ${cleanTask} right now. I am only starting for 10 minutes.`,
    timerSuggestion: "Start with 10/3 cycle for low energy, 25/5 for normal energy.",
  };
}

export interface TimeEstimateInput {
  baseMinutes: number;
  complexity: "low" | "medium" | "high";
  interruptions: "rare" | "sometimes" | "frequent";
  energy: "low" | "normal" | "high";
}

export interface TimeEstimateResult {
  estimatedMinutes: number;
  bufferedMinutes: number;
  bufferPercent: number;
  note: string;
}

export function estimateTaskTime(input: TimeEstimateInput): TimeEstimateResult {
  const complexityMultiplier =
    input.complexity === "low" ? 1 : input.complexity === "medium" ? 1.25 : 1.5;
  const interruptionMultiplier =
    input.interruptions === "rare"
      ? 1
      : input.interruptions === "sometimes"
        ? 1.2
        : 1.4;
  const energyMultiplier = input.energy === "low" ? 1.3 : input.energy === "normal" ? 1.1 : 1;

  const estimated = Math.max(
    5,
    Math.round(input.baseMinutes * complexityMultiplier * interruptionMultiplier * energyMultiplier),
  );
  const buffered = Math.round(estimated * 1.35);

  return {
    estimatedMinutes: estimated,
    bufferedMinutes: buffered,
    bufferPercent: 35,
    note:
      "ADHD planning often underestimates transitions. Add explicit setup/shutdown buffers before and after work blocks.",
  };
}

export interface RoutineInput {
  name: string;
  anchor: string;
  goals: string[];
}

export interface RoutineTier {
  tier: "minimum" | "normal" | "bad-day";
  steps: string[];
}

export function buildRoutineTiers(input: RoutineInput): RoutineTier[] {
  const baseGoal = input.goals[0] ?? "show up";
  const secondGoal = input.goals[1] ?? "protect energy";
  const thirdGoal = input.goals[2] ?? "prepare next step";

  return [
    {
      tier: "minimum",
      steps: [
        `Anchor: ${input.anchor || "existing daily cue"}.`,
        `Do one micro action for ${baseGoal}.`,
        `Set up one item that makes tomorrow easier (${secondGoal}).`,
      ],
    },
    {
      tier: "normal",
      steps: [
        `Anchor: ${input.anchor || "existing daily cue"}.`,
        `Step 1: 5-minute launch for ${baseGoal}.`,
        `Step 2: 8-minute action for ${secondGoal}.`,
        `Step 3: 5-minute prep for ${thirdGoal}.`,
      ],
    },
    {
      tier: "bad-day",
      steps: [
        `Anchor: ${input.anchor || "existing daily cue"}.`,
        "Water + breath reset (90 seconds).",
        `Single action only: ${baseGoal} for 3 minutes.`,
      ],
    },
  ];
}

export const dopamineActivities = {
  movement: [
    "3-minute brisk walk",
    "dance to one song",
    "stretch shoulders and hips",
    "10 squats + water",
  ],
  novelty: ["change location", "switch playlist", "use a timer challenge", "new pen/notebook"],
  social: [
    "send one check-in message",
    "co-work for 20 minutes",
    "ask for body doubling",
    "voice note to a friend",
  ],
  sensory: [
    "cold water on face",
    "chew mint gum",
    "use weighted blanket for reset",
    "noise-cancel + focus sound",
  ],
};

export type ScriptScenario =
  | "parents"
  | "professor"
  | "partner"
  | "body-doubling"
  | "work-accommodation"
  | "repair";

export type ScriptTone = "direct" | "warm" | "brief";

export function generateQuickScript(scenario: ScriptScenario, tone: ScriptTone): string {
  const map: Record<ScriptScenario, Record<ScriptTone, string>> = {
    parents: {
      direct:
        "I think ADHD may be affecting my daily life, and I want a formal evaluation. I need your help scheduling it.",
      warm:
        "I want to share something important. I have been struggling in ways that match ADHD, and I would feel supported if we could explore an evaluation together.",
      brief: "Can we talk tonight? I think I need an ADHD evaluation.",
    },
    professor: {
      direct:
        "I am managing ADHD-related executive function challenges and requesting support with extended time for [assignment/exam].",
      warm:
        "I care about doing well in this class and ADHD affects my processing speed and planning. Could we discuss accommodations?",
      brief: "Could we discuss accommodations for ADHD this week?",
    },
    partner: {
      direct:
        "I know this impacted you. ADHD affects my execution, not my care, and I want to fix this with a shared system.",
      warm:
        "I am sorry for the impact. I care deeply, and I want us to design supports together so this happens less.",
      brief: "I care and I missed this. Can we do a quick repair plan tonight?",
    },
    "body-doubling": {
      direct: "Can you co-work with me for 25 minutes? Silent is fine; I just need accountability.",
      warm: "Would you be up for a short body-doubling block? It helps me start tasks.",
      brief: "25-min body-double?",
    },
    "work-accommodation": {
      direct:
        "I am requesting reasonable ADHD accommodations: written priorities, protected focus blocks, and checkpoint-based deadlines.",
      warm:
        "I want to improve consistency and I have a few ADHD-friendly workflow adjustments that would help. Can we discuss them?",
      brief: "Could we set a meeting to discuss ADHD-related workflow accommodations?",
    },
    repair: {
      direct:
        "I missed this and I take responsibility. I can deliver [new action] by [time], and I have added [system fix] to prevent repeats.",
      warm:
        "I am sorry for the impact. I am fixing this now and have a clearer plan so it does not repeat.",
      brief: "I missed this. I am fixing it now and will update by [time].",
    },
  };

  return map[scenario][tone];
}

export interface SchoolSupportInput {
  classType: "essay" | "problem-set" | "reading-heavy" | "lab";
  workloadHours: number;
  deadlineDays: number;
}

export function buildSchoolSupport(input: SchoolSupportInput) {
  const sprintLength = input.classType === "reading-heavy" ? 20 : 25;
  const dailySprints = input.workloadHours <= 4 ? 2 : input.workloadHours <= 8 ? 3 : 4;

  const plan = [
    `Run ${dailySprints} daily sprints of ${sprintLength} minutes with 5-minute breaks.`,
    `Use 1 review sprint every 2 days before deadline in ${input.deadlineDays} days.`,
    "Schedule one office-hours or support check-in before midpoint.",
    "Use spaced review on day -3 and day -1.",
  ];

  const accommodationDraft =
    "I am requesting ADHD-related accommodations to support consistent demonstration of learning outcomes, including extended time where appropriate and flexibility for executive-function barriers when documented.";

  return {
    plan,
    accommodationDraft,
    explainToProfessor:
      "I am actively using structured study supports and would appreciate discussing accommodations that align with course expectations.",
  };
}

export interface PlannerInput {
  deadlines: Array<{ name: string; dueInDays: number; effort: "low" | "medium" | "high" }>;
}

export function buildWeeklyPlanner(input: PlannerInput) {
  return input.deadlines
    .sort((a, b) => a.dueInDays - b.dueInDays)
    .map((deadline) => {
      const bufferDays = deadline.effort === "high" ? 3 : deadline.effort === "medium" ? 2 : 1;
      const startInDays = Math.max(0, deadline.dueInDays - bufferDays - 1);
      const blockCount = deadline.effort === "high" ? 5 : deadline.effort === "medium" ? 3 : 2;

      return {
        ...deadline,
        startInDays,
        bufferDays,
        blockCount,
        suggestion: `Start in ${startInDays} day(s), plan ${blockCount} focused blocks, and keep ${bufferDays} buffer day(s) before due date.`,
      };
    });
}
