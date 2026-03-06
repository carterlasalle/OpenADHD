import Link from "next/link";
import type { PortalContent } from "@/content/care";

interface PortalPageProps {
  portal: PortalContent;
}

export default function PortalPage({ portal }: PortalPageProps) {
  return (
    <div className="page-shell">
      {/* Header */}
      <section className="hero-surface">
        <p className="eyebrow">Portal</p>
        <h1 className="display-title">{portal.title}</h1>
        <p className="lede">{portal.intro}</p>
      </section>

      {/* How ADHD Shows Up */}
      <section className="section-block">
        <p className="section-label">How ADHD Shows Up Here</p>
        <ul
          style={{
            listStyle: "none",
            margin: "1rem 0 0",
            padding: 0,
            display: "grid",
            gap: "0.5rem",
          }}
        >
          {portal.howItShowsUp.map((item) => (
            <li key={item} className="week-plan-item">
              <span
                style={{
                  display: "inline-block",
                  width: "1.4rem",
                  height: "1.4rem",
                  borderRadius: "50%",
                  background: "var(--brand)",
                  color: "#fff",
                  fontSize: "0.7rem",
                  fontWeight: 700,
                  textAlign: "center",
                  lineHeight: "1.4rem",
                  flexShrink: 0,
                }}
                aria-hidden="true"
              >
                &#10003;
              </span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* Common Misunderstandings */}
      <section className="section-block">
        <p className="section-label">Common Misunderstandings</p>
        <div
          style={{
            marginTop: "1rem",
            display: "grid",
            gap: "0.6rem",
          }}
        >
          {portal.misunderstandings.map((item) => (
            <blockquote key={item} className="highlight-quote">
              {item}
            </blockquote>
          ))}
        </div>
      </section>

      {/* Conversation Scripts */}
      <section className="section-block">
        <p className="section-label">Conversation Scripts</p>
        <p className="section-subtitle" style={{ marginBottom: "1.1rem" }}>
          Ready-to-use language for difficult moments.
        </p>
        <div className="grid-auto-2">
          {portal.scripts.map((script) => (
            <div key={script.title} className="card-feature">
              <h3 style={{ fontSize: "0.95rem", marginBottom: "0.6rem" }}>{script.title}</h3>
              <div className="result-block result-block-brand">
                <p
                  style={{
                    fontStyle: "italic",
                    fontSize: "0.9rem",
                    lineHeight: 1.65,
                    color: "var(--text)",
                    margin: 0,
                  }}
                >
                  &ldquo;{script.text}&rdquo;
                </p>
              </div>
            </div>
          ))}
        </div>
        <p style={{ marginTop: "1rem", fontSize: "0.875rem", color: "var(--text-soft)" }}>
          Need editable variants?{" "}
          <Link href="/tools/script-generator" className="btn-link">
            Use the Script Generator &#8594;
          </Link>
        </p>
      </section>

      {/* What Support Looks Like */}
      <section className="section-block">
        <p className="section-label">What Support Looks Like</p>
        <div className="grid-auto-2" style={{ marginTop: "1rem" }}>
          {/* Helpful */}
          <div className="card-feature card-feature-teal">
            <h2 style={{ fontSize: "1rem", marginBottom: "0.75rem" }}>Helpful</h2>
            <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "grid", gap: "0.45rem" }}>
              {portal.supportLooksLike.map((item) => (
                <li
                  key={item}
                  style={{
                    display: "flex",
                    gap: "0.5rem",
                    fontSize: "0.9rem",
                    color: "var(--text-soft)",
                    alignItems: "flex-start",
                  }}
                >
                  <span
                    style={{ color: "var(--accent)", fontWeight: 700, flexShrink: 0 }}
                    aria-hidden="true"
                  >
                    &#10003;
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Not helpful */}
          <div className="card-feature" style={{ borderColor: "var(--brand)" }}>
            <h2 style={{ fontSize: "1rem", marginBottom: "0.75rem" }}>Not Helpful</h2>
            <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "grid", gap: "0.45rem" }}>
              {portal.supportDoesNotLookLike.map((item) => (
                <li
                  key={item}
                  style={{
                    display: "flex",
                    gap: "0.5rem",
                    fontSize: "0.9rem",
                    color: "var(--text-soft)",
                    alignItems: "flex-start",
                  }}
                >
                  <span
                    style={{ color: "var(--brand)", fontWeight: 700, flexShrink: 0 }}
                    aria-hidden="true"
                  >
                    &#10007;
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Accommodations */}
      <section className="section-block">
        <p className="section-label">Accommodations That Help</p>
        <div
          className="grid-auto-2"
          style={{ marginTop: "1rem" }}
        >
          {portal.accommodations.map((item) => (
            <div
              key={item}
              className="portal-card"
              style={{
                display: "flex",
                alignItems: "flex-start",
                gap: "0.6rem",
                fontSize: "0.9rem",
              }}
            >
              <span
                style={{
                  flexShrink: 0,
                  color: "var(--brand)",
                  fontWeight: 700,
                  fontSize: "1rem",
                  lineHeight: 1.3,
                }}
                aria-hidden="true"
              >
                &#9670;
              </span>
              <span>{item}</span>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
