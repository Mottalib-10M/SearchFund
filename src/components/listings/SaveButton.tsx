"use client";

import { useState } from "react";
import { useSession } from "next-auth/react";
import { Heart } from "lucide-react";
import { useRouter } from "next/navigation";

export default function SaveButton({
  listingId,
  initialSaved = false,
}: {
  listingId: string;
  initialSaved?: boolean;
}) {
  const { data: session } = useSession();
  const router = useRouter();
  const [saved, setSaved] = useState(initialSaved);
  const [loading, setLoading] = useState(false);

  const handleToggle = async () => {
    if (!session?.user) {
      router.push("/auth/signin");
      return;
    }

    setLoading(true);
    const prev = saved;
    setSaved(!prev); // optimistic toggle
    try {
      const res = saved
        ? await fetch(`/api/saved-listings?listingId=${listingId}`, {
            method: "DELETE",
          })
        : await fetch("/api/saved-listings", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ listingId }),
          });
      if (!res.ok) {
        setSaved(prev); // revert on failure
      }
    } catch {
      setSaved(prev); // revert on network error
    } finally {
      setLoading(false);
    }
  };

  return (
    <button
      type="button"
      onClick={handleToggle}
      disabled={loading}
      className="inline-flex items-center gap-1.5 text-sm font-medium transition-colors cursor-pointer disabled:opacity-50"
      title={saved ? "Unsave listing" : "Save listing"}
    >
      <Heart
        size={18}
        className={
          saved
            ? "fill-red-500 text-red-500"
            : "text-apple-gray-500 hover:text-red-400"
        }
      />
      <span className="text-apple-gray-500">
        {saved ? "Saved" : "Save"}
      </span>
    </button>
  );
}
