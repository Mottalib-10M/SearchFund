import type { Metadata } from "next";
import { Bell } from "lucide-react";

export const metadata: Metadata = {
  title: "Notifications — SearchFundMarket",
  description: "Your notifications on SearchFundMarket.",
};

export default function NotificationsPage() {
  return (
    <div>
      <h1 className="text-2xl font-semibold text-apple-black">
        Notifications
      </h1>
      <p className="text-apple-gray-500 mt-1">Stay up to date</p>

      {/* Empty state */}
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
    </div>
  );
}
