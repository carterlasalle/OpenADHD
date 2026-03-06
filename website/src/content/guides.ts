export interface GuideTool {
  label: string;
  href: string;
}

export interface Guide {
  slug: string;
  title: string;
  moment: string;
  summary: string;
  whoFor: string;
  firstStep: string;
  tldr: string[];
  minimumViable: string[];
  ifYouHaveEnergy: string[];
  crisisMode: string[];
  weeklyPlan: string[];
  deeperReading: string[];
  relatedTools: GuideTool[];
  printableTemplate: {
    label: string;
    href: string;
  };
}

export const fiveMinuteTools = [
  {
    painPoint: "I cannot start",
    title: "Starter Script + 10-Minute Launch",
    action: "Run Task Breaker and execute only Step 1 for ten minutes.",
    href: "/tools/task-breaker",
  },
  {
    painPoint: "I am panicking",
    title: "Panic-Proof Reset",
    action: "Do triage in three lanes: urgent, waiting, not-today.",
    href: "/templates/panic-proof-reset-checklist.txt",
  },
  {
    painPoint: "I keep underestimating time",
    title: "ADHD Time Buffer",
    action: "Estimate once, then apply complexity + interruption buffer.",
    href: "/tools/time-estimator",
  },
  {
    painPoint: "My focus crashed",
    title: "Dopamine Reset Menu",
    action: "Pick a 2-5 minute reset from movement, novelty, social, or sensory.",
    href: "/tools/dopamine-menu",
  },
];

export const skillKits = [
  {
    slug: "deadline-kit",
    title: "Get On Top of Deadlines",
    duration: "7-10 days",
    outcome: "Stop deadline surprises and reduce panic-driven work.",
    milestones: [
      "Collect all due dates in one source of truth.",
      "Generate buffered weekly plan from real effort estimates.",
      "Schedule one weekly recovery + catch-up block.",
      "Create escalation script before deadlines become emergencies.",
    ],
    href: "/library/work-productivity-system",
  },
  {
    slug: "stop-losing-kit",
    title: "Stop Losing Everything",
    duration: "7 days",
    outcome: "Build location memory through environment design, not willpower.",
    milestones: [
      "Create one launchpad by your exit.",
      "Add leaving-house checklist at eye level.",
      "Assign fixed homes for top ten frequently lost items.",
      "Run weekly misc-basket reset for drift control.",
    ],
    href: "/library/time-blindness",
  },
  {
    slug: "routine-kit",
    title: "Build a Simple Routine",
    duration: "10-14 days",
    outcome: "Create routines that survive low-energy days.",
    milestones: [
      "Define minimum, normal, and bad-day routine tiers.",
      "Anchor routine to an existing cue.",
      "Use one printed checklist to reduce decision load.",
      "Review weekly and remove steps that keep breaking.",
    ],
    href: "/library/executive-dysfunction",
  },
  {
    slug: "study-system-kit",
    title: "Study System That Does Not Collapse",
    duration: "14 days",
    outcome: "Stabilize school execution and recover faster when behind.",
    milestones: [
      "Map all class deliverables by risk.",
      "Run sprint-based study blocks four times per week.",
      "Send one support message before missing a major due date.",
      "Use class-type-specific study plan from School Support Generator.",
    ],
    href: "/library/school-study-system",
  },
];

export const templateDownloads = [
  {
    title: "Weekly Planner (ADHD Version)",
    description: "Buffer-aware weekly planning with transitions and recovery blocks.",
    href: "/templates/weekly-planner-adhd.txt",
  },
  {
    title: "2-Column Task System",
    description: "Now vs Not-Now split to reduce planning paralysis.",
    href: "/templates/2-column-task-system-sheet.txt",
  },
  {
    title: "Dopamine Menu Template",
    description: "Customizable reset menu for low-focus moments.",
    href: "/templates/dopamine-menu-template.txt",
  },
  {
    title: "Habit Scaffold Sheet",
    description: "Anchor-cue based routine builder with fallback tiers.",
    href: "/templates/habit-scaffold-sheet.txt",
  },
  {
    title: "Study Sprint Tracker",
    description: "Track focus cycles, wins, and recovery blocks.",
    href: "/templates/study-sprint-tracker.txt",
  },
  {
    title: "Leaving the House Checklist",
    description: "Reduce late exits and forgotten essentials.",
    href: "/templates/leaving-house-checklist.txt",
  },
  {
    title: "Medication + Symptom Tracker",
    description: "Bring clearer data into prescriber appointments.",
    href: "/templates/medication-log-symptom-tracker.txt",
  },
];

