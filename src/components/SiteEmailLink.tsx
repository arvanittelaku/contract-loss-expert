import type { ComponentPropsWithoutRef } from "react";
import { SITE_EMAIL } from "@/lib/site";

type SiteEmailLinkProps = ComponentPropsWithoutRef<"a">;

/** Clickable company contact email, single source via SITE_EMAIL in @/lib/site */
export function SiteEmailLink({ className = "", ...props }: SiteEmailLinkProps) {
  return (
    <a href={`mailto:${SITE_EMAIL}`} className={className} {...props}>
      {SITE_EMAIL}
    </a>
  );
}
