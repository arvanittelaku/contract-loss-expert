# ContractLossExpert.com SEO: Complete Current-State Handoff for Claude

**Purpose:** Give Claude a source-of-truth briefing on the SEO implementation, content model, keyword universe, route architecture, metadata, headings, schema, internal links, crawl controls, analytics, and known defects in the current website.

**Snapshot:** 17 July 2026  
**Git commit audited:** `33e2099`  
**Production host:** `https://www.contractlossexpert.com`  
**Framework:** Next.js 16.2.6 App Router, React 19, TypeScript, Tailwind CSS v4, Netlify Next.js plugin  
**Current positioning:** English-language, worldwide contract loss expert witness matching service  
**Company email:** `contact@contractlossexpert.com`

> Claude: treat this file as the current-state map, but treat executable source code as the final authority if this file and code ever diverge. The older `docs/SEO-ARCHITECTURE.md` is a historical UK-focused plan and is materially stale. Do not use it as the current route or positioning source without checking this document and the implementation.

---

## 1. Executive SEO state

The site is a hub-and-spoke lead-generation website for law firms, counsel, and other legal teams seeking contract loss expert witnesses. It targets transactional, informational, legal-methodology, case-type, sector, and expert-instruction queries.

The current architecture contains:

- 35 URLs in `public/sitemap.xml`.
- 11 indexable static URLs in `APP_STATIC_PATHS`.
- 10 statically generated case-type detail pages.
- 8 statically generated sector detail pages.
- 6 statically generated guide detail pages.
- 4 existing routes intentionally excluded from the sitemap.
- 3 recently removed routes: `/fees`, `/faq`, and `/experts`.
- One H1 per rendered page through `PageHero`.
- Shared metadata generation with canonical, English hreflang, Open Graph, Twitter card, robots directives, and optional search-engine verification.
- JSON-LD for Organization, ProfessionalService, WebSite, Service, BreadcrumbList, FAQPage, and Article.
- Programmatic sitemap and robots generation before every production build.
- Programmatic internal-link augmentation for case types, sectors, guides, and the loss-types pillar.
- Consent-gated analytics and marketing tags.

Current brand/topic promise:

> Contract loss expert witness services for law firms worldwide, covering lost profits, wasted expenditure, consequential loss, construction quantum, supply-chain loss, professional negligence damages, IP/licensing loss, and expert determination.

Current primary conversion:

> Submit the contact form or email `contact@contractlossexpert.com` to instruct an expert witness.

---

## 2. Files that control SEO

### Core metadata and identity

- `src/app/layout.tsx`
  - Root title and description used by the homepage.
  - `<html lang="en">`.
  - Inter font via `next/font/google`, Latin subset, `display: "swap"`.
- `src/lib/metadata.ts`
  - Shared metadata builder for page titles, descriptions, canonical URLs, hreflang, Open Graph, Twitter, robots, and verification tags.
- `src/lib/site.ts`
  - Canonical fallback host, brand name, email, LinkedIn URL, and design tokens.
- `src/lib/schema.ts`
  - All reusable JSON-LD builders and shared schema nodes.
- `src/components/JsonLd.tsx`
  - Serializes one or more schema objects into `application/ld+json` scripts.

### URL inventory, crawl, and generation

- `src/lib/seo/publicUrlInventory.ts`
  - Canonical URL inventory, sitemap inclusions/exclusions, priorities, and change frequencies.
- `scripts/generate-seo.ts`
  - Writes `public/sitemap.xml` and `public/robots.txt`.
- `scripts/verify-seo.ts`
  - Verifies sitemap `<loc>` entries exactly match the URL inventory.
- `public/sitemap.xml`
  - Generated artifact; never edit manually.
- `public/robots.txt`
  - Generated artifact; never edit manually.
- `middleware.ts`
  - Redirects apex host to `www` with HTTP 301.
- `netlify.toml`
  - Runs the build and sets content types for sitemap and robots.

### Content and keyword sources

- `src/data/services.ts`
  - Eight service topics, service anchors, descriptions, long-form copy, methodology tables, and 16 service FAQs.
- `src/data/case-types.ts`
  - Ten case-type routes, H1s, metadata, copy, 20 FAQs, and base related links.
- `src/data/sectors.ts`
  - Eight sector routes, H1s, metadata, copy, 16 FAQs, and base related links.
- `src/data/guides.ts`
  - Six guide routes, H1s, metadata, 30 section headings, guide FAQs, and base related links.
- `src/data/glossary.ts`
  - Thirty glossary entities, definitions, optional contextual links, and generated FAQ questions.
- `src/lib/glossary-slug.ts`
  - Stable deep-link IDs for all 30 glossary entities.

### Rendering and hierarchy

- `src/components/PageHero.tsx`
  - Renders the visible H1 and HTML breadcrumbs.
- `src/components/ContentPageTemplate.tsx`
  - Renders case-type and sector pages, visible FAQs, FAQ schema, related links, and CTA.
- `src/components/GuidePageTemplate.tsx`
  - Renders guide pages and Article/Breadcrumb schema.
- `src/components/RelatedLinks.tsx`
  - Renders “Related Resources” as an H2 and contextual links.
- `src/lib/seo-internal-links.ts`
  - Enforces per-cluster internal links and de-duplicates by exact `href`.
- `src/components/ServiceSectionFooter.tsx`
  - Adds links beneath each service.
- `src/data/nav.ts`, `src/components/layout/Header.tsx`, `src/components/layout/Footer.tsx`
  - Sitewide navigation and footer link graph.

### Analytics and consent

- `src/components/cookies/ConsentDefaults.tsx`
- `src/lib/cookies/consent-manager.ts`
- `src/components/cookies/CookieConsentRoot.tsx`
- `src/app/cookies/page.tsx`

---

## 3. Brand, domain, language, and geography

### Canonical identity

- Brand: `ContractLossExpert`
- Canonical fallback: `https://www.contractlossexpert.com`
- Email: `contact@contractlossexpert.com`
- LinkedIn: `https://www.linkedin.com/company/contract-loss-expert`
- Canonical URL can be overridden by `NEXT_PUBLIC_SITE_URL`.
- Trailing slash is stripped from `NEXT_PUBLIC_SITE_URL`.
- Apex `contractlossexpert.com` redirects to `https://www.contractlossexpert.com` with 301.

### Current language implementation

- HTML language: `en`
- Hreflang entries on every page using `createMetadata`:
  - `en`
  - `x-default`
- Both hreflang values point to the same canonical URL.
- Open Graph locale is currently set to `en`.

### Current geographic positioning

Marketing copy now says “worldwide,” “legal teams,” and “law firms and counsel.” Organization schema says `Worldwide`.

However, the site remains substantively based on English law and procedure:

- CPR Part 35 and Practice Direction 35.
- Technology and Construction Court.
- Housing Grants, Construction and Regeneration Act 1996.
- Commercial Agents Regulations 1993.
- Senior Courts Act 1981.
- English authorities including Hadley v Baxendale, Robinson v Harman, SAAMCo, Allied Maples, Anglia TV v Reed, and The Ikarian Reefer.
- JCT and NEC construction contracts.
- UK credentials and bodies such as ICAEW, RICS, FCA, and TCC.

This creates a deliberate or accidental tension between worldwide marketing and UK-law topical authority. See “Known inconsistencies and risks.”

---

## 4. Shared metadata implementation

`createMetadata()` in `src/lib/metadata.ts` receives:

- `title`
- `description`
- `path`, default `""`
- `noindex`, default `false`
- `nofollow`, default `false`

It emits:

- `title`
- `description`
- `metadataBase: new URL(SITE_URL)`
- `alternates.canonical`
- `alternates.languages.en`
- `alternates.languages["x-default"]`
- Open Graph:
  - title
  - description
  - absolute URL
  - site name `ContractLossExpert`
  - locale `en`
  - type `website`
- Twitter:
  - card `summary_large_image`
  - title
  - description
- Robots:
  - normal pages: `index: true`, `follow: true`
  - `noindex` pages: `index: false`
  - `nofollow` pages: `follow: false`
- Optional verification:
  - `GOOGLE_SITE_VERIFICATION` becomes Next.js Google verification metadata.
  - `BING_SITE_VERIFICATION` becomes `msvalidate.01`.

Important absences:

- No explicit `keywords` meta tag is emitted. This is appropriate because major search engines do not use it for ranking.
- No Open Graph image is configured.
- No Twitter image, creator, or site handle is configured.
- No default title template or title suffix mechanism is configured.
- No author metadata is emitted in HTML metadata.
- No manifest, theme-color metadata, or alternate feed is configured.
- No pagination metadata exists because there is no pagination.

---

## 5. Route and indexability inventory

### 5.1 Sitemap URLs: 35 total

#### Static indexable URLs

1. `/`
2. `/services`
3. `/loss-types`
4. `/case-types`
5. `/sectors`
6. `/what-is-a-contract-loss-expert-witness`
7. `/qualifications`
8. `/how-to-instruct`
9. `/guides`
10. `/glossary`
11. `/cookies`

#### Case-type URLs

