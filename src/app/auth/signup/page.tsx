import type { Metadata } from "next";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { redirect } from "next/navigation";
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

export default async function SignUpPage() {
  const session = await getServerSession(authOptions);
  if (session?.user) redirect("/dashboard");

  return (
    <div className="min-h-screen flex items-center justify-center px-6">
      <SignUpForm />
    </div>
  );
}
