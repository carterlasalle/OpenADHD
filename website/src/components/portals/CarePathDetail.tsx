import Link from "next/link";
import type { CarePathway, StepItem } from "@/content/care";

interface CarePathDetailProps {
  pathway: CarePathway;
  focusAreas: StepItem[];
  relatedLinks?: { label: string; href: string }[];
}

export default function CarePathDetail({
  pathway,
  focusAreas,
  relatedLinks = [],
}: CarePathDetailProps) {
  return (
    <>
      {/* Hero */}
      <section
        className="animate-fade-in-up"
        style={{
          paddingTop: "8rem",
          paddingBottom: "2.5rem",
          width: "min(1180px, 100% - 2rem)",
          margin: "0 auto",
        }}
      >
        <span className="eyebrow">Care Pathway</span>
        <h1
          style={{
            fontFamily: "var(--font-serif), Georgia, serif",
            fontSize: "clamp(2rem, 5vw, 3.4rem)",
            fontWeight: 700,
            lineHeight: 1.12,
            letterSpacing: "-0.01em",
            marginTop: "0.8rem",
            maxWidth: "28ch",
          }}
        >
          {pathway.title}
        </h1>
        <p className="lede" style={{ maxWidth: "62ch", marginTop: "0.9rem" }}>
          {pathway.description}
        </p>

        <div className="callout animate-fade-in-up stagger-2" style={{ marginTop: "1.2rem", maxWidth: "66ch" }}>
          <strong style={{ fontSize: "0.78rem", textTransform: "uppercase", letterSpacing: "0.06em", color: "var(--brand)" }}>
            What to do first
          </strong>
          <p style={{ margin: "0.35rem 0 0", fontSize: "0.95rem", lineHeight: 1.6 }}>
            {pathway.firstStep}
          </p>
        </div>
      </section>

      {/* Tool + Guide cards */}
      <section
        style={{
          background: "var(--surface-alt)",
          borderTop: "1px solid var(--line)",
          borderBottom: "1px solid var(--line)",
          padding: "2.5rem 0",
        }}
        aria-labelledby="pathway-tools-heading"
      >
        <div
          style={{
            width: "min(1180px, 100% - 2rem)",
            margin: "0 auto",
            display: "grid",
            gap: "1.5rem",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          }}
        >
          <article className="card-feature" style={{ margin: 0 }}>
            <div style={{ display: "flex", alignItems: "center", gap: "0.7rem", marginBottom: "0.4rem" }}>
              <div className="icon-wrap icon-wrap-sm icon-wrap-teal" aria-hidden="true">🛠️</div>
              <h2 id="pathway-tools-heading" className="section-title" style={{ margin: 0 }}>
                Tool to Use Today
              </h2>
            </div>
            <p style={{ color: "var(--text-muted)", fontSize: "0.93rem", lineHeight: 1.6, margin: 0 }}>
              {pathway.toolToday}
            </p>
            <Link href="/tools" className="btn-link" style={{ marginTop: "0.75rem", display: "inline-flex", fontWeight: 700 }}>
              Open interactive tools →
            </Link>
          </article>

          <article className="card-feature" style={{ margin: 0 }}>
            <div style={{ display: "flex", alignItems: "center", gap: "0.7rem", marginBottom: "0.4rem" }}>
              <div className="icon-wrap icon-wrap-sm icon-wrap-purple" aria-hidden="true">📖</div>
              <h2 className="section-title" style={{ margin: 0 }}>
                Deeper Guide
              </h2>
            </div>
            <p style={{ color: "var(--text-muted)", fontSize: "0.93rem", lineHeight: 1.6, margin: 0 }}>
              {pathway.deeperGuide}
            </p>
            <Link href="/library" className="btn-link" style={{ marginTop: "0.75rem", display: "inline-flex", fontWeight: 700 }}>
              Open deep guides →
            </Link>
          </article>
        </div>
      </section>

      {/* One-Week Plan */}
      <section
        style={{
          width: "min(1180px, 100% - 2rem)",
          margin: "0 auto",
          padding: "2.5rem 0",
        }}
        aria-labelledby="week-plan-heading"
      >
        <div className="section-label" id="week-plan-heading">
          One-Week Stabilization Plan
        </div>
        <ol
          style={{
            listStyle: "none",
            margin: "1rem 0 0",
            padding: 0,
            display: "grid",
            gap: "0.6rem",
          }}
        >
          {pathway.weekPlan.map((step, index) => (
            <li
              key={step}
              style={{
                border: "1px solid var(--line)",
                borderRadius: "var(--radius-md)",
                background: "var(--surface)",
                padding: "0.9rem 1rem",
                display: "flex",
                gap: "0.85rem",
                alignItems: "flex-start",
              }}
            >
              <span className="step-badge" aria-hidden="true">{index + 1}</span>
              <p style={{ margin: 0, fontSize: "0.95rem", lineHeight: 1.6 }}>{step}</p>
            </li>
          ))}
        </ol>
      </section>

      {/* Focus Areas Checklist */}
      <section
        style={{
          background: "var(--surface-alt)",
          borderTop: "1px solid var(--line)",
          borderBottom: "1px solid var(--line)",
          padding: "2.5rem 0",
        }}
        aria-labelledby="checklist-heading"
      >
        <div style={{ width: "min(1180px, 100% - 2rem)", margin: "0 auto" }}>
          <div className="section-label" id="checklist-heading">
            Clinical Navigation Checklist
          </div>
          <div style={{ marginTop: "1rem", display: "grid", gap: "0.6rem" }}>
            {focusAreas.map((item) => (
              <details key={item.title} className="rich-details">
                <summary>{item.title}</summary>
                <div className="details-body">
                  <p style={{ margin: 0, color: "var(--text-muted)", fontSize: "0.93rem", lineHeight: 1.65 }}>
                    {item.details}
                  </p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Related Links */}
      {relatedLinks.length > 0 && (
        <section
          style={{
            width: "min(1180px, 100% - 2rem)",
            margin: "0 auto",
            padding: "2rem 0",
          }}
          aria-labelledby="related-heading"
        >
          <div className="section-label" id="related-heading">Related pages</div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "0.65rem", marginTop: "0.75rem" }}>
            {relatedLinks.map((link) => (
              <Link key={link.href} href={link.href} className="chip">
                {link.label}
              </Link>
            ))}
          </div>
        </section>
      )}
    </>
  );
}
