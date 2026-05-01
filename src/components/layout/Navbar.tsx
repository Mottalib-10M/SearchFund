"use client";

import { useState, useRef, useEffect } from "react";
import { Link } from "@/i18n/navigation";
import { usePathname } from "@/i18n/navigation";
import { useSession, signOut } from "next-auth/react";
import { useTranslations } from "next-intl";
import {
  Menu, X, ChevronDown, LogOut, Settings, LayoutDashboard,
  FileText, FolderOpen, Heart, User, Users, MessageSquare, Bell,
} from "lucide-react";
import Logo from "@/components/ui/Logo";


export default function Navbar() {
  const t = useTranslations("nav");
  const [mobileOpen, setMobileOpen] = useState(false);
  const [userDropdownOpen, setUserDropdownOpen] = useState(false);
  const userDropdownRef = useRef<HTMLDivElement>(null);
  const { data: session } = useSession();
  const pathname = usePathname();

  // Learn dropdown sub-links
  const learnSubLinks = [
    { href: "/learn" as const, label: t("learn") },
    { href: "/mba" as const, label: t("mba") },
    { href: "/search-fund-statistics" as const, label: t("statistics") },
    { href: "/tools" as const, label: t("tools") },
    { href: "/contact" as const, label: t("contact") },
  ];

  const dashboardLinks = [
    { href: "/dashboard" as const, label: t("dashboard"), icon: LayoutDashboard },
    { href: "/dashboard/settings/profile" as const, label: t("profile"), icon: User },
    { href: "/dashboard/messages" as const, label: t("messages"), icon: MessageSquare },
    { href: "/dashboard/my-listings" as const, label: t("myListings"), icon: FileText, role: "SELLER" as const },
    { href: "/dashboard/saved" as const, label: t("saved"), icon: Heart },
    { href: "/dashboard/documents" as const, label: t("myDocuments"), icon: FolderOpen, role: "SEARCHER" as const },
    { href: "/dashboard/connections" as const, label: t("connections"), icon: Users },
    { href: "/dashboard/notifications" as const, label: t("notifications"), icon: Bell },
    { href: "/dashboard/settings" as const, label: t("settings"), icon: Settings },
  ];

  // Close dropdowns on outside click
  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (userDropdownRef.current && !userDropdownRef.current.contains(e.target as Node)) {
        setUserDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const user = session?.user;
  const role = (user as Record<string, unknown> | undefined)?.role as string | undefined;
  const userName = user?.name ?? user?.email?.split("@")[0] ?? "User";
  const userInitial = userName.charAt(0).toUpperCase();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-apple-gray-300/50">
      <nav className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex h-14 items-center justify-between">
          {/* Logo */}
          <span className="hidden md:block">
            <Logo size="md" />
          </span>
          <span className="md:hidden">
            <Logo size="sm" />
          </span>

          {/* Center nav links - desktop */}
          <ul className="hidden md:flex items-center gap-8">
            {/* Journey */}
            <li>
              <Link
                href="/the-eta-journey"
                className="text-sm transition-colors inline-flex items-center gap-1.5 text-apple-gray-700 hover:text-apple-black"
              >
                {t("theJourney")}
              </Link>
            </li>

            {/* Learn sub-links (flat) */}
            {learnSubLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-sm transition-colors inline-flex items-center gap-1.5 text-apple-gray-700 hover:text-apple-black"
                >
                  {link.label}
                </Link>
              </li>
            ))}

            {/* Marketplace */}
            <li>
              <Link
                href="/listings"
                className="text-sm transition-colors inline-flex items-center gap-1.5 text-apple-gray-700 hover:text-apple-black"
              >
                {t("marketplace")}
              </Link>
            </li>

            {/* Searchers */}
            <li>
              <Link
                href="/searchers"
                className="text-sm transition-colors inline-flex items-center gap-1.5 text-apple-gray-700 hover:text-apple-black"
              >
                {t("searchers")}
              </Link>
            </li>

            {/* Investors */}
            <li>
              <Link
                href="/investors"
                className="text-sm transition-colors inline-flex items-center gap-1.5 text-apple-gray-700 hover:text-apple-black"
              >
                {t("investors")}
              </Link>
            </li>
          </ul>

          {/* Right actions - desktop */}
          <div className="hidden md:flex items-center gap-4">
            {user ? (
              <div className="relative" ref={userDropdownRef}>
                <button
                  type="button"
                  onClick={() => setUserDropdownOpen(!userDropdownOpen)}
                  className="flex items-center gap-2 text-sm text-apple-gray-700 hover:text-apple-black transition-colors cursor-pointer"
                >
                  {user.image ? (
                    <img
                      src={user.image}
                      alt={userName}
                      className="w-7 h-7 rounded-full object-cover"
                    />
                  ) : (
                    <div className="w-7 h-7 rounded-full bg-apple-accent text-white flex items-center justify-center text-xs font-medium">
                      {userInitial}
                    </div>
                  )}
                  <span className="font-medium">{userName}</span>
                  <ChevronDown size={14} />
                </button>

                {userDropdownOpen && (
                  <div className="absolute right-0 top-full mt-2 w-48 bg-white rounded-xl shadow-lg border border-apple-gray-300/50 py-1 z-50">
                    {dashboardLinks
                      .filter((item) => !item.role || item.role === role)
                      .map((item) => {
                        const Icon = item.icon;
                        return (
                          <Link
                            key={item.href}
                            href={item.href}
                            onClick={() => setUserDropdownOpen(false)}
                            className="flex items-center gap-2.5 px-4 py-2.5 text-sm text-apple-gray-700 hover:bg-apple-gray-100 transition-colors"
                          >
                            <Icon size={16} />
                            {item.label}
                          </Link>
                        );
                      })}
                    <div className="border-t border-apple-gray-100 my-1" />
                    <button
                      type="button"
                      onClick={() => {
                        setUserDropdownOpen(false);
                        signOut({ callbackUrl: "/" });
                      }}
                      className="flex items-center gap-2.5 px-4 py-2.5 text-sm text-apple-gray-700 hover:bg-apple-gray-100 transition-colors w-full text-left cursor-pointer"
                    >
                      <LogOut size={16} />
                      {t("signOut")}
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <>
                <Link
                  href="/auth/signin"
                  className="text-sm text-apple-gray-700 transition-colors hover:text-apple-black"
                >
                  {t("signIn")}
                </Link>
                <Link
                  href="/auth/signup"
                  className="bg-apple-accent text-white rounded-full px-5 py-2 text-sm font-medium transition-colors hover:bg-apple-accent-hover"
                >
                  {t("getStarted")}
                </Link>
              </>
            )}
          </div>

          {/* Mobile hamburger */}
          <button
            type="button"
            className="md:hidden p-2 -mr-2 text-apple-gray-700"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden border-t border-apple-gray-300/50 bg-white">
          <div className="mx-auto max-w-7xl px-6 py-4 space-y-1">
            {user ? (
              <>
                {/* Dashboard nav items */}
                {dashboardLinks
                .filter((item) => !item.role || item.role === role)
                .map((item) => {
                  const Icon = item.icon;
                  const active = item.href === "/dashboard"
                    ? pathname === "/dashboard"
                    : pathname.startsWith(item.href);
                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setMobileOpen(false)}
                      className={`flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm transition-colors ${
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
                <div className="pt-4 mt-4 border-t border-apple-gray-300/50 space-y-1">
                  {/* Site nav links for logged-in users */}
                  <Link
                    href="/the-eta-journey"
                    onClick={() => setMobileOpen(false)}
                    className="flex items-center gap-2 rounded-lg px-3 py-2.5 text-sm text-apple-gray-500 transition-colors hover:bg-apple-gray-100 hover:text-apple-black"
                  >
                    {t("theJourney")}
                  </Link>
                  {learnSubLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={() => setMobileOpen(false)}
                      className="flex items-center gap-2 rounded-lg px-3 py-2.5 text-sm text-apple-gray-500 transition-colors hover:bg-apple-gray-100 hover:text-apple-black"
                    >
                      {link.label}
                    </Link>
                  ))}
                  <Link
                    href="/listings"
                    onClick={() => setMobileOpen(false)}
                    className="flex items-center gap-2 rounded-lg px-3 py-2.5 text-sm text-apple-gray-500 transition-colors hover:bg-apple-gray-100 hover:text-apple-black"
                  >
                    {t("marketplace")}
                  </Link>
                  <Link
                    href="/searchers"
                    onClick={() => setMobileOpen(false)}
                    className="flex items-center gap-2 rounded-lg px-3 py-2.5 text-sm text-apple-gray-500 transition-colors hover:bg-apple-gray-100 hover:text-apple-black"
                  >
                    {t("searchers")}
                  </Link>
                  <Link
                    href="/investors"
                    onClick={() => setMobileOpen(false)}
                    className="flex items-center gap-2 rounded-lg px-3 py-2.5 text-sm text-apple-gray-500 transition-colors hover:bg-apple-gray-100 hover:text-apple-black"
                  >
                    {t("investors")}
                  </Link>
                </div>
                <div className="pt-4 mt-4 border-t border-apple-gray-300/50">
                  <button
                    type="button"
                    onClick={() => {
                      setMobileOpen(false);
                      signOut({ callbackUrl: "/" });
                    }}
                    className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm text-apple-gray-700 hover:bg-apple-gray-100 hover:text-red-500 transition-colors cursor-pointer"
                  >
                    <LogOut size={18} />
                    {t("signOut")}
                  </button>
                </div>
              </>
            ) : (
              <>
                {/* Regular site nav */}
                <Link
                  href="/the-eta-journey"
                  onClick={() => setMobileOpen(false)}
                  className="flex items-center gap-2 rounded-lg px-3 py-2.5 text-sm text-apple-gray-700 transition-colors hover:bg-apple-gray-100 hover:text-apple-black"
                >
                  {t("theJourney")}
                </Link>

                {/* Learn section label */}
                <p className="px-3 pt-3 pb-1 text-xs uppercase tracking-wider text-apple-gray-500 font-semibold">
                  {t("learn")}
                </p>
                {learnSubLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="flex items-center gap-2 rounded-lg px-3 py-2.5 text-sm text-apple-gray-700 transition-colors hover:bg-apple-gray-100 hover:text-apple-black pl-5"
                  >
                    {link.label}
                  </Link>
                ))}

                <Link
                  href="/listings"
                  onClick={() => setMobileOpen(false)}
                  className="flex items-center gap-2 rounded-lg px-3 py-2.5 text-sm text-apple-gray-700 transition-colors hover:bg-apple-gray-100 hover:text-apple-black"
                >
                  {t("marketplace")}
                </Link>
                <Link
                  href="/searchers"
                  onClick={() => setMobileOpen(false)}
                  className="flex items-center gap-2 rounded-lg px-3 py-2.5 text-sm text-apple-gray-700 transition-colors hover:bg-apple-gray-100 hover:text-apple-black"
                >
                  {t("searchers")}
                </Link>
                <Link
                  href="/investors"
                  onClick={() => setMobileOpen(false)}
                  className="flex items-center gap-2 rounded-lg px-3 py-2.5 text-sm text-apple-gray-700 transition-colors hover:bg-apple-gray-100 hover:text-apple-black"
                >
                  {t("investors")}
                </Link>

                <div className="pt-4 mt-4 border-t border-apple-gray-300/50 space-y-3">
                  <Link
                    href="/auth/signin"
                    onClick={() => setMobileOpen(false)}
                    className="block text-center rounded-full px-5 py-2.5 text-sm text-apple-gray-700 border border-apple-gray-300 transition-colors hover:bg-apple-gray-100"
                  >
                    {t("signIn")}
                  </Link>
                  <Link
                    href="/auth/signup"
                    onClick={() => setMobileOpen(false)}
                    className="block text-center bg-apple-accent text-white rounded-full px-5 py-2.5 text-sm font-medium transition-colors hover:bg-apple-accent-hover"
                  >
                    {t("getStarted")}
                  </Link>
                </div>
              </>
            )}
          </div>
        </div>
      )}
    </header>
  );
}
