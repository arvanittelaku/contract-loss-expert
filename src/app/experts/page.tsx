import { createMetadata } from "@/lib/metadata";
import { PageHero } from "@/components/PageHero";
import { Section } from "@/components/Section";
import { CTASection } from "@/components/CTASection";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbSchema, personSchema } from "@/lib/schema";
import { experts } from "@/data/experts";

export const metadata = createMetadata({
  title:
    "Our Contract Loss Expert Witnesses | UK Forensic Accountants & Quantum Experts",
  description:
    "ContractLossExpert.com connects UK solicitors with qualified contract loss expert witnesses, forensic accountants, quantum surveyors, and economic damages specialists.",
  path: "/experts",
});

export default function ExpertsPage() {
  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Experts", path: "/experts" },
          ]),
          ...experts.map(personSchema),
        ]}
      />
      <PageHero
        title="Our Contract Loss Expert Witnesses"
        subtitle="We connect UK solicitors and barristers with qualified forensic accountants, chartered quantity surveyors, and economic damages specialists, matched by loss type, sector, and forum."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Experts" }]}
      />
      <Section>
        <div className="grid gap-8 lg:grid-cols-3">
          {experts.map((expert) => (
            <div
              key={expert.name}
              className="rounded-[8px] border border-border bg-white p-6 shadow-[var(--shadow-card)]"
            >
              <h2 className="text-xl font-bold text-heading">{expert.name}</h2>
              <p className="mt-1 text-sm font-medium text-accent">
                {expert.jobTitle}
              </p>
              <p className="mt-4 text-body leading-relaxed">
                {expert.description}
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {expert.credentials.map((cred) => (
                  <span
                    key={cred}
                    className="rounded bg-section-alt px-2 py-1 text-xs font-medium text-heading"
                  >
                    {cred}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
        <p className="mt-8 text-center text-body">
          Expert profiles are representative of the specialists in our network.
          The expert matched to your case will depend on loss type, sector, and
          availability.
        </p>
      </Section>
      <CTASection />
    </>
  );
}
