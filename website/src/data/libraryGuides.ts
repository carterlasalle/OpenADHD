export interface GuideSection {
  heading: string;
  body: string;
  bullets?: string[];
}

export interface LibraryGuide {
  slug: string;
  title: string;
  tag: string;
  summary: string;
  whoFor: string;
  doFirst: string;
  minimumViable: string[];
  ifYouHaveEnergy: string[];
  crisisMode: string[];
  commonPatterns: string[];
  toolNow: {
    label: string;
    href: string;
  };
  weekPlan: string[];
  sections: GuideSection[];
  printable: string;
}

export const libraryGuides: LibraryGuide[] = [
  {
    slug: "getting-started-overwhelmed",
    title: "Getting Started When You Feel Overwhelmed",
    tag: "Overwhelm",
    summary:
      "Overwhelm is not a character flaw. It is often an executive-load problem plus emotional flooding. This page reduces the load fast.",
    whoFor:
      "People who know what they need to do but cannot get their body and brain to begin.",
    doFirst: "Pick one tiny visible action and set a 10-minute timer.",
    minimumViable: [
      "Name one target zone (desk, sink, backpack, inbox).",
      "Do only trash + obvious items for 10 minutes.",
      "Stop when timer ends, even if unfinished.",
    ],
    ifYouHaveEnergy: [
      "Run Task Breaker on your highest-impact avoided task.",
      "Schedule two rescue blocks this week.",
      "Send one accountability message to someone safe.",
    ],
    crisisMode: [
      "Drink water and stand up.",
      "Do one box-breath cycle (4-4-4-4).",
      "Choose the next action that takes under 2 minutes.",
    ],
    commonPatterns: [
      "Task feels vague, so the brain cannot launch.",
      "Fear of doing it wrong creates freeze.",
      "Too many open loops create paralysis.",
    ],
    toolNow: {
      label: "Open Bad Day Mode",
      href: "/tools/bad-day-mode",
    },
    weekPlan: [
      "Mon: 10-minute reset + one micro-step.",
      "Tue: Task Breaker for one avoided task.",
      "Wed: Body doubling 20 minutes.",
      "Thu: Repeat smallest action only.",
      "Fri: Review wins and pick 2 keepers.",
    ],
    sections: [
      {
        heading: "Why overwhelm feels physical",
        body:
          "ADHD overload can feel like your body refuses to move. That is often a regulation signal, not laziness. Start with a body reset first, then task steps.",
      },
      {
        heading: "Use a starter script",
        body: "Say this out loud: I am not finishing this. I am only starting for 10 minutes.",
      },
      {
        heading: "Make progress visible",
        body:
          "Write done actions where you can see them. Visible wins reduce shame and increase follow-through.",
      },
    ],
    printable: "/templates/overwhelm-reset-checklist.txt",
  },
  {
    slug: "executive-function-explained",
    title: "Executive Function, Explained Simply",
    tag: "ADHD 101",
    summary:
      "Executive function is your brain’s self-management system: planning, switching, sequencing, and follow-through.",
    whoFor: "Anyone new to ADHD or supporting someone with ADHD.",
    doFirst: "Identify which executive function breaks down most for you this week.",
    minimumViable: [
      "Pick one friction point (starting, planning, switching).",
      "Use one external support (timer, checklist, body double).",
      "Repeat the same support for three days.",
    ],
    ifYouHaveEnergy: [
      "Map your day into launch, sustain, transition, shutdown.",
      "Design one support per phase.",
      "Track which support works best.",
    ],
    crisisMode: [
      "Use a one-step command: open document, title task, save.",
      "Remove one sensory distraction.",
      "Ask for accountability help.",
    ],
    commonPatterns: [
      "Knowing what to do but failing to launch.",
      "Hyperfocus on low-priority tasks.",
      "Time-estimation mismatch.",
    ],
    toolNow: {
      label: "Run Time Estimator",
      href: "/tools/time-estimator",
    },
    weekPlan: [
      "Mon: track one stuck point.",
      "Tue: externalize steps with Task Breaker.",
      "Wed: add transition alarms.",
      "Thu: use body doubling session.",
      "Fri: keep top two supports.",
    ],
    sections: [
      {
        heading: "Working memory limits",
        body:
          "Your brain can drop tasks between intention and action. External systems are treatment-level support, not a crutch.",
      },
      {
        heading: "Inhibition and impulses",
        body:
          "Impulse control difficulty can affect spending, phone use, and interruptions. Friction tools help by slowing the decision loop.",
      },
      {
        heading: "Task switching",
        body:
          "Switching costs are high in ADHD. Use transition buffers and clear stop cues to avoid losing momentum.",
      },
    ],
    printable: "/templates/executive-function-map.txt",
  },
  {
    slug: "executive-dysfunction",
    title: "Executive Dysfunction: What To Do When You Can’t Start",
    tag: "Core Skill",
    summary:
      "Executive dysfunction often shows up as freeze, delay loops, and shame spirals. This guide turns abstract tasks into launchable actions.",
    whoFor: "People who repeatedly avoid important tasks despite strong intent.",
    doFirst: "Turn your task into a verb + object + time: open planner for 6 minutes.",
    minimumViable: [
      "Write the first ugly step.",
      "Start with a 6-minute timer.",
      "Stop and log the next step.",
    ],
    ifYouHaveEnergy: [
      "Chunk project into 8 micro-steps.",
      "Assign each step an energy level.",
      "Preload materials tonight for tomorrow.",
    ],
    crisisMode: [
      "Use this script: one file, one step, one timer.",
      "Open body doubling room.",
      "Send one help request.",
    ],
    commonPatterns: [
      "Perfectionism before action.",
      "Decision fatigue from unclear priorities.",
      "Emotional avoidance disguised as planning.",
    ],
    toolNow: {
      label: "Open Task Breaker",
      href: "/tools/task-breaker",
    },
    weekPlan: [
      "Create two daily launch windows.",
      "Use minimum viable step in each window.",
      "Reward effort, not completion only.",
      "Review launches on Friday.",
    ],
    sections: [
      {
        heading: "Name the friction type",
        body:
          "Is it clarity, energy, fear, or context? Different friction types need different interventions.",
      },
      {
        heading: "Shrink the target",
        body:
          "If the step feels heavy, it is still too large. Keep shrinking until resistance drops.",
      },
      {
        heading: "Protect the start",
        body:
          "First 3 minutes decide momentum. Remove phone, close tabs, and use one visible checklist.",
      },
    ],
    printable: "/templates/task-breaker-sheet.txt",
  },
  {
    slug: "time-blindness",
    title: "Time Blindness and Late Loops",
    tag: "Time",
    summary:
      "Time blindness is difficulty sensing passage of time and future load. Planning buffers and visible cues reduce misses.",
    whoFor: "Anyone chronically late, underestimating tasks, or missing transitions.",
    doFirst: "Estimate your next task, then add a default ADHD buffer.",
    minimumViable: [
      "Set two alarms for transitions (10m and 3m).",
      "Add 35% buffer to every estimate.",
      "Use visible countdown timer.",
    ],
    ifYouHaveEnergy: [
      "Track estimate vs actual for one week.",
      "Identify your most inaccurate task types.",
      "Build personal buffer presets.",
    ],
    crisisMode: [
      "Stop adding tasks.",
      "Send a delay text now.",
      "Select only one must-do before leaving.",
    ],
    commonPatterns: [
      "Planning optimistic best-case durations.",
      "No transition buffer.",
      "Last-minute stack of tasks before departure.",
    ],
    toolNow: {
      label: "Use Time Estimator",
      href: "/tools/time-estimator",
    },
    weekPlan: [
      "Log 3 daily estimates.",
      "Use default buffer and compare.",
      "Create a leaving-house checklist.",
      "Review calibration at week end.",
    ],
    sections: [
      {
        heading: "Why clocks are not enough",
        body:
          "You may see the clock but still fail to map remaining time to action steps. Convert time into concrete checkpoints.",
      },
      {
        heading: "Transition costs",
        body:
          "Switching contexts consumes more time than expected. Plan explicit shutdown and startup tasks.",
      },
      {
        heading: "Delay communication",
        body:
          "A quick delay message protects trust better than silence.",
      },
    ],
    printable: "/templates/time-buffer-sheet.txt",
  },
  {
    slug: "motivation-and-burnout",
    title: "Motivation + Burnout in ADHD",
    tag: "Energy",
    summary:
      "Motivation in ADHD is often interest-based and context-sensitive. Burnout happens when demand stays high and regulation supports stay low.",
    whoFor: "People cycling between intense output and shutdown.",
    doFirst: "Choose one minimum viable routine for today.",
    minimumViable: [
      "Select one non-negotiable task only.",
      "Use 10/3 cycle for 2 rounds.",
      "Schedule one reset activity.",
    ],
    ifYouHaveEnergy: [
      "Create your dopamine menu.",
      "Set weekly recovery blocks before commitments.",
      "Audit obligations and cut one low-value task.",
    ],
    crisisMode: [
      "Hydrate + food + 5-minute movement.",
      "Cancel one optional commitment.",
      "Run bad day plan and stop at one win.",
    ],
    commonPatterns: [
      "All-or-nothing effort patterns.",
      "Overcommitting during high energy.",
      "Shame-driven pushing after missed deadlines.",
    ],
    toolNow: {
      label: "Build Dopamine Menu",
      href: "/tools/dopamine-menu",
    },
    weekPlan: [
      "Set energy baseline each morning.",
      "Choose routine tier (minimum/normal/best).",
      "Use one reset before every deep work block.",
      "Review drainers vs restorers.",
    ],
    sections: [
      {
        heading: "Interest-based nervous system",
        body:
          "ADHD brains engage strongly with novelty, urgency, challenge, and personal meaning. Use this intentionally.",
      },
      {
        heading: "Burnout warning signs",
        body:
          "Sleep drift, irritability, avoidance, and emotional volatility often show up before collapse.",
      },
      {
        heading: "Recovery is a skill",
        body:
          "Planned recovery is part of productivity. Without it, consistency fails.",
      },
    ],
    printable: "/templates/dopamine-menu-template.txt",
  },
  {
    slug: "emotional-regulation",
    title: "Emotional Regulation and Rejection Sensitivity",
    tag: "Emotions",
    summary:
      "Emotional intensity can spike quickly in ADHD. Regulation tools work best when pre-planned and rehearsed.",
    whoFor: "People dealing with rapid emotional swings, shutdowns, or conflict recovery challenges.",
    doFirst: "Use one 90-second downshift practice before replying.",
    minimumViable: [
      "Pause before sending high-stress messages.",
      "Use one repair script after conflict.",
      "Name the emotion and body signal.",
    ],
    ifYouHaveEnergy: [
      "Create a trigger-response map.",
      "Practice assertive boundary script.",
      "Schedule a weekly relationship check-in.",
    ],
    crisisMode: [
      "Leave the input stream (notifications/chat).",
      "Ground with breath + cold water + movement.",
      "Use short script: I need 20 minutes to regulate.",
    ],
    commonPatterns: [
      "Fast emotional escalation.",
      "RSD after feedback.",
      "Post-conflict shame and withdrawal.",
    ],
    toolNow: {
      label: "Generate Communication Script",
      href: "/tools/script-generator",
    },
    weekPlan: [
      "Practice 2 regulation drills daily.",
      "Use a pause script once.",
      "Log trigger and repair outcome.",
      "Repeat what reduced intensity.",
    ],
    sections: [
      {
        heading: "State before strategy",
        body:
          "When your nervous system is flooded, logic tools fail. Regulate state first.",
      },
      {
        heading: "Repair beats perfection",
        body:
          "Missing and repairing is healthier than forcing perfect communication.",
      },
      {
        heading: "Script your hard moments",
        body:
          "Pre-written scripts reduce cognitive load during emotionally hot moments.",
      },
    ],
    printable: "/templates/emotional-reset-card.txt",
  },
  {
    slug: "sleep-and-adhd",
    title: "ADHD and Sleep",
    tag: "Sleep",
    summary:
      "ADHD sleep challenges often involve delayed wind-down, late-night hyperfocus, and irregular wake times.",
    whoFor: "People stuck in late-night cycles or morning crash patterns.",
    doFirst: "Create a bad-day nighttime routine with only three steps.",
    minimumViable: [
      "Choose one consistent wake window.",
      "Set a wind-down alarm.",
      "Prepare tomorrow in 5 minutes.",
    ],
    ifYouHaveEnergy: [
      "Create three routine tiers.",
      "Reduce late-night stimulation sources.",
      "Track sleep + next-day focus.",
    ],
    crisisMode: [
      "Stop striving for perfect sleep tonight.",
      "Do low-light calm activity for 20 minutes.",
      "Reset tomorrow morning with daylight exposure.",
    ],
    commonPatterns: [
      "Nighttime revenge productivity.",
      "Hyperfocus past bedtime.",
      "Inconsistent morning anchors.",
    ],
    toolNow: {
      label: "Build Routine",
      href: "/tools/routine-builder",
    },
    weekPlan: [
      "Set wake time anchor.",
      "Run night routine tier nightly.",
      "Track sleep with short notes.",
      "Adjust one friction point.",
    ],
    sections: [
      {
        heading: "Why routines fail",
        body:
          "Single-version routines collapse under low-energy days. Tiered routines keep consistency.",
      },
      {
        heading: "Body clock support",
        body:
          "Morning light and movement help stabilize circadian rhythm and improve sleep onset the next night.",
      },
      {
        heading: "Compassionate reset",
        body:
          "One bad night does not require a full life overhaul. Resume anchors quickly.",
      },
    ],
    printable: "/templates/sleep-ramp-down-sheet.txt",
  },
  {
    slug: "relationships-and-adhd",
    title: "ADHD and Relationships",
    tag: "Relationships",
    summary:
      "Many conflicts are not about care; they are about system mismatch, missed expectations, and communication overload.",
    whoFor: "Partners, friends, and families navigating repeated misunderstandings.",
    doFirst: "Use one sentence that separates intent from impact.",
    minimumViable: [
      "Name one recurring friction point.",
      "Set one shared reminder system.",
      "Use repair script after a miss.",
    ],
    ifYouHaveEnergy: [
      "Create weekly logistics check-in.",
      "Divide responsibilities by energy type.",
      "Write support agreements in plain language.",
    ],
    crisisMode: [
      "Pause argument and schedule repair time.",
      "Use short ownership statement.",
      "Return with one concrete next step.",
    ],
    commonPatterns: [
      "Forgotten tasks interpreted as lack of care.",
      "Escalation during stress transitions.",
      "Uneven mental load.",
    ],
    toolNow: {
      label: "Open Script Generator",
      href: "/tools/script-generator",
    },
    weekPlan: [
      "One weekly 20-minute check-in.",
      "One logistics system shared visibly.",
      "Use repair + appreciation in same conversation.",
      "Review what reduced conflict.",
    ],
    sections: [
      {
        heading: "Intent vs impact",
        body:
          "You can care deeply and still miss execution. Repair requires both accountability and system redesign.",
      },
      {
        heading: "Reduce hidden labor",
        body:
          "Externalize tasks to shared lists to reduce invisible cognitive burden on either partner.",
      },
      {
        heading: "Script hard conversations",
        body:
          "Prepared language keeps discussions from becoming blame loops.",
      },
    ],
    printable: "/templates/relationship-checkin-sheet.txt",
  },
  {
    slug: "anxiety-overlap",
    title: "ADHD + Anxiety Overlap",
    tag: "Overlap",
    summary:
      "ADHD and anxiety frequently overlap and amplify each other. Clarity tools reduce looped worry and missed action.",
    whoFor: "People stuck in overthinking, urgency loops, or task-avoidance with fear.",
    doFirst: "Use a 2-column list: threat story vs next verifiable action.",
    minimumViable: [
      "Set planning limit timer (12 min).",
      "Choose one reality-based next step.",
      "Use body regulation before task launch.",
    ],
    ifYouHaveEnergy: [
      "Track trigger -> thought -> action outcome.",
      "Build pre-task grounding ritual.",
      "Rehearse one uncertainty tolerance phrase.",
    ],
    crisisMode: [
      "Step away from doom-scrolling.",
      "Use cold water + paced breathing.",
      "Text a support person with one request.",
    ],
    commonPatterns: [
      "Planning becomes avoidance.",
      "Urgency without prioritization.",
      "Catastrophic thinking before tasks.",
    ],
    toolNow: {
      label: "Use Bad Day Mode",
      href: "/tools/bad-day-mode",
    },
    weekPlan: [
      "Daily two-column thought check.",
      "One grounding drill before work blocks.",
      "One exposure to avoided admin task.",
      "Friday review: evidence over fear.",
    ],
    sections: [
      {
        heading: "Differentiate anxiety from avoidance",
        body:
          "Anxiety says danger; ADHD says too much friction. Use tools for both state and structure.",
      },
      {
        heading: "Contain planning loops",
        body:
          "Planning has to end with action. Use a timer and ship one step before refining.",
      },
      {
        heading: "Protect trust in self",
        body:
          "Every tiny follow-through is evidence that your system can work.",
      },
    ],
    printable: "/templates/anxiety-adhd-overlap-sheet.txt",
  },
  {
    slug: "school-and-studying",
    title: "School and Studying with ADHD",
    tag: "School",
    summary:
      "A study system that survives low-energy days uses short cycles, external accountability, and accommodation support.",
    whoFor: "Middle school, high school, and college students.",
    doFirst: "Plan one 25-minute focused session today.",
    minimumViable: [
      "Use 10/3 or 25/5 cycle.",
      "Pick one class and one concrete output.",
      "Send one help message early.",
    ],
    ifYouHaveEnergy: [
      "Set weekly class dashboard.",
      "Use spaced recall schedule.",
      "Draft accommodation request language.",
    ],
    crisisMode: [
      "Open falling-behind recovery plan.",
      "Prioritize by grade weight + deadline.",
      "Communicate with professor today.",
    ],
    commonPatterns: [
      "Studying starts too late due to overwhelm.",
      "Reading without recall leads to false confidence.",
      "Missing one class cascades into shutdown.",
    ],
    toolNow: {
      label: "Open Study Sprint",
      href: "/tools/study-sprint",
    },
    weekPlan: [
      "Map deadlines.",
      "Assign sprint blocks.",
      "One office-hours or support touchpoint.",
      "Friday catch-up sprint.",
    ],
    sections: [
      {
        heading: "Design for reality",
        body:
          "Do not build a perfect schedule you cannot repeat. Build short repeatable blocks.",
      },
      {
        heading: "Accommodations are access",
        body:
          "Support plans are not shortcuts; they level access.",
      },
      {
        heading: "Recover quickly",
        body:
          "Missed days happen. Fast recovery matters more than perfect streaks.",
      },
    ],
    printable: "/templates/study-sprint-tracker.txt",
  },
  {
    slug: "work-and-productivity",
    title: "Work and Productivity with ADHD",
    tag: "Work",
    summary:
      "Reliable output comes from clear priorities, buffer-aware planning, communication scripts, and environment design.",
    whoFor: "Professionals balancing deadlines, meetings, and deep work.",
    doFirst: "Set today’s top 3 outcomes before opening messages.",
    minimumViable: [
      "Top 3 outcomes.",
      "One protected deep-work block.",
      "One progress update message.",
    ],
    ifYouHaveEnergy: [
      "Weekly planning with buffers.",
      "Calendar batching by task type.",
      "Create interruption protocol.",
    ],
    crisisMode: [
      "Sort tasks: due today / delegated / delayed.",
      "Send scope-reset message early.",
      "Finish one critical deliverable first.",
    ],
    commonPatterns: [
      "Reactive inbox-first workflow.",
      "Underestimated duration and hidden transitions.",
      "Overpromising in high-energy windows.",
    ],
    toolNow: {
      label: "Open Planner Generator",
      href: "/tools/planner-generator",
    },
    weekPlan: [
      "Plan week with default buffers.",
      "Set two no-meeting deep-work windows.",
      "Run one body-double session.",
      "Friday review and carry-forward list.",
    ],
    sections: [
      {
        heading: "Manage commitments explicitly",
        body:
          "Clarity beats intensity. Write scope, owner, and due-date assumptions in every project.",
      },
      {
        heading: "Use communication as regulation",
        body:
          "Early updates reduce pressure and prevent deadline surprises.",
      },
      {
        heading: "Protect transitions",
        body:
          "Task-switching tax is real. Plan reset steps between meetings and focused work.",
      },
    ],
    printable: "/templates/work-week-planner.txt",
  },
  {
    slug: "build-a-simple-routine",
    title: "Build a Simple Routine That Survives Bad Days",
    tag: "Routine",
    summary:
      "Rigid routines break. Tiered routines (minimum, normal, stretch) stay usable across variable energy states.",
    whoFor: "People who start routines repeatedly and lose them after stressful days.",
    doFirst: "Define your minimum viable routine with 3 steps.",
    minimumViable: [
      "Choose 3 anchor tasks.",
      "Attach each to an existing cue.",
      "Track completion with one visible checklist.",
    ],
    ifYouHaveEnergy: [
      "Add normal and stretch tiers.",
      "Pre-stage supplies.",
      "Set automatic reminders.",
    ],
    crisisMode: [
      "Use minimum tier only.",
      "Skip optimization.",
      "Protect sleep and meds first.",
    ],
    commonPatterns: [
      "All-or-nothing routine design.",
      "No fallback version.",
      "Too many simultaneous behavior changes.",
    ],
    toolNow: {
      label: "Use Routine Builder",
      href: "/tools/routine-builder",
    },
    weekPlan: [
      "Day 1: define minimum tier.",
      "Day 2: add normal tier.",
      "Day 3: add bad-day tier.",
      "Day 4-7: test and remove friction.",
    ],
    sections: [
      {
        heading: "Anchors before habits",
        body:
          "Tie routines to existing events (wake, first meal, after shower) instead of clock-only triggers.",
      },
      {
        heading: "Reduce steps",
        body:
          "A routine that feels too easy is usually right. Sustainable beats impressive.",
      },
      {
        heading: "Use environmental cues",
        body:
          "Visible setup removes memory load and increases completion.",
      },
    ],
    printable: "/templates/routine-scaffold.txt",
  },
];

