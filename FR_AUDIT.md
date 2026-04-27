# French Article Localization Audit

**Date:** 2025-04-25
**Scope:** All 50 French (FR) articles in the SearchFund project
**Registry:** `src/app/[locale]/learn/_articles/fr-registry.ts`
**Article directory:** `src/app/[locale]/learn/_articles/fr/`

---

## Methodology

Each of the 50 FR article component files was audited for:

1. **French-specific localization markers** (presence = PASS signal):
   - French institutions: Bpifrance, CRA, AMF, URSSAF, France Invest, Banque de France, CCI, CNCC
   - French legal forms: SAS, SARL, EURL
   - French legal references: Code de Commerce, Code civil, Code du travail, CSE, convention collective, droit du travail
   - French schools: HEC Paris, ESSEC, INSEAD
   - French tax/fiscal: Dutreil, apport-cession, 150-0 B ter
   - French currency: EUR/euros
   - French professionals: expert-comptable, notaire, commissaire aux comptes
   - French geographic/cultural: "en France", "la France", "francais/francaise", French cities

2. **US-only markers** (presence in non-US articles = FAIL signal):
   - SBA, IRS, USD, LLC, C-Corp, Internal Revenue, 401(k), S-Corp

3. **Content review** of low-scoring articles to verify genuine localization vs. mere translation.

---

## Results Summary

| Metric | Count |
|--------|-------|
| **Total articles audited** | 50 |
| **LOC-PASS (genuine French/European localization)** | 50 |
| **LOC-FAIL (translated US content)** | 0 |

---

## Detailed Results: All 50 Articles PASS

### Phase 1 Articles (20 articles) -- All PASS

| # | Slug | FR Markers | US Markers | Verdict |
|---|------|-----------|-----------|---------|
| 1 | `getting-started` | 44 | 0 | PASS -- References HEC, INSEAD, Bpifrance, SAS, ETA in France |
| 2 | `self-funded-vs-traditional` | 47 | 0 | PASS -- Bpifrance pret transmission, French autofinance model |
| 3 | `eta-france` | 66 | 0 | PASS -- Deeply French: Bpifrance, CRA, Dutreil, CCI, HEC, SAS/SARL |
| 4 | `eta-europe` | 23 | 0 | PASS -- European focus with French comparisons throughout |
| 5 | `business-valuation` | 27 | 0 | PASS -- French EBITDA multiples, Ordre des Experts-Comptables |
| 6 | `acquisition-financing` | 29 | 0 | PASS -- Bpifrance Transmission, credit vendeur, French banks |
| 7 | `search-fund-legal-structure` | 36 | 1 | PASS -- SAS/SARL/holding in French law; LLC mention is comparative |
| 8 | `tax-optimization` | 24 | 0 | PASS -- Dutreil, apport-cession 150-0 B ter, holding IS |
| 9 | `writing-a-ppm` | 30 | 0 | PASS -- AMF regulation, French placement prive framework |
| 10 | `letter-of-intent` | 31 | 0 | PASS -- French contract law, Code civil art. 1112, exclusivite |
| 11 | `due-diligence-checklist` | 28 | 0 | PASS -- CNCC, baux commerciaux, CIR/CICE, RGPD, CSE |
| 12 | `deal-sourcing-strategies` | 43 | 0 | PASS -- CRA, Bpifrance Transmission, Fusacq, CCI/CMA |
| 13 | `first-100-days` | 29 | 0 | PASS -- CSE, conventions collectives, droit du travail |
| 14 | `finding-investors` | 38 | 0 | PASS -- France Invest, family offices, HEC/INSEAD networks |
| 15 | `why-invest-in-search-funds` | 19 | 0 | PASS -- French investor perspective, Bpifrance, European data |
| 16 | `cap-tables-equity` | 24 | 0 | PASS -- French SAS equity structures, vesting in French law |
| 17 | `stanford-2024-study` | 27 | 0 | PASS -- Analyzed through French/European lens, Bpifrance |
| 18 | `search-fund-returns` | 11 | 0 | PASS -- France Invest, IEIF, Bpifrance, French investor context |
| 19 | `seller-financing` | 20 | 0 | PASS -- Credit vendeur in French law, French fiscal treatment |
| 20 | `management-transition-plan` | 46 | 0 | PASS -- CSE, Code du travail, convention collective, French labor law |

### Phase 2 Articles (30 articles) -- All PASS

