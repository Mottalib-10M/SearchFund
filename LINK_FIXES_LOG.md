# Broken Link Fixes Log

**Date:** 2026-04-25
**Scope:** 33 broken external URLs (21 x 404 + 12 x DNS failures) from BROKEN_LINKS_FRESH_AUDIT.md

---

## Summary

| Category | Count | Action |
|----------|-------|--------|
| URL replaced with verified working URL | 20 | Updated |
| URL removed (no replacement found) | 6 | Link removed, citation text kept |
| Directory entry removed (dead domain, no replacement) | 3 | Entry removed |
| False positive (URL actually works) | 4 | Skipped |
| **Total** | **33** | |

---

## 404 Fixes (21 URLs)

### 1. Stanford GSB - Case Studies (125 occurrences)
- **Broken:** `https://www.gsb.stanford.edu/faculty-research/case-studies/search-funds`
- **Replacement:** `https://www.gsb.stanford.edu/faculty-research/case-studies/2024-search-fund-study`
- **Status:** VERIFIED (200 OK)
- **Files:** article-registry.ts (125), how-to-value-a-small-business.tsx (3), news/articles.ts (1)

### 2. Stanford GSB - Search Funds Research (1 occurrence)
- **Broken:** `https://www.gsb.stanford.edu/experience/learning/entrepreneurship/search-funds`
- **Replacement:** `https://www.gsb.stanford.edu/experience/about/centers-institutes/ces/research/search-funds`
- **Status:** VERIFIED (200 OK)
- **Files:** directory/conferences.ts (1)

### 3. Harvard Law Forum - Earnouts (1 occurrence)
- **Broken:** `https://corpgov.law.harvard.edu/2024/03/15/earnouts-in-ma-transactions/`
- **Replacement:** `https://corpgov.law.harvard.edu/2023/11/29/earnouts-update-2023/`
- **Status:** VERIFIED (200 OK)
- **Files:** article-registry.ts (1)

### 4. Harvard Law Forum - Private Target M&A (1 occurrence)
- **Broken:** `https://corpgov.law.harvard.edu/2020/01/15/private-target-mergers-and-acquisitions-deal-terms/`
- **Action:** REMOVED link, kept citation text
- **Files:** reps-and-warranties.tsx (1)

### 5. Axial - Independent Sponsor Report (1 occurrence)
- **Broken:** `https://www.axial.net/forum/independent-sponsor-report/`
- **Replacement:** `https://www.axial.net/forum/axials-2025-independent-sponsor-report/`
- **Status:** VERIFIED (200 OK)
- **Files:** article-registry.ts (1)

### 6. Axial - Forum M&A (1 occurrence)
- **Broken:** `https://www.axial.net/forum/mergers-acquisitions/`
- **Replacement:** `https://www.axial.net/forum/`
- **Status:** VERIFIED (200 OK)
- **Files:** exclusivity-agreement.tsx (1)

### 7. Capstone Partners - M&A Valuations Index (1 occurrence)
- **Broken:** `https://www.capstonepartners.com/insights/capstone-partners-middle-market-ma-valuations-index/`
- **Replacement:** `https://www.capstonepartners.com/insights/report-capstone-partners-middle-market-mergers-and-acquisitions-valuations-index/`
- **Status:** VERIFIED (200 OK)
- **Files:** article-registry.ts (1)

### 8. Bpifrance - Transmission (1 occurrence)
- **Broken:** `https://www.bpifrance.fr/nos-solutions/transmission-reprise`
- **Replacement:** `https://www.bpifrance.fr/reprise-et-transmission`
- **Status:** Verified via web search (403 from bot blocking, URL confirmed correct)
- **Files:** article-registry.ts (1)

### 9. Windsor Advantage - SBA Rules (1 occurrence)
- **Broken:** `https://www.windsoradvantage.com/sba-equity-injection-rules`
- **Replacement:** `https://windsoradvantage.com/news/updated-sba-equity-injection-rules-what-you-need-to-know-about-sop-50-10-8`
- **Status:** VERIFIED (200 OK)
- **Files:** article-registry.ts (1)

