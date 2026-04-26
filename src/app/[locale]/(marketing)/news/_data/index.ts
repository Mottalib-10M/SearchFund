export type { NewsArticle } from "./types";
export { newsCategories } from "./types";
export { newsArticles } from "./articles";

import { newsArticles } from "./articles";

export function getNewsArticleBySlug(slug: string) {
  return newsArticles.find((a) => a.slug === slug);
}

export function getNewsByCategory(category: string) {
  return newsArticles.filter((a) => a.category === category);
}

export function getAllNewsSlugs() {
  return newsArticles.map((a) => a.slug);
}
