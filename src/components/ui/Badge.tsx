import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

type BadgeVariant = "default" | "searcher" | "investor" | "seller" | "status";

interface BadgeProps {
  children: ReactNode;
  variant?: BadgeVariant;
  className?: string;
}

const variantStyles: Record<BadgeVariant, string> = {
  default: "bg-apple-gray-100 text-apple-black",
  searcher: "bg-apple-searcher/10 text-apple-searcher",
  investor: "bg-apple-accent/10 text-apple-accent",
  seller: "bg-apple-success/10 text-apple-success",
  status: "bg-apple-warning/10 text-apple-warning",
};

export default function Badge({
  children,
  variant = "default",
  className,
}: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-3 py-1 text-xs font-medium",
        variantStyles[variant],
        className
      )}
    >
      {children}
    </span>
  );
}
