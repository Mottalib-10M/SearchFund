"use client";

import { useEffect, useRef } from "react";
import { timeAgo } from "@/lib/utils";

type Message = {
  id: string;
  content: string;
  senderId: string;
  createdAt: string;
};

export default function MessageThread({
  messages,
  currentUserId,
}: {
  messages: Message[];
  currentUserId: string;
}) {
  const endRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages.length]);

  if (messages.length === 0) {
    return (
      <div className="flex-1 flex items-center justify-center">
        <p className="text-sm text-apple-gray-500">
          No messages yet. Send the first one!
        </p>
      </div>
    );
  }

  return (
    <div className="flex-1 overflow-y-auto p-4 space-y-3">
      {messages.map((msg) => {
        const isMine = msg.senderId === currentUserId;
        return (
          <div
            key={msg.id}
            className={`flex ${isMine ? "justify-end" : "justify-start"}`}
          >
            <div
              className={`max-w-[70%] rounded-2xl px-4 py-2.5 ${
                isMine
                  ? "bg-apple-accent text-white"
                  : "bg-apple-gray-100 text-apple-black"
              }`}
            >
              <p className="text-sm whitespace-pre-line">{msg.content}</p>
              <p
                className={`text-[10px] mt-1 ${
                  isMine ? "text-white/70" : "text-apple-gray-500"
                }`}
              >
                {timeAgo(new Date(msg.createdAt))}
              </p>
            </div>
          </div>
        );
      })}
      <div ref={endRef} />
    </div>
  );
}
