export interface StepItem {
  title: string;
  details: string;
}

export interface CarePathway {
  slug: "not-diagnosed" | "diagnosed-overwhelmed" | "trying-meds" | "parent-partner";
  title: string;
  audience: string;
  description: string;
  firstStep: string;
  supportRoute: string;
  toolToday: string;
  deeperGuide: string;
  weekPlan: string[];
}

export interface PortalContent {
  slug: "students" | "adults" | "parents-partners" | "teachers" | "managers";
  title: string;
  intro: string;
  howItShowsUp: string[];
  misunderstandings: string[];
  scripts: { title: string; text: string }[];
  accommodations: string[];
  supportLooksLike: string[];
  supportDoesNotLookLike: string[];
}

export const carePathways: CarePathway[] = [
  {
    slug: "not-diagnosed",
    title: "I am not diagnosed but struggling",
    audience: "People who need clarity before, during, or after an ADHD evaluation decision.",
    description:
      "Educational self-screening, evaluation preparation, and advocacy steps so you can enter care with less confusion.",
    firstStep:
      "Document three recurring impairment patterns across school, work, and home with concrete examples.",
    supportRoute: "/care/not-diagnosed",
    toolToday: "Script Generator for evaluation request + Time Estimator for paperwork planning.",
    deeperGuide: "Library guides: Anxiety overlap, executive dysfunction, and getting started.",
    weekPlan: [
      "Day 1: Complete educational self-screening reflection.",
      "Day 2: Build symptom timeline from childhood to present.",
      "Day 3: Gather records (school/work examples, prior evaluations).",
      "Day 4: Contact one clinic and ask process + cost questions.",
      "Day 5: Prepare appointment script and goals.",
      "Day 6: Build support plan for wait period.",
      "Day 7: Review next steps and keep one-page summary ready.",
    ],
  },
  {
    slug: "diagnosed-overwhelmed",
    title: "I am diagnosed and overwhelmed",
    audience: "People with diagnosis in hand but no stable day-to-day system yet.",
    description:
      "Stabilize essentials first, then layer one routine and one tool at a time to prevent burnout loops.",
    firstStep:
      "Choose one minimum daily anchor (meds, meals, calendar review, or shutdown ritual) and protect it for one week.",
    supportRoute: "/care/diagnosed-overwhelmed",
    toolToday: "Routine Builder + Task Breaker.",
    deeperGuide: "Library guides: executive dysfunction, burnout, and relationships.",
    weekPlan: [
      "Day 1: Pick one non-negotiable anchor.",
      "Day 2: Build minimum/normal/bad-day routine tiers.",
      "Day 3: Remove one redundant planning system.",
      "Day 4: Run one body-doubling work block.",
      "Day 5: Add one communication script for support requests.",
      "Day 6: Schedule recovery and decompression block.",
      "Day 7: Keep what worked; delete what failed.",
    ],
  },
  {
    slug: "trying-meds",
    title: "I am trying meds",
    audience: "People starting or adjusting ADHD medication with clinical supervision.",
    description:
      "Educational medication literacy, practical tracking, and appointment communication structure.",
    firstStep:
      "Start one-line daily logging for dose timing, effect window, side effects, appetite, and sleep.",
    supportRoute: "/care/trying-meds",
    toolToday: "Script Generator (medication topic) + Medication tracker template.",
    deeperGuide: "Library medication guide plus care medication education section.",
    weekPlan: [
      "Day 1: Begin medication/symptom tracking template.",
      "Day 2: Add sleep + caffeine context notes.",
      "Day 3: Write top 3 improvements and concerns.",
      "Day 4: Track rebound and mood windows.",
      "Day 5: Prepare concise prescriber summary.",
      "Day 6: Confirm follow-up questions.",
      "Day 7: Review with clinician; do not self-adjust dosage.",
    ],
  },
  {
    slug: "parent-partner",
    title: "I am a parent or partner",
    audience: "Parents, partners, and supporters who want practical help without shame dynamics.",
    description:
      "Build shared systems, supportive language, and accountability plans that preserve trust.",
    firstStep:
      "Schedule one short logistics check-in and agree on one visible shared system.",
    supportRoute: "/care/parent-partner",
    toolToday: "Script Generator + Routine Builder.",
    deeperGuide: "Parents/Partners portal and relationships guide.",
    weekPlan: [
      "Day 1: Agree on one shared calendar/task board.",
      "Day 2: Define one recurring support ritual.",
      "Day 3: Use one non-shaming prompt script.",
      "Day 4: Practice one repair script after friction.",
      "Day 5: Review what support felt helpful.",
      "Day 6: Adjust timing and format of reminders.",
      "Day 7: Keep one change and drop one ineffective habit.",
    ],
  },
];

