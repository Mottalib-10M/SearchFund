"use client";

import { useTranslations } from "next-intl";
import { ChevronDown } from "lucide-react";

export default function JourneyHero() {
  const t = useTranslations("journey");

  return (
    <section
      id="journey-hero"
      className="relative flex min-h-screen flex-col items-center justify-center bg-white px-6 text-center"
    >
      <h1 className="mx-auto max-w-4xl text-3xl font-semibold tracking-tight text-apple-black sm:text-5xl md:text-6xl">
        {t("title")}
      </h1>

      <p className="mx-auto mt-6 max-w-2xl text-lg text-apple-gray-700 sm:text-xl">
        {t("subtitle")}
      </p>

      {/* Scroll indicator */}
      <div className="absolute bottom-12 flex flex-col items-center gap-2">
        <span className="text-sm text-apple-gray-500">
          {t("scrollIndicator")}
        </span>
        <ChevronDown className="h-6 w-6 animate-bounce text-apple-gray-500" />
      </div>
    </section>
  );
}
