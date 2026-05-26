export interface RelatedLink {
  href: string;
  label: string;
}

function dedupeLinks(links: RelatedLink[]): RelatedLink[] {
  const seen = new Set<string>();
  return links.filter((l) => {
    if (seen.has(l.href)) return false;
    seen.add(l.href);
    return true;
  });
}

const CONTACT: RelatedLink = {
  href: "/contact",
  label: "Instruct an Expert Witness",
};
const INSTRUCT: RelatedLink = {
  href: "/how-to-instruct",
  label: "How to Instruct an Expert",
};
const LOSS_TYPES: RelatedLink = {
  href: "/loss-types",
  label: "Types of Contract Loss",
};
const QUALIFICATIONS: RelatedLink = {
  href: "/qualifications",
  label: "Expert Qualifications & CPR Part 35",
};
const GLOSSARY: RelatedLink = { href: "/glossary", label: "Glossary" };
const GUIDES_HUB: RelatedLink = { href: "/guides", label: "Solicitor Guides" };

/** Rule 2 — required links per case type slug */
const CASE_TYPE_REQUIRED: Record<string, RelatedLink[]> = {
  "commercial-contract-breach": [
    { href: "/services#lost-profits", label: "Lost Profits Quantification" },
    {
      href: "/guides/lost-profits-but-for-methodology",
      label: "But-For Methodology Guide",
    },
    {
      href: "/guides/hadley-v-baxendale-remoteness-guide",
      label: "Hadley v Baxendale Guide",
    },
    { href: "/loss-types#expectation-loss", label: "Expectation Loss" },
    { href: "/glossary#hadley-v-baxendale", label: "Hadley v Baxendale" },
    { href: "/glossary#but-for-analysis", label: "But-For Analysis" },
    INSTRUCT,
    CONTACT,
  ],
  "construction-quantum-disputes": [
    { href: "/services#construction-quantum", label: "Construction Quantum" },
    {
      href: "/sectors/construction-engineering",
      label: "Construction & Engineering",
    },
    {
      href: "/guides/construction-quantum-expert-guide",
      label: "Construction Quantum Guide",
    },
    LOSS_TYPES,
    { href: "/glossary#scott-schedule", label: "Scott Schedule" },
    { href: "/glossary#prolongation", label: "Prolongation" },
    INSTRUCT,
    CONTACT,
  ],
  "supply-chain-failure": [
    { href: "/services#supply-chain-loss", label: "Supply Chain Loss" },
    {
      href: "/sectors/supply-chain-manufacturing",
      label: "Supply Chain & Manufacturing",
    },
    { href: "/loss-types#consequential-loss", label: "Consequential Loss" },
    { href: "/glossary#duty-to-mitigate", label: "Duty to Mitigate" },
    INSTRUCT,
    CONTACT,
  ],
  "professional-negligence-loss": [
    {
      href: "/services#professional-negligence-damages",
      label: "Professional Negligence Damages",
    },
    {
      href: "/guides/professional-negligence-loss-quantification",
      label: "Professional Negligence Loss Guide",
    },
    { href: "/glossary#saamco-principle", label: "SAAMCo Principle" },
    { href: "/glossary#loss-of-chance", label: "Loss of Chance" },
    INSTRUCT,
    CONTACT,
  ],
  "ip-licence-breach": [
    { href: "/services#ip-licensing-loss", label: "IP Licence Loss" },
    { href: "/sectors/media-entertainment-ip", label: "Media & Entertainment IP" },
    { href: "/loss-types#expectation-loss", label: "Expectation Loss" },
    INSTRUCT,
    CONTACT,
  ],
  "earn-out-ma-dispute": [
    { href: "/services#lost-profits", label: "Lost Profits Quantification" },
    {
      href: "/sectors/financial-services-banking",
      label: "Financial Services & Banking",
    },
    { href: "/loss-types#expectation-loss", label: "Expectation Loss" },
    INSTRUCT,
    CONTACT,
  ],
  "franchise-agreement-breach": [
    { href: "/services#lost-profits", label: "Lost Profits Quantification" },
    { href: "/sectors/retail-consumer-goods", label: "Retail & Consumer Goods" },
    { href: "/loss-types#expectation-loss", label: "Expectation Loss" },
    INSTRUCT,
    CONTACT,
  ],
  "employment-contract-loss": [
    { href: "/services#consequential-loss", label: "Consequential Loss" },
    { href: "/loss-types#expectation-loss", label: "Expectation Loss" },
    INSTRUCT,
    CONTACT,
  ],
  "joint-venture-dispute": [
    { href: "/services#lost-profits", label: "Lost Profits Quantification" },
    { href: "/loss-types#expectation-loss", label: "Expectation Loss" },
    INSTRUCT,
    CONTACT,
  ],
  "distribution-agency-agreement": [
    { href: "/services#lost-profits", label: "Lost Profits Quantification" },
    {
      href: "/glossary#commercial-agents-regulations-1993",
      label: "Commercial Agents Regulations",
    },
    { href: "/loss-types#reliance-loss", label: "Reliance Loss" },
    INSTRUCT,
    CONTACT,
  ],
};

