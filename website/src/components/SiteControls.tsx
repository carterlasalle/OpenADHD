"use client";

import { useEffect, useState } from "react";
import { STORAGE_KEYS, readLocal, writeLocal } from "@/lib/storage";

function applyBodyClass(className: string, enabled: boolean) {
  if (typeof document === "undefined") return;

  if (enabled) {
    document.body.classList.add(className);
  } else {
    document.body.classList.remove(className);
  }
}

export default function SiteControls() {
  const [readingMode, setReadingMode] = useState<boolean>(() =>
    readLocal<boolean>(STORAGE_KEYS.readingMode, false),
  );
  const [darkMode, setDarkMode] = useState<boolean>(() =>
    readLocal<boolean>(STORAGE_KEYS.darkMode, false),
  );

  useEffect(() => {
    applyBodyClass("mode-reading", readingMode);
    writeLocal(STORAGE_KEYS.readingMode, readingMode);
  }, [readingMode]);

  useEffect(() => {
    applyBodyClass("mode-dark", darkMode);
    writeLocal(STORAGE_KEYS.darkMode, darkMode);
  }, [darkMode]);

  return (
    <aside aria-label="Site controls" className="site-controls" role="complementary">
      <button
        type="button"
        className={`site-control-chip ${readingMode ? "is-active" : ""}`}
        onClick={() => setReadingMode((current) => !current)}
      >
        Reading Mode
      </button>
      <button
        type="button"
        className={`site-control-chip ${darkMode ? "is-active" : ""}`}
        onClick={() => setDarkMode((current) => !current)}
      >
        Dark Mode
      </button>
      <a className="site-control-chip" href="/tools/bad-day-mode">
        Bad Day Mode
      </a>
    </aside>
  );
}
