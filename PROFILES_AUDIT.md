# PROFILES AUDIT — Seed Data (30 Profiles)

**Date:** April 2026
**Source:** `prisma/seed.ts`
**Total:** 30 profiles (5 sellers, 15 searchers, 10 investors)

Comprehensive analysis of all 30 seed profiles across 10 variance dimensions.

---

## SELLERS (5)

### S1 — Jean Dupont
| Dimension | Value |
|-----------|-------|
| Name | Jean Dupont |
| Slug | `jean-dupont` |
| Country/City | FR / Lyon |
| Company Role | Founder & CEO |
| Headline | "Retiring founder — B2B services" |
| Bio | "Founder and CEO of a B2B services company for 25 years. Looking for the right successor to continue the legacy." (21 words) |
| Verification | VERIFIED |

### S2 — Hans Weber
| Dimension | Value |
|-----------|-------|
| Name | Hans Weber |
| Slug | `hans-weber` |
| Country/City | DE / Munich |
| Company Role | Managing Director |
| Headline | "Family business succession" |
| Bio | "Second-generation owner of a manufacturing group in Bavaria. Ready to hand over the reins." (15 words) |
| Verification | VERIFIED |

### S3 — Maria Garcia
| Dimension | Value |
|-----------|-------|
| Name | Maria Garcia |
| Slug | `maria-garcia` |
| Country/City | ES / Madrid |
| Company Role | Founder |
| Headline | "Healthcare entrepreneur seeking succession" |
| Bio | "Built a healthcare services company from scratch. Seeking a buyer who shares our patient-first values." (16 words) |
| Verification | VERIFIED |

### S4 — Pieter van den Berg
| Dimension | Value |
|-----------|-------|
| Name | Pieter van den Berg |
| Slug | `pieter-vandenberg` |
| Country/City | NL / Amsterdam |
| Company Role | Co-founder |
| Headline | "Tech co-founder moving on" |
| Bio | "Co-founder of a logistics tech company. Partner and I want to focus on our next venture." (16 words) |
| Verification | PENDING |

### S5 — Luca Rossi
| Dimension | Value |
|-----------|-------|
| Name | Luca Rossi |
| Slug | `luca-rossi` |
| Country/City | IT / Milan |
| Company Role | Owner & President |
| Headline | "Family F&B business — third generation" |
| Bio | "Third-generation owner of a food & beverage distribution company in northern Italy." (12 words) |
| Verification | VERIFIED |

### Seller Summary

| # | Name | Country | Role | Bio Words | Verified |
|---|------|---------|------|-----------|----------|
| S1 | Jean Dupont | FR | Founder & CEO | 21 | Yes |
| S2 | Hans Weber | DE | Managing Director | 15 | Yes |
| S3 | Maria Garcia | ES | Founder | 16 | Yes |
| S4 | Pieter van den Berg | NL | Co-founder | 16 | PENDING |
| S5 | Luca Rossi | IT | Owner & President | 12 | Yes |

