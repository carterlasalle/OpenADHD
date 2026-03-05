"use client";

import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";

/* -- Data ----------------------------------------------------------------- */

const symptomCards = [
  {
    title: "Inattention",
    emoji: "🎯",
    color: "var(--brand)",
    items: [
      "Difficulty sustaining focus on tasks or conversations",
      "Easily distracted by unrelated thoughts or stimuli",
      "Frequently losing everyday items (keys, phone, wallet)",
      "Forgetfulness in daily activities and appointments",
      "Difficulty organizing tasks, time, and belongings",
      "Avoiding tasks that require sustained mental effort",
      "Not following through on instructions or finishing projects",
    ],
  },
  {
    title: "Hyperactivity & Impulsivity",
    emoji: "⚡",
    color: "var(--teal)",
    items: [
      "Fidgeting, tapping, or squirming when seated",
      "Leaving your seat when staying seated is expected",
      "Talking excessively or blurting out answers",
      "Interrupting others or intruding on conversations",
      "Difficulty waiting your turn",
      "Feeling restless or always \"on the go\"",
      "Acting without thinking about consequences",
    ],
  },
  {
    title: "Adult-Specific Signs",
    emoji: "🧠",
    color: "var(--purple)",
    items: [
      "Chronic lateness and time blindness",
      "Difficulty managing finances and impulse spending",
      "Relationship challenges from forgetfulness or emotional reactivity",
      "Career difficulties — underperforming despite high capability",
      "Emotional dysregulation — intense reactions, rejection sensitivity",
      "Low self-esteem from years of struggling without understanding why",
      "Burnout cycles — overcommitting, then crashing",
    ],
  },
];

const diagnosisSteps = [
  {
    number: 1,
    title: "Recognize the Signs",
    color: "var(--brand)",
    description:
      "Start by reflecting on your experiences. Do the symptoms above resonate? Have they been present since childhood? Journaling your struggles and patterns can be incredibly valuable. Online screeners like the ASRS can help you articulate what you’re experiencing, but they’re a starting point — not a diagnosis.",
  },
  {
    number: 2,
    title: "Talk to Your Doctor",
    color: "var(--teal)",
    description:
      "Your primary care physician is often the best first step. Share your concerns openly — bring notes if that helps. They can rule out other conditions (thyroid issues, sleep disorders, anxiety) that mimic ADHD symptoms and refer you to a specialist.",
  },
  {
    number: 3,
    title: "Find a Specialist",
    color: "var(--amber)",
    description:
      "A psychiatrist, psychologist, or neuropsychologist experienced with ADHD will conduct the most thorough evaluation. Ask about their experience with adult ADHD specifically. Many now offer telehealth appointments, making access easier.",
  },
  {
    number: 4,
    title: "The Evaluation",
    color: "var(--purple)",
    description:
      "A comprehensive ADHD evaluation typically includes clinical interviews, standardized rating scales, a review of your history (school, work, relationships), and sometimes neuropsychological testing. It usually takes 1–3 sessions. There’s no single test for ADHD — diagnosis is based on a pattern of symptoms.",
  },
  {
    number: 5,
    title: "Getting Results",
    color: "var(--brand)",
    description:
      "Your clinician will explain whether you meet the criteria for ADHD and which presentation (Inattentive, Hyperactive-Impulsive, or Combined). They may also identify co-occurring conditions like anxiety, depression, or learning disabilities. This is a moment of understanding, not a label.",
  },
  {
    number: 6,
    title: "Treatment Planning",
    color: "var(--teal)",
    description:
      "Together with your clinician, you’ll build a treatment plan tailored to your life. This might include medication, therapy, coaching, lifestyle changes, or a combination. The goal is to find what works for your brain — and it’s okay if that takes some experimenting.",
  },
];

const professionals = [
  {
    emoji: "🩺",
    title: "Psychiatrist",
    description:
      "Medical doctor specializing in mental health. Can diagnose ADHD and prescribe medication.",
    differentiator: "Best for: medication management + diagnosis",
  },
  {
    emoji: "🧠",
    title: "Psychologist",
    description:
      "Doctoral-level mental health professional who can diagnose ADHD through comprehensive testing and provide therapy.",
    differentiator: "Best for: thorough psychological testing",
  },
  {
    emoji: "🔬",
    title: "Neuropsychologist",
    description:
      "Specializes in how brain function relates to behavior. Provides the most in-depth cognitive testing available.",
    differentiator: "Best for: complex cases or ruling out other conditions",
  },
  {
    emoji: "👩‍⚕️",
    title: "Primary Care Physician",
    description:
      "Your regular doctor can screen for ADHD, rule out medical causes, and often initiate treatment or referrals.",
    differentiator: "Best for: first step and general health screening",
  },
  {
    emoji: "💊",
    title: "Psychiatric Nurse Practitioner",
    description:
      "Advanced practice nurse with prescribing authority. Can diagnose and manage ADHD medication, often with shorter wait times.",
    differentiator: "Best for: accessible medication management",
  },
];

