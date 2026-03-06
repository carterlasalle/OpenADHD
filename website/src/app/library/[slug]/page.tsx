import Link from "next/link";
import { notFound } from "next/navigation";
import { getGuideBySlug, guides } from "@/data/guides";

interface GuidePageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return guides.map((guide) => ({ slug: guide.slug }));
}

const tagColorMap: Record<string, string> = {
  Overwhelm: "tag-brand",
  "ADHD 101": "tag-teal",
  "Core Skill": "tag-brand",
  Time: "tag-amber",
  Energy: "tag-purple",
  Emotions: "tag-purple",
  Sleep: "tag-teal",
  Relationships: "tag-brand",
  Overlap: "tag-purple",
  School: "tag-teal",
  Work: "tag-amber",
  Routine: "tag-teal",
};

function deriveTag(slug: string): string {
  if (slug.includes("overwhelm") || slug.includes("getting-started")) return "Overwhelm";
  if (slug.includes("executive")) return "Core Skill";
  if (slug.includes("time")) return "Time";
  if (slug.includes("motivation") || slug.includes("burnout")) return "Energy";
  if (slug.includes("emotional") || slug.includes("emotion")) return "Emotions";
  if (slug.includes("sleep")) return "Sleep";
  if (slug.includes("relationship")) return "Relationships";
  if (slug.includes("anxiety")) return "Overlap";
  if (slug.includes("school") || slug.includes("study")) return "School";
  if (slug.includes("work") || slug.includes("productiv")) return "Work";
  if (slug.includes("routine")) return "Routine";
  return "Guide";
}

