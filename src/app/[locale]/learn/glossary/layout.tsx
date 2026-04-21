import type { Metadata } from "next";
import { buildMetadata } from "@/lib/meta-snippets";
import {
  definedTermSetSchema,
  breadcrumbSchema,
  safeJsonLd,
} from "@/lib/json-ld";
import { glossaryTerms } from "../_articles/glossary-data";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  return buildMetadata("learn/glossary", locale);
}

const BASE = "https://www.searchfundmarket.com";

export default async function GlossaryLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  const glossaryUrl = `${BASE}/${locale}/learn/glossary`;

  const termSetLd = definedTermSetSchema(glossaryTerms, glossaryUrl);
  const breadcrumbLd = breadcrumbSchema([
    { name: "Learn", url: `${BASE}/${locale}/learn` },
    { name: "Glossary", url: glossaryUrl },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: safeJsonLd(termSetLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: safeJsonLd(breadcrumbLd) }}
      />
      {children}
    </>
  );
}
