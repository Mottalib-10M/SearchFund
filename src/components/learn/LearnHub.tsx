"use client";

import { useState, useMemo, useRef } from "react";
import Link from "next/link";
import type {
  ArticleCard,
  PhaseInfo,
  AudienceId,
  PhaseId,
  CategoryMeta,
} from "@/app/[locale]/learn/_articles/article-registry";

// ---------------------------------------------------------------------------
// Phase name labels (hardcoded EN — pages are EN-only for now)
// ---------------------------------------------------------------------------

const PHASE_LABELS: Record<PhaseId, string> = {
  prepare: "Prepare",
  fundraise: "Fundraise",
  search: "Search",
  acquire: "Acquire",
  operate: "Operate",
  exit: "Exit",
};

const AUDIENCE_LABELS: { id: AudienceId; label: string }[] = [
  { id: "all", label: "All" },
  { id: "searcher", label: "Searcher" },
  { id: "investor", label: "Investor" },
  { id: "seller", label: "Seller" },
];

// ---------------------------------------------------------------------------
// Props
// ---------------------------------------------------------------------------

interface LearnHubProps {
  articles: ArticleCard[];
  phases: PhaseInfo[];
  categories: CategoryMeta[];
}

// ---------------------------------------------------------------------------
// Component
// ---------------------------------------------------------------------------