12. `/case-types/commercial-contract-breach`
13. `/case-types/construction-quantum-disputes`
14. `/case-types/supply-chain-failure`
15. `/case-types/professional-negligence-loss`
16. `/case-types/ip-licence-breach`
17. `/case-types/earn-out-ma-dispute`
18. `/case-types/franchise-agreement-breach`
19. `/case-types/employment-contract-loss`
20. `/case-types/joint-venture-dispute`
21. `/case-types/distribution-agency-agreement`

#### Sector URLs

22. `/sectors/construction-engineering`
23. `/sectors/technology-software`
24. `/sectors/supply-chain-manufacturing`
25. `/sectors/financial-services-banking`
26. `/sectors/retail-consumer-goods`
27. `/sectors/professional-services`
28. `/sectors/energy-utilities`
29. `/sectors/media-entertainment-ip`

#### Guide URLs

30. `/guides/hadley-v-baxendale-remoteness-guide`
31. `/guides/lost-profits-but-for-methodology`
32. `/guides/wasted-expenditure-reliance-loss`
33. `/guides/construction-quantum-expert-guide`
34. `/guides/professional-negligence-loss-quantification`
35. `/guides/instructing-quantum-expert-letter`

### 5.2 Existing URLs excluded from sitemap

- `/contact`
  - Metadata currently says `index: true, follow: true`.
  - It is omitted from the sitemap only.
- `/thank-you`
  - `noindex: true`, `nofollow: true`.
  - Disallowed in robots.txt.
- `/privacy`
  - `noindex: true`, `follow: true`.
- `/terms`
  - `noindex: true`, `follow: true`.

### 5.3 Special URLs

- `/_not-found` is generated by Next.js.
- Custom 404 metadata:
  - Title: `Page Not Found | ContractLossExpert.com`
  - Description: `The page you requested could not be found.`
  - Robots: `noindex, follow`
- `/api/submit-lead` is dynamic and disallowed in robots.txt.

### 5.4 Removed URLs

These pages were deleted and now resolve through the 404 unless redirects are added elsewhere:

- `/fees`
- `/faq`
- `/experts`

They are absent from the current sitemap and navigation. There are no explicit 301 redirects or 410 responses for them.

---

## 6. Sitemap implementation

### Build workflow

`npm run build` executes:

1. `npm run seo:generate`
2. `next build`

`npm run seo:generate` runs `tsx scripts/generate-seo.ts`.

The generator:

- Imports all static paths and data-driven slugs from `publicUrlInventory.ts`.
- De-duplicates paths.
- Sorts paths with `localeCompare`.
- Converts each path to an absolute canonical URL.
- Writes:
  - `public/sitemap.xml`
  - `public/robots.txt`
- Escapes XML special characters.
- Sets every `<lastmod>` to the UTC date on which generation runs, not the real page modification date.

### Current sitemap priority policy

- `/`: `1.00`
- `/services`: `0.95`
- `/loss-types`: `0.95`
- `/case-types`: `0.92`
- `/sectors`: `0.90`
- `/what-is-a-contract-loss-expert-witness`: `0.90`
- `/qualifications`: `0.88`
- `/how-to-instruct`: `0.88`
- Every `/case-types/[slug]`: `0.88`
- `/guides`: `0.87`
- Every `/sectors/[slug]`: `0.86`
- Every `/guides/[slug]`: `0.80`
- `/glossary`: `0.75`
- `/cookies`: `0.60`
- Unmatched fallback: `0.70`

### Current change-frequency policy

- Homepage: `weekly`
- Every other sitemap URL: `monthly`

### Verification

`npm run seo:verify`:

- Reads `public/sitemap.xml`.
- Extracts `<loc>` values by regex.
- Sorts actual and expected URLs.
- Reports missing and extra URLs.
- Exits non-zero on drift.
- Does not validate XML syntax, metadata, status codes, canonicals, redirects, headings, schema, or internal links.

---

## 7. Robots and crawl controls

Current generated robots file:

```text
User-agent: *
Allow: /

Disallow: /thank-you
Disallow: /api/

Sitemap: https://www.contractlossexpert.com/sitemap.xml
```

Netlify explicitly serves:

- `/sitemap.xml` as `application/xml`
- `/robots.txt` as `text/plain`

No crawler-specific directives exist. There are no crawl-delay rules, AI-bot rules, image bot rules, or parameter exclusions.

Meta robots control:

- Normal `createMetadata` pages: index/follow.
- Privacy and terms: noindex/follow.
- Thank-you: noindex/nofollow.
- Custom 404: noindex/follow.

---

## 8. Exact static metadata, H1s, and intent

### Homepage `/`

- Title: `Contract Loss Expert Witness | Lost Profits & Breach of Contract Damages`
- Description: `Find qualified contract loss expert witnesses worldwide. Forensic accountants and quantum experts for lost profits, wasted expenditure, and breach of contract damages for courts, tribunals, and arbitration.`
- H1: `Contract Loss Expert Witness Services for Law Firms Worldwide`
- Intent: primary transactional/commercial landing page.

### Services `/services`

- Title: `Contract Loss Expert Witness Services | Full Service List`
- Description: `Contract loss expert witness services: lost profits analysis, wasted expenditure, construction quantum, consequential loss, and professional negligence damages.`
- H1: `Contract Loss Expert Witness Services`
- Intent: transactional service hub.

### Loss types `/loss-types`

- Title: `Types of Contract Loss | Expectation, Reliance & Wasted Expenditure Explained`
- Description: `The main types of loss recoverable for breach of contract in litigation: expectation damages, reliance loss, wasted expenditure, and consequential loss, explained for legal practitioners.`
- H1: `Types of Contract Loss: What Courts Allow You to Recover`
- Intent: central informational pillar.

### Case types `/case-types`

- Title: `Case Types Requiring a Contract Loss Expert Witness | Guide`
- Description: `Which legal cases need a contract loss expert witness? Commercial disputes, construction claims, professional negligence, IP licensing, and more explained.`
- H1: `Case Types Requiring a Contract Loss Expert Witness`
- Intent: case/problem hub.

### Sectors `/sectors`

- Title: `Contract Loss Expert Witnesses by Sector | Industry Specialists`
- Description: `Sector-specialist contract loss expert witnesses for litigation. Construction, technology, supply chain, financial services, retail, and professional services.`
- H1: `Contract Loss Expert Witnesses by Sector`
- Intent: industry vertical hub.

### Definition page `/what-is-a-contract-loss-expert-witness`

- Title: `What Is a Contract Loss Expert Witness? | Role & Definition`
- Description: `A contract loss expert witness quantifies financial losses from breach of contract for courts. Expectation damages, reliance loss, but-for methodology and CPR Part 35 explained.`
- H1: `What Is a Contract Loss Expert Witness?`
- Intent: definition / featured-snippet / informational.

### Qualifications `/qualifications`

- Title: `Contract Loss Expert Witness Qualifications | ACA, CFA & Quantum Credentials`
- Description: `What credentials should a contract loss expert witness hold? ACA, CFA, CFE, quantum surveyor credentials, and CPR Part 35 compliance explained.`
- H1: `Contract Loss Expert Witness Qualifications & Credentials`
- Intent: E-E-A-T, vetting, and transactional reassurance.

### How to instruct `/how-to-instruct`

- Title: `How to Instruct a Contract Loss Expert Witness | Step-by-Step Guide`
- Description: `Step-by-step guide for legal teams on finding, vetting, and instructing the right contract loss expert witness. SJE and party-appointed expert explained.`
- H1: `How to Instruct a Contract Loss Expert Witness`
- Intent: procedural / commercial investigation.

### Guides `/guides`

- Title: `Legal Guides: Contract Loss Expert Witnesses | Quantum & Damages`
- Description: `In-depth guides for legal teams on contract loss expert witnesses, lost profits methodology, Hadley v Baxendale, construction quantum, and more.`
- H1: `Legal Guides: Contract Loss Expert Witnesses`
- Intent: informational hub.

### Glossary `/glossary`

- Title: `Contract Loss Expert Witness Glossary | Key Legal & Finance Terms`
- Description: `Definitions of key contract loss and expert witness terms for litigation, from but-for analysis to Hadley v Baxendale, wasted expenditure, and quantum.`
- H1: `Contract Loss Expert Witness Glossary`
- Intent: definition/entity hub and long-tail capture.

### Contact `/contact`

- Title: `Instruct a Contract Loss Expert Witness | ContractLossExpert.com`
- Description: `Submit your case details to be matched with a qualified contract loss expert witness. Court-ready expert reports. Response within 1 business day.`
- H1: `Instruct a Contract Loss Expert Witness`
- Intent: conversion.
- Current mismatch: indexable but excluded from sitemap.

### Cookies `/cookies`

- Title: `Cookie Policy | ContractLossExpert.com`
- Description: `How ContractLossExpert.com uses cookies and similar technologies. Manage your preferences and learn about GDPR-compliant cookie categories.`
- H1: `Cookie Policy`
- Intent: legal/compliance.
- Current state: indexable and in sitemap.

### Privacy `/privacy`

- Title: `Privacy Policy | ContractLossExpert.com`
- Description: `Privacy policy for ContractLossExpert.com, GDPR compliant.`
- H1: `Privacy Policy`
- Robots: noindex/follow.

### Terms `/terms`

- Title: `Terms of Use | ContractLossExpert.com`
- Description: `Terms of use for ContractLossExpert.com referral service.`
- H1: `Terms of Use`
- Robots: noindex/follow.

