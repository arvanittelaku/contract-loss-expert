import { createMetadata } from "@/lib/metadata";
import { PageHero } from "@/components/PageHero";
import { Section } from "@/components/Section";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbSchema } from "@/lib/schema";
import { ContactForm } from "@/components/forms/ContactForm";
import { SiteEmailLink } from "@/components/SiteEmailLink";

export const metadata = createMetadata({
  title: "Instruct a Contract Loss Expert Witness | ContractLossExpert.com",
  description:
    "Submit your case details to be matched with a qualified contract loss expert witness. Court-ready expert reports. Response within 1 business day.",
  path: "/contact",
});

const trustPoints = [
  "CPR Part 35 compliant reports",
  "Forensic accountants & quantum surveyors",
  "Commercial & construction specialists",
  "Response within 1 business day",
];

export default function ContactPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Contact", path: "/contact" },
        ])}
      />
      <PageHero
        title="Instruct a Contract Loss Expert Witness"
        subtitle="Submit your case details and we will match you with a qualified contract loss expert witness. All enquiries are treated confidentially."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Contact" }]}
      />
      <Section>
        <div className="grid min-w-0 gap-10 lg:grid-cols-3">
          <div className="min-w-0 lg:col-span-2">
            <ContactForm />
          </div>
          <aside className="rounded-[8px] border border-border bg-section-alt p-6">
            <h2 className="text-lg font-bold text-heading">Why Instruct Through Us</h2>
            <ul className="mt-4 space-y-4">
              {trustPoints.map((point) => (
                <li key={point} className="flex items-start gap-2 text-body">
                  <span className="text-accent" aria-hidden>
                    ✓
                  </span>
                  {point}
                </li>
              ))}
            </ul>
            <p className="mt-6 text-sm text-body">
              Email us directly:{" "}
              <SiteEmailLink className="font-medium text-accent hover:underline" />
            </p>
          </aside>
        </div>
      </Section>
    </>
  );
}
