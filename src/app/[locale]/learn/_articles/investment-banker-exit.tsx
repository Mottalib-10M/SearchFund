import { h1Class, h2Class, h3Class, bodyClass, ulClass, olClass } from "./shared-styles";
import Link from "next/link";

export default function InvestmentBankerExitArticle() {
  return (
    <article>
      <h1 className={h1Class}>How to Select &amp; Work with an Investment Banker for Your Exit</h1>
      <div className={bodyClass}>
        <p>When it&apos;s time to <Link href="/learn/preparing-company-exit" className="text-apple-accent hover:underline">sell your company</Link>, an investment banker (or M&amp;A advisor) can significantly increase the sale price and manage the complexity of the process. For search fund companies in the $5-30M revenue range, choosing the right advisor and managing the relationship effectively is critical to maximizing your exit outcome.</p>
      </div>

      <h2 className={h2Class}>When to Hire an Investment Banker</h2>
      <div className={bodyClass}>
        <ul className={ulClass}>
          <li><strong>EBITDA above $2M:</strong> Below this level, the fees may not justify the cost. Consider a business broker instead.</li>
          <li><strong>Timeline:</strong> Engage 6-9 months before your target close date</li>
          <li><strong>Multiple buyers expected:</strong> Bankers add the most value when they create competitive tension among multiple bidders</li>
          <li><strong>Complex deal:</strong> If the transaction involves rollover equity, earnouts, or complicated structures, professional guidance pays for itself</li>
          <li><strong>You lack M&amp;A experience:</strong> Even experienced search fund CEOs benefit from sell-side expertise</li>
        </ul>
      </div>

      <h2 className={h2Class}>Selecting the Right Banker</h2>
      <div className={bodyClass}>
        <h3 className={h3Class}>What to Look For</h3>
        <ul className={ulClass}>
          <li><strong>Industry expertise:</strong> Has the banker closed deals in your industry? They should know the buyers and speak your language.</li>
          <li><strong>Size fit:</strong> Choose a firm that regularly handles transactions your size. A bulge-bracket firm won&apos;t prioritize a $10M EBITDA deal.</li>
          <li><strong>Buyer relationships:</strong> Ask for a preliminary buyer list. A good banker should immediately name 15-20 likely buyers.</li>
          <li><strong>Senior attention:</strong> Will the senior banker who pitches you actually run your deal? Get it in writing.</li>
          <li><strong>Track record:</strong> Ask for 5 recent comparable transactions with references</li>
        </ul>

        <h3 className={h3Class}>Red Flags</h3>
        <ul className={ulClass}>
          <li>Promising unrealistic valuations to win the engagement</li>
          <li>No industry specialization or relevant deal history</li>
          <li>Bait-and-switch: senior banker pitches, junior team executes</li>
          <li>Pressure to sign an exclusive engagement immediately</li>
        </ul>
      </div>

      <h2 className={h2Class}>Fee Structures</h2>
      <div className={bodyClass}>
        <ul className={ulClass}>
          <li><strong>Success fee:</strong> Typically 3-5% of transaction value for deals under $25M; 1-3% for larger deals</li>
          <li><strong>Monthly retainer:</strong> $10-25K/month to cover the banker&apos;s time during the process (often credited against success fee)</li>
          <li><strong>Minimum fee:</strong> Most bankers have a minimum fee ($150-500K) regardless of deal size</li>
          <li><strong>Expense reimbursement:</strong> Travel, data room, and marketing materials are typically separate</li>
          <li><strong>Tail provision:</strong> The banker earns a fee on any sale to a buyer they introduced, typically for 12-24 months after engagement ends</li>
        </ul>
      </div>

      <h2 className={h2Class}>The Sell-Side Process</h2>
      <div className={bodyClass}>
        <ol className={olClass}>
          <li><strong>Preparation (4-6 weeks):</strong> CIM creation, financial model, data room setup, buyer list</li>
          <li><strong>Marketing (4-6 weeks):</strong> Teaser distribution, NDA execution, CIM delivery</li>
          <li><strong>First round (3-4 weeks):</strong> Receive IOIs, evaluate and shortlist bidders</li>
          <li><strong>Management presentations (2-3 weeks):</strong> Meet with shortlisted buyers</li>
          <li><strong>Final bids (3-4 weeks):</strong> Receive LOIs, negotiate terms, select buyer</li>
          <li><strong>Due diligence &amp; closing (6-10 weeks):</strong> Buyer due diligence, definitive agreement, close</li>
        </ol>
      </div>

      <h2 className={h2Class}>Key Takeaways</h2>
      <div className={bodyClass}>
        <ul className={ulClass}>
          <li>Hire an investment banker if your EBITDA exceeds $2M and you expect multiple interested buyers</li>
          <li>Choose based on industry expertise, deal size fit, and senior banker commitment, not just the pitch</li>
          <li>Typical fees: 3-5% success fee plus $10-25K monthly retainer for sub-$25M deals</li>
          <li>Engage 6-9 months before your target close for optimal process management</li>
          <li>The entire sell-side process takes 6-9 months from engagement to close</li>
        </ul>
      </div>

      <h2 className={h2Class}>Related Resources</h2>
      <ul className={ulClass}>
        <li><Link href="/learn/preparing-company-exit" className="text-apple-accent hover:underline">Preparing Your Company for Exit</Link></li>
        <li><Link href="/learn/exit-strategies" className="text-apple-accent hover:underline">Exit Strategies for Search Fund CEOs</Link></li>
        <li><Link href="/learn/secondary-sales" className="text-apple-accent hover:underline">Secondary Sales to PE Firms</Link></li>
        <li><Link href="/learn/strategic-vs-financial-sale" className="text-apple-accent hover:underline">Strategic vs. Financial Sale</Link></li>
      </ul>

      <h2 className={h2Class}>Frequently asked questions</h2>

      <h3 className={h3Class}>How much does it cost to hire an investment banker for a lower middle market exit?</h3>
      <p className={bodyClass}>
        For transactions in the $5-30M range typical of search fund exits, expect total investment banking fees of 3-5% of the transaction value. Axial&rsquo;s 2024 fee survey shows the median success fee for sub-$25M deals is 4%, with most banks also charging a monthly retainer of $10-25K (typically credited against the success fee at close). Most bankers have minimum fee floors of $150K-$500K regardless of deal size. Additional costs include data room expenses ($2K-$5K), marketing materials ($5K-$15K), and travel. For a $15M EBITDA business selling at 6x ($90M EV), total banking fees would typically be $2.7M-$4.5M. The higher fees at smaller deal sizes reflect the similar level of work required regardless of transaction value.
      </p>

      <h3 className={h3Class}>When should a search fund CEO start preparing for an exit?</h3>
      <p className={bodyClass}>
        Begin exit preparation 12-18 months before your target exit date, and engage an investment banker 6-9 months before. Stanford GSB&rsquo;s research on search fund exits found that companies with 12+ months of exit preparation sold at multiples 1.0-1.5x higher than those that initiated sale processes opportunistically. Preparation includes cleaning up financials (2-3 years of audited or reviewed statements), professionalizing operations, reducing customer and key-person concentration, and building the management team so the business operates independently of you. Harvard Business Review recommends building a &ldquo;sale-ready&rdquo; business from day one, as the disciplines that make a business attractive to buyers also make it better to operate.
      </p>

      <h3 className={h3Class}>What is the typical timeline for a sell-side M&amp;A process?</h3>
      <p className={bodyClass}>
        A complete sell-side process typically takes 6-9 months from investment banker engagement to close. The phases are: preparation (4-6 weeks for CIM creation, data room setup, and buyer list development), marketing (4-6 weeks for teaser distribution and CIM delivery), first round (3-4 weeks to receive and evaluate IOIs), management presentations (2-3 weeks), final bids and LOI negotiation (3-4 weeks), and buyer due diligence through closing (6-10 weeks). According to Axial&rsquo;s market data, the median time from engaging a banker to signed LOI is 3-4 months, with an additional 2-3 months for due diligence and closing. Processes involving strategic buyers often move faster than those involving financial sponsors.
      </p>

      <h2 className={h2Class}>Sources</h2>
      <ul className={ulClass}>
        <li>Harvard Business Review, <em>Selecting and Managing Your Sell-Side Advisor</em> (2024)</li>
        <li>Axial, <em>Investment Banking Fee Survey for Lower Middle-Market Transactions</em> (2024)</li>
        <li>Stanford GSB, <em>Exit Process Management for Search Fund Companies</em> (2024)</li>
      </ul>
    </article>
  );
}
