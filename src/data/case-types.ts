import type { ContentPage, FAQ } from "./types";

const commercialContractBreachFaqs: FAQ[] = [
  {
    question:
      "How is lost profit calculated in a commercial contract dispute?",
    answer:
      "The expert constructs a but-for model showing what profit the claimant would have earned had the contract been performed, based on the contract terms, pre-breach trading history, and market conditions at the time of breach. This is compared to the actual financial outcome to arrive at the net loss figure.",
  },
  {
    question: "What is the remoteness rule in commercial contract losses?",
    answer:
      "Under Hadley v Baxendale [1854], only losses that arise naturally from the breach or were within the reasonable contemplation of both parties at the time of contracting are recoverable. Expert witnesses structure their loss analysis to address remoteness for each head of loss, identifying which losses are direct and which are consequential.",
  },
];

const constructionQuantumDisputesFaqs: FAQ[] = [
  {
    question: "What is a quantum expert witness in construction disputes?",
    answer:
      "A quantum expert witness in construction is typically a chartered quantity surveyor (MRICS/FRICS) or forensic accountant who quantifies the financial value of contract claims, including loss and expense, variations, prolongation costs, and disruption. They prepare Scott Schedules, expert reports, and give evidence in adjudication, arbitration, and court proceedings.",
  },
  {
    question:
      "What is the difference between disruption and prolongation in construction claims?",
    answer:
      "Prolongation refers to the additional time costs incurred when a project is delayed, site overheads, supervision, plant hire continuing beyond planned completion. Disruption refers to the reduced productivity caused by changes or events, the loss of efficiency in performing the works. Expert witnesses quantify both separately using programme analysis and cost records.",
  },
];

const supplyChainFailureFaqs: FAQ[] = [
  {
    question: "How does a supply chain expert witness establish causation?",
    answer:
      "The expert maps the causal chain from the supplier's breach to the claimant's downstream loss, establishing that each link in the chain was a direct and foreseeable consequence of the original breach. Where the chain is broken (e.g. by the claimant's own failure), the expert addresses the impact on the loss recoverable.",
  },
  {
    question:
      "Can a business recover customer contract losses caused by a supplier's breach?",
    answer:
      "Yes, if the supplier knew or should have known that the claimant had downstream customer contracts dependent on the supply, those customer contract losses may be recoverable under Limb 2 of Hadley v Baxendale. Expert witnesses assess whether the supplier had actual or constructive knowledge of the downstream contracts.",
  },
];

const professionalNegligenceLossFaqs: FAQ[] = [
  {
    question: "What is the SAAMCo principle in professional negligence?",
    answer:
      "The SAAMCo principle (South Australia Asset Management Corp v York Montague [1997]) limits the damages recoverable in professional negligence cases to the loss within the scope of the professional's duty. Where an adviser provides information (not advice), their liability is limited to the additional loss caused by the information being wrong, not all losses flowing from the transaction. Expert witnesses must address SAAMCo when quantifying professional negligence losses.",
  },
  {
    question: "What is loss of chance quantification?",
    answer:
      "Where the claimant's loss depends on the actions of a third party (e.g. whether a court would have decided in their favour, or whether a transaction would have completed), the expert quantifies the loss of chance, expressing the lost opportunity as a percentage probability multiplied by the full loss. This approach is common in solicitor negligence claims (Allied Maples v Simmons & Simmons [1995]).",
  },
];

const ipLicenceBreachFaqs: FAQ[] = [
  {
    question: "How are royalty losses calculated for a licence breach?",
    answer:
      "The expert calculates the royalties that should have been paid under the licence but were not, by applying the contractual royalty rate to the licensee's actual sales or usage of the licensed IP. Where the rate is disputed, a reasonable royalty analysis may be performed using comparable licence transactions as benchmarks.",
  },
  {
    question: "What is the relief from royalty method?",
    answer:
      "Relief from royalty values the IP by estimating the royalty payments the owner avoids by owning rather than licensing the IP, discounted to present value. In licence breach cases, it can be used to quantify the value of the licence that was improperly exploited.",
  },
];

