import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Getting Diagnosed with ADHD | OpenADHD",
  description:
    "A comprehensive, step-by-step guide to understanding ADHD diagnosis. Learn about signs, the evaluation process, types of professionals, and what comes after.",
};

const inattentionSigns = [
  { emoji: "🎯", text: "Difficulty sustaining focus on tasks or conversations" },
  { emoji: "🦋", text: "Easily distracted by unrelated thoughts or stimuli" },
  { emoji: "🔑", text: "Frequently losing everyday items (keys, phone, wallet)" },
  { emoji: "🧠", text: "Forgetfulness in daily activities and appointments" },
  { emoji: "📋", text: "Difficulty organizing tasks, time, and belongings" },
  { emoji: "⛰️", text: "Avoiding or dreading tasks that require sustained mental effort" },
  { emoji: "📝", text: "Not following through on instructions or finishing projects" },
];

const hyperactivitySigns = [
  { emoji: "🦵", text: "Fidgeting, tapping, or squirming when seated" },
  { emoji: "🚶", text: "Leaving your seat when staying seated is expected" },
  { emoji: "🏃", text: "Running or climbing in inappropriate situations (or inner restlessness in adults)" },
  { emoji: "🗣️", text: "Talking excessively or blurting out answers" },
  { emoji: "✋", text: "Interrupting others or intruding on conversations" },
  { emoji: "⏳", text: "Difficulty waiting your turn" },
  { emoji: "⚡", text: "Feeling restless or always \"on the go\"" },
];

const adultSigns = [
  { emoji: "⏰", text: "Chronic lateness and time blindness" },
  { emoji: "💰", text: "Difficulty managing finances and impulse spending" },
  { emoji: "💔", text: "Relationship challenges from forgetfulness or emotional reactivity" },
  { emoji: "💼", text: "Career difficulties — underperforming despite high capability" },
  { emoji: "🎢", text: "Emotional dysregulation — intense reactions, mood swings, rejection sensitivity" },
  { emoji: "😞", text: "Low self-esteem from years of struggling without understanding why" },
  { emoji: "😴", text: "Burnout cycles — overcommitting, then crashing" },
];

const diagnosisSteps = [
  {
    number: 1,
    title: "Recognize the Signs",
    emoji: "🔍",
    color: "var(--accent-coral)",
    content:
      "Start by reflecting on your experiences. Do the symptoms above resonate? Have they been present since childhood? Journaling your struggles and patterns can be incredibly valuable. Online screeners (like the ASRS) can help you articulate what you're experiencing, but they're a starting point — not a diagnosis.",
  },
  {
    number: 2,
    title: "Talk to Your Primary Care Doctor",
    emoji: "🩺",
    color: "var(--accent-teal)",
    content:
      "Your PCP is often the first stop. Tell them you've been struggling and suspect ADHD. Be specific: \"I've had trouble focusing since childhood, I lose things constantly, and it's affecting my work.\" They may do an initial screening, rule out other conditions (thyroid issues, sleep disorders, anxiety), and refer you to a specialist.",
  },
  {
    number: 3,
    title: "Find a Specialist",
    emoji: "🧑‍⚕️",
    color: "var(--accent-amber)",
    content:
      "A specialist experienced with ADHD will provide the most thorough evaluation. Look for psychiatrists, psychologists, or neuropsychologists who list ADHD as a focus area. Ask your PCP for referrals, check your insurance directory, or search databases like Psychology Today. Don't be discouraged by waitlists — get on them while exploring other options.",
  },
  {
    number: 4,
    title: "The Evaluation",
    emoji: "📋",
    color: "var(--accent-lavender)",
    content:
      "A comprehensive evaluation typically includes a clinical interview about your history, standardized rating scales and questionnaires, a review of your developmental and academic history, and sometimes neuropsychological testing. It may take 1–3 hours. The clinician will look at whether your symptoms are persistent, pervasive (showing up in multiple areas of life), and impairing.",
  },
  {
    number: 5,
    title: "Getting Your Results",
    emoji: "📊",
    color: "var(--accent-pink)",
    content:
      "Your clinician will share their findings with you. You may receive a diagnosis of ADHD (Inattentive, Hyperactive-Impulsive, or Combined type), or they may identify other conditions that better explain your symptoms. Either way, getting clarity is a win. Many people feel a mix of relief and grief — relief at finally understanding, and grief for the years spent struggling without support.",
  },
  {
    number: 6,
    title: "Treatment Planning",
    emoji: "🗺️",
    color: "var(--accent-coral)",
    content:
      "Diagnosis is the beginning, not the end. Your clinician will work with you on a treatment plan that may include medication, therapy, coaching, and lifestyle changes. Treatment is highly individual — what works for someone else may not work for you, and that's okay. The goal is building a life that works with your brain, not against it.",
  },
];

