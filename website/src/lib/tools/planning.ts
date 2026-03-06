const DEFAULT_MICRO_STEPS = [
  "Define the exact outcome in one sentence.",
  "Gather only the materials needed for the first step.",
  "Clear one distraction from your environment.",
  "Start a 10-minute timer and complete step one only.",
  "Take a 2-minute break and review progress.",
  "Choose the next smallest action.",
  "Run one more focus block.",
  "Log what worked so restart is easier tomorrow.",
];

export function createMicroSteps(task: string): string[] {
  const cleaned = task.trim();
  if (!cleaned) return DEFAULT_MICRO_STEPS;

  return [
    `Write what 'done' means for: ${cleaned}.`,
    `Collect tools/materials for ${cleaned}.`,
    `Do a 3-minute setup so you can start ${cleaned} without decisions.`,
    `Start with the easiest visible part of ${cleaned}.`,
    `Continue for 10 minutes before judging progress.`,
    `Pause and identify one blocker slowing ${cleaned}.`,
    `Shrink the blocker into a tiny action and complete it.`,
    `Schedule the next block for ${cleaned} before you stop.`,
  ];
}

export function estimateAdhdTime({
  baseMinutes,
  complexity,
  energy,
  interruptions,
}: {
  baseMinutes: number;
  complexity: "low" | "medium" | "high";
  energy: "low" | "steady" | "high";
  interruptions: number;
}) {
  const complexityMultiplier =
    complexity === "low" ? 1.2 : complexity === "medium" ? 1.45 : 1.8;
  const energyMultiplier = energy === "high" ? 0.9 : energy === "steady" ? 1 : 1.25;
  const interruptionCost = interruptions * 4;

  const adjusted = Math.round(baseMinutes * complexityMultiplier * energyMultiplier + interruptionCost);

  return {
    base: Math.max(baseMinutes, 1),
    adjusted,
    buffer: Math.max(adjusted - baseMinutes, 0),
  };
}

export function generatePlanner({
  deadlines,
  weeklyHours,
}: {
  deadlines: Array<{ title: string; dueDate: string; priority: "high" | "medium" | "low" }>;
  weeklyHours: number;
}) {
  const sorted = [...deadlines].sort((a, b) => a.dueDate.localeCompare(b.dueDate));

  const blocks = sorted.map((deadline, index) => {
    const baseHours = deadline.priority === "high" ? 4 : deadline.priority === "medium" ? 2.5 : 1.5;
    const bufferedHours = Math.round(baseHours * 1.4 * 10) / 10;
    return {
      ...deadline,
      recommendedHours: bufferedHours,
      suggestedStartDay: Math.max(1, index + 1),
    };
  });

  const plannedHours = blocks.reduce((sum, item) => sum + item.recommendedHours, 0);

  return {
    blocks,
    plannedHours,
    overCapacity: plannedHours > weeklyHours,
    recommendation: plannedHours > weeklyHours
      ? "You are over weekly capacity. Reduce scope, ask for extensions, or defer low-priority items."
      : "Capacity looks workable with buffers. Protect focus blocks and keep transitions visible.",
  };
}

export function routineBuilder({
  routineName,
  anchors,
}: {
  routineName: string;
  anchors: string[];
}) {
  const baseLabel = routineName || "Routine";

  return {
    minimum: [
      `Open ${baseLabel} checklist and complete first anchor only: ${anchors[0] ?? "core task"}.`,
      "Run 5-minute timer and finish one tiny action.",
      "Log completion and stop.",
    ],
    normal: [
      `Complete first two anchors: ${anchors.slice(0, 2).join(", ") || "anchor 1, anchor 2"}.`,
      "Run 15-minute focused block.",
      "Set next reminder for tomorrow.",
    ],
    badDay: [
      "Do minimum safety/health step only.",
      "Send one accountability message: 'I did the minimum version today.'",
      "Reset and try normal version tomorrow.",
    ],
  };
}
