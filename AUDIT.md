# SearchFundMarket — Codebase Audit (Read-Only)

> Generated: 2026-04-17
> Scope: Full technical audit for SEO & content strategy planning

---

## 1. Stack technique exacte

| Layer | Technology | Version |
|---|---|---|
| Framework | **Next.js** (App Router) | 16.2.2 |
| React | React + React DOM | 19.2.4 |
| Auth | NextAuth (JWT strategy, Email magic link) | 4.24.13 |
| ORM / DB | Prisma + PostgreSQL | Prisma 7.6.0 |
| Styling | Tailwind CSS v4 (`@theme inline` in `globals.css`) | ^4 |
| Animation | Framer Motion | 12.38.0 |
| Icons | Lucide React | 1.7.0 |
| Email | Resend + Nodemailer | 6.10.0 / 7.0.13 |
| Validation | Zod | 4.3.6 |
| File storage | Vercel Blob | 2.3.3 |
| Analytics | Google Analytics (custom component) | — |
| Deployment | Vercel (implied by Vercel Blob + Next.js) | — |

**Router**: App Router (100%). No Pages Router files exist.

**CMS**: None. Articles are pure TSX React components. No headless CMS (Contentful, Sanity, Strapi, etc.).

**`next.config.ts`**: Empty — no custom config (no rewrites, redirects, i18n, images config, etc.).

---

## 2. Arborescence complète des routes (38 routes)

### Marketing (5 pages)
| Route | Type | Metadata |
|---|---|---|
| `/` | Static (force-dynamic) | ✅ Static export |
| `/(marketing)/about` | Static | ✅ Static export |
| `/(marketing)/contact` | Static | ✅ Static export |
| `/(marketing)/privacy` | Static | ✅ Static export |
| `/(marketing)/terms` | Static | ✅ Static export |

### Auth (4 pages)
| Route | Type | Metadata |
|---|---|---|
| `/auth/signin` | Static | ✅ |
| `/auth/signup` | Static | ✅ |
| `/auth/verify-request` | Static | — |
| `/auth/onboarding` | Static (client) | — |

### Dashboard (10 pages — behind auth, disallowed in robots.txt)
| Route | Type |
|---|---|
| `/dashboard` | Dynamic |
| `/dashboard/messages` | Dynamic |
| `/dashboard/messages/[conversationId]` | Dynamic |
| `/dashboard/notifications` | Dynamic |
| `/dashboard/connections` | Dynamic |
| `/dashboard/documents` | Dynamic |
| `/dashboard/settings` | Dynamic |
| `/dashboard/settings/profile` | Dynamic |
| `/dashboard/saved` | Dynamic |
| `/dashboard/my-listings` | Dynamic |
| `/dashboard/my-listings/[id]/edit` | Dynamic |

### Listings (3 pages)
| Route | Type | Metadata |
|---|---|---|
| `/listings` | Dynamic (force-dynamic) | ✅ Static export |
| `/listings/new` | Static (behind auth) | — |
| `/listings/[slug]` | Dynamic (force-dynamic) | ✅ `generateMetadata()` |

### Directory (6 pages)
| Route | Type | Metadata |
|---|---|---|
| `/searchers` | Dynamic | ✅ |
| `/searchers/[slug]` | Dynamic (force-dynamic) | ✅ `generateMetadata()` |
| `/investors` | Dynamic | ✅ |
| `/investors/[slug]` | Dynamic (force-dynamic) | ✅ `generateMetadata()` |
| `/sellers/[slug]` | Dynamic (force-dynamic) | ✅ `generateMetadata()` |

### Community (4 pages)
| Route | Type | Metadata |
|---|---|---|
| `/community` | Dynamic | ✅ |
| `/community/new` | Static (behind auth) | — |
| `/community/[categorySlug]` | Dynamic | ✅ `generateMetadata()` |
| `/community/[categorySlug]/[postSlug]` | Dynamic (force-dynamic) | ✅ `generateMetadata()` |

### Learn (4 route patterns → 62+ actual pages)
| Route | Type | Metadata |
|---|---|---|
| `/learn` | Static (SSG) | ✅ Static export |
| `/learn/[articleSlug]` | Static (SSG via `generateStaticParams`) | ✅ `generateMetadata()` |
| `/learn/category/[categorySlug]` | Static | ✅ `generateMetadata()` |
| `/learn/glossary` | Static | ✅ |

### Admin (2 pages — disallowed in robots.txt)
| Route | Type |
|---|---|
| `/admin` | Dynamic |
| `/admin/login` | Static |

---

## 3. Où et comment sont stockées les données

### 3a. Articles /learn — 62 articles

**Storage**: Pure **TSX React components** in `src/app/learn/_articles/*.tsx`

