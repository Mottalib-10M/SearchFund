import type { Metadata } from "next";
import GlossaryClient from "./GlossaryClient";

const BASE = "https://www.searchfundmarket.com";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  return {
    title: "Search Fund Glossary: 60+ ETA Terms Explained Simply",
    description:
      "QoE, stepped-up carry, SBA 7(a), seller note, earnout — 60+ search fund and ETA terms defined in plain English. No jargon walls. Searchable, always updated.",
    alternates: {
      canonical: `${BASE}/${locale}/learn/glossary`,
    },
  };
}

export default function GlossaryPage() {
  return <GlossaryClient />;
}
