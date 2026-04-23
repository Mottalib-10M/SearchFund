// ---------------------------------------------------------------------------
// Directory entry types
// ---------------------------------------------------------------------------

export interface InvestorEntry {
  kind: "investor";
  name: string;
  slug: string;
  type: "institutional" | "family-office" | "ex-searcher" | "angel" | "accelerator" | "platform";
  website?: string;
  description: string;
  geographyFocus: string[];
  sectorFocus?: string[];
  typicalTicketSize?: string;
  investmentThesis?: string;
  notableDeals?: string[];
  linkedinUrl?: string;
  yearFounded?: number;
  headquarters: string;
  source: string;
}

export interface MBAProgramEntry {
  kind: "mba-program";
  schoolName: string;
  slug: string;
  programName: string;
  country: string;
  city: string;
  website: string;
  programUrl?: string;
  keyProfessors?: string[];
  notableAlumni?: string[];
  description: string;
  ranking?: string;
  etaClub: boolean;
  yearETAStarted?: number;
  source: string;
}

export interface BrokerEntry {
  kind: "broker";
  name: string;
  slug: string;
  country: string;
  website: string;
  description: string;
  specialization: string[];
  dealSizeRange: string;
  type: "marketplace" | "advisory" | "broker" | "consulting" | "platform";
  headquarters: string;
  source: string;
}

export interface ConferenceEntry {
  kind: "conference";
  name: string;
  slug: string;
  location: string;
  country: string;
  frequency: "annual" | "biannual" | "quarterly" | "monthly" | "one-time";
  website?: string;
  description: string;
  typicalDate: string;
  targetAudience: string[];
  ticketPrice?: string;
  source: string;
}

export interface PodcastEntry {
  kind: "podcast";
  name: string;
  slug: string;
  host: string;
  language: string;
  description: string;
  platform: "apple" | "spotify" | "youtube" | "website" | "multiple";
  platformUrl: string;
  episodeCount?: string;
  status: "active" | "inactive" | "paused";
  frequency: string;
  source: string;
}

export interface BookEntry {
  kind: "book";
  title: string;
  slug: string;
  author: string;
  year: number;
  isbn?: string;
  description: string;
  category: "search-fund-specific" | "sme-acquisition" | "operations" | "valuation" | "negotiation" | "leadership";
  targetAudience: string[];
  amazonUrl?: string;
  source: string;
}

export interface AdvisorEntry {
  kind: "advisor";
  name: string;
  slug: string;
  country: string;
  specialization: string[];
  website: string;
  description: string;
  dealSizeFocus?: string;
  etaExperience: boolean;
  headquarters: string;
  source: string;
}

export type DirectoryEntry =
  | InvestorEntry
  | MBAProgramEntry
  | BrokerEntry
  | ConferenceEntry
  | PodcastEntry
  | BookEntry
  | AdvisorEntry;

export interface DirectoryCategory {
  slug: string;
  name: string;
  description: string;
  ogDescription: string;
  introText: string;
}

export const directoryCategories: DirectoryCategory[] = [
  {
    slug: "investors",
    name: "ETA Investors",
    description: "Search fund investors, family offices, and institutions that back entrepreneurs through acquisition.",
    ogDescription: "Comprehensive directory of search fund investors — institutional funds, family offices, ex-searchers, and accelerators backing ETA entrepreneurs worldwide.",
    introText: "Finding the right investors is one of the most critical steps in launching a search fund. This directory catalogs institutional investors, family offices, accelerators, and experienced angel investors who actively invest in search funds and entrepreneurship through acquisition. Each entry includes investment focus, geography, typical ticket size, and a description of their approach.",
  },
  {
    slug: "mba-programs",
    name: "MBA Programs Teaching ETA",
    description: "Business schools offering courses, research, and communities focused on entrepreneurship through acquisition.",
    ogDescription: "Find MBA programs with search fund courses, ETA clubs, and acquisition entrepreneurship tracks. From Stanford to IESE, the complete list.",
    introText: "The search fund model was born at Stanford GSB and has since spread to leading business schools worldwide. This directory lists MBA programs that offer ETA-specific courses, research centers, search fund clubs, and alumni networks focused on acquisition entrepreneurship. Whether you are considering an MBA or looking to tap into a school's ETA community, this guide will help you find the right fit.",
  },
  {
    slug: "brokers",
    name: "Business Brokers & M&A Advisors",
    description: "SME-focused business brokers, M&A advisors, and deal platforms across Europe and North America.",
    ogDescription: "Directory of business brokers and M&A advisors specializing in SME transactions. Filter by country, deal size, and sector to find the right partner.",
    introText: "Working with the right broker or M&A advisor can significantly improve your deal sourcing and execution. This directory covers business brokers, M&A advisory firms, and online deal platforms specializing in small and medium enterprise transactions. Entries span Europe and North America, with details on specialization, deal size range, and geographic focus.",
  },
  {
    slug: "conferences",
    name: "ETA Conferences & Events",
    description: "Search fund conferences, ETA summits, and networking events for searchers, investors, and operators.",
    ogDescription: "The complete calendar of search fund conferences and ETA events worldwide — Stanford, IESE, HBS, and more. Find your next networking opportunity.",
    introText: "Conferences and events are where the ETA community comes together. From the flagship Stanford and IESE search fund conferences to regional meetups and online summits, these events offer invaluable networking, deal sourcing, and knowledge sharing opportunities for searchers, investors, and operators.",
  },
  {
    slug: "podcasts",
    name: "ETA & Search Fund Podcasts",
    description: "Podcasts covering search funds, small business acquisitions, and entrepreneurship through acquisition.",
    ogDescription: "The best search fund and ETA podcasts — from Think Like An Owner to Acquiring Minds. Listen to searchers, investors, and operators share real experiences.",
    introText: "Podcasts have become one of the best ways to learn about search funds and entrepreneurship through acquisition. Hosted by searchers, operators, investors, and advisors, these shows cover everything from deal sourcing and due diligence to post-acquisition operations and exits. This directory lists the most relevant ETA podcasts across multiple languages.",
  },
  {
    slug: "books",
    name: "Essential ETA Books",
    description: "The definitive reading list for search fund entrepreneurs — from search-fund-specific guides to operations and negotiation classics.",
    ogDescription: "Curated list of the best books for search fund entrepreneurs. Search fund primers, acquisition guides, operations playbooks, and negotiation classics.",
    introText: "Building a strong knowledge foundation is essential before launching a search fund or acquiring a business. This curated library spans search-fund-specific primers, SME acquisition guides, operations and leadership playbooks, valuation references, and negotiation classics. Whether you are a first-time searcher or an experienced operator, these books will sharpen your skills.",
  },
  {
    slug: "advisors",
    name: "Legal & Tax Advisors for M&A",
    description: "Law firms and tax advisory practices specializing in SME M&A transactions across Europe.",
    ogDescription: "Find M&A lawyers and tax advisors who specialize in small business acquisitions across Europe. Country-by-country directory with ETA experience indicators.",
    introText: "Having experienced legal and tax advisors is essential for navigating the complexities of business acquisitions. This directory lists law firms, tax practices, and advisory firms across Europe that specialize in SME transactions and have experience with search fund deals. Entries include their areas of specialization, geographic focus, and whether they have specific ETA/search fund experience.",
  },
];
