# SearchFundMarket — Master Plan to Become THE ETA Reference

## Vision
Become the most complete and authoritative knowledge platform on Entrepreneurship Through Acquisition and search funds on the internet. Cover every possible topic a searcher, investor, or seller might query on Google. Available in 5 languages with true local adaptation. Generate original data and tools that competitors will cite.

## Current state (April 2026)
- 62 EN articles, 11 categories, glossary, editorial team, JSON-LD, hreflang, sitemap
- 5-locale infrastructure (EN indexable, FR/ES/IT/PT noindex until content produced)
- 2 real profiles (Mottalib Motta, Unnat Jain) + samples clearly marked
- No original research yet, no calculators, no directories, no news section
- Not yet submitted to Google Search Console

## Target state (12 months)
- 300-400 EN articles covering every ETA subtopic with authority
- 150-200 FR localized articles, 100-150 ES, 80-100 IT, 60-80 PT
- 5-10 original research reports
- 5-8 interactive calculators
- 500+ factual directory entries
- Monthly news section
- Top 3 Google ranking on primary ETA keywords in EN and FR

## Non-negotiable quality rules (Google YMYL / Helpful Content)
1. Every article ≥ 1500 words, pillar articles 3000-5000
2. Editorial attribution on every page
3. ≥3 academic sources cited per article (Stanford GSB, INSEAD, IESE, HBS, Yale SOM, etc.)
4. datePublished + dateModified, reviewed every 6 months
5. Zero raw AI content. AI-assisted OK, human review mandatory.
6. Multilingual = true localization, never raw translation
7. Every page answers a specific Google query better than current top 10
8. Financial disclaimers everywhere relevant
9. No fake anything (stats, profiles, testimonials)

───────────────────────────────────────
PHASE 1 — FINALIZE FOUNDATIONS (1-2 weeks of work)
───────────────────────────────────────

Goal: close all remaining gaps from the current build so Google submission is safe.

STEP 1.1 — Profiles cleanup (from previous plan, condensed):
- 2 real profiles (Mottalib Motta, Unnat Jain): request data from user, build VIP profile pages with full Person JSON-LD
- Grade A sample profiles (6): add "Sample profile" badge, remove Person schema, keep in sitemap
- Grade B sample profiles (15 sellers + investors): same treatment with factual templated bios (no invented backgrounds)
- Grade C profiles (9 weak): isPublic=false, removed from sitemap, 410 on slug URLs
- Sort /searchers and /investors: real profiles first
- Update banner to be honest about mix of real + sample
Produce PROFILES_CLEANUP.md with final state.

STEP 1.2 — Technical validation report:
Produce VALIDATION_REPORT.md with:
- Build status (npm run build, errors, warnings)
- Broken links scan
- Hreflang reciprocity check
- JSON-LD validation on 10 representative pages
- Meta tags completeness across all indexable pages
- Duplicate title/description detection
- Image alt attributes check
- H1/H2 hierarchy check
- Noindex check (dashboard/admin/auth blocked, public pages indexable)
- Article quality spot-check on 5 articles expanded by parallel agents (detect AI slop)
- Core Web Vitals lighthouse scores on 5 representative pages
- Sitemap integrity (all URLs return 200, no 404s)
- Multilingual status (confirm FR/ES/IT/PT are noindex)

Two sections: BLOCKERS and NICE-TO-HAVE.

STEP 1.3 — Google Search Console + Bing setup:
- Add meta verification placeholders in layout
- Produce LAUNCH_CHECKLIST.md with exact manual steps for user
- Prepare sitemap submission
- List 10 priority pages for indexing request
- Do NOT submit anything automatically — user submits manually

Phase 1 acceptance criteria:
□ PROFILES_CLEANUP.md complete
□ VALIDATION_REPORT.md with zero BLOCKERS
□ LAUNCH_CHECKLIST.md complete
□ Site submitted to GSC by user
□ First 10 priority pages submitted for indexing

