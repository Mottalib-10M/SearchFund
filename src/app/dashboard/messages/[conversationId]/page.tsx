import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "Conversation — SearchFundMarket",
  description: "View your conversation on SearchFundMarket.",
};

export default async function ConversationPage({
  params,
}: {
  params: Promise<{ conversationId: string }>;
}) {
  const { conversationId } = await params;

  return (
    <div>
      <Link
        href="/dashboard/messages"
        className="inline-flex items-center gap-2 text-sm text-apple-accent hover:underline"
      >
        <ArrowLeft size={16} />
        Back to messages
      </Link>

      <div className="mt-8 flex flex-col items-center justify-center text-center py-24">
        <p className="text-lg font-semibold text-apple-black">
          Conversation view
        </p>
        <p className="mt-1 text-sm text-apple-gray-500">Coming soon</p>
        <p className="mt-4 text-xs text-apple-gray-500">
          Conversation ID: {conversationId}
        </p>
      </div>
    </div>
  );
}
