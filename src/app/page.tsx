import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { Section } from "@/components/Section";
import { CTASection } from "@/components/CTASection";
import { Card } from "@/components/Card";
import { ResponsiveTable } from "@/components/ui/ResponsiveTable";
import { JsonLd } from "@/components/JsonLd";
import {
  organizationSchema,
  professionalServiceSchema as buildProfessionalServiceSchema,
  serviceNode,
  websiteSchema,
} from "@/lib/schema";
import { services } from "@/data/services";

const serviceCards = [
  { href: "/services#lost-profits", title: "Lost Profits Quantification" },
  { href: "/services#wasted-expenditure", title: "Wasted Expenditure Analysis" },
  { href: "/services#consequential-loss", title: "Consequential Loss Assessment" },
  { href: "/services#construction-quantum", title: "Construction Quantum Claims" },
  { href: "/services#supply-chain-loss", title: "Supply Chain Loss Analysis" },
  {
    href: "/services#professional-negligence-damages",
    title: "Professional Negligence Damages",
  },
  { href: "/services#ip-licensing-loss", title: "IP & Licensing Loss Quantification" },
  { href: "/services#expert-determination", title: "Expert Determination & ADR" },
];

const stats = [
  ["Typical expert hourly rate", "£250–£600/hr", "Industry average"],
  ["Governing rule — remoteness", "Hadley v Baxendale [1854]", "Contract law"],
  ["Primary damage measure", "Expectation loss (but-for)", "Robinson v Harman [1848]"],
  ["Alternative measure", "Reliance loss / wasted expenditure", "Anglia TV v Reed [1972]"],
  ["Court framework", "CPR Part 35", "Civil Procedure Rules"],
  ["Duty to mitigate", "Yes — claimant must minimise loss", "UK contract law"],
  ["Arbitration frameworks", "LCIA, ICC, UNCITRAL", "As applicable"],
];

const trustPoints = [
  "Forensic accountants: ACA, FCA, CFA, CFE credentialed",
  "Construction quantum surveyors: MRICS, FRICS, FCIArb",
  "CPR Part 35 compliant reports",
  "But-for methodology clearly explained",
  "Hadley v Baxendale remoteness analysis addressed",
  "Mitigation duty properly applied",
  "Available as SJE or party-appointed expert",
  "Commercial, construction, and professional negligence specialists available",
];

export default function HomePage() {
  const homepageSchema = {
    "@context": "https://schema.org",
    "@graph": [
      organizationSchema,
      buildProfessionalServiceSchema(services.map((s) => s.name)),
      websiteSchema,
      ...services.map((s) =>
        serviceNode(s.id, s.name, s.description)
      ),
    ],
  };

  return (
    <>
      <JsonLd data={homepageSchema} />
      <PageHero
        title="Contract Loss Expert Witness Services for UK Solicitors & Law Firms"
        subtitle="When a contract is breached, the financial loss must be quantified with precision — and defended under cross-examination. We connect UK solicitors and barristers with qualified contract loss expert witnesses: forensic accountants, quantum experts, and economic damages specialists who produce CPR Part 35 compliant reports for courts, tribunals, and arbitration."
      />
      <Section>
        <div className="text-center">
          <Link
            href="/contact"
            className="inline-flex min-h-[44px] items-center justify-center rounded bg-accent px-8 py-3 font-semibold text-white transition-colors hover:bg-[#0d47a1]"
          >
            Instruct an Expert Witness
          </Link>
        </div>
      </Section>

      <Section alt>
        <h2 className="text-2xl font-bold text-heading sm:text-3xl">
          What Our Contract Loss Expert Witnesses Cover
        </h2>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {serviceCards.map((card) => (
            <Card key={card.href} title={card.title} href={card.href} />
          ))}
        </div>
      </Section>

      <Section>
        <h2 className="text-2xl font-bold text-heading sm:text-3xl">
          Contract Loss Expert Witness: Key UK Statistics
        </h2>
        <ResponsiveTable className="mt-6">
          <table className="w-full min-w-[600px] border-collapse text-sm">
            <thead>
              <tr className="bg-section-alt">
                <th className="border border-border px-4 py-3 text-left font-semibold text-heading">
                  Metric
                </th>
                <th className="border border-border px-4 py-3 text-left font-semibold text-heading">
                  Figure
                </th>
                <th className="border border-border px-4 py-3 text-left font-semibold text-heading">
                  Source
                </th>
              </tr>
            </thead>
            <tbody>
              {stats.map(([metric, figure, source]) => (
                <tr key={metric}>
                  <td className="border border-border px-4 py-3 text-body">
                    {metric}
                  </td>
                  <td className="border border-border px-4 py-3 font-medium text-heading">
                    {figure}
                  </td>
                  <td className="border border-border px-4 py-3 text-body">
                    {source}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </ResponsiveTable>
        <p className="mt-4 text-sm text-body/80">
          Sources: Hadley v Baxendale [1854] 9 Ex Ch 341; Robinson v Harman
          [1848] 1 Ex 850; Civil Procedure Rules Part 35. Rates are indicative.
        </p>
      </Section>

      <Section>
        <h2 className="text-2xl font-bold text-heading sm:text-3xl">
          Explore Contract Loss Expert Witness Resources
        </h2>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <Card
            title="Types of Contract Loss"
            description="Expectation, reliance, and consequential loss — the pillar guide for UK solicitors."
            href="/loss-types"
          />
          <Card
            title="Case Types"
            description="Commercial breach, construction quantum, supply chain, professional negligence, and more."
            href="/case-types"
          />
          <Card
            title="Sector Specialists"
            description="Construction, technology, financial services, retail, energy, and IP sectors."
            href="/sectors"
          />
          <Card
            title="Solicitor Guides"
            description="Hadley v Baxendale, but-for methodology, construction quantum, and instruction letters."
            href="/guides"
          />
          <Card
            title="FAQ"
            description="But-for methodology, wasted expenditure, fees, CPR Part 35, and SJE vs party-appointed experts."
            href="/faq"
          />
          <Card
            title="Glossary"
            description="30 definition-first terms for UK contract loss litigation."
            href="/glossary"
          />
        </div>
      </Section>

      <Section alt>
        <h2 className="text-2xl font-bold text-heading sm:text-3xl">
          Why UK Solicitors Trust Our Contract Loss Expert Witnesses
        </h2>
        <ul className="mt-6 grid gap-3 sm:grid-cols-2">
          {trustPoints.map((point) => (
            <li key={point} className="flex items-start gap-2 text-body">
              <span className="mt-1 text-accent" aria-hidden>
                ✓
              </span>
              {point}
            </li>
          ))}
        </ul>
        <div className="mt-8 rounded-[8px] border border-border bg-white p-6 shadow-[var(--shadow-card)]">
          <p className="text-body leading-relaxed">
            A{" "}
            <strong className="text-heading">contract loss expert witness</strong>{" "}
            is a qualified financial professional retained to provide an
            independent, court-admissible opinion on financial losses arising
            from breach of contract — quantifying expectation damages, reliance
            loss, and consequential loss using but-for methodology and CPR Part
            35 compliant reports.
          </p>
          <Link
            href="/what-is-a-contract-loss-expert-witness"
            className="mt-3 inline-block font-medium text-accent hover:underline"
          >
            What is a contract loss expert witness? →
          </Link>
        </div>
      </Section>

      <CTASection />
    </>
  );
}