───────────────────────────────────────
PHASE 2 — CONTENT GAP ANALYSIS AND MASTER CONTENT PLAN (2-4 days)
───────────────────────────────────────

Goal: know exactly every page we need to produce for the next 12 months.

STEP 2.1 — Keyword research and topic mapping:
For each of these 8 sub-domains of ETA, identify ALL topics/queries a user might search:
1. "What is" and fundamentals (search fund basics, types, history, stats)
2. Search phase (sourcing, valuation, LOI, DD, negotiation)
3. Financing (equity, debt, seller note, mezzanine, earnout, rollover, government programs by country)
4. Legal & Tax (entity structures, SPA, APA, tax optimization, cross-border)
5. Operations post-acquisition (100 days, team, culture, growth, exit)
6. Regional (15+ European countries, each with multiple angles)
7. Industry-specific playbooks (SaaS, healthcare, manufacturing, services, food, logistics, energy, retail, etc.)
8. Comparisons (vs PE, vs VC, vs starting a startup, vs franchise, etc.)

For each topic:
- Primary keyword (EN)
- Secondary keywords
- Estimated search intent (informational, commercial, transactional)
- Target article length
- Target audience (searcher, investor, seller, broker)
- Priority (P1 high-volume, P2 medium, P3 long-tail)
- Existing article slug if already present, else "TO CREATE"

Use web search tools to validate keywords are actually searched (check with Google autocomplete, People Also Ask sections, competing URLs ranking in top 10).

STEP 2.2 — Produce MASTER_CONTENT_PLAN.md:
A single document listing every article to create, organized by pillar, with:
- Pillar (1-6)
- URL slug
- Title
- Primary keyword
- Priority
- Word count target
- Outline (5-8 H2 sections)
- Sources to cite
- Internal links to add
- Status: EXISTING_OK / EXISTING_ENRICH / TO_CREATE

Expected output: ~300-400 EN articles fully specified.

STEP 2.3 — Produce LOCALIZATION_PLAN.md:
For each of the ~200 top EN articles, specify:
- Which locales prioritize (FR always, ES always, IT for pillar only, PT for pillar only)
- Local keyword mapping per language
- Local regulations/sources to substitute
- Local examples to substitute
- Estimated timeline per locale

STEP 2.4 — Produce DIRECTORIES_PLAN.md:
Detailed plan for factual directories:
- Investors directory: 200+ ETA-active investors in Europe with structured data (name, website, thesis, ticket size, geo, sectors, contact)
- MBA programs directory: 50+ schools teaching ETA (IESE, INSEAD, HEC, LBS, Harvard, Stanford, Chicago Booth, Wharton, Kellogg, Darden, etc.)
- Brokers directory: specialized M&A brokers by country
- Conferences: ETA conferences worldwide
- Podcasts: English, French, Spanish ETA podcasts
- Books: curated reading list with descriptions
- Legal/tax advisors: specialized firms by country
- Each directory item = indexable page with schema.org structured data

STEP 2.5 — Produce TOOLS_PLAN.md:
Detailed spec for 5-8 interactive tools:
1. EBITDA multiple estimator (by sector × country)
2. Search capital calculator (how much to raise)
3. Cap table simulator (traditional search fund economics)
4. LBO simulator (debt + equity + seller note)
5. Valuation calculator (DCF + multiples)
6. Acquisition readiness quiz
7. Geography selector (best country to search based on profile)
8. Deal structuring advisor

Each tool = standalone page with educational content + interactive widget + CTA to related articles.

STEP 2.6 — Produce RESEARCH_PLAN.md:
Original research initiatives to launch over 12 months:
1. "State of European ETA 2026" annual report (survey-based)
2. Search fund valuation benchmarks by sector (data compilation)
3. European search fund tracker (quarterly updates)
4. Salary benchmarks for searcher-CEOs
5. Best performing search funds case studies

These pieces are BACKLINK MAGNETS — they get cited by academics, journalists, bloggers.

