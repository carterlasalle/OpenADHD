"use client";

import Link from "next/link";

const navigateLinks = [
  { href: "/start-here", label: "Start Here" },
  { href: "/tools", label: "Tools & Strategies" },
  { href: "/library", label: "Guides & Library" },
  { href: "/care", label: "Care Pathways" },
  { href: "/about", label: "About" },
  { href: "/about/contribute", label: "Contribute" },
] as const;

const portalLinks = [
  { href: "/students", label: "Students" },
  { href: "/adults", label: "Adults" },
  { href: "/parents-partners", label: "Parents & Partners" },
  { href: "/teachers", label: "Teachers" },
  { href: "/managers", label: "Managers" },
] as const;

const supportLinks = [
  {
    href: "https://988lifeline.org",
    label: "988 Lifeline",
    detail: "Call or text 988",
  },
  {
    href: "https://www.crisistextline.org",
    label: "Crisis Text Line",
    detail: "Text HOME to 741741",
  },
  { href: "https://chadd.org", label: "CHADD", detail: "Evidence-based ADHD support" },
  { href: "https://add.org", label: "ADDA", detail: "Adult ADHD resources" },
] as const;

export default function Footer() {
  return (
    <footer
      style={{
        background: "var(--surface)",
        borderTop: "1px solid var(--line)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Brand gradient top border accent */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: "3px",
          background:
            "linear-gradient(90deg, var(--brand) 0%, var(--purple) 50%, var(--accent) 100%)",
          opacity: 0.7,
        }}
      />

      <div
        style={{
          width: "min(1180px, 100% - 2rem)",
          margin: "0 auto",
          padding: "3rem 0 2rem",
          display: "grid",
          gap: "2.5rem",
          gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
        }}
      >
        {/* Brand section */}
        <section style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
          <Link
            href="/"
            aria-label="OpenADHD home"
            style={{
              display: "inline-flex",
              alignItems: "baseline",
              gap: 0,
              textDecoration: "none",
              fontFamily: "var(--font-serif), Georgia, serif",
              fontSize: "1.25rem",
              letterSpacing: "-0.01em",
            }}
          >
            <span
              style={{
                display: "inline-flex",
                alignItems: "center",
                background: "var(--brand)",
                color: "#fff",
                fontWeight: 800,
                fontSize: "0.68em",
                letterSpacing: "0.04em",
                textTransform: "uppercase",
                padding: "0.15em 0.5em 0.18em",
                borderRadius: "6px 6px 6px 2px",
                marginRight: "0.28em",
                lineHeight: 1.4,
                position: "relative",
                top: "-0.05em",
              }}
            >
              Open
            </span>
            <strong
              style={{
                color: "var(--text-strong)",
                fontWeight: 800,
                fontStyle: "normal",
                letterSpacing: "-0.02em",
              }}
            >
              ADHD
            </strong>
          </Link>
          <p
            style={{
              fontSize: "0.9rem",
              color: "var(--text-muted)",
              lineHeight: 1.6,
              margin: 0,
            }}
          >
            Free-first, low-friction ADHD support. One practical step now, one realistic
            plan next.
          </p>
          <p
            style={{
              fontSize: "0.83rem",
              color: "var(--brand)",
              fontWeight: 700,
              margin: 0,
              letterSpacing: "0.01em",
            }}
          >
            Every resource is free-first. No diagnosis required.
          </p>
          <p
            style={{
              fontSize: "0.76rem",
              color: "var(--text-faint)",
              lineHeight: 1.5,
              margin: 0,
            }}
          >
            Educational support only. Not medical advice. For emergency support, contact
            local services.
          </p>
        </section>

        {/* Navigate column */}
        <section>
          <h2
            style={{
              fontSize: "0.72rem",
              fontWeight: 800,
              textTransform: "uppercase",
              letterSpacing: "0.12em",
              color: "var(--text-faint)",
              marginBottom: "1rem",
              fontFamily: "var(--font-sans), sans-serif",
            }}
          >
            Navigate
          </h2>
          <ul
            style={{
              listStyle: "none",
              margin: 0,
              padding: 0,
              display: "grid",
              gap: "0.55rem",
            }}
          >
            {navigateLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  style={{
                    fontSize: "0.9rem",
                    color: "var(--text-muted)",
                    textDecoration: "none",
                    transition: "color 150ms",
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.color = "var(--brand)")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.color = "var(--text-muted)")
                  }
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </section>

        {/* Portals column */}
        <section>
          <h2
            style={{
              fontSize: "0.72rem",
              fontWeight: 800,
              textTransform: "uppercase",
              letterSpacing: "0.12em",
              color: "var(--text-faint)",
              marginBottom: "1rem",
              fontFamily: "var(--font-sans), sans-serif",
            }}
          >
            Portals
          </h2>
          <ul
            style={{
              listStyle: "none",
              margin: 0,
              padding: 0,
              display: "grid",
              gap: "0.55rem",
            }}
          >
            {portalLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  style={{
                    fontSize: "0.9rem",
                    color: "var(--text-muted)",
                    textDecoration: "none",
                    transition: "color 150ms",
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.color = "var(--brand)")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.color = "var(--text-muted)")
                  }
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </section>

        {/* Crisis & Safety column */}
        <section>
          <h2
            style={{
              fontSize: "0.72rem",
              fontWeight: 800,
              textTransform: "uppercase",
              letterSpacing: "0.12em",
              color: "var(--text-faint)",
              marginBottom: "1rem",
              fontFamily: "var(--font-sans), sans-serif",
            }}
          >
            Crisis &amp; Safety
          </h2>
          <ul
            style={{
              listStyle: "none",
              margin: 0,
              padding: 0,
              display: "grid",
              gap: "0.9rem",
            }}
          >
            {supportLinks.map((item) => (
              <li key={item.href} style={{ display: "flex", flexDirection: "column", gap: "0.15rem" }}>
                <a
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    fontSize: "0.9rem",
                    fontWeight: 700,
                    color: "var(--text)",
                    textDecoration: "none",
                    transition: "color 150ms",
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.color = "var(--brand)")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.color = "var(--text)")
                  }
                >
                  {item.label}
                </a>
                <span
                  style={{
                    fontSize: "0.76rem",
                    color: "var(--text-faint)",
                    lineHeight: 1.4,
                  }}
                >
                  {item.detail}
                </span>
              </li>
            ))}
          </ul>
        </section>

        {/* Public-Good Model column */}
        <section style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
          <h2
            style={{
              fontSize: "0.72rem",
              fontWeight: 800,
              textTransform: "uppercase",
              letterSpacing: "0.12em",
              color: "var(--text-faint)",
              fontFamily: "var(--font-sans), sans-serif",
              margin: 0,
            }}
          >
            Public-Good Model
          </h2>
          <ul
            className="check-list"
            style={{ fontSize: "0.88rem", color: "var(--text-muted)" }}
          >
            <li>Free-first core tools and guides</li>
            <li>Open contribution workflows</li>
            <li>Transparent editorial and source review</li>
            <li>School-friendly template licensing</li>
          </ul>
          <Link
            href="/about/contribute"
            style={{
              display: "inline-flex",
              alignSelf: "flex-start",
              borderRadius: "var(--radius-pill)",
              border: "1px solid var(--line)",
              padding: "0.38rem 0.78rem",
              fontSize: "0.78rem",
              fontWeight: 700,
              color: "var(--text-muted)",
              textDecoration: "none",
              transition: "background 150ms, color 150ms, border-color 150ms",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "color-mix(in oklab, var(--brand) 10%, var(--surface))";
              e.currentTarget.style.color = "var(--brand)";
              e.currentTarget.style.borderColor = "color-mix(in oklab, var(--brand) 30%, var(--line))";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "";
              e.currentTarget.style.color = "var(--text-muted)";
              e.currentTarget.style.borderColor = "var(--line)";
            }}
          >
            Contribute to OpenADHD
          </Link>
        </section>
      </div>

      {/* Bottom bar */}
      <div
        style={{
          borderTop: "1px solid var(--line)",
          padding: "1rem 0",
        }}
      >
        <div
          style={{
            width: "min(1180px, 100% - 2rem)",
            margin: "0 auto",
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "0.5rem",
            fontSize: "0.76rem",
            color: "var(--text-faint)",
          }}
        >
          <p style={{ margin: 0 }}>
            &copy; {new Date().getFullYear()} OpenADHD. Open-source educational project.
          </p>
          <p
            style={{
              margin: 0,
              display: "flex",
              alignItems: "center",
              gap: "0.4rem",
            }}
          >
            <span
              style={{
                display: "inline-block",
                width: "6px",
                height: "6px",
                borderRadius: "50%",
                background: "var(--brand)",
                flexShrink: 0,
              }}
              aria-hidden="true"
            />
            Made with care for the ADHD community.
          </p>
          <p style={{ margin: 0 }}>Built for accessibility, clarity, and nonjudgmental support.</p>
        </div>
      </div>
    </footer>
  );
}
