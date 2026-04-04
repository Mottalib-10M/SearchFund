"use client";

import { useState } from "react";
import { useSession } from "next-auth/react";
import Link from "next/link";

export default function InquiryForm({
  listingId,
  alreadySent = false,
}: {
  listingId: string;
  alreadySent?: boolean;
}) {
  const { data: session } = useSession();
  const [message, setMessage] = useState("");
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(alreadySent);
  const [error, setError] = useState<string | null>(null);

  if (!session?.user) {
    return (
      <div className="text-center">
        <p className="text-apple-gray-700">
          Sign in to contact the seller and learn more about this opportunity.
        </p>
        <div className="mt-4 flex items-center justify-center gap-3">
          <Link
            href="/auth/signin"
            className="inline-flex items-center justify-center bg-apple-accent text-white text-sm font-medium rounded-full px-6 py-2.5 hover:bg-apple-accent-hover transition-colors"
          >
            Sign in
          </Link>
          <Link
            href="/auth/signup"
            className="inline-flex items-center justify-center border border-apple-gray-300 text-apple-gray-700 text-sm font-medium rounded-full px-6 py-2.5 hover:bg-apple-gray-100 transition-colors"
          >
            Create account
          </Link>
        </div>
      </div>
    );
  }

  if (sent) {
    return (
      <div className="text-center py-4">
        <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-apple-success/10 mb-3">
          <svg className="h-5 w-5 text-apple-success" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
          </svg>
        </div>
        <p className="text-apple-success font-medium">Inquiry sent</p>
        <p className="text-sm text-apple-gray-500 mt-1">
          The seller has been notified and will respond via the platform.
        </p>
      </div>
    );
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!message.trim()) return;
    setSending(true);
    setError(null);

    try {
      const res = await fetch("/api/inquiries", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ listingId, message }),
      });

      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || "Failed to send");
      }

      setSent(true);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong");
    } finally {
      setSending(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label
        htmlFor="inquiry-message"
        className="block text-sm font-medium text-apple-black mb-2"
      >
        Message to the seller
      </label>
      <textarea
        id="inquiry-message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Introduce yourself and explain your interest in this business..."
        rows={4}
        className="w-full bg-white border border-apple-gray-300 rounded-lg px-4 py-3 text-sm text-apple-black placeholder:text-apple-gray-500 focus:ring-2 focus:ring-apple-accent/30 transition-shadow resize-none"
      />

      {error && (
        <p className="text-sm text-red-600 mt-2">{error}</p>
      )}

      <button
        type="submit"
        disabled={sending || !message.trim()}
        className="mt-3 bg-apple-accent text-white rounded-full px-6 py-2.5 text-sm font-medium hover:bg-apple-accent-hover transition-colors disabled:opacity-50 cursor-pointer"
      >
        {sending ? "Sending..." : "Send inquiry"}
      </button>

      <p className="mt-3 text-xs text-apple-gray-500">
        Your message will be sent to the seller. They will respond via the
        platform.
      </p>
    </form>
  );
}
