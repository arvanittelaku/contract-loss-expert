import { createMetadata } from "@/lib/metadata";
import { PageHero } from "@/components/PageHero";
import { Section } from "@/components/Section";
import { SITE_EMAIL } from "@/lib/site";

export const metadata = createMetadata({
  title: "Terms of Use | ContractLossExpert.com",
  description: "Terms of use for ContractLossExpert.com referral service.",
  path: "/terms",
  noindex: true,
  nofollow: false,
});

export default function TermsPage() {
  return (
    <>
      <PageHero title="Terms of Use" breadcrumbs={[{ label: "Terms of Use" }]} />
      <Section>
        <article className="prose-content mx-auto max-w-3xl">
          <h2>About This Service</h2>
          <p>
            ContractLossExpert.com is a referral and matching service that
            connects UK solicitors, barristers, and law firms with qualified
            contract loss expert witnesses. We are not a law firm and do not
            provide legal advice.
          </p>

          <h2>No Client Relationship</h2>
          <p>
            Submitting an enquiry does not create a solicitor-client relationship
            with ContractLossExpert.com. Any engagement is directly between you
            and the instructed expert witness.
          </p>

          <h2>Expert Selection</h2>
          <p>
            We endeavour to match enquiries with suitably qualified experts based
            on the information provided. Final selection and instruction remain
            the responsibility of the instructing solicitor.
          </p>

          <h2>Fees</h2>
          <p>
            Expert witness fees are agreed directly between the instructing party
            and the expert. We do not charge referral fees to solicitors unless
            separately agreed in writing.
          </p>

          <h2>Limitation of Liability</h2>
          <p>
            To the fullest extent permitted by law, ContractLossExpert.com accepts
            no liability for the content of expert reports, oral evidence, or any
            outcome of litigation or arbitration. Our liability is limited to the
            matching service itself.
          </p>

          <h2>Governing Law</h2>
          <p>
            These terms are governed by the laws of England and Wales. The courts
            of England and Wales have exclusive jurisdiction.
          </p>

          <h2>Contact</h2>
          <p>
            Questions about these terms:{" "}
            <a href={`mailto:${SITE_EMAIL}`}>{SITE_EMAIL}</a>.
          </p>

          <p className="text-sm text-body/70">Last updated: May 2025</p>
        </article>
      </Section>
    </>
  );
}
