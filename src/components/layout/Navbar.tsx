"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "/listings", label: "Listings" },
  { href: "/searchers", label: "Searchers" },
  { href: "/investors", label: "Investors" },
  { href: "/community", label: "Community" },
  { href: "/learn", label: "Learn" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

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
            <Link
              href="/sign-in"
              className="text-sm text-apple-gray-700 transition-colors hover:text-apple-black"
            >
              Sign in
            </Link>
            <Link
              href="/get-started"
              className="bg-apple-accent text-white rounded-full px-5 py-2 text-sm font-medium transition-colors hover:bg-apple-accent-hover"
            >
              Get started
            </Link>
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
              <Link
                href="/sign-in"
                onClick={() => setMobileOpen(false)}
                className="block text-center rounded-full px-5 py-2.5 text-sm text-apple-gray-700 border border-apple-gray-300 transition-colors hover:bg-apple-gray-100"
              >
                Sign in
              </Link>
              <Link
                href="/get-started"
                onClick={() => setMobileOpen(false)}
                className="block text-center bg-apple-accent text-white rounded-full px-5 py-2.5 text-sm font-medium transition-colors hover:bg-apple-accent-hover"
              >
                Get started
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
