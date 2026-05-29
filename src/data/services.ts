export interface MethodologyRow {
  phase: string;
  whatWeDo: string;
  deliverable: string;
}

import type { FAQ } from "./types";

export interface Service {
  id: string;
  name: string;
  description: string;
  content: string;
  methodology?: MethodologyRow[];
  faqs: FAQ[];
}

export const services: Service[] = [
  {
    id: "lost-profits",
    name: "Lost Profits Quantification",
    description:
      "But-for financial modelling to quantify expectation loss from breach of contract, comparing projected performance with actual post-breach results.",
    content:
      "Lost profits quantification is the primary measure of expectation damages in UK contract disputes, placing the claimant in the position they would have been in had the contract been performed, as established in Robinson v Harman [1848]. Our forensic accountants construct a but-for model using pre-breach financial data, management forecasts, and market conditions to establish the counterfactual trading position, then compare it against actual performance following the breach. The analysis addresses growth rate assumptions, variable versus fixed cost treatment, and the causal link between the breach and the financial shortfall. Each report is structured to withstand scrutiny on causation, remoteness under Hadley v Baxendale, and the claimant's duty to mitigate. Sensitivity analysis is provided on key assumptions so that the court can assess the robustness of the loss figure under cross-examination.",
    methodology: [
      {
        phase: "Data Gathering",
        whatWeDo:
          "Collect financial statements, management accounts, forecasts, and contracts to establish the pre-breach trading position.",
        deliverable: "Financial dataset",
      },
      {
        phase: "Baseline Construction",
        whatWeDo:
          "Analyse pre-breach trading history and establish the revenue baseline from which the but-for model is built.",
        deliverable: "But-for revenue model",
      },
      {
        phase: "Counterfactual",
        whatWeDo:
          "Project what would have happened absent the breach, applying appropriate growth rates and cost assumptions.",
        deliverable: "But-for profit model",
      },
      {
        phase: "Loss Calculation",
        whatWeDo:
          "Compare actual post-breach financial performance against the but-for projection to arrive at the net loss.",
        deliverable: "Net lost profit figure",
      },
      {
        phase: "Report",
        whatWeDo:
          "Prepare a CPR Part 35 compliant expert report with full workings, assumptions, and sensitivity analysis.",
        deliverable: "Court-ready report",
      },
    ],
    faqs: [
      {
        question: "How is lost profit calculated in a commercial contract dispute?",
        answer:
          "The expert constructs a but-for model showing what profit the claimant would have earned had the contract been performed, based on contract terms, pre-breach trading history, and market conditions at the time of breach. This is compared to the actual financial outcome to arrive at the net loss figure under Robinson v Harman [1848].",
      },
      {
        question: "What is the but-for methodology?",
        answer:
          "The but-for test asks what the claimant's financial position would have been absent the breach. Experts build a counterfactual model from pre-breach data and compare it to actual post-breach performance, with sensitivity analysis on key assumptions for CPR Part 35 reports.",
      },
    ],
  },
  {
    id: "wasted-expenditure",
    name: "Wasted Expenditure Analysis",
    description:
      "Reliance loss quantification for expenditure incurred in expectation of contract performance, including pre-contractual costs where recoverable.",
    content:
      "Wasted expenditure, also known as reliance loss, returns the claimant to the position they would have been in had the contract never been made. Under Anglia Television Ltd v Reed [1972], expenditure incurred in reliance on the contract being performed is recoverable where expectation loss cannot be calculated, or where the claimant elects to claim reliance damages under CCC Films v Impact Quadrant [1985]. Our experts identify all expenditure incurred in contemplation of contract performance, including pre-contractual costs where they were within the reasonable contemplation of both parties at the time of contracting. The analysis addresses the bad bargain defence, where the defendant argues the claimant would not have recovered its expenditure even if the contract had been performed, and advises on the appropriate choice between expectation and reliance frameworks. Full supporting documentation, receipts, and allocation of shared costs are reviewed to produce a defensible reliance loss figure.",
    faqs: [
      {
        question: "What is wasted expenditure and when can I claim it?",
        answer:
          "Wasted expenditure is reliance loss, costs incurred in expectation of contract performance that were wasted due to breach. It is claimed where lost profits cannot be proved or under Anglia TV v Reed [1972] and CCC Films v Impact Quadrant [1985] where the claimant elects reliance damages.",
      },
      {
        question: "What is the difference between expectation loss and reliance loss?",
        answer:
          "Expectation loss restores the benefit of the bargain (lost profits); reliance loss restores the pre-contract position (wasted expenditure). Experts advise which measure is appropriate and address the defendant's bad bargain defence.",
      },
    ],
  },
  {
    id: "consequential-loss",
    name: "Consequential Loss Assessment",
    description:
      "Identification and quantification of losses beyond the direct loss of bargain, with Hadley v Baxendale remoteness analysis for each head of loss.",
    content:
      "Consequential loss comprises additional losses that flow from the breach but extend beyond the direct loss of bargain on the contract itself. Under Hadley v Baxendale [1854], such losses are recoverable only if they arise naturally from the breach in the ordinary course of things (Limb 1), or were within the reasonable contemplation of both parties at the time of contracting as the probable result of the breach (Limb 2). Our experts identify each head of consequential loss, including third-party contract losses, downstream customer losses, and supply chain disruption costs, and apply a separate remoteness analysis to each category. Where the defendant had actual or constructive knowledge of downstream dependencies, Limb 2 losses may be recoverable; where they did not, those losses will fail the remoteness test. Quantification methodology is tailored to each head of loss, with clear separation between direct and consequential categories in the expert report.",
    faqs: [
      {
        question: "What is consequential loss and how is it recovered?",
        answer:
          "Consequential loss is loss beyond the direct contract bargain, such as third-party or customer losses. Each head must pass Hadley v Baxendale [1854]: Limb 1 (natural consequence) or Limb 2 (reasonable contemplation at contracting).",
      },
      {
        question: "What is Hadley v Baxendale and how does it affect my claim?",
        answer:
          "Hadley v Baxendale limits recoverable loss to damages arising naturally from the breach or within the parties' reasonable contemplation. Experts structure reports to address remoteness for each consequential head separately.",
      },
    ],
  },
  {
    id: "construction-quantum",
    name: "Construction Quantum Claims",
    description:
      "Chartered quantity surveyor-led quantification of loss and expense, prolongation, disruption, and variations under JCT, NEC, and FIDIC contracts.",
    content:
      "Construction quantum claims require specialist expertise in contract administration, programme analysis, and cost quantification under standard form contracts including JCT, NEC, and FIDIC. Our chartered quantity surveyors quantify loss and expense, prolongation costs, disruption losses, and variation valuations, distinguishing between global claims and individually pleaded items. Prolongation covers the additional time-related costs incurred when a project is delayed beyond the planned completion date, while disruption addresses the reduced productivity caused by changes, events, or interference with the regular sequence of works. Scott Schedules are prepared in the format required by the Technology and Construction Court (TCC), itemising each claim with supporting quantum analysis. Our experts provide adjudication-ready reports and give oral evidence in TCC proceedings, arbitration, and expert determination.",
    methodology: [
      {
        phase: "Contract Review",
        whatWeDo:
          "Review JCT, NEC, or FIDIC contract terms, programme, extension of time notices, and contractual entitlement provisions.",
        deliverable: "Entitlement analysis",
      },
      {
        phase: "Delay Analysis",
        whatWeDo:
          "Work with delay analysts to establish critical path impact and link delay events to cost entitlement.",
        deliverable: "EOT entitlement",
      },
      {
        phase: "Loss Quantification",
        whatWeDo:
          "Quantify prolongation costs, disruption losses, and variation valuations using site records and cost data.",
        deliverable: "Quantum schedule",
      },
      {
        phase: "Scott Schedule",
        whatWeDo:
          "Prepare an itemised claim schedule in TCC format with claimed amounts, responses, and expert opinion.",
        deliverable: "Court/arbitration ready",
      },
    ],
    faqs: [
      {
        question: "What is a quantum expert witness in construction disputes?",
        answer:
          "A construction quantum expert is typically a chartered quantity surveyor (MRICS/FRICS) or forensic accountant who quantifies loss and expense, variations, prolongation, and disruption. They prepare Scott Schedules and CPR Part 35 reports for adjudication, arbitration, and the TCC.",
      },
      {
        question: "What is the difference between disruption and prolongation in construction claims?",
        answer:
          "Prolongation is additional time-related cost when a project is delayed (site overheads, plant hire). Disruption is lost productivity from changes or events. Experts quantify both separately using programme analysis and cost records.",
      },
    ],
  },
  {
    id: "supply-chain-loss",
    name: "Supply Chain Loss Analysis",
    description:
      "Causal chain analysis linking upstream supplier breach to downstream financial losses, with mitigation assessment.",
    content:
      "Supply chain failures can cause significant downstream financial losses when an upstream supplier breaches its contract obligations. Our experts map the causal chain from the supplier's breach through to the claimant's lost production, inventory write-offs, customer contract penalties, and lost margin on products that could not be manufactured or delivered. The analysis addresses whether the claimant took reasonable steps to mitigate, such as sourcing from alternative suppliers, and quantifies the loss that would have been avoided by proper mitigation. Where the supplier knew or should have known of downstream customer contracts dependent on the supply, those customer contract losses may be recoverable under Limb 2 of Hadley v Baxendale. Stock and inventory losses, emergency sourcing premiums, and production shutdown costs are quantified separately with full supporting documentation.",
    faqs: [
      {
        question: "How does a supply chain expert witness establish causation?",
        answer:
          "The expert maps the causal chain from the supplier's breach to downstream loss, establishing each link was a direct and foreseeable consequence. Where the chain is broken, the impact on recoverable loss is addressed explicitly.",
      },
      {
        question: "Can a business recover customer contract losses caused by a supplier's breach?",
        answer:
          "Yes, if the supplier knew or should have known of dependent downstream contracts, customer losses may be recoverable under Limb 2 of Hadley v Baxendale. Experts assess actual or constructive knowledge and quantify each head.",
      },
    ],
  },
  {
    id: "professional-negligence-damages",
    name: "Professional Negligence Damages",
    description:
      "But-for counterfactual analysis and loss of chance quantification for accountant, solicitor, and valuer negligence claims.",
    content:
      "Professional negligence loss quantification requires a but-for counterfactual showing what the claimant's financial position would have been absent the negligent advice or service. The SAAMCo principle (South Australia Asset Management Corp v York Montague [1997]) limits recoverable damages to the loss within the scope of the professional's duty, a critical distinction where the adviser provided information rather than advice. Where the claimant's loss depends on the actions of a third party, loss of chance quantification applies the Allied Maples v Simmons & Simmons [1995] approach, expressing the lost opportunity as a percentage probability multiplied by the full loss. Our experts address causation between the negligence and the financial loss, counterfactual transaction analysis, and the appropriate discount rate for future losses. Reports are structured for use in solicitor negligence, accountant negligence, and valuer negligence claims in both court and arbitration.",
    faqs: [
      {
        question: "What is the SAAMCo principle in professional negligence?",
        answer:
          "SAAMCo limits damages to loss within the scope of the professional's duty. Where an adviser provided information rather than advice, liability is limited to additional loss caused by the information being wrong, not all transaction losses.",
      },
      {
        question: "What is loss of chance quantification?",
        answer:
          "Where loss depends on a third party's actions, the expert quantifies the lost opportunity as a percentage probability multiplied by the full loss, common in solicitor negligence under Allied Maples v Simmons & Simmons [1995].",
      },
    ],
  },
  {
    id: "ip-licensing-loss",
    name: "IP & Licensing Loss Quantification",
    description:
      "Royalty loss calculation, reasonable royalty analysis, and lost market share quantification for IP licence breach disputes.",
    content:
      "IP licence breach disputes require quantification of the royalties that should have been paid under the licence but were not, by applying the contractual royalty rate to the licensee's actual sales or usage of the licensed intellectual property. Where the rate is disputed, our experts perform a reasonable royalty analysis using comparable licence transactions as benchmarks. The relief from royalty method values the IP by estimating the royalty payments the owner avoids by owning rather than licensing, discounted to present value, and can quantify the value of a licence that was improperly exploited. Lost profits from IP misuse, loss of exclusivity, and lost market share are quantified separately, with each head of loss assessed against the Hadley v Baxendale remoteness test. Reports address both contractual royalty claims and tort-based passing off damages where applicable.",
    faqs: [
      {
        question: "How are royalty losses calculated for a licence breach?",
        answer:
          "The expert applies the contractual royalty rate to the licensee's actual sales or usage. Where the rate is disputed, a reasonable royalty analysis uses comparable licence transactions as benchmarks.",
      },
      {
        question: "What is the relief from royalty method?",
        answer:
          "It values IP by estimating royalty payments the owner avoids by owning rather than licensing, discounted to present value. In breach cases it can quantify the value of a licence improperly exploited.",
      },
    ],
  },
  {
    id: "expert-determination",
    name: "Expert Determination & ADR",
    description:
      "Independent quantum determinations under contractual expert determination clauses, plus mediation and adjudication support.",
    content:
      "Many commercial and construction contracts include expert determination clauses requiring an independent expert to resolve quantum disputes without full litigation. Our experts act under ICAEW and RICS expert determination schemes, providing binding or advisory determinations as specified in the contract. The process is typically faster and more cost-effective than court proceedings, while producing a reasoned determination on the quantum issues in dispute. We also provide mediation quantum support, preparing objective loss analyses to facilitate settlement, and adjudication expert evidence under the Housing Grants, Construction and Regeneration Act 1996. Whether the engagement is for expert determination, adjudication, arbitration under LCIA or ICC rules, or court proceedings, our experts maintain the same standard of independence and objectivity required under CPR Part 35 and the Ikarian Reefer [1993] principles.",
    faqs: [
      {
        question: "Should I use a Single Joint Expert or party-appointed expert?",
        answer:
          "An SJE provides one independent opinion for both parties under CPR Part 35, reducing cost. Party-appointed experts produce separate reports and joint statements, common in high-value disputes where each side needs independent analysis.",
      },
      {
        question: "What credentials should a contract loss expert witness hold?",
        answer:
          "For commercial losses: ACA, FCA, ACCA, CFA, or CFE with forensic practice. For construction: MRICS, FRICS, FCIArb. All should have CPR Part 35 report experience and professional indemnity insurance.",
      },
    ],
  },
];

export function getService(id: string): Service | undefined {
  return services.find((service) => service.id === id);
}
