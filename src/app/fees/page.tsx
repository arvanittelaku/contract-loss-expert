import { createMetadata } from "@/lib/metadata";
import { PageHero } from "@/components/PageHero";
import { Section } from "@/components/Section";
import { CTASection } from "@/components/CTASection";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbSchema } from "@/lib/schema";

export const metadata = createMetadata({
  title: "Contract Loss Expert Witness Fees UK | 2025 Hourly Rates & Costs",
  description:
    "UK contract loss expert witnesses typically charge £250–£600/hour. Learn about fee structures, retainers, report costs, and what affects total engagement costs.",
  path: "/fees",
});

export default function FeesPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Fees", path: "/fees" },
        ])}
      />
      <PageHero
        title="Contract Loss Expert Witness Fees UK"
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Fees" }]}
      />
      <Section>
        <article className="prose-content mx-auto max-w-3xl">
          <h2>Forensic Accountant Rates</h2>
          <ul>
            <li>General commercial loss: £250–£450/hour</li>
            <li>Senior specialist: £450–£650/hour</li>
            <li>Leading expert (High Court/arbitration): £650–£1,000+/hour</li>
          </ul>

          <h2>Construction Quantum Expert Rates</h2>
          <ul>
            <li>Quantity surveyor/quantum expert: £200–£400/hour</li>
            <li>Senior QS specialist: £350–£600/hour</li>
            <li>Expert witness (TCC/ICC/LCIA): £500–£900/hour</li>
          </ul>

          <h2>Report Costs</h2>
          <ul>
            <li>Standard loss quantification report: £5,000–£15,000</li>
            <li>Complex multi-head commercial report: £15,000–£50,000+</li>
            <li>Construction quantum schedule: £8,000–£30,000+</li>
            <li>Rebuttal report: £3,000–£12,000</li>
          </ul>

          <h2>Fee Structures</h2>
          <ul>
            <li>Hourly billing (standard)</li>
            <li>Fixed fee for defined scope</li>
            <li>
              No contingency fee (prohibited for expert witnesses under CPR Part
              35 and professional body rules)
            </li>
          </ul>

          <h2>What Affects Cost</h2>
          <ul>
            <li>Size and complexity of the contract dispute</li>
            <li>Volume of financial records to analyse</li>
            <li>Number of heads of loss claimed</li>
            <li>Whether oral evidence is required at trial or arbitration</li>
            <li>
              Arbitration vs court (international arbitration typically commands
              higher fees)
            </li>
            <li>Construction schedule complexity (Scott Schedules, variations)</li>
          </ul>
          <p>
            Fees are agreed directly with the instructed expert. We provide
            indicative ranges to assist budgeting; final fees depend on scope,
            urgency, and expert seniority.
          </p>
        </article>
      </Section>
      <CTASection />
    </>
  );
}
