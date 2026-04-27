"use client";

import { useState, useEffect, useCallback } from "react";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { BookOpen, Wrench, X, ArrowRight } from "lucide-react";
import { journeyPhases, PHASE_COLORS } from "@/data/journey-phases";
import {
  SEARCH_STATUS_TO_PHASE,
  SEARCH_STATUS_ORDER,
  PHASE_TO_SEARCH_STATUS,
} from "@/lib/search-status-phase-map";

type PhaseId = keyof typeof PHASE_COLORS;

/* ------------------------------------------------------------------ */
/*  Confirmation Modal                                                 */
/* ------------------------------------------------------------------ */

function ConfirmModal({
  open,
  phaseName,
  phaseNumber,
  phaseColor,
  loading,
  onConfirm,
  onCancel,
}: {
  open: boolean;
  phaseName: string;
  phaseNumber: string;
  phaseColor: string;
  loading: boolean;
  onConfirm: () => void;
  onCancel: () => void;
}) {
  // Close on Escape
  const handleKey = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape" && !loading) onCancel();
    },
    [loading, onCancel]
  );

  useEffect(() => {
    if (open) {
      document.addEventListener("keydown", handleKey);
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "";
    };
  }, [open, handleKey]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/40 backdrop-blur-sm animate-in fade-in duration-200"
        onClick={loading ? undefined : onCancel}
      />

      {/* Panel */}
      <div className="relative w-full max-w-sm bg-white rounded-2xl shadow-2xl animate-in zoom-in-95 fade-in duration-200">
        {/* Close button */}
        <button
          onClick={onCancel}
          disabled={loading}
          className="absolute top-3 right-3 p-1.5 rounded-full text-apple-gray-400 hover:text-apple-gray-700 hover:bg-apple-gray-100 transition-colors"
        >
          <X size={16} />
        </button>

        <div className="p-6 text-center">
          {/* Phase badge */}
          <div
            className="inline-flex items-center justify-center w-12 h-12 rounded-full text-white text-lg font-bold mb-4"
            style={{ backgroundColor: phaseColor }}
          >
            {phaseNumber}
          </div>

          <h3 className="text-lg font-semibold text-apple-black">
            Update your stage
          </h3>
          <p className="text-sm text-apple-gray-500 mt-2 leading-relaxed">
            Move to{" "}
            <span className="font-semibold" style={{ color: phaseColor }}>
              {phaseName}
            </span>
            ? This will update your current search status.
          </p>
        </div>

        {/* Actions */}
        <div className="flex border-t border-apple-gray-100">
          <button
            onClick={onCancel}
            disabled={loading}
            className="flex-1 py-3.5 text-sm font-medium text-apple-gray-600 hover:bg-apple-gray-50 transition-colors rounded-bl-2xl"
          >
            Cancel
          </button>
          <div className="w-px bg-apple-gray-100" />
          <button
            onClick={onConfirm}
            disabled={loading}
            className="flex-1 py-3.5 text-sm font-semibold transition-colors rounded-br-2xl flex items-center justify-center gap-1.5 hover:opacity-80"
            style={{ color: phaseColor }}
          >
            {loading ? (
              <span className="inline-block w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin" />
            ) : (
              <>
                Confirm
                <ArrowRight size={14} />
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Main Component                                                     */
/* ------------------------------------------------------------------ */

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
  const [articles] = useState(phaseArticles);
  const [tools] = useState(phaseTools);

  // Modal state
  const [pendingPhase, setPendingPhase] = useState<{
    id: string;
    status: string;
  } | null>(null);

  const currentPhaseId = SEARCH_STATUS_TO_PHASE[status] ?? "prepare";
  const currentPhaseIndex = journeyPhases.findIndex(
    (p) => p.id === currentPhaseId
  );

  const statusIndex = SEARCH_STATUS_ORDER.indexOf(
    status as (typeof SEARCH_STATUS_ORDER)[number]
  );

  function handlePhaseClick(phaseId: string) {
    const newStatus = PHASE_TO_SEARCH_STATUS[phaseId];
    if (!newStatus || newStatus === status) return;
    setPendingPhase({ id: phaseId, status: newStatus });
  }

  async function confirmUpdate() {
    if (!pendingPhase) return;
    setUpdating(true);
    try {
      const res = await fetch("/api/profile/search-status", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ searchStatus: pendingPhase.status }),
      });
      if (res.ok) {
        setStatus(pendingPhase.status);
        setPendingPhase(null);
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

  // Get info for the modal
  const pendingPhaseData = pendingPhase
    ? journeyPhases.find((p) => p.id === pendingPhase.id)
    : null;

  return (
    <>
      <ConfirmModal
        open={!!pendingPhase}
        phaseName={
          pendingPhaseData
            ? tJourney(`phases.${pendingPhaseData.id}.title`)
            : ""
        }
        phaseNumber={pendingPhaseData?.number ?? ""}
        phaseColor={pendingPhaseData?.color ?? "#000"}
        loading={updating}
        onConfirm={confirmUpdate}
        onCancel={() => !updating && setPendingPhase(null)}
      />

      <section className="mt-8 rounded-2xl border border-apple-gray-100 bg-white overflow-hidden">
        {/* Header */}
        <div className="px-5 pt-5 pb-4">
          <h2 className="text-lg font-semibold text-apple-black">
            {t("title")}
          </h2>
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
                <div
                  key={phase.id}
                  className="flex items-center flex-1 min-w-0 last:flex-none"
                >
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
                          ? {
                              backgroundColor: color,
                              boxShadow: `0 0 0 3px ${color}30`,
                            }
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
          style={{
            backgroundColor: `${phaseColor}08`,
            borderLeft: `3px solid ${phaseColor}`,
          }}
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
    </>
  );
}
