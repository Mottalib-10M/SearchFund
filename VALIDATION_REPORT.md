# VALIDATION_REPORT.md — STEP 1.2 Technical Validation

**Date**: April 2026

---

## Audit scope

Three parallel audits were performed across the entire codebase:

1. **Hreflang, meta tags, noindex, image alt** — full crawl of all pages
2. **JSON-LD, H1/H2 hierarchy, internal links** — structural SEO audit
3. **Article quality spot-check** — 5 articles checked for factual accuracy, AI slop, and source quality

---

## BLOCKERS found and fixed

### B1. robots.txt didn't match locale-prefixed URLs
- **File**: `src/app/robots.ts`
- **Issue**: Disallowed `/dashboard/`, `/admin/`, `/auth/onboarding` — but actual URLs are `/en/dashboard/`, `/fr/admin/`, etc. Crawlers would ignore the rules.
- **Fix**: Programmatically generate disallows for all 5 locales × 3 protected paths. `/api/` and `/_next/` stay as-is (no locale prefix).

### B2. Learn hub JSON-LD hardcoded `/en/` locale
- **File**: `src/app/[locale]/learn/page.tsx`, line 31
- **Issue**: `collectionPageSchema()` used `${BASE}/en/learn` instead of dynamic locale. Wrong canonical in JSON-LD for non-English pages.
- **Fix**: Made component async, destructured `locale` from params, changed to `${BASE}/${locale}/learn`.

### B3. Category page heading hierarchy skipped H2
- **File**: `src/app/[locale]/learn/category/[categorySlug]/page.tsx`, line 90
- **Issue**: H1 (category name) → H3 (article titles). No H2 in between. Violates heading hierarchy best practices.
- **Fix**: Changed article card headings from `<h3>` to `<h2>`.

### B4. getting-started.tsx — conflicting statistics
- **File**: `src/app/[locale]/learn/_articles/getting-started.tsx`
- **Issue**: Bullet list cited "63% acquisition rate, 35.1% IRR, 4.5x ROIC" while the prose below cited "70% acquisition rate, 33% IRR, 5.5x MOIC" — both attributed to the same Stanford 2024 study.
- **Fix**: Aligned bullet list to match the correct 2024 study figures (~70% / ~33% IRR / 5.5x MOIC).

### B5. cap-tables-equity.tsx — MOIC table error
- **File**: `src/app/[locale]/learn/_articles/cap-tables-equity.tsx`, line 120
- **Issue**: Table showed "~9.4x MOIC" but the math is €22.5M / €2.15M = 10.47x. Prose correctly said 10.5x.
- **Fix**: Changed table to "~10.5x MOIC for investors".

### B6. searcher-tools.tsx — duplicate deal sourcing section
- **File**: `src/app/[locale]/learn/_articles/searcher-tools.tsx`, lines 351-384
- **Issue**: "Deal sourcing platforms" section duplicated the earlier "Online deal marketplaces" section (lines 72-117). Same tools listed twice with slightly different descriptions.
- **Fix**: Removed the duplicate section entirely.

---

## NICE-TO-HAVE (not fixed — future improvements)

### SEO / Structured Data

| # | Issue | File(s) | Impact |
|---|-------|---------|--------|
| N1 | No JSON-LD on listings, searchers, investors, about, editorial policy pages | Various | Could add WebPage/CollectionPage schemas for richer indexing |
| N2 | No BreadcrumbList on learn hub | `learn/page.tsx` | Minor — category & article pages have breadcrumbs |
| N3 | H2 inside `<Link>` on learn hub glossary teaser | `learn/page.tsx:137` | Technically valid HTML but unusual |
| N4 | Articles don't link to category pages from body text | All 62 articles | Category pages linked via breadcrumb only |
| N5 | English-only pages skip `x-default` in `<head>` hreflang | `meta-snippets.ts:58` | Sitemap includes `x-default`; minor inconsistency |

### Meta Tags

| # | Issue | File(s) | Impact |
|---|-------|---------|--------|
| N6 | 5 meta descriptions under 140 characters | `meta-snippets.json` (quality-of-earnings, earn-out-structures, professional-services-acquisition, advisory-board, women-in-eta) | Under-utilizes SERP space |
| N7 | `/auth/verify-request` not in robots.txt disallow | `robots.ts` | Transient page, unlikely to accumulate links |
| N8 | `/community/new` indexable but requires auth | `community/new/page.tsx` | Not behind proxy protection |
| N9 | Profile detail pages lack canonical/alternates in `<head>` | `searchers/[slug]`, `investors/[slug]`, `sellers/[slug]` | English-only pages; sitemap also omits alternates |