export default async function GuidePage({ params }: GuidePageProps) {
  const { slug } = await params;
  const guide = getGuideBySlug(slug);

  if (!guide) {
    notFound();
  }

  const derivedTag = deriveTag(guide.slug);
  const tagClass = tagColorMap[derivedTag] ?? "tag-brand";

  return (
    <div className="page-shell">
      {/* Back link */}
      <Link
        href="/library"
        className="btn-link"
        style={{ display: "inline-flex", marginBottom: "1.25rem", fontSize: "0.9rem" }}
      >
        &#8592; Back to Library
      </Link>

      {/* Header */}
      <section className="hero-surface">
        <span className={`tag ${tagClass}`}>{derivedTag}</span>
        <h1 className="display-title" style={{ marginTop: "0.5rem" }}>
          {guide.title}
        </h1>
        <p className="lede">{guide.summary}</p>

        <div className="notice-ok" style={{ marginTop: "1rem" }}>
          <strong>Who this is for:</strong> {guide.whoFor}
        </div>

        <div className="callout" style={{ marginTop: "0.75rem" }}>
          <strong>&#9200; Do this first:</strong> {guide.doFirst}
        </div>

        <div className="page-actions" style={{ marginTop: "1.25rem" }}>
          <Link href={guide.toolNow.href} className="btn-primary">
            Open {guide.toolNow.name}
          </Link>
          <a href={guide.printable.href} className="btn-muted">
            &#11015;&#65039; Download printable
          </a>
          <Link href="/start-here" className="btn-soft">
            Start Here
          </Link>
        </div>
      </section>

      {/* TL;DR */}
      {guide.tldr && guide.tldr.length > 0 && (
        <section className="content-section">
          <div className="tldr-box">
            <p className="kicker-label">Too long, read this</p>
            <ul className="check-list" style={{ marginTop: "0.6rem" }}>
              {guide.tldr.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </section>
      )}

      {/* Three-tier action cards */}
      <section className="content-section">
        <p className="section-label">Action tiers</p>
        <div className="grid-auto-3" style={{ marginTop: "1rem" }}>
          <div className="card-feature">
            <h2 style={{ fontSize: "1rem", marginBottom: "0.6rem" }}>Minimum Viable</h2>
            <ol
              style={{
                margin: 0,
                paddingLeft: "1.2rem",
                fontSize: "0.9rem",
                color: "var(--text-soft)",
                lineHeight: 1.6,
                display: "flex",
                flexDirection: "column",
                gap: "0.35rem",
              }}
            >
              {guide.minimumViable.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ol>
          </div>

          <div className="card-feature card-feature-teal">
            <h2 style={{ fontSize: "1rem", marginBottom: "0.6rem" }}>If You Have Energy</h2>
            <ol
              style={{
                margin: 0,
                paddingLeft: "1.2rem",
                fontSize: "0.9rem",
                color: "var(--text-soft)",
                lineHeight: 1.6,
                display: "flex",
                flexDirection: "column",
                gap: "0.35rem",
              }}
            >
              {guide.ifYouHaveEnergy.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ol>
          </div>

          <div className="card-feature card-feature-amber">
            <h2 style={{ fontSize: "1rem", marginBottom: "0.6rem" }}>Crisis Mode</h2>
            <ol
              style={{
                margin: 0,
                paddingLeft: "1.2rem",
                fontSize: "0.9rem",
                color: "var(--text-soft)",
                lineHeight: 1.6,
                display: "flex",
                flexDirection: "column",
                gap: "0.35rem",
              }}
            >
              {guide.crisisMode.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* Common patterns */}
      <section className="section-block">
        <p className="section-label">Common Patterns</p>
        <p className="section-subtitle" style={{ marginBottom: "1rem" }}>
          Do any of these feel familiar?
        </p>
        <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "grid", gap: "0.5rem" }}>
          {guide.commonPatterns.map((pattern) => (
            <li
              key={pattern}
              style={{
                padding: "0.6rem 0.85rem",
                borderLeft: "3px solid var(--brand)",
                background: "var(--surface-alt)",
                borderRadius: "0 0.5rem 0.5rem 0",
                fontSize: "0.9rem",
                color: "var(--text)",
              }}
            >
              &#128161; {pattern}
            </li>
          ))}
        </ul>
      </section>

      {/* Week plan */}
      <section className="section-block">
        <p className="section-label">One-Week Plan</p>
        <ol className="week-plan-list" style={{ marginTop: "1rem" }}>
          {guide.weekPlan.map((step, i) => (
            <li key={step} className="week-plan-item">
              <span className="week-day-label">Day {i + 1}</span>
              <span>{step}</span>
            </li>
          ))}
        </ol>
      </section>

      {/* Long-form sections as rich-details accordions */}
      <section className="section-block">
        <p className="section-label">Deeper Explanation</p>
        <p className="section-subtitle" style={{ marginBottom: "1rem" }}>
          Read this part when you want the why behind the tools, not just the next action.
        </p>
        <div style={{ display: "grid", gap: "0.5rem" }}>
          {guide.longFormSections.map((section) => (
            <details key={section.heading} className="rich-details">
              <summary>{section.heading}</summary>
              <div className="details-body">
                {section.bullets && (
                  <ul className="check-list">
                    {section.bullets.map((b) => (
                      <li key={b}>{b}</li>
                    ))}
                  </ul>
                )}
              </div>
            </details>
          ))}
        </div>
      </section>

      {/* Tool card */}
      <section className="section-block">
        <div className="result-block result-block-teal">
          <p className="kicker-label">Tool to use today</p>
          <h2 style={{ fontSize: "1.15rem", marginTop: "0.35rem", marginBottom: "0.4rem" }}>
            {guide.toolNow.name}
          </h2>
          <p style={{ fontSize: "0.9rem", color: "var(--text-soft)", marginBottom: "0.85rem" }}>
            {guide.toolNow.reason}
          </p>
          <Link href={guide.toolNow.href} className="btn-primary">
            Open {guide.toolNow.name}
          </Link>
        </div>
      </section>

      {/* Read next */}
      {guide.deeperReading && guide.deeperReading.length > 0 && (
        <section className="section-block">
          <p className="section-label">Read next</p>
          <ul
            style={{
              listStyle: "none",
              margin: "0.75rem 0 0",
              padding: 0,
              display: "flex",
              flexWrap: "wrap",
              gap: "0.5rem",
            }}
          >
            {guide.deeperReading.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="btn-soft" style={{ fontSize: "0.875rem" }}>
                  {item.label} &#8594;
                </Link>
              </li>
            ))}
          </ul>
        </section>
      )}

      {/* Printable download */}
      <section className="section-block" style={{ paddingBottom: "2rem" }}>
        <a href={guide.printable.href} className="btn-muted">
          &#11015;&#65039; Download printable worksheet: {guide.printable.label}
        </a>
      </section>
    </div>
  );
}
