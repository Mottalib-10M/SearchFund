"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function CommentForm({ postId }: { postId: string }) {
  const router = useRouter();
  const [content, setContent] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!content.trim()) return;

    setSubmitting(true);
    setError(null);

    try {
      const res = await fetch("/api/forum/comments", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ postId, content }),
      });

      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || "Failed to post comment");
      }

      setContent("");
      router.refresh();
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mt-6">
      <textarea
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="Write a comment..."
        rows={3}
        className="w-full rounded-lg border border-apple-gray-300 bg-white px-4 py-3 text-sm text-apple-black placeholder:text-apple-gray-500 focus:ring-2 focus:ring-apple-accent/20 focus:border-apple-accent transition resize-none"
      />

      {error && (
        <p className="text-sm text-red-600 mt-2">{error}</p>
      )}

      <button
        type="submit"
        disabled={submitting || !content.trim()}
        className="mt-3 bg-apple-accent text-white rounded-full px-5 py-2 text-sm font-medium hover:bg-apple-accent-hover transition-colors disabled:opacity-50 cursor-pointer"
      >
        {submitting ? "Posting..." : "Post comment"}
      </button>
    </form>
  );
}
