# SearchFundMarket — Quality Audit Report (Phase A, Step A.1)

**Date:** 2026-04-23
**Scope:** 441 EN articles in `src/app/[locale]/learn/_articles/`
**Status:** BLOCKERS FIXED — Category names + broken links resolved

---

## Executive Summary

The audit reveals a codebase with **strong content skeletons but critical structural defects** that must be fixed before Google submission. The batch-produced articles (86% of total) have surprisingly good specificity and actionability but are undermined by **missing sources, broken categories, and dead links**.

### Headline Numbers

| Metric | Value | Risk |
|--------|-------|------|
| Total articles | 441 | — |
| Original articles (Phase 1-2) | ~68 | Low risk |
| Batch-produced (Phase 3.2+) | ~373 | Medium risk |
| Articles with broken category names | ~~126~~ → **0** | ✅ FIXED |
| Broken internal links | ~~45~~ → **0** | ✅ FIXED |
| Articles with < 3 sources (metadata) | **275 (62.4%)** | HIGH |
| Articles with zero sources in content | ~280+ (estimated) | HIGH |
| Listicle-format articles (≤3 paragraphs) | **201 (45.6%)** | MEDIUM |
| Thin content (< 10KB file size) | **226 (51.2%)** | MEDIUM |
| AI filler word "landscape" in 25.9% of articles | 114 files | MEDIUM |

---

## 1. BLOCKERS — ✅ FIXED

### 1.1 Broken Category Names — ✅ FIXED (126 articles remapped)

The `categoryMeta` array defines **11 canonical categories**. **19 non-standard category strings** were used across 126 articles — all now remapped to canonical names. `seller-guide` (5) and `Selling Your Business` (1) mapped to `Deal Execution`.

| Non-standard string | Count | Should be |
|---------------------|------:|-----------|
| `industry-playbooks` | 40 | `Industry Playbooks` |
| `operations` | 29 | `Operations & Growth` |
| `investor-guide` | 9 | `Investor Comparisons` |
| `regional-guides` | 7 | `Regional Guides` |
| `comparisons` | 6 | `Investor Comparisons` |
| `Fundraising` | 5 | `Fundraising & Investors` |
| `seller-guide` | 5 | *New category needed?* |
| `International` | 5 | `Regional Guides` |
| `legal-tax` | 3 | `Legal & Tax` |
| `industry-guides` | 3 | `Industry Playbooks` |
| `Due Diligence` | 3 | `Deal Execution` |
| `Search & Deal Sourcing` | 2 | `Deal Execution` |
| `getting-started` | 2 | `Getting Started` |
| `financing` | 2 | `Legal & Tax` |
| `fundraising` | 1 | `Fundraising & Investors` |
| `due-diligence` | 1 | `Deal Execution` |
| `deal-sourcing` | 1 | `Deal Execution` |
| `Post-Acquisition` | 1 | `Operations & Growth` |
| `Selling Your Business` | 1 | *New category needed?* |

**Estimated distribution after fix:**

| Category | Current | + Remapped | Total |
|----------|--------:|----------:|---------:|
| Getting Started | 48 | +2 | 50 |
| Fundraising & Investors | 11 | +6 | 17 |
| Deal Execution | 57 | +7 | 64 |
| Legal & Tax | 64 | +5 | 69 |
| Operations & Growth | 29 | +30 | 59 |
| Research & Data | 9 | +0 | 9 |
| Regional Guides | 35 | +12 | 47 |
| Investor Comparisons | 5 | +15 | 20 |
| Industry Playbooks | 41 | +43 | 84 |
| Searcher Toolkit | 8 | +0 | 8 |
| Resources | 8 | +0 | 8 |
| *Unmapped (seller-guide + Selling)* | — | — | 6 |

**Final distribution after fix:**

| Category | Count |
|----------|------:|
| Industry Playbooks | 84 |
| Deal Execution | 70 |
| Legal & Tax | 69 |
| Operations & Growth | 59 |
| Getting Started | 50 |
| Regional Guides | 47 |
| Investor Comparisons | 20 |
| Fundraising & Investors | 17 |
| Research & Data | 9 |
| Searcher Toolkit | 8 |
| Resources | 8 |