export const quickTools = [
  {
    title: "I can’t start scripts",
    description: "Plain-language launch scripts for freeze moments.",
    href: "/tools/task-breaker",
  },
  {
    title: "10-minute reset routines",
    description: "Short reset loops for overwhelm and clutter spikes.",
    href: "/tools/bad-day-mode",
  },
  {
    title: "Quick prioritization template",
    description: "Sort must-do, should-do, and defer fast.",
    href: "/tools/planner-generator",
  },
  {
    title: "Panic-proof checklist",
    description: "When deadlines explode, run this rescue flow.",
    href: "/library/getting-started-overwhelmed",
  },
];

export const skillKits = [
  {
    title: "Get on top of deadlines",
    duration: "7 days",
    focus: "Estimate better, buffer realistically, communicate early.",
    href: "/library/work-productivity-system",
  },
  {
    title: "Stop losing everything",
    duration: "10 days",
    focus: "Zones, checklists, and leaving-house systems.",
    href: "/library/time-blindness",
  },
  {
    title: "Build a simple routine",
    duration: "7 days",
    focus: "Minimum, normal, bad-day routine tiers.",
    href: "/library/executive-dysfunction",
  },
  {
    title: "Study system that doesn’t collapse",
    duration: "14 days",
    focus: "Sprint cycles, accommodations, and recovery weeks.",
    href: "/library/school-study-system",
  },
];

export const printableTemplates = [
  { name: "Weekly Planner (ADHD)", href: "/templates/weekly-planner-adhd.txt" },
  { name: "2-Column Task System", href: "/templates/2-column-task-system-sheet.txt" },
  { name: "Dopamine Menu", href: "/templates/dopamine-menu-template.txt" },
  { name: "Habit Scaffold Sheet", href: "/templates/habit-scaffold-sheet.txt" },
  { name: "Study Sprint Tracker", href: "/templates/study-sprint-tracker.txt" },
  { name: "Leaving the House Checklist", href: "/templates/leaving-house-checklist.txt" },
  { name: "Medication + Symptom Tracker", href: "/templates/medication-log-symptom-tracker.txt" },
];

export const deepGuideOrder = libraryGuides.map((guide) => guide.slug);
