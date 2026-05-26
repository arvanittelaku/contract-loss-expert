export interface Expert {
  name: string;
  jobTitle: string;
  description: string;
  credentials: string[];
}

export const experts: Expert[] = [
  {
    name: "James Mitchell",
    jobTitle: "Forensic Accountant & Contract Loss Expert Witness",
    description:
      "James is a Fellow of the Institute of Chartered Accountants in England and Wales (FCA) with over 18 years of experience quantifying financial losses in commercial contract disputes. He specialises in lost profits analysis, wasted expenditure claims, and consequential loss quantification across supply chain, distribution, and professional services sectors. James has prepared CPR Part 35 compliant expert reports for the High Court Commercial Court and given oral evidence in LCIA and ICC arbitration. His reports are structured around the but-for methodology with transparent assumptions and sensitivity analysis designed to withstand cross-examination.",
    credentials: [
      "FCA (Fellow, ICAEW)",
      "CFA (Chartered Financial Analyst)",
      "CFE (Certified Fraud Examiner)",
      "CPR Part 35 expert witness",
      "LCIA & ICC arbitration experience",
    ],
  },
  {
    name: "Sarah Whitfield",
    jobTitle: "Chartered Quantity Surveyor & Construction Quantum Expert",
    description:
      "Sarah is a Fellow of the Royal Institution of Chartered Surveyors (FRICS) and a Fellow of the Chartered Institute of Arbitrators (FCIArb) with 15 years of experience in construction contract quantum. She quantifies loss and expense, prolongation, disruption, and variation claims under JCT, NEC, and FIDIC contracts, and prepares Scott Schedules for Technology and Construction Court proceedings. Sarah regularly acts as a quantum expert in adjudication under the Housing Grants, Construction and Regeneration Act 1996 and provides expert determination services under RICS schemes. Her expertise spans commercial building, infrastructure, and engineering projects across the UK.",
    credentials: [
      "FRICS (Fellow, RICS)",
      "FCIArb (Fellow, CIArb)",
      "PQS (Professional Quantity Surveyor)",
      "JCT, NEC & FIDIC specialist",
      "TCC & adjudication expert witness",
    ],
  },
  {
    name: "Dr Oliver Chen",
    jobTitle: "Economic Damages Specialist & Expert Witness",
    description:
      "Dr Chen holds a PhD in Economics and is a Certified Valuation Analyst (CVA) with 12 years of experience quantifying economic damages in complex commercial disputes. He specialises in professional negligence loss quantification, IP and licensing royalty analysis, earn-out and M&A dispute valuation, and loss of chance calculations under the Allied Maples principle. Dr Chen applies rigorous econometric and financial modelling techniques to construct but-for counterfactuals and reasonable royalty analyses. He has acted as an expert witness in High Court professional negligence claims and international arbitration, with particular expertise in technology, media, and financial services sectors.",
    credentials: [
      "PhD Economics",
      "CVA (Certified Valuation Analyst)",
      "CFA (Chartered Financial Analyst)",
      "Loss of chance & SAAMCo specialist",
      "IP licensing & M&A dispute quantification",
    ],
  },
];
