import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import {
  directoryCategories,
  getEntriesForCategory,
  getTotalEntryCount,
} from "./_data";
import { safeJsonLd, collectionPageSchema } from "@/lib/json-ld";

const BASE = "https://www.searchfundmarket.com";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const total = getTotalEntryCount();
  return {
    title: `ETA Directory — ${total}+ Investors, Programs, Brokers & Resources | SearchFundMarket`,
    description: `Browse ${total}+ curated directory entries for search fund entrepreneurs — investors, MBA programs, brokers, conferences, podcasts, books, and legal advisors.`,
    alternates: {
      canonical: `${BASE}/${locale}/directory`,
    },
  };
}

export default async function DirectoryHubPage({ params }: Props) {
  const { locale } = await params;
  const total = getTotalEntryCount();

  return (
    <div className="max-w-5xl mx-auto px-6 py-12">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: safeJsonLd(
            collectionPageSchema(
              "ETA Directory",
              `${total}+ curated entries for search fund entrepreneurs`,
              `${BASE}/${locale}/directory`,
            ),
          ),
        }}
      />

      <h1 className="text-4xl font-semibold text-apple-black tracking-tight">
        ETA Directory
      </h1>
      <p className="text-apple-gray-500 mt-2 max-w-2xl">
        {total}+ curated entries across investors, MBA programs, brokers,
        conferences, podcasts, books, and legal advisors &mdash; all verified
        from public sources.
      </p>

      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {directoryCategories.map((cat) => {
          const count = getEntriesForCategory(cat.slug).length;
          return (
            <Link
              key={cat.slug}
              href={`/${locale}/directory/${cat.slug}`}
              className="group block rounded-2xl border border-apple-gray-200 p-6 hover:border-apple-gray-400 transition-colors"
            >
              <h2 className="text-lg font-semibold text-apple-black group-hover:text-apple-accent transition-colors">
                {cat.name}
              </h2>
              <p className="text-sm text-apple-gray-500 mt-1">
                {count} {count === 1 ? "entry" : "entries"}
              </p>
              <p className="text-sm text-apple-gray-700 mt-3 line-clamp-3">
                {cat.description}
              </p>
              <span className="inline-flex items-center gap-1 text-sm text-apple-accent mt-4 group-hover:gap-2 transition-all">
                Browse <ArrowRight className="w-4 h-4" />
              </span>
            </Link>
          );
        })}
      </div>

      <section className="mt-16 border-t border-apple-gray-100 pt-10">
        <h2 className="text-xl font-semibold text-apple-black">
          About this directory
        </h2>
        <div className="mt-4 space-y-4 text-apple-gray-700 text-sm leading-relaxed max-w-3xl">
          <p>
            The SearchFundMarket ETA Directory is a curated collection of
            resources for search fund entrepreneurs, investors, and sellers. Every
            entry is sourced from publicly available information and verified by
            our editorial team.
          </p>
          <p>
            We do not accept paid placements or sponsored listings. If you believe
            an entry contains inaccurate information, or if you would like to
            suggest an addition, please contact us at{" "}
            <a
              href="mailto:directory@searchfundmarket.com"
              className="text-apple-accent hover:underline"
            >
              directory@searchfundmarket.com
            </a>
            .
          </p>
        </div>
      </section>
    </div>
  );
}
