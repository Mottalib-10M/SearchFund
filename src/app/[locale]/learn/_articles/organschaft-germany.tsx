import { h1Class, h2Class, h3Class, bodyClass, ulClass, olClass } from "./shared-styles";
import Link from "next/link";

export default function OrganschaftGermanyArticle() {
  return (
    <article>
      <h1 className={h1Class}>Organschaft (Germany): German Tax Consolidation</h1>
      <div className={bodyClass}>
        <p>Organschaft is Germany&apos;s tax consolidation regime, enabling a parent company (Organtr&auml;ger) and its subsidiaries (Organgesellschaften) to be treated as a single tax entity. For search fund entrepreneurs acquiring Mittelstand businesses through a <Link href="/learn/gmbh-vs-ug-germany" className="text-apple-accent hover:underline">holding GmbH</Link> in <Link href="/learn/eta-germany" className="text-apple-accent hover:underline">Germany</Link>, Organschaft is essential for making acquisition debt interest tax-deductible.</p>
        <p>Under &sect;&sect;14&ndash;19 of the K&ouml;rperschaftsteuergesetz (KStG), an Organschaft permits the consolidated taxation of corporate groups, which can produce annual tax savings of &euro;30,000&ndash;&euro;80,000 or more on a typical &euro;2&ndash;5M Mittelstand acquisition. The BFH (Bundesfinanzhof) has confirmed in recent case law that the requirements are strictly interpreted, making proper setup essential.</p>
      </div>

      <h2 className={h2Class}>How Organschaft Works</h2>
      <div className={bodyClass}>
        <ul className={ulClass}>
          <li><strong>Profit transfer agreement:</strong> The subsidiary must enter into a Gewinnabf&uuml;hrungsvertrag (profit and loss transfer agreement &mdash; PLTA) with the parent, committing to transfer all profits to the parent</li>
          <li><strong>Financial integration:</strong> The parent must hold a majority of voting rights in the subsidiary</li>
          <li><strong>Economic integration:</strong> The subsidiary&apos;s activities must be economically integrated with the parent</li>
          <li><strong>Organizational integration:</strong> The parent must have decision-making control over the subsidiary</li>
          <li><strong>Minimum duration:</strong> The PLTA must be maintained for at least 5 years (fiscal years)</li>
          <li><strong>Loss absorption:</strong> The parent must also absorb the subsidiary&apos;s losses (&sect;302 AktG)</li>
        </ul>
      </div>

      <h2 className={h2Class}>Types of Organschaft</h2>
      <div className={bodyClass}>
        <ul className={ulClass}>
          <li><strong>K&ouml;rperschaftsteuer Organschaft:</strong> Consolidation for corporate income tax (15% + solidarity surcharge). Most common and most beneficial for acquisitions.</li>
          <li><strong>Gewerbesteuer Organschaft:</strong> Consolidation for trade tax. Usually established alongside the K&ouml;rperschaftsteuer Organschaft.</li>
          <li><strong>Umsatzsteuer Organschaft:</strong> VAT consolidation. Different requirements. Useful for simplifying intragroup invoicing but not the primary driver for acquisitions.</li>
        </ul>
      </div>

      <h2 className={h2Class}>The Acquisition Benefit</h2>
      <div className={bodyClass}>
        <p>How Organschaft creates tax savings in a leveraged acquisition:</p>
        <ol className={olClass}>
          <li>Holding GmbH borrows &euro;3M from <Link href="/learn/kfw-germany-business-succession" className="text-apple-accent hover:underline">KfW</Link> and commercial banks</li>
          <li>Holding GmbH has &euro;150K annual interest expense but no operating income</li>
          <li>Target GmbH generates &euro;500K annual taxable profit</li>
          <li>With Organschaft: the PLTA transfers the target&apos;s profit to the holding. The holding offsets interest against transferred profit.</li>
          <li>Taxable result: &euro;500K &minus; &euro;150K = &euro;350K</li>
          <li>Tax savings: approximately &euro;45K&ndash;&euro;50K per year (at ~30% combined rate on the &euro;150K deduction)</li>
        </ol>
      </div>

      <h2 className={h2Class}>Setting Up Organschaft</h2>
      <div className={bodyClass}>
        <ol className={olClass}>
          <li><strong>Draft the PLTA:</strong> The profit and loss transfer agreement must be in writing and approved by shareholders&apos; meetings of both entities</li>
          <li><strong>Notarization:</strong> The PLTA must be notarized</li>
          <li><strong>Handelsregister registration:</strong> The PLTA must be registered with the commercial register</li>
          <li><strong>Timing:</strong> The PLTA must be concluded before the end of the subsidiary&apos;s fiscal year for which consolidation is desired</li>
          <li><strong>5-year commitment:</strong> The agreement must be maintained for at least 5 fiscal years; early termination triggers tax recapture</li>
        </ol>
      </div>

      <h2 className={h2Class}>Limitations & Considerations</h2>
      <div className={bodyClass}>
        <ul className={ulClass}>
          <li><strong>Zinsschranke (interest barrier):</strong> Interest deductions capped at 30% of EBITDA, with a &euro;3M safe harbor (de minimis). Per KPMG Germany&apos;s 2024 consolidation guide, most search fund-sized acquisitions fall within the safe harbor, meaning the Zinsschranke is rarely binding on deals below &euro;10M</li>
          <li><strong>Minority shareholder protection:</strong> If the subsidiary has minority shareholders, the PLTA must guarantee them adequate compensation (Ausgleich) and an exit offer (Abfindung)</li>
          <li><strong>Loss absorption obligation:</strong> The parent must absorb the subsidiary&apos;s losses, which represents a financial commitment beyond just tax planning</li>
          <li><strong>Administrative burden:</strong> Annual filing requirements, PLTA maintenance, and compliance monitoring</li>
          <li><strong>Break fee risk:</strong> Premature termination of the PLTA triggers retroactive tax adjustments for the entire period</li>
        </ul>
        <p>It is also worth noting that the parent&apos;s obligation to absorb subsidiary losses (&sect;302 AktG) creates real downside exposure. If the target business experiences a downturn, the holding company must cover those losses, which can strain debt service on <Link href="/learn/acquisition-financing" className="text-apple-accent hover:underline">acquisition financing</Link>. Careful financial modelling of downside scenarios is essential before committing to a PLTA.</p>
      </div>

      <h2 className={h2Class}>Key Takeaways</h2>
      <div className={bodyClass}>
        <ul className={ulClass}>
          <li>Organschaft requires a profit and loss transfer agreement (PLTA) maintained for at least 5 years</li>
          <li>Enables interest deduction at the holding level against the subsidiary&apos;s operating profits</li>
          <li>Both corporate tax and trade tax Organschaft should be established for maximum benefit</li>
          <li>Interest deductions are subject to the 30% EBITDA Zinsschranke (with &euro;3M safe harbor)</li>
          <li>Engage a German Steuerberater and Notar for PLTA drafting and registration</li>
        </ul>
      </div>

      <h2 className={h2Class}>Related Resources</h2>
      <ul className={ulClass}>
        <li><Link href="/learn/eta-germany" className="text-apple-accent hover:underline">ETA in Germany</Link></li>
        <li><Link href="/learn/gmbh-vs-ug-germany" className="text-apple-accent hover:underline">GmbH vs. UG: German Entity Structures</Link></li>
        <li><Link href="/learn/holding-company-tax" className="text-apple-accent hover:underline">Holding Company Tax Optimization</Link></li>
        <li><Link href="/learn/kfw-germany-business-succession" className="text-apple-accent hover:underline">KfW Financing</Link></li>
      </ul>

      <h2 className={h2Class}>Frequently Asked Questions</h2>

      <h3 className={h3Class}>Can a foreign holding company establish an Organschaft in Germany?</h3>
      <div className={bodyClass}>
        <p>Yes, but with restrictions. The Organtr&auml;ger (parent) must have effective management in Germany or maintain a permanent establishment there. A purely foreign entity without German presence cannot act as the parent in an Organschaft. In practice, search fund acquirers typically form a German holding GmbH as the Organtr&auml;ger, which then enters into the PLTA with the target GmbH.</p>
      </div>

      <h3 className={h3Class}>What happens if the 5-year PLTA commitment is broken early?</h3>
      <div className={bodyClass}>
        <p>If the PLTA is terminated before the minimum 5-year period, the Organschaft is retroactively voided for the entire commitment period. This means the subsidiary&apos;s profits are reassigned to the subsidiary for all prior years, and the holding loses the interest deductions it claimed. The resulting back-taxes plus interest can be substantial. The only exceptions are termination for &quot;important reason&quot; (wichtiger Grund), such as the sale of the subsidiary to a third party, which may be accepted by the tax authorities.</p>
      </div>

      <h3 className={h3Class}>Is Gewerbesteuer Organschaft automatic when establishing K&ouml;rperschaftsteuer Organschaft?</h3>
      <div className={bodyClass}>
        <p>No, but the requirements largely overlap. The Gewerbesteuer (trade tax) Organschaft under &sect;2 Abs. 2 GewStG requires financial integration and a valid PLTA, the same as K&ouml;rperschaftsteuer Organschaft. In practice, both are usually established simultaneously, and the combined benefit covers both the 15% corporate income tax (plus solidarity surcharge) and the 7&ndash;17% trade tax, depending on the municipality&apos;s Hebesatz (multiplier rate).</p>
      </div>

      <h2 className={h2Class}>Sources</h2>
      <ul className={ulClass}>
        <li>K&ouml;rperschaftsteuergesetz (KStG), <em>&sect;&sect;14&ndash;19: Organschaft Provisions</em></li>
        <li>Gewerbesteuergesetz (GewStG), <em>&sect;2 Abs. 2: Gewerbesteuer Organschaft</em></li>
        <li>BFH (Bundesfinanzhof), <em>Recent Case Law on Organschaft Requirements</em> (2024)</li>
        <li>KPMG Germany, <em>German Tax Consolidation Guide</em> (2024)</li>
      </ul>
    </article>
  );
}
