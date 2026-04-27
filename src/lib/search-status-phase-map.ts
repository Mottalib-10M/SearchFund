/**
 * Maps Prisma SearchStatus enum values to ETA Journey phase IDs.
 */

export const SEARCH_STATUS_TO_PHASE: Record<string, string> = {
  PREPARING: "prepare",
  RAISING_CAPITAL: "fundraise",
  ACTIVELY_SEARCHING: "search",
  LOI_SIGNED: "acquire",
  ACQUIRED: "operate",
  OPERATING: "operate",
  EXITED: "exit",
};

/** Ordered list of SearchStatus values matching the journey progression. */
export const SEARCH_STATUS_ORDER = [
  "PREPARING",
  "RAISING_CAPITAL",
  "ACTIVELY_SEARCHING",
  "LOI_SIGNED",
  "ACQUIRED",
  "OPERATING",
  "EXITED",
] as const;

/** Reverse map: phase ID → the first SearchStatus that maps to it. */
export const PHASE_TO_SEARCH_STATUS: Record<string, string> = {
  prepare: "PREPARING",
  fundraise: "RAISING_CAPITAL",
  search: "ACTIVELY_SEARCHING",
  acquire: "LOI_SIGNED",
  operate: "ACQUIRED",
  exit: "EXITED",
};
