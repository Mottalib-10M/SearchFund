export interface ToolMeta {
  slug: string;
  name: string;
  description: string;
  ogTitle: string;
  ogDescription: string;
}

export const tools: ToolMeta[] = [
  {
    slug: "ebitda-multiple-estimator",
    name: "EBITDA Multiple Estimator",
    description: "Estimate acquisition multiples by sector and geography. See typical EBITDA multiples for SME transactions.",
    ogTitle: "EBITDA Multiple Estimator: Free ETA Tool | SearchFundMarket",
    ogDescription: "What EBITDA multiple should you pay? Estimate acquisition multiples by industry, company size, and geography. Free interactive tool for search fund buyers.",
  },
  {
    slug: "search-capital-calculator",
    name: "Search Capital Calculator",
    description: "Calculate how much capital to raise for your search fund - search phase costs, personal runway, and reserves.",
    ogTitle: "Search Capital Calculator: Free ETA Tool | SearchFundMarket",
    ogDescription: "How much capital do you need to raise? Model search phase costs, personal runway, legal fees, and recommended reserves. Free calculator for ETA entrepreneurs.",
  },
  {
    slug: "cap-table-simulator",
    name: "Cap Table Simulator",
    description: "Model search fund economics - searcher equity, investor returns, step-up, and preferred distributions.",
    ogTitle: "Cap Table Simulator: Free ETA Tool | SearchFundMarket",
    ogDescription: "Model your search fund cap table from fundraise to exit. Simulate searcher equity, investor step-up, preferred returns, dilution, and exit distributions.",
  },
  {
    slug: "lbo-simulator",
    name: "LBO Simulator",
    description: "Model leveraged buyout structures - debt, equity, seller notes, and cash flow coverage analysis.",
    ogTitle: "LBO Simulator: Leveraged Buyout Modeler | SearchFundMarket",
    ogDescription: "Build a leveraged buyout model for your next acquisition. Simulate debt layers, equity splits, seller notes, and cash flow coverage ratios in real time.",
  },
  {
    slug: "valuation-calculator",
    name: "Valuation Calculator",
    description: "Value a business using multiples and DCF methods. Compare approaches side by side.",
    ogTitle: "Valuation Calculator: Free ETA Tool | SearchFundMarket",
    ogDescription: "Value any business using EBITDA multiples and discounted cash flow analysis. Compare methods side by side with adjustable assumptions. Free tool for acquirers.",
  },
  {
    slug: "value-creation-simulator",
    name: "Value Creation Simulator",
    description: "Model post-acquisition value creation - revenue growth, margin improvement, bolt-on acquisitions, and multiple expansion.",
    ogTitle: "Value Creation Simulator: Free ETA Tool | SearchFundMarket",
    ogDescription: "Model post-acquisition value creation for your portfolio company. Simulate revenue growth, margin improvements, bolt-on acquisitions, and exit enterprise value.",
  },
  {
    slug: "exit-returns-calculator",
    name: "Exit Returns Calculator",
    description: "Calculate exit returns across scenarios - financial sale, strategic sale, and dividend recapitalization.",
    ogTitle: "Exit Returns Calculator: Free ETA Tool | SearchFundMarket",
    ogDescription: "Calculate search fund exit returns across three scenarios. Compare financial sale, strategic sale, and dividend recapitalization with MOIC and IRR analysis.",
  },
];

export function getToolBySlug(slug: string) {
  return tools.find((t) => t.slug === slug);
}

export function getAllToolSlugs() {
  return tools.map((t) => t.slug);
}