const professionals = [
  {
    title: "Psychiatrist",
    emoji: "🧠",
    color: "var(--accent-coral)",
    canDo: "Diagnose, prescribe medication, manage treatment",
    pros: "Medical perspective, can prescribe and adjust medication, understands co-occurring conditions",
    cons: "Can have long waitlists, appointments may be shorter, often more expensive",
  },
  {
    title: "Psychologist",
    emoji: "🔬",
    color: "var(--accent-teal)",
    canDo: "Comprehensive psychological testing and diagnosis",
    pros: "In-depth evaluation, can identify co-occurring conditions, may offer therapy too",
    cons: "Cannot prescribe medication in most states, testing can be costly",
  },
  {
    title: "Neuropsychologist",
    emoji: "🧩",
    color: "var(--accent-lavender)",
    canDo: "Detailed cognitive and neuropsychological testing",
    pros: "Most thorough evaluation, maps cognitive strengths and weaknesses, great for complex cases",
    cons: "Most expensive option, long waitlists, may not be covered by insurance",
  },
  {
    title: "Primary Care Physician",
    emoji: "🩺",
    color: "var(--accent-amber)",
    canDo: "Initial screening, can diagnose straightforward cases, prescribe medication",
    pros: "Easiest to access, knows your medical history, can rule out other conditions",
    cons: "May have less ADHD-specific training, evaluations may be less thorough",
  },
  {
    title: "Psychiatric Nurse Practitioner",
    emoji: "💊",
    color: "var(--accent-pink)",
    canDo: "Diagnose ADHD, prescribe and manage medication",
    pros: "Often shorter wait times, can prescribe medication, growing availability via telehealth",
    cons: "Scope of practice varies by state, may have less training than a psychiatrist",
  },
];

const checklistItems = [
  { emoji: "📝", text: "A list of your symptoms and when you first noticed them" },
  { emoji: "🏫", text: "School records, report cards, or teacher comments (especially from childhood)" },
  { emoji: "💼", text: "Work performance reviews or feedback from managers" },
  { emoji: "🏥", text: "Family medical history — especially ADHD, anxiety, depression, or learning disabilities" },
  { emoji: "💊", text: "Current medications and supplements you take" },
  { emoji: "📖", text: "Specific examples of how symptoms affect your daily life" },
  { emoji: "❓", text: "A list of questions you want to ask your clinician" },
  { emoji: "👥", text: "A trusted friend or family member who can share observations (optional but helpful)" },
];

