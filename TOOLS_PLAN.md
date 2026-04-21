# TOOLS_PLAN.md — STEP 2.5 Interactive Calculators & Tools

**Date**: April 2026
**Timeline**: Build over months 2-6 of Phase 4

---

## Why interactive tools?

1. **Backlink magnets**: Calculators get linked to from blogs, forums, and courses
2. **Long session duration**: Users spend 3-5 minutes on a calculator vs 2 min on an article → strong engagement signal for Google
3. **Recurring traffic**: Users bookmark and return to calculators
4. **Email capture**: "Save your results" → email signup
5. **Differentiation**: No ETA-specific calculator suite exists online
6. **Internal linking**: Each tool page has 600-800 words of educational content for SEO

---

## Architecture

All tools live under `/en/tools/[slug]` (and localized `/fr/tools/[slug]` etc. later).

Each tool page structure:
```
/en/tools/[slug]
├── H1: Tool title
├── Educational intro (600-800 words, with H2 subheadings)
├── Interactive calculator widget (React client component)
├── "How this tool works" section (methodology, formulas)
├── Financial disclaimer
├── Related articles (3-5 links)
├── "Share this tool" button
├── JSON-LD WebApplication schema
└── OG image optimized for tool sharing
```

Technical stack:
- React client components with `useState`/`useReducer`
- No external dependencies needed (all math is simple)
- Charts: use a lightweight library (e.g., recharts, already in Next.js ecosystem, or pure SVG)
- Responsive design: full-width on mobile, side-by-side inputs/results on desktop
- Print-friendly output option

---

## Tool #1 — EBITDA Multiple Estimator

**URL**: `/en/tools/ebitda-multiple-estimator`
**Priority**: P1 — Build month 2-3
**SEO target keywords**: "EBITDA multiples by industry", "small business valuation multiples", "SME valuation calculator"

### Purpose
Help users estimate what EBITDA multiple to expect when buying or selling a small business, based on sector, geography, and size.

### Inputs
| Field | Type | Options / Range |
|-------|------|----------------|
| Industry | Dropdown | SaaS, Healthcare, Manufacturing, Professional Services, Home Services, E-commerce, Education, Financial Services, Food & Beverage, Construction, IT Services, Logistics, Retail, Other |
| Country | Dropdown | US, UK, France, Germany, Spain, Italy, Netherlands, Nordics (aggregated), Switzerland, Other Europe |
| Annual Revenue | Slider/input | $500K — $50M |
| EBITDA Margin | Slider | 5% — 40% |
| Revenue Growth Rate | Slider | -10% — 30% |
| Recurring Revenue % | Slider | 0% — 100% |
| Owner Dependency | Radio | Low / Medium / High |
| Customer Concentration | Radio | Low (<10% top customer) / Medium (10-25%) / High (>25%) |

### Outputs
| Output | Format |
|--------|--------|
| Estimated multiple range | "3.5x — 5.2x EBITDA" with bar chart |
| Implied enterprise value range | "$X — $Y" |
| Key factors driving the estimate | Bulleted list explaining up/down adjustments |
| Comparable benchmarks | Table showing sector median, 25th, 75th percentile |
| Confidence level | Low / Medium / High (based on data density for this segment) |

### Data sources for default multiples
- Pepperdine Private Capital Markets Report (published annually)
- BVR DealStats (public summaries)
- GF Data M&A Report (mid-market, quarterly)
- Stanford GSB Search Fund Study (search fund-specific multiples)
- IESE International Search Fund Study (European data)
- PitchBook PE/VC deal multiples (public summaries)

### Multiple adjustment logic
```
base_multiple = sector_median[industry][country]

Adjustments:
+ 0.5-1.5x if recurring revenue > 70%
+ 0.3-0.8x if revenue growth > 15%
+ 0.2-0.5x if EBITDA margin above sector median
- 0.5-1.0x if high owner dependency
- 0.3-0.8x if high customer concentration
- 0.2-0.5x if revenue < $2M (small size discount)
+ 0.3-0.5x if revenue > $10M (size premium)
```

### Educational content outline (700 words)
- H2: What is an EBITDA multiple?
- H2: How multiples vary by industry
- H2: Size premium and small company discount
- H2: What drives multiples higher or lower
- H2: Limitations of multiple-based valuation

