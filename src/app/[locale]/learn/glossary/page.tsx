"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { glossaryTerms } from "../_articles/glossary-data";

const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

export default function GlossaryPage() {
  const [search, setSearch] = useState("");

  const filtered = useMemo(() => {
    if (!search.trim()) return glossaryTerms;
    const q = search.toLowerCase();
    return glossaryTerms.filter(
      (t) =>
        t.term.toLowerCase().includes(q) ||
        t.definition.toLowerCase().includes(q),
    );
  }, [search]);

  // Group by first letter
  const grouped = useMemo(() => {
    const map: Record<string, typeof glossaryTerms> = {};
    for (const term of filtered) {
      const letter = term.term[0].toUpperCase();
      if (!map[letter]) map[letter] = [];
      map[letter].push(term);
    }
    return map;
  }, [filtered]);

  const activeLetters = new Set(Object.keys(grouped));

  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      {/* Breadcrumb */}
      <nav className="text-sm text-apple-gray-500 mb-8">
        <Link href="/learn" className="hover:text-apple-accent">
          Learn
        </Link>
        <span className="mx-2">/</span>
        <span className="text-apple-black">Glossary</span>
      </nav>

      <h1 className="text-4xl font-semibold text-apple-black tracking-tight">
        ETA Glossary
      </h1>
      <p className="text-apple-gray-500 mt-2 max-w-2xl">
        A thorough dictionary of search fund and acquisition terminology
        &mdash; {glossaryTerms.length} terms defined.
      </p>

      {/* Search */}
      <div className="mt-8">
        <input
          type="text"
          placeholder="Search terms..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full max-w-md px-4 py-2.5 border border-apple-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-apple-accent/30 focus:border-apple-accent"
        />
      </div>

      {/* Letter navigation */}
      <div className="mt-6 flex flex-wrap gap-1">
        {alphabet.map((letter) => (
          <a
            key={letter}
            href={activeLetters.has(letter) ? `#letter-${letter}` : undefined}
            className={`w-8 h-8 flex items-center justify-center rounded text-sm font-medium transition ${
              activeLetters.has(letter)
                ? "bg-apple-gray-100 text-apple-black hover:bg-apple-accent hover:text-white"
                : "text-apple-gray-300 cursor-default"
            }`}
          >
            {letter}
          </a>
        ))}
      </div>

      {/* Terms */}
      <div className="mt-10 space-y-10">
        {alphabet.map((letter) => {
          const terms = grouped[letter];
          if (!terms || terms.length === 0) return null;

          return (
            <section key={letter} id={`letter-${letter}`}>
              <h2 className="text-2xl font-semibold text-apple-black border-b border-apple-gray-100 pb-2">
                {letter}
              </h2>
              <dl className="mt-4 space-y-6">
                {terms.map((t) => (
                  <div key={t.term}>
                    <dt className="text-base font-semibold text-apple-black">
                      {t.term}
                    </dt>
                    <dd className="mt-1 text-sm text-apple-gray-700 leading-relaxed">
                      {t.definition}
                      {t.relatedSlug && (
                        <>
                          {" "}
                          <Link
                            href={`/learn/${t.relatedSlug}`}
                            className="text-apple-accent hover:underline"
                          >
                            Learn more &rarr;
                          </Link>
                        </>
                      )}
                    </dd>
                  </div>
                ))}
              </dl>
            </section>
          );
        })}
      </div>

      {filtered.length === 0 && (
        <div className="mt-12 text-center py-12 rounded-xl border border-apple-gray-100 bg-apple-gray-100/50">
          <p className="text-apple-gray-500">
            No terms found matching &ldquo;{search}&rdquo;
          </p>
        </div>
      )}

      {/* Bottom CTA */}
      <div className="mt-16 pt-8 border-t border-apple-gray-100">
        <p className="text-apple-gray-700">
          Ready to start your search?{" "}
          <Link
            href="/auth/signup"
            className="text-apple-accent font-medium hover:underline"
          >
            Join SearchFundMarket &rarr;
          </Link>
        </p>
      </div>
    </div>
  );
}
