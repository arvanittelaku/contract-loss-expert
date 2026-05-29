"use client";

import { useEffect } from "react";
import { initGoogleConsentDefaults } from "@/lib/cookies/consent-manager";

/**
 * Sets Google Consent Mode v2 defaults (all denied except security) before
 * any marketing/analytics scripts load. Runs once on the client, no UI.
 */
export function ConsentDefaults() {
  useEffect(() => {
    initGoogleConsentDefaults();
  }, []);
  return null;
}
