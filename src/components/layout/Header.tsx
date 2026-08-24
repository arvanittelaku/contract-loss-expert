"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

const primaryNav = [
  { href: "/services", label: "Services", index: "01" },
  { href: "/case-types", label: "Case Types", index: "02" },
  { href: "/sectors", label: "Sectors", index: "03" },
  { href: "/guides", label: "Guides", index: "04" },
];

const secondaryNav = [
  { href: "/loss-types", label: "Loss Types" },
  { href: "/glossary", label: "Glossary" },
  { href: "/how-to-instruct", label: "How to Instruct" },
  { href: "/qualifications", label: "Qualifications" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const closeMobile = () => setOpen(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header className="sticky top-0 z-50 border-b-2 border-accent bg-surface/95 backdrop-blur-sm">
        <div className="mx-auto flex max-w-6xl items-stretch">
          <Link
            href="/"
            className="flex shrink-0 items-center gap-3 border-r border-border bg-primary px-4 py-3 sm:px-5"
            onClick={closeMobile}
          >
            <span
              className="flex h-10 w-10 shrink-0 items-center justify-center border border-highlight/40 bg-primary text-xs font-bold tracking-wider text-highlight"
              aria-hidden
            >
              CL
            </span>
            <span className="hidden font-display text-sm leading-tight text-white sm:block">
              Contract
              <span className="block text-white/65">Loss Expert</span>
            </span>
          </Link>

          <div className="flex min-w-0 flex-1 flex-col justify-center px-4 py-2 sm:px-5">
            <nav
              className="hidden items-center justify-between gap-4 lg:flex"
              aria-label="Main"
            >
              <ul className="flex flex-wrap items-center gap-x-1 gap-y-1">
                {primaryNav.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="group inline-flex items-baseline gap-1.5 px-2 py-1.5 text-sm text-body transition-colors hover:text-primary"
                    >
                      <span className="font-mono text-[10px] text-accent/80 group-hover:text-accent">
                        {link.index}
                      </span>
                      <span className="border-b border-transparent group-hover:border-accent">
                        {link.label}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
              <Link
                href="/contact"
                className="inline-flex min-h-[44px] shrink-0 items-center border-2 border-primary px-4 py-2 text-sm font-semibold text-primary transition-colors hover:bg-primary hover:text-white"
              >
                Submit Enquiry →
              </Link>
            </nav>

            <div className="flex items-center justify-between lg:hidden">
              <p className="truncate font-display text-sm font-medium text-heading">
                Contract Loss Expert
              </p>
              <button
                type="button"
                className="inline-flex min-h-[44px] min-w-[44px] flex-col items-center justify-center gap-1.5 p-2"
                aria-expanded={open}
                aria-controls="mobile-drawer"
                aria-label={open ? "Close menu" : "Open menu"}
                onClick={() => setOpen(!open)}
              >
                <span
                  className={`block h-0.5 w-5 bg-primary transition-transform ${open ? "translate-y-2 rotate-45" : ""}`}
                />
                <span
                  className={`block h-0.5 w-5 bg-primary transition-opacity ${open ? "opacity-0" : ""}`}
                />
                <span
                  className={`block h-0.5 w-5 bg-primary transition-transform ${open ? "-translate-y-2 -rotate-45" : ""}`}
                />
              </button>
            </div>
          </div>
        </div>

        <nav
          className="hidden border-t border-border bg-section-alt lg:block"
          aria-label="Secondary"
        >
          <div className="mx-auto flex max-w-6xl flex-wrap items-center gap-x-5 gap-y-1 px-4 py-2 text-xs sm:px-5">
            {secondaryNav.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="uppercase tracking-[0.14em] text-body/70 transition-colors hover:text-accent"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </nav>
      </header>

      {open && (
        <div
          id="mobile-drawer"
          className="fixed inset-0 z-[60] lg:hidden"
          role="dialog"
          aria-modal="true"
          aria-label="Site navigation"
        >
          <button
            type="button"
            className="absolute inset-0 bg-primary/40"
            aria-label="Close menu"
            onClick={closeMobile}
          />
          <div className="absolute right-0 top-0 flex h-full w-[min(100%,20rem)] flex-col border-l-4 border-accent bg-surface shadow-2xl">
            <div className="flex items-center justify-between border-b border-border px-5 py-4">
              <span className="font-display text-sm font-semibold text-heading">
                Index
              </span>
              <button
                type="button"
                className="text-sm text-body hover:text-accent"
                onClick={closeMobile}
              >
                Close
              </button>
            </div>
            <nav className="flex-1 overflow-y-auto px-5 py-6" aria-label="Mobile">
              <ul className="space-y-1">
                <li>
                  <Link
                    href="/"
                    className="flex min-h-[44px] items-center gap-3 font-display text-base text-heading"
                    onClick={closeMobile}
                  >
                    <span className="font-mono text-xs text-accent">—</span>
                    Home
                  </Link>
                </li>
                {primaryNav.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="flex min-h-[44px] items-center gap-3 text-base text-body"
                      onClick={closeMobile}
                    >
                      <span className="w-6 font-mono text-xs text-accent">
                        {link.index}
                      </span>
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
              <p className="mt-8 mb-3 text-[10px] uppercase tracking-[0.2em] text-body/50">
                Also see
              </p>
              <ul className="space-y-1 border-l-2 border-border pl-4">
                {secondaryNav.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="flex min-h-[40px] items-center text-sm text-body/80"
                      onClick={closeMobile}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
            <div className="border-t border-border p-5">
              <Link
                href="/contact"
                className="flex min-h-[44px] items-center justify-center border-2 border-primary bg-primary text-sm font-semibold text-white"
                onClick={closeMobile}
              >
                Submit Enquiry
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
