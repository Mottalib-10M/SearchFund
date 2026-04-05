"use client";

import { useState, useEffect, useCallback } from "react";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { ArrowLeft, ExternalLink } from "lucide-react";
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

type OtherUser = {
  id: string;
  name: string | null;
  image: string | null;
  role: string;
  profileSlug: string | null;
};

type Listing = {
  title: string;
  slug: string;
};

function profileHref(user: OtherUser): string | null {
  if (!user.profileSlug) return null;
  const prefix =
    user.role === "SEARCHER"
      ? "/searchers"
      : user.role === "INVESTOR"
        ? "/investors"
        : "/sellers";
  return `${prefix}/${user.profileSlug}`;
}

export default function ConversationPage({
  params,
}: {
  params: Promise<{ conversationId: string }>;
}) {
  const { conversationId } = use(params);
  const { data: session } = useSession();
  const [messages, setMessages] = useState<Message[]>([]);
  const [loading, setLoading] = useState(true);
  const [otherUser, setOtherUser] = useState<OtherUser | null>(null);
  const [listing, setListing] = useState<Listing | null>(null);

  const currentUserId = (session?.user as Record<string, unknown> | undefined)?.id as string | undefined;

  const fetchMessages = useCallback(async () => {
    try {
      const res = await fetch(`/api/messages?conversationId=${conversationId}`);
      if (res.ok) {
        const data = await res.json();
        setMessages(data.messages);
        if (data.otherUser) setOtherUser(data.otherUser);
        if (data.listing) setListing(data.listing);
      }
    } catch {
      // ignore
    } finally {
      setLoading(false);
    }
  }, [conversationId]);

  useEffect(() => {
    fetchMessages();

    // Poll for new messages
    const interval = setInterval(fetchMessages, 5000);
    return () => clearInterval(interval);
  }, [conversationId, fetchMessages]);

  const profileLink = otherUser ? profileHref(otherUser) : null;

  return (
    <div className="-mt-8 -mx-8 -mb-8 flex flex-col h-[calc(100dvh-3.5rem)]">
      {/* Header */}
      <div className="flex items-center gap-3 px-4 py-3 border-b border-apple-gray-100 shrink-0">
        <Link
          href="/dashboard/messages"
          className="p-1 text-apple-gray-500 hover:text-apple-black transition-colors"
        >
          <ArrowLeft size={20} />
        </Link>

        {otherUser && (
          <div className="flex items-center gap-3 flex-1 min-w-0">
            {/* Clickable avatar + name → profile */}
            {profileLink ? (
              <Link href={profileLink} className="flex items-center gap-2.5 min-w-0 group">
                {otherUser.image ? (
                  <img
                    src={otherUser.image}
                    alt={otherUser.name ?? ""}
                    className="w-9 h-9 rounded-full object-cover ring-2 ring-transparent group-hover:ring-apple-accent transition-all"
                  />
                ) : (
                  <div className="w-9 h-9 rounded-full bg-apple-gray-100 flex items-center justify-center text-sm font-medium text-apple-gray-700 ring-2 ring-transparent group-hover:ring-apple-accent transition-all">
                    {(otherUser.name ?? "?").charAt(0).toUpperCase()}
                  </div>
                )}
                <div className="min-w-0">
                  <span className="text-sm font-semibold text-apple-black group-hover:text-apple-accent transition-colors truncate block">
                    {otherUser.name}
                  </span>
                  <span className="text-xs text-apple-gray-500 capitalize">
                    {otherUser.role.toLowerCase()}
                  </span>
                </div>
              </Link>
            ) : (
              <div className="flex items-center gap-2.5 min-w-0">
                {otherUser.image ? (
                  <img
                    src={otherUser.image}
                    alt={otherUser.name ?? ""}
                    className="w-9 h-9 rounded-full object-cover"
                  />
                ) : (
                  <div className="w-9 h-9 rounded-full bg-apple-gray-100 flex items-center justify-center text-sm font-medium text-apple-gray-700">
                    {(otherUser.name ?? "?").charAt(0).toUpperCase()}
                  </div>
                )}
                <div className="min-w-0">
                  <span className="text-sm font-semibold text-apple-black truncate block">
                    {otherUser.name}
                  </span>
                  <span className="text-xs text-apple-gray-500 capitalize">
                    {otherUser.role.toLowerCase()}
                  </span>
                </div>
              </div>
            )}

            {/* Listing link */}
            {listing && (
              <Link
                href={`/listings/${listing.slug}`}
                className="ml-auto shrink-0 inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-apple-accent bg-apple-accent/10 rounded-full hover:bg-apple-accent/20 transition-colors"
              >
                <ExternalLink size={12} />
                <span className="hidden sm:inline">{listing.title}</span>
                <span className="sm:hidden">View listing</span>
              </Link>
            )}
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
        waitingForReply={
          messages.length > 0 &&
          new Set(messages.map((m) => m.senderId)).size < 2 &&
          messages[messages.length - 1].senderId === currentUserId
        }
      />
    </div>
  );
}
