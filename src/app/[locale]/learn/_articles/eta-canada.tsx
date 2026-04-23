import Link from "next/link";
import { h1Class, h2Class, h3Class, bodyClass, ulClass } from "./shared-styles";

export default function ETACanadaArticle() {
  return (
    <article>
      <h1 className={h1Class}>
        ETA in Canada: Acquiring a Canadian Business
      </h1>
      <p className="text-sm text-apple-gray-500 mt-3">15 min read</p>

      <div className={bodyClass}>
        <p>
          Canada represents one of the most attractive ETA markets in North
          America. With 1.2 million employer businesses, a massive baby boomer
          succession wave (76% of Canadian business owners plan to exit within
          the next decade), and government financing programs specifically
          designed for business succession, the Canadian market offers
          compelling opportunities for search fund entrepreneurs and
          self-funded acquirers.
        </p>
        <p>
          This guide covers the Canadian ETA landscape: deal flow, financing
          options, legal considerations, tax optimization, and practical advice
          for acquiring a business in Canada.
        </p>

        <h2 className={h2Class}>The Canadian opportunity</h2>
        <p>
          Key statistics that make Canada an attractive ETA market:
        </p>
        <ul className={ulClass}>
          <li><strong>1.2 million employer businesses</strong> across Canada</li>
          <li><strong>76% of business owners</strong> plan to exit their business within the next 10 years (BDC survey)</li>
          <li><strong>Only 10% of family businesses</strong> successfully transition to the third generation</li>
          <li><strong>$2 trillion+ in enterprise value</strong> expected to change hands in the next decade</li>
          <li><strong>Lower competition</strong> than the US market, with fewer PE firms and searchers active</li>
          <li><strong>3.5&ndash;6x EBITDA</strong> typical acquisition multiples &mdash; similar to or below US levels</li>
        </ul>

        <h2 className={h2Class}>Financing options</h2>

        <h3 className={h3Class}>BDC (Business Development Bank of Canada)</h3>
        <p>
          The BDC is Canada&rsquo;s equivalent of the US SBA. As a Crown
          corporation, BDC provides subordinated financing, term loans, and
          advisory services specifically for business acquisition:
        </p>
        <ul className={ulClass}>
          <li>Term loans up to $5M+ for acquisitions</li>
          <li>Subordinated financing (mezzanine) to complement senior bank debt</li>
          <li>Flexible repayment terms aligned with business cash flow</li>
          <li>Advisory services for transition planning</li>
        </ul>

        <h3 className={h3Class}>CSBFP (Canada Small Business Financing Program)</h3>
        <p>
          The CSBFP is a government-backed loan guarantee program similar to
          the US{" "}
          <Link href="/learn/sba-7a-loans-complete-guide" className="text-apple-accent hover:underline">
            SBA 7(a)
          </Link>:
        </p>
        <ul className={ulClass}>
          <li>Loans up to $1,150,000 ($500K for equipment and leasehold, $150K for intangible assets, $500K for real property)</li>
          <li>Government guarantees 85% of the loan amount to the lender</li>
          <li>Maximum 10-year term for equipment, 15 years for real property</li>
          <li>Available through most Canadian chartered banks and credit unions</li>
        </ul>

        <h3 className={h3Class}>Senior bank debt</h3>
        <p>
          Canada&rsquo;s major banks (RBC, TD, BMO, Scotiabank, CIBC) all
          have commercial lending divisions that finance business acquisitions.
          Typical terms:
        </p>
        <ul className={ulClass}>
          <li>Loans of $500K&ndash;$10M+ for qualified acquisitions</li>
          <li>2.5&ndash;4x EBITDA maximum leverage</li>
          <li>5&ndash;7 year terms with Prime + 1.5&ndash;3% pricing</li>
          <li>Full recourse with personal guarantees</li>
        </ul>

        <h3 className={h3Class}>Seller financing</h3>
        <p>
          <Link href="/learn/seller-financing" className="text-apple-accent hover:underline">
            Seller financing
          </Link>{" "}
          (called a &ldquo;vendor take-back&rdquo; or VTB in Canada) is common
          in Canadian SME transactions, typically 10&ndash;30% of the purchase
          price.
        </p>

        <h2 className={h2Class}>Legal considerations</h2>

        <h3 className={h3Class}>Federal vs. provincial jurisdiction</h3>
        <p>
          Canada&rsquo;s legal system operates at both federal and provincial
          levels. Key considerations for acquirers:
        </p>
        <ul className={ulClass}>
          <li>Business incorporation can be federal (CBCA) or provincial &mdash; each has different rules and costs</li>
          <li>Employment law varies by province (e.g., Ontario&rsquo;s Employment Standards Act vs. BC&rsquo;s Employment Standards Act)</li>
          <li>Securities regulation is provincial &mdash; important if raising investor capital</li>
          <li>Competition Act review may be required for larger transactions</li>
        </ul>

        <h3 className={h3Class}>Deal structure</h3>
        <p>
          Similar to US transactions, Canadian acquisitions can be structured
          as{" "}
          <Link href="/learn/asset-purchase-vs-stock-purchase" className="text-apple-accent hover:underline">
            asset purchases or share purchases
          </Link>:
        </p>
        <ul className={ulClass}>
          <li><strong>Asset purchase:</strong> Buyer acquires specific assets, gets a stepped-up basis for CCA (Capital Cost Allowance) purposes</li>
          <li><strong>Share purchase:</strong> Buyer acquires shares of the corporation; more common in Canada due to LCGE (see tax section below)</li>
          <li><strong>Section 22 election:</strong> Joint election allowing the buyer to deduct doubtful accounts receivable (similar to US Section 338)</li>
        </ul>

        <h3 className={h3Class}>Quebec specifics</h3>
        <p>
          Acquiring a business in Quebec adds unique considerations:
        </p>
        <ul className={ulClass}>
          <li>Quebec Civil Code governs commercial transactions (vs. common law in the rest of Canada)</li>
          <li>French is the official language of business under Bill 101 (Charter of the French Language)</li>
          <li>Labour standards differ significantly from other provinces</li>
          <li>A working knowledge of French is essential for operating a Quebec business</li>
        </ul>

        <h2 className={h2Class}>Tax optimization</h2>

        <h3 className={h3Class}>Lifetime Capital Gains Exemption (LCGE)</h3>
        <p>
          The LCGE is one of Canada&rsquo;s most powerful tax incentives for
          business owners. Individuals can claim a lifetime exemption of
          approximately $1,016,836 CAD (indexed to inflation) on capital gains
          from the sale of Qualified Small Business Corporation (QSBC) shares.
          This is Canada&rsquo;s equivalent of the US{" "}
          <Link href="/learn/qsbs-qualified-small-business-stock" className="text-apple-accent hover:underline">
            QSBS exclusion
          </Link>.
        </p>
        <p>
          To qualify for LCGE:
        </p>
        <ul className={ulClass}>
          <li>Shares must be of a Canadian-controlled private corporation (CCPC)</li>
          <li>At the time of sale, 90%+ of assets must be used in active business in Canada</li>
          <li>Throughout the 24 months before sale, 50%+ of assets must be active business assets</li>
          <li>The individual must have held the shares for at least 24 months</li>
        </ul>

        <h3 className={h3Class}>Corporate tax rates</h3>
        <ul className={ulClass}>
          <li><strong>Small business deduction:</strong> Combined federal/provincial rate of ~12&ndash;15% on the first $500K of active business income (varies by province)</li>
          <li><strong>General corporate rate:</strong> ~26&ndash;31% on income above $500K (federal + provincial)</li>
          <li><strong>Integration principle:</strong> The Canadian tax system is designed so that income earned through a corporation and distributed as dividends is taxed at roughly the same rate as personal income</li>
        </ul>

        <h3 className={h3Class}>Other tax considerations</h3>
        <ul className={ulClass}>
          <li><strong>SR&amp;ED tax credits:</strong> Canada offers generous Scientific Research and Experimental Development credits (up to 35% for small CCPCs)</li>
          <li><strong>Capital Cost Allowance (CCA):</strong> Canada&rsquo;s equivalent of US depreciation, with accelerated rates for certain asset classes</li>
          <li><strong>GST/HST:</strong> Federal sales tax of 5% (GST) plus provincial sales tax (0&ndash;10% depending on province), must be registered and collected</li>
        </ul>

        <h2 className={h2Class}>Deal sourcing in Canada</h2>
        <ul className={ulClass}>
          <li><strong>Brokers:</strong> Sunbelt Business Brokers (Canada), MNP, BDO, local M&amp;A advisors</li>
          <li><strong>Online platforms:</strong> BizBuySell Canada, BusinessesForSale.com, Acquire.com</li>
          <li><strong>Direct outreach:</strong> Industry associations, trade shows, and{" "}
            <Link href="/learn/deal-sourcing-strategies" className="text-apple-accent hover:underline">
              proprietary deal sourcing
            </Link>{" "}
            techniques</li>
          <li><strong>Professional advisors:</strong> Chartered accountants (CPAs), business lawyers, and wealth advisors who counsel retiring owners</li>
          <li><strong>BDC advisory:</strong> BDC offers a seller preparation and matching service</li>
        </ul>

        <h2 className={h2Class}>The Canadian ETA ecosystem</h2>
        <p>
          Canada&rsquo;s ETA ecosystem is smaller but growing rapidly:
        </p>
        <ul className={ulClass}>
          <li><strong>Business schools:</strong> Ivey, Rotman, Schulich, Queen&rsquo;s, and HEC Montr&eacute;al are developing ETA courses and student interest</li>
          <li><strong>Search fund investors:</strong> A growing number of Canadian family offices and successful entrepreneurs are investing in search funds</li>
          <li><strong>Community:</strong> The Canadian ETA community is connected through events, LinkedIn groups, and cross-border relationships with US search fund networks</li>
        </ul>

        <h2 className={h2Class}>US vs. Canada: key differences for searchers</h2>
        <ul className={ulClass}>
          <li><strong>Financing:</strong> BDC/CSBFP vs. SBA &mdash; similar concepts but different programs, limits, and qualification criteria</li>
          <li><strong>Tax:</strong> LCGE (~$1M) vs. QSBS ($10M) &mdash; US offers a more generous exclusion</li>
          <li><strong>Multiples:</strong> Comparable for similar industries, though Canada has less PE competition at the smaller end</li>
          <li><strong>Legal:</strong> Provincial variation adds complexity not present in most US transactions</li>
          <li><strong>Currency:</strong> CAD/USD exchange fluctuation affects cross-border investors</li>
          <li><strong>Immigration:</strong> Foreign nationals need work permits (Intra-Company Transfer, LMIA-exempt categories, or Provincial Nominee Programs)</li>
        </ul>
        <p>
          For a broader comparison of markets, see our{" "}
          <Link href="/learn/best-countries-buy-business" className="text-apple-accent hover:underline">
            best countries to buy a business
          </Link>{" "}
          ranking, and for the European alternative, explore our{" "}
          <Link href="/learn/eta-europe" className="text-apple-accent hover:underline">
            ETA in Europe
          </Link>{" "}
          overview.
        </p>
      </div>
    </article>
  );
}