- Each article is a standalone React component (e.g., `getting-started.tsx`, `eta-france.tsx`)
- Metadata is defined in `src/app/learn/_articles/article-registry.ts` as a TypeScript array (`allArticles: ArticleMeta[]`)
- Article metadata includes: `slug`, `title`, `description`, `readTime`, `tag`, `category`, `ogTitle`, `ogDescription`
- **NO MDX, NO Markdown, NO CMS, NO database** — all content is hardcoded in TSX
- Articles are rendered via `articleComponents` map in the registry
- SSG: `generateStaticParams()` pre-renders all 62 articles at build time
- **11 categories** with their own metadata in `categoryMeta[]`
- **4 reading paths** (curated article sequences)
- **Glossary** data in `glossary-data.ts`

**What's missing from articles:**
- ❌ No `author` field (no named author, no bio, no photo)
- ❌ No `datePublished` / `dateModified` field
- ❌ No source citations tracked in metadata
- ❌ No word count tracked

### 3b. Listings — 25 in seed data (22 ACTIVE, 2 UNDER_LOI, 1 SOLD)

**Storage**: **PostgreSQL** via Prisma ORM

- Model: `Listing` in `prisma/schema.prisma`
- Fields: title, slug, sector, subSector, country, region, currency, revenue, ebitda, ebitdaMargin, askingPrice, askingMultiple, employeeCount, yearFounded, summary, description, highlights[], reasonForSale, sellerFinancing, timeline, status, imageUrl, metaDescription
- Seed data: `prisma/seed.ts`

### 3c. Profiles /searchers, /investors, /sellers

**Storage**: **PostgreSQL** via Prisma ORM

- `SearcherProfile`: searchType, searchStatus, mbaSchool, targetSectors[], targetCountries[], EBITDA range, revenue range, slug, headline, isPublic, documents[]
- `InvestorProfile`: investorType, firmName, firmWebsite, ticketSize range, targetSectors[], slug, headline, investmentThesis, isPublic
- `SellerProfile`: companyRole, slug, headline, isPublic
- All linked to `User` model (1:1 relation)
- 30 seed users total

---

## 4. Système d'internationalisation

### Status: ❌ AUCUN

- **No i18n library** installed (no `next-intl`, no `next-i18next`, no `react-intl`)
- **No i18n config** in `next.config.ts`
- **`lang="en"` hardcoded** in `src/app/layout.tsx` (`<html lang="en">`)
- **No locale routing** — no `[locale]` folder structure
- **No hreflang tags**
- **No language switcher component**
- **All content is in English only**
- The Prisma `User` model has a `languages: String[]` field (for user profile), but this is unrelated to site i18n

---

## 5. État actuel des metadata SEO

### 5a. sitemap.xml ✅

**File**: `src/app/sitemap.ts` (dynamic, server-side)

Includes:
- 12 static pages (home, listings, searchers, investors, community, learn, about, contact, privacy, terms, signin, signup)
- All active listings (from DB)
- All public profiles: searchers, investors, sellers (from DB)
- All 62 articles
- All 11 category pages
- Glossary page

**Issues:**
- ⚠️ No `lastModified` on article pages (articles have no date field)
- ⚠️ Community pages (forum posts) are NOT in the sitemap
- ⚠️ `/sellers` directory page is NOT in the sitemap (only individual `/sellers/[slug]` are)

### 5b. robots.txt ✅

**File**: `src/app/robots.ts`

```
User-Agent: *
Allow: /
Disallow: /api/
Disallow: /dashboard/
Disallow: /auth/onboarding
Disallow: /admin/
Sitemap: https://www.searchfundmarket.com/sitemap.xml
```

✅ Correct — blocks private pages, allows public content.

### 5c. JSON-LD ❌

**No JSON-LD structured data anywhere in the codebase.** Zero `application/ld+json` scripts.

Missing schema.org types:
- ❌ `Organization` (for the site)
- ❌ `WebSite` (with search action)
- ❌ `Article` / `BlogPosting` (for /learn articles)
- ❌ `Product` / `Offer` (for listings)
- ❌ `Person` / `ProfilePage` (for profiles)
- ❌ `BreadcrumbList` (breadcrumbs exist visually but not in structured data)
- ❌ `FAQPage` (if applicable)
- ❌ `ItemList` (for listing/article directories)

### 5d. Open Graph ✅ (partial)

- **Root layout**: Sets `metadataBase`, `openGraph.type: "website"`, `openGraph.siteName`
- **Most public pages** have OG title + description via `metadata` or `generateMetadata()`
- ❌ No `og:image` set on any page (no social preview images)
- ❌ No Twitter card metadata (`twitter:card`, `twitter:image`)

### 5e. Canonical URLs ✅ (partial)

- Root layout sets `alternates.canonical: "./"` — this generates canonical URLs for most pages
- ✅ `metadataBase` is set to `https://www.searchfundmarket.com`
- ⚠️ No explicit canonical on dynamic pages — relies on Next.js automatic canonicalization

### 5f. hreflang ❌

Not applicable — no i18n exists.

---

## 6. Balises `<title>` et `<meta description>` — 5 pages représentatives