### 1.2 Broken Internal Links — ✅ FIXED (43 links remapped, 2 valid category links)

43 broken article links across ~55 TSX files were remapped to existing valid slugs. 2 `category/` links were valid category page URLs (not broken). Each broken slug was mapped to the closest semantically equivalent existing article.

<details>
<summary>Full list of broken link targets</summary>

```
accountant-referral-deal-sourcing
accounting-practice-acquisition
acquiring-cybersecurity-firm
asset-vs-stock-purchase
business-brokers-guide
business-valuation-methods
category/industry-playbooks
category/regional-guides
cleaning-business-acquisition
culture-integration-after-acquisition
debt-structures-acquisition-finance
debt-structures-acquisitions
due-diligence-red-flags
earnout-structures
electrical-contractor-acquisition
exit-strategy-planning
find-businesses-for-sale
home-healthcare-acquisition
insurance-agency-acquisition
international-acquisition-financing
investor-updates-reporting
is-search-fund-good-investment
leveraged-buyout-lbo
management-transition-plan
pest-control-acquisition
post-acquisition-integration
printing-business-acquisition
qsbs-complete-guide
reps-warranties-indemnification
risk-assessment-acquisition
saas-business-acquisition
sba-7a-loans
sba-7a-loans-acquisitions
search-fund-cap-table
search-fund-economics
search-fund-investor-relations
search-fund-pitch-deck
search-fund-raising-capital
seller-transition-planning
supply-chain-optimization
talent-acquisition-retention
tax-planning-acquisitions
tech-audit-post-acquisition
technology-audit-post-acquisition
what-size-business-to-buy
```

</details>

### 1.3 Category Slug Entries — ✅ NOT AN ISSUE (false positive)

The 10 category slugs are correctly in the `categoryMeta` array, NOT in `allArticles`. The only shared slug (`getting-started`) legitimately exists as both a category and a real article — they serve different routes (`/learn/getting-started` vs `/learn/category/getting-started`).

---

## 2. Content Quality Assessment

### 2.1 File Size Distribution

| Size Range | Count | % | Assessment |
|------------|------:|----:|------------|
| < 5 KB (very thin) | 4 | 0.9% | DELETE candidates |
| 5–10 KB (thin) | 222 | 50.3% | ENRICH or consolidate |
| 10–20 KB (normal) | 72 | 16.3% | Review for quality |
| > 20 KB (substantial) | 143 | 32.4% | Likely OK |

**Thinnest 4 articles (< 5KB):**
1. `acquiring-landscaping-business.tsx` (4.7 KB)
2. `acquiring-plumbing-business.tsx` (4.9 KB)
3. `acquiring-veterinary-practice.tsx` (4.9 KB)
4. `acquiring-distribution-company.tsx` (4.9 KB)

These are pure bullet-list industry playbooks with identical template structure, no real paragraphs, no case studies, no sources in content.

### 2.2 Content Format Analysis

| Format | Count | % | Description |
|--------|------:|----:|-------------|
| Listicle (≤3 paragraphs, >10 bullets) | 201 | 45.6% | Mostly bullet lists |
| Mixed (some narrative + lists) | ~100 | ~22.7% | Moderate depth |
| Full narrative with lists | ~140 | ~31.7% | Well-developed articles |

### 2.3 Production Vintage

| Period | Count | Description |
|--------|------:|-------------|
| 2024-03 to 2025-02 | ~68 | Original Phase 1-2 articles (hand-crafted, typically 10-30KB) |
| 2025-04-21 | 125 | Phase 3.2 Batch 1 |
| 2025-04-22 | 123 | Phase 3.2 Batch 2 |
| 2025-04-23 | 22 | Phase 3.2 Batch 3 |
| 2025-06-14/15 | 74 | Phase 3.2 Batch 4-5 |
| 2025-06-20 | 35 | Phase 3.2 Batch 6 |

---

## 3. Source Quality

### 3.1 Metadata Sources (in article-registry.ts)

| Sources per article | Count | % |
|-------------------:|------:|-----:|
| 1 source | 22 | 5.0% |
| 2 sources | 253 | 57.4% |
| 3 sources | 162 | 36.7% |
| 4 sources | 4 | 0.9% |

