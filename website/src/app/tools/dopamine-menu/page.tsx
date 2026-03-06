"use client";

import { useState } from "react";
import Link from "next/link";
import { dopamineActivities } from "@/lib/toolGenerators";

const categoryConfig = [
  {
    id: "movement" as const,
    emoji: "\uD83C\uDFC3",
    label: "Movement",
    iconClass: "icon-wrap icon-wrap-sm",
  },
  {
    id: "novelty" as const,
    emoji: "\u2728",
    label: "Novelty",
    iconClass: "icon-wrap icon-wrap-sm icon-wrap-purple",
  },
  {
    id: "social" as const,
    emoji: "\uD83E\uDD1D",
    label: "Social",
    iconClass: "icon-wrap icon-wrap-sm icon-wrap-teal",
  },
  {
    id: "sensory" as const,
    emoji: "\uD83C\uDFB5",
    label: "Sensory",
    iconClass: "icon-wrap icon-wrap-sm icon-wrap-amber",
  },
] as const;

type CategoryId = "movement" | "novelty" | "social" | "sensory";

const categoryBorderColor: Record<CategoryId, string> = {
  movement: "var(--brand)",
  novelty: "var(--purple)",
  social: "var(--accent)",
  sensory: "var(--amber)",
};

export default function DopamineMenuPage() {
  const [selected, setSelected] = useState<Record<CategoryId, string[]>>({
    movement: [],
    novelty: [],
    social: [],
    sensory: [],
  });
  const [copied, setCopied] = useState(false);

  function toggleActivity(category: CategoryId, activity: string) {
    setSelected((prev) => {
      const current = prev[category] ?? [];
      const exists = current.includes(activity);
      return {
        ...prev,
        [category]: exists
          ? current.filter((a) => a !== activity)
          : [...current, activity],
      };
    });
  }

  const menuByCategory = categoryConfig
    .map((cat) => ({
      ...cat,
      selectedItems: selected[cat.id],
    }))
    .filter((cat) => cat.selectedItems.length > 0);

  const totalSelected = menuByCategory.reduce(
    (sum, cat) => sum + cat.selectedItems.length,
    0
  );

  function buildCopyText() {
    const lines: string[] = ["My Dopamine Menu", ""];
    menuByCategory.forEach((cat) => {
      lines.push(`${cat.label}:`);
      cat.selectedItems.forEach((a) => lines.push(`\u2022 ${a}`));
      lines.push("");
    });
    return lines.join("\n").trim();
  }

  function copyMenu() {
    navigator.clipboard.writeText(buildCopyText()).catch(() => {});
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }

  return (
    <section className="section-shell" style={{ paddingTop: "7rem" }}>
      <div style={{ maxWidth: "860px", margin: "0 auto" }}>

        {/* Header */}
        <header className="animate-fade-in-up" style={{ marginBottom: "2.5rem" }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "1rem",
              marginBottom: "1rem",
            }}
          >
            <div className="icon-wrap icon-wrap-lg">
              <span role="img" aria-label="target">\uD83C\uDFAF</span>
            </div>
            <div>
              <h1
                style={{
                  fontSize: "clamp(1.6rem, 3vw, 2.4rem)",
                  lineHeight: 1.15,
                }}
              >
                Dopamine Menu Builder
              </h1>
              <p
                style={{
                  color: "var(--text-muted)",
                  fontSize: "1.05rem",
                  marginTop: "0.35rem",
                  lineHeight: 1.5,
                }}
              >
                Build a quick-reset menu personalized to your dopamine sources.
              </p>
            </div>
          </div>
          <div className="page-actions">
            <Link href="/tools" className="btn-ghost">
              Back to tools
            </Link>
          </div>
        </header>

        {/* Category cards */}
        <div className="grid-auto-2" style={{ marginBottom: "1.5rem" }}>
          {categoryConfig.map((cat, index) => {
            const activities = dopamineActivities[cat.id];
            const borderColor = categoryBorderColor[cat.id];
            return (
              <article
                key={cat.id}
                className={`surface-panel animate-fade-in-up stagger-${index + 1}`}
                style={{ padding: "1.25rem" }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.65rem",
                    marginBottom: "1rem",
                  }}
                >
                  <div className={cat.iconClass}>
                    <span role="img" aria-hidden="true">
                      {cat.emoji}
                    </span>
                  </div>
                  <h2 style={{ fontSize: "1rem", fontWeight: 700 }}>
                    {cat.label}
                  </h2>
                </div>
                <div
                  role="group"
                  aria-label={`${cat.label} activities`}
                  style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}
                >
                  {activities.map((activity) => {
                    const isSelected = selected[cat.id].includes(activity);
                    return (
                      <button
                        key={activity}
                        type="button"
                        onClick={() => toggleActivity(cat.id, activity)}
                        aria-pressed={isSelected}
                        style={{
                          border: `1.5px solid ${
                            isSelected ? borderColor : "var(--line)"
                          }`,
                          borderRadius: "var(--radius-pill)",
                          background: isSelected
                            ? `color-mix(in oklab, ${borderColor} 14%, var(--surface))`
                            : "var(--surface-alt)",
                          color: isSelected
                            ? "var(--text)"
                            : "var(--text-muted)",
                          padding: "0.4rem 0.75rem",
                          fontSize: "0.88rem",
                          fontWeight: isSelected ? 700 : 400,
                          cursor: "pointer",
                          transition: "all 160ms ease",
                          lineHeight: 1.4,
                        }}
                      >
                        {activity}
                      </button>
                    );
                  })}
                </div>
              </article>
            );
          })}
        </div>

        {/* Output panel */}
        <article
          className="surface-panel animate-fade-in-up stagger-5"
          style={{ padding: "1.5rem" }}
        >
          <div className="output-header" style={{ marginBottom: "1rem" }}>
            <h2 style={{ fontSize: "1.15rem", fontWeight: 700 }}>
              Your Dopamine Menu
            </h2>
            {totalSelected > 0 && (
              <button
                type="button"
                className="copy-btn"
                onClick={copyMenu}
                aria-label="Copy menu to clipboard"
              >
                {copied ? "Copied!" : "Copy menu"}
              </button>
            )}
          </div>

          {totalSelected === 0 ? (
            <p
              style={{
                fontStyle: "italic",
                color: "var(--text-faint)",
                fontSize: "0.93rem",
              }}
            >
              Select activities above to build your menu.
            </p>
          ) : (
            <div className="output-section">
              {menuByCategory.map((cat) => {
                const borderColor = categoryBorderColor[cat.id];
                return (
                  <div
                    key={cat.id}
                    className="result-block"
                    style={{ borderLeft: `3px solid ${borderColor}` }}
                  >
                    <p
                      style={{
                        fontWeight: 700,
                        fontSize: "0.88rem",
                        marginBottom: "0.5rem",
                        display: "flex",
                        alignItems: "center",
                        gap: "0.4rem",
                        textTransform: "uppercase",
                        letterSpacing: "0.05em",
                        color: "var(--text-soft)",
                      }}
                    >
                      <span aria-hidden="true">{cat.emoji}</span>
                      {cat.label}
                    </p>
                    <ul
                      style={{
                        listStyle: "none",
                        margin: 0,
                        padding: 0,
                        display: "grid",
                        gap: "0.3rem",
                      }}
                    >
                      {cat.selectedItems.map((activity) => (
                        <li
                          key={activity}
                          style={{
                            color: "var(--text-muted)",
                            fontSize: "0.93rem",
                            display: "flex",
                            alignItems: "flex-start",
                            gap: "0.5rem",
                          }}
                        >
                          <span
                            aria-hidden="true"
                            style={{
                              color: borderColor,
                              flexShrink: 0,
                              marginTop: "0.1rem",
                            }}
                          >
                            &bull;
                          </span>
                          {activity}
                        </li>
                      ))}
                    </ul>
                  </div>
                );
              })}
            </div>
          )}
        </article>

      </div>
    </section>
  );
}
