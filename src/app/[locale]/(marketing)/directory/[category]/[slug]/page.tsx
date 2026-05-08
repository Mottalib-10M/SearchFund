import type { Metadata } from "next";
import { Link } from "@/i18n/navigation";
import { notFound } from "next/navigation";
import { ArrowLeft, ExternalLink, Info } from "lucide-react";
import {
  getAllCategorySlugs,
  getCategoryBySlug,
  getEntriesForCategory,
  getEntryBySlug,
  getEntryName,
  getEntrySlug,
} from "../../_data";
import type { DirectoryEntry } from "../../_data";
import { safeJsonLd } from "@/lib/json-ld";

const BASE = "https://www.searchfundmarket.com";

type Props = { params: Promise<{ locale: string; category: string; slug: string }> };

export function generateStaticParams() {
  const results: { category: string; slug: string }[] = [];
  for (const catSlug of getAllCategorySlugs()) {
    if (catSlug === "mba-programs") continue;
    for (const entry of getEntriesForCategory(catSlug)) {
      results.push({ category: catSlug, slug: getEntrySlug(entry) });
    }
  }
  return results;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, category, slug } = await params;
  const entry = getEntryBySlug(category, slug);
  if (!entry) return {};
  const name = getEntryName(entry);
  return {
    title: `${name} — ETA Directory Profile`,
    description: entry.description.slice(0, 160),
    alternates: {
      canonical: `${BASE}/${locale}/directory/${category}/${slug}`,
    },
  };
}

// ---------------------------------------------------------------------------
// Schema.org builders per entry kind
// ---------------------------------------------------------------------------

function buildSchemaOrg(entry: DirectoryEntry, url: string) {
  switch (entry.kind) {
    case "investor":
      return {
        "@context": "https://schema.org",
        "@type": "Organization",
        name: entry.name,
        url: entry.website,
        description: entry.description,
        address: { "@type": "PostalAddress", addressLocality: entry.headquarters },
      };
    case "mba-program":
      return {
        "@context": "https://schema.org",
        "@type": "EducationalOrganization",
        name: entry.schoolName,
        url: entry.website,
        description: entry.description,
        address: {
          "@type": "PostalAddress",
          addressLocality: entry.city,
          addressCountry: entry.country,
        },
      };
    case "broker":
      return {
        "@context": "https://schema.org",
        "@type": "Organization",
        name: entry.name,
        url: entry.website,
        description: entry.description,
        address: { "@type": "PostalAddress", addressLocality: entry.headquarters },
      };
    case "conference":
      return {
        "@context": "https://schema.org",
        "@type": "Event",
        name: entry.name,
        description: entry.description,
        location: {
          "@type": "Place",
          name: entry.location,
          address: { "@type": "PostalAddress", addressCountry: entry.country },
        },
        eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
        url: entry.website,
      };
    case "podcast":
      return {
        "@context": "https://schema.org",
        "@type": "PodcastSeries",
        name: entry.name,
        description: entry.description,
        url: entry.platformUrl,
        inLanguage: entry.language,
      };
    case "book":
      return {
        "@context": "https://schema.org",
        "@type": "Book",
        name: entry.title,
        author: { "@type": "Person", name: entry.author },
        datePublished: String(entry.year),
        description: entry.description,
        ...(entry.isbn ? { isbn: entry.isbn } : {}),
      };
    case "advisor":
      return {
        "@context": "https://schema.org",
        "@type": "ProfessionalService",
        name: entry.name,
        url: entry.website,
        description: entry.description,
        address: { "@type": "PostalAddress", addressLocality: entry.headquarters },
      };
  }
}

// ---------------------------------------------------------------------------
// Detail renderers per kind
// ---------------------------------------------------------------------------

