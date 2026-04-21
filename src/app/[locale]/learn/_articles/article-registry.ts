import type { JSX } from "react";

// ---------------------------------------------------------------------------
// Article metadata
// ---------------------------------------------------------------------------

export interface ArticleSource {
  name: string;
  title: string;
  url?: string;
  year?: number;
}

export interface ArticleMeta {
  slug: string;
  title: string;
  description: string;
  readTime: string;
  tag: string;
  category: string;
  ogTitle: string;
  ogDescription: string;
  datePublished: string;
  dateModified: string;
  sources?: ArticleSource[];
}

// ---------------------------------------------------------------------------
// Category metadata — for category landing pages
// ---------------------------------------------------------------------------

export interface CategoryMeta {
  slug: string;
  name: string;
  description: string;
  ogDescription: string;
}

export const categoryMeta: CategoryMeta[] = [
  {
    slug: "getting-started",
    name: "Getting Started",
    description: "Everything you need to know before launching your search fund — models, economics, and the ETA landscape.",
    ogDescription: "New to search funds? Start here. Understand the ETA model, compare traditional vs self-funded approaches, and learn why investors allocate to search funds.",
  },
  {
    slug: "fundraising-investors",
    name: "Fundraising & Investors",
    description: "How to raise capital, write a PPM, build your investor deck, and structure equity for your search fund.",
    ogDescription: "From writing your PPM to closing your fundraise — guides on finding investors, structuring equity, and building compelling fundraising materials.",
  },
  {
    slug: "deal-execution",
    name: "Deal Execution",
    description: "Sourcing deals, valuation, due diligence, LOIs, negotiation, and closing your acquisition.",
    ogDescription: "Master the deal process: sourcing, valuation, QoE analysis, LOI negotiation, earn-outs, and closing tactics for search fund acquisitions.",
  },
  {
    slug: "legal-tax",
    name: "Legal & Tax",
    description: "Entity structures, acquisition financing, tax optimization, seller financing, and working with professional advisors.",
    ogDescription: "LLC vs GmbH vs SAS, SBA 7(a), seller notes, QSBS, Dutreil — the legal and tax frameworks for search fund acquisitions in the US and Europe.",
  },
  {
    slug: "operations-growth",
    name: "Operations & Growth",
    description: "Post-acquisition playbooks — from your first 100 days to digital transformation, revenue growth, and exit planning.",
    ogDescription: "First 100 days, board governance, buy-and-build, digital transformation, revenue growth, and working capital management for search fund CEOs.",
  },
  {
    slug: "research-data",
    name: "Research & Data",
    description: "Stanford studies, IESE/INSEAD research, performance benchmarks, and notable search fund success stories.",
    ogDescription: "Data-driven insights: Stanford 2024 study, European research from IESE & INSEAD, return benchmarks, and famous search fund success stories.",
  },
  {
    slug: "regional-guides",
    name: "Regional Guides",
    description: "Country-by-country guides to ETA — legal structures, financing programs, market dynamics, and local ecosystems.",
    ogDescription: "ETA across borders: acquisition guides for the US, UK, France, Germany, Spain, Italy, Nordics, Benelux, and Switzerland.",
  },
  {
    slug: "investor-comparisons",
    name: "Investor Comparisons",
    description: "How search fund investing compares to private equity, venture capital, public markets, and real estate.",
    ogDescription: "Search funds vs PE, VC, public markets, and real estate — compare returns, risk, liquidity, and portfolio construction across asset classes.",
  },
  {
    slug: "industry-playbooks",
    name: "Industry Playbooks",
    description: "Sector-specific acquisition guides — SaaS, healthcare, manufacturing, professional services, e-commerce, and more.",
    ogDescription: "Industry-specific playbooks for acquiring SaaS, healthcare, manufacturing, professional services, home services, e-commerce, education, and financial services businesses.",
  },
  {
    slug: "searcher-toolkit",
    name: "Searcher Toolkit",
    description: "Practical tools, mindset frameworks, career transition advice, and technology for search fund entrepreneurs.",
    ogDescription: "Tools, psychology, career transition, and technology for searchers — everything you need beyond the deal itself.",
  },
  {
    slug: "resources",
    name: "Resources",
    description: "Curated reading lists, recommended books, podcasts, conferences, and communities for ETA professionals.",
    ogDescription: "The essential reading list, top podcasts, key conferences, and communities for search fund entrepreneurs and investors.",
  },
];

/** Map category display name → category slug */
export const categorySlugMap: Record<string, string> = Object.fromEntries(
  categoryMeta.map((c) => [c.name, c.slug]),
);

/** Map category slug → CategoryMeta */
export const categoryBySlug: Record<string, CategoryMeta> = Object.fromEntries(
  categoryMeta.map((c) => [c.slug, c]),
);

// ---------------------------------------------------------------------------
// Reading paths — curated article sequences for the hub page
// ---------------------------------------------------------------------------

export interface ReadingPath {
  title: string;
  description: string;
  slugs: string[];
  color: string; // Tailwind bg class
}

export const readingPaths: ReadingPath[] = [
  {
    title: "Searcher\u2019s Journey",
    description: "From first steps to your first 100 days as CEO",
    slugs: [
      "getting-started",
      "self-funded-vs-traditional",
      "pre-search-preparation",
      "deal-sourcing-strategies",
      "letter-of-intent",
      "due-diligence-checklist",
      "negotiation-tactics",
      "first-100-days",
    ],
    color: "bg-purple-50 border-purple-200",
  },
  {
    title: "Investor\u2019s Guide",
    description: "Evaluate search funds as an asset class",
    slugs: [
      "why-invest-in-search-funds",
      "search-fund-returns",
      "stanford-2024-study",
      "finding-investors",
      "searcher-compensation",
      "cap-tables-equity",
    ],
    color: "bg-blue-50 border-blue-200",
  },
  {
    title: "Operator\u2019s Playbook",
    description: "Run and grow your acquired company",
    slugs: [
      "first-100-days",
      "management-transition",
      "board-governance",
      "digital-transformation",
      "revenue-growth-playbook",
      "exit-strategies",
    ],
    color: "bg-green-50 border-green-200",
  },
  {
    title: "ETA in Europe",
    description: "Country-by-country acquisition guides",
    slugs: [
      "eta-europe",
      "eta-france",
      "eta-germany",
      "eta-uk",
      "eta-spain",
      "eta-nordics",
      "eta-benelux",
      "eta-switzerland",
      "eta-italy",
      "eta-us",
    ],
    color: "bg-amber-50 border-amber-200",
  },
];

// ---------------------------------------------------------------------------
// Categories (display order)
// ---------------------------------------------------------------------------

export const categories = [
  "Getting Started",
  "Fundraising & Investors",
  "Deal Execution",
  "Legal & Tax",
  "Operations & Growth",
  "Research & Data",
  "Regional Guides",
  "Investor Comparisons",
  "Industry Playbooks",
  "Searcher Toolkit",
  "Resources",
] as const;

export type Category = (typeof categories)[number];

// ---------------------------------------------------------------------------
// All articles — ordered by category then display priority
// ---------------------------------------------------------------------------