### Page 1: `/` (Homepage)
```
<title>Search Fund Marketplace — Buy & Sell SMEs in Europe</title>
<meta name="description" content="Browse acquisition opportunities, connect with search fund investors, and list your business. The ETA marketplace for searchers, investors, and sellers.">
```
- ✅ Title: 55 chars, keyword-rich
- ✅ Description: 157 chars, good CTA
- ⚠️ Hardcoded "247 listings", "18 countries", "€2.1B total deal value" in page body — potentially misleading if stats are stale

### Page 2: `/learn` (Learning Hub)
```
<title>Learn About ETA — Guides & Resources for Search Funds</title>
<meta name="description" content="62 guides on Entrepreneurship Through Acquisition: search fund models, returns data, due diligence, regional guides, industry playbooks, and glossary. Start learning.">
```
- ✅ Title: 55 chars, good
- ✅ Description: 166 chars (slightly long), informative

### Page 3: `/learn/getting-started` (Article)
```
<title>What is a Search Fund? The Complete Guide to Entrepreneurship Through Acquisition</title>
<meta name="description" content="From fundraising to exit — understand how search funds work, key statistics, and why ETA is one of the best paths to becoming a CEO.">
```
- ⚠️ Title: 83 chars — too long, will be truncated by Google (max ~60)
- ✅ Description: 131 chars, good

### Page 4: `/listings` (Listings Directory)
```
<title>Businesses for Sale in Europe — Search Fund Opportunities</title>
<meta name="description" content="Browse SMEs for sale across Europe. Filter by sector, country, EBITDA, and revenue to find your next search fund acquisition. New listings added weekly.">
```
- ✅ Title: 56 chars, perfect
- ✅ Description: 152 chars, good CTA

### Page 5: `/listings/[slug]` (Dynamic Listing)
```
<title>{listing.title} — Business for Sale | SearchFundMarket</title>
<meta name="description" content="{listing.metaDescription || listing.summary || fallback}">
```
- ⚠️ Title length depends on listing title — could exceed 60 chars
- ⚠️ Description falls back to `summary` which is a free-text field — could be too long or too short

---

## 7. Fichiers de config

### next.config.ts
```ts
import type { NextConfig } from "next";
const nextConfig: NextConfig = {
  /* config options here */
};
export default nextConfig;
```
**Empty config** — no image domains, no rewrites, no redirects, no i18n, no headers.

### package.json
- **62 articles** rendered as TSX components (no build step for MDX/markdown)
- **No i18n packages**
- **No SEO-specific packages** (no `next-seo`, no `next-sitemap`)
- **Key dependencies**: next 16.2.2, react 19.2.4, prisma 7.6.0, next-auth 4.24.13, tailwindcss 4, framer-motion 12, zod 4

### Tailwind (globals.css @theme inline)
- Custom color palette: `apple-*` (black, gray-100→900, accent, success, warning, error, searcher, investor, seller)
- Custom font stack: SF Pro Display / Helvetica Neue / system
- No `tailwind.config.ts` — Tailwind v4 uses CSS-only config

---

## 8. Provider de données

| Data | Source | Notes |
|---|---|---|
| Users & profiles | PostgreSQL (Prisma) | 30 seed users |
| Listings | PostgreSQL (Prisma) | 25 seed listings |
| Messages & connections | PostgreSQL (Prisma) | — |
| Forum posts & comments | PostgreSQL (Prisma) | — |
| Notifications | PostgreSQL (Prisma) | — |
| Learn articles | TSX files (filesystem) | 62 articles in `_articles/` |
| Glossary | TS file (filesystem) | `glossary-data.ts` |
| File uploads | Vercel Blob | Searcher documents |
| Auth sessions | JWT (NextAuth) | Email magic link provider |

---

## Résumé des gaps SEO critiques

| Priority | Gap | Impact |
|---|---|---|
| 🔴 CRITICAL | No JSON-LD structured data | No rich snippets in Google (articles, FAQ, breadcrumbs, org) |
| 🔴 CRITICAL | No i18n / multilingual support | Missing 4 target languages (FR, ES, IT, PT) |
| 🔴 CRITICAL | No author attribution on articles | E-E-A-T signal missing (Google quality factor) |
| 🔴 CRITICAL | No datePublished/dateModified on articles | Freshness signal missing |
| 🟠 HIGH | No og:image / twitter:card images | Poor social sharing appearance |
| 🟠 HIGH | Some titles > 60 chars (article ogTitles) | Truncated in search results |
| 🟠 HIGH | Hardcoded vanity metrics on homepage | "247 listings" but only 25 real ones |
| 🟡 MEDIUM | No community/forum pages in sitemap | Forum content not discoverable |
| 🟡 MEDIUM | No /sellers directory page in sitemap | Missing sitemap entry |
| 🟡 MEDIUM | Articles stored as TSX (no CMS) | Harder to add translations, metadata |
| 🟢 LOW | next.config.ts is empty | Missing image optimization config, security headers |
