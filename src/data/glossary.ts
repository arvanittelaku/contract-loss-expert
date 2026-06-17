export interface GlossaryTerm {
  term: string;
  definition: string;
  link?: { href: string; label: string };
}

export const glossaryTerms: GlossaryTerm[] = [
  {
    term: "Adjudication (Construction)",
    definition:
      "A statutory dispute resolution process under the Housing Grants, Construction and Regeneration Act 1996, providing a binding decision within approximately 28 days. Construction quantum experts frequently provide decision-ready schedules and oral submissions in adjudication, where time constraints require focused, evidenced loss quantification rather than full CPR-style reports.",
  },
  {
    term: "Allied Maples Principle (Loss of Chance)",
    definition:
      "From Allied Maples Group Ltd v Simmons & Simmons [1995] 1 WLR 1602: where a defendant's negligence deprives the claimant of the chance to obtain a benefit from a third party, damages reflect the value of the chance lost, expressed as a percentage probability multiplied by the full benefit. Central to solicitor negligence and professional negligence loss quantification.",
    link: {
      href: "/guides/professional-negligence-loss-quantification",
      label: "Professional Negligence Loss Guide",
    },
  },
  {
    term: "But-For Analysis",
    definition:
      "The counterfactual methodology comparing the claimant's actual financial position after breach with the position they would have been in had the contract been performed. The difference, after deducting avoided variable costs and crediting mitigation, represents lost profits or the financial impact of breach. The standard approach to expectation damages quantification.",
    link: {
      href: "/guides/lost-profits-but-for-methodology",
      label: "But-For Methodology Guide",
    },
  },
  {
    term: "Cavendish Square Rule (Penalty Clauses)",
    definition:
      "From Cavendish Square Holding BV v Makdessi [2015] UKSC 67: the modern test for whether a contractual clause is an unenforceable penalty. A clause is penal if it imposes a detriment out of all proportion to any legitimate interest of the innocent party. Relevant where defendants argue claimed losses are pre-estimated liquidated damages or penalty clauses.",
  },
  {
    term: "Causation",
    definition:
      "The requirement that the breach was an effective cause of the loss claimed. In contract, the 'but for' test applies: but for the breach, would the loss have occurred? Where multiple causes contribute, the expert must apportion loss attributable to the defendant's breach separately from external market factors or the claimant's own conduct.",
  },
  {
    term: "Commercial Agents Regulations 1993",
    definition:
      "The Commercial Agents (Council Directive) Regulations 1993, which provide compensation or indemnity rights to commercial agents on termination of agency agreements. Regulation 17 compensation is typically calculated based on the value of the agency, often two years' average annual commission, requiring expert quantification of commission history and goodwill.",
  },
  {
    term: "Consequential Loss",
    definition:
      "Loss beyond the direct loss of bargain, additional losses flowing from the breach, such as third-party contract losses or business disruption costs. Recoverable only if within Hadley v Baxendale remoteness: either arising naturally from the breach or within the parties' reasonable contemplation at contracting.",
    link: {
      href: "/loss-types#consequential-loss",
      label: "Consequential Loss Explained",
    },
  },
  {
    term: "CPR Part 35",
    definition:
      "Civil Procedure Rules Part 35 and Practice Direction 35 govern expert evidence in civil proceedings in applicable jurisdictions. Experts owe an overriding duty to the court, must provide independent objective opinions within their expertise, and must comply with specific report format requirements. Non-compliance can result in exclusion of evidence or adverse costs.",
    link: {
      href: "/qualifications",
      label: "Expert Qualifications & CPR Part 35",
    },
  },
  {
    term: "Diminution in Value",
    definition:
      "A measure of damages based on the reduction in the value of an asset caused by the breach, rather than lost profits. Common in property and share valuation disputes, and professional negligence claims where a negligent valuation caused the claimant to overpay for an asset.",
  },
  {
    term: "Disruption (Construction)",
    definition:
      "Loss of productivity in construction works caused by events such as variations, crowding, or out-of-sequence working, distinct from prolongation. Quantified by comparing planned labour productivity with actual productivity, using techniques such as measured mile analysis. Requires specific causal evidence; global disruption claims are vulnerable to challenge.",
    link: {
      href: "/case-types/construction-quantum-disputes",
      label: "Construction Quantum Disputes",
    },
  },
  {
    term: "Duty to Mitigate",
    definition:
      "The claimant's obligation to take reasonable steps to minimise loss following breach. Failure to mitigate reduces recoverable damages. Expert witnesses assess what mitigation steps were available, whether they were taken, and the financial value of loss that proper mitigation would have avoided.",
    link: { href: "/loss-types", label: "Types of Contract Loss" },
  },
  {
    term: "Earn-Out Agreement",
    definition:
      "A contractual mechanism in M&A transactions where part of the purchase price is contingent on post-completion performance targets. Disputes arise when sellers allege buyer conduct frustrated earn-out achievement. Experts construct but-for models showing what performance would have been achieved absent alleged breach.",
  },
  {
    term: "Expectation Damages",
    definition:
      "Damages that place the claimant in the position they would have been in had the contract been performed, the primary measure of contract damages per Robinson v Harman [1848]. Typically quantified as lost profits using but-for analysis. Also called expectation loss or benefit of the bargain damages.",
    link: {
      href: "/loss-types",
      label: "Types of Contract Loss",
    },
  },
  {
    term: "FIDIC Contract",
    definition:
      "Fédération Internationale des Ingénieurs-Conseils standard form construction contracts widely used on international infrastructure projects. FIDIC claims require strict compliance with notice and substantiation requirements under Clause 20. Quantum experts must work from the actual amended contract and applicable delay and cost mechanisms.",
    link: {
      href: "/sectors/construction-engineering",
      label: "Construction & Engineering Sector",
    },
  },
  {
    term: "Force Majeure",
    definition:
      "A contractual clause excusing performance where specified supervening events beyond the parties' control prevent performance. Force majeure is a contractual construct, not a free-standing common law doctrine in applicable jurisdictions. Quantum experts may address whether an FM event caused the loss claimed and what proportion of loss is attributable to FM versus breach.",
  },
  {
    term: "Hadley v Baxendale [1854]",
    definition:
      "The foundational authority on remoteness of damages for breach of contract. The two-limb rule limits recovery to: (1) losses arising naturally from the breach; and (2) losses within the reasonable contemplation of both parties at contracting as the probable result of breach. Expert reports should address remoteness for each head of loss.",
    link: {
      href: "/guides/hadley-v-baxendale-remoteness-guide",
      label: "Hadley v Baxendale Remoteness Guide",
    },
  },
  {
    term: "The Ikarian Reefer Duties",
    definition:
      "From National Justice Compania Naviera SA v Prudential Assurance Co Ltd (The Ikarian Reefer) [1993] 2 Lloyd's Rep 68: the expert's primary duty is to the court, not the instructing party. The expert must provide independent, objective assistance, consider all material facts including those unfavourable to the instructing party, and clearly distinguish fact from opinion.",
    link: { href: "/qualifications", label: "CPR Part 35 & Expert Duties" },
  },
  {
    term: "JCT Contract",
    definition:
      "Joint Contracts Tribunal standard form building contracts widely used in construction. JCT contracts link extension of time and loss and expense entitlement through relevant events and relevant matters, with strict notice requirements. Quantum experts must analyse entitlement under the specific JCT form and amendment schedule used.",
    link: {
      href: "/sectors/construction-engineering",
      label: "Construction & Engineering Sector",
    },
  },
  {
    term: "Joint Statement (Expert Witnesses)",
    definition:
      "A document produced after a meeting between opposing experts under CPR Part 35, recording areas of agreement and disagreement. Joint statements narrow trial issues and are typically ordered by the court. Experts must not reach inappropriate compromises on opinion, disagreements should be clearly and precisely stated.",
  },
  {
    term: "Loss and Expense (Construction)",
    definition:
      "The JCT term for financial compensation due to the contractor for direct loss and/or expense caused by employer risk events. Distinct from damages at common law, entitlement arises from the contract. Quantum experts quantify loss and expense items that are contractually entitled and properly notified.",
  },
  {
    term: "Loss of Chance",
    definition:
      "Damages for the loss of an opportunity where the outcome depended on a third party's actions. Quantified as a percentage probability of success multiplied by the value of the benefit. Common in professional negligence claims following Allied Maples. The expert must support the probability assessment with evidence, not speculation.",
    link: {
      href: "/guides/professional-negligence-loss-quantification",
      label: "Professional Negligence Loss Guide",
    },
  },
  {
    term: "NEC Contract",
    definition:
      "New Engineering Contract suite (NEC4) promoting collaborative project management with compensation events as the primary mechanism for time and cost entitlement. Uses defined cost and forecast defined cost rather than JCT loss and expense terminology. Quantum experts must apply NEC-specific assessment procedures.",
    link: {
      href: "/sectors/construction-engineering",
      label: "Construction & Engineering Sector",
    },
  },
  {
    term: "Party-Appointed Expert (PAE)",
    definition:
      "An expert witness instructed by one party to the litigation, as opposed to a Single Joint Expert appointed by the court for both parties. PAEs owe the same CPR Part 35 duty to the court as SJEs. In high-value commercial disputes, each party typically appoints their own quantum expert, with a joint meeting to narrow issues.",
  },
  {
    term: "Prolongation (Construction)",
    definition:
      "Additional costs incurred when a construction project is delayed beyond the planned completion date, extended site overheads, preliminaries, plant hire, and supervision. Linked to the delay analysis establishing the period of excusable delay. Distinct from disruption, which addresses loss of productivity.",
    link: {
      href: "/guides/construction-quantum-expert-guide",
      label: "Construction Quantum Guide",
    },
  },
  {
    term: "Quantum",
    definition:
      "The amount of money claimed or awarded as damages. In construction disputes, a 'quantum expert' is a chartered quantity surveyor or forensic accountant who values the financial consequences of entitlement events. In commercial litigation, quantum experts quantify lost profits, wasted expenditure, and consequential loss.",
  },
  {
    term: "Reliance Loss",
    definition:
      "Damages that return the claimant to the position they would have been in had the contract never been made, typically quantified as wasted expenditure incurred in reliance on the contract. An alternative to expectation damages, subject to the bad bargain defence. Governed by authorities including Anglia Television Ltd v Reed [1972].",
    link: {
      href: "/guides/wasted-expenditure-reliance-loss",
      label: "Wasted Expenditure & Reliance Guide",
    },
  },
  {
    term: "Remoteness",
    definition:
      "The legal limit on recoverable damages, losses must satisfy the Hadley v Baxendale test. Losses too remote are not recoverable regardless of their size. Expert witnesses structure reports to address remoteness for each head of loss, separating direct from consequential categories and identifying the supporting limb.",
    link: {
      href: "/guides/hadley-v-baxendale-remoteness-guide",
      label: "Hadley v Baxendale Guide",
    },
  },
  {
    term: "Robinson v Harman [1848]",
    definition:
      "The foundational compensatory principle: the innocent party should be placed in the position they would have been in had the contract been performed. This establishes expectation damages as the primary measure of contract damages in applicable jurisdictions, quantified through but-for analysis of lost profits.",
    link: {
      href: "/loss-types#expectation-loss",
      label: "Expectation Loss Explained",
    },
  },
  {
    term: "SAAMCo Principle",
    definition:
      "From South Australia Asset Management Corp v York Montague Ltd [1997] AC 191: damages for professional negligence are limited to losses within the scope of the professional's duty. Distinguishes 'advice' cases (full transaction losses may be recoverable) from 'information' cases (only losses caused by the specific misinformation). Essential in accountant and valuer negligence claims.",
    link: {
      href: "/case-types/professional-negligence-loss",
      label: "Professional Negligence Cases",
    },
  },
  {
    term: "Scott Schedule",
    definition:
      "A structured document used in construction litigation (named after Scott v Davis [2000] BLR 301) listing each claim item with amounts claimed, responding positions, and expert opinions. Courts in the Technology and Construction Court frequently order Scott Schedules to narrow issues before trial.",
    link: {
      href: "/case-types/construction-quantum-disputes",
      label: "Construction Quantum Disputes",
    },
  },
];

export function getGlossaryFaqs(): { question: string; answer: string }[] {
  return glossaryTerms.map((item) => ({
    question: `What is ${item.term}?`,
    answer: item.definition,
  }));
}
