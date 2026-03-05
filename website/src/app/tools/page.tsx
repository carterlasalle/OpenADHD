"use client";

import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";

/* ==========================================================================
   Tools & Strategies – Neuro-Pop redesign.
   Uses ScrollReveal, card class, and the design-system color tokens.
   ========================================================================== */

/* --------------------------------------------------------------------------
   Data
   -------------------------------------------------------------------------- */

interface Tool {
  emoji: string;
  name: string;
  description: string;
  why: string;
  apps?: string[];
}

interface Category {
  id: string;
  title: string;
  color: string;
  tools: Tool[];
}

const categories: Category[] = [
  {
    id: "time-management",
    title: "Time Management",
    color: "var(--teal)",
    tools: [
      {
        emoji: "🍅",
        name: "Pomodoro Technique",
        description:
          "Work 25 minutes, break 5 minutes, repeat. After four cycles take a longer break. A timer keeps you honest.",
        why: "ADHD brains thrive in short bursts. Built-in breaks prevent burnout and let your dopamine system reset.",
        apps: ["Forest", "Focus Keeper", "Pomofocus"],
      },
      {
        emoji: "📅",
        name: "Time Blocking",
        description:
          "Assign every hour a specific task or category. Block focus time, admin time, breaks, and transitions.",
        why: "Eliminates 'what should I do next?' paralysis by removing the executive-function tax of constant decisions.",
        apps: ["Google Calendar", "Fantastical", "Structured"],
      },
      {
        emoji: "⏳",
        name: "Visual Timers",
        description:
          "Timers that show time passing visually — a shrinking disc or sand running out. Place them where you work.",
        why: "Combats 'time blindness' — the genuine difficulty sensing how much time has passed — by making time visible.",
        apps: ["Time Timer", "Visual Timer app"],
      },
      {
        emoji: "🔔",
        name: "Digital Calendars",
        description:
          "Use multiple alerts — 1 day, 1 hour, 15 minutes before events. Color-code categories for at-a-glance scanning.",
        why: "Multiple alerts act as a safety net. Miss the first one? The next one catches you.",
        apps: ["Google Calendar", "Apple Calendar", "Outlook"],
      },
      {
        emoji: "📢",
        name: "Alarms & Reminders",
        description:
          "Set recurring alarms for daily tasks — medication, meals, bedtime. Use voice assistants for hands-free reminders.",
        why: "Offloads remembering from your overloaded working memory to an external system that never forgets.",
        apps: ["Siri", "Google Assistant", "Alexa"],
      },
    ],
  },
  {
    id: "organization",
    title: "Organization",
    color: "var(--brand)",
    tools: [
      {
        emoji: "🧠",
        name: "Second Brain",
        description:
          "Capture everything — ideas, tasks, links — in one digital system. Your brain is for having ideas, not holding them.",
        why: "Externalizing thoughts into a trusted system reduces anxiety and frees up mental bandwidth.",
        apps: ["Notion", "Obsidian", "Apple Notes"],
      },
      {
        emoji: "✅",
        name: "Task Management",
        description:
          "A dedicated task manager with due dates, priorities, and projects. Break big tasks into small, concrete action steps.",
        why: "A manageable list of next actions is far less overwhelming than a vague to-do list.",
        apps: ["Todoist", "Things 3", "Microsoft To-Do"],
      },
      {
        emoji: "🏷️",
        name: "Physical Organization",
        description:
          "Label everything. Use clear containers. Give every item a designated home and return it after each use.",
        why: "ADHD follows 'out of sight, out of mind.' Clear containers and labels keep things visible.",
        apps: ["Label makers", "Clear bins", "Drawer organizers"],
      },
      {
        emoji: "📓",
        name: "Bullet Journaling",
        description:
          "Rapid logging with short bullets for tasks (•), events (○), and notes (–). Migrate unfinished tasks forward. Keep it simple.",
        why: "The migration step forces you to decide if a task still matters. Handwriting improves retention.",
        apps: ["Leuchtturm1917", "Archer & Olive"],
      },
      {
        emoji: "📋",
        name: "Whiteboard",
        description:
          "Keep a whiteboard for daily priorities, quick lists, and brain dumps. The impermanence makes it less intimidating.",
        why: "Large-format, visual task management you can glance at. Being erasable removes the pressure of 'messing it up.'",
        apps: ["Dry-erase board", "Glass board", "Rocketbook"],
      },
    ],
  },
  {
    id: "focus",
    title: "Focus",
    color: "var(--purple)",
    tools: [
      {
        emoji: "🎧",
        name: "Noise-Cancelling Headphones",
        description:
          "Block distracting sounds with active noise cancellation. Pair with brown noise or white noise for a steady audio environment.",
        why: "ADHD brains are extra sensitive to environmental stimuli. Removing auditory distractions boosts focus dramatically.",
        apps: ["Sony WH-1000XM5", "AirPods Pro", "Bose QC"],
      },
      {
        emoji: "🚫",
        name: "Website Blockers",
        description:
          "Block distracting sites and apps during focus sessions. Some tools offer 'nuclear mode' that can't be overridden.",
        why: "Removes the option of dopamine-rich distractions entirely so you don't have to rely on willpower.",
        apps: ["Cold Turkey", "Freedom", "StayFocusd"],
      },
      {
        emoji: "🎵",
        name: "Focus Music",
        description:
          "Music designed for focus — no lyrics, steady rhythms. Binaural beats and lo-fi hip hop are popular in the ADHD community.",
        why: "The right background audio fills the 'boredom gap' that leads to task-switching without becoming a distraction.",
        apps: ["Brain.fm", "Endel", "Lo-Fi playlists"],
      },
      {
        emoji: "👥",
        name: "Body Doubling",
        description:
          "Work alongside another person — in person or virtually. You don't need to interact; their presence keeps you on task.",
        why: "Gentle social accountability. One of the most effective and underrated ADHD strategies.",
        apps: ["Focusmate", "Flown", "Discord study rooms"],
      },
      {
        emoji: "🏠",
        name: "Environment Design",
        description:
          "Minimize visual clutter, keep only current-task materials visible, use good lighting, and maintain a comfortable temperature.",
        why: "A cluttered space means a cluttered mind. Designing your space for focus reduces the friction to start working.",
      },
    ],
  },
  {
    id: "emotional-regulation",
    title: "Emotional Regulation",
    color: "var(--amber)",
    tools: [
      {
        emoji: "🧘",
        name: "Meditation",
        description:
          "Start with short, guided sessions (3–5 min). Look for ADHD-specific programs that treat wandering thoughts as normal.",
        why: "Strengthens the 'noticing' muscle — catching yourself drifting and gently returning. Improves impulse control over time.",
        apps: ["Headspace", "Calm", "Insight Timer"],
      },
      {
        emoji: "📝",
        name: "Journaling",
        description:
          "Brain dumps, gratitude lists (3 things daily), or CBT-style journals to identify and challenge thought patterns.",
        why: "Externalizing emotions reduces their intensity. Writing forces you to slow down and process feelings.",
      },
      {
        emoji: "🏃",
        name: "Exercise",
        description:
          "Aim for 20–30 minutes of cardio most days. Running, swimming, cycling, dancing — even a 10-minute walk helps.",
        why: "Exercise boosts dopamine and norepinephrine immediately — like a dose of ADHD medication. Strongly evidence-backed.",
      },
      {
        emoji: "🌬️",
        name: "Breathing Techniques",
        description:
          "Box breathing (4-4-4-4) or the 4-7-8 technique. Use during overwhelm or emotional flooding for a quick reset.",
        why: "Activates the parasympathetic nervous system and calms the fight-or-flight response in under 2 minutes.",
      },
      {
        emoji: "📖",
        name: "CBT",
        description:
          "Cognitive Behavioral Therapy workbooks for adult ADHD. Structured, short exercises you can do on your own.",
        why: "Helps reframe negative thought patterns like 'I'm lazy' or 'I'll never get this right.' Evidence-based and practical.",
        apps: ["ADHD Workbook for Adults", "Mastering Your Adult ADHD"],
      },
    ],
  },
  {
    id: "study-learning",
    title: "Study & Learning",
    color: "var(--teal)",
    tools: [
      {
        emoji: "🔁",
        name: "Spaced Repetition",
        description:
          "Review information at increasing intervals — 1, 3, 7, 14 days. Use flashcard apps that automate the scheduling.",
        why: "Fights the forgetting curve efficiently. Builds durable long-term memory with less total study time than cramming.",
        apps: ["Anki", "Quizlet", "RemNote"],
      },
      {
        emoji: "🤔",
        name: "Active Recall",
        description:
          "Test yourself instead of re-reading. Close the book and recall what you learned. Teach the material to someone else.",
        why: "Active recall forces your brain to work harder, which is exactly what creates lasting learning.",
      },
      {
        emoji: "🔊",
        name: "Text-to-Speech",
        description:
          "Have articles and textbooks read aloud. Pair listening with reading for dual-channel processing.",
        why: "Engaging auditory and visual channels simultaneously improves comprehension and makes reading less effortful.",
        apps: ["NaturalReader", "Voice Dream", "Built-in OS tools"],
      },
      {
        emoji: "🗺️",
        name: "Mind Mapping",
        description:
          "Start with a central idea and branch out visually. Use colors, images, and connections between concepts.",
        why: "ADHD brains think in webs, not lists. Mind maps match your natural thinking style.",
        apps: ["MindMeister", "XMind", "Miro"],
      },
      {
        emoji: "🤝",
        name: "Accountability Partners",
        description:
          "Partner with someone who checks in on your progress. Set specific goals and report back regularly.",
        why: "External accountability compensates for internal motivation challenges. Gentle, positive pressure works.",
        apps: ["Focusmate", "Study groups", "ADHD coaching"],
      },
    ],
  },
  {
    id: "daily-life",
    title: "Daily Life",
    color: "var(--brand)",
    tools: [
      {
        emoji: "💊",
        name: "Pill Organizers",
        description:
          "A 7-day AM/PM organizer filled every Sunday. Pair with a phone alarm labeled with the medication name.",
        why: "Gives you a visual check — 'Did I take it today?' — without relying on memory.",
      },
      {
        emoji: "📍",
        name: "Tile / AirTag",
        description:
          "Attach Bluetooth trackers to keys, wallet, bag. Use 'find my' and separation alerts to prevent losses.",
        why: "Losing things is an ADHD hallmark. Trackers remove the stress and wasted time of searching.",
        apps: ["AirTag", "Tile", "Samsung SmartTag"],
      },
      {
        emoji: "🎮",
        name: "Routine Apps",
        description:
          "Gamify daily routines — brushing teeth, taking meds, doing dishes — with streaks, points, and rewards.",
        why: "ADHD brains are motivated by interest, not importance. Gamification adds the dopamine reward for 'boring but necessary' tasks.",
        apps: ["Routinery", "Habitica", "Streaks"],
      },
      {
        emoji: "🍽️",
        name: "Meal Planning",
        description:
          "Pick 5–7 simple meals and rotate weekly. Prep on Sunday. Keep easy backup meals for low-energy days.",
        why: "Eliminates the daily 'what's for dinner?' paralysis caused by decision fatigue.",
      },
      {
        emoji: "🧹",
        name: "Cleaning Systems",
        description:
          "The '5 things' method: put away 5 items every time you leave a room. Or focus on one zone per day, 15 min max.",
        why: "Small, timed bursts prevent the buildup that makes cleaning feel overwhelming.",
      },
    ],
  },
];

