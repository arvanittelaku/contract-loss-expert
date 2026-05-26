import { createMetadata } from "@/lib/metadata";
import { PageHero } from "@/components/PageHero";
import { Section } from "@/components/Section";
import { CTASection } from "@/components/CTASection";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbSchema, faqPageSchema } from "@/lib/schema";
import { faqItems } from "@/data/faqs";

export const metadata = createMetadata({
  title: "Contract Loss Expert Witness FAQ UK | Common Questions Answered",
  description:
    "Answers to common questions about UK contract loss expert witnesses — but-for methodology, Hadley v Baxendale, wasted expenditure, CPR Part 35, and fees.",
  path: "/faq",
});

export default function FAQPage() {
  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "FAQ", path: "/faq" },
          ]),
          faqPageSchema(faqItems),
        ]}
      />
      <PageHero
        title="Contract Loss Expert Witness FAQ"
        subtitle="Answers to the most common questions UK solicitors ask about instructing contract loss expert witnesses."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "FAQ" }]}
      />
      <Section>
        <div className="mx-auto max-w-3xl space-y-8">
          {faqItems.map((faq) => (
            <div key={faq.question}>
              <h2 className="text-lg font-bold text-heading">{faq.question}</h2>
              <p className="mt-2 text-body leading-relaxed">{faq.answer}</p>
            </div>
          ))}
        </div>
      </Section>
      <CTASection />
    </>
  );
}
