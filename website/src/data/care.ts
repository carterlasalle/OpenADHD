export interface CarePath {
  id: string;
  title: string;
  description: string;
  href: string;
  steps: string[];
}

export const carePaths: CarePath[] = [
  {
    id: "not-diagnosed",
    title: "I am not diagnosed but struggling",
    description:
      "Educational path for self-screening, documenting symptoms, and preparing evaluation conversations.",
    href: "/care/not-diagnosed",
    steps: [
      "Use educational screening prompts and symptom logging.",
      "Collect examples across school/work/home contexts.",
      "Book initial clinical intake and ask about ADHD adult experience.",
    ],
  },
  {
    id: "diagnosed-overwhelmed",
    title: "I am diagnosed and overwhelmed",
    description:
      "Stabilize routines, prioritize core supports, and avoid trying every strategy at once.",
    href: "/care/diagnosed-overwhelmed",
    steps: [
      "Choose two immediate pain points.",
      "Use minimum viable routines for one week.",
      "Layer in one new support only after baseline stabilizes.",
    ],
  },
  {
    id: "trying-meds",
    title: "I am trying meds",
    description:
      "Medication education path with practical tracking and prescriber communication guidance.",
    href: "/care/trying-meds",
    steps: [
      "Track timing, appetite, sleep, mood, and focus daily.",
      "Record examples of benefit and side effects.",
      "Bring clear adjustment questions to follow-up visits.",
    ],
  },
  {
    id: "parent-partner",
    title: "I am a parent or partner",
    description:
      "Support path for communication, accommodations, and collaborative accountability.",
    href: "/parents-partners",
    steps: [
      "Align on shared language and expectations.",
      "Choose one visible system for recurring tasks.",
      "Review weekly and repair quickly after misses.",
    ],
  },
];

export const evaluationSteps = [
  "Clarify your goal: diagnosis, treatment planning, or both.",
  "Gather history examples from childhood to present.",
  "Complete pre-visit symptom notes and life impact summary.",
  "Confirm clinician credentials and adult ADHD experience.",
  "Ask about co-occurring conditions and differential diagnosis.",
  "Review results, treatment options, and follow-up cadence.",
];

export const lowCostCareOptions = [
  "Community mental health clinics with sliding-scale services",
  "University psychology clinics with supervised trainees",
  "Federally Qualified Health Centers (FQHCs)",
  "Telehealth platforms with transparent ADHD evaluation pricing",
  "Employee Assistance Programs and insurance case managers",
];

export const medicationBasics = {
  stimulant: [
    "Common first-line options with strong evidence for many patients.",
    "Often faster onset; requires careful monitoring for side effects.",
    "May impact appetite, sleep, blood pressure, or anxiety in some people.",
  ],
  nonStimulant: [
    "Useful when stimulants are not tolerated or are contraindicated.",
    "Typically slower onset, with different side effect profiles.",
    "Can be effective for attention, impulsivity, and emotional regulation.",
  ],
  tracking: [
    "Dose timing and duration of effect",
    "Focus quality and task completion",
    "Appetite changes and hydration",
    "Sleep onset and wake quality",
    "Mood, irritability, and anxiety changes",
  ],
};

export const therapyCoachingOptions = [
  {
    title: "CBT for ADHD",
    description:
      "Structured therapy targeting thought patterns, planning, and behavior execution.",
  },
  {
    title: "Executive Function Coaching",
    description:
      "Practical implementation support for routines, accountability, and systems design.",
  },
  {
    title: "Skills Groups",
    description:
      "Peer-supported learning of concrete ADHD coping and communication strategies.",
  },
];
