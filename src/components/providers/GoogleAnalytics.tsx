"use client";

import Script from "next/script";
import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";

const GA_MEASUREMENT_ID = "G-XRWSYV19QW";

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

export default function GoogleAnalytics() {
  const [consentGiven, setConsentGiven] = useState(false);
  const { data: session } = useSession();

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

  // Send user_id and role to GA4 when session is available
  useEffect(() => {
    if (!consentGiven || !session?.user || !window.gtag) return;
    const user = session.user as { id?: string; role?: string };
    if (user.id) {
      window.gtag("set", { user_id: user.id });
      window.gtag("set", "user_properties", {
        user_role: user.role ?? "unknown",
      });
    }
  }, [consentGiven, session]);

  if (!consentGiven) return null;

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
        strategy="afterInteractive"
      />
      <Script id="ga4-init" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA_MEASUREMENT_ID}');
        `}
      </Script>
    </>
  );
}
