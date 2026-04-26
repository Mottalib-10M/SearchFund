export { directoryCategories } from "./types";
export type {
  DirectoryEntry,
  DirectoryCategory,
  InvestorEntry,
  MBAProgramEntry,
  BrokerEntry,
  ConferenceEntry,
  PodcastEntry,
  BookEntry,
  AdvisorEntry,
} from "./types";
export { investors } from "./investors";
export { mbaPrograms } from "./mba-programs";
export { brokers } from "./brokers";
export { conferences } from "./conferences";
export { podcasts } from "./podcasts";
export { books } from "./books";
export { advisors } from "./advisors";

import { directoryCategories } from "./types";
import type { DirectoryEntry } from "./types";
import { investors } from "./investors";
import { mbaPrograms } from "./mba-programs";
import { brokers } from "./brokers";
import { conferences } from "./conferences";
import { podcasts } from "./podcasts";
import { books } from "./books";
import { advisors } from "./advisors";

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

const categoryDataMap: Record<string, DirectoryEntry[]> = {
  investors: investors,
  "mba-programs": mbaPrograms,
  brokers: brokers,
  conferences: conferences,
  podcasts: podcasts,
  books: books,
  advisors: advisors,
};

export function getEntriesForCategory(categorySlug: string): DirectoryEntry[] {
  return categoryDataMap[categorySlug] ?? [];
}

export function getEntryBySlug(
  categorySlug: string,
  entrySlug: string,
): DirectoryEntry | undefined {
  const entries = categoryDataMap[categorySlug];
  if (!entries) return undefined;
  return entries.find((e) => {
    if ("slug" in e) return e.slug === entrySlug;
    return false;
  });
}

export function getCategoryBySlug(slug: string) {
  return directoryCategories.find((c) => c.slug === slug);
}

export function getAllCategorySlugs(): string[] {
  return directoryCategories.map((c) => c.slug);
}

export function getEntryName(entry: DirectoryEntry): string {
  if (entry.kind === "book") return entry.title;
  if (entry.kind === "mba-program") return entry.schoolName;
  return entry.name;
}

export function getEntrySlug(entry: DirectoryEntry): string {
  return entry.slug;
}

export function getEntryDescription(entry: DirectoryEntry): string {
  return entry.description;
}

export function getTotalEntryCount(): number {
  return Object.values(categoryDataMap).reduce((sum, arr) => sum + arr.length, 0);
}
