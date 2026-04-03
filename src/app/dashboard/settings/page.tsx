"use client";

import { useState, useEffect, useCallback } from "react";
import { useSession, signOut } from "next-auth/react";
import Link from "next/link";
import { ChevronRight, LogOut } from "lucide-react";

function Toggle({
  label,
  enabled,
  onToggle,
  saving,
}: {
  label: string;
  enabled: boolean;
  onToggle: () => void;
  saving?: boolean;
}) {
  return (
    <div className="flex items-center justify-between py-3">
      <span className="text-sm text-apple-gray-700">{label}</span>
      <button
        type="button"
        role="switch"
        aria-checked={enabled}
        onClick={onToggle}
        disabled={saving}
        className={`relative inline-flex h-6 w-10 shrink-0 items-center rounded-full transition-colors disabled:opacity-50 ${
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
  const [loaded, setLoaded] = useState(false);
  const [saving, setSaving] = useState(false);
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    async function load() {
      try {
        const res = await fetch("/api/settings");
        if (res.ok) {
          const data = await res.json();
          setEmailMessages(data.emailMessages);
          setEmailConnections(data.emailConnections);
          setEmailListings(data.emailListings);
          setProfilePublic(data.profilePublic);
        }
      } catch {
        // use defaults
      }
      setLoaded(true);
    }
    load();
  }, []);

  const persist = useCallback(async (updates: Record<string, boolean>) => {
    setSaving(true);
    setSaved(false);
    try {
      await fetch("/api/settings", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(updates),
      });
      setSaved(true);
      setTimeout(() => setSaved(false), 2000);
    } catch {
      // silent
    }
    setSaving(false);
  }, []);

  const toggle = (key: string, current: boolean, setter: (v: boolean) => void) => {
    const next = !current;
    setter(next);
    persist({ [key]: next });
  };

  const userEmail = session?.user?.email ?? "—";
  const userRole = (session?.user as Record<string, unknown>)?.role as string | undefined;
  const roleLabel = userRole
    ? userRole.charAt(0) + userRole.slice(1).toLowerCase()
    : "—";

  if (!loaded) {
    return (
      <div className="max-w-2xl">
        <h1 className="text-2xl font-semibold text-apple-black">Settings</h1>
        <p className="text-apple-gray-500 mt-1">Loading...</p>
      </div>
    );
  }

  return (
    <div className="max-w-2xl">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-semibold text-apple-black">Settings</h1>
          <p className="text-apple-gray-500 mt-1">Manage your account</p>
        </div>
        {saved && (
          <span className="text-sm text-apple-success font-medium">Saved</span>
        )}
      </div>

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
            onToggle={() => toggle("emailMessages", emailMessages, setEmailMessages)}
            saving={saving}
          />
          <Toggle
            label="Email for new connections"
            enabled={emailConnections}
            onToggle={() => toggle("emailConnections", emailConnections, setEmailConnections)}
            saving={saving}
          />
          <Toggle
            label="Email for new listings"
            enabled={emailListings}
            onToggle={() => toggle("emailListings", emailListings, setEmailListings)}
            saving={saving}
          />
        </div>
      </section>

      {/* Privacy */}
      <section className="border-b border-apple-gray-100 py-8">
        <h2 className="text-base font-medium text-apple-black">Privacy</h2>
        <div className="mt-4">
          <Toggle
            label="Make my profile public"
            enabled={profilePublic}
            onToggle={() => toggle("profilePublic", profilePublic, setProfilePublic)}
            saving={saving}
          />
        </div>
      </section>

      {/* Sign out */}
      <section className="py-8">
        <button
          type="button"
          onClick={() => signOut({ callbackUrl: "/" })}
          className="flex items-center gap-2 text-sm text-red-500 hover:text-red-600 transition-colors cursor-pointer"
        >
          <LogOut size={16} />
          Sign out
        </button>
      </section>
    </div>
  );
}
