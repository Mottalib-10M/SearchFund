"use client";

import { useEffect, useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import SearchAutocomplete from "@/components/home/SearchAutocomplete";

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

      {/* Search bar with autocomplete */}
      <SearchAutocomplete />

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
