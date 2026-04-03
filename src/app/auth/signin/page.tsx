import type { Metadata } from "next";
import { SignInForm } from "@/components/auth/SignInForm";

export const metadata: Metadata = {
  title: "Sign In — SearchFundMarket",
};

export default function SignInPage() {
  return (
    <div className="min-h-screen flex items-center justify-center px-6">
      <SignInForm />
    </div>
  );
}
