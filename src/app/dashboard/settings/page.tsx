"use client";

import { useState } from "react";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

function Toggle({
  label,
  enabled,
  onToggle,
}: {
  label: string;
  enabled: boolean;
  onToggle: () => void;
}) {
  return (
    <div className="flex items-center justify-between py-3">
      <span className="text-sm text-apple-gray-700">{label}</span>
      <button
        type="button"
        role="switch"
        aria-checked={enabled}
        onClick={onToggle}
        className={`relative inline-flex h-6 w-10 shrink-0 items-center rounded-full transition-colors ${
          enabled ? "bg-apple-accent" : "bg-apple-gray-300"
        }`}
      >
        <span
          className={`inline-block h-4 w-4 rounded-full bg-white transition-transform ${
            enabled ? "translate-x-5" : "translate-x-1"
          }`}
        />
      </button>
    </div>
  );
}

export default function SettingsPage() {
  const { data: session } = useSession();
  const [emailMessages, setEmailMessages] = useState(true);
  const [emailConnections, setEmailConnections] = useState(true);
  const [emailListings, setEmailListings] = useState(false);
  const [profilePublic, setProfilePublic] = useState(true);

  const userEmail = session?.user?.email ?? "—";
  const userRole = (session?.user as Record<string, unknown>)?.role as string | undefined;
  const roleLabel = userRole
    ? userRole.charAt(0) + userRole.slice(1).toLowerCase()
    : "—";

  return (
    <div className="max-w-2xl">
      <h1 className="text-2xl font-semibold text-apple-black">Settings</h1>
      <p className="text-apple-gray-500 mt-1">Manage your account</p>

      {/* Profile */}
      <section className="border-b border-apple-gray-100 py-8">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-base font-medium text-apple-black">Profile</h2>
            <p className="text-sm text-apple-gray-500 mt-0.5">
              Edit your public profile
            </p>
          </div>
          <Link
            href="/dashboard/settings/profile"
            className="flex items-center gap-1 text-sm text-apple-accent hover:underline"
          >
            Edit
            <ChevronRight size={16} />
          </Link>
        </div>
      </section>

      {/* Account */}
      <section className="border-b border-apple-gray-100 py-8">
        <h2 className="text-base font-medium text-apple-black">Account</h2>
        <div className="mt-4 space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-sm text-apple-gray-500">Email</span>
            <span className="text-sm text-apple-gray-700">
              {userEmail}
            </span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-sm text-apple-gray-500">Role</span>
            <span className="text-sm text-apple-gray-700">{roleLabel}</span>
          </div>
        </div>
      </section>

      {/* Notifications */}
      <section className="border-b border-apple-gray-100 py-8">
        <h2 className="text-base font-medium text-apple-black">
          Notifications
        </h2>
        <div className="mt-4">
          <Toggle
            label="Email for new messages"
            enabled={emailMessages}
            onToggle={() => setEmailMessages(!emailMessages)}
          />
          <Toggle
            label="Email for new connections"
            enabled={emailConnections}
            onToggle={() => setEmailConnections(!emailConnections)}
          />
          <Toggle
            label="Email for new listings"
            enabled={emailListings}
            onToggle={() => setEmailListings(!emailListings)}
          />
        </div>
      </section>

      {/* Privacy */}
      <section className="py-8">
        <h2 className="text-base font-medium text-apple-black">Privacy</h2>
        <div className="mt-4">
          <Toggle
            label="Make my profile public"
            enabled={profilePublic}
            onToggle={() => setProfilePublic(!profilePublic)}
          />
        </div>
      </section>
    </div>
  );
}