Phase 2 acceptance criteria:
□ MASTER_CONTENT_PLAN.md with ~350 EN articles specified
□ LOCALIZATION_PLAN.md with priority matrix
□ DIRECTORIES_PLAN.md with entries sourced
□ TOOLS_PLAN.md with specs
□ RESEARCH_PLAN.md with timeline
□ User reviews and prioritizes before Phase 3 starts

───────────────────────────────────────
PHASE 3 — BULK CONTENT PRODUCTION EN (3-6 months, continuous)
───────────────────────────────────────

Goal: go from 62 to 300-400 EN articles of quality.

STEP 3.1 — Enrich existing 62 articles to pillar quality:
For each article, apply upgrade if needed:
- Extend to 2500+ words if currently shorter
- Add ≥3 academic sources via existing sources library
- Add 5-8 internal links to other articles
- Add "Related reading" section
- Add FAQ section (3-5 Q&A for FAQPage schema)
- Add datePublished/dateModified if missing
Run in batches of 10. User reviews each batch before next.

STEP 3.2 — Produce new Pillar 1 articles (Encyclopedia ETA):
~80 new articles covering every subtopic missed.
Batches of 5 articles at a time.
For each article:
- Follow spec from MASTER_CONTENT_PLAN.md
- Draft with web research (fetch relevant academic/industry sources)
- Cite sources properly
- Add JSON-LD Article schema
- Add 5+ internal links to existing content
- Add meta snippet (title 50-60, description 140-160)
- Add to sitemap
- Mark datePublished = current date
User reviews each batch. No bulk commits without review.

STEP 3.3 — Produce new Pillar 2 articles (Regional coverage):
~100 articles covering 15+ European countries × 5-7 angles each (financing, tax/legal, brokers, deals, ecosystem, regulation, culture).
Same rigor as 3.2.

STEP 3.4 — Pillar 5 directories:
Produce 500+ directory entries across:
- /directory/investors/[slug]
- /directory/mba-programs/[slug]
- /directory/brokers/[slug]
- /directory/conferences/[slug]
- /directory/podcasts/[slug]
- /directory/books/[slug]
Each entry: factual data (sourced publicly), schema.org markup (Organization, EducationalOrganization, etc.), outbound links.

STEP 3.5 — Pillar 6 news section:
- Create /news hub with CollectionPage schema
- Add news ingestion workflow (manual for now): when user sees a relevant ETA news, adds it via admin or markdown file
- Target 2-5 news articles per month
- Each news article: 600-1200 words, signed by editorial team, sources linked

Phase 3 acceptance criteria per batch:
□ All new articles pass quality rules
□ No AI-slop detected
□ All properly linked internally
□ Sitemap updated
□ User reviews sample before merge

───────────────────────────────────────
PHASE 4 — TOOLS AND ORIGINAL RESEARCH (parallel to Phase 3, months 2-6)
───────────────────────────────────────

Goal: create the linkable assets that drive domain authority.

STEP 4.1 — Build 5 calculators:
Priority order:
1. EBITDA multiple estimator (month 2-3)
2. Search capital calculator (month 3)
3. Cap table simulator (month 4)
4. LBO simulator (month 5)
5. Valuation calculator (month 6)

Each tool:
- Standalone page /tools/[slug]
- Educational intro (600-800 words of content for SEO)
- Interactive widget (React + proper state)
- Explanatory footer: "How this tool works", sources, disclaimers
- "Share this tool" button (OG image optimized)
- JSON-LD WebApplication schema
- Backlink to related articles

STEP 4.2 — Original research piece #1:
"The State of European ETA 2026"
- Survey European searchers and investors (use existing contacts, Searchfunder, LinkedIn)
- Compile data: fundraising trends, acquisition volumes, sector distribution, geography, returns
- Publish as long-form report with charts
- Offer downloadable PDF (gated by email optional)
- Promote via LinkedIn, Searchfunder, email to ecosystem contacts
- Monitor backlinks acquired

