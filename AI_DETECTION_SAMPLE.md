# AI-Slop Detection Report

**Date:** 2026-04-25
**Branch:** batch-articles
**Scope:** All 401 EN articles in `src/app/[locale]/learn/_articles/`

---

## Verdict: FAIL

| Metric | Value |
|--------|-------|
| Articles scanned | 401 |
| Articles with em-dashes | 386 (96%) |
| Articles clean (0 em-dashes) | 15 (4%) |
| Total em-dash lines | 8,669 |
| AI buzzword hits | ~12 |
| Filler phrase hits | ~3 |

**Primary issue:** Em-dashes (`---`, `&mdash;`, `&ndash;`) account for 99.8% of all violations. AI buzzwords and filler phrases are negligible.

---

## Top 20 Offenders (by em-dash count)

| # | Article | Em-dashes |
|---|---------|-----------|
| 1 | what-size-business-buy | 97 |
| 2 | capital-stack-explained | 95 |
| 3 | eta-self-assessment | 84 |
| 4 | acquiring-insurance-agency | 77 |
| 5 | acquiring-msp-business | 75 |
| 6 | acquiring-daycare-childcare | 75 |
| 7 | pledge-fund-model | 71 |
| 8 | acquiring-accounting-practice | 71 |
| 9 | spa-key-clauses | 69 |
| 10 | acquiring-car-wash-business | 68 |
| 11 | amazon-fba-acquisition | 66 |
| 12 | acquiring-printing-business | 66 |
| 13 | acquiring-cleaning-business | 64 |
| 14 | debt-structure-optimization | 63 |
| 15 | acquiring-auto-repair-business | 63 |
| 16 | how-long-search-fund | 62 |
| 17 | acquiring-electrical-contractor | 62 |
| 18 | owner-dependent-business | 61 |
| 19 | acquiring-gym-fitness | 61 |
| 20 | acquiring-home-healthcare | 60 |

---

## Clean Articles (0 violations)

1. ai-deal-sourcing
2. broken-deal
3. cold-outreach-business-owners
4. corporate-to-eta
5. due-diligence-checklist
6. finding-investors
7. getting-started
8. non-compete-acquisition
9. sde-vs-ebitda
10. search-fund-entrepreneur-archetype
11. search-fund-good-investment
12. search-fund-no-acquisition
13. why-invest-in-search-funds
14. women-in-eta
15. working-with-business-brokers

---

## Patterns Scanned

### Em-dashes (8,669 hits)
- `---` (literal em-dash character U+2014)
- `&mdash;` (HTML entity)
- `&ndash;` (HTML entity)

### AI Buzzwords (~12 hits)
- "navigate the complex", "comprehensive guide/overview", "in today's competitive/dynamic", "key takeaway/insight", "deep dive", "robust", "holistic", "cutting-edge", "game-changer", "unlock potential", "actionable"

### Filler Phrases (~3 hits)
- "in today's landscape/world", "when it comes to", "it's important to note", "at its core", "needless to say", "let's dive/explore"

---

## Recommended Action

Run a global em-dash replacement pass on all 386 affected articles:
- Replace ` --- ` with ` - ` in most contexts
- Replace `&mdash;` and `&ndash;` with ` - `
- Review parenthetical uses: "word --- word" becomes "word - word"
- Estimated effort: automated sed/replace (bulk operation)