### Related articles
- business-valuation
- quality-of-earnings
- negotiation-tactics
- earn-out-structures

---

## Tool #2 — Search Capital Calculator

**URL**: `/en/tools/search-capital-calculator`
**Priority**: P1 — Build month 3
**SEO target keywords**: "search fund raise amount", "how much to raise search fund", "search fund budget"

### Purpose
Help prospective searchers estimate how much capital they need to raise for the search phase.

### Inputs
| Field | Type | Options / Range |
|-------|------|----------------|
| Search model | Radio | Traditional (2 years) / Self-funded / Accelerator |
| Geography | Dropdown | US, UK, France, Germany, Spain, Italy, Other Europe |
| Monthly living costs | Input | $2,000 — $15,000 |
| Expected search duration | Slider | 6 — 30 months |
| Number of co-searchers | Radio | Solo / Pair |
| Travel budget (monthly) | Input | $500 — $5,000 |
| Legal/professional retainer | Input | $500 — $3,000/month |
| Office/coworking | Input | $0 — $2,000/month |
| Technology & subscriptions | Input | $200 — $1,000/month |
| Conference/networking budget | Input | $0 — $500/month |
| Buffer % | Slider | 10% — 30% |

### Outputs
| Output | Format |
|--------|--------|
| Total search capital needed | "$X" with breakdown pie chart |
| Monthly burn rate | "$X/month" |
| Recommended raise amount (with buffer) | "$X (includes Y% buffer)" |
| Cost breakdown by category | Bar chart |
| Comparison to market benchmarks | "Median traditional search fund raises $400-500K" |
| Time to close estimate | "At $X/mo burn, you have Z months of runway" |

### Benchmark data
- Stanford 2024: Median search capital raised $450K (traditional), search phase 22 months median
- IESE European data: Lower living costs but similar total budgets
- Self-funded: $150-250K typical personal investment

### Educational content outline (650 words)
- H2: How much does a search fund raise?
- H2: Key budget categories
- H2: Traditional vs self-funded capital needs
- H2: European vs US cost differences
- H2: Common budgeting mistakes

### Related articles
- getting-started
- self-funded-vs-traditional
- writing-a-ppm
- finding-investors

---

## Tool #3 — Cap Table Simulator

**URL**: `/en/tools/cap-table-simulator`
**Priority**: P1 — Build month 4
**SEO target keywords**: "search fund cap table", "search fund equity structure", "ETA equity calculator"

### Purpose
Visualize how search fund equity evolves from search phase through acquisition to exit.

### Inputs
| Field | Type | Range |
|-------|------|-------|
| Search capital raised | Input | $200K — $2M |
| Number of search investors | Input | 5 — 30 |
| Acquisition price (enterprise value) | Input | $1M — $50M |
| Equity raised at acquisition | Input | $500K — $20M |
| Debt at acquisition | Input | $0 — $30M |
| Seller note | Input | $0 — $10M |
| Searcher step-up equity % | Slider | 15% — 30% (default 20%) |
| Performance tranche % | Slider | 0% — 10% (default 5%) |
| Exit enterprise value | Input | $2M — $200M |
| Hold period (years) | Slider | 3 — 10 |

### Outputs
| Output | Format |
|--------|--------|
| Cap table at search phase | Pie chart: investors vs searcher |
| Cap table at acquisition | Stacked bar: step-up equity, investor new equity, debt |
| Cap table at exit | Waterfall chart: debt paydown → investor returns → searcher equity |
| Searcher total equity % | "X% (step-up Y% + performance Z%)" |
| Investor IRR | "X% IRR over Y years" |
| Investor MOIC | "X.Xx" |
| Searcher total payout | "$X" |
| Sensitivity table | IRR at different exit multiples |

### Educational content outline (700 words)
- H2: How search fund equity works
- H2: The step-up: why searchers get 20-25% for 2% of capital
- H2: Three equity tranches explained
- H2: How dilution works at acquisition
- H2: Example: $5M acquisition walkthrough

### Related articles
- cap-tables-equity
- searcher-compensation
- search-fund-returns

