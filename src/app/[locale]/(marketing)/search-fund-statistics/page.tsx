import type { Metadata } from "next";
import { safeJsonLd, datasetSchema } from "@/lib/json-ld";
import {
  SOURCES,
  HEADLINE_STATS,
  RETURN_DISTRIBUTION,
  ASSET_COMPARISON,
  DEAL_METRICS,
  GROWTH_TREND,
  TOP_COUNTRIES,
  SECTOR_DISTRIBUTION,
  SEARCHER_BACKGROUNDS,
  FAILURE_CAUSES,
} from "./_data/market-data";

const BASE = "https://www.searchfundmarket.com";

type Props = { params: Promise<{ locale: string }> };

// ---------------------------------------------------------------------------
// Metadata
// ---------------------------------------------------------------------------

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  return {
    title:
      "Search Fund Statistics: 35% IRR, 681 Funds [2024] | SFM",
    description:
      "681 funds. 35.1% IRR. 4.5x MOIC. Not opinions, verified data from Stanford GSB, IESE, and Yale SOM. The only search fund stats page you need to bookmark.",
    openGraph: {
      title: "Search Fund Statistics: 35% IRR, 681 Funds [2024] | SFM",
      description:
        "681 funds. 35.1% IRR. 4.5x MOIC. Not opinions, verified data from Stanford GSB, IESE, and Yale SOM. The only search fund stats page you need to bookmark.",
      type: "website",
    },
    alternates: {
      canonical: `${BASE}/${locale}/search-fund-statistics`,
      languages: {
        en: `${BASE}/en/search-fund-statistics`,
        "x-default": `${BASE}/en/search-fund-statistics`,
      },
    },
  };
}

// ---------------------------------------------------------------------------
// Sub-components
// ---------------------------------------------------------------------------

function SourceBadge({ sourceId }: { sourceId: string }) {
  const source = SOURCES.find((s) => s.id === sourceId);
  if (!source) return null;
  return (
    <span className="inline-block rounded-full bg-zinc-100 px-2 py-0.5 text-[11px] font-medium text-zinc-500 dark:bg-zinc-800 dark:text-zinc-400">
      {source.name} {source.year}
    </span>
  );
}

function StatCard({
  value,
  label,
  sublabel,
  sourceId,
}: {
  value: string;
  label: string;
  sublabel: string;
  sourceId: string;
}) {
  return (
    <div className="rounded-2xl border border-zinc-200 bg-white p-5 dark:border-zinc-800 dark:bg-zinc-900">
      <p className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-white sm:text-4xl">
        {value}
      </p>
      <p className="mt-1 text-sm font-semibold text-zinc-700 dark:text-zinc-300">
        {label}
      </p>
      <p className="mt-0.5 text-xs text-zinc-500 dark:text-zinc-400">
        {sublabel}
      </p>
      <div className="mt-3">
        <SourceBadge sourceId={sourceId} />
      </div>
    </div>
  );
}

function HorizontalBar({
  label,
  value,
  maxValue,
  color,
  suffix = "%",
}: {
  label: string;
  value: number;
  maxValue: number;
  color: string;
  suffix?: string;
}) {
  const widthPct = Math.round((value / maxValue) * 100);
  return (
    <div className="flex items-center gap-3">
      <span className="w-28 shrink-0 text-right text-sm text-zinc-600 dark:text-zinc-400 sm:w-36">
        {label}
      </span>
      <div className="relative h-7 flex-1 overflow-hidden rounded-md bg-zinc-100 dark:bg-zinc-800">
        <div
          className="absolute inset-y-0 left-0 rounded-md"
          style={{ width: `${widthPct}%`, backgroundColor: color }}
        />
        <span className="relative z-10 flex h-full items-center px-2 text-xs font-semibold text-zinc-800 dark:text-zinc-200">
          {value}{suffix}
        </span>
      </div>
    </div>
  );
}

// ---------------------------------------------------------------------------
// Page
// ---------------------------------------------------------------------------

