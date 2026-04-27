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
