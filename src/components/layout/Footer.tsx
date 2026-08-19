import Link from "next/link";
import { SiteEmailLink } from "@/components/SiteEmailLink";
import { CookieSettingsButton } from "@/components/cookies/CookieSettingsButton";

const footerLinks = [
  { href: "/services", label: "Services" },
  { href: "/case-types", label: "Case Types" },
  { href: "/sectors", label: "Sectors" },
  { href: "/guides", label: "Guides" },
  { href: "/glossary", label: "Glossary" },
  { href: "/qualifications", label: "Qualifications" },
  { href: "/how-to-instruct", label: "How to Instruct" },
  { href: "/contact", label: "Contact" },
];

export function Footer() {
  return (
    <footer className="mt-auto border-t border-border bg-section-alt">
      <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:justify-between">
          <div className="max-w-sm">
            <p className="font-display text-lg font-semibold text-heading">
              Contract Loss Expert
            </p>
            <p className="mt-2 text-sm leading-relaxed text-body">
              We connect law firms and legal teams worldwide with independent contract loss
              expert witnesses for litigation, tribunals, and arbitration.
            </p>
            <p className="mt-4 text-sm text-body">
              <SiteEmailLink className="font-medium text-accent hover:underline" />
            </p>
          </div>

          <nav aria-label="Footer">
            <ul className="flex flex-wrap gap-x-5 gap-y-2">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-body transition-colors hover:text-accent"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="mt-8 border-t border-border pt-6">
          <p className="text-xs leading-relaxed text-body/70">
            ContractLossExpert.com is not a law firm and does not provide legal
            advice. Expert engagements are arranged directly between the instructing
            party and the expert.
          </p>
          <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-body/70">
            <Link href="/privacy" className="hover:text-accent">
              Privacy
            </Link>
            <Link href="/cookies" className="hover:text-accent">
              Cookies
            </Link>
            <Link href="/terms" className="hover:text-accent">
              Terms
            </Link>
            <CookieSettingsButton />
            <span className="text-body/50">© 2025 ContractLossExpert</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