| # | Slug | FR Markers | US Markers | Verdict |
|---|------|-----------|-----------|---------|
| 21 | `working-with-advisors` | 50 | 0 | PASS -- Ordre des Experts-Comptables, Conseil National des Barreaux |
| 22 | `quality-of-earnings` | 26 | 0 | PASS -- Plan Comptable General, CNCC, CIR/CICE retraitements |
| 23 | `negotiation-tactics` | 23 | 0 | PASS -- French business culture, cedant relations, CCI |
| 24 | `earn-out-structures` | 17 | 0 | PASS -- Complement de prix in French law, fiscal qualification |
| 25 | `exit-strategies` | 20 | 0 | PASS -- France Invest, French plus-values fiscalite |
| 26 | `searcher-compensation` | 27 | 0 | PASS -- TNS vs assimile salarie, URSSAF, SAS/SARL social status |
| 27 | `board-governance` | 11 | 0 | PASS -- SA/SAS governance, IFA, French Code de Commerce |
| 28 | `buy-and-build` | 23 | 0 | PASS -- French market fragmentation, Bpifrance, CSE obligations |
| 29 | `investor-relations` | 13 | 0 | PASS -- French societe law, AG obligations, SAS reporting |
| 30 | `advisory-board` | 19 | 0 | PASS -- IFA, French legal framework, CCI network |
| 31 | `revenue-growth-playbook` | 21 | 0 | PASS -- Bpifrance Le Lab, France Num, CCI, French market |
| 32 | `digital-transformation` | 22 | 0 | PASS -- France Num, Bpifrance, cheques numeriques, RGPD |
| 33 | `working-capital-management` | 17 | 0 | PASS -- BFR, Banque de France, affacturage, Dailly, Bpifrance |
| 34 | `pre-search-preparation` | 28 | 0 | PASS -- HEC/INSEAD/ESSEC programs, French career transition |
| 35 | `searcher-psychology` | 8 | 0 | PASS -- French support resources, Bpifrance, HEC/INSEAD context |
| 36 | `searcher-tools` | 36 | 0 | PASS -- Pappers.fr, Societe.com, Fusacq, Bpifrance Transmission |
| 37 | `eta-vs-startups` | 18 | 0 | PASS -- Federation Francaise de la Franchise, French comparison |
| 38 | `women-in-eta` | 17 | 0 | PASS -- CRA, CCI, Reseau Entreprendre, French female searcher data |
| 39 | `eta-germany` | 6 | 0 | PASS -- German-focused (Mittelstand, KfW, GmbH) for French audience |
| 40 | `eta-uk` | 8 | 0 | PASS -- UK-focused (Ltd, British Business Bank) for French audience |
| 41 | `eta-spain` | 8 | 0 | PASS -- Spanish-focused (IESE, SL, ICO/ENISA) for French audience |
| 42 | `eta-switzerland` | 5 | 0 | PASS -- Swiss-focused (GmbH/AG, CHF, cantons) for French audience |
| 43 | `eta-benelux` | 9 | 0 | PASS -- Benelux-focused (BV/BVBA, Scipio, Vlerick) for French audience |
| 44 | `eta-nordics` | 4 | 0 | PASS -- Nordic-focused (AB/AS, SSE) for French audience |
| 45 | `eta-italy` | 13 | 0 | PASS -- Italian-focused (SRL/SPA, Bocconi, Confindustria) for French audience |
| 46 | `eta-us` | 14 | 22 | PASS -- US-focused article (SBA, LLC, C-Corp) with French comparisons |
| 47 | `european-search-fund-research` | 30 | 1 | PASS -- European academic synthesis; 1 SBA mention is comparative |
| 48 | `search-fund-success-stories` | 7 | 0 | PASS -- European success stories with French/INSEAD/HEC context |
| 49 | `eta-vs-private-equity` | 21 | 0 | PASS -- France Invest, French EV ranges, French market comparison |
| 50 | `eta-reading-list` | 30 | 0 | PASS -- Francophone resources, HEC/INSEAD, Bpifrance, Dutreil |

---

## Notes on Regional Guide Articles

Articles 39-46 cover non-French geographies (Germany, UK, Spain, Switzerland, Benelux, Nordics, Italy, US). These intentionally have lower French-marker counts because their subject matter is another country. However, they all PASS the localization audit because:

- They are written **for a French-speaking audience** (not translated from English)
- They include comparative references to France ("Pour un searcher francais...")
- They use French terminology and framing throughout
- The US article (`eta-us`) appropriately uses US-specific terms (SBA, LLC, C-Corp) since it is specifically about the US market, while providing French comparisons
- The `european-search-fund-research` article has 1 SBA mention in a comparative context ("aux Etats-Unis ou les prets SBA facilitent...")

---

## Conclusion

**All 50 French articles pass the localization audit.** None are mere translations of US-centric content. Every article demonstrates genuine French localization through:

1. **French institutional references** (Bpifrance, CRA, AMF, URSSAF, CCI, CNCC, France Invest)
2. **French legal framework** (SAS/SARL, Code de Commerce, Code du travail, CSE, Dutreil)
3. **French schools and networks** (HEC Paris, ESSEC, INSEAD)
4. **French financial context** (EUR currency, credit vendeur, BFR, affacturage)
5. **French cultural framing** (cedant relations, dialogue social, conventions collectives)

The content quality is high across all 50 articles, with no instances of US-only content inappropriately presented as French-relevant.
