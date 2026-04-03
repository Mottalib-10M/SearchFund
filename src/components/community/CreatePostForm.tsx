"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function CreatePostForm({
  categories,
}: {
  categories: { id: string; name: string; slug: string }[];
}) {
  const router = useRouter();
  const [categoryId, setCategoryId] = useState("");
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!categoryId || !title.trim() || !content.trim()) return;

    setSubmitting(true);
    setError(null);

    try {
      const res = await fetch("/api/forum/posts", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ categoryId, title, content }),
      });

      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || "Failed to create post");
      }

      const data = await res.json();
      router.push(`/community/${data.categorySlug}/${data.post.slug}`);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong");
      setSubmitting(false);
    }
  };

  return (
    <form className="max-w-2xl mx-auto mt-8 space-y-6" onSubmit={handleSubmit}>
      <div>
        <label
          htmlFor="category"
          className="block text-sm font-medium text-apple-black mb-1.5"
        >
          Category
        </label>
        <select
          id="category"
          value={categoryId}
          onChange={(e) => setCategoryId(e.target.value)}
          className="w-full rounded-lg border border-apple-gray-300 bg-white px-4 py-2.5 text-sm text-apple-black focus:ring-2 focus:ring-apple-accent/20 focus:border-apple-accent transition"
        >
          <option value="">Select a category</option>
          {categories.map((cat) => (
            <option key={cat.id} value={cat.id}>
              {cat.name}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label
          htmlFor="title"
          className="block text-sm font-medium text-apple-black mb-1.5"
        >
          Title
        </label>
        <input
          id="title"
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="What do you want to discuss?"
          className="w-full rounded-lg border border-apple-gray-300 bg-white px-4 py-2.5 text-sm text-apple-black placeholder:text-apple-gray-500 focus:ring-2 focus:ring-apple-accent/20 focus:border-apple-accent transition"
        />
      </div>

      <div>
        <label
          htmlFor="content"
          className="block text-sm font-medium text-apple-black mb-1.5"
        >
          Content
        </label>
        <textarea
          id="content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          rows={10}
          placeholder="Share your thoughts, questions, or insights..."
          className="w-full rounded-lg border border-apple-gray-300 bg-white px-4 py-2.5 text-sm text-apple-black placeholder:text-apple-gray-500 focus:ring-2 focus:ring-apple-accent/20 focus:border-apple-accent transition min-h-[200px] resize-y"
        />
      </div>

      {error && (
        <div className="bg-red-50 text-red-600 rounded-lg p-3 text-sm">
          {error}
        </div>
      )}

      <button
        type="submit"
        disabled={submitting || !categoryId || !title.trim() || !content.trim()}
        className="bg-apple-accent text-white rounded-full px-6 py-2.5 text-sm font-medium hover:bg-apple-accent-hover transition-colors disabled:opacity-50 cursor-pointer"
      >
        {submitting ? "Publishing..." : "Publish post"}
      </button>
    </form>
  );
}
