"use client";

import { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import Input from "@/components/ui/Input";
import Button from "@/components/ui/Button";
import DocumentUploadSection from "@/components/profile/DocumentUploadSection";

const LANGUAGES = [
  "English", "French", "Spanish", "German", "Italian", "Portuguese",
  "Dutch", "Swedish", "Norwegian", "Danish", "Finnish", "Polish",
  "Russian", "Arabic", "Mandarin", "Japanese", "Korean", "Hindi",
  "Turkish", "Greek", "Czech", "Romanian", "Hungarian", "Hebrew",
];

const COUNTRIES = [
  "United States", "United Kingdom", "Canada", "France", "Germany", "Spain",
  "Italy", "Netherlands", "Switzerland", "Portugal", "Belgium", "Sweden",
  "Norway", "Denmark", "Finland", "Ireland", "Austria", "Australia",
  "Brazil", "Mexico", "Colombia", "Chile", "Argentina", "Japan",
  "Singapore", "India",
];

const SECTORS = [
  "Technology & Software", "Healthcare & Life Sciences", "Business Services",
  "Financial Services", "Manufacturing", "Consumer & Retail", "Education",
  "Construction & Engineering", "Food & Beverage", "Media & Entertainment",
  "Transportation & Logistics", "Energy & Utilities", "Real Estate",
  "Agriculture", "Other",
];

const INVESTOR_TYPES = [
  { value: "EX_SEARCHER", label: "Ex-Searcher" },
  { value: "FAMILY_OFFICE", label: "Family Office" },
  { value: "INSTITUTIONAL", label: "Institutional" },
  { value: "ANGEL", label: "Angel Investor" },
  { value: "ACCELERATOR", label: "Accelerator" },
];

const SEARCH_TYPES = [
  { value: "TRADITIONAL", label: "Traditional Search Fund" },
  { value: "SELF_FUNDED", label: "Self-Funded Search" },
  { value: "ACCELERATOR", label: "Accelerator" },
  { value: "INDEPENDENT_SPONSOR", label: "Independent Sponsor" },
];

const SEARCH_STATUSES = [
  { value: "PREPARING", label: "Preparing" },
  { value: "RAISING_CAPITAL", label: "Raising Capital" },
  { value: "ACTIVELY_SEARCHING", label: "Actively Searching" },
  { value: "LOI_SIGNED", label: "LOI Signed" },
  { value: "ACQUIRED", label: "Acquired" },
  { value: "OPERATING", label: "Operating" },
  { value: "EXITED", label: "Exited" },
];

const COMPANY_ROLES = [
  "Founder & CEO", "Co-Founder", "CEO", "President", "Managing Director",
  "General Manager", "CFO", "COO", "Owner", "Partner", "Shareholder",
  "Board Member", "Business Broker", "M&A Advisor", "Accountant",
  "Legal Representative", "Other",
];

const VALUE_ADD_OPTIONS = [
  "Board seat", "Mentoring", "Operational support",
  "Network access", "Industry expertise",
];

function ChipSelect({
  options,
  selected,
  onToggle,
}: {
  options: string[];
  selected: string[];
  onToggle: (item: string) => void;
}) {
  return (
    <div className="flex flex-wrap gap-2">
      {options.map((opt) => (
        <button
          key={opt}
          type="button"
          onClick={() => onToggle(opt)}
          className={`px-3 py-1.5 rounded-full text-xs font-medium transition-colors cursor-pointer ${
            selected.includes(opt)
              ? "bg-apple-accent text-white"
              : "bg-apple-gray-100 text-apple-gray-700 hover:bg-apple-gray-300/50"
          }`}
        >
          {opt}
        </button>
      ))}
    </div>
  );
}

export default function EditProfilePage() {
  const { data: session, update: updateSession } = useSession();
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Common fields
  const [name, setName] = useState("");
  const [bio, setBio] = useState("");
  const [linkedIn, setLinkedIn] = useState("");
  const [country, setCountry] = useState("");
  const [city, setCity] = useState("");
  const [languages, setLanguages] = useState<string[]>([]);
  const [role, setRole] = useState<string>("");
  const [headline, setHeadline] = useState("");

  // Searcher fields
  const [mbaSchool, setMbaSchool] = useState("");
  const [searchType, setSearchType] = useState("");
  const [searchStatus, setSearchStatus] = useState("");
  const [thesisDescription, setThesisDescription] = useState("");
  const [searcherTargetSectors, setSearcherTargetSectors] = useState<string[]>([]);
  const [searcherTargetCountries, setSearcherTargetCountries] = useState<string[]>([]);
  const [ebitdaMin, setEbitdaMin] = useState("");
  const [ebitdaMax, setEbitdaMax] = useState("");
  const [revenueMin, setRevenueMin] = useState("");
  const [revenueMax, setRevenueMax] = useState("");
  const [acquisitionTimeline, setAcquisitionTimeline] = useState("");
  const [seekingCapital, setSeekingCapital] = useState(false);
  const [capitalNeeded, setCapitalNeeded] = useState("");
  const [documents, setDocuments] = useState<Array<{
    id: string; label: string; fileName: string; fileUrl: string; fileSize: number;
    visibility: "PRIVATE" | "CONNECTIONS" | "PUBLIC";
  }>>([]);

  // Investor fields
  const [investorType, setInvestorType] = useState("");
  const [firmName, setFirmName] = useState("");
  const [firmWebsite, setFirmWebsite] = useState("");
  const [investmentThesis, setInvestmentThesis] = useState("");
  const [ticketMin, setTicketMin] = useState("");
  const [ticketMax, setTicketMax] = useState("");
  const [investorTargetSectors, setInvestorTargetSectors] = useState<string[]>([]);
  const [investorTargetCountries, setInvestorTargetCountries] = useState<string[]>([]);
  const [valueAdd, setValueAdd] = useState<string[]>([]);
  const [totalDealsInvested, setTotalDealsInvested] = useState("");
  const [preferredSearchTypes, setPreferredSearchTypes] = useState<string[]>([]);
  const [preferredEbitdaMin, setPreferredEbitdaMin] = useState("");
  const [preferredEbitdaMax, setPreferredEbitdaMax] = useState("");

  // Seller fields
  const [companyRole, setCompanyRole] = useState("");

  const toggleItem = (arr: string[], setter: (v: string[]) => void, item: string) => {
    setter(arr.includes(item) ? arr.filter((v) => v !== item) : [...arr, item]);
  };

  useEffect(() => {
    async function fetchProfile() {
      try {
        const res = await fetch("/api/profile");
        if (!res.ok) return;
        const data = await res.json();
        const u = data.user;
        setName(u.name ?? "");
        setBio(u.bio ?? "");
        setLinkedIn(u.linkedinUrl ?? "");
        setCountry(u.country ?? "");
        setCity(u.city ?? "");
        setLanguages(u.languages ?? []);
        setRole(u.role ?? "");

        if (u.searcherProfile) {
          setMbaSchool(u.searcherProfile.mbaSchool ?? "");
          setSearchType(u.searcherProfile.searchType ?? "");
          setSearchStatus(u.searcherProfile.searchStatus ?? "");
          setHeadline(u.searcherProfile.headline ?? "");
          setThesisDescription(u.searcherProfile.thesisDescription ?? "");
          setSearcherTargetSectors(u.searcherProfile.targetSectors ?? []);
          setSearcherTargetCountries(u.searcherProfile.targetCountries ?? []);
          setEbitdaMin(u.searcherProfile.targetEbitdaMin != null ? String(u.searcherProfile.targetEbitdaMin) : "");
          setEbitdaMax(u.searcherProfile.targetEbitdaMax != null ? String(u.searcherProfile.targetEbitdaMax) : "");
          setRevenueMin(u.searcherProfile.targetRevenueMin != null ? String(u.searcherProfile.targetRevenueMin) : "");
          setRevenueMax(u.searcherProfile.targetRevenueMax != null ? String(u.searcherProfile.targetRevenueMax) : "");
          setAcquisitionTimeline(u.searcherProfile.acquisitionTimeline ?? "");
          setSeekingCapital(u.searcherProfile.seekingCapital ?? false);
          setCapitalNeeded(u.searcherProfile.capitalNeeded != null ? String(u.searcherProfile.capitalNeeded) : "");
          setDocuments(u.searcherProfile.documents ?? []);
        }
        if (u.investorProfile) {
          setInvestorType(u.investorProfile.investorType ?? "");
          setFirmName(u.investorProfile.firmName ?? "");
          setFirmWebsite(u.investorProfile.firmWebsite ?? "");
          setHeadline(u.investorProfile.headline ?? "");
          setInvestmentThesis(u.investorProfile.investmentThesis ?? "");
          setTicketMin(u.investorProfile.ticketSizeMin != null ? String(u.investorProfile.ticketSizeMin) : "");
          setTicketMax(u.investorProfile.ticketSizeMax != null ? String(u.investorProfile.ticketSizeMax) : "");
          setInvestorTargetSectors(u.investorProfile.targetSectors ?? []);
          setInvestorTargetCountries(u.investorProfile.targetCountries ?? []);
          setValueAdd(u.investorProfile.valueAdd ?? []);
          setTotalDealsInvested(u.investorProfile.totalDealsInvested != null ? String(u.investorProfile.totalDealsInvested) : "");
          setPreferredSearchTypes(u.investorProfile.preferredSearchTypes ?? []);
          setPreferredEbitdaMin(u.investorProfile.preferredEbitdaMin != null ? String(u.investorProfile.preferredEbitdaMin) : "");
          setPreferredEbitdaMax(u.investorProfile.preferredEbitdaMax != null ? String(u.investorProfile.preferredEbitdaMax) : "");
        }
        if (u.sellerProfile) {
          setCompanyRole(u.sellerProfile.companyRole ?? "");
          setHeadline(u.sellerProfile.headline ?? "");
        }
      } catch {
        // ignore
      } finally {
        setLoading(false);
      }
    }
    fetchProfile();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);
    setError(null);
    setSuccess(false);

    const payload: Record<string, unknown> = {
      name,
      bio,
      linkedinUrl: linkedIn,
      country,
      city,
      languages,
    };

    if (role === "SEARCHER") {
      payload.searcherProfile = {
        mbaSchool,
        searchType: searchType || undefined,
        searchStatus: searchStatus || undefined,
        headline,
        thesisDescription,
        targetSectors: searcherTargetSectors,
        targetCountries: searcherTargetCountries,
        targetEbitdaMin: ebitdaMin ? parseInt(ebitdaMin) : null,
        targetEbitdaMax: ebitdaMax ? parseInt(ebitdaMax) : null,
        targetRevenueMin: revenueMin ? parseInt(revenueMin) : null,
        targetRevenueMax: revenueMax ? parseInt(revenueMax) : null,
        acquisitionTimeline: acquisitionTimeline || null,
        seekingCapital,
        capitalNeeded: capitalNeeded ? parseInt(capitalNeeded) : null,
      };
    } else if (role === "INVESTOR") {
      payload.investorProfile = {
        investorType: investorType || undefined,
        firmName,
        firmWebsite,
        headline,
        investmentThesis,
        ticketSizeMin: ticketMin ? parseInt(ticketMin) : null,
        ticketSizeMax: ticketMax ? parseInt(ticketMax) : null,
        targetSectors: investorTargetSectors,
        targetCountries: investorTargetCountries,
        valueAdd,
        totalDealsInvested: totalDealsInvested ? parseInt(totalDealsInvested) : null,
        preferredSearchTypes,
        preferredEbitdaMin: preferredEbitdaMin ? parseInt(preferredEbitdaMin) : null,
        preferredEbitdaMax: preferredEbitdaMax ? parseInt(preferredEbitdaMax) : null,
      };
    } else if (role === "SELLER") {
      payload.sellerProfile = {
        companyRole,
        headline,
      };
    }

    try {
      const res = await fetch("/api/profile", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || "Failed to save");
      }
      await updateSession();
      setSuccess(true);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong");
    } finally {
      setSaving(false);
    }
  };

  const labelClasses = "text-sm text-apple-gray-500 mb-1.5 block";
  const textareaClasses =
    "bg-apple-gray-100 rounded-lg px-4 py-3 border-none w-full text-apple-black placeholder:text-apple-gray-500 focus:ring-2 focus:ring-apple-accent focus:ring-offset-2 transition-shadow resize-none";
  const selectClasses =
    "bg-apple-gray-100 rounded-lg px-4 py-3 border-none w-full text-apple-black text-sm focus:ring-2 focus:ring-apple-accent focus:ring-offset-2 transition-shadow appearance-none";

  if (loading) {
    return (
      <div className="max-w-2xl">
        <p className="text-sm text-apple-gray-500">Loading profile...</p>
      </div>
    );
  }

  return (
    <div className="max-w-2xl">
      <Link
        href="/dashboard/settings"
        className="inline-flex items-center gap-2 text-sm text-apple-accent hover:underline"
      >
        <ArrowLeft size={16} />
        Back to settings
      </Link>

      <h1 className="text-2xl font-semibold text-apple-black mt-6">
        Edit Profile
      </h1>
      <p className="text-apple-gray-500 mt-1">
        Update your public profile information
      </p>

      <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
        <Input
          label="Full name"
          placeholder="Your full name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <div className="w-full">
          <label htmlFor="bio" className={labelClasses}>Bio</label>
          <textarea
            id="bio"
            rows={4}
            placeholder="Tell others about yourself and your experience"
            value={bio}
            onChange={(e) => setBio(e.target.value)}
            className={textareaClasses}
          />
        </div>

        <Input
          label="Headline"
          placeholder="A short tagline for your profile"
          value={headline}
          onChange={(e) => setHeadline(e.target.value)}
        />

        <Input
          label="LinkedIn URL"
          placeholder="https://linkedin.com/in/your-profile"
          type="url"
          value={linkedIn}
          onChange={(e) => setLinkedIn(e.target.value)}
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <Input
            label="Country"
            placeholder="e.g. France"
            value={country}
            onChange={(e) => setCountry(e.target.value)}
          />
          <Input
            label="City"
            placeholder="e.g. Paris"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
        </div>

        <div>
          <label className={labelClasses}>Languages</label>
          <ChipSelect
            options={LANGUAGES}
            selected={languages}
            onToggle={(item) => toggleItem(languages, setLanguages, item)}
          />
        </div>

        {/* ── SEARCHER FIELDS ── */}
        {role === "SEARCHER" && (
          <div className="space-y-6 pt-4 border-t border-apple-gray-100">
            <h3 className="text-base font-medium text-apple-black">Searcher Details</h3>

            <Input
              label="MBA School"
              placeholder="e.g. IESE, HBS, Stanford GSB"
              value={mbaSchool}
              onChange={(e) => setMbaSchool(e.target.value)}
            />

            <div>
              <label htmlFor="search-type" className={labelClasses}>Search type</label>
              <select
                id="search-type"
                value={searchType}
                onChange={(e) => setSearchType(e.target.value)}
                className={selectClasses}
              >
                <option value="">Select search type</option>
                {SEARCH_TYPES.map((t) => (
                  <option key={t.value} value={t.value}>{t.label}</option>
                ))}
              </select>
            </div>

            <div>
              <label htmlFor="search-status" className={labelClasses}>Search status</label>
              <select
                id="search-status"
                value={searchStatus}
                onChange={(e) => setSearchStatus(e.target.value)}
                className={selectClasses}
              >
                <option value="">Select search status</option>
                {SEARCH_STATUSES.map((s) => (
                  <option key={s.value} value={s.value}>{s.label}</option>
                ))}
              </select>
            </div>

            <div>
              <label className={labelClasses}>Target sectors</label>
              <ChipSelect
                options={SECTORS}
                selected={searcherTargetSectors}
                onToggle={(item) => toggleItem(searcherTargetSectors, setSearcherTargetSectors, item)}
              />
            </div>

            <div>
              <label className={labelClasses}>Target countries</label>
              <ChipSelect
                options={COUNTRIES}
                selected={searcherTargetCountries}
                onToggle={(item) => toggleItem(searcherTargetCountries, setSearcherTargetCountries, item)}
              />
            </div>

            <div>
              <label className={labelClasses}>Target EBITDA range (K)</label>
              <div className="grid grid-cols-2 gap-4">
                <Input
                  placeholder="Min (e.g. 500)"
                  type="number"
                  value={ebitdaMin}
                  onChange={(e) => setEbitdaMin(e.target.value)}
                />
                <Input
                  placeholder="Max (e.g. 3000)"
                  type="number"
                  value={ebitdaMax}
                  onChange={(e) => setEbitdaMax(e.target.value)}
                />
              </div>
            </div>

            <div>
              <label className={labelClasses}>Target revenue range (K)</label>
              <div className="grid grid-cols-2 gap-4">
                <Input
                  placeholder="Min (e.g. 1000)"
                  type="number"
                  value={revenueMin}
                  onChange={(e) => setRevenueMin(e.target.value)}
                />
                <Input
                  placeholder="Max (e.g. 10000)"
                  type="number"
                  value={revenueMax}
                  onChange={(e) => setRevenueMax(e.target.value)}
                />
              </div>
            </div>

            <Input
              label="Acquisition timeline"
              placeholder="e.g. 6-12 months"
              value={acquisitionTimeline}
              onChange={(e) => setAcquisitionTimeline(e.target.value)}
            />

            <div>
              <label className={labelClasses}>Thesis Description</label>
              <textarea
                rows={4}
                placeholder="Describe your acquisition thesis..."
                value={thesisDescription}
                onChange={(e) => setThesisDescription(e.target.value)}
                className={textareaClasses}
              />
            </div>

            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={() => setSeekingCapital(!seekingCapital)}
                className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors cursor-pointer ${
                  seekingCapital ? "bg-apple-accent" : "bg-apple-gray-300"
                }`}
              >
                <span
                  className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                    seekingCapital ? "translate-x-6" : "translate-x-1"
                  }`}
                />
              </button>
              <label className="text-sm text-apple-black">Seeking capital</label>
            </div>

            {seekingCapital && (
              <Input
                label="Capital needed (K)"
                placeholder="e.g. 5000"
                type="number"
                value={capitalNeeded}
                onChange={(e) => setCapitalNeeded(e.target.value)}
              />
            )}
          </div>
        )}

        {/* ── INVESTOR FIELDS ── */}
        {role === "INVESTOR" && (
          <div className="space-y-6 pt-4 border-t border-apple-gray-100">
            <h3 className="text-base font-medium text-apple-black">Investor Details</h3>

            <div>
              <label htmlFor="investor-type" className={labelClasses}>Investor type</label>
              <select
                id="investor-type"
                value={investorType}
                onChange={(e) => setInvestorType(e.target.value)}
                className={selectClasses}
              >
                <option value="">Select investor type</option>
                {INVESTOR_TYPES.map((t) => (
                  <option key={t.value} value={t.value}>{t.label}</option>
                ))}
              </select>
            </div>

            <Input
              label="Firm Name"
              placeholder="Your firm or fund name"
              value={firmName}
              onChange={(e) => setFirmName(e.target.value)}
            />

            <Input
              label="Firm Website"
              placeholder="https://yourfirm.com"
              type="url"
              value={firmWebsite}
              onChange={(e) => setFirmWebsite(e.target.value)}
            />

            <div>
              <label className={labelClasses}>Ticket size range (K)</label>
              <div className="grid grid-cols-2 gap-4">
                <Input
                  placeholder="Min (e.g. 50)"
                  type="number"
                  value={ticketMin}
                  onChange={(e) => setTicketMin(e.target.value)}
                />
                <Input
                  placeholder="Max (e.g. 500)"
                  type="number"
                  value={ticketMax}
                  onChange={(e) => setTicketMax(e.target.value)}
                />
              </div>
            </div>

            <div>
              <label className={labelClasses}>Target sectors</label>
              <ChipSelect
                options={SECTORS}
                selected={investorTargetSectors}
                onToggle={(item) => toggleItem(investorTargetSectors, setInvestorTargetSectors, item)}
              />
            </div>

            <div>
              <label className={labelClasses}>Target countries</label>
              <ChipSelect
                options={COUNTRIES}
                selected={investorTargetCountries}
                onToggle={(item) => toggleItem(investorTargetCountries, setInvestorTargetCountries, item)}
              />
            </div>

            <div>
              <label className={labelClasses}>Preferred search types</label>
              <ChipSelect
                options={SEARCH_TYPES.map((t) => t.label)}
                selected={preferredSearchTypes.map((v) => SEARCH_TYPES.find((t) => t.value === v)?.label ?? v)}
                onToggle={(label) => {
                  const val = SEARCH_TYPES.find((t) => t.label === label)?.value ?? label;
                  toggleItem(preferredSearchTypes, setPreferredSearchTypes, val);
                }}
              />
            </div>

            <div>
              <label className={labelClasses}>Preferred EBITDA range (K€)</label>
              <div className="grid grid-cols-2 gap-4">
                <Input
                  placeholder="Min (e.g. 500)"
                  type="number"
                  value={preferredEbitdaMin}
                  onChange={(e) => setPreferredEbitdaMin(e.target.value)}
                />
                <Input
                  placeholder="Max (e.g. 3000)"
                  type="number"
                  value={preferredEbitdaMax}
                  onChange={(e) => setPreferredEbitdaMax(e.target.value)}
                />
              </div>
            </div>

            <Input
              label="Total deals invested"
              placeholder="e.g. 7"
              type="number"
              value={totalDealsInvested}
              onChange={(e) => setTotalDealsInvested(e.target.value)}
            />

            <div>
              <label className={labelClasses}>Value add</label>
              <ChipSelect
                options={VALUE_ADD_OPTIONS}
                selected={valueAdd}
                onToggle={(item) => toggleItem(valueAdd, setValueAdd, item)}
              />
            </div>

            <div>
              <label className={labelClasses}>Investment Thesis</label>
              <textarea
                rows={4}
                placeholder="Describe your investment thesis..."
                value={investmentThesis}
                onChange={(e) => setInvestmentThesis(e.target.value)}
                className={textareaClasses}
              />
            </div>
          </div>
        )}

        {/* ── SELLER FIELDS ── */}
        {role === "SELLER" && (
          <div className="space-y-6 pt-4 border-t border-apple-gray-100">
            <h3 className="text-base font-medium text-apple-black">Seller Details</h3>
            <div>
              <label htmlFor="company-role" className={labelClasses}>Company Role</label>
              <select
                id="company-role"
                value={companyRole}
                onChange={(e) => setCompanyRole(e.target.value)}
                className={selectClasses}
              >
                <option value="">Select your role</option>
                {COMPANY_ROLES.map((r) => (
                  <option key={r} value={r}>{r}</option>
                ))}
              </select>
            </div>
          </div>
        )}

        {error && (
          <div className="bg-red-50 text-red-600 rounded-lg p-3 text-sm">
            {error}
          </div>
        )}

        {success && (
          <div className="bg-green-50 text-green-600 rounded-lg p-3 text-sm">
            Profile updated successfully!
          </div>
        )}

        <div className="flex items-center gap-3 pt-4">
          <Button type="submit" disabled={saving}>
            {saving ? "Saving..." : "Save changes"}
          </Button>
          <Button variant="secondary" href="/dashboard/settings">
            Cancel
          </Button>
        </div>
      </form>

      {role === "SEARCHER" && !loading && (
        <div className="mt-8">
          <DocumentUploadSection initialDocuments={documents} />
        </div>
      )}
    </div>
  );
}
