import Link from "next/link";
import { h1Class, h2Class, h3Class, bodyClass, ulClass } from "./shared-styles";

export default function DutreilPactArticle() {
  return (
    <article>
      <h1 className={h1Class}>
        Dutreil Pact: French Business Succession Tax Exemption
      </h1>
      <p className="text-sm text-apple-gray-500 mt-3">14 min read</p>

      <div className={bodyClass}>
        <p>
          The Dutreil pact (&ldquo;Pacte Dutreil&rdquo;) is France&rsquo;s
          most powerful tax incentive for business succession. It provides
          a 75% exemption on transfer taxes (donation or inheritance) for
          business shares, making it one of the most generous succession
          tax regimes in{" "}
          <Link href="/learn/eta-europe" className="text-apple-accent hover:underline">
            Europe
          </Link>. For ETA entrepreneurs acquiring businesses in{" "}
          <Link href="/learn/eta-france" className="text-apple-accent hover:underline">
            France
          </Link>, understanding Dutreil is essential for structuring
          tax-efficient deals.
        </p>

        <h2 className={h2Class}>What is the Dutreil pact?</h2>
        <p>Named after Renaud Dutreil, the French minister who introduced the mechanism in 2003, the Pacte Dutreil has become the cornerstone of French business succession planning. According to Bpifrance&apos;s 2024 Transmission Report, approximately 60,000 business transfers occur annually in France, and Dutreil plays a role in a significant share of family-to-family successions. The Direction G&eacute;n&eacute;rale des Finances Publiques (DGFiP) estimates the annual tax expenditure from Dutreil at over &euro;500 million, underscoring its importance in French fiscal policy.</p>
        <ul className={ulClass}>
          <li><strong>Legal basis:</strong> Article 787 B and 787 C of the French Tax Code (Code G&eacute;n&eacute;ral des Imp&ocirc;ts)</li>
          <li><strong>Core benefit:</strong> 75% exemption on the taxable value of business shares transferred by donation or inheritance</li>
          <li><strong>Effective tax rate:</strong> Instead of paying 45% transfer tax on &euro;1M of shares, you pay on only &euro;250K (75% exempted), reducing the effective rate to ~11%</li>
          <li><strong>Additional benefit:</strong> If structured as a donation, a further 50% reduction on the remaining taxable amount if the donor is under 70</li>
        </ul>

        <h2 className={h2Class}>How it works: the three phases</h2>

        <h3 className={h3Class}>Phase 1: Collective commitment (Engagement Collectif)</h3>
        <ul className={ulClass}>
          <li><strong>Duration:</strong> Minimum 2 years</li>
          <li><strong>Who:</strong> The seller (or a group including the seller) commits to hold at least 34% of voting rights (SAS/SARL) or 20% (listed companies)</li>
          <li><strong>Form:</strong> Written pact registered with tax authorities</li>
          <li><strong>Note:</strong> The 2-year commitment can be &ldquo;deemed&rdquo; (r&eacute;put&eacute; acquis) if one person already holds the required percentage for 2+ years</li>
        </ul>

        <h3 className={h3Class}>Phase 2: Transfer (Donation or Inheritance)</h3>
        <ul className={ulClass}>
          <li>Business shares are transferred at the end of (or during) the collective commitment</li>
          <li>75% of the value is exempt from transfer tax</li>
          <li>The transfer triggers the individual commitment phase</li>
        </ul>

        <h3 className={h3Class}>Phase 3: Individual commitment (Engagement Individuel)</h3>
        <ul className={ulClass}>
          <li><strong>Duration:</strong> Minimum 4 years after the transfer</li>
          <li><strong>Who:</strong> Each beneficiary (recipient of shares) commits to hold the shares for 4 years</li>
          <li><strong>Management requirement:</strong> At least one beneficiary (or a party to the collective commitment) must manage the company during the individual commitment period</li>
          <li><strong>Total commitment:</strong> 2 years (collective) + 4 years (individual) = 6 years minimum</li>
        </ul>

        <h2 className={h2Class}>Dutreil in practice for ETA</h2>

        <h3 className={h3Class}>Scenario 1: Buying from a family with Dutreil</h3>
        <ul className={ulClass}>
          <li>The selling family uses Dutreil to transfer shares to the next generation at a 75% tax discount</li>
          <li>The next generation then sells to you after the 4-year holding period</li>
          <li>Impact on you: the seller&rsquo;s family has already minimized their tax burden, making them potentially more flexible on price</li>
        </ul>

        <h3 className={h3Class}>Scenario 2: Structuring your acquisition with Dutreil</h3>
        <ul className={ulClass}>
          <li>If you are a French tax resident acquiring business shares, you can establish a Dutreil pact from day one</li>
          <li>After your 6-year commitment period, you can transfer shares to your successors with 75% exemption</li>
          <li>Essential for long-term wealth planning in French ETA</li>
        </ul>

        <h3 className={h3Class}>Scenario 3: Holding company + Dutreil</h3>
        <ul className={ulClass}>
          <li>Combine a{" "}
            <Link href="/learn/holding-company-structures" className="text-apple-accent hover:underline">
              holding company structure
            </Link>{" "}
            with Dutreil for maximum tax efficiency</li>
          <li>HoldCo shares benefit from Dutreil if the HoldCo is an &ldquo;animating holding company&rdquo; (soci&eacute;t&eacute; holding animatrice) that actively manages the OpCo</li>
          <li>The &ldquo;animating&rdquo; requirement is strictly enforced: the holding must demonstrate active management involvement, not just passive shareholding</li>
        </ul>

        <h2 className={h2Class}>Key requirements and traps</h2>
        <ul className={ulClass}>
          <li><strong>Minimum percentages:</strong> 34% of voting rights (unlisted) or 20% (listed) must be committed</li>
          <li><strong>Activity requirement:</strong> The business must be an operational company (industrial, commercial, artisanal, agricultural, or liberal profession). Pure real estate or financial holding companies are excluded</li>
          <li><strong>Management continuity:</strong> Failure to maintain a managing beneficiary during the individual commitment period can trigger full tax clawback</li>
          <li><strong>Share sale during commitment:</strong> Selling committed shares during the 6-year period triggers immediate loss of the 75% exemption</li>
          <li><strong>Anti-abuse provisions:</strong> The tax authorities scrutinize Dutreil arrangements aggressively. Proper documentation and genuine commitments are essential</li>
        </ul>

        <h2 className={h2Class}>Quantifying the benefit</h2>
        <ul className={ulClass}>
          <li><strong>Without Dutreil:</strong> &euro;1M of shares transferred by donation = &euro;1M taxable base &times; 45% top rate = &euro;450,000 in transfer taxes</li>
          <li><strong>With Dutreil:</strong> &euro;1M &times; 25% (after 75% exemption) = &euro;250,000 taxable &times; 45% = &euro;112,500 in transfer taxes</li>
          <li><strong>With Dutreil + age reduction:</strong> If donor is under 70, a further 50% reduction: &euro;250,000 &times; 50% = &euro;125,000 taxable &times; 45% = &euro;56,250</li>
          <li><strong>Total savings:</strong> Up to &euro;394,000 on a &euro;1M transfer (87.5% effective reduction)</li>
        </ul>

        <h2 className={h2Class}>Recent developments and reforms</h2>
        <p>The Dutreil regime has undergone several refinements in recent years. The 2019 PACTE law (Plan d&apos;Action pour la Croissance et la Transformation des Entreprises) simplified the commitment structure and clarified the &ldquo;deemed collective commitment&rdquo; (engagement r&eacute;put&eacute; acquis) mechanism, making it easier for sole owners to benefit without formal multi-party pacts. In 2024, the Cour de cassation issued several rulings further clarifying the &ldquo;animating holding company&rdquo; doctrine, confirming that the holding must demonstrate active, permanent management involvement in subsidiaries rather than merely exercising shareholder voting rights.</p>
        <p>Search fund entrepreneurs acquiring French businesses should be aware that Dutreil can influence deal dynamics on the sell-side: sellers with active Dutreil commitments face significant tax penalties if shares are transferred before the commitment period ends. This can affect timing, pricing negotiations, and the willingness of family shareholders to accept your offer. For a deeper look at <Link href="/learn/sas-vs-sarl-france" className="text-apple-accent hover:underline">French entity structures</Link>, see our dedicated guide.</p>

        <h2 className={h2Class}>Frequently Asked Questions</h2>

        <h3 className={h3Class}>Can a non-French resident benefit from the Dutreil pact?</h3>
        <div className={bodyClass}>
          <p>The Dutreil exemption applies to the transfer of shares in French companies regardless of the donor&apos;s nationality, but it is specifically relevant for transfers subject to French gift or inheritance tax. Non-residents are subject to French transfer taxes on shares in French companies only if the assets are considered &ldquo;French-situs&rdquo; property. In practice, shares in French companies generally qualify. However, the beneficiary must meet all commitment requirements (holding period, management role), and non-residents face additional compliance complexity with DGFiP reporting.</p>
        </div>

        <h3 className={h3Class}>What qualifies as an &ldquo;animating holding company&rdquo; for Dutreil purposes?</h3>
        <div className={bodyClass}>
          <p>A soci&eacute;t&eacute; holding animatrice must actively participate in determining the strategic direction of its subsidiaries and provide services (management, accounting, legal, HR) to them. Passive shareholding, simply owning shares and receiving dividends, does not qualify. The French tax authorities and courts examine whether the holding employs staff, provides documented services under management agreements, and exercises operational control. A search fund HoldCo that actively manages the acquired OpCo will typically qualify, but the burden of proof lies with the taxpayer.</p>
        </div>

        <h3 className={h3Class}>Can Dutreil be combined with other French tax optimization strategies?</h3>
        <div className={bodyClass}>
          <p>Yes, and this is where Dutreil becomes most powerful. It can be combined with: (1) the <Link href="/learn/integration-fiscale-france" className="text-apple-accent hover:underline">int&eacute;gration fiscale</Link> regime for ongoing tax consolidation, (2) the &ldquo;apport-cession&rdquo; mechanism (Article 150-0 B ter CGI) for tax-deferred reinvestment of capital gains, and (3) a holding company structure that benefits from the parent-subsidiary exemption on dividends. Together, these tools can reduce the effective tax burden across the full lifecycle of a French acquisition from entry through succession.</p>
        </div>

        <p>
          For the complete French acquisition framework, see{" "}
          <Link href="/learn/eta-france" className="text-apple-accent hover:underline">
            ETA in France
          </Link>,{" "}
          <Link href="/learn/bpifrance-acquisition-financing" className="text-apple-accent hover:underline">
            Bpifrance financing
          </Link>, and{" "}
          <Link href="/learn/tax-optimization" className="text-apple-accent hover:underline">
            tax optimization strategies
          </Link>.
        </p>
      </div>
    </article>
  );
}