STEP 4.3 — Benchmarks pages:
- /benchmarks/valuations (by sector × country)
- /benchmarks/salaries (searcher-CEO compensation)
- /benchmarks/returns (IRR/MOIC by vintage)
Each page: data tables, methodology explainer, sources, interactive filters.

Phase 4 acceptance criteria:
□ 5 calculators live and functional
□ First original research published and promoted
□ At least 10 quality backlinks acquired from research

───────────────────────────────────────
PHASE 5 — LOCALIZATION ROLLOUT (months 3-12)
───────────────────────────────────────

Goal: bring FR to indexable status, then ES, then IT, then PT.

STEP 5.1 — French localization (priority market):
- Produce 20 pillar articles localized to FR with true adaptation:
  - French keywords researched (BPI France, rachat PME, transmission entreprise, LBO, etc.)
  - French sources cited (HEC, CNCEF, BPI France, ordre des experts-comptables)
  - French regulatory context (Dutreil, SAS/SARL, crédit vendeur français, etc.)
  - French examples (not translated US examples)
- Once 20 FR articles live and reviewed, add 'fr' to INDEXABLE_LOCALES
- Submit French sitemap to GSC
- Continue to 50 FR articles, then 100, then 150
- FR news section with local ETA news

STEP 5.2 — Spanish localization:
Same process. IESE-heavy sourcing makes ES strong on academic sources. Prioritize after FR has 50+ articles. Target 100+ ES articles by month 9.

STEP 5.3 — Italian and Portuguese:
Lower priority. 60-80 pillar articles each. Launch when FR/ES are solid.

Phase 5 acceptance criteria per language:
□ 20+ localized pillar articles published
□ Technical validation (hreflang, localized JSON-LD, localized meta snippets)
□ Language switched to INDEXABLE in registry
□ Sitemap includes localized URLs
□ User validates cultural/linguistic quality

───────────────────────────────────────
PHASE 6 — ONGOING AUTHORITY BUILDING (continuous from month 2)
───────────────────────────────────────

Parallel to content production. These are manual actions user does monthly, Claude Code helps prepare materials.

Monthly rhythm:
- 1 guest post pitched to industry site (Moonbase, Istria, Search Funds News, etc.)
- 2 LinkedIn posts from founder profile linking to best articles
- 1 contribution to Searchfunder community
- Outreach to 5 ETA newsletters/podcasts for mentions
- Monitor backlinks acquired via Ahrefs free version or similar

Claude Code's role:
- Prepare guest post drafts on demand
- Produce LinkedIn post templates
- Suggest 3 best articles to promote this month based on freshness and potential
- Draft outreach emails

───────────────────────────────────────
PHASE 7 — CONTINUOUS OPTIMIZATION (from month 3 onwards)
───────────────────────────────────────

Goal: articles that rank but don't rank high enough → push to top 3.

Monthly ritual:
1. Export GSC data for last 30 days
2. Identify pages with impressions but CTR < 2% → rewrite title/description
3. Identify pages ranking 11-30 → enrich content, add more sources, acquire backlinks
4. Identify high-CTR pages → find related queries and create new articles
5. Detect any pages that lost ranking → investigate and refresh
6. Check Core Web Vitals, fix any regressions
7. Check crawl errors in GSC

Claude Code produces monthly GSC_REPORT.md summarizing findings and actions to take.

───────────────────────────────────────
EXECUTION RULES
───────────────────────────────────────

1. Work phase by phase, never skip ahead.
2. Between phases, user reviews and validates.
3. Within a phase, batch work (5-10 articles at a time), user reviews each batch.
4. Never auto-commit to main. Always work on feature branches.
5. Quality > speed. Better 200 excellent articles than 400 mediocre.
6. Never invent sources, statistics, profiles, or data.
7. Always cite academic institutions when making claims about IRR/MOIC/market size.
8. Localization ≠ translation. Always adapt to local market.
9. Internal linking is systematic — every new article links to 5+ existing ones, and gets linked to by next articles on related topics.
10. The master plan is reviewed quarterly and updated based on what's ranking and what's not.

Acknowledge this plan before starting each phase.