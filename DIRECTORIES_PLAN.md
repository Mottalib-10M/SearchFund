# DIRECTORIES_PLAN.md — STEP 2.4 Factual Directory Strategy

**Date**: April 2026
**Target**: 500+ directory entries across 7 categories
**Timeline**: Phase 3.4 (months 4-8)

---

## Architecture

All directories live under `/en/directory/[category]/` with individual entries at `/en/directory/[category]/[slug]`.

### URL structure
```
/en/directory/investors/                    → CollectionPage (list all)
/en/directory/investors/[slug]              → Individual entry page
/en/directory/mba-programs/                 → CollectionPage
/en/directory/mba-programs/[slug]           → Individual entry
/en/directory/brokers/                      → CollectionPage
/en/directory/brokers/[slug]                → Individual entry
/en/directory/conferences/                  → CollectionPage
/en/directory/conferences/[slug]            → Individual entry
/en/directory/podcasts/                     → CollectionPage
/en/directory/podcasts/[slug]               → Individual entry
/en/directory/books/                        → CollectionPage
/en/directory/books/[slug]                  → Individual entry
/en/directory/advisors/                     → CollectionPage
/en/directory/advisors/[slug]               → Individual entry
```

### Technical implementation
- **Data source**: Static JSON or TypeScript data files (like article-registry.ts pattern)
- **No database**: Directory entries are static content, not user-generated
- **Schema.org**: Each entry type has appropriate structured data
- **Filtering**: Client-side filtering by country, type, sector
- **Search**: Text search across directory entries
- **Submissions**: "Suggest an addition" form (sends email, human review required)

---

## Directory #1 — ETA Investors

**URL**: `/en/directory/investors/`
**Target entries**: 200+
**Schema.org**: `Organization` or `Person` (for individuals)

### Data fields per entry

| Field | Type | Required |
|-------|------|----------|
| name | string | Yes |
| slug | string | Yes |
| type | enum | Yes (ex-searcher, family-office, institutional, angel, accelerator) |
| website | URL | If public |
| description | text (100-200 words) | Yes |
| geographyFocus | string[] | Yes (countries/regions) |
| sectorFocus | string[] | Optional |
| typicalTicketSize | string | If known ("€100K-500K", "$1-5M") |
| investmentThesis | text | Optional (50-100 words) |
| notableDeals | string[] | If public |
| linkedinUrl | URL | If public |
| yearFounded | number | If known |
| headquarters | string | Yes (city, country) |
| source | string | Yes (how we found this data) |

### Investor categories and known entries

#### Institutional Search Fund Investors (Europe)
| Name | HQ | Focus | Notes |
|------|-----|-------|-------|
| Search Fund Accelerator (SFA) | Boston/Europe | Global | First ETA accelerator, 88% acquisition rate |
| Relay Investments | US | Global | 100+ search fund investments |
| Trilogy Search Partners | US | Global | PE/accelerator hybrid |
| Broadtree Partners | US | US | Lower mid-market |
| NextGen Growth Partners | US | Global | Data-driven |
| Halstatt Legacy Partners | US | US | Long-term vision |
| Pathfinder Group | US (West Coast) | US | West Coast focus |
| Scipio Holding | Belgium | Europe | €25M fund with Swanlaab (2024) |
| Seqos Capital | London/Hamburg | DACH | Search fund platform |
| Tembo Search Partners | DACH | DACH | Succession planning |
| WAD Capital | Europe | Europe | ETA accelerator, €1-5M EBITDA |
| Novastone Capital Advisors | London | Europe | European search fund investor |
| Pacific Lake Partners | Global | Global | Search fund specialist |
| IESE Alumni Investors | Barcelona | Europe | Network of IESE ex-searcher investors |
| Mainshares | US | US | Self-funded search platform |
| Acquisition Lab | US | US | 200+ deals, $350M+ closed |
| Acquira | US | US | Accelerator model |

#### Family Offices Active in ETA (to research and verify)
- French family offices backing HEC/INSEAD searchers
- German Mittelstand-focused family offices
- Swiss family offices (Zurich, Geneva)
- UK family offices (London)
- Spanish family offices (IESE network)

