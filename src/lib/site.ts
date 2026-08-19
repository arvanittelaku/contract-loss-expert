export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ||
  "https://www.contractlossexpert.com";

export const SITE_NAME = "ContractLossExpert";
export const SITE_EMAIL = "contact@contractlossexpert.com";
export const LINKEDIN_URL =
  "https://www.linkedin.com/company/contract-loss-expert";

export const COLORS = {
  primary: "#1A2E1A",
  accent: "#C45C3E",
  highlight: "#D4A853",
  background: "#FAF7F2",
  sectionAlt: "#F5F0E8",
  border: "#DDD5C8",
  heading: "#1A2E1A",
  body: "#3D3D3D",
} as const;
