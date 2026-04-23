import { h1Class, h2Class, h3Class, bodyClass, ulClass, olClass } from "./shared-styles";
import Link from "next/link";

export default function SecondarySalesArticle() {
  return (
    <article>
      <h1 className={h1Class}>Secondary Sales: Selling to Another PE Firm or Search Fund</h1>
      <div className={bodyClass}>
        <p>A secondary sale &mdash; selling your company to another private equity firm, independent sponsor, or search fund operator &mdash; is one of the most common exit paths for search fund companies. Unlike a strategic sale (where a larger company in your industry acquires you), a secondary sale involves a financial buyer who plans to continue operating and growing the business under new ownership.</p>
      </div>

      <h2 className={h2Class}>Why Secondary Sales Are Common in ETA</h2>
      <div className={bodyClass}>
        <ul className={ulClass}>
          <li><strong>Search fund size range:</strong> Many search fund acquisitions grow to $3&ndash;10M EBITDA &mdash; too small for large strategic buyers but perfect for mid-market PE firms</li>
          <li><strong>Platform potential:</strong> PE firms see well-run search fund companies as ideal platforms for <Link href="/learn/buy-and-build" className="text-apple-accent hover:underline">buy-and-build strategies</Link></li>
          <li><strong>Professional management:</strong> Search fund CEOs have already built management teams and systems that PE firms value</li>
          <li><strong>Clean financials:</strong> Investor-backed search fund companies typically have strong financial reporting</li>
          <li><strong>Growth trajectory:</strong> Search fund companies often show strong organic + acquisitive growth trends</li>
        </ul>
      </div>

      <h2 className={h2Class}>Types of Financial Buyers</h2>
      <div className={bodyClass}>
        <ul className={ulClass}>
          <li><strong>Lower middle-market PE:</strong> Firms targeting $3&ndash;15M EBITDA. They&apos;ll typically offer 5&ndash;8x EBITDA and bring operational support.</li>
          <li><strong>Independent sponsors:</strong> Individuals or small teams who raise capital deal-by-deal. Often former search fund operators or PE professionals.</li>
          <li><strong>Family offices:</strong> Wealthy families seeking private company investments. Often longer hold periods and less pressure.</li>
          <li><strong>Second-generation search funds:</strong> Newer search fund operators looking for established platforms.</li>
          <li><strong>Holding companies:</strong> Permanent capital vehicles looking for add-on acquisitions in your industry.</li>
        </ul>
      </div>

      <h2 className={h2Class}>What Financial Buyers Look For</h2>
      <div className={bodyClass}>
        <ul className={ulClass}>
          <li><strong>Stable, growing EBITDA:</strong> Consistent growth of 10&ndash;20% annually</li>
          <li><strong>Strong management team:</strong> They want to know the business can run without you (or with you staying in a reduced role)</li>
          <li><strong>Recurring revenue:</strong> Contracts, subscriptions, maintenance agreements &mdash; predictable cash flows</li>
          <li><strong>Add-on acquisition pipeline:</strong> Opportunities for further consolidation in your industry</li>
          <li><strong>Clean legal and financial records:</strong> No surprises in due diligence</li>
        </ul>
      </div>

      <h2 className={h2Class}>CEO Role Post-Sale</h2>
      <div className={bodyClass}>
        <ul className={ulClass}>
          <li><strong>Stay and grow:</strong> Many PE buyers want the CEO to stay for 2&ndash;3 years and accelerate growth with additional capital</li>
          <li><strong>Rollover equity:</strong> You may be asked to <Link href="/learn/rollover-equity" className="text-apple-accent hover:underline">roll over 20&ndash;40% of your equity</Link> into the new entity, aligning incentives</li>
          <li><strong>Management incentive plan:</strong> New equity or option grants in the PE-backed entity, giving you a &quot;second bite at the apple&quot;</li>
          <li><strong>Transition and exit:</strong> If you want to leave, plan a 6&ndash;12 month transition with a successor</li>
        </ul>
      </div>

      <h2 className={h2Class}>Key Takeaways</h2>
      <div className={bodyClass}>
        <ul className={ulClass}>
          <li>Secondary sales to PE firms are one of the most common exit paths for search fund companies</li>
          <li>PE buyers value professional management, clean financials, growth trajectory, and consolidation potential</li>
          <li>Expect multiples of 5&ndash;8x EBITDA for well-run businesses in the $3&ndash;15M EBITDA range</li>
          <li>Rollover equity gives you a &quot;second bite&quot; &mdash; often the second exit is more valuable than the first</li>
          <li>Start <Link href="/learn/preparing-company-exit" className="text-apple-accent hover:underline">exit preparation</Link> 18 months in advance for optimal outcomes</li>
        </ul>
      </div>

      <h2 className={h2Class}>Related Resources</h2>
      <ul className={ulClass}>
        <li><Link href="/learn/exit-strategies" className="text-apple-accent hover:underline">Exit Strategies for Search Fund CEOs</Link></li>
        <li><Link href="/learn/preparing-company-exit" className="text-apple-accent hover:underline">Preparing Your Company for Exit</Link></li>
        <li><Link href="/learn/rollover-equity" className="text-apple-accent hover:underline">Rollover Equity</Link></li>
        <li><Link href="/learn/strategic-vs-financial-sale" className="text-apple-accent hover:underline">Strategic vs. Financial Sale</Link></li>
      </ul>

      <h2 className={h2Class}>Sources</h2>
      <ul className={ulClass}>
        <li>Stanford GSB, <em>Exit Patterns in Search Fund Companies</em> (2024)</li>
        <li>PitchBook, <em>Lower Middle-Market PE Deal Activity</em> (2024)</li>
        <li>Harvard Business Review, <em>Secondary Buyouts: A Growing Exit Path</em> (2024)</li>
      </ul>
    </article>
  );
}
