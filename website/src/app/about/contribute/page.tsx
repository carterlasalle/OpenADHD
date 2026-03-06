import Link from "next/link";

const contributionWays = [
  "Submit practical tips that worked for you.",
  "Propose updates to outdated guide sections.",
  "Improve accessibility and reading flow.",
  "Contribute scripts for school/work/home conversations.",
  "Translate templates and key pages.",
  "Help test tools and report UX friction.",
];

export default function ContributePage() {
  return (
    <section className="section-shell" style={{ paddingTop: "7rem" }}>
      <div className="container-wrap">
        <article className="surface-panel" style={{ padding: "1rem" }}>
          <p className="eyebrow">Contribute</p>
          <h1 className="hero-title" style={{ marginTop: "0.6rem" }}>
            Help build OpenADHD as a public-good support library
          </h1>
          <p className="hero-subtext">
            We welcome contributions from people with lived experience, educators, clinicians,
            designers, and developers. The standard is practical clarity and nonjudgmental support.
          </p>
          <ul className="check-list" style={{ marginTop: "0.8rem" }}>
            {contributionWays.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>

          <div className="page-actions">
            <a className="button-primary" href="https://github.com/carterlasalle/OpenADHD" target="_blank" rel="noreferrer">
              Open GitHub
            </a>
            <Link className="button-secondary" href="/about">
              Back to About
            </Link>
            <Link className="button-secondary" href="/community">
              Community Programs
            </Link>
          </div>
        </article>
      </div>
    </section>
  );
}
