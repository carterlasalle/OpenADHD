export type ScriptTone = "direct" | "warm" | "formal";

export interface ScriptTemplate {
  id: string;
  title: string;
  audience: "parents" | "professor" | "partner" | "manager" | "friend" | "self";
  prompt: string;
  direct: string;
  warm: string;
  formal: string;
}

export const scriptTemplates: ScriptTemplate[] = [
  {
    id: "tell-parents",
    title: "How to tell my parents I think I have ADHD",
    audience: "parents",
    prompt: "Use when you want support starting an evaluation conversation.",
    direct:
      "I need to talk about something important. I have ongoing attention and organization struggles that line up with ADHD patterns. I want your support to get evaluated by a qualified clinician.",
    warm:
      "Can we have a calm conversation tonight? I have been struggling with focus, time management, and overwhelm for a while. I am not looking for excuses. I want to understand what is happening and get evaluated for ADHD.",
    formal:
      "I would like to discuss pursuing a professional ADHD evaluation. I am experiencing persistent symptoms that affect school/work and daily functioning. Your support with scheduling and logistics would help.",
  },
  {
    id: "professor-extension",
    title: "How to tell my professor I need extended time",
    audience: "professor",
    prompt: "Use when requesting accommodation or temporary flexibility.",
    direct:
      "Professor [Name], I am managing ADHD-related executive function challenges and I am requesting [specific accommodation]. I can submit [revised date] and I can share documentation through disability services.",
    warm:
      "Hi Professor [Name], I value this class and I want to submit strong work. I am currently dealing with ADHD-related planning and initiation challenges. Could we discuss [specific accommodation] so I can stay on track?",
    formal:
      "Dear Professor [Name], I am writing to request a reasonable accommodation related to ADHD. I am requesting [specific adjustment] and can coordinate through disability services. Thank you for your consideration.",
  },
  {
    id: "explain-partner",
    title: "How to explain ADHD to a partner without sounding like excuses",
    audience: "partner",
    prompt: "Use when you want accountability and shared systems.",
    direct:
      "I care about us and I know missed tasks impact you. ADHD affects my follow-through, not my commitment to this relationship. I want us to use shared reminders and weekly check-ins so I can be more reliable.",
    warm:
      "I love you, and I know the inconsistency has been hard. ADHD makes some tasks harder for me to start and finish, but I want to improve the impact on you. Can we try a shared checklist and a short weekly planning chat?",
    formal:
      "I want to acknowledge the impact of my ADHD symptoms on our daily responsibilities. I am committed to improving consistency through shared systems and scheduled check-ins.",
  },
  {
    id: "body-double",
    title: "How to ask for body doubling",
    audience: "friend",
    prompt: "Use when you need accountability support.",
    direct:
      "Can you body-double with me for 30 minutes? I need someone present while I start this task.",
    warm:
      "Quick ask: would you sit with me on video for a 30-minute focus block? I am stuck and body doubling helps me start.",
    formal:
      "Would you be available for a 30-minute accountability session? Your presence would help me initiate and sustain focus.",
  },
  {
    id: "workplace-accommodation",
    title: "How to request workplace accommodations",
    audience: "manager",
    prompt: "Use for practical adjustments tied to job performance.",
    direct:
      "I want to discuss a few ADHD-friendly work adjustments that will improve my output: written follow-ups after meetings, protected focus blocks, and clearer priority order.",
    warm:
      "I am committed to strong performance and I want to proactively request a few structures that help with ADHD-related executive function. Could we talk about written action summaries and protected deep-work time?",
    formal:
      "I would like to request reasonable accommodations to support ADHD-related executive function challenges, including written task clarity and scheduled uninterrupted work blocks.",
  },
  {
    id: "recover-after-miss",
    title: "How to recover after missing something important",
    audience: "self",
    prompt: "Use when you need fast repair without shame spiral.",
    direct:
      "I missed this and I am taking ownership. Here is my recovery plan: [step 1], [step 2], [step 3] with updated timing.",
    warm:
      "I dropped the ball and I am sorry for the impact. I want to fix this quickly. My plan is [steps] and I will send a checkpoint at [time].",
    formal:
      "I acknowledge that I missed this commitment. I am implementing the following corrective steps with updated milestones: [steps].",
  },
];

export function renderScript(templateId: string, tone: ScriptTone) {
  const template = scriptTemplates.find((item) => item.id === templateId);
  if (!template) return "";
  return template[tone];
}
