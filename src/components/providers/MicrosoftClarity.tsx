"use client";

import Script from "next/script";
import { useEffect, useState } from "react";

const CLARITY_ID = process.env.NEXT_PUBLIC_CLARITY_ID;

export default function MicrosoftClarity() {
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

  if (!consentGiven || !CLARITY_ID) return null;

  return (
    <Script id="microsoft-clarity" strategy="afterInteractive">
      {`
        (function(c,l,a,r,i,t,y){
          c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
          t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
          y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
        })(window,document,"clarity","script","${CLARITY_ID}");
      `}
    </Script>
  );
}