export const selfScreeningEducation: StepItem[] = [
  {
    title: "Educational self-screening is a starting point",
    details:
      "Use checklists to organize your observations, not to self-diagnose. Diagnosis requires licensed clinical assessment.",
  },
  {
    title: "Look for persistent cross-setting impairment",
    details:
      "Track patterns across school/work/home and note how symptoms impact real outcomes, not just feelings.",
  },
  {
    title: "Bring examples, not only labels",
    details:
      "Clinicians can assess more accurately when you provide concrete examples: missed deadlines, task initiation delays, time blindness, and regulation episodes.",
  },
  {
    title: "Consider overlap conditions",
    details:
      "Anxiety, depression, trauma, and sleep disorders can overlap with ADHD symptoms. Differential assessment matters.",
  },
];

export const diagnosisProcess: StepItem[] = [
  {
    title: "Clinical interview and history",
    details:
      "Most evaluations include detailed symptom history from childhood through current functioning across life domains.",
  },
  {
    title: "Rating scales and impairment review",
    details:
      "Standardized scales and functional impact questions help evaluate persistence and severity.",
  },
  {
    title: "Differential assessment",
    details:
      "Qualified clinicians assess overlap with anxiety, depression, learning disorders, sleep issues, and substance effects.",
  },
  {
    title: "Results and treatment planning",
    details:
      "Expect discussion of diagnosis status, subtype/presentation, and treatment options including medication, therapy, coaching, and supports.",
  },
];

export const lowCostCareOptions: StepItem[] = [
  {
    title: "Community health centers",
    details:
      "Federally qualified and community clinics often provide lower-cost primary mental health referrals and care coordination.",
  },
  {
    title: "University psychology clinics",
    details:
      "Training clinics may offer supervised assessments at reduced rates; waitlists vary.",
  },
  {
    title: "Sliding-scale providers",
    details:
      "Ask directly about cash-pay discounts, payment plans, and reduced-fee programs.",
  },
  {
    title: "Telehealth with transparent follow-up",
    details:
      "Choose services that clearly describe clinician credentials, continuity plans, and medication monitoring.",
  },
];

export const medicationEducation: StepItem[] = [
  {
    title: "Stimulant and non-stimulant options",
    details:
      "Both categories are used in ADHD care; choice depends on response, side effects, comorbidities, and clinical history.",
  },
  {
    title: "Titration is iterative",
    details:
      "Clinicians typically adjust slowly while tracking functional benefit and side effects in context.",
  },
  {
    title: "Track what matters",
    details:
      "Log timing, focus, emotional regulation, appetite, sleep, rebound effects, and functional outcomes.",
  },
  {
    title: "Communicate concise patterns",
    details:
      "Bring brief summaries to appointments: what improved, what worsened, and one clear question.",
  },
];

export const therapyAndCoaching: StepItem[] = [
  {
    title: "CBT for ADHD",
    details:
      "Useful for planning, cognitive reframing, and emotion regulation patterns linked with executive function strain.",
  },
  {
    title: "Executive function coaching",
    details:
      "Action-oriented support for systems, accountability, and follow-through. Confirm scope and qualifications.",
  },
  {
    title: "Skills groups",
    details:
      "Structured peer groups can reduce isolation and improve consistency through practical homework and accountability.",
  },
  {
    title: "Integrated care planning",
    details:
      "Medication, therapy, routines, and supports typically work best together rather than in isolation.",
  },
];