function InvestorDetail({ entry }: { entry: Extract<DirectoryEntry, { kind: "investor" }> }) {
  return (
    <>
      <dl className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4 text-sm">
        <div>
          <dt className="text-apple-gray-500">Type</dt>
          <dd className="text-apple-black font-medium capitalize">{entry.type.replace("-", " ")}</dd>
        </div>
        <div>
          <dt className="text-apple-gray-500">Headquarters</dt>
          <dd className="text-apple-black font-medium">{entry.headquarters}</dd>
        </div>
        <div>
          <dt className="text-apple-gray-500">Geography Focus</dt>
          <dd className="text-apple-black font-medium">{entry.geographyFocus.join(", ")}</dd>
        </div>
        {entry.typicalTicketSize && (
          <div>
            <dt className="text-apple-gray-500">Typical Ticket Size</dt>
            <dd className="text-apple-black font-medium">{entry.typicalTicketSize}</dd>
          </div>
        )}
        {entry.sectorFocus && entry.sectorFocus.length > 0 && (
          <div>
            <dt className="text-apple-gray-500">Sector Focus</dt>
            <dd className="text-apple-black font-medium">{entry.sectorFocus.join(", ")}</dd>
          </div>
        )}
        {entry.yearFounded && (
          <div>
            <dt className="text-apple-gray-500">Year Founded</dt>
            <dd className="text-apple-black font-medium">{entry.yearFounded}</dd>
          </div>
        )}
      </dl>
      {entry.investmentThesis && (
        <div className="mt-5 pt-5 border-t border-apple-gray-100">
          <h3 className="text-sm font-semibold text-apple-black">Investment Thesis</h3>
          <p className="mt-1 text-sm text-apple-gray-700 leading-relaxed">{entry.investmentThesis}</p>
        </div>
      )}
    </>
  );
}

function MBAProgramDetail({ entry }: { entry: Extract<DirectoryEntry, { kind: "mba-program" }> }) {
  return (
    <dl className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4 text-sm">
      <div>
        <dt className="text-apple-gray-500">Program</dt>
        <dd className="text-apple-black font-medium">{entry.programName}</dd>
      </div>
      <div>
        <dt className="text-apple-gray-500">Location</dt>
        <dd className="text-apple-black font-medium">{entry.city}, {entry.country}</dd>
      </div>
      <div>
        <dt className="text-apple-gray-500">ETA Club</dt>
        <dd className="text-apple-black font-medium">{entry.etaClub ? "Yes" : "No"}</dd>
      </div>
      {entry.ranking && (
        <div>
          <dt className="text-apple-gray-500">Ranking</dt>
          <dd className="text-apple-black font-medium">{entry.ranking}</dd>
        </div>
      )}
      {entry.keyProfessors && entry.keyProfessors.length > 0 && (
        <div className="sm:col-span-2">
          <dt className="text-apple-gray-500">Key Professors</dt>
          <dd className="text-apple-black font-medium">{entry.keyProfessors.join(", ")}</dd>
        </div>
      )}
    </dl>
  );
}

function BrokerDetail({ entry }: { entry: Extract<DirectoryEntry, { kind: "broker" }> }) {
  return (
    <dl className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4 text-sm">
      <div>
        <dt className="text-apple-gray-500">Type</dt>
        <dd className="text-apple-black font-medium capitalize">{entry.type}</dd>
      </div>
      <div>
        <dt className="text-apple-gray-500">Country</dt>
        <dd className="text-apple-black font-medium">{entry.country}</dd>
      </div>
      <div>
        <dt className="text-apple-gray-500">Deal Size Range</dt>
        <dd className="text-apple-black font-medium">{entry.dealSizeRange}</dd>
      </div>
      <div>
        <dt className="text-apple-gray-500">Headquarters</dt>
        <dd className="text-apple-black font-medium">{entry.headquarters}</dd>
      </div>
      <div className="sm:col-span-2">
        <dt className="text-apple-gray-500">Specialization</dt>
        <dd className="text-apple-black font-medium">{entry.specialization.join(", ")}</dd>
      </div>
    </dl>
  );
}

