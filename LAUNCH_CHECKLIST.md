# LAUNCH_CHECKLIST.md — STEP 1.3 Google Search Console & Bing Setup

**Date**: April 2026

---

## Pre-submission verification

| Check | Status |
|-------|--------|
| `robots.txt` allows all public pages, blocks `/api/`, `/_next/`, all locale × `/dashboard/`, `/admin/`, `/auth/onboarding` | DONE |
| `sitemap.xml` includes all indexable pages with hreflang alternates | DONE |
| FR/ES/IT/PT pages have `<meta name="robots" content="noindex">` via i18n-registry | DONE |
| JSON-LD Organization + WebSite schemas on every page | DONE |
| JSON-LD Article schema on all 62 learn articles | DONE |
| All VALIDATION_REPORT.md BLOCKERS resolved | DONE |
| OG images generated for homepage + all articles | DONE |
| Canonical URLs set on all indexable pages | DONE |
| `metadataBase` set to `https://www.searchfundmarket.com` | DONE |

---

## Step 1 — Add verification meta tags

Add the following to `src/app/[locale]/layout.tsx` inside the `metadata` export:

```typescript
verification: {
  google: "REPLACE_WITH_GSC_VERIFICATION_CODE",
  // Bing uses the same meta tag approach
  other: {
    "msvalidate.01": "REPLACE_WITH_BING_VERIFICATION_CODE",
  },
},
```

**How to get the codes:**
1. **Google**: Go to https://search.google.com/search-console → Add Property → URL prefix → `https://www.searchfundmarket.com` → Choose "HTML tag" method → Copy the `content="..."` value
2. **Bing**: Go to https://www.bing.com/webmasters → Add your site → Choose "Meta tag" method → Copy the `content="..."` value

---

## Step 2 — Deploy with verification tags

1. Replace the placeholder values with your actual verification codes
2. Deploy to production (Vercel will auto-deploy from main)
3. Wait for deployment to go live (~2-3 minutes)

---

## Step 3 — Verify ownership in GSC

1. Go to https://search.google.com/search-console
2. Select your property `https://www.searchfundmarket.com`
3. Click "Verify" — Google will check for the meta tag
4. Once verified, you'll see the GSC dashboard

---

## Step 4 — Submit sitemap

1. In GSC, go to **Sitemaps** (left sidebar)
2. Enter: `sitemap.xml`
3. Click "Submit"
4. Google should show "Success" and the number of URLs discovered
5. Expected: ~130+ URLs (62 articles + 11 categories + 1 glossary + profiles + static pages × locales)

---

## Step 5 — Request indexing for 10 priority pages

Use GSC's **URL Inspection** tool to manually request indexing for these high-priority pages first:

| # | URL | Why priority |
|---|-----|-------------|
| 1 | `https://www.searchfundmarket.com/en` | Homepage — anchor for site authority |
| 2 | `https://www.searchfundmarket.com/en/learn` | Learn hub — content pillar entry point |
| 3 | `https://www.searchfundmarket.com/en/learn/getting-started` | Primary keyword: "what is a search fund" |
| 4 | `https://www.searchfundmarket.com/en/learn/stanford-2024-study` | Research content — backlink magnet |
| 5 | `https://www.searchfundmarket.com/en/learn/eta-europe` | Regional pillar — "search fund europe" |
| 6 | `https://www.searchfundmarket.com/en/learn/eta-france` | Regional pillar — "search fund france" / "ETA France" |
| 7 | `https://www.searchfundmarket.com/en/learn/self-funded-vs-traditional` | High-intent comparison query |
| 8 | `https://www.searchfundmarket.com/en/learn/search-fund-returns` | Data-driven — "search fund returns" |
| 9 | `https://www.searchfundmarket.com/en/learn/eta-vs-private-equity` | Comparison — attracts PE audience crossover |
| 10 | `https://www.searchfundmarket.com/en/learn/business-valuation` | Transactional intent — "how to value a small business" |

**For each URL:**
1. Paste URL in URL Inspection bar
2. Click "Request Indexing"
3. Wait for confirmation (may take 1-2 minutes per URL)
4. Note: Google limits to ~10-12 index requests per day

---

## Step 6 — Verify in Bing Webmaster Tools

1. Go to https://www.bing.com/webmasters
2. Verify your site using the meta tag method
3. Submit sitemap: `https://www.searchfundmarket.com/sitemap.xml`
4. Bing also accepts GSC verification — you can import from GSC directly

---

## Step 7 — Post-submission monitoring (first 2 weeks)

| Day | Action |
|-----|--------|
| Day 1 | Verify sitemap accepted, no errors in GSC |
| Day 3 | Check Coverage report — how many pages discovered vs indexed |
| Day 7 | Check for any crawl errors, soft 404s, or redirect issues |
| Day 7 | Run URL inspection on 5 more articles and request indexing |
| Day 14 | First Performance report data should appear — check impressions |
| Day 14 | If any pages "Discovered but not indexed" — investigate and resubmit |

---

## Optional: Additional search engine submissions

| Engine | URL | Notes |
|--------|-----|-------|
| Yandex | https://webmaster.yandex.com | Relevant if targeting Russian-speaking ETA audience |
| IndexNow | Via Bing Webmaster Tools | Instant indexing protocol — Bing, Yandex, Seznam support it |

---

## Checklist summary

- [ ] Verification meta tags added to layout.tsx
- [ ] Deployed to production
- [ ] GSC property verified
- [ ] Bing property verified
- [ ] Sitemap submitted to GSC
- [ ] Sitemap submitted to Bing
- [ ] 10 priority pages manually submitted for indexing
- [ ] Monitoring schedule set (Day 3, 7, 14 checks)
