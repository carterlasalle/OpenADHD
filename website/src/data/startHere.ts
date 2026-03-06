export interface ContextOption {
  id: string;
  label: string;
  note: string;
  portalHref: string;
}

export interface StartPath {
  id: string;
  label: string;
  pageTitle: string;
  pageHref: string;
  toolTitle: string;
  toolHref: string;
  weeklyPlan: string[];
  deepGuideTitle: string;
  deepGuideHref: string;
}

export const contextOptions: ContextOption[] = [
  {
    id: "student",
    label: "Student",
    note: "Middle school, high school, and college support.",
    portalHref: "/students",
  },
  {
    id: "adult",
    label: "Adult",
    note: "Work/life systems and consistency support.",
    portalHref: "/adults",
  },
  {
    id: "undiagnosed",
    label: "Undiagnosed but struggling",
    note: "Need care clarity and evaluation guidance.",
    portalHref: "/care/not-diagnosed",
  },
  {
    id: "diagnosed",
    label: "Diagnosed and overwhelmed",
    note: "Need practical stabilization now.",
    portalHref: "/care/diagnosed-overwhelmed",
  },
  {
    id: "trying-meds",
    label: "Trying meds",
    note: "Medication education and tracking support.",
    portalHref: "/care/trying-meds",
  },
  {
    id: "parent",
    label: "Parent",
    note: "Support scripts and family systems.",
    portalHref: "/parents-partners",
  },
  {
    id: "partner",
    label: "Partner/friend",
    note: "Communication and relationship repair support.",
    portalHref: "/parents-partners",
  },
  {
    id: "teacher",
    label: "Teacher",
    note: "Classroom accommodations and scripts.",
    portalHref: "/teachers",
  },
  {
    id: "manager",
    label: "Work manager",
    note: "Workplace structure and accommodations.",
    portalHref: "/managers",
  },
];

