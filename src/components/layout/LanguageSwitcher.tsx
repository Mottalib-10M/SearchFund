"use client";

import { useState, useRef, useEffect } from "react";
import { useLocale } from "next-intl";
import { usePathname, useRouter } from "@/i18n/navigation";
import { Globe, ChevronDown } from "lucide-react";
import { pageExistsInLocale, type Locale } from "@/lib/i18n-registry";

const languageNames: Record<string, string> = {
  en: "English",
  fr: "Français",
  es: "Español",
  it: "Italiano",
  pt: "Português",
};

const localeList: Locale[] = ["en", "fr", "es", "it", "pt"];

export default function LanguageSwitcher() {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  function handleSwitch(target: Locale) {
    setOpen(false);
    if (target === locale) return;

    const exists = pageExistsInLocale(pathname, target);
    if (exists) {
      router.push(pathname, { locale: target });
    } else {
      router.push("/", { locale: target });
    }
  }

  return (
    <div className="relative" ref={ref}>
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="flex items-center gap-1.5 text-sm text-apple-gray-700 hover:text-apple-black transition-colors cursor-pointer"
        aria-label="Change language"
      >
        <Globe size={16} />
        <span className="hidden sm:inline">{locale.toUpperCase()}</span>
        <ChevronDown size={12} />
      </button>

      {open && (
        <div className="absolute right-0 top-full mt-2 w-40 bg-white rounded-xl shadow-lg border border-apple-gray-300/50 py-1 z-50">
          {localeList.map((l) => {
            const active = l === locale;
            const available = pageExistsInLocale(pathname, l);
            return (
              <button
                key={l}
                type="button"
                onClick={() => handleSwitch(l)}
                className={`flex items-center justify-between w-full px-4 py-2.5 text-sm transition-colors cursor-pointer ${
                  active
                    ? "text-apple-accent font-medium bg-apple-gray-100/50"
                    : "text-apple-gray-700 hover:bg-apple-gray-100"
                }`}
                title={
                  !available && !active
                    ? `This page is not yet available in ${languageNames[l]}`
                    : undefined
                }
              >
                <span>{languageNames[l]}</span>
                {!available && !active && (
                  <span className="text-[10px] text-apple-gray-400">home</span>
                )}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}
