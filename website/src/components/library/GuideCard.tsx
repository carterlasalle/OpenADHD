import Link from "next/link";
import type { Guide } from "@/data/guides";

interface GuideCardProps {
  guide: Guide;
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

export default function GuideCard({ guide }: GuideCardProps) {
  // guides.ts Guide type does not have a `tag` field — derive a display tag from the slug
  const derivedTag = (() => {
    if (guide.slug.includes("overwhelm") || guide.slug.includes("getting-started"))
      return "Overwhelm";
    if (guide.slug.includes("executive")) return "Core Skill";
    if (guide.slug.includes("time")) return "Time";
    if (guide.slug.includes("motivation") || guide.slug.includes("burnout")) return "Energy";
    if (guide.slug.includes("emotional") || guide.slug.includes("emotion")) return "Emotions";
    if (guide.slug.includes("sleep")) return "Sleep";
    if (guide.slug.includes("relationship")) return "Relationships";
    if (guide.slug.includes("anxiety")) return "Overlap";
    if (guide.slug.includes("school") || guide.slug.includes("study")) return "School";
    if (guide.slug.includes("work") || guide.slug.includes("productiv")) return "Work";
    if (guide.slug.includes("routine")) return "Routine";
    return "Guide";
  })();

  const tagClass = tagColorMap[derivedTag] ?? "tag-brand";

  return (
    <article
      className="card-tool"
      style={{ textDecoration: "none", display: "flex", flexDirection: "column" }}
    >
      {/* Tag pill */}
      <span className={`tag ${tagClass}`}>{derivedTag}</span>

      {/* Title */}
      <h3 style={{ marginTop: "0.4rem", fontSize: "1.1rem", lineHeight: 1.3 }}>
        {guide.title}
      </h3>

      {/* Summary */}
      <p
        style={{
          marginTop: "0.35rem",
          color: "var(--text-soft)",
          fontSize: "0.9rem",
          lineHeight: 1.55,
          display: "-webkit-box",
          WebkitLineClamp: 3,
          WebkitBoxOrient: "vertical",
          overflow: "hidden",
        }}
      >
        {guide.summary}
      </p>

      {/* Who it's for */}
      <p
        style={{
          marginTop: "0.5rem",
          fontSize: "0.82rem",
          color: "var(--text-faint)",
        }}
      >
        <strong style={{ color: "var(--text-muted)" }}>For:</strong> {guide.whoFor}
      </p>

      {/* Do first callout */}
      <div className="callout" style={{ marginTop: "0.65rem", fontSize: "0.85rem" }}>
        <strong>&#9200; Do first:</strong> {guide.doFirst}
      </div>

      {/* TLDR bullets (up to 3) */}
      {guide.tldr && guide.tldr.length > 0 && (
        <ul
          className="check-list"
          style={{ marginTop: "0.65rem", fontSize: "0.85rem" }}
        >
          {guide.tldr.slice(0, 3).map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      )}

      {/* Actions */}
      <div
        style={{
          marginTop: "auto",
          paddingTop: "0.85rem",
          display: "flex",
          gap: "0.6rem",
          flexWrap: "wrap",
          alignItems: "center",
        }}
      >
        <Link
          href={`/library/${guide.slug}`}
          className="btn-primary"
          style={{ fontSize: "0.875rem" }}
        >
          Open guide
        </Link>
        <Link
          href={guide.toolNow.href}
          className="btn-soft"
          style={{ fontSize: "0.875rem" }}
        >
          Use {guide.toolNow.name}
        </Link>
      </div>

      {/* Printable link */}
      <a
        href={guide.printable.href}
        className="btn-link"
        style={{
          marginTop: "0.6rem",
          display: "inline-flex",
          fontSize: "0.82rem",
          color: "var(--brand)",
        }}
      >
        &#11015;&#65039; Download {guide.printable.label}
      </a>
    </article>
  );
}
