export function RoleBadge({ role }: { role: string }) {
  const colors: Record<string, string> = {
    SEARCHER: "bg-apple-searcher/10 text-apple-searcher",
    INVESTOR: "bg-apple-investor/10 text-apple-investor",
    SELLER: "bg-apple-seller/10 text-apple-seller",
    ADMIN: "bg-apple-gray-100 text-apple-gray-700",
  };
  return (
    <span
      className={`text-xs font-medium px-2 py-0.5 rounded-full ${colors[role] ?? colors.ADMIN}`}
    >
      {role}
    </span>
  );
}

export function VerificationBadge({ status }: { status: string }) {
  const styles: Record<string, string> = {
    VERIFIED: "bg-apple-success/10 text-apple-success",
    PENDING: "bg-apple-warning/10 text-apple-warning",
    UNVERIFIED: "bg-apple-gray-100 text-apple-gray-500",
  };
  return (
    <span
      className={`text-xs font-medium px-2 py-0.5 rounded-full ${styles[status] ?? styles.UNVERIFIED}`}
    >
      {status}
    </span>
  );
}

export function ListingStatusBadge({ status }: { status: string }) {
  const styles: Record<string, string> = {
    DRAFT: "bg-apple-gray-100 text-apple-gray-500",
    UNDER_REVIEW: "bg-apple-warning/10 text-apple-warning",
    ACTIVE: "bg-apple-success/10 text-apple-success",
    UNDER_LOI: "bg-apple-investor/10 text-apple-investor",
    SOLD: "bg-apple-searcher/10 text-apple-searcher",
    WITHDRAWN: "bg-apple-error/10 text-apple-error",
  };
  return (
    <span
      className={`text-xs font-medium px-2 py-0.5 rounded-full ${styles[status] ?? styles.DRAFT}`}
    >
      {status.replace("_", " ")}
    </span>
  );
}

export function ConnectionStatusBadge({ status }: { status: string }) {
  const styles: Record<string, string> = {
    PENDING: "bg-apple-warning/10 text-apple-warning",
    ACCEPTED: "bg-apple-success/10 text-apple-success",
    DECLINED: "bg-apple-error/10 text-apple-error",
  };
  return (
    <span
      className={`text-xs font-medium px-2 py-0.5 rounded-full ${styles[status] ?? styles.PENDING}`}
    >
      {status}
    </span>
  );
}

export function InvestorTypeBadge({ type }: { type: string }) {
  const colors: Record<string, string> = {
    "Institutional Fund": "bg-blue-100 text-blue-700",
    "Accelerator": "bg-purple-100 text-purple-700",
    "Family Office": "bg-amber-100 text-amber-700",
    "Fund of Funds": "bg-teal-100 text-teal-700",
    "PE Fund": "bg-indigo-100 text-indigo-700",
    "Investment Firm": "bg-sky-100 text-sky-700",
    "Platform": "bg-green-100 text-green-700",
    "Individual Investor": "bg-orange-100 text-orange-700",
    "Strategic Partner": "bg-rose-100 text-rose-700",
    "Holding Company": "bg-slate-100 text-slate-700",
    "Search Fund": "bg-cyan-100 text-cyan-700",
  };
  // Match on partial key for compound types like "PE / Accelerator"
  const match = Object.keys(colors).find((k) => type.includes(k));
  return (
    <span
      className={`text-xs font-medium px-2 py-0.5 rounded-full whitespace-nowrap ${match ? colors[match] : "bg-apple-gray-100 text-apple-gray-700"}`}
    >
      {type}
    </span>
  );
}
