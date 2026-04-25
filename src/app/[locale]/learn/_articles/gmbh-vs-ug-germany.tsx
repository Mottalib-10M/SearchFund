import { h1Class, h2Class, h3Class, bodyClass, ulClass, olClass } from "./shared-styles";
import Link from "next/link";

export default function GmbHvsUGGermanyArticle() {
  return (
    <article>
      <h1 className={h1Class}>GmbH vs. UG: German Entity Structures for Buyers</h1>
      <div className={bodyClass}>
        <p>When acquiring a business in <Link href="/learn/eta-germany" className="text-apple-accent hover:underline">Germany</Link>, understanding the GmbH (Gesellschaft mit beschr&auml;nkter Haftung) and its mini-variant, the UG (Unternehmergesellschaft), is essential. The GmbH is Germany&apos;s most popular corporate form for SMEs, and virtually all Mittelstand acquisitions involve buying or creating a GmbH. According to the Bundesministerium der Justiz, there are over 1.2 million registered GmbH entities in Germany, making it the dominant corporate form for small and medium-sized enterprises.</p>
      </div>

      <h2 className={h2Class}>GmbH (Gesellschaft mit beschr&auml;nkter Haftung)</h2>
      <div className={bodyClass}>
        <ul className={ulClass}>
          <li><strong>Minimum share capital:</strong> &euro;25,000 (at least &euro;12,500 paid in at formation)</li>
          <li><strong>Liability:</strong> Limited to company assets. Shareholders&apos; personal liability is limited to their capital contribution.</li>
          <li><strong>Governance:</strong> Gesch&auml;ftsf&uuml;hrer (managing director/CEO) manages day-to-day operations. Gesellschafterversammlung (shareholders&apos; meeting) for major decisions.</li>
          <li><strong>Notarization:</strong> Share transfers must be notarized (notariell beurkundet), a significant cost and process requirement.</li>
          <li><strong>Registration:</strong> Must be registered in the Handelsregister (commercial register) at the local Amtsgericht.</li>
          <li><strong>Audit:</strong> Required if the company exceeds certain thresholds (revenue &gt;&euro;12M, assets &gt;&euro;6M, or &gt;50 employees for two consecutive years).</li>
          <li><strong>Employee co-determination:</strong> Companies with 500+ employees must have employee representatives on a supervisory board (Aufsichtsrat).</li>
        </ul>
      </div>

      <h2 className={h2Class}>UG (haftungsbeschr&auml;nkt), Mini-GmbH</h2>
      <div className={bodyClass}>
        <ul className={ulClass}>
          <li><strong>Minimum share capital:</strong> &euro;1 (the key difference from a GmbH)</li>
          <li><strong>Legal basis:</strong> Same GmbH law applies; the UG is technically a variant of the GmbH</li>
          <li><strong>Mandatory reserve:</strong> Must retain 25% of annual net profit until share capital reaches &euro;25,000, at which point it converts to a GmbH</li>
          <li><strong>Perception:</strong> Less credible than a GmbH in the eyes of banks, suppliers, and business partners</li>
          <li><strong>Use case:</strong> Typically used as an initial holding structure when the buyer has limited capital at setup</li>
        </ul>
      </div>

      <h2 className={h2Class}>Which to Choose for Acquisitions?</h2>
      <div className={bodyClass}>
        <ul className={ulClass}>
          <li><strong>Buying an existing GmbH:</strong> Most common path. You acquire the shares (Gesch&auml;ftsanteile) of the target GmbH directly.</li>
          <li><strong>Creating a holding GmbH:</strong> Set up a new GmbH as the acquisition vehicle. This provides a clean holding structure with liability separation.</li>
          <li><strong>UG as holding:</strong> Some searchers start with a UG (haftungsbeschr&auml;nkt) to save the &euro;25K capital requirement. However, banks and investors may view this negatively.</li>
          <li><strong>Recommendation:</strong> For serious acquisitions with bank financing and investor involvement, use a GmbH, not a UG.</li>
        </ul>
      </div>

      <h2 className={h2Class}>Typical German Acquisition Structure</h2>
      <div className={bodyClass}>
        <ol className={olClass}>
          <li><strong>Holding GmbH:</strong> Created as the acquisition vehicle, with the searcher and investors as shareholders</li>
          <li><strong>Bank financing:</strong> <Link href="/learn/kfw-germany-business-succession" className="text-apple-accent hover:underline">KfW</Link> and commercial bank loans flow into the holding GmbH</li>
          <li><strong>Share purchase (Anteilskauf):</strong> Holding GmbH acquires 100% of the target GmbH shares</li>
          <li><strong>Organschaft:</strong> Tax consolidation between holding and target if a profit transfer agreement (Ergebnisabf&uuml;hrungsvertrag) is established. See our{" "}
            <Link href="/learn/organschaft-germany" className="text-apple-accent hover:underline">detailed Organschaft guide</Link>{" "}
            for setup requirements and benefits</li>
        </ol>
      </div>

      <h2 className={h2Class}>Tax Considerations</h2>
      <div className={bodyClass}>
        <p>Germany&rsquo;s corporate tax framework combines federal and municipal levies. The DIHK (Deutscher Industrie- und Handelskammertag) publishes annual analyses of effective rates across municipalities, which can vary significantly. Understanding these rates is critical for{" "}
          <Link href="/learn/holding-company-tax" className="text-apple-accent hover:underline">holding company tax optimization</Link>:
        </p>
        <ul className={ulClass}>
          <li><strong>Corporate tax (K&ouml;rperschaftsteuer):</strong> 15% + 5.5% solidarity surcharge = 15.825%</li>
          <li><strong>Trade tax (Gewerbesteuer):</strong> 7-17% depending on municipality (Hebesatz). Typical: 14-16%.</li>
          <li><strong>Total effective rate:</strong> 29-33% combined corporate + trade tax</li>
          <li><strong>Participation exemption:</strong> 95% of dividends and capital gains from qualifying participations are tax-free at the holding level</li>
          <li><strong>Interest deductibility:</strong> Limited to 30% of EBITDA (Zinsschranke)</li>
          <li><strong>Goodwill:</strong> Tax-deductible amortization over 15 years in asset deals; no step-up in share deals</li>
          <li><strong>Notary fees:</strong> Share transfer notarization costs are regulated and typically 0.5-2% of deal value</li>
        </ul>
      </div>

      <h2 className={h2Class}>Key Legal Requirements</h2>
      <div className={bodyClass}>
        <ul className={ulClass}>
          <li><strong>Share transfer:</strong> Must be notarized by a German notary (Notar). Foreign notarization is generally not accepted.</li>
          <li><strong>Shareholder list:</strong> Updated list must be filed with the Handelsregister after any share transfer.</li>
          <li><strong>Managing director:</strong> At least one Gesch&auml;ftsf&uuml;hrer is required. Can be a non-German national but must comply with German residence/tax rules.</li>
          <li><strong>Annual accounts:</strong> Must be filed with the Bundesanzeiger (Federal Gazette) annually. Penalties for non-compliance.</li>
        </ul>
      </div>

      <h2 className={h2Class}>Key Takeaways</h2>
      <div className={bodyClass}>
        <ul className={ulClass}>
          <li>The GmbH is Germany&apos;s standard acquisition vehicle, use it for both the holding and operating company</li>
          <li>The UG is a low-cost alternative but carries credibility concerns; avoid it for serious acquisition structures</li>
          <li>All GmbH share transfers must be notarized by a German notary, adding cost and process time</li>
          <li>Organschaft (tax consolidation) enables interest deduction at the holding level against operating profits</li>
          <li>Total corporate tax rates of 29-33% are competitive within the EU for the level of infrastructure and market access Germany provides</li>
        </ul>
      </div>

      <h2 className={h2Class}>Related Resources</h2>
      <ul className={ulClass}>
        <li><Link href="/learn/eta-germany" className="text-apple-accent hover:underline">ETA in Germany: The Mittelstand Opportunity</Link></li>
        <li><Link href="/learn/kfw-germany-business-succession" className="text-apple-accent hover:underline">KfW Germany: Business Succession Financing</Link></li>
        <li><Link href="/learn/holding-company-structures" className="text-apple-accent hover:underline">Holding Company Structures for Acquisitions</Link></li>
        <li><Link href="/learn/cross-border-acquisitions-europe" className="text-apple-accent hover:underline">Cross-Border Acquisitions in Europe</Link></li>
      </ul>

      <h2 className={h2Class}>Frequently Asked Questions</h2>

      <h3 className={h3Class}>
        What is the minimum capital required for a GmbH?
      </h3>
      <div className={bodyClass}>
        <p>
          A GmbH requires &euro;25,000 in share capital, with at least
          &euro;12,500 paid in at formation. In contrast, a UG
          (haftungsbeschr&auml;nkt) can be formed with as little as &euro;1
          in share capital but must retain 25% of annual net profit until
          reaching the &euro;25,000 threshold, at which point it converts to
          a regular GmbH.
        </p>
      </div>

      <h3 className={h3Class}>
        Should I use a UG or a GmbH as my acquisition holding company?
      </h3>
      <div className={bodyClass}>
        <p>
          For serious acquisitions involving bank financing and institutional
          investors, always use a GmbH. Banks and investors view the UG
          negatively due to its low capitalization. The &euro;25,000 GmbH
          capital requirement is modest relative to acquisition deal sizes
          and signals credibility to all counterparties. A UG may be
          appropriate only as a temporary placeholder during the search phase
          before investors are brought in.
        </p>
      </div>

      <h3 className={h3Class}>
        Do I need to be a German resident to be a GmbH Gesch&auml;ftsf&uuml;hrer?
      </h3>
      <div className={bodyClass}>
        <p>
          No. A Gesch&auml;ftsf&uuml;hrer (managing director) does not need
          to be a German resident or citizen. However, non-residents must
          comply with German tax registration requirements and may need to
          file German income tax returns. For practical reasons, having at
          least one Germany-based managing director simplifies banking
          relationships, notarization, and day-to-day administration.
        </p>
      </div>
    </article>
  );
}
