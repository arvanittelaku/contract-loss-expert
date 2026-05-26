import Link from "next/link";
import { SITE_EMAIL } from "@/lib/site";
import { CookieSettingsButton } from "@/components/cookies/CookieSettingsButton";

const servicesCol = [
  { href: "/services#lost-profits", label: "Lost Profits" },
  { href: "/services#wasted-expenditure", label: "Wasted Expenditure" },
  { href: "/services#consequential-loss", label: "Consequential Loss" },
  { href: "/services#construction-quantum", label: "Construction Quantum" },
  { href: "/services#supply-chain-loss", label: "Supply Chain Loss" },
  {
    href: "/services#professional-negligence-damages",
    label: "Professional Negligence",
  },
  { href: "/services#ip-licensing-loss", label: "IP Licence Loss" },
  { href: "/services#expert-determination", label: "Expert Determination" },
];

const caseTypesCol = [
  {
    href: "/case-types/commercial-contract-breach",
    label: "Commercial Contract Breach",
  },
  {
    href: "/case-types/construction-quantum-disputes",
    label: "Construction Quantum",
  },
  { href: "/case-types/supply-chain-failure", label: "Supply Chain Failure" },
  {
    href: "/case-types/professional-negligence-loss",
    label: "Professional Negligence",
  },
  { href: "/case-types/ip-licence-breach", label: "IP Licence Breach" },
  { href: "/case-types", label: "View all 10 →" },
];

const resourcesCol = [
  { href: "/guides", label: "Solicitor Guides" },
  { href: "/glossary", label: "Glossary" },
  { href: "/faq", label: "FAQ" },
  { href: "/fees", label: "Fees Guide" },
  { href: "/how-to-instruct", label: "How to Instruct" },
  { href: "/loss-types", label: "Loss Types" },
];

const aboutCol = [
  { href: "/experts", label: "Our Experts" },
  { href: "/qualifications", label: "Qualifications" },
  { href: "/contact", label: "Contact Us" },
];

export function Footer() {
  return (
    <footer className="border-t border-border bg-primary text-white">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wide text-white/80">
              Services
            </h3>
            <ul className="space-y-2">
              {servicesCol.map((link) => (
                <li key={link.href + link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/70 transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wide text-white/80">
              Case Types
            </h3>
            <ul className="space-y-2">
              {caseTypesCol.map((link) => (
                <li key={link.href + link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/70 transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wide text-white/80">
              Resources
            </h3>
            <ul className="space-y-2">
              {resourcesCol.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/70 transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wide text-white/80">
              About
            </h3>
            <ul className="space-y-2">
              {aboutCol.map((link) => (
                <li key={link.href + link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/70 transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-white/20 pt-8">
          <p className="text-sm text-white/70">
            <a
              href={`mailto:${SITE_EMAIL}`}
              className="font-medium text-white hover:underline"
            >
              {SITE_EMAIL}
            </a>
          </p>
          <p className="mt-3 text-sm text-white/60">
            ContractLossExpert.com connects solicitors with contract loss expert
            witnesses. We are not a law firm and do not provide legal advice.
          </p>
          <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-white/60">
            <Link href="/privacy" className="hover:text-white">
              Privacy Policy
            </Link>
            <Link href="/cookies" className="hover:text-white">
              Cookie Policy
            </Link>
            <Link href="/terms" className="hover:text-white">
              Terms of Use
            </Link>
            <CookieSettingsButton />
          </div>
          <p className="mt-4 text-sm text-white/50">
            © 2025 ContractLossExpert. England and Wales.
          </p>
        </div>
      </div>
    </footer>
  );
}
