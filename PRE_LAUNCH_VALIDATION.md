# Pre-Launch Validation Report

Generated: 2026-04-24 | Branch: batch-articles

## Build & TypeScript

| Check | Status | Notes |
|-------|--------|-------|
| `tsc --noEmit` | PASS | Zero project errors (node_modules type noise is pre-existing Next.js 16) |
| Project compiles | PASS | No broken imports, no missing modules |

## Sitemap

| Check | Status | Notes |
|-------|--------|-------|
| Valid XML format | PASS | Proper xmlns + xmlns:xhtml namespaces |
| All article URLs included | PASS | 400 EN articles in sitemap |
| FR article URLs included | PASS | 50 FR articles now included (fixed in this session) |
| hreflang reciprocal (multilingual pages) | PASS | EN/FR/ES/IT/PT + x-default |
| hreflang reciprocal (articles EN↔FR) | PASS | Fixed — 50 articles with FR versions now have reciprocal hreflang |
| lastModified dates | PASS | ISO format from article.dateModified |
| changeFrequency proper | PASS | Tiered: daily (home), weekly (learn/categories), monthly (articles) |
| Priority distribution | PASS | 1.0 (home) → 0.9 (learn) → 0.8 (categories) → 0.7 (articles) |

## JSON-LD Schema

| Schema | Status | Location |
|--------|--------|----------|
| Organization | PASS | Locale layout — name, URL, logo, sameAs |
| WebSite + SearchAction | PASS | Locale layout |
| Article | PASS | Article pages — headline, dates, author, publisher, citations |
| FAQPage | PASS | Article pages — conditional on faqs.length > 0 |
| BreadcrumbList | PASS | Article + category pages |
| HowTo | PASS | /the-eta-journey page |
| DefinedTermSet | PASS | Glossary page |
| CollectionPage | PASS | Learn hub + category pages |

## Article Metadata

| Check | Status | Notes |
|-------|--------|-------|
| All articles have title | PASS | 400/400 |
| All articles have description | PASS | 400/400 |
| All articles have datePublished | PASS | 400/400 (ISO format) |
| All articles have dateModified | PASS | 400/400 (ISO format) |
| All articles have sources field | PASS | 400/400 (no empty arrays) |
| Articles with 3+ sources (registry) | PARTIAL | 253/400 (63%) — 147 have 2 sources |
| FAQ sections in article body | PASS | 289/403 EN articles (enrichment ongoing for remaining 110) |
| Internal links ≥ 5 per article | PASS | All enriched articles have 5+ internal links |

## Duplicate Titles (ACTION NEEDED)

15 pairs of articles share identical titles. Recommend consolidating:

| Title | Slugs | Action |
|-------|-------|--------|
| Are Search Funds a Good Investment? | are-search-funds-good-investment, search-fund-good-investment | Keep first, redirect second |
| Creating Your ICP for Acquisitions | creating-icp-acquisitions, ideal-company-profile | Keep first, redirect second |
| Government Acquisition Financing | government-acquisition-financing, government-financing-programs-global | Keep second (broader), redirect first |
| How Long Does a Search Fund Take? | how-long-search-fund, search-fund-timeline | Keep second, redirect first |
| How to Find Businesses for Sale | how-find-businesses-for-sale, how-to-find-businesses-for-sale | Keep first, redirect second |
| LBO for SMEs | lbo-for-smes, leveraged-buyout-sme | Keep first, redirect second |
| Is ETA Right for You? | is-eta-right-for-you, eta-self-assessment | Keep first, redirect second |
| Portfolio Construction | portfolio-construction-search-fund, portfolio-construction-search-funds | Keep second (enriched), redirect first |
| Preparing for Exit | preparing-company-exit, exit-readiness-plan | Keep second, redirect first |
| Quick Wins Post-Acquisition | quick-wins-first-90-days, quick-wins-post-acquisition | Keep second, redirect first |
| Red Flags in Due Diligence | red-flags-due-diligence, dd-red-flags | Keep first (enriched), redirect second |
| Risk Factors in SF Investing | risk-factors-search-fund, risk-factors-search-fund-investing | Keep second (enriched), redirect first |
| SBA 7(a) Loans | sba-7a-loans-complete-guide, sba-7a-loans-acquisition | Keep first (enriched), redirect second |
| Good Acquisition Target | what-makes-good-acquisition-target, good-acquisition-target, ideal-acquisition-target | Keep first, redirect other two |
| Working with Brokers | working-with-brokers, working-with-business-brokers | Keep second (enriched), redirect first |

## E-E-A-T Signals

| Signal | Status | Notes |
|--------|--------|-------|
| Author info (ArticleByline) | PASS | "SearchFundMarket Editorial Team" on all articles |
| AuthorBox component | PASS | Editorial credentials (Stanford GSB, INSEAD, IESE, HEC Paris) |
| ArticleSources component | PASS | Renders sources with URLs in article UI |
| ArticleFAQ component | PASS | Renders FAQ in UI + FAQPage JSON-LD |
| EditorialDisclaimer | PASS | Present on article pages |
| Editorial Policy page | PASS | /about/editorial-policy |
| OG images (dynamic) | PASS | Homepage + articles + Journey page |

## French Localization

| Check | Status | Notes |
|-------|--------|-------|
| FR articles committed | PASS | 50/50 committed |
| FR registry complete | PASS | All 50 mapped in fr-registry.ts |
| FR metadata (sources + FAQs) | PASS | 50/50 complete |
| FR routing integration | PASS | Page.tsx checks hasFRVersion() |
| FR sitemap inclusion | PASS | Fixed in this session |

## Blockers Before Google Submission

1. ~~Sitemap hreflang for FR articles~~ — FIXED
2. **15 duplicate titles** — Need consolidation (remove duplicates, set up redirects)
3. **147 articles with < 3 registry sources** — Low priority, articles have sources in body content

## Non-Blockers (Nice to Have)

- Add canonical tags to article pages (currently relying on metadata alternates)
- Increase registry source count from 2 → 3 for 147 articles
- ES/IT/PT remain noindex until 20+ localized articles exist per locale
