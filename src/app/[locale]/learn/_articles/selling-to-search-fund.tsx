import Link from "next/link";
import { h1Class, h2Class, h3Class, bodyClass, ulClass } from "./shared-styles";

export default function SellingToSearchFundArticle() {
  return (
    <article>
      <h1 className={h1Class}>
        Selling Your Business to a Search Fund: What to Expect
      </h1>
      <p className="text-sm text-apple-gray-500 mt-3">14 min read</p>

      <div className={bodyClass}>
        <p>
          A search fund buyer is not a private equity firm, a strategic
          acquirer, or a competitor. They are an individual entrepreneur
          &mdash; often an MBA graduate &mdash; who has raised capital to
          find and acquire one business to operate as CEO. If you are a
          business owner considering selling to a search fund, this guide
          explains what the process looks like, what to expect, and why
          many sellers find search fund buyers to be the ideal successor.
        </p>

        <h2 className={h2Class}>What is a search fund buyer?</h2>
        <ul className={ulClass}>
          <li><strong>Individual operator:</strong> A single person (or pair) who will become CEO of your business. Not a fund, not a corporation</li>
          <li><strong>Backed by investors:</strong> Search fund investors provide acquisition equity ($2&ndash;$20M). The searcher typically invests their own money alongside investors</li>
          <li><strong>Long-term focus:</strong> Average hold period is 5&ndash;8 years. No quick-flip, no asset stripping</li>
          <li><strong>Hands-on:</strong> The buyer will work in the business full-time, usually relocating to your location</li>
          <li><strong>See:</strong>{" "}
            <Link href="/learn/what-is-eta" className="text-apple-accent hover:underline">
              What is a search fund?
            </Link></li>
        </ul>

        <h2 className={h2Class}>Why sell to a search fund?</h2>
        <ul className={ulClass}>
          <li><strong>Your employees are protected:</strong> Search fund buyers need your team. They are not bringing in a management team to replace everyone. Employee retention is their top priority</li>
          <li><strong>Your legacy continues:</strong> The buyer plans to grow your business, not dismantle it. Your company name, culture, and customer relationships are what they are paying for</li>
          <li><strong>Personal attention:</strong> You work directly with the buyer &mdash; not a deal team, not a junior associate. The person negotiating is the person who will run the business</li>
          <li><strong>Fair valuation:</strong> Search fund acquisitions typically close at{" "}
            <Link href="/learn/ebitda-multiples-by-industry" className="text-apple-accent hover:underline">
              4&ndash;6x EBITDA
            </Link>{" "}
            &mdash; competitive with other buyer types for businesses in this size range</li>
          <li><strong>Clean process:</strong> Experienced search fund investors provide governance and ensure the transaction is professionally managed</li>
        </ul>

        <h2 className={h2Class}>What does the process look like?</h2>

        <h3 className={h3Class}>1. Initial contact &amp; NDA</h3>
        <ul className={ulClass}>
          <li>The searcher reaches out (often through a broker, advisor, or direct outreach)</li>
          <li>After signing an NDA, you share high-level financial information (P&amp;L, revenue trends, customer overview)</li>
          <li>The searcher evaluates fit against their criteria</li>
        </ul>

        <h3 className={h3Class}>2. Letter of Intent (LOI)</h3>
        <ul className={ulClass}>
          <li>If interested, the searcher submits a{" "}
            <Link href="/learn/letter-of-intent" className="text-apple-accent hover:underline">
              Letter of Intent
            </Link>{" "}
            with proposed price, structure, and timeline</li>
          <li>The LOI typically includes a 60&ndash;90 day exclusivity period for due diligence</li>
          <li>Price is usually based on a multiple of{" "}
            <Link href="/learn/adjusted-ebitda" className="text-apple-accent hover:underline">
              adjusted EBITDA
            </Link></li>
        </ul>

        <h3 className={h3Class}>3. Due diligence</h3>
        <ul className={ulClass}>
          <li>The searcher (with investor support) reviews financials, customers, employees, contracts, and operations</li>
          <li>A{" "}
            <Link href="/learn/quality-of-earnings" className="text-apple-accent hover:underline">
              Quality of Earnings (QoE)
            </Link>{" "}
            report is common &mdash; an independent review of your financial statements</li>
          <li>Expect questions about customer concentration, key employees, recurring revenue, and growth potential</li>
        </ul>

        <h3 className={h3Class}>4. Purchase agreement &amp; closing</h3>
        <ul className={ulClass}>
          <li>Attorneys draft a{" "}
            <Link href="/learn/spa-key-clauses" className="text-apple-accent hover:underline">
              Share Purchase Agreement (SPA)
            </Link>{" "}
            or{" "}
            <Link href="/learn/apa-guide" className="text-apple-accent hover:underline">
              Asset Purchase Agreement (APA)
            </Link></li>
          <li>Financing is finalized (bank loan + investor equity + potentially{" "}
            <Link href="/learn/seller-financing" className="text-apple-accent hover:underline">
              seller financing
            </Link>)</li>
          <li>Closing typically occurs 90&ndash;120 days after LOI signing</li>
        </ul>

        <h3 className={h3Class}>5. Transition period</h3>
        <ul className={ulClass}>
          <li>Most deals include a 6&ndash;12 month transition period where you help the new CEO learn the business</li>
          <li>You may stay as a consultant, advisor, or board member</li>
          <li>The buyer introduces themselves to employees, customers, and vendors gradually</li>
        </ul>

        <h2 className={h2Class}>Common seller concerns</h2>
        <ul className={ulClass}>
          <li><strong>&ldquo;They&rsquo;re too young / inexperienced&rdquo;:</strong> Search fund buyers are carefully vetted by investors who have evaluated hundreds of candidates. They are ambitious, coachable, and supported by an experienced board. Many have relevant industry or management experience</li>
          <li><strong>&ldquo;Can they actually close?&rdquo;:</strong> Search fund investors have committed capital. Financing certainty is typically 90%+ once LOI is signed, compared to 50&ndash;60% for individual buyers without committed backing</li>
          <li><strong>&ldquo;Will they fire my people?&rdquo;:</strong> Employee retention is critical to search fund success. The buyer needs your team to operate the business. Mass layoffs are extremely rare</li>
          <li><strong>&ldquo;The price seems low&rdquo;:</strong> Search fund valuations (4&ndash;6x EBITDA) are market-rate for businesses in the $1&ndash;5M EBITDA range. PE firms offer higher multiples only for larger businesses ($5M+ EBITDA)</li>
        </ul>

        <h2 className={h2Class}>Seller financing: what to expect</h2>
        <ul className={ulClass}>
          <li>Many search fund deals include 10&ndash;20% seller financing (a seller note)</li>
          <li>This is not a sign of weakness &mdash; it is standard in small business acquisitions</li>
          <li>Seller notes align incentives: you earn interest while supporting the buyer&rsquo;s success</li>
          <li>Typical terms: 5&ndash;7% interest, 3&ndash;5 year term, often subordinated to bank debt</li>
        </ul>

        <h2 className={h2Class}>How search funds compare to other buyers</h2>
        <ul className={ulClass}>
          <li><strong>vs. Private Equity:</strong> PE brings more capital but less personal attention. PE may replace management. Search fund CEO stays for 5&ndash;8 years</li>
          <li><strong>vs. Strategic acquirer:</strong> Strategics may pay higher multiples but often consolidate operations, relocate functions, and reduce headcount</li>
          <li><strong>vs. Individual buyer (no backing):</strong> Search fund buyers have committed investor capital, making financing more certain. Individual buyers often struggle to secure funding</li>
          <li><strong>See:</strong>{" "}
            <Link href="/learn/strategic-vs-financial-sale" className="text-apple-accent hover:underline">
              strategic vs. financial sale comparison
            </Link></li>
        </ul>

        <p>
          For more on the{" "}
          <Link href="/learn/seller-psychology" className="text-apple-accent hover:underline">
            emotional journey of selling
          </Link>{" "}
          and how to{" "}
          <Link href="/learn/exit-readiness-plan" className="text-apple-accent hover:underline">
            prepare your business for sale
          </Link>, see our seller guides.
        </p>
      </div>
    </article>
  );
}