### Thank-you `/thank-you`

- Title: `Thank You | ContractLossExpert.com`
- Description: `Your enquiry has been received.`
- H1: `Thank You`
- Robots: noindex/nofollow.
- Robots.txt: disallowed.

---

## 9. Dynamic metadata and keyword mapping

### 9.1 Case-type pages

All case-type pages:

- Are pre-rendered through `generateStaticParams()`.
- Use `ContentPageTemplate`.
- Use data-provided meta title, description, H1, paragraphs, FAQs, and related links.
- Emit BreadcrumbList and FAQPage JSON-LD.
- Render visible FAQs as H3s under an H2 `Frequently Asked Questions`.

#### Commercial contract breach

- URL: `/case-types/commercial-contract-breach`
- H1/title target: `Commercial Contract Breach Loss Expert Witness`
- Meta title: `Commercial Contract Breach Loss Expert Witness | ContractLossExpert`
- Meta description: `Contract loss expert witnesses for commercial contract breach claims, lost profits, expectation vs reliance damages, and Hadley v Baxendale remoteness analysis for legal practitioners.`
- Primary keywords: commercial contract breach, contract loss expert witness, lost profits, expectation loss, reliance loss, Hadley v Baxendale, remoteness, duty to mitigate, but-for methodology.

#### Construction quantum disputes

- URL: `/case-types/construction-quantum-disputes`
- H1: `Construction Contract Quantum Expert Witness`
- Meta title: `Construction Contract Quantum Expert Witness | ContractLossExpert`
- Meta description: `Chartered quantity surveyors and forensic accountants for JCT, NEC, and FIDIC quantum claims, loss and expense, prolongation, disruption, variations, and TCC adjudication evidence.`
- Primary keywords: construction quantum expert witness, JCT, NEC, FIDIC, loss and expense, prolongation, disruption, variations, Scott Schedule, TCC, adjudication.

#### Supply chain failure

- URL: `/case-types/supply-chain-failure`
- H1: `Supply Chain Failure Contract Loss Expert Witness`
- Meta title: `Supply Chain Failure Contract Loss Expert Witness | ContractLossExpert`
- Meta description: `Expert witnesses for upstream supplier breach claims, causal chain analysis, mitigation, inventory loss, and downstream customer contract losses in commercial litigation.`
- Primary keywords: supply chain failure, supplier breach, causal chain, downstream loss, production shutdown, inventory write-off, customer penalties, force majeure, mitigation.

#### Professional negligence loss

- URL: `/case-types/professional-negligence-loss`
- H1: `Professional Negligence Contract Loss Expert Witness`
- Meta title: `Professional Negligence Contract Loss Expert Witness | ContractLossExpert`
- Meta description: `Forensic accountants for accountant, solicitor, and surveyor negligence claims, but-for counterfactuals, loss of chance, and SAAMCo scope of duty analysis for litigation.`
- Primary keywords: professional negligence loss, forensic accountant, solicitor negligence, accountant negligence, surveyor negligence, SAAMCo, scope of duty, but-for counterfactual, loss of chance, Allied Maples.

#### IP licence breach

- URL: `/case-types/ip-licence-breach`
- H1: `IP Licence Breach Contract Loss Expert Witness`
- Meta title: `IP Licence Breach Contract Loss Expert Witness | ContractLossExpert`
- Meta description: `Expert witnesses for IP licence breach claims, royalty loss quantification, reasonable royalty rates, relief from royalty methodology, and lost sales from IP misuse in disputes.`
- Primary keywords: IP licence breach, royalty loss, reasonable royalty, relief from royalty, lost sales, intellectual property misuse, licence audit, loss of exclusivity.

#### Earn-out and M&A dispute

- URL: `/case-types/earn-out-ma-dispute`
- H1: `Earn-Out & M&A Dispute Contract Loss Expert Witness`
- Meta title: `Earn-Out & M&A Dispute Contract Loss Expert Witness | ContractLossExpert`
- Meta description: `Expert witnesses for earn-out calculation disputes, management conduct claims, and completion accounts disagreements in mergers and acquisitions litigation.`
- Primary keywords: earn-out dispute, M&A dispute, completion accounts, purchase-price adjustment, locked box, management conduct, deferred consideration, but-for performance.

#### Franchise agreement breach

- URL: `/case-types/franchise-agreement-breach`
- H1: `Franchise Agreement Breach Contract Loss Expert Witness`
- Meta title: `Franchise Agreement Breach Contract Loss Expert Witness | ContractLossExpert`
- Meta description: `Contract loss expert witnesses for franchisor and franchisee breach claims, wrongful termination, lost franchise profits, royalty recovery, and network loss analysis in disputes.`
- Primary keywords: franchise breach, wrongful termination, franchise lost profits, unpaid royalties, future royalties, network comparables, exclusivity.

#### Employment contract loss

- URL: `/case-types/employment-contract-loss`
- H1: `Employment Contract Loss Expert Witness`
- Meta title: `Employment Contract Loss Expert Witness | ContractLossExpert`
- Meta description: `Financial experts for wrongful dismissal, bonus and incentive loss, garden leave disputes, and restrictive covenant breach quantification in employment contract claims.`
- Primary keywords: employment contract loss, wrongful dismissal damages, notice period loss, bonus loss, pension, LTIP, garden leave, restrictive covenant breach, diverted revenue.

#### Joint venture dispute

- URL: `/case-types/joint-venture-dispute`
- H1: `Joint Venture Dispute Contract Loss Expert Witness`
- Meta title: `Joint Venture Dispute Contract Loss Expert Witness | ContractLossExpert`
- Meta description: `Expert witnesses for joint venture breach claims, profit share disputes, contribution obligations, exit and dilution losses, and but-for quantification in JV litigation.`
- Primary keywords: joint venture dispute, JV breach, profit share, contributions, distributions, diverted opportunities, deadlock, diminution in value, exit losses.

#### Distribution and agency agreement

- URL: `/case-types/distribution-agency-agreement`
- H1: `Distribution & Agency Agreement Breach Expert Witness`
- Meta title: `Distribution & Agency Agreement Breach Expert Witness | ContractLossExpert`
- Meta description: `Expert witnesses for distribution and commercial agency claims, Regulation 17 compensation, lost commission, pipeline losses, and exclusivity breach quantification under law.`
- Primary keywords: distribution agreement breach, commercial agency, Commercial Agents Regulations 1993, Regulation 17 compensation, indemnity, lost commission, pipeline loss, exclusivity breach, goodwill value.

### 9.2 Sector pages

All sector pages:

- Are pre-rendered through `generateStaticParams()`.
- Use `ContentPageTemplate`.
- Emit BreadcrumbList and FAQPage JSON-LD.
- Render visible FAQs.
- Receive mandatory cross-cluster links through `mergeSectorLinks()`.

#### Construction and engineering

- URL: `/sectors/construction-engineering`
- H1: `Construction & Engineering Contract Loss Expert Witness`
- Meta title: `Construction Contract Loss Expert Witness | JCT, NEC & FIDIC Quantum`
- Meta description: `Construction contract loss expert witnesses for JCT, NEC and FIDIC disputes, loss and expense, prolongation, disruption, Scott Schedules and TCC quantum evidence.`
- Keywords: construction expert witness, engineering disputes, JCT, NEC4, FIDIC Red Book, delay, disruption, prolongation, loss and expense, Scott Schedule, critical path, measured mile.

#### Technology and software

- URL: `/sectors/technology-software`
- H1: `Technology & Software Contract Loss Expert Witness`
- Meta title: `Technology & Software Contract Loss Expert Witness | IT & SaaS Disputes`
- Meta description: `Contract loss expert witnesses for technology disputes, failed IT implementation, SaaS breach, software licence misuse, agile milestone failure and business disruption quantum.`
- Keywords: IT implementation failure, SaaS breach, ERP, CRM, digital transformation, software licence, agile milestone, scope creep, service-level failure, customer churn, recurring revenue.

#### Supply chain and manufacturing

- URL: `/sectors/supply-chain-manufacturing`
- H1: `Supply Chain & Manufacturing Contract Loss Expert Witness`
- Meta title: `Supply Chain Contract Loss Expert Witness | Manufacturing & Force Majeure`
- Meta description: `Qualified expert witnesses for supply chain and manufacturing contract loss, raw material non-delivery, production shutdown, customer penalties, inventory loss and force majeure quantum.`
- Keywords: manufacturing loss, raw material non-delivery, production shutdown, contribution margin, capacity utilisation, inventory loss, force majeure, alternative sourcing, expediting costs.

#### Financial services and banking

- URL: `/sectors/financial-services-banking`
- H1: `Financial Services & Banking Contract Loss Expert Witness`
- Meta title: `Financial Services Contract Loss Expert Witness | Mis-Selling & ISDA`
- Meta description: `Contract loss expert witnesses for financial services disputes, mis-selling, investment mandate breach, ISDA close-out, prime brokerage and payment system failure quantum.`
- Keywords: financial services disputes, mis-selling, investment mandate breach, benchmark portfolio, ISDA close-out, prime brokerage, custody, payment failure, mark-to-market, discount curves.

#### Retail and consumer goods

