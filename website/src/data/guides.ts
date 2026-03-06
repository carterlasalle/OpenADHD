export interface GuideSection {
  heading: string;
  bullets: string[];
}

export interface Guide {
  slug: string;
  title: string;
  summary: string;
  whoFor: string;
  doFirst: string;
  tldr: string[];
  commonPatterns: string[];
  toolNow: {
    name: string;
    href: string;
    reason: string;
  };
  weekPlan: string[];
  minimumViable: string[];
  ifYouHaveEnergy: string[];
  crisisMode: string[];
  deeperReading: Array<{
    label: string;
    href: string;
  }>;
  printable: {
    label: string;
    href: string;
  };
  longFormSections: GuideSection[];
}

export const guides: Guide[] = [
  {
    slug: "getting-started-overwhelmed",
    title: "Getting Started When Everything Feels Too Big",
    summary:
      "A stabilization-first guide for ADHD overwhelm. Focus on narrowing scope, reducing choice load, and creating one reliable next step.",
    whoFor:
      "People who freeze at task start, bounce between urgent tasks, or feel guilty about not starting.",
    doFirst:
      "Open a blank note and write exactly one task for the next 10 minutes. Nothing else.",
    tldr: [
      "Overwhelm is often a sequencing problem, not a motivation problem.",
      "You need fewer options, shorter steps, and visible finish lines.",
      "Use one trusted startup ritual for all hard tasks.",
    ],
    commonPatterns: [
      "You spend 30 minutes planning but still cannot begin.",
      "You jump into low-impact tasks to avoid high-friction ones.",
      "You interpret startup friction as personal failure.",
    ],
    toolNow: {
      name: "Task Breaker",
      href: "/tools/task-breaker",
      reason: "Converts one intimidating task into physical, low-friction starts.",
    },
    weekPlan: [
      "Day 1-2: Run Task Breaker for one priority task daily.",
      "Day 3-4: Add a fixed 10-minute startup block at the same time each day.",
      "Day 5-7: Keep only one active priority list with max 3 items.",
    ],
    minimumViable: [
      "Choose one next action that takes under 5 minutes.",
      "Set a visible timer for 10 minutes.",
      "Stop after timer if needed; momentum still counts.",
    ],
    ifYouHaveEnergy: [
      "Pre-break tomorrow's first task before ending today.",
      "Build a launch playlist and startup environment cue.",
      "Identify three recurring trigger points for freeze states.",
    ],
    crisisMode: [
      "No optimization. Pick one essential task and one essential self-care action.",
      "Use body doubling or message a support person with your one-step plan.",
      "Delay all noncritical commitments for 24 hours.",
    ],
    deeperReading: [
      { label: "Executive Dysfunction Guide", href: "/library/executive-dysfunction" },
      { label: "Bad Day Mode", href: "/tools/bad-day-mode" },
    ],
    printable: {
      label: "Crisis-Friendly Action Card",
      href: "/templates/crisis-friendly-action-card.txt",
    },
    longFormSections: [
      {
        heading: "Why Overwhelm Happens",
        bullets: [
          "ADHD overwhelm is usually a mismatch between cognitive load and available executive function.",
          "When task ambiguity is high, your brain spends energy scanning possibilities instead of starting.",
          "Perfection pressure makes even simple tasks feel unsafe to begin.",
          "The fix is not more willpower. The fix is smaller scope and clearer first actions.",
        ],
      },
      {
        heading: "The 3-Layer Decompression Method",
        bullets: [
          "Layer 1: Reduce. Remove all tasks except one meaningful next target.",
          "Layer 2: Shrink. Convert target into 3 to 8 micro-steps starting with a physical action.",
          "Layer 3: Anchor. Pair startup with a repeatable cue (music, location, timer, body double).",
          "Repeat this method daily until startup latency decreases.",
        ],
      },
      {
        heading: "What to Say to Yourself",
        bullets: [
          "Use implementation language: 'I am doing Step 1 for ten minutes now.'",
          "Avoid identity statements like 'I am lazy' and replace with process statements.",
          "Track effort quality instead of perfect output during recovery weeks.",
        ],
      },
    ],
  },
  {
    slug: "school-study-system",
    title: "Study Systems That Do Not Collapse",
    summary:
      "A practical school system combining sprint planning, active recall, and accommodation scripts.",
    whoFor: "Middle school, high school, and college learners with inconsistent follow-through.",
    doFirst:
      "Pick one class and schedule one 25-minute study sprint within the next 24 hours.",
    tldr: [
      "Cramming feels productive but leaks retention quickly.",
      "Use short, repeated study loops with retrieval practice.",
      "Build class-specific plans instead of one generic study routine.",
    ],
    commonPatterns: [
      "You overfocus on one class and neglect others.",
      "You read notes repeatedly without self-testing.",
      "You avoid professor communication until deadlines are missed.",
    ],
    toolNow: {
      name: "Study Sprint",
      href: "/tools/study-sprint",
      reason: "Creates sprint plans by class type and urgency.",
    },
    weekPlan: [
      "Map every class to two weekly sprint windows.",
      "Use active recall for at least 60% of study time.",
      "Send one clarification or accommodation message early in the week.",
    ],
    minimumViable: [
      "Open one class portal and list all upcoming deadlines.",
      "Complete one 15-minute sprint using recall, not rereading.",
      "Schedule the next sprint before you stop.",
    ],
    ifYouHaveEnergy: [
      "Set a weekly planning block every Sunday.",
      "Create a shared accountability study room with a peer.",
      "Automate reminders 7 days, 2 days, and 6 hours before exams.",
    ],
    crisisMode: [
      "Prioritize highest grade impact tasks first.",
      "Email instructors before due dates with your recovery plan.",
      "Use 10/3 focus cycles and submit partial progress where possible.",
    ],
    deeperReading: [
      { label: "For Students Portal", href: "/students" },
      { label: "Accommodation Scripts", href: "/scripts" },
    ],
    printable: {
      label: "Study Sprint Tracker",
      href: "/templates/study-sprint-tracker.txt",
    },
    longFormSections: [
      {
        heading: "Class Type Playbooks",
        bullets: [
          "Reading-heavy classes: audio + annotation + recall summary in your own words.",
          "Problem-set classes: timed question sets with error logs.",
          "Writing classes: split into outline, evidence gathering, rough draft, and revision loops.",
          "Lab/project classes: pre-commit to milestone deliverables and check-in rhythm.",
        ],
      },
      {
        heading: "Exam Recovery If You Are Behind",
        bullets: [
          "Do not try to relearn entire terms. Focus on likely assessment objectives.",
          "Build a 3-day compression plan: core concepts, practice, corrections.",
          "Use teach-back method to check weak areas quickly.",
        ],
      },
    ],
  },
  {
    slug: "work-productivity-system",
    title: "Work and Productivity for ADHD Brains",
    summary:
      "Shift from reactive busyness to predictable output with scope limits, buffer-based planning, and communication scripts.",
    whoFor:
      "Adults balancing meetings, deadlines, and high context-switching roles.",
    doFirst:
      "Choose your top three outcomes for this week and block calendar time for each.",
    tldr: [
      "Output systems beat motivation spikes.",
      "Expect timeline optimism; plan explicit buffers.",
      "Communicate early to reduce deadline panic.",
    ],
    commonPatterns: [
      "Your day is consumed by low-priority pings.",
      "You underestimate admin and transition costs.",
      "You ask for help only when it is nearly too late.",
    ],
    toolNow: {
      name: "Planner Generator",
      href: "/tools/planner-generator",
      reason: "Builds a deadline-aware week plan with realistic buffers.",
    },
    weekPlan: [
      "Define Monday outcomes and non-negotiable work blocks.",
      "Use daily startup and shutdown checklists.",
      "Send preemptive status updates for high-risk tasks.",
    ],
    minimumViable: [
      "Write one must-finish outcome for today.",
      "Reserve one 40-minute focus block.",
      "Silence notifications during the block.",
    ],
    ifYouHaveEnergy: [
      "Create recurring templates for common project types.",
      "Implement two-level task board: this week / next.",
      "Create 'ready to start' definitions for ambiguous tasks.",
    ],
    crisisMode: [
      "Inform stakeholders immediately with revised ETA.",
      "Narrow scope to minimum viable deliverable.",
      "Schedule two short rescue blocks and protect them.",
    ],
    deeperReading: [
      { label: "For Managers Portal", href: "/managers" },
      { label: "Time Blindness Guide", href: "/library/time-blindness" },
    ],
    printable: {
      label: "Two-Column Task System Sheet",
      href: "/templates/2-column-task-system-sheet.txt",
    },
    longFormSections: [
      {
        heading: "Time Buffer Model",
        bullets: [
          "Estimate ideal duration, then multiply by 1.6 for planning baseline.",
          "Add transition blocks between cognitively different tasks.",
          "Reserve daily slack for interruptions and urgent requests.",
        ],
      },
      {
        heading: "Manager Alignment Script",
        bullets: [
          "State current status, blocker, and proposed timeline in three sentences.",
          "Offer one scope reduction option and one support request.",
          "Confirm priorities in writing to reduce ambiguity.",
        ],
      },
    ],
  },
  {
    slug: "time-blindness",
    title: "Time Blindness: How to Make Time Visible",
    summary:
      "Use visual time cues, buffer rules, and transition rituals to reduce lateness and missed estimates.",
    whoFor: "Anyone who repeatedly underestimates duration or loses track of passing time.",
    doFirst: "Use the Time Estimator on one task before you start it today.",
    tldr: [
      "Time blindness is neurological, not moral failure.",
      "Visibility and pre-commitment improve timing more than memory.",
      "Transition alarms are as important as start alarms.",
    ],
    commonPatterns: [
      "You start late because setup takes longer than expected.",
      "You miss transitions when hyperfocused.",
      "You stack too many tasks in one block.",
    ],
    toolNow: {
      name: "Time Estimator",
      href: "/tools/time-estimator",
      reason: "Adds ADHD-aware buffers based on complexity and interruption risk.",
    },
    weekPlan: [
      "Estimate and log duration for three tasks daily.",
      "Apply two-alarm transitions before all appointments.",
      "Review variance at week end and adjust your multiplier.",
    ],
    minimumViable: [
      "Set one visible timer for your current task.",
      "Set a second alarm 5 minutes before next commitment.",
      "Write down stop time before you begin.",
    ],
    ifYouHaveEnergy: [
      "Use time-block color coding by energy type.",
      "Create prep baskets near exit points.",
      "Track frequent delay sources and pre-plan countermeasures.",
    ],
    crisisMode: [
      "Send late notice immediately with realistic ETA.",
      "Drop nonessential tasks until timing stabilizes.",
      "Use one-location work mode to avoid travel transitions.",
    ],
    deeperReading: [
      { label: "Work Productivity System", href: "/library/work-productivity-system" },
      { label: "Bad Day Mode", href: "/tools/bad-day-mode" },
    ],
    printable: {
      label: "Leaving the House Checklist",
      href: "/templates/leaving-house-checklist.txt",
    },
    longFormSections: [
      {
        heading: "Practical Time Architecture",
        bullets: [
          "Use countdown timers that show visual depletion.",
          "Make all deadlines explicit with date + time + place.",
          "Never rely on memory for transition points.",
        ],
      },
    ],
  },
  {
    slug: "executive-dysfunction",
    title: "Executive Function Explained Simply",
    summary:
      "A non-jargon explanation of executive skills and practical ways to compensate today.",
    whoFor:
      "People who can perform well in bursts but struggle with planning, sequencing, and completion.",
    doFirst:
      "Choose one recurring pain point and externalize it to a visible checklist.",
    tldr: [
      "Executive function is the brain's management layer.",
      "ADHD affects consistency, not intelligence.",
      "External systems can reduce internal load dramatically.",
    ],
    commonPatterns: [
      "You know what to do but cannot begin consistently.",
      "You forget tasks not visibly present.",
      "You lose momentum at transitions.",
    ],
    toolNow: {
      name: "Routine Builder",
      href: "/tools/routine-builder",
      reason: "Creates minimum, normal, and bad-day versions of routines.",
    },
    weekPlan: [
      "Convert one daily process into a checklist.",
      "Use environment cues for each step.",
      "Eliminate optional steps for one week to increase completion rate.",
    ],
    minimumViable: [
      "Pick one routine anchor (wake, lunch, bedtime).",
      "Attach one task to that anchor.",
      "Track completion for 5 days only.",
    ],
    ifYouHaveEnergy: [
      "Build escalation levels: minimum, standard, stretch.",
      "Create friction-reduction defaults for future you.",
      "Batch repetitive decisions weekly.",
    ],
    crisisMode: [
      "Use minimum-only routines.",
      "Delay optional commitments.",
      "Ask for body doubling on priority tasks.",
    ],
    deeperReading: [
      { label: "Getting Started Guide", href: "/library/getting-started-overwhelmed" },
      { label: "Routine Builder", href: "/tools/routine-builder" },
    ],
    printable: {
      label: "Habit Scaffold Sheet",
      href: "/templates/habit-scaffold-sheet.txt",
    },
    longFormSections: [
      {
        heading: "Core Executive Skills",
        bullets: [
          "Initiation: crossing the gap between intention and action.",
          "Working memory: holding steps while doing them.",
          "Inhibition: resisting immediate distractions.",
          "Task switching: disengaging and re-engaging efficiently.",
          "Planning and sequencing: ordering actions with realistic timing.",
        ],
      },
      {
        heading: "Compensation Strategies",
        bullets: [
          "Make tasks visible, physical, and specific.",
          "Standardize repeat processes with templates.",
          "Reduce startup friction through pre-staging.",
          "Use accountability structures for high-value work.",
        ],
      },
    ],
  },
  {
    slug: "motivation-burnout",
    title: "Motivation, Burnout, and ADHD Energy Cycles",
    summary:
      "Design systems around variable energy to avoid boom-and-bust patterns.",
    whoFor:
      "People who perform intensely for short periods, then crash and disengage.",
    doFirst: "Build a dopamine menu with three fast resets and one deep recovery action.",
    tldr: [
      "Motivation is inconsistent; systems should not depend on it.",
      "Recovery is part of productivity, not separate from it.",
      "Novelty and movement can restore access to effort.",
    ],
    commonPatterns: [
      "You overcommit on high-energy days.",
      "You avoid everything after intense sprint periods.",
      "You confuse exhaustion with lack of discipline.",
    ],
    toolNow: {
      name: "Dopamine Menu Builder",
      href: "/tools/dopamine-menu",
      reason: "Pre-builds regulation actions so you do not decide under stress.",
    },
    weekPlan: [
      "Add one planned reset before your known crash window.",
      "Protect one low-demand evening for recovery.",
      "Track overcommitment triggers and adjust next week.",
    ],
    minimumViable: [
      "Use one 5-minute reset before any high-friction task.",
      "Limit daily priority list to three tasks.",
      "End day with one written shutdown note.",
    ],
    ifYouHaveEnergy: [
      "Create an effort budget by day.",
      "Assign deep tasks to high-energy windows.",
      "Run weekly scope review to prevent overload.",
    ],
    crisisMode: [
      "Cancel nonessential obligations for 48 hours.",
      "Focus on hydration, food, sleep, one priority task.",
      "Use scripted communication to reset expectations quickly.",
    ],
    deeperReading: [
      { label: "Emotional Regulation", href: "/library/emotional-regulation" },
      { label: "Bad Day Mode", href: "/tools/bad-day-mode" },
    ],
    printable: {
      label: "Dopamine Menu Template",
      href: "/templates/dopamine-menu-template.txt",
    },
    longFormSections: [
      {
        heading: "Energy-Aware Planning",
        bullets: [
          "Tag tasks by cognitive load and emotional load.",
          "Front-load hard work when medication and energy align.",
          "Build smaller goals on low-energy days to preserve continuity.",
        ],
      },
    ],
  },
  {
    slug: "emotional-regulation",
    title: "Emotional Regulation for ADHD",
    summary:
      "Reduce intensity, increase response control, and repair faster after emotional spikes.",
    whoFor:
      "People experiencing rejection sensitivity, fast escalation, or post-conflict shame spirals.",
    doFirst:
      "Create one pause script and save it on your lock screen for immediate access.",
    tldr: [
      "Fast emotional activation is common in ADHD.",
      "Regulation improves with scripted pauses and body-level resets.",
      "Repair speed matters more than never slipping.",
    ],
    commonPatterns: [
      "You respond before your thinking catches up.",
      "Small feedback feels like complete failure.",
      "You avoid repair conversations out of shame.",
    ],
    toolNow: {
      name: "Script Generator",
      href: "/tools/script-generator",
      reason: "Generates low-pressure language for hard conversations.",
    },
    weekPlan: [
      "Practice one pause routine daily even when calm.",
      "Use one repair script within 24 hours of a conflict.",
      "Track triggers and body signals to intervene earlier.",
    ],
    minimumViable: [
      "Use one sentence pause script before responding.",
      "Drink water and take 10 slow breaths.",
      "Delay high-stakes responses by 20 minutes.",
    ],
    ifYouHaveEnergy: [
      "Build a trigger-response map with replacement actions.",
      "Practice co-regulation with trusted person.",
      "Add daily decompression walk or stretch reset.",
    ],
    crisisMode: [
      "Move conversation to text if verbal escalation is high.",
      "Use safety line: 'I am not available to continue this well right now.'",
      "Return with one concrete repair offer and timeline.",
    ],
    deeperReading: [
      { label: "Relationship Scripts", href: "/scripts" },
      { label: "Parents/Partners Portal", href: "/parents-partners" },
    ],
    printable: {
      label: "Conversation Repair Script Sheet",
      href: "/templates/conversation-repair-script-sheet.txt",
    },
    longFormSections: [
      {
        heading: "Rapid Regulation Ladder",
        bullets: [
          "Level 1: Pause and breathe.",
          "Level 2: Change body state (movement, cold water, breath pacing).",
          "Level 3: Script your response.",
          "Level 4: Re-enter conversation with boundaries.",
        ],
      },
    ],
  },
  {
    slug: "sleep-and-adhd",
    title: "ADHD and Sleep",
    summary:
      "A practical sleep stabilization model that handles delayed sleep, nighttime overfocus, and inconsistent wake times.",
    whoFor:
      "People with inconsistent sleep schedules, racing thoughts at night, and daytime fatigue.",
    doFirst: "Set one fixed wake time for the next 7 days.",
    tldr: [
      "Wake time consistency usually beats bedtime perfection.",
      "Nighttime stimulation delays shutdown.",
      "Morning light helps reset your sleep-wake rhythm.",
    ],
    commonPatterns: [
      "You get a second wind late at night.",
      "You lose time in phone spirals before sleep.",
      "You oversleep after poor nights and shift schedule further.",
    ],
    toolNow: {
      name: "Routine Builder",
      href: "/tools/routine-builder",
      reason: "Creates realistic wind-down routines with bad-day fallback.",
    },
    weekPlan: [
      "Anchor wake time every day.",
      "Use wind-down cue 45 minutes before sleep target.",
      "Reduce light and stimulation in final hour.",
    ],
    minimumViable: [
      "Set alarm and place phone away from bed.",
      "Prepare morning essentials before sleep.",
      "Do one calming action for 5 minutes.",
    ],
    ifYouHaveEnergy: [
      "Track caffeine cutoff and evening stimulation.",
      "Add morning outdoor light within 30 minutes.",
      "Use physical notebook for bedtime brain dump.",
    ],
    crisisMode: [
      "Protect wake time even after poor sleep.",
      "Avoid major decisions after midnight.",
      "Use short afternoon rest, not long naps.",
    ],
    deeperReading: [
      { label: "Motivation and Burnout", href: "/library/motivation-burnout" },
      { label: "Bad Day Mode", href: "/tools/bad-day-mode" },
    ],
    printable: {
      label: "Night Routine Scaffold",
      href: "/templates/night-routine-scaffold.txt",
    },
    longFormSections: [
      {
        heading: "Nighttime Friction Controls",
        bullets: [
          "Use app limits and grayscale after wind-down start.",
          "Keep bedroom low-light and low-stimulation.",
          "Pre-decide your shutdown sequence to avoid decision fatigue.",
        ],
      },
    ],
  },
  {
    slug: "relationships-and-communication",
    title: "ADHD and Relationships",
    summary:
      "Reduce misunderstanding loops with explicit agreements, repair scripts, and shared systems.",
    whoFor: "Partners, friends, and families impacted by missed tasks, lateness, and reactivity.",
    doFirst:
      "Choose one recurring conflict and write one prevention system for this week.",
    tldr: [
      "Symptoms are often misread as intent.",
      "Shared systems reduce blame and repeated arguments.",
      "Repair and accountability can coexist with compassion.",
    ],
    commonPatterns: [
      "One person carries invisible planning labor.",
      "Missed commitments trigger trust erosion.",
      "Conversations happen only during conflict spikes.",
    ],
    toolNow: {
      name: "Script Generator",
      href: "/tools/script-generator",
      reason: "Provides language for difficult conversations under stress.",
    },
    weekPlan: [
      "Hold one 20-minute weekly operations check-in.",
      "Use one shared list for responsibilities.",
      "Practice one repair script after a miss.",
    ],
    minimumViable: [
      "Acknowledge one miss without defensiveness.",
      "Offer one concrete make-good action.",
      "Confirm deadline in writing.",
    ],
    ifYouHaveEnergy: [
      "Define household ownership zones.",
      "Create recurring reminders with shared visibility.",
      "Agree on escalation pause phrase.",
    ],
    crisisMode: [
      "Stop debate when escalation rises.",
      "Switch to practical next-step coordination.",
      "Return later for broader emotional discussion.",
    ],
    deeperReading: [
      { label: "Parents/Partners Portal", href: "/parents-partners" },
      { label: "Script Library", href: "/scripts" },
    ],
    printable: {
      label: "Relationship Weekly Check-In",
      href: "/templates/relationship-weekly-checkin.txt",
    },
    longFormSections: [
      {
        heading: "Conversation Architecture",
        bullets: [
          "Start with shared goal, not accusation.",
          "Describe observable behavior and impact.",
          "Agree on one system change and one review date.",
        ],
      },
    ],
  },
  {
    slug: "anxiety-overlap",
    title: "ADHD and Anxiety Overlap",
    summary:
      "Differentiate anxiety loops from executive friction and apply the right intervention fast.",
    whoFor:
      "People who feel constant urgency, dread starting tasks, or over-prepare without execution.",
    doFirst: "Use Bad Day Mode and pick one certainty action for the next 10 minutes.",
    tldr: [
      "ADHD and anxiety can amplify each other.",
      "Urgency is not always priority.",
      "Small certainty actions reduce loop intensity.",
    ],
    commonPatterns: [
      "You overthink every path and never start.",
      "You seek certainty before action.",
      "You avoid communication out of fear of judgment.",
    ],
    toolNow: {
      name: "Bad Day Mode",
      href: "/tools/bad-day-mode",
      reason: "Forces one-next-action execution when cognitive load is high.",
    },
    weekPlan: [
      "Use one grounding protocol before planning.",
      "Set daily uncertainty tolerance window.",
      "Complete one exposure action for avoided task.",
    ],
    minimumViable: [
      "One breath cycle, one task, one timer.",
      "Ignore all optional tasks for this block.",
      "Record completion and stop rumination.",
    ],
    ifYouHaveEnergy: [
      "Create anti-rumination action list.",
      "Practice short exposure ladder for avoided tasks.",
      "Review anxiety triggers with clinician if available.",
    ],
    crisisMode: [
      "Use support contact script immediately.",
      "Reduce commitments to safety and essentials.",
      "Use crisis resources if at risk.",
    ],
    deeperReading: [
      { label: "Care Navigation", href: "/care" },
      { label: "Emotional Regulation", href: "/library/emotional-regulation" },
    ],
    printable: {
      label: "Panic-Proof Reset Checklist",
      href: "/templates/panic-proof-reset-checklist.txt",
    },
    longFormSections: [
      {
        heading: "Urgency vs Importance Filter",
        bullets: [
          "Urgent feeling does not always equal urgent consequence.",
          "Define objective priority criteria before stress spikes.",
          "Use brief decision templates to prevent analysis paralysis.",
        ],
      },
    ],
  },
];

export const guideIndex = Object.fromEntries(guides.map((guide) => [guide.slug, guide]));

export function getGuideBySlug(slug: string) {
  return guideIndex[slug] ?? null;
}
