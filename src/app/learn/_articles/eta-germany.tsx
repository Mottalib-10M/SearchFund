import { h1Class, h2Class, bodyClass, ulClass } from "./shared-styles";

export default function ETAGermanyArticle() {
  return (
    <article>
      <h1 className={h1Class}>ETA in Germany: The Mittelstand Opportunity</h1>
      <p className="text-sm text-apple-gray-500 mt-3">14 min read</p>

      <div className={bodyClass}>
        <p>
          Germany&apos;s Mittelstand — the backbone of Europe&apos;s largest economy — represents
          one of the most compelling opportunities for search fund entrepreneurs.
          With over 3.5 million SMEs, a massive succession wave, and
          world-class companies operating in niche markets, Germany is a
          frontier market for ETA.
        </p>

        <h2 className={h2Class}>Understanding the Mittelstand</h2>
        <p>
          The Mittelstand refers to the small and medium-sized enterprises that
          form the heart of the German economy. These companies are often
          family-owned, have operated for decades, are market leaders in their
          niches, and are deeply rooted in their local communities. Many are
          &ldquo;hidden champions&rdquo; — global market leaders in specialized
          products or services that few outside the industry know about.
        </p>

        <h2 className={h2Class}>The succession challenge</h2>
        <p>
          According to the IfM Bonn (Institut für Mittelstandsforschung),
          approximately 190,000 German companies face a leadership succession
          between 2022 and 2026. Many of these are profitable businesses with
          strong market positions but no family successor willing or able to take over.
        </p>

        <h2 className={h2Class}>Key characteristics of German SME acquisitions</h2>
        <ul className={ulClass}>
          <li><strong>Lower multiples:</strong> German SMEs outside of tech typically trade at 3-5x EBITDA, below European PE benchmarks.</li>
          <li><strong>Strong financials:</strong> German companies tend to have conservative balance sheets, low debt, and high cash reserves.</li>
          <li><strong>Skilled workforce:</strong> The German dual education system (Ausbildung) produces highly skilled workers who stay with companies for decades.</li>
          <li><strong>Export orientation:</strong> Many Mittelstand companies derive 30-70% of revenue from exports, providing geographic diversification.</li>
        </ul>

        <h2 className={h2Class}>Financing in Germany</h2>
        <p>
          German banks (Sparkassen, Volksbanken, Deutsche Bank) are experienced
          in financing SME acquisitions. The KfW (Kreditanstalt für Wiederaufbau)
          offers attractive programs for business succession including subsidized
          loans through the ERP-Gründerkredit and ERP-Kapital für Gründung programs.
        </p>

        <h2 className={h2Class}>Challenges for search fund entrepreneurs</h2>
        <ul className={ulClass}>
          <li><strong>Language:</strong> German fluency is essential. Most Mittelstand owners do not conduct business in English.</li>
          <li><strong>Trust building:</strong> German sellers place enormous value on personal relationships and the buyer&apos;s commitment to preserving the company culture.</li>
          <li><strong>Works council (Betriebsrat):</strong> Companies with 5+ employees can form a works council, which has co-determination rights on many operational matters.</li>
          <li><strong>Deal culture:</strong> Transactions move more slowly than in Anglo-Saxon markets. Patience and persistence are essential.</li>
        </ul>
      </div>
    </article>
  );
}
