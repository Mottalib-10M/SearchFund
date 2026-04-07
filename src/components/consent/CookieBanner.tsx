"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem("cookie_consent");
    if (!stored) setVisible(true);
  }, []);

  function handleAcceptAll() {
    const consent = { essential: true, analytics: true };
    localStorage.setItem("cookie_consent", JSON.stringify(consent));
    window.dispatchEvent(new Event("cookie-consent-update"));
    setVisible(false);
  }

  function handleEssentialOnly() {
    const consent = { essential: true, analytics: false };
    localStorage.setItem("cookie_consent", JSON.stringify(consent));
    window.dispatchEvent(new Event("cookie-consent-update"));
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div className="fixed bottom-4 left-4 z-50 max-w-xs animate-in slide-in-from-left-4 fade-in duration-500">
      <div className="rounded-xl bg-white/90 backdrop-blur-md border border-apple-gray-200/60 shadow-md px-4 py-3">
        <p className="text-xs text-apple-gray-600 leading-relaxed">
          Cookies for login &amp; analytics.{" "}
          <Link href="/privacy" className="underline hover:text-apple-gray-900">
            Learn more
          </Link>
        </p>
        <div className="mt-2 flex gap-2">
          <button
            onClick={handleEssentialOnly}
            className="rounded-lg border border-apple-gray-200 px-3 py-1.5 text-xs font-medium text-apple-gray-600 transition-colors hover:bg-apple-gray-100 cursor-pointer"
          >
            Decline
          </button>
          <button
            onClick={handleAcceptAll}
            className="rounded-lg bg-apple-gray-900 px-3 py-1.5 text-xs font-medium text-white transition-colors hover:bg-apple-gray-800 cursor-pointer"
          >
            Accept
          </button>
        </div>
      </div>
    </div>
  );
}