const checklistItems = [
  { emoji: "📝", text: "A list of symptoms you’ve noticed and when they occur" },
  { emoji: "🏫", text: "School records, report cards, or old teacher comments" },
  { emoji: "💼", text: "Work performance reviews or feedback you’ve received" },
  { emoji: "👨‍👩‍👧", text: "Family history of ADHD, anxiety, depression, or learning disabilities" },
  { emoji: "💊", text: "Current medications, supplements, and caffeine intake" },
  { emoji: "📖", text: "Specific examples of how symptoms affect your daily life" },
  { emoji: "❓", text: "Questions you want to ask your clinician" },
];

const myths = [
  {
    myth: "ADHD is only a childhood condition.",
    reality:
      "ADHD is a lifelong neurodevelopmental condition. About 60% of children with ADHD continue to have significant symptoms as adults. Many people aren’t diagnosed until adulthood.",
  },
  {
    myth: "If you can focus on video games, you don’t have ADHD.",
    reality:
      "ADHD isn’t a lack of focus — it’s difficulty regulating focus. Hyperfocus on stimulating activities is actually a hallmark of ADHD. The challenge is directing attention to less stimulating tasks.",
  },
  {
    myth: "ADHD isn’t a real medical condition.",
    reality:
      "ADHD is one of the most well-researched conditions in psychiatry. Brain imaging studies show measurable differences in brain structure, function, and neurotransmitter activity. It’s recognized by every major medical organization worldwide.",
  },
  {
    myth: "You must be hyperactive to have ADHD.",
    reality:
      "The Inattentive presentation of ADHD involves no hyperactivity at all. Many people — especially women and girls — are missed because they don’t fit the ‘bouncing off the walls’ stereotype.",
  },
  {
    myth: "ADHD is caused by bad parenting.",
    reality:
      "ADHD is primarily genetic and neurological. Studies of twins show heritability of about 74%. Parenting style does not cause ADHD, though supportive environments can help manage symptoms.",
  },
  {
    myth: "Everyone is a little ADHD these days.",
    reality:
      "While everyone can be forgetful or distracted sometimes, ADHD involves persistent, pervasive symptoms that significantly impair daily functioning across multiple areas of life. It’s not a personality quirk — it’s a neurological difference.",
  },
];

const treatmentOptions = [
  {
    emoji: "💊",
    title: "Medication",
    description:
      "Stimulant and non-stimulant medications can significantly improve focus, impulse control, and executive function for many people with ADHD.",
    color: "var(--brand)",
  },
  {
    emoji: "🗣️",
    title: "CBT / Therapy",
    description:
      "Cognitive Behavioral Therapy helps build coping strategies, challenge negative thought patterns, and manage the emotional side of ADHD.",
    color: "var(--teal)",
  },
  {
    emoji: "🎯",
    title: "ADHD Coaching",
    description:
      "A coach helps you set goals, build systems, and stay accountable. It’s practical, action-oriented support for daily life.",
    color: "var(--amber)",
  },
  {
    emoji: "🏃",
    title: "Lifestyle Changes",
    description:
      "Exercise, sleep hygiene, nutrition, and mindfulness practices can all meaningfully reduce ADHD symptoms and improve well-being.",
    color: "var(--purple)",
  },
  {
    emoji: "🤝",
    title: "Support Groups",
    description:
      "Connecting with others who understand your experience reduces isolation and provides practical wisdom from people who’ve been there.",
    color: "var(--purple-soft)",
  },
];

/* -- Page ----------------------------------------------------------------- */