const myths = [
  {
    myth: "ADHD is only for kids",
    reality:
      "ADHD is a lifelong neurodevelopmental condition. While it's often first identified in childhood, the majority of children with ADHD continue to experience significant symptoms into adulthood. Millions of adults live with undiagnosed ADHD.",
    emoji: "👶➡️👨",
  },
  {
    myth: "If you can focus on video games, you don't have ADHD",
    reality:
      "Hyperfocus is actually a hallmark of ADHD. People with ADHD can intensely focus on things that are novel, interesting, or urgent — but struggle with tasks that aren't intrinsically stimulating. It's a regulation issue, not an effort issue.",
    emoji: "🎮",
  },
  {
    myth: "ADHD isn't a real disorder",
    reality:
      "ADHD is one of the most well-researched conditions in all of medicine. Brain imaging studies show measurable differences in brain structure and function. It has a strong genetic component (heritability around 74%) and is recognized by every major medical organization worldwide.",
    emoji: "🧬",
  },
  {
    myth: "You need to be hyperactive to have ADHD",
    reality:
      "ADHD has three presentations: Predominantly Inattentive, Predominantly Hyperactive-Impulsive, and Combined. Many people — especially women and girls — have the Inattentive type, which often goes undiagnosed because they don't fit the stereotype of a \"bouncing off the walls\" child.",
    emoji: "🤫",
  },
  {
    myth: "ADHD is caused by bad parenting",
    reality:
      "ADHD is a neurodevelopmental condition with strong genetic roots. Parenting style doesn't cause ADHD, though supportive environments can help manage symptoms. Blaming parents adds stigma and delays people from seeking the help they deserve.",
    emoji: "👨‍👩‍👧",
  },
  {
    myth: "Everyone is a little ADHD",
    reality:
      "Everyone occasionally loses their keys or zones out. But ADHD involves persistent, pervasive impairment that significantly impacts daily functioning. Saying \"everyone is a little ADHD\" minimizes a real condition and can discourage people from seeking diagnosis.",
    emoji: "🙅",
  },
];

const treatmentOptions = [
  {
    title: "Medication",
    emoji: "💊",
    color: "var(--accent-coral)",
    description:
      "Stimulant medications (like methylphenidate and amphetamine-based) are the most effective treatment for most people. Non-stimulant options are also available. Medication doesn't change who you are — it helps your brain access its full potential.",
  },
  {
    title: "Cognitive Behavioral Therapy",
    emoji: "🧠",
    color: "var(--accent-teal)",
    description:
      "CBT adapted for ADHD helps you build practical skills: managing time, organizing tasks, challenging negative thought patterns, and breaking the cycle of avoidance and shame.",
  },
  {
    title: "ADHD Coaching",
    emoji: "🎯",
    color: "var(--accent-amber)",
    description:
      "An ADHD coach helps you set goals, build systems, develop accountability, and work with your brain's unique wiring. Think of it as a personal trainer for executive function.",
  },
  {
    title: "Lifestyle Modifications",
    emoji: "🌿",
    color: "var(--accent-lavender)",
    description:
      "Exercise, sleep hygiene, nutrition, mindfulness, and environmental design all play a role. Small changes — like body doubling, timers, or phone-free zones — can make a big difference.",
  },
  {
    title: "Support Groups & Community",
    emoji: "🤝",
    color: "var(--accent-pink)",
    description:
      "Connecting with others who understand your experience is powerful. Support groups, online communities, and peer mentoring reduce isolation and provide practical tips from people who \"get it.\"",
  },
];

