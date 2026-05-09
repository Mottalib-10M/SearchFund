import type { Metadata } from "next";
import { Link } from "@/i18n/navigation";
import {
  ArrowRight,
  Users,
  GraduationCap,
  Handshake,
  Calendar,
  Headphones,
  BookOpen,
  Scale,
  Database,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import {
  directoryCategories,
  getEntriesForCategory,
  getTotalEntryCount,
} from "./_data";
import { safeJsonLd, collectionPageSchema } from "@/lib/json-ld";

const BASE = "https://www.searchfundmarket.com";

const iconMap: Record<string, LucideIcon> = {
  Users,
  GraduationCap,
  Handshake,
  Calendar,
  Headphones,
  BookOpen,
  Scale,
};

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const total = getTotalEntryCount();
  return {
    title: `ETA Directory: ${total}+ Investors, Brokers & More`,
    description: `${total}+ curated resources in one place: investors, MBA programs, brokers, advisors, conferences, podcasts, and books. All vetted for search funds.`,
    alternates: {
      canonical: `${BASE}/${locale}/directory`,
    },
  };
}

export default async function DirectoryHubPage({ params }: Props) {
  const { locale } = await params;
  const total = getTotalEntryCount();

  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
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
        conferences, podcasts, books, and legal advisors — all verified
        from public sources.
      </p>

      {/* Category cards — 2 columns like Tools page */}
      <div className="mt-10 grid gap-6 sm:grid-cols-2">
        {directoryCategories.map((cat) => {
          const count = getEntriesForCategory(cat.slug).length;
          const Icon = iconMap[cat.icon] ?? Database;
          return (
            <Link
              key={cat.slug}
              href={`/directory/${cat.slug}`}
              className="group block rounded-2xl border border-apple-gray-200 p-6 hover:border-apple-accent/30 hover:bg-apple-accent/[0.02] transition-all"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="flex items-center justify-center w-9 h-9 rounded-lg bg-apple-accent/10">
                  <Icon className="w-[18px] h-[18px] text-apple-accent" />
                </div>
                <span className="text-xs text-apple-gray-500 font-medium">
                  {count} {count === 1 ? "entry" : "entries"}
                </span>
              </div>
              <h2 className="text-lg font-semibold text-apple-black group-hover:text-apple-accent transition-colors">
                {cat.name}
              </h2>
              <p className="text-sm text-apple-gray-700 mt-2 line-clamp-2">
                {cat.description}
              </p>
              <span className="inline-flex items-center gap-1 text-sm text-apple-accent mt-4 group-hover:gap-2 transition-all">
                Browse <ArrowRight className="w-4 h-4" />
              </span>
            </Link>
          );
        })}
      </div>

      {/* About — compact */}
      <section className="mt-16 border-t border-apple-gray-100 pt-10">
        <h2 className="text-sm font-semibold text-apple-black">
          About this directory
        </h2>
        <p className="mt-2 text-sm text-apple-gray-600 leading-relaxed max-w-3xl">
          Every entry is sourced from publicly available information and verified
          by our editorial team. We do not accept paid placements or sponsored
          listings.{" "}
          <a
            href="/contact"
            className="text-apple-accent hover:underline"
          >
            Suggest an addition or report an inaccuracy
          </a>
          .
        </p>
      </section>
    </div>
  );
}
