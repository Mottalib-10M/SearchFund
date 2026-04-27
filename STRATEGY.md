# SearchFundMarket — SEO & Content Strategy

## Positioning
"The most complete learning platform for Entrepreneurship Through Acquisition (ETA). Step-by-step guides, tools, and resources for searchers, investors, and sellers."
Primary role: educational authority on search funds, ETA, SME acquisition.
Secondary role (future): marketplace — currently "opening soon".

## Target languages (5)
- English (en) — default
- French (fr)
- Spanish (es)
- Italian (it)
- Portuguese (pt)

URL scheme: /{lang}/path (en is default at root OR at /en/ — choose what's cleanest for Next.js App Router).

## Content quality rules (NON-NEGOTIABLE — Google will penalize otherwise)
1. Every article ≥ 1500 words, ideally 2500-4000 for pillar topics.
2. Every article has a named human author with bio and LinkedIn.
3. Every article has datePublished + dateModified visible and in JSON-LD.
4. Every article cites ≥3 authoritative sources (Stanford GSB, IESE, Yale, HBR, Ibers of commerce, etc.).
5. Zero raw AI-translated content. Multilingual versions are LOCALIZED (local examples, local regulations, local numbers), not translated.
6. No keyword stuffing. Natural writing.
7. Every page must answer a specific Google query better than current top 10 results.
8. All financial/legal disclaimers present.

## Listings status
/listings → "Marketplace opening soon" page with email waitlist. No fake listings indexed.

## Searcher/Investor profiles
Kept visible IF they meet variance requirements (see step 4). Otherwise marked "Sample profile" or removed.

## Snippet strategy (per page, per language)
- <title>: 50-60 chars, primary keyword first, emotional/benefit hook
- <meta description>: 140-160 chars, primary keyword once, clear value proposition, soft CTA
- Both unique across the whole site

## Anti-penalty guardrails
- No duplicate content across languages (proper localization + hreflang)
- No thin content pages indexed (min 600 words, min 1500 for articles)
- No fake stats, fe testimonials, fake dates, fake author credentials
- Clean internal linking, no PBN-style link patterns
- Responsive, fast Core Web Vitals
- Proper schema.org JSON-LD everywhere
