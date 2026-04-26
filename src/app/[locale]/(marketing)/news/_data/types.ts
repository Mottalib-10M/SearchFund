export interface NewsArticle {
  slug: string;
  title: string;
  description: string;
  content: string; // HTML content
  author: string;
  datePublished: string; // ISO date
  dateModified: string;
  category: "deal" | "ecosystem" | "research" | "regulation" | "event" | "opinion";
  tags: string[];
  sources: { name: string; url?: string }[];
  relatedArticles?: string[]; // learn article slugs
}

export const newsCategories = [
  { slug: "deal", name: "Deals & Transactions" },
  { slug: "ecosystem", name: "Ecosystem News" },
  { slug: "research", name: "Research & Data" },
  { slug: "regulation", name: "Regulation & Policy" },
  { slug: "event", name: "Events & Conferences" },
  { slug: "opinion", name: "Opinion & Analysis" },
] as const;
