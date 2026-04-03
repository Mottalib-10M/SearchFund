"use client";

import { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import Input from "@/components/ui/Input";
import Button from "@/components/ui/Button";

export default function EditProfilePage() {
  const { data: session } = useSession();
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const [name, setName] = useState("");
  const [bio, setBio] = useState("");
  const [linkedIn, setLinkedIn] = useState("");
  const [country, setCountry] = useState("");
  const [city, setCity] = useState("");
  const [languages, setLanguages] = useState("");

  // Role-specific fields
  const [role, setRole] = useState<string>("");
  const [mbaSchool, setMbaSchool] = useState("");
  const [headline, setHeadline] = useState("");
  const [thesisDescription, setThesisDescription] = useState("");
  const [firmName, setFirmName] = useState("");
  const [firmWebsite, setFirmWebsite] = useState("");
  const [investmentThesis, setInvestmentThesis] = useState("");
  const [companyRole, setCompanyRole] = useState("");

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
        setLanguages((u.languages ?? []).join(", "));
        setRole(u.role ?? "");

        if (u.searcherProfile) {
          setMbaSchool(u.searcherProfile.mbaSchool ?? "");
          setHeadline(u.searcherProfile.headline ?? "");
          setThesisDescription(u.searcherProfile.thesisDescription ?? "");
        }
        if (u.investorProfile) {
          setFirmName(u.investorProfile.firmName ?? "");
          setFirmWebsite(u.investorProfile.firmWebsite ?? "");
          setHeadline(u.investorProfile.headline ?? "");
          setInvestmentThesis(u.investorProfile.investmentThesis ?? "");
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
      languages: languages.split(",").map((l) => l.trim()).filter(Boolean),
    };

    if (role === "SEARCHER") {
      payload.searcherProfile = {
        mbaSchool,
        headline,
        thesisDescription,
      };
    } else if (role === "INVESTOR") {
      payload.investorProfile = {
        firmName,
        firmWebsite,
        headline,
        investmentThesis,
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
      setSuccess(true);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong");
    } finally {
      setSaving(false);
    }
  };

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
          <label
            htmlFor="bio"
            className="text-sm text-apple-gray-500 mb-1.5 block"
          >
            Bio
          </label>
          <textarea
            id="bio"
            rows={4}
            placeholder="Tell others about yourself and your experience"
            value={bio}
            onChange={(e) => setBio(e.target.value)}
            className="bg-apple-gray-100 rounded-lg px-4 py-3 border-none w-full text-apple-black placeholder:text-apple-gray-500 focus:ring-2 focus:ring-apple-accent focus:ring-offset-2 transition-shadow resize-none"
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

        <Input
          label="Languages"
          placeholder="e.g. English, French, German"
          value={languages}
          onChange={(e) => setLanguages(e.target.value)}
        />

        {/* Role-specific fields */}
        {role === "SEARCHER" && (
          <div className="space-y-6 pt-4 border-t border-apple-gray-100">
            <h3 className="text-base font-medium text-apple-black">Searcher Details</h3>
            <Input
              label="MBA School"
              placeholder="e.g. IESE, HBS, Stanford GSB"
              value={mbaSchool}
              onChange={(e) => setMbaSchool(e.target.value)}
            />
            <div className="w-full">
              <label className="text-sm text-apple-gray-500 mb-1.5 block">
                Thesis Description
              </label>
              <textarea
                rows={4}
                placeholder="Describe your acquisition thesis..."
                value={thesisDescription}
                onChange={(e) => setThesisDescription(e.target.value)}
                className="bg-apple-gray-100 rounded-lg px-4 py-3 border-none w-full text-apple-black placeholder:text-apple-gray-500 focus:ring-2 focus:ring-apple-accent focus:ring-offset-2 transition-shadow resize-none"
              />
            </div>
          </div>
        )}

        {role === "INVESTOR" && (
          <div className="space-y-6 pt-4 border-t border-apple-gray-100">
            <h3 className="text-base font-medium text-apple-black">Investor Details</h3>
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
            <div className="w-full">
              <label className="text-sm text-apple-gray-500 mb-1.5 block">
                Investment Thesis
              </label>
              <textarea
                rows={4}
                placeholder="Describe your investment thesis..."
                value={investmentThesis}
                onChange={(e) => setInvestmentThesis(e.target.value)}
                className="bg-apple-gray-100 rounded-lg px-4 py-3 border-none w-full text-apple-black placeholder:text-apple-gray-500 focus:ring-2 focus:ring-apple-accent focus:ring-offset-2 transition-shadow resize-none"
              />
            </div>
          </div>
        )}

        {role === "SELLER" && (
          <div className="space-y-6 pt-4 border-t border-apple-gray-100">
            <h3 className="text-base font-medium text-apple-black">Seller Details</h3>
            <Input
              label="Company Role"
              placeholder="e.g. Founder & CEO"
              value={companyRole}
              onChange={(e) => setCompanyRole(e.target.value)}
            />
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
    </div>
  );
}
