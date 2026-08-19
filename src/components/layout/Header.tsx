"use client";

import Link from "next/link";
import { useState } from "react";
import { SiteEmailLink } from "@/components/SiteEmailLink";

const navLinks = [
  { href: "/services", label: "Services" },
  { href: "/case-types", label: "Case Types" },
  { href: "/sectors", label: "Sectors" },
  { href: "/guides", label: "Guides" },
  { href: "/how-to-instruct", label: "How to Instruct" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const closeMobile = () => setOpen(false);

  return (
    <header className="border-b border-border">
      <div className="border-b border-border bg-section-alt">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-2 px-4 py-2 text-xs text-body sm:px-6">
          <p className="tracking-wide">
            Contract loss expert witnesses for legal teams worldwide
          </p>
          <SiteEmailLink className="font-medium text-primary hover:text-accent" />
        </div>
      </div>

      <div className="bg-primary text-white">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-4 sm:px-6">
          <Link
            href="/"
            className="font-display min-w-0 leading-tight"
            onClick={closeMobile}
          >
            <span className="block text-lg font-semibold tracking-tight sm:text-xl">
              Contract Loss
            </span>
            <span className="block text-sm font-normal tracking-[0.2em] text-white/70 uppercase">
              Expert Witness
            </span>
          </Link>

          <nav className="hidden items-center gap-1 md:flex" aria-label="Main">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="relative px-3 py-2 text-sm text-white/85 transition-colors hover:text-white after:absolute after:inset-x-3 after:bottom-1 after:h-px after:scale-x-0 after:bg-accent after:transition-transform hover:after:scale-x-100"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact"
              className="ml-3 inline-flex min-h-[44px] items-center rounded-sm bg-accent px-5 py-2 text-sm font-semibold text-white transition-colors hover:bg-[#a34a32]"
            >
              Contact
            </Link>
          </nav>

          <button
            type="button"
            className="inline-flex min-h-[44px] min-w-[44px] items-center justify-center rounded-sm border border-white/25 p-2 md:hidden"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen(!open)}
          >
            <svg
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden
            >
              {open ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {open && (
        <div
          id="mobile-menu"
          className="border-b border-border bg-surface md:hidden"
        >
          <nav className="mx-auto max-w-6xl px-4 py-4 sm:px-6" aria-label="Mobile">
            <ul className="divide-y divide-border">
              <li>
                <Link
                  href="/"
                  className="flex min-h-[44px] items-center text-sm font-medium text-heading"
                  onClick={closeMobile}
                >
                  Home
                </Link>
              </li>
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="flex min-h-[44px] items-center text-sm text-body"
                    onClick={closeMobile}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/contact"
                  className="mt-2 flex min-h-[44px] items-center justify-center rounded-sm bg-accent text-sm font-semibold text-white"
                  onClick={closeMobile}
                >
                  Contact
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      )}
    </header>
  );
}
