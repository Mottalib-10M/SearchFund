import type { Metadata } from "next";
import { SignInForm } from "@/components/auth/SignInForm";

export const metadata: Metadata = {
  title: "Sign In to SearchFundMarket — ETA Acquisition Platform",
  description:
    "Access your SearchFundMarket dashboard to manage listings, track messages, and connect with search fund entrepreneurs, investors, and sellers across Europe.",
};

export default function SignInPage() {
  return (
    <div className="min-h-screen flex items-center justify-center px-6">
      <SignInForm />
    </div>
  );
}