### 10. Franchise.org - Economic Outlook (1 occurrence)
- **Broken:** `https://www.franchise.org/research/economic-outlook`
- **Replacement:** `https://www.franchise.org/franchising-economic-outlook/`
- **Status:** VERIFIED (200 OK)
- **Files:** eta-vs-startups.tsx (1)

### 11. Deloitte - Commercial Due Diligence (1 occurrence)
- **Broken:** `https://www2.deloitte.com/us/en/pages/mergers-and-acquisitions/solutions/commercial-due-diligence-services.html`
- **Replacement:** `https://www.deloitte.com/us/en/what-we-do/capabilities/mergers-acquisitions-restructuring/services/mergers-acquisitions-restructuring-services.html`
- **Status:** VERIFIED (301 redirect target loads correctly)
- **Files:** commercial-due-diligence.tsx (1)

### 12. DOL - Topics/Hiring (2 occurrences)
- **Broken:** `https://www.dol.gov/general/topics/hiring`
- **Replacement:** `https://www.dol.gov/general/topics`
- **Status:** VERIFIED (200 OK)
- **Files:** hr-employee-due-diligence.tsx (2)

### 13. DOL - EBSA (FALSE POSITIVE)
- **URL:** `https://www.dol.gov/agencies/ebsa`
- **Action:** SKIPPED - URL actually works (200 OK)

### 14. DOL - FLSA (FALSE POSITIVE)
- **URL:** `https://www.dol.gov/agencies/whd/flsa`
- **Action:** SKIPPED - URL actually works (200 OK)

### 15. Searcher Insights - Market Report (1 occurrence)
- **Broken:** `https://searcherinsights.com/search-fund-investors-the-definitive-market-market-report-2025/`
- **Replacement:** `https://searcherinsights.com/search-fund-investors-the-definitive-market-landscape-report-2025/`
- **Note:** Typo in original URL ("market-market" -> "market-landscape")
- **Status:** VERIFIED (200 OK)
- **Files:** article-registry.ts (1)

### 16. Realmo - Hotel Investing (1 occurrence)
- **Broken:** `https://realmo.com/blog/hospitality-investing-101-the-thorough-guide-to-buying-your-first-hotel-in-2026/`
- **Replacement:** `https://realmo.com/blog/hospitality-investing-101-the-comprehensive-guide-to-buying-your-first-hotel-in-2026/`
- **Note:** Slug changed ("thorough" -> "comprehensive")
- **Files:** hotel-hospitality-acquisition.tsx (1)

### 17. Build.com - Tax Law (1 occurrence)
- **Broken:** `https://www.build.com/larry-s-tax-law/one-big-beautiful-bill-act-part-4-qualified-business-income-deduction-code-section-199a`
- **Action:** REMOVED link, kept citation text (build.com is a home improvement site - URL was invalid)
- **Files:** c-corp-vs-s-corp-llc.tsx (1)

### 18. FinancialProfessionals.org - KPIs (FALSE POSITIVE)
- **URL:** `https://www.financialprofessionals.org/training-resources/resources/articles/Details/tracking-kpis-after-an-acquisition`
- **Action:** SKIPPED - URL actually works (200 OK)

### 19. KOSGEB - Support Programs (1 occurrence)
- **Broken:** `https://www.kosgeb.gov.tr/site/tr/genel/destekler/6315/kosgeb-destek-programlari`
- **Replacement:** `https://www.kosgeb.gov.tr/site/tr/genel/destekler/25/girisimci-destek-programi`
- **Note:** Page ID changed in KOSGEB website restructure
- **Files:** eta-turkey.tsx (1)

### 20. Searchfunder.com - Podcast (FALSE POSITIVE / path fix)
- **URL:** `https://www.searchfunder.com/podcast`
- **Action:** Updated to `https://www.searchfunder.com` (no /podcast path exists)
- **Files:** directory/podcasts.ts (1)

### 21. Mindscapital.com - Podcast (DNS failure)
- **URL:** `https://www.mindscapital.com/podcast`
- **Action:** URL cleared, status set to "inactive" (domain dead)
- **Files:** directory/podcasts.ts (1)

---

## DNS Failure Fixes (12 URLs)

