# Em-Dash Purge Log

**Date:** 2026-04-25
**Branch:** batch-articles
**Script:** `scripts/purge_emdashes.py`

---

## Summary

| Metric | Value |
|--------|-------|
| Files modified | 440 |
| Em-dashes removed | 11,122 |
| Em-dashes preserved (source citations) | 234 |
| Remaining after purge | 234 (all in source citation blocks) |
| EN articles clean | 384 / 401 (96%) |
| EN articles with preserved citations only | 17 / 401 (4%) |
| FR articles clean | 15 / 50 (30%) |
| FR articles with preserved citations only | 35 / 50 (70%) |
| Messages files cleaned | 5 / 5 |
| Build status | PASS (21.1s, 3,069 pages, 0 errors) |

---

## Replacement Rules Applied

| Pattern | Replacement | Context |
|---------|-------------|---------|
| `&ndash;` between digits | Hyphen (`-`) | Number ranges: 3-4x, $500K-$3M |
| `&ndash;` with spaces | Spaced hyphen (` - `) | Clause separator |
| Paired `&mdash;` | Commas (`, ... ,`) | Parenthetical asides |
| `&mdash;` before list words | Colon (`:`) | "including", "such as", etc. |
| `Tier N &mdash;` | Colon (`:`) | Label separators |
| `Class X &mdash;` | Colon (`:`) | Definition lists |
| `</strong> &mdash;` | Colon (`:`) | Bold-label descriptions |
| Line-initial `&mdash;` | Removed | Description continuations |
| Remaining `&mdash;` | Comma (`,`) | General clause separator |
| Literal `—` (U+2014) | Same rules as `&mdash;` | All contexts |
| Literal `–` (U+2013) | Same rules as `&ndash;` | All contexts |

## Exclusion Zones (Preserved)

- **Source citations:** Lines matching `&mdash; <em>Title</em>` pattern (Institution &mdash; *Publication Title*)
- 51 preserved in EN articles (17 files x 3 citations each)
- 183 preserved in FR articles (35 files, varying counts)

## Files Modified

- 386 EN article .tsx files
- 50 FR article .tsx files (in `fr/` subdirectory)
- 5 messages/*.json files (2 em-dashes each)
- 0 template files (already clean)
- 0 journey-phases.ts (already clean)
- 0 news articles (already clean)
- 0 directory data files (already clean)

## Verification

- Re-scan confirms 0 non-citation em-dashes remain
- All 234 remaining are in source citation `<li>` blocks
- No em-dashes remain in article body text
- Build: PASS (21.1s compile, 3,069 static pages, 0 errors, 0 warnings)