export const allArticles: ArticleMeta[] = [
  // ── Getting Started ──────────────────────────────────────────────────
  {
    slug: "getting-started",
    title: "What is a Search Fund? Complete Guide",
    description:
      "Everything you need to know about the search fund model, from fundraising to acquisition to operations.",
    readTime: "14 min read",
    tag: "Guide",
    category: "Getting Started",
    ogTitle: "What is a Search Fund? The Complete Guide to Entrepreneurship Through Acquisition",
    ogDescription:
      "From fundraising to exit — understand how search funds work, key statistics, and why ETA is one of the best paths to becoming a CEO.",
    datePublished: "2024-03-12",
    dateModified: "2025-04-17",
    sources: [
      { name: "Stanford GSB", title: "2024 Search Fund Study", url: "https://www.gsb.stanford.edu/faculty-research/case-studies/search-funds", year: 2024 },
      { name: "IESE", title: "International Search Fund Study", year: 2024 },
    ],
  },
  {
    slug: "self-funded-vs-traditional",
    title: "Self-Funded Search vs. Traditional Search Fund",
    description:
      "Compare the two main ETA models: economics, risk, flexibility, and which path is right for you.",
    readTime: "10 min read",
    tag: "Guide",
    category: "Getting Started",
    ogTitle: "Self-Funded Search vs. Traditional Search Fund — Which Path Is Right for You?",
    ogDescription:
      "20% equity vs. 80%. Lower risk vs. more control. Compare the economics and trade-offs of both search fund models.",
    datePublished: "2024-03-28",
    dateModified: "2025-04-17",
    sources: [
      { name: "Stanford GSB", title: "2024 Search Fund Study", year: 2024 },
    ],
  },
  {
    slug: "why-invest-in-search-funds",
    title: "Why Invest in Search Funds?",
    description:
      "35% IRR track record, portfolio construction, the European opportunity — a guide for prospective search fund investors.",
    readTime: "7 min read",
    tag: "Investor",
    category: "Getting Started",
    ogTitle: "Why Invest in Search Funds? A Guide for Investors",
    ogDescription:
      "35% aggregate IRR, 4.5x ROIC over 40 years. Learn how search fund investing works, how to evaluate searchers, and why Europe is the next frontier.",
    datePublished: "2024-04-15",
    dateModified: "2025-04-17",
    sources: [
      { name: "Stanford GSB", title: "2024 Search Fund Study", year: 2024 },
    ],
  },
  {
    slug: "women-in-eta",
    title: "Women & Diversity in Search Funds",
    description:
      "Current state, dedicated funds, mentorship networks, performance data, and building inclusive organizations post-acquisition.",
    readTime: "11 min read",
    tag: "Guide",
    category: "Getting Started",
    ogTitle: "Women & Diversity in Search Funds — Resources, Data & Opportunities",
    ogDescription:
      "Women represent ~15% of searchers but deliver comparable returns. Discover the organizations, funds, and strategies driving diversity in ETA.",
    datePublished: "2024-05-03",
    dateModified: "2025-04-17",
    sources: [
      { name: "Stanford GSB", title: "2024 Search Fund Study", year: 2024 },
    ],
  },

  // ── Fundraising & Investors ──────────────────────────────────────────
  {
    slug: "writing-a-ppm",
    title: "How to Write a PPM (Private Placement Memorandum)",
    description:
      "Section-by-section guide to writing a compelling PPM for your search fund, with common mistakes to avoid.",
    readTime: "12 min read",
    tag: "Guide",
    category: "Fundraising & Investors",
    ogTitle: "How to Write a Search Fund PPM — Section-by-Section Guide",
    ogDescription:
      "From executive summary to risk factors — learn how to craft a Private Placement Memorandum that convinces investors to back your search.",
    datePublished: "2024-04-08",
    dateModified: "2025-04-17",
  },
  {
    slug: "fundraising-deck",
    title: "How to Structure Your Fundraising Deck",
    description:
      "Slide-by-slide guide to building a compelling search fund investor deck, with design tips and meeting strategy.",
    readTime: "11 min read",
    tag: "Guide",
    category: "Fundraising & Investors",
    ogTitle: "Search Fund Fundraising Deck — Slide-by-Slide Guide",
    ogDescription:
      "Build a fundraising deck that tells your story. Slide-by-slide breakdown, design tips, and how to run an effective investor meeting.",
    datePublished: "2024-04-22",
    dateModified: "2025-04-17",
  },
  {
    slug: "finding-investors",
    title: "How to Find Search Fund Investors",
    description:
      "Strategies for connecting with investors who back search fund entrepreneurs across Europe and the US.",
    readTime: "11 min read",
    tag: "Guide",
    category: "Fundraising & Investors",
    ogTitle: "How to Find & Convince Search Fund Investors to Back Your Search",
    ogDescription:
      "Ex-searchers, family offices, institutional investors — learn how to approach them, what they look for, and how to close your fundraise.",
    datePublished: "2024-05-06",
    dateModified: "2025-04-17",
  },
  {
    slug: "cap-tables-equity",
    title: "Search Fund Economics: Cap Tables & Equity",
    description:
      "Worked examples of search fund cap tables, equity splits, vesting, and dilution for both traditional and self-funded models.",
    readTime: "12 min read",
    tag: "Guide",
    category: "Fundraising & Investors",
    ogTitle: "Search Fund Cap Tables & Equity — Worked Examples",
    ogDescription:
      "Understand how equity works in search funds: step-up, carried interest, vesting schedules, and dilution math with worked examples.",
    datePublished: "2024-05-20",
    dateModified: "2025-04-17",
    sources: [
      { name: "Stanford GSB", title: "2024 Search Fund Study", year: 2024 },
    ],
  },
  {
    slug: "searcher-compensation",
    title: "Searcher Compensation: Salary, Equity & Economics",
    description:
      "Search-phase salary, post-acquisition CEO comp, three equity tranches, lifetime economics, and tax planning strategies.",
    readTime: "12 min read",
    tag: "Guide",
    category: "Fundraising & Investors",
    ogTitle: "Searcher Compensation: Salary, Equity & Lifetime Economics Explained",
    ogDescription:
      "$130K search salary, $200-270K CEO comp, 25% equity in three tranches, $6.4M average lifetime economics. The complete guide to search fund compensation.",
    datePublished: "2024-06-10",
    dateModified: "2025-04-17",
    sources: [
      { name: "Stanford GSB", title: "2024 Search Fund Study", year: 2024 },
    ],
  },

  // ── Deal Execution ───────────────────────────────────────────────────
  {
    slug: "letter-of-intent",
    title: "Letter of Intent (LOI): How to Draft & Negotiate",
    description:
      "Key sections, binding vs non-binding clauses, negotiation strategies, and EU-specific LOI formats.",
    readTime: "13 min read",
    tag: "Guide",
    category: "Deal Execution",
    ogTitle: "How to Draft & Negotiate a Letter of Intent for SME Acquisitions",
    ogDescription:
      "Everything you need to know about LOIs: purchase price, exclusivity, due diligence terms, and negotiation tactics for search fund deals.",
    datePublished: "2024-05-14",
    dateModified: "2025-04-17",
  },
  {
    slug: "due-diligence-checklist",
    title: "ETA Due Diligence Checklist",
    description:
      "A practical checklist covering financial, legal, operational, and commercial due diligence for acquisitions.",
    readTime: "11 min read",
    tag: "Checklist",
    category: "Deal Execution",
    ogTitle: "The Complete Due Diligence Checklist for Search Fund Acquisitions",
    ogDescription:
      "Don't miss anything before signing. Financial, legal, operational, and commercial due diligence — every item you need to check.",
    datePublished: "2024-05-28",
    dateModified: "2025-04-17",
    sources: [
      { name: "Stanford GSB", title: "2024 Search Fund Study", year: 2024 },
    ],
  },
  {
    slug: "business-valuation",
    title: "How to Value a Small Business for Acquisition",
    description:
      "Valuation methods for SME acquisitions: EBITDA multiples, DCF, asset-based approaches, and common pitfalls.",
    readTime: "10 min read",
    tag: "Guide",
    category: "Deal Execution",
    ogTitle: "How to Value a Small Business — Valuation Guide for Search Fund Acquisitions",
    ogDescription:
      "EBITDA multiples, DCF, adjusted EBITDA — learn the valuation methods that matter for SME acquisitions and avoid overpaying.",
    datePublished: "2024-06-11",
    dateModified: "2025-04-17",
    sources: [
      { name: "Stanford GSB", title: "2024 Search Fund Study", year: 2024 },
      { name: "Pepperdine University", title: "Private Capital Markets Report", year: 2024 },
    ],
  },
  {
    slug: "deal-sourcing-strategies",
    title: "Deal Sourcing Strategies for Search Funds",
    description:
      "Proprietary vs intermediated deal flow, broker relationships, direct outreach, online platforms, and building a deal funnel.",
    readTime: "10 min read",
    tag: "Guide",
    category: "Deal Execution",
    ogTitle: "Deal Sourcing Strategies for Search Funds — Build Your Deal Pipeline",
    ogDescription:
      "1,000 companies contacted → 1 acquisition. Learn the sourcing strategies, platforms, and conversion metrics that successful searchers use.",
    datePublished: "2024-06-25",
    dateModified: "2025-04-17",
  },
  {
    slug: "quality-of-earnings",
    title: "Quality of Earnings (QoE) Analysis",
    description:
      "What QoE covers, EBITDA adjustments, red flags, when to hire a QoE firm, cost, and working with accountants.",
    readTime: "13 min read",
    tag: "Guide",
    category: "Deal Execution",
    ogTitle: "Quality of Earnings Analysis for Search Fund Acquisitions",
    ogDescription:
      "EBITDA adjustments, revenue quality, working capital analysis — understand QoE reports and how they affect deal pricing and negotiation.",
    datePublished: "2024-07-09",
    dateModified: "2025-04-17",
  },
  {
    slug: "exit-strategies",
    title: "Exit Strategies for Search Fund CEOs",
    description:
      "Strategic sale, PE sale, management buyout, dividend recap — timeline planning, exit readiness, and maximizing valuation.",
    readTime: "13 min read",
    tag: "Guide",
    category: "Deal Execution",
    ogTitle: "Exit Strategies for Search Fund CEOs — Maximize Your Return",
    ogDescription:
      "Strategic sale, PE exit, MBO, dividend recap — plan your exit 18-24 months ahead. Readiness checklist, banker selection, and tax planning.",
    datePublished: "2024-07-23",
    dateModified: "2025-04-17",
  },
  {
    slug: "negotiation-tactics",
    title: "Negotiation Tactics for SME Acquisitions",
    description:
      "Price anchoring, exclusivity leverage, seller psychology, multi-party dynamics, and structuring win-win deals.",
    readTime: "13 min read",
    tag: "Guide",
    category: "Deal Execution",
    ogTitle: "Negotiation Tactics for SME Acquisitions — A Search Fund Guide",
    ogDescription:
      "Price anchoring, exclusivity leverage, seller psychology, and multi-party dynamics — master the art of SME acquisition negotiation.",
    datePublished: "2024-08-06",
    dateModified: "2025-04-17",
  },
  {
    slug: "earn-out-structures",
    title: "Earn-Outs & Contingent Consideration",
    description:
      "Structuring earn-outs, measurement periods, dispute resolution, and alternatives to bridge valuation gaps.",
    readTime: "12 min read",
    tag: "Guide",
    category: "Deal Execution",
    ogTitle: "Earn-Outs & Contingent Consideration in Search Fund Acquisitions",
    ogDescription:
      "Structure earn-outs that align incentives: measurement periods, EBITDA vs revenue metrics, dispute resolution, and creative alternatives.",
    datePublished: "2024-08-19",
    dateModified: "2025-04-17",
  },

  // ── Legal & Tax ──────────────────────────────────────────────────────
  {
    slug: "search-fund-legal-structure",
    title: "Search Fund Legal Structure & Entity Setup",
    description:
      "US (LLC/LP) and European structures (SAS, GmbH, Ltd) explained, including the two-entity model and tax implications.",
    readTime: "8 min read",
    tag: "Legal",
    category: "Legal & Tax",
    ogTitle: "Search Fund Legal Structures — US & European Entity Setup Guide",
    ogDescription:
      "LLC, LP, SAS, GmbH, Ltd — understand the legal structures used in search fund acquisitions across the US and Europe.",
    datePublished: "2024-06-04",
    dateModified: "2025-04-17",
  },
  {
    slug: "acquisition-financing",
    title: "How to Finance a Search Fund Acquisition",
    description:
      "Capital stack overview: senior debt, SBA loans, European government programs, seller notes, and equity structuring.",
    readTime: "7 min read",
    tag: "Guide",
    category: "Legal & Tax",
    ogTitle: "How to Finance a Search Fund Acquisition — Complete Capital Stack Guide",
    ogDescription:
      "Senior debt, SBA 7(a), BPI France, KfW, seller notes, equity — learn how to structure the capital stack for your acquisition.",
    datePublished: "2024-06-18",
    dateModified: "2025-04-17",
    sources: [
      { name: "SBA", title: "7(a) Loan Program Overview", year: 2024 },
      { name: "Bpifrance", title: "Transmission-Reprise", year: 2024 },
    ],
  },
  {
    slug: "tax-optimization",
    title: "Tax Optimization for Search Fund Acquisitions",
    description:
      "Asset vs stock purchase, QSBS, Dutreil pact, holding structures — tax strategies for US and European acquisitions.",
    readTime: "7 min read",
    tag: "Legal",
    category: "Legal & Tax",
    ogTitle: "Tax Optimization for Search Fund Acquisitions — US & Europe",
    ogDescription:
      "QSBS, Dutreil pact, integration fiscale, asset vs stock — understand the tax strategies that can save you millions on your acquisition.",
    datePublished: "2024-07-02",
    dateModified: "2025-04-17",
    sources: [
      { name: "Stanford GSB", title: "2024 Search Fund Study", year: 2024 },
    ],
  },
  {
    slug: "working-with-advisors",
    title: "Working with Advisors: Lawyers, Accountants & Brokers",
    description:
      "When to hire, how to select, typical fees, managing the advisory team, and avoiding over-reliance.",
    readTime: "12 min read",
    tag: "Guide",
    category: "Legal & Tax",
    ogTitle: "Working with Advisors in Search Fund Acquisitions — Lawyers, Accountants & Brokers",
    ogDescription:
      "Attorney fees ($30-80K), QoE costs ($20-60K), broker commissions (8-12%). Learn when to hire, how to select, and how to manage your advisory team.",
    datePublished: "2024-07-16",
    dateModified: "2025-04-17",
  },
  {
    slug: "seller-financing",
    title: "Seller Financing: Structures, Terms & Negotiation",
    description:
      "Seller notes, subordination agreements, typical terms (2-5yr, 4-6%), earn-out alternatives, and negotiation strategies.",
    readTime: "12 min read",
    tag: "Guide",
    category: "Legal & Tax",
    ogTitle: "Seller Financing for Search Fund Acquisitions — Structures, Terms & Negotiation",
    ogDescription:
      "Seller notes (2-5 years, 4-6%), subordination agreements, personal guarantees, and creative structures. The complete guide to seller financing.",
    datePublished: "2024-08-01",
    dateModified: "2025-04-17",
  },

  // ── Operations & Growth ──────────────────────────────────────────────
  {
    slug: "first-100-days",
    title: "Search Fund CEO: The First 100 Days",
    description:
      "What to do in the critical first 100 days after acquiring a business — from team alignment to quick wins.",
    readTime: "12 min read",
    tag: "Operations",
    category: "Operations & Growth",
    ogTitle: "Your First 100 Days as Search Fund CEO — A Step-by-Step Playbook",
    ogDescription:
      "The critical first 100 days after acquiring a company. Learn what to do (and what to avoid) from successful search fund operators.",
    datePublished: "2024-07-10",
    dateModified: "2025-04-17",
  },
  {
    slug: "investor-relations",
    title: "Investor Relations & Reporting Best Practices",
    description:
      "Monthly updates, quarterly calls, and post-acquisition reporting — how to keep investors informed and engaged.",
    readTime: "12 min read",
    tag: "Operations",
    category: "Operations & Growth",
    ogTitle: "Investor Relations & Reporting for Search Fund CEOs",
    ogDescription:
      "Build trust with your investors through transparent, structured reporting. Templates and best practices for monthly updates and board calls.",
    datePublished: "2024-07-24",
    dateModified: "2025-04-17",
  },
  {
    slug: "advisory-board",
    title: "Building Your Advisory Board & Support Network",
    description:
      "Who to recruit, how to compensate them, and how to leverage the ETA ecosystem for long-term success.",
    readTime: "12 min read",
    tag: "Operations",
    category: "Operations & Growth",
    ogTitle: "Building an Advisory Board for Your Search Fund Acquisition",
    ogDescription:
      "Industry experts, ex-operators, functional specialists — learn how to build and compensate an advisory board that drives results.",
    datePublished: "2024-08-07",
    dateModified: "2025-04-17",
  },
  {
    slug: "buy-and-build",
    title: "Add-On Acquisitions & Buy-and-Build Strategy",
    description:
      "Platform vs bolt-on, sourcing add-ons, integration playbook, multiple arbitrage, and creating enterprise value through scale.",
    readTime: "9 min read",
    tag: "Operations",
    category: "Operations & Growth",
    ogTitle: "Buy-and-Build Strategy for Search Fund CEOs — Add-On Acquisitions Guide",
    ogDescription:
      "Buy at 4x, sell combined at 7-8x. Learn how to source, finance, and integrate add-on acquisitions to build a platform worth multiples more.",
    datePublished: "2024-08-21",
    dateModified: "2025-04-17",
  },
  {
    slug: "management-transition",
    title: "Management Transition & Employee Communication",
    description:
      "Pre-announcement planning, Day 1 communication, retention strategies, seller transition period, and handling employee anxiety.",
    readTime: "12 min read",
    tag: "Operations",
    category: "Operations & Growth",
    ogTitle: "Management Transition After Acquisition — Employee Communication Playbook",
    ogDescription:
      "Day 1 all-hands, retention bonuses, seller transition agreements — the complete playbook for managing the human side of an acquisition.",
    datePublished: "2024-09-04",
    dateModified: "2025-04-17",
  },
  {
    slug: "board-governance",
    title: "Board Governance for Search Fund Companies",
    description:
      "Board composition, meeting cadence, CEO-board dynamics, independent directors, and fiduciary vs advisory roles.",
    readTime: "11 min read",
    tag: "Operations",
    category: "Operations & Growth",
    ogTitle: "Board Governance for Search Fund Companies — A CEO's Guide",
    ogDescription:
      "3-5 board members, monthly meetings year one, effective board packages — master the CEO-board relationship for better decisions and stronger returns.",
    datePublished: "2024-09-18",
    dateModified: "2025-04-17",
  },
  {
    slug: "digital-transformation",
    title: "Post-Acquisition Digital Transformation",
    description:
      "Legacy system migration, CRM/ERP implementation, e-commerce channels, and realistic budgets for SME digitization.",
    readTime: "13 min read",
    tag: "Operations",
    category: "Operations & Growth",
    ogTitle: "Post-Acquisition Digital Transformation — A Search Fund CEO's Guide",
    ogDescription:
      "Legacy systems, CRM/ERP, e-commerce channels, data analytics — a realistic playbook for digitizing the SME you just acquired.",
    datePublished: "2024-10-02",
    dateModified: "2025-04-17",
  },
  {
    slug: "revenue-growth-playbook",
    title: "Revenue Growth Playbook Post-Acquisition",
    description:
      "Pricing optimization, sales development, cross-selling, channel expansion, and a 100-day revenue assessment framework.",
    readTime: "9 min read",
    tag: "Operations",
    category: "Operations & Growth",
    ogTitle: "Revenue Growth Playbook for Search Fund CEOs",
    ogDescription:
      "Pricing optimization, sales development, cross-selling, channel expansion — the revenue growth playbook for your first year as CEO.",
    datePublished: "2024-10-16",
    dateModified: "2025-04-17",
  },
  {
    slug: "working-capital-management",
    title: "Working Capital Management for New CEOs",
    description:
      "Cash conversion cycle, accounts receivable management, inventory optimization, supplier terms, and cash flow forecasting.",
    readTime: "11 min read",
    tag: "Operations",
    category: "Operations & Growth",
    ogTitle: "Working Capital Management for Search Fund CEOs",
    ogDescription:
      "Cash conversion cycle, AR management, inventory turns, supplier terms — master working capital to unlock cash in your acquired business.",
    datePublished: "2024-11-01",
    dateModified: "2025-04-17",
  },

  // ── Research & Data ──────────────────────────────────────────────────
  {
    slug: "stanford-2024-study",
    title: "Stanford 2024 Search Fund Study: Key Takeaways",
    description:
      "A deep dive into the 2024 Stanford GSB study covering 681 search funds, 35% IRR, and the latest trends shaping the industry.",
    readTime: "11 min read",
    tag: "Research",
    category: "Research & Data",
    ogTitle: "Stanford 2024 Search Fund Study: 681 Funds, 35% IRR — What the Data Shows",
    ogDescription:
      "The most comprehensive search fund dataset ever: 35% IRR, 4.5x returns, record 94 new funds in 2023. Key takeaways for searchers and investors.",
    datePublished: "2024-08-12",
    dateModified: "2025-04-17",
    sources: [
      { name: "Stanford GSB", title: "2024 Search Fund Study: Selected Observations", url: "https://www.gsb.stanford.edu/faculty-research/case-studies/search-funds", year: 2024 },
    ],
  },
  {
    slug: "search-fund-returns",
    title: "Search Fund Returns & Performance Data",
    description:
      "Analysis of search fund performance data, IRR benchmarks, and success factors from 40 years of data.",
    readTime: "10 min read",
    tag: "Data",
    category: "Research & Data",
    ogTitle: "Search Fund Returns: 35% IRR Over 40 Years — Performance Data & Benchmarks",
    ogDescription:
      "How do search funds compare to PE and VC? Explore 40 years of return data, acquisition rates, and deal characteristics.",
    datePublished: "2024-08-26",
    dateModified: "2025-04-17",
    sources: [
      { name: "Stanford GSB", title: "2024 Search Fund Study", year: 2024 },
      { name: "IESE", title: "International Search Fund Study", year: 2023 },
    ],
  },
  {
    slug: "search-fund-success-stories",
    title: "Famous Search Fund Success Stories",
    description:
      "Asurion, EndoChoice, and other notable exits — key decisions, growth strategies, and lessons from top-performing search funds.",
    readTime: "9 min read",
    tag: "Research",
    category: "Research & Data",
    ogTitle: "Famous Search Fund Success Stories — Lessons from Top Performers",
    ogDescription:
      "Asurion, EndoChoice, and more — the stories behind search fund exits that returned 10x+. Key decisions, growth strategies, and lessons for searchers.",
    datePublished: "2024-09-09",
    dateModified: "2025-04-17",
    sources: [
      { name: "Stanford GSB", title: "2024 Search Fund Study", year: 2024 },
      { name: "Harvard Business School", title: "Search Fund Primer", year: 2023 },
    ],
  },
  {
    slug: "european-search-fund-research",
    title: "European Search Fund Research: IESE & INSEAD Studies",
    description:
      "EU vs US performance, deal sizes, success factors, growth trajectory, and key findings from leading European business schools.",
    readTime: "11 min read",
    tag: "Research",
    category: "Research & Data",
    ogTitle: "European Search Fund Research — IESE & INSEAD Studies Analyzed",
    ogDescription:
      "European search funds deliver comparable returns to US peers. IESE and INSEAD data on deal sizes, success factors, and the EU growth trajectory.",
    datePublished: "2024-10-01",
    dateModified: "2025-04-17",
    sources: [
      { name: "IESE", title: "International Search Fund Study", year: 2023 },
      { name: "INSEAD", title: "European Search Fund Study", year: 2022 },
    ],
  },

  // ── Regional Guides ──────────────────────────────────────────────────
  {
    slug: "eta-europe",
    title: "ETA in Europe: The Opportunity",
    description:
      "Why Europe is the fastest-growing market for search funds, with millions of SMEs facing succession challenges.",
    readTime: "2 min read",
    tag: "Guide",
    category: "Regional Guides",
    ogTitle: "ETA in Europe: Why Search Funds Are Booming Across the Continent",
    ogDescription:
      "23 million SMEs, a massive succession wave, and lower multiples than the US. Discover why Europe is the new frontier for ETA.",
    datePublished: "2024-09-10",
    dateModified: "2025-04-17",
    sources: [
      { name: "IESE", title: "International Search Fund Study", year: 2023 },
      { name: "INSEAD", title: "European Search Fund Study", year: 2022 },
      { name: "European Commission", title: "SME Performance Review", year: 2024 },
    ],
  },
  {
    slug: "eta-france",
    title: "ETA in France: How to Acquire a Business",
    description:
      "A comprehensive guide to acquiring a business in France, covering legal structures, due diligence, and financing.",
    readTime: "12 min read",
    tag: "Guide",
    category: "Regional Guides",
    ogTitle: "ETA in France: The Complete Guide to Acquiring a Business",
    ogDescription:
      "700,000 businesses changing hands, strong financing options, and a thriving ETA ecosystem. Learn how to acquire a company in France.",
    datePublished: "2024-09-24",
    dateModified: "2025-04-17",
    sources: [
      { name: "HEC Paris", title: "Entrepreneurial Acquisition in France", year: 2023 },
      { name: "Bpifrance", title: "Les PME-ETI en France", year: 2024 },
    ],
  },
  {
    slug: "eta-germany",
    title: "ETA in Germany: The Mittelstand Opportunity",
    description:
      "Navigate the German Mittelstand: how to find, acquire, and operate SMEs in Europe's largest economy.",
    readTime: "10 min read",
    tag: "Guide",
    category: "Regional Guides",
    ogTitle: "ETA in Germany: Acquiring Mittelstand Companies — A Complete Guide",
    ogDescription:
      "190,000 German businesses need successors by 2026. Discover how to tap into the Mittelstand — world-class companies at attractive valuations.",
    datePublished: "2024-10-08",
    dateModified: "2025-04-17",
    sources: [
      { name: "KfW", title: "Nachfolge-Monitoring Mittelstand", year: 2024 },
    ],
  },
  {
    slug: "eta-uk",
    title: "ETA in the UK: Acquiring a Business in Britain",
    description:
      "UK market dynamics, Ltd/LLP structures, British Business Bank financing, and the growing ETA ecosystem in Britain.",
    readTime: "8 min read",
    tag: "Guide",
    category: "Regional Guides",
    ogTitle: "ETA in the UK: Acquiring a Business in Britain — A Complete Guide",
    ogDescription:
      "5.5 million SMEs, Ltd/LLP structures, British Business Bank financing, and a mature advisory ecosystem. Your guide to ETA in the UK.",
    datePublished: "2024-10-22",
    dateModified: "2025-04-17",
  },
  {
    slug: "eta-spain",
    title: "ETA in Spain & Iberia: The Emerging Opportunity",
    description:
      "Spain\u2019s succession crisis, SL/SA framework, ICO financing, lower entry multiples, and the Iberian ETA ecosystem.",
    readTime: "13 min read",
    tag: "Guide",
    category: "Regional Guides",
    ogTitle: "ETA in Spain & Iberia — The Emerging Search Fund Opportunity",
    ogDescription:
      "A massive succession crisis, lower multiples, ICO financing, and a nascent but growing ETA ecosystem. Discover the opportunity in Spain and Portugal.",
    datePublished: "2024-11-05",
    dateModified: "2025-04-17",
    sources: [
      { name: "IESE", title: "Search Funds in Spain & Latin America", year: 2023 },
    ],
  },
  {
    slug: "eta-nordics",
    title: "ETA in the Nordics: Scandinavia & Finland",
    description:
      "AB/AS corporate forms, Vaekstfonden/Almi financing, high-trust business culture, and premium Nordic SMEs.",
    readTime: "12 min read",
    tag: "Guide",
    category: "Regional Guides",
    ogTitle: "ETA in the Nordics: Scandinavia & Finland — Search Fund Guide",
    ogDescription:
      "High-trust culture, premium SMEs, strong government financing (Vaekstfonden, Almi). Your guide to search fund acquisitions in the Nordic countries.",
    datePublished: "2024-11-19",
    dateModified: "2025-04-17",
    sources: [
      { name: "CBS Copenhagen", title: "Nordic Search Fund Ecosystem", year: 2023 },
    ],
  },
  {
    slug: "eta-benelux",
    title: "ETA in the Benelux: Netherlands, Belgium & Luxembourg",
    description:
      "BV/NV structures, the Dutch succession wave, MKB financing, and the Benelux deal landscape.",
    readTime: "13 min read",
    tag: "Guide",
    category: "Regional Guides",
    ogTitle: "ETA in the Benelux — Netherlands, Belgium & Luxembourg Guide",
    ogDescription:
      "BV/NV structures, Dutch succession wave, MKB financing, and a thriving SME market. Your guide to search fund acquisitions in the Benelux.",
    datePublished: "2024-12-03",
    dateModified: "2025-04-17",
  },
  {
    slug: "eta-switzerland",
    title: "ETA in Switzerland: Acquiring in the Alpine Market",
    description:
      "GmbH/AG structures, cantonal tax advantages, the Nachfolge succession crisis, and Switzerland\u2019s multilingual market.",
    readTime: "12 min read",
    tag: "Guide",
    category: "Regional Guides",
    ogTitle: "ETA in Switzerland — Acquiring a Business in the Alpine Market",
    ogDescription:
      "GmbH/AG structures, cantonal tax competition, the Nachfolge crisis, and world-class SMEs. Your guide to search fund acquisitions in Switzerland.",
    datePublished: "2024-12-17",
    dateModified: "2025-04-17",
  },
  {
    slug: "eta-italy",
    title: "ETA in Italy: Navigating the Italian SME Market",
    description:
      "4.4 million Italian SMEs, SRL/SPA structures, family business culture, SIMEST financing, and the generational transition.",
    readTime: "13 min read",
    tag: "Guide",
    category: "Regional Guides",
    ogTitle: "ETA in Italy — Navigating the Italian SME Market",
    ogDescription:
      "4.4 million SMEs, deep family business culture, SRL/SPA structures, and SIMEST financing. Your guide to search fund acquisitions in Italy.",
    datePublished: "2025-01-07",
    dateModified: "2025-04-17",
    sources: [
      { name: "Bocconi", title: "Search Funds in Italy", year: 2023 },
    ],
  },
  {
    slug: "eta-us",
    title: "ETA in the US: The Original Search Fund Market",
    description:
      "SBA 7(a) loans, LLC/LP structures, the Stanford ecosystem, and how the US market compares to Europe.",
    readTime: "14 min read",
    tag: "Guide",
    category: "Regional Guides",
    ogTitle: "ETA in the US — The Original Search Fund Market",
    ogDescription:
      "SBA 7(a), LLC/LP, Stanford/HBS ecosystem, 40+ years of data. The complete guide to search fund acquisitions in the United States.",
    datePublished: "2025-01-21",
    dateModified: "2025-04-17",
  },

  // ── Investor Comparisons ────────────────────────────────────────────
  {
    slug: "eta-vs-private-equity",
    title: "ETA vs. Private Equity: Key Differences for Investors",
    description:
      "Deal size, returns, control, fees, hold periods, and alignment — how ETA compares to traditional PE investing.",
    readTime: "13 min read",
    tag: "Investor",
    category: "Investor Comparisons",
    ogTitle: "ETA vs. Private Equity: Key Differences for Investors",
    ogDescription:
      "$1-20M ETA vs $100M+ PE, 35% IRR vs 15-20%, step-up equity vs 2/20. Compare every dimension of ETA and PE investing.",
    datePublished: "2024-10-10",
    dateModified: "2025-04-17",
  },
  {
    slug: "eta-vs-venture-capital",
    title: "ETA vs. Venture Capital: Risk, Returns & Strategy",
    description:
      "Power law vs consistent returns, failure rates, cash flow vs growth, and portfolio construction differences.",
    readTime: "12 min read",
    tag: "Investor",
    category: "Investor Comparisons",
    ogTitle: "ETA vs. Venture Capital: Risk, Returns & Strategy Compared",
    ogDescription:
      "90% startup failure vs ~33% search fund. Cash flow from day 1 vs years of burn. Compare ETA and VC across every dimension that matters.",
    datePublished: "2024-10-24",
    dateModified: "2025-04-17",
  },
  {
    slug: "eta-vs-public-markets",
    title: "ETA vs. Public Markets & Hedge Funds",
    description:
      "Liquidity trade-off, alpha generation, correlation, Sharpe ratios, and why family offices allocate to search funds.",
    readTime: "11 min read",
    tag: "Investor",
    category: "Investor Comparisons",
    ogTitle: "ETA vs. Public Markets & Hedge Funds — An Investor's Comparison",
    ogDescription:
      "S&P 500 at 10% vs search funds at 35% IRR. Understand the liquidity trade-off, correlation benefits, and portfolio allocation framework.",
    datePublished: "2024-11-07",
    dateModified: "2025-04-17",
  },
  {
    slug: "eta-vs-real-estate",
    title: "ETA vs. Real Estate Investing",
    description:
      "Cap rates vs EBITDA multiples, leverage, management intensity, tax advantages, and cash flow comparison.",
    readTime: "11 min read",
    tag: "Investor",
    category: "Investor Comparisons",
    ogTitle: "ETA vs. Real Estate Investing — Which Alternative Asset Wins?",
    ogDescription:
      "Cap rates (5-8%) vs EBITDA multiples (3-6x), 80% LTV vs 50-60% acquisition financing. Compare returns, risk, and tax advantages.",
    datePublished: "2024-12-05",
    dateModified: "2025-04-17",
  },

  // ── Industry Playbooks ─────────────────────────────────────────────
  {
    slug: "saas-acquisition",
    title: "Acquiring a SaaS Business: The Search Fund Playbook",
    description:
      "Key metrics (ARR, churn, LTV/CAC, NRR), valuation multiples, due diligence specifics, and growth levers post-acquisition.",
    readTime: "9 min read",
    tag: "Guide",
    category: "Industry Playbooks",
    ogTitle: "Acquiring a SaaS Business — The Search Fund Playbook",
    ogDescription:
      "ARR, churn, NRR, Rule of 40 — master the metrics, valuation, and growth levers for SaaS acquisitions through search funds.",
    datePublished: "2024-11-12",
    dateModified: "2025-04-17",
  },
  {
    slug: "healthcare-acquisition",
    title: "Acquiring a Healthcare Services Business",
    description:
      "Regulatory landscape, reimbursement models, clinical integration, roll-up dynamics, and compliance requirements.",
    readTime: "13 min read",
    tag: "Guide",
    category: "Industry Playbooks",
    ogTitle: "Acquiring a Healthcare Services Business — Search Fund Guide",
    ogDescription:
      "Medicare, HIPAA, Stark Law, credentialing — navigate healthcare regulation and build a defensible platform through ETA.",
    datePublished: "2024-11-26",
    dateModified: "2025-04-17",
  },
  {
    slug: "manufacturing-acquisition",
    title: "Acquiring a Manufacturing or Industrial Business",
    description:
      "Capital intensity, supply chain DD, workforce considerations, equipment valuation, and environmental liabilities.",
    readTime: "13 min read",
    tag: "Guide",
    category: "Industry Playbooks",
    ogTitle: "Acquiring a Manufacturing Business — Search Fund Due Diligence Guide",
    ogDescription:
      "Equipment valuation, environmental liabilities, skilled trades workforce, Lean/Six Sigma opportunities — the complete manufacturing acquisition guide.",
    datePublished: "2024-12-10",
    dateModified: "2025-04-17",
  },
  {
    slug: "professional-services-acquisition",
    title: "Acquiring a Professional Services Firm",
    description:
      "Key-person risk, utilization rates, client concentration, partner buyouts, and building enterprise value in services.",
    readTime: "13 min read",
    tag: "Guide",
    category: "Industry Playbooks",
    ogTitle: "Acquiring a Professional Services Firm — Search Fund Playbook",
    ogDescription:
      "Key-person risk, utilization rates, client concentration, partner buyouts — the complete playbook for acquiring professional services firms.",
    datePublished: "2024-12-24",
    dateModified: "2025-04-17",
  },
  {
    slug: "home-services-acquisition",
    title: "Acquiring a Home Services & Field Services Business",
    description:
      "Route density, technician recruitment, recurring revenue models, roll-up economics, and operational levers.",
    readTime: "12 min read",
    tag: "Guide",
    category: "Industry Playbooks",
    ogTitle: "Acquiring a Home Services Business — Search Fund Playbook",
    ogDescription:
      "Route density, technician recruitment, recurring revenue, roll-up economics — the playbook for home services and field services acquisitions.",
    datePublished: "2025-01-14",
    dateModified: "2025-04-17",
  },
  {
    slug: "ecommerce-acquisition",
    title: "Acquiring an E-commerce & D2C Brand",
    description:
      "Amazon/Shopify due diligence, CAC trends, supply chain analysis, brand defensibility, and post-acquisition growth levers.",
    readTime: "13 min read",
    tag: "Guide",
    category: "Industry Playbooks",
    ogTitle: "Acquiring an E-commerce & D2C Brand — Search Fund Guide",
    ogDescription:
      "Amazon/Shopify DD, CAC trends, supply chain risk, brand defensibility — the complete guide to e-commerce and D2C acquisitions.",
    datePublished: "2025-01-28",
    dateModified: "2025-04-17",
  },
  {
    slug: "education-acquisition",
    title: "Acquiring an Education & Training Business",
    description:
      "B2B vs B2C models, accreditation requirements, instructor dependency, digital transformation, and enrollment economics.",
    readTime: "12 min read",
    tag: "Guide",
    category: "Industry Playbooks",
    ogTitle: "Acquiring an Education & Training Business — Search Fund Guide",
    ogDescription:
      "B2B vs B2C, accreditation, instructor dependency, digital transformation — the playbook for education and training business acquisitions.",
    datePublished: "2025-02-11",
    dateModified: "2025-04-17",
  },
  {
    slug: "financial-services-acquisition",
    title: "Acquiring a Financial Services or Insurance Business",
    description:
      "FCA/BaFin licensing, book-of-business valuation, renewal economics, compliance frameworks, and roll-up strategies.",
    readTime: "14 min read",
    tag: "Guide",
    category: "Industry Playbooks",
    ogTitle: "Acquiring a Financial Services or Insurance Business — Search Fund Guide",
    ogDescription:
      "FCA/BaFin licensing, book-of-business valuation, renewal economics — the complete guide to financial services and insurance acquisitions.",
    datePublished: "2025-02-25",
    dateModified: "2025-04-17",
  },

  // ── Searcher Toolkit ───────────────────────────────────────────────
  {
    slug: "eta-vs-startups",
    title: "ETA vs. Startups vs. Franchises: Choosing Your Path",
    description:
      "Risk profiles, capital requirements, time to profitability, control, success rates, and a decision framework.",
    readTime: "7 min read",
    tag: "Guide",
    category: "Searcher Toolkit",
    ogTitle: "ETA vs. Startups vs. Franchises — Which Path to Business Ownership?",
    ogDescription:
      "90% startup failure vs ~15% franchise vs ~33% ETA. Compare risk, returns, capital needs, and lifestyle to find your path.",
    datePublished: "2024-12-12",
    dateModified: "2025-04-17",
  },
  {
    slug: "searcher-psychology",
    title: "The Psychology of the Search: Mindset & Resilience",
    description:
      "Dealing with rejection, decision fatigue, imposter syndrome, partner dynamics, and maintaining momentum.",
    readTime: "11 min read",
    tag: "Guide",
    category: "Searcher Toolkit",
    ogTitle: "The Psychology of the Search — Mindset & Resilience for Searchers",
    ogDescription:
      "50+ NDAs, 5-10 LOIs, 1-2 broken deals before closing. Learn the mental health strategies that keep successful searchers going.",
    datePublished: "2025-01-09",
    dateModified: "2025-04-17",
  },
  {
    slug: "searcher-tools",
    title: "Tools & Technology for Search Fund Entrepreneurs",
    description:
      "CRM, financial modeling, legal docs, AI tools, deal sourcing platforms, and the recommended tech stack by search phase.",
    readTime: "12 min read",
    tag: "Guide",
    category: "Searcher Toolkit",
    ogTitle: "Tools & Technology for Search Fund Entrepreneurs",
    ogDescription:
      "HubSpot, Pipedrive, DocuSign, Axial, LinkedIn Sales Navigator, ChatGPT — the complete tech stack for every search phase.",
    datePublished: "2025-01-23",
    dateModified: "2025-04-17",
  },
  {
    slug: "pre-search-preparation",
    title: "Pre-Search Preparation: Career Transition to ETA",
    description:
      "When to start, building networks, developing industry thesis, financial runway planning, and MBA vs no MBA.",
    readTime: "12 min read",
    tag: "Guide",
    category: "Searcher Toolkit",
    ogTitle: "Pre-Search Preparation — How to Transition Your Career to ETA",
    ogDescription:
      "6-12 months of preparation separates successful searchers from the rest. Industry thesis, financial runway, skills, and network building.",
    datePublished: "2025-02-06",
    dateModified: "2025-04-17",
  },

  // ── Resources ────────────────────────────────────────────────────────
  {
    slug: "eta-reading-list",
    title: "Essential ETA Reading List",
    description:
      "The must-read books, studies, and resources every aspiring search fund entrepreneur should know.",
    readTime: "2 min read",
    tag: "Resources",
    category: "Resources",
    ogTitle: "The Essential ETA Reading List for Aspiring Search Fund Entrepreneurs",
    ogDescription:
      "Stanford studies, INSEAD research, HBR guides, top podcasts, and key conferences. Everything you need to read before launching your search.",
    datePublished: "2025-01-15",
    dateModified: "2025-04-17",
  },
];

