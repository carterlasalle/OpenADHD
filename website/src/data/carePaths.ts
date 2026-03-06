export interface CarePath {
  id: string;
  title: string;
  href: string;
  whoFor: string;
  nextSteps: string[];
}

export const carePaths: CarePath[] = [
  {
    id: "not-diagnosed",
    title: "I’m not diagnosed but struggling",
    href: "/care/not-diagnosed",
    whoFor: "People suspecting ADHD and trying to decide what to do next.",
    nextSteps: [
      "Use educational self-screening information.",
      "Prepare symptom examples across contexts.",
      "Start low-cost evaluation search.",
    ],
  },
  {
    id: "diagnosed-overwhelmed",
    title: "I’m diagnosed and overwhelmed",
    href: "/care/diagnosed-overwhelmed",
    whoFor: "People with a diagnosis who need a practical first week plan.",
    nextSteps: [
      "Build minimum viable routine.",
      "Choose one core tool and repeat daily.",
      "Create a support conversation plan.",
    ],
  },
  {
    id: "trying-meds",
    title: "I’m trying meds",
    href: "/care/trying-meds",
    whoFor: "People beginning or adjusting medication with a prescriber.",
    nextSteps: [
      "Track effects and side effects consistently.",
      "Prepare follow-up data for prescriber.",
      "Keep sleep and appetite supports stable.",
    ],
  },
  {
    id: "parent-partner",
    title: "I’m a parent/partner",
    href: "/care/parent-partner",
    whoFor: "Supporters who want clear, nonjudgmental guidance.",
    nextSteps: [
      "Use validation-first language.",
      "Set shared systems, not blame loops.",
      "Use repair scripts after conflict.",
    ],
  },
];

export const evaluationSteps = [
  "Track your symptoms and examples across home, school/work, and relationships.",
  "Review educational screening tools (not diagnostic).",
  "Find a clinician experienced in ADHD, especially adult ADHD if relevant.",
  "Prepare records: school reports, work notes, prior treatment, family history.",
  "Attend evaluation interviews and rating-scale process.",
  "Review results and differential diagnosis discussion.",
  "Build treatment plan: meds, therapy/coaching, supports, and follow-up cadence.",
];

export const medicationBasics = {
  stimulant: [
    "Often first-line due to strong evidence for many people.",
    "Includes methylphenidate and amphetamine classes.",
    "Onset is often faster; response profiles vary by person.",
  ],
  nonStimulant: [
    "Useful when stimulants are not tolerated or contraindicated.",
    "May include atomoxetine, guanfacine, clonidine, and others per prescriber.",
    "Onset can be slower; consistent tracking is important.",
  ],
  track: [
    "Focus quality",
    "Task initiation",
    "Duration of effect",
    "Mood/irritability",
    "Sleep timing and quality",
    "Appetite and hydration",
    "Heart rate/blood pressure if instructed",
  ],
};

export const costOptions = [
  {
    title: "University psychology clinics",
    details:
      "Graduate training clinics often provide reduced-cost assessments supervised by licensed clinicians.",
  },
  {
    title: "Federally Qualified Health Centers",
    details:
      "Sliding-scale community clinics may provide behavioral health referrals and basic assessment pathways.",
  },
  {
    title: "Telehealth providers",
    details:
      "Can reduce travel and wait times. Verify licensure, prescribing policy, and total cost structure.",
  },
  {
    title: "Employer or school benefits",
    details:
      "Employee assistance programs and student disability services can reduce initial barriers.",
  },
  {
    title: "Insurance network navigation",
    details:
      "Ask for behavioral health case management and ADHD-experienced providers.",
  },
];

export const therapyAndCoaching = [
  {
    title: "CBT for ADHD",
    details:
      "Targets planning, negative self-talk, emotional reactivity, and behavioral follow-through.",
  },
  {
    title: "Executive function coaching",
    details:
      "Practical weekly support for routines, accountability, and system design.",
  },
  {
    title: "Skills groups",
    details:
      "Group-based support for planning, communication, and regulation strategies.",
  },
  {
    title: "Family and couples support",
    details:
      "Helps align expectations, reduce blame cycles, and build collaborative systems.",
  },
];
