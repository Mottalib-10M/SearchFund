export type { TemplateMeta } from "./types";

import { letterOfIntent } from "./letter-of-intent";
import { dueDiligenceChecklist } from "./due-diligence-checklist";
import { ppmSearchFund } from "./ppm-search-fund";
import { hundredDayPlan } from "./100-day-plan";
import { exitReadinessChecklist } from "./exit-readiness-checklist";

export const templates = [
  letterOfIntent,
  dueDiligenceChecklist,
  ppmSearchFund,
  hundredDayPlan,
  exitReadinessChecklist,
];

export function getTemplateBySlug(slug: string) {
  return templates.find((t) => t.slug === slug);
}

export function getAllTemplateSlugs() {
  return templates.map((t) => t.slug);
}
