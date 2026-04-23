import { h1Class, h2Class, h3Class, bodyClass, ulClass, olClass } from "./shared-styles";
import Link from "next/link";

export default function SASvsSARLFranceArticle() {
  return (
    <article>
      <h1 className={h1Class}>SAS vs. SARL: French Legal Structures for Acquisitions</h1>
      <div className={bodyClass}>
        <p>Choosing between a SAS (Soci&eacute;t&eacute; par Actions Simplifi&eacute;e) and a SARL (Soci&eacute;t&eacute; &agrave; Responsabilit&eacute; Limit&eacute;e) is one of the most important decisions when structuring a business acquisition in <Link href="/learn/eta-france" className="text-apple-accent hover:underline">France</Link>. Each structure has distinct advantages for governance, taxation, and flexibility &mdash; and the right choice depends on your deal structure and growth plans.</p>
      </div>

      <h2 className={h2Class}>SAS (Soci&eacute;t&eacute; par Actions Simplifi&eacute;e)</h2>
      <div className={bodyClass}>
        <p>The SAS has become the dominant structure for acquisitions in France:</p>
        <ul className={ulClass}>
          <li><strong>Share type:</strong> Actions (shares). Easily transferable, no notarial deed required for transfers.</li>
          <li><strong>Minimum capital:</strong> &euro;1 (no practical minimum requirement)</li>
          <li><strong>Governance:</strong> Highly flexible. Governed by the statutes (articles of association) with minimal legal constraints.</li>
          <li><strong>President:</strong> Must have a Pr&eacute;sident (CEO equivalent). Can add other officers (DG, DGD) as needed.</li>
          <li><strong>Board:</strong> No board of directors required, but can create one. Full freedom to design governance in the statutes.</li>
          <li><strong>Share classes:</strong> Can create multiple share classes with different voting rights, dividend preferences, and transfer restrictions.</li>
          <li><strong>Social charges on dividends:</strong> Dividends are NOT subject to social charges (only 17.2% pr&eacute;l&egrave;vements sociaux + 12.8% flat tax or progressive income tax).</li>
          <li><strong>Transfer tax:</strong> 0.1% on share transfers (cession d&apos;actions).</li>
        </ul>
      </div>

      <h2 className={h2Class}>SARL (Soci&eacute;t&eacute; &agrave; Responsabilit&eacute; Limit&eacute;e)</h2>
      <div className={bodyClass}>
        <p>The SARL is France&apos;s equivalent of a limited liability company:</p>
        <ul className={ulClass}>
          <li><strong>Share type:</strong> Parts sociales (ownership interests). Transfer requires notarial deed and partner approval.</li>
          <li><strong>Minimum capital:</strong> &euro;1 (no practical minimum requirement)</li>
          <li><strong>Governance:</strong> More rigid. Governed by the French Commercial Code with less flexibility.</li>
          <li><strong>Manager:</strong> Must have one or more G&eacute;rants (managers). Can be majority or minority shareholders.</li>
          <li><strong>Social charges on dividends:</strong> For majority G&eacute;rant, dividends above 10% of capital + current account are subject to social charges (~45%).</li>
          <li><strong>Transfer tax:</strong> 3% on ownership transfers (cession de parts), with a &euro;23,000 deduction.</li>
          <li><strong>Maximum partners:</strong> Limited to 100 associates.</li>
        </ul>
      </div>

      <h2 className={h2Class}>Key Differences for Acquisitions</h2>
      <div className={bodyClass}>
        <ul className={ulClass}>
          <li><strong>Investor-friendliness:</strong> SAS is strongly preferred. Investors can receive preferred shares, and governance can be tailored in the statutes. SARL is too rigid for typical investor structures.</li>
          <li><strong>Transfer cost:</strong> SAS share transfers cost 0.1% vs. 3% for SARL &mdash; a massive difference on larger deals.</li>
          <li><strong>Exit flexibility:</strong> SAS shares are more liquid and easier to transfer, facilitating future exits.</li>
          <li><strong>Social charge optimization:</strong> SAS dividends avoid social charges; SARL majority G&eacute;rant dividends face ~45% charges on amounts exceeding the 10% threshold.</li>
          <li><strong>Governance design:</strong> SAS allows total freedom (drag-along, tag-along, vesting, board composition); SARL is constrained by code.</li>
        </ul>
      </div>

      <h2 className={h2Class}>Typical Acquisition Structure in France</h2>
      <div className={bodyClass}>
        <p>The most common structure for search fund acquisitions in France:</p>
        <ol className={olClass}>
          <li><strong>Create a holding SAS:</strong> The acquisition vehicle (holding company)</li>
          <li><strong>Investor equity into the holding SAS:</strong> Using ordinary and preferred shares</li>
          <li><strong>Bank debt at holding level:</strong> <Link href="/learn/bpifrance-acquisition-financing" className="text-apple-accent hover:underline">Bpifrance</Link> and commercial bank loans in the holding SAS</li>
          <li><strong>Acquire target shares or assets:</strong> The holding SAS buys the target (often another SAS or SARL)</li>
          <li><strong>Int&eacute;gration fiscale:</strong> Tax consolidation between holding and target if the holding owns 95%+ of the target</li>
        </ol>
      </div>

      <h2 className={h2Class}>Tax Considerations</h2>
      <div className={bodyClass}>
        <ul className={ulClass}>
          <li><strong>Corporate tax (IS):</strong> 25% standard rate; 15% on first &euro;42,500 for qualifying SMEs</li>
          <li><strong><Link href="/learn/dutreil-pact" className="text-apple-accent hover:underline">Dutreil Pact</Link>:</strong> 75% exemption on gift/inheritance tax for business transfers (applies to both SAS and SARL shares)</li>
          <li><strong>Participation exemption:</strong> 95% of capital gains on qualifying participations exempt (only 12% of gains effectively taxed as a &quot;quote-part de frais et charges&quot;)</li>
          <li><strong>Interest deductibility:</strong> Acquisition debt interest deductible (subject to 30% EBITDA cap and other anti-abuse rules)</li>
          <li><strong>Flat tax (PFU):</strong> 30% flat tax on dividends (12.8% income tax + 17.2% social levies) &mdash; same for both SAS and SARL</li>
        </ul>
      </div>

      <h2 className={h2Class}>Key Takeaways</h2>
      <div className={bodyClass}>
        <ul className={ulClass}>
          <li>SAS is the clear choice for search fund acquisitions: better governance flexibility, lower transfer taxes, and no social charges on dividends</li>
          <li>SARL may work for very small owner-operated acquisitions without outside investors</li>
          <li>The holding SAS + operating subsidiary structure enables tax consolidation and clean governance</li>
          <li>Transfer tax alone (0.1% SAS vs. 3% SARL) makes a significant difference on exit valuations</li>
          <li>Always engage a French M&A attorney (avocat sp&eacute;cialis&eacute; en droit des affaires) for the acquisition structure</li>
        </ul>
      </div>

      <h2 className={h2Class}>Related Resources</h2>
      <ul className={ulClass}>
        <li><Link href="/learn/eta-france" className="text-apple-accent hover:underline">ETA in France</Link></li>
        <li><Link href="/learn/bpifrance-acquisition-financing" className="text-apple-accent hover:underline">Bpifrance Financing for Acquisitions</Link></li>
        <li><Link href="/learn/dutreil-pact" className="text-apple-accent hover:underline">Dutreil Pact: French Business Succession Tax Exemption</Link></li>
        <li><Link href="/learn/holding-company-structures" className="text-apple-accent hover:underline">Holding Company Structures for Acquisitions</Link></li>
      </ul>

      <h2 className={h2Class}>Sources</h2>
      <ul className={ulClass}>
        <li>L&eacute;gifrance, <em>Code de Commerce: SAS &amp; SARL Provisions</em> (2024)</li>
        <li>Bpifrance, <em>Guide des Structures Juridiques pour la Reprise</em> (2024)</li>
        <li>CCI France, <em>Choisir sa Forme Juridique</em> (2024)</li>
        <li>Francis Lefebvre, <em>M&eacute;mento Soci&eacute;t&eacute;s Commerciales</em> (2024)</li>
      </ul>
    </article>
  );
}
