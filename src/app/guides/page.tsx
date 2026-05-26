import { createMetadata } from "@/lib/metadata";
import { PageHero } from "@/components/PageHero";
import { Section } from "@/components/Section";
import { CTASection } from "@/components/CTASection";
import { Card } from "@/components/Card";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbSchema } from "@/lib/schema";
import { guides } from "@/data/guides";

export const metadata = createMetadata({
  title: "Solicitor Guides: Contract Loss Expert Witnesses UK | Quantum & Damages",
  description:
    "In-depth guides for UK solicitors on contract loss expert witnesses — lost profits methodology, Hadley v Baxendale, construction quantum, and more.",
  path: "/guides",
});

export default function GuidesPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Guides", path: "/guides" },
        ])}
      />
      <PageHero
        title="Solicitor Guides: Contract Loss Expert Witnesses UK"
        subtitle="Practical guides on instructing quantum experts, lost profits methodology, remoteness of damage, construction claims, and professional negligence loss quantification."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Guides" },
        ]}
      />
      <Section>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {guides.map((g) => (
            <Card
              key={g.slug}
              title={g.title}
              description={g.metaDescription.slice(0, 140) + "…"}
              href={`/guides/${g.slug}`}
            />
          ))}
        </div>
      </Section>
      <CTASection />
    </>
  );
}
