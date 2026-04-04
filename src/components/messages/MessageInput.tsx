"use client";

import { useState } from "react";
import { Send } from "lucide-react";

export default function MessageInput({
  conversationId,
  onSent,
  waitingForReply = false,
}: {
  conversationId: string;
  onSent?: () => void;
  waitingForReply?: boolean;
}) {
  const [content, setContent] = useState("");
  const [sending, setSending] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!content.trim() || sending || waitingForReply) return;

    setSending(true);
    try {
      const res = await fetch("/api/messages", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ conversationId, content: content.trim() }),
      });
      if (res.ok) {
        setContent("");
        onSent?.();
      }
    } catch {
      // ignore
    } finally {
      setSending(false);
    }
  };

  if (waitingForReply) {
    return (
      <div className="border-t border-apple-gray-100 px-4 py-4">
        <p className="text-sm text-apple-gray-500 text-center">
          Waiting for a reply before you can send another message.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="border-t border-apple-gray-100 p-4 flex items-center gap-3"
    >
      <input
        type="text"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="Type a message..."
        className="flex-1 bg-apple-gray-100 rounded-full px-4 py-2.5 text-sm text-apple-black placeholder:text-apple-gray-500 focus:ring-2 focus:ring-apple-accent/30 transition-shadow"
      />
      <button
        type="submit"
        disabled={!content.trim() || sending}
        className="bg-apple-accent text-white rounded-full p-2.5 hover:bg-apple-accent-hover transition-colors disabled:opacity-50 cursor-pointer"
      >
        <Send size={16} />
      </button>
    </form>
  );
}