- URL: `/sectors/retail-consumer-goods`
- H1: `Retail & Consumer Goods Contract Loss Expert Witness`
- Meta title: `Retail Contract Loss Expert Witness | Supply, Exclusivity & Delisting`
- Meta description: `Contract loss experts for retail and FMCG disputes, supply agreement breach, exclusivity, wrongful delisting, promotional commitments and own-label product quantum.`
- Keywords: retail contract loss, FMCG, supplier failure, gross margin, sell-through, exclusivity, wrongful delisting, promotional commitment, own-label, ranging, shrinkage.

#### Professional services

- URL: `/sectors/professional-services`
- H1: `Professional Services Contract Loss Expert Witness`
- Meta title: `Professional Services Contract Loss Expert Witness | Consulting & Law`
- Meta description: `Contract loss expert witnesses for professional services disputes, consulting agreements, law firm retainers, accountancy engagements, fee recovery and negligent advice quantum.`
- Keywords: consulting agreement, law firm retainer, accountancy engagement, fee recovery, utilisation, work in progress, success fee, negligent advice, SAAMCo, loss of chance.

#### Energy and utilities

- URL: `/sectors/energy-utilities`
- H1: `Energy & Utilities Contract Loss Expert Witness`
- Meta title: `Energy Contract Loss Expert Witness | PPA, Take-or-Pay & Utilities`
- Meta description: `Contract loss expert witnesses for energy and utilities disputes, power purchase agreements, take-or-pay, capacity payments, pipeline interconnect and renewable contract quantum.`
- Keywords: power purchase agreement, PPA breach, take-or-pay, ship-or-pay, capacity payment, pipeline interconnect, curtailment, grid constraint, balancing costs, generation profile.

#### Media, entertainment, and IP

- URL: `/sectors/media-entertainment-ip`
- H1: `Media, Entertainment & IP Contract Loss Expert Witness`
- Meta title: `Media & Entertainment Contract Loss Expert Witness | Production & Music`
- Meta description: `Contract loss expert witnesses for media disputes, production contract breach, talent agreements, distribution deals, music catalogue licences and streaming revenue quantum.`
- Keywords: production contract breach, film, television, theatre, streaming, talent agreement, distribution deal, music catalogue, backend participation, royalty audit, minimum guarantee, catalogue rights.

### 9.3 Guide pages

All guide pages:

- Are pre-rendered through `generateStaticParams()`.
- Use `GuidePageTemplate`.
- Emit BreadcrumbList and Article JSON-LD.
- Use the first introductory paragraph as the hero subtitle.
- Render remaining introduction and five H2 sections.
- Receive guide baseline links through `mergeGuideLinks()`.

#### Hadley v Baxendale and remoteness

- URL: `/guides/hadley-v-baxendale-remoteness-guide`
- H1: `Hadley v Baxendale & Remoteness of Damage: A Solicitor's Guide`
- Meta title: `Hadley v Baxendale Remoteness Guide for Solicitors | Contract Loss Expert`
- Meta description: `Hadley v Baxendale explained for legal teams: the two-limb remoteness rule, direct vs consequential loss, and how contract loss expert witnesses address recoverability.`
- H2s:
  1. The Two-Limb Rule in Modern Practice
  2. Direct Loss vs Consequential Loss
  3. What Passes the Remoteness Test
  4. Practical Examples for Solicitors
  5. The Expert Witness Role in Addressing Remoteness
- Keywords: Hadley v Baxendale, remoteness, two-limb rule, Limb 1, Limb 2, direct loss, consequential loss, reasonable contemplation, knowledge at contract formation, Victoria Laundry, H. Parsons.

#### Lost profits and but-for methodology

- URL: `/guides/lost-profits-but-for-methodology`
- H1: `Lost Profits Quantification: The But-For Methodology Explained`
- Meta title: `Lost Profits But-For Methodology Guide | Contract Loss Expert Witness`
- Meta description: `How legal teams instruct experts on lost profits: but-for counterfactual models, data sources, sensitivity analysis, and how courts assess breach of contract profit claims.`
- H2s:
  1. Building the But-For Model
  2. Data Sources and Disclosure
  3. Assumption Transparency and Sensitivity Analysis
  4. How Courts Assess But-For Evidence
  5. Common Attack Vectors and How to Defend Them
- Keywords: lost profits, but-for methodology, counterfactual, baseline, actual performance, projected performance, variable costs, avoided costs, mitigation, sensitivity analysis, financial statements, management accounts, forecasts.

#### Wasted expenditure and reliance loss

- URL: `/guides/wasted-expenditure-reliance-loss`
- H1: `Wasted Expenditure & Reliance Loss: A Solicitor's Guide`
- Meta title: `Wasted Expenditure & Reliance Loss Guide for Solicitors | Contract Loss Expert`
- Meta description: `When to claim reliance loss instead of expectation damages: Anglia TV v Reed, bad bargain defence, pre-contractual expenditure, and expert evidence on wasted expenditure.`
- H2s:
  1. When to Claim Reliance Rather Than Expectation Loss
  2. Anglia TV v Reed and Pre-Contractual Expenditure
  3. The Bad Bargain Defence
  4. Expectation vs Reliance: Strategic Choice
  5. Expert Report Approach to Wasted Expenditure
- Keywords: wasted expenditure, reliance loss, expectation loss, pre-contractual expenditure, Anglia TV v Reed, CCC Films, bad bargain defence, election of damages, sunk cost, double recovery.

#### Construction quantum

- URL: `/guides/construction-quantum-expert-guide`
- H1: `Construction Quantum Expert Witnesses: A Solicitor's Guide`
- Meta title: `Construction Quantum Expert Witness Guide | Contract Loss Expert`
- Meta description: `Guide for legal teams on construction quantum experts: loss and expense, JCT/NEC/FIDIC, prolongation vs disruption, Scott Schedules, TCC practice, and adjudication evidence.`
- H2s:
  1. Loss and Expense Under Standard Form Contracts
  2. JCT, NEC, and FIDIC: What Solicitors Should Know
  3. Prolongation vs Disruption
  4. Scott Schedules and TCC Practice
  5. Adjudication and Quantum Expert Evidence
- Keywords: construction quantum expert, JCT, NEC, FIDIC, relevant events, compensation events, Clause 20, defined cost, loss and expense, prolongation, disruption, measured mile, earned value, Scott Schedule, adjudication.

#### Professional negligence

- URL: `/guides/professional-negligence-loss-quantification`
- H1: `Professional Negligence Loss Quantification: Expert Evidence Guide`
- Meta title: `Professional Negligence Loss Quantification Guide | Contract Loss Expert`
- Meta description: `Expert evidence in professional negligence: but-for counterfactuals, SAAMCo, loss of chance, Allied Maples, scope of duty limits, and report structure for legal teams.`
- H2s:
  1. But-For Counterfactual in Professional Negligence
  2. The SAAMCo Principle and Scope of Duty
  3. Loss of Chance Quantification
  4. Allied Maples and Solicitor Negligence Claims
  5. Expert Report Structure for Professional Negligence
- Keywords: professional negligence, but-for counterfactual, SAAMCo, scope of duty, advice case, information case, loss of chance, Allied Maples, probability weighting, transaction loss.

#### Letter of instruction

- URL: `/guides/instructing-quantum-expert-letter`
- H1: `How to Draft a Letter of Instruction to a Contract Loss Expert Witness`
- Meta title: `Letter of Instruction to Contract Loss Expert | Legal Guide`
- Meta description: `How legal teams draft letters of instruction to contract loss experts: scope, specific questions, documents, fees, CPR Part 35, and single joint expert joint instruction format.`
- H2s:
  1. Essential Contents of the Letter of Instruction
  2. Specific Questions to Address
  3. Documents to Provide at Instruction
  4. Fee Agreement and Timetable Terms
  5. CPR Part 35 Requirements and SJE Joint Instructions
- Keywords: letter of instruction, instruct expert witness, scope, assumptions, document pack, fee agreement, timetable, CPR Part 35, party-appointed expert, Single Joint Expert, SJE, joint instruction.

---

## 10. Complete service keyword inventory

Service anchors are important because navigation, footer links, schema IDs, and internal links all point to them.

1. `#lost-profits`
   - Lost Profits Quantification
   - expectation damages
   - but-for financial modelling
   - counterfactual trading position
   - pre-breach financial data
   - management forecasts
   - growth rates
   - variable vs fixed costs
   - sensitivity analysis

2. `#wasted-expenditure`
   - Wasted Expenditure Analysis
   - reliance loss
   - pre-contractual costs
   - Anglia Television Ltd v Reed
   - CCC Films v Impact Quadrant
   - bad bargain defence

3. `#consequential-loss`
   - Consequential Loss Assessment
   - direct loss vs consequential loss
   - Hadley v Baxendale
   - Limb 1
   - Limb 2
   - reasonable contemplation
   - downstream customer losses
   - third-party contract losses

4. `#construction-quantum`
   - Construction Quantum Claims
   - chartered quantity surveyor
   - JCT
   - NEC
   - FIDIC
   - loss and expense
   - prolongation
   - disruption
   - variations
   - Scott Schedule
   - TCC

5. `#supply-chain-loss`
   - Supply Chain Loss Analysis
   - supplier breach
   - production shutdown
   - inventory write-off
   - emergency sourcing premium
   - customer penalties
   - causal chain
   - mitigation

