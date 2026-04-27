"use client";

import { useTranslations } from "next-intl";
import { useEffect, useRef, useState, useCallback } from "react";
import { journeyPhases, PHASE_COLORS } from "@/data/journey-phases";

type PhaseId = keyof typeof PHASE_COLORS;

export default function JourneyNav() {
  const t = useTranslations("journey");
  const [visible, setVisible] = useState(false);
  const [activeId, setActiveId] = useState<string>(journeyPhases[0].id);
  const [mobileOpen, setMobileOpen] = useState(false);
  const observerRef = useRef<IntersectionObserver | null>(null);

  // ---------- Show/hide nav based on hero visibility ----------
  useEffect(() => {
    const hero = document.getElementById("journey-hero");
    if (!hero) return;

    const heroObs = new IntersectionObserver(
      ([entry]) => setVisible(!entry.isIntersecting),
      { threshold: 0.1 }
    );
    heroObs.observe(hero);
    return () => heroObs.disconnect();
  }, []);

  // ---------- Track current phase with IntersectionObserver ----------
  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        }
      },
      { rootMargin: "-40% 0px -40% 0px", threshold: 0 }
    );

    for (const phase of journeyPhases) {
      const el = document.getElementById(phase.id);
      if (el) observerRef.current.observe(el);
    }

    return () => observerRef.current?.disconnect();
  }, []);

  // ---------- Smooth scroll handler ----------
  const scrollTo = useCallback((id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    setMobileOpen(false);
  }, []);

  if (!visible) return null;

  const activePhase = journeyPhases.find((p) => p.id === activeId) ?? journeyPhases[0];

  return (
    <>
      {/* ────── Desktop nav ────── */}
      <nav className="fixed top-0 z-50 hidden w-full border-b border-apple-gray-100 bg-white/95 shadow-sm backdrop-blur-md md:block">
        <div className="mx-auto flex max-w-6xl items-center justify-center gap-1 px-4 py-2">
          {journeyPhases.map((phase) => {
            const isActive = phase.id === activeId;
            return (
              <button
                key={phase.id}
                onClick={() => scrollTo(phase.id)}
                className="flex items-center gap-1.5 rounded-full px-4 py-1.5 text-sm font-medium transition-colors"
                style={{
                  backgroundColor: isActive ? `${phase.color}14` : "transparent",
                  color: isActive ? phase.color : "#6E6E73",
                }}
              >
                <span
                  className="flex h-5 w-5 items-center justify-center rounded-full text-[10px] font-bold text-white"
                  style={{ backgroundColor: phase.color }}
                >
                  {phase.number}
                </span>
                {t(`phases.${phase.id}.title`)}
              </button>
            );
          })}
        </div>
      </nav>

      {/* ────── Mobile pill ────── */}
      <div className="fixed top-16 left-1/2 z-40 -translate-x-1/2 md:hidden">
        <button
          onClick={() => setMobileOpen((o) => !o)}
          className="flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-medium shadow-lg"
          style={{ color: activePhase.color }}
        >
          <span
            className="flex h-5 w-5 items-center justify-center rounded-full text-[10px] font-bold text-white"
            style={{ backgroundColor: activePhase.color }}
          >
            {activePhase.number}
          </span>
          {t(`phases.${activePhase.id}.title`)}
        </button>
      </div>

      {/* ────── Mobile overlay ────── */}
      {mobileOpen && (
        <div className="fixed inset-0 z-50 flex items-end md:hidden">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/30"
            onClick={() => setMobileOpen(false)}
          />

          {/* Panel */}
          <div className="relative w-full rounded-t-2xl bg-white px-6 pb-8 pt-4 shadow-xl">
            <div className="mx-auto mb-4 h-1 w-10 rounded-full bg-apple-gray-300" />
            <div className="flex flex-col gap-2">
              {journeyPhases.map((phase) => {
                const isActive = phase.id === activeId;
                return (
                  <button
                    key={phase.id}
                    onClick={() => scrollTo(phase.id)}
                    className="flex items-center gap-3 rounded-xl px-4 py-3 text-left text-base font-medium transition-colors"
                    style={{
                      backgroundColor: isActive ? `${phase.color}14` : "transparent",
                      color: isActive ? phase.color : "#1D1D1F",
                    }}
                  >
                    <span
                      className="flex h-7 w-7 items-center justify-center rounded-full text-xs font-bold text-white"
                      style={{ backgroundColor: phase.color }}
                    >
                      {phase.number}
                    </span>
                    {t(`phases.${phase.id}.title`)}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