**Observations:**
- All bios are extremely short (12-21 words). No seller has a substantive bio.
- Good geographic spread: FR, DE, ES, NL, IT.
- Good role diversity: Founder & CEO, Managing Director, Founder, Co-founder, Owner & President.
- Only one PENDING verification (Pieter), rest VERIFIED. Good.
- Headlines are decent but all sellers lack depth. No mention of company size, years in business (except Jean's "25 years"), industry specifics, or emotional detail.

---

## SEARCHERS (15)

### R1 — Alex Thompson
| Dimension | Value |
|-----------|-------|
| Name | Alex Thompson |
| Slug | `alex-thompson` |
| Country/City | UK / London |
| MBA School | INSEAD |
| Search Type | TRADITIONAL |
| Search Status | ACTIVELY_SEARCHING |
| Target Sectors | Business Services, Technology |
| Target Countries | UK, FR, DE |
| EBITDA Range | 500K-2M |
| Bio/Thesis Words | 150 words |

**Background (inferred):** 8 years at McKinsey (consulting). MBA INSEAD 2023. Partnered search, 14 investors. Speaks English, French, conversational German.

### R2 — Sophie Bernard
| Dimension | Value |
|-----------|-------|
| Name | Sophie Bernard |
| Slug | `sophie-bernard` |
| Country/City | FR / Paris |
| MBA School | HEC Paris |
| Search Type | SELF_FUNDED |
| Search Status | ACTIVELY_SEARCHING |
| Target Sectors | Healthcare, Education |
| Target Countries | FR, BE, CH |
| EBITDA Range | 300K-1.5M |
| Bio/Thesis Words | 148 words |

**Background (inferred):** 6 years at Bain & Company (consulting). MBA HEC Paris. Master's in Public Health from Sciences Po. Solo self-funded searcher. Launched January 2025. Speaks French and English.

### R3 — Maximilian Muller
| Dimension | Value |
|-----------|-------|
| Name | Maximilian Muller |
| Slug | `maximilian-mueller` |
| Country/City | DE / Frankfurt |
| MBA School | WHU Otto Beisheim |
| Search Type | TRADITIONAL |
| Search Status | RAISING_CAPITAL |
| Target Sectors | Manufacturing, Business Services |
| Target Countries | DE, AT, CH |
| EBITDA Range | 750K-3M |
| Bio/Thesis Words | 137 words |

**Background (inferred):** 7 years at Siemens (industrial operations/operator). MBA WHU. Partnered search. Fundraising mid-2025. German family offices. Speaks German and English.

### R4 — Elena Santos
| Dimension | Value |
|-----------|-------|
| Name | Elena Santos |
| Slug | `elena-santos` |
| Country/City | ES / Barcelona |
| MBA School | IESE Business School |
| Search Type | ACCELERATOR |
| Search Status | ACTIVELY_SEARCHING |
| Target Sectors | E-commerce, Retail, Food & Beverage |
| Target Countries | ES, PT |
| EBITDA Range | 200K-1M |
| Bio/Thesis Words | 15 words |

**Background (inferred):** IESE SF Accelerator. No background information provided. No detail on prior career, team, or thesis rationale.

### R5 — James O'Connor
| Dimension | Value |
|-----------|-------|
| Name | James O'Connor |
| Slug | `james-oconnor` |
| Country/City | IE / Dublin |
| MBA School | London Business School |
| Search Type | SELF_FUNDED |
| Search Status | LOI_SIGNED |
| Target Sectors | SaaS, Technology |
| Target Countries | IE, UK |
| EBITDA Range | 400K-1.5M |
| Bio/Thesis Words | 14 words |

**Background (inferred):** LBS alum. LOI signed. No background information provided. No detail on prior career, team, or thesis rationale.

### R6 — Anna Lindqvist
| Dimension | Value |
|-----------|-------|
| Name | Anna Lindqvist |
| Slug | `anna-lindqvist` |
| Country/City | SE / Stockholm |
| MBA School | Stockholm School of Economics |
| Search Type | TRADITIONAL |
| Search Status | PREPARING |
| Target Sectors | Business Services, Education, Healthcare |
| Target Countries | SE, NO, DK, FI |
| EBITDA Range | 500K-2M |
| Bio/Thesis Words | 142 words |

**Background (inferred):** 5 years at EQT Partners (PE). MBA SSE 2025. Solo traditional, preparing to launch late 2026. Building investor network. Speaks Swedish, Norwegian, English; working Danish.

### R7 — Thomas de Vries
| Dimension | Value |
|-----------|-------|
| Name | Thomas de Vries |
| Slug | `thomas-devries` |
| Country/City | NL / Rotterdam |
| MBA School | RSM Erasmus |
| Search Type | INDEPENDENT_SPONSOR |
| Search Status | ACTIVELY_SEARCHING |
| Target Sectors | Logistics, Business Services |
| Target Countries | NL, BE, DE |
| EBITDA Range | 750K-2.5M |
| Bio/Thesis Words | 14 words |

**Background (inferred):** "Experienced operator." No specifics on prior career, years of experience, or thesis rationale.

### R8 — Clara Fischer
| Dimension | Value |
|-----------|-------|
| Name | Clara Fischer |
| Slug | `clara-fischer` |
| Country/City | DE / Berlin |
| MBA School | ESMT Berlin |
| Search Type | SELF_FUNDED |
| Search Status | ACTIVELY_SEARCHING |
| Target Sectors | Technology, Media |
| Target Countries | DE, AT |
| EBITDA Range | 300K-1.2M |
| Bio/Thesis Words | 14 words |

**Background (inferred):** ESMT alum. No background information provided. No detail on prior career, team, or thesis rationale.

### R9 — Marco Bianchi
| Dimension | Value |
|-----------|-------|
| Name | Marco Bianchi |
| Slug | `marco-bianchi` |
| Country/City | IT / Rome |
| MBA School | Bocconi |
| Search Type | TRADITIONAL |
| Search Status | ACQUIRED |
| Target Sectors | Food & Beverage, Manufacturing |
| Target Countries | IT |
| EBITDA Range | 500K-2M |
| Bio/Thesis Words | 150 words |

**Background (inferred):** 4 years IB at Mediobanca. MBA Bocconi. Partnered traditional, acquired specialty food manufacturer in Tuscany in 2023. CEO-operator since. EBITDA grew 25% YoY. Speaks Italian and English.

### R10 — Sarah Mitchell
| Dimension | Value |
|-----------|-------|
| Name | Sarah Mitchell |
| Slug | `sarah-mitchell` |
| Country/City | UK / Edinburgh |
| MBA School | University of Edinburgh |
| Search Type | SELF_FUNDED |
| Search Status | ACTIVELY_SEARCHING |
| Target Sectors | Financial Services, Business Services |
| Target Countries | UK |
| EBITDA Range | 400K-1.5M |
| Bio/Thesis Words | 13 words |

**Background (inferred):** Edinburgh alum. No background information provided. No detail on prior career, team, or thesis rationale.

### R11 — Pierre Lefevre
| Dimension | Value |
|-----------|-------|
| Name | Pierre Lefevre |
| Slug | `pierre-lefevre` |
| Country/City | FR / Bordeaux |
| MBA School | ESSEC |
| Search Type | ACCELERATOR |
| Search Status | RAISING_CAPITAL |
| Target Sectors | E-commerce, Retail |
| Target Countries | FR |
| EBITDA Range | 200K-800K |
| Bio/Thesis Words | 11 words |

**Background (inferred):** ESSEC alum. E-commerce aggregation strategy. No background information provided. No detail on prior career, team, or thesis rationale.

### R12 — Katrin Jensen
| Dimension | Value |
|-----------|-------|
| Name | Katrin Jensen |
| Slug | `katrin-jensen` |
| Country/City | DK / Copenhagen |
| MBA School | CBS Copenhagen |
| Search Type | TRADITIONAL |
| Search Status | ACTIVELY_SEARCHING |
| Target Sectors | Energy, Business Services |
| Target Countries | DK, SE, NO |
| EBITDA Range | 500K-1.8M |
| Bio/Thesis Words | 14 words |

**Background (inferred):** CBS MBA. No background information provided. No detail on prior career, team, or thesis rationale.

### R13 — Rui Ferreira
| Dimension | Value |
|-----------|-------|
| Name | Rui Ferreira |
| Slug | `rui-ferreira` |
| Country/City | PT / Lisbon |
| MBA School | Nova SBE |
| Search Type | SELF_FUNDED |
| Search Status | PREPARING |
| Target Sectors | Technology, Business Services |
| Target Countries | PT, ES |
| EBITDA Range | 150K-750K |
| Bio/Thesis Words | 12 words |

**Background (inferred):** Nova SBE grad. No background information provided. No detail on prior career, team, or thesis rationale.

### R14 — Felix Huber
| Dimension | Value |
|-----------|-------|
| Name | Felix Huber |
| Slug | `felix-huber` |
| Country/City | CH / Zurich |
| MBA School | University of St. Gallen |
| Search Type | INDEPENDENT_SPONSOR |
| Search Status | ACTIVELY_SEARCHING |
| Target Sectors | Manufacturing, Healthcare |
| Target Countries | CH, DE, AT |
| EBITDA Range | 1M-3M |
| Bio/Thesis Words | 149 words |

**Background (inferred):** 9 years in medical device industry (Stryker, then VP Ops at medtech startup). MBA St. Gallen. Solo independent sponsor. Launched mid-2024. Relationships with family offices. Speaks German, French, English.

### R15 — Emma Wilson
| Dimension | Value |
|-----------|-------|
| Name | Emma Wilson |
| Slug | `emma-wilson` |
| Country/City | UK / Manchester |
| MBA School | Manchester Business School |
| Search Type | SELF_FUNDED |
| Search Status | OPERATING |
| Target Sectors | Education, Healthcare |
| Target Countries | UK |
| EBITDA Range | 300K-1M |
| Bio/Thesis Words | 14 words |

**Background (inferred):** Acquired vocational training provider in 2024. Operating. No background information provided beyond that.

### Searcher Summary Table

| # | Name | Country | MBA | Type | Status | EBITDA (K) | Thesis Words | Background |
|---|------|---------|-----|------|--------|------------|--------------|------------|
| R1 | Alex Thompson | UK | INSEAD | Traditional | Searching | 500-2000 | 150 | Consulting (McKinsey) |
| R2 | Sophie Bernard | FR | HEC Paris | Self-funded | Searching | 300-1500 | 148 | Consulting (Bain) |
| R3 | Maximilian Muller | DE | WHU | Traditional | Raising | 750-3000 | 137 | Operator (Siemens) |
| R4 | Elena Santos | ES | IESE | Accelerator | Searching | 200-1000 | 15 | Unknown |
| R5 | James O'Connor | IE | LBS | Self-funded | LOI Signed | 400-1500 | 14 | Unknown |
| R6 | Anna Lindqvist | SE | SSE | Traditional | Preparing | 500-2000 | 142 | PE (EQT) |
| R7 | Thomas de Vries | NL | RSM Erasmus | Ind. Sponsor | Searching | 750-2500 | 14 | "Operator" (no detail) |
| R8 | Clara Fischer | DE | ESMT | Self-funded | Searching | 300-1200 | 14 | Unknown |
| R9 | Marco Bianchi | IT | Bocconi | Traditional | Acquired | 500-2000 | 150 | IB (Mediobanca) |
| R10 | Sarah Mitchell | UK | Edinburgh | Self-funded | Searching | 400-1500 | 13 | Unknown |
| R11 | Pierre Lefevre | FR | ESSEC | Accelerator | Raising | 200-800 | 11 | Unknown |
| R12 | Katrin Jensen | DK | CBS | Traditional | Searching | 500-1800 | 14 | Unknown |
| R13 | Rui Ferreira | PT | Nova SBE | Self-funded | Preparing | 150-750 | 12 | Unknown |
| R14 | Felix Huber | CH | St. Gallen | Ind. Sponsor | Searching | 1000-3000 | 149 | Operator (Stryker/medtech) |
| R15 | Emma Wilson | UK | Manchester | Self-funded | Operating | 300-1000 | 14 | Unknown |

**Key observation:** There is a stark bimodal distribution in thesis/bio length. Six profiles (R1, R2, R3, R6, R9, R14) have rich 137-150 word theses with detailed backgrounds, years of experience, languages, and search context. The other nine profiles (R4, R5, R7, R8, R10, R11, R12, R13, R15) have 11-15 word single-sentence placeholders with zero background information.

---

## INVESTORS (10)

### I1 — Richard Sterling
| Dimension | Value |
|-----------|-------|
| Name | Richard Sterling |
| Slug | `sterling-search-capital` |
| Country/City | UK / London |
| Firm Name | Sterling Search Capital |
| Investor Type | EX_SEARCHER |
| Ticket Size | 200K-750K |
| Deals Invested | 12 |
| Target Sectors | Business Services, Healthcare, Technology |
| Target Countries | UK, FR, DE |
| Value-Add | Operational expertise, Board governance, Fundraising support, M&A integration |
| Bio/Thesis Words | 30 words |

### I2 — Isabelle Moreau
| Dimension | Value |
|-----------|-------|
| Name | Isabelle Moreau |
| Slug | `moreau-family-office` |
| Country/City | FR / Paris |
| Firm Name | Moreau Family Office |
| Investor Type | FAMILY_OFFICE |
| Ticket Size | 500K-2M |
| Deals Invested | 8 |
| Target Sectors | Healthcare, Education, Food & Beverage |
| Target Countries | FR, BE, CH, LU |
| Value-Add | Industry network, Governance experience, Long-term capital, International expansion |
| Bio/Thesis Words | 26 words |

### I3 — Jan Eriksson
| Dimension | Value |
|-----------|-------|
| Name | Jan Eriksson |
| Slug | `nordic-search-partners` |
| Country/City | SE / Stockholm |
| Firm Name | Nordic Search Partners |
| Investor Type | INSTITUTIONAL |
| Ticket Size | 300K-1.5M |
| Deals Invested | 15 |
| Target Sectors | Technology, SaaS, Business Services |
| Target Countries | SE, NO, DK, FI |
| Value-Add | Nordic network, SaaS expertise, Talent acquisition, Go-to-market strategy |
| Bio/Thesis Words | 23 words |

### I4 — Carlos Mendez
| Dimension | Value |
|-----------|-------|
| Name | Carlos Mendez |
| Slug | `carlos-mendez` |
| Country/City | ES / Madrid |
| Firm Name | (none -- angel) |
| Investor Type | ANGEL |
| Ticket Size | 50K-250K |
| Deals Invested | 3 |
| Target Sectors | E-commerce, Technology, Retail |
| Target Countries | ES, PT |
| Value-Add | Startup mentoring, Digital marketing, Iberian market knowledge |
| Bio/Thesis Words | 23 words |

### I5 — Karin Hoffmann
| Dimension | Value |
|-----------|-------|
| Name | Karin Hoffmann |
| Slug | `hoffmann-beteiligungen` |
| Country/City | DE / Hamburg |
| Firm Name | Hoffmann Beteiligungen |
| Investor Type | FAMILY_OFFICE |
| Ticket Size | 500K-3M |
| Deals Invested | 6 |
| Target Sectors | Manufacturing, Logistics, Energy |
| Target Countries | DE, AT, CH, PL |
| Value-Add | Mittelstand expertise, Supply chain optimization, German market access, Industrial operations |
| Bio/Thesis Words | 20 words |

### I6 — David Chen
| Dimension | Value |
|-----------|-------|
| Name | David Chen |
| Slug | `albion-sfig` |
| Country/City | UK / London |
| Firm Name | Albion Search Fund Investors |
| Investor Type | INSTITUTIONAL |
| Ticket Size | 250K-1M |
| Deals Invested | 20 |
| Target Sectors | Financial Services, Business Services, Technology |
| Target Countries | UK, IE |
| Value-Add | Financial structuring, Regulatory expertise, Post-acquisition support, Exit planning |
| Bio/Thesis Words | 25 words |

### I7 — Martijn Bakker
| Dimension | Value |
|-----------|-------|
| Name | Martijn Bakker |
| Slug | `martijn-bakker` |
| Country/City | NL / Amsterdam |
| Firm Name | (none -- ex-searcher) |
| Investor Type | EX_SEARCHER |
| Ticket Size | 100K-500K |
| Deals Invested | 5 |
| Target Sectors | Business Services, Logistics, Technology |
| Target Countries | NL, BE |
| Value-Add | Search fund playbook, Benelux network, Operating experience, Due diligence support |
| Bio/Thesis Words | 19 words |

### I8 — Giulia Conti
| Dimension | Value |
|-----------|-------|
| Name | Giulia Conti |
| Slug | `conti-investimenti` |
| Country/City | IT / Milan |
| Firm Name | Conti Investimenti |
| Investor Type | FAMILY_OFFICE |
| Ticket Size | 300K-1.5M |
| Deals Invested | 4 |
| Target Sectors | Food & Beverage, Manufacturing, Healthcare |
| Target Countries | IT, CH |
| Value-Add | Italian market expertise, Food industry network, Regulatory navigation, Family business transitions |
| Bio/Thesis Words | 25 words |

### I9 — Frederik Nielsen
| Dimension | Value |
|-----------|-------|
| Name | Frederik Nielsen |
| Slug | `oresund-capital` |
| Country/City | DK / Copenhagen |
| Firm Name | Oresund Capital |
| Investor Type | ACCELERATOR |
| Ticket Size | 150K-600K |
| Deals Invested | 10 |
| Target Sectors | Technology, Business Services, SaaS |
| Target Countries | DK, SE |
| Value-Add | Accelerator program, Cohort network, Search methodology, Capital introductions |
| Bio/Thesis Words | 22 words |

### I10 — Patrick O'Toole
| Dimension | Value |
|-----------|-------|
| Name | Patrick O'Toole |
| Slug | `emerald-search-investors` |
| Country/City | IE / Dublin |
| Firm Name | Emerald Search Investors |
| Investor Type | INSTITUTIONAL |
| Ticket Size | 200K-800K |
| Deals Invested | 7 |
| Target Sectors | Financial Services, Technology, SaaS, Healthcare |
| Target Countries | IE, UK |
| Value-Add | Irish market knowledge, Tech ecosystem access, Professional services network, Growth capital |
| Bio/Thesis Words | 20 words |

### Investor Summary Table

| # | Name | Country | Firm | Type | Ticket (K) | Deals | Thesis Words |
|---|------|---------|------|------|------------|-------|--------------|
| I1 | Richard Sterling | UK | Sterling Search Capital | Ex-Searcher | 200-750 | 12 | 30 |
| I2 | Isabelle Moreau | FR | Moreau Family Office | Family Office | 500-2000 | 8 | 26 |
| I3 | Jan Eriksson | SE | Nordic Search Partners | Institutional | 300-1500 | 15 | 23 |
| I4 | Carlos Mendez | ES | (angel) | Angel | 50-250 | 3 | 23 |
| I5 | Karin Hoffmann | DE | Hoffmann Beteiligungen | Family Office | 500-3000 | 6 | 20 |
| I6 | David Chen | UK | Albion SFIG | Institutional | 250-1000 | 20 | 25 |
| I7 | Martijn Bakker | NL | (ex-searcher) | Ex-Searcher | 100-500 | 5 | 19 |
| I8 | Giulia Conti | IT | Conti Investimenti | Family Office | 300-1500 | 4 | 25 |
| I9 | Frederik Nielsen | DK | Oresund Capital | Accelerator | 150-600 | 10 | 22 |
| I10 | Patrick O'Toole | IE | Emerald Search Investors | Institutional | 200-800 | 7 | 20 |

**Key observation:** All 10 investor theses are short (19-30 words). None has a rich narrative. However, the structured fields (ticket size, deals, sectors, value-add) provide decent differentiation. The thesis text itself is uniformly thin.

---

## 10-DIMENSION VARIANCE ANALYSIS

### 1. Bio / Thesis Length

| Bucket | Count | Profiles |
|--------|-------|----------|
| Very short (10-16 words) | 14 | All 5 sellers (S1-S5), plus searchers R4, R5, R7, R8, R10, R11, R12, R13, R15 |
| Medium (19-30 words) | 10 | All 10 investors (I1-I10) |
| Long (137-150 words) | 6 | Searchers R1, R2, R3, R6, R9, R14 |

**Verdict: POOR variance.** There is a severe bimodal distribution. 14 profiles have throwaway single-sentence bios. 10 investors sit in a narrow 19-30 word band (uniformly short). Only 6 searchers have substantive bios. There are no profiles in the 50-100 word range, and no investor has a long-form thesis. The distribution should be a smooth gradient across all roles, not three hard clusters.

**Grade: C (needs significant improvement)**

---

### 2. MBA School Diversity

Schools represented (15 searchers):
1. INSEAD (R1)
2. HEC Paris (R2)
3. WHU Otto Beisheim (R3)
4. IESE Business School (R4)
5. London Business School (R5)
6. Stockholm School of Economics (R6)
7. RSM Erasmus (R7)
8. ESMT Berlin (R8)
9. Bocconi (R9)
10. University of Edinburgh (R10)
11. ESSEC (R11)
12. CBS Copenhagen (R12)
13. Nova SBE (R13)
14. University of St. Gallen (R14)
15. Manchester Business School (R15)

**Verdict: EXCELLENT variance.** 15 unique schools across 15 profiles. Every searcher has a different MBA program. Mix of top-tier (INSEAD, LBS, HEC, IESE, Bocconi) and strong regional schools (SSE, WHU, ESMT, CBS, RSM, Nova SBE, Edinburgh, Manchester). All are realistic European ETA feeder schools. No repeats.

**Grade: A (keep as-is)**

---

### 3. Professional Background

| Background | Profiles | Count |
|------------|----------|-------|
| Consulting (MBB) | R1 (McKinsey), R2 (Bain) | 2 |
| Investment Banking | R9 (Mediobanca) | 1 |
| Private Equity | R6 (EQT) | 1 |
| Industrial Operations / Operator | R3 (Siemens), R14 (Stryker/medtech) | 2 |
| Unknown / Not stated | R4, R5, R7, R8, R10, R11, R12, R13, R15 | 9 |

**Verdict: POOR variance.** Only 6 of 15 searchers have a stated background. The 6 that do have backgrounds show good diversity (consulting, IB, PE, operator). But 9 profiles provide zero career history. Missing entirely from the pool: founder/entrepreneur, military, corporate strategy, Big 4 accounting, legal, public sector, family business, engineering. The potential for realistic background variety is severely underutilized.

For sellers: backgrounds are implied by their company roles but not explicitly stated beyond a single sentence. No seller mentions years of industry experience, education, or life context.

For investors: backgrounds are partially implied by investor type (ex-searcher, family office) but never described in detail. No investor bio mentions where they worked before investing, how they got into search funds, or their personal story.

**Grade: C (needs significant improvement)**

---

### 4. Geography

**Countries represented across all 30 profiles:**

| Country | Sellers | Searchers | Investors | Total |
|---------|---------|-----------|-----------|-------|
| UK | 0 | 3 (R1, R10, R15) | 2 (I1, I6) | 5 |
| FR | 1 (S1) | 2 (R2, R11) | 1 (I2) | 4 |
| DE | 1 (S2) | 2 (R3, R8) | 1 (I5) | 4 |
| ES | 1 (S3) | 1 (R4) | 1 (I4) | 3 |
| IT | 1 (S5) | 1 (R9) | 1 (I8) | 3 |
| NL | 1 (S4) | 1 (R7) | 1 (I7) | 3 |
| SE | 0 | 1 (R6) | 1 (I3) | 2 |
| DK | 0 | 1 (R12) | 1 (I9) | 2 |
| IE | 0 | 1 (R5) | 1 (I10) | 2 |
| CH | 0 | 1 (R14) | 0 | 1 |
| PT | 0 | 1 (R13) | 0 | 1 |

**Cities (unique):** Lyon, Munich, Madrid, Amsterdam, Milan, London (x3), Paris (x2), Frankfurt, Barcelona, Dublin (x2), Stockholm (x2), Rotterdam, Berlin, Rome, Edinburgh, Bordeaux, Copenhagen (x2), Lisbon, Zurich, Manchester, Hamburg

**Verdict: GOOD variance.** 11 countries represented. Good spread across Western, Northern, and Southern Europe. Minor gap: no Central/Eastern Europe profiles (no one from Poland, Czech Republic, or the Baltics, even though listings include Poland). Switzerland and Portugal have only one profile each. Cities are diverse and not all capital cities.

**Grade: B+ (minor enrichment possible)**

---

### 5. Sector Focus

**Sectors mentioned across all profiles:**

| Sector | Searchers | Investors |
|--------|-----------|-----------|
| Business Services | R1, R3, R6, R7, R10, R12 | I1, I3, I5, I6, I7, I9 |
| Technology | R1, R5, R8, R13 | I1, I3, I4, I6, I7, I9, I10 |
| Healthcare | R2, R6, R14 | I1, I2, I8, I10 |
| Manufacturing | R3, R9, R14 | I5, I8 |
| Education | R2, R6 | I2 |
| SaaS | R5 | I3, I9, I10 |
| E-commerce | R4, R11 | I4 |
| Retail | R4, R11 | I4 |
| Food & Beverage | R4, R9 | I2, I8 |
| Financial Services | R10 | I6, I10 |
| Logistics | R7 | I5 |
| Media | R8 | 0 |
| Energy | R12 | I5 |

**Verdict: ADEQUATE variance.** "Business Services" and "Technology" are over-represented (appear in 6+ searchers and 6+ investors each). Some sectors are only lightly covered (Media, Energy, Logistics). Niche sectors that could add realism (environmental services, construction, automotive aftermarket, veterinary, real estate services) are missing even though they appear in the listings.

**Grade: B (acceptable but could be richer)**

---

### 6. Search Size / Ticket Size Range

**Searcher EBITDA ranges (K EUR):**
- 150-750 (R13) -- smallest
- 200-800 (R11)
- 200-1000 (R4)
- 300-1000 (R15)
- 300-1200 (R8)
- 300-1500 (R2)
- 400-1500 (R5, R10)
- 500-1800 (R12)
- 500-2000 (R1, R6, R9)
- 750-2500 (R7)
- 750-3000 (R3)
- 1000-3000 (R14) -- largest

**Investor ticket sizes (K EUR):**
- 50-250 (I4) -- smallest (angel)
- 100-500 (I7)
- 150-600 (I9)
- 200-750 (I1)
- 200-800 (I10)
- 250-1000 (I6)
- 300-1500 (I3, I8)
- 500-2000 (I2)
- 500-3000 (I5) -- largest

**Verdict: GOOD variance.** Searcher EBITDA ranges span from 150K to 3M with decent distribution. No clustering at one size. Investor tickets range from 50K (angel) to 3M (family office). The spread feels realistic and differentiated.

**Grade: A- (keep as-is)**

---

### 7. Status Diversity

**Searcher statuses:**

| Status | Count | Profiles |
|--------|-------|----------|
| ACTIVELY_SEARCHING | 8 | R1, R2, R4, R7, R8, R10, R12, R14 |
| RAISING_CAPITAL | 2 | R3, R11 |
| PREPARING | 2 | R6, R13 |
| LOI_SIGNED | 1 | R5 |
| ACQUIRED | 1 | R9 |
| OPERATING | 1 | R15 |
| EXITED | 0 | (none) |

**Verdict: ADEQUATE but top-heavy.** 8 of 15 searchers (53%) are ACTIVELY_SEARCHING. The other statuses are represented but thinly. Notable gap: no EXITED searcher. Having one would add realism and provide a complete lifecycle arc.

**Grade: B (one more post-exit profile would help)**

---

### 8. Launch Year / Timeline Diversity

**Years mentioned or implied in bios (where stated):**

| Year | Event | Profile |
|------|-------|---------|
| 2022 | Launched search | R9 (Marco) |
| 2023 | MBA completed / acquisition closed | R1 (INSEAD 2023), R9 (acquired late 2023) |
| 2024 | Search launched / acquisition | R1 (launched early 2024), R14 (launched mid-2024), R15 (acquired 2024) |
| 2025 | MBA completed / fundraising | R2 (launched Jan 2025), R3 (fundraising mid-2025), R6 (graduated 2025) |
| 2026 | Planned launch | R6 (launch late 2026, fundraise early 2026) |
| Not stated | 9 profiles | R4, R5, R7, R8, R10, R11, R12, R13 |

**Verdict: MODERATE variance.** The 6 rich profiles span 2022-2026 which is good. But 9 profiles give no temporal context at all because their bios are too short.

**Grade: B- (would improve automatically if bios were expanded)**

---

### 9. Solo vs. Partnered

| Structure | Count | Profiles |
|-----------|-------|----------|
| Partnered / stated | 3 | R1 (partner from INSEAD), R3 (partner from WHU), R9 (search partner) |
| Solo / stated | 3 | R2 (solo self-funded), R6 (solo traditional), R14 (solo independent sponsor) |
| Not stated | 9 | R4, R5, R7, R8, R10, R11, R12, R13, R15 |

**Verdict: ADEQUATE for the profiles that disclose it.** 3 partnered, 3 solo -- perfectly balanced among the detailed profiles. But 9 profiles don't mention it, so the effective coverage is only 40%.

**Grade: B- (would improve automatically if bios were expanded)**

---

### 10. Accelerator Affiliation

| Affiliation | Count | Profiles |
|-------------|-------|----------|
| IESE SF Accelerator | 1 | R4 (Elena Santos) |
| Oresund Capital (investor side) | 1 | I9 (Frederik Nielsen) |
| Accelerator search type, unspecified affiliation | 1 | R11 (Pierre Lefevre -- type is ACCELERATOR but no accelerator named) |
| Independent Sponsor (no accelerator) | 2 | R7, R14 |
| No accelerator | 11 remaining searchers | -- |

**Verdict: THIN.** Only 1 searcher explicitly names their accelerator (IESE SF Accelerator). Pierre Lefevre (R11) has search type ACCELERATOR but no accelerator is named in his thesis. Given that accelerators are a major part of the European search fund ecosystem (IESE, Oresund, Relay Investments, Pacific Lake Partners, etc.), this dimension is under-represented.

**Grade: C+ (needs more accelerator detail, especially for R11)**

---

## PER-PROFILE CLASSIFICATION

### Sellers

| # | Name | Grade | Verdict |
|---|------|-------|---------|
| S1 | Jean Dupont | **B** | Needs enrichment -- bio too short (21 words). Should mention company size, industry, founder story, reason for retirement. |
| S2 | Hans Weber | **B** | Needs enrichment -- bio too short (15 words). Should mention revenue, number of employees, what makes the business special. |
| S3 | Maria Garcia | **B** | Needs enrichment -- bio too short (16 words). Should mention years in business, number of clinics/patients, growth story. |
| S4 | Pieter van den Berg | **B** | Needs enrichment -- bio too short (16 words). Good that he's PENDING verification (adds variety). Should describe the tech, revenue, team. |
| S5 | Luca Rossi | **B** | Needs enrichment -- bio shortest of all (12 words). Should mention distribution network, clients, succession context. |

**Seller verdict:** All 5 sellers have the same problem: minimal bios. The structured fields (country, role, headline) are fine and varied, but the bios read like placeholder text. Every seller should have 50-120 words covering: how they built the business, why they're selling, what they want in a buyer, and what makes their company special.

---

### Searchers

| # | Name | Grade | Verdict |
|---|------|-------|---------|
| R1 | Alex Thompson | **A** | Keep as-is. Rich bio, clear background (McKinsey), specific thesis, languages, partner details, investor count. Exemplary profile. |
| R2 | Sophie Bernard | **A** | Keep as-is. Rich bio, clear background (Bain), dual degrees, specific healthcare thesis, solo search. Exemplary profile. |
| R3 | Maximilian Muller | **A** | Keep as-is. Rich bio, clear background (Siemens), DACH focus, Mittelstand thesis, fundraising context. Exemplary profile. |
| R4 | Elena Santos | **C** | Too generic. 15-word thesis is a placeholder. No career background, no thesis rationale, no detail on accelerator experience. Name the accelerator, describe prior career, explain why consumer/retail in Iberia. |
| R5 | James O'Connor | **C** | Too generic. 14-word thesis is a placeholder. LOI_SIGNED is the most interesting status but has the least detail. Should describe the deal context, prior career (PE? IB? tech?), how he found the company. |
| R6 | Anna Lindqvist | **A** | Keep as-is. Rich bio, clear background (EQT Partners), specific Nordic thesis, timeline, language skills. Exemplary profile. |
| R7 | Thomas de Vries | **C** | Too generic. 14 words, "experienced operator" with zero specifics. Independent sponsor model is interesting but not explained. What did he operate? How many years? Why Benelux logistics? |
| R8 | Clara Fischer | **C** | Too generic. 14-word thesis is a placeholder. No career background whatsoever. "Digital agencies" and "tech-enabled media" is vague. Needs prior career, why Berlin, what specific sub-sectors. |
| R9 | Marco Bianchi | **A** | Keep as-is. Rich bio with complete arc: IB background, MBA, search, acquisition, operations, growth metrics. Best example of a post-acquisition profile. |
| R10 | Sarah Mitchell | **C** | Too generic. 13 words, no background. "IFAs, accounting practices" is specific enough as a sector but the profile gives zero context on who Sarah is, her career, or why she's targeting financial services. |
| R11 | Pierre Lefevre | **C** | Too generic. 11 words -- the shortest of all searcher theses. "E-commerce aggregation" is an interesting and differentiated strategy but completely unexplained. What's his e-commerce background? What DTC categories? How many brands in the roll-up? Which accelerator? |
| R12 | Katrin Jensen | **C** | Too generic. 14 words, no background. Energy services is a differentiated sector but there's no explanation of why she's drawn to it or what her prior experience is. |
| R13 | Rui Ferreira | **C** | Too generic. 12 words, no background. Smallest EBITDA range (150-750K) is interesting and differentiated but unexplained. Why Portugal? What tech services? Prior career? |
| R14 | Felix Huber | **A** | Keep as-is. Rich bio, clear background (Stryker, medtech VP Ops), specific thesis (ISO 13485, ageing population), independent sponsor model explained, investor relationships described. Exemplary profile. |
| R15 | Emma Wilson | **C** | Too generic. 14 words. OPERATING status is interesting but wastes its potential with no detail. What did she acquire? How's it going? What's she learned? Prior career? |

**Searcher verdict:** The 15 searchers split cleanly into two tiers:
- **Tier 1 (Grade A):** R1, R2, R3, R6, R9, R14 -- six profiles with rich, realistic, differentiated bios (137-150 words each). These are excellent.
- **Tier 2 (Grade C):** R4, R5, R7, R8, R10, R11, R12, R13, R15 -- nine profiles with stub bios (11-15 words). These are functionally empty placeholders. Every single one needs 100+ words of enrichment including career background, thesis rationale, and personal detail.

---

### Investors

| # | Name | Grade | Verdict |
|---|------|-------|---------|
| I1 | Richard Sterling | **B** | Needs enrichment -- thesis is 30 words. Good structured data (12 deals, ex-searcher, clear sectors). Should describe: what company he acquired and exited, when, how he transitioned to investing, investment philosophy. |
| I2 | Isabelle Moreau | **B** | Needs enrichment -- thesis is 26 words. "Third-generation family office" is interesting but unexplained. What's the family business? When did they start investing in search funds? What's their portfolio look like? |
| I3 | Jan Eriksson | **B** | Needs enrichment -- thesis is 23 words. "15 searchers since 2019" is great data but needs narrative. Who founded it? What's the team? What's their track record? Any exits? |
| I4 | Carlos Mendez | **B** | Needs enrichment -- thesis is 23 words. "Serial entrepreneur" -- what companies? What did he build/sell? Why search funds? Only angel with no firm name -- good differentiation. |
| I5 | Karin Hoffmann | **B** | Needs enrichment -- thesis is 20 words. Family office with Mittelstand expertise -- good positioning. But what's the family business? How did they get into search fund investing? What's their industrial background? |
| I6 | David Chen | **B** | Needs enrichment -- thesis is 25 words. "Most active SF investor in UK/Ireland since 2017" with 20 deals -- excellent positioning but needs narrative. Team size? Portfolio performance? Notable exits? |
| I7 | Martijn Bakker | **B** | Needs enrichment -- thesis is 19 words (shortest). Ex-searcher, acquired Dutch logistics -- good story but told in one sentence. What company? When? How did the exit work? What did he learn? |
| I8 | Giulia Conti | **B** | Needs enrichment -- thesis is 25 words. "Italian SMEs, food, manufacturing, healthcare" with "nuances of Italian family business succession" -- good positioning. But what's the family's background? Any portfolio examples? |
| I9 | Frederik Nielsen | **B** | Needs enrichment -- thesis is 22 words. "12-month accelerator, 50+ investors" -- good data points. But how many cohorts? What's the success rate? Any portfolio companies to highlight? |
| I10 | Patrick O'Toole | **B** | Needs enrichment -- thesis is 20 words. "Ireland's first dedicated SF vehicle" -- great positioning claim. But when was it founded? Team? Track record? Any notable investments? |

**Investor verdict:** All 10 investors are Grade B -- a consistent "needs enrichment" across the board. The structured data (type, ticket, sectors, value-add, deals) provides good differentiation, but every single investor thesis is a 1-2 sentence placeholder. None has a narrative arc. The investor bios should be expanded to 60-150 words each, covering: personal/firm backstory, how they entered the search fund space, portfolio highlights, investment philosophy, and what they look for in a searcher.

---

## OVERALL SUMMARY

### What Works Well
1. **MBA school diversity** -- 15 unique schools, all realistic European ETA feeders. Perfect.
2. **Geographic spread** -- 11 countries, 22+ unique cities. Well-distributed across Western, Northern, and Southern Europe.
3. **EBITDA / ticket size ranges** -- smooth distribution from 150K to 3M. Realistic and differentiated.
4. **Investor type diversity** -- 3 family offices, 3 institutional, 2 ex-searchers, 1 angel, 1 accelerator. Excellent mix.
5. **Search type diversity** -- 5 traditional, 5 self-funded, 2 accelerator, 2 independent sponsor, plus variety across status.
6. **Seller role diversity** -- Founder & CEO, Managing Director, Founder, Co-founder, Owner & President. All different.

### What Needs Fixing
1. **9 of 15 searcher bios are stubs** (11-15 words). These profiles are functionally empty. This is the single biggest problem in the seed data.
2. **All 10 investor theses are short** (19-30 words). None has a real narrative. The structured fields carry the differentiation, but the human-readable thesis text is uniformly thin.
3. **All 5 seller bios are short** (12-21 words). Sellers have the least depth of any role.
4. **No professional backgrounds stated** for 9 searchers. The reader cannot tell if R4 came from consulting, banking, the military, or a bakery.
5. **No EXITED searcher** exists. The lifecycle is incomplete.
6. **Accelerator detail is thin.** Only one searcher names their accelerator.
7. **"Business Services" and "Technology" are over-represented** as sector targets.

### Priority Fix List

| Priority | Action | Profiles Affected |
|----------|--------|-------------------|
| **P0** | Expand 9 stub searcher bios to 100-150 words with career background, thesis rationale, and personal detail | R4, R5, R7, R8, R10, R11, R12, R13, R15 |
| **P1** | Expand all 10 investor theses to 60-150 words with backstory and investment philosophy | I1-I10 |
| **P2** | Expand all 5 seller bios to 50-120 words with company context and succession story | S1-S5 |
| **P3** | Add diverse professional backgrounds to the 9 stub searchers (e.g., Big 4, military, founder, corporate strategy, engineering, legal) | R4, R5, R7, R8, R10, R11, R12, R13, R15 |
| **P4** | Convert one searcher (e.g., R15 Emma Wilson) to EXITED status, or add detail about a successful exit to her bio | R15 |
| **P5** | Name the accelerator for R11 (Pierre Lefevre) or change his type | R11 |

### Final Count

| Grade | Count | Profiles |
|-------|-------|----------|
| **A** (keep as-is) | 6 | R1, R2, R3, R6, R9, R14 |
| **B** (needs enrichment) | 15 | S1-S5, I1-I10 |
| **C** (too generic / stub) | 9 | R4, R5, R7, R8, R10, R11, R12, R13, R15 |