---

## Tool #4 — LBO Simulator

**URL**: `/en/tools/lbo-simulator`
**Priority**: P2 — Build month 5
**SEO target keywords**: "LBO model calculator", "leveraged buyout calculator", "acquisition financing calculator"

### Purpose
Model a leveraged buyout for an SME acquisition — show how debt, equity, and seller notes combine and what returns look like at exit.

### Inputs
| Field | Type | Range |
|-------|------|-------|
| Purchase price | Input | $1M — $50M |
| EBITDA at acquisition | Input | $200K — $10M |
| Senior debt amount | Input | $0 — $30M |
| Senior debt interest rate | Slider | 4% — 12% |
| Senior debt term (years) | Slider | 3 — 10 |
| Seller note amount | Input | $0 — $10M |
| Seller note interest rate | Slider | 3% — 8% |
| Seller note term (years) | Slider | 2 — 7 |
| Equity invested | Calculated | (Purchase price - debt - seller note) |
| Revenue growth rate | Slider | 0% — 20% |
| EBITDA margin trend | Radio | Constant / Improving (+1%/yr) / Declining (-1%/yr) |
| Exit multiple | Slider | 3x — 10x |
| Exit year | Slider | 3 — 10 |
| Capex as % of revenue | Slider | 1% — 10% |
| Working capital as % of revenue change | Slider | 5% — 20% |

### Outputs
| Output | Format |
|--------|--------|
| Sources & Uses table | Table: sources (equity, debt, seller note) vs uses (purchase price, fees) |
| Annual cash flow projection | Table: Revenue, EBITDA, debt service, free cash flow, cumulative |
| Debt paydown schedule | Area chart showing debt declining over time |
| Exit waterfall | Waterfall chart: exit value → debt payoff → seller note → equity value |
| Equity IRR | "X% IRR" |
| Cash-on-cash multiple | "X.Xx" |
| Sensitivity table | IRR × exit multiple × exit year matrix |
| Debt service coverage ratio | "X.Xx (Year 1)" — flag if <1.2x |

### Educational content outline (750 words)
- H2: What is a leveraged buyout?
- H2: How LBOs work for small business acquisitions
- H2: The capital stack: senior debt, seller note, equity
- H2: Key metrics: IRR, MOIC, DSCR
- H2: Common LBO mistakes to avoid

### Related articles
- acquisition-financing
- seller-financing
- business-valuation
- earn-out-structures

---

## Tool #5 — Valuation Calculator (DCF + Multiples)

**URL**: `/en/tools/valuation-calculator`
**Priority**: P2 — Build month 6
**SEO target keywords**: "business valuation calculator", "DCF calculator small business", "SME valuation tool"

