import Link from "next/link";
import GuideCard from "@/components/library/GuideCard";
import { guides } from "@/data/guides";

const quickRoutes = [
  {
    eyebrow: "Cannot start",
    title: "Get unstuck in the next 10 minutes",
    detail:
      "Start with one stabilizing page, one tool, and one small action instead of reading ten tabs at once.",
    href: "/library/getting-started-overwhelmed",
  },
  {
    eyebrow: "Behind at school",
    title: "Recover without rebuilding your whole life",
    detail:
      "Use the school system guide when you need triage, a sprint plan, and support scripts that actually sound normal.",
    href: "/library/school-study-system",
  },
  {
    eyebrow: "Always late",
    title: "Make time visible instead of guessing",
    detail:
      "Start with time blindness tools if your day keeps collapsing because setup, transitions, and buffers never fit.",
    href: "/library/time-blindness",
  },
  {
    eyebrow: "Relationships feel tense",
    title: "Repair the loop, not just the latest conflict",
    detail:
      "Use the relationships guide for shared systems, repair language, and one weekly check-in structure.",
    href: "/library/relationships-and-communication",
  },
];

const guideGroups = [
  {
    title: "Start Here First",
    description:
      "For freeze states, shame spirals, startup friction, and days where everything feels equally urgent.",
    slugs: ["getting-started-overwhelmed", "executive-dysfunction", "motivation-burnout"],
  },
  {
    title: "Daily Systems",
    description:
      "For routine drift, missed transitions, late loops, and the constant feeling that the day got away from you.",
    slugs: ["time-blindness", "sleep-and-adhd"],
  },
  {
    title: "School and Work",
    description:
      "For deadlines, study collapse, reactive workdays, and communication that happens too late.",
    slugs: ["school-study-system", "work-productivity-system"],
  },
  {
    title: "Emotions and Relationships",
    description:
      "For fast escalation, repair after misses, anxiety loops, and feeling misunderstood by people close to you.",
    slugs: ["emotional-regulation", "relationships-and-communication", "anxiety-overlap"],
  },
];

const templateDownloads = [
  {
    title: "Panic-Proof Reset Checklist",
    description: "A short reset for high-overwhelm days when planning is making things worse.",
    href: "/templates/panic-proof-reset-checklist.txt",
  },
  {
    title: "2-Column Task System Sheet",
    description: "Split must-do work from not-now work so everything stops competing for attention.",
    href: "/templates/2-column-task-system-sheet.txt",
  },
  {
    title: "Study Sprint Tracker",
    description: "Track class type, sprint goals, recall quality, and what to do next.",
    href: "/templates/study-sprint-tracker.txt",
  },
  {
    title: "Night Routine Scaffold",
    description: "A sleep-friendly shutdown sheet with minimum and normal versions.",
    href: "/templates/night-routine-scaffold.txt",
  },
  {
    title: "Medication Log + Symptom Tracker",
    description: "Bring cleaner observations into prescriber visits without relying on memory.",
    href: "/templates/medication-log-symptom-tracker.txt",
  },
  {
    title: "Relationship Weekly Check-In",
    description: "A simple structure for logistics, repair, and who owns what this week.",
    href: "/templates/relationship-weekly-checkin.txt",
  },
];

const offlineGuides = [
  {
    title: "Executive Function Field Manual",
    description: "Long-form PDF for initiation, planning, switching, and completion support.",
    href: "/guides/executive-function-field-manual.pdf",
    pages: "Long PDF",
  },
  {
    title: "Diagnosis and Care Navigator",
    description: "Offline guide to evaluation prep, money options, medication basics, and care decisions.",
    href: "/guides/diagnosis-care-navigator.pdf",
    pages: "Long PDF",
  },
  {
    title: "OpenADHD Launch Playbook",
    description: "For schools, organizers, volunteers, and supporters building broader ADHD support systems.",
    href: "/guides/openadhd-launch-playbook.pdf",
    pages: "Long PDF",
  },
];

const mediaAlternatives = [
  {
    title: "How to ADHD",
    format: "Video",
    description: "Short practical videos for days when reading a full guide is not happening.",
    href: "https://www.youtube.com/@HowtoADHD",
  },
  {
    title: "Hacking Your ADHD",
    format: "Audio",
    description: "Walk-and-listen episodes focused on implementation, not inspiration.",
    href: "https://www.hackingyouradhd.com/podcast",
  },
  {
    title: "ADHD Essentials",
    format: "Audio",
    description: "Coaching-style conversations with practical follow-through ideas.",
    href: "https://www.adhdessentials.com/podcast",
  },
];