export const careResourceLinks = [
  {
    title: "CHADD",
    description: "Evidence-informed education, programs, and community support.",
    href: "https://chadd.org",
  },
  {
    title: "ADDA",
    description: "Adult-focused ADHD resources, support groups, and education.",
    href: "https://add.org",
  },
  {
    title: "988 Lifeline",
    description: "Crisis support (U.S.) by call or text 988.",
    href: "https://988lifeline.org",
  },
  {
    title: "Job Accommodation Network",
    description: "Workplace accommodation guidance for employees and managers.",
    href: "https://askjan.org/disabilities/Attention-Deficit-Hyperactivity-Disorder-AD-HD.cfm",
  },
];

export const portalContent: Record<PortalContent["slug"], PortalContent> = {
  students: {
    slug: "students",
    title: "Student Portal",
    intro:
      "Middle school, high school, and college guidance for inconsistent execution, deadlines, and support conversations.",
    howItShowsUp: [
      "Good comprehension, uneven assignment completion.",
      "Late starts and panic finishing.",
      "Time blindness around study and transitions.",
      "Shame loops after falling behind.",
    ],
    misunderstandings: [
      "'You are lazy' instead of executive overload.",
      "'You did it once, so you can always do it.'",
      "Treating missing work as indifference.",
    ],
    scripts: [
      {
        title: "To professor",
        text: "I care about this class and I am using ADHD supports to improve consistency. Could we discuss [specific accommodation] so I can meet course outcomes reliably?",
      },
      {
        title: "To parent/guardian",
        text: "I am not asking for less accountability. I am asking for structure that helps me follow through, like weekly planning and checkpoint reminders.",
      },
    ],
    accommodations: [
      "Extended time for exams and written work.",
      "Reduced-distraction testing environment.",
      "Checkpoint-based deadlines for large projects.",
      "Priority registration when available.",
    ],
    supportLooksLike: [
      "Clear due dates and rubrics.",
      "Frequent low-stakes check-ins.",
      "Early recovery plans after missed work.",
    ],
    supportDoesNotLookLike: [
      "Public shame for late work.",
      "Ambiguous expectations with punitive follow-up.",
      "Assuming memory is enough.",
    ],
  },
  adults: {
    slug: "adults",
    title: "Adult Portal",
    intro:
      "Systems for work, home, finances, and emotional load when responsibilities outpace executive bandwidth.",
    howItShowsUp: [
      "Constant busyness but unstable follow-through.",
      "Admin avoidance and missed low-urgency tasks.",
      "Burnout from masking and overcompensation.",
      "Relationship strain around inconsistency.",
    ],
    misunderstandings: [
      "'Try harder' as a complete strategy.",
      "Equating inconsistency with not caring.",
      "Confusing urgent mode with sustainable productivity.",
    ],
    scripts: [
      {
        title: "To manager",
        text: "I deliver best with clear written priorities, protected focus blocks, and explicit deadline sequence. Can we align on that workflow this week?",
      },
      {
        title: "To partner",
        text: "I care about shared responsibilities. I need external systems to be consistent. Can we choose one shared tool and one weekly check-in?",
      },
    ],
    accommodations: [
      "Written action items after meetings.",
      "Protected deep-work windows.",
      "Structured check-ins and prioritization.",
      "Noise/interruption controls where possible.",
    ],
    supportLooksLike: [
      "Collaborative system design.",
      "Clear accountability with realistic scope.",
      "Repair-focused communication after misses.",
    ],
    supportDoesNotLookLike: [
      "Character attacks for missed tasks.",
      "Expecting instant perfect consistency.",
      "Punishing accommodation requests.",
    ],
  },
  "parents-partners": {
    slug: "parents-partners",
    title: "Parents and Partners Portal",
    intro:
      "Support someone with ADHD through clear expectations, shared systems, and non-shaming accountability.",
    howItShowsUp: [
      "Conflict around forgotten commitments.",
      "Reminder fatigue and resentment loops.",
      "Escalation during overwhelm.",
      "Mismatch between intent and impact.",
    ],
    misunderstandings: [
      "Thinking reminders should only be needed once.",
      "Treating support needs as excuses.",
      "Assuming consequences alone teach regulation.",
    ],
    scripts: [
      {
        title: "Supportive prompt",
        text: "Do you want help deciding the first step, or would body doubling help more right now?",
      },
      {
        title: "Repair prompt",
        text: "I know this was a hard miss. I still need a concrete repair plan so we can rebuild trust. What is first?",
      },
    ],
    accommodations: [
      "Shared calendars/task boards.",
      "Weekly logistics check-in.",
      "Clear ownership for recurring tasks.",
      "Written agreements for critical routines.",
    ],
    supportLooksLike: [
      "Compassion plus structure.",
      "Clear, specific requests.",
      "Fast repair after misses.",
    ],
    supportDoesNotLookLike: [
      "Shame or contempt language.",
      "Vague requests followed by anger.",
      "Over-functioning until resentment explodes.",
    ],
  },
  teachers: {
    slug: "teachers",
    title: "Teacher Portal",
    intro: "Classroom strategies that preserve standards while reducing unnecessary executive barriers.",
    howItShowsUp: [
      "Strong participation but inconsistent deliverables.",
      "Difficulty sustaining multi-step assignment flow.",
      "Late work from planning load, not inability.",
      "Regulation issues under high stimulation.",
    ],
    misunderstandings: [
      "If focus is possible sometimes, it should be possible always.",
      "Movement equals disrespect.",
      "Unfinished work equals no motivation.",
    ],
    scripts: [
      {
        title: "Student reset line",
        text: "Let us pick your first action now and set a checkpoint in 15 minutes so you can get momentum.",
      },
      {
        title: "Family collaboration line",
        text: "Your student shows strong potential. We want to align supports this week to improve consistency with clear checkpoints.",
      },
    ],
    accommodations: [
      "Chunked instructions and milestone check-ins.",
      "Alternative demonstration options where appropriate.",
      "Extended time and low-distraction testing.",
      "Predictable class routines and assignment pacing.",
    ],
    supportLooksLike: [
      "Early intervention before failure compounds.",
      "Frequent formative feedback.",
      "Specific next-step coaching.",
    ],
    supportDoesNotLookLike: [
      "Public call-outs.",
      "All-or-nothing grading without support pathway.",
      "Punishment-only late work response.",
    ],
  },
  managers: {
    slug: "managers",
    title: "Manager Portal",
    intro: "Build high-performance workflows where neurodivergent staff can deliver consistently.",
    howItShowsUp: [
      "Strong ideation, uneven execution in ambiguous workflows.",
      "Context-switch overload from meeting-heavy schedules.",
      "Delayed updates during overwhelm spikes.",
      "Deadline misses from unclear scope transitions.",
    ],
    misunderstandings: [
      "Accommodation equals lowered standards.",
      "Verbal agreement equals execution clarity.",
      "Missed update equals disengagement.",
    ],
    scripts: [
      {
        title: "Clarity closeout",
        text: "Before we close, confirm top priority, due date, and definition of done in one sentence.",
      },
      {
        title: "Support alignment",
        text: "We can improve predictability with written priorities, checkpoint cadence, and protected focus windows. Let us implement this this sprint.",
      },
    ],
    accommodations: [
      "Written action summaries after meetings.",
      "Predictable check-in rhythm.",
      "Protected focus blocks.",
      "Lower interruption norms for deep work.",
    ],
    supportLooksLike: [
      "Outcome-driven planning with clear scope.",
      "Early escalation safety.",
      "Consistent prioritization process.",
    ],
    supportDoesNotLookLike: [
      "Ambiguous ownership.",
      "Constant priority churn without realignment.",
      "Stigma against support requests.",
    ],
  },
};
