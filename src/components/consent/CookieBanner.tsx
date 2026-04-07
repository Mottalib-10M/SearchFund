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
    <div className="fixed bottom-0 inset-x-0 z-50 p-4 sm:p-6">
      <div className="mx-auto max-w-lg rounded-2xl bg-white/95 backdrop-blur-lg border border-apple-gray-200 shadow-lg p-5">
        <p className="text-sm text-apple-gray-700 leading-relaxed">
          We use cookies to keep you signed in and to understand how you use our
          platform.{" "}
          <Link
            href="/privacy"
            className="text-apple-accent hover:underline"
          >
            Privacy Policy
          </Link>
        </p>
        <div className="mt-4 flex gap-3">
          <button
            onClick={handleEssentialOnly}
            className="flex-1 rounded-xl border border-apple-gray-300 px-4 py-2.5 text-sm font-medium text-apple-gray-700 transition-colors hover:bg-apple-gray-100 cursor-pointer"
          >
            Essential Only
          </button>
          <button
            onClick={handleAcceptAll}
            className="flex-1 rounded-xl bg-apple-accent px-4 py-2.5 text-sm font-medium text-white transition-colors hover:bg-apple-accent/90 cursor-pointer"
          >
            Accept All
          </button>
        </div>
      </div>
    </div>
  );
}
