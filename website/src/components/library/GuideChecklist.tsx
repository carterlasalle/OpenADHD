"use client";

import { useEffect, useMemo, useState } from "react";

interface GuideChecklistProps {
  guideSlug: string;
  items: string[];
}

function keyFor(slug: string) {
  return `openadhd-guide-progress-${slug}`;
}

function readChecklist(slug: string, itemCount: number) {
  if (typeof window === "undefined") {
    return new Array(itemCount).fill(false) as boolean[];
  }

  try {
    const raw = localStorage.getItem(keyFor(slug));
    if (!raw) return new Array(itemCount).fill(false) as boolean[];
    const parsed = JSON.parse(raw) as boolean[];
    return new Array(itemCount).fill(false).map((_, index) => Boolean(parsed[index]));
  } catch {
    return new Array(itemCount).fill(false) as boolean[];
  }
}

export default function GuideChecklist({ guideSlug, items }: GuideChecklistProps) {
  const [checked, setChecked] = useState<boolean[]>(() => readChecklist(guideSlug, items.length));
  const safeChecked =
    checked.length === items.length ? checked : new Array(items.length).fill(false).map((_, index) => Boolean(checked[index]));

  useEffect(() => {
    if (safeChecked.length === 0) return;
    localStorage.setItem(keyFor(guideSlug), JSON.stringify(safeChecked));
  }, [guideSlug, safeChecked]);

  const percent = useMemo(() => {
    if (safeChecked.length === 0) return 0;
    const complete = safeChecked.filter(Boolean).length;
    return Math.round((complete / safeChecked.length) * 100);
  }, [safeChecked]);

  return (
    <section className="section-block" aria-label="Progress checklist">
      <h2 className="section-title">Weekly Progress Checklist</h2>
      <p className="section-subtitle">Completion stays saved on this device.</p>
      <p className="badge" aria-live="polite">
        {percent}% complete
      </p>
      <ul className="progress-list">
        {items.map((item, index) => (
          <li key={item}>
            <input
              id={`${guideSlug}-${index}`}
              type="checkbox"
              checked={Boolean(safeChecked[index])}
              onChange={(event) => {
                setChecked((prev) => {
                  const next = [...(prev.length ? prev : items.map(() => false))];
                  next[index] = event.target.checked;
                  return next;
                });
              }}
            />
            <label htmlFor={`${guideSlug}-${index}`}>{item}</label>
          </li>
        ))}
      </ul>
    </section>
  );
}
