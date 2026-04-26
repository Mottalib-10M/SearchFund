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
