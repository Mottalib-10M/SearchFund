"use client";

import { useState, useEffect, Suspense } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { useSession } from "next-auth/react";
import Link from "next/link";

type Role = "searcher" | "investor" | "seller" | null;

const COUNTRIES = [
  "United States",
  "United Kingdom",
  "Canada",
  "France",
  "Germany",
  "Spain",
  "Italy",
  "Netherlands",
  "Switzerland",
  "Portugal",
  "Belgium",
  "Sweden",
  "Norway",
  "Denmark",
  "Finland",
  "Ireland",
  "Austria",
  "Australia",
  "Brazil",
  "Mexico",
  "Colombia",
  "Chile",
  "Argentina",
  "Japan",
  "Singapore",
  "India",
  "Other",
];

const SECTORS = [
  "Technology & Software",
  "Healthcare & Life Sciences",
  "Business Services",
  "Financial Services",
  "Manufacturing",
  "Consumer & Retail",
  "Education",
  "Construction & Engineering",
  "Food & Beverage",
  "Media & Entertainment",
  "Transportation & Logistics",
  "Energy & Utilities",
  "Real Estate",
  "Agriculture",
  "Other",
];

const SEARCH_TYPES = [
  { value: "TRADITIONAL", label: "Traditional Search Fund" },
  { value: "SELF_FUNDED", label: "Self-Funded Search" },
  { value: "ACCELERATOR", label: "Accelerator" },
  { value: "INDEPENDENT_SPONSOR", label: "Independent Sponsor" },
];

const INVESTOR_TYPES = [
  { value: "EX_SEARCHER", label: "Ex-Searcher" },
  { value: "FAMILY_OFFICE", label: "Family Office" },
  { value: "INSTITUTIONAL", label: "Institutional" },
  { value: "ANGEL", label: "Angel Investor" },
  { value: "ACCELERATOR", label: "Accelerator" },
];

const COMPANY_ROLES = [
  "Founder & CEO",
  "Co-Founder",
  "CEO",
  "President",
  "Managing Director",
  "General Manager",
  "CFO",
  "COO",
  "Owner",
  "Partner",
  "Shareholder",
  "Board Member",
  "Business Broker",
  "M&A Advisor",
  "Accountant",
  "Legal Representative",
  "Other",
];

const VALUE_ADD_OPTIONS = [
  "Board seat",
  "Mentoring",
  "Operational support",
  "Network access",
  "Industry expertise",
];

const LANGUAGES = [
  "English",
  "Spanish",
  "French",
  "German",
  "Portuguese",
  "Italian",
  "Dutch",
  "Swedish",
  "Norwegian",
  "Danish",
  "Finnish",
  "Japanese",
  "Mandarin",
  "Hindi",
  "Arabic",
  "Other",
];

function StepIndicator({
  currentStep,
  totalSteps,
}: {
  currentStep: number;
  totalSteps: number;
}) {
  return (
    <div className="flex items-center justify-center gap-2 mb-10">
      {Array.from({ length: totalSteps }, (_, i) => (
        <div
          key={i}
          className={`h-2 w-2 rounded-full transition-colors ${
            i + 1 === currentStep
              ? "bg-apple-accent"
              : i + 1 < currentStep
                ? "bg-apple-accent/40"
                : "bg-apple-gray-300"
          }`}
        />
      ))}
    </div>
  );
}

export default function OnboardingPage() {
  return (
    <Suspense>
      <OnboardingContent />
    </Suspense>
  );
}

function OnboardingContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const { data: session, update: updateSession } = useSession();
  const [step, setStep] = useState(1);
  const [role, setRole] = useState<Role>(null);

  // Pre-select role from URL search params (set during signup flow)
  useEffect(() => {
    const roleParam = searchParams.get("role");
    if (roleParam && ["searcher", "investor", "seller"].includes(roleParam)) {
      setRole(roleParam as Role);
    }
  }, [searchParams]);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Step 1: Basic info
  const [name, setName] = useState("");
  const [country, setCountry] = useState("");
  const [city, setCity] = useState("");
  const [linkedinUrl, setLinkedinUrl] = useState("");
  const [bio, setBio] = useState("");
  const [selectedLanguages, setSelectedLanguages] = useState<string[]>([]);

  // Step 2: Searcher
  const [mbaSchool, setMbaSchool] = useState("");
  const [searchType, setSearchType] = useState("");
  const [targetSectors, setTargetSectors] = useState<string[]>([]);
  const [targetCountries, setTargetCountries] = useState<string[]>([]);
  const [ebitdaMin, setEbitdaMin] = useState("");
  const [ebitdaMax, setEbitdaMax] = useState("");
  const [thesis, setThesis] = useState("");

  // Step 2: Investor
  const [investorType, setInvestorType] = useState("");
  const [firmName, setFirmName] = useState("");
  const [ticketMin, setTicketMin] = useState("");
  const [ticketMax, setTicketMax] = useState("");
  const [investorSectors, setInvestorSectors] = useState<string[]>([]);
  const [investorCountries, setInvestorCountries] = useState<string[]>([]);
  const [valueAdd, setValueAdd] = useState<string[]>([]);

  // Step 2: Seller
  const [companyRole, setCompanyRole] = useState("");

  const toggleArrayItem = (
    arr: string[],
    setter: (v: string[]) => void,
    item: string
  ) => {
    if (arr.includes(item)) {
      setter(arr.filter((v) => v !== item));
    } else {
      setter([...arr, item]);
    }
  };

  const handleNext = () => {
    if (step === 1 && !role) return;
    if (step < 3) setStep((s) => (s + 1) as 1 | 2 | 3);
  };

  const handleBack = () => {
    if (step > 1) setStep((s) => (s - 1) as 1 | 2 | 3);
  };

  const handleSubmit = async () => {
    setSaving(true);
    setError(null);

    const payload: Record<string, unknown> = {
      name,
      country,
      city,
      linkedinUrl,
      bio,
      languages: selectedLanguages,
      role,
    };

    if (role === "searcher") {
      Object.assign(payload, {
        mbaSchool,
        searchType,
        targetSectors,
        targetCountries,
        ebitdaMin,
        ebitdaMax,
        thesis,
      });
    } else if (role === "investor") {
      Object.assign(payload, {
        investorType,
        firmName,
        ticketMin,
        ticketMax,
        investorSectors,
        investorCountries,
        valueAdd,
      });
    } else if (role === "seller") {
      Object.assign(payload, { companyRole });
    }

    try {
      const res = await fetch("/api/onboarding", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || "Failed to save profile");
      }

      // Refresh the session to pick up new role
      await updateSession();
      router.push("/dashboard");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong");
      setSaving(false);
    }
  };

  const inputClasses =
    "bg-apple-gray-100 rounded-lg px-4 py-3 w-full text-apple-black placeholder:text-apple-gray-500 text-sm focus:ring-2 focus:ring-apple-accent/30 transition-shadow";
  const labelClasses = "block text-sm font-medium text-apple-black mb-1.5";
  const checkboxLabelClasses =
    "flex items-center gap-2.5 text-sm text-apple-gray-700 cursor-pointer select-none";

  return (
    <div className="min-h-screen flex items-center justify-center px-6 py-16">
      <div className="w-full max-w-xl mx-auto">
        <StepIndicator currentStep={step} totalSteps={3} />

        {/* ────────────────────────────────────────
            STEP 1: Basic Info + Role
        ──────────────────────────────────────── */}
        {step === 1 && (
          <div>
            <h1 className="text-3xl font-semibold text-apple-black text-center">
              Tell us about yourself
            </h1>
            <p className="text-apple-gray-500 text-center mt-2">
              This helps others on the platform find and connect with you
            </p>

            <div className="mt-8 space-y-5">
              {/* Role selector */}
              <div>
                <label className={labelClasses}>Your role</label>
                <div className="grid grid-cols-3 gap-3">
                  {(["searcher", "investor", "seller"] as const).map((r) => (
                    <button
                      key={r}
                      type="button"
                      onClick={() => setRole(r)}
                      className={`rounded-lg py-2.5 text-sm font-medium transition-all cursor-pointer ${
                        role === r
                          ? "bg-apple-accent text-white"
                          : "bg-apple-gray-100 text-apple-black hover:bg-apple-gray-300/50"
                      }`}
                    >
                      {r.charAt(0).toUpperCase() + r.slice(1)}
                    </button>
                  ))}
                </div>
                <p className="text-xs text-apple-gray-500 mt-2">
                  This choice is permanent and cannot be changed after account creation.
                </p>
              </div>

              <div>
                <label htmlFor="ob-name" className={labelClasses}>
                  Full name
                </label>
                <input
                  id="ob-name"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Jane Smith"
                  className={inputClasses}
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label htmlFor="ob-country" className={labelClasses}>
                    Country
                  </label>
                  <select
                    id="ob-country"
                    value={country}
                    onChange={(e) => setCountry(e.target.value)}
                    className={inputClasses}
                  >
                    <option value="">Select country</option>
                    {COUNTRIES.map((c) => (
                      <option key={c} value={c}>
                        {c}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label htmlFor="ob-city" className={labelClasses}>
                    City
                  </label>
                  <input
                    id="ob-city"
                    type="text"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    placeholder="London"
                    className={inputClasses}
                  />
                </div>
              </div>

              <div>
                <label htmlFor="ob-linkedin" className={labelClasses}>
                  LinkedIn URL
                </label>
                <input
                  id="ob-linkedin"
                  type="url"
                  value={linkedinUrl}
                  onChange={(e) => setLinkedinUrl(e.target.value)}
                  placeholder="https://linkedin.com/in/yourname"
                  className={inputClasses}
                />
              </div>

              <div>
                <label htmlFor="ob-bio" className={labelClasses}>
                  Bio
                </label>
                <textarea
                  id="ob-bio"
                  value={bio}
                  onChange={(e) => setBio(e.target.value)}
                  placeholder="A few words about your background and goals..."
                  rows={3}
                  className={`${inputClasses} resize-none`}
                />
              </div>

              <div>
                <label className={labelClasses}>Languages</label>
                <div className="flex flex-wrap gap-2">
                  {LANGUAGES.map((lang) => (
                    <button
                      key={lang}
                      type="button"
                      onClick={() =>
                        toggleArrayItem(
                          selectedLanguages,
                          setSelectedLanguages,
                          lang
                        )
                      }
                      className={`px-3 py-1.5 rounded-full text-xs font-medium transition-colors cursor-pointer ${
                        selectedLanguages.includes(lang)
                          ? "bg-apple-accent text-white"
                          : "bg-apple-gray-100 text-apple-gray-700 hover:bg-apple-gray-300/50"
                      }`}
                    >
                      {lang}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <button
              type="button"
              onClick={handleNext}
              disabled={!role}
              className="bg-apple-accent text-white rounded-full w-full py-3 mt-8 text-sm font-medium hover:bg-apple-accent-hover transition-colors disabled:opacity-40 cursor-pointer"
            >
              Continue
            </button>
          </div>
        )}

        {/* ────────────────────────────────────────
            STEP 2: Role-specific
        ──────────────────────────────────────── */}
        {step === 2 && role === "searcher" && (
          <div>
            <h1 className="text-3xl font-semibold text-apple-black text-center">
              Your search details
            </h1>
            <p className="text-apple-gray-500 text-center mt-2">
              Help investors and sellers understand your search criteria
            </p>

            <div className="mt-8 space-y-5">
              <div>
                <label htmlFor="ob-mba" className={labelClasses}>
                  MBA School
                </label>
                <input
                  id="ob-mba"
                  type="text"
                  value={mbaSchool}
                  onChange={(e) => setMbaSchool(e.target.value)}
                  placeholder="e.g. IESE, HBS, Stanford GSB"
                  className={inputClasses}
                />
              </div>

              <div>
                <label htmlFor="ob-search-type" className={labelClasses}>
                  Search type
                </label>
                <select
                  id="ob-search-type"
                  value={searchType}
                  onChange={(e) => setSearchType(e.target.value)}
                  className={inputClasses}
                >
                  <option value="">Select search type</option>
                  {SEARCH_TYPES.map((t) => (
                    <option key={t.value} value={t.value}>
                      {t.label}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className={labelClasses}>Target sectors</label>
                <div className="flex flex-wrap gap-2">
                  {SECTORS.map((sector) => (
                    <button
                      key={sector}
                      type="button"
                      onClick={() =>
                        toggleArrayItem(targetSectors, setTargetSectors, sector)
                      }
                      className={`px-3 py-1.5 rounded-full text-xs font-medium transition-colors cursor-pointer ${
                        targetSectors.includes(sector)
                          ? "bg-apple-accent text-white"
                          : "bg-apple-gray-100 text-apple-gray-700 hover:bg-apple-gray-300/50"
                      }`}
                    >
                      {sector}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className={labelClasses}>Target countries</label>
                <div className="flex flex-wrap gap-2">
                  {COUNTRIES.slice(0, -1).map((c) => (
                    <button
                      key={c}
                      type="button"
                      onClick={() =>
                        toggleArrayItem(
                          targetCountries,
                          setTargetCountries,
                          c
                        )
                      }
                      className={`px-3 py-1.5 rounded-full text-xs font-medium transition-colors cursor-pointer ${
                        targetCountries.includes(c)
                          ? "bg-apple-accent text-white"
                          : "bg-apple-gray-100 text-apple-gray-700 hover:bg-apple-gray-300/50"
                      }`}
                    >
                      {c}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className={labelClasses}>Target EBITDA range (K€)</label>
                <div className="grid grid-cols-2 gap-4">
                  <div className="relative">
                    <input
                      type="number"
                      value={ebitdaMin}
                      onChange={(e) => setEbitdaMin(e.target.value)}
                      placeholder="e.g. 500"
                      className={`${inputClasses} pr-10`}
                    />
                    <span className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-apple-gray-500 pointer-events-none">K€</span>
                  </div>
                  <div className="relative">
                    <input
                      type="number"
                      value={ebitdaMax}
                      onChange={(e) => setEbitdaMax(e.target.value)}
                      placeholder="e.g. 3000"
                      className={`${inputClasses} pr-10`}
                    />
                    <span className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-apple-gray-500 pointer-events-none">K€</span>
                  </div>
                </div>
              </div>

              <div>
                <label htmlFor="ob-thesis" className={labelClasses}>
                  Thesis description
                </label>
                <textarea
                  id="ob-thesis"
                  value={thesis}
                  onChange={(e) => setThesis(e.target.value)}
                  placeholder="Describe your acquisition thesis, target profile, and value creation plan..."
                  rows={4}
                  className={`${inputClasses} resize-none`}
                />
              </div>
            </div>

            <div className="flex gap-3 mt-8">
              <button
                type="button"
                onClick={handleBack}
                className="flex-1 bg-apple-gray-100 text-apple-black rounded-full py-3 text-sm font-medium hover:bg-apple-gray-300/50 transition-colors cursor-pointer"
              >
                Back
              </button>
              <button
                type="button"
                onClick={handleNext}
                className="flex-1 bg-apple-accent text-white rounded-full py-3 text-sm font-medium hover:bg-apple-accent-hover transition-colors cursor-pointer"
              >
                Continue
              </button>
            </div>
          </div>
        )}

        {step === 2 && role === "investor" && (
          <div>
            <h1 className="text-3xl font-semibold text-apple-black text-center">
              Your investment profile
            </h1>
            <p className="text-apple-gray-500 text-center mt-2">
              Help searchers understand your investment criteria
            </p>

            <div className="mt-8 space-y-5">
              <div>
                <label htmlFor="ob-investor-type" className={labelClasses}>
                  Investor type
                </label>
                <select
                  id="ob-investor-type"
                  value={investorType}
                  onChange={(e) => setInvestorType(e.target.value)}
                  className={inputClasses}
                >
                  <option value="">Select investor type</option>
                  {INVESTOR_TYPES.map((t) => (
                    <option key={t.value} value={t.value}>
                      {t.label}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label htmlFor="ob-firm" className={labelClasses}>
                  Firm name
                </label>
                <input
                  id="ob-firm"
                  type="text"
                  value={firmName}
                  onChange={(e) => setFirmName(e.target.value)}
                  placeholder="Your firm or fund name"
                  className={inputClasses}
                />
              </div>

              <div>
                <label className={labelClasses}>Ticket size range</label>
                <div className="grid grid-cols-2 gap-4">
                  <input
                    type="text"
                    value={ticketMin}
                    onChange={(e) => setTicketMin(e.target.value)}
                    placeholder="Min (e.g. 50K)"
                    className={inputClasses}
                  />
                  <input
                    type="text"
                    value={ticketMax}
                    onChange={(e) => setTicketMax(e.target.value)}
                    placeholder="Max (e.g. 500K)"
                    className={inputClasses}
                  />
                </div>
              </div>

              <div>
                <label className={labelClasses}>Target sectors</label>
                <div className="flex flex-wrap gap-2">
                  {SECTORS.map((sector) => (
                    <button
                      key={sector}
                      type="button"
                      onClick={() =>
                        toggleArrayItem(
                          investorSectors,
                          setInvestorSectors,
                          sector
                        )
                      }
                      className={`px-3 py-1.5 rounded-full text-xs font-medium transition-colors cursor-pointer ${
                        investorSectors.includes(sector)
                          ? "bg-apple-accent text-white"
                          : "bg-apple-gray-100 text-apple-gray-700 hover:bg-apple-gray-300/50"
                      }`}
                    >
                      {sector}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className={labelClasses}>Target countries</label>
                <div className="flex flex-wrap gap-2">
                  {COUNTRIES.slice(0, -1).map((c) => (
                    <button
                      key={c}
                      type="button"
                      onClick={() =>
                        toggleArrayItem(
                          investorCountries,
                          setInvestorCountries,
                          c
                        )
                      }
                      className={`px-3 py-1.5 rounded-full text-xs font-medium transition-colors cursor-pointer ${
                        investorCountries.includes(c)
                          ? "bg-apple-accent text-white"
                          : "bg-apple-gray-100 text-apple-gray-700 hover:bg-apple-gray-300/50"
                      }`}
                    >
                      {c}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className={labelClasses}>Value add</label>
                <div className="space-y-2.5">
                  {VALUE_ADD_OPTIONS.map((option) => (
                    <label key={option} className={checkboxLabelClasses}>
                      <input
                        type="checkbox"
                        checked={valueAdd.includes(option)}
                        onChange={() =>
                          toggleArrayItem(valueAdd, setValueAdd, option)
                        }
                        className="h-4 w-4 rounded border-apple-gray-300 text-apple-accent focus:ring-apple-accent/30"
                      />
                      {option}
                    </label>
                  ))}
                </div>
              </div>
            </div>

            <div className="flex gap-3 mt-8">
              <button
                type="button"
                onClick={handleBack}
                className="flex-1 bg-apple-gray-100 text-apple-black rounded-full py-3 text-sm font-medium hover:bg-apple-gray-300/50 transition-colors cursor-pointer"
              >
                Back
              </button>
              <button
                type="button"
                onClick={handleNext}
                className="flex-1 bg-apple-accent text-white rounded-full py-3 text-sm font-medium hover:bg-apple-accent-hover transition-colors cursor-pointer"
              >
                Continue
              </button>
            </div>
          </div>
        )}

        {step === 2 && role === "seller" && (
          <div>
            <h1 className="text-3xl font-semibold text-apple-black text-center">
              About your business
            </h1>
            <p className="text-apple-gray-500 text-center mt-2">
              Tell us about your role in the company
            </p>

            <div className="mt-8 space-y-5">
              <div>
                <label htmlFor="ob-company-role" className={labelClasses}>
                  Company role
                </label>
                <select
                  id="ob-company-role"
                  value={companyRole}
                  onChange={(e) => setCompanyRole(e.target.value)}
                  className={inputClasses}
                >
                  <option value="">Select your role</option>
                  {COMPANY_ROLES.map((r) => (
                    <option key={r} value={r}>{r}</option>
                  ))}
                </select>
              </div>
            </div>

            <div className="flex gap-3 mt-8">
              <button
                type="button"
                onClick={handleBack}
                className="flex-1 bg-apple-gray-100 text-apple-black rounded-full py-3 text-sm font-medium hover:bg-apple-gray-300/50 transition-colors cursor-pointer"
              >
                Back
              </button>
              <button
                type="button"
                onClick={handleNext}
                className="flex-1 bg-apple-accent text-white rounded-full py-3 text-sm font-medium hover:bg-apple-accent-hover transition-colors cursor-pointer"
              >
                Continue
              </button>
            </div>
          </div>
        )}

        {/* ────────────────────────────────────────
            STEP 3: Complete
        ──────────────────────────────────────── */}
        {step === 3 && (
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-apple-success/10 mb-6">
              <svg
                className="h-8 w-8 text-apple-success"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m4.5 12.75 6 6 9-13.5"
                />
              </svg>
            </div>

            <h1 className="text-3xl font-semibold text-apple-black">
              You&apos;re all set!
            </h1>
            <p className="text-apple-gray-500 mt-2 max-w-sm mx-auto">
              Your profile is ready. Start exploring the platform and connecting
              with the search fund community.
            </p>

            {/* Summary card */}
            <div className="mt-8 bg-apple-gray-100 rounded-2xl p-6 text-left">
              <h3 className="text-sm font-semibold text-apple-black mb-3">
                Profile summary
              </h3>
              <dl className="space-y-2 text-sm">
                {name && (
                  <div className="flex justify-between">
                    <dt className="text-apple-gray-500">Name</dt>
                    <dd className="text-apple-black font-medium">{name}</dd>
                  </div>
                )}
                {role && (
                  <div className="flex justify-between">
                    <dt className="text-apple-gray-500">Role</dt>
                    <dd className="text-apple-black font-medium capitalize">
                      {role}
                    </dd>
                  </div>
                )}
                {country && (
                  <div className="flex justify-between">
                    <dt className="text-apple-gray-500">Location</dt>
                    <dd className="text-apple-black font-medium">
                      {city ? `${city}, ${country}` : country}
                    </dd>
                  </div>
                )}
                {selectedLanguages.length > 0 && (
                  <div className="flex justify-between">
                    <dt className="text-apple-gray-500">Languages</dt>
                    <dd className="text-apple-black font-medium text-right">
                      {selectedLanguages.join(", ")}
                    </dd>
                  </div>
                )}
                {role === "searcher" && searchType && (
                  <div className="flex justify-between">
                    <dt className="text-apple-gray-500">Search type</dt>
                    <dd className="text-apple-black font-medium">
                      {
                        SEARCH_TYPES.find((t) => t.value === searchType)
                          ?.label
                      }
                    </dd>
                  </div>
                )}
                {role === "searcher" && targetSectors.length > 0 && (
                  <div className="flex justify-between">
                    <dt className="text-apple-gray-500">Target sectors</dt>
                    <dd className="text-apple-black font-medium text-right max-w-[60%]">
                      {targetSectors.join(", ")}
                    </dd>
                  </div>
                )}
                {role === "investor" && investorType && (
                  <div className="flex justify-between">
                    <dt className="text-apple-gray-500">Investor type</dt>
                    <dd className="text-apple-black font-medium">
                      {
                        INVESTOR_TYPES.find((t) => t.value === investorType)
                          ?.label
                      }
                    </dd>
                  </div>
                )}
                {role === "investor" && firmName && (
                  <div className="flex justify-between">
                    <dt className="text-apple-gray-500">Firm</dt>
                    <dd className="text-apple-black font-medium">{firmName}</dd>
                  </div>
                )}
                {role === "seller" && companyRole && (
                  <div className="flex justify-between">
                    <dt className="text-apple-gray-500">Company role</dt>
                    <dd className="text-apple-black font-medium">
                      {companyRole}
                    </dd>
                  </div>
                )}
              </dl>
            </div>

            {error && (
              <div className="mt-4 bg-red-50 text-red-600 rounded-lg p-3 text-sm">
                {error}
              </div>
            )}

            <button
              type="button"
              onClick={handleSubmit}
              disabled={saving}
              className="inline-flex items-center justify-center bg-apple-accent text-white rounded-full w-full py-3 mt-8 text-sm font-medium hover:bg-apple-accent-hover transition-colors disabled:opacity-50 cursor-pointer"
            >
              {saving ? "Saving..." : "Complete Setup & Go to Dashboard"}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
