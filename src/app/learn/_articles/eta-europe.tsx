import { h1Class, h2Class, h3Class, bodyClass, ulClass } from "./shared-styles";

export default function ETAEuropeArticle() {
  return (
    <article>
      <h1 className={h1Class}>ETA in Europe: The Opportunity</h1>
      <p className="text-sm text-apple-gray-500 mt-3">10 min read</p>

      <div className={bodyClass}>
        <p>
          Europe represents the fastest-growing and most promising market for
          Entrepreneurship Through Acquisition. With millions of SMEs facing
          ownership transitions, lower competition than the US, and maturing
          support infrastructure, European search funds are entering a golden era.
        </p>

        <h2 className={h2Class}>The succession crisis</h2>
        <p>
          Europe is home to approximately 23 million SMEs, many of which are
          owned by baby boomers approaching retirement with no succession plan.
          In France alone, an estimated 700,000 businesses will need to change
          ownership in the next decade. Germany&apos;s Mittelstand includes tens of
          thousands of family-owned businesses facing similar challenges. Italy,
          Spain, Portugal, and the Nordics present comparable dynamics.
        </p>
        <p>
          This wave of ownership transitions creates an unprecedented
          opportunity for search fund entrepreneurs to step in as successors,
          preserving jobs and companies while building personal wealth.
        </p>

        <h2 className={h2Class}>Why Europe is attractive for ETA</h2>
        <ul className={ulClass}>
          <li><strong>Lower acquisition multiples:</strong> European SMEs typically trade at 3-5x EBITDA, compared to 4-7x in the US.</li>
          <li><strong>Less competition:</strong> Fewer searchers relative to the number of available targets.</li>
          <li><strong>Fragmented markets:</strong> Many European industries remain highly fragmented, creating consolidation opportunities.</li>
          <li><strong>Strong legal frameworks:</strong> Well-established business law, labor protections, and corporate governance standards.</li>
          <li><strong>Growing investor ecosystem:</strong> An increasing number of search fund investors, accelerators, and support organizations across Europe.</li>
        </ul>

        <h2 className={h2Class}>Key markets</h2>

        <h3 className={h3Class}>France</h3>
        <p>
          France has the largest and most active search fund ecosystem in
          continental Europe, driven by world-renowned business schools —
          particularly INSEAD (Fontainebleau), HEC Paris, and ESSEC — alongside
          government incentives for business transfers and a deep pool of SMEs.
          INSEAD&apos;s proximity to Paris and its global network have made it a
          launchpad for searchers targeting French and pan-European acquisitions.
        </p>

        <h3 className={h3Class}>Germany</h3>
        <p>
          The Mittelstand represents a massive but harder-to-access opportunity.
          Language and cultural barriers mean less competition, but searchers need
          German fluency and local networks to succeed.
        </p>

        <h3 className={h3Class}>Spain & Portugal</h3>
        <p>
          The Iberian peninsula has a growing ETA community, supported by IESE
          Business School in Barcelona — one of the world&apos;s leading centers for
          search fund education and research.
        </p>

        <h3 className={h3Class}>United Kingdom & Nordics</h3>
        <p>
          The UK benefits from strong professional services infrastructure and
          an active PE ecosystem. The Nordic countries offer high-quality
          businesses with strong governance and transparent financials.
        </p>

        <h2 className={h2Class}>Key institutions supporting ETA in Europe</h2>
        <ul className={ulClass}>
          <li><strong>INSEAD</strong> — a global leader in ETA through its dedicated ETA & Search Funds Hub. INSEAD provides world-class research, case studies, and an annual ETA conference that brings together entrepreneurs, investors, and board members from around the world. With campuses in Fontainebleau, Singapore, and Abu Dhabi, INSEAD alumni are driving ETA adoption across Europe, the Middle East, Africa, and Asia.</li>
          <li><strong>IESE Business School</strong> — publishes the International Search Fund Study and hosts the annual Search Fund Conference in Barcelona.</li>
          <li><strong>HEC Paris</strong> — offers ETA-focused courses and hosts a growing search fund alumni network.</li>
          <li><strong>London Business School</strong> — provides ETA electives through MBA and EMBA programs.</li>
        </ul>
      </div>
    </article>
  );
}