6. `#professional-negligence-damages`
   - Professional Negligence Damages
   - but-for counterfactual
   - SAAMCo
   - scope of duty
   - loss of chance
   - Allied Maples
   - accountant negligence
   - solicitor negligence
   - valuer negligence

7. `#ip-licensing-loss`
   - IP & Licensing Loss Quantification
   - royalty shortfall
   - contractual royalty
   - reasonable royalty
   - comparable licence transactions
   - relief from royalty
   - IP misuse
   - loss of exclusivity
   - lost market share

8. `#expert-determination`
   - Expert Determination & ADR
   - contractual expert determination
   - mediation quantum support
   - adjudication
   - LCIA
   - ICC
   - ICAEW
   - RICS
   - independent expert

---

## 11. Complete glossary/entity inventory and anchors

The glossary contains 30 entities. Each visible item is a `<dt>` inside a stable anchor container. The page also emits one FAQPage question per entity in the form `What is [term]?`.

1. Adjudication (Construction) -> `#adjudication-construction`
2. Allied Maples Principle (Loss of Chance) -> `#allied-maples-principle`
3. But-For Analysis -> `#but-for-analysis`
4. Cavendish Square Rule (Penalty Clauses) -> `#cavendish-square-rule`
5. Causation -> `#causation`
6. Commercial Agents Regulations 1993 -> `#commercial-agents-regulations-1993`
7. Consequential Loss -> `#consequential-loss`
8. CPR Part 35 -> `#cpr-part-35`
9. Diminution in Value -> `#diminution-in-value`
10. Disruption (Construction) -> `#disruption`
11. Duty to Mitigate -> `#duty-to-mitigate`
12. Earn-Out Agreement -> `#earn-out-agreement`
13. Expectation Damages -> `#expectation-damages`
14. FIDIC Contract -> `#fidic-contract`
15. Force Majeure -> `#force-majeure`
16. Hadley v Baxendale [1854] -> `#hadley-v-baxendale`
17. The Ikarian Reefer Duties -> `#ikarian-reefer`
18. JCT Contract -> `#jct-contract`
19. Joint Statement (Expert Witnesses) -> `#joint-statement`
20. Loss and Expense (Construction) -> `#loss-and-expense`
21. Loss of Chance -> `#loss-of-chance`
22. NEC Contract -> `#nec-contract`
23. Party-Appointed Expert (PAE) -> `#party-appointed-expert`
24. Prolongation (Construction) -> `#prolongation`
25. Quantum -> `#quantum`
26. Reliance Loss -> `#reliance-loss`
27. Remoteness -> `#remoteness`
28. Robinson v Harman [1848] -> `#robinson-v-harman`
29. SAAMCo Principle -> `#saamco-principle`
30. Scott Schedule -> `#scott-schedule`

The glossary client-side search filters `term` and `definition` text. Alphabet headings are H2s. Terms are semantic definition-list terms, not H3s.

---

## 12. Legal authorities, rules, credentials, and named entities

### Authorities and statutes

- Hadley v Baxendale [1854] 9 Ex Ch 341
- Robinson v Harman [1848] 1 Ex 850
- Anglia Television Ltd v Reed [1972] 1 QB 60
- CCC Films (London) Ltd v Impact Quadrant Films Ltd [1985] QB 16
- Victoria Laundry (Windsor) Ltd v Newman Industries Ltd [1949] 2 KB 528
- H. Parsons (Livestock) Ltd v Uttley Ingham & Co Ltd [1978] 1 QB 791
- South Australia Asset Management Corp v York Montague Ltd [1997] AC 191
- Allied Maples Group Ltd v Simmons & Simmons [1995] 1 WLR 1602
- National Justice Compania Naviera SA v Prudential Assurance Co Ltd (The Ikarian Reefer) [1993] 2 Lloyd's Rep 68
- Lavarack v Woods of Colchester Ltd [1967] 1 QB 278
- Naughton v O'Callaghan [1990] 2 IR 456
- John Holland Construction & Engineering Pty Ltd v Kvaerner RJ Brown Pty Ltd [1996] 8 CLJ 70
- Walter Lilly & Co Ltd v Mackay [2012] BLR 503
- Scott v Davis [2000] BLR 301
- Fibrosa [1943]
- Cavendish Square Holding BV v Makdessi [2015] UKSC 67
- Commercial Agents (Council Directive) Regulations 1993
- Housing Grants, Construction and Regeneration Act 1996
- Senior Courts Act 1981 section 35A
- Civil Procedure Rules Part 35
- Practice Direction 35
- TCC Guide
- Pre-Action Protocol for Construction and Engineering Disputes

### Arbitration and dispute-resolution entities

- LCIA
- ICC
- UNCITRAL
- adjudication
- mediation
- expert determination
- Single Joint Expert / SJE
- Party-Appointed Expert / PAE
- joint expert meeting
- joint statement

### Professional credentials and bodies

- ACA / FCA / ICAEW
- ACCA / FCCA
- CFA
- CFE
- CVA
- MRICS / FRICS / RICS
- FCIArb / MCIArb
- PQS

### Construction forms and methods

- JCT
- NEC / NEC4
- FIDIC Red Book
- extension of time / EOT
- compensation event
- defined cost
- forecast defined cost
- relevant event
- relevant matter
- Scott Schedule
- measured mile
- earned value
- critical path
- Hudson, Emden, and Eichleay formulae

---

## 13. FAQ content architecture

There is no standalone `/faq` page.

FAQ content currently exists in:

- Services: 8 services x 2 FAQs = 16.
- Case types: 10 pages x 2 FAQs = 20.
- Sectors: 8 pages x 2 FAQs = 16.
- Guides: 6 guides x 2 FAQs = 12 stored in data.
- Glossary: 30 generated FAQs.

Rendering/schema behavior:

- Service FAQs are visible and all 16 are combined into FAQPage JSON-LD on `/services`.
- Case-type FAQs are visible and emitted as FAQPage JSON-LD on each detail page.
- Sector FAQs are visible and emitted as FAQPage JSON-LD on each detail page.
- Glossary definitions are visible and all 30 are emitted as FAQPage JSON-LD.
- Guide FAQ arrays are currently not rendered by `GuidePageTemplate` and are not included in JSON-LD. The 12 guide FAQs are effectively dormant content.

Google generally no longer shows FAQ rich results for most commercial sites, but FAQ schema still communicates structure. It must remain consistent with visible content.

### Complete FAQ/query-target inventory

#### Service questions

1. How is lost profit calculated in a commercial contract dispute?
2. What is the but-for methodology?
3. What is wasted expenditure and when can I claim it?
4. What is the difference between expectation loss and reliance loss?
5. What is consequential loss and how is it recovered?
6. What is Hadley v Baxendale and how does it affect my claim?
7. What is a quantum expert witness in construction disputes?
8. What is the difference between disruption and prolongation in construction claims?
9. How does a supply chain expert witness establish causation?
10. Can a business recover customer contract losses caused by a supplier's breach?
11. What is the SAAMCo principle in professional negligence?
12. What is loss of chance quantification?
13. How are royalty losses calculated for a licence breach?
14. What is the relief from royalty method?
15. Should I use a Single Joint Expert or party-appointed expert?
16. What credentials should a contract loss expert witness hold?

#### Case-type questions

1. How is lost profit calculated in a commercial contract dispute?
2. What is the remoteness rule in commercial contract losses?
3. What is a quantum expert witness in construction disputes?
4. What is the difference between disruption and prolongation in construction claims?
5. How does a supply chain expert witness establish causation?
6. Can a business recover customer contract losses caused by a supplier's breach?
7. What is the SAAMCo principle in professional negligence?
8. What is loss of chance quantification?
9. How are royalty losses calculated for a licence breach?
10. What is the relief from royalty method?
11. What disputes arise in earn-out agreements?
12. How is a completion accounts dispute resolved?
13. How is loss calculated when a franchise agreement is wrongfully terminated?
14. Can a franchisor recover lost royalties from a breaching franchisee?
15. What losses are recoverable for wrongful dismissal?
16. How are restrictive covenant breach losses quantified?
17. How is loss quantified in a joint venture dispute?
18. What is the difference between a deadlock and a breach in a JV?
19. What compensation is payable under the Commercial Agents Regulations 1993?
20. How are lost profits calculated for a distribution agreement breach?

#### Sector questions

1. What quantum experts are needed for construction disputes?
2. What is a Scott Schedule?
3. How is loss calculated when an IT implementation fails?
4. What are the common quantum issues in software licence disputes?
5. Can a manufacturer recover production shutdown losses from a supplier breach?
6. How does force majeure affect quantum in supply chain disputes?
7. How is loss calculated in investment management breach of mandate cases?
8. What quantum issues arise in ISDA master agreement disputes?
9. How is a retailer's loss calculated when a supplier fails to deliver?
10. Can a supplier recover losses when a retailer delists without notice?
11. How is loss calculated when a professional services engagement is wrongfully terminated?
12. What losses can a client recover from negligent professional advice?
13. How are take-or-pay losses calculated?
14. What losses arise from a power purchase agreement breach?
15. How is loss calculated when a production contract is breached?
16. What losses arise from a music distribution contract breach?

#### Dormant guide questions

