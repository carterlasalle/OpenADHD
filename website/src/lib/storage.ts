export const STORAGE_KEYS = {
  readingMode: "openadhd-reading-mode",
  darkMode: "openadhd-dark-mode",
  favorites: "openadhd-favorites",
  completed: "openadhd-completed-checks",
} as const;

export function readLocal<T>(key: string, fallback: T): T {
  if (typeof window === "undefined") return fallback;

  try {
    const raw = window.localStorage.getItem(key);
    if (!raw) return fallback;
    return JSON.parse(raw) as T;
  } catch {
    return fallback;
  }
}

export function writeLocal<T>(key: string, value: T) {
  if (typeof window === "undefined") return;

  try {
    window.localStorage.setItem(key, JSON.stringify(value));
  } catch {
    // Intentionally ignore storage errors; UX should keep working.
  }
}
