import { caseTypeSlugs } from "@/data/case-types";
import { sectorSlugs } from "@/data/sectors";
import { guideSlugs } from "@/data/guides";

/** Canonical host for sitemap and robots, must match middleware www redirect */
export const CANONICAL_HOST =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ||
  "https://www.contractlossexpert.com";

/**
 * Indexable static marketing routes.
 * Excluded: /thank-you, /privacy, /terms
 */
export const APP_STATIC_PATHS = [
  "/",
  "/services",
  "/loss-types",
  "/case-types",
  "/sectors",
  "/what-is-a-contract-loss-expert-witness",
  "/qualifications",
  "/how-to-instruct",
  "/contact",
  "/guides",
  "/glossary",
  "/cookies",
] as const;

/** Paths that exist but must not appear in the sitemap */
export const SITEMAP_EXCLUDED_PATHS = [
  "/thank-you",
  "/privacy",
  "/terms",
] as const;

export interface PublicUrlInventory {
  allPaths: string[];
  allUrls: string[];
}

export function buildPublicUrlInventory(): PublicUrlInventory {
  const dynamicPaths = [
    ...caseTypeSlugs.map((slug) => `/case-types/${slug}`),
    ...sectorSlugs.map((slug) => `/sectors/${slug}`),
    ...guideSlugs.map((slug) => `/guides/${slug}`),
  ];

  const allPaths = [
    ...new Set([...APP_STATIC_PATHS, ...dynamicPaths]),
  ].sort((a, b) => a.localeCompare(b));

  return {
    allPaths,
    allUrls: allPaths.map((path) => toAbsoluteUrl(path)),
  };
}

export function toAbsoluteUrl(path: string): string {
  if (path === "/") return CANONICAL_HOST;
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return `${CANONICAL_HOST}${normalized}`;
}

export function getSitemapChangefreq(path: string): string {
  if (path === "/") return "weekly";
  if (
    path.startsWith("/guides/") ||
    path.startsWith("/case-types/") ||
    path.startsWith("/sectors/")
  ) {
    return "monthly";
  }
  return "monthly";
}

export function getSitemapPriority(path: string): number {
  if (path === "/") return 1.0;
  if (path === "/services" || path === "/loss-types") return 0.95;
  if (path === "/case-types") return 0.92;
  if (path === "/sectors") return 0.9;
  if (path === "/what-is-a-contract-loss-expert-witness") return 0.9;
  if (
    path === "/qualifications" ||
    path === "/how-to-instruct" ||
    path === "/contact"
  ) {
    return 0.88;
  }
  if (path.startsWith("/case-types/")) return 0.88;
  if (path === "/guides") return 0.87;
  if (path.startsWith("/sectors/")) return 0.86;
  if (path.startsWith("/guides/")) return 0.8;
  if (path === "/glossary") return 0.75;
  if (path === "/cookies") return 0.6;
  return 0.7;
}
