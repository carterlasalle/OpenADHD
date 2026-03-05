"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/resources", label: "Resources" },
  { href: "/diagnosis", label: "Getting Diagnosed" },
  { href: "/tools", label: "Tools" },
  { href: "/community", label: "Community" },
  { href: "/about", label: "About" },
] as const;

export default function Navigation() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header
      className="sticky top-0 z-50 w-full border-b border-accent-coral/10 bg-bg-warm/80 backdrop-blur-lg"
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        {/* Logo / Brand */}
        <Link
          href="/"
          className="flex items-center gap-0.5 text-xl tracking-tight transition-opacity hover:opacity-80"
          onClick={() => setMobileOpen(false)}
        >
          <span className="font-normal text-text-primary">Open</span>
          <span className="font-bold text-accent-coral">ADHD</span>
        </Link>

        {/* Desktop links */}
        <ul className="hidden items-center gap-1 md:flex">
          {navLinks.map(({ href, label }) => (
            <li key={href}>
              <Link
                href={href}
                className={`relative rounded-lg px-3 py-2 text-sm font-medium transition-colors duration-200
                  ${
                    isActive(href)
                      ? "text-accent-coral"
                      : "text-text-secondary hover:text-text-primary hover:bg-accent-coral/5"
                  }`}
              >
                {label}
                {isActive(href) && (
                  <span className="absolute inset-x-3 -bottom-0.5 h-0.5 rounded-full bg-accent-coral" />
                )}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile hamburger button */}
        <button
          type="button"
          onClick={() => setMobileOpen((prev) => !prev)}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
          className="relative flex h-9 w-9 items-center justify-center rounded-lg text-text-secondary transition-colors hover:bg-accent-coral/10 hover:text-text-primary md:hidden"
        >
          <span className="sr-only">{mobileOpen ? "Close" : "Open"} navigation</span>
          {/* Animated hamburger → X */}
          <span className="absolute flex flex-col items-center justify-center gap-[5px]">
            <span
              className={`block h-[2px] w-5 rounded-full bg-current transition-all duration-300 ${
                mobileOpen ? "translate-y-[7px] rotate-45" : ""
              }`}
            />
            <span
              className={`block h-[2px] w-5 rounded-full bg-current transition-all duration-300 ${
                mobileOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block h-[2px] w-5 rounded-full bg-current transition-all duration-300 ${
                mobileOpen ? "-translate-y-[7px] -rotate-45" : ""
              }`}
            />
          </span>
        </button>
      </nav>

      {/* Mobile slide-in panel */}
      {/* Backdrop */}
      <div
        className={`fixed inset-0 z-40 bg-bg-dark/30 backdrop-blur-sm transition-opacity duration-300 md:hidden ${
          mobileOpen ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
        onClick={() => setMobileOpen(false)}
        aria-hidden="true"
      />

      {/* Panel */}
      <div
        className={`fixed right-0 top-0 z-50 flex h-full w-72 flex-col border-l border-accent-coral/10 bg-bg-warm shadow-xl transition-transform duration-300 ease-in-out md:hidden ${
          mobileOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Panel header */}
        <div className="flex items-center justify-between border-b border-accent-coral/10 px-5 py-4">
          <Link
            href="/"
            className="text-lg tracking-tight"
            onClick={() => setMobileOpen(false)}
          >
            <span className="font-normal text-text-primary">Open</span>
            <span className="font-bold text-accent-coral">ADHD</span>
          </Link>

          <button
            type="button"
            onClick={() => setMobileOpen(false)}
            aria-label="Close menu"
            className="flex h-8 w-8 items-center justify-center rounded-lg text-text-secondary transition-colors hover:bg-accent-coral/10 hover:text-text-primary"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="h-5 w-5"
            >
              <path d="M6.28 5.22a.75.75 0 0 0-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 1 0 1.06 1.06L10 11.06l3.72 3.72a.75.75 0 1 0 1.06-1.06L11.06 10l3.72-3.72a.75.75 0 0 0-1.06-1.06L10 8.94 6.28 5.22Z" />
            </svg>
          </button>
        </div>

        {/* Mobile links */}
        <ul className="flex flex-col gap-1 overflow-y-auto px-3 py-4">
          {navLinks.map(({ href, label }) => (
            <li key={href}>
              <Link
                href={href}
                onClick={() => setMobileOpen(false)}
                className={`flex items-center rounded-xl px-4 py-3 text-sm font-medium transition-colors duration-200
                  ${
                    isActive(href)
                      ? "bg-accent-coral/10 text-accent-coral"
                      : "text-text-secondary hover:bg-accent-coral/5 hover:text-text-primary"
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