- **Average: 2.3 sources per article** (target per FINAL_POLISH_PLAN: ≥ 3)
- **275 articles (62.4%) have fewer than 3 sources** in metadata
- All 441 articles have at least 1 source (none are zero)

### 3.2 Content-Level Sources

Based on sampling 40 articles across categories:

- **~280+ batch articles have ZERO source citations within the article content** (sources only exist in metadata, not visible to the reader)
- Several articles cite sources with **potentially fabricated titles** (e.g., "Stanford GSB, Search Fund CEO Personnel Decision Patterns (2024)" — not a known publication)
- Original Phase 1-2 articles generally have sources woven into the text with hyperlinks

### 3.3 FAQ Quality

| FAQs per article | Count | % |
|----------------:|------:|-----:|
| 1 FAQ | 54 | 12.2% |
| 2 FAQs | 273 | 61.9% |
| 3 FAQs | 112 | 25.4% |
| 4-5 FAQs | 2 | 0.5% |

- Average: 2.1 FAQs per article
- All 441 articles have at least 1 FAQ (good for Google FAQ schema)

---

## 4. Internal Linking

| Link density | Count | % |
|-------------|------:|----:|
| 0 internal links | 18 | 4.1% |
| 1–2 internal links | 7 | 1.6% |
| 3–4 internal links | 144 | 32.7% |
| 5+ internal links | 281 | 63.7% |

Internal linking is **generally strong** (64% have 5+ links). However:
- 18 articles have zero internal links (orphaned)
- 45 internal links point to non-existent pages (see Section 1.2)

---

## 5. AI Content Patterns

### 5.1 High-Frequency AI Markers

| Pattern | Files | Occurrences | % of articles |
|---------|------:|------------:|--------------:|
| "landscape" | 114 | 179 | 25.9% |
| "leverage" (verb = "use") | ~60 | ~76 | ~13.6% |
| "deep dive" | 30 | 36 | 6.8% |
| "unlock" | 29 | 30 | 6.6% |
| "comprehensive guide" | 21 | 22 | 4.8% |
| "crucial" | 16 | 19 | 3.6% |
| "Navigating the" | 12 | 12 | 2.7% |

### 5.2 AI Patterns NOT Found (good)

The following classic AI filler phrases are **absent**:
- "It's important to note" (0)
- "In conclusion" (0)
- "ever-changing" (0)
- "at the end of the day" (0)
- "look no further" (0)
- "without further ado" (0)
- "Let's explore" (0)
- "In this article, we" (0)
- Lorem ipsum / placeholder text (0)
- TODO / FIXME (0)

### 5.3 Content Integrity

- **97 unique URLs** found in source citations — all point to legitimate domains
- **No fabricated URLs** (no example.com, placeholder.com)
- Most-cited URL: Stanford GSB search fund research page (19 references)

---

## 6. Sampled Article Scores (40 articles reviewed)

### 6.1 Batch Articles Sample (20 articles from Phase 3.2)

| # | Slug | Score /25 | Verdict |
|---|------|:---------:|---------|
| 1 | search-fund-deal-flow-crm | 20 | **GOOD** |
| 2 | 338h10-election | 21 | **GOOD** |
| 3 | creative-financing | 19 | ENRICH |
| 4 | capital-stack-explained | 19 | ENRICH |
| 5 | supply-chain-optimization-post-acquisition | 19 | ENRICH |
| 6 | qsbs-qualified-small-business-stock | 19 | ENRICH |
| 7 | adjusted-ebitda | 19 | ENRICH |
| 8 | acquiring-hvac-business | 18 | ENRICH |
| 9 | customer-concentration-risk | 18 | ENRICH |
| 10 | owner-dependent-business | 18 | ENRICH |
| 11 | proprietary-deal-flow | 18 | ENRICH |
| 12 | red-flags-due-diligence | 18 | ENRICH |
| 13 | asset-purchase-vs-stock-purchase | 18 | ENRICH |
| 14 | recurring-revenue-models | 17 | ENRICH |
| 15 | when-to-let-people-go | 17 | ENRICH |
| 16 | quick-wins-first-90-days | 16 | ENRICH |
| 17 | eta-vs-lower-middle-market-pe | 16 | ENRICH |
| 18 | seller-psychology | 15 | ENRICH |
| 19 | sba-loan-state-by-state | 15 | ENRICH |
| 20 | accountant-referral-deal-flow | 15 | ENRICH |

