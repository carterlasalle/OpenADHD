"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";
import { categories, type Category, type Tip } from "@/data/tips";

const totalTips = categories.reduce((sum, c) => sum + c.tips.length, 0);

export default function ResourcesPage() {
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const filtered: Category[] = useMemo(() => {
    const q = search.toLowerCase();
    return categories
      .filter((cat) => !selectedCategory || cat.slug === selectedCategory)
      .map((cat) => ({
        ...cat,
        tips: cat.tips.filter((t) => t.text.toLowerCase().includes(q)),
      }))
      .filter((cat) => cat.tips.length > 0);
  }, [search, selectedCategory]);

  const matchCount = filtered.reduce((s, c) => s + c.tips.length, 0);
  const hasFilters = search !== "" || selectedCategory !== null;

  return (
    <>
      {/* ── HERO ─────────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden pt-28 pb-16 md:pb-20">
        <div
          aria-hidden="true"
          className="blob -top-40 -left-40 h-[520px] w-[520px] opacity-20"
          style={{ background: "var(--purple)" }}
        />
        <div
          aria-hidden="true"
          className="blob top-24 -right-20 h-[420px] w-[420px] opacity-15"
          style={{ background: "var(--teal)" }}
        />
        <div
          aria-hidden="true"
          className="blob -bottom-32 left-1/2 h-[360px] w-[360px] -translate-x-1/2 opacity-10"
          style={{ background: "var(--amber)" }}
        />

        <div className="relative mx-auto max-w-5xl px-6 text-center">
          <ScrollReveal direction="up" duration={800} once>
            <h1 className="text-5xl font-extrabold leading-[1.1] tracking-tight text-ink md:text-7xl">
              Community-Curated
              <br />
              <span className="gradient-text">ADHD Tips</span>
            </h1>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={150} duration={800} once>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-ink-muted md:text-xl">
              <span className="font-bold text-ink">{totalTips}</span> practical
              tips across{" "}
              <span className="font-bold text-ink">{categories.length}</span>{" "}
              categories — real advice from real people who get it.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* ── STICKY FILTER BAR ────────────────────────────────────────── */}
      <section className="sticky top-[72px] z-30 bg-surface/90 py-4 backdrop-blur-xl">
        <div className="mx-auto max-w-5xl px-6">
          {/* search input */}
          <div className="relative">
            <span className="pointer-events-none absolute top-1/2 left-4 -translate-y-1/2 text-ink-faint">
              🔍
            </span>
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search tips…"
              className="w-full rounded-xl border border-ink/10 bg-white/80 py-3 pr-4 pl-11 text-ink shadow-sm outline-none backdrop-blur transition-all focus:border-brand focus:ring-2 focus:ring-brand/30"
            />
          </div>

          {/* category pills */}
          <div className="mt-3 flex flex-wrap gap-2">
            <button
              onClick={() => setSelectedCategory(null)}
              className={`tag transition-all ${
                selectedCategory === null
                  ? "bg-brand text-white"
                  : "border border-ink/15 text-ink-muted hover:border-brand hover:text-brand"
              }`}
            >
              All
            </button>

            {categories.map((cat) => {
              const isActive = selectedCategory === cat.slug;
              return (
                <button
                  key={cat.slug}
                  onClick={() =>
                    setSelectedCategory(isActive ? null : cat.slug)
                  }
                  className="tag transition-all hover:scale-105"
                  style={{
                    background: isActive ? cat.color : "transparent",
                    color: isActive ? "#fff" : cat.color,
                    border: isActive
                      ? `1px solid ${cat.color}`
                      : `1px solid ${cat.color}55`,
                  }}
                >
                  {cat.emoji} {cat.name}
                </button>
              );
            })}
          </div>

          {/* filter info */}
          {hasFilters && (
            <div className="mt-3 flex items-center gap-3 text-sm text-ink-muted">
              <span>
                Showing{" "}
                <strong className="text-ink">{matchCount}</strong> tip
                {matchCount !== 1 && "s"}
              </span>
              <button
                onClick={() => {
                  setSearch("");
                  setSelectedCategory(null);
                }}
                className="rounded-full bg-brand/10 px-3 py-1 font-semibold text-brand transition hover:bg-brand/20"
              >
                Clear ✕
              </button>
            </div>
          )}
        </div>
      </section>

      {/* ── TIP SECTIONS ─────────────────────────────────────────────── */}
      <main className="mx-auto max-w-6xl px-6 pt-14 pb-28">
        {filtered.length === 0 && (
          <div className="py-24 text-center">
            <p className="text-6xl">🔍</p>
            <p className="mt-5 text-xl font-semibold text-ink-muted">
              No tips match your search.
            </p>
            <p className="mt-1 text-ink-faint">
              Try different keywords or{" "}
              <button
                onClick={() => {
                  setSearch("");
                  setSelectedCategory(null);
                }}
                className="font-semibold text-brand underline underline-offset-2"
              >
                clear filters
              </button>
              .
            </p>
          </div>
        )}

        <div className="space-y-24">
          {filtered.map((cat) => (
            <CategorySection key={cat.slug} category={cat} />
          ))}
        </div>
      </main>
    </>
  );
}

/* ── Category Section ──────────────────────────────────────────────────── */

function CategorySection({ category }: { category: Category }) {
  return (
    <section id={category.slug} className="scroll-mt-24">
      {/* header */}
      <div className="flex items-center gap-4">
        <span className="text-5xl" aria-hidden="true">
          {category.emoji}
        </span>
        <div className="min-w-0">
          <h2 className="text-2xl font-extrabold tracking-tight text-ink md:text-3xl">
            {category.name}
          </h2>
          <p className="text-sm font-medium text-ink-muted">
            {category.tips.length} tip
            {category.tips.length !== 1 && "s"}
          </p>
        </div>
        <div
          className="ml-auto hidden h-1.5 flex-1 rounded-full sm:block"
          style={{ background: `${category.color}30` }}
        />
      </div>

      {/* tip grid */}
      <div className="mt-8 grid gap-5 md:grid-cols-2">
        {category.tips.map((tip) => (
          <TipCard key={tip.id} tip={tip} color={category.color} />
        ))}
      </div>
    </section>
  );
}

/* ── Tip Card ──────────────────────────────────────────────────────────── */

function TipCard({ tip, color }: { tip: Tip; color: string }) {
  const isFav = tip.isFavorite;

  return (
    <div
      className={`card relative p-5 ${
        isFav ? "ring-2 ring-amber/40" : ""
      }`}
      style={{ borderLeft: `4px solid ${color}` }}
    >
      {isFav && (
        <span
          className="absolute -top-2.5 -right-2.5 flex h-7 w-7 items-center justify-center rounded-full bg-amber text-sm shadow-md"
          title="Community Favourite"
        >
          ⭐
        </span>
      )}

      <p className="leading-relaxed text-ink">
        &ldquo;{tip.text}&rdquo;
      </p>

      {isFav && tip.favoriteNote && (
        <p className="mt-2 text-sm italic text-amber-700/80">
          {tip.favoriteNote}
        </p>
      )}

      <p className="mt-3 text-xs font-medium text-ink-faint">
        — {tip.author}
      </p>
    </div>
  );
}
