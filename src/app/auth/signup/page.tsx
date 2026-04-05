import type { Metadata } from "next";
import { SignUpForm } from "@/components/auth/SignUpForm";

export const metadata: Metadata = {
  title: "Join SearchFundMarket — Create Your Free ETA Account",
  description:
    "Create your free account as a searcher, investor, or seller. Connect with the European ETA community and access acquisition opportunities. Sign up now.",
  openGraph: {
    title: "Join SearchFundMarket — The ETA Marketplace for Europe",
    description:
      "Create your free profile and connect with search fund entrepreneurs, investors, and business sellers across Europe.",
  },
};

export default function SignUpPage() {
  return (
    <div className="min-h-screen flex items-center justify-center px-6">
      <SignUpForm />
    </div>
  );
}
