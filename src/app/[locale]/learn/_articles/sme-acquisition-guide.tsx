import Link from "next/link";
import { h1Class, h2Class, h3Class, bodyClass, ulClass, olClass } from "./shared-styles";

export default function SMEAcquisitionGuideArticle() {
  return (
    <article>
      <h1 className={h1Class}>
        SME Acquisition: A Beginner&rsquo;s Guide
      </h1>
      <p className="text-sm text-apple-gray-500 mt-3">16 min read</p>

      <div className={bodyClass}>
        <p>
          Acquiring a small or medium-sized enterprise (SME) is one of the
          fastest paths to business ownership. Unlike{" "}
          <Link href="/learn/buying-vs-starting-business" className="text-apple-accent hover:underline">
            starting a business from scratch
          </Link>,
          you inherit existing revenue, customers, employees, and systems.
          This guide walks first-time buyers through every stage of the
          SME acquisition process.
        </p>

        <h2 className={h2Class}>What qualifies as an SME?</h2>
        <ul className={ulClass}>
          <li><strong>US definition:</strong> Under 500 employees (SBA), though most search fund targets have 20&ndash;200 employees and $2M&ndash;$20M revenue</li>
          <li><strong>EU definition:</strong> Under 250 employees and &euro;50M revenue. The &ldquo;sweet spot&rdquo; for ETA is &euro;2M&ndash;&euro;15M revenue</li>
          <li><strong>Typical search fund target:</strong> $1M&ndash;$5M EBITDA, $5M&ndash;$30M revenue, 20&ndash;150 employees, single or few locations</li>
        </ul>

        <h2 className={h2Class}>Step 1: Define your acquisition criteria</h2>
        <p>
          Before looking at any businesses, build your{" "}
          <Link href="/learn/search-fund-thesis" className="text-apple-accent hover:underline">
            acquisition thesis
          </Link>:
        </p>
        <ul className={ulClass}>
          <li><strong>Industry:</strong> What{" "}
            <Link href="/learn/best-industries-search-funds" className="text-apple-accent hover:underline">
              industries
            </Link>{" "}
            interest you? Focus on 2&ndash;3 sectors with favorable characteristics</li>
          <li><strong>Geography:</strong> Where are you willing to live? Physical proximity matters for SMEs</li>
          <li><strong>Size:</strong> What EBITDA and revenue range? This determines financing options and deal complexity</li>
          <li><strong>Business model:</strong> Recurring revenue preferred.{" "}
            <Link href="/learn/recurring-revenue-models" className="text-apple-accent hover:underline">
              Recurring revenue businesses
            </Link>{" "}
            command higher multiples but offer more predictable cash flow</li>
          <li><strong>Deal-breakers:</strong> Customer concentration above 25%? Owner dependency? Declining revenue?</li>
        </ul>

        <h2 className={h2Class}>Step 2: Assemble your advisory team</h2>
        <p>
          No one acquires a business alone. Build your team early:
        </p>
        <ul className={ulClass}>
          <li><strong>M&amp;A attorney:</strong> Specializing in SME transactions, not generic business law. Budget $30K&ndash;$75K in legal fees</li>
          <li><strong>Accountant/CPA:</strong> Preferably one who has done buy-side work. They&rsquo;ll help evaluate financials and structure the deal tax-efficiently</li>
          <li><strong>Lender relationship:</strong> Start conversations with SBA lenders (US) or business acquisition lenders early. Pre-approval strengthens your position</li>
          <li><strong>Industry advisor:</strong> Someone with operational experience in your target industry</li>
          <li><strong>Mentor/coach:</strong> An experienced searcher or{" "}
            <Link href="/learn/working-with-advisors" className="text-apple-accent hover:underline">
              advisor
            </Link>{" "}
            who has been through the process</li>
        </ul>

        <h2 className={h2Class}>Step 3: Source deal flow</h2>
        <p>
          Finding businesses for sale requires a multi-channel approach.
          See our detailed{" "}
          <Link href="/learn/how-find-businesses-for-sale" className="text-apple-accent hover:underline">
            how to find businesses for sale
          </Link>{" "}
          guide:
        </p>
        <ul className={ulClass}>
          <li><strong>
            <Link href="/learn/working-with-brokers" className="text-apple-accent hover:underline">
              Business brokers
            </Link>:
          </strong> Control 50&ndash;70% of SME deal flow. Register with 10&ndash;20 in your target markets</li>
          <li><strong>Online marketplaces:</strong> BizBuySell, BusinessesForSale.com, Axial (mid-market). Good for initial screening</li>
          <li><strong>
            <Link href="/learn/proprietary-deal-flow" className="text-apple-accent hover:underline">
              Proprietary outreach
            </Link>:
          </strong> Direct contact with owners through cold email, direct mail, and networking. Better pricing but more effort</li>
          <li><strong>Professional referrals:</strong> CPAs, lawyers, wealth managers, and bankers often know owners considering a sale</li>
        </ul>

        <h2 className={h2Class}>Step 4: Screen and evaluate targets</h2>

        <h3 className={h3Class}>Initial screening (15 minutes per deal)</h3>
        <ul className={ulClass}>
          <li>Does it meet your size criteria (revenue, EBITDA)?</li>
          <li>Is the asking price in a reasonable range (3&ndash;6x EBITDA for most SMEs)?</li>
          <li>Is the industry attractive? Growing, stable, or declining?</li>
          <li>Is the geography acceptable?</li>
          <li>Are there obvious red flags ({" "}
            <Link href="/learn/customer-concentration-risk" className="text-apple-accent hover:underline">
              customer concentration
            </Link>,{" "}
            declining revenue, litigation)?</li>
        </ul>

        <h3 className={h3Class}>Deep evaluation (2&ndash;5 hours per deal)</h3>
        <ul className={ulClass}>
          <li>Review the CIM (Confidential Information Memorandum) thoroughly</li>
          <li>Calculate your own{" "}
            <Link href="/learn/adjusted-ebitda" className="text-apple-accent hover:underline">
              adjusted EBITDA
            </Link></li>
          <li>Assess{" "}
            <Link href="/learn/owner-dependent-business" className="text-apple-accent hover:underline">
              owner dependency
            </Link>{" "}
            and management team strength</li>
          <li>Evaluate competitive position and market dynamics</li>
          <li>Model acquisition economics: purchase price, debt service, cash flow to equity</li>
        </ul>

        <h2 className={h2Class}>Step 5: Submit a Letter of Intent (LOI)</h2>
        <p>
          The{" "}
          <Link href="/learn/letter-of-intent" className="text-apple-accent hover:underline">
            LOI
          </Link>{" "}
          is your formal offer. Key terms include:
        </p>
        <ul className={ulClass}>
          <li><strong>Purchase price:</strong> Based on a multiple of{" "}
            <Link href="/learn/business-valuation" className="text-apple-accent hover:underline">
              adjusted EBITDA
            </Link></li>
          <li><strong>Deal structure:</strong> Asset purchase vs. share purchase ({" "}
            <Link href="/learn/asset-purchase-vs-stock-purchase" className="text-apple-accent hover:underline">
              comparison
            </Link>)</li>
          <li><strong>Financing contingency:</strong> Protection if financing falls through</li>
          <li><strong>Due diligence period:</strong> Typically 60&ndash;90 days</li>
          <li><strong>Exclusivity:</strong> 60&ndash;90 day no-shop period</li>
          <li><strong>Seller involvement:</strong> Transition period, training, and{" "}
            <Link href="/learn/seller-financing" className="text-apple-accent hover:underline">
              seller financing
            </Link>{" "}
            terms</li>
        </ul>

        <h2 className={h2Class}>Step 6: Conduct due diligence</h2>
        <p>
          Due diligence is the most critical phase. Use our{" "}
          <Link href="/learn/due-diligence-checklist" className="text-apple-accent hover:underline">
            comprehensive DD checklist
          </Link>{" "}
          and conduct three parallel workstreams:
        </p>
        <ol className={olClass}>
          <li><strong>
            <Link href="/learn/financial-due-diligence" className="text-apple-accent hover:underline">
              Financial DD
            </Link>:
          </strong> Revenue quality, EBITDA validation, working capital, cash flow analysis, and{" "}
            <Link href="/learn/quality-of-earnings" className="text-apple-accent hover:underline">
              Quality of Earnings
            </Link>{" "}
            report</li>
          <li><strong>
            <Link href="/learn/legal-due-diligence" className="text-apple-accent hover:underline">
              Legal DD
            </Link>:
          </strong> Contracts, litigation, IP, employment law, environmental, and regulatory compliance</li>
          <li><strong>
            <Link href="/learn/operational-due-diligence" className="text-apple-accent hover:underline">
              Operational DD
            </Link>:
          </strong> People, customers, processes, technology, facilities, and competitive position</li>
        </ol>
        <p>
          Watch for{" "}
          <Link href="/learn/red-flags-due-diligence" className="text-apple-accent hover:underline">
            red flags
          </Link>{" "}
          that should kill a deal or trigger a price renegotiation.
        </p>

        <h2 className={h2Class}>Step 7: Secure financing</h2>
        <p>
          Most SME acquisitions use a combination of debt and equity.
          See our{" "}
          <Link href="/learn/capital-stack-explained" className="text-apple-accent hover:underline">
            capital stack guide
          </Link>{" "}
          for the full framework:
        </p>
        <ul className={ulClass}>
          <li><strong>Senior debt (50&ndash;70%):</strong>{" "}
            <Link href="/learn/sba-7a-loans-complete-guide" className="text-apple-accent hover:underline">
              SBA 7(a)
            </Link>{" "}
            in the US, bank term loans in Europe</li>
          <li><strong>
            <Link href="/learn/seller-financing" className="text-apple-accent hover:underline">
              Seller note
            </Link>{" "}
            (10&ndash;20%):</strong> The seller finances part of the purchase price, typically at 5&ndash;7% interest</li>
          <li><strong>Equity (10&ndash;30%):</strong> Your capital plus investor equity (if using a{" "}
            <Link href="/learn/getting-started" className="text-apple-accent hover:underline">
              search fund
            </Link>{" "}
            structure)</li>
        </ul>

        <h2 className={h2Class}>Step 8: Close and transition</h2>
        <ul className={ulClass}>
          <li><strong>Purchase agreement:</strong> Your attorney drafts the definitive agreement based on LOI terms</li>
          <li><strong>Working capital adjustment:</strong> Ensure the business is delivered with adequate working capital</li>
          <li><strong>Wire funds and sign:</strong> Closing typically takes 1&ndash;2 days of document signing</li>
          <li><strong>Day 1 announcement:</strong> Communicate the ownership change to employees, customers, and vendors</li>
          <li><strong>
            <Link href="/learn/first-100-days" className="text-apple-accent hover:underline">
              First 100 days
            </Link>:
          </strong> Execute your transition plan. Listen more than you change in the first 90 days</li>
        </ul>

        <h2 className={h2Class}>Common mistakes first-time SME buyers make</h2>
        <ol className={olClass}>
          <li><strong>Searching too broadly:</strong> &ldquo;I&rsquo;ll buy any good business&rdquo; wastes months. Define clear criteria</li>
          <li><strong>Skipping the QoE:</strong> The $30K&ndash;$80K for a{" "}
            <Link href="/learn/quality-of-earnings" className="text-apple-accent hover:underline">
              Quality of Earnings report
            </Link>{" "}
            saves you from buying a $2M+ mistake</li>
          <li><strong>Falling in love:</strong> Deal fever is real. Walk away if the numbers don&rsquo;t work</li>
          <li><strong>Underestimating transition:</strong> Budget 6&ndash;12 months for the seller to{" "}
            <Link href="/learn/management-transition" className="text-apple-accent hover:underline">
              transition
            </Link>{" "}
            the business</li>
          <li><strong>Ignoring culture:</strong> You&rsquo;re not just buying financials &mdash; you&rsquo;re inheriting a team and culture</li>
          <li><strong>Over-leveraging:</strong> Aggressive debt structures work until they don&rsquo;t. Leave a margin of safety</li>
        </ol>

        <h2 className={h2Class}>How long does an SME acquisition take?</h2>
        <p>
          From first search to closing, expect{" "}
          <Link href="/learn/how-long-buy-business" className="text-apple-accent hover:underline">
            12&ndash;24 months
          </Link>{" "}
          for a traditional search fund and 6&ndash;18 months for a
          self-funded search or targeted acquisition. The typical breakdown:
        </p>
        <ul className={ulClass}>
          <li>Search and screening: 6&ndash;18 months</li>
          <li>LOI to close: 3&ndash;6 months</li>
          <li>Due diligence: 60&ndash;90 days (within LOI-to-close period)</li>
          <li>Financing: 30&ndash;60 days (running in parallel with DD)</li>
        </ul>

        <p>
          Ready to get started? Read our{" "}
          <Link href="/learn/getting-started" className="text-apple-accent hover:underline">
            complete getting started guide
          </Link>{" "}
          and learn about the{" "}
          <Link href="/learn/search-fund-lifecycle" className="text-apple-accent hover:underline">
            search fund lifecycle
          </Link>.
        </p>
      </div>
    </article>
  );
}