export default async function DataPage({ params }: Props) {
  const { locale } = await params;

  const maxReturn = Math.max(...RETURN_DISTRIBUTION.map((r) => r.pct));
  const maxGrowth = Math.max(
    ...GROWTH_TREND.map((g) => g.us + g.intl)
  );
  const maxCountry = Math.max(...TOP_COUNTRIES.map((c) => c.funds));
  const maxSector = Math.max(...SECTOR_DISTRIBUTION.map((s) => s.pct));
  const maxBackground = Math.max(
    ...SEARCHER_BACKGROUNDS.map((b) => b.pct)
  );
  const maxFailure = Math.max(...FAILURE_CAUSES.map((f) => f.pct));

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: safeJsonLd(datasetSchema(locale)),
        }}
      />

      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24">
        {/* ============================================================= */}
        {/* 1. Hero                                                       */}
        {/* ============================================================= */}
        <header className="text-center">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-900 dark:text-white sm:text-5xl">
            Search Fund Industry Data
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-zinc-600 dark:text-zinc-400">
            Verified statistics on returns, deal flow, and market growth.
            All figures sourced from peer-reviewed academic studies.
          </p>
          <p className="mt-3 text-sm text-zinc-500 dark:text-zinc-500">
            Sources:{" "}
            {SOURCES.map((s, i) => (
              <span key={s.id}>
                <a
                  href={`#sources`}
                  className="underline decoration-zinc-300 underline-offset-2 hover:decoration-zinc-500 dark:decoration-zinc-600 dark:hover:decoration-zinc-400"
                >
                  {s.name} ({s.year})
                </a>
                {i < SOURCES.length - 1 && " · "}
              </span>
            ))}
          </p>
        </header>

        {/* ============================================================= */}
        {/* 2. Headline Stats                                             */}
        {/* ============================================================= */}
        <section className="mt-16">
          <h2 className="text-xl font-semibold text-zinc-900 dark:text-white">
            Key figures
          </h2>
          <div className="mt-6 grid grid-cols-2 gap-4 lg:grid-cols-4">
            {HEADLINE_STATS.map((stat) => (
              <StatCard key={stat.label} {...stat} />
            ))}
          </div>
        </section>

        {/* ============================================================= */}
        {/* 3. Return Distribution                                        */}
        {/* ============================================================= */}
        <section className="mt-20">
          <h2 className="text-xl font-semibold text-zinc-900 dark:text-white">
            Return distribution
          </h2>
          <p className="mt-2 text-sm text-zinc-500 dark:text-zinc-400">
            Gross returns to investors across all completed US search fund
            acquisitions.{" "}
            <SourceBadge sourceId="stanford" />
          </p>

          <div className="mt-6 space-y-2">
            {RETURN_DISTRIBUTION.map((bucket) => (
              <HorizontalBar
                key={bucket.label}
                label={bucket.label}
                value={bucket.pct}
                maxValue={maxReturn}
                color={bucket.color}
              />
            ))}
          </div>

          {/* Asset comparison table */}
          <div className="mt-10">
            <h3 className="text-base font-semibold text-zinc-900 dark:text-white">
              How search funds compare
            </h3>
            <p className="mt-1 text-xs text-zinc-500 dark:text-zinc-400">
              Gross IRR and MOIC across asset classes. Search fund returns
              are pre-fee (Stanford); net MOIC is 2.0-3.0x per Yale SOM.
            </p>
            <div className="mt-4 overflow-x-auto">
              <table className="w-full text-left text-sm">
                <thead>
                  <tr className="border-b border-zinc-200 dark:border-zinc-700">
                    <th className="pb-2 pr-4 font-semibold text-zinc-700 dark:text-zinc-300">
                      Asset class
                    </th>
                    <th className="pb-2 pr-4 text-right font-semibold text-zinc-700 dark:text-zinc-300">
                      IRR
                    </th>
                    <th className="pb-2 text-right font-semibold text-zinc-700 dark:text-zinc-300">
                      MOIC
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {ASSET_COMPARISON.map((row) => (
                    <tr
                      key={row.asset}
                      className={`border-b border-zinc-100 dark:border-zinc-800 ${
                        row.highlight
                          ? "bg-green-50 font-semibold dark:bg-green-950/30"
                          : ""
                      }`}
                    >
                      <td className="py-2 pr-4 text-zinc-900 dark:text-zinc-100">
                        {row.asset}
                      </td>
                      <td className="py-2 pr-4 text-right text-zinc-700 dark:text-zinc-300">
                        {row.irr}
                      </td>
                      <td className="py-2 text-right text-zinc-700 dark:text-zinc-300">
                        {row.moic}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* ============================================================= */}
        {/* 4. Deal Metrics                                               */}
        {/* ============================================================= */}
        <section className="mt-20">
          <h2 className="text-xl font-semibold text-zinc-900 dark:text-white">
            Deal metrics
          </h2>
          <p className="mt-2 text-sm text-zinc-500 dark:text-zinc-400">
            Median acquisition characteristics for completed US search fund
            deals.{" "}
            <SourceBadge sourceId="stanford" />
          </p>
          <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
            {DEAL_METRICS.map((m) => (
              <div
                key={m.label}
                className="rounded-xl border border-zinc-200 bg-white p-4 dark:border-zinc-800 dark:bg-zinc-900"
              >
                <p className="text-2xl font-bold text-zinc-900 dark:text-white">
                  {m.value}
                </p>
                <p className="mt-1 text-sm font-medium text-zinc-700 dark:text-zinc-300">
                  {m.label}
                </p>
                <p className="text-xs text-zinc-500 dark:text-zinc-400">
                  {m.detail}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* ============================================================= */}
        {/* 5. Growth & Geography                                         */}
        {/* ============================================================= */}
        <section className="mt-20">
          <h2 className="text-xl font-semibold text-zinc-900 dark:text-white">
            Growth & geography
          </h2>
          <div className="mt-6 grid gap-10 lg:grid-cols-2">
            {/* Yearly growth */}
            <div>
              <h3 className="text-base font-semibold text-zinc-900 dark:text-white">
                New funds per year
              </h3>
              <p className="mt-1 text-xs text-zinc-500 dark:text-zinc-400">
                US and international traditional search funds.{" "}
                <SourceBadge sourceId="stanford" />{" "}
                <SourceBadge sourceId="iese" />
              </p>
              <div className="mt-4 space-y-2">
                {GROWTH_TREND.map((g) => (
                  <div key={g.year} className="flex items-center gap-3">
                    <span className="w-10 shrink-0 text-right text-sm font-medium text-zinc-600 dark:text-zinc-400">
                      {g.year}
                    </span>
                    <div className="relative h-7 flex-1 overflow-hidden rounded-md bg-zinc-100 dark:bg-zinc-800">
                      {/* US portion */}
                      <div
                        className="absolute inset-y-0 left-0 rounded-l-md bg-blue-500"
                        style={{
                          width: `${Math.round((g.us / maxGrowth) * 100)}%`,
                        }}
                      />
                      {/* Intl portion stacked on top */}
                      <div
                        className="absolute inset-y-0 rounded-r-md bg-purple-500"
                        style={{
                          left: `${Math.round((g.us / maxGrowth) * 100)}%`,
                          width: `${Math.round((g.intl / maxGrowth) * 100)}%`,
                        }}
                      />
                      <span className="relative z-10 flex h-full items-center px-2 text-xs font-semibold text-zinc-800 dark:text-zinc-200">
                        {g.us + g.intl}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-3 flex gap-4 text-xs text-zinc-500 dark:text-zinc-400">
                <span className="flex items-center gap-1.5">
                  <span className="inline-block h-2.5 w-2.5 rounded-sm bg-blue-500" />
                  US
                </span>
                <span className="flex items-center gap-1.5">
                  <span className="inline-block h-2.5 w-2.5 rounded-sm bg-purple-500" />
                  International
                </span>
              </div>
            </div>

            {/* Top international markets */}
            <div>
              <h3 className="text-base font-semibold text-zinc-900 dark:text-white">
                Top international markets
              </h3>
              <p className="mt-1 text-xs text-zinc-500 dark:text-zinc-400">
                Cumulative search funds raised by country.{" "}
                <SourceBadge sourceId="iese" />
              </p>
              <div className="mt-4 space-y-2">
                {TOP_COUNTRIES.map((c) => (
                  <HorizontalBar
                    key={c.country}
                    label={c.country}
                    value={c.funds}
                    maxValue={maxCountry}
                    color="#8b5cf6"
                    suffix=""
                  />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ============================================================= */}
        {/* 6. Industry & Profiles                                        */}
        {/* ============================================================= */}
        <section className="mt-20">
          <h2 className="text-xl font-semibold text-zinc-900 dark:text-white">
            Industries & searcher profiles
          </h2>
          <div className="mt-6 grid gap-10 lg:grid-cols-2">
            {/* Sectors */}
            <div>
              <h3 className="text-base font-semibold text-zinc-900 dark:text-white">
                Sectors acquired
              </h3>
              <p className="mt-1 text-xs text-zinc-500 dark:text-zinc-400">
                Share of completed acquisitions by industry.{" "}
                <SourceBadge sourceId="stanford" />
              </p>
              <div className="mt-4 space-y-2">
                {SECTOR_DISTRIBUTION.map((s) => (
                  <HorizontalBar
                    key={s.sector}
                    label={s.sector}
                    value={s.pct}
                    maxValue={maxSector}
                    color="#3b82f6"
                  />
                ))}
              </div>
            </div>

            {/* Backgrounds */}
            <div>
              <h3 className="text-base font-semibold text-zinc-900 dark:text-white">
                Searcher backgrounds
              </h3>
              <p className="mt-1 text-xs text-zinc-500 dark:text-zinc-400">
                Professional background before launching a search fund.{" "}
                <SourceBadge sourceId="stanford" />
              </p>
              <div className="mt-4 space-y-2">
                {SEARCHER_BACKGROUNDS.map((b) => (
                  <HorizontalBar
                    key={b.field}
                    label={b.field}
                    value={b.pct}
                    maxValue={maxBackground}
                    color="#0ea5e9"
                  />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ============================================================= */}
        {/* 7. Failure Analysis                                           */}
        {/* ============================================================= */}
        <section className="mt-20">
          <h2 className="text-xl font-semibold text-zinc-900 dark:text-white">
            Why some deals fail
          </h2>
          <p className="mt-2 text-sm text-zinc-500 dark:text-zinc-400">
            Top causes of partial or total loss for search fund acquisitions.{" "}
            <SourceBadge sourceId="stanford" />
          </p>
          <div className="mt-6 space-y-2">
            {FAILURE_CAUSES.map((f) => (
              <HorizontalBar
                key={f.cause}
                label={f.cause}
                value={f.pct}
                maxValue={maxFailure}
                color="#f97316"
              />
            ))}
          </div>
        </section>

        {/* ============================================================= */}
        {/* 8. Sources                                                    */}
        {/* ============================================================= */}
        <section id="sources" className="mt-20 border-t border-zinc-200 pt-10 dark:border-zinc-800">
          <h2 className="text-xl font-semibold text-zinc-900 dark:text-white">
            Sources
          </h2>
          <ul className="mt-4 space-y-3">
            {SOURCES.map((s) => (
              <li key={s.id} className="text-sm text-zinc-600 dark:text-zinc-400">
                <strong className="text-zinc-900 dark:text-zinc-200">
                  {s.name}
                </strong>{" "}
                ({s.year}).{" "}
                <em>{s.title}</em>.{" "}
                <a
                  href={s.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 underline underline-offset-2 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300"
                >
                  {s.url.replace("https://", "").split("/").slice(0, 2).join("/")}
                </a>
              </li>
            ))}
          </ul>
          <p className="mt-6 text-xs text-zinc-400 dark:text-zinc-500">
            All data reflects published findings as of each study&apos;s
            publication date. Search fund returns are inherently volatile
            and past performance does not guarantee future results.
          </p>
        </section>
      </div>
    </>
  );
}