### Images

| # | Issue | File(s) | Impact |
|---|-------|---------|--------|
| N10 | Two `<img>` tags use `alt=""` fallback | `dashboard/messages/[conversationId]/page.tsx` | Behind auth, not indexed |
| N11 | All images use native `<img>` instead of Next.js `<Image>` | All files with `<img>` | Missed optimization for LCP, lazy loading, modern formats |

### Content

| # | Issue | File(s) | Impact |
|---|-------|---------|--------|
| N12 | letter-of-intent.tsx: "30% of signed LOIs fail" unsourced | `letter-of-intent.tsx:332` | Plausible but would benefit from citation |
| N13 | deal-sourcing-strategies.tsx: motivational closing sentence | `deal-sourcing-strategies.tsx:512` | Minor style nitpick |

---

## Article quality spot-check results

| Article | Words | AI Slop | Verdict |
|---------|-------|---------|---------|
| `getting-started.tsx` | ~3,800 | 2/5 | FIXED (conflicting stats) |
| `cap-tables-equity.tsx` | ~3,600 | 1.5/5 | FIXED (MOIC table) |
| `searcher-tools.tsx` | ~4,000 | 2/5 | FIXED (duplicate section) |
| `letter-of-intent.tsx` | ~3,500 | 1/5 | PASS |
| `deal-sourcing-strategies.tsx` | ~3,300 | 1.5/5 | PASS |

**Overall AI slop level**: Low (1-2/5). Prose reads naturally with genuine subject-matter expertise. No "navigate the complexities", "delve into", "game-changer" patterns.

---

## Heading hierarchy summary

| Page | H1 | Hierarchy | Status |
|------|:--:|:---------:|--------|
| Home | motion.h1 | H1→H2→H3 | PASS |
| Learn hub | Yes | H1→H2→H3 | PASS |
| Articles (62) | Yes (1 each) | H1→H2→H3 | PASS |
| Category pages | Yes | H1→H2 | FIXED (was H1→H3) |
| Glossary | Yes | H1→H2 | PASS |
| Listings | Yes | H1→H2 | PASS |
| Searchers/Investors | Yes | H1 only | PASS |
| About | Yes | H1→H2 | PASS |
| Editorial policy | Yes | H1→H2 | PASS |

---

## Internal links summary

| Check | Status |
|-------|:------:|
| Articles cross-link to other articles | PASS (279 links across 62 articles, avg 4.5/article) |
| Related articles section | PASS (automated, 3 per article) |
| Learn hub ↔ Categories | PASS (bidirectional) |
| Learn hub ↔ Glossary | PASS (bidirectional) |
| Glossary → Articles | PASS (via relatedSlug) |
| Articles → Category pages | MISS (N4 — nice-to-have) |

---

## JSON-LD coverage

| Page | Schema Types | Status |
|------|-------------|:------:|
| Global layout | Organization, WebSite | PASS |
| Learn hub | CollectionPage | FIXED (locale) |
| Article detail | Article, BreadcrumbList | PASS |
| Category pages | CollectionPage, BreadcrumbList | PASS |
| Glossary | DefinedTermSet, BreadcrumbList | PASS |
| Profile detail (real) | Person / Organization | PASS |
| Profile detail (sample) | None | PASS (intentional) |
| Listings, About, etc. | None | N1 (nice-to-have) |

---

## Files changed

| File | Change |
|------|--------|
| `src/app/robots.ts` | Locale-prefixed disallows |
| `src/app/[locale]/learn/page.tsx` | Dynamic locale in JSON-LD |
| `src/app/[locale]/learn/category/[categorySlug]/page.tsx` | H3→H2 for article cards |
| `src/app/[locale]/learn/_articles/getting-started.tsx` | Fixed conflicting statistics |
| `src/app/[locale]/learn/_articles/cap-tables-equity.tsx` | Fixed MOIC table value |
| `src/app/[locale]/learn/_articles/searcher-tools.tsx` | Removed duplicate section |
