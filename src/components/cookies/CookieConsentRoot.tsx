"use client";

import { CookieConsentProvider, useCookieConsent } from "./CookieConsentContext";
import { CookieBanner } from "./CookieBanner";
import { CookiePreferencesPanel } from "./CookiePreferencesPanel";
import { ConsentDefaults } from "./ConsentDefaults";

function PreferencesOverlay() {
  const { status, showPreferences, closePreferences, isReady } = useCookieConsent();
  if (!isReady || !showPreferences) return null;
  if (status === "pending") return null;
  return <CookiePreferencesPanel onClose={closePreferences} />;
}

export function CookieConsentRoot({ children }: { children: React.ReactNode }) {
  return (
    <CookieConsentProvider>
      <ConsentDefaults />
      {children}
      <CookieBanner />
      <PreferencesOverlay />
    </CookieConsentProvider>
  );
}