const earnOutMaDisputeFaqs: FAQ[] = [
  {
    question: "What disputes arise in earn-out agreements?",
    answer:
      "Earn-out disputes arise when the seller claims the buyer's conduct prevented achievement of the earn-out targets, by stripping resources, changing strategy, or failing to invest. Expert witnesses construct a but-for model showing what the business would have achieved absent the alleged breach and quantify the resulting earn-out shortfall.",
  },
  {
    question: "How is a completion accounts dispute resolved?",
    answer:
      "Completion accounts disputes arise where the parties disagree on the financial position of the business at the completion date, affecting the price paid. Expert witnesses analyse the accounting policies applied, identify departures from agreed methodology, and quantify the adjustment required to the completion accounts.",
  },
];

const franchiseAgreementBreachFaqs: FAQ[] = [
  {
    question:
      "How is loss calculated when a franchise agreement is wrongfully terminated?",
    answer:
      "The expert calculates the profits the franchisee would have earned for the remainder of the franchise term absent the wrongful termination, based on historic performance, network comparables, and market conditions. Where the franchise was in its early stages, projection methodology and discount rates become more significant.",
  },
  {
    question: "Can a franchisor recover lost royalties from a breaching franchisee?",
    answer:
      "Yes, a franchisor can recover unpaid royalties and the royalties that would have been paid for the remaining term had the franchise continued. Expert witnesses quantify these using the franchisee's actual sales history and, where the franchisee has ceased trading, network comparables.",
  },
];

const employmentContractLossFaqs: FAQ[] = [
  {
    question: "What losses are recoverable for wrongful dismissal?",
    answer:
      "Wrongful dismissal damages are limited to the notice period losses, the salary, bonus, and benefits that would have been earned during the contractual notice period. Expert witnesses calculate these precisely including pension contributions, LTIP vesting, and other contractual benefits.",
  },
  {
    question: "How are restrictive covenant breach losses quantified?",
    answer:
      "Where an employee breaches a non-compete or non-solicit covenant, the employer's loss is the revenue (and profit) diverted to the competing business. Expert witnesses trace and quantify diverted revenue using comparator data and, where available, the competitor's own records.",
  },
];

const jointVentureDisputeFaqs: FAQ[] = [
  {
    question: "How is loss quantified in a joint venture dispute?",
    answer:
      "The expert analyses the JV agreement, financial records, and each party's contributions and distributions, then constructs a but-for model showing what each party would have received had the agreement been honoured. This covers both past underpayments and future lost profits from premature termination.",
  },
  {
    question: "What is the difference between a deadlock and a breach in a JV?",
    answer:
      "A deadlock occurs when the JV parties cannot agree on a decision, without any breach. A breach occurs when one party acts outside the agreement, fails to contribute, or diverts opportunity. Expert witnesses focus on quantifying loss from breach, not deadlock, which is typically a legal/structural issue.",
  },
];

const distributionAgencyAgreementFaqs: FAQ[] = [
  {
    question:
      "What compensation is payable under the Commercial Agents Regulations 1993?",
    answer:
      "Under Regulation 17, a commercial agent whose contract is terminated is entitled to compensation or indemnity. Compensation is based on the value of the agency, typically calculated as 2 years' average annual commission. Expert witnesses calculate this using the agent's commission history and the agency's goodwill value.",
  },
  {
    question:
      "How are lost profits calculated for a distribution agreement breach?",
    answer:
      "The expert calculates the profit the distributor would have made on sales of the product during the remaining agreement term, using historic sales data, market growth rates, and distribution margin. Where the distributor had exclusivity, the expert also addresses the value of the exclusive territory lost.",
  },
];

