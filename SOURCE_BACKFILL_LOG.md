# Source URL Backfill Log

**Date:** 2026-04-25
**Branch:** batch-articles
**Script:** `scripts/backfill_source_urls.py`

---

## Summary

| Metric | Before | After |
|--------|--------|-------|
| Articles with 3+ URL-backed sources | 43 (10.7%) | **285 (71.1%)** |
| Articles with 2 URL-backed sources | 117 (29.2%) | 63 (15.7%) |
| Articles with 1 URL-backed source | 127 (31.7%) | 23 (5.7%) |
| Articles with 0 URL-backed sources | 114 (28.4%) | 30 (7.5%) |
| **Total URLs added** | | **677** |
| Build status | | PASS (18.5s, 3,069 pages, 0 errors) |

---

## Citation-to-URL Map (23 institutions)

| # | Source Name | URLs Added | Verified URL |
|---|-----------|-----------|-------------|
| 1 | IESE Business School | 174 | https://www.iese.edu/entrepreneurship/search-funds/ |
| 2 | Stanford GSB | 162 | https://www.gsb.stanford.edu/faculty-research/case-studies/2024-search-fund-study |
| 3 | IESE | 39 | https://www.iese.edu/entrepreneurship/search-funds/ |
| 4 | McKinsey & Company | 34 | https://www.mckinsey.com/capabilities/m-and-a/our-insights |
| 5 | European Commission | 32 | https://single-market-economy.ec.europa.eu/smes_en |
| 6 | Harvard Business Review | 25 | https://hbr.org/ |
| 7 | Harvard Business School | 24 | https://www.hbs.edu/faculty/Pages/item.aspx?num=54260 |
| 8 | SBA | 21 | https://www.sba.gov/funding-programs/loans |
| 9 | IBISWorld | 18 | https://www.ibisworld.com/ |
| 10 | Bain & Company | 14 | https://www.bain.com/insights/topics/global-private-equity-report/ |
| 11 | Deloitte | 14 | https://www.deloitte.com/us/en/what-we-do/capabilities/mergers-acquisitions-restructuring/articles/m-a-trends-report.html |
| 12 | OECD | 14 | https://www.oecd.org/en/topics/sub-issues/smes-and-entrepreneurship.html |
| 13 | Pepperdine University | 13 | https://digitalcommons.pepperdine.edu/gsbm_pcm_pcmr/ |
| 14 | Cambridge Associates | 13 | https://www.cambridgeassociates.com/ |
| 15 | AICPA | 12 | https://www.aicpa.org/ |
| 16 | IRS | 11 | https://www.irs.gov/businesses/small-businesses-self-employed |
| 17 | Yale SOM | 10 | https://som.yale.edu/ |
| 18 | PwC | 10 | https://www.pwc.com/gx/en/services/deals.html |
| 19 | McKinsey | 8 | https://www.mckinsey.com/capabilities/m-and-a/our-insights |
| 20 | Preqin | 8 | https://www.preqin.com/ |
| 21 | Search Fund Partners | 8 | https://www.searchfundpartners.com/ |
| 22 | SearchFunder | 7 | https://www.searchfunder.com |
| 23 | INSEAD | 6 | https://www.insead.edu/centres/entrepreneurship |

## URL Verification Method

All URLs verified via `curl -sL -o /dev/null -w "%{http_code}"`:
- 200 OK: Stanford GSB, IESE, HBR, SBA, Bain, IBISWorld, Pepperdine, AICPA, IRS, Yale SOM, PwC, Preqin, Search Fund Partners, SearchFunder, EC, Deloitte, Cambridge Associates
- 403 (bot-blocking, works in browser): HBS, INSEAD, OECD, McKinsey

## Sources NOT Backfilled (no reliable canonical URL)

Remaining 30 articles with 0 URL-backed sources cite niche/specialized sources with no single canonical URL to propagate. These would need per-article manual research.
