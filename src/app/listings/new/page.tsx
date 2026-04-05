import type { Metadata } from "next";
import { redirect } from "next/navigation";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import CreateListingForm from "@/components/listings/CreateListingForm";

export const metadata: Metadata = {
  title: "Sell Your Business in Europe — List on SearchFundMarket",
  description:
    "Reach qualified search fund buyers across Europe. List your business on SearchFundMarket — no broker fees, direct connections with serious acquirers. Start now.",
  openGraph: {
    title: "Sell Your Business to Search Fund Entrepreneurs",
    description:
      "List your company on SearchFundMarket and connect directly with qualified buyers. No broker commissions, no middlemen.",
  },
};

export default async function NewListingPage() {
  const session = await getServerSession(authOptions);
  const role = (session?.user as Record<string, unknown> | undefined)?.role as string | undefined;

  if (role !== "SELLER") {
    redirect("/listings");
  }

  return (
    <div className="max-w-5xl mx-auto px-6 py-12">
      <div className="max-w-2xl mx-auto text-center mb-4">
        <h1 className="text-3xl font-semibold text-apple-black">
          List your business
        </h1>
        <p className="mt-2 text-apple-gray-700">
          Reach qualified buyers across Europe
        </p>
      </div>

      <CreateListingForm />
    </div>
  );
}
