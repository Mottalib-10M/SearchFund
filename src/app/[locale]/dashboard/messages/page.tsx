"use client";

import { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { MessageSquare } from "lucide-react";
import { timeAgo } from "@/lib/utils";

type ConversationItem = {
  id: string;
  otherUser: { id: string; name: string | null; image: string | null; role: string };
  lastMessage: { content: string; senderId: string; createdAt: string; readAt: string | null } | null;
  unread: boolean;
  updatedAt: string;
};

export default function MessagesPage() {
  const { data: session } = useSession();
  const [conversations, setConversations] = useState<ConversationItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchConversations() {
      try {
        const res = await fetch("/api/conversations");
        if (res.ok) {
          const data = await res.json();
          setConversations(data.conversations);
        }
      } catch {
        // ignore
      } finally {
        setLoading(false);
      }
    }
    fetchConversations();
  }, []);

  return (
    <div>
      <h1 className="text-2xl font-semibold text-apple-black">Messages</h1>

      {loading ? (
        <p className="mt-6 text-sm text-apple-gray-500">Loading conversations...</p>
      ) : conversations.length === 0 ? (
        <div className="mt-6 flex rounded-2xl border border-apple-gray-100 overflow-hidden min-h-[480px]">
          <div className="flex-1 flex flex-col items-center justify-center text-center px-6 py-16">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-apple-gray-100">
              <MessageSquare className="h-5 w-5 text-apple-gray-500" />
            </div>
            <p className="mt-4 text-sm font-semibold text-apple-black">
              No messages yet
            </p>
            <p className="mt-1 text-xs text-apple-gray-500">
              Connect with someone to start a conversation
            </p>
          </div>
        </div>
      ) : (
        <div className="mt-6 space-y-2">
          {conversations.map((conv) => (
            <Link
              key={conv.id}
              href={`/dashboard/messages/${conv.id}`}
              className={`flex items-center gap-3 p-4 rounded-xl border transition-colors ${
                conv.unread
                  ? "border-apple-accent/20 bg-apple-accent/5"
                  : "border-apple-gray-100 hover:border-apple-gray-300"
              }`}
            >
              {conv.otherUser.image ? (
                <img
                  src={conv.otherUser.image}
                  alt={conv.otherUser.name ?? "User"}
                  className="w-10 h-10 rounded-full object-cover shrink-0"
                />
              ) : (
                <div className="w-10 h-10 rounded-full bg-apple-gray-100 flex items-center justify-center text-sm font-medium text-apple-gray-700 shrink-0">
                  {(conv.otherUser.name ?? "?").charAt(0).toUpperCase()}
                </div>
              )}
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between gap-2">
                  <p className={`text-sm truncate ${conv.unread ? "font-semibold text-apple-black" : "font-medium text-apple-black"}`}>
                    {conv.otherUser.name ?? "Anonymous"}
                  </p>
                  {conv.lastMessage && (
                    <span className="text-xs text-apple-gray-500 shrink-0">
                      {timeAgo(new Date(conv.lastMessage.createdAt))}
                    </span>
                  )}
                </div>
                {conv.lastMessage && (
                  <p className={`text-xs mt-0.5 truncate ${conv.unread ? "text-apple-black" : "text-apple-gray-500"}`}>
                    {conv.lastMessage.content}
                  </p>
                )}
              </div>
              {conv.unread && (
                <div className="w-2.5 h-2.5 rounded-full bg-apple-accent shrink-0" />
              )}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
