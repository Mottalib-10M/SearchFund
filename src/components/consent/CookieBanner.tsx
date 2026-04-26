"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const COOKIE_CATEGORIES = [
  {
    id: "essential",
    label: "Essential",
    description: "Login, security & session",
    locked: true,
  },
  {
    id: "analytics",
    label: "Analytics",
    description: "Usage data & improvements",
    locked: false,
  },
];

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const [prefs, setPrefs] = useState<Record<string, boolean>>({
    essential: true,
    analytics: true,
  });

  useEffect(() => {
    const stored = localStorage.getItem("cookie_consent");
    if (!stored) setVisible(true);
  }, []);

  function save(consent: Record<string, boolean>) {
    localStorage.setItem("cookie_consent", JSON.stringify(consent));
    window.dispatchEvent(new Event("cookie-consent-update"));
    setVisible(false);
  }

  function handleAcceptAll() {
    save({ essential: true, analytics: true });
  }

  function handleSavePreferences() {
    save(prefs);
  }

  if (!visible) return null;

  return (
    <>
      {/* Desktop - bottom-right card */}
      <div className="hidden sm:block fixed bottom-5 right-5 z-50 w-80">
        <div className="rounded-2xl bg-white/95 backdrop-blur-xl border border-gray-200/70 shadow-xl overflow-hidden">
          {/* Header */}
          <div className="px-5 pt-5 pb-3">
            <p className="text-[13px] font-semibold text-gray-900">
              We value your privacy
            </p>
            <p className="mt-1 text-[12px] text-gray-500 leading-relaxed">
              We use cookies to keep you signed in and improve your experience.{" "}
              <Link
                href="/privacy"
                className="text-gray-500 underline hover:text-gray-800"
              >
                Privacy Policy
              </Link>
            </p>
          </div>

          {/* Expandable preferences */}
          <div
            className={`grid transition-all duration-300 ease-in-out ${
              expanded
                ? "grid-rows-[1fr] opacity-100"
                : "grid-rows-[0fr] opacity-0"
            }`}
          >
            <div className="overflow-hidden">
              <div className="px-5 pb-3 space-y-2.5">
                <div className="h-px bg-gray-100" />
                {COOKIE_CATEGORIES.map((cat) => (
                  <label
                    key={cat.id}
                    className="flex items-center justify-between gap-3 cursor-pointer group"
                  >
                    <div className="min-w-0">
                      <p className="text-[12px] font-medium text-gray-800">
                        {cat.label}
                      </p>
                      <p className="text-[11px] text-gray-400">
                        {cat.description}
                      </p>
                    </div>
                    {/* Toggle */}
                    <button
                      type="button"
                      role="switch"
                      aria-checked={prefs[cat.id]}
                      disabled={cat.locked}
                      onClick={() =>
                        !cat.locked &&
                        setPrefs((p) => ({ ...p, [cat.id]: !p[cat.id] }))
                      }
                      className={`relative inline-flex h-[22px] w-[38px] shrink-0 rounded-full transition-colors duration-200 cursor-pointer ${
                        cat.locked
                          ? "bg-gray-300 cursor-not-allowed"
                          : prefs[cat.id]
                            ? "bg-gray-900"
                            : "bg-gray-200"
                      }`}
                    >
                      <span
                        className={`pointer-events-none inline-block h-[18px] w-[18px] rounded-full bg-white shadow-sm ring-0 transition-transform duration-200 mt-[2px] ${
                          prefs[cat.id]
                            ? "translate-x-[18px]"
                            : "translate-x-[2px]"
                        }`}
                      />
                    </button>
                  </label>
                ))}
              </div>
            </div>
          </div>

          {/* Actions */}
          <div className="px-5 pb-4 flex gap-2">
            {expanded ? (
              <button
                onClick={handleSavePreferences}
                className="flex-1 rounded-xl bg-gray-900 py-2 text-[12px] font-semibold text-white transition-colors hover:bg-gray-800 cursor-pointer"
              >
                Save preferences
              </button>
            ) : (
              <>
                <button
                  onClick={() => setExpanded(true)}
                  className="flex-1 rounded-xl border border-gray-200 py-2 text-[12px] font-medium text-gray-500 transition-colors hover:bg-gray-50 cursor-pointer"
                >
                  Customize
                </button>
                <button
                  onClick={handleAcceptAll}
                  className="flex-1 rounded-xl bg-gray-900 py-2 text-[12px] font-semibold text-white transition-colors hover:bg-gray-800 cursor-pointer"
                >
                  Accept all
                </button>
              </>
            )}
          </div>
        </div>
      </div>

      {/* Mobile - bottom sheet */}
      <div className="sm:hidden fixed inset-0 z-50 flex items-end">
        {/* Backdrop */}
        <div className="absolute inset-0 bg-black/30 backdrop-blur-sm" />

        {/* Sheet */}
        <div className="relative w-full bg-white rounded-t-3xl pb-[env(safe-area-inset-bottom)] animate-in slide-in-from-bottom duration-400">
          {/* Handle */}
          <div className="flex justify-center pt-3 pb-1">
            <div className="w-9 h-1 rounded-full bg-gray-300" />
          </div>

          <div className="px-6 pt-2 pb-4">
            <p className="text-[15px] font-semibold text-gray-900">
              We value your privacy
            </p>
            <p className="mt-1.5 text-[13px] text-gray-500 leading-relaxed">
              We use cookies to keep you signed in and improve your
              experience.{" "}
              <Link
                href="/privacy"
                className="text-gray-500 underline hover:text-gray-800"
              >
                Privacy Policy
              </Link>
            </p>
          </div>

          {/* Expandable preferences */}
          <div
            className={`grid transition-all duration-300 ease-in-out ${
              expanded
                ? "grid-rows-[1fr] opacity-100"
                : "grid-rows-[0fr] opacity-0"
            }`}
          >
            <div className="overflow-hidden">
              <div className="px-6 pb-4 space-y-4">
                <div className="h-px bg-gray-100" />
                {COOKIE_CATEGORIES.map((cat) => (
                  <label
                    key={cat.id}
                    className="flex items-center justify-between gap-4 cursor-pointer"
                  >
                    <div className="min-w-0">
                      <p className="text-[14px] font-medium text-gray-800">
                        {cat.label}
                      </p>
                      <p className="text-[12px] text-gray-400">
                        {cat.description}
                      </p>
                    </div>
                    <button
                      type="button"
                      role="switch"
                      aria-checked={prefs[cat.id]}
                      disabled={cat.locked}
                      onClick={() =>
                        !cat.locked &&
                        setPrefs((p) => ({ ...p, [cat.id]: !p[cat.id] }))
                      }
                      className={`relative inline-flex h-[28px] w-[48px] shrink-0 rounded-full transition-colors duration-200 cursor-pointer ${
                        cat.locked
                          ? "bg-gray-300 cursor-not-allowed"
                          : prefs[cat.id]
                            ? "bg-gray-900"
                            : "bg-gray-200"
                      }`}
                    >
                      <span
                        className={`pointer-events-none inline-block h-[24px] w-[24px] rounded-full bg-white shadow-sm ring-0 transition-transform duration-200 mt-[2px] ${
                          prefs[cat.id]
                            ? "translate-x-[22px]"
                            : "translate-x-[2px]"
                        }`}
                      />
                    </button>
                  </label>
                ))}
              </div>
            </div>
          </div>

          {/* Actions */}
          <div className="px-6 pb-6 flex flex-col gap-2.5">
            <button
              onClick={handleAcceptAll}
              className="w-full rounded-2xl bg-gray-900 py-3.5 text-[15px] font-semibold text-white transition-colors hover:bg-gray-800 cursor-pointer"
            >
              Accept all
            </button>
            {expanded ? (
              <button
                onClick={handleSavePreferences}
                className="w-full rounded-2xl border border-gray-200 py-3.5 text-[15px] font-medium text-gray-600 transition-colors hover:bg-gray-50 cursor-pointer"
              >
                Save preferences
              </button>
            ) : (
              <button
                onClick={() => setExpanded(true)}
                className="w-full rounded-2xl border border-gray-200 py-3.5 text-[15px] font-medium text-gray-600 transition-colors hover:bg-gray-50 cursor-pointer"
              >
                Customize
              </button>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