export default function DiagnosisPage() {
  return (
    <main className="min-h-screen">
      {/* ── Hero Section ── */}
      <section className="relative overflow-hidden py-20 md:py-28 text-center">
        {/* Decorative blobs */}
        <div
          className="absolute top-10 -left-20 w-72 h-72 rounded-full opacity-20 blur-3xl"
          style={{ background: "var(--accent-coral)" }}
          aria-hidden="true"
        />
        <div
          className="absolute bottom-10 -right-20 w-96 h-96 rounded-full opacity-15 blur-3xl"
          style={{ background: "var(--accent-lavender)" }}
          aria-hidden="true"
        />
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full opacity-10 blur-3xl"
          style={{ background: "var(--accent-teal)" }}
          aria-hidden="true"
        />

        <div className="relative max-w-4xl mx-auto px-6">
          <div className="animate-fade-in-up">
            <span
              className="inline-block text-sm font-semibold tracking-wider uppercase px-4 py-2 rounded-full mb-6"
              style={{
                background: "rgba(255, 107, 74, 0.1)",
                color: "var(--accent-coral)",
              }}
            >
              📖 Your Diagnosis Guide
            </span>
          </div>
          <h1
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight mb-6 animate-fade-in-up delay-100"
            style={{
              fontFamily: "var(--font-display)",
              color: "var(--text-primary)",
            }}
          >
            Getting Diagnosed with{" "}
            <span className="gradient-text">ADHD</span>
          </h1>
          <p
            className="text-lg sm:text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed animate-fade-in-up delay-200"
            style={{ color: "var(--text-secondary)" }}
          >
            A comprehensive, step-by-step guide to understanding ADHD diagnosis.
            You deserve answers — here&apos;s how to get them.
          </p>

          {/* Quick navigation pills */}
          <div className="flex flex-wrap justify-center gap-3 mt-10 animate-fade-in-up delay-300">
            {[
              { label: "Signs & Symptoms", href: "#signs" },
              { label: "Diagnosis Process", href: "#process" },
              { label: "Find a Professional", href: "#professionals" },
              { label: "Myths vs Reality", href: "#myths" },
              { label: "After Diagnosis", href: "#after" },
            ].map((pill) => (
              <a
                key={pill.href}
                href={pill.href}
                className="glass-card hover-lift inline-flex items-center px-4 py-2 rounded-full text-sm font-semibold transition-all"
                style={{ color: "var(--text-primary)" }}
              >
                {pill.label}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ── "Do I Have ADHD?" Section ── */}
      <section
        id="signs"
        className="py-20 md:py-28"
        style={{
          background:
            "linear-gradient(180deg, transparent, rgba(255, 107, 74, 0.03), transparent)",
        }}
      >
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2
              className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4"
              style={{
                fontFamily: "var(--font-display)",
                color: "var(--text-primary)",
              }}
            >
              🤔 Do I Have <span className="gradient-text">ADHD</span>?
            </h2>
            <p
              className="text-lg max-w-2xl mx-auto"
              style={{ color: "var(--text-secondary)" }}
            >
              ADHD shows up differently in everyone. Here are common signs,
              organized by category.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {/* Inattention */}
            <div className="glass-card rounded-2xl p-6 animate-fade-in-up delay-100">
              <div
                className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-sm font-bold mb-5"
                style={{
                  background: "rgba(255, 107, 74, 0.1)",
                  color: "var(--accent-coral)",
                }}
              >
                🎯 Inattention Signs
              </div>
              <ul className="space-y-3">
                {inattentionSigns.map((sign) => (
                  <li
                    key={sign.text}
                    className="flex items-start gap-3 text-sm leading-relaxed"
                    style={{ color: "var(--text-primary)" }}
                  >
                    <span className="text-base flex-shrink-0 mt-0.5" aria-hidden="true">
                      {sign.emoji}
                    </span>
                    {sign.text}
                  </li>
                ))}
              </ul>
            </div>

            {/* Hyperactivity-Impulsivity */}
            <div className="glass-card rounded-2xl p-6 animate-fade-in-up delay-200">
              <div
                className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-sm font-bold mb-5"
                style={{
                  background: "rgba(29, 186, 160, 0.1)",
                  color: "var(--accent-teal)",
                }}
              >
                ⚡ Hyperactivity-Impulsivity Signs
              </div>
              <ul className="space-y-3">
                {hyperactivitySigns.map((sign) => (
                  <li
                    key={sign.text}
                    className="flex items-start gap-3 text-sm leading-relaxed"
                    style={{ color: "var(--text-primary)" }}
                  >
                    <span className="text-base flex-shrink-0 mt-0.5" aria-hidden="true">
                      {sign.emoji}
                    </span>
                    {sign.text}
                  </li>
                ))}
              </ul>
            </div>

            {/* Adult-Specific */}
            <div className="glass-card rounded-2xl p-6 animate-fade-in-up delay-300">
              <div
                className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-sm font-bold mb-5"
                style={{
                  background: "rgba(155, 143, 237, 0.1)",
                  color: "var(--accent-lavender)",
                }}
              >
                🧑 Adult-Specific Signs
              </div>
              <ul className="space-y-3">
                {adultSigns.map((sign) => (
                  <li
                    key={sign.text}
                    className="flex items-start gap-3 text-sm leading-relaxed"
                    style={{ color: "var(--text-primary)" }}
                  >
                    <span className="text-base flex-shrink-0 mt-0.5" aria-hidden="true">
                      {sign.emoji}
                    </span>
                    {sign.text}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Important Note */}
          <div
            className="glass-card rounded-2xl p-6 md:p-8 text-center max-w-3xl mx-auto animate-fade-in-up delay-500"
            style={{
              borderLeft: "4px solid var(--accent-amber)",
            }}
          >
            <p
              className="text-base md:text-lg font-medium leading-relaxed"
              style={{ color: "var(--text-primary)" }}
            >
              💡{" "}
              <strong>Important:</strong> Everyone experiences some of these
              symptoms sometimes. ADHD is diagnosed when symptoms are{" "}
              <strong>persistent</strong>, <strong>pervasive</strong> across
              settings, and <strong>significantly impair functioning</strong>.
              If these signs resonate deeply and have been present since
              childhood, it&apos;s worth exploring further.
            </p>
          </div>
        </div>
      </section>

      {/* ── The Diagnosis Process ── */}
      <section id="process" className="py-20 md:py-28">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2
              className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4"
              style={{
                fontFamily: "var(--font-display)",
                color: "var(--text-primary)",
              }}
            >
              🗺️ The Diagnosis{" "}
              <span className="gradient-text">Process</span>
            </h2>
            <p
              className="text-lg max-w-2xl mx-auto"
              style={{ color: "var(--text-secondary)" }}
            >
              Getting diagnosed can feel overwhelming. Here&apos;s what to
              expect, step by step.
            </p>
          </div>

          <div className="space-y-6">
            {diagnosisSteps.map((step) => (
              <div
                key={step.number}
                className="glass-card hover-lift rounded-2xl p-6 md:p-8 flex flex-col md:flex-row gap-6 animate-fade-in-up"
              >
                {/* Step number */}
                <div className="flex-shrink-0 flex items-start">
                  <div
                    className="w-14 h-14 rounded-2xl flex items-center justify-center text-xl font-extrabold text-white"
                    style={{ background: step.color }}
                  >
                    {step.number}
                  </div>
                </div>
                <div className="flex-1">
                  <h3
                    className="text-xl md:text-2xl font-bold mb-3 flex items-center gap-2"
                    style={{ color: "var(--text-primary)" }}
                  >
                    <span aria-hidden="true">{step.emoji}</span> {step.title}
                  </h3>
                  <p
                    className="text-base leading-relaxed"
                    style={{ color: "var(--text-secondary)" }}
                  >
                    {step.content}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Types of Professionals ── */}
      <section
        id="professionals"
        className="py-20 md:py-28"
        style={{
          background:
            "linear-gradient(180deg, transparent, rgba(155, 143, 237, 0.04), transparent)",
        }}
      >
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2
              className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4"
              style={{
                fontFamily: "var(--font-display)",
                color: "var(--text-primary)",
              }}
            >
              🧑‍⚕️ Who Can Diagnose{" "}
              <span className="gradient-text">ADHD</span>?
            </h2>
            <p
              className="text-lg max-w-2xl mx-auto"
              style={{ color: "var(--text-secondary)" }}
            >
              Several types of professionals can evaluate and diagnose ADHD.
              Here&apos;s what each brings to the table.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {professionals.map((pro) => (
              <div
                key={pro.title}
                className="glass-card hover-lift rounded-2xl p-6 flex flex-col animate-fade-in-up"
                style={{ borderTop: `3px solid ${pro.color}` }}
              >
                <div className="text-3xl mb-3" aria-hidden="true">
                  {pro.emoji}
                </div>
                <h3
                  className="text-xl font-bold mb-2"
                  style={{ color: "var(--text-primary)" }}
                >
                  {pro.title}
                </h3>
                <p
                  className="text-sm font-semibold mb-4"
                  style={{ color: pro.color }}
                >
                  {pro.canDo}
                </p>
                <div className="space-y-3 mt-auto">
                  <div>
                    <span
                      className="text-xs font-bold uppercase tracking-wider"
                      style={{ color: "var(--accent-teal)" }}
                    >
                      ✅ Pros
                    </span>
                    <p
                      className="text-sm mt-1 leading-relaxed"
                      style={{ color: "var(--text-secondary)" }}
                    >
                      {pro.pros}
                    </p>
                  </div>
                  <div>
                    <span
                      className="text-xs font-bold uppercase tracking-wider"
                      style={{ color: "var(--accent-coral)" }}
                    >
                      ⚠️ Considerations
                    </span>
                    <p
                      className="text-sm mt-1 leading-relaxed"
                      style={{ color: "var(--text-secondary)" }}
                    >
                      {pro.cons}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── What to Bring to Your Appointment ── */}
      <section className="py-20 md:py-28">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2
              className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4"
              style={{
                fontFamily: "var(--font-display)",
                color: "var(--text-primary)",
              }}
            >
              📋 What to{" "}
              <span className="gradient-text">Bring</span>
            </h2>
            <p
              className="text-lg max-w-2xl mx-auto"
              style={{ color: "var(--text-secondary)" }}
            >
              Being prepared helps you get the most out of your evaluation.
              Here&apos;s your appointment checklist.
            </p>
          </div>

          <div className="glass-card rounded-2xl p-6 md:p-10 animate-fade-in-up delay-100">
            <ul className="space-y-4">
              {checklistItems.map((item) => (
                <li
                  key={item.text}
                  className="flex items-start gap-4 p-3 rounded-xl transition-colors"
                  style={{ color: "var(--text-primary)" }}
                >
                  <span
                    className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 text-lg"
                    style={{ background: "rgba(255, 107, 74, 0.08)" }}
                    aria-hidden="true"
                  >
                    {item.emoji}
                  </span>
                  <span className="text-base leading-relaxed pt-1">
                    {item.text}
                  </span>
                </li>
              ))}
            </ul>
            <div
              className="mt-8 p-4 rounded-xl text-sm text-center"
              style={{
                background: "rgba(29, 186, 160, 0.06)",
                color: "var(--accent-teal)",
              }}
            >
              💡 <strong>Pro tip:</strong> Write things down before your
              appointment. ADHD can make it hard to remember everything in the
              moment!
            </div>
          </div>
        </div>
      </section>

      {/* ── Myths vs Reality ── */}
      <section
        id="myths"
        className="py-20 md:py-28"
        style={{
          background:
            "linear-gradient(180deg, transparent, rgba(255, 77, 141, 0.03), transparent)",
        }}
      >
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2
              className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4"
              style={{
                fontFamily: "var(--font-display)",
                color: "var(--text-primary)",
              }}
            >
              🚫 Myths vs{" "}
              <span className="gradient-text">Reality</span>
            </h2>
            <p
              className="text-lg max-w-2xl mx-auto"
              style={{ color: "var(--text-secondary)" }}
            >
              Misinformation about ADHD is everywhere. Let&apos;s set the record
              straight.
            </p>
          </div>

          <div className="space-y-6">
            {myths.map((item) => (
              <div
                key={item.myth}
                className="glass-card hover-lift rounded-2xl overflow-hidden animate-fade-in-up"
              >
                <div className="flex flex-col md:flex-row">
                  {/* Myth side */}
                  <div
                    className="md:w-2/5 p-6 md:p-8 flex items-center gap-4"
                    style={{
                      background: "rgba(255, 107, 74, 0.06)",
                    }}
                  >
                    <span className="text-3xl flex-shrink-0" aria-hidden="true">
                      {item.emoji}
                    </span>
                    <div>
                      <span
                        className="text-xs font-bold uppercase tracking-wider"
                        style={{ color: "var(--accent-coral)" }}
                      >
                        🚫 Myth
                      </span>
                      <p
                        className="text-lg font-bold mt-1"
                        style={{ color: "var(--text-primary)" }}
                      >
                        &ldquo;{item.myth}&rdquo;
                      </p>
                    </div>
                  </div>
                  {/* Reality side */}
                  <div className="md:w-3/5 p-6 md:p-8 flex items-center">
                    <div>
                      <span
                        className="text-xs font-bold uppercase tracking-wider"
                        style={{ color: "var(--accent-teal)" }}
                      >
                        ✅ Reality
                      </span>
                      <p
                        className="text-sm md:text-base mt-2 leading-relaxed"
                        style={{ color: "var(--text-secondary)" }}
                      >
                        {item.reality}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── After Diagnosis ── */}
      <section id="after" className="py-20 md:py-28">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2
              className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4"
              style={{
                fontFamily: "var(--font-display)",
                color: "var(--text-primary)",
              }}
            >
              🌱 After Your{" "}
              <span className="gradient-text">Diagnosis</span>
            </h2>
            <p
              className="text-lg max-w-2xl mx-auto"
              style={{ color: "var(--text-secondary)" }}
            >
              A diagnosis is a beginning, not an ending. Here are the paths
              forward.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {treatmentOptions.map((option) => (
              <div
                key={option.title}
                className="glass-card hover-lift rounded-2xl p-6 animate-fade-in-up"
                style={{ borderLeft: `4px solid ${option.color}` }}
              >
                <div className="text-3xl mb-3" aria-hidden="true">
                  {option.emoji}
                </div>
                <h3
                  className="text-lg font-bold mb-2"
                  style={{ color: "var(--text-primary)" }}
                >
                  {option.title}
                </h3>
                <p
                  className="text-sm leading-relaxed"
                  style={{ color: "var(--text-secondary)" }}
                >
                  {option.description}
                </p>
              </div>
            ))}
          </div>

          {/* Cross-links */}
          <div className="grid sm:grid-cols-2 gap-6 max-w-3xl mx-auto animate-fade-in-up delay-300">
            <Link
              href="/resources"
              className="glass-card hover-lift rounded-2xl p-6 text-center transition-all group"
              style={{ borderBottom: "3px solid var(--accent-coral)" }}
            >
              <span className="text-3xl block mb-2" aria-hidden="true">
                🛠️
              </span>
              <span
                className="font-bold text-lg block"
                style={{ color: "var(--text-primary)" }}
              >
                Explore Practical Strategies
              </span>
              <span
                className="text-sm mt-1 block"
                style={{ color: "var(--text-secondary)" }}
              >
                Tips and tools for daily life →
              </span>
            </Link>
            <Link
              href="/"
              className="glass-card hover-lift rounded-2xl p-6 text-center transition-all group"
              style={{ borderBottom: "3px solid var(--accent-teal)" }}
            >
              <span className="text-3xl block mb-2" aria-hidden="true">
                🤝
              </span>
              <span
                className="font-bold text-lg block"
                style={{ color: "var(--text-primary)" }}
              >
                Join the Community
              </span>
              <span
                className="text-sm mt-1 block"
                style={{ color: "var(--text-secondary)" }}
              >
                Connect with others who understand →
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* ── Finding Help / Resources ── */}
      <section
        className="py-20 md:py-28"
        style={{
          background:
            "linear-gradient(180deg, transparent, rgba(29, 186, 160, 0.04), transparent)",
        }}
      >
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2
              className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4"
              style={{
                fontFamily: "var(--font-display)",
                color: "var(--text-primary)",
              }}
            >
              🔎 Finding{" "}
              <span className="gradient-text">Help</span>
            </h2>
            <p
              className="text-lg max-w-2xl mx-auto"
              style={{ color: "var(--text-secondary)" }}
            >
              Practical tips for finding the right professional and making it
              affordable.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            <div className="glass-card rounded-2xl p-6 animate-fade-in-up delay-100">
              <h3
                className="font-bold text-lg mb-3 flex items-center gap-2"
                style={{ color: "var(--text-primary)" }}
              >
                <span aria-hidden="true">🔍</span> Finding ADHD Specialists
              </h3>
              <ul
                className="space-y-2 text-sm leading-relaxed"
                style={{ color: "var(--text-secondary)" }}
              >
                <li>• Ask your PCP for referrals to ADHD-experienced clinicians</li>
                <li>• Search Psychology Today&apos;s therapist directory (filter by ADHD)</li>
                <li>• Contact your insurance company for in-network providers</li>
                <li>• Check CHADD&apos;s resource directory at chadd.org</li>
                <li>• Ask in ADHD community groups for local recommendations</li>
              </ul>
            </div>

            <div className="glass-card rounded-2xl p-6 animate-fade-in-up delay-200">
              <h3
                className="font-bold text-lg mb-3 flex items-center gap-2"
                style={{ color: "var(--text-primary)" }}
              >
                <span aria-hidden="true">🏥</span> Insurance Tips
              </h3>
              <ul
                className="space-y-2 text-sm leading-relaxed"
                style={{ color: "var(--text-secondary)" }}
              >
                <li>• Call your insurance to understand mental health coverage</li>
                <li>• Ask about out-of-network reimbursement rates</li>
                <li>• Request a pre-authorization if required for testing</li>
                <li>• Keep all receipts — evaluations may count toward your deductible</li>
                <li>• Ask providers about superbills for out-of-network claims</li>
              </ul>
            </div>

            <div className="glass-card rounded-2xl p-6 animate-fade-in-up delay-300">
              <h3
                className="font-bold text-lg mb-3 flex items-center gap-2"
                style={{ color: "var(--text-primary)" }}
              >
                <span aria-hidden="true">💻</span> Telehealth Options
              </h3>
              <ul
                className="space-y-2 text-sm leading-relaxed"
                style={{ color: "var(--text-secondary)" }}
              >
                <li>• Many providers now offer virtual ADHD evaluations</li>
                <li>• Telehealth can reduce wait times significantly</li>
                <li>• Great option if you live in an area with few specialists</li>
                <li>• Check that the provider is licensed in your state</li>
                <li>• Some telehealth services specialize specifically in ADHD</li>
              </ul>
            </div>

            <div className="glass-card rounded-2xl p-6 animate-fade-in-up delay-500">
              <h3
                className="font-bold text-lg mb-3 flex items-center gap-2"
                style={{ color: "var(--text-primary)" }}
              >
                <span aria-hidden="true">💚</span> Affordable Options
              </h3>
              <ul
                className="space-y-2 text-sm leading-relaxed"
                style={{ color: "var(--text-secondary)" }}
              >
                <li>• University psychology clinics often offer sliding-scale evaluations</li>
                <li>• Community mental health centers provide lower-cost services</li>
                <li>• Some providers offer payment plans for evaluations</li>
                <li>• Open Path Collective offers affordable therapy sessions</li>
                <li>• Check if your employer&apos;s EAP covers ADHD evaluation</li>
              </ul>
            </div>
          </div>

          <div
            className="glass-card rounded-2xl p-6 md:p-8 text-center max-w-3xl mx-auto mt-10 animate-fade-in-up delay-500"
            style={{
              borderLeft: "4px solid var(--accent-teal)",
            }}
          >
            <p
              className="text-base md:text-lg font-medium leading-relaxed"
              style={{ color: "var(--text-primary)" }}
            >
              🙏{" "}
              <strong>A note on self-diagnosis:</strong> While recognizing your
              own patterns is an important first step, a professional evaluation
              ensures you get an accurate diagnosis and the right support.
              Many conditions share symptoms with ADHD — a clinician can help
              sort it all out.
            </p>
          </div>
        </div>
      </section>

      {/* ── Disclaimer ── */}
      <section className="py-12 md:py-16">
        <div className="max-w-3xl mx-auto px-6">
          <div
            className="rounded-2xl p-6 md:p-8 text-center"
            style={{
              background: "rgba(107, 104, 128, 0.06)",
              border: "1px solid rgba(107, 104, 128, 0.12)",
            }}
          >
            <p
              className="text-sm leading-relaxed"
              style={{ color: "var(--text-secondary)" }}
            >
              ⚕️{" "}
              <strong>Important Disclaimer:</strong> This page provides
              educational information only. It is not a substitute for
              professional medical advice, diagnosis, or treatment. Always seek
              the advice of a qualified healthcare provider with any questions
              you may have regarding ADHD or any other medical condition. If
              you&apos;re in crisis, please contact the{" "}
              <strong>988 Suicide &amp; Crisis Lifeline</strong> by calling or
              texting <strong>988</strong>.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
