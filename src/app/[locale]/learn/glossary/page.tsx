import type { Metadata } from "next";
import GlossaryClient from "./GlossaryClient";

const BASE = "https://www.searchfundmarket.com";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  return {
    title: "ETA Glossary: 60+ Search Fund Terms Explained | SFM",
    description:
      "Someone dropped \"QoE\" or \"stepped-up carry\" in a meeting and you just nodded? 60+ ETA terms in plain English, no jargon walls. Search any term instantly.",
    alternates: {
      canonical: `${BASE}/${locale}/learn/glossary`,
    },
  };
}

export default function GlossaryPage() {
  return <GlossaryClient />;
}
