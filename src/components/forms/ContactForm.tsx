"use client";

import { useState, FormEvent, useRef } from "react";
import { useRouter } from "next/navigation";
import { SiteEmailLink } from "@/components/SiteEmailLink";
import { PhoneField, formatPhoneFromFormData } from "./PhoneField";
import { trackConversionEvent } from "@/lib/analytics";

const lossTypes = [
  "Lost Profits",
  "Wasted Expenditure",
  "Consequential Loss",
  "Construction Quantum",
  "Professional Negligence Loss",
  "IP Licence Loss",
  "Earn-Out Dispute",
  "Employment Contract Loss",
  "Distribution/Agency Loss",
  "Other",
];

const sectors = [
  "Construction / Engineering",
  "Technology / Software",
  "Supply Chain / Manufacturing",
  "Financial Services / Banking",
  "Retail / Consumer Goods",
  "Professional Services",
  "Energy / Utilities",
  "Media / Entertainment / IP",
  "Other",
];

const courts = [
  "High Court (Commercial Court)",
  "High Court (TCC)",
  "County Court",
  "Arbitration (LCIA/ICC/UNCITRAL)",
  "Adjudication",
  "Tribunal",
  "Other",
];

const claimValues = [
  "Under £100k",
  "£100k–£500k",
  "£500k–£5M",
  "£5M–£50M",
  "Over £50M",
  "Unknown",
];

const urgencyOptions = [
  "Urgent (within 5 days)",
  "Within 2 weeks",
  "Within 1 month",
  "Planning ahead",
];

export function ContactForm() {
  const router = useRouter();
  const [status, setStatus] = useState<"idle" | "loading" | "error">("idle");
  const formStarted = useRef(false);

  function markFormStarted() {
    if (formStarted.current) return;
    formStarted.current = true;
    trackConversionEvent("contact_form_start");
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    const form = e.currentTarget;
    const data = new FormData(form);

    const fullName = String(data.get("name") || "").trim();
    const email = String(data.get("email") || "").trim();
    const phone = formatPhoneFromFormData(data);

    if (!fullName || !email) {
      setStatus("error");
      return;
    }

    const payload = {
      fullName,
      email,
      phone,
      organisation: String(data.get("organisation") || "").trim(),
      lossType: String(data.get("lossType") || "").trim(),
      sector: String(data.get("sector") || "").trim(),
      court: String(data.get("court") || "").trim(),
      expertType: String(data.get("expertType") || "").trim(),
      claimValue: String(data.get("claimValue") || "").trim(),
      deadline: String(data.get("deadline") || "").trim(),
      urgency: String(data.get("urgency") || "").trim(),
      description: String(data.get("description") || "").trim(),
    };

    try {
      const res = await fetch("/api/submit-lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (res.ok) {
        trackConversionEvent("form_submit_success");
        router.push("/thank-you");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  const inputClass =
    "w-full min-h-[44px] min-w-0 rounded border border-border px-3 py-2 text-base text-body focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20 sm:text-sm";
  const labelClass = "mb-1 block text-sm font-medium text-heading";

  return (
    <form
      onSubmit={handleSubmit}
      onFocus={markFormStarted}
      className="min-w-0 space-y-5"
    >
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div className="min-w-0">
          <label htmlFor="name" className={labelClass}>
            Full Name *
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            autoComplete="name"
            className={inputClass}
          />
        </div>
        <div className="min-w-0">
          <label htmlFor="organisation" className={labelClass}>
            Law Firm / Organisation *
          </label>
          <input
            id="organisation"
            name="organisation"
            type="text"
            required
            autoComplete="organization"
            className={inputClass}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div className="min-w-0">
          <label htmlFor="email" className={labelClass}>
            Email *
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            autoComplete="email"
            className={inputClass}
          />
        </div>
        <div className="min-w-0">
          <PhoneField inputClass={inputClass} labelClass={labelClass} />
        </div>
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div className="min-w-0">
          <label htmlFor="lossType" className={labelClass}>
            Loss Type
          </label>
          <select id="lossType" name="lossType" className={inputClass}>
            {lossTypes.map((t) => (
              <option key={t} value={t}>
                {t}
              </option>
            ))}
          </select>
        </div>
        <div className="min-w-0">
          <label htmlFor="sector" className={labelClass}>
            Sector
          </label>
          <select id="sector" name="sector" className={inputClass}>
            {sectors.map((s) => (
              <option key={s} value={s}>
                {s}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div className="min-w-0">
          <label htmlFor="court" className={labelClass}>
            Court / Forum
          </label>
          <select id="court" name="court" className={inputClass}>
            {courts.map((c) => (
              <option key={c} value={c}>
                {c}
              </option>
            ))}
          </select>
        </div>
        <div className="min-w-0">
          <label htmlFor="expertType" className={labelClass}>
            SJE or party-appointed
          </label>
          <select id="expertType" name="expertType" className={inputClass}>
            <option value="SJE">SJE</option>
            <option value="Party-appointed">Party-appointed</option>
            <option value="Not decided">Not decided</option>
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div className="min-w-0">
          <label htmlFor="claimValue" className={labelClass}>
            Approximate claim value
          </label>
          <select id="claimValue" name="claimValue" className={inputClass}>
            {claimValues.map((v) => (
              <option key={v} value={v}>
                {v}
              </option>
            ))}
          </select>
        </div>
        <div className="min-w-0">
          <label htmlFor="deadline" className={labelClass}>
            Hearing / deadline date
          </label>
          <input
            id="deadline"
            name="deadline"
            type="date"
            className={inputClass}
          />
        </div>
      </div>

      <div className="min-w-0">
        <label htmlFor="urgency" className={labelClass}>
          Urgency
        </label>
        <select id="urgency" name="urgency" className={inputClass}>
          {urgencyOptions.map((u) => (
            <option key={u} value={u}>
              {u}
            </option>
          ))}
        </select>
      </div>

      <div className="min-w-0">
        <label htmlFor="description" className={labelClass}>
          Brief case description
        </label>
        <textarea
          id="description"
          name="description"
          rows={5}
          className={`${inputClass} min-h-[120px] resize-y`}
        />
      </div>

      {status === "error" && (
        <p className="text-sm text-red-600" role="alert">
          Something went wrong. Please try again or email{" "}
          <SiteEmailLink className="underline" />.
        </p>
      )}

      <button
        type="submit"
        disabled={status === "loading"}
        className="flex min-h-[44px] w-full items-center justify-center rounded bg-accent px-6 py-3 text-base font-semibold text-white transition-colors hover:bg-[#0d47a1] disabled:opacity-60 sm:w-auto sm:text-sm"
      >
        {status === "loading" ? "Submitting…" : "Instruct an Expert Witness"}
      </button>
    </form>
  );
}