export const caseTypes: ContentPage[] = [
  {
    slug: "commercial-contract-breach",
    title: "Commercial Contract Breach",
    h1: "Commercial Contract Breach Loss Expert Witness",
    metaTitle:
      "Commercial Contract Breach Loss Expert Witness | ContractLossExpert",
    metaDescription:
      "Contract loss expert witnesses for commercial contract breach claims, lost profits, expectation vs reliance damages, and Hadley v Baxendale remoteness analysis for legal practitioners.",
    paragraphs: [
      "Commercial contract disputes arise across the full spectrum of business trading relationships, from supply and distribution agreements to long-term service contracts, framework arrangements, and bespoke B2B sales contracts. When a party fails to deliver goods, perform services, or honour payment terms, the innocent party's primary remedy is damages measured by the financial loss suffered. A contract loss expert witness analyses the contract terms, trading records, and market context to quantify that loss in a form that satisfies the compensatory principle established in Robinson v Harman [1848] 1 Ex 850.",
      "The choice between expectation loss (lost profits) and reliance loss (wasted expenditure) is a critical strategic and evidential decision in commercial contract claims. Expectation damages place the claimant in the position they would have been in had the contract been performed, typically quantified through a but-for model comparing projected performance with actual results. Reliance damages, available where profits cannot be proved or where the claimant made a bad bargain, recover expenditure incurred in anticipation of performance. Expert witnesses must address both frameworks and explain why the chosen measure is appropriate, with full sensitivity analysis on key assumptions such as margin, volume, and cost allocation.",
      "Every head of loss claimed must satisfy the remoteness test in Hadley v Baxendale [1854] 9 Ex Ch 341. Direct losses arising naturally from the breach fall within the first limb; consequential losses, such as loss of a known follow-on contract, require proof that they were within the reasonable contemplation of both parties at the time of contracting. Expert witnesses structure their analysis to identify which losses pass each limb, address the claimant's duty to mitigate, and produce CPR Part 35 compliant reports capable of withstanding scrutiny in the Commercial Court, arbitration, and expert determination proceedings.",
    ],
    faqs: commercialContractBreachFaqs,
    relatedLinks: [
      { href: "/services", label: "All Expert Witness Services" },
      { href: "/services#lost-profits", label: "Lost Profits Quantification" },
      {
        href: "/guides/lost-profits-but-for-methodology",
        label: "But-For Methodology Guide",
      },
      { href: "/loss-types", label: "Types of Contract Loss" },
    ],
  },
  {
    slug: "construction-quantum-disputes",
    title: "Construction Quantum Disputes",
    h1: "Construction Contract Quantum Expert Witness",
    metaTitle:
      "Construction Contract Quantum Expert Witness | ContractLossExpert",
    metaDescription:
      "Chartered quantity surveyors and forensic accountants for JCT, NEC, and FIDIC quantum claims, loss and expense, prolongation, disruption, variations, and TCC adjudication evidence.",
    paragraphs: [
      "Construction contract disputes are governed by standard form contracts including JCT Design and Build, NEC4 Engineering and Construction Contract, and FIDIC Red Book on international projects. When an employer, contractor, or subcontractor alleges breach, delay, or entitlement to additional payment, the financial value of the claim must be quantified with precision. A construction quantum expert witness, typically a chartered quantity surveyor (MRICS/FRICS) or forensic accountant with construction sector experience, values loss and expense claims, variations, prolongation costs, and disruption losses in accordance with the contract's payment and compensation mechanisms.",
      "Prolongation and disruption are distinct heads of loss that require separate expert analysis. Prolongation covers the extended time-related costs of keeping a site operational beyond the planned completion date, including site management, plant hire, insurance, and preliminaries. Disruption addresses the loss of productivity caused by change events, access restrictions, or cumulative impact of multiple instructions, resulting in work being performed less efficiently than planned. Expert witnesses use programme analysis, measured mile studies, and earned value techniques to quantify each head, distinguishing global claims from individually pleaded and evidenced items.",
      "Construction disputes frequently proceed through statutory adjudication under the Housing Grants, Construction and Regeneration Act 1996 before reaching the Technology and Construction Court (TCC) or arbitration. Quantum experts prepare Scott Schedules itemising each claim, respond to adjudicator directions, and produce joint statements following meetings of experts under CPR Part 35. Whether the forum is a 28-day adjudication or a multi-week TCC trial, the expert's credibility in presenting an objective, well-worked quantum analysis is central to the outcome.",
    ],
    faqs: constructionQuantumDisputesFaqs,
    relatedLinks: [
      { href: "/services", label: "All Expert Witness Services" },
      {
        href: "/services#construction-quantum",
        label: "Construction Quantum Claims",
      },
      {
        href: "/sectors/construction-engineering",
        label: "Construction & Engineering Sector",
      },
      {
        href: "/guides/construction-quantum-expert-guide",
        label: "Construction Quantum Guide",
      },
    ],
  },
  {
    slug: "supply-chain-failure",
    title: "Supply Chain Failure",
    h1: "Supply Chain Failure Contract Loss Expert Witness",
    metaTitle:
      "Supply Chain Failure Contract Loss Expert Witness | ContractLossExpert",
    metaDescription:
      "Expert witnesses for upstream supplier breach claims, causal chain analysis, mitigation, inventory loss, and downstream customer contract losses in commercial litigation.",
    paragraphs: [
      "Modern supply chains are multi-tiered and interdependent. When an upstream supplier breaches a contract, by failing to deliver raw materials, components, or finished goods on time or to specification, the financial consequences often cascade through manufacturing, distribution, and retail operations. A supply chain loss expert witness maps the causal chain from the original breach to each downstream head of loss, establishing that the claimant's financial harm was a direct and foreseeable consequence of the supplier's failure rather than unrelated market conditions or the claimant's own operational decisions.",
      "The claimant's duty to mitigate is particularly significant in supply chain disputes. Expert witnesses assess whether alternative suppliers were reasonably available, at what cost, and within what timeframe. Where mitigation was attempted but only partially successful, the expert quantifies the residual loss net of any savings achieved. Inventory losses, including stock write-offs, obsolescence, and storage costs, are analysed alongside production shutdown losses, calculating lost contribution margin on units that could not be manufactured and sold during the disruption period.",
      "Downstream customer contract losses represent one of the most contested heads in supply chain litigation. Where the supplier knew or should have known that the claimant had customer contracts dependent on timely supply, penalties, cancellations, and lost margin on those contracts may be recoverable under the second limb of Hadley v Baxendale. Expert witnesses review supply agreements, customer correspondence, and historic trading patterns to establish actual or constructive knowledge, then quantify each customer loss with appropriate documentary support. Global supply chain disruption events require careful separation of force majeure impacts from losses attributable to the supplier's own breach.",
    ],
    faqs: supplyChainFailureFaqs,
    relatedLinks: [
      { href: "/services", label: "All Expert Witness Services" },
      {
        href: "/services#supply-chain-loss",
        label: "Supply Chain Loss Analysis",
      },
      {
        href: "/sectors/supply-chain-manufacturing",
        label: "Supply Chain & Manufacturing Sector",
      },
      { href: "/loss-types", label: "Types of Contract Loss" },
    ],
  },
  {
    slug: "professional-negligence-loss",
    title: "Professional Negligence Loss",
    h1: "Professional Negligence Contract Loss Expert Witness",
    metaTitle:
      "Professional Negligence Contract Loss Expert Witness | ContractLossExpert",
    metaDescription:
      "Forensic accountants for accountant, solicitor, and surveyor negligence claims, but-for counterfactuals, loss of chance, and SAAMCo scope of duty analysis for litigation.",
    paragraphs: [
      "Professional negligence claims against accountants, solicitors, surveyors, and other advisers require expert evidence on both liability and quantum. A contract loss expert witness in this context constructs a but-for counterfactual, establishing what the claimant's financial position would have been had the professional performed their retainer competently, and compares it to the actual outcome. This analysis underpins damages in failed transactions, negligent valuations, defective tax advice, and litigation strategy errors where the claimant alleges they would have achieved a better financial result but for the professional's breach of duty.",
      "The SAAMCo principle (South Australia Asset Management Corp v York Montague Ltd [1997] AC 191) fundamentally limits the scope of recoverable loss in professional negligence cases. Damages are confined to losses within the scope of the professional's duty, distinguishing between advisers who provide information (where liability is limited to the additional loss caused by the information being wrong) and those who provide advice on a specific transaction (where a broader range of losses may be recoverable). Expert witnesses must address SAAMCo at the outset of their analysis, identifying which categories of loss fall within and outside the scope of the retainer.",
      "Where the claimant's loss depends on the hypothetical actions of a third party, whether a court would have ruled in their favour, whether a buyer would have completed, or whether planning permission would have been granted, the loss of chance methodology applies. Following Allied Maples Group Ltd v Simmons & Simmons [1995] 1 WLR 1602, the expert quantifies the lost opportunity as a percentage probability multiplied by the full value of the opportunity. Causation between the negligence and the loss must be established on the balance of probabilities for past events, with appropriate discounting for contingent future outcomes. Expert reports address each head of loss separately with transparent assumptions capable of withstanding cross-examination.",
    ],
    faqs: professionalNegligenceLossFaqs,
    relatedLinks: [
      { href: "/services", label: "All Expert Witness Services" },
      {
        href: "/services#professional-negligence-damages",
        label: "Professional Negligence Damages",
      },
      {
        href: "/guides/professional-negligence-loss-quantification",
        label: "Professional Negligence Guide",
      },
      { href: "/glossary", label: "Expert Witness Glossary" },
    ],
  },
  {
    slug: "ip-licence-breach",
    title: "IP Licence Breach",
    h1: "IP Licence Breach Contract Loss Expert Witness",
    metaTitle:
      "IP Licence Breach Contract Loss Expert Witness | ContractLossExpert",
    metaDescription:
      "Expert witnesses for IP licence breach claims, royalty loss quantification, reasonable royalty rates, relief from royalty methodology, and lost sales from IP misuse in disputes.",
    paragraphs: [
      "Intellectual property licence agreements govern the commercial exploitation of patents, trade marks, copyrights, and know-how across technology, media, pharmaceutical, and manufacturing sectors. When a licensee breaches the terms of a licence, by under-reporting sales, exceeding territorial limits, sublicensing without authority, or continuing use after termination, the licensor's financial remedy depends on precise quantification of the royalty shortfall and any additional losses flowing from the breach. A contract loss expert witness calculates the royalties that should have been paid under the contractual rate applied to the licensee's actual usage, with supporting audit of sales records, royalty statements, and third-party data.",
      "Where the contractual royalty rate is disputed or the licence was never properly agreed, expert witnesses perform a reasonable royalty analysis using comparable arm's-length licence transactions as benchmarks. Adjustments are made for exclusivity, territory, field of use, and the stage of IP development. Lost profits from IP misuse, where the licensor would have earned greater returns through direct exploitation or alternative licensing, are quantified separately, with the expert addressing which measure of damages is appropriate under the compensatory principle and any contractual limitations on recovery.",
      "The relief from royalty method provides an alternative valuation framework, estimating the royalty payments the IP owner avoids by owning rather than licensing the intellectual property, discounted to present value. In licence breach cases, this approach can quantify the economic value of the licence that was improperly exploited. Expert witnesses also address loss of exclusivity, passing off damages where applicable, and the interaction between contractual royalty claims and statutory remedies. Reports are structured to support both breach of contract claims and intellectual property infringement proceedings in the High Court (Chancery Division), IPEC, and arbitration.",
    ],
    faqs: ipLicenceBreachFaqs,
    relatedLinks: [
      { href: "/services", label: "All Expert Witness Services" },
      {
        href: "/services#ip-licensing-loss",
        label: "IP & Licensing Loss Quantification",
      },
      {
        href: "/sectors/media-entertainment-ip",
        label: "Media, Entertainment & IP Sector",
      },
      { href: "/case-types", label: "All Case Types" },
    ],
  },
  {
    slug: "earn-out-ma-dispute",
    title: "Earn-Out & M&A Dispute",
    h1: "Earn-Out & M&A Dispute Contract Loss Expert Witness",
    metaTitle:
      "Earn-Out & M&A Dispute Contract Loss Expert Witness | ContractLossExpert",
    metaDescription:
      "Expert witnesses for earn-out calculation disputes, management conduct claims, and completion accounts disagreements in mergers and acquisitions litigation.",
    paragraphs: [
      "Earn-out provisions in share purchase and asset sale agreements tie part of the consideration to post-completion performance, aligning the interests of buyer and seller over an agreed measurement period. Disputes arise when sellers allege that the buyer's conduct, such as diverting resources, changing commercial strategy, integrating the business in a way that suppresses performance, or failing to invest as contemplated, prevented earn-out targets from being achieved. Expert witnesses construct a but-for model showing what the target business would have achieved absent the alleged breach, applying the earn-out formula to quantify the resulting payment shortfall.",
      "Completion accounts disputes present a distinct but related category of M&A quantum work. Where the purchase price is adjusted by reference to the target's financial position at completion, disagreements frequently arise over accounting policies, normalisation adjustments, working capital definitions, and debt items. Expert accountants analyse the completion accounts, the sale and purchase agreement's accounting mechanics, and industry practice to identify departures from the agreed methodology and quantify the price adjustment required. Warranty and indemnity claims for undisclosed liabilities may run in parallel, requiring separate loss quantification.",
      "M&A disputes demand experts who understand transaction structures, locked-box versus completion accounts mechanisms, and the interaction between contractual warranties and general damages claims. Financial due diligence records, management accounts, and post-completion trading data form the evidential foundation. Expert reports address causation between the alleged conduct and the financial outcome, apply appropriate discount rates to deferred consideration, and consider the seller's duty to mitigate by taking reasonable steps to maximise earn-out performance where the agreement imposes such obligations.",
    ],
    faqs: earnOutMaDisputeFaqs,
    relatedLinks: [
      { href: "/services", label: "All Expert Witness Services" },
      { href: "/services#lost-profits", label: "Lost Profits Quantification" },
      { href: "/how-to-instruct", label: "How to Instruct an Expert" },
      { href: "/qualifications", label: "Expert Qualifications" },
    ],
  },
  {
    slug: "franchise-agreement-breach",
    title: "Franchise Agreement Breach",
    h1: "Franchise Agreement Breach Contract Loss Expert Witness",
    metaTitle:
      "Franchise Agreement Breach Contract Loss Expert Witness | ContractLossExpert",
    metaDescription:
      "Contract loss expert witnesses for franchisor and franchisee breach claims, wrongful termination, lost franchise profits, royalty recovery, and network loss analysis in disputes.",
    paragraphs: [
      "Franchise agreements create long-term commercial relationships in which the franchisor licenses its brand, systems, and know-how in return for initial fees and ongoing royalties. Breach can arise on either side: franchisors may fail to provide agreed support, protect territory exclusivity, or maintain brand standards; franchisees may default on royalty payments, operate outside their territory, or compete with the network. When a franchise is wrongfully terminated or repudiated, the innocent party's loss requires expert quantification based on historic unit performance, network comparables, and the remaining contractual term.",
      "For franchisees facing wrongful termination, the expert calculates the profits that would have been earned for the balance of the franchise term absent the breach. Early-stage franchises present particular challenges, requiring robust projection methodology, sensitivity analysis on ramp-up assumptions, and benchmarking against comparable outlets in the network. Discount rates reflect the risk profile of projected cash flows. Where the franchisee has mitigated by establishing an independent business, the expert addresses the extent to which alternative income reduces the recoverable loss.",
      "Franchisors pursuing breaching franchisees seek recovery of unpaid royalties and the royalties that would have been payable for the remaining term had the franchise continued in compliance. Expert witnesses analyse point-of-sale data, management accounts, and mystery shopping or audit evidence to establish actual sales volumes and royalty calculations. Network-wide impact analysis may be relevant where a franchisee's breach affects other outlets or brand value. Reports address both past arrears and future royalty streams, with clear separation of heads of loss and application of contractual and common law remedies.",
    ],
    faqs: franchiseAgreementBreachFaqs,
    relatedLinks: [
      { href: "/services", label: "All Expert Witness Services" },
      { href: "/services#lost-profits", label: "Lost Profits Quantification" },
      { href: "/sectors/retail-consumer-goods", label: "Retail & Consumer Goods" },
      { href: "/contact", label: "Instruct an Expert Witness" },
    ],
  },
  {
    slug: "employment-contract-loss",
    title: "Employment Contract Loss",
    h1: "Employment Contract Loss Expert Witness",
    metaTitle:
      "Employment Contract Loss Expert Witness | ContractLossExpert",
    metaDescription:
      "Financial experts for wrongful dismissal, bonus and incentive loss, garden leave disputes, and restrictive covenant breach quantification in employment contract claims.",
    paragraphs: [
      "Employment contract disputes involving senior executives, sales directors, and financial professionals frequently require expert evidence on the quantification of financial loss. Wrongful dismissal claims in the High Court (where contractual damages exceed the employment tribunal jurisdiction) focus on losses during the contractual notice period, salary, guaranteed and discretionary bonus, pension contributions, LTIP vesting, car allowance, and other benefits that would have been received but for the employer's repudiation of the contract. Expert witnesses calculate these components precisely, addressing the contractual mechanisms governing bonus entitlement and the evidential burden on each party.",
      "Restrictive covenant breach claims require a different analytical approach. Where a former employee breaches non-compete, non-solicit, or non-dealing covenants, the employer's loss is the revenue and profit diverted to the competing business or poached from the employer's client base. Expert witnesses trace diverted transactions using CRM data, client lists, comparator market analysis, and, where disclosed, the competitor's own financial records. The analysis distinguishes between revenue that would have been lost in any event and revenue directly attributable to the covenant breach, applying appropriate profit margins to arrive at the net loss figure.",
      "Garden leave disputes, bonus forfeiture clauses, and long-term incentive plan termination raise additional quantum issues. Expert evidence may address whether the employer acted in breach by excluding the employee from bonus pools or accelerating forfeiture provisions, and quantify the financial impact. While employment tribunal claims for unfair dismissal follow a different remedial framework, contractual claims in the civil courts and commercial arbitration demand the same rigorous but-for analysis applied in general commercial litigation, adapted to the specific compensation structures found in executive service agreements.",
    ],
    faqs: employmentContractLossFaqs,
    relatedLinks: [
      { href: "/services", label: "All Expert Witness Services" },
      {
        href: "/services#consequential-loss",
        label: "Consequential Loss Assessment",
      },
      { href: "/how-to-instruct", label: "How to Instruct an Expert" },
      { href: "/qualifications", label: "Expert Qualifications" },
    ],
  },
  {
    slug: "joint-venture-dispute",
    title: "Joint Venture Dispute",
    h1: "Joint Venture Dispute Contract Loss Expert Witness",
    metaTitle:
      "Joint Venture Dispute Contract Loss Expert Witness | ContractLossExpert",
    metaDescription:
      "Expert witnesses for joint venture breach claims, profit share disputes, contribution obligations, exit and dilution losses, and but-for quantification in JV litigation.",
    paragraphs: [
      "Joint venture agreements govern the collaboration between two or more parties in a shared enterprise, allocating contributions, management rights, profit shares, and exit mechanisms. When one party alleges that another has breached the JV agreement, by failing to contribute capital or resources, diverting opportunities, mismanaging the venture, or acting in self-interest contrary to the agreement, the financial consequences must be quantified with reference to the specific contractual allocation of risk and reward. Expert witnesses analyse the JV agreement, shareholders' or participants' agreements, management accounts, and distribution records to establish the financial impact of the alleged breach.",
      "Profit share disputes require the expert to reconstruct what each party should have received under the agreement compared to what was actually distributed. This involves analysing revenue recognition policies, cost allocations between the JV and its parents, transfer pricing on intra-group transactions, and any management charges that may have affected distributable profits. Where the JV has been prematurely terminated or one party has been improperly excluded, future lost profit shares are projected using historic performance and agreed or market-based growth assumptions, discounted to present value.",
      "Expert witnesses must distinguish between loss arising from breach and losses arising from deadlock, a situation where parties cannot agree on a decision without either party being in breach. Deadlock resolution mechanisms such as Russian roulette clauses, Texas shoot-out provisions, or buy-out rights are legal and structural matters; quantum experts focus on quantifying the financial loss caused by actionable breach, including past underpayments, diverted opportunities, and the diminution in value of a party's interest resulting from the other party's conduct. Reports support claims in the Commercial Court, LCIA and ICC arbitration, and expert determination under JV dispute resolution clauses.",
    ],
    faqs: jointVentureDisputeFaqs,
    relatedLinks: [
      { href: "/services", label: "All Expert Witness Services" },
      { href: "/services#lost-profits", label: "Lost Profits Quantification" },
      {
        href: "/services#expert-determination",
        label: "Expert Determination & ADR",
      },
      { href: "/loss-types", label: "Types of Contract Loss" },
    ],
  },
  {
    slug: "distribution-agency-agreement",
    title: "Distribution & Agency Agreement",
    h1: "Distribution & Agency Agreement Breach Expert Witness",
    metaTitle:
      "Distribution & Agency Agreement Breach Expert Witness | ContractLossExpert",
    metaDescription:
      "Expert witnesses for distribution and commercial agency claims, Regulation 17 compensation, lost commission, pipeline losses, and exclusivity breach quantification under English law.",
    paragraphs: [
      "Distribution and agency agreements govern the relationship between principals and intermediaries who sell products on their behalf. The Commercial Agents (Council Directive) Regulations 1993 impose mandatory compensation or indemnity rights on commercial agents upon termination, calculated by reference to the value of the agency and the agent's commission history. Regulation 17 compensation is typically based on two years' average annual commission, though the precise methodology depends on whether the agent elects compensation or indemnity and the specific circumstances of termination. Expert witnesses calculate these statutory entitlements alongside any contractual damages for breach of the agency or distribution agreement.",
      "Where a principal wrongfully terminates a distribution agreement or breaches exclusivity, territory, or minimum purchase obligations, the distributor's contractual loss includes the profit that would have been earned on product sales during the remaining agreement term. Expert witnesses use historic sales data, market growth projections, and distribution margin analysis to construct the but-for revenue and profit model. Pipeline losses, orders in progress or contracts at an advanced stage of negotiation at the date of termination, require separate identification and quantification with appropriate probability weighting where conversion was not certain.",
      "Exclusivity is often the most valuable element of a distribution arrangement. Where a principal appoints a competing distributor in breach of exclusive territory rights, or fails to prevent grey market imports that undermine the distributor's investment, the expert addresses the value of the exclusive territory lost and any marketing or infrastructure expenditure wasted in reliance on the exclusivity promise. Expert reports integrate statutory agency compensation with contractual heads of loss, address mitigation through alternative product lines or territories, and apply Hadley v Baxendale remoteness principles to consequential losses such as customer relationship damage and reputational harm within the supply network.",
    ],
    faqs: distributionAgencyAgreementFaqs,
    relatedLinks: [
      { href: "/services", label: "All Expert Witness Services" },
      { href: "/services#lost-profits", label: "Lost Profits Quantification" },
      { href: "/glossary", label: "Commercial Agents Regulations" },
      { href: "/contact", label: "Instruct an Expert Witness" },
    ],
  },
];

export const caseTypeSlugs: string[] = caseTypes.map((c) => c.slug);

export function getCaseType(slug: string): ContentPage | undefined {
  return caseTypes.find((c) => c.slug === slug);
}
