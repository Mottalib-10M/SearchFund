"use client";

import { useEffect, useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { Search } from "lucide-react";

const quickLinks = [
  { label: "B2B Services", href: "/listings?sector=B2B+Services" },
  { label: "Healthcare", href: "/listings?sector=Healthcare" },
  { label: "Manufacturing", href: "/listings?sector=Manufacturing" },
  { label: "France", href: "/listings?country=FR" },
  { label: "Germany", href: "/listings?country=DE" },
  { label: "UK", href: "/listings?country=GB" },
];

export default function AnimatedHero() {
  const [index, setIndex] = useState(0);
  const words = useMemo(() => ["Search Fund", "Investor", "Acquisition"], []);

  useEffect(() => {
    const id = setTimeout(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, 2500);
    return () => clearTimeout(id);
  }, [index, words]);

  return (
    <section className="py-12 md:py-32 text-center max-w-4xl mx-auto px-6">
      <h1 className="text-5xl md:text-6xl font-semibold text-apple-black tracking-tight">
        <span>Find your&nbsp;</span>
        <span className="relative inline-flex w-full justify-center overflow-hidden h-[1.2em] align-bottom">
          <AnimatePresence mode="popLayout">
            <motion.span
              key={words[index]}
              className="absolute text-apple-accent"
              initial={{ y: 40, opacity: 0, filter: "blur(4px)" }}
              animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
              exit={{ y: -40, opacity: 0, filter: "blur(4px)" }}
              transition={{ type: "spring", stiffness: 100, damping: 18 }}
            >
              {words[index]}
            </motion.span>
          </AnimatePresence>
        </span>
      </h1>

      <p className="text-xl text-apple-gray-700 mt-6 max-w-2xl mx-auto">
        The marketplace connecting search fund entrepreneurs, investors, and
        business sellers worldwide.
      </p>

      {/* Search bar */}
      <form action="/listings" className="mt-10 max-w-xl mx-auto relative">
        <div className="relative">
          <Search
            size={20}
            strokeWidth={1.5}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-apple-gray-500"
          />
          <input
            type="text"
            name="search"
            placeholder="Search by sector, country, or keyword..."
            className="bg-apple-gray-100 rounded-full pl-12 pr-40 py-4 text-base w-full text-apple-black placeholder:text-apple-gray-500 focus:ring-2 focus:ring-apple-accent/20 transition-shadow"
          />
          <button
            type="submit"
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-apple-accent text-white rounded-full px-6 py-2.5 text-sm font-medium transition-colors hover:bg-apple-accent-hover cursor-pointer"
          >
            Explore listings &rarr;
          </button>
        </div>
      </form>

      {/* Quick links */}
      <div className="mt-6 flex gap-3 justify-center flex-wrap">
        {quickLinks.map((link) => (
          <Link
            key={link.label}
            href={link.href}
            className="text-sm text-apple-accent hover:underline"
          >
            {link.label}
          </Link>
        ))}
      </div>
    </section>
  );
}
