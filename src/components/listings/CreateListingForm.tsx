"use client";

import { useState, useCallback, type FormEvent } from "react";
import { useRouter } from "next/navigation";
import { Plus, Trash2, Eye } from "lucide-react";
import {
  formatCurrency,
  formatPercentage,
  formatMultiple,
  COUNTRIES,
  SECTORS,
} from "@/lib/utils";

// ---------------------------------------------------------------------------
// Constants
// ---------------------------------------------------------------------------

const REASONS_FOR_SALE = [
  "Retirement",
  "New project",
  "Health",
  "Partner dispute",
  "Other",
];

const TIMELINES = [
  "< 3 months",
  "3-6 months",
  "6-12 months",
  "12+ months",
  "Flexible",
];

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

type FormData = {
  title: string;
  sector: string;
  country: string;
  region: string;
  yearFounded: string;
  employeeCount: string;
  summary: string;
  revenue: string;
  ebitda: string;
  askingPrice: string;
  sellerFinancing: boolean;
  description: string;
  highlights: string[];
  reasonForSale: string;
  timeline: string;
};

const INITIAL: FormData = {
  title: "",
  sector: "",
  country: "",
  region: "",
  yearFounded: "",
  employeeCount: "",
  summary: "",
  revenue: "",
  ebitda: "",
  askingPrice: "",
  sellerFinancing: false,
  description: "",
  highlights: [""],
  reasonForSale: "",
  timeline: "",
};

// ---------------------------------------------------------------------------
// Component
// ---------------------------------------------------------------------------

