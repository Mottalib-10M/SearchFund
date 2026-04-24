"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import WaitlistForm from "@/components/listings/WaitlistForm";

export default function JourneyOutro() {
  const t = useTranslations("journey");

  return (
    <section className="bg-white px-6 py-24 text-center md:py-32">
      <div className="mx-auto max-w-2xl">
        <h2 className="text-xl font-semibold tracking-tight text-apple-black sm:text-3xl">
          {t("outroTitle")}
        </h2>

        <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          {/* Primary CTA */}
          <Link
            href="/learn/getting-started"
            className="inline-flex items-center justify-center rounded-full bg-apple-accent px-8 py-3 text-base font-medium text-white transition-colors hover:bg-apple-accent-hover"
          >
            {t("outroPrimary")}
          </Link>

          {/* Secondary CTA */}
          <Link
            href="/learn"
            className="inline-flex items-center justify-center rounded-full border border-apple-gray-300 px-8 py-3 text-base font-medium text-apple-black transition-colors hover:border-apple-gray-500"
          >
            {t("outroSecondary")}
          </Link>
        </div>

        {/* Waitlist form */}
        <div className="mx-auto mt-16 max-w-md">
          <WaitlistForm />
        </div>
      </div>
    </section>
  );
}
