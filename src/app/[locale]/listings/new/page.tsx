"use client";

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { Link } from "@/i18n/navigation";
import { ArrowLeft } from "lucide-react";
import CreateListingForm from "@/components/listings/CreateListingForm";

export default function NewListingPage() {
  const { data: session, status } = useSession();
  const router = useRouter();

  if (status === "loading") {
    return (
      <div className="max-w-2xl mx-auto px-6 py-12">
        <p className="text-sm text-apple-gray-500">Loading...</p>
      </div>
    );
  }

  if (!session) {
    router.push("/auth/signin");
    return null;
  }

  return (
    <div className="max-w-5xl mx-auto px-6 py-12">
      <div className="max-w-2xl mx-auto">
        <Link
          href="/dashboard/my-listings"
          className="inline-flex items-center gap-2 text-sm text-apple-accent hover:underline"
        >
          <ArrowLeft size={16} />
          Back to my listings
        </Link>
      </div>

      <div className="max-w-2xl mx-auto text-center mb-4 mt-6">
        <h1 className="text-3xl font-semibold text-apple-black">
          List a business
        </h1>
        <p className="mt-2 text-apple-gray-700">
          Create a new listing to connect with potential buyers
        </p>
      </div>

      <CreateListingForm />
    </div>
  );
}