export default function LearnHub({ articles, phases, categories }: LearnHubProps) {
  const [search, setSearch] = useState("");
  const [activeRole, setActiveRole] = useState<AudienceId>("all");
  const sectionRefs = useRef<Record<string, HTMLElement | null>>({});

  // ── Filtering ─────────────────────────────────────────────────────────
  const filtered = useMemo(() => {
    let result = articles;

    if (activeRole !== "all") {
      result = result.filter((a) => a.audiences.includes(activeRole));
    }

    if (search.trim()) {
      const q = search.toLowerCase().trim();
      result = result.filter(
        (a) =>
          a.title.toLowerCase().includes(q) ||
          a.description.toLowerCase().includes(q)
      );
    }

    return result;
  }, [articles, search, activeRole]);

  // ── Group by phase ────────────────────────────────────────────────────
  const byPhase = useMemo(() => {
    const map: Record<PhaseId, ArticleCard[]> = {
      prepare: [], fundraise: [], search: [], acquire: [], operate: [], exit: [],
    };
    for (const a of filtered) {
      map[a.phase].push(a);
    }
    return map;
  }, [filtered]);

  const isSearching = search.trim().length > 0;

  // Scroll to phase section
  const scrollToPhase = (phaseId: string) => {
    sectionRefs.current[phaseId]?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  // Category display name lookup
  const catNameBySlug = useMemo(() => {
    const map: Record<string, string> = {};
    for (const c of categories) {
      map[c.slug] = c.name;
    }
    return map;
  }, [categories]);

  return (
    <>
      {/* ── Search ──────────────────────────────────────────────────────── */}
      <div className="mt-8">
        <div className="relative max-w-xl">
          <svg
            className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-apple-gray-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder={`Search ${articles.length} articles...`}
            className="w-full rounded-xl border border-apple-gray-200 bg-white py-2.5 pl-10 pr-4 text-sm text-apple-black placeholder:text-apple-gray-400 focus:border-apple-accent focus:outline-none focus:ring-1 focus:ring-apple-accent/30 transition"
          />
          {search && (
            <button
              onClick={() => setSearch("")}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-apple-gray-400 hover:text-apple-gray-700 transition"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          )}
        </div>
      </div>

      {/* ── Role selector ───────────────────────────────────────────────── */}
      <div className="mt-4 flex flex-wrap gap-2">
        {AUDIENCE_LABELS.map(({ id, label }) => {
          const isActive = activeRole === id;
          const count =
            id === "all"
              ? isSearching
                ? filtered.length
                : articles.length
              : articles.filter((a) =>
                  a.audiences.includes(id) &&
                  (!isSearching || filtered.some((f) => f.slug === a.slug))
                ).length;

          return (
            <button
              key={id}
              onClick={() => setActiveRole(id)}
              className={`inline-flex items-center gap-1.5 rounded-full px-4 py-1.5 text-sm font-medium transition ${
                isActive
                  ? "bg-apple-black text-white"
                  : "bg-apple-gray-100 text-apple-gray-700 hover:bg-apple-gray-200"
              }`}
            >
              {label}
              <span
                className={`text-xs ${
                  isActive ? "text-white/70" : "text-apple-gray-400"
                }`}
              >
                {count}
              </span>
            </button>
          );
        })}
      </div>

      {/* ── Phase timeline (horizontal) ─────────────────────────────────── */}
      <div className="mt-10 -mx-6 px-6 overflow-x-auto scrollbar-hide">
        <div className="flex gap-3 min-w-max pb-2">
          {phases.map((phase) => {
            const count = byPhase[phase.id].length;
            return (
              <button
                key={phase.id}
                onClick={() => scrollToPhase(phase.id)}
                className="flex-shrink-0 w-36 rounded-xl border border-apple-gray-100 bg-white p-4 hover:border-apple-gray-200 hover:shadow-sm transition text-left group"
              >
                <span
                  className="text-xs font-bold"
                  style={{ color: phase.color }}
                >
                  {phase.number}
                </span>
                <h3 className="text-sm font-semibold text-apple-black mt-1 group-hover:text-apple-accent transition">
                  {PHASE_LABELS[phase.id]}
                </h3>
                <p className="text-xs text-apple-gray-400 mt-1">
                  {count} {count === 1 ? "article" : "articles"}
                </p>
              </button>
            );
          })}
        </div>
      </div>

      {/* ── Phase sections ──────────────────────────────────────────────── */}
      <div className="mt-12 space-y-16">
        {phases.map((phase) => {
          const phaseArticles = byPhase[phase.id];
          if (phaseArticles.length === 0) return null;

          // Group articles by category within this phase
          const catGroups = new Map<string, ArticleCard[]>();
          for (const a of phaseArticles) {
            const existing = catGroups.get(a.categorySlug) ?? [];
            existing.push(a);
            catGroups.set(a.categorySlug, existing);
          }

          const MAX_SHOWN = 6;
          const displayed = phaseArticles.slice(0, MAX_SHOWN);
          const hasMore = phaseArticles.length > MAX_SHOWN;

          return (
            <section
              key={phase.id}
              ref={(el) => { sectionRefs.current[phase.id] = el; }}
              className="scroll-mt-24"
            >
              {/* Phase header */}
              <div className="flex items-center gap-3 mb-2">
                <span
                  className="text-xs font-bold tracking-wide uppercase"
                  style={{ color: phase.color }}
                >
                  {phase.number}
                </span>
                <div
                  className="flex-1 h-px"
                  style={{ backgroundColor: phase.color, opacity: 0.2 }}
                />
              </div>
              <h2 className="text-2xl font-semibold text-apple-black tracking-tight">
                {PHASE_LABELS[phase.id]}
              </h2>
              <p className="text-sm text-apple-gray-500 mt-1 max-w-2xl">
                {phase.description}
              </p>

              {/* Category chips */}
              <div className="mt-4 flex flex-wrap gap-1.5">
                {Array.from(catGroups.entries()).map(([catSlug, catArticles]) => (
                  <Link
                    key={catSlug}
                    href={`/learn/category/${catSlug}`}
                    className="inline-flex items-center gap-1 text-xs bg-apple-gray-100 rounded-full px-2.5 py-1 text-apple-gray-600 hover:text-apple-accent hover:bg-apple-gray-100/80 transition"
                  >
                    {catNameBySlug[catSlug] ?? catSlug}
                    <span className="text-apple-gray-400">{catArticles.length}</span>
                  </Link>
                ))}
                {phase.id === "prepare" && (
                  <Link
                    href="/learn/glossary"
                    className="inline-flex items-center gap-1 text-xs bg-purple-50 rounded-full px-2.5 py-1 text-purple-600 hover:text-apple-accent hover:bg-purple-100/80 transition font-medium"
                  >
                    Glossary
                    <span className="text-purple-400">A-Z</span>
                  </Link>
                )}
              </div>

              {/* Glossary teaser in Prepare */}
              {phase.id === "prepare" && (
                <Link
                  href="/learn/glossary"
                  className="mt-6 flex items-center gap-4 rounded-xl border border-purple-100 bg-gradient-to-r from-purple-50/50 to-white p-4 hover:border-purple-200 transition group"
                >
                  <span className="flex-shrink-0 w-10 h-10 rounded-lg bg-purple-100 flex items-center justify-center text-lg">
                    Aa
                  </span>
                  <div className="min-w-0">
                    <p className="text-sm font-semibold text-apple-black group-hover:text-apple-accent transition">
                      ETA Glossary
                    </p>
                    <p className="text-xs text-apple-gray-500 mt-0.5">
                      60+ terms explained - EBITDA, LOI, PPM, QoE, IRR and more
                    </p>
                  </div>
                  <span className="flex-shrink-0 text-apple-gray-400 group-hover:text-apple-accent transition">
                    &rarr;
                  </span>
                </Link>
              )}

              {/* Article grid */}
              <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {displayed.map((article) => (
                  <Link
                    key={article.slug}
                    href={`/learn/${article.slug}`}
                    className="bg-white rounded-xl p-5 hover:bg-apple-gray-100/50 transition border border-apple-gray-100 group"
                  >
                    <span className="text-xs bg-apple-gray-100 rounded-full px-2.5 py-0.5 text-apple-gray-500">
                      {article.tag}
                    </span>
                    <h3 className="text-base font-semibold text-apple-black mt-2.5 group-hover:text-apple-accent transition line-clamp-2">
                      {article.title}
                    </h3>
                    <p className="text-sm text-apple-gray-700 mt-1.5 line-clamp-2">
                      {article.description}
                    </p>
                    <p className="text-xs text-apple-gray-400 mt-2">
                      {article.readTime}
                    </p>
                  </Link>
                ))}
              </div>

              {/* See all link */}
              {hasMore && (
                <div className="mt-4">
                  <button
                    onClick={() => {
                      // Find the first category in this phase and link to it
                      const firstCatSlug = catGroups.keys().next().value;
                      if (firstCatSlug) {
                        window.location.href = `/learn/category/${firstCatSlug}`;
                      }
                    }}
                    className="text-sm text-apple-accent font-medium hover:underline"
                  >
                    See all {phaseArticles.length} articles &rarr;
                  </button>
                </div>
              )}
            </section>
          );
        })}

        {/* No results */}
        {filtered.length === 0 && (
          <div className="text-center py-16">
            <p className="text-apple-gray-500">
              No articles found{search ? ` for "${search}"` : ""}.
            </p>
            <button
              onClick={() => {
                setSearch("");
                setActiveRole("all");
              }}
              className="mt-2 text-sm text-apple-accent hover:underline"
            >
              Clear filters
            </button>
          </div>
        )}
      </div>
    </>
  );
}
