/**
 * ETA Journey - Phase structural data (language-independent).
 * Translatable strings live in messages/{locale}.json under the "journey" namespace.
 */

export interface PhaseArticle {
  slug: string;
}

export interface PhaseTool {
  slug: string; // e.g. "ebitda-multiple-estimator"
  exists: boolean; // false = render as "Coming soon"
}

export interface PhaseTemplate {
  slug: string; // e.g. "letter-of-intent"
}

export interface PhaseQuote {
  /** Translation key for the quote text - e.g. "phases.prepare.quote" */
  textKey: string;
  /** Attribution name (not translated) */
  person: string;
  /** Role / company (not translated) */
  role: string;
  /** Verifiable source URL */
  sourceUrl: string;
  /** Source label (podcast name, etc.) */
  sourceLabel: string;
}

export interface JourneyPhaseData {
  id: string; // "prepare" | "fundraise" | "search" | "acquire" | "operate" | "exit"
  number: string; // "01" - "06"
  color: string; // hex
  durationKey: string; // translation key for "2-4 months"
  articles: PhaseArticle[];
  tools: PhaseTool[];
  templates: PhaseTemplate[];
  quote: PhaseQuote;
}

export const PHASE_COLORS = {
  prepare: "#5856D6",
  fundraise: "#0071E3",
  search: "#32ADE6",
  acquire: "#34C759",
  operate: "#FF9F0A",
  exit: "#AF52DE",
} as const;

