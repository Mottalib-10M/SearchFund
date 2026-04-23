export interface ToolMeta {
  slug: string;
  name: string;
  description: string;
  ogDescription: string;
}

export const tools: ToolMeta[] = [
  {
    slug: "ebitda-multiple-estimator",
    name: "EBITDA Multiple Estimator",
    description: "Estimate acquisition multiples by sector and geography. See typical EBITDA multiples for SME transactions.",
    ogDescription: "Estimate EBITDA multiples for SME acquisitions by sector and country. Free interactive tool for search fund entrepreneurs.",
  },
  {
    slug: "search-capital-calculator",
    name: "Search Capital Calculator",
    description: "Calculate how much capital to raise for your search fund — search phase costs, personal runway, and reserves.",
    ogDescription: "Plan your search fund raise. Calculate search phase costs, personal runway needs, and recommended capital reserves.",
  },
  {
    slug: "cap-table-simulator",
    name: "Cap Table Simulator",
    description: "Model search fund economics — searcher equity, investor returns, step-up, and preferred distributions.",
    ogDescription: "Simulate search fund cap table scenarios. Model searcher equity, investor step-up, preferred returns, and exit distributions.",
  },
  {
    slug: "lbo-simulator",
    name: "LBO Simulator",
    description: "Model leveraged buyout structures — debt, equity, seller notes, and cash flow coverage analysis.",
    ogDescription: "Build LBO models for small business acquisitions. Simulate debt structures, seller financing, and cash flow coverage ratios.",
  },
  {
    slug: "valuation-calculator",
    name: "Valuation Calculator",
    description: "Value a business using multiples and DCF methods. Compare approaches side by side.",
    ogDescription: "Calculate business valuations using EBITDA multiples and discounted cash flow analysis. Free tool for acquirers.",
  },
];

export function getToolBySlug(slug: string) {
  return tools.find((t) => t.slug === slug);
}

export function getAllToolSlugs() {
  return tools.map((t) => t.slug);
}
