import type { JSX } from "react";

// ---------------------------------------------------------------------------
// Article metadata
// ---------------------------------------------------------------------------

export interface ArticleMeta {
  slug: string;
  title: string;
  description: string;
  readTime: string;
  tag: string;
  category: string;
  ogTitle: string;
  ogDescription: string;
}

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
    readTime: "12 min read",
    tag: "Guide",
    category: "Getting Started",
    ogTitle: "What is a Search Fund? The Complete Guide to Entrepreneurship Through Acquisition",
    ogDescription:
      "From fundraising to exit — understand how search funds work, key statistics, and why ETA is one of the best paths to becoming a CEO.",
  },
  {
    slug: "self-funded-vs-traditional",
    title: "Self-Funded Search vs. Traditional Search Fund",
    description:
      "Compare the two main ETA models: economics, risk, flexibility, and which path is right for you.",
    readTime: "9 min read",
    tag: "Guide",
    category: "Getting Started",
    ogTitle: "Self-Funded Search vs. Traditional Search Fund — Which Path Is Right for You?",
    ogDescription:
      "20% equity vs. 80%. Lower risk vs. more control. Compare the economics and trade-offs of both search fund models.",
  },
  {
    slug: "why-invest-in-search-funds",
    title: "Why Invest in Search Funds?",
    description:
      "35% IRR track record, portfolio construction, the European opportunity — a guide for prospective search fund investors.",
    readTime: "12 min read",
    tag: "Investor",
    category: "Getting Started",
    ogTitle: "Why Invest in Search Funds? A Guide for Investors",
    ogDescription:
      "35% aggregate IRR, 4.5x ROIC over 40 years. Learn how search fund investing works, how to evaluate searchers, and why Europe is the next frontier.",
  },
  {
    slug: "women-in-eta",
    title: "Women & Diversity in Search Funds",
    description:
      "Current state, dedicated funds, mentorship networks, performance data, and building inclusive organizations post-acquisition.",
    readTime: "12 min read",
    tag: "Guide",
    category: "Getting Started",
    ogTitle: "Women & Diversity in Search Funds — Resources, Data & Opportunities",
    ogDescription:
      "Women represent ~15% of searchers but deliver comparable returns. Discover the organizations, funds, and strategies driving diversity in ETA.",
  },

  // ── Fundraising & Investors ──────────────────────────────────────────
  {
    slug: "writing-a-ppm",
    title: "How to Write a PPM (Private Placement Memorandum)",
    description:
      "Section-by-section guide to writing a compelling PPM for your search fund, with common mistakes to avoid.",
    readTime: "15 min read",
    tag: "Guide",
    category: "Fundraising & Investors",
    ogTitle: "How to Write a Search Fund PPM — Section-by-Section Guide",
    ogDescription:
      "From executive summary to risk factors — learn how to craft a Private Placement Memorandum that convinces investors to back your search.",
  },
  {
    slug: "fundraising-deck",
    title: "How to Structure Your Fundraising Deck",
    description:
      "Slide-by-slide guide to building a compelling search fund investor deck, with design tips and meeting strategy.",
    readTime: "12 min read",
    tag: "Guide",
    category: "Fundraising & Investors",
    ogTitle: "Search Fund Fundraising Deck — Slide-by-Slide Guide",
    ogDescription:
      "Build a fundraising deck that tells your story. Slide-by-slide breakdown, design tips, and how to run an effective investor meeting.",
  },
  {
    slug: "finding-investors",
    title: "How to Find Search Fund Investors",
    description:
      "Strategies for connecting with investors who back search fund entrepreneurs across Europe and the US.",
    readTime: "10 min read",
    tag: "Guide",
    category: "Fundraising & Investors",
    ogTitle: "How to Find & Convince Search Fund Investors to Back Your Search",
    ogDescription:
      "Ex-searchers, family offices, institutional investors — learn how to approach them, what they look for, and how to close your fundraise.",
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
  },
  {
    slug: "business-valuation",
    title: "How to Value a Small Business for Acquisition",
    description:
      "Valuation methods for SME acquisitions: EBITDA multiples, DCF, asset-based approaches, and common pitfalls.",
    readTime: "12 min read",
    tag: "Guide",
    category: "Deal Execution",
    ogTitle: "How to Value a Small Business — Valuation Guide for Search Fund Acquisitions",
    ogDescription:
      "EBITDA multiples, DCF, adjusted EBITDA — learn the valuation methods that matter for SME acquisitions and avoid overpaying.",
  },
  {
    slug: "deal-sourcing-strategies",
    title: "Deal Sourcing Strategies for Search Funds",
    description:
      "Proprietary vs intermediated deal flow, broker relationships, direct outreach, online platforms, and building a deal funnel.",
    readTime: "14 min read",
    tag: "Guide",
    category: "Deal Execution",
    ogTitle: "Deal Sourcing Strategies for Search Funds — Build Your Deal Pipeline",
    ogDescription:
      "1,000 companies contacted → 1 acquisition. Learn the sourcing strategies, platforms, and conversion metrics that successful searchers use.",
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
  },

  // ── Legal & Tax ──────────────────────────────────────────────────────
  {
    slug: "search-fund-legal-structure",
    title: "Search Fund Legal Structure & Entity Setup",
    description:
      "US (LLC/LP) and European structures (SAS, GmbH, Ltd) explained, including the two-entity model and tax implications.",
    readTime: "14 min read",
    tag: "Legal",
    category: "Legal & Tax",
    ogTitle: "Search Fund Legal Structures — US & European Entity Setup Guide",
    ogDescription:
      "LLC, LP, SAS, GmbH, Ltd — understand the legal structures used in search fund acquisitions across the US and Europe.",
  },
  {
    slug: "acquisition-financing",
    title: "How to Finance a Search Fund Acquisition",
    description:
      "Capital stack overview: senior debt, SBA loans, European government programs, seller notes, and equity structuring.",
    readTime: "14 min read",
    tag: "Guide",
    category: "Legal & Tax",
    ogTitle: "How to Finance a Search Fund Acquisition — Complete Capital Stack Guide",
    ogDescription:
      "Senior debt, SBA 7(a), BPI France, KfW, seller notes, equity — learn how to structure the capital stack for your acquisition.",
  },
  {
    slug: "tax-optimization",
    title: "Tax Optimization for Search Fund Acquisitions",
    description:
      "Asset vs stock purchase, QSBS, Dutreil pact, holding structures — tax strategies for US and European acquisitions.",
    readTime: "13 min read",
    tag: "Legal",
    category: "Legal & Tax",
    ogTitle: "Tax Optimization for Search Fund Acquisitions — US & Europe",
    ogDescription:
      "QSBS, Dutreil pact, integration fiscale, asset vs stock — understand the tax strategies that can save you millions on your acquisition.",
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
  },

  // ── Operations & Growth ──────────────────────────────────────────────
  {
    slug: "first-100-days",
    title: "Search Fund CEO: The First 100 Days",
    description:
      "What to do in the critical first 100 days after acquiring a business — from team alignment to quick wins.",
    readTime: "9 min read",
    tag: "Operations",
    category: "Operations & Growth",
    ogTitle: "Your First 100 Days as Search Fund CEO — A Step-by-Step Playbook",
    ogDescription:
      "The critical first 100 days after acquiring a company. Learn what to do (and what to avoid) from successful search fund operators.",
  },
  {
    slug: "investor-relations",
    title: "Investor Relations & Reporting Best Practices",
    description:
      "Monthly updates, quarterly calls, and post-acquisition reporting — how to keep investors informed and engaged.",
    readTime: "11 min read",
    tag: "Operations",
    category: "Operations & Growth",
    ogTitle: "Investor Relations & Reporting for Search Fund CEOs",
    ogDescription:
      "Build trust with your investors through transparent, structured reporting. Templates and best practices for monthly updates and board calls.",
  },
  {
    slug: "advisory-board",
    title: "Building Your Advisory Board & Support Network",
    description:
      "Who to recruit, how to compensate them, and how to leverage the ETA ecosystem for long-term success.",
    readTime: "10 min read",
    tag: "Operations",
    category: "Operations & Growth",
    ogTitle: "Building an Advisory Board for Your Search Fund Acquisition",
    ogDescription:
      "Industry experts, ex-operators, functional specialists — learn how to build and compensate an advisory board that drives results.",
  },
  {
    slug: "buy-and-build",
    title: "Add-On Acquisitions & Buy-and-Build Strategy",
    description:
      "Platform vs bolt-on, sourcing add-ons, integration playbook, multiple arbitrage, and creating enterprise value through scale.",
    readTime: "14 min read",
    tag: "Operations",
    category: "Operations & Growth",
    ogTitle: "Buy-and-Build Strategy for Search Fund CEOs — Add-On Acquisitions Guide",
    ogDescription:
      "Buy at 4x, sell combined at 7-8x. Learn how to source, finance, and integrate add-on acquisitions to build a platform worth multiples more.",
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
  },

  // ── Research & Data ──────────────────────────────────────────────────
  {
    slug: "stanford-2024-study",
    title: "Stanford 2024 Search Fund Study: Key Takeaways",
    description:
      "A deep dive into the 2024 Stanford GSB study covering 681 search funds, 35% IRR, and the latest trends shaping the industry.",
    readTime: "10 min read",
    tag: "Research",
    category: "Research & Data",
    ogTitle: "Stanford 2024 Search Fund Study: 681 Funds, 35% IRR — What the Data Shows",
    ogDescription:
      "The most comprehensive search fund dataset ever: 35% IRR, 4.5x returns, record 94 new funds in 2023. Key takeaways for searchers and investors.",
  },
  {
    slug: "search-fund-returns",
    title: "Search Fund Returns & Performance Data",
    description:
      "Analysis of search fund performance data, IRR benchmarks, and success factors from 40 years of data.",
    readTime: "8 min read",
    tag: "Data",
    category: "Research & Data",
    ogTitle: "Search Fund Returns: 35% IRR Over 40 Years — Performance Data & Benchmarks",
    ogDescription:
      "How do search funds compare to PE and VC? Explore 40 years of return data, acquisition rates, and deal characteristics.",
  },

  // ── Regional Guides ──────────────────────────────────────────────────
  {
    slug: "eta-europe",
    title: "ETA in Europe: The Opportunity",
    description:
      "Why Europe is the fastest-growing market for search funds, with millions of SMEs facing succession challenges.",
    readTime: "10 min read",
    tag: "Guide",
    category: "Regional Guides",
    ogTitle: "ETA in Europe: Why Search Funds Are Booming Across the Continent",
    ogDescription:
      "23 million SMEs, a massive succession wave, and lower multiples than the US. Discover why Europe is the new frontier for ETA.",
  },
  {
    slug: "eta-france",
    title: "ETA in France: How to Acquire a Business",
    description:
      "A comprehensive guide to acquiring a business in France, covering legal structures, due diligence, and financing.",
    readTime: "15 min read",
    tag: "Guide",
    category: "Regional Guides",
    ogTitle: "ETA in France: The Complete Guide to Acquiring a Business",
    ogDescription:
      "700,000 businesses changing hands, strong financing options, and a thriving ETA ecosystem. Learn how to acquire a company in France.",
  },
  {
    slug: "eta-germany",
    title: "ETA in Germany: The Mittelstand Opportunity",
    description:
      "Navigate the German Mittelstand: how to find, acquire, and operate SMEs in Europe's largest economy.",
    readTime: "14 min read",
    tag: "Guide",
    category: "Regional Guides",
    ogTitle: "ETA in Germany: Acquiring Mittelstand Companies — A Complete Guide",
    ogDescription:
      "190,000 German businesses need successors by 2026. Discover how to tap into the Mittelstand — world-class companies at attractive valuations.",
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
  },

  // ── Industry Playbooks ─────────────────────────────────────────────
  {
    slug: "saas-acquisition",
    title: "Acquiring a SaaS Business: The Search Fund Playbook",
    description:
      "Key metrics (ARR, churn, LTV/CAC, NRR), valuation multiples, due diligence specifics, and growth levers post-acquisition.",
    readTime: "14 min read",
    tag: "Guide",
    category: "Industry Playbooks",
    ogTitle: "Acquiring a SaaS Business — The Search Fund Playbook",
    ogDescription:
      "ARR, churn, NRR, Rule of 40 — master the metrics, valuation, and growth levers for SaaS acquisitions through search funds.",
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
  },

  // ── Searcher Toolkit ───────────────────────────────────────────────
  {
    slug: "eta-vs-startups",
    title: "ETA vs. Startups vs. Franchises: Choosing Your Path",
    description:
      "Risk profiles, capital requirements, time to profitability, control, success rates, and a decision framework.",
    readTime: "12 min read",
    tag: "Guide",
    category: "Searcher Toolkit",
    ogTitle: "ETA vs. Startups vs. Franchises — Which Path to Business Ownership?",
    ogDescription:
      "90% startup failure vs ~15% franchise vs ~33% ETA. Compare risk, returns, capital needs, and lifestyle to find your path.",
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
  },
  {
    slug: "searcher-tools",
    title: "Tools & Technology for Search Fund Entrepreneurs",
    description:
      "CRM, financial modeling, legal docs, AI tools, deal sourcing platforms, and the recommended tech stack by search phase.",
    readTime: "10 min read",
    tag: "Guide",
    category: "Searcher Toolkit",
    ogTitle: "Tools & Technology for Search Fund Entrepreneurs",
    ogDescription:
      "HubSpot, Pipedrive, DocuSign, Axial, LinkedIn Sales Navigator, ChatGPT — the complete tech stack for every search phase.",
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
  },

  // ── Resources ────────────────────────────────────────────────────────
  {
    slug: "eta-reading-list",
    title: "Essential ETA Reading List",
    description:
      "The must-read books, studies, and resources every aspiring search fund entrepreneur should know.",
    readTime: "6 min read",
    tag: "Resources",
    category: "Resources",
    ogTitle: "The Essential ETA Reading List for Aspiring Search Fund Entrepreneurs",
    ogDescription:
      "Stanford studies, INSEAD research, HBR guides, top podcasts, and key conferences. Everything you need to read before launching your search.",
  },
];

// ---------------------------------------------------------------------------
// Derived lookup maps
// ---------------------------------------------------------------------------

/** SEO metadata keyed by slug — uses ogTitle/ogDescription for richer page titles */
export const articlesMeta: Record<
  string,
  { title: string; description: string; ogTitle: string; ogDescription: string }
> = Object.fromEntries(
  allArticles.map((a) => [
    a.slug,
    {
      title: a.ogTitle,
      description: a.ogDescription,
      ogTitle: a.ogTitle,
      ogDescription: a.ogDescription,
    },
  ]),
);

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
};
