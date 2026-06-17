export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ||
  "https://www.contractlossexpert.com";

export const SITE_NAME = "ContractLossExpert";
export const SITE_EMAIL = "contact@contractlossexpert.com";
export const LINKEDIN_URL =
  "https://www.linkedin.com/company/contract-loss-expert";

export const COLORS = {
  primary: "#1E2D3D",
  accent: "#1565C0",
  highlight: "#F59E0B",
  background: "#FFFFFF",
  sectionAlt: "#F8FAFC",
  border: "#E2E8F0",
  heading: "#1E2D3D",
  body: "#374151",
} as const;