export default function CreateListingForm() {
  const router = useRouter();
  const [form, setForm] = useState<FormData>(INITIAL);
  const [errors, setErrors] = useState<Partial<Record<keyof FormData, string>>>({});
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  // ---- Derived financial values ----
  const revenueK = parseFloat(form.revenue) || 0;
  const ebitdaK = parseFloat(form.ebitda) || 0;
  const askingPriceK = parseFloat(form.askingPrice) || 0;

  const ebitdaMargin = revenueK > 0 ? (ebitdaK / revenueK) * 100 : null;
  const multiple = ebitdaK > 0 ? askingPriceK / ebitdaK : null;

  // ---- Helpers ----
  const set = useCallback(
    <K extends keyof FormData>(key: K, value: FormData[K]) => {
      setForm((prev) => ({ ...prev, [key]: value }));
      setErrors((prev) => {
        const next = { ...prev };
        delete next[key];
        return next;
      });
    },
    []
  );

  const updateHighlight = (idx: number, value: string) => {
    setForm((prev) => {
      const highlights = [...prev.highlights];
      highlights[idx] = value;
      return { ...prev, highlights };
    });
  };

  const addHighlight = () => {
    setForm((prev) => ({
      ...prev,
      highlights: [...prev.highlights, ""],
    }));
  };

  const removeHighlight = (idx: number) => {
    setForm((prev) => ({
      ...prev,
      highlights: prev.highlights.filter((_, i) => i !== idx),
    }));
  };

  // ---- Validation ----
  const validate = (): boolean => {
    const errs: Partial<Record<keyof FormData, string>> = {};
    if (!form.title.trim()) errs.title = "Title is required";
    if (!form.sector) errs.sector = "Sector is required";
    if (!form.country) errs.country = "Country is required";
    if (!form.summary.trim()) errs.summary = "Summary is required";
    if (form.summary.length > 280)
      errs.summary = "Summary must be 280 characters or less";
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  // ---- Submit ----
  const handleSubmit = async (status: "DRAFT" | "UNDER_REVIEW") => {
    if (!validate()) return;
    setSubmitting(true);
    setSubmitError(null);

    const filteredHighlights = form.highlights.filter((h) => h.trim() !== "");

    const body = {
      title: form.title.trim(),
      sector: form.sector,
      country: form.country,
      region: form.region.trim() || null,
      yearFounded: form.yearFounded ? parseInt(form.yearFounded, 10) : null,
      employeeCount: form.employeeCount
        ? parseInt(form.employeeCount, 10)
        : null,
      summary: form.summary.trim(),
      revenue: form.revenue ? parseFloat(form.revenue) : null,
      ebitda: form.ebitda ? parseFloat(form.ebitda) : null,
      ebitdaMargin: ebitdaMargin,
      askingPrice: form.askingPrice ? parseFloat(form.askingPrice) : null,
      askingMultiple: multiple,
      sellerFinancing: form.sellerFinancing,
      description: form.description.trim() || null,
      highlights: filteredHighlights,
      reasonForSale: form.reasonForSale || null,
      timeline: form.timeline || null,
      status,
    };

    try {
      const res = await fetch("/api/listings", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => null);
        throw new Error(data?.error ?? "Something went wrong");
      }

      const data = await res.json();
      router.push(`/listings/${data.slug}`);
    } catch (err) {
      setSubmitError(
        err instanceof Error ? err.message : "Something went wrong"
      );
    } finally {
      setSubmitting(false);
    }
  };

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
  };

  return (
    <form onSubmit={onSubmit} className="max-w-2xl mx-auto">
      {/* ================================================================= */}
      {/* Section 1 — About the business                                    */}
      {/* ================================================================= */}
      <div className="py-12 border-b border-apple-gray-100">
        <h2 className="text-lg font-semibold text-apple-black mb-6">
          About the business
        </h2>

        <div className="space-y-5">
          {/* Title */}
          <Field label="Title" error={errors.title}>
            <input
              type="text"
              value={form.title}
              onChange={(e) => set("title", e.target.value)}
              placeholder="e.g. Profitable B2B SaaS in Healthcare"
              className="form-input"
            />
          </Field>

          {/* Sector + Country */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <Field label="Sector" error={errors.sector}>
              <select
                value={form.sector}
                onChange={(e) => set("sector", e.target.value)}
                className="form-input"
              >
                <option value="">Select a sector</option>
                {SECTORS.map((s) => (
                  <option key={s} value={s}>
                    {s}
                  </option>
                ))}
              </select>
            </Field>

            <Field label="Country" error={errors.country}>
              <select
                value={form.country}
                onChange={(e) => set("country", e.target.value)}
                className="form-input"
              >
                <option value="">Select a country</option>
                {Object.entries(COUNTRIES).map(([code, c]) => (
                  <option key={code} value={code}>
                    {c.flag} {c.name}
                  </option>
                ))}
              </select>
            </Field>
          </div>

          {/* Region + Year Founded + Employees */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            <Field label="Region">
              <input
                type="text"
                value={form.region}
                onChange={(e) => set("region", e.target.value)}
                placeholder="e.g. Ile-de-France"
                className="form-input"
              />
            </Field>

            <Field label="Year founded">
              <input
                type="number"
                value={form.yearFounded}
                onChange={(e) => set("yearFounded", e.target.value)}
                placeholder="e.g. 2005"
                min={1900}
                max={new Date().getFullYear()}
                className="form-input"
              />
            </Field>

            <Field label="Employees">
              <input
                type="number"
                value={form.employeeCount}
                onChange={(e) => set("employeeCount", e.target.value)}
                placeholder="e.g. 25"
                min={0}
                className="form-input"
              />
            </Field>
          </div>

          {/* Summary */}
          <Field label="Summary" error={errors.summary}>
            <textarea
              value={form.summary}
              onChange={(e) => set("summary", e.target.value)}
              placeholder="A short description of the business (max 280 characters)"
              rows={3}
              maxLength={280}
              className="form-input resize-none"
            />
            <p className="text-xs text-apple-gray-500 mt-1 text-right">
              {form.summary.length}/280
            </p>
          </Field>
        </div>
      </div>

      {/* ================================================================= */}
      {/* Section 2 — Financials                                            */}
      {/* ================================================================= */}
      <div className="py-12 border-b border-apple-gray-100">
        <h2 className="text-lg font-semibold text-apple-black mb-6">
          Financials
        </h2>

        <div className="space-y-5">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <Field label="Revenue (K EUR)">
              <input
                type="number"
                value={form.revenue}
                onChange={(e) => set("revenue", e.target.value)}
                placeholder="e.g. 2500"
                min={0}
                className="form-input"
              />
            </Field>

            <Field label="EBITDA (K EUR)">
              <input
                type="number"
                value={form.ebitda}
                onChange={(e) => set("ebitda", e.target.value)}
                placeholder="e.g. 500"
                min={0}
                className="form-input"
              />
            </Field>
          </div>

          {/* Read-only EBITDA Margin */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <Field label="EBITDA Margin">
              <div className="form-input bg-apple-gray-100/60 text-apple-gray-700 cursor-default">
                {ebitdaMargin != null
                  ? formatPercentage(ebitdaMargin)
                  : "Auto-calculated"}
              </div>
            </Field>

            <Field label="Asking Price (K EUR)">
              <input
                type="number"
                value={form.askingPrice}
                onChange={(e) => set("askingPrice", e.target.value)}
                placeholder="e.g. 3000"
                min={0}
                className="form-input"
              />
            </Field>
          </div>

          {/* Read-only Multiple */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <Field label="Multiple (Asking Price / EBITDA)">
              <div className="form-input bg-apple-gray-100/60 text-apple-gray-700 cursor-default">
                {multiple != null
                  ? formatMultiple(multiple)
                  : "Auto-calculated"}
              </div>
            </Field>

            {/* Seller Financing toggle */}
            <Field label="Seller financing available">
              <label className="flex items-center gap-3 h-full pt-1 cursor-pointer">
                <button
                  type="button"
                  role="switch"
                  aria-checked={form.sellerFinancing}
                  onClick={() =>
                    set("sellerFinancing", !form.sellerFinancing)
                  }
                  className={`relative inline-flex h-7 w-12 shrink-0 rounded-full transition-colors duration-200 ease-in-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-apple-accent focus-visible:ring-offset-2 ${
                    form.sellerFinancing
                      ? "bg-apple-accent"
                      : "bg-apple-gray-300"
                  }`}
                >
                  <span
                    className={`pointer-events-none inline-block h-5 w-5 rounded-full bg-white shadow-sm transform transition-transform duration-200 ease-in-out mt-1 ${
                      form.sellerFinancing
                        ? "translate-x-6 ml-0"
                        : "translate-x-1"
                    }`}
                  />
                </button>
                <span className="text-sm text-apple-gray-700">
                  {form.sellerFinancing ? "Yes" : "No"}
                </span>
              </label>
            </Field>
          </div>
        </div>
      </div>

      {/* ================================================================= */}
      {/* Section 3 — Details                                               */}
      {/* ================================================================= */}
      <div className="py-12 border-b border-apple-gray-100">
        <h2 className="text-lg font-semibold text-apple-black mb-6">
          Details
        </h2>

        <div className="space-y-5">
          {/* Description */}
          <Field label="Full description">
            <textarea
              value={form.description}
              onChange={(e) => set("description", e.target.value)}
              placeholder="Provide a detailed description of the business, its history, competitive advantages, growth opportunities..."
              rows={8}
              className="form-input resize-y"
            />
          </Field>

          {/* Highlights */}
          <div>
            <label className="text-sm text-apple-gray-500 mb-1.5 block">
              Highlights
            </label>
            <div className="space-y-2">
              {form.highlights.map((h, idx) => (
                <div key={idx} className="flex items-center gap-2">
                  <input
                    type="text"
                    value={h}
                    onChange={(e) => updateHighlight(idx, e.target.value)}
                    placeholder={`Highlight ${idx + 1}`}
                    className="form-input flex-1"
                  />
                  {form.highlights.length > 1 && (
                    <button
                      type="button"
                      onClick={() => removeHighlight(idx)}
                      className="p-2 text-apple-gray-500 hover:text-apple-error transition-colors"
                      aria-label="Remove highlight"
                    >
                      <Trash2 className="h-4 w-4" />
                    </button>
                  )}
                </div>
              ))}
            </div>
            <button
              type="button"
              onClick={addHighlight}
              className="mt-2 inline-flex items-center gap-1.5 text-sm text-apple-accent hover:underline"
            >
              <Plus className="h-3.5 w-3.5" />
              Add highlight
            </button>
          </div>

          {/* Reason for sale + Timeline */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <Field label="Reason for sale">
              <select
                value={form.reasonForSale}
                onChange={(e) => set("reasonForSale", e.target.value)}
                className="form-input"
              >
                <option value="">Select a reason</option>
                {REASONS_FOR_SALE.map((r) => (
                  <option key={r} value={r}>
                    {r}
                  </option>
                ))}
              </select>
            </Field>

            <Field label="Timeline">
              <select
                value={form.timeline}
                onChange={(e) => set("timeline", e.target.value)}
                className="form-input"
              >
                <option value="">Select a timeline</option>
                {TIMELINES.map((t) => (
                  <option key={t} value={t}>
                    {t}
                  </option>
                ))}
              </select>
            </Field>
          </div>
        </div>
      </div>

      {/* ================================================================= */}
      {/* Section 4 — Publish                                               */}
      {/* ================================================================= */}
      <div className="py-12">
        <h2 className="text-lg font-semibold text-apple-black mb-6">
          Publish
        </h2>

        {/* Preview summary */}
        <div className="bg-apple-gray-100 rounded-2xl p-6 mb-8">
          <div className="flex items-center gap-2 mb-3">
            <Eye className="h-4 w-4 text-apple-gray-500" />
            <span className="text-sm font-medium text-apple-gray-700">
              Preview
            </span>
          </div>
          <h3 className="text-lg font-semibold text-apple-black">
            {form.title || "Untitled listing"}
          </h3>
          <p className="text-sm text-apple-gray-700 mt-1">
            {form.region ? `${form.region}, ` : ""}
            {form.country
              ? COUNTRIES[form.country]?.name ?? form.country
              : "No country selected"}
          </p>
          <div className="mt-3 flex flex-wrap gap-4 text-sm text-apple-gray-700">
            {form.revenue && (
              <span>
                Revenue{" "}
                <span className="font-medium text-apple-black financial">
                  {formatCurrency(parseFloat(form.revenue))}
                </span>
              </span>
            )}
            {form.ebitda && (
              <span>
                EBITDA{" "}
                <span className="font-medium text-apple-black financial">
                  {formatCurrency(parseFloat(form.ebitda))}
                </span>
              </span>
            )}
            {multiple != null && (
              <span>
                <span className="font-medium text-apple-black financial">
                  {formatMultiple(multiple)}
                </span>
              </span>
            )}
          </div>
          {form.sector && (
            <span className="inline-block mt-2 bg-white text-apple-gray-700 rounded-full px-3 py-1 text-xs">
              {form.sector}
            </span>
          )}
        </div>

        {/* Error message */}
        {submitError && (
          <div className="mb-4 rounded-lg bg-apple-error/10 px-4 py-3 text-sm text-apple-error">
            {submitError}
          </div>
        )}

        {/* Buttons */}
        <div className="flex items-center gap-3">
          <button
            type="button"
            disabled={submitting}
            onClick={() => handleSubmit("UNDER_REVIEW")}
            className="inline-flex items-center justify-center rounded-full bg-apple-accent px-8 py-3 text-sm font-medium text-white hover:bg-apple-accent-hover transition-colors disabled:opacity-50 disabled:pointer-events-none"
          >
            {submitting ? "Submitting..." : "Submit for review"}
          </button>

          <button
            type="button"
            disabled={submitting}
            onClick={() => handleSubmit("DRAFT")}
            className="inline-flex items-center justify-center rounded-full border border-apple-gray-300 px-8 py-3 text-sm font-medium text-apple-black hover:bg-apple-gray-100 transition-colors disabled:opacity-50 disabled:pointer-events-none"
          >
            Save as draft
          </button>
        </div>

        <p className="mt-4 text-xs text-apple-gray-500">
          Your listing will be reviewed before publication.
        </p>
      </div>
    </form>
  );
}

// ---------------------------------------------------------------------------
// Field wrapper
// ---------------------------------------------------------------------------

function Field({
  label,
  error,
  children,
}: {
  label: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="w-full">
      <label className="text-sm text-apple-gray-500 mb-1.5 block">
        {label}
      </label>
      {children}
      {error && <p className="text-sm text-apple-error mt-1">{error}</p>}
    </div>
  );
}
