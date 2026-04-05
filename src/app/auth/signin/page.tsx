import type { Metadata } from "next";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { redirect } from "next/navigation";
import { SignInForm } from "@/components/auth/SignInForm";

export const metadata: Metadata = {
  title: "Sign In to SearchFundMarket — ETA Acquisition Platform",
  description:
    "Access your SearchFundMarket dashboard to manage listings, track messages, and connect with search fund entrepreneurs, investors, and sellers across Europe.",
};

export default async function SignInPage() {
  const session = await getServerSession(authOptions);
  if (session?.user) redirect("/dashboard");

  return (
    <div className="min-h-screen flex items-center justify-center px-6">
      <SignInForm />
    </div>
  );
}
