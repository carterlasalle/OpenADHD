export interface PortalSection {
  heading: string;
  points: string[];
}

export interface PortalData {
  slug: "students" | "adults" | "parents-partners" | "teachers" | "managers";
  title: string;
  subtitle: string;
  environment: string;
  misunderstandings: string[];
  scripts: string[];
  accommodations: string[];
  supportLooksLike: string[];
  doesNotHelp: string[];
  sections: PortalSection[];
}

export const portals: PortalData[] = [
  {
    slug: "students",
    title: "For Students",
    subtitle: "Study systems, accommodations, and recovery plans that actually hold up.",
    environment:
      "ADHD in school often looks like inconsistent output: brilliant in one unit, behind in the next.",
    misunderstandings: [
      "'You are smart, so you should be fine.'",
      "'Late work means you did not care.'",
      "'If you waited until the last minute, that is your fault every time.'",
    ],
    scripts: [
      "How to explain ADHD to a professor",
      "How to request assignment extensions",
      "How to recover after missing an exam",
    ],
    accommodations: [
      "Extended exam time and reduced-distraction settings",
      "Flexible deadlines for episodic symptom spikes",
      "Priority registration to structure schedule around focus windows",
      "Recorded lectures or note-taking support",
    ],
    supportLooksLike: [
      "Weekly planning sessions with deadline visibility",
      "Class-specific study systems instead of generic plans",
      "Early instructor communication before crisis points",
    ],
    doesNotHelp: [
      "Waiting to ask for help until failing grade alerts",
      "All-or-nothing study marathons",
      "Shame-based productivity pressure",
    ],
    sections: [
      {
        heading: "Exam Planning",
        points: [
          "Start with the grading rubric and likely tested concepts.",
          "Use active recall in short sprints.",
          "Schedule two checkpoint reviews before exam day.",
        ],
      },
      {
        heading: "Falling Behind Recovery",
        points: [
          "List all open assignments by grade impact.",
          "Send recovery emails with concrete dates.",
          "Submit high-impact partials before polishing low-impact work.",
        ],
      },
    ],
  },
  {
    slug: "adults",
    title: "For Adults",
    subtitle: "Build realistic systems for work, home, and self-management.",
    environment:
      "Adult ADHD often means high potential with uneven execution across work, home, money, and health routines.",
    misunderstandings: [
      "'If it mattered, you would remember.'",
      "'You just need to be more disciplined.'",
      "'You are fine because you can hyperfocus sometimes.'",
    ],
    scripts: [
      "How to explain ADHD needs at work",
      "How to ask for body doubling",
      "How to reset after missing deadlines",
    ],
    accommodations: [
      "Written priorities and milestone checkpoints",
      "Protected deep-work blocks",
      "Asynchronous communication expectations",
    ],
    supportLooksLike: [
      "Weekly planning with realistic buffer rules",
      "Simple routines with bad-day fallback",
      "System-first accountability, not character judgments",
    ],
    doesNotHelp: [
      "Overloading calendars with back-to-back commitments",
      "Trying to hold all tasks in memory",
      "Changing systems every 3 days",
    ],
    sections: [
      {
        heading: "Work Execution",
        points: [
          "Track outcomes, not activity volume.",
          "Use pre-deadline updates to prevent surprise misses.",
          "Batch communications to reduce context switching.",
        ],
      },
      {
        heading: "Home Operations",
        points: [
          "Use fixed homes for essentials.",
          "Design one nightly reset sequence.",
          "Automate recurring bills and reminders.",
        ],
      },
    ],
  },
  {
    slug: "parents-partners",
    title: "For Parents and Partners",
    subtitle: "Support without shame, control battles, or constant conflict loops.",
    environment:
      "In close relationships, ADHD symptoms are often interpreted as laziness or disrespect unless systems and language are explicit.",
    misunderstandings: [
      "'If you loved me you would not forget.'",
      "'You are using ADHD as an excuse.'",
      "'I should not have to remind you.'",
    ],
    scripts: [
      "How to explain ADHD without excuse language",
      "How to ask for help with accountability",
      "How to repair trust after misses",
    ],
    accommodations: [
      "Shared visible task boards",
      "Weekly logistics check-ins",
      "Short written follow-ups for verbal agreements",
    ],
    supportLooksLike: [
      "Clear expectations and specific handoffs",
      "Co-regulation before problem-solving",
      "Repair-focused communication after misses",
    ],
    doesNotHelp: [
      "Scorekeeping old mistakes",
      "Ambiguous verbal agreements",
      "Public criticism or sarcasm around symptoms",
    ],
    sections: [
      {
        heading: "Hard Conversation Scripts",
        points: [
          "Start with shared goal, not blame.",
          "Describe pattern, impact, and requested change.",
          "Agree on one system and one review date.",
        ],
      },
      {
        heading: "What Support Looks Like",
        points: [
          "Ask: 'What would make the next 20 minutes easier?'",
          "Use reminders with respect and consent.",
          "Celebrate process consistency, not just perfect outcomes.",
        ],
      },
    ],
  },
  {
    slug: "teachers",
    title: "For Teachers",
    subtitle: "Classroom design and communication that improve outcomes for ADHD learners.",
    environment:
      "ADHD in classrooms is often mislabeled as disengagement when it is usually executive load and regulation strain.",
    misunderstandings: [
      "'They would do it if they cared.'",
      "'Frequent reminders are unfair to other students.'",
      "'Behavior is only about compliance.'",
    ],
    scripts: [
      "How to discuss supports with families",
      "How to redirect without escalating shame",
      "How to frame accommodations in strengths language",
    ],
    accommodations: [
      "Chunked instructions with visual cues",
      "Frequent low-stakes progress checks",
      "Alternative demonstration of mastery",
    ],
    supportLooksLike: [
      "Predictable classroom routines",
      "Neutral tone redirection",
      "Frequent, specific positive feedback",
    ],
    doesNotHelp: [
      "Public calling out for missed organization",
      "Complex multi-step verbal-only instructions",
      "Punishment without skill scaffolding",
    ],
    sections: [
      {
        heading: "Instruction Design",
        points: [
          "Give one direction at a time for high-load tasks.",
          "Use visible timers and transitions.",
          "Provide examples of finished work.",
        ],
      },
    ],
  },
  {
    slug: "managers",
    title: "For Work Managers",
    subtitle: "Performance support through clarity, structure, and sustainable accountability.",
    environment:
      "ADHD at work can look like inconsistent follow-through despite strong strategic ability and effort.",
    misunderstandings: [
      "'They are careless because details are missed.'",
      "'Frequent check-ins are special treatment.'",
      "'Urgency pressure always increases performance.'",
    ],
    scripts: [
      "How to set explicit scope and priorities",
      "How to run supportive check-ins",
      "How to discuss accommodation requests constructively",
    ],
    accommodations: [
      "Written priorities and acceptance criteria",
      "Milestone checkpoints on long projects",
      "Reduced high-frequency interruption during deep work",
    ],
    supportLooksLike: [
      "Clear outcomes and decision rights",
      "Predictable meeting cadence",
      "Private, actionable feedback loops",
    ],
    doesNotHelp: [
      "Ambiguous priorities",
      "Last-minute scope expansion",
      "Feedback only at failure points",
    ],
    sections: [
      {
        heading: "Operational Practices",
        points: [
          "Define done before work begins.",
          "Use short async status templates.",
          "Prioritize fewer projects to completion.",
        ],
      },
    ],
  },
];

export const portalBySlug = Object.fromEntries(portals.map((portal) => [portal.slug, portal]));
