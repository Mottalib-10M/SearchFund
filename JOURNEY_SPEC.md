# ETA Journey Page — Specification v2

**Date:** 2026-04-23
**Status:** FINAL REVIEW — updated with user answers
**URL:** `/the-eta-journey` (EN only, i18n-ready)

---

## 1. Color Palette

### Phase Colors (6 distinct, Apple-inspired)

| Phase | Color | Hex | Rationale |
|-------|-------|-----|-----------|
| 01 Prepare | Purple | `#5856D6` | Matches `apple-searcher` — planning/thinking phase |
| 02 Fundraise | Blue | `#0071E3` | Matches `apple-investor`/`apple-accent` — trust/capital |
| 03 Search | Teal | `#32ADE6` | Apple system teal — active scanning/discovery |
| 04 Acquire | Green | `#34C759` | Matches `apple-success` — deal closure |
| 05 Operate | Amber | `#FF9F0A` | Matches `apple-warning` — active growth/energy |
| 06 Exit | Indigo | `#AF52DE` | Apple system purple — culmination/reflection |

### SVG Trail — MULTI-SEGMENT (6 connected curves)

- **Architecture:** 6 separate SVG path segments, each using its phase color. Each segment starts where the previous ended, preserving visual continuity.
- **Animation:** Each segment's `pathLength` animates when its phase enters the viewport. Tied to global `scrollYProgress` but staggered per segment (segment 1: 0-0.17, segment 2: 0.17-0.33, etc.).
- **Background path** (full trail, always visible): `#E5E5EA` (Apple light gray) at 40% opacity
- **Stroke width:** 4px desktop, 3px mobile
- **Style:** Smooth curves with rounded caps — journey map aesthetic

### Text & Backgrounds

- Phase section backgrounds alternate: `#FFFFFF` and `#F5F5F7` (apple-gray-100)
- Headings: `#1D1D1F` (apple-black)
- Body: `#6E6E73` (apple-gray-700)
- Quote blocks: Left border in phase color, italic text, `#F5F5F7` background

---

## 2. Verified Article Slugs Per Phase

All slugs verified against `article-registry.ts` (450+ articles) and cross-checked against the 41 deleted slugs. Zero conflicts.

### Phase 01 — PREPARE

| Slug | Title | Status |
|------|-------|--------|
| `is-eta-right-for-you` | Is ETA Right for You? | EXISTS |
| `self-funded-vs-traditional` | Self-Funded vs. Traditional Search | EXISTS |
| `pre-search-preparation` | Pre-Search Preparation | EXISTS |
| `industry-selection-framework` | Industry Selection Framework | EXISTS |
| `searcher-compensation` | Searcher Compensation | EXISTS |
| `getting-started` | Getting Started with ETA | EXISTS |

**Tool:** [`/tools/search-capital-calculator`](active) — Search Capital Calculator (EXISTS)

### Phase 02 — FUNDRAISE

| Slug | Title | Status |
|------|-------|--------|
| `writing-a-ppm` | Writing a PPM | EXISTS |
| `finding-investors` | Finding Investors | EXISTS |
| `fundraising-deck` | Fundraising Deck | EXISTS |
| `cap-tables-equity` | Cap Tables & Equity | EXISTS |
| `search-fund-term-sheet` | Search Fund Term Sheet | EXISTS |
| `why-invest-in-search-funds` | Why Invest in Search Funds | EXISTS |
| `search-fund-legal-structure` | Search Fund Legal Structure | EXISTS |
| `search-fund-fundraising-timeline` | Search Fund Fundraising Timeline | EXISTS |

**Tools:**
- [`/tools/cap-table-simulator`](active) — Cap Table Simulator (EXISTS)
- [`/tools/search-capital-calculator`](active) — Search Capital Calculator (EXISTS)

### Phase 03 — SEARCH

| Slug | Title | Status |
|------|-------|--------|
| `deal-sourcing-strategies` | Deal Sourcing Strategies | EXISTS |
| `cold-outreach-business-owners` | Cold Outreach to Business Owners | EXISTS |
| `proprietary-deal-flow` | Proprietary Deal Flow | EXISTS |
| `business-valuation` | Business Valuation | EXISTS |
| `deal-funnel-metrics` | Deal Funnel Metrics | EXISTS |
| `seller-psychology` | Seller Psychology | EXISTS |
| `working-with-brokers` | Working with Business Brokers | EXISTS |
| `reading-a-cim` | Reading a CIM | EXISTS |

**Tools:**
- [`/tools/ebitda-multiple-estimator`](active) — EBITDA Multiple Estimator (EXISTS)
- [`/tools/valuation-calculator`](active) — Valuation Calculator (EXISTS)

### Phase 04 — ACQUIRE

