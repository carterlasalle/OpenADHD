import Link from "next/link";

const monthlyChallenges = [
  {
    week: "Week 1",
    theme: "Time Blocking Reset",
    prompt: "Define one daily planning anchor and track completion for seven days.",
  },
  {
    week: "Week 2",
    theme: "Clutter Stabilization",
    prompt: "Run one 10-minute room reset every day using the five-category method.",
  },
  {
    week: "Week 3",
    theme: "Sleep Ramp-Down",
    prompt: "Use a staged wind-down routine five nights this week.",
  },
  {
    week: "Week 4",
    theme: "Repair Scripts",
    prompt: "Practice one communication repair script in a real conversation.",
  },
];

const localMapSeeds = [
  "University disability services offices",
  "Sliding-scale clinics",
  "CHADD / ADDA local groups",
  "Peer-led body doubling circles",
  "Public library quiet-study spaces",
];

export default function CommunityPage() {
  return (
    <div className="page-wrap page-hero">
      <section className="section-block" style={{ marginTop: 0 }}>
        <span className="eyebrow">Community Layer</span>
        <h1 className="display-title">Structured support, not chaos</h1>
        <p className="lede">
          OpenADHD community design focuses on action and safety: body doubling,
          curated challenges, anonymous story intake, and local resource discovery.
        </p>
      </section>

      <section className="section-block">
        <h2 className="section-title">Body Doubling and Focus Rooms</h2>
        <div className="grid-cards" style={{ marginTop: "0.8rem" }}>
          <article className="panel">
            <h3>Silent Focus Blocks</h3>
            <p>Timed co-working sessions with clear start and end rules.</p>
          </article>
          <article className="panel">
            <h3>Rescue Blocks</h3>
            <p>Short urgent sessions for deadline or overwhelm recovery.</p>
          </article>
          <article className="panel">
            <h3>Accountability Cadence</h3>
            <p>Intention at start, quick check-out at end, no shame framing.</p>
          </article>
        </div>
      </section>

      <section className="section-block">
        <h2 className="section-title">Anonymous Story Intake</h2>
        <p className="section-subtitle">
          Collect practical “what helped” stories with tags for school, work, family, and care navigation.
        </p>
        <ul className="check-list" style={{ marginTop: "0.8rem" }}>
          <li>Prompt 1: What problem were you facing?</li>
          <li>Prompt 2: What tiny action helped first?</li>
          <li>Prompt 3: What should others avoid in this situation?</li>
          <li>Prompt 4: Would you allow this to be shared anonymously?</li>
        </ul>
      </section>

      <section className="section-block">
        <h2 className="section-title">Monthly Skill Challenges</h2>
        <div className="grid-cards" style={{ marginTop: "0.8rem" }}>
          {monthlyChallenges.map((challenge) => (
            <article className="panel" key={challenge.week}>
              <p className="kicker-label">{challenge.week}</p>
              <h3>{challenge.theme}</h3>
              <p>{challenge.prompt}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section-block">
        <h2 className="section-title">Local Resource Map Starter</h2>
        <p className="section-subtitle">
          Seed categories for a searchable local support map by city/region.
        </p>
        <ul className="check-list" style={{ marginTop: "0.8rem" }}>
          {localMapSeeds.map((seed) => (
            <li key={seed}>{seed}</li>
          ))}
        </ul>
      </section>

      <section className="section-block notice-warn">
        <h2 className="section-title">Safety and Scope</h2>
        <p>
          Community spaces are support layers, not clinical care. For immediate crisis in the U.S.,
          call or text 988.
        </p>
        <div className="page-actions">
          <Link href="/care" className="btn btn-primary">
            Open Care Navigation
          </Link>
          <Link href="/about/contribute" className="btn btn-muted">
            Help Build Community Programs
          </Link>
        </div>
      </section>
    </div>
  );
}