#### Angel Investors / Ex-Searchers
- Need to compile from Searchfunder.com community, LinkedIn, conference attendee lists
- Target: 100+ individual investors with public ETA investing track record

### SEO targets
- "search fund investors" (primary)
- "ETA investors Europe"
- "search fund LP list"
- "who invests in search funds"

### Content per hub page
- 800-word introduction: "How to find and approach search fund investors"
- Filter by: type, geography, sector, ticket size
- Link to: finding-investors article, cap-tables-equity article

---

## Directory #2 — MBA Programs Teaching ETA

**URL**: `/en/directory/mba-programs/`
**Target entries**: 50+
**Schema.org**: `EducationalOrganization`

### Data fields per entry

| Field | Type | Required |
|-------|------|----------|
| schoolName | string | Yes |
| slug | string | Yes |
| programName | string | Yes (e.g. "ETA & Search Fund Course") |
| country | string | Yes |
| city | string | Yes |
| website | URL | Yes |
| programUrl | URL | If specific page exists |
| keyProfessors | string[] | If known |
| notableAlumni | string[] | If public |
| description | text (100-200 words) | Yes |
| ranking | string | Optional (FT, QS, etc.) |
| etaClub | boolean | Yes (does the school have an ETA/search fund club?) |
| yearETAStarted | number | If known |
| source | string | Yes |

### Known entries

#### US Schools
| School | Program/Course | Key Professors | Notes |
|--------|---------------|----------------|-------|
| Stanford GSB | Search Fund study, ETA elective | Prof. Peter Kelly | Birthplace of search fund model |
| Harvard Business School | ETA course, Search Fund Primer | Various | HBS Search Fund Primer widely cited |
| Chicago Booth | New Venture Challenge, ETA track | | Growing ETA community |
| Wharton (Penn) | ETA Lab, Venture Lab | | VentureLab ETA program |
| Kellogg (Northwestern) | Search fund elective | | |
| Darden (UVA) | ETA-focused courses | | |
| Yale SOM | "Exploring Search Fund Structures" case | | Published 2021 Yale case |
| Columbia Business School | ETA course | | |
| MIT Sloan | Acquisition entrepreneurship | | |
| Tuck (Dartmouth) | ETA elective | | |
| Babson | Entrepreneurship through acquisition | | Entrepreneurship focus |
| Ross (Michigan) | Search fund courses | | |
| McCombs (Texas) | ETA program | | |
| UCLA Anderson | ETA elective | | |
| Duke Fuqua | Search fund courses | | |

#### European Schools
| School | Country | Program/Course | Notes |
|--------|---------|---------------|-------|
| IESE Business School | Spain | Search Fund Center, annual conference | Leading European ETA school |
| INSEAD | France/Singapore | ETA research, alumni network | Major ETA research producer |
| HEC Paris | France | Entrepreneurship track | Strong French ETA network |
| London Business School | UK | ETA elective | Growing UK ETA ecosystem |
| Cambridge Judge | UK | Entrepreneurship program | |
| Oxford Saïd | UK | ETA courses | |
| WHU – Otto Beisheim | Germany | ETA focus, DACH network | |
| IE Business School | Spain | Entrepreneurship program | |
| ESADE | Spain | ETA community | Barcelona ETA ecosystem |
| Bocconi | Italy | Search Fund research | Italy-focused ETA research |
| St. Gallen (HSG) | Switzerland | Entrepreneurship | Swiss ETA hub |
| Rotterdam School (RSM) | Netherlands | ETA program | Benelux focus |
| Copenhagen Business School | Denmark | Nordic search fund ecosystem research | |
| Nova SBE | Portugal | Emerging ETA research | Portuguese/Brazilian network |
| SSE Stockholm | Sweden | | Nordic ETA |
| Mannheim Business School | Germany | | |
| HHL Leipzig | Germany | | |
| Vlerick Business School | Belgium | | Benelux focus |

### SEO targets
- "best MBA for search funds"
- "MBA programs entrepreneurship through acquisition"
- "search fund schools"

---

## Directory #3 — M&A Brokers Specialized in SME

**URL**: `/en/directory/brokers/`
**Target entries**: 100+
**Schema.org**: `Organization` with `LocalBusiness`

### Data fields per entry

