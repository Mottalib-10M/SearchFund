import { clsx, type ClassValue } from "clsx";

export function cn(...inputs: ClassValue[]) {
  return clsx(inputs);
}

export function formatCurrency(
  amount: number | null | undefined,
  currency = "EUR"
): string {
  if (amount == null) return "N/A";
  if (amount >= 1000) {
    return `€${(amount / 1000).toFixed(1)}M`;
  }
  return `€${amount}K`;
}

export function formatNumber(num: number | null | undefined): string {
  if (num == null) return "N/A";
  return num.toLocaleString("en-US");
}

export function formatPercentage(num: number | null | undefined): string {
  if (num == null) return "N/A";
  return `${num.toFixed(1)}%`;
}

export function formatMultiple(num: number | null | undefined): string {
  if (num == null) return "N/A";
  return `${num.toFixed(1)}x`;
}

export function timeAgo(date: Date): string {
  const now = new Date();
  const diff = now.getTime() - new Date(date).getTime();
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  if (days === 0) return "Today";
  if (days === 1) return "Yesterday";
  if (days < 7) return `${days} days ago`;
  if (days < 30) return `${Math.floor(days / 7)} weeks ago`;
  if (days < 365) return `${Math.floor(days / 30)} months ago`;
  return `${Math.floor(days / 365)} years ago`;
}

export function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, "")
    .replace(/[\s_]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

export const COUNTRIES: Record<string, { name: string; flag: string }> = {
  FR: { name: "France", flag: "🇫🇷" },
  DE: { name: "Germany", flag: "🇩🇪" },
  ES: { name: "Spain", flag: "🇪🇸" },
  GB: { name: "United Kingdom", flag: "🇬🇧" },
  NL: { name: "Netherlands", flag: "🇳🇱" },
  IT: { name: "Italy", flag: "🇮🇹" },
  BE: { name: "Belgium", flag: "🇧🇪" },
  CH: { name: "Switzerland", flag: "🇨🇭" },
  PT: { name: "Portugal", flag: "🇵🇹" },
  AT: { name: "Austria", flag: "🇦🇹" },
  IE: { name: "Ireland", flag: "🇮🇪" },
  SE: { name: "Sweden", flag: "🇸🇪" },
  DK: { name: "Denmark", flag: "🇩🇰" },
  NO: { name: "Norway", flag: "🇳🇴" },
  FI: { name: "Finland", flag: "🇫🇮" },
  PL: { name: "Poland", flag: "🇵🇱" },
  US: { name: "United States", flag: "🇺🇸" },
};

export const SECTORS = [
  "B2B Services",
  "Healthcare",
  "Manufacturing",
  "Technology",
  "Construction",
  "Retail",
  "Food & Beverage",
  "Education",
  "Logistics",
  "Financial Services",
  "Energy",
  "Real Estate Services",
  "Media & Marketing",
  "Other",
];

export const EBITDA_RANGES = [
  { label: "< €250K", min: 0, max: 250 },
  { label: "€250K – €500K", min: 250, max: 500 },
  { label: "€500K – €1M", min: 500, max: 1000 },
  { label: "€1M – €2M", min: 1000, max: 2000 },
  { label: "€2M – €5M", min: 2000, max: 5000 },
  { label: "> €5M", min: 5000, max: 999999 },
];

export const REVENUE_RANGES = [
  { label: "< €500K", min: 0, max: 500 },
  { label: "€500K – €1M", min: 500, max: 1000 },
  { label: "€1M – €3M", min: 1000, max: 3000 },
  { label: "€3M – €5M", min: 3000, max: 5000 },
  { label: "€5M – €10M", min: 5000, max: 10000 },
  { label: "> €10M", min: 10000, max: 999999 },
];
