import type { Metadata } from "next";
import { MessageSquare } from "lucide-react";

export const metadata: Metadata = {
  title: "Messages — TheSearchFund",
  description: "Your conversations on TheSearchFund.",
};

export default function MessagesPage() {
  return (
    <div>
      <h1 className="text-2xl font-semibold text-apple-black">Messages</h1>

      <div className="mt-6 flex rounded-2xl border border-apple-gray-100 overflow-hidden min-h-[480px]">
        {/* Conversation list */}
        <div className="w-80 border-r border-apple-gray-100 shrink-0">
          <div className="flex flex-col items-center justify-center text-center h-full px-6 py-16">
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

        {/* Conversation view placeholder */}
        <div className="flex-1 flex items-center justify-center">
          <p className="text-sm text-apple-gray-500">Select a conversation</p>
        </div>
      </div>
    </div>
  );
}