export default function DiagnosisPage() {
  return (
    <>
      {/* ================================================================
          1. HERO
          ================================================================ */}
      <section className="relative overflow-hidden pt-28 pb-20 md:pt-40 md:pb-28">
        <div
          aria-hidden="true"
          className="blob -top-40 -left-40 h-[480px] w-[480px] opacity-25"
          style={{ background: "var(--brand)" }}
        />
        <div
          aria-hidden="true"
          className="blob top-20 -right-24 h-[400px] w-[400px] opacity-20"
          style={{ background: "var(--purple)" }}
        />
        <div
          aria-hidden="true"
          className="blob -bottom-20 left-1/3 h-[340px] w-[340px] opacity-15"
          style={{ background: "var(--teal)" }}
        />

        <div className="relative mx-auto max-w-4xl px-6 text-center">
          <ScrollReveal direction="up" duration={700}>
            <h1 className="text-4xl font-extrabold leading-tight tracking-tight md:text-6xl lg:text-7xl">
              Getting Diagnosed
              <br />
              <span className="gradient-text">with ADHD</span>
            </h1>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={150}>
            <p className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-ink-muted md:text-xl">
              Wondering if you have ADHD? You&apos;re not alone, and seeking
              answers is brave. This guide walks you through what to look for,
              how the process works, and what to expect &mdash; one step at a
              time.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* ================================================================
          2. SIGNS & SYMPTOMS
          ================================================================ */}
      <section className="bg-surface-alt py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-6">
          <ScrollReveal direction="up">
            <h2 className="text-center text-3xl font-extrabold tracking-tight md:text-5xl">
              Do I Have ADHD?
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-center text-ink-muted">
              ADHD looks different for everyone. Here are common signs grouped
              into three categories. You don&apos;t need all of them &mdash; but
              a persistent pattern across settings is key.
            </p>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={200}>
            <div className="mt-14 grid gap-8 md:grid-cols-3">
              {symptomCards.map((card) => (
                <div
                  key={card.title}
                  className="card p-6"
                  style={{ borderLeft: `4px solid ${card.color}` }}
                >
                  <div className="mb-4 flex items-center gap-3">
                    <span className="text-3xl" aria-hidden="true">
                      {card.emoji}
                    </span>
                    <h3 className="text-xl font-bold">{card.title}</h3>
                  </div>
                  <ul className="space-y-2 text-[0.95rem] leading-relaxed text-ink-muted">
                    {card.items.map((item) => (
                      <li key={item} className="flex gap-2">
                        <span
                          className="mt-1.5 block h-1.5 w-1.5 flex-shrink-0 rounded-full"
                          style={{ background: card.color }}
                          aria-hidden="true"
                        />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={100}>
            <div
              className="card mx-auto mt-10 max-w-3xl border-l-4 px-6 py-5"
              style={{ borderLeftColor: "var(--amber)" }}
            >
              <p className="text-[0.95rem] leading-relaxed text-ink-muted">
                <strong className="text-ink">Important:</strong> Having some of
                these symptoms doesn&apos;t automatically mean you have ADHD.
                Many of these overlap with anxiety, depression, sleep
                deprivation, and other conditions. A professional evaluation is
                the only way to get a reliable diagnosis.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ================================================================
          3. DIAGNOSIS JOURNEY
          ================================================================ */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-3xl px-6">
          <ScrollReveal direction="up">
            <h2 className="text-center text-3xl font-extrabold tracking-tight md:text-5xl">
              The Diagnosis Journey
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-center text-ink-muted">
              There&apos;s no single test for ADHD. Diagnosis is a process
              &mdash; and understanding the steps can make it feel much less
              overwhelming.
            </p>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={200}>
            <div className="relative mt-14">
              {/* Vertical connector line */}
              <div
                aria-hidden="true"
                className="absolute left-6 top-0 hidden h-full w-0.5 md:block"
                style={{ background: "var(--surface-alt)" }}
              />

              <div className="space-y-6">
                {diagnosisSteps.map((step) => (
                  <div key={step.number} className="relative flex gap-5">
                    <div
                      className="relative z-10 flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full text-lg font-bold text-white"
                      style={{ background: step.color }}
                    >
                      {step.number}
                    </div>

                    <div className="card flex-1 p-5">
                      <h3 className="text-lg font-bold">{step.title}</h3>
                      <p className="mt-2 text-[0.95rem] leading-relaxed text-ink-muted">
                        {step.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ================================================================
          4. TYPES OF PROFESSIONALS
          ================================================================ */}
      <section className="bg-surface-alt py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-6">
          <ScrollReveal direction="up">
            <h2 className="text-center text-3xl font-extrabold tracking-tight md:text-5xl">
              Who Can Diagnose ADHD?
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-center text-ink-muted">
              Several types of professionals can evaluate and diagnose ADHD. The
              right fit depends on your needs, budget, and availability.
            </p>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={200}>
            <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {professionals.map((pro) => (
                <div key={pro.title} className="card p-6">
                  <span className="text-3xl" aria-hidden="true">
                    {pro.emoji}
                  </span>
                  <h3 className="mt-3 text-lg font-bold">{pro.title}</h3>
                  <p className="mt-2 text-[0.93rem] leading-relaxed text-ink-muted">
                    {pro.description}
                  </p>
                  <p className="mt-3 text-sm font-semibold text-ink-faint">
                    {pro.differentiator}
                  </p>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ================================================================
          5. WHAT TO BRING
          ================================================================ */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-3xl px-6">
          <ScrollReveal direction="up">
            <h2 className="text-center text-3xl font-extrabold tracking-tight md:text-5xl">
              What to Bring to Your Appointment
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-center text-ink-muted">
              Being prepared helps your clinician understand the full picture.
              Don&apos;t worry about being perfect &mdash; any information
              helps.
            </p>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={200}>
            <div className="card mt-12 p-6 md:p-8">
              <ul className="space-y-4">
                {checklistItems.map((item) => (
                  <li key={item.text} className="flex items-start gap-3">
                    <span
                      className="mt-0.5 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full text-sm"
                      style={{
                        background: "var(--teal)",
                        color: "white",
                      }}
                      aria-hidden="true"
                    >
                      ✓
                    </span>
                    <span className="text-[0.95rem] leading-relaxed text-ink-muted">
                      {item.text}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ================================================================
          6. MYTHS VS REALITY
          ================================================================ */}
      <section
        className="py-20 md:py-28"
        style={{ background: "var(--surface-inv)", color: "white" }}
      >
        <div className="mx-auto max-w-5xl px-6">
          <ScrollReveal direction="up">
            <h2 className="text-center text-3xl font-extrabold tracking-tight md:text-5xl">
              Myths vs. Reality
            </h2>
            <p
              className="mx-auto mt-4 max-w-2xl text-center"
              style={{ color: "rgba(255,255,255,0.6)" }}
            >
              Misinformation keeps people from getting help. Let&apos;s set the
              record straight.
            </p>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={200}>
            <div className="mt-14 grid gap-6 md:grid-cols-2">
              {myths.map((item) => (
                <div
                  key={item.myth}
                  className="rounded-2xl p-6"
                  style={{ background: "var(--surface-inv2)" }}
                >
                  <p className="font-bold" style={{ color: "var(--brand)" }}>
                    🚫 Myth: &ldquo;{item.myth}&rdquo;
                  </p>
                  <p
                    className="mt-3 text-[0.93rem] leading-relaxed"
                    style={{ color: "rgba(255,255,255,0.75)" }}
                  >
                    <strong style={{ color: "var(--teal)" }}>Reality:</strong>{" "}
                    {item.reality}
                  </p>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ================================================================
          7. AFTER DIAGNOSIS
          ================================================================ */}
      <section className="bg-surface-alt py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-6">
          <ScrollReveal direction="up">
            <h2 className="text-center text-3xl font-extrabold tracking-tight md:text-5xl">
              After Diagnosis: What&apos;s Next?
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-center text-ink-muted">
              A diagnosis is the beginning, not the end. Treatment is personal
              &mdash; there&apos;s no one-size-fits-all approach. Here are the
              most common options.
            </p>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={200}>
            <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {treatmentOptions.map((option) => (
                <div
                  key={option.title}
                  className="card p-6"
                  style={{ borderTop: `3px solid ${option.color}` }}
                >
                  <span className="text-3xl" aria-hidden="true">
                    {option.emoji}
                  </span>
                  <h3 className="mt-3 text-lg font-bold">{option.title}</h3>
                  <p className="mt-2 text-[0.93rem] leading-relaxed text-ink-muted">
                    {option.description}
                  </p>
                </div>
              ))}
            </div>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={100}>
            <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link
                href="/tools"
                className="inline-flex h-12 items-center gap-2 rounded-xl bg-brand px-7 text-base font-bold text-white shadow-lg shadow-brand/25 transition-transform hover:scale-105"
              >
                Explore Tools & Strategies
                <span aria-hidden="true">→</span>
              </Link>
              <Link
                href="/community"
                className="inline-flex h-12 items-center gap-2 rounded-xl border-2 border-ink px-7 text-base font-bold text-ink transition-colors hover:bg-ink hover:text-white"
              >
                Join the Community
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ================================================================
          8. MEDICAL DISCLAIMER
          ================================================================ */}
      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-3xl px-6">
          <ScrollReveal direction="up">
            <div
              className="card border-l-4 px-6 py-5"
              style={{ borderLeftColor: "var(--ink-faint)" }}
            >
              <p className="text-sm font-semibold uppercase tracking-wide text-ink-faint">
                Medical Disclaimer
              </p>
              <p className="mt-2 text-[0.9rem] leading-relaxed text-ink-muted">
                The information on this page is for educational purposes only
                and is not a substitute for professional medical advice,
                diagnosis, or treatment. Always seek the advice of a qualified
                healthcare provider with any questions you may have regarding
                ADHD or any other medical condition. Never disregard professional
                advice or delay seeking it because of something you read here.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
