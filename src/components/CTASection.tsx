"use client";

import Link from "next/link";
import { SiteEmailLink } from "@/components/SiteEmailLink";
import { trackConversionEvent } from "@/lib/analytics";

interface CTASectionProps {
  title?: string;
  description?: string;
}

export function CTASection({
  title = "Need a Contract Loss Expert Witness?",
  description = "Share your case details and we will connect you with a qualified forensic accountant or economic damages specialist. Response within one business day.",
}: CTASectionProps) {
  return (
    <section className="border-y border-border bg-primary py-14 md:py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="max-w-2xl">
          <h2 className="font-display text-2xl font-semibold text-white sm:text-3xl">
            {title}
          </h2>
          <p className="mt-4 text-white/80">{description}</p>
          <Link
            href="/contact"
            onClick={() =>
              trackConversionEvent("cta_click", { location: "cta_section" })
            }
            className="mt-8 inline-flex min-h-[44px] items-center justify-center rounded-sm bg-accent px-8 py-3 font-semibold text-white transition-colors hover:bg-[#a34a32]"
          >
            Get Started
          </Link>
          <p className="mt-6 text-sm text-white/70">
            Or email{" "}
            <SiteEmailLink className="font-medium text-white underline decoration-white/40 underline-offset-2 hover:decoration-white" />
          </p>
        </div>
      </div>
    </section>
  );
}
