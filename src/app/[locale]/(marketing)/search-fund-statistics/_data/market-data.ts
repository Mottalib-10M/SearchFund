// ---------------------------------------------------------------------------
// Search fund industry data — all figures from verified academic sources
// ---------------------------------------------------------------------------

export interface Source {
  id: string;
  name: string;
  title: string;
  year: number;
  url: string;
}

export const SOURCES: Source[] = [
  {
    id: "stanford",
    name: "Stanford GSB",
    title: "2024 Search Fund Study: Selected Observations",
    year: 2024,
    url: "https://www.gsb.stanford.edu/faculty-research/case-studies/2024-search-fund-study",
  },
  {
    id: "iese",
    name: "IESE Business School",
    title: "2024 International Search Fund Study",
    year: 2024,
    url: "https://www.iese.edu/entrepreneurship/search-funds/",
  },
  {
    id: "yale",
    name: "Yale SOM",
    title: "How Are Search Fund Investors Really Faring?",
    year: 2025,
    url: "https://som.yale.edu/sites/default/files/2025-10/How%20are%20Search%20Fund%20Investors%20Really%20Faring.pdf",
  },
];

// ---------------------------------------------------------------------------
// Headline stats — the 8 big numbers
// ---------------------------------------------------------------------------

export interface HeadlineStat {
  value: string;
  label: string;
  sublabel: string;
  sourceId: string;
}

export const HEADLINE_STATS: HeadlineStat[] = [
  {
    value: "681",
    label: "Total funds raised",
    sublabel: "US traditional search funds (since inception)",
    sourceId: "stanford",
  },
  {
    value: "94",
    label: "New funds in 2023",
    sublabel: "US search funds raised that year",
    sourceId: "stanford",
  },
  {
    value: "35.1%",
    label: "Gross IRR",
    sublabel: "Aggregate to investors (all funds)",
    sourceId: "stanford",
  },
  {
    value: "4.5x",
    label: "Gross MOIC",
    sublabel: "Aggregate multiple on invested capital",
    sourceId: "stanford",
  },
  {
    value: "2.0-3.0x",
    label: "Net MOIC",
    sublabel: "Returns after fees & carry",
    sourceId: "yale",
  },
  {
    value: "320+",
    label: "International funds",
    sublabel: "Search funds raised outside the US",
    sourceId: "iese",
  },
  {
    value: "$14.4M",
    label: "Median acquisition price",
    sublabel: "For completed US search fund deals",
    sourceId: "stanford",
  },
  {
    value: "20 mo",
    label: "Median search duration",
    sublabel: "From fund close to acquisition",
    sourceId: "stanford",
  },
];

// ---------------------------------------------------------------------------
// Return distribution — 6 outcome buckets
// ---------------------------------------------------------------------------

export interface ReturnBucket {
  label: string;
  pct: number;
  color: string;
}

export const RETURN_DISTRIBUTION: ReturnBucket[] = [
  { label: "10x+", pct: 8.0, color: "#15803d" },
  { label: "5-10x", pct: 17.5, color: "#22c55e" },
  { label: "2-5x", pct: 25.0, color: "#86efac" },
  { label: "1-2x", pct: 18.5, color: "#93c5fd" },
  { label: "Partial loss", pct: 20.5, color: "#fb923c" },
  { label: "Total loss", pct: 10.5, color: "#ef4444" },
];

// ---------------------------------------------------------------------------
// Asset class comparison
// ---------------------------------------------------------------------------

export interface AssetComparison {
  asset: string;
  irr: string;
  moic: string;
  highlight?: boolean;
}

export const ASSET_COMPARISON: AssetComparison[] = [
  { asset: "Search Funds", irr: "35.1%", moic: "4.5x", highlight: true },
  { asset: "Venture Capital (top quartile)", irr: "15-25%", moic: "2.0-3.0x" },
  { asset: "Private Equity (pooled)", irr: "12-16%", moic: "1.5-2.0x" },
  { asset: "S&P 500 (20-yr avg)", irr: "10.5%", moic: "N/A" },
];

// ---------------------------------------------------------------------------
// Deal metrics
// ---------------------------------------------------------------------------

export interface DealMetric {
  label: string;
  value: string;
  detail: string;
}

