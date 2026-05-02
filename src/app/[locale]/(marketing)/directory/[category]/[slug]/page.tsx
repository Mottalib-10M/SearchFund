import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
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
    title: `${name} | SearchFundMarket Directory`,
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
      <dl className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4 text-sm">
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
        <div className="mt-6">
          <h2 className="text-sm font-semibold text-apple-black">Investment Thesis</h2>
          <p className="mt-1 text-sm text-apple-gray-700">{entry.investmentThesis}</p>
        </div>
      )}
    </>
  );
}

function MBAProgramDetail({ entry }: { entry: Extract<DirectoryEntry, { kind: "mba-program" }> }) {
  return (
    <dl className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4 text-sm">
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
    <dl className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4 text-sm">
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
    <dl className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4 text-sm">
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
    <dl className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4 text-sm">
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
    <dl className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4 text-sm">
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
    <dl className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4 text-sm">
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

      <nav className="text-sm text-apple-gray-500 mb-6">
        <Link href={`/${locale}/directory`} className="hover:text-apple-accent">
          Directory
        </Link>
        <span className="mx-2">/</span>
        <Link
          href={`/${locale}/directory/${category}`}
          className="hover:text-apple-accent"
        >
          {cat.name}
        </Link>
        <span className="mx-2">/</span>
        <span className="text-apple-black">{name}</span>
      </nav>

      <h1 className="text-3xl font-semibold text-apple-black tracking-tight">
        {name}
      </h1>

      <EntryDetails entry={entry} />

      <div className="mt-8">
        <h2 className="text-sm font-semibold text-apple-black">About</h2>
        <p className="mt-2 text-sm text-apple-gray-700 leading-relaxed">
          {entry.description}
        </p>
      </div>

      {websiteUrl && (
        <div className="mt-6">
          <a
            href={websiteUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 rounded-full bg-apple-accent px-5 py-2 text-sm font-medium text-white hover:bg-apple-accent/90 transition-colors"
          >
            Visit Website &rarr;
          </a>
        </div>
      )}

      <div className="mt-8 pt-6 border-t border-apple-gray-100 text-xs text-apple-gray-400">
        <p>Source: {entry.source}</p>
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
  );
}
