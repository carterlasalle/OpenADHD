import Link from "next/link";
import CarePathwaysGrid from "@/components/portals/CarePathwaysGrid";
import {
  carePathways,
  careResourceLinks,
  diagnosisProcess,
  lowCostCareOptions,
  medicationEducation,
  selfScreeningEducation,
  therapyAndCoaching,
} from "@/content/care";

const portalLinks = [
  { label: "Students", href: "/students", emoji: "🎓" },
  { label: "Adults", href: "/adults", emoji: "🏠" },
  { label: "Parents & Partners", href: "/parents-partners", emoji: "❤️" },
  { label: "Teachers", href: "/teachers", emoji: "🍎" },
  { label: "Managers", href: "/managers", emoji: "💼" },
];

export default function CarePage() {
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
        <span className="eyebrow">Diagnosis &amp; Care Navigation</span>
        <h1
          style={{
            fontFamily: "var(--font-serif), Georgia, serif",
            fontSize: "clamp(2rem, 5vw, 3.6rem)",
            fontWeight: 700,
            lineHeight: 1.12,
            letterSpacing: "-0.01em",
            marginTop: "0.8rem",
            maxWidth: "22ch",
          }}
        >
          Clear ADHD care guidance without gatekeeping.
        </h1>
        <p
          className="lede"
          style={{ maxWidth: "62ch", marginTop: "0.9rem" }}
        >
          Choose your current situation and get a practical next-step plan: one
          page to understand it, one tool to use today, one week plan, and one
          deeper guide.
        </p>

        <div
          className="callout animate-fade-in-up stagger-2"
          style={{ marginTop: "1.2rem", maxWidth: "66ch" }}
        >
          <strong style={{ fontSize: "0.78rem", textTransform: "uppercase", letterSpacing: "0.06em", color: "var(--brand)" }}>
            Clinical safety note
          </strong>
          <p style={{ margin: "0.35rem 0 0", fontSize: "0.95rem", lineHeight: 1.6 }}>
            OpenADHD provides educational guidance only. We do not diagnose. If
            you are in immediate danger or crisis in the U.S., call or text{" "}
            <a href="tel:988" style={{ fontWeight: 700, color: "var(--danger)" }}>988</a>.
          </p>
        </div>
      </section>

      {/* Care Pathways */}
      <section
        style={{
          width: "min(1180px, 100% - 2rem)",
          margin: "0 auto",
          paddingBottom: "2.5rem",
        }}
        aria-labelledby="pathways-heading"
      >
        <div className="section-label" id="pathways-heading">
          Pick your care path
        </div>
        <p className="section-subtitle" style={{ marginBottom: "1.2rem" }}>
          Start where you are right now. Each path is built for low-friction
          action under real-life ADHD load.
        </p>
        <CarePathwaysGrid pathways={carePathways} />
      </section>

      {/* Self-Screening + Diagnosis Process */}
      <section
        style={{
          background: "var(--surface-alt)",
          borderTop: "1px solid var(--line)",
          borderBottom: "1px solid var(--line)",
          padding: "2.5rem 0",
        }}
        aria-labelledby="screening-heading"
      >
        <div
          style={{
            width: "min(1180px, 100% - 2rem)",
            margin: "0 auto",
            display: "grid",
            gap: "1.5rem",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
          }}
        >
          <article className="section-block" style={{ margin: 0 }}>
            <h2 className="section-title" id="screening-heading">
              Educational Self-Screening
            </h2>
            <p className="section-subtitle">
              Use this to decide whether to seek professional evaluation. This
              is informational, not diagnostic.
            </p>
            <div style={{ marginTop: "1rem", display: "grid", gap: "0.5rem" }}>
              {selfScreeningEducation.map((item) => (
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
          </article>

          <article className="section-block" style={{ margin: 0 }}>
            <h2 className="section-title">Diagnosis Process, Step by Step</h2>
            <p className="section-subtitle">
              Most evaluations follow this general structure.
            </p>
            <ol
              style={{
                listStyle: "none",
                margin: "1rem 0 0",
                padding: 0,
                display: "grid",
                gap: "0.5rem",
                counterReset: "steps",
              }}
            >
              {diagnosisProcess.map((step, i) => (
                <li
                  key={step.title}
                  style={{
                    border: "1px solid var(--line)",
                    borderRadius: "var(--radius-md)",
                    background: "var(--surface)",
                    padding: "0.85rem 1rem",
                    display: "flex",
                    gap: "0.75rem",
                    alignItems: "flex-start",
                  }}
                >
                  <span className="step-badge" aria-hidden="true">{i + 1}</span>
                  <div>
                    <h3 style={{ fontSize: "0.97rem", fontWeight: 700, margin: 0 }}>
                      {step.title}
                    </h3>
                    <p style={{ margin: "0.25rem 0 0", fontSize: "0.88rem", color: "var(--text-muted)", lineHeight: 1.55 }}>
                      {step.details}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
            <div style={{ marginTop: "1rem" }}>
              <Link href="/care/not-diagnosed" className="btn-link">
                Open evaluation prep pathway →
              </Link>
            </div>
          </article>
        </div>
      </section>

      {/* Low-Cost Options + Medication Education */}
      <section
        style={{
          width: "min(1180px, 100% - 2rem)",
          margin: "0 auto",
          padding: "2.5rem 0",
        }}
        aria-labelledby="lowcost-heading"
      >
        <div
          style={{
            display: "grid",
            gap: "1.5rem",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
          }}
        >
          <article className="section-block" style={{ margin: 0 }}>
            <div style={{ display: "flex", alignItems: "center", gap: "0.7rem", marginBottom: "0.4rem" }}>
              <div className="icon-wrap icon-wrap-sm icon-wrap-teal" aria-hidden="true">💰</div>
              <h2 className="section-title" id="lowcost-heading" style={{ margin: 0 }}>
                If Money Is Tight
              </h2>
            </div>
            <p className="section-subtitle">
              Lower-cost routes are real. Use this list to reduce financial
              friction when seeking care.
            </p>
            <div style={{ marginTop: "1rem", display: "grid", gap: "0.5rem" }}>
              {lowCostCareOptions.map((option) => (
                <div
                  key={option.title}
                  style={{
                    border: "1px solid var(--line)",
                    borderRadius: "var(--radius-md)",
                    background: "var(--surface)",
                    padding: "0.8rem 1rem",
                  }}
                >
                  <h3 style={{ fontSize: "0.95rem", fontWeight: 700, margin: 0 }}>
                    {option.title}
                  </h3>
                  <p style={{ margin: "0.25rem 0 0", fontSize: "0.87rem", color: "var(--text-muted)", lineHeight: 1.55 }}>
                    {option.details}
                  </p>
                </div>
              ))}
            </div>
          </article>

          <article className="section-block" style={{ margin: 0 }}>
            <div style={{ display: "flex", alignItems: "center", gap: "0.7rem", marginBottom: "0.4rem" }}>
              <div className="icon-wrap icon-wrap-sm icon-wrap-amber" aria-hidden="true">💊</div>
              <h2 className="section-title" style={{ margin: 0 }}>
                Medication Education Hub
              </h2>
            </div>
            <p className="section-subtitle">
              Learn key concepts to discuss with your prescriber. Never start,
              stop, or adjust medication without clinical guidance.
            </p>
            <div style={{ marginTop: "1rem", display: "grid", gap: "0.5rem" }}>
              {medicationEducation.map((item) => (
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
            <div style={{ marginTop: "1rem" }}>
              <Link href="/care/trying-meds" className="btn-link">
                Open medication pathway →
              </Link>
            </div>
          </article>
        </div>
      </section>

      {/* Therapy and Coaching */}
      <section
        style={{
          background: "var(--surface-alt)",
          borderTop: "1px solid var(--line)",
          borderBottom: "1px solid var(--line)",
          padding: "2.5rem 0",
        }}
        aria-labelledby="therapy-heading"
      >
        <div style={{ width: "min(1180px, 100% - 2rem)", margin: "0 auto" }}>
          <div className="section-label" id="therapy-heading">
            Therapy, Coaching, and Skills Support
          </div>
          <p className="section-subtitle" style={{ marginBottom: "1.2rem" }}>
            Different support types have different scopes. Use this to understand what each offers.
          </p>
          <div className="grid-auto-2">
            {therapyAndCoaching.map((item) => (
              <article key={item.title} className="card-feature" style={{ margin: 0 }}>
                <h3 style={{ fontSize: "1.05rem", margin: 0 }}>{item.title}</h3>
                <p style={{ color: "var(--text-muted)", fontSize: "0.93rem", lineHeight: 1.6, margin: 0 }}>
                  {item.details}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Audience Portals */}
      <section
        style={{
          width: "min(1180px, 100% - 2rem)",
          margin: "0 auto",
          padding: "2.5rem 0",
        }}
        aria-labelledby="portals-heading"
      >
        <div className="section-label" id="portals-heading">
          Audience portals
        </div>
        <p className="section-subtitle" style={{ marginBottom: "1.1rem" }}>
          Support changes by context. Choose the portal that matches your real environment.
        </p>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "0.65rem" }}>
          {portalLinks.map((link) => (
            <Link key={link.href} href={link.href} className="chip">
              <span aria-hidden="true">{link.emoji}</span>
              {link.label}
            </Link>
          ))}
        </div>
      </section>

      {/* Trusted External Resources */}
      <section
        style={{
          borderTop: "1px solid var(--line)",
          background: "var(--surface)",
          padding: "2.5rem 0",
        }}
        aria-labelledby="resources-heading"
      >
        <div style={{ width: "min(1180px, 100% - 2rem)", margin: "0 auto" }}>
          <div className="section-label" id="resources-heading">
            Trusted external resources
          </div>
          <div className="grid-auto-2">
            {careResourceLinks.map((item) => (
              <a
                key={item.href}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="card-tool"
                style={{ display: "flex", flexDirection: "column", gap: "0.4rem" }}
              >
                <h3 style={{ fontSize: "1.05rem", margin: 0 }}>{item.title}</h3>
                <p style={{ color: "var(--text-muted)", fontSize: "0.9rem", lineHeight: 1.55, margin: 0 }}>
                  {item.description}
                </p>
                <p style={{ color: "var(--brand)", fontWeight: 700, fontSize: "0.87rem", margin: 0 }}>
                  Open resource ↗
                </p>
              </a>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
