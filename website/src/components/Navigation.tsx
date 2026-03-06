"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

const navLinks = [
  { href: "/start-here", label: "Start Here" },
  { href: "/tools", label: "Tools" },
  { href: "/library", label: "Guides" },
  { href: "/care", label: "Care" },
  { href: "/students", label: "Students" },
  { href: "/parents-partners", label: "Support Someone" },
  { href: "/about", label: "About" },
] as const;

export default function Navigation() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const toggleRef = useRef<HTMLButtonElement>(null);
  const drawerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!isOpen) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
        toggleRef.current?.focus();
      }
    };

    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen || !drawerRef.current) return;

    const drawer = drawerRef.current;
    const focusables = drawer.querySelectorAll<HTMLElement>(
      'a[href], button, [tabindex]:not([tabindex="-1"])',
    );

    if (focusables.length === 0) return;

    const first = focusables[0];
    const last = focusables[focusables.length - 1];
    first.focus();

    const trapFocus = (event: KeyboardEvent) => {
      if (event.key !== "Tab") return;
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      }
      if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", trapFocus);
    return () => document.removeEventListener("keydown", trapFocus);
  }, [isOpen]);

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname === href || pathname.startsWith(`${href}/`);
  };

  return (
    <header className={`site-header ${isScrolled ? "is-scrolled" : ""}`}>
      <div className="site-alert" role="note">
        <span style={{ color: "var(--danger)", marginRight: "0.35rem" }}>&#9888;</span>
        If you are in immediate crisis: call or text{" "}
        <a
          href="https://988lifeline.org"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            color: "var(--danger)",
            fontWeight: 800,
            textDecoration: "underline",
            textUnderlineOffset: "2px",
          }}
        >
          988
        </a>{" "}
        in the U.S.
      </div>
      <nav className="nav-shell" aria-label="Primary">
        <Link
          className="brand-lockup"
          href="/"
          onClick={() => setIsOpen(false)}
          aria-label="OpenADHD home"
        >
          <span className="brand-open">Open</span>
          <strong className="brand-adhd">ADHD</strong>
        </Link>

        <ul className="nav-links" aria-label="Primary links">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={`nav-link ${isActive(link.href) ? "is-active" : ""}`}
                aria-current={isActive(link.href) ? "page" : undefined}
              >
                {link.label}
                {isActive(link.href) && (
                  <span className="nav-link-dot" aria-hidden="true" />
                )}
              </Link>
            </li>
          ))}
        </ul>

        <div className="nav-actions">
          <Link className="btn btn-bad-day" href="/tools/bad-day-mode">
            <span aria-hidden="true" style={{ fontSize: "0.9em" }}>&#9888;</span>
            Bad Day Mode
          </Link>
          <button
            ref={toggleRef}
            type="button"
            aria-expanded={isOpen}
            aria-label={isOpen ? "Close menu" : "Open menu"}
            className="nav-toggle"
            onClick={() => setIsOpen((prev) => !prev)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </nav>

      <div
        className={`nav-overlay ${isOpen ? "is-open" : ""}`}
        onClick={() => setIsOpen(false)}
        aria-hidden="true"
      />

      <div
        ref={drawerRef}
        className={`nav-drawer ${isOpen ? "is-open" : ""}`}
        role="dialog"
        aria-modal="true"
        aria-label="Mobile menu"
      >
        <div className="nav-drawer-header">
          <Link
            href="/"
            className="brand-lockup nav-drawer-brand"
            onClick={() => setIsOpen(false)}
            aria-label="OpenADHD home"
          >
            <span className="brand-open">Open</span>
            <strong className="brand-adhd">ADHD</strong>
          </Link>
          <button
            type="button"
            className="nav-drawer-close"
            onClick={() => setIsOpen(false)}
            aria-label="Close menu"
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
              aria-hidden="true"
              focusable="false"
            >
              <path
                d="M2 2L16 16M16 2L2 16"
                stroke="currentColor"
                strokeWidth="2.2"
                strokeLinecap="round"
              />
            </svg>
          </button>
        </div>
        <ul className="nav-drawer-links">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={`nav-drawer-link ${isActive(link.href) ? "is-active" : ""}`}
                aria-current={isActive(link.href) ? "page" : undefined}
                onClick={() => setIsOpen(false)}
              >
                <span className="nav-drawer-link-text">{link.label}</span>
                <span className="nav-drawer-link-arrow" aria-hidden="true">
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 14 14"
                    fill="none"
                    focusable="false"
                  >
                    <path
                      d="M3 7H11M11 7L7.5 3.5M11 7L7.5 10.5"
                      stroke="currentColor"
                      strokeWidth="1.6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              </Link>
            </li>
          ))}
        </ul>
        <Link
          className="btn btn-primary nav-drawer-cta"
          href="/tools/bad-day-mode"
          onClick={() => setIsOpen(false)}
        >
          <span aria-hidden="true" style={{ fontSize: "0.9em" }}>&#9888;</span>
          Open Bad Day Mode
        </Link>
      </div>

      <style>{`
        .brand-lockup {
          display: inline-flex;
          align-items: baseline;
          gap: 0;
          text-decoration: none;
          font-size: 1.35rem;
          font-family: var(--font-serif), Georgia, serif;
          letter-spacing: -0.01em;
        }

        .brand-open {
          display: inline-flex;
          align-items: center;
          background: var(--brand);
          color: #fff;
          font-weight: 800;
          font-size: 0.72em;
          letter-spacing: 0.04em;
          text-transform: uppercase;
          padding: 0.15em 0.5em 0.18em;
          border-radius: 6px 6px 6px 2px;
          margin-right: 0.28em;
          line-height: 1.4;
          vertical-align: baseline;
          position: relative;
          top: -0.05em;
        }

        .brand-adhd {
          color: var(--text-strong);
          font-weight: 800;
          font-style: normal;
          letter-spacing: -0.02em;
        }

        .nav-drawer-brand {
          font-size: 1.2rem;
        }

        .nav-link {
          position: relative;
          text-decoration: none;
          padding: 0.45rem 0.62rem;
          border-radius: 0.5rem;
          font-size: 0.9rem;
          font-weight: 600;
          color: var(--text-muted);
          transition: color 160ms ease, background 160ms ease;
          display: inline-flex;
          flex-direction: column;
          align-items: center;
          gap: 0;
        }

        .nav-link:hover {
          color: var(--text);
          background: color-mix(in oklab, var(--surface-alt) 84%, transparent);
        }

        .nav-link.is-active {
          color: var(--brand);
          background: color-mix(in oklab, var(--brand) 10%, var(--surface));
          font-weight: 700;
        }

        .nav-link-dot {
          display: block;
          width: 4px;
          height: 4px;
          border-radius: 50%;
          background: var(--brand);
          margin-top: 2px;
          position: absolute;
          bottom: 4px;
          left: 50%;
          transform: translateX(-50%);
        }

        .btn-bad-day {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 0.4rem;
          border-radius: 0.72rem;
          border: 1.5px solid color-mix(in oklab, var(--brand) 45%, transparent);
          padding: 0.52rem 0.82rem;
          font-weight: 700;
          font-size: 0.87rem;
          text-decoration: none;
          cursor: pointer;
          background: color-mix(in oklab, var(--brand) 12%, var(--surface));
          color: var(--brand-dark);
          transition: transform 180ms ease, background 180ms ease, color 180ms ease, border-color 180ms ease;
        }

        .btn-bad-day:hover {
          background: color-mix(in oklab, var(--brand) 20%, var(--surface));
          border-color: color-mix(in oklab, var(--brand) 62%, transparent);
          color: var(--brand-dark);
          transform: translateY(-1px);
        }

        .nav-drawer-close {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 36px;
          height: 36px;
          border-radius: 0.6rem;
          border: 1px solid var(--line);
          background: var(--surface-alt);
          color: var(--text-muted);
          cursor: pointer;
          transition: background 150ms, color 150ms;
          flex-shrink: 0;
        }

        .nav-drawer-close:hover {
          background: color-mix(in oklab, var(--brand) 10%, var(--surface));
          color: var(--brand);
          border-color: color-mix(in oklab, var(--brand) 28%, var(--line));
        }

        .nav-drawer-link {
          text-decoration: none;
          border-radius: 0.65rem;
          padding: 0.7rem 0.75rem;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 0.5rem;
          color: var(--text-muted);
          font-weight: 600;
          font-size: 0.97rem;
          transition: background 150ms, color 150ms;
        }

        .nav-drawer-link-text {
          flex: 1;
        }

        .nav-drawer-link-arrow {
          color: var(--text-faint);
          opacity: 0;
          transform: translateX(-4px);
          transition: opacity 150ms, transform 150ms, color 150ms;
          display: inline-flex;
          align-items: center;
        }

        .nav-drawer-link:hover .nav-drawer-link-arrow,
        .nav-drawer-link.is-active .nav-drawer-link-arrow {
          opacity: 1;
          transform: translateX(0);
        }

        .nav-drawer-link.is-active {
          background: color-mix(in oklab, var(--brand) 12%, var(--surface));
          color: var(--brand-dark);
          font-weight: 700;
        }

        .nav-drawer-link.is-active .nav-drawer-link-arrow {
          color: var(--brand);
        }

        .nav-drawer-link:hover {
          background: var(--surface-alt);
          color: var(--text);
        }

        .nav-drawer-link:hover .nav-drawer-link-arrow {
          color: var(--text-muted);
        }

        .site-alert {
          text-align: center;
          font-size: 0.76rem;
          font-weight: 700;
          letter-spacing: 0.02em;
          background: color-mix(in oklab, var(--danger) 10%, var(--surface));
          border-bottom: 1px solid color-mix(in oklab, var(--danger) 20%, var(--line));
          padding: 0.32rem 1rem;
          color: var(--text-muted);
        }

        @media (max-width: 1120px) {
          .btn-bad-day {
            display: none;
          }
        }
      `}</style>
    </header>
  );
}
