"use client";

import { useState, useEffect, useCallback } from "react";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import MessageThread from "@/components/messages/MessageThread";
import MessageInput from "@/components/messages/MessageInput";
import { use } from "react";

type Message = {
  id: string;
  content: string;
  senderId: string;
  receiverId: string;
  createdAt: string;
};

export default function ConversationPage({
  params,
}: {
  params: Promise<{ conversationId: string }>;
}) {
  const { conversationId } = use(params);
  const { data: session } = useSession();
  const [messages, setMessages] = useState<Message[]>([]);
  const [loading, setLoading] = useState(true);
  const [otherUser, setOtherUser] = useState<{ name: string; image: string | null } | null>(null);

  const currentUserId = (session?.user as Record<string, unknown> | undefined)?.id as string | undefined;

  const fetchMessages = useCallback(async () => {
    try {
      const res = await fetch(`/api/messages?conversationId=${conversationId}`);
      if (res.ok) {
        const data = await res.json();
        setMessages(data.messages);
      }
    } catch {
      // ignore
    } finally {
      setLoading(false);
    }
  }, [conversationId]);

  useEffect(() => {
    fetchMessages();

    // Also fetch conversation details for the other user's name
    async function fetchConversations() {
      try {
        const res = await fetch("/api/conversations");
        if (res.ok) {
          const data = await res.json();
          const conv = data.conversations.find((c: { id: string }) => c.id === conversationId);
          if (conv) {
            setOtherUser(conv.otherUser);
          }
        }
      } catch {
        // ignore
      }
    }
    fetchConversations();

    // Poll for new messages
    const interval = setInterval(fetchMessages, 5000);
    return () => clearInterval(interval);
  }, [conversationId, fetchMessages]);

  return (
    <div className="flex flex-col h-[calc(100vh-10rem)]">
      <div className="flex items-center gap-3 pb-4 border-b border-apple-gray-100">
        <Link
          href="/dashboard/messages"
          className="p-1 text-apple-gray-500 hover:text-apple-black transition-colors"
        >
          <ArrowLeft size={20} />
        </Link>
        {otherUser && (
          <div className="flex items-center gap-2">
            {otherUser.image ? (
              <img
                src={otherUser.image}
                alt={otherUser.name}
                className="w-8 h-8 rounded-full object-cover"
              />
            ) : (
              <div className="w-8 h-8 rounded-full bg-apple-gray-100 flex items-center justify-center text-sm font-medium text-apple-gray-700">
                {otherUser.name.charAt(0).toUpperCase()}
              </div>
            )}
            <span className="text-sm font-medium text-apple-black">
              {otherUser.name}
            </span>
          </div>
        )}
      </div>

      {loading ? (
        <div className="flex-1 flex items-center justify-center">
          <p className="text-sm text-apple-gray-500">Loading messages...</p>
        </div>
      ) : (
        <MessageThread
          messages={messages}
          currentUserId={currentUserId ?? ""}
        />
      )}

      <MessageInput
        conversationId={conversationId}
        onSent={fetchMessages}
      />
    </div>
  );
}