1. Does Hadley v Baxendale still apply in modern contract law?
2. Should the expert address remoteness if liability is disputed?
3. What is the but-for methodology in contract damages?
4. Can lost profits be claimed without a but-for model?
5. What is the difference between reliance loss and wasted expenditure?
6. Can a claimant recover both lost profits and wasted expenditure?
7. What qualifications should a construction quantum expert hold?
8. Do I need separate delay and quantum experts?
9. What is the SAAMCo principle in simple terms?
10. How is loss of chance different from but-for analysis?
11. When should a solicitor instruct a contract loss expert?
12. Can solicitors amend the letter of instruction after the report is drafted?

Glossary query targets are mechanically generated as `What is [exact glossary term]?` for all 30 terms listed in section 11.

---

## 14. Heading architecture

### Shared H1

`PageHero` renders exactly one `<h1>` from its `title` prop. It is responsive:

- 2xl at very small widths
- 3xl from 375px
- 4xl at `sm`
- 5xl at `lg`

### Homepage H2s

1. What Our Contract Loss Expert Witnesses Cover
2. Contract Loss Expert Witness: Key Statistics
3. Explore Contract Loss Expert Witness Resources
4. Why Legal Teams Trust Our Contract Loss Expert Witnesses

### Services H2s

One H2 per service:

1. Lost Profits Quantification
2. Wasted Expenditure Analysis
3. Consequential Loss Assessment
4. Construction Quantum Claims
5. Supply Chain Loss Analysis
6. Professional Negligence Damages
7. IP & Licensing Loss Quantification
8. Expert Determination & ADR

Each service FAQ component adds a FAQ heading and question headings. Methodology tables add semantic `<th>` cells.

### Loss-types H2s

1. The Compensatory Principle
2. The Three Main Types of Recoverable Loss
3. Expectation Loss (Lost Profits), anchor `#expectation-loss`
4. Reliance Loss (Wasted Expenditure), anchor `#reliance-loss`
5. Consequential Loss, anchor `#consequential-loss`
6. The Duty to Mitigate
7. Interest and the Time Value of Money
8. Limitations on Recovery
9. Related Resources

### Case and sector detail hierarchy

- H1 from data.
- H2 `Frequently Asked Questions`.
- Two FAQ questions as H3.
- H2 `Related Resources`.

### Guide hierarchy

- H1 from guide data.
- Five content sections as H2.
- H2 `Related Resources`.
- No visible FAQ heading despite FAQ data existing.

### Glossary hierarchy

- H1 page title.
- H2 for each alphabet group.
- `<dt>` for each term.
- No H3 terms.

### How-to-instruct hierarchy

- Seven step titles as H2.
- H2 SJE vs PAE.
- H2 Matching Timeline.
- H2 Red Flags.

### Qualifications hierarchy

- H2 Two Expert Profiles.
  - H3 Financial / Forensic Accountants.
  - H3 Construction Quantum Experts.
- H2 Experience Requirements.
- H2 CPR Part 35 Compliance.
- H2 Sector Expertise.

### Definition page hierarchy

- H2 Definition.
- H2 What They Do.
- H2 The Core Legal Framework, Hadley v Baxendale.
- H2 Three Types of Loss, What Expert Witnesses Quantify.
  - H3 Expectation Loss.
  - H3 Reliance Loss.
  - H3 Consequential Loss.
- H2 The But-For Methodology.
- H2 CPR Part 35 & Expert Duties.
- H2 When Do You Need a Contract Loss Expert Witness?

---

## 15. Structured data architecture

### Shared schema builders

#### BreadcrumbList

`breadcrumbSchema(items)` emits:

- `@context: https://schema.org`
- `@type: BreadcrumbList`
- sequential `ListItem` entries with absolute URLs.

#### FAQPage

`faqPageSchema(faqs)` emits:

- `@context: https://schema.org`
- `@type: FAQPage`
- Question/Answer nodes.

#### Article

`articleSchema()` emits:

- Article headline, description, URL.
- Default `datePublished: 2025-01-15`.
- Default `dateModified: 2025-05-26`.
- Organization author and publisher.
- Optional `about` link to a service `@id`.

#### Organization

Current values:

- `@id: https://www.contractlossexpert.com/#organization`
- name `ContractLossExpert`
- canonical URL
- email `contact@contractlossexpert.com`
- area served `Worldwide`
- LinkedIn sameAs.

#### ProfessionalService

Current values:

- `@id: /#service`
- provider references Organization.
- service type `Contract Loss Expert Witness`.
- offer catalog built from all eight services.
- **Current inconsistency:** `areaServed` remains `United Kingdom`.

#### Service nodes

- `@id` uses `/services#[service-id]`.
- Provider references Organization.
- Name and description come from `services.ts`.
- **Current inconsistency:** each service node still says `areaServed: "United Kingdom"`.

#### WebSite

- `@id: /#website`
- publisher references Organization.
- SearchAction target: `/glossary?q={search_term_string}`.
- **Current limitation:** `GlossarySearch` does not initialize its state from the `q` query parameter, so the declared sitelinks search action does not actually execute the requested query.

### Schema by route

- Homepage:
  - Organization
  - ProfessionalService
  - WebSite
  - 8 Service nodes
- `/services`:
  - Organization
  - 8 Service nodes
  - BreadcrumbList
  - FAQPage containing all service FAQs
- `/loss-types`:
  - BreadcrumbList
  - Article linked to `#lost-profits`
- `/case-types` hub:
  - BreadcrumbList
- Each case detail:
  - BreadcrumbList
  - FAQPage
- `/sectors` hub:
  - BreadcrumbList
- Each sector detail:
  - BreadcrumbList
  - FAQPage
- `/guides` hub:
  - BreadcrumbList
- Each guide:
  - BreadcrumbList
  - Article linked to its service where configured
- `/glossary`:
  - BreadcrumbList
  - FAQPage for all glossary terms
- `/how-to-instruct`:
  - BreadcrumbList
- `/qualifications`:
  - BreadcrumbList
- `/contact`:
  - BreadcrumbList
- `/what-is-a-contract-loss-expert-witness`:
  - BreadcrumbList only
- Cookies, privacy, terms, thank-you:
  - no JSON-LD.

`personSchema()` remains defined in `schema.ts` but is unused after `/experts` was deleted.

---

## 16. Internal-link architecture

### Header

Desktop navigation:

- Home
- Services -> 8 service anchors
- Loss Types -> hub plus 3 loss anchors
- Case Types -> 10 detail pages
- Sectors -> 8 detail pages
- Resources -> Guides, How to Instruct, Qualifications
- Contact CTA

Mobile navigation adds:

- All Services
- All Case Types
- All Sectors
- the same dynamic link lists

### Footer

Services:

- all 8 service anchors

Case types:

- 5 featured case types
- View all 10

Resources:

- Legal Guides
- Glossary
- How to Instruct
- Loss Types

About:

- Qualifications
- Contact Us

Legal:

- Privacy
- Cookies
- Terms
- Cookie Settings

### Related-link merge rules

Links are de-duplicated by exact `href`, preserving the first occurrence. This means anchor variants count as different links.

#### Case-type mandatory links

- Commercial breach -> lost profits, but-for guide, Hadley guide, expectation anchor, glossary Hadley, glossary but-for, instruction, contact.
- Construction -> construction service, construction sector, construction guide, loss types, Scott Schedule, prolongation, instruction, contact.
- Supply chain -> supply-chain service, manufacturing sector, consequential loss, duty to mitigate, instruction, contact.
- Professional negligence -> negligence service, negligence guide, SAAMCo, loss of chance, instruction, contact.
- IP -> IP service, media/IP sector, expectation loss, instruction, contact.
- Earn-out -> lost profits, financial services, expectation loss, instruction, contact.
- Franchise -> lost profits, retail sector, expectation loss, instruction, contact.
- Employment -> consequential loss, expectation loss, instruction, contact.
- JV -> lost profits, expectation loss, instruction, contact.
- Distribution/agency -> lost profits, Commercial Agents Regulations, reliance loss, instruction, contact.

#### Sector mandatory links

Every sector receives:

- one or more relevant case/service links
- Loss Types
- Qualifications
- Contact

#### Guide baseline

Every guide receives:

- Guides hub
- Loss Types
- How to Instruct
- Qualifications
- Contact

#### Loss-types pillar

The pillar links to:

- lost-profits guide
- reliance guide
- Hadley guide
- commercial breach
- 3 service anchors
- 6 glossary anchors
- contact

### Service-section links

Each service section has a tailored footer linking to related loss types, guides, cases, sectors, qualifications, and contact.

### CTA links

The shared CTA links to `/contact` and displays the company email.

---

## 17. Keyword strategy and topical clusters

### Primary commercial phrases

- contract loss expert witness
- contract loss expert witnesses
- contract damages expert witness
- breach of contract damages expert
- breach of contract expert witness
- quantum expert witness
- financial loss expert witness
- forensic accountant expert witness
- economic damages specialist
- instruct a contract loss expert witness
- court-ready expert report
- expert witness matching

### Loss and methodology cluster

- lost profits
- lost profit calculation
- expectation loss
- expectation damages
- benefit of the bargain
- but-for analysis
- but-for methodology
- counterfactual model
- projected vs actual performance
- baseline construction
- avoided costs
- variable costs
- fixed costs
- contribution margin
- mitigation
- sensitivity analysis
- discount rate
- present value
- time value of money
- interest on damages