export const DEAL_METRICS: DealMetric[] = [
  { label: "Median EBITDA", value: "$2.5M", detail: "At acquisition" },
  { label: "Median price", value: "$14.4M", detail: "Total enterprise value" },
  { label: "Median multiple", value: "5.6x", detail: "EV / EBITDA" },
  { label: "Acquisition rate", value: "73%", detail: "Searchers who close a deal" },
  { label: "Search duration", value: "20 mo", detail: "Median time to acquisition" },
];

// ---------------------------------------------------------------------------
// Growth trend — new search funds per year (US + International)
// ---------------------------------------------------------------------------

export interface GrowthYear {
  year: number;
  us: number;
  intl: number;
}

export const GROWTH_TREND: GrowthYear[] = [
  { year: 2018, us: 52, intl: 35 },
  { year: 2019, us: 65, intl: 42 },
  { year: 2020, us: 58, intl: 40 },
  { year: 2021, us: 78, intl: 55 },
  { year: 2022, us: 86, intl: 62 },
  { year: 2023, us: 94, intl: 68 },
];

// ---------------------------------------------------------------------------
// Top international markets
// ---------------------------------------------------------------------------

export interface Country {
  country: string;
  funds: number;
}

export const TOP_COUNTRIES: Country[] = [
  { country: "Spain", funds: 67 },
  { country: "Mexico", funds: 50 },
  { country: "United Kingdom", funds: 35 },
  { country: "Brazil", funds: 34 },
  { country: "Colombia", funds: 28 },
  { country: "France", funds: 22 },
];

// ---------------------------------------------------------------------------
// Sector distribution
// ---------------------------------------------------------------------------

export interface Sector {
  sector: string;
  pct: number;
}

export const SECTOR_DISTRIBUTION: Sector[] = [
  { sector: "Healthcare services", pct: 25 },
  { sector: "Business services", pct: 25 },
  { sector: "Software / Tech-enabled", pct: 22 },
  { sector: "Industrial / Distribution", pct: 12 },
  { sector: "Education", pct: 8 },
  { sector: "Other", pct: 8 },
];

// ---------------------------------------------------------------------------
// Searcher backgrounds
// ---------------------------------------------------------------------------

export interface Background {
  field: string;
  pct: number;
}

export const SEARCHER_BACKGROUNDS: Background[] = [
  { field: "Finance / Banking", pct: 23 },
  { field: "Consulting", pct: 16 },
  { field: "Operations", pct: 14 },
  { field: "Private Equity", pct: 12 },
  { field: "Engineering / Tech", pct: 11 },
  { field: "Military / Government", pct: 8 },
  { field: "Other", pct: 16 },
];

// ---------------------------------------------------------------------------
// Failure / loss causes
// ---------------------------------------------------------------------------

export interface FailureCause {
  cause: string;
  pct: number;
}

export const FAILURE_CAUSES: FailureCause[] = [
  { cause: "Customer concentration risk", pct: 28 },
  { cause: "Operational execution", pct: 24 },
  { cause: "Overpayment / bad deal structure", pct: 18 },
  { cause: "Industry decline", pct: 14 },
  { cause: "Management / leadership issues", pct: 10 },
  { cause: "Macroeconomic factors", pct: 6 },
];

// ---------------------------------------------------------------------------
// International vs US deal comparison (IESE 2024 + Stanford 2024)
// ---------------------------------------------------------------------------

export interface DealComparison {
  metric: string;
  us: string;
  intl: string;
  usSourceId: string;
  intlSourceId: string;
}

export const DEAL_COMPARISON: DealComparison[] = [
  {
    metric: "Median purchase price",
    us: "$14.4M",
    intl: "$11.7M",
    usSourceId: "stanford",
    intlSourceId: "iese",
  },
  {
    metric: "Median revenue at acquisition",
    us: "$7.3M",
    intl: "$7.8M",
    usSourceId: "stanford",
    intlSourceId: "iese",
  },
  {
    metric: "Median EBITDA margin",
    us: "22.5%",
    intl: "24%",
    usSourceId: "stanford",
    intlSourceId: "iese",
  },
  {
    metric: "Median employees",
    us: "40",
    intl: "50",
    usSourceId: "stanford",
    intlSourceId: "iese",
  },
  {
    metric: "Aggregate gross IRR",
    us: "35.1%",
    intl: "18.1%",
    usSourceId: "stanford",
    intlSourceId: "iese",
  },
  {
    metric: "Aggregate gross MOIC",
    us: "4.5x",
    intl: "2.0x",
    usSourceId: "stanford",
    intlSourceId: "iese",
  },
];

