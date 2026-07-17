import { readStoredConsent } from "@/lib/cookies/storage";

type ConversionEvent =
  | "contact_form_start"
  | "form_submit_success"
  | "thank_you_page_view"
  | "cta_click";

/** Fire GA4 events only when analytics consent has been granted. */
export function trackConversionEvent(
  eventName: ConversionEvent,
  params?: Record<string, string>
): void {
  if (typeof window === "undefined") return;

  const stored = readStoredConsent();
  if (!stored?.analytics) return;

  const gtag = (window as Window & { gtag?: (...args: unknown[]) => void }).gtag;
  if (!gtag) return;

  gtag("event", eventName, params);
}
