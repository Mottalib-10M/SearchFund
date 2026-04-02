"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import Input from "@/components/ui/Input";
import Button from "@/components/ui/Button";

export default function EditProfilePage() {
  const [name, setName] = useState("");
  const [bio, setBio] = useState("");
  const [linkedIn, setLinkedIn] = useState("");
  const [country, setCountry] = useState("");
  const [city, setCity] = useState("");
  const [languages, setLanguages] = useState("");

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

      <form
        className="mt-8 space-y-6"
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
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

        <div className="bg-apple-gray-100 rounded-2xl p-6">
          <p className="text-sm text-apple-gray-700">
            Additional profile fields coming soon
          </p>
          <p className="text-xs text-apple-gray-500 mt-1">
            Role-specific fields for searchers, investors, and sellers will be
            available in a future update.
          </p>
        </div>

        <div className="flex items-center gap-3 pt-4">
          <Button type="submit">Save changes</Button>
          <Button variant="secondary" href="/dashboard/settings">
            Cancel
          </Button>
        </div>
      </form>
    </div>
  );
}
