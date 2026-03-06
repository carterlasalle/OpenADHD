export interface ScriptVariant {
  tone: "Direct" | "Warm" | "Formal";
  text: string;
}

export interface ScriptEntry {
  id: string;
  title: string;
  situation: string;
  variants: ScriptVariant[];
}

export const scriptLibrary: ScriptEntry[] = [
  {
    id: "tell-parents",
    title: "How to tell my parents I think I have ADHD",
    situation: "For teens and adults starting a first diagnosis conversation at home.",
    variants: [
      {
        tone: "Direct",
        text: "I want to talk about something important. I have been struggling with focus, time, and organization for a long time, and I think ADHD could be part of it. I am not asking for a label today. I am asking for your support while I get evaluated.",
      },
      {
        tone: "Warm",
        text: "I trust you, so I want to share this early. I have been feeling overwhelmed by things that look easy for other people, and I think ADHD might explain a lot. Could we look into an evaluation together?",
      },
      {
        tone: "Formal",
        text: "I would like to request support for a clinical ADHD evaluation. I am experiencing persistent attention and executive-function difficulties that are affecting school and daily responsibilities. I would appreciate your help identifying next steps.",
      },
    ],
  },
  {
    id: "professor-accommodation",
    title: "How to ask a professor for extended time or accommodations",
    situation: "For college students requesting support early in the term.",
    variants: [
      {
        tone: "Direct",
        text: "Hi Professor [Name], I am registered with disability services and have accommodation approval for [extended time/flexible deadlines]. I want to align early so I can perform well in your course. Could we confirm how this will be handled for quizzes and major assignments?",
      },
      {
        tone: "Warm",
        text: "Hi Professor [Name], I am excited for this class and want to set myself up responsibly. I have ADHD-related accommodations through disability services. Could we review logistics for assessments so I can follow expectations correctly from the start?",
      },
      {
        tone: "Formal",
        text: "Dear Professor [Name], I am writing to coordinate approved disability accommodations for this course. Documentation is on file with disability services. Please advise on implementation procedures for timed assessments and assignment timelines.",
      },
    ],
  },
  {
    id: "partner-explainer",
    title: "How to explain ADHD to a partner without sounding like excuses",
    situation: "For relationship repair and expectation setting.",
    variants: [
      {
        tone: "Direct",
        text: "I am not trying to excuse missed tasks. I am trying to explain the pattern so we can fix it together. ADHD affects how I start and sequence tasks, but I still want accountability. Can we set one shared system so this improves consistently?",
      },
      {
        tone: "Warm",
        text: "I care about us and I do not want ADHD to keep hurting trust. When I forget things, it is not because I do not care. I want to use better systems and be accountable. Could we try one weekly check-in and one shared task list?",
      },
      {
        tone: "Formal",
        text: "I want to clarify that this is context, not a justification. ADHD impacts executive function and consistency. I am committed to concrete improvements and would like to agree on measurable support structures and follow-up checkpoints.",
      },
    ],
  },
  {
    id: "body-doubling-request",
    title: "How to ask for body doubling",
    situation: "For friends, peers, or coworkers.",
    variants: [
      {
        tone: "Direct",
        text: "Can we do a 30-minute body-double session? I need someone present while I start this task. We do not need to talk, I just focus better with another person there.",
      },
      {
        tone: "Warm",
        text: "Would you be open to a short co-working session with me? I am more likely to follow through when someone is nearby, even quietly. It would help a lot.",
      },
      {
        tone: "Formal",
        text: "I am requesting a short accountability co-working session. A 30-minute silent presence session significantly improves my initiation and task completion.",
      },
    ],
  },
  {
    id: "work-accommodation",
    title: "How to request workplace accommodations",
    situation: "For employees seeking practical support without oversharing medical details.",
    variants: [
      {
        tone: "Direct",
        text: "I am requesting workplace accommodations that improve execution quality. The most helpful adjustments are written priorities, reduced ad-hoc context switching during focus blocks, and clear deadline checkpoints.",
      },
      {
        tone: "Warm",
        text: "I care deeply about doing strong work here. I manage ADHD, and a few structural supports would improve reliability: written priorities, protected focus windows, and milestone check-ins. Could we discuss implementation?",
      },
      {
        tone: "Formal",
        text: "I am requesting reasonable accommodations related to a documented disability. I am seeking written task prioritization, protected focus periods, and periodic deadline alignment meetings to maintain performance.",
      },
    ],
  },
  {
    id: "recovery-after-miss",
    title: "How to recover after missing something important",
    situation: "For apologies with accountability and repair steps.",
    variants: [
      {
        tone: "Direct",
        text: "I missed this, and that is on me. I understand the impact. Here is my recovery plan: [step 1], [step 2], [deadline]. I will also add [system change] so this is less likely again.",
      },
      {
        tone: "Warm",
        text: "I am sorry I dropped this. I know that affected you and I care about repairing it. I am doing [specific action] today and [follow-up action] by [date], and I am adding [new system] going forward.",
      },
      {
        tone: "Formal",
        text: "I acknowledge the missed commitment and resulting impact. Corrective steps are as follows: [step], [step], [timeline]. Preventative process change: [system update].",
      },
    ],
  },
];
