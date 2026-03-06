import type { ReactNode } from "react";

interface PageHeroProps {
  eyebrow?: string;
  title: ReactNode;
  subtitle: string;
  actions?: ReactNode;
  size?: "default" | "large";
}

export default function PageHero({ eyebrow, title, subtitle, actions, size = "default" }: PageHeroProps) {
  return (
    <section
      className="animate-fade-in-up"
      style={{
        paddingTop: "7.5rem",
        paddingBottom: "1.5rem",
        width: "min(1180px, 100% - 2rem)",
        margin: "0 auto",
      }}
    >
      {eyebrow ? (
        <span className="eyebrow">{eyebrow}</span>
      ) : null}
      <h1
        className="hero-title"
        style={{
          marginTop: eyebrow ? "0.75rem" : 0,
          fontSize: size === "large" ? "clamp(2.2rem, 5vw, 3.6rem)" : "clamp(1.8rem, 4vw, 3rem)",
        }}
      >
        {title}
      </h1>
      <p
        className="hero-subtext"
        style={{ maxWidth: "66ch" }}
      >
        {subtitle}
      </p>
      {actions ? (
        <div className="page-actions" style={{ marginTop: "1.1rem" }}>
          {actions}
        </div>
      ) : null}
    </section>
  );
}
