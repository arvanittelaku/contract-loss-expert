import Link from "next/link";
import type { RelatedLink } from "@/lib/seo-internal-links";

interface RelatedLinksProps {
  links: RelatedLink[];
  title?: string;
}

export function RelatedLinks({
  links,
  title = "Related Resources",
}: RelatedLinksProps) {
  if (links.length === 0) return null;

  return (
    <nav
      className="mt-10 rounded-[8px] border border-border bg-section-alt p-6"
      aria-label={title}
    >
      <h2 className="text-lg font-semibold text-heading">{title}</h2>
      <ul className="mt-3 grid gap-2 sm:grid-cols-2">
        {links.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className="text-sm text-accent hover:underline"
            >
              {link.label} →
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
