export interface TemplateMeta {
  slug: string;
  title: string;
  description: string;
  content: string; // HTML content
  phase: string; // journey phase ID
  datePublished: string;
  dateModified: string;
  sources: { name: string; url?: string }[];
  relatedArticles: string[]; // learn article slugs
  targetQueries: string[]; // SEO target keywords (internal use)
}