// ---------------------------------------------------------------------------
// Derived lookup maps
// ---------------------------------------------------------------------------

/** SEO metadata keyed by slug — uses ogTitle/ogDescription for richer page titles */
export const articlesMeta: Record<
  string,
  { title: string; description: string; ogTitle: string; ogDescription: string; datePublished: string; dateModified: string }
> = Object.fromEntries(
  allArticles.map((a) => [
    a.slug,
    {
      title: a.ogTitle,
      description: a.ogDescription,
      ogTitle: a.ogTitle,
      ogDescription: a.ogDescription,
      datePublished: a.datePublished,
      dateModified: a.dateModified,
    },
  ]),
);

/** Get articles by category name */
export function getArticlesByCategory(categoryName: string): ArticleMeta[] {
  return allArticles.filter((a) => a.category === categoryName);
}

/** Get related articles (same category, excluding current) */
export function getRelatedArticles(slug: string, limit = 3): ArticleMeta[] {
  const article = allArticles.find((a) => a.slug === slug);
  if (!article) return [];
  return allArticles
    .filter((a) => a.category === article.category && a.slug !== slug)
    .slice(0, limit);
}

// ---------------------------------------------------------------------------
// Article components — lazy-loaded map
// ---------------------------------------------------------------------------

import GettingStartedArticle from "./getting-started";
import SelfFundedVsTraditionalArticle from "./self-funded-vs-traditional";
import WhyInvestInSearchFundsArticle from "./why-invest-in-search-funds";
import WritingAPPMArticle from "./writing-a-ppm";
import FundraisingDeckArticle from "./fundraising-deck";
import FindingInvestorsArticle from "./finding-investors";
import CapTablesEquityArticle from "./cap-tables-equity";
import LetterOfIntentArticle from "./letter-of-intent";
import DueDiligenceArticle from "./due-diligence-checklist";
import BusinessValuationArticle from "./business-valuation";
import SearchFundLegalStructureArticle from "./search-fund-legal-structure";
import AcquisitionFinancingArticle from "./acquisition-financing";
import TaxOptimizationArticle from "./tax-optimization";
import First100DaysArticle from "./first-100-days";
import InvestorRelationsArticle from "./investor-relations";
import AdvisoryBoardArticle from "./advisory-board";
import Stanford2024Article from "./stanford-2024-study";
import SearchFundReturnsArticle from "./search-fund-returns";
import ETAEuropeArticle from "./eta-europe";
import ETAFranceArticle from "./eta-france";
import ETAGermanyArticle from "./eta-germany";
import ETAReadingListArticle from "./eta-reading-list";
import ETAvsPrivateEquityArticle from "./eta-vs-private-equity";
import ETAvsVentureCapitalArticle from "./eta-vs-venture-capital";
import ETAvsPublicMarketsArticle from "./eta-vs-public-markets";
import ETAvsRealEstateArticle from "./eta-vs-real-estate";
import DealSourcingStrategiesArticle from "./deal-sourcing-strategies";
import QualityOfEarningsArticle from "./quality-of-earnings";
import ExitStrategiesArticle from "./exit-strategies";
import BuyAndBuildArticle from "./buy-and-build";
import ManagementTransitionArticle from "./management-transition";
import BoardGovernanceArticle from "./board-governance";
import SaaSAcquisitionArticle from "./saas-acquisition";
import HealthcareAcquisitionArticle from "./healthcare-acquisition";
import ManufacturingAcquisitionArticle from "./manufacturing-acquisition";
import SearcherCompensationArticle from "./searcher-compensation";
import WorkingWithAdvisorsArticle from "./working-with-advisors";
import ETAvsStartupsArticle from "./eta-vs-startups";
import SearcherPsychologyArticle from "./searcher-psychology";
import SearcherToolsArticle from "./searcher-tools";
import PreSearchPreparationArticle from "./pre-search-preparation";
import WomenInETAArticle from "./women-in-eta";