function ConferenceDetail({ entry }: { entry: Extract<DirectoryEntry, { kind: "conference" }> }) {
  return (
    <dl className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4 text-sm">
      <div>
        <dt className="text-apple-gray-500">Location</dt>
        <dd className="text-apple-black font-medium">{entry.location}</dd>
      </div>
      <div>
        <dt className="text-apple-gray-500">Frequency</dt>
        <dd className="text-apple-black font-medium capitalize">{entry.frequency}</dd>
      </div>
      <div>
        <dt className="text-apple-gray-500">Typical Date</dt>
        <dd className="text-apple-black font-medium">{entry.typicalDate}</dd>
      </div>
      <div>
        <dt className="text-apple-gray-500">Audience</dt>
        <dd className="text-apple-black font-medium capitalize">{entry.targetAudience.join(", ")}</dd>
      </div>
      {entry.ticketPrice && (
        <div>
          <dt className="text-apple-gray-500">Ticket Price</dt>
          <dd className="text-apple-black font-medium">{entry.ticketPrice}</dd>
        </div>
      )}
    </dl>
  );
}

function PodcastDetail({ entry }: { entry: Extract<DirectoryEntry, { kind: "podcast" }> }) {
  return (
    <dl className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4 text-sm">
      <div>
        <dt className="text-apple-gray-500">Host</dt>
        <dd className="text-apple-black font-medium">{entry.host}</dd>
      </div>
      <div>
        <dt className="text-apple-gray-500">Language</dt>
        <dd className="text-apple-black font-medium">{entry.language}</dd>
      </div>
      <div>
        <dt className="text-apple-gray-500">Frequency</dt>
        <dd className="text-apple-black font-medium capitalize">{entry.frequency}</dd>
      </div>
      <div>
        <dt className="text-apple-gray-500">Status</dt>
        <dd className="text-apple-black font-medium capitalize">{entry.status}</dd>
      </div>
      {entry.episodeCount && (
        <div>
          <dt className="text-apple-gray-500">Episodes</dt>
          <dd className="text-apple-black font-medium">{entry.episodeCount}</dd>
        </div>
      )}
    </dl>
  );
}

function BookDetail({ entry }: { entry: Extract<DirectoryEntry, { kind: "book" }> }) {
  return (
    <dl className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4 text-sm">
      <div>
        <dt className="text-apple-gray-500">Author</dt>
        <dd className="text-apple-black font-medium">{entry.author}</dd>
      </div>
      <div>
        <dt className="text-apple-gray-500">Year</dt>
        <dd className="text-apple-black font-medium">{entry.year}</dd>
      </div>
      <div>
        <dt className="text-apple-gray-500">Category</dt>
        <dd className="text-apple-black font-medium capitalize">{entry.category.replace(/-/g, " ")}</dd>
      </div>
      {entry.isbn && (
        <div>
          <dt className="text-apple-gray-500">ISBN</dt>
          <dd className="text-apple-black font-medium">{entry.isbn}</dd>
        </div>
      )}
      <div className="sm:col-span-2">
        <dt className="text-apple-gray-500">For</dt>
        <dd className="text-apple-black font-medium capitalize">{entry.targetAudience.join(", ")}</dd>
      </div>
    </dl>
  );
}

function AdvisorDetail({ entry }: { entry: Extract<DirectoryEntry, { kind: "advisor" }> }) {
  return (
    <dl className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4 text-sm">
      <div>
        <dt className="text-apple-gray-500">Country</dt>
        <dd className="text-apple-black font-medium">{entry.country}</dd>
      </div>
      <div>
        <dt className="text-apple-gray-500">Headquarters</dt>
        <dd className="text-apple-black font-medium">{entry.headquarters}</dd>
      </div>
      <div>
        <dt className="text-apple-gray-500">Specialization</dt>
        <dd className="text-apple-black font-medium">{entry.specialization.join(", ")}</dd>
      </div>
      <div>
        <dt className="text-apple-gray-500">ETA Experience</dt>
        <dd className="text-apple-black font-medium">{entry.etaExperience ? "Yes" : "No"}</dd>
      </div>
      {entry.dealSizeFocus && (
        <div>
          <dt className="text-apple-gray-500">Deal Size Focus</dt>
          <dd className="text-apple-black font-medium">{entry.dealSizeFocus}</dd>
        </div>
      )}
    </dl>
  );
}