| Slug | Title | Status |
|------|-------|--------|
| `letter-of-intent` | Letter of Intent | EXISTS |
| `quality-of-earnings` | Quality of Earnings | EXISTS |
| `due-diligence-checklist` | Due Diligence Checklist | EXISTS |
| `financial-due-diligence` | Financial Due Diligence | EXISTS |
| `working-capital-adjustments` | Working Capital Adjustments | EXISTS |
| `deal-structure-optimization` | Deal Structure Optimization | EXISTS |
| `closing-process` | Closing Process | EXISTS |
| `vendor-take-back-financing` | Vendor Take-Back Financing | EXISTS |
| `sba-7a-loans-acquisition` | SBA 7(a) Loans for Acquisition | EXISTS |

**Tools:**
- [`/tools/lbo-simulator`](active) — LBO Simulator (EXISTS)
- [`/tools/valuation-calculator`](active) — Valuation Calculator (EXISTS)

### Phase 05 — OPERATE

| Slug | Title | Status |
|------|-------|--------|
| `first-100-days` | First 100 Days | EXISTS |
| `management-transition` | Management Transition | EXISTS |
| `board-governance` | Board Governance | EXISTS |
| `revenue-growth-playbook` | Revenue Growth Playbook | EXISTS |
| `buy-and-build` | Buy and Build | EXISTS |
| `digital-transformation` | Digital Transformation | EXISTS |
| `employee-retention-acquisition` | Employee Retention After Acquisition | EXISTS |
| `kpi-dashboard-post-acquisition` | KPI Dashboard Post-Acquisition | EXISTS |

**Tool:** "KPI Dashboard Builder" → "Coming soon" (does not exist yet)

### Phase 06 — EXIT

| Slug | Title | Status |
|------|-------|--------|
| `preparing-company-exit` | Preparing Your Company for Exit | EXISTS |
| `exit-strategies` | Exit Strategies | EXISTS |
| `dividend-recapitalization` | Dividend Recapitalization | EXISTS |
| `secondary-sales` | Secondary Sales | EXISTS |
| `sell-side-earnout` | Sell-Side Earnout | EXISTS |
| `investment-banker-exit` | Investment Banker for Exit | EXISTS |
| `life-after-selling` | Life After Selling | EXISTS |

**Tool:** "Exit Value Calculator" → "Coming soon" (does not exist yet)

### Tool Summary

| Tool | Route | Status |
|------|-------|--------|
| EBITDA Multiple Estimator | `/tools/ebitda-multiple-estimator` | EXISTS |
| Search Capital Calculator | `/tools/search-capital-calculator` | EXISTS |
| Cap Table Simulator | `/tools/cap-table-simulator` | EXISTS |
| LBO Simulator | `/tools/lbo-simulator` | EXISTS |
| Valuation Calculator | `/tools/valuation-calculator` | EXISTS |
| KPI Dashboard Builder | — | Coming soon |
| Exit Value Calculator | — | Coming soon |

All 5 existing tools are at `src/app/[locale]/(marketing)/tools/[toolSlug]/page.tsx`.

---

## 3. Quotes with Attribution (FINALIZED)

### Phase 01 — PREPARE

> "The right motivations for launching a search fund, in my view, are a trifecta of ambition, curiosity, and a keen interest in operational leadership. It offers more than just equity — it's about being in charge from start to finish."