### Inputs
| Field | Type | Range |
|-------|------|-------|
| Annual revenue | Input | $500K — $50M |
| EBITDA | Input | $100K — $15M |
| Revenue growth rate (5yr avg) | Slider | 0% — 25% |
| Industry | Dropdown | (same as Tool #1) |
| Discount rate (WACC) | Slider | 8% — 25% (default 15%) |
| Terminal growth rate | Slider | 1% — 4% (default 2.5%) |
| Projection period | Slider | 5 — 10 years |

### Outputs
| Output | Format |
|--------|--------|
| DCF valuation | "$X" with build-up table |
| EBITDA multiple valuation | "$X — $Y range" |
| Revenue multiple valuation | "$X — $Y range" |
| Blended valuation (weighted average) | "$X" with methodology weights |
| Valuation range visualization | Horizontal bar showing min/DCF/multiples/max |
| Key assumptions sensitivity | Table: valuation at ±2% discount rate, ±1x multiple |

### Educational content outline (700 words)
- H2: Three approaches to valuing a small business
- H2: When to use DCF vs multiples
- H2: Adjusted EBITDA: what to normalize
- H2: Discount rates for SME acquisitions
- H2: Why range matters more than a single number

### Related articles
- business-valuation
- quality-of-earnings
- ebitda-multiple-estimator (Tool #1, cross-link)

---

## Tool #6 — Acquisition Readiness Quiz

**URL**: `/en/tools/acquisition-readiness-quiz`
**Priority**: P3 — Build month 4
**SEO target keywords**: "am I ready to buy a business", "ETA readiness assessment", "search fund candidate quiz"

### Purpose
Interactive assessment that helps prospective searchers evaluate whether they're ready to pursue ETA.

### Question categories (20 questions total)

**Experience & Skills (5 questions)**
1. Years of professional experience (0-3 / 3-5 / 5-10 / 10+)
2. Management experience — have you managed people? (none / 1-3 / 3-10 / 10+)
3. P&L responsibility (none / departmental / full P&L)
4. Industry expertise (generalist / 1 sector / deep domain expert)
5. Financial literacy — can you read and analyze financial statements? (basic / intermediate / advanced)

**Financial Readiness (4 questions)**
6. Personal financial runway (months of living costs saved) (<6 / 6-12 / 12-18 / 18+)
7. Personal net worth available for investment ($0 / $25K-100K / $100K-250K / $250K+)
8. Comfort with personal guarantee on acquisition debt (not at all / somewhat / very comfortable)
9. Current personal debt obligations (significant / moderate / minimal)

**Mindset & Personality (5 questions)**
10. Risk tolerance (low / moderate / high)
11. Comfort with ambiguity and incomplete information (low / moderate / high)
12. Ability to handle rejection (struggle with it / manage OK / thrive on it)
13. Decision-making style (need consensus / deliberate / decisive)
14. Long-term orientation — willing to commit 7-10 years? (uncertain / probably / absolutely)

**Network & Resources (3 questions)**
15. Access to potential investors (none / a few / strong network)
16. Access to deal flow (none / some broker relationships / strong pipeline)
17. Mentors/advisors with acquisition experience (none / 1-2 / 3+)

**Personal Situation (3 questions)**
18. Family/partner support for the journey (unsupportive / neutral / fully supportive)
19. Geographic flexibility (anchored to one city / regional / fully flexible)
20. Current employment situation (employed + stable / employed + seeking change / unemployed/MBA student)

### Scoring
Each answer maps to 1-4 points. Total max = 80.

| Score | Rating | Result |
|-------|--------|--------|
| 60-80 | Highly Ready | "You have the experience, resources, and mindset for ETA. Focus on deal sourcing and investor conversations." |
| 45-59 | Mostly Ready | "You're close. Focus on strengthening [weakest category]. Consider an MBA or accelerator program." |
| 30-44 | Getting There | "Build more experience and financial runway. Start networking in ETA communities now." |
| 15-29 | Early Stage | "ETA may be right for you in the future. Invest 2-3 years in building skills and savings." |

### Output
- Overall score + rating
- Category breakdown (radar chart: Experience, Finances, Mindset, Network, Personal)
- Specific recommendations for each weak area
- Suggested next steps (with links to relevant articles)
- "Share your results" social button

### Related articles
- getting-started
- pre-search-preparation
- searcher-psychology
- finding-investors

---

## Tool #7 — Geography Selector

**URL**: `/en/tools/geography-selector`
**Priority**: P3 — Build month 5
**SEO target keywords**: "best country to buy a business", "ETA geography comparison", "where to do a search fund"

### Inputs
| Field | Type | Options |
|-------|------|---------|
| Languages spoken | Multi-select | English, French, German, Spanish, Italian, Dutch, Portuguese, Swedish, Danish, Norwegian |
| Budget range | Radio | <$3M / $3-5M / $5-10M / $10-20M / $20M+ |
| Risk tolerance | Radio | Conservative / Moderate / Aggressive |
| Industry preference | Dropdown | Same as Tool #1 |
| Financing preference | Radio | Mostly debt / Balanced / Mostly equity |
| Tax sensitivity | Radio | Low / Medium / High |
| Quality of life priority | Slider | 1-10 |

### Scoring dimensions per country
| Dimension | Weight | Data source |
|-----------|--------|-------------|
| Succession wave (SMEs needing buyers) | 25% | European Commission SME Review |
| Financing availability (government programs) | 20% | Country research |
| Entry multiples (lower = better) | 15% | Market data |
| Tax friendliness | 15% | PwC/KPMG tax guides |
| Language match | 10% | From user inputs |
| ETA ecosystem maturity | 10% | IESE/INSEAD studies |
| Quality of life index | 5% | OECD Better Life Index |

### Countries scored
US, UK, France, Germany, Spain, Italy, Netherlands, Belgium, Switzerland, Sweden, Denmark, Norway, Finland, Portugal, Austria, Ireland

### Outputs
- Ranked list of top 5 countries with scores
- Country comparison radar chart
- Pros/cons for top 3
- Links to regional guides for each recommended country

### Related articles
- eta-europe + all country-specific articles

---

## Tool #8 — Deal Structuring Advisor

**URL**: `/en/tools/deal-structuring-advisor`
**Priority**: P3 — Build month 6
**SEO target keywords**: "deal structure calculator", "acquisition financing structure", "how to structure a business acquisition"

### Inputs
| Field | Type | Range |
|-------|------|-------|
| Purchase price | Input | $1M — $50M |
| Available equity (cash from investors) | Input | $200K — $20M |
| Seller willingness to finance | Radio | None / Up to 10% / Up to 20% / Up to 30% |
| Seller's earn-out appetite | Radio | No / Maybe / Yes |
| Bank financing availability | Radio | None / Conservative (2.5x EBITDA) / Standard (3.5x) / Aggressive (4.5x) |
| Target EBITDA | Input | $200K — $10M |
| Target DSCR (minimum) | Slider | 1.0x — 2.0x |
| Country | Dropdown | (affects government program eligibility) |

### Outputs
| Output | Format |
|--------|--------|
| Recommended capital stack | Stacked bar chart: Senior Debt / Seller Note / Earn-out / Equity |
| Sources & Uses table | Two-column table |
| Monthly debt service estimate | "$X/month, Y% of EBITDA" |
| Debt service coverage ratio | "X.Xx" with green/yellow/red indicator |
| Government programs eligible | Based on country: "SBA 7(a) eligible" or "Bpifrance guarantee available" |
| Risk assessment | Low/Medium/High leverage indicator |
| Alternative structures | "If seller won't finance: consider..." with 2-3 alternatives |

### Educational content outline (700 words)
- H2: The anatomy of an acquisition capital stack
- H2: How much debt is too much?
- H2: When seller financing makes or breaks a deal
- H2: Government programs that reduce acquisition risk
- H2: Structuring for downside protection

### Related articles
- acquisition-financing
- seller-financing
- earn-out-structures
- lbo-simulator (Tool #4, cross-link)

---

## Implementation timeline

| Month | Tool | Complexity | Estimated dev time |
|-------|------|-----------|-------------------|
| 2 | #1 EBITDA Multiple Estimator | Medium | 3-4 days |
| 3 | #2 Search Capital Calculator | Low | 2 days |
| 4 | #3 Cap Table Simulator | High | 4-5 days |
| 4 | #6 Readiness Quiz | Low | 2 days |
| 5 | #4 LBO Simulator | High | 4-5 days |
| 5 | #7 Geography Selector | Medium | 3 days |
| 6 | #5 Valuation Calculator | Medium | 3-4 days |
| 6 | #8 Deal Structuring Advisor | Medium | 3 days |

**Total estimated development: ~25-30 days**

---

## SEO strategy per tool

1. Each tool page = 600-800 words of educational content (unique, not copied from articles)
2. JSON-LD `WebApplication` schema with name, description, URL, applicationCategory
3. OG image with tool name + preview of interface
4. Breadcrumb: Home → Tools → [Tool Name]
5. Internal links from related articles TO the tool
6. Internal links from tool page TO related articles
7. "Related tools" section linking to other calculators
8. Financial disclaimer on every tool page

---

## Competitive landscape

| Competitor | Tools offered | Gap we fill |
|-----------|--------------|------------|
| searchfunder.com | None (forum only) | First mover on ETA-specific tools |
| acquira.com | Basic valuation calculator | More comprehensive, European data |
| bizbuysell.com | Valuation calculator | ETA-specific (not generic small biz) |
| dealroom.co | Deal database | Interactive tools, not just data |
| Stanford GSB | None (research only) | Actionable tools from research data |

No competitor offers an integrated suite of ETA-specific calculators. This is a clear differentiation opportunity.