function EntryDetails({ entry }: { entry: DirectoryEntry }) {
  switch (entry.kind) {
    case "investor": return <InvestorDetail entry={entry} />;
    case "mba-program": return <MBAProgramDetail entry={entry} />;
    case "broker": return <BrokerDetail entry={entry} />;
    case "conference": return <ConferenceDetail entry={entry} />;
    case "podcast": return <PodcastDetail entry={entry} />;
    case "book": return <BookDetail entry={entry} />;
    case "advisor": return <AdvisorDetail entry={entry} />;
  }
}

function getWebsiteUrl(entry: DirectoryEntry): string | undefined {
  switch (entry.kind) {
    case "investor": return entry.website;
    case "mba-program": return entry.programUrl ?? entry.website;
    case "broker": return entry.website;
    case "conference": return entry.website;
    case "podcast": return entry.platformUrl;
    case "book": return entry.amazonUrl;
    case "advisor": return entry.website;
  }
}

export default async function DirectoryEntryPage({ params }: Props) {
  const { locale, category, slug } = await params;
  const cat = getCategoryBySlug(category);
  const entry = getEntryBySlug(category, slug);
  if (!cat || !entry) notFound();

  const name = getEntryName(entry);
  const url = `${BASE}/${locale}/directory/${category}/${slug}`;
  const websiteUrl = getWebsiteUrl(entry);

  return (
    <div className="max-w-3xl mx-auto px-6 py-12">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: safeJsonLd(buildSchemaOrg(entry, url)),
        }}
      />

      {/* Back link */}
      <Link
        href={`/${locale}/directory/${category}`}
        className="inline-flex items-center gap-1.5 text-sm text-apple-gray-500 hover:text-apple-accent transition-colors mb-8"
      >
        <ArrowLeft className="w-4 h-4" />
        {cat.name}
      </Link>

      {/* Breadcrumb */}
      <nav className="text-xs text-apple-gray-400 mb-4">
        <Link href={`/${locale}/directory`} className="hover:text-apple-accent">
          Directory
        </Link>
        <span className="mx-1.5">/</span>
        <Link
          href={`/${locale}/directory/${category}`}
          className="hover:text-apple-accent"
        >
          {cat.name}
        </Link>
        <span className="mx-1.5">/</span>
        <span className="text-apple-gray-600">{name}</span>
      </nav>

      <h1 className="text-3xl font-semibold text-apple-black tracking-tight">
        {name}
      </h1>

      {/* Details card */}
      <div className="mt-6 rounded-2xl border border-apple-gray-200 bg-apple-gray-50 p-6">
        <EntryDetails entry={entry} />
      </div>

      {/* About section */}
      <div className="mt-8">
        <h2 className="text-lg font-semibold text-apple-black">About</h2>
        <p className="mt-2 text-sm text-apple-gray-700 leading-relaxed">
          {entry.description}
        </p>
      </div>

      {/* CTA */}
      {websiteUrl && (
        <div className="mt-8">
          <a
            href={websiteUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-apple-accent px-6 py-2.5 text-sm font-medium text-white hover:bg-apple-accent/90 transition-colors"
          >
            Visit Website
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      )}

      {/* Source & feedback footer */}
      <div className="mt-10 rounded-xl bg-apple-gray-50 p-5 flex items-start gap-3">
        <Info className="w-4 h-4 text-apple-gray-400 mt-0.5 shrink-0" />
        <div className="text-xs text-apple-gray-500 leading-relaxed">
          <p>
            <span className="font-medium text-apple-gray-600">Source:</span>{" "}
            {entry.source}
          </p>
          <p className="mt-1">
            Information sourced from public records. If you notice an inaccuracy,
            please{" "}
            <a
              href="/contact"
              className="text-apple-accent hover:underline"
            >
              let us know
            </a>
            .
          </p>
        </div>
      </div>
    </div>
  );
}
