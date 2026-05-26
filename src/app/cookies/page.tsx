import Link from "next/link";
import { createMetadata } from "@/lib/metadata";
import { PageHero } from "@/components/PageHero";
import { Section } from "@/components/Section";
import { SiteEmailLink } from "@/components/SiteEmailLink";
import { COOKIE_CATEGORY_LABELS, CONSENT_POLICY_VERSION } from "@/lib/cookies/constants";

export const metadata = createMetadata({
  title: "Cookie Policy | ContractLossExpert.com",
  description:
    "How ContractLossExpert.com uses cookies and similar technologies. Manage your preferences and learn about GDPR-compliant cookie categories.",
  path: "/cookies",
});

export default function CookiesPage() {
  return (
    <>
      <PageHero
        title="Cookie Policy"
        subtitle="How we use cookies and similar technologies on ContractLossExpert.com, and how you can control your choices."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Cookie Policy" },
        ]}
      />
      <Section>
        <article className="prose-content mx-auto max-w-3xl">
          <p className="text-sm text-body/70">Last updated: May 2026 · Policy version {CONSENT_POLICY_VERSION}</p>

          <h2>What Are Cookies?</h2>
          <p>
            Cookies are small text files stored on your device when you visit a
            website. We also use similar technologies such as local storage (for
            example, to remember your cookie consent choices). This policy
            explains what we use, why, and how you can manage your preferences.
          </p>

          <h2>Your Choices (GDPR & ePrivacy)</h2>
          <p>
            Under UK GDPR and the Privacy and Electronic Communications
            Regulations (PECR), we must obtain your consent before placing
            non-essential cookies on your device. When you first visit our site,
            you can <strong>Accept All</strong>, <strong>Reject Non-Essential</strong>,
            or <strong>Customise Preferences</strong>. You may change your mind at
            any time using <strong>Cookie Settings</strong> in the footer.
          </p>
          <p>
            California residents: we do not sell personal information. You may
            opt out of non-essential cookies via Cookie Settings (CCPA best
            practice).
          </p>

          <h2>Cookie Categories</h2>

          <h3>{COOKIE_CATEGORY_LABELS.necessary.title}</h3>
          <p>{COOKIE_CATEGORY_LABELS.necessary.description}</p>
          <p>
            <strong>Examples:</strong> consent preference storage (
            <code>cle-cookie-consent</code> in localStorage, 12-month expiry).
          </p>

          <h3>{COOKIE_CATEGORY_LABELS.analytics.title}</h3>
          <p>{COOKIE_CATEGORY_LABELS.analytics.description}</p>
          <p>
            <strong>Examples (if enabled):</strong> Google Analytics (
            <code>_ga</code>, <code>_gid</code>), Google Tag Manager, Hotjar
            session cookies. We use Google Consent Mode v2 so tags respect your
            choices.
          </p>

          <h3>{COOKIE_CATEGORY_LABELS.marketing.title}</h3>
          <p>{COOKIE_CATEGORY_LABELS.marketing.description}</p>
          <p>
            <strong>Examples (if enabled):</strong> Meta Pixel (<code>_fbp</code>
            ), LinkedIn Insight Tag (<code>li_sugr</code>, <code>bcookie</code>
            ).
          </p>

          <h3>{COOKIE_CATEGORY_LABELS.preferences.title}</h3>
          <p>{COOKIE_CATEGORY_LABELS.preferences.description}</p>
          <p>
            <strong>Examples (if enabled):</strong> cookies that remember
            interface or display preferences you have selected.
          </p>

          <h2>Third-Party Services</h2>
          <p>Depending on your consent, we may use:</p>
          <ul>
            <li>Google Analytics / Google Tag Manager (Google Ireland Ltd.)</li>
            <li>Meta Pixel (Meta Platforms Ireland Ltd.)</li>
            <li>LinkedIn Insight Tag (LinkedIn Ireland Unlimited Company)</li>
            <li>Hotjar (Hotjar Ltd.)</li>
          </ul>
          <p>
            Each provider has its own privacy policy. Data may be processed in
            the UK, EEA, or United States with appropriate safeguards where
            required.
          </p>

          <h2>How Long We Store Consent</h2>
          <p>
            Your cookie preference record is stored in your browser&apos;s
            localStorage for up to 12 months, after which we will ask you to
            confirm your choices again. If we materially change this policy, we
            will reset consent and show the banner again.
          </p>

          <h2>Managing Cookies in Your Browser</h2>
          <p>
            You can also block or delete cookies through your browser settings.
            Blocking all cookies may affect site functionality. Use our footer
            link <strong>Cookie Settings</strong> for in-site controls without
            leaving the page.
          </p>

          <h2>Contact</h2>
          <p>
            Questions about cookies:{" "}
            <SiteEmailLink className="text-accent hover:underline" />. See also our{" "}
            <Link href="/privacy">Privacy Policy</Link>.
          </p>
        </article>
      </Section>
    </>
  );
}
