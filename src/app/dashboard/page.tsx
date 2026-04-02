import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dashboard — TheSearchFund",
  description: "Your personal dashboard on TheSearchFund.",
};

const stats = [
  { label: "Profile views", value: "124", change: "+12% this week" },
  { label: "Connections", value: "18", change: "3 pending" },
  { label: "Saved listings", value: "7", change: "2 new matches" },
];

const activities = [
  {
    text: "New listing matching your criteria: B2B Industrial Services — France",
    time: "2 hours ago",
  },
  {
    text: "Connection request from Marie Laurent",
    time: "Yesterday",
  },
  {
    text: "Your profile was viewed 5 times this week",
    time: "3 days ago",
  },
];

export default function DashboardPage() {
  return (
    <div>
      <h1 className="text-2xl font-semibold text-apple-black">Dashboard</h1>
      <p className="text-apple-gray-500 mt-1">Welcome back</p>

      {/* Stat cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
        {stats.map((stat) => (
          <div key={stat.label} className="bg-apple-gray-100 rounded-2xl p-6">
            <p className="text-sm text-apple-gray-500">{stat.label}</p>
            <p className="text-3xl font-semibold text-apple-black mt-1">
              {stat.value}
            </p>
            <p className="text-xs text-apple-success mt-2">{stat.change}</p>
          </div>
        ))}
      </div>

      {/* Recent activity */}
      <section className="mt-12">
        <h2 className="text-lg font-semibold text-apple-black">
          Recent activity
        </h2>
        <div className="mt-4">
          {activities.map((activity, idx) => (
            <div
              key={idx}
              className="flex items-start justify-between gap-4 border-b border-apple-gray-100 py-4"
            >
              <p className="text-sm text-apple-gray-700">{activity.text}</p>
              <span className="text-xs text-apple-gray-500 whitespace-nowrap shrink-0">
                {activity.time}
              </span>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
