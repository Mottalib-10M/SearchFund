import type { Metadata } from "next";
import { SignUpForm } from "@/components/auth/SignUpForm";

export const metadata: Metadata = {
  title: "Sign Up — SearchFundMarket",
};

export default function SignUpPage() {
  return (
    <div className="min-h-screen flex items-center justify-center px-6">
      <SignUpForm />
    </div>
  );
}
