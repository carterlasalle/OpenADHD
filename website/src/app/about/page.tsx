import Link from "next/link";

const transparencyItems = [
  "Mission and scope",
  "How guides are created and reviewed",
  "Source and evidence policy",
  "Funding and sponsorship disclosure",
  "Partnership criteria and conflict-of-interest notes",
  "How contributors are onboarded",
];

const volunteerTracks = [
  {
    role: "Writers",
    detail: "Draft and update guides using plain-language, ADHD-friendly formatting rules.",
  },
  {
    role: "Designers",
    detail: "Improve readability, print layouts, and low-friction interaction patterns.",
  },
  {
    role: "Clinician reviewers",
    detail: "Review high-stakes content for safety framing and evidence quality.",
  },
  {
    role: "Translation volunteers",
    detail: "Translate priority pages and templates to increase global access.",
  },
  {
    role: "Tool builders",
    detail: "Contribute improvements to calculators, generators, and workflow utilities.",
  },
];

const downloads = [
  {
    title: "OpenADHD Launch Playbook (PDF)",
    href: "/guides/openadhd-launch-playbook.pdf",
    note: "Long-form from-zero-to-launch operational guide.",
  },
  {
    title: "Executive Function Field Manual (PDF)",
    href: "/guides/executive-function-field-manual.pdf",
    note: "Deep reference guide for day-to-day execution supports.",
  },
  {
    title: "Diagnosis and Care Navigator (PDF)",
    href: "/guides/diagnosis-care-navigator.pdf",
    note: "Long-form care navigation guide with scripts and checklists.",
  },
];

export default function AboutPage() {
  return (
    <div className="page-wrap page-hero">
      <section className="section-block" style={{ marginTop: 0 }}>
        <span className="eyebrow">About + Public Good</span>
        <h1 className="display-title">OpenADHD exists to make high-quality ADHD help free, practical, and accessible.</h1>
        <p className="lede">
          We are building a nonprofit-style informational hub: skimmable tools, deep guides, care navigation,
          and support scripts that work in real life, especially on hard days.
        </p>
        <div className="page-actions">
          <Link href="/start-here" className="btn btn-primary">
            Open Start Here
          </Link>
          <Link href="/about/contribute" className="btn btn-muted">
            Contribute
          </Link>
        </div>
      </section>

      <section className="section-block">
        <h2 className="section-title">Mission and Promise</h2>
        <p className="section-subtitle">
          OpenADHD is designed to move people from overwhelm to action quickly:
          one page to understand the issue, one tool to use today, one weekly plan,
          and one deeper guide when they have capacity.
        </p>
        <ul className="check-list" style={{ marginTop: "0.8rem" }}>
          <li>Free-first essentials: no paywall for core help.</li>
          <li>Low-friction UX: short, skimmable, visual, printable.</li>
          <li>Evidence-aware and nonjudgmental language.</li>
          <li>Personalized pathways that work with or without diagnosis.</li>
        </ul>
      </section>

      <section className="section-block">
        <h2 className="section-title">Transparency Standard</h2>
        <p className="section-subtitle">Nonprofit-style transparency is part of the product, not an afterthought.</p>
        <div className="grid-cards" style={{ marginTop: "0.8rem" }}>
          {transparencyItems.map((item) => (
            <article key={item} className="panel">
              <p>{item}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section-block">
        <h2 className="section-title">Editorial Policy</h2>
        <ul className="check-list" style={{ marginTop: "0.8rem" }}>
          <li>Each guide starts with what it is, who it is for, and what to do first.</li>
          <li>All deep guides include minimum version, energy mode, and crisis mode sections.</li>
          <li>We avoid miracle claims, medical overreach, and one-size-fits-all advice.</li>
          <li>High-stakes care content includes explicit educational-only and safety disclaimers.</li>
        </ul>
      </section>

      <section className="section-block">
        <h2 className="section-title">Accessibility and ADHD-Friendly UX</h2>
        <div className="grid-cards" style={{ marginTop: "0.8rem" }}>
          <article className="panel">
            <h3>Cognitive Load</h3>
            <p>Short sections, checklists, and clear next actions reduce decision fatigue.</p>
          </article>
          <article className="panel">
            <h3>Mode Controls</h3>
            <p>Reading mode, dark mode, and Bad Day Mode are available from every page.</p>
          </article>
          <article className="panel">
            <h3>Downloadability</h3>
            <p>Templates and long-form guides are printable for offline use.</p>
          </article>
          <article className="panel">
            <h3>Low Friction</h3>
            <p>No infinite scroll for core guides and no mandatory login for essentials.</p>
          </article>
        </div>
      </section>

      <section className="section-block">
        <h2 className="section-title">Volunteer Pathways</h2>
        <div className="grid-cards" style={{ marginTop: "0.8rem" }}>
          {volunteerTracks.map((track) => (
            <article key={track.role} className="panel">
              <h3>{track.role}</h3>
              <p>{track.detail}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section-block" id="downloads">
        <h2 className="section-title">Long Guides and Downloads</h2>
        <p className="section-subtitle">
          These long-form guides are intended for offline review, coaching sessions, and school/community sharing.
        </p>
        <ul className="template-links">
          {downloads.map((item) => (
            <li key={item.href}>
              <a href={item.href}>{item.title}</a>
              <p style={{ margin: "0.2rem 0 0", color: "var(--text-soft)", fontSize: "0.92rem" }}>{item.note}</p>
            </li>
          ))}
        </ul>
        <div className="notice-ok" style={{ marginTop: "0.9rem" }}>
          Template files are shared with a school-friendly open license intent so educators and support groups can adapt them.
        </div>
      </section>
    </div>
  );
}