export const startPaths: StartPath[] = [
  {
    id: "overwhelmed",
    label: "Getting started / overwhelmed",
    pageTitle: "Getting Started When You Feel Overwhelmed",
    pageHref: "/library/getting-started-overwhelmed",
    toolTitle: "Task Breaker",
    toolHref: "/tools/task-breaker",
    weeklyPlan: [
      "Run two 10-minute restart blocks today.",
      "Use three-line task board daily (must, maybe, not today).",
      "Do one body-doubling block before day 4.",
      "Review one blocker and remove it on day 7.",
    ],
    deepGuideTitle: "Executive function guide",
    deepGuideHref: "/library/executive-dysfunction",
  },
  {
    id: "school",
    label: "School and studying",
    pageTitle: "Study Systems That Do Not Collapse",
    pageHref: "/library/school-study-system",
    toolTitle: "School Support Generator",
    toolHref: "/tools/school-support",
    weeklyPlan: [
      "Map all deadlines with two-day buffers.",
      "Run four study sprints this week.",
      "Send one support message before missing a due date.",
      "Use Sunday reset for next-week setup.",
    ],
    deepGuideTitle: "Student Portal",
    deepGuideHref: "/students",
  },
  {
    id: "work",
    label: "Work and productivity",
    pageTitle: "Work and Productivity for ADHD Brains",
    pageHref: "/library/work-productivity-system",
    toolTitle: "Planner Generator",
    toolHref: "/tools/planner-generator",
    weeklyPlan: [
      "Pick top 3 outcomes for the week.",
      "Protect one deep-work block Tue-Thu.",
      "Send one proactive status update each day.",
      "Run Friday closeout and next-week preview.",
    ],
    deepGuideTitle: "Manager Portal",
    deepGuideHref: "/managers",
  },
  {
    id: "time",
    label: "Time blindness",
    pageTitle: "Time Blindness: Make Time Visible",
    pageHref: "/library/time-blindness",
    toolTitle: "Time Estimator",
    toolHref: "/tools/time-estimator",
    weeklyPlan: [
      "Estimate and track 2-3 tasks daily.",
      "Apply 30-50% buffer consistently.",
      "Use start and checkpoint alarms.",
      "Review estimate drift on day 7.",
    ],
    deepGuideTitle: "ADHD-Friendly Planner Generator",
    deepGuideHref: "/tools/planner-generator",
  },
  {
    id: "executive",
    label: "Executive dysfunction",
    pageTitle: "Executive Function Explained Simply",
    pageHref: "/library/executive-dysfunction",
    toolTitle: "Task Breaker",
    toolHref: "/tools/task-breaker",
    weeklyPlan: [
      "Create first-action prompts for five tasks.",
      "Use one 10-minute launch daily.",
      "Track starts instead of completions only.",
      "Keep bad-day fallback active.",
    ],
    deepGuideTitle: "Getting started guide",
    deepGuideHref: "/library/getting-started-overwhelmed",
  },
  {
    id: "motivation",
    label: "Motivation + burnout",
    pageTitle: "Motivation and Burnout Cycles",
    pageHref: "/library/motivation-burnout",
    toolTitle: "Dopamine Menu Builder",
    toolHref: "/tools/dopamine-menu",
    weeklyPlan: [
      "Add one recovery block before overdrive starts.",
      "Use reset menu before hard tasks.",
      "Protect sleep anchor nightly.",
      "De-scope one commitment this week.",
    ],
    deepGuideTitle: "Burnout stabilization guide",
    deepGuideHref: "/library/motivation-burnout",
  },
  {
    id: "emotions",
    label: "Emotional regulation",
    pageTitle: "Emotional Regulation for ADHD",
    pageHref: "/library/emotional-regulation",
    toolTitle: "Script Generator",
    toolHref: "/tools/script-generator",
    weeklyPlan: [
      "Practice one pause script each day.",
      "Delay reactive texts by ten minutes.",
      "Use one repair script after conflict.",
      "Track top trigger + response pattern.",
    ],
    deepGuideTitle: "ADHD and relationships guide",
    deepGuideHref: "/library/relationships-and-communication",
  },
  {
    id: "sleep",
    label: "Sleep",
    pageTitle: "ADHD and Sleep",
    pageHref: "/library/sleep-and-adhd",
    toolTitle: "Routine Builder",
    toolHref: "/tools/routine-builder",
    weeklyPlan: [
      "Keep wake time within 30 minutes daily.",
      "Run same wind-down sequence 5 nights.",
      "Track caffeine/screen timing.",
      "Adjust one variable after weekly review.",
    ],
    deepGuideTitle: "Night routine scaffold",
    deepGuideHref: "/templates/night-routine-scaffold.txt",
  },
  {
    id: "relationships",
    label: "Relationships",
    pageTitle: "ADHD and Relationships",
    pageHref: "/library/relationships-and-communication",
    toolTitle: "Script Generator",
    toolHref: "/tools/script-generator",
    weeklyPlan: [
      "Schedule one 20-minute logistics check-in.",
      "Use one shared task board.",
      "Practice one appreciation statement daily.",
      "Repair misses within 24 hours.",
    ],
    deepGuideTitle: "Parents & Partners Portal",
    deepGuideHref: "/parents-partners",
  },
  {
    id: "anxiety",
    label: "Anxiety + ADHD overlap",
    pageTitle: "ADHD and Anxiety Overlap",
    pageHref: "/library/anxiety-overlap",
    toolTitle: "Smart Pomodoro (panic mode)",
    toolHref: "/tools/smart-pomodoro",
    weeklyPlan: [
      "Track symptom and context data daily.",
      "Use one grounding tool each day.",
      "Book/confirm follow-up care.",
      "Prepare concise provider summary.",
    ],
    deepGuideTitle: "Not diagnosed care path",
    deepGuideHref: "/care/not-diagnosed",
  },
  {
    id: "medication",
    label: "Medication questions",
    pageTitle: "Trying Meds: What To Track and Ask",
    pageHref: "/care/trying-meds",
    toolTitle: "Script Generator (medication mode)",
    toolHref: "/tools/script-generator?topic=medication",
    weeklyPlan: [
      "Track dose timing and outcomes daily.",
      "Add appetite/sleep/rebound notes.",
      "Prepare top three prescriber questions.",
      "Review with clinician before any changes.",
    ],
    deepGuideTitle: "Trying Meds care path",
    deepGuideHref: "/care/trying-meds",
  },
  {
    id: "evaluation",
    label: "Getting evaluated / diagnosis process",
    pageTitle: "Diagnosis & Care Navigation",
    pageHref: "/care",
    toolTitle: "Script Generator (evaluation request)",
    toolHref: "/tools/script-generator?topic=evaluation",
    weeklyPlan: [
      "Complete self-history notes.",
      "Gather practical examples from daily life.",
      "Contact one clinic and ask cost/process questions.",
      "Prepare your evaluation appointment script.",
    ],
    deepGuideTitle: "Not diagnosed pathway",
    deepGuideHref: "/care/not-diagnosed",
  },
  {
    id: "supporters",
    label: "Parents/partners support",
    pageTitle: "Parents and Partners Portal",
    pageHref: "/parents-partners",
    toolTitle: "Script Generator",
    toolHref: "/tools/script-generator",
    weeklyPlan: [
      "Choose one shared support system.",
      "Set one weekly logistics check-in.",
      "Use one non-shaming support script.",
      "Review what helped and adjust.",
    ],
    deepGuideTitle: "Relationship check-in template",
    deepGuideHref: "/templates/relationship-weekly-checkin.txt",
  },
];
