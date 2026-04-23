import Link from "next/link";
import { h1Class, h2Class, h3Class, bodyClass, ulClass } from "./shared-styles";

export default function CrossBorderAcquisitionsArticle() {
  return (
    <article>
      <h1 className={h1Class}>
        Cross-Border Acquisitions: Legal &amp; Tax Structuring Guide
      </h1>
      <p className="text-sm text-apple-gray-500 mt-3">16 min read</p>

      <div className={bodyClass}>
        <p>
          Acquiring a business in a different country adds layers of
          complexity &mdash; foreign legal systems, cross-border tax
          structuring, currency risk, regulatory approvals, and cultural
          differences. But for ETA entrepreneurs willing to navigate
          these challenges, cross-border acquisitions unlock larger deal
          pools, lower multiples, and unique market opportunities.
        </p>

        <h2 className={h2Class}>Why go cross-border?</h2>
        <ul className={ulClass}>
          <li><strong>Larger deal pool:</strong> Expanding beyond one country multiplies available targets. Europe alone has 23 million SMEs</li>
          <li><strong>Valuation arbitrage:</strong> Many European markets trade at 3&ndash;5x EBITDA vs. 5&ndash;7x in the US for comparable businesses</li>
          <li><strong>Succession opportunity:</strong> The{" "}
            <Link href="/learn/baby-boomer-succession" className="text-apple-accent hover:underline">
              succession crisis
            </Link>{" "}
            is global, but markets like{" "}
            <Link href="/learn/eta-germany" className="text-apple-accent hover:underline">
              Germany
            </Link>{" "}
            and{" "}
            <Link href="/learn/eta-japan" className="text-apple-accent hover:underline">
              Japan
            </Link>{" "}
            have the most acute gaps</li>
          <li><strong>Strategic advantage:</strong> Cross-border experience gives you an edge in markets where local ETA is still nascent</li>
        </ul>

        <h2 className={h2Class}>Legal structuring</h2>

        <h3 className={h3Class}>Holding company jurisdiction</h3>
        <ul className={ulClass}>
          <li><strong>Common choices:</strong> Netherlands (favorable tax treaties), Luxembourg (holding regime), Ireland (12.5% corporate rate), or the target country itself</li>
          <li><strong>Key factors:</strong> Double taxation treaties, withholding tax rates, participation exemption rules, and repatriation flexibility</li>
          <li><strong>See:{" "}
            <Link href="/learn/holding-company-structures" className="text-apple-accent hover:underline">
              holding company structures
            </Link></strong></li>
        </ul>

        <h3 className={h3Class}>Entity selection in the target country</h3>
        <ul className={ulClass}>
          <li>Always acquire through a local entity in the target country</li>
          <li>France: SAS (most flexible) or SARL</li>
          <li>Germany: GmbH (standard) or UG (lower capital requirement)</li>
          <li>UK: Ltd (limited company)</li>
          <li>See{" "}
            <Link href="/learn/c-corp-vs-s-corp-llc" className="text-apple-accent hover:underline">
              US entity comparison
            </Link>{" "}
            for domestic structures</li>
        </ul>

        <h3 className={h3Class}>Share deal vs. asset deal</h3>
        <ul className={ulClass}>
          <li>Cross-border acquisitions are almost always share deals (acquiring the entity)</li>
          <li>Asset deals create additional tax friction (transfer taxes, contract reassignment) across borders</li>
          <li>See{" "}
            <Link href="/learn/asset-purchase-vs-stock-purchase" className="text-apple-accent hover:underline">
              APA vs. SPA comparison
            </Link></li>
        </ul>

        <h2 className={h2Class}>Tax structuring</h2>

        <h3 className={h3Class}>Double taxation treaties (DTTs)</h3>
        <ul className={ulClass}>
          <li>DTTs allocate taxing rights between countries and reduce withholding taxes on dividends, interest, and royalties</li>
          <li><strong>Critical question:</strong> Where is the buyer tax-resident? Where is the target? What DTT applies?</li>
          <li>Most DTTs reduce dividend withholding to 5&ndash;15% (vs. 25&ndash;30% without a treaty)</li>
          <li>Interest payments from OpCo to HoldCo may be subject to withholding (0&ndash;15% depending on DTT)</li>
        </ul>

        <h3 className={h3Class}>Transfer pricing</h3>
        <ul className={ulClass}>
          <li>All transactions between related entities (HoldCo, OpCo, management companies) must be at arm&rsquo;s-length prices</li>
          <li>Management fees, IP licensing fees, and intercompany loans are the most scrutinized</li>
          <li>Document your transfer pricing policy from day one to avoid adjustments and penalties</li>
        </ul>

        <h3 className={h3Class}>Exit tax planning</h3>
        <ul className={ulClass}>
          <li>Your exit tax rate depends on the HoldCo jurisdiction and DTT network. See{" "}
            <Link href="/learn/capital-gains-tax-by-country" className="text-apple-accent hover:underline">
              capital gains tax by country
            </Link></li>
          <li>Participation exemptions (Netherlands: 100%, France: 88%, Germany: 95%) can make corporate exits nearly tax-free</li>
          <li>Individual-level taxation still applies when cash is distributed from HoldCo to the owner</li>
        </ul>

        <h2 className={h2Class}>Regulatory considerations</h2>
        <ul className={ulClass}>
          <li><strong>Foreign investment screening:</strong> Many countries now screen foreign acquisitions in &ldquo;strategic&rdquo; sectors (healthcare, tech, defense, energy). Check with local counsel</li>
          <li><strong>EU regulations:</strong> EU Foreign Subsidies Regulation may apply to acquisitions by non-EU buyers receiving government subsidies</li>
          <li><strong>Merger control:</strong> Most SME acquisitions fall below merger control thresholds, but check local rules</li>
          <li><strong>Employment law:</strong> TUPE (UK/EU) automatically transfers employees in asset and share deals. US has no equivalent</li>
          <li><strong>Work permits:</strong> If you&rsquo;re relocating to run the business, ensure you have the right visa/work permit</li>
        </ul>

        <h2 className={h2Class}>Financing cross-border deals</h2>
        <ul className={ulClass}>
          <li><strong>Local debt:</strong> Acquire debt in the target country&rsquo;s currency to create a natural hedge</li>
          <li><strong>Government programs:</strong>{" "}
            <Link href="/learn/bpifrance-acquisition-financing" className="text-apple-accent hover:underline">
              Bpifrance
            </Link>{" "}
            (France),{" "}
            <Link href="/learn/kfw-germany-business-succession" className="text-apple-accent hover:underline">
              KfW
            </Link>{" "}
            (Germany),{" "}
            <Link href="/learn/sba-7a-loans-complete-guide" className="text-apple-accent hover:underline">
              SBA
            </Link>{" "}
            (US) all support acquisition financing for qualifying buyers</li>
          <li><strong>Equity:</strong> Search fund investors increasingly support cross-border deals, especially US investors backing European acquisitions</li>
          <li><strong>Currency risk:</strong> Revenue in EUR, debt in EUR, but investor returns in USD creates FX exposure. Consider hedging for large exposures</li>
        </ul>

        <h2 className={h2Class}>Practical challenges</h2>
        <ul className={ulClass}>
          <li><strong>Language:</strong> Due diligence documents, contracts, and employee communications in a foreign language require translation and local counsel</li>
          <li><strong>Culture:</strong>{" "}
            <Link href="/learn/culture-integration" className="text-apple-accent hover:underline">
              Cultural integration
            </Link>{" "}
            is harder across borders. Management styles, communication norms, and business practices vary significantly</li>
          <li><strong>Distance:</strong> Running a business in another country requires frequent travel (initially weekly) and eventually relocation or a strong local #2</li>
          <li><strong>Advisors:</strong> You need both local and home-country{" "}
            <Link href="/learn/working-with-advisors" className="text-apple-accent hover:underline">
              advisors
            </Link>{" "}
            &mdash; doubling advisory costs</li>
        </ul>

        <p>
          For regional guides, see{" "}
          <Link href="/learn/eta-europe" className="text-apple-accent hover:underline">
            ETA in Europe
          </Link>,{" "}
          <Link href="/learn/eta-us" className="text-apple-accent hover:underline">
            ETA in the US
          </Link>, and{" "}
          <Link href="/learn/eta-canada" className="text-apple-accent hover:underline">
            ETA in Canada
          </Link>.
        </p>
      </div>
    </article>
  );
}
