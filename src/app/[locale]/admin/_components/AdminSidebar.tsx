"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  Users,
  FileText,
  MessageSquare,
  Link2,
  HelpCircle,
  MessageCircle,
  Target,
  LogOut,
} from "lucide-react";

const navItems = [
  { href: "/admin", label: "Overview", icon: LayoutDashboard },
  { href: "/admin/users", label: "Users", icon: Users },
  { href: "/admin/listings", label: "Listings", icon: FileText },
  { href: "/admin/messages", label: "Messages", icon: MessageSquare },
  { href: "/admin/connections", label: "Connections", icon: Link2 },
  { href: "/admin/inquiries", label: "Inquiries", icon: HelpCircle },
  { href: "/admin/forum", label: "Forum", icon: MessageCircle },
  { href: "/admin/prospection", label: "Prospection", icon: Target },
];

export default function AdminSidebar() {
  const pathname = usePathname();
  // Strip locale prefix (e.g. /en/admin/users → /admin/users)
  const strippedPath = pathname.replace(/^\/[a-z]{2}(?=\/)/, "");

  function isActive(href: string): boolean {
    if (href === "/admin") return strippedPath === "/admin";
    return strippedPath.startsWith(href);
  }

  async function handleLogout() {
    await fetch("/api/admin/logout", { method: "POST" });
    window.location.href = "/admin/login";
  }

  return (
    <aside className="fixed top-14 left-0 bottom-0 z-50 w-60 bg-white border-r border-apple-gray-100 py-8 px-4 overflow-y-auto hidden md:block">
      <p className="text-xs font-semibold uppercase text-apple-gray-500 px-4 mb-4 tracking-wider">
        Admin
      </p>
      <nav className="space-y-1">
        {navItems.map((item) => {
          const active = isActive(item.href);
          const Icon = item.icon;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center gap-3 px-4 py-2.5 rounded-lg text-sm transition-colors ${
                active
                  ? "bg-apple-gray-100 text-apple-black font-medium"
                  : "text-apple-gray-700 hover:bg-apple-gray-100 hover:text-apple-black"
              }`}
            >
              <Icon size={18} />
              {item.label}
            </Link>
          );
        })}
      </nav>

      <div className="mt-auto pt-6 border-t border-apple-gray-100 mt-8">
        <button
          type="button"
          onClick={handleLogout}
          className="flex items-center gap-3 px-4 py-2.5 rounded-lg text-sm text-apple-gray-700 hover:bg-apple-gray-100 hover:text-red-500 transition-colors w-full cursor-pointer"
        >
          <LogOut size={18} />
          Logout
        </button>
      </div>
    </aside>
  );
}