**— Fernando Garcia Benavides**, Founder, Divisadero Capital
**Source:** [Searchfunder.com — "Starting a Search Fund: Motivations, Fundraising and Investor Cap Table"](https://searchfunder.com/post/starting-a-search-fund-motivations-fundraising-and-investor-captable)
**Verified:** Yes — published on Searchfunder.com and LinkedIn

### Phase 02 — FUNDRAISE

> "Relay was the first investor in my fund and has guided me through this process from fundraising, to searching, to acquiring and running my business. When COVID-19 hit in March 2020 and my deal was in jeopardy, they were my first call. I would not have been able to close my deal without that support."

**— Christopher Sykes**, CEO, Swoogo (acquired via Eagle Rock Capital search fund)
**Source:** [Relay Investments — Entrepreneur Testimonials](https://www.relayinvestments.com/)
**Verified:** Yes — published on Relay Investments website; CEO role confirmed via [Swoogo blog](https://swoogo.events/blog/introducing-swoogos-new-ceo-chris-sykes/)

### Phase 03 — SEARCH

> "I looked at hundreds, if not thousands of businesses. The search took me a year and eight months. Even if you run the best due diligence process that has ever been run, I strongly suspect you will learn more about your company in the first month inside it than in the eight months outside that preceded it."

**— Steve Divitkos**, Former CEO of Microdea (acquired 2014, exited 2020); Founder, Mineola Search Partners
**Source:** [Acquiring Minds podcast — "From Search Misery to Successful CEO"](https://acquiringminds.co/articles/steve-divitkos-microdea)
**Verified:** Yes — Acquiring Minds is the leading ETA podcast hosted by Will Smith

### Phase 04 — ACQUIRE (Brent Beshore — verified)

> "We've never had a deal where we closed and not found something weird, hairy, unexpected after close, ever. It's a form of humility to pay a lower price. It's a form of humility not to use debt. And it's a form of humility not to assume that you know what you can do with it post-close."

**— Brent Beshore**, Founder & CEO, Permanent Equity
**Source:** [World of DaaS podcast — "Brent Beshore — Private Equity for 'Boring' Businesses"](https://www.buzzsprout.com/1783651/episodes/15212523-brent-beshore-private-equity-for-boring-businesses)
**Verified:** Yes — Brent Beshore is founder of Permanent Equity (acquired dozens of businesses). Quote confirmed via podcast transcript. Also author of *The Messy Marketplace*.

### Phase 05 — OPERATE (Muzquiz — verified, full quote)

> "The importance of my own leadership. This was a shocker, but when you think you're a great leader, it only means you haven't set the bar high enough."

**— Daniel Muzquiz**, Chairman & President, The Predictive Index (serial search fund entrepreneur — also former CEO of ExamSoft Worldwide)
**Source:** [Jim Stein Sharpe — "Why Search: Is It Right for You?"](https://jimsteinsharpe.com/why-search-is-it-right-for-you/)
**Verified:** Yes — Jim Stein Sharpe is a Stanford GSB lecturer and search fund advisor. Muzquiz's role confirmed via [The Org](https://theorg.com/org/the-predictive-index/org-chart/daniel-muzquiz).

### Phase 06 — EXIT

> "The movie in Entrepreneur Land always ends with the exit, but there's an epilogue. Life goes on, and finding your epilogue — figuring out how you create new structure, meaning, and identity — is what it's all about."

**— A.J. Wasserstein**, Founder & former CEO of ArchivesOne (sold to Iron Mountain); Lecturer, Yale School of Management
**Source:** [Deep Wealth Podcast — Episode 39](https://www.deepwealth.com/podcast/aj-wasserstein-episode-39)
**Verified:** Yes — [Yale SOM faculty page](https://som.yale.edu/faculty-research/faculty-directory/aj-wasserstein)

### Quote Diversity Summary

| Phase | Person | Company | Source |
|-------|--------|---------|--------|
| Prepare | Fernando Garcia Benavides | Divisadero Capital | Searchfunder.com |
| Fundraise | Christopher Sykes | Swoogo | Relay Investments |
| Search | Steve Divitkos | Microdea / Mineola | Acquiring Minds |
| Acquire | Brent Beshore | Permanent Equity | World of DaaS podcast |
| Operate | Daniel Muzquiz | The Predictive Index | Jim Stein Sharpe |
| Exit | A.J. Wasserstein | ArchivesOne → Iron Mountain | Deep Wealth Podcast |

**6 different people, 6 different sources.** Zero repetition.

---

## 4. Phase Content Summaries (300-400 words each)

*(Unchanged from v1 — see sections 4.1-4.6 in previous version)*

### Phase 01 — PREPARE · 2-4 months
**Tagline:** The phase searchers underestimate — and the one that determines 80% of the outcome.

### Phase 02 — FUNDRAISE · 3-6 months
**Tagline:** Converting your thesis into capital and commitments.

### Phase 03 — SEARCH · 12-24 months
**Tagline:** Where most of your time goes. Where most searches fail.

### Phase 04 — ACQUIRE · 3-6 months
**Tagline:** Where the deal gets real — or falls apart.

### Phase 05 — OPERATE · 3-7 years
**Tagline:** From deal-maker to operator. The longest phase, the one that creates the value.

### Phase 06 — EXIT · 6-18 months
**Tagline:** Preparing for liquidity. Not always a sale — sometimes a recap, sometimes a hold.

---

## 5. Mobile Adaptation Strategy

*(Unchanged from v1)*

### Sticky Nav
- **Desktop (≥1024px):** Full horizontal bar with 6 phase labels, fixed at top
- **Tablet (768-1023px):** Same horizontal bar, smaller font
- **Mobile (<768px):** Compact pill-shaped indicator showing current phase number + name, tappable to expand

### Resources Grid
- **Desktop:** 4 columns (Articles, Tools, Templates, Pitfalls)
- **Tablet (≥768px):** 2 columns (2×2 grid)
- **Mobile (<768px):** 1 column, stacked vertically

### SVG Trail
- **Desktop:** Full animated multi-segment SVG path weaving between sections, 4px stroke
- **Tablet:** Simplified SVG path (fewer curves), 3px stroke
- **Mobile (<640px):** Vertical progress line on the left edge, phase-colored, animated on scroll

### Phase Sections
- **Desktop:** Alternating layout — even phases content left / visual right, odd phases reverse
- **Mobile:** Single column, all left-aligned. Quote block full-width.

---

## 6. Technical Risks & Mitigations (UPDATED)

| Risk | Impact | Mitigation |
|------|--------|------------|
| SVG path animation janky on mobile Safari | Medium | Use `will-change: transform` on SVG, debounce scroll handler. Fallback to vertical progress line on mobile. |
| `framer-motion` bundle size (~30KB gzipped) | Low | Already installed (v12.38.0). Use dynamic import for `JourneyTrail.tsx` with `next/dynamic` + `ssr: false`. |
| 500vh page length → CLS issues | Medium | Set explicit `min-height` on each section. Use `content-visibility: auto` for off-screen phases. |
| Intersection Observer + sticky nav performance | Low | Single observer with `threshold: [0, 0.5, 1]` for all 6 sections. Debounce state updates. |
| 2 tools don't exist yet (KPI Dashboard, Exit Value) | Low | Render as disabled "Coming soon" cards. 5 of 7 tools link to real pages. |
| Multi-segment SVG color transitions | Low | Each segment is a separate `<motion.path>` with its own `stroke` color. Segments share start/end coordinates for visual continuity. |

---

## 7. File Structure (UPDATED for i18n)

```
src/
├── app/[locale]/the-eta-journey/
│   ├── page.tsx              # Main page (metadata, JSON-LD, layout)
│   └── opengraph-image.tsx   # Custom OG image
├── components/journey/
│   ├── JourneyHero.tsx       # Hero section with scroll indicator
│   ├── JourneyNav.tsx        # Sticky horizontal nav with phase labels
│   ├── JourneyPhase.tsx      # Reusable phase component (takes props)
│   ├── JourneyTrail.tsx      # SVG scroll-follow animation (client-only)
│   └── JourneyOutro.tsx      # Closing CTA + WaitlistForm
└── data/
    └── journey-phases.ts     # Phase structure data (slugs, tools, pitfalls)
                              # Text content uses translation keys from messages/en.json
```

### i18n Strategy
- **`journey-phases.ts`**: Contains structural data (article slugs, tool paths, phase IDs) — language-independent
- **`messages/en.json`**: Add `journey` namespace with all translatable strings (titles, taglines, descriptions, quotes, pitfalls, CTA text)
- **`messages/fr.json`** etc.: Left untouched — keys will be filled when FR version ships
- **Components**: Use `useTranslations("journey")` to fetch strings

### Navbar Integration
- Add "The Journey" link to `navLinks` array in `src/components/layout/Navbar.tsx`
- Position: between Home and Learn
- Styling: visually distinctive — use `apple-accent` color or subtle badge to highlight as a flagship page
- i18n label: `t("theJourney")` — add key to all 5 locale message files (EN only for now, others can show same label or be hidden)

### Dependencies
- `framer-motion` — already installed (v12.38.0)
- `lucide-react` — already installed (v1.7.0)
- No new dependencies needed

---

## 8. SEO Implementation

- **Title tag:** `The Complete ETA Journey: Step-by-Step Guide | SearchFundMarket`
- **Meta description:** `From preparing your search to exiting your acquired company — the complete visual guide to Entrepreneurship Through Acquisition. Articles, tools, and templates for every phase.`
- **JSON-LD:** `HowTo` schema with 6 steps (Prepare, Fundraise, Search, Acquire, Operate, Exit)
- **Breadcrumbs:** Home > The ETA Journey
- **Canonical:** `https://www.searchfundmarket.com/en/the-eta-journey`
- **OG Image:** Custom — SVG trail concept with text "The ETA Journey" on apple-gray-100 background
- **Sitemap:** Add as static EN-only page, priority `0.9`, changeFrequency `weekly`

---

## 9. Resolved Questions

| # | Question | Answer |
|---|----------|--------|
| Q1 | Quote variety | VARY — Divitkos only for SEARCH. Brent Beshore for ACQUIRE, Muzquiz (full quote) for OPERATE. 6 unique people. |
| Q2 | Tools | 5 of 7 tools EXIST (active links). 2 remaining as "Coming soon" disabled cards. |
| Q3 | Navbar | YES — "The Journey" between Home and Learn. Visually distinctive (accent color). |
| Q4 | SVG trail | MULTI-SEGMENT — 6 connected curves, each in phase color, staggered animation. |
| Q5 | i18n | YES — translation keys in messages/en.json, structural data in journey-phases.ts. |

---

**READY FOR FINAL GO.** Awaiting approval to start coding.
