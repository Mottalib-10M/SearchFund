import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getTemplateBySlug, getAllTemplateSlugs } from "../_data";
import { safeJsonLd, breadcrumbSchema } from "@/lib/json-ld";
import TemplateActions from "./PrintButton";

const BASE = "https://www.searchfundmarket.com";

type Props = { params: Promise<{ locale: string; templateSlug: string }> };

export function generateStaticParams() {
  return getAllTemplateSlugs().map((templateSlug) => ({ templateSlug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, templateSlug } = await params;
  const template = getTemplateBySlug(templateSlug);
  if (!template) return {};
  return {
    title: `${template.title} | SearchFundMarket`,
    description: template.description,
    alternates: {
      canonical: `${BASE}/${locale}/templates/${templateSlug}`,
    },
  };
}

function formatDate(iso: string): string {
  return new Date(iso).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default async function TemplatePage({ params }: Props) {
  const { locale, templateSlug } = await params;
  const template = getTemplateBySlug(templateSlug);
  if (!template) notFound();

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: template.title,
    description: template.description,
    datePublished: template.datePublished,
    dateModified: template.dateModified,
    author: {
      "@type": "Organization",
      name: "SearchFundMarket Editorial Team",
      url: BASE,
    },
    publisher: {
      "@type": "Organization",
      name: "SearchFundMarket",
      url: BASE,
      logo: { "@type": "ImageObject", url: `${BASE}/favicon.svg` },
    },
    mainEntityOfPage: `${BASE}/${locale}/templates/${templateSlug}`,
  };

  const breadcrumbs = breadcrumbSchema([
    { name: "Home", url: `${BASE}/${locale}` },
    { name: "Templates", url: `${BASE}/${locale}/templates` },
    { name: template.title, url: `${BASE}/${locale}/templates/${templateSlug}` },
  ]);

  return (
    <div className="max-w-3xl mx-auto px-6 py-12">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: safeJsonLd(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: safeJsonLd(breadcrumbs) }}
      />

      {/* Breadcrumbs */}
      <nav className="text-sm text-apple-gray-500 mb-6">
        <Link href={`/${locale}/templates`} className="hover:text-apple-accent">
          Templates
        </Link>
        <span className="mx-2">/</span>
        <span className="text-apple-black line-clamp-1">{template.title}</span>
      </nav>

      <article>
        <header>
          <h1 className="text-3xl font-semibold text-apple-black tracking-tight">
            {template.title}
          </h1>
          <p className="mt-2 text-xs text-apple-gray-500">
            Updated {formatDate(template.dateModified)}
          </p>
          <div className="mt-4">
            <TemplateActions title={template.title} />
          </div>
        </header>

        {/* Content */}
        <div
          id="template-content"
          className="mt-8 prose prose-sm prose-apple max-w-none text-apple-gray-700 leading-relaxed [&_h2]:text-xl [&_h2]:font-semibold [&_h2]:text-apple-black [&_h2]:mt-10 [&_h2]:mb-3 [&_h3]:text-base [&_h3]:font-semibold [&_h3]:text-apple-black [&_h3]:mt-6 [&_h3]:mb-2 [&_ul]:list-disc [&_ul]:pl-5 [&_ul]:space-y-1.5 [&_ol]:list-decimal [&_ol]:pl-5 [&_ol]:space-y-1.5 [&_p]:mt-3 [&_li]:text-sm [&_table]:w-full [&_th]:text-left [&_th]:py-2 [&_td]:py-2"
          dangerouslySetInnerHTML={{ __html: template.content }}
        />

        {/* Sources */}
        {template.sources.length > 0 && (
          <div className="mt-10 pt-6 border-t border-apple-gray-100">
            <h2 className="text-sm font-semibold text-apple-black">Sources</h2>
            <ul className="mt-2 space-y-1 text-xs text-apple-gray-500">
              {template.sources.map((s, i) => (
                <li key={i}>
                  {s.url ? (
                    <a
                      href={s.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-apple-accent hover:underline"
                    >
                      {s.name}
                    </a>
                  ) : (
                    s.name
                  )}
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Related articles */}
        {template.relatedArticles.length > 0 && (
          <div className="mt-8 pt-6 border-t border-apple-gray-100">
            <h2 className="text-sm font-semibold text-apple-black">
              Related Learning Resources
            </h2>
            <ul className="mt-2 space-y-1">
              {template.relatedArticles.map((slug) => (
                <li key={slug}>
                  <Link
                    href={`/${locale}/learn/${slug}`}
                    className="text-sm text-apple-accent hover:underline"
                  >
                    {slug.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase())}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Back link */}
        <div className="mt-10 pt-6 border-t border-apple-gray-100">
          <Link
            href={`/${locale}/templates`}
            className="text-sm text-apple-accent hover:underline"
          >
            &larr; All templates
          </Link>
        </div>
      </article>
    </div>
  );
}
