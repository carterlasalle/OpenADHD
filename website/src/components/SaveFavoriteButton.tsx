"use client";

import { useMemo, useState } from "react";

interface SaveFavoriteButtonProps {
  itemId: string;
  label?: string;
}

const STORAGE_KEY = "openadhd:favorites";

function readSet(): Set<string> {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return new Set();
    const parsed = JSON.parse(raw) as string[];
    return new Set(parsed);
  } catch {
    return new Set();
  }
}

export default function SaveFavoriteButton({ itemId, label = "Save" }: SaveFavoriteButtonProps) {
  const [savedItems, setSavedItems] = useState<string[]>(() => [...readSet()]);
  const saved = useMemo(() => savedItems.includes(itemId), [savedItems, itemId]);

  const toggle = () => {
    const set = readSet();
    if (set.has(itemId)) {
      set.delete(itemId);
    } else {
      set.add(itemId);
    }
    const next = [...set];
    setSavedItems(next);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
  };

  return (
    <button type="button" className="button-secondary" onClick={toggle} aria-pressed={saved}>
      {saved ? "Saved" : label}
    </button>
  );
}