### 22. buyandbuild.fm
- **Replacement:** `https://buyandbuild.co`
- **Status:** VERIFIED (200 OK, same podcast on new domain)
- **Files:** directory/podcasts.ts (1)

### 23. micropepodcast.com
- **Action:** URL cleared, status set to "inactive" (domain dead, no replacement)
- **Files:** directory/podcasts.ts (1)

### 24. etathroughacquisition.com
- **Action:** URL cleared, status set to "inactive" (domain dead, no replacement)
- **Files:** directory/podcasts.ts (1)

### 25. europeansearchfundconference.com
- **Action:** Website field removed (domain dead, no replacement)
- **Files:** directory/conferences.ts (1)

### 26. seqos.capital
- **Replacement:** `https://www.seqos.de`
- **Status:** VERIFIED (200 OK, company rebranded domain)
- **Files:** directory/investors.ts (1)

### 27. avca-africa.org
- **Replacement:** `https://www.avca.africa/data-intelligence/research-publications/`
- **Status:** VERIFIED (301 redirect, new domain)
- **Files:** eta-africa.tsx (1)

### 28. build.uw.edu
- **Replacement:** `https://foster.uw.edu/centers/buerk-ctr-entrepreneurship/`
- **Status:** VERIFIED (200 OK)
- **Files:** search-fund-conferences.tsx (1)

### 29. biztrade.de
- **Replacement:** `https://www.biz-trade.de` (correct domain has hyphen)
- **Status:** VERIFIED (200 OK)
- **Files:** directory/brokers.ts (1)

### 30. borsinodelleimprese.it
- **Action:** Directory entry removed (domain dead, no replacement)
- **Files:** directory/brokers.ts (1)

### 31. marktplaatsondernemingen.nl
- **Action:** Directory entry removed (domain dead, no replacement)
- **Files:** directory/brokers.ts (1)

### 32. michelsimond.com
- **Replacement:** `https://www.msimond.fr`
- **Status:** Verified via web search (SSL error on direct fetch, URL confirmed correct)
- **Files:** directory/brokers.ts (1)

### 33. webcapital.es
- **Action:** Directory entry removed (domain dead, no replacement)
- **Files:** directory/brokers.ts (1)

---

## Files Modified (18 files)

1. `src/app/[locale]/learn/_articles/article-registry.ts` - 131 URL replacements
2. `src/app/[locale]/learn/_articles/how-to-value-a-small-business.tsx` - 3 URL replacements
3. `src/app/[locale]/(marketing)/news/_data/articles.ts` - 1 URL replacement
4. `src/app/[locale]/(marketing)/directory/_data/conferences.ts` - 2 URL fixes
5. `src/app/[locale]/(marketing)/directory/_data/podcasts.ts` - 5 URL fixes
6. `src/app/[locale]/(marketing)/directory/_data/investors.ts` - 1 URL replacement
7. `src/app/[locale]/(marketing)/directory/_data/brokers.ts` - 5 fixes (2 replacements, 3 removals)
8. `src/app/[locale]/learn/_articles/exclusivity-agreement.tsx` - 1 URL replacement
9. `src/app/[locale]/learn/_articles/eta-vs-startups.tsx` - 1 URL replacement
10. `src/app/[locale]/learn/_articles/commercial-due-diligence.tsx` - 1 URL replacement
11. `src/app/[locale]/learn/_articles/hr-employee-due-diligence.tsx` - 2 URL replacements
12. `src/app/[locale]/learn/_articles/eta-turkey.tsx` - 1 URL replacement
13. `src/app/[locale]/learn/_articles/reps-and-warranties.tsx` - 1 link removed
14. `src/app/[locale]/learn/_articles/c-corp-vs-s-corp-llc.tsx` - 1 link removed
15. `src/app/[locale]/learn/_articles/hotel-hospitality-acquisition.tsx` - 1 URL replacement
16. `src/app/[locale]/learn/_articles/eta-africa.tsx` - 1 URL replacement
17. `src/app/[locale]/learn/_articles/search-fund-conferences.tsx` - 1 URL replacement
18. `src/app/[locale]/learn/_articles/investor-update-templates.tsx` - 0 (false positive, skipped)

**Build status:** PASS (zero errors)
