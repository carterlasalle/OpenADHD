"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";

const MODES = [
  {
    id: "short",
    label: "10/3 Short Cycles",
    focusMin: 10,
    breakMin: 3,
    description: "For low energy or getting started",
    emoji: "🌱",
    color: "tag-teal",
  },
  {
    id: "classic",
    label: "25/5 Classic",
    focusMin: 25,
    breakMin: 5,
    description: "Standard focused work blocks",
    emoji: "⏱️",
    color: "tag-brand",
  },
  {
    id: "body-double",
    label: "Body Doubling",
    focusMin: 25,
    breakMin: 5,
    description: "Silent focus — you're not alone",
    emoji: "🤝",
    color: "tag-purple",
  },
  {
    id: "panic",
    label: "Panic Mode",
    focusMin: 15,
    breakMin: 3,
    description: "Rescue a deadline right now",
    emoji: "🚨",
    color: "tag-brand",
  },
] as const;

function fmt(secs: number) {
  const m = Math.floor(secs / 60).toString().padStart(2, "0");
  const s = (secs % 60).toString().padStart(2, "0");
  return `${m}:${s}`;
}

export default function SmartPomodoroPage() {
  const [selectedMode, setSelectedMode] = useState("short");
  const [isRunning, setIsRunning] = useState(false);
  const [phase, setPhase] = useState<"focus" | "break">("focus");
  const [timeLeft, setTimeLeft] = useState(10 * 60);
  const [sessionCount, setSessionCount] = useState(0);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    if (!isRunning) {
      if (intervalRef.current) clearInterval(intervalRef.current);
      return;
    }
    intervalRef.current = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          const mode = MODES.find((m) => m.id === selectedMode)!;
          if (phase === "focus") {
            setPhase("break");
            setSessionCount((c) => c + 1);
            return mode.breakMin * 60;
          } else {
            setPhase("focus");
            return mode.focusMin * 60;
          }
        }
        return prev - 1;
      });
    }, 1000);
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [isRunning, phase, selectedMode]);

  function selectMode(id: string) {
    setSelectedMode(id);
    setIsRunning(false);
    setPhase("focus");
    setSessionCount(0);
    const mode = MODES.find((m) => m.id === id)!;
    setTimeLeft(mode.focusMin * 60);
  }

  function handleReset() {
    setIsRunning(false);
    setPhase("focus");
    const mode = MODES.find((m) => m.id === selectedMode)!;
    setTimeLeft(mode.focusMin * 60);
  }

  const currentMode = MODES.find((m) => m.id === selectedMode)!;
  const totalSecs =
    phase === "focus"
      ? currentMode.focusMin * 60
      : currentMode.breakMin * 60;
  const progress = ((totalSecs - timeLeft) / totalSecs) * 100;

  return (
    <section className="section-shell" style={{ paddingTop: "7rem" }}>
      <div
        className="container-wrap"
        style={{ maxWidth: "680px", margin: "0 auto" }}
      >
        {/* Header */}
        <div
          className="animate-fade-in-up"
          style={{ textAlign: "center", marginBottom: "2.5rem" }}
        >
          <div
            className="icon-wrap-lg"
            style={{ margin: "0 auto 1rem" }}
            aria-hidden="true"
          >
            ⏱️
          </div>
          <h1
            style={{
              fontFamily: "var(--font-serif)",
              fontSize: "clamp(2rem, 5vw, 3rem)",
              color: "var(--text)",
              marginBottom: "0.5rem",
            }}
          >
            Smart Pomodoro
          </h1>
          <p style={{ color: "var(--text-muted)", fontSize: "1.05rem" }}>
            ADHD-tuned focus cycles with short bursts and proper recovery.
          </p>
        </div>

        {/* Mode selector */}
        <div
          className="grid-auto-2 stagger-1"
          style={{ marginBottom: "1.5rem" }}
          role="group"
          aria-label="Timer mode"
        >
          {MODES.map((mode) => {
            const isSelected = selectedMode === mode.id;
            return (
              <button
                key={mode.id}
                type="button"
                className={`card-entry${isSelected ? " is-selected" : ""}`}
                onClick={() => selectMode(mode.id)}
                aria-pressed={isSelected}
                style={{
                  textAlign: "left",
                  cursor: "pointer",
                  border: "none",
                  width: "100%",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.6rem",
                    marginBottom: "0.4rem",
                  }}
                >
                  <span className="icon-wrap-sm" aria-hidden="true">
                    {mode.emoji}
                  </span>
                  <h3
                    style={{
                      margin: 0,
                      fontSize: "0.95rem",
                      fontWeight: 600,
                      color: "var(--text)",
                    }}
                  >
                    {mode.label}
                  </h3>
                </div>
                <p
                  style={{
                    margin: "0 0 0.5rem",
                    fontSize: "0.85rem",
                    color: "var(--text-muted)",
                  }}
                >
                  {mode.description}
                </p>
                <span
                  style={{
                    display: "inline-block",
                    fontSize: "0.75rem",
                    fontWeight: 600,
                    padding: "0.15rem 0.5rem",
                    borderRadius: "var(--radius-pill)",
                    background: "var(--brand)",
                    color: "#fff",
                    opacity: 0.85,
                  }}
                >
                  {mode.focusMin}m / {mode.breakMin}m
                </span>
              </button>
            );
          })}
        </div>

        {/* Timer display */}
        <div
          className="surface-panel stagger-2"
          style={{
            textAlign: "center",
            padding: "2rem 1.5rem",
            marginBottom: "1.5rem",
          }}
        >
          {/* Phase tag */}
          <p
            className="eyebrow"
            style={{
              color:
                phase === "focus" ? "var(--brand)" : "var(--accent)",
              letterSpacing: "0.12em",
              marginBottom: "0.5rem",
            }}
            aria-live="polite"
            aria-atomic="true"
          >
            {phase === "focus" ? "FOCUS" : "BREAK"}
          </p>

          {/* Countdown */}
          <div
            style={{
              fontFamily: "var(--font-serif)",
              fontSize: "clamp(4rem, 12vw, 7rem)",
              lineHeight: 1,
              fontWeight: 700,
              color: phase === "focus" ? "var(--brand)" : "var(--accent)",
              marginBottom: "0.5rem",
              transition: "color 0.4s",
            }}
            aria-live="polite"
            aria-atomic="true"
            aria-label={`Time remaining: ${fmt(timeLeft)}`}
          >
            {fmt(timeLeft)}
          </div>

          {/* Sessions */}
          <p
            style={{
              color: "var(--text-faint)",
              fontSize: "0.9rem",
              marginBottom: "1.25rem",
            }}
          >
            Sessions: {sessionCount}
          </p>

          {/* Progress bar */}
          <div
            style={{
              background: "var(--line)",
              borderRadius: "2px",
              height: "4px",
              overflow: "hidden",
              marginBottom: "1.5rem",
            }}
            role="progressbar"
            aria-valuenow={Math.round(progress)}
            aria-valuemin={0}
            aria-valuemax={100}
          >
            <div
              style={{
                height: "100%",
                width: `${progress}%`,
                borderRadius: "2px",
                background:
                  phase === "focus" ? "var(--brand)" : "var(--accent)",
                transition: "width 1s linear, background 0.4s",
              }}
            />
          </div>

          {/* Controls */}
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "0.6rem",
              flexWrap: "wrap",
            }}
          >
            <button
              type="button"
              className="btn-primary"
              style={{ padding: "0.75rem 2rem", fontSize: "1rem" }}
              onClick={() => setIsRunning((r) => !r)}
            >
              {isRunning ? "Pause" : "Start"}
            </button>
            <button
              type="button"
              className="btn-muted"
              onClick={handleReset}
            >
              Reset
            </button>
          </div>
        </div>

        {/* Encouragement notice */}
        {sessionCount > 0 && (
          <div className="notice-ok stagger-3" aria-live="polite">
            You completed {sessionCount} focus block
            {sessionCount !== 1 ? "s" : ""} today. Every one counts.
          </div>
        )}

        {/* Body doubling callout */}
        {selectedMode === "body-double" && (
          <div className="callout stagger-3" style={{ marginTop: "1rem" }}>
            Body doubling works even silently. Someone else working nearby (in
            person or virtually) activates social focus circuits.
          </div>
        )}

        {/* Back link */}
        <div style={{ textAlign: "center", marginTop: "2rem" }}>
          <Link href="/tools" className="btn-ghost">
            &larr; All Tools
          </Link>
        </div>
      </div>
    </section>
  );
}
