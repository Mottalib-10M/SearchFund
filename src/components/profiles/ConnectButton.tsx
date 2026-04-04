"use client";

import { useState } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function ConnectButton({
  userId,
  userName,
  initialStatus,
}: {
  userId: string;
  userName: string;
  initialStatus?: "PENDING" | "ACCEPTED" | "DECLINED" | null;
}) {
  const { data: session } = useSession();
  const router = useRouter();
  const [status, setStatus] = useState<string | null>(initialStatus ?? null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  if (!session?.user) {
    return (
      <a
        href="/auth/signin"
        className="inline-flex items-center justify-center bg-apple-accent text-white text-sm font-medium rounded-full px-6 py-2.5 hover:bg-apple-accent-hover transition-colors"
      >
        Connect with {userName.split(" ")[0]}
      </a>
    );
  }

  const currentUserId = (session.user as Record<string, unknown>).id as string;
  if (currentUserId === userId) return null;

  if (status === "ACCEPTED") {
    return (
      <span className="inline-flex items-center gap-1.5 text-sm font-medium text-apple-success">
        Connected
      </span>
    );
  }

  if (status === "PENDING") {
    return (
      <span className="inline-flex items-center gap-1.5 text-sm font-medium text-apple-gray-500">
        Request pending
      </span>
    );
  }

  const handleConnect = async () => {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch("/api/connections", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ receiverId: userId }),
      });
      if (res.ok) {
        setStatus("PENDING");
      } else {
        const data = await res.json();
        if (data.error === "Connection already exists") {
          setStatus("PENDING");
        } else {
          setError(data.error || "Failed to send request");
        }
      }
    } catch {
      setError("Network error. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <button
        type="button"
        onClick={handleConnect}
        disabled={loading}
        className="inline-flex items-center justify-center bg-apple-accent text-white text-sm font-medium rounded-full px-6 py-2.5 hover:bg-apple-accent-hover transition-colors disabled:opacity-50 cursor-pointer"
      >
        {loading ? "Sending..." : `Connect with ${userName.split(" ")[0]}`}
      </button>
      {error && (
        <p className="text-xs text-red-600 mt-1.5">{error}</p>
      )}
    </div>
  );
}