**Average: 17.8/25** — 2 GOOD, 18 ENRICH, 0 REWRITE, 0 DELETE

### 6.2 Dominant Pattern: "Great Skeleton, No Sources"

The batch articles are structurally strong:
- Specific numbers, valuation multiples, benchmarks
- Clear decision frameworks
- Actionable checklists and timelines
- Good internal cross-linking

**But they systematically lack sources in the article body** (14 of 20 sampled have zero source citations in content). This is the single biggest E-E-A-T vulnerability.

### 6.3 One Severe Outlier

`accountant-referral-deal-flow.tsx` (~800 lines) is **severely bloated** with AI verbosity. The same ideas repeat 5+ times across sections. Should be cut by 50-60%.

---

## 7. Top 10 Quality Patterns Detected

### Bad Patterns (to fix)

1. **Missing in-content sources** — ~280 articles have sources only in metadata, not visible in the article text. Readers and Google can't see them.

2. **Broken category strings** — 126 articles use slug-style or non-standard category names, making them invisible on category pages.

3. **Listicle-only format** — 201 articles are pure bullet lists with no narrative depth, no case studies, no analysis paragraphs.

4. **Dead internal links** — 45 links point to non-existent article slugs, creating 404s.

5. **"landscape" overuse** — 179 occurrences across 114 files (25.9%). Classic AI detection signal.

6. **Thin content** — 226 articles under 10KB. The thinnest 4 are under 5KB (~300 words of actual content).

7. **Potentially fabricated source titles** — Some metadata sources cite titles that don't appear to be real publications.

8. **Formulaic industry playbooks** — All "acquiring-X-business" articles follow an identical template: Why X? → Valuation → DD specifics → Post-acquisition. No differentiation.

9. **"Key Takeaways" redundancy** — Many articles end with a "Key Takeaways" section that verbatim repeats body content.

10. **"leverage" as verb** — 76 non-financial uses of "leverage" meaning "use" across 60 files.

### Good Patterns (to preserve)

1. Concrete numerical benchmarks (valuation multiples, cost ranges, percentages)
2. Strong internal cross-linking network (64% have 5+ links)
3. Decision frameworks (green/yellow/red zones, when-to-walk-away criteria)
4. Worked financial examples with real dollar amounts
5. FAQ schema on every article (good for Google featured snippets)

---

## 8. Recommended Actions (for user review)

### Phase A.3 — Proposed Action Categories

Based on the audit, here is the proposed classification for all 441 articles:

| Action | Estimated Count | Criteria |
|--------|---------------:|----------|
| **GOOD** (no changes needed) | ~20-30 | Score > 20/25, substantial content, real sources |
| **ENRICH** (add sources, minor improvements) | ~280-300 | Score 15-20, solid skeleton, needs sources + depth |
| **REWRITE** (major revision) | ~50-70 | Score 10-15, thin listicle, formulaic template |
| **DELETE** (remove, return 410) | ~30-50 | Score < 10, duplicate/near-duplicate topics, no unique value |
| **CONSOLIDATE** (merge into another article) | ~20-30 | Thin niche articles better as sections in a parent article |

### Priority Fix Order

1. **FIX BLOCKERS FIRST** — Category names + broken links (zero content changes, pure code fix)
2. **Source injection** — Add 3-5 verifiable sources to the ~280 articles missing in-content citations
3. **Consolidate thin industry playbooks** — Merge the thinnest "acquiring-X" articles into parent category articles
4. **Cut bloated articles** — Trim severely verbose articles (accountant-referral-deal-flow, etc.)
5. **Replace AI filler words** — "landscape" → "market/sector", "leverage" → "use", "deep dive" → "detailed analysis"
6. **Add case studies** — 1-2 anonymized real-world examples per top-traffic article
7. **Verify source citations** — Confirm all cited source titles are real publications

