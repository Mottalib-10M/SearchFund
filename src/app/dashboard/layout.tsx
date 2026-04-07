"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  FileText,
  FolderOpen,
  Heart,
  User,
  Users,
  MessageSquare,
  Bell,
  Settings,
  LogOut,
} from "lucide-react";
import { useSession, signOut } from "next-auth/react";

const navItems = [
  { href: "/dashboard", label: "Dashboard", icon: LayoutDashboard },
  { href: "/dashboard/settings/profile", label: "Profile", icon: User },
  { href: "/dashboard/messages", label: "Messages", icon: MessageSquare },
  { href: "/dashboard/my-listings", label: "My Listings", icon: FileText, role: "SELLER" as const },
  { href: "/dashboard/saved", label: "Saved", icon: Heart },
  { href: "/dashboard/documents", label: "My Documents", icon: FolderOpen, role: "SEARCHER" as const },
  { href: "/dashboard/connections", label: "Connections", icon: Users },
  { href: "/dashboard/notifications", label: "Notifications", icon: Bell },
  { href: "/dashboard/settings", label: "Settings", icon: Settings },
];

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const { data: session } = useSession();
  const role = (session?.user as Record<string, unknown> | undefined)?.role as string | undefined;
  const [unreadCount, setUnreadCount] = useState(0);

  useEffect(() => {
    async function fetchUnread() {
      try {
        const res = await fetch("/api/notifications?unread=true");
        if (res.ok) {
          const data = await res.json();
          setUnreadCount(data.unreadCount ?? 0);
        }
      } catch {
        // ignore
      }
    }
    fetchUnread();
    const interval = setInterval(fetchUnread, 30000);
    return () => clearInterval(interval);
  }, []);

  function isActive(href: string): boolean {
    if (href === "/dashboard") return pathname === "/dashboard";
    return pathname.startsWith(href);
  }

  return (
    <div className="min-h-screen">
      {/* Sidebar — desktop only */}
      <aside
        className="fixed top-14 left-0 bottom-0 z-50 w-64 bg-white border-r border-apple-gray-100 py-8 px-4 overflow-y-auto hidden md:block"
      >
        <nav className="space-y-1">
          {navItems
            .filter((item) => !item.role || item.role === role)
            .map((item) => {
            const active = isActive(item.href);
            const Icon = item.icon;
            const showBadge = item.href === "/dashboard/notifications" && unreadCount > 0;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`
                  flex items-center gap-3 px-4 py-2.5 rounded-lg text-sm transition-colors
                  ${
                    active
                      ? "bg-apple-gray-100 text-apple-black font-medium"
                      : "text-apple-gray-700 hover:bg-apple-gray-100 hover:text-apple-black"
                  }
                `}
              >
                <Icon size={18} />
                <span className="flex-1">{item.label}</span>
                {showBadge && (
                  <span className="bg-apple-accent text-white text-[10px] font-medium rounded-full min-w-[18px] h-[18px] flex items-center justify-center px-1">
                    {unreadCount > 99 ? "99+" : unreadCount}
                  </span>
                )}
              </Link>
            );
          })}
        </nav>

        <div className="mt-auto pt-6 border-t border-apple-gray-100 mt-8">
          <button
            type="button"
            onClick={() => signOut({ callbackUrl: "/" })}
            className="flex items-center gap-3 px-4 py-2.5 rounded-lg text-sm text-apple-gray-700 hover:bg-apple-gray-100 hover:text-red-500 transition-colors w-full cursor-pointer"
          >
            <LogOut size={18} />
            Sign out
          </button>
        </div>
      </aside>

      {/* Main content */}
      <div className="md:ml-64 pt-8 px-8 pb-8 min-h-[calc(100vh-3.5rem)]">{children}</div>
    </div>
  );
}
