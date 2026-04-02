import type { Metadata } from "next";
import { FileText } from "lucide-react";
import Button from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "My Listings — TheSearchFund",
  description: "Manage your business listings on TheSearchFund.",
};

export default function MyListingsPage() {
  return (
    <div>
      <h1 className="text-2xl font-semibold text-apple-black">My listings</h1>
      <p className="text-apple-gray-500 mt-1">
        Manage your business listings
      </p>

      {/* Empty state */}
      <div className="mt-16 flex flex-col items-center text-center">
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-apple-gray-100">
          <FileText className="h-5 w-5 text-apple-gray-500" />
        </div>
        <p className="mt-4 text-lg font-semibold text-apple-black">
          No listings yet
        </p>
        <p className="mt-1 text-sm text-apple-gray-500">
          Create your first listing to reach qualified buyers
        </p>
        <div className="mt-6">
          <Button href="/listings/new">Create listing</Button>
        </div>
      </div>
    </div>
  );
}
