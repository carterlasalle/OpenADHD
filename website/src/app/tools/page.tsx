import type { Metadata } from "next";
import Link from "next/link";

/* ==========================================================================
   Tools & Strategies – a comprehensive, ADHD-friendly resource page.
   Server component (no "use client").
   ========================================================================== */

export const metadata: Metadata = {
  title: "ADHD Tools & Strategies | OpenADHD",
  description:
    "Practical, actionable tools and strategies to help you manage ADHD in every area of your life. Time management, focus, organization, emotional regulation, and more.",
};

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
  title: string;
  color: string;
  colorVar: string;
  tools: Tool[];
}

const categories: Category[] = [
  {
    title: "Time Management",
    color: "#FF6B4A",
    colorVar: "var(--accent-coral)",
    tools: [
      {
        emoji: "🍅",
        name: "Pomodoro Technique",
        description:
          "Work for 25 minutes, then take a 5-minute break. After four cycles, take a longer 15–30 minute break. Use a timer to keep yourself honest.",
        why: "ADHD brains struggle with sustained attention but thrive with short bursts. The built-in breaks prevent burnout and give your dopamine system a chance to reset.",
        apps: ["Forest", "Focus Keeper", "Pomofocus"],
      },
      {
        emoji: "📅",
        name: "Time Blocking",
        description:
          "Assign every hour of your day a specific task or category of work. Block out focus time, admin time, breaks, and transition periods.",
        why: "Eliminates the 'what should I do next?' paralysis. When the calendar tells you what to do, you remove the executive-function tax of constant decision-making.",
        apps: ["Google Calendar", "Fantastical", "Structured"],
      },
      {
        emoji: "⏳",
        name: "Visual Timers",
        description:
          "Use timers that visually show time passing — a shrinking colored disc or sand running out. Place them where you can see them while working.",
        why: "ADHD often comes with 'time blindness' — a genuine difficulty sensing how much time has passed. Visual timers externalize time so you can see it.",
        apps: ["Time Timer", "Visual Timer app"],
      },
      {
        emoji: "🔔",
        name: "Digital Calendars & Alerts",
        description:
          "Use a digital calendar with multiple alerts — 1 day before, 1 hour before, and 15 minutes before every event. Color-code categories.",
        why: "Multiple alerts act as a safety net. If you miss the first one (we all do), the next one catches you. Color-coding helps your brain categorize at a glance.",
        apps: ["Google Calendar", "Apple Calendar", "Outlook"],
      },
      {
        emoji: "📢",
        name: "Alarms & Voice Reminders",
        description:
          "Set recurring alarms for daily tasks (medication, meals, bedtime). Use voice assistants to set quick reminders hands-free.",
        why: "Offloads remembering from your working memory (which is already overloaded) to an external system that never forgets.",
        apps: ["Siri", "Google Assistant", "Alexa"],
      },
    ],
  },
  {
    title: "Organization",
    color: "#FFAA3B",
    colorVar: "var(--accent-amber)",
    tools: [
      {
        emoji: "🧠",
        name: "Second Brain / Note Systems",
        description:
          "Capture everything — ideas, tasks, links, notes — in one digital system. The concept is simple: your brain is for having ideas, not holding them.",
        why: "ADHD brains generate tons of ideas but struggle to retain them. Externalizing thoughts into a trusted system reduces anxiety and frees up mental bandwidth.",
        apps: ["Notion", "Obsidian", "Apple Notes"],
      },
      {
        emoji: "✅",
        name: "Task Management Apps",
        description:
          "Use a dedicated task manager with due dates, priorities, and projects. Break big tasks into small, concrete action steps.",
        why: "Seeing a manageable list of next actions is far less overwhelming than a vague to-do list. Priority levels help you focus on what actually matters today.",
        apps: ["Todoist", "Things 3", "Microsoft To-Do"],
      },
      {
        emoji: "🏷️",
        name: "Physical Organization",
        description:
          "Label everything. Use clear containers so you can see contents. Give every item a designated home and put it back after each use.",
        why: "ADHD follows 'out of sight, out of mind.' Clear containers and labels make things visible. Designated spots remove the decision of where to put things.",
        apps: ["Label makers", "Clear bins", "Drawer organizers"],
      },
      {
        emoji: "📓",
        name: "Bullet Journaling (ADHD-Adapted)",
        description:
          "Use rapid logging: short bullets for tasks (•), events (○), and notes (–). Migrate unfinished tasks forward. Keep it simple — skip the elaborate spreads.",
        why: "The migration step forces you to decide if a task still matters. Writing by hand engages different brain pathways and improves retention.",
        apps: ["Dotted notebook", "Leuchtturm1917", "Archer & Olive"],
      },
      {
        emoji: "📋",
        name: "Whiteboard / Dry Erase",
        description:
          "Keep a whiteboard in your workspace for daily priorities, quick lists, and brain dumps. The impermanence makes it less intimidating than a notebook.",
        why: "Visual, large-format task management is easy to glance at. Being erasable removes the pressure of 'messing it up.' Great for visual thinkers.",
        apps: ["Dry-erase board", "Glass board", "Rocketbook"],
      },
    ],
  },
  {
    title: "Focus",
    color: "#1DBAA0",
    colorVar: "var(--accent-teal)",
    tools: [
      {
        emoji: "🎧",
        name: "Noise-Cancelling Headphones",
        description:
          "Block out distracting sounds with active noise cancellation. Pair with brown noise, white noise, or pink noise for a consistent audio environment.",
        why: "ADHD brains are extra sensitive to environmental stimuli. Removing auditory distractions can dramatically improve focus. Brown noise is especially popular in the ADHD community.",
        apps: ["Sony WH-1000XM5", "AirPods Pro", "Bose QC"],
      },
      {
        emoji: "🚫",
        name: "Website & App Blockers",
        description:
          "Block distracting websites and apps during focus sessions. Some tools offer 'nuclear mode' that can't be overridden once activated.",
        why: "ADHD makes it incredibly hard to resist the pull of dopamine-rich distractions. Blockers remove the option entirely so you don't have to rely on willpower.",
        apps: ["Cold Turkey", "Freedom", "StayFocusd"],
      },
      {
        emoji: "🎵",
        name: "Focus Music & Soundscapes",
        description:
          "Listen to music designed for focus — typically without lyrics, with steady rhythms. Binaural beats and lo-fi hip hop are popular choices.",
        why: "The right background audio provides just enough stimulation to keep your brain engaged without becoming a distraction. It fills the 'boredom gap' that leads to task-switching.",
        apps: ["Brain.fm", "Endel", "Lo-Fi playlists"],
      },
      {
        emoji: "👥",
        name: "Body Doubling",
        description:
          "Work alongside another person — in person or virtually. You don't need to interact; their presence alone helps you stay on task.",
        why: "Having another person present creates gentle social accountability. It's one of the most effective (and underrated) ADHD strategies. Works even with strangers online.",
        apps: ["Focusmate", "Flown", "Discord study rooms"],
      },
      {
        emoji: "🏠",
        name: "Environment Design",
        description:
          "Set up your workspace intentionally: minimize visual clutter, keep only current-task materials visible, use good lighting, and maintain a comfortable temperature.",
        why: "Your environment is a powerful cue for behavior. A cluttered space = a cluttered mind. Designing your space for focus reduces the friction to start working.",
      },
    ],
  },
  {
    title: "Emotional Regulation",
    color: "#9B8FED",
    colorVar: "var(--accent-lavender)",
    tools: [
      {
        emoji: "🧘",
        name: "Meditation Apps",
        description:
          "Start with short, guided meditations (3–5 minutes). Look for ADHD-specific programs that acknowledge wandering thoughts as normal, not failure.",
        why: "Meditation strengthens the 'noticing' muscle — catching yourself drifting and gently returning. Over time, this transfers to better emotional awareness and impulse control.",
        apps: ["Headspace", "Calm", "Insight Timer"],
      },
      {
        emoji: "📝",
        name: "Journaling",
        description:
          "Try brain dumps (write everything on your mind), gratitude journals (3 things daily), or CBT-style journals (identify thought patterns and challenge them).",
        why: "Externalizing emotions reduces their intensity. Writing forces you to slow down and process feelings rather than being swept away by them.",
      },
      {
        emoji: "🏃",
        name: "Exercise",
        description:
          "Aim for at least 20–30 minutes of cardio most days. Running, swimming, cycling, and dancing are especially effective. Even a 10-minute walk helps.",
        why: "Exercise is like a dose of ADHD medication — it boosts dopamine and norepinephrine immediately. It's one of the most evidence-backed interventions for ADHD symptom management.",
      },
      {
        emoji: "🌬️",
        name: "Breathing Techniques",
        description:
          "Box breathing: inhale 4 sec → hold 4 sec → exhale 4 sec → hold 4 sec. 4-7-8 technique: inhale 4 sec → hold 7 sec → exhale 8 sec. Use during overwhelm.",
        why: "Activates the parasympathetic nervous system (rest-and-digest) and calms the fight-or-flight response. Can bring you back from emotional flooding in under 2 minutes.",
      },
      {
        emoji: "📖",
        name: "CBT Workbooks",
        description:
          "Work through Cognitive Behavioral Therapy exercises on your own. Look for workbooks specifically designed for adult ADHD with structured, short exercises.",
        why: "CBT helps you identify and reframe the negative thought patterns that often accompany ADHD — like 'I'm lazy' or 'I'll never get this right.' Evidence-based and practical.",
        apps: [
          "The ADHD Workbook for Adults",
          "Mastering Your Adult ADHD",
        ],
      },
    ],
  },
  {
    title: "Study & Learning",
    color: "#FF4D8D",
    colorVar: "var(--accent-pink)",
    tools: [
      {
        emoji: "🔁",
        name: "Spaced Repetition",
        description:
          "Review information at increasing intervals — 1 day, 3 days, 7 days, 14 days. Use flashcard apps that automate the scheduling for you.",
        why: "Fights the forgetting curve efficiently. Instead of cramming (which doesn't stick), spaced repetition builds durable long-term memory with less total study time.",
        apps: ["Anki", "Quizlet", "RemNote"],
      },
      {
        emoji: "🤔",
        name: "Active Recall",
        description:
          "Study by testing yourself, not re-reading. Close the book and try to recall what you just learned. Use practice questions, flashcards, or teach the material to someone.",
        why: "Passive re-reading feels productive but doesn't build strong memories. Active recall forces your brain to work harder, which is exactly what creates lasting learning.",
      },
      {
        emoji: "🔊",
        name: "Text-to-Speech",
        description:
          "Have articles, textbooks, and emails read aloud to you. Most operating systems have this built in. Pair listening with reading for dual-channel processing.",
        why: "Engaging both auditory and visual channels simultaneously improves comprehension and focus. It also makes reading feel less effortful for ADHD brains.",
        apps: ["NaturalReader", "Voice Dream", "Built-in OS tools"],
      },
      {
        emoji: "🗺️",
        name: "Mind Mapping",
        description:
          "Start with a central idea and branch out visually. Use colors, images, and connections. Great for brainstorming, essay planning, and understanding complex topics.",
        why: "ADHD brains often think in webs, not lists. Mind maps match your natural thinking style and make it easier to see connections between ideas.",
        apps: ["MindMeister", "XMind", "Miro"],
      },
      {
        emoji: "🤝",
        name: "Accountability Partners",
        description:
          "Partner with someone who checks in on your progress. Set specific, measurable goals and report back regularly. Study groups provide built-in accountability.",
        why: "External accountability compensates for the internal motivation challenges of ADHD. Knowing someone will ask about your progress creates gentle, positive pressure.",
        apps: ["Focusmate", "Study groups", "ADHD coaching"],
      },
    ],
  },
  {
    title: "Daily Life",
    color: "#FF6B4A",
    colorVar: "var(--accent-coral)",
    tools: [
      {
        emoji: "💊",
        name: "Pill Organizers",
        description:
          "Use a 7-day AM/PM pill organizer for medication. Fill it every Sunday. Pair it with a phone alarm labeled with the specific medication name.",
        why: "Medication consistency is crucial for ADHD management. A pill organizer gives you a visual check — 'Did I take it today?' — without relying on memory.",
      },
      {
        emoji: "📍",
        name: "GPS Trackers",
        description:
          "Attach Bluetooth trackers to your keys, wallet, bag, and anything else you frequently misplace. Use the 'find my' feature when things inevitably disappear.",
        why: "Losing things is an ADHD hallmark. Trackers remove the stress and wasted time of searching. The 'separation alert' feature can prevent losses before they happen.",
        apps: ["AirTag", "Tile", "Samsung SmartTag"],
      },
      {
        emoji: "🎮",
        name: "Routine & Habit Apps",
        description:
          "Gamify your daily routines with apps that reward consistency. Turn brushing teeth, taking meds, and doing dishes into a game with streaks and points.",
        why: "ADHD brains are motivated by interest and novelty, not importance. Gamification adds the dopamine reward that makes 'boring but necessary' tasks feel more engaging.",
        apps: ["Routinery", "Habitica", "Streaks"],
      },
      {
        emoji: "🍽️",
        name: "Meal Planning",
        description:
          "Pick 5–7 simple meals you like and rotate them weekly. Prep ingredients on Sunday. Keep easy backup meals (frozen, canned) for low-energy days.",
        why: "Decision fatigue around food is real with ADHD. A simple rotation eliminates the daily 'what's for dinner?' paralysis while still providing variety.",
      },
      {
        emoji: "🧹",
        name: "Cleaning Systems",
        description:
          "Try the '5 things' method: put away 5 things every time you leave a room. Or use the FlyLady approach: focus on one zone per day, 15 minutes max.",
        why: "All-or-nothing thinking makes ADHD brains avoid cleaning until it's overwhelming. Small, timed bursts prevent the buildup and make cleaning feel achievable.",
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
    description: "If a task takes less than 2 minutes, do it immediately. Don't add it to a list, don't put it off — just do it right now.",
    howTo: "See a dish? Wash it. Got a quick email? Reply now. Jacket on the chair? Hang it up. These micro-actions prevent the pile-up that leads to overwhelm.",
  },
  {
    emoji: "🔗",
    name: "Habit Stacking",
    description: "Attach a new habit to an existing one. 'After I [current habit], I will [new habit].' The existing habit becomes the trigger for the new one.",
    howTo: "After I pour my morning coffee, I will write down my top 3 tasks. After I sit at my desk, I will put on my noise-cancelling headphones.",
  },
  {
    emoji: "☝️",
    name: "The 1-Thing Theory",
    description: "On your worst days, just do one thing. Not five things. Not the whole list. Just one single thing.",
    howTo: "Pick the smallest, easiest version of the most important task. 'Write the essay' becomes 'open the document.' Starting is the hardest part — momentum follows.",
  },
  {
    emoji: "🔄",
    name: "Reverse To-Do List",
    description: "Instead of writing what you need to do, write down everything you already did today. Review it at the end of the day.",
    howTo: "Got out of bed ✓ Showered ✓ Replied to emails ✓ Made lunch ✓ — You did more than you think. This combats the ADHD tendency to only see what's undone.",
  },
  {
    emoji: "🌊",
    name: "Brain Dumps",
    description: "Set a timer for 5–10 minutes and write everything that's on your mind. Don't organize, don't judge — just get it all out of your head.",
    howTo: "Grab paper or open a blank doc. Write stream-of-consciousness. When done, circle the 1–3 items that actually need action today. Let go of the rest.",
  },
  {
    emoji: "🔃",
    name: "The Reset Routine",
    description: "When you feel scattered or unfocused, use a short reset sequence to bring yourself back: move, breathe, orient, choose.",
    howTo: "Stand up and stretch (30 sec) → Take 3 deep breaths → Look at your task list → Pick one thing to do next. This physical-mental reset breaks the paralysis loop.",
  },
];

/* --------------------------------------------------------------------------
   Component
   -------------------------------------------------------------------------- */

export default function ToolsPage() {
  return (
    <>
      {/* ================================================================
          HERO
          ================================================================ */}
      <section className="relative overflow-hidden px-6 pt-32 pb-20 md:pt-40 md:pb-28">
        {/* Decorative blobs */}
        <div
          className="pointer-events-none absolute -top-32 -left-32 h-96 w-96 rounded-full opacity-20 blur-3xl"
          style={{ background: "var(--accent-coral)" }}
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute -right-24 top-24 h-80 w-80 rounded-full opacity-15 blur-3xl"
          style={{ background: "var(--accent-lavender)" }}
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute bottom-0 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full opacity-15 blur-3xl"
          style={{ background: "var(--accent-amber)" }}
          aria-hidden="true"
        />

        <div className="relative mx-auto max-w-4xl text-center">
          <span className="animate-fade-in-up mb-6 inline-flex items-center gap-2 rounded-full border border-orange-200 bg-orange-50 px-4 py-1.5 text-sm font-medium text-orange-700">
            <span aria-hidden="true">🛠️</span> Practical &amp; Actionable
          </span>

          <h1
            className="animate-fade-in-up delay-100 text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl"
            style={{ fontFamily: "var(--font-display)" }}
          >
            ADHD{" "}
            <span className="gradient-text">Tools &amp; Strategies</span>
          </h1>

          <p className="animate-fade-in-up delay-200 mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-text-secondary md:text-xl">
            Practical, actionable tools to help you manage ADHD in every area
            of your life. Find what works for&nbsp;you.
          </p>

          {/* Quick-jump pills */}
          <nav
            aria-label="Jump to category"
            className="animate-fade-in-up delay-300 mt-10 flex flex-wrap justify-center gap-3"
          >
            {categories.map((cat) => (
              <a
                key={cat.title}
                href={`#${slug(cat.title)}`}
                className="inline-flex items-center gap-1.5 rounded-full px-4 py-2 text-sm font-semibold text-white shadow-md transition-transform hover:scale-105"
                style={{ background: cat.color }}
              >
                {cat.title}
              </a>
            ))}
          </nav>
        </div>
      </section>

      {/* ================================================================
          ESSENTIAL TOOLS — Category Sections
          ================================================================ */}
      <section className="px-6 py-16 md:py-24">
        <div className="mx-auto max-w-6xl">
          <div className="mb-16 text-center">
            <h2
              className="animate-fade-in-up text-3xl font-extrabold tracking-tight sm:text-4xl"
              style={{ fontFamily: "var(--font-display)" }}
            >
              <span aria-hidden="true">🧰</span>{" "}
              Essential <span className="gradient-text">Tools</span>
            </h2>
            <p className="animate-fade-in-up delay-100 mx-auto mt-4 max-w-xl text-text-secondary">
              Curated tools and apps organized by life area. Each one
              explains <em>why</em> it helps the ADHD brain — not just
              <em> what</em> it is.
            </p>
          </div>

          <div className="space-y-24">
            {categories.map((cat) => (
              <div key={cat.title} id={slug(cat.title)} className="scroll-mt-28">
                {/* Category header */}
                <div className="mb-8 flex items-center gap-3">
                  <div
                    className="h-10 w-10 shrink-0 rounded-xl"
                    style={{ background: cat.color }}
                    aria-hidden="true"
                  />
                  <h3
                    className="text-2xl font-extrabold sm:text-3xl"
                    style={{
                      fontFamily: "var(--font-display)",
                      color: cat.color,
                    }}
                  >
                    {cat.title}
                  </h3>
                </div>

                {/* Tool cards grid */}
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  {cat.tools.map((tool, i) => (
                    <article
                      key={tool.name}
                      className={`glass-card hover-lift animate-fade-in-up flex flex-col rounded-2xl p-6 ${
                        i < 7 ? `delay-${(i + 1) * 100}` : ""
                      }`}
                      style={{ borderTop: `4px solid ${cat.color}` }}
                    >
                      <div className="mb-3 flex items-center gap-3">
                        <span
                          className="flex h-11 w-11 items-center justify-center rounded-xl text-xl"
                          style={{
                            background: `${cat.color}18`,
                          }}
                          aria-hidden="true"
                        >
                          {tool.emoji}
                        </span>
                        <h4 className="text-lg font-bold leading-tight">
                          {tool.name}
                        </h4>
                      </div>

                      <p className="mb-3 text-sm leading-relaxed text-text-secondary">
                        {tool.description}
                      </p>

                      <div
                        className="mb-4 rounded-xl p-3 text-sm leading-relaxed"
                        style={{
                          background: `${cat.color}0D`,
                          borderLeft: `3px solid ${cat.color}`,
                        }}
                      >
                        <strong className="font-semibold">Why it helps:</strong>{" "}
                        {tool.why}
                      </div>

                      {tool.apps && tool.apps.length > 0 && (
                        <div className="mt-auto flex flex-wrap gap-2">
                          {tool.apps.map((app) => (
                            <span
                              key={app}
                              className="inline-flex items-center rounded-full px-3 py-1 text-xs font-medium"
                              style={{
                                background: `${cat.color}15`,
                                color: cat.color,
                              }}
                            >
                              {app}
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
        </div>
      </section>

      {/* ================================================================
          TECHNIQUE DEEP DIVES
          ================================================================ */}
      <section
        className="px-6 py-20 md:py-28"
        style={{ background: "linear-gradient(180deg, transparent, rgba(255,107,74,0.04), transparent)" }}
      >
        <div className="mx-auto max-w-5xl">
          <div className="mb-14 text-center">
            <h2
              className="animate-fade-in-up text-3xl font-extrabold tracking-tight sm:text-4xl"
              style={{ fontFamily: "var(--font-display)" }}
            >
              <span aria-hidden="true">🔬</span>{" "}
              Technique <span className="gradient-text">Deep Dives</span>
            </h2>
            <p className="animate-fade-in-up delay-100 mx-auto mt-4 max-w-xl text-text-secondary">
              Simple techniques that punch above their weight. These are the
              strategies the ADHD community swears by — explained step by
              step.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {techniques.map((t, i) => (
              <article
                key={t.name}
                className={`glass-card hover-lift animate-fade-in-up flex flex-col rounded-2xl p-6 ${
                  i < 6 ? `delay-${(i + 1) * 100}` : ""
                }`}
              >
                <div className="mb-3 flex items-center gap-3">
                  <span
                    className="flex h-12 w-12 items-center justify-center rounded-2xl text-2xl"
                    style={{ background: "rgba(255,107,74,0.10)" }}
                    aria-hidden="true"
                  >
                    {t.emoji}
                  </span>
                  <h3 className="text-xl font-bold">{t.name}</h3>
                </div>

                <p className="mb-3 text-sm leading-relaxed text-text-secondary">
                  {t.description}
                </p>

                <div
                  className="rounded-xl p-3 text-sm leading-relaxed"
                  style={{
                    background: "rgba(255,170,59,0.08)",
                    borderLeft: "3px solid var(--accent-amber)",
                  }}
                >
                  <strong className="font-semibold">How to do it:</strong>{" "}
                  {t.howTo}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ================================================================
          BUILD YOUR TOOLKIT — Encouraging CTA section
          ================================================================ */}
      <section className="relative overflow-hidden px-6 py-20 md:py-28">
        {/* Decorative blob */}
        <div
          className="pointer-events-none absolute top-1/2 left-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-10 blur-3xl"
          style={{ background: "var(--accent-teal)" }}
          aria-hidden="true"
        />

        <div className="relative mx-auto max-w-3xl text-center">
          <h2
            className="animate-fade-in-up text-3xl font-extrabold tracking-tight sm:text-4xl"
            style={{ fontFamily: "var(--font-display)" }}
          >
            <span aria-hidden="true">🎯</span> Build{" "}
            <span className="gradient-text">Your ADHD Toolkit</span>
          </h2>

          <div className="animate-fade-in-up delay-100 mx-auto mt-8 max-w-2xl space-y-5 text-left">
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
                emoji: "🎯",
                text: "Consistency matters more than perfection. Using a mediocre system every day beats using a perfect system once a week.",
              },
              {
                emoji: "💛",
                text: "Be kind to yourself. Managing ADHD is genuinely hard. Every tool you try, every strategy you test — that's you actively working to make your life better.",
              },
            ].map((item) => (
              <div
                key={item.text}
                className="glass-card flex items-start gap-4 rounded-xl p-4"
              >
                <span className="mt-0.5 text-xl" aria-hidden="true">
                  {item.emoji}
                </span>
                <p className="text-sm leading-relaxed text-text-secondary md:text-base">
                  {item.text}
                </p>
              </div>
            ))}
          </div>

          <div className="animate-fade-in-up delay-300 mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/resources"
              className="inline-flex items-center gap-2 rounded-full px-8 py-3 text-base font-semibold text-white shadow-lg transition-transform hover:scale-105"
              style={{ background: "var(--accent-coral)" }}
            >
              <span aria-hidden="true">📚</span> Browse Community Tips
            </Link>
            <Link
              href="/community"
              className="inline-flex items-center gap-2 rounded-full border-2 px-8 py-3 text-base font-semibold transition-transform hover:scale-105"
              style={{
                borderColor: "var(--accent-teal)",
                color: "var(--accent-teal)",
              }}
            >
              <span aria-hidden="true">🤝</span> Join the Community
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

/* --------------------------------------------------------------------------
   Helpers
   -------------------------------------------------------------------------- */

function slug(text: string): string {
  return text.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
}
