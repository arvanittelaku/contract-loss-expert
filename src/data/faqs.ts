import type { FAQ } from "./types";

export const faqItems: FAQ[] = [
  {
    question: "What is a contract loss expert witness?",
    answer:
      "A contract loss expert witness is a qualified financial professional — typically a forensic accountant, chartered quantity surveyor, or economic damages specialist — retained to provide an independent, court-admissible opinion on the financial losses suffered as a result of a breach of contract. Their role is to quantify the loss in a way that can withstand scrutiny, cross-examination, and the legal tests of causation, remoteness under Hadley v Baxendale, and mitigation. Expert reports must comply with CPR Part 35, and the expert owes their primary duty to the court, not to the instructing solicitor or their client.",
  },
  {
    question: "What is the but-for methodology?",
    answer:
      "The but-for test asks: but for the breach, what would the financial position of the claimant have been? Expert witnesses construct a counterfactual financial model using pre-breach data, market conditions, and management projections to establish this baseline, then compare it to the actual post-breach performance. The difference represents the net loss of expected profit — the primary measure of expectation damages under Robinson v Harman [1848]. Courts expect transparent assumptions, sensitivity analysis on key variables, and a clear causal link between the breach and the financial shortfall.",
  },
  {
    question:
      "What is Hadley v Baxendale and how does it affect my claim?",
    answer:
      "Hadley v Baxendale [1854] establishes the two-limb rule governing remoteness of damage in contract claims. Limb 1 covers losses arising naturally from the breach in the ordinary course of things; Limb 2 covers losses within the reasonable contemplation of both parties at the time of contracting as the probable result of the breach. Losses that fail both limbs — such as follow-on contract losses where the defendant was unaware of downstream dependencies — are not recoverable. Expert witnesses must structure their loss analysis to address which limb each category of loss falls under and whether it passes the remoteness test.",
  },
  {
    question:
      "What is the difference between expectation loss and reliance loss?",
    answer:
      "Expectation loss (lost profits) places the claimant in the position they would have been in had the contract been performed — it is the default measure where profits can be calculated, as established in Robinson v Harman [1848]. Reliance loss (wasted expenditure) returns the claimant to the position they would have been in had the contract never been made, recovering expenditure incurred in reliance on the contract under Anglia Television Ltd v Reed [1972]. The claimant may elect reliance damages where expectation loss cannot be proved, or where they made a bad bargain that the defendant can establish on the balance of probabilities.",
  },
  {
    question: "What is wasted expenditure and when can I claim it?",
    answer:
      "Wasted expenditure is expenditure incurred by the claimant in reliance on the contract being performed that has been wasted as a result of the breach — it is the quantification of reliance loss. Under Anglia Television Ltd v Reed [1972], pre-contractual expenditure is also recoverable if it was within the contemplation of both parties at the time of contracting. It is typically claimed where lost profits cannot be calculated with sufficient certainty, or where the claimant elects reliance damages under CCC Films v Impact Quadrant [1985]. The defendant may raise the bad bargain defence, arguing that even if the contract had been performed, the claimant would not have recovered its expenditure.",
  },
  {
    question: "What is the duty to mitigate in contract loss claims?",
    answer:
      "The claimant must take reasonable steps to minimise their loss following a breach of contract — failure to mitigate reduces the recoverable damages. Expert witnesses assess what mitigation steps were available to the claimant, whether those steps were taken, and what loss would have been avoided by proper mitigation. Common examples include sourcing from alternative suppliers after a supply failure, redeploying staff after wrongful termination, or taking reasonable steps to limit downstream customer losses. The burden is on the defendant to prove that the claimant failed to mitigate, but the expert's analysis should proactively address mitigation in the loss quantification.",
  },
  {
    question: "What is consequential loss and how is it recovered?",
    answer:
      "Consequential loss comprises additional losses beyond the direct loss of bargain on the contract itself — such as loss of a third-party contract, downstream customer losses, or reputational harm. Such losses must pass the Hadley v Baxendale [1854] remoteness test: they must either arise naturally from the breach (Limb 1) or have been within the reasonable contemplation of both parties at contract formation (Limb 2). Expert witnesses identify and quantify each head of consequential loss separately, with a distinct remoteness analysis applied to each category. Losses where the defendant had no knowledge of downstream dependencies will typically fail the remoteness test and are not recoverable.",
  },
  {
    question:
      "How much does a contract loss expert witness cost in the UK?",
    answer:
      "UK contract loss expert witnesses typically charge £250–£600 per hour, with senior specialists and leading experts in High Court or international arbitration matters charging £650–£1,000 or more. A standard loss quantification report typically costs £5,000–£15,000, while complex multi-head commercial reports range from £15,000–£50,000 or above. Construction quantum schedules typically cost £8,000–£30,000 depending on complexity. Total engagement costs depend on the size of the dispute, volume of financial records, number of heads of loss, and whether oral evidence is required.",
  },
  {
    question:
      "Should I use a Single Joint Expert or party-appointed expert?",
    answer:
      "A Single Joint Expert (SJE) is appointed jointly by both parties (or directed by the court) to provide one independent opinion on quantum, reducing costs and narrowing issues under CPR Part 35. Party-appointed experts (PAEs) are instructed separately by each side and may produce competing reports, followed by joint expert meetings and a joint statement identifying agreed and disputed issues. SJE appointment is appropriate where the quantum issues are relatively straightforward and both parties are willing to share instruction costs. PAE appointment is more common in high-value commercial disputes where each party wants independent expert analysis to test the other's case.",
  },
  {
    question:
      "What credentials should a contract loss expert witness hold?",
    answer:
      "For financial and commercial contract losses, look for ACA or FCA (ICAEW), ACCA or FCCA, CFA, or CFE credentials with active forensic accounting practice. For construction quantum disputes, MRICS or FRICS (Royal Institution of Chartered Surveyors) and FCIArb or MCIArb (Chartered Institute of Arbitrators) are the relevant qualifications. Beyond credentials, the expert should have 10 or more years of experience quantifying contract losses, a track record of CPR Part 35 compliant reports, prior court or arbitration testimony, and professional indemnity insurance. Sector expertise is equally important — a construction quantum expert is not interchangeable with a software contract loss specialist.",
  },
  {
    question: "How early should I instruct a contract loss expert?",
    answer:
      "Instruct a contract loss expert as early as possible — ideally at the pre-action protocol stage or immediately upon issuing proceedings — to allow sufficient time for document review, loss modelling, and report preparation before disclosure deadlines. Late instruction risks an incomplete analysis, rushed assumptions, and a report that cannot withstand scrutiny under cross-examination. Early instruction also allows the expert to advise on what additional documents should be requested from the other side and whether the loss claim is viable before significant costs are incurred. For urgent adjudication or interim applications, experts can often provide preliminary quantum assessments within days of instruction.",
  },
  {
    question:
      "What documents should I provide when instructing an expert?",
    answer:
      "Provide the contract and all amendments, financial statements and management accounts for the relevant periods, management forecasts and business plans, correspondence relating to the breach, and any prior quantum assessments or without-prejudice settlement discussions on quantum. For construction disputes, also provide the programme, extension of time notices, site records, and variation instructions. For professional negligence claims, provide the engagement letter, the advice given, and records showing the actual financial outcome. A clear letter of instruction setting out the specific questions to be addressed, the legal framework, and the timetable is essential under CPR Part 35.",
  },
];
