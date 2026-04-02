"use client";

import { useState } from "react";
import Link from "next/link";
import { Users } from "lucide-react";

const tabs = ["All", "Pending", "Accepted"] as const;

export default function ConnectionsPage() {
  const [activeTab, setActiveTab] = useState<(typeof tabs)[number]>("All");

  return (
    <div>
      <h1 className="text-2xl font-semibold text-apple-black">Connections</h1>
      <p className="text-apple-gray-500 mt-1">
        People in your network
      </p>

      {/* Tabs */}
      <div className="mt-6 flex gap-6 border-b border-apple-gray-100">
        {tabs.map((tab) => (
          <button
            key={tab}
            type="button"
            onClick={() => setActiveTab(tab)}
            className={`pb-3 text-sm transition-colors ${
              activeTab === tab
                ? "text-apple-black font-medium border-b-2 border-apple-accent"
                : "text-apple-gray-500 hover:text-apple-gray-700"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Empty state */}
      <div className="mt-16 flex flex-col items-center text-center">
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-apple-gray-100">
          <Users className="h-5 w-5 text-apple-gray-500" />
        </div>
        <p className="mt-4 text-lg font-semibold text-apple-black">
          No connections yet
        </p>
        <p className="mt-1 text-sm text-apple-gray-500">
          Start connecting with searchers, investors, and sellers
        </p>
        <div className="mt-4 flex items-center gap-4">
          <Link
            href="/searchers"
            className="text-sm font-medium text-apple-accent hover:underline"
          >
            Browse searchers
          </Link>
          <Link
            href="/investors"
            className="text-sm font-medium text-apple-accent hover:underline"
          >
            Browse investors
          </Link>
        </div>
      </div>
    </div>
  );
}
