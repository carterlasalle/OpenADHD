"use client";

import { useState, useMemo } from "react";
import { categories, type Category, type Tip } from "@/data/tips";

const totalTips = categories.reduce((sum, c) => sum + c.tips.length, 0);

export default function ResourcesPage() {
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  /* ── derived data ─────────────────────────────────────────────────── */
  const filtered: Category[] = useMemo(() => {
    return categories
      .filter((cat) => !selectedCategory || cat.slug === selectedCategory)
      .map((cat) => ({
        ...cat,
        tips: cat.tips.filter((t) =>
          t.text.toLowerCase().includes(search.toLowerCase()),
        ),
      }))
      .filter((cat) => cat.tips.length > 0);
  }, [search, selectedCategory]);

  const matchCount = filtered.reduce((s, c) => s + c.tips.length, 0);
  const hasFilters = search !== "" || selectedCategory !== null;

  return (
    <>
      {/* ================================================================
          HERO / HEADER
          ================================================================ */}
      <section className="relative overflow-hidden pb-10 pt-24 md:pt-32">
        {/* decorative blobs */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-32 -left-32 h-[500px] w-[500px] rounded-full opacity-25 blur-[120px]"
          style={{ background: "var(--accent-lavender)" }}
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute top-20 right-0 h-[400px] w-[400px] rounded-full opacity-20 blur-[100px]"
          style={{ background: "var(--accent-teal)" }}
        />

        <div className="relative mx-auto max-w-5xl px-6 text-center">
          <h1 className="animate-fade-in-up text-4xl font-extrabold leading-tight tracking-tight md:text-6xl">
            Community-Curated{" "}
            <span className="gradient-text">ADHD Tips</span>
          </h1>
          <p className="animate-fade-in-up delay-200 mx-auto mt-4 max-w-2xl text-lg text-text-secondary">
            {totalTips} practical tips from the ADHD community on Reddit,
            organized into {categories.length} categories. Real advice from real
            people who get it.
          </p>
        </div>
      </section>

      {/* ================================================================
          STATS BAR
          ================================================================ */}
      <section className="mx-auto max-w-4xl px-6">
        <div className="animate-fade-in-up delay-300 grid grid-cols-1 gap-4 sm:grid-cols-3">
          {[
            { value: `${totalTips}`, label: "Tips" },
            { value: `${categories.length}`, label: "Categories" },
            { value: "∞", label: "Hours Saved" },
          ].map((stat) => (
            <div
              key={stat.label}
              className="glass-card hover-lift rounded-2xl px-6 py-4 text-center"
            >
              <p className="gradient-text text-3xl font-extrabold">
                {stat.value}
              </p>
              <p className="mt-1 text-sm font-semibold text-text-secondary">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ================================================================
          SEARCH + CATEGORY FILTERS
          ================================================================ */}
      <section className="sticky top-0 z-30 mt-10 bg-bg-warm/80 py-4 backdrop-blur-lg">
        <div className="mx-auto max-w-5xl px-6">
          {/* search bar */}
          <div className="relative">
            <span className="pointer-events-none absolute top-1/2 left-4 -translate-y-1/2 text-text-secondary">
              🔍
            </span>
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search tips…"
              className="w-full rounded-2xl border border-black/10 bg-white/70 py-3 pr-4 pl-11 text-text-primary shadow-sm outline-none backdrop-blur transition focus:border-accent-coral focus:ring-2 focus:ring-accent-coral/30"
            />
          </div>

          {/* category pills */}
          <div className="mt-4 flex flex-wrap gap-2">
            <button
              onClick={() => setSelectedCategory(null)}
              className={`rounded-full border-2 px-4 py-1.5 text-sm font-bold transition-all ${
                selectedCategory === null
                  ? "border-accent-coral bg-accent-coral text-white"
                  : "border-black/10 text-text-secondary hover:border-accent-coral hover:text-accent-coral"
              }`}
            >
              All
            </button>
            {categories.map((cat) => (
              <button
                key={cat.slug}
                onClick={() =>
                  setSelectedCategory(
                    selectedCategory === cat.slug ? null : cat.slug,
                  )
                }
                className="rounded-full border-2 px-4 py-1.5 text-sm font-bold transition-all hover:scale-105"
                style={{
                  borderColor:
                    selectedCategory === cat.slug ? cat.color : undefined,
                  background:
                    selectedCategory === cat.slug ? cat.color : undefined,
                  color:
                    selectedCategory === cat.slug ? "#fff" : cat.color,
                }}
              >
                {cat.emoji} {cat.name}
              </button>
            ))}
          </div>

          {/* active-filter info */}
          {hasFilters && (
            <div className="mt-3 flex items-center gap-3 text-sm text-text-secondary">
              <span>
                Showing <strong className="text-text-primary">{matchCount}</strong>{" "}
                tip{matchCount !== 1 && "s"}
              </span>
              <button
                onClick={() => {
                  setSearch("");
                  setSelectedCategory(null);
                }}
                className="rounded-full bg-accent-coral/10 px-3 py-1 font-semibold text-accent-coral transition hover:bg-accent-coral/20"
              >
                Clear filters ✕
              </button>
            </div>
          )}
        </div>
      </section>

      {/* ================================================================
          TIP SECTIONS
          ================================================================ */}
      <main className="mx-auto max-w-6xl px-6 pb-28 pt-12">
        {filtered.length === 0 && (
          <div className="py-20 text-center">
            <p className="text-5xl">🤷</p>
            <p className="mt-4 text-lg font-semibold text-text-secondary">
              No tips match your search. Try different keywords!
            </p>
          </div>
        )}

        <div className="space-y-20">
          {filtered.map((cat) => (
            <CategorySection key={cat.slug} category={cat} />
          ))}
        </div>
      </main>
    </>
  );
}

/* ──────────────────────────────────────────────────────────────────────────
   Category Section
   ────────────────────────────────────────────────────────────────────────── */

function CategorySection({ category }: { category: Category }) {
  return (
    <section
      id={category.slug}
      className="scroll-mt-40 rounded-3xl p-6 md:p-10"
      style={{ background: `${category.color}08` }}
    >
      {/* header */}
      <div className="flex items-center gap-4">
        <span className="text-4xl">{category.emoji}</span>
        <div>
          <h2 className="text-2xl font-extrabold md:text-3xl">
            {category.name}
          </h2>
          <p className="text-sm text-text-secondary">
            {category.tips.length} tip{category.tips.length !== 1 && "s"}
          </p>
        </div>
        <div
          className="ml-auto hidden h-1 flex-1 rounded-full sm:block"
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

/* ──────────────────────────────────────────────────────────────────────────
   Tip Card
   ────────────────────────────────────────────────────────────────────────── */

function TipCard({ tip, color }: { tip: Tip; color: string }) {
  const isFav = tip.isFavorite;

  return (
    <div
      className={`glass-card hover-lift relative rounded-2xl p-5 transition-all ${
        isFav
          ? "border-2 border-amber-400/60 shadow-[0_0_18px_rgba(255,170,59,0.15)]"
          : ""
      }`}
      style={{ borderLeft: `4px solid ${color}` }}
    >
      {isFav && (
        <span
          className="absolute -top-2.5 -right-2.5 flex h-7 w-7 items-center justify-center rounded-full bg-amber-400 text-sm shadow-md"
          title="Community Favourite"
        >
          ⭐
        </span>
      )}

      <p className="leading-relaxed text-text-primary">
        &ldquo;{tip.text}&rdquo;
      </p>

      {isFav && tip.favoriteNote && (
        <p className="mt-2 text-sm italic text-amber-700/80">
          {tip.favoriteNote}
        </p>
      )}

      <p className="mt-3 text-xs font-medium text-text-secondary">
        — {tip.author}
      </p>
    </div>
  );
}
