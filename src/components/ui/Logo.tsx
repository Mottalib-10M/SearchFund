"use client";

import { Link } from "@/i18n/navigation";

const sizes = {
  sm: "text-lg",
  md: "text-[22px]",
  lg: "text-4xl",
  xl: "text-5xl",
} as const;

export default function Logo({
  size = "md",
  className = "",
}: {
  size?: keyof typeof sizes;
  className?: string;
}) {
  return (
    <Link
      href="/"
      className={`${sizes[size]} tracking-tight leading-none ${className}`}
      style={{ letterSpacing: "-0.02em" }}
    >
      <span className="font-semibold" style={{ color: "#1D1D1F" }}>
        SearchFund
      </span>
      <span className="font-light" style={{ color: "#86868B" }}>
        Market
      </span>
    </Link>
  );
}