### Reliance cluster

- reliance loss
- wasted expenditure
- pre-contractual expenditure
- sunk costs
- bad bargain defence
- expectation vs reliance
- election of damages
- no double recovery

### Consequential/remoteness cluster

- consequential loss
- direct loss
- indirect loss
- remoteness
- reasonable contemplation
- Limb 1
- Limb 2
- downstream loss
- follow-on contract
- reputational harm
- third-party contract loss
- exclusion clause
- limitation clause

### Construction cluster

- construction quantum
- quantum surveyor
- loss and expense
- delay and disruption
- prolongation
- variation valuation
- extension of time
- EOT
- JCT
- NEC
- NEC4
- FIDIC
- Scott Schedule
- TCC
- adjudication
- critical path
- measured mile
- earned value
- programme analysis
- site overheads
- preliminaries
- plant hire
- productivity loss

### Professional negligence cluster

- professional negligence damages
- solicitor negligence
- accountant negligence
- surveyor negligence
- valuer negligence
- scope of duty
- SAAMCo
- information vs advice
- but-for transaction
- loss of chance
- Allied Maples
- probability-weighted loss
- negligent valuation

### Supply-chain cluster

- supplier breach
- supply-chain failure
- raw-material non-delivery
- production shutdown
- production shortfall
- customer penalties
- inventory obsolescence
- inventory write-off
- scrap and rework
- emergency sourcing
- expediting costs
- force majeure
- downstream customer loss
- causal chain

### IP and licensing cluster

- IP licence breach
- royalty loss
- unpaid royalties
- reasonable royalty
- comparable licence
- relief from royalty
- licence audit
- under-reported sales
- unlicensed deployment
- territorial breach
- field-of-use breach
- loss of exclusivity
- lost market share
- passing off damages

### Transaction/JV/franchise/distribution cluster

- earn-out dispute
- completion accounts
- locked box
- purchase-price adjustment
- deferred consideration
- M&A dispute
- joint venture breach
- profit-share dispute
- deadlock
- diverted opportunity
- franchise wrongful termination
- franchise royalties
- distribution agreement breach
- agency agreement termination
- Regulation 17 compensation
- pipeline loss
- exclusive territory

### Employment cluster

- wrongful dismissal damages
- notice-period loss
- salary and bonus loss
- pension loss
- LTIP vesting
- garden leave
- restrictive covenant breach
- non-compete
- non-solicit
- diverted revenue

### Instruction and credential cluster

- how to instruct an expert witness
- letter of instruction
- expert witness documents
- expert witness fees
- expert timetable
- expert CV
- Single Joint Expert
- SJE
- Party-Appointed Expert
- PAE
- CPR Part 35 compliance
- independent expert
- expert duty to court
- joint expert statement
- ACA
- FCA
- ACCA
- CFA
- CFE
- CVA
- MRICS
- FRICS
- FCIArb
- MCIArb
- PQS

### Audience and intent language

- law firms
- counsel
- solicitors
- barristers
- legal teams
- claimant
- defendant
- instructing party
- court
- tribunal
- arbitration
- adjudication
- mediation
- expert determination
- litigation
- commercial dispute
- construction dispute
- professional negligence claim

---

## 18. Content-cluster map

### Cluster A: Lost profits

- Pillar: `/loss-types#expectation-loss`
- Service: `/services#lost-profits`
- Guide: `/guides/lost-profits-but-for-methodology`
- Case: `/case-types/commercial-contract-breach`
- Glossary: But-For Analysis, Expectation Damages, Robinson v Harman

### Cluster B: Reliance/wasted expenditure

- Pillar: `/loss-types#reliance-loss`
- Service: `/services#wasted-expenditure`
- Guide: `/guides/wasted-expenditure-reliance-loss`
- Glossary: Reliance Loss, Duty to Mitigate

### Cluster C: Consequential loss/remoteness

- Pillar: `/loss-types#consequential-loss`
- Service: `/services#consequential-loss`
- Guide: `/guides/hadley-v-baxendale-remoteness-guide`
- Glossary: Hadley v Baxendale, Remoteness, Consequential Loss
- Cases: commercial breach, supply-chain failure

### Cluster D: Construction quantum

- Service: `/services#construction-quantum`
- Case: `/case-types/construction-quantum-disputes`
- Sector: `/sectors/construction-engineering`
- Guide: `/guides/construction-quantum-expert-guide`
- Glossary: JCT, NEC, FIDIC, Scott Schedule, Prolongation, Disruption, Loss and Expense, Adjudication

### Cluster E: Professional negligence

- Service: `/services#professional-negligence-damages`
- Case: `/case-types/professional-negligence-loss`
- Sector: `/sectors/professional-services`
- Guide: `/guides/professional-negligence-loss-quantification`
- Glossary: SAAMCo, Allied Maples, Loss of Chance, Diminution in Value

### Cluster F: IP/licensing

- Service: `/services#ip-licensing-loss`
- Case: `/case-types/ip-licence-breach`
- Sector: `/sectors/media-entertainment-ip`

### Cluster G: Supply chain

- Service: `/services#supply-chain-loss`
- Case: `/case-types/supply-chain-failure`
- Sector: `/sectors/supply-chain-manufacturing`

### Cluster H: Instruction/credentials

- `/how-to-instruct`
- `/guides/instructing-quantum-expert-letter`
- `/qualifications`
- `/contact`
- Glossary: CPR Part 35, PAE, Joint Statement, Ikarian Reefer

---

## 19. Content format and GEO characteristics

The content is structured to be extractable by search engines and generative systems:

- Definition-first sections.
- Descriptive H1s and H2s.
- FAQ question headings with concise answers.
- Comparison and methodology tables.
- Stable deep-link anchors.
- Named cases, statutes, credentials, and contract forms.
- Explicit “what it is,” “how it is calculated,” “when it applies,” and “what evidence is needed” language.
- Related-resource modules that reinforce entity relationships.
- Article and FAQ structured data.
- Long-form paragraphs with legal and forensic terminology.

There are no:

- visible author biographies
- reviewer credentials
- editorial policy
- citations to external primary sources
- publication/update dates shown on guide pages
- case result examples
- client testimonials
- organization address or telephone
- profile pages after `/experts` removal

These absences affect E-E-A-T and trust.

---

## 20. Mobile, performance, and accessibility SEO

Positive implementation details:

- Site is mostly statically generated.
- Dynamic case/sector/guide pages use static params.
- Inter uses `next/font` and `display: swap`.
- Tables are wrapped in `ResponsiveTable` to avoid page-level horizontal overflow.
- Global CSS constrains media and long words.
- Header and footer are responsive.
- Mobile interactive targets generally use 44px minimum height.
- PageHero uses responsive H1 sizing.
- Semantic navigation labels:
  - main navigation
  - breadcrumbs
  - related resources
- Custom 404 provides recovery links.
- Form controls have labels and autocomplete attributes.

Current limitations:

- No explicit image SEO because the site contains almost no editorial imagery.
- No Open Graph image.
- No performance budgets or automated Lighthouse checks.
- No explicit cache headers in `netlify.toml`.
- No image sitemap.
- No video schema or media.

---

## 21. Analytics, consent, and measurement

Google Consent Mode v2 defaults:

- analytics storage: denied
- ad storage: denied
- ad user data: denied
- ad personalization: denied
- functionality storage: denied
- personalization storage: denied
- security storage: granted
- wait for update: 500ms

Consent-gated integrations:

- Google Analytics: `NEXT_PUBLIC_GA_MEASUREMENT_ID`
- Google Tag Manager: `NEXT_PUBLIC_GTM_ID`
- Meta Pixel: `NEXT_PUBLIC_META_PIXEL_ID`
- LinkedIn Insight Tag: `NEXT_PUBLIC_LINKEDIN_PARTNER_ID`
- Hotjar: `NEXT_PUBLIC_HOTJAR_ID`

Analytics category:

- GA
- GTM
- Hotjar

Marketing category:

- Meta Pixel
- LinkedIn Insight

GA configuration includes `anonymize_ip: true`.

No analytics ID is hardcoded. If environment variables are empty, no corresponding tag loads.

No explicit conversion event is emitted for:

- contact form start
- contact form submit
- thank-you page view
- email link click
- CTA click

The current implementation only provides generic pageview behavior when the relevant platform loads.

---

## 22. Contact conversion and SEO implications

The contact page:

- Is linked from the header, footer, CTA sections, related links, and many content pages.
- Is indexable in metadata.
- Is excluded from the sitemap.
- Uses the title/H1 phrase `Instruct a Contract Loss Expert Witness`.
- Shows trust points and the company email.
- Redirects successful submissions to `/thank-you`.

The thank-you route is correctly protected from indexing by:

- meta noindex/nofollow
- robots disallow
- sitemap exclusion

The form writes to Google Sheets server-side and can optionally notify an external webhook. This is not directly SEO-related, but the privacy page still says Formspree processes submissions, which is stale and affects trust/compliance.

---

## 23. Known inconsistencies, defects, and SEO risks

Claude should know these are current facts, not recommendations already implemented.

### Critical/current contradictions

1. **Worldwide positioning vs UK schema**
   - Organization schema says Worldwide.
   - ProfessionalService and every Service node still say United Kingdom.