---

## 9. Phase A.2 — FR Article Audit (50 articles)

**Date:** 2026-04-23
**Scope:** 50 FR articles in `src/app/[locale]/learn/_articles/fr/`

### FR Category Fix (31 articles remapped)

Before auditing content, 31 FR articles had non-standard category strings in `fr-registry.ts`:

| Non-standard | Count | Remapped to |
|-------------|------:|-------------|
| `International` | 10 | `Regional Guides` |
| `Post-Acquisition` | 9 | `Operations & Growth` |
| `Valuation & Finance` | 5 | `Deal Execution` |
| `Search & Deal Sourcing` | 5 | `Deal Execution` |
| `Due Diligence` | 2 | `Deal Execution` |

All fixed. FR categories now match the 11 canonical `categoryMeta` names.

### FR Content Quality Summary

| Metric | Value |
|--------|-------|
| Total FR articles | 50 |
| Average score (6 criteria, /30) | **24.5/30** |
| Batch 1 average (Phase 1 articles) | 25.2/30 |
| Batch 2 average (Phase 2 articles) | 23.8/30 |
| LOC-FAIL flags | **0** |
| Articles scoring 27+ | 17 (34%) |
| Articles scoring 22-26 | 32 (64%) |
| Articles scoring < 22 | 1 (2%) |

### FR Localization Assessment

**All 50 articles passed localization review.** Every article cites French institutions (Bpifrance, CRA, CCI, HEC, INSEAD), uses euros, references French legal structures (SAS, SARL, Dutreil, CSE, Code du travail), and addresses the French searcher directly. Country-specific articles (Germany, UK, etc.) consistently compare to French equivalents (GmbH↔SARL, KfW↔Bpifrance, TUPE↔L.1224-1).

### FR Top Performers (28+/30)

| Slug | Score | Strength |
|------|:-----:|----------|
| `due-diligence-checklist` | 28 | Precise legal references (art L.145-1, BASOL/SIS, RGPD), 7 sources |
| `digital-transformation` | 28 | Concrete French programs (France Num, loi facture électronique 2026) |
| `working-capital-management` | 28 | Specific instruments (Dailly L.313-23, affacturage, loi LME) |
| `pre-search-preparation` | 28 | Named programs (HEC ETA, INSEAD), specific costs in euros |
| `eta-vs-private-equity` | 28 | France Invest data, clear EV thresholds |
| `eta-france` | 27 | Rich ecosystem detail (CRA, Bpifrance Transmission, Fusacq) |
| `business-valuation` | 27 | OEC references, BPCE multiples, French PCG adjustments |
| `tax-optimization` | 27 | CGI articles (787 B Dutreil, 150-0 B ter), DGFiP guidance |
| `search-fund-legal-structure` | 27 | Code de Commerce, CMS Francis Lefebvre |
| `letter-of-intent` | 27 | French civil code art 1112, exclusivity jurisprudence |
| `cap-tables-equity` | 27 | Yale SOM + Stanford economics data |
| `seller-financing` | 27 | French-specific privilège du vendeur, fiscal treatment |
| `management-transition-plan` | 27 | CSE obligations art L2312-8, Code du travail |

### FR Weakest Article

**`search-fund-success-stories.tsx` (19/30)** — promises "success stories" but names zero companies, zero searchers, zero financial results. Needs rewrite with 3-5 named or properly anonymized cases.

### FR Key Issues

1. **13 articles lack a formal Sources section** in the article body (sources only in registry metadata, not visible to reader)
2. **Mild repetition** in 4 articles: intro-body-conclusion triple restatement pattern
3. **AI filler phrases** in ~9 articles: "il convient de noter", "dans un contexte de", "il est essentiel de"

### FR Recommended Actions

| Action | Count | Articles |
|--------|------:|----------|
| **GOOD** (no changes) | 17 | All 27+/30 articles |
| **ENRICH** (add visible sources) | 32 | All 22-26/30 articles |
| **REWRITE** | 1 | `search-fund-success-stories` |

---

*Phases A.1 and A.2 complete. BLOCKER fixes applied (EN+FR categories, 43 broken links). User review required before Phase A.3 (action decisions per article).*
