import Link from "next/link";
import type { CarePathway } from "@/content/care";

interface CarePathwaysGridProps {
  pathways: CarePathway[];
}

export default function CarePathwaysGrid({ pathways }: CarePathwaysGridProps) {
  return (
    <div className="grid-auto-2">
      {pathways.map((pathway) => (
        <article key={pathway.slug} className="card-feature" style={{ display: "flex", flexDirection: "column", gap: "0.6rem" }}>
          <p className="eyebrow" style={{ margin: 0 }}>Care Path</p>
          <h3 style={{ fontSize: "1.3rem", fontWeight: 800, lineHeight: 1.2, margin: 0 }}>
            {pathway.title}
          </h3>
          <p style={{ color: "var(--text-muted)", fontSize: "0.9rem", lineHeight: 1.55, margin: 0 }}>
            {pathway.audience}
          </p>
          <p style={{ color: "var(--text-muted)", fontSize: "0.9rem", lineHeight: 1.55, margin: 0 }}>
            {pathway.description}
          </p>

          <div className="callout" style={{ margin: "0.25rem 0" }}>
            <strong style={{ fontSize: "0.78rem", textTransform: "uppercase", letterSpacing: "0.06em", color: "var(--brand)" }}>
              First step
            </strong>
            <p style={{ margin: "0.2rem 0 0", fontSize: "0.9rem", lineHeight: 1.55 }}>
              {pathway.firstStep}
            </p>
          </div>

          <Link
            href={pathway.supportRoute}
            className="btn-link"
            style={{ marginTop: "auto", fontWeight: 700 }}
          >
            Open this pathway →
          </Link>
        </article>
      ))}
    </div>
  );
}
