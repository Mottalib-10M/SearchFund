import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "ETA Glossary — Search Fund & Acquisition Terms | SearchFundMarket",
  description:
    "A comprehensive A-Z dictionary of search fund and acquisition terminology. EBITDA, ARR, LOI, PPM, QoE, IRR, and 50+ more ETA terms defined.",
  openGraph: {
    title: "ETA Glossary — Search Fund & Acquisition Terms",
    description:
      "What is EBITDA? What is a PPM? 60+ search fund and acquisition terms defined in plain language with links to detailed guides.",
  },
};

export default function GlossaryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
