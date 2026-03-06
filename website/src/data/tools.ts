export interface ToolDescriptor {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  category: string;
  timeToUse: string;
  href: string;
  featured?: boolean;
}

export const toolDirectory: ToolDescriptor[] = [
  {
    slug: "task-breaker",
    name: "Task Breaker",
    tagline: "Turn one intimidating task into micro-steps.",
    description:
      "Input a task like 'clean my room' and get a start script, micro-steps, and a timer recommendation.",
    category: "Executive Dysfunction",
    timeToUse: "2 minutes",
    href: "/tools/task-breaker",
    featured: true,
  },
  {
    slug: "time-estimator",
    name: "Time Estimator",
    tagline: "Estimate like a realist, not an optimist.",
    description:
      "Adds ADHD-friendly buffers based on task complexity, transitions, and interruption risk.",
    category: "Time Blindness",
    timeToUse: "1 minute",
    href: "/tools/time-estimator",
    featured: true,
  },
  {
    slug: "study-sprint",
    name: "Study Sprint",
    tagline: "Build class-specific study loops.",
    description:
      "Generates short study sprints with active recall for reading, problem, and writing classes.",
    category: "Students",
    timeToUse: "3 minutes",
    href: "/tools/study-sprint",
    featured: true,
  },
  {
    slug: "dopamine-menu",
    name: "Dopamine Menu Builder",
    tagline: "Design reset options before you crash.",
    description:
      "Create a fast menu of movement, novelty, social, and sensory resets you can use on demand.",
    category: "Burnout",
    timeToUse: "4 minutes",
    href: "/tools/dopamine-menu",
    featured: true,
  },
  {
    slug: "routine-builder",
    name: "Routine Builder",
    tagline: "Build minimum, normal, and bad-day routines.",
    description:
      "Design realistic morning and night routines that survive low-energy days.",
    category: "Executive Function",
    timeToUse: "4 minutes",
    href: "/tools/routine-builder",
    featured: true,
  },
  {
    slug: "script-generator",
    name: "Script Generator",
    tagline: "Copy-ready language for hard conversations.",
    description:
      "Generate scripts for professors, managers, parents, partners, and recovery after misses.",
    category: "Communication",
    timeToUse: "2 minutes",
    href: "/tools/script-generator",
    featured: true,
  },
  {
    slug: "planner-generator",
    name: "ADHD Planner Generator",
    tagline: "Deadline-aware weekly planner with buffers.",
    description:
      "Input deadlines and get a realistic weekly schedule with transition buffers and check-ins.",
    category: "Planning",
    timeToUse: "5 minutes",
    href: "/tools/planner-generator",
    featured: true,
  },
  {
    slug: "bad-day-mode",
    name: "Bad Day Mode",
    tagline: "Reduce everything to one next action.",
    description:
      "When overloaded, this mode strips planning down to immediate survival and momentum steps.",
    category: "Crisis-Friendly",
    timeToUse: "1 minute",
    href: "/tools/bad-day-mode",
    featured: true,
  },
];

export const pomodoroModes = [
  {
    id: "short",
    name: "10/3 Short Cycles",
    workMinutes: 10,
    breakMinutes: 3,
    description: "Best for heavy avoidance and startup resistance.",
  },
  {
    id: "classic",
    name: "25/5 Classic",
    workMinutes: 25,
    breakMinutes: 5,
    description: "Balanced mode for most focus sessions.",
  },
  {
    id: "body-double",
    name: "Body Doubling Mode",
    workMinutes: 40,
    breakMinutes: 10,
    description:
      "Longer work blocks designed for partner accountability and silent co-working.",
  },
  {
    id: "panic",
    name: "Panic Rescue Mode",
    workMinutes: 18,
    breakMinutes: 2,
    description:
      "High-intensity rescue loop for deadlines; includes quick prioritization prompts.",
  },
] as const;
