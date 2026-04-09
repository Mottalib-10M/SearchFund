import { h1Class, h2Class, bodyClass, ulClass } from "./shared-styles";

export default function SearchFundReturnsArticle() {
  return (
    <article>
      <h1 className={h1Class}>Search Fund Returns & Performance Data</h1>
      <p className="text-sm text-apple-gray-500 mt-3">8 min read</p>

      <div className={bodyClass}>
        <p>
          Search funds have established themselves as one of the
          highest-performing alternative investment strategies over the past four
          decades. Here we compile the key performance data from major studies
          by Stanford GSB, IESE Business School, INSEAD&apos;s ETA & Search Funds
          Hub, and other leading research institutions.
        </p>

        <h2 className={h2Class}>Aggregate returns (1984-2023)</h2>
        <ul className={ulClass}>
          <li><strong>35.1% pre-tax IRR</strong> — aggregate across all US/Canadian search funds (Stanford 2024).</li>
          <li><strong>4.5x pre-tax ROIC</strong> — aggregate return on all invested capital.</li>
          <li><strong>Outperforms PE and VC</strong> — search funds have consistently outperformed both private equity and venture capital benchmarks on a risk-adjusted basis.</li>
        </ul>

        <h2 className={h2Class}>Acquisition success rates</h2>
        <ul className={ulClass}>
          <li>63% of funded searchers successfully acquire a company.</li>
          <li>37% of searchers return remaining capital to investors without completing an acquisition.</li>
          <li>Of those who acquire, approximately 70% generate positive returns for investors.</li>
        </ul>

        <h2 className={h2Class}>Typical deal characteristics</h2>
        <ul className={ulClass}>
          <li><strong>Median purchase price:</strong> $14.4M (US/Canada), lower in Europe.</li>
          <li><strong>Typical EBITDA:</strong> $1M - $3M at acquisition.</li>
          <li><strong>Acquisition multiples:</strong> 3x - 6x EBITDA.</li>
          <li><strong>Holding period:</strong> 5-7 years before exit.</li>
          <li><strong>Searcher equity:</strong> 20-30% of the acquired company.</li>
        </ul>

        <h2 className={h2Class}>Comparison to other asset classes</h2>
        <p>
          Search funds offer a compelling risk-return profile. While individual
          fund outcomes vary widely, the aggregate performance data places
          search funds among the top-performing asset classes in private markets.
          The combination of active management, aligned incentives, and small
          company premiums drives this outperformance.
        </p>

        <h2 className={h2Class}>European performance</h2>
        <p>
          While less data is available for European search funds given their
          shorter history, early results are promising. Lower entry valuations
          and a larger pool of succession-driven transactions suggest that
          European funds may ultimately deliver returns comparable to or better
          than their US counterparts. INSEAD&apos;s ETA & Search Funds Hub is
          actively building the most comprehensive dataset on European search
          fund performance, tracking deals across France, DACH, Benelux, and
          the Nordics — providing investors with the data they need to support
          European searchers with confidence.
        </p>
      </div>
    </article>
  );
}