// New articles — Wave 3
import ETAUKArticle from "./eta-uk";
import ETASpainArticle from "./eta-spain";
import ETANordicsArticle from "./eta-nordics";
import ETABeneluxArticle from "./eta-benelux";
import ETASwitzerlandArticle from "./eta-switzerland";
import ETAItalyArticle from "./eta-italy";
import ETAUSArticle from "./eta-us";
import ProfessionalServicesAcquisitionArticle from "./professional-services-acquisition";
import HomeServicesAcquisitionArticle from "./home-services-acquisition";
import EcommerceAcquisitionArticle from "./ecommerce-acquisition";
import EducationAcquisitionArticle from "./education-acquisition";
import FinancialServicesAcquisitionArticle from "./financial-services-acquisition";
import NegotiationTacticsArticle from "./negotiation-tactics";
import EarnOutStructuresArticle from "./earn-out-structures";
import SellerFinancingArticle from "./seller-financing";
import DigitalTransformationArticle from "./digital-transformation";
import RevenueGrowthPlaybookArticle from "./revenue-growth-playbook";
import WorkingCapitalManagementArticle from "./working-capital-management";
import SearchFundSuccessStoriesArticle from "./search-fund-success-stories";
import EuropeanSearchFundResearchArticle from "./european-search-fund-research";

