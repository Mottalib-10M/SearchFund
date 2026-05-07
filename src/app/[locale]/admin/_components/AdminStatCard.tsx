export function StatCard({ label, value }: { label: string; value: number }) {
  return (
    <div className="bg-white rounded-2xl p-5 shadow-sm">
      <p className="text-sm text-apple-gray-500">{label}</p>
      <p className="text-2xl font-semibold text-apple-black mt-1">
        {value.toLocaleString()}
      </p>
    </div>
  );
}

export function MiniStat({
  label,
  value,
}: {
  label: string;
  value: number | string;
}) {
  return (
    <div className="bg-apple-gray-100 rounded-xl px-3 py-2">
      <p className="text-xs text-apple-gray-500">{label}</p>
      <p className="text-lg font-semibold text-apple-black">
        {typeof value === "number" ? value.toLocaleString() : value}
      </p>
    </div>
  );
}

export function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm">
      <h2 className="text-base font-semibold text-apple-black mb-4">
        {title}
      </h2>
      {children}
    </div>
  );
}

export function formatCurrency(value: number): string {
  if (value >= 1_000_000) return `€${(value / 1_000_000).toFixed(1)}M`;
  if (value >= 1_000) return `€${(value / 1_000).toFixed(0)}K`;
  return `€${value.toLocaleString()}`;
}

export function formatDate(date: Date | null | undefined): string {
  if (!date) return "—";
  return date.toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });
}

export function formatDateTime(date: Date | null | undefined): string {
  if (!date) return "—";
  return date.toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "short",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });
}

export function formatRelativeTime(date: Date): string {
  const now = Date.now();
  const diffMs = now - date.getTime();
  const diffSec = Math.floor(diffMs / 1000);
  const diffMin = Math.floor(diffSec / 60);
  const diffHr = Math.floor(diffMin / 60);
  const diffDay = Math.floor(diffHr / 24);

  if (diffSec < 60) return "just now";
  if (diffMin < 60) return `${diffMin}m ago`;
  if (diffHr < 24) return `${diffHr}h ago`;
  if (diffDay === 1) return "yesterday";
  if (diffDay < 30) return `${diffDay}d ago`;
  return formatDate(date);
}

export function DeltaBadge({
  current,
  previous,
}: {
  current: number;
  previous: number;
}) {
  if (previous === 0 && current === 0) {
    return <span className="text-xs text-apple-gray-400">—</span>;
  }
  if (previous === 0) {
    return (
      <span className="text-xs font-medium text-apple-success">+{current}</span>
    );
  }
  const pct = Math.round(((current - previous) / previous) * 100);
  const isPositive = pct >= 0;
  return (
    <span
      className={`text-xs font-medium ${isPositive ? "text-apple-success" : "text-apple-error"}`}
    >
      {isPositive ? "+" : ""}
      {pct}%
    </span>
  );
}

export function StatCardWithDelta({
  label,
  current,
  previous,
}: {
  label: string;
  current: number;
  previous: number;
}) {
  return (
    <div className="bg-apple-gray-100 rounded-xl px-4 py-3">
      <p className="text-xs text-apple-gray-500">{label}</p>
      <div className="flex items-baseline gap-2 mt-1">
        <span className="text-lg font-semibold text-apple-black">
          {current.toLocaleString()}
        </span>
        <DeltaBadge current={current} previous={previous} />
      </div>
      <p className="text-xs text-apple-gray-400 mt-0.5">
        vs {previous.toLocaleString()} prev
      </p>
    </div>
  );
}
