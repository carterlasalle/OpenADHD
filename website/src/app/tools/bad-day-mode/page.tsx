"use client";

import { useState } from "react";
import Link from "next/link";

const CHECKLIST = [
  { id: "water", label: "Drink some water" },
  { id: "breathe", label: "Take 3 slow breaths" },
  { id: "one-thing", label: "Pick one thing only" },
];

export default function BadDayModePage() {
  const [checkedItems, setCheckedItems] = useState<Set<string>>(new Set());

  function toggle(id: string) {
    setCheckedItems((prev) => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });
  }

  return (
    <section className="section-shell" style={{ paddingTop: "7rem" }}>
      <div
        className="container-wrap"
        style={{ maxWidth: "680px", margin: "0 auto" }}
      >
        <div className="bad-day-hero animate-fade-in-up">
          <div
            style={{
              fontSize: "3.5rem",
              textAlign: "center",
              marginBottom: "1rem",
            }}
            aria-hidden="true"
          >
            😮‍💨
          </div>

          <h1
            style={{
              fontFamily: "var(--font-serif)",
              fontSize: "clamp(1.8rem, 4vw, 2.8rem)",
              lineHeight: 1.2,
              textAlign: "center",
              marginBottom: "0.75rem",
              color: "var(--text)",
            }}
          >
            Let&apos;s get through this one step at a time.
          </h1>

          <p
            style={{
              textAlign: "center",
              color: "var(--text-muted)",
              fontSize: "1.05rem",
              marginBottom: "2rem",
            }}
          >
            You don&apos;t need to figure everything out right now. Just one
            thing.
          </p>

          <div
            style={{
              display: "grid",
              gap: "0.75rem",
              marginBottom: "2rem",
            }}
            role="group"
            aria-label="Stabilization checklist"
          >
            {CHECKLIST.map((item) => {
              const checked = checkedItems.has(item.id);
              return (
                <label
                  key={item.id}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.75rem",
                    cursor: "pointer",
                    padding: "0.75rem 1rem",
                    borderRadius: "var(--radius-md)",
                    background: checked
                      ? "color-mix(in srgb, var(--ok) 10%, var(--surface))"
                      : "var(--surface-alt)",
                    border: "1px solid var(--line)",
                    transition: "background 0.2s, opacity 0.2s",
                    opacity: checked ? 0.6 : 1,
                  }}
                >
                  <input
                    type="checkbox"
                    checked={checked}
                    onChange={() => toggle(item.id)}
                    style={{
                      width: "1.2rem",
                      height: "1.2rem",
                      accentColor: "var(--ok)",
                      flexShrink: 0,
                      cursor: "pointer",
                    }}
                  />
                  <span
                    style={{
                      color: "var(--text)",
                      fontSize: "1rem",
                      textDecoration: checked ? "line-through" : "none",
                    }}
                  >
                    {item.label}
                  </span>
                </label>
              );
            })}
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "0.75rem",
              marginBottom: "2rem",
            }}
          >
            <Link
              href="/tools/task-breaker"
              className="btn-primary"
              style={{
                fontSize: "1.05rem",
                padding: "0.85rem 2rem",
                textAlign: "center",
              }}
            >
              Open Task Breaker &mdash; one task, 10 minutes
            </Link>

            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "center",
                gap: "0.6rem",
              }}
            >
              <Link
                href="/templates/panic-proof-reset-checklist.txt"
                className="btn-muted"
              >
                Download panic reset sheet
              </Link>
              <Link href="/start-here" className="btn-muted">
                Use the full Start Here chooser
              </Link>
            </div>
          </div>

          <div className="notice-warn" role="note">
            If you are in immediate crisis in the U.S., call or text{" "}
            <strong>988</strong>.
          </div>
        </div>
      </div>
    </section>
  );
}
