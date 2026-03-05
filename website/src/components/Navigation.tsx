"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/resources", label: "Resources" },
  { href: "/diagnosis", label: "Diagnosis" },
  { href: "/tools", label: "Tools" },
  { href: "/community", label: "Community" },
  { href: "/about", label: "About" },
] as const;

export default function Navigation() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const active = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-surface/90 shadow-[0_1px_12px_rgba(0,0,0,0.06)] backdrop-blur-xl"
          : "bg-transparent"
      }`}
    >
      <nav aria-label="Main navigation" className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
        {/* Brand */}
        <Link
          href="/"
          onClick={() => setOpen(false)}
          className="group relative flex items-baseline gap-0.5 text-[1.35rem] font-bold tracking-tight"
        >
          <span className="text-ink transition-colors group-hover:text-brand">
            Open
          </span>
          <span className="text-brand">ADHD</span>
          <span className="absolute -bottom-1 left-0 h-[3px] w-0 rounded-full bg-brand transition-all duration-300 group-hover:w-full" />
        </Link>

        {/* Desktop links */}
        <ul className="hidden items-center gap-1 md:flex">
          {navLinks.map(({ href, label }) => (
            <li key={href}>
              <Link
                href={href}
                className={`relative px-3.5 py-2 text-[0.9rem] font-medium transition-colors duration-200 rounded-lg ${
                  active(href)
                    ? "text-brand"
                    : "text-ink-muted hover:text-ink"
                }`}
              >
                {label}
                {active(href) && (
                  <span className="absolute bottom-0 left-3 right-3 h-[2.5px] rounded-full bg-brand" />
                )}
              </Link>
            </li>
          ))}
        </ul>

        {/* GitHub + mobile toggle */}
        <div className="flex items-center gap-3">
          <a
            href="https://github.com/carterlasalle/OpenADHD"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden items-center gap-2 rounded-full border border-ink/10 px-4 py-2 text-xs font-semibold text-ink-muted transition-all hover:border-brand hover:text-brand md:inline-flex"
          >
            <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path
                fillRule="evenodd"
                d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.338c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2Z"
                clipRule="evenodd"
              />
            </svg>
            Star
          </a>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            className="relative flex h-10 w-10 items-center justify-center rounded-xl text-ink-muted transition-colors hover:bg-brand/5 hover:text-ink md:hidden"
          >
            <span className="flex flex-col items-center gap-[5px]">
              <span
                className={`block h-[2px] w-5 rounded-full bg-current transition-all duration-300 ${
                  open ? "translate-y-[7px] rotate-45" : ""
                }`}
              />
              <span
                className={`block h-[2px] w-5 rounded-full bg-current transition-all duration-200 ${
                  open ? "opacity-0" : ""
                }`}
              />
              <span
                className={`block h-[2px] w-5 rounded-full bg-current transition-all duration-300 ${
                  open ? "-translate-y-[7px] -rotate-45" : ""
                }`}
              />
            </span>
          </button>
        </div>
      </nav>

      {/* Mobile overlay */}
      <div
        className={`fixed inset-0 z-40 bg-ink/20 backdrop-blur-sm transition-opacity duration-300 md:hidden ${
          open ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
        onClick={() => setOpen(false)}
        aria-hidden="true"
      />

      {/* Mobile panel */}
      <div
        role="dialog"
        aria-label="Mobile navigation menu"
        aria-modal="true"
        className={`fixed top-0 right-0 z-50 flex h-full w-[280px] flex-col bg-surface shadow-2xl transition-transform duration-300 ease-[cubic-bezier(.22,1,.36,1)] md:hidden ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between border-b border-ink/5 px-5 py-4">
          <Link
            href="/"
            onClick={() => setOpen(false)}
            className="text-lg font-bold tracking-tight"
          >
            <span className="text-ink">Open</span>
            <span className="text-brand">ADHD</span>
          </Link>
          <button
            type="button"
            onClick={() => setOpen(false)}
            aria-label="Close menu"
            className="flex h-8 w-8 items-center justify-center rounded-lg text-ink-muted hover:bg-brand/5 hover:text-ink"
          >
            <svg viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5">
              <path d="M6.28 5.22a.75.75 0 0 0-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 1 0 1.06 1.06L10 11.06l3.72 3.72a.75.75 0 1 0 1.06-1.06L11.06 10l3.72-3.72a.75.75 0 0 0-1.06-1.06L10 8.94 6.28 5.22Z" />
            </svg>
          </button>
        </div>
        <ul className="flex flex-col gap-1 px-4 py-5">
          {navLinks.map(({ href, label }) => (
            <li key={href}>
              <Link
                href={href}
                onClick={() => setOpen(false)}
                className={`flex items-center rounded-xl px-4 py-3 text-[0.95rem] font-medium transition-all duration-200 ${
                  active(href)
                    ? "bg-brand/8 text-brand font-semibold"
                    : "text-ink-muted hover:bg-ink/3 hover:text-ink"
                }`}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}