interface Technique {
  emoji: string;
  name: string;
  description: string;
  howTo: string;
}

const techniques: Technique[] = [
  {
    emoji: "⚡",
    name: "The 2-Minute Rule",
    description:
      "If a task takes less than 2 minutes, do it immediately. Don't add it to a list — just do it right now.",
    howTo:
      "See a dish? Wash it. Quick email? Reply now. These micro-actions prevent the pile-up that leads to overwhelm.",
  },
  {
    emoji: "🔗",
    name: "Habit Stacking",
    description:
      "Attach a new habit to an existing one. 'After I [current habit], I will [new habit].' The existing habit becomes the trigger.",
    howTo:
      "After I pour my coffee, I write my top 3 tasks. After I sit at my desk, I put on noise-cancelling headphones.",
  },
  {
    emoji: "☝️",
    name: "The 1-Thing Theory",
    description:
      "On your worst days, just do one thing. Not five. Not the whole list. Just one single thing.",
    howTo:
      "'Write the essay' becomes 'open the document.' Starting is the hardest part — momentum follows.",
  },
  {
    emoji: "🔄",
    name: "Reverse To-Do List",
    description:
      "Write down everything you already did today instead of what you need to do. Review it at the end of the day.",
    howTo:
      "Got up ✓ Showered ✓ Replied to emails ✓ — You did more than you think. Combats the tendency to only see what's undone.",
  },
  {
    emoji: "🌊",
    name: "Brain Dumps",
    description:
      "Set a timer for 5–10 minutes and write everything on your mind. Don't organize or judge — just get it out.",
    howTo:
      "Stream-of-consciousness on paper or a blank doc. Circle 1–3 items that need action today. Let go of the rest.",
  },
  {
    emoji: "🔃",
    name: "Reset Routine",
    description:
      "When scattered or unfocused, use a short reset sequence: move, breathe, orient, choose.",
    howTo:
      "Stand and stretch (30 sec) → 3 deep breaths → Look at your task list → Pick one thing. This breaks the paralysis loop.",
  },
];

