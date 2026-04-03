import type { Metadata } from "next";
import CreateListingForm from "@/components/listings/CreateListingForm";

export const metadata: Metadata = {
  title: "List your business — SearchFundMarket",
  description:
    "Reach qualified buyers across Europe. List your business on SearchFundMarket marketplace.",
};

export default function NewListingPage() {
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
