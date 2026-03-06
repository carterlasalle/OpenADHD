export interface ScriptTone {
  tone: string;
  text: string;
}

export interface ScriptEntry {
  id: string;
  title: string;
  context: string;
  tones: ScriptTone[];
}

export const scriptEntries: ScriptEntry[] = [
  {
    id: "tell-parents",
    title: "How to tell my parents I think I have ADHD",
    context: "Use when asking for support around an evaluation.",
    tones: [
      {
        tone: "Direct",
        text: "I need your help with something important. I’ve been struggling with focus, time, and overwhelm in ways that are affecting school and daily life. I want to schedule an ADHD evaluation so I can get proper support.",
      },
      {
        tone: "Warm",
        text: "I know this might be a new conversation for us, but I’ve been working hard and still struggling in patterns that match ADHD. I’d feel supported if we could look into a professional evaluation together.",
      },
      {
        tone: "Brief text message",
        text: "Can we talk tonight? I think I might have ADHD and I’d like help finding an evaluation.",
      },
    ],
  },
  {
    id: "professor-extended-time",
    title: "How to tell my professor I need extended time",
    context: "Use when requesting accommodations or deadline support.",
    tones: [
      {
        tone: "Professional email",
        text: "Hello Professor [Name], I am managing ADHD-related executive function challenges and am working with disability support. I’d like to request extended time for [assignment/exam] and discuss options for meeting course outcomes. Thank you for your support.",
      },
      {
        tone: "Office-hours conversation",
        text: "I want to stay on track in this class, and ADHD affects my processing and timing. Could we discuss reasonable accommodations so I can demonstrate my understanding more consistently?",
      },
      {
        tone: "Urgent recovery",
        text: "I missed [deadline] and I take responsibility. ADHD-related planning issues contributed, and I’m actively correcting my system. Could I submit by [new date] with a penalty if needed?",
      },
    ],
  },
  {
    id: "partner-explain",
    title: "How to explain ADHD to a partner without sounding like excuses",
    context: "Use to separate intent from impact and propose solutions.",
    tones: [
      {
        tone: "Repair-focused",
        text: "I know my missed follow-through impacted you, and I’m sorry. This isn’t about not caring. ADHD affects execution, and I want to fix this with better systems, not promises. Can we choose one shared reminder method together?",
      },
      {
        tone: "Educational",
        text: "ADHD for me looks like time blindness and working-memory drop-offs. I’m not trying to dismiss impact. I’m asking us to treat this as a system problem we can solve together.",
      },
      {
        tone: "Short text",
        text: "I care about this and I know I missed it. Can we do a quick repair talk tonight and set one system so this happens less?",
      },
    ],
  },
  {
    id: "ask-body-doubling",
    title: "How to ask for body doubling",
    context: "Use with friends, classmates, coworkers, or online partners.",
    tones: [
      {
        tone: "Casual",
        text: "Can you sit on a quick focus call with me for 25 minutes? We don’t have to talk, I just work better with someone present.",
      },
      {
        tone: "Work-safe",
        text: "Would you be open to a short co-working block today? I focus better with shared accountability and can return the favor whenever useful.",
      },
      {
        tone: "Study group",
        text: "I’m doing two study sprints and need accountability. Want to run silent 25/5 cycles with check-ins?",
      },
    ],
  },
  {
    id: "work-accommodation",
    title: "How to request workplace accommodations",
    context: "Use in writing with HR or a direct manager.",
    tones: [
      {
        tone: "Formal",
        text: "I am requesting a conversation about reasonable workplace accommodations related to ADHD. Specific supports that would improve performance include written task expectations, reduced interruption blocks for deep work, and deadline checkpoint planning.",
      },
      {
        tone: "Manager-first",
        text: "I want to improve consistency in delivery, and I’ve identified a few adjustments that would help: clear priority lists, scheduled focus blocks, and written recaps after meetings. Can we trial these for 4 weeks?",
      },
      {
        tone: "Short",
        text: "Can we set time to discuss accommodations that will help me deliver more consistently? I have specific workflow adjustments prepared.",
      },
    ],
  },
  {
    id: "recover-after-miss",
    title: "How to recover after missing something important",
    context: "Use for deadlines, appointments, or dropped commitments.",
    tones: [
      {
        tone: "Ownership + plan",
        text: "I missed [item], and I take responsibility for that impact. I’m correcting it by [new action/date], and I’ve added [system change] to reduce repeat misses. Thank you for your patience while I repair this.",
      },
      {
        tone: "Concise",
        text: "I missed this. I’m sorry. I can deliver [specific make-up action] by [time].",
      },
      {
        tone: "High-stress text",
        text: "I dropped this and I’m fixing it now. I’ll send [update] by [time].",
      },
    ],
  },
];
