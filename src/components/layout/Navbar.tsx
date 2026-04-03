"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { useSession, signOut } from "next-auth/react";
import { Menu, X, ChevronDown, LogOut, Settings, LayoutDashboard } from "lucide-react";

const navLinks = [
  { href: "/listings", label: "Listings" },
  { href: "/searchers", label: "Searchers" },
  { href: "/investors", label: "Investors" },
  { href: "/community", label: "Community" },
  { href: "/learn", label: "Learn" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const { data: session } = useSession();

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const user = session?.user;
  const userName = user?.name ?? user?.email?.split("@")[0] ?? "User";
  const userInitial = userName.charAt(0).toUpperCase();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-apple-gray-300/50">
      <nav className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex h-14 items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="text-xl font-semibold text-apple-black tracking-tight"
          >
            SearchFundMarket
          </Link>

          {/* Center nav links - desktop */}
          <ul className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-sm text-apple-gray-700 transition-colors hover:text-apple-black"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Right actions - desktop */}
          <div className="hidden md:flex items-center gap-4">
            {user ? (
              <div className="relative" ref={dropdownRef}>
                <button
                  type="button"
                  onClick={() => setDropdownOpen(!dropdownOpen)}
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

                {dropdownOpen && (
                  <div className="absolute right-0 top-full mt-2 w-48 bg-white rounded-xl shadow-lg border border-apple-gray-300/50 py-1 z-50">
                    <Link
                      href="/dashboard"
                      onClick={() => setDropdownOpen(false)}
                      className="flex items-center gap-2.5 px-4 py-2.5 text-sm text-apple-gray-700 hover:bg-apple-gray-100 transition-colors"
                    >
                      <LayoutDashboard size={16} />
                      Dashboard
                    </Link>
                    <Link
                      href="/dashboard/settings"
                      onClick={() => setDropdownOpen(false)}
                      className="flex items-center gap-2.5 px-4 py-2.5 text-sm text-apple-gray-700 hover:bg-apple-gray-100 transition-colors"
                    >
                      <Settings size={16} />
                      Settings
                    </Link>
                    <div className="border-t border-apple-gray-100 my-1" />
                    <button
                      type="button"
                      onClick={() => {
                        setDropdownOpen(false);
                        signOut({ callbackUrl: "/" });
                      }}
                      className="flex items-center gap-2.5 px-4 py-2.5 text-sm text-apple-gray-700 hover:bg-apple-gray-100 transition-colors w-full text-left cursor-pointer"
                    >
                      <LogOut size={16} />
                      Sign out
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
                  Sign in
                </Link>
                <Link
                  href="/auth/signup"
                  className="bg-apple-accent text-white rounded-full px-5 py-2 text-sm font-medium transition-colors hover:bg-apple-accent-hover"
                >
                  Get started
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
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="block rounded-lg px-3 py-2.5 text-sm text-apple-gray-700 transition-colors hover:bg-apple-gray-100 hover:text-apple-black"
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-4 mt-4 border-t border-apple-gray-300/50 space-y-3">
              {user ? (
                <>
                  <Link
                    href="/dashboard"
                    onClick={() => setMobileOpen(false)}
                    className="block text-center rounded-full px-5 py-2.5 text-sm text-apple-gray-700 border border-apple-gray-300 transition-colors hover:bg-apple-gray-100"
                  >
                    Dashboard
                  </Link>
                  <button
                    type="button"
                    onClick={() => {
                      setMobileOpen(false);
                      signOut({ callbackUrl: "/" });
                    }}
                    className="block w-full text-center bg-apple-gray-100 text-apple-gray-700 rounded-full px-5 py-2.5 text-sm font-medium transition-colors hover:bg-apple-gray-300/50 cursor-pointer"
                  >
                    Sign out
                  </button>
                </>
              ) : (
                <>
                  <Link
                    href="/auth/signin"
                    onClick={() => setMobileOpen(false)}
                    className="block text-center rounded-full px-5 py-2.5 text-sm text-apple-gray-700 border border-apple-gray-300 transition-colors hover:bg-apple-gray-100"
                  >
                    Sign in
                  </Link>
                  <Link
                    href="/auth/signup"
                    onClick={() => setMobileOpen(false)}
                    className="block text-center bg-apple-accent text-white rounded-full px-5 py-2.5 text-sm font-medium transition-colors hover:bg-apple-accent-hover"
                  >
                    Get started
                  </Link>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
