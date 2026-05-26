import Link from "next/link";
import { SiteEmailLink } from "@/components/SiteEmailLink";

interface CTASectionProps {
  title?: string;
  description?: string;
}

export function CTASection({
  title = "Ready to Instruct a Contract Loss Expert Witness?",
  description = "Submit your case details and we will match you with a qualified UK forensic accountant, quantum surveyor, or economic damages specialist. CPR Part 35 compliant reports. Response within 1 business day.",
}: CTASectionProps) {
  return (
    <section className="bg-accent py-14 md:py-16">
      <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-white sm:text-3xl">{title}</h2>
        <p className="mx-auto mt-4 max-w-2xl text-white/90">{description}</p>
        <Link
          href="/contact"
          className="mt-8 inline-flex min-h-[44px] items-center justify-center rounded bg-white px-8 py-3 font-semibold text-accent transition-colors hover:bg-white/90"
        >
          Instruct an Expert Witness
        </Link>
        <p className="mt-6 text-sm text-white/90">
          Or email{" "}
          <SiteEmailLink className="font-semibold text-white underline decoration-white/50 underline-offset-2 hover:decoration-white" />
        </p>
      </div>
    </section>
  );
}