const guideLookup = Object.fromEntries(guides.map((guide) => [guide.slug, guide])) as Record<
  string,
  (typeof guides)[number]
>;

function getGuidesForGroup(slugs: string[]) {
  return slugs
    .map((slug) => guideLookup[slug])
    .filter((guide): guide is (typeof guides)[number] => Boolean(guide));
}

export default function LibraryPage() {
  return (
    <div className="page-shell">
      {/* Hero */}
      <section className="hero-surface">
        <p className="eyebrow">Library</p>
        <h1 className="hero-title">The ADHD Resource Library</h1>
        <p className="hero-subtitle">
          Find the right guide fast. Every page starts with what it is, who it&apos;s for, and what
          to do first.
        </p>
        <div className="page-actions">
          <Link href="/start-here" className="btn-primary">
            Start Here
          </Link>
          <Link href="/tools/bad-day-mode" className="btn-muted">
            Bad Day Mode
          </Link>
        </div>
      </section>

      {/* Quick access strip */}
      <section className="section-shell">
        <p className="section-label">Quick access</p>
        <div className="scroll-row" style={{ marginTop: "0.75rem" }}>
          {quickRoutes.map((route) => (
            <Link key={route.href} href={route.href} className="chip">
              {route.eyebrow}
            </Link>
          ))}
        </div>
      </section>

      {/* Quick help tools */}
      <section className="content-section">
        <p className="section-label">Quick help tools</p>
        <p className="section-subtitle" style={{ marginBottom: "1.25rem" }}>
          Use these when you need a result before you need a deep explanation.
        </p>
        <div className="grid-auto-4">
          <Link href="/tools/task-breaker" className="card-tool" style={{ textDecoration: "none" }}>
            <span className="icon-wrap-sm">&#128295;</span>
            <h3 style={{ marginTop: "0.5rem", fontSize: "1rem", lineHeight: 1.3 }}>Task Breaker</h3>
            <p style={{ marginTop: "0.3rem", fontSize: "0.85rem", color: "var(--text-soft)" }}>
              Turn one vague task into micro-steps, a start script, and a timer recommendation.
            </p>
          </Link>
          <Link
            href="/tools/planner-generator"
            className="card-tool"
            style={{ textDecoration: "none" }}
          >
            <span className="icon-wrap-sm">&#128197;</span>
            <h3 style={{ marginTop: "0.5rem", fontSize: "1rem", lineHeight: 1.3 }}>
              Planner Generator
            </h3>
            <p style={{ marginTop: "0.3rem", fontSize: "0.85rem", color: "var(--text-soft)" }}>
              Turn deadlines into a usable week with buffers, check-ins, and fallback blocks.
            </p>
          </Link>
          <Link
            href="/tools/script-generator"
            className="card-tool"
            style={{ textDecoration: "none" }}
          >
            <span className="icon-wrap-sm">&#128172;</span>
            <h3 style={{ marginTop: "0.5rem", fontSize: "1rem", lineHeight: 1.3 }}>
              Script Generator
            </h3>
            <p style={{ marginTop: "0.3rem", fontSize: "0.85rem", color: "var(--text-soft)" }}>
              Draft a message for professors, partners, managers, parents, or care providers.
            </p>
          </Link>
          <Link
            href="/tools/bad-day-mode"
            className="card-tool"
            style={{ textDecoration: "none" }}
          >
            <span className="icon-wrap-sm">&#128737;</span>
            <h3 style={{ marginTop: "0.5rem", fontSize: "1rem", lineHeight: 1.3 }}>Bad Day Mode</h3>
            <p style={{ marginTop: "0.3rem", fontSize: "0.85rem", color: "var(--text-soft)" }}>
              Strip the day down to survival, one next action, and the least harmful path forward.
            </p>
          </Link>
        </div>
      </section>

      {/* Guide groups */}
      {guideGroups.map((group) => (
        <section key={group.title} className="content-section">
          <p className="section-label">{group.title}</p>
          <p className="section-subtitle" style={{ marginBottom: "1.25rem" }}>
            {group.description}
          </p>
          <div className="grid-auto-2">
            {getGuidesForGroup(group.slugs).map((guide) => (
              <GuideCard key={guide.slug} guide={guide} />
            ))}
          </div>
        </section>
      ))}

      {/* Templates section */}
      <section className="content-section">
        <p className="section-label">Printable Templates</p>
        <p className="section-subtitle" style={{ marginBottom: "1.25rem" }}>
          Built for low-friction use at school, work, appointments, or on the fridge.
        </p>
        <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "grid", gap: "0.5rem" }}>
          {templateDownloads.map((t) => (
            <li
              key={t.href}
              style={{
                border: "1px solid var(--line)",
                borderRadius: "0.65rem",
                padding: "0.7rem 0.9rem",
              }}
            >
              <a
                href={t.href}
                style={{ fontWeight: 700, color: "var(--text-strong)", textDecoration: "none" }}
              >
                &#11015;&#65039; {t.title}
              </a>
              <p
                style={{ margin: "0.2rem 0 0", fontSize: "0.85rem", color: "var(--text-soft)" }}
              >
                {t.description}
              </p>
            </li>
          ))}
        </ul>
      </section>

      {/* Offline guides + media alternatives */}
      <section className="content-section">
        <div className="grid-auto-2">
          {/* Offline PDFs */}
          <div>
            <p className="section-label">Offline Deep Dives</p>
            <p className="section-subtitle" style={{ marginBottom: "1rem" }}>
              Long-form PDFs for when you want something printable, shareable, or easier to review
              away from the site.
            </p>
            <ul
              style={{ listStyle: "none", margin: 0, padding: 0, display: "grid", gap: "0.5rem" }}
            >
              {offlineGuides.map((guide) => (
                <li
                  key={guide.href}
                  style={{
                    border: "1px solid var(--line)",
                    borderRadius: "0.65rem",
                    padding: "0.7rem 0.9rem",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      gap: "0.75rem",
                    }}
                  >
                    <a
                      href={guide.href}
                      style={{
                        fontWeight: 700,
                        color: "var(--text-strong)",
                        textDecoration: "none",
                      }}
                    >
                      {guide.title}
                    </a>
                    <span className="tag tag-teal">{guide.pages}</span>
                  </div>
                  <p
                    style={{
                      margin: "0.2rem 0 0",
                      fontSize: "0.85rem",
                      color: "var(--text-soft)",
                    }}
                  >
                    {guide.description}
                  </p>
                </li>
              ))}
            </ul>
          </div>

          {/* Media alternatives */}
          <div>
            <p className="section-label">When Reading Is Hard</p>
            <p className="section-subtitle" style={{ marginBottom: "1rem" }}>
              Some days you need audio, captions, or a short external resource before you can come
              back to a full guide.
            </p>
            <ul
              style={{ listStyle: "none", margin: 0, padding: 0, display: "grid", gap: "0.5rem" }}
            >
              {mediaAlternatives.map((item) => (
                <li
                  key={item.href}
                  style={{
                    border: "1px solid var(--line)",
                    borderRadius: "0.65rem",
                    padding: "0.7rem 0.9rem",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      gap: "0.75rem",
                    }}
                  >
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noreferrer"
                      style={{
                        fontWeight: 700,
                        color: "var(--text-strong)",
                        textDecoration: "none",
                      }}
                    >
                      {item.title}
                    </a>
                    <span className="tag tag-amber">{item.format}</span>
                  </div>
                  <p
                    style={{
                      margin: "0.2rem 0 0",
                      fontSize: "0.85rem",
                      color: "var(--text-soft)",
                    }}
                  >
                    {item.description}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Still not sure CTA */}
      <section className="content-section">
        <div className="tldr-box">
          <p className="eyebrow">Still not sure?</p>
          <h2
            style={{ marginTop: "0.5rem", fontSize: "1.5rem", lineHeight: 1.3 }}
          >
            Use Start Here and let the site narrow it down for you.
          </h2>
          <p style={{ marginTop: "0.5rem", fontSize: "0.9rem", color: "var(--text-soft)" }}>
            Pick the struggle that matches today. You will get one page to understand it, one tool
            to use today, one plan for the week, and one deeper next step.
          </p>
          <div className="page-actions" style={{ marginTop: "1rem" }}>
            <Link href="/start-here" className="btn-primary">
              Open Start Here
            </Link>
            <Link href="/care" className="btn-soft">
              Care navigation
            </Link>
          </div>
          <p
            className="kicker-label"
            style={{ marginTop: "1.25rem", marginBottom: "0.5rem" }}
          >
            Good first stops
          </p>
          <ul className="check-list">
            <li>Getting started when you feel overwhelmed</li>
            <li>Executive function explained simply</li>
            <li>Time blindness</li>
            <li>ADHD and relationships</li>
          </ul>
        </div>
      </section>
    </div>
  );
}
