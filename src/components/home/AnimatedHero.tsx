"use client";

import { motion } from "framer-motion";
import { Link } from "@/i18n/navigation";
import { useTranslations } from "next-intl";

export default function AnimatedHero() {
  const t = useTranslations("home");

  return (
    <section className="py-12 md:py-32 text-center max-w-4xl mx-auto px-6">
      <motion.h1
        className="text-4xl md:text-5xl lg:text-6xl font-semibold text-apple-black tracking-tight leading-tight"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {t("heroTitle")}
      </motion.h1>

      <motion.p
        className="text-xl text-apple-gray-700 mt-6 max-w-2xl mx-auto"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.15 }}
      >
        {t("heroSubtitle")}
      </motion.p>

      <motion.div
        className="mt-8 flex flex-col items-center gap-4"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <Link
          href="/the-eta-journey"
          className="inline-flex items-center justify-center rounded-full bg-apple-accent text-white text-base font-medium px-9 py-3.5 hover:bg-apple-accent-hover transition-colors"
        >
          {t("journeyCta")}
        </Link>
        <div className="flex gap-4 flex-wrap justify-center">
          <Link
            href="/learn"
            className="inline-flex items-center justify-center rounded-full border border-apple-gray-300 text-apple-gray-700 text-sm font-medium px-7 py-3 hover:bg-apple-gray-100 transition-colors"
          >
            {t("exploreCta")}
          </Link>
          <Link
            href="/listings"
            className="inline-flex items-center justify-center rounded-full border border-apple-gray-300 text-apple-gray-700 text-sm font-medium px-7 py-3 hover:bg-apple-gray-100 transition-colors"
          >
            {t("marketplaceCta")}
          </Link>
        </div>
      </motion.div>
    </section>
  );
}
