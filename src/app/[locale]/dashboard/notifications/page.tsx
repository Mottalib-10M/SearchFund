"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Bell } from "lucide-react";
import { timeAgo } from "@/lib/utils";

type Notification = {
  id: string;
  type: string;
  title: string;
  message: string;
  link: string | null;
  read: boolean;
  createdAt: string;
};

export default function NotificationsPage() {
  const [notifications, setNotifications] = useState<Notification[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchNotifications() {
      try {
        const res = await fetch("/api/notifications");
        if (res.ok) {
          const data = await res.json();
          setNotifications(data.notifications);
        }
      } catch {
        // ignore
      } finally {
        setLoading(false);
      }
    }
    fetchNotifications();
  }, []);

  const handleMarkAllRead = async () => {
    try {
      await fetch("/api/notifications", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ markAllRead: true }),
      });
      setNotifications((prev) => prev.map((n) => ({ ...n, read: true })));
    } catch {
      // ignore
    }
  };

  const handleMarkRead = async (id: string) => {
    try {
      await fetch("/api/notifications", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ notificationId: id }),
      });
      setNotifications((prev) =>
        prev.map((n) => (n.id === id ? { ...n, read: true } : n))
      );
    } catch {
      // ignore
    }
  };

  const unreadCount = notifications.filter((n) => !n.read).length;

  return (
    <div>
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-semibold text-apple-black">
            Notifications
          </h1>
          <p className="text-apple-gray-500 mt-1">Stay up to date</p>
        </div>
        {unreadCount > 0 && (
          <button
            type="button"
            onClick={handleMarkAllRead}
            className="text-sm text-apple-accent hover:underline cursor-pointer"
          >
            Mark all as read
          </button>
        )}
      </div>

      {loading ? (
        <p className="mt-8 text-sm text-apple-gray-500">Loading notifications...</p>
      ) : notifications.length === 0 ? (
        <div className="mt-16 flex flex-col items-center text-center">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-apple-gray-100">
            <Bell className="h-5 w-5 text-apple-gray-500" />
          </div>
          <p className="mt-4 text-lg font-semibold text-apple-black">
            No notifications
          </p>
          <p className="mt-1 text-sm text-apple-gray-500">
            You&apos;ll be notified when someone connects or messages you
          </p>
        </div>
      ) : (
        <div className="mt-6 space-y-1">
          {notifications.map((notification) => {
            const content = (
              <div
                className={`flex items-start gap-4 p-4 rounded-xl transition-colors ${
                  notification.read
                    ? "bg-white"
                    : "bg-apple-accent/5 border border-apple-accent/10"
                }`}
              >
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2">
                    <p className={`text-sm ${notification.read ? "text-apple-black" : "font-semibold text-apple-black"}`}>
                      {notification.title}
                    </p>
                    {!notification.read && (
                      <div className="w-2 h-2 rounded-full bg-apple-accent shrink-0" />
                    )}
                  </div>
                  <p className="text-sm text-apple-gray-500 mt-0.5">
                    {notification.message}
                  </p>
                  <span className="text-xs text-apple-gray-500 mt-1 block">
                    {timeAgo(new Date(notification.createdAt))}
                  </span>
                </div>
              </div>
            );

            if (notification.link) {
              return (
                <Link
                  key={notification.id}
                  href={notification.link}
                  onClick={() => !notification.read && handleMarkRead(notification.id)}
                >
                  {content}
                </Link>
              );
            }

            return (
              <div
                key={notification.id}
                onClick={() => !notification.read && handleMarkRead(notification.id)}
                className="cursor-pointer"
              >
                {content}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