export const mediaAlternatives = [
  {
    title: "How to ADHD (video library)",
    format: "Video",
    description: "Short, practical ADHD explainers with high accessibility.",
    href: "https://www.youtube.com/@HowtoADHD",
  },
  {
    title: "Hacking Your ADHD",
    format: "Audio",
    description: "Actionable podcast episodes for everyday systems.",
    href: "https://www.hackingyouradhd.com/podcast",
  },
  {
    title: "ADHD Essentials",
    format: "Audio",
    description: "Coaching-style episodes with practical implementation tips.",
    href: "https://www.adhdessentials.com/podcast",
  },
  {
    title: "OpenADHD printable guides",
    format: "Printable",
    description: "Long-form offline-friendly guides for overwhelmed days.",
    href: "/about/contribute#downloads",
  },
];

export const guides: Guide[] = [
  {
    slug: "getting-started",
    title: "Getting Started When You Feel Overwhelmed",
    moment: "You are frozen and cannot pick where to begin.",
    summary:
      "A stabilizing guide for the first 24 hours when your brain is noisy and every task feels equally urgent.",
    whoFor: "Anyone in startup paralysis, doom-scroll loops, or panic planning.",
    firstStep: "Write one survival outcome for today: meds, food, one urgent message, or one due task.",
    tldr: [
      "Pick one lane, not ten.",
      "Reduce visible tasks to three lines max.",
      "Run one 10-minute start sprint before planning more.",
      "Use body doubling early if stalling repeats.",
    ],
    minimumViable: [
      "Water + food + medication check.",
      "One urgent communication sent.",
      "One 10-minute task launch.",
    ],
    ifYouHaveEnergy: [
      "Prepare tomorrow's first task materials tonight.",
      "Draft two reusable start scripts.",
      "Add a 5-minute shutdown routine.",
    ],
    crisisMode: [
      "Switch to safety and urgent-only tasks.",
      "Ask for one immediate body-double block.",
      "If personal safety is at risk, call or text 988 in the U.S.",
    ],
    weeklyPlan: [
      "Day 1: Run two 10-minute restart blocks.",
      "Day 2: Use 3-line task board (must, maybe, not today).",
      "Day 3: Add one accountability check-in.",
      "Day 4: Schedule one admin catch-up block.",
      "Day 5: Repeat without redesigning the system.",
      "Day 6: Remove one repeated friction point.",
      "Day 7: Plan next week using buffered estimates.",
    ],
    deeperReading: ["CDC ADHD overview", "CHADD adult ADHD resources"],
    relatedTools: [
      { label: "Task Breaker", href: "/tools/task-breaker" },
      { label: "Smart Pomodoro", href: "/tools/smart-pomodoro" },
    ],
    printableTemplate: {
      label: "Panic-Proof Reset Checklist",
      href: "/templates/panic-proof-reset-checklist.txt",
    },
  },
  {
    slug: "study-systems",
    title: "Study System That Does Not Collapse",
    moment: "You can learn the material but execution falls apart.",
    summary:
      "Build a sprint-based academic system with proactive support scripts and catch-up buffers.",
    whoFor: "Middle school, high school, and college students managing uneven follow-through.",
    firstStep: "List every due date in one place before opening new study tabs.",
    tldr: [
      "Use focus sprints + explicit review blocks.",
      "Track assignments by risk and deadline, not by memory.",
      "Reach out before missing major due dates.",
      "Protect one weekly catch-up block.",
    ],
    minimumViable: [
      "One study sprint daily on highest-risk class.",
      "Nightly due-date check for tomorrow.",
      "One support message when slipping.",
    ],
    ifYouHaveEnergy: [
      "Build class-type templates (reading vs problem-solving).",
      "Add spaced-recall schedule for exam weeks.",
      "Use professor communication scripts in advance.",
    ],
    crisisMode: [
      "Triage only graded high-impact tasks.",
      "Send concise extension/support request now.",
      "Run panic cycles (15 work / 5 reset).",
    ],
    weeklyPlan: [
      "Map assignment and exam timeline with two-day buffers.",
      "Run four study sprints this week.",
      "Attend one office hour or ask one class question.",
      "Use one body-doubling session.",
      "Friday: 15-minute backlog cleanup.",
      "Weekend: pre-stage Monday's first task.",
      "Sunday: regenerate next week's sprint plan.",
    ],
    deeperReading: ["ADDA student resources", "U.S. disability support guidance"],
    relatedTools: [
      { label: "School Support Generator", href: "/tools/school-support" },
      { label: "Study Sprint", href: "/tools/study-sprint" },
      { label: "Planner Generator", href: "/tools/planner-generator" },
    ],
    printableTemplate: {
      label: "Study Sprint Tracker",
      href: "/templates/study-sprint-tracker.txt",
    },
  },
  {
    slug: "work-productivity",
    title: "Work and Productivity Without Constant Firefighting",
    moment: "You are always busy but still behind.",
    summary:
      "A work operating system for communication load, deep-work protection, and realistic delivery.",
    whoFor: "Adults balancing async communication, meetings, and execution pressure.",
    firstStep: "Set one 10-minute planning anchor at start or end of day.",
    tldr: [
      "Separate deep work, admin, and communication modes.",
      "Use written priorities after meetings.",
      "Build deadline buffers by default.",
      "Escalate risk early with short updates.",
    ],
    minimumViable: [
      "One meaningful shipped outcome per day.",
      "One proactive status update.",
      "One shutdown checklist before sign-off.",
    ],
    ifYouHaveEnergy: [
      "Create recurring template for manager updates.",
      "Automate reminders for repeated tasks.",
      "Define a no-meeting deep-work block.",
    ],
    crisisMode: [
      "Freeze noncritical tasks for 24 hours.",
      "Send options-based risk update.",
      "Use panic mode only for top-impact deadline.",
    ],
    weeklyPlan: [
      "Monday: pick three weekly outcomes.",
      "Tue-Thu: protect one deep-work block daily.",
      "Friday: close loops and prep next week.",
      "Review one process bottleneck and fix it.",
      "Pre-write Monday kickoff message.",
      "Track estimate drift for two recurring tasks.",
      "Update accommodations/support requests if needed.",
    ],
    deeperReading: ["Job Accommodation Network ADHD page", "EEOC accommodations guidance"],
    relatedTools: [
      { label: "Time Estimator", href: "/tools/time-estimator" },
      { label: "Script Generator", href: "/tools/script-generator" },
    ],
    printableTemplate: {
      label: "2-Column Task System",
      href: "/templates/2-column-task-system-sheet.txt",
    },
  },
  {
    slug: "time-blindness",
    title: "Time Blindness: Make Time Visible",
    moment: "You are frequently late or surprised by how long tasks take.",
    summary: "Externalize time with buffer math, visual cues, and transition planning.",
    whoFor: "People who underestimate duration and lose hours in context switches.",
    firstStep: "Log actual time for three routine tasks today.",
    tldr: [
      "Estimate first, then add ADHD buffer.",
      "Plan setup and transition, not just task core.",
      "Use visual timer + checkpoint alarm.",
      "Calibrate weekly with actuals.",
    ],
    minimumViable: [
      "One visual timer per focus block.",
      "Two alarms for critical commitments.",
      "Fifteen-minute departure buffer.",
    ],
    ifYouHaveEnergy: [
      "Build personal time database by task type.",
      "Auto-template common blocks in calendar.",
      "Weekly review of estimate vs actual.",
    ],
    crisisMode: [
      "Use two-hour triage window only.",
      "Send delay notice immediately.",
      "Drop low-impact tasks.",
    ],
    weeklyPlan: [
      "Log 2-3 estimates daily.",
      "Add start/checkpoint alarms to key tasks.",
      "Track transition delays explicitly.",
      "Adjust default buffer on Friday review.",
      "Test one visual timer method.",
      "Use planner generator for next week.",
      "Archive lessons learned.",
    ],
    deeperReading: ["CHADD time management resources", "NIMH ADHD overview"],
    relatedTools: [
      { label: "Time Estimator", href: "/tools/time-estimator" },
      { label: "Planner Generator", href: "/tools/planner-generator" },
    ],
    printableTemplate: {
      label: "Weekly Planner (ADHD)",
      href: "/templates/weekly-planner-adhd.txt",
    },
  },
  {
    slug: "executive-dysfunction",
    title: "Executive Dysfunction in Plain Language",
    moment: "You know what to do but cannot reliably initiate or sequence tasks.",
    summary: "Reduce startup friction with micro-steps, cue-based routines, and external structure.",
    whoFor: "People with repeated task initiation and follow-through breakdowns.",
    firstStep: "Rewrite your next task as one physical verb + object.",
    tldr: [
      "This is a regulation problem, not a character flaw.",
      "Micro-steps beat motivation spikes.",
      "External structure reduces executive load.",
      "Track starts, not only completions.",
    ],
    minimumViable: [
      "One first-action prompt per day.",
      "One 10-minute start sprint.",
      "One visible checklist near workspace.",
    ],
    ifYouHaveEnergy: [
      "Design cue-based start rituals.",
      "Use Kanban with max three active tasks.",
      "Pre-stage materials nightly.",
    ],
    crisisMode: [
      "Binary checklist only: done / not done.",
      "Request body-doubling support immediately.",
      "Ignore optimization for 24 hours.",
    ],
    weeklyPlan: [
      "Create first-action prompts for five recurring tasks.",
      "Run one accountability session.",
      "Measure starts completed per day.",
      "Identify one recurring bottleneck and remove one step.",
      "Practice bad-day fallback routine twice.",
      "Review end-of-day wins log.",
      "Plan next week's micro-step templates.",
    ],
    deeperReading: ["Russell Barkley fact sheets", "ADDitude executive function primer"],
    relatedTools: [
      { label: "Task Breaker", href: "/tools/task-breaker" },
      { label: "Routine Builder", href: "/tools/routine-builder" },
    ],
    printableTemplate: {
      label: "Habit Scaffold Sheet",
      href: "/templates/habit-scaffold-sheet.txt",
    },
  },
  {
    slug: "motivation-burnout",
    title: "Motivation and Burnout Cycles",
    moment: "You alternate between overdrive and shutdown.",
    summary: "Recover consistency by pacing workload and adding intentional recovery structure.",
    whoFor: "Anyone stuck in boom-bust productivity loops.",
    firstStep: "De-scope one nonessential commitment this week.",
    tldr: [
      "Urgency is not a sustainable productivity system.",
      "Recovery blocks are strategic, not lazy.",
      "Under-commit to finish consistently.",
      "Use reset rituals before forcing harder.",
    ],
    minimumViable: [
      "Protect sleep window.",
      "One priority task/day.",
      "One reset activity before deep work.",
    ],
    ifYouHaveEnergy: [
      "Map top three overload triggers.",
      "Automate low-value decisions.",
      "Build bad-day kit card.",
    ],
    crisisMode: [
      "Reduce all noncritical tasks for 24 hours.",
      "Notify support person and ask for practical help.",
      "Use crisis resources if safety declines.",
    ],
    weeklyPlan: [
      "Schedule recovery blocks before workload fills calendar.",
      "Use dopamine menu before difficult starts.",
      "Track energy pattern by time of day.",
      "Avoid adding new commitments mid-week.",
      "Run one admin cleanup sprint.",
      "Close week with reflection and de-scope.",
      "Set next week baseline to minimum sustainable plan.",
    ],
    deeperReading: ["CHADD adult resource library", "ADDA support resources"],
    relatedTools: [
      { label: "Dopamine Menu", href: "/tools/dopamine-menu" },
      { label: "Routine Builder", href: "/tools/routine-builder" },
    ],
    printableTemplate: {
      label: "Dopamine Menu Template",
      href: "/templates/dopamine-menu-template.txt",
    },
  },
  {
    slug: "emotional-regulation",
    title: "Emotional Regulation and Repair",
    moment: "Emotions spike fast and conversations derail.",
    summary: "Use pause routines, repair scripts, and regulation tools to protect relationships.",
    whoFor: "People dealing with rejection sensitivity, intense responses, and recovery friction.",
    firstStep: "Use one 90-second pause before replying when activated.",
    tldr: [
      "Regulate body first, problem-solve second.",
      "Pause scripts prevent escalation damage.",
      "Repair quickly after misses.",
      "Practice low-stakes scripts before conflict.",
    ],
    minimumViable: [
      "Delay reactive messages by ten minutes.",
      "Use one grounding technique.",
      "Send one repair script within 24 hours after conflict.",
    ],
    ifYouHaveEnergy: [
      "Write custom scripts in direct/warm/concise tones.",
      "Track trigger-response patterns.",
      "Practice co-regulation plan with trusted person.",
    ],
    crisisMode: [
      "Stop messaging and move body for 3-5 minutes.",
      "Use grounding sequence (5-4-3-2-1).",
      "Reach emergency support if safety risk is present.",
    ],
    weeklyPlan: [
      "Create three repair scripts.",
      "Practice one regulation tool daily.",
      "Log one trigger-response-reflection entry each day.",
      "Run one planned hard conversation with script support.",
      "Review what tone worked best.",
      "Add one relationship check-in slot.",
      "Keep scripts in quick-access notes.",
    ],
    deeperReading: ["ADDA relationships resources", "NIMH emotional health topics"],
    relatedTools: [
      { label: "Script Generator", href: "/tools/script-generator" },
      { label: "Dopamine Menu", href: "/tools/dopamine-menu" },
    ],
    printableTemplate: {
      label: "Conversation Repair Script Sheet",
      href: "/templates/conversation-repair-script-sheet.txt",
    },
  },
  {
    slug: "sleep",
    title: "ADHD and Sleep Routines",
    moment: "You get a second wind at night and mornings collapse.",
    summary: "Stabilize sleep with wake anchors, staged wind-down, and low-friction night routines.",
    whoFor: "People with delayed sleep patterns, nighttime hyperfocus, or inconsistent wake times.",
    firstStep: "Choose one wake-time anchor for the next seven days.",
    tldr: [
      "Anchor wake time first.",
      "Ramp down gradually, not instantly.",
      "Reduce stimulating inputs at night.",
      "Track sleep with context notes.",
    ],
    minimumViable: [
      "Set wake alarm and get out of bed.",
      "Charge phone away from bed.",
      "Run three-step minimum night routine.",
    ],
    ifYouHaveEnergy: [
      "Tune light, sound, and temperature environment.",
      "Pair bedtime with same cue and soundtrack.",
      "Review stimulant timing with clinician.",
    ],
    crisisMode: [
      "Prioritize safety tasks when severely sleep deprived.",
      "Delay high-stakes decisions.",
      "Reach out for urgent help if distress escalates.",
    ],
    weeklyPlan: [
      "Keep wake time within 30-minute range.",
      "Use same wind-down sequence five nights.",
      "Track caffeine and screen timing.",
      "Run one evening cleanup block before shutdown.",
      "Use medication/symptom tracker if relevant.",
      "Review sleep log on day 7.",
      "Adjust only one variable next week.",
    ],
    deeperReading: ["Sleep Foundation ADHD article", "CDC sleep hygiene guidance"],
    relatedTools: [
      { label: "Routine Builder", href: "/tools/routine-builder" },
      { label: "Time Estimator", href: "/tools/time-estimator" },
    ],
    printableTemplate: {
      label: "Night Routine Scaffold",
      href: "/templates/night-routine-scaffold.txt",
    },
  },
  {
    slug: "relationships",
    title: "ADHD and Relationships",
    moment: "Care is high but follow-through and communication keep breaking trust.",
    summary: "Use explicit systems, repair language, and recurring check-ins to reduce repeated conflict.",
    whoFor: "Partners, family, friends, and co-parents navigating ADHD-related strain.",
    firstStep: "Schedule one 20-minute logistics check-in this week.",
    tldr: [
      "Separate intent from impact.",
      "Use shared systems, not memory battles.",
      "Repair quickly after misses.",
      "Define support and accountability explicitly.",
    ],
    minimumViable: [
      "One transparent update each day.",
      "One repair script after conflict.",
      "One shared calendar for critical commitments.",
    ],
    ifYouHaveEnergy: [
      "Create recurring shared checklist.",
      "Design relationship operating agreement.",
      "Use coaching/therapy support if needed.",
    ],
    crisisMode: [
      "Pause escalated conversations for 20 minutes.",
      "Use return-time script: 'I need a reset and will return at ___.'.",
      "Prioritize safety and support in high-risk situations.",
    ],
    weeklyPlan: [
      "Hold one weekly logistics check-in.",
      "Use shared task board for recurring responsibilities.",
      "Practice one appreciation statement daily.",
      "Repair within 24 hours after missed commitments.",
      "Track one recurring friction loop.",
      "Adjust one system, not everything.",
      "Review support vs resentment balance.",
    ],
    deeperReading: ["ADDA relationship guides", "The ADHD Effect on Marriage resources"],
    relatedTools: [
      { label: "Script Generator", href: "/tools/script-generator" },
      { label: "Routine Builder", href: "/tools/routine-builder" },
    ],
    printableTemplate: {
      label: "Relationship Weekly Check-In",
      href: "/templates/relationship-weekly-checkin.txt",
    },
  },
  {
    slug: "anxiety-overlap",
    title: "ADHD + Anxiety / Depression Overlap",
    moment: "Everything feels tangled and it is hard to tell what is driving impairment.",
    summary: "Track symptom patterns and reduce immediate impairment while pursuing clinical clarity.",
    whoFor: "People with co-occurring symptoms needing practical stabilization plus care navigation.",
    firstStep: "Start a daily symptom/context log for one week.",
    tldr: [
      "ADHD and anxiety/depression often overlap.",
      "Symptom logs improve clinical decisions.",
      "Treat immediate function first.",
      "Do not self-diagnose from one checklist alone.",
    ],
    minimumViable: [
      "Track three core symptoms daily.",
      "Use one grounding tool each day.",
      "Send one support message when overloaded.",
    ],
    ifYouHaveEnergy: [
      "Prepare provider question list from logs.",
      "Build relapse warning-sign list.",
      "Combine therapy and routine scaffolds.",
    ],
    crisisMode: [
      "Use urgent support resources immediately if safety worsens.",
      "Call or text 988 in the U.S. for crisis support.",
      "Reduce commitments to essentials only.",
    ],
    weeklyPlan: [
      "Complete daily symptom log.",
      "Use panic mode only for true urgent tasks.",
      "Add one decompression block per day.",
      "Book or confirm clinical follow-up.",
      "Prepare concise summary for appointment.",
      "Review what reduced impairment most.",
      "Carry best supports into next week.",
    ],
    deeperReading: ["NIMH anxiety overview", "NIMH depression overview"],
    relatedTools: [
      { label: "Smart Pomodoro", href: "/tools/smart-pomodoro" },
      { label: "Script Generator", href: "/tools/script-generator" },
    ],
    printableTemplate: {
      label: "Medication + Symptom Tracker",
      href: "/templates/medication-log-symptom-tracker.txt",
    },
  },
  {
    slug: "medication",
    title: "Medication Questions: What To Track and Ask",
    moment: "You are considering meds or adjusting treatment and need clearer conversations.",
    summary: "Educational framework for titration basics, side effect tracking, and prescriber communication.",
    whoFor: "People trying medication pathways and caregivers supporting them.",
    firstStep: "Bring one week of structured symptom notes to your next appointment.",
    tldr: [
      "Medication is a tool, not the whole plan.",
      "Titration is iterative and clinician-guided.",
      "Track effect windows and side effects with context.",
      "Communicate concise patterns, not vague impressions.",
    ],
    minimumViable: [
      "Log dose time and effect window daily.",
      "Track appetite, mood, sleep, rebound.",
      "Prepare top three questions for prescriber.",
    ],
    ifYouHaveEnergy: [
      "Track productivity outcomes (not just feelings).",
      "Pair tracking with sleep/caffeine notes.",
      "Create pre-appointment summary template.",
    ],
    crisisMode: [
      "For concerning side effects, contact clinician promptly.",
      "For severe or emergency symptoms, seek urgent/emergency care.",
      "Do not self-adjust prescription dose.",
    ],
    weeklyPlan: [
      "Track daily dose + outcome windows.",
      "Log side effects and context.",
      "Note functional changes at work/school/home.",
      "Prepare concise provider update.",
      "Review with clinician.",
      "Adjust plan only with clinical guidance.",
      "Keep non-medication supports running.",
    ],
    deeperReading: ["NICE ADHD guideline", "CHADD medication management"],
    relatedTools: [
      { label: "Script Generator", href: "/tools/script-generator?topic=medication" },
      { label: "School Support Generator", href: "/tools/school-support" },
    ],
    printableTemplate: {
      label: "Medication + Symptom Tracker",
      href: "/templates/medication-log-symptom-tracker.txt",
    },
  },
  {
    slug: "organization",
    title: "Organization Systems for ADHD Brains",
    moment: "You keep losing essentials and transitions are chaotic.",
    summary: "Build environment supports that reduce object loss and exit-time panic.",
    whoFor: "Anyone losing keys, wallets, school supplies, meds, or work essentials repeatedly.",
    firstStep: "Set up one visible launchpad near your exit today.",
    tldr: [
      "Consistency beats complexity.",
      "Make item homes visible and obvious.",
      "Use checklists where memory fails.",
      "Reset with short cadence, not giant cleanups.",
    ],
    minimumViable: [
      "One launchpad tray or hooks.",
      "One leaving-house checklist.",
      "Night-before bag setup.",
    ],
    ifYouHaveEnergy: [
      "Label top storage zones.",
      "Create weekly misc-basket reset.",
      "Add trackers for high-risk items.",
    ],
    crisisMode: [
      "Run one-room sweep before departure.",
      "Use backup key/payment plan.",
      "Send delay notice early.",
    ],
    weeklyPlan: [
      "Daily three-minute launchpad reset.",
      "Assign homes for top ten lost items.",
      "Use checklist before leaving.",
      "Run one weekly reset block.",
      "Track what still gets lost.",
      "Redesign only one failing step.",
      "Repeat same system next week.",
    ],
    deeperReading: ["CHADD practical strategies", "ADDA organization resources"],
    relatedTools: [
      { label: "Routine Builder", href: "/tools/routine-builder" },
      { label: "Planner Generator", href: "/tools/planner-generator" },
    ],
    printableTemplate: {
      label: "Leaving the House Checklist",
      href: "/templates/leaving-house-checklist.txt",
    },
  },
];

export const guidesBySlug = Object.fromEntries(guides.map((guide) => [guide.slug, guide]));