| Field | Type | Required |
|-------|------|----------|
| name | string | Yes |
| slug | string | Yes |
| country | string | Yes |
| website | URL | Yes |
| description | text (100-150 words) | Yes |
| specialization | string[] | Yes (sector focus) |
| dealSizeRange | string | Yes ("€500K-5M", "$1-10M") |
| type | enum | Yes (marketplace, advisory, broker, consulting) |
| headquarters | string | Yes |
| source | string | Yes |

### Known entries by country

#### UK
- Businesses For Sale (businessesforsale.com) — Marketplace
- Daltons Business — Marketplace
- Christie & Co — Hospitality, healthcare, childcare specialist
- Hilton Smythe — SME broker
- Business Partnership — Mid-market
- Transworld Business Advisors UK — Franchise broker

#### France
- CRA (Cédants et Repreneurs d'Affaires) — Network of 130 M&A consultants
- Bpifrance Transmission — Government-backed platform
- In Extenso Finance — Advisory
- Fusacq.com — Marketplace
- Michel Simond — Franchise broker network
- BCGE (Bourse de Commerce et Gestion d'Entreprises)
- Intercessio — M&A advisory

#### Germany
- DUB.de (Deutsche Unternehmerbörse) — Largest German marketplace, 3500+ listings
- Nexxt-Change — Government-backed succession platform (IHK/HWK)
- Carl Finance — Digital M&A platform, 160 partner consultants
- KERN Unternehmensnachfolge — 28 locations, succession specialists
- BizTrade.de — Marketplace

#### Spain
- Beabloo/IMAP Spain — Advisory
- Webcapital — M&A marketplace
- Alantra — Mid-market advisory

#### Italy
- Borsino delle Imprese — Business marketplace
- KPMG Italy SME practice
- Deloitte Italy mid-market

#### Netherlands
- Brookz.nl — Dutch M&A marketplace
- Marktplaats Ondernemingen — Business marketplace
- MKB Adviseurs — SME advisory

#### Nordics
- Dealsuite — European deal matching (strong in Nordics)
- Virksomhedsbørsen (DK) — Danish marketplace

#### Switzerland
- companymarket.ch — Swiss M&A marketplace
- SIGEFI — Swiss M&A advisory

#### US (for reference)
- Axial — Mid-market deal platform
- BizBuySell — Largest US marketplace
- BusinessBroker.net — Broker directory
- Transworld Business Advisors — National franchise
- Viking Mergers & Acquisitions — Regional

#### Pan-European
- Dealsuite — European deal matching network
- Clearlyacquired — Online marketplace
- MergerMarket — Data and intelligence

### SEO targets
- "business brokers [country]"
- "how to find a business to buy in [country]"
- "M&A advisors SME Europe"
- "business for sale [country]"

---

## Directory #4 — ETA Conferences & Events

**URL**: `/en/directory/conferences/`
**Target entries**: 30+
**Schema.org**: `Event`

### Data fields per entry

| Field | Type | Required |
|-------|------|----------|
| name | string | Yes |
| slug | string | Yes |
| location | string | Yes |
| country | string | Yes |
| frequency | enum | Yes (annual, biannual, quarterly, one-time) |
| website | URL | Yes |
| description | text (100-150 words) | Yes |
| typicalDate | string | Yes ("March", "Q4") |
| targetAudience | string[] | Yes (searcher, investor, broker, academic) |
| ticketPrice | string | If known |
| source | string | Yes |

### Known entries
| Name | Location | Frequency | Notes |
|------|----------|-----------|-------|
| IESE Search Fund Conference | Barcelona | Annual | Leading European ETA conference |
| Stanford Search Fund Conference | Stanford, CA | Annual | Original search fund conference |
| HBS ETA Conference | Boston, MA | Annual | Harvard-hosted |
| Searchfunder Annual Conference | US (varies) | Annual | Community-driven |
| ETA Summit (Acquisition Lab) | US | Annual | Operator-focused |
| INSEAD ETA Roundtable | Fontainebleau | Annual | European focus |
| Wharton ETA Forum | Philadelphia | Annual | |
| Kellogg ETA Conference | Chicago | Annual | |
| European Search Fund Conference | London | Annual | UK-focused |
| DACH Search Fund Meetup | Germany/Switzerland | Quarterly | Informal |
| French ETA Meetup (HEC/INSEAD alumni) | Paris | Quarterly | French ETA community |

---

## Directory #5 — ETA Podcasts

**URL**: `/en/directory/podcasts/`
**Target entries**: 25+
**Schema.org**: `PodcastSeries`

### Data fields per entry

| Field | Type | Required |
|-------|------|----------|
| name | string | Yes |
| slug | string | Yes |
| host | string | Yes |
| language | string | Yes |
| description | text (100-150 words) | Yes |
| platform | enum | Yes (apple, spotify, youtube, website) |
| platformUrl | URL | Yes |
| episodeCount | string | If known ("200+", "50-100") |
| status | enum | Yes (active, inactive, paused) |
| frequency | string | Yes ("weekly", "biweekly", "monthly") |
| source | string | Yes |

### Known entries
| Name | Host | Language | Status | Notes |
|------|------|----------|--------|-------|
| Think Like An Owner | Alex Damerau | English | Active | Premier ETA podcast, 200+ episodes |
| Acquiring Minds | Will Smith | English | Active | Search fund and micro-PE focused |
| Buy and Build | Paul Quirk | English | Active | UK/European focus |
| Sense and Sensibility in Search Fund Universe | Various | English | Active | Art + science of ETA |
| Minds Capital Podcast | Will Smith & Niklas James | English | Active | Independent sponsors, 50+ episodes |
| The SMB Show | Various | English | Active | Small business acquisition |
| Searchfunder Podcast | Jim Sowers | English | Active | Community podcast |
| Main Street Minute | Various | English | Active | Small business buying |
| How2Exit | Ron Concept | English | Active | Exit strategies |
| Micro PE Podcast | Various | English | Active | Micro private equity |
| Entrepreneurs Through Acquisition | Various | English | Active | |
| 50X Podcast | Various | English | Active | Search fund focused |

---

## Directory #6 — Essential ETA Books

**URL**: `/en/directory/books/`
**Target entries**: 40+
**Schema.org**: `Book`

### Data fields per entry

| Field | Type | Required |
|-------|------|----------|
| title | string | Yes |
| slug | string | Yes |
| author | string | Yes |
| year | number | Yes |
| isbn | string | If known |
| description | text (100-200 words) | Yes |
| category | enum | Yes (search-fund-specific, sme-acquisition, operations, valuation, negotiation, leadership) |
| targetAudience | string[] | Yes |
| amazonUrl | URL | Optional |
| source | string | Yes |

### Known entries

#### Search Fund Specific
| Title | Author | Year |
|-------|--------|------|
| Search Fund Primer | Harvard Business School | Various editions |
| Buy Then Build | Walker Deibel | 2018 |
| The Search Fund Investor's Guide | Stanford GSB | 2024 |
| Entrepreneurship Through Acquisition | HBS Press | Various |

#### SME Acquisition
| Title | Author | Year |
|-------|--------|------|
| HBR Guide to Buying a Small Business | Richard Ruback, Royce Yudkoff | 2017 |
| The Art of Buying a Business | | |
| Main Street Millionaire | Codie Sanchez | 2024 |
| Acquisition Entrepreneurship | Walker Deibel | 2020 |

#### Operations & Leadership
| Title | Author | Year |
|-------|--------|------|
| The First 90 Days | Michael Watkins | 2013 |
| Good to Great | Jim Collins | 2001 |
| Traction (EOS) | Gino Wickman | 2012 |
| Scaling Up | Verne Harnish | 2014 |
| The E-Myth Revisited | Michael Gerber | 1995 |

#### Valuation & Finance
| Title | Author | Year |
|-------|--------|------|
| Investment Valuation | Aswath Damodaran | 2012 |
| Valuation (McKinsey) | Tim Koller et al. | 2020 |
| The Little Book of Valuation | Aswath Damodaran | 2011 |

#### Negotiation
| Title | Author | Year |
|-------|--------|------|
| Getting to Yes | Roger Fisher, William Ury | 1981 |
| Never Split the Difference | Chris Voss | 2016 |
| Negotiation Genius | Deepak Malhotra, Max Bazerman | 2007 |

---

## Directory #7 — Legal & Tax Advisory Firms

**URL**: `/en/directory/advisors/`
**Target entries**: 60+
**Schema.org**: `Organization` with `ProfessionalService`

### Data fields per entry

| Field | Type | Required |
|-------|------|----------|
| name | string | Yes |
| slug | string | Yes |
| country | string | Yes |
| specialization | string[] | Yes (legal, tax, both, M&A advisory) |
| website | URL | Yes |
| description | text (100-150 words) | Yes |
| dealSizeFocus | string | If known |
| etaExperience | boolean | Yes (have they worked on search fund deals?) |
| headquarters | string | Yes |
| source | string | Yes |

### Known/to-research entries by country

#### UK
- Shoosmiths — M&A, SME focus
- Freeths — Mid-market M&A
- Taylor Wessing — Tech, search fund experience
- Mishcon de Reya — Mid-market

#### France
- CMS Francis Lefebvre — M&A, tax
- Gide Loyrette Nouel — Top M&A firm
- Fidal — Tax optimization, SME focused
- Linklaters Paris — Cross-border
- August Debouzy — Mid-market M&A

#### Germany
- Heuking Kühn Lüer Wojtek — Mittelstand M&A
- Noerr — Mid-market
- CMS Germany — M&A, succession
- Flick Gocke Schaumburg — Tax

#### Spain
- Cuatrecasas — Leading Spanish M&A
- Garrigues — Tax and legal
- Uría Menéndez — Corporate/M&A

#### Italy
- Bonelli Erede — M&A, mid-market
- Gianni & Origoni — Corporate
- Chiomenti — Tax, M&A

#### Switzerland
- Homburger — Swiss M&A
- Bär & Karrer — Corporate, tax
- Walder Wyss — Mid-market

#### Netherlands
- De Brauw Blackstone Westbroek — M&A
- Houthoff — Corporate, mid-market
- Loyens & Loeff — Tax, Benelux

---

## Implementation plan

### Phase 1 — Data collection (Month 4)
1. Create data schema (TypeScript types) for each directory
2. Compile initial entries from agent research + manual verification
3. Verify all URLs, websites, descriptions are factual
4. Goal: 300+ entries validated

### Phase 2 — Build directory pages (Month 5)
1. Build `/directory/` hub page with links to all 7 categories
2. Build `/directory/[category]/` collection pages with filtering
3. Build `/directory/[category]/[slug]` detail pages with schema.org
4. Add to sitemap
5. Goal: All pages live and indexed

### Phase 3 — Expansion (Months 6-8)
1. Add remaining entries to reach 500+
2. Add "Suggest an addition" form
3. Cross-link from articles to relevant directory entries
4. Cross-link from directory entries to relevant articles
5. Goal: 500+ entries, full cross-linking

### Phase 4 — Localization (Months 8-12)
1. Localize directory hub pages (FR, ES)
2. Country-specific directories in local language (e.g., French brokers in FR)
3. Localize descriptions for entries in relevant markets

---

## SEO strategy

Each directory hub page targets high-value keywords:
| Directory | Primary keyword | Monthly search volume (est.) |
|-----------|----------------|---------------------------|
| Investors | "search fund investors" | 500-1K |
| MBA Programs | "best MBA for search funds" | 200-500 |
| Brokers | "business brokers [country]" | 5K-20K per country |
| Conferences | "search fund conference" | 200-500 |
| Podcasts | "search fund podcasts" | 500-1K |
| Books | "best books business acquisition" | 1K-5K |
| Advisors | "M&A lawyers SME [country]" | 1K-5K per country |

Each individual entry page targets long-tail:
- "[Name] search fund" (e.g., "IESE search fund conference")
- "[Broker name] review" (e.g., "CRA France M&A")

---

## Quality rules

1. **No invented data**: Every entry must be verifiable from public sources
2. **Factual descriptions only**: No promotional language, no superlatives unless sourced
3. **Source attribution**: Every entry records how the data was obtained
4. **Update cadence**: Review all entries every 6 months for accuracy
5. **Removal policy**: Remove entries that are no longer active/relevant
6. **No pay-for-placement**: Directory is editorial, not commercial