export const journeyPhases: JourneyPhaseData[] = [
  // ── Phase 01 - PREPARE ──────────────────────────────────────────────
  {
    id: "prepare",
    number: "01",
    color: PHASE_COLORS.prepare,
    durationKey: "phases.prepare.duration",
    articles: [
      { slug: "is-eta-right-for-you" },
      { slug: "self-funded-vs-traditional" },
      { slug: "pre-search-preparation" },
      { slug: "industry-selection-framework" },
      { slug: "searcher-compensation" },
      { slug: "getting-started" },
    ],
    tools: [{ slug: "search-capital-calculator", exists: true }],
    templates: [{ slug: "ppm-search-fund" }],
    quote: {
      textKey: "phases.prepare.quote",
      person: "Fernando Garcia Benavides",
      role: "Founder, Divisadero Capital",
      sourceUrl:
        "https://searchfunder.com/post/starting-a-search-fund-motivations-fundraising-and-investor-captable",
      sourceLabel: "Searchfunder.com",
    },
  },

  // ── Phase 02 - FUNDRAISE ────────────────────────────────────────────
  {
    id: "fundraise",
    number: "02",
    color: PHASE_COLORS.fundraise,
    durationKey: "phases.fundraise.duration",
    articles: [
      { slug: "writing-a-ppm" },
      { slug: "finding-investors" },
      { slug: "fundraising-deck" },
      { slug: "cap-tables-equity" },
      { slug: "search-fund-term-sheet" },
      { slug: "why-invest-in-search-funds" },
      { slug: "search-fund-legal-structure" },
      { slug: "search-fund-fundraising-timeline" },
    ],
    tools: [
      { slug: "cap-table-simulator", exists: true },
      { slug: "search-capital-calculator", exists: true },
    ],
    templates: [{ slug: "ppm-search-fund" }],
    quote: {
      textKey: "phases.fundraise.quote",
      person: "Christopher Sykes",
      role: "CEO, Swoogo (acquired via Eagle Rock Capital)",
      sourceUrl: "https://www.relayinvestments.com/",
      sourceLabel: "Relay Investments",
    },
  },

  // ── Phase 03 - SEARCH ───────────────────────────────────────────────
  {
    id: "search",
    number: "03",
    color: PHASE_COLORS.search,
    durationKey: "phases.search.duration",
    articles: [
      { slug: "deal-sourcing-strategies" },
      { slug: "cold-outreach-business-owners" },
      { slug: "proprietary-deal-flow" },
      { slug: "business-valuation" },
      { slug: "deal-funnel-metrics" },
      { slug: "seller-psychology" },
      { slug: "working-with-brokers" },
      { slug: "reading-a-cim" },
    ],
    tools: [
      { slug: "ebitda-multiple-estimator", exists: true },
      { slug: "valuation-calculator", exists: true },
    ],
    templates: [
      { slug: "letter-of-intent" },
      { slug: "due-diligence-checklist" },
    ],
    quote: {
      textKey: "phases.search.quote",
      person: "Steve Divitkos",
      role: "Former CEO of Microdea; Founder, Mineola Search Partners",
      sourceUrl: "https://acquiringminds.co/articles/steve-divitkos-microdea",
      sourceLabel: "Acquiring Minds podcast",
    },
  },

  // ── Phase 04 - ACQUIRE ──────────────────────────────────────────────
  {
    id: "acquire",
    number: "04",
    color: PHASE_COLORS.acquire,
    durationKey: "phases.acquire.duration",
    articles: [
      { slug: "letter-of-intent" },
      { slug: "quality-of-earnings" },
      { slug: "due-diligence-checklist" },
      { slug: "financial-due-diligence" },
      { slug: "working-capital-adjustments" },
      { slug: "deal-structure-optimization" },
      { slug: "closing-process" },
      { slug: "vendor-take-back-financing" },
      { slug: "sba-7a-loans-acquisition" },
    ],
    tools: [
      { slug: "lbo-simulator", exists: true },
      { slug: "valuation-calculator", exists: true },
    ],
    templates: [
      { slug: "letter-of-intent" },
      { slug: "due-diligence-checklist" },
    ],
    quote: {
      textKey: "phases.acquire.quote",
      person: "Brent Beshore",
      role: "Founder & CEO, Permanent Equity",
      sourceUrl:
        "https://www.buzzsprout.com/1783651/episodes/15212523-brent-beshore-private-equity-for-boring-businesses",
      sourceLabel: "World of DaaS podcast",
    },
  },

  // ── Phase 05 - OPERATE ──────────────────────────────────────────────
  {
    id: "operate",
    number: "05",
    color: PHASE_COLORS.operate,
    durationKey: "phases.operate.duration",
    articles: [
      { slug: "first-100-days" },
      { slug: "management-transition" },
      { slug: "board-governance" },
      { slug: "revenue-growth-playbook" },
      { slug: "buy-and-build" },
      { slug: "digital-transformation" },
      { slug: "employee-retention-acquisition" },
      { slug: "kpi-dashboard-post-acquisition" },
    ],
    tools: [{ slug: "value-creation-simulator", exists: true }],
    templates: [{ slug: "100-day-plan" }],
    quote: {
      textKey: "phases.operate.quote",
      person: "Daniel Muzquiz",
      role: "Chairman & President, The Predictive Index (serial search fund entrepreneur)",
      sourceUrl: "https://jimsteinsharpe.com/why-search-is-it-right-for-you/",
      sourceLabel: "Jim Stein Sharpe",
    },
  },

  // ── Phase 06 - EXIT ─────────────────────────────────────────────────
  {
    id: "exit",
    number: "06",
    color: PHASE_COLORS.exit,
    durationKey: "phases.exit.duration",
    articles: [
      { slug: "preparing-company-exit" },
      { slug: "exit-strategies" },
      { slug: "dividend-recapitalization" },
      { slug: "secondary-sales" },
      { slug: "sell-side-earnout" },
      { slug: "investment-banker-exit" },
      { slug: "life-after-selling" },
    ],
    tools: [{ slug: "exit-returns-calculator", exists: true }],
    templates: [{ slug: "exit-readiness-checklist" }],
    quote: {
      textKey: "phases.exit.quote",
      person: "A.J. Wasserstein",
      role: "Former CEO, ArchivesOne (sold to Iron Mountain); Lecturer, Yale SOM",
      sourceUrl: "https://www.deepwealth.com/podcast/aj-wasserstein-episode-39",
      sourceLabel: "Deep Wealth Podcast",
    },
  },
];