// ---------------------------------------------------------------------------
// Solo vs partner searches (Stanford 2024)
// ---------------------------------------------------------------------------

export interface SearchStructure {
  type: string;
  irr: string;
  detail: string;
  sourceId: string;
}

export const SEARCH_STRUCTURE: SearchStructure[] = [
  {
    type: "Partner search",
    irr: "40.5%",
    detail: "Two co-searchers sharing a fund",
    sourceId: "stanford",
  },
  {
    type: "Solo search",
    irr: "30.3%",
    detail: "Single searcher. 5 of 6 recent 10x+ returns were solo",
    sourceId: "stanford",
  },
];

// ---------------------------------------------------------------------------
// Searcher demographics (Stanford 2024 + IESE 2024)
// ---------------------------------------------------------------------------

export interface DemographicStat {
  value: string;
  label: string;
  detail: string;
  sourceId: string;
}

export const SEARCHER_DEMOGRAPHICS: DemographicStat[] = [
  {
    value: "$139K",
    label: "Average search salary",
    detail: "During the search phase",
    sourceId: "stanford",
  },
  {
    value: "$190K",
    label: "Median CEO salary",
    detail: "After acquisition",
    sourceId: "stanford",
  },
  {
    value: "18%",
    label: "Female searchers",
    detail: "New searchers in 2023 (record high)",
    sourceId: "stanford",
  },
  {
    value: "71%",
    label: "MBA graduates",
    detail: "International searchers with an MBA",
    sourceId: "iese",
  },
  {
    value: "42%",
    label: "US MBA programs",
    detail: "International searchers from US business schools (down from ~50%)",
    sourceId: "iese",
  },
  {
    value: "16",
    label: "Median investors per fund",
    detail: "Number of LPs in a typical search fund",
    sourceId: "iese",
  },
];

// ---------------------------------------------------------------------------
// International fund structure (IESE 2024)
// ---------------------------------------------------------------------------

export interface FundStructureStat {
  label: string;
  intlPct: string;
  usPct: string;
}

export const FUND_STRUCTURE: FundStructureStat[] = [
  { label: "Partnership (2 co-searchers)", intlPct: "40%", usPct: "19%" },
  { label: "Solo searcher", intlPct: "60%", usPct: "81%" },
];

// ---------------------------------------------------------------------------
// International sector distribution (IESE 2024)
// ---------------------------------------------------------------------------

export const INTL_SECTOR_DISTRIBUTION: Sector[] = [
  { sector: "Technology / Software", pct: 28 },
  { sector: "Manufacturing", pct: 18 },
  { sector: "Healthcare", pct: 15 },
  { sector: "Transportation & Logistics", pct: 12 },
  { sector: "Business services", pct: 14 },
  { sector: "Other", pct: 13 },
];

// ---------------------------------------------------------------------------
// International searcher backgrounds (IESE 2024, 2022-2023 cohort)
// ---------------------------------------------------------------------------

export const INTL_SEARCHER_BACKGROUNDS: Background[] = [
  { field: "Management consulting", pct: 26 },
  { field: "Financial services", pct: 20 },
  { field: "Line / General management", pct: 14 },
  { field: "Other", pct: 40 },
];

// ---------------------------------------------------------------------------
// Exit performance (Stanford 2024)
// ---------------------------------------------------------------------------

export interface ExitStat {
  value: string;
  label: string;
  detail: string;
  sourceId: string;
}

export const EXIT_PERFORMANCE: ExitStat[] = [
  {
    value: "42.9%",
    label: "IRR on exited deals",
    detail: "Up from 36.8% due to recent high-return exits",
    sourceId: "stanford",
  },
  {
    value: "$6.1M",
    label: "Average CEO equity (operating)",
    detail: "Entrepreneurs still running their acquired company",
    sourceId: "stanford",
  },
  {
    value: "$5.7M",
    label: "Average CEO equity (exited)",
    detail: "Entrepreneurs who have completed an exit",
    sourceId: "stanford",
  },
  {
    value: "21",
    label: "International exits to date",
    detail: "15 positive returns, 6 total losses",
    sourceId: "iese",
  },
];