2. **Worldwide positioning vs UK-only legal substance**
   - CPR Part 35, TCC, English statutes, English cases, solicitors, and UK credentials remain dominant.
   - The site is not genuinely jurisdiction-neutral despite global hero copy.

3. **Contact sitemap mismatch**
   - `/contact` is index/follow but deliberately excluded from sitemap.

4. **Cookie policy indexing**
   - `/cookies` is indexable and in the sitemap at priority 0.60.
   - Privacy and terms are noindex. This treatment is inconsistent across legal pages.

5. **Guide FAQ content dormant**
   - Twelve guide FAQs exist in data but are neither rendered nor emitted as schema.

6. **SearchAction mismatch**
   - WebSite schema advertises `/glossary?q=...`.
   - Glossary search ignores URL query parameters.

7. **Removed routes lack redirects**
   - `/fees`, `/faq`, and `/experts` now 404.
   - Empty leftover directories may still exist under `src/app/` with no `page.tsx`.
   - Any old external links or indexed URLs lose equity unless redirected.
   - No 301/410 rules exist in middleware or `next.config.ts` for those paths.

8. **Old architecture document is stale**
   - It still describes UK-only targeting and removed pages.
   - It contains obsolete route counts, keyword mapping, and schemas.

9. **404 metadata pollution**
   - Custom 404 overrides title/description/robots, but Open Graph, Twitter, canonical, and hreflang can still inherit homepage values from the root layout.
   - Soft/unknown dynamic URLs with empty `generateMetadata()` fall back toward layout homepage metadata.

10. **Homepage slash mismatch**
   - Sitemap homepage loc uses a trailing slash: `https://www.contractlossexpert.com/`.
   - Rendered canonical typically omits the trailing slash: `https://www.contractlossexpert.com`.

### Content/data defects present in current source

1. Case copy contains `Construction contract disputes in the are governed...`.
2. Earn-out case data contains a duplicate `/how-to-instruct` related link; runtime de-duplication hides one.
3. Distribution meta description says `under law`, which is vague.
4. Energy sector copy contains lowercase sentence start: `experts produce quantum schedules...`.
5. Cookie policy contains `Data may be processed in the, EEA, or United States...`.
6. Privacy policy still says Formspree handles form data, but the implementation now uses Google Sheets and optional webhook forwarding.
7. Privacy and terms dates still say May 2025.
8. Article schema dates are hardcoded defaults from 2025 for every article/guide.
9. Sitemap `<lastmod>` uses generation date for all pages rather than page-specific modification dates.
10. Homepage claims “30 definition-first terms,” which currently matches the 30-term glossary but must be updated if glossary count changes.
11. Several guide H1s still use “Solicitor's Guide,” while top-level positioning uses worldwide legal teams.
12. Several passages incorrectly imply CPR Part 35 applies in “applicable jurisdictions”; it is specifically English and Welsh civil procedure.
13. The company has no profile/address/telephone in schema after global repositioning.

### Metadata/schema gaps

- No OG/Twitter image.
- No explicit page author metadata.
- No visible article dates.
- No image or logo property in Organization schema.
- No `contactPoint`.
- No BreadcrumbList on cookie/privacy/terms/thank-you pages.
- No Article schema on the definition, qualifications, or how-to-instruct pages.
- No FAQ schema on guide pages despite stored FAQs.
- `personSchema()` is dead code.

### Content authority gaps

- No external citations/links to primary legal sources.
- No expert author/reviewer.
- No editorial methodology.
- No “last reviewed” date on substantive content.
- No individual expert profiles after `/experts` removal.
- No original research or case studies.

### Internal-link/anchor considerations

- The glossary anchor system is stable and should not be renamed casually.
- The loss-type anchors are used extensively and must remain stable.
- Service `id` values are also JSON-LD IDs and navigation targets.
- Changing slugs requires redirects plus updates to data, sitemap inventory, links, and schema.

---

## 24. Current SEO operating procedure

### Adding a static page

1. Create `src/app/[route]/page.tsx`.
2. Use `createMetadata()` with title, description, and exact path.
3. Use one `PageHero` H1.
4. Add breadcrumb HTML and preferably BreadcrumbList JSON-LD.
5. Add route to `APP_STATIC_PATHS` if it should be indexed and in sitemap.
6. Add navigation/internal links as appropriate.
7. Run `npm run seo:generate`.
8. Run `npm run seo:verify`.
9. Run `npm run build`.

### Adding a case type

1. Add one `ContentPage` to `src/data/case-types.ts`.
2. Supply slug, title, H1, meta title, meta description, paragraphs, two visible FAQs, and related links.
3. Add required cluster links in `CASE_TYPE_REQUIRED`.
4. Navigation, static generation, and sitemap inclusion derive automatically.

### Adding a sector

1. Add one `ContentPage` to `src/data/sectors.ts`.
2. Add mandatory cluster links in `SECTOR_REQUIRED`.
3. Navigation, static generation, and sitemap inclusion derive automatically.

### Adding a guide

1. Add one `GuidePage` to `src/data/guides.ts`.
2. Supply slug, metadata, H1, intro paragraphs, five sections, FAQs, related links, and optional service ID.
3. Static generation and sitemap inclusion derive automatically.
4. Be aware guide FAQs will remain dormant unless the template is changed.

### Adding a glossary term

1. Add the term and definition to `glossaryTerms`.
2. Add a stable explicit mapping to `GLOSSARY_ANCHOR_BY_TERM` when other pages will deep-link it.
3. The visible glossary and FAQ schema update automatically.
4. Update homepage term count if it changes.

### Validation commands

```bash
npm run seo:generate
npm run seo:verify
npm run build
```

---

## 25. Environment variables relevant to SEO and measurement

```text
NEXT_PUBLIC_SITE_URL
GOOGLE_SITE_VERIFICATION
BING_SITE_VERIFICATION
NEXT_PUBLIC_GA_MEASUREMENT_ID
NEXT_PUBLIC_GTM_ID
NEXT_PUBLIC_META_PIXEL_ID
NEXT_PUBLIC_LINKEDIN_PARTNER_ID
NEXT_PUBLIC_HOTJAR_ID
```

Rules:

- Production should use `https://www.contractlossexpert.com`.
- Do not expose server-only lead or Google service-account secrets in public metadata.
- Changing `NEXT_PUBLIC_SITE_URL` changes canonical URLs, hreflang, schema URLs, sitemap URLs, and robots sitemap location.

---

## 26. Historical document warning

`docs/SEO-ARCHITECTURE.md` was originally written for a UK-only strategy and includes:

- `contract loss expert witness UK` positioning.
- `en-GB`.
- removed routes `/fees`, `/faq`, `/experts`.
- Person schema for expert profiles.
- old route and sitemap counts.
- old internal-link rules referencing removed pages.
- old title/meta templates.

It remains useful for historical intent, competitor/off-page notes, and some cluster rationale, but it is not an accurate current-state specification.

---

## 27. Rules Claude should follow before changing SEO

1. Preserve the canonical `www` host unless the owner explicitly changes domain strategy.
2. Never change a slug, service ID, loss-type anchor, or glossary anchor without mapping all inbound links and adding a redirect.
3. Decide whether the true market is worldwide or England/Wales before rewriting legal content or schema.
4. Keep one H1 per page.
5. Ensure every metadata path exactly matches its route.
6. Keep visible FAQ content synchronized with FAQ JSON-LD.
7. Keep sitemap inventory synchronized by running generation and verification.
8. Never edit generated `public/sitemap.xml` or `public/robots.txt` by hand.
9. Do not reintroduce `/fees`, `/faq`, or `/experts` unless explicitly requested.
10. Do not add an obsolete meta-keywords tag.
11. Add unique OG images before claiming social-preview completeness.
12. Preserve the consent gate for analytics and advertising tags.
13. Validate all internal links and anchors after content changes.
14. Fix stale legal/privacy copy whenever form processors or tracking vendors change.
15. Use specific legal jurisdiction language rather than calling English procedure globally applicable.
16. Run production build after SEO changes because sitemap generation is part of build.

---

## 28. Practical audit checklist for Claude

Before proposing future SEO changes, verify:

- current git branch and commit
- production domain and redirect behavior
- whether global or UK positioning is desired
- current sitemap inventory
- current robots file
- indexability of contact and cookie pages
- removed-route redirect requirements
- metadata title/description uniqueness and lengths
- canonical and hreflang correctness
- heading hierarchy
- visible/schema FAQ parity
- service/schema geographic consistency
- article publication/update dates
- glossary SearchAction behavior
- OG image availability
- legal authority citations
- E-E-A-T signals
- stale privacy/Formspree wording
- internal link and anchor validity
- Core Web Vitals and Lighthouse data
- Search Console indexing and performance data
- analytics consent and conversion events

---

## 29. Final source-of-truth hierarchy

When resolving conflicts, use this order:

1. Current executable source in `src/`, `scripts/`, `middleware.ts`, and `netlify.toml`.
2. Generated `public/sitemap.xml` and `public/robots.txt` after running `npm run seo:generate`.
3. This current-state handoff.
4. Historical `docs/SEO-ARCHITECTURE.md`.

This document describes the implementation at commit `33e2099`; future commits can make any detail stale.
