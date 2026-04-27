"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { BookOpen, Wrench } from "lucide-react";
import { journeyPhases, PHASE_COLORS } from "@/data/journey-phases";
import {
  SEARCH_STATUS_TO_PHASE,
  SEARCH_STATUS_ORDER,
  PHASE_TO_SEARCH_STATUS,
} from "@/lib/search-status-phase-map";

type PhaseId = keyof typeof PHASE_COLORS;

interface Props {
  currentStatus: string;
  phaseArticles: { slug: string; title: string }[];
  phaseTools: { slug: string; name: string }[];
}

export default function JourneyStageTracker({
  currentStatus,
  phaseArticles,
  phaseTools,
}: Props) {
  const t = useTranslations("dashboardJourney");
  const tJourney = useTranslations("journey");
  const [status, setStatus] = useState(currentStatus);
  const [updating, setUpdating] = useState(false);
  const [articles, setArticles] = useState(phaseArticles);
  const [tools, setTools] = useState(phaseTools);

  const currentPhaseId = SEARCH_STATUS_TO_PHASE[status] ?? "prepare";
  const currentPhaseIndex = journeyPhases.findIndex(
    (p) => p.id === currentPhaseId
  );

  // The status index tells us how far along the user is
  const statusIndex = SEARCH_STATUS_ORDER.indexOf(
    status as (typeof SEARCH_STATUS_ORDER)[number]
  );

  async function handlePhaseClick(phaseId: string) {
    const newStatus = PHASE_TO_SEARCH_STATUS[phaseId];
    if (!newStatus || newStatus === status) return;

    const phaseName = tJourney(`phases.${phaseId}.title`);
    if (
      !window.confirm(
        t("confirmUpdate", { stage: phaseName })
      )
    )
      return;

    setUpdating(true);
    try {
      const res = await fetch("/api/profile/search-status", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ searchStatus: newStatus }),
      });
      if (res.ok) {
        setStatus(newStatus);
        // Reload page to get fresh server-computed articles/tools
        window.location.reload();
      }
    } catch {
      // ignore
    } finally {
      setUpdating(false);
    }
  }

  const currentPhase = journeyPhases[currentPhaseIndex] ?? journeyPhases[0];
  const phaseColor = currentPhase.color;

  return (
    <section className="mt-8 rounded-2xl border border-apple-gray-100 bg-white overflow-hidden">
      {/* Header */}
      <div className="px-5 pt-5 pb-4">
        <h2 className="text-lg font-semibold text-apple-black">{t("title")}</h2>
        <p className="text-xs text-apple-gray-500 mt-0.5">{t("subtitle")}</p>
      </div>

      {/* Phase stepper */}
      <div className="px-5 pb-5">
        <div className="flex items-center gap-0">
          {journeyPhases.map((phase, i) => {
            const phaseStatusIndex = SEARCH_STATUS_ORDER.indexOf(
              PHASE_TO_SEARCH_STATUS[phase.id] as (typeof SEARCH_STATUS_ORDER)[number]
            );
            const isPast = phaseStatusIndex < statusIndex;
            const isCurrent = phase.id === currentPhaseId;
            const color = phase.color;

            return (
              <div key={phase.id} className="flex items-center flex-1 min-w-0 last:flex-none">
                <button
                  onClick={() => handlePhaseClick(phase.id)}
                  disabled={updating}
                  className="flex flex-col items-center gap-1.5 group relative"
                  title={tJourney(`phases.${phase.id}.title`)}
                >
                  {/* Circle */}
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-semibold transition-all shrink-0 ${
                      isCurrent
                        ? "text-white scale-110"
                        : isPast
                          ? "text-white"
                          : "bg-apple-gray-100 text-apple-gray-400 group-hover:bg-apple-gray-200"
                    }`}
                    style={
                      isCurrent
                        ? { backgroundColor: color, boxShadow: `0 0 0 3px ${color}30` }
                        : isPast
                          ? { backgroundColor: color }
                          : undefined
                    }
                  >
                    {phase.number}
                  </div>
                  {/* Label */}
                  <span
                    className={`text-[10px] leading-tight text-center whitespace-nowrap ${
                      isCurrent
                        ? "font-semibold"
                        : isPast
                          ? "font-medium text-apple-gray-700"
                          : "text-apple-gray-400"
                    }`}
                    style={isCurrent ? { color } : undefined}
                  >
                    {tJourney(`phases.${phase.id}.title`)}
                  </span>
                </button>
                {/* Connector line */}
                {i < journeyPhases.length - 1 && (
                  <div
                    className={`h-0.5 flex-1 mx-1 rounded-full ${
                      isPast ? "bg-apple-gray-300" : "bg-apple-gray-100"
                    }`}
                  />
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Current phase card */}
      <div
        className="mx-5 mb-5 rounded-xl p-4"
        style={{ backgroundColor: `${phaseColor}08`, borderLeft: `3px solid ${phaseColor}` }}
      >
        <div className="flex items-baseline gap-2">
          <span
            className="text-xs font-bold uppercase tracking-wider"
            style={{ color: phaseColor }}
          >
            Phase {currentPhase.number}
          </span>
          <span className="text-sm font-semibold text-apple-black">
            {tJourney(`phases.${currentPhase.id}.title`)}
          </span>
        </div>
        <p className="text-xs text-apple-gray-500 mt-1">
          {tJourney(`phases.${currentPhase.id}.tagline`)}
        </p>
      </div>

      {/* Recommended content */}
      {(articles.length > 0 || tools.length > 0) && (
        <div className="px-5 pb-5 grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Articles */}
          {articles.length > 0 && (
            <div>
              <div className="flex items-center gap-1.5 mb-2">
                <BookOpen size={14} className="text-apple-gray-500" />
                <h3 className="text-xs font-semibold text-apple-gray-700 uppercase tracking-wider">
                  {t("recommendedArticles")}
                </h3>
              </div>
              <ul className="space-y-1.5">
                {articles.slice(0, 4).map((a) => (
                  <li key={a.slug}>
                    <Link
                      href={`/learn/${a.slug}`}
                      className="text-sm text-apple-black hover:text-apple-accent transition-colors line-clamp-1"
                    >
                      {a.title}
                    </Link>
                  </li>
                ))}
              </ul>
              <Link
                href="/learn"
                className="inline-block mt-2 text-xs text-apple-accent hover:underline"
              >
                {t("viewAllArticles")}
              </Link>
            </div>
          )}

          {/* Tools */}
          {tools.length > 0 && (
            <div>
              <div className="flex items-center gap-1.5 mb-2">
                <Wrench size={14} className="text-apple-gray-500" />
                <h3 className="text-xs font-semibold text-apple-gray-700 uppercase tracking-wider">
                  {t("recommendedTools")}
                </h3>
              </div>
              <ul className="space-y-1.5">
                {tools.map((tool) => (
                  <li key={tool.slug}>
                    <Link
                      href={`/tools/${tool.slug}`}
                      className="text-sm text-apple-black hover:text-apple-accent transition-colors line-clamp-1"
                    >
                      {tool.name}
                    </Link>
                  </li>
                ))}
              </ul>
              <Link
                href="/tools"
                className="inline-block mt-2 text-xs text-apple-accent hover:underline"
              >
                {t("viewAllTools")}
              </Link>
            </div>
          )}
        </div>
      )}
    </section>
  );
}