export const articleComponents: Record<string, () => JSX.Element> = {
  "getting-started": GettingStartedArticle,
  "self-funded-vs-traditional": SelfFundedVsTraditionalArticle,
  "why-invest-in-search-funds": WhyInvestInSearchFundsArticle,
  "writing-a-ppm": WritingAPPMArticle,
  "fundraising-deck": FundraisingDeckArticle,
  "finding-investors": FindingInvestorsArticle,
  "cap-tables-equity": CapTablesEquityArticle,
  "letter-of-intent": LetterOfIntentArticle,
  "due-diligence-checklist": DueDiligenceArticle,
  "business-valuation": BusinessValuationArticle,
  "search-fund-legal-structure": SearchFundLegalStructureArticle,
  "acquisition-financing": AcquisitionFinancingArticle,
  "tax-optimization": TaxOptimizationArticle,
  "first-100-days": First100DaysArticle,
  "investor-relations": InvestorRelationsArticle,
  "advisory-board": AdvisoryBoardArticle,
  "stanford-2024-study": Stanford2024Article,
  "search-fund-returns": SearchFundReturnsArticle,
  "eta-europe": ETAEuropeArticle,
  "eta-france": ETAFranceArticle,
  "eta-germany": ETAGermanyArticle,
  "eta-reading-list": ETAReadingListArticle,
  "eta-vs-private-equity": ETAvsPrivateEquityArticle,
  "eta-vs-venture-capital": ETAvsVentureCapitalArticle,
  "eta-vs-public-markets": ETAvsPublicMarketsArticle,
  "eta-vs-real-estate": ETAvsRealEstateArticle,
  "deal-sourcing-strategies": DealSourcingStrategiesArticle,
  "quality-of-earnings": QualityOfEarningsArticle,
  "exit-strategies": ExitStrategiesArticle,
  "buy-and-build": BuyAndBuildArticle,
  "management-transition": ManagementTransitionArticle,
  "board-governance": BoardGovernanceArticle,
  "saas-acquisition": SaaSAcquisitionArticle,
  "healthcare-acquisition": HealthcareAcquisitionArticle,
  "manufacturing-acquisition": ManufacturingAcquisitionArticle,
  "searcher-compensation": SearcherCompensationArticle,
  "working-with-advisors": WorkingWithAdvisorsArticle,
  "eta-vs-startups": ETAvsStartupsArticle,
  "searcher-psychology": SearcherPsychologyArticle,
  "searcher-tools": SearcherToolsArticle,
  "pre-search-preparation": PreSearchPreparationArticle,
  "women-in-eta": WomenInETAArticle,
  // Wave 3
  "eta-uk": ETAUKArticle,
  "eta-spain": ETASpainArticle,
  "eta-nordics": ETANordicsArticle,
  "eta-benelux": ETABeneluxArticle,
  "eta-switzerland": ETASwitzerlandArticle,
  "eta-italy": ETAItalyArticle,
  "eta-us": ETAUSArticle,
  "professional-services-acquisition": ProfessionalServicesAcquisitionArticle,
  "home-services-acquisition": HomeServicesAcquisitionArticle,
  "ecommerce-acquisition": EcommerceAcquisitionArticle,
  "education-acquisition": EducationAcquisitionArticle,
  "financial-services-acquisition": FinancialServicesAcquisitionArticle,
  "negotiation-tactics": NegotiationTacticsArticle,
  "earn-out-structures": EarnOutStructuresArticle,
  "seller-financing": SellerFinancingArticle,
  "digital-transformation": DigitalTransformationArticle,
  "revenue-growth-playbook": RevenueGrowthPlaybookArticle,
  "working-capital-management": WorkingCapitalManagementArticle,
  "search-fund-success-stories": SearchFundSuccessStoriesArticle,
  "european-search-fund-research": EuropeanSearchFundResearchArticle,
};
