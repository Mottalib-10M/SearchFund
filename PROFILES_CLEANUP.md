# PROFILES_CLEANUP.md — STEP 1.1 Complete

**Date**: April 2026

---

## Summary of changes

### Real profiles (2) — VIP treatment
| Name | Slug | Role | Status |
|------|------|------|--------|
| Mottalib Motta | `mottalib` | Searcher | Person JSON-LD added, no "Sample" badge |
| Unnat Jain | `unnat-jain` | Searcher | Person JSON-LD added, no "Sample" badge |

**What was done**: Profile detail pages now inject `schema.org/Person` JSON-LD for real profiles (detected server-side by non-`@example.com` email). No sample badge shown.

---

### Grade A sample profiles (6) — kept visible, marked as Sample
| Name | Slug | MBA | Country |
|------|------|-----|---------|
| Alex Thompson | `alex-thompson` | INSEAD | UK |
| Sophie Bernard | `sophie-bernard` | HEC Paris | FR |
| Maximilian Müller | `maximilian-mueller` | WHU | DE |
| Anna Lindqvist | `anna-lindqvist` | SSE | SE |
| Marco Bianchi | `marco-bianchi` | Bocconi | IT |
| Felix Huber | `felix-huber` | St. Gallen | CH |

**What was done**: `isPublic: true` (default), "Sample" badge shown on cards and detail pages, no Person JSON-LD.

---

### Grade B sample profiles (15) — kept visible, marked as Sample

**Sellers (5):**
| Name | Slug | Country |
|------|------|---------|
| Jean Dupont | `jean-dupont` | FR |
| Hans Weber | `hans-weber` | DE |
| María García | `maria-garcia` | ES |
| Pieter van den Berg | `pieter-vandenberg` | NL |
| Luca Rossi | `luca-rossi` | IT |

**Investors (10):**
| Name / Firm | Slug | Type | Country |
|-------------|------|------|---------|
| Richard Sterling / Sterling Search Capital | `sterling-search-capital` | Ex-Searcher | UK |
| Isabelle Moreau / Moreau Family Office | `moreau-family-office` | Family Office | FR |
| Jan Eriksson / Nordic Search Partners | `nordic-search-partners` | Institutional | SE |
| Carlos Méndez | `carlos-mendez` | Angel | ES |
| Karin Hoffmann / Hoffmann Beteiligungen | `hoffmann-beteiligungen` | Family Office | DE |
| David Chen / Albion SFIG | `albion-sfig` | Institutional | UK |
| Martijn Bakker | `martijn-bakker` | Ex-Searcher | NL |
| Giulia Conti / Conti Investimenti | `conti-investimenti` | Family Office | IT |
| Frederik Nielsen / Øresund Capital | `oresund-capital` | Accelerator | DK |
| Patrick O'Toole / Emerald Search Investors | `emerald-search-investors` | Institutional | IE |

**What was done**: `isPublic: true` (default), "Sample" badge shown on cards and detail pages, no Person JSON-LD.

---

### Grade C profiles (9) — hidden
| Name | Slug | Reason |
|------|------|--------|
| Elena Santos | `elena-santos` | 18-word stub bio |
| James O'Connor | `james-oconnor` | 15-word stub bio |
| Thomas de Vries | `thomas-devries` | 16-word stub bio |
| Clara Fischer | `clara-fischer` | 15-word stub bio |
| Sarah Mitchell | `sarah-mitchell` | 14-word stub bio |
| Pierre Lefèvre | `pierre-lefevre` | 12-word stub bio |
| Katrin Jensen | `katrin-jensen` | 14-word stub bio |
| Rui Ferreira | `rui-ferreira` | 14-word stub bio |
| Emma Wilson | `emma-wilson` | 14-word stub bio |

**What was done**: `isPublic: false` in seed data. Hidden from /searchers list, excluded from sitemap, return 404 on slug URLs.

---

## UI changes

### Profile detail pages (`/searchers/[slug]`, `/investors/[slug]`)
- **Sample profiles**: amber banner "Sample profile — This is a representative example..."
- **Real profiles**: `schema.org/Person` (or `Organization` for firms) JSON-LD injected
- **Hidden profiles** (`isPublic: false`): return 404

### Profile list pages (`/searchers`, `/investors`)
- **Banner updated**: "This page includes a mix of verified profiles and sample profiles for illustration purposes. Sample profiles are clearly marked."
- **Card badges**: Sample profiles show amber "Sample" pill next to search type badge
- **Ordering**: `createdAt: desc` naturally puts real registered users (created after seeding) first

### Sitemap
- Already filters by `isPublic: true` — Grade C profiles automatically excluded
- No additional changes needed

---

## Detection mechanism
Sample vs real profiles are detected server-side by checking if the user email ends with `@example.com`. This is reliable because:
- All seed users use `@example.com` emails
- Real users register with their actual email addresses
- Email is queried server-side only, never exposed to client

---

## Final profile count
| Category | Searchers | Investors | Sellers | Total |
|----------|-----------|-----------|---------|-------|
| Real (VIP) | 2 | 0 | 0 | 2 |
| Sample visible (A+B) | 6 | 10 | 5 | 21 |
| Sample hidden (C) | 9 | 0 | 0 | 9 |
| **Visible total** | **8** | **10** | **5** | **23** |
