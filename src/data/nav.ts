import { services } from "./services";
import { caseTypes } from "./case-types";
import { sectors } from "./sectors";

export const navServiceLinks = services.map((s) => ({
  href: `/services#${s.id}`,
  label: s.name,
}));

export const navLossTypeLinks = [
  { href: "/loss-types", label: "All Types of Contract Loss" },
  { href: "/loss-types#expectation-loss", label: "Expectation Loss (Lost Profits)" },
  { href: "/loss-types#reliance-loss", label: "Reliance Loss (Wasted Expenditure)" },
  { href: "/loss-types#consequential-loss", label: "Consequential Loss" },
];

export const navCaseTypeLinks = caseTypes.map((c) => ({
  href: `/case-types/${c.slug}`,
  label: c.title,
}));

export const navSectorLinks = sectors.map((s) => ({
  href: `/sectors/${s.slug}`,
  label: s.title,
}));

export const navResourceLinks = [
  { href: "/guides", label: "Guides" },
  { href: "/how-to-instruct", label: "How to Instruct" },
  { href: "/qualifications", label: "Qualifications" },
];
