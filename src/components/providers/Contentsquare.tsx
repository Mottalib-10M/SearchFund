"use client";

import Script from "next/script";
import { useEffect, useState } from "react";

export default function Contentsquare() {
  const [consentGiven, setConsentGiven] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem("cookie_consent");
    if (stored) {
      try {
        const consent = JSON.parse(stored);
        if (consent.analytics) setConsentGiven(true);
      } catch {
        // invalid stored value, ignore
      }
    }

    function handleConsentUpdate() {
      const updated = localStorage.getItem("cookie_consent");
      if (updated) {
        try {
          const consent = JSON.parse(updated);
          if (consent.analytics) setConsentGiven(true);
        } catch {
          // ignore
        }
      }
    }

    window.addEventListener("cookie-consent-update", handleConsentUpdate);
    return () =>
      window.removeEventListener("cookie-consent-update", handleConsentUpdate);
  }, []);

  if (!consentGiven) return null;

  return (
    <Script
      src="https://t.contentsquare.net/uxa/57182d25bfaa1.js"
      strategy="afterInteractive"
    />
  );
}
