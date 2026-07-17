"use client";

import { useEffect } from "react";
import { trackConversionEvent } from "@/lib/analytics";

export function ThankYouAnalytics() {
  useEffect(() => {
    trackConversionEvent("thank_you_page_view");
  }, []);

  return null;
}