/* --------------------------------------------------------------------------
   Component
   -------------------------------------------------------------------------- */

export default function ToolsPage() {
  return (
    <>
      {/* ── HERO ─────────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden pt-28 pb-16 md:pb-20">
        <div
          aria-hidden="true"
          className="blob -top-40 -left-40 h-[520px] w-[520px] opacity-20"
          style={{ background: "var(--teal)" }}
        />
        <div
          aria-hidden="true"
          className="blob top-24 -right-20 h-[420px] w-[420px] opacity-15"
          style={{ background: "var(--purple)" }}
        />
        <div
          aria-hidden="true"
          className="blob -bottom-32 left-1/2 h-[360px] w-[360px] -translate-x-1/2 opacity-10"
          style={{ background: "var(--amber)" }}
        />

        <div className="relative mx-auto max-w-5xl px-6 text-center">
          <ScrollReveal direction="up" duration={800} once>
            <h1 className="text-5xl font-extrabold leading-[1.1] tracking-tight text-ink md:text-7xl">
              Tools &amp;{" "}
              <span className="gradient-text">Strategies</span>
            </h1>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={150} duration={800} once>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-ink-muted md:text-xl">
              Practical, ADHD-friendly tools to manage your time, focus, and
              daily life. Scan, pick what clicks, and build your own toolkit.
            </p>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={300} duration={800} once>
            <nav
              aria-label="Jump to category"
              className="mt-10 flex flex-wrap justify-center gap-3"
            >
              {categories.map((cat) => (
                <a
                  key={cat.id}
                  href={`#${cat.id}`}
                  className="tag font-semibold text-white shadow-md transition-transform hover:scale-105"
                  style={{ background: cat.color }}
                >
                  {cat.title}
                </a>
              ))}
            </nav>
          </ScrollReveal>
        </div>
      </section>

      {/* ── TOOL CATEGORIES ──────────────────────────────────────────── */}
      <section className="px-6 py-16 md:py-24">
        <div className="mx-auto max-w-6xl space-y-24">
          {categories.map((cat) => (
            <div key={cat.id} id={cat.id} className="scroll-mt-28">
              <ScrollReveal direction="up" duration={700} once>
                <div className="mb-8 flex items-center gap-3">
                  <div
                    className="h-10 w-10 shrink-0 rounded-xl"
                    style={{ background: cat.color }}
                    aria-hidden="true"
                  />
                  <h2
                    className="text-2xl font-extrabold tracking-tight sm:text-3xl"
                    style={{ color: cat.color }}
                  >
                    {cat.title}
                  </h2>
                </div>
              </ScrollReveal>

              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {cat.tools.map((tool) => (
                  <article
                    key={tool.name}
                    className="card flex flex-col p-6"
                    style={{ borderTop: `4px solid ${cat.color}` }}
                  >
                    <div className="mb-3 flex items-center gap-3">
                      <span
                        className="relative flex h-11 w-11 items-center justify-center rounded-xl text-xl"
                        aria-hidden="true"
                      >
                        <span
                          className="absolute inset-0 rounded-xl opacity-[0.12]"
                          style={{ background: cat.color }}
                        />
                        {tool.emoji}
                      </span>
                      <h3 className="text-lg font-bold leading-tight text-ink">
                        {tool.name}
                      </h3>
                    </div>

                    <p className="mb-3 text-sm leading-relaxed text-ink-muted">
                      {tool.description}
                    </p>

                    <p className="mb-4 text-sm italic leading-relaxed text-ink-faint">
                      {tool.why}
                    </p>

                    {tool.apps && tool.apps.length > 0 && (
                      <div className="mt-auto flex flex-wrap gap-2">
                        {tool.apps.map((app) => (
                          <span
                            key={app}
                            className="tag relative overflow-hidden text-xs"
                            style={{ color: cat.color }}
                          >
                            <span
                              className="absolute inset-0 opacity-[0.10]"
                              style={{ background: cat.color }}
                            />
                            <span className="relative">{app}</span>
                          </span>
                        ))}
                      </div>
                    )}
                  </article>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── TECHNIQUE DEEP DIVES ─────────────────────────────────────── */}
      <section className="bg-surface-alt px-6 py-20 md:py-28">
        <div className="mx-auto max-w-5xl">
          <ScrollReveal direction="up" duration={700} once>
            <div className="mb-14 text-center">
              <h2 className="text-3xl font-extrabold tracking-tight text-ink sm:text-4xl">
                Technique{" "}
                <span className="gradient-text">Deep Dives</span>
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-ink-muted">
                Simple strategies the ADHD community swears by — explained step
                by step so you can try them today.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid gap-6 md:grid-cols-2">
            {techniques.map((t) => (
              <article key={t.name} className="card flex flex-col p-6">
                <div className="mb-3 flex items-center gap-3">
                  <span
                    className="relative flex h-12 w-12 items-center justify-center rounded-2xl text-2xl"
                    aria-hidden="true"
                  >
                    <span
                      className="absolute inset-0 rounded-2xl opacity-[0.10]"
                      style={{ background: "var(--purple)" }}
                    />
                    {t.emoji}
                  </span>
                  <h3 className="text-xl font-bold text-ink">{t.name}</h3>
                </div>

                <p className="mb-3 text-sm leading-relaxed text-ink-muted">
                  {t.description}
                </p>

                <div
                  className="relative overflow-hidden rounded-xl p-3 text-sm leading-relaxed text-ink-muted"
                  style={{ borderLeft: "3px solid var(--amber)" }}
                >
                  <span
                    className="absolute inset-0 opacity-[0.08]"
                    style={{ background: "var(--amber)" }}
                  />
                  <span className="relative">
                    <strong className="font-semibold text-ink">How to do it:</strong>{" "}
                    {t.howTo}
                  </span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── BUILD YOUR TOOLKIT ───────────────────────────────────────── */}
      <section className="relative overflow-hidden px-6 py-20 md:py-28">
        <div
          aria-hidden="true"
          className="blob top-1/2 left-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 opacity-10"
          style={{ background: "var(--teal)" }}
        />

        <div className="relative mx-auto max-w-3xl text-center">
          <ScrollReveal direction="up" duration={700} once>
            <h2 className="text-3xl font-extrabold tracking-tight text-ink sm:text-4xl">
              Build{" "}
              <span className="gradient-text">Your Toolkit</span>
            </h2>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={150} duration={700} once>
            <div className="mx-auto mt-8 max-w-2xl space-y-5 text-left">
              {[
                {
                  emoji: "🧪",
                  text: "Not every tool works for everyone — and that's completely normal. Treat each strategy like an experiment: try it, tweak it, keep what works.",
                },
                {
                  emoji: "🔀",
                  text: "It's OK to change strategies. What worked last month might not work this month. ADHD management is an ongoing process, not a one-time setup.",
                },
                {
                  emoji: "💛",
                  text: "Be kind to yourself. Every tool you try, every strategy you test — that's you actively working to make your life better.",
                },
              ].map((item) => (
                <div
                  key={item.emoji}
                  className="card flex items-start gap-4 p-4"
                >
                  <span className="mt-0.5 text-xl" aria-hidden="true">
                    {item.emoji}
                  </span>
                  <p className="text-sm leading-relaxed text-ink-muted md:text-base">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={300} duration={700} once>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link
                href="/resources"
                className="inline-flex items-center gap-2 rounded-full bg-brand px-8 py-3 text-base font-semibold text-white shadow-lg transition-transform hover:scale-105"
              >
                📚 Browse Community Tips
              </Link>
              <Link
                href="/community"
                className="inline-flex items-center gap-2 rounded-full border-2 px-8 py-3 text-base font-semibold transition-transform hover:scale-105"
                style={{
                  borderColor: "var(--teal)",
                  color: "var(--teal)",
                }}
              >
                🤝 Join the Community
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
