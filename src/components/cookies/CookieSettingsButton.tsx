"use client";

import { useCookieConsentOptional } from "./CookieConsentContext";

/**
 * Footer control to reopen cookie preferences at any time (GDPR requirement).
 */
export function CookieSettingsButton() {
  const ctx = useCookieConsentOptional();
  if (!ctx) return null;

  return (
    <button
      type="button"
      onClick={ctx.openPreferences}
      className="text-sm text-white/60 transition-colors hover:text-white hover:underline"
    >
      Cookie Settings
    </button>
  );
}