/** Rule 3 — required links per sector slug */
const SECTOR_REQUIRED: Record<string, RelatedLink[]> = {
  "construction-engineering": [
    { href: "/case-types/construction-quantum-disputes", label: "Construction Quantum Disputes" },
    { href: "/services#construction-quantum", label: "Construction Quantum" },
    LOSS_TYPES,
    QUALIFICATIONS,
    CONTACT,
  ],
  "technology-software": [
    { href: "/case-types/commercial-contract-breach", label: "Commercial Contract Breach" },
    { href: "/services#lost-profits", label: "Lost Profits" },
    LOSS_TYPES,
    QUALIFICATIONS,
    CONTACT,
  ],
  "supply-chain-manufacturing": [
    { href: "/case-types/supply-chain-failure", label: "Supply Chain Failure" },
    { href: "/services#supply-chain-loss", label: "Supply Chain Loss" },
    LOSS_TYPES,
    QUALIFICATIONS,
    CONTACT,
  ],
  "financial-services-banking": [
    { href: "/case-types/earn-out-ma-dispute", label: "Earn-Out & M&A Disputes" },
    { href: "/services#lost-profits", label: "Lost Profits" },
    LOSS_TYPES,
    QUALIFICATIONS,
    CONTACT,
  ],
  "retail-consumer-goods": [
    { href: "/case-types/franchise-agreement-breach", label: "Franchise Agreement Breach" },
    { href: "/services#supply-chain-loss", label: "Supply Chain Loss" },
    LOSS_TYPES,
    QUALIFICATIONS,
    CONTACT,
  ],
  "professional-services": [
    { href: "/case-types/professional-negligence-loss", label: "Professional Negligence" },
    { href: "/services#professional-negligence-damages", label: "Professional Negligence Damages" },
    LOSS_TYPES,
    QUALIFICATIONS,
    CONTACT,
  ],
  "energy-utilities": [
    { href: "/case-types/commercial-contract-breach", label: "Commercial Contract Breach" },
    { href: "/services#consequential-loss", label: "Consequential Loss" },
    LOSS_TYPES,
    QUALIFICATIONS,
    CONTACT,
  ],
  "media-entertainment-ip": [
    { href: "/case-types/ip-licence-breach", label: "IP Licence Breach" },
    { href: "/services#ip-licensing-loss", label: "IP Licence Loss" },
    LOSS_TYPES,
    QUALIFICATIONS,
    CONTACT,
  ],
};

/** Rule 4 — baseline guide links (merged with per-guide data links) */
const GUIDE_BASELINE: RelatedLink[] = [
  GUIDES_HUB,
  LOSS_TYPES,
  INSTRUCT,
  QUALIFICATIONS,
  CONTACT,
];

/** Rule 1 — pillar page related resources */
export const LOSS_TYPES_RELATED_LINKS: RelatedLink[] = [
  { href: "/guides/lost-profits-but-for-methodology", label: "Lost Profits & But-For Guide" },
  { href: "/guides/wasted-expenditure-reliance-loss", label: "Wasted Expenditure & Reliance Guide" },
  { href: "/guides/hadley-v-baxendale-remoteness-guide", label: "Hadley v Baxendale Guide" },
  { href: "/case-types/commercial-contract-breach", label: "Commercial Contract Breach" },
  { href: "/services#lost-profits", label: "Lost Profits Service" },
  { href: "/services#wasted-expenditure", label: "Wasted Expenditure Service" },
  { href: "/services#consequential-loss", label: "Consequential Loss Service" },
  { href: "/glossary#expectation-damages", label: "Expectation Damages" },
  { href: "/glossary#reliance-loss", label: "Reliance Loss" },
  { href: "/glossary#hadley-v-baxendale", label: "Hadley v Baxendale" },
  { href: "/glossary#but-for-analysis", label: "But-For Analysis" },
  { href: "/glossary#remoteness", label: "Remoteness" },
  { href: "/glossary#duty-to-mitigate", label: "Duty to Mitigate" },
  CONTACT,
];

export function mergeCaseTypeLinks(
  slug: string,
  existing: RelatedLink[] = []
): RelatedLink[] {
  return dedupeLinks([...existing, ...(CASE_TYPE_REQUIRED[slug] ?? [LOSS_TYPES, INSTRUCT, CONTACT])]);
}

export function mergeSectorLinks(
  slug: string,
  existing: RelatedLink[] = []
): RelatedLink[] {
  return dedupeLinks([...existing, ...(SECTOR_REQUIRED[slug] ?? [LOSS_TYPES, QUALIFICATIONS, CONTACT])]);
}

export function mergeGuideLinks(existing: RelatedLink[] = []): RelatedLink[] {
  return dedupeLinks([...existing, ...GUIDE_BASELINE]);
}
