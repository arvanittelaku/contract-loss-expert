/** Stable anchor slugs for glossary deep links (SEO-ARCHITECTURE.md) */
export const GLOSSARY_ANCHOR_BY_TERM: Record<string, string> = {
  "Adjudication (Construction)": "adjudication-construction",
  "Allied Maples Principle (Loss of Chance)": "allied-maples-principle",
  "But-For Analysis": "but-for-analysis",
  "Cavendish Square Rule (Penalty Clauses)": "cavendish-square-rule",
  Causation: "causation",
  "Commercial Agents Regulations 1993": "commercial-agents-regulations-1993",
  "Consequential Loss": "consequential-loss",
  "CPR Part 35": "cpr-part-35",
  "Diminution in Value": "diminution-in-value",
  "Disruption (Construction)": "disruption",
  "Duty to Mitigate": "duty-to-mitigate",
  "Earn-Out Agreement": "earn-out-agreement",
  "Expectation Damages": "expectation-damages",
  "FIDIC Contract": "fidic-contract",
  "Force Majeure": "force-majeure",
  "Hadley v Baxendale [1854]": "hadley-v-baxendale",
  "The Ikarian Reefer Duties": "ikarian-reefer",
  "JCT Contract": "jct-contract",
  "Joint Statement (Expert Witnesses)": "joint-statement",
  "Loss and Expense (Construction)": "loss-and-expense",
  "Loss of Chance": "loss-of-chance",
  "NEC Contract": "nec-contract",
  "Party-Appointed Expert (PAE)": "party-appointed-expert",
  "Prolongation (Construction)": "prolongation",
  Quantum: "quantum",
  "Reliance Loss": "reliance-loss",
  Remoteness: "remoteness",
  "Robinson v Harman [1848]": "robinson-v-harman",
  "SAAMCo Principle": "saamco-principle",
  "Scott Schedule": "scott-schedule",
};

export function glossaryAnchorId(term: string): string {
  return GLOSSARY_ANCHOR_BY_TERM[term] ?? termToSlug(term);
}

export function termToSlug(term: string): string {
  return term
    .toLowerCase()
    .replace(/\[.*?\]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

export function glossaryHref(term: string): string {
  return `/glossary#${glossaryAnchorId(term)}`;
}
