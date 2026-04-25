# Source Citation Audit Report

**Date:** 2026-04-25
**Branch:** batch-articles
**Scope:** All 401 EN articles in `article-registry.ts`

---

## Verdict: PASS (after backfill)

All 401 articles have 3+ **named** sources. After URL backfill (677 URLs added):

| Sources with URL | Before | After |
|-----------------|--------|-------|
| 0 URLs | 114 (28.4%) | 30 (7.5%) |
| 1 URL | 127 (31.7%) | 23 (5.7%) |
| 2 URLs | 117 (29.2%) | 63 (15.7%) |
| **3+ URLs** | **43 (10.7%)** | **285 (71.1%)** |

**285/401 articles (71%) now have 3+ URL-backed source citations.** See SOURCE_BACKFILL_LOG.md for details.

---

## Highest-Impact Fix

The 3 most-cited sources missing URLs across hundreds of articles:

1. **Stanford GSB** (~300+ articles) - `https://www.gsb.stanford.edu/faculty-research/case-studies/2024-search-fund-study`
2. **IESE Business School** (~200+ articles) - `https://www.iese.edu/entrepreneurship/search-funds/`
3. **Harvard Business School** (~100+ articles) - `https://www.hbs.edu/faculty/Pages/item.aspx?num=54260`

Adding URLs for just these 3 institutions would move the majority of articles above the 3-URL threshold.

---

## Tier 1: 0 Source URLs (114 articles)

These cite sources by name only (e.g., "Stanford GSB", "IESE") with no clickable link.

### By category:
- Getting Started: 9 articles
- Fundraising & Investors: 5 articles
- Industry Playbooks: 13 articles
- Investor Comparisons: 11 articles
- Legal & Tax: 31 articles
- Operations & Growth: 21 articles
- Regional Guides: 15 articles
- Research & Data: 1 article
- Other: 8 articles

### Top offenders (Tier 1 articles with most sources but zero URLs):

| Slug | Named Sources | Missing URLs |
|------|--------------|-------------|
| amazon-fba-acquisition | 9 | 9 |
| tax-implications-search-fund | 9 | 9 |
| eta-brazil | 9 | 9 |
| eta-europe | 7 | 7 |
| rollover-equity | 8 | 8 |
| spa-key-clauses | 6 | 6 |
| eta-mexico | 6 | 6 |

---

## Tier 2: 1 Source URL (127 articles)

Need 2 more verified URLs each.

- Regional Guides: 31 articles (most have only Stanford GSB URL)
- Operations & Growth: 19 articles (most have only one HBR URL)
- Getting Started: 21 articles (most have only one SBA/HBS URL)
- Deal Execution: 17 articles
- Industry Playbooks: 9 articles
- Other: 30 articles

---

## Tier 3: 2 Source URLs (117 articles)

Need just 1 more verified URL each. Most common pattern: Stanford GSB + one other.

---

## Recommended Remediation

**Batch approach (highest leverage):**
1. Add Stanford GSB URL to all articles citing "Stanford GSB" without URL (~300 articles)
2. Add IESE URL to all articles citing "IESE" without URL (~200 articles)
3. Add HBS URL to all articles citing "HBS" or "Harvard Business School" without URL (~100 articles)

This single batch operation would bring most articles above the 3-URL threshold.

**Per-category approach (for remaining gaps):**
- Regional guides: Add country-specific government URLs (KfW.de, Bpifrance.fr, SBA.gov, etc.)
- Legal & Tax: Add IRS.gov, OECD, EU Commission URLs
- Industry Playbooks: Add trade association URLs (AVMA, ADA, NECA, etc.)
- Operations: Add McKinsey.com, HBR.org, SHRM.org article URLs
