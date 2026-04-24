"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import {
  BookOpen,
  Calculator,
  FileText,
  AlertTriangle,
  ArrowRight,
} from "lucide-react";
import type { JourneyPhaseData } from "@/data/journey-phases";
import { allArticles } from "@/app/[locale]/learn/_articles/article-registry";

interface JourneyPhaseProps {
  phase: JourneyPhaseData;
  index: number;
}

/** Look up an article title from the registry by slug. */
function articleTitle(slug: string): string {
  const match = allArticles.find((a) => a.slug === slug);
  return match?.title ?? slug.replace(/-/g, " ");
}

export default function JourneyPhase({ phase, index }: JourneyPhaseProps) {
  const t = useTranslations("journey");

  const isOdd = index % 2 !== 0;
  const descriptionParagraphs = (
    t(`phases.${phase.id}.description`) as string
  ).split("\n\n");

  return (
    <section
      id={phase.id}
      className="scroll-mt-16 py-20 md:py-28"
      style={{ backgroundColor: isOdd ? "#F5F5F7" : "#FFFFFF" }}
    >
      <div className="mx-auto max-w-5xl px-6">
        {/* ── Header ── */}
        <div className="mb-12">
          {/* Phase number badge */}
          <span
            className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-2xl text-xl font-bold text-white"
            style={{ backgroundColor: phase.color }}
          >
            {phase.number}
          </span>

          <h2 className="mt-4 text-xl font-semibold tracking-tight text-apple-black sm:text-3xl">
            {t(`phases.${phase.id}.title`)}
            <span className="ml-3 text-base font-normal text-apple-gray-500">
              {t(`phases.${phase.id}.duration`)}
            </span>
          </h2>

          <p
            className="mt-3 text-lg font-medium italic"
            style={{ color: phase.color }}
          >
            {t(`phases.${phase.id}.tagline`)}
          </p>
        </div>

        {/* ── Description ── */}
        <div className="mb-14 max-w-3xl space-y-5">
          {descriptionParagraphs.map((para, i) => (
            <p key={i} className="text-base leading-relaxed text-apple-gray-700">
              {para}
            </p>
          ))}
        </div>

        {/* ── Quote ── */}
        <blockquote
          className="mb-14 rounded-xl border-l-4 py-6 pl-6 pr-4"
          style={{
            borderColor: phase.color,
            backgroundColor: `${phase.color}08`,
          }}
        >
          <p className="mb-3 text-base italic leading-relaxed text-apple-black">
            &ldquo;{t(phase.quote.textKey)}&rdquo;
          </p>
          <footer className="text-sm text-apple-gray-700">
            <strong>{phase.quote.person}</strong>
            <span className="mx-1">&middot;</span>
            {phase.quote.role}
            <span className="mx-1">&middot;</span>
            <a
              href={phase.quote.sourceUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="underline decoration-apple-gray-300 underline-offset-2 transition-colors hover:text-apple-accent"
            >
              {phase.quote.sourceLabel}
            </a>
          </footer>
        </blockquote>

        {/* ── Resources grid ── */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {/* ─ Articles ─ */}
          <div>
            <h3 className="mb-4 flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-apple-gray-500">
              <BookOpen className="h-4 w-4" />
              {t("articles")}
            </h3>
            <ul className="space-y-2">
              {phase.articles.map((article) => (
                <li key={article.slug}>
                  <Link
                    href={`/learn/${article.slug}`}
                    className="group flex items-start gap-1.5 text-sm text-apple-black transition-colors hover:text-apple-accent"
                  >
                    <ArrowRight className="mt-0.5 h-3.5 w-3.5 shrink-0 text-apple-gray-300 transition-colors group-hover:text-apple-accent" />
                    {articleTitle(article.slug)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ─ Tools ─ */}
          <div>
            <h3 className="mb-4 flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-apple-gray-500">
              <Calculator className="h-4 w-4" />
              {t("tools")}
            </h3>
            <ul className="space-y-2">
              {phase.tools.map((tool) =>
                tool.exists ? (
                  <li key={tool.slug}>
                    <Link
                      href={`/tools/${tool.slug}`}
                      className="group flex items-start gap-1.5 text-sm text-apple-black transition-colors hover:text-apple-accent"
                    >
                      <ArrowRight className="mt-0.5 h-3.5 w-3.5 shrink-0 text-apple-gray-300 transition-colors group-hover:text-apple-accent" />
                      {tool.slug.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase())}
                    </Link>
                  </li>
                ) : (
                  <li
                    key={tool.slug}
                    className="flex items-start gap-1.5 text-sm text-apple-gray-300"
                  >
                    <ArrowRight className="mt-0.5 h-3.5 w-3.5 shrink-0" />
                    <span>
                      {tool.slug.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase())}
                      <span className="ml-1 text-xs">({t("comingSoon")})</span>
                    </span>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* ─ Templates ─ */}
          <div>
            <h3 className="mb-4 flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-apple-gray-500">
              <FileText className="h-4 w-4" />
              {t("templates")}
            </h3>
            <p className="text-sm italic text-apple-gray-300">
              {t("comingSoon")}
            </p>
          </div>

          {/* ─ Pitfalls ─ */}
          <div>
            <h3 className="mb-4 flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-apple-gray-500">
              <AlertTriangle className="h-4 w-4" />
              {t("pitfalls")}
            </h3>
            <ul className="space-y-2">
              {[1, 2, 3].map((n) => (
                <li
                  key={n}
                  className="flex items-start gap-1.5 text-sm text-apple-gray-700"
                >
                  <span
                    className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full"
                    style={{ backgroundColor: phase.color }}
                  />
                  {t(`phases.${phase.id}.pitfall${n}`)}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
