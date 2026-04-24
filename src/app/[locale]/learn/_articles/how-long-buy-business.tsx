import Link from "next/link";
import { h1Class, h2Class, h3Class, bodyClass, ulClass } from "./shared-styles";

export default function HowLongBuyBusinessArticle() {
  return (
    <article>
      <h1 className={h1Class}>
        How Long Does It Take to Buy a Business?
      </h1>
      <p className="text-sm text-apple-gray-500 mt-3">13 min read</p>

      <div className={bodyClass}>
        <p>
          One of the most common questions from aspiring business buyers:
          how long will this actually take? The honest answer is 6&ndash;24
          months from the moment you start looking to the day you close.
          According to the Stanford 2024 Search Fund Study, the median
          traditional searcher takes approximately 20 months from fund
          formation to acquisition close. The timeline depends on your
          approach (search fund vs. self-funded), the complexity of the
          transaction, financing method, and how competitive the market is.
          Understanding the full{" "}
          <Link href="/learn/search-fund-lifecycle" className="text-apple-accent hover:underline">
            search fund lifecycle
          </Link>{" "}
          helps put each phase in context.
        </p>
        <p>
          This guide breaks down each phase of the acquisition timeline
          with realistic benchmarks drawn from the{" "}
          <Link href="/learn/stanford-2024-study" className="text-apple-accent hover:underline">
            Stanford 2024 study
          </Link>{" "}
          and practitioner experience.
        </p>

        <h2 className={h2Class}>The short answer</h2>
        <ul className={ulClass}>
          <li><strong>Self-funded search (part-time):</strong> 12&ndash;24 months from start to close</li>
          <li><strong>Self-funded search (full-time):</strong> 6&ndash;18 months</li>
          <li><strong>Traditional search fund:</strong> 18&ndash;30 months (including fundraise)</li>
          <li><strong>Direct acquisition (known target):</strong> 3&ndash;9 months</li>
        </ul>

        <h2 className={h2Class}>Phase 1: Preparation (1&ndash;3 months)</h2>
        <p>
          Before you look at a single deal, you need to prepare:
        </p>
        <ul className={ulClass}>
          <li>
            <strong>Define your criteria:</strong> Industry, geography,
            revenue range, EBITDA floor, deal-breakers. See our{" "}
            <Link href="/learn/pre-search-preparation" className="text-apple-accent hover:underline">
              pre-search preparation
            </Link>{" "}
            guide.
          </li>
          <li><strong>Build your team:</strong> Identify an M&amp;A attorney, CPA/accountant, and potential lenders</li>
          <li><strong>Secure financing pre-approval:</strong> If using{" "}
            <Link href="/learn/sba-7a-loans-complete-guide" className="text-apple-accent hover:underline">
              SBA 7(a)
            </Link>,
            get pre-qualified with a preferred lender
          </li>
          <li><strong>Financial preparation:</strong> Assess your personal capital, credit score, and liquidity requirements</li>
        </ul>

        <h2 className={h2Class}>Phase 2: Deal sourcing (2&ndash;12 months)</h2>
        <p>
          This is typically the longest and most variable phase. The
          timeline depends on how specific your criteria are and how
          actively you search.
        </p>

        <h3 className={h3Class}>Sourcing channels and timelines</h3>
        <ul className={ulClass}>
          <li><strong>Business brokers:</strong> Register with 5&ndash;15 brokers in your target market. Expect 2&ndash;6 months to see a strong pipeline. See our{" "}
            <Link href="/learn/deal-sourcing-strategies" className="text-apple-accent hover:underline">
              deal sourcing strategies
            </Link>.</li>
          <li><strong>Online marketplaces:</strong> BizBuySell, Axial, DealNexus &mdash; immediate access but lower quality</li>
          <li><strong>Direct outreach:</strong> Cold calling/mailing business owners. Highest quality but longest lead time (3&ndash;12 months to develop)</li>
          <li><strong>Professional referrals:</strong> CPAs, attorneys, wealth advisors &mdash; build relationships that produce deal flow over 3&ndash;6 months</li>
        </ul>

        <h3 className={h3Class}>Typical funnel</h3>
        <ul className={ulClass}>
          <li>Opportunities reviewed: 100&ndash;300</li>
          <li>Signed NDAs: 30&ndash;80</li>
          <li>First meetings: 15&ndash;40</li>
          <li>Deep analysis: 5&ndash;15</li>
          <li>LOIs submitted: 2&ndash;5</li>
          <li>LOIs accepted: 1</li>
        </ul>

        <h2 className={h2Class}>Phase 3: LOI and exclusivity (2&ndash;6 weeks)</h2>
        <p>
          Once you identify a target, drafting and negotiating the{" "}
          <Link href="/learn/letter-of-intent" className="text-apple-accent hover:underline">
            Letter of Intent
          </Link>{" "}
          typically takes 2&ndash;6 weeks. Key elements that affect
          timing:
        </p>
        <ul className={ulClass}>
          <li>Initial{" "}
            <Link href="/learn/business-valuation" className="text-apple-accent hover:underline">
              valuation
            </Link>{" "}
            analysis: 1&ndash;2 weeks</li>
          <li>LOI drafting and legal review: 1&ndash;2 weeks</li>
          <li>Negotiation with seller: 1&ndash;4 weeks (multiple rounds common)</li>
          <li>Exclusivity period: typically 60&ndash;120 days from LOI signing</li>
        </ul>

        <h2 className={h2Class}>Phase 4: Due diligence (45&ndash;120 days)</h2>
        <p>
          <Link href="/learn/due-diligence-checklist" className="text-apple-accent hover:underline">
            Due diligence
          </Link>{" "}
          is where many deals slow down or die. The timeline depends on
          deal complexity and seller responsiveness:
        </p>
        <ul className={ulClass}>
          <li><strong>Simple deals (&lt;$2M):</strong> 30&ndash;60 days</li>
          <li><strong>Mid-market ($2&ndash;$10M):</strong> 60&ndash;90 days</li>
          <li><strong>Complex deals ($10M+):</strong> 90&ndash;120 days</li>
        </ul>

        <h3 className={h3Class}>What takes the most time</h3>
        <ul className={ulClass}>
          <li>
            <strong>
              <Link href="/learn/quality-of-earnings" className="text-apple-accent hover:underline">
                Quality of earnings report
              </Link>:
            </strong>{" "}
            3&ndash;6 weeks for the accounting firm to complete
          </li>
          <li><strong>Legal review:</strong> Contracts, leases, IP, litigation &mdash; 3&ndash;6 weeks</li>
          <li><strong>Environmental (if applicable):</strong> Phase I assessments take 4&ndash;6 weeks</li>
          <li><strong>Seller responsiveness:</strong> The single biggest variable. Organized sellers save weeks; disorganized sellers add months.</li>
        </ul>

        <h2 className={h2Class}>Phase 5: Financing (30&ndash;90 days, parallel with DD)</h2>
        <p>
          Financing typically runs in parallel with due diligence:
        </p>
        <ul className={ulClass}>
          <li><strong>SBA 7(a):</strong> 45&ndash;90 days from application to funding, per SBA processing data. Start early &mdash; SBA underwriting is the most common cause of closing delays.</li>
          <li><strong>Conventional bank loan:</strong> 30&ndash;60 days</li>
          <li><strong>Search fund equity:</strong> 2&ndash;4 weeks (investors have pre-committed)</li>
          <li>
            <strong>
              <Link href="/learn/seller-financing" className="text-apple-accent hover:underline">
                Seller financing
              </Link>:
            </strong>{" "}
            Negotiated as part of the deal, no additional timeline
          </li>
        </ul>

        <h2 className={h2Class}>Phase 6: Closing (2&ndash;4 weeks)</h2>
        <p>
          After DD is complete and financing is approved, the closing
          process takes 2&ndash;4 weeks:
        </p>
        <ul className={ulClass}>
          <li>Purchase agreement finalization: 1&ndash;2 weeks of back-and-forth between attorneys</li>
          <li>Working capital true-up calculations</li>
          <li>Third-party consents (landlord, key customers, licenses)</li>
          <li>Wire transfers and funding</li>
          <li>Post-closing adjustments (typically within 60&ndash;90 days after closing)</li>
        </ul>

        <h2 className={h2Class}>What speeds things up</h2>
        <ul className={ulClass}>
          <li><strong>Pre-approved financing:</strong> Having SBA pre-qualification or committed equity eliminates weeks of uncertainty</li>
          <li><strong>Experienced advisors:</strong> Lawyers and accountants who have done acquisition transactions before</li>
          <li><strong>Organized seller:</strong> Clean books, organized contracts, responsive communication</li>
          <li><strong>Clear criteria:</strong> Knowing exactly what you want reduces time spent on wrong targets</li>
          <li><strong>Full-time search:</strong> Part-time searchers take 50&ndash;100% longer than full-time</li>
        </ul>

        <h2 className={h2Class}>What slows things down</h2>
        <ul className={ulClass}>
          <li><strong>Seller cold feet:</strong> The most common delay &mdash; sellers who aren&rsquo;t emotionally ready</li>
          <li><strong>Financing complications:</strong> SBA underwriting issues, lender changes, collateral shortfalls</li>
          <li><strong>Due diligence surprises:</strong> Discovery of issues requiring renegotiation or additional analysis</li>
          <li><strong>Legal complexity:</strong> Multi-entity structures, intellectual property issues, real estate complications</li>
          <li><strong>Third-party delays:</strong> Landlord consent, license transfers, customer notifications</li>
          <li><strong>Indecision:</strong> Buyers who can&rsquo;t commit to a deal or keep second-guessing</li>
        </ul>

        <h2 className={h2Class}>Timeline by deal type</h2>

        <h3 className={h3Class}>Small business (&lt;$2M enterprise value)</h3>
        <ul className={ulClass}>
          <li>Sourcing to LOI: 2&ndash;6 months</li>
          <li>LOI to close: 2&ndash;4 months</li>
          <li><strong>Total: 4&ndash;10 months</strong></li>
        </ul>

        <h3 className={h3Class}>Lower mid-market ($2&ndash;$10M)</h3>
        <ul className={ulClass}>
          <li>Sourcing to LOI: 4&ndash;12 months</li>
          <li>LOI to close: 3&ndash;6 months</li>
          <li><strong>Total: 7&ndash;18 months</strong></li>
        </ul>

        <h3 className={h3Class}>Mid-market ($10M+)</h3>
        <ul className={ulClass}>
          <li>Sourcing to LOI: 6&ndash;18 months</li>
          <li>LOI to close: 4&ndash;9 months</li>
          <li><strong>Total: 10&ndash;27 months</strong></li>
        </ul>

        <h2 className={h2Class}>Bottom line</h2>
        <p>
          Expect the process to take longer than you think. The median
          first-time buyer underestimates the timeline by 6&ndash;12
          months. Build buffer into your personal financial runway &mdash;
          our{" "}
          <Link href="/learn/search-fund-cost" className="text-apple-accent hover:underline">
            search fund cost breakdown
          </Link>{" "}
          can help you plan &mdash; start
          building relationships with brokers and lenders early, and
          remember that{" "}
          <Link href="/learn/why-search-funds-fail" className="text-apple-accent hover:underline">
            patience
          </Link>{" "}
          is one of the most valuable traits in an acquirer. Choosing the
          right{" "}
          <Link href="/learn/best-industries-search-funds" className="text-apple-accent hover:underline">
            industry
          </Link>{" "}
          upfront also reduces wasted time on unsuitable targets. It&rsquo;s
          better to take an extra 3 months finding the right deal than to
          rush into the wrong one.
        </p>

        <h2 className={h2Class}>Frequently asked questions</h2>

        <h3 className={h3Class}>Can I speed up the acquisition timeline?</h3>
        <p>
          Yes, several actions meaningfully compress timelines. Getting SBA
          pre-qualification before you identify a target eliminates 2&ndash;4
          weeks of financing uncertainty. Hiring experienced M&amp;A counsel
          and a CPA who have closed acquisitions before prevents the learning
          curve that delays first-time advisors. Building broker relationships
          3&ndash;6 months before you are ready to submit LOIs ensures a warm
          pipeline when you start actively searching. The single biggest
          accelerator, however, is searching full-time rather than part-time
          &mdash; BizBuySell data suggests full-time searchers close 50&ndash;100%
          faster than those searching alongside a day job.
        </p>

        <h3 className={h3Class}>What causes deals to fall through after the LOI is signed?</h3>
        <p>
          The most common deal-killers after LOI signing are due diligence
          discoveries (undisclosed liabilities, financial discrepancies, or
          customer concentration), financing failures (SBA underwriting
          rejection, lender changes, or collateral shortfalls), and seller
          cold feet. Approximately 30&ndash;50% of deals that reach LOI stage
          fail to close, which is why experienced buyers always maintain
          backup opportunities in their pipeline. A thorough{" "}
          <Link href="/learn/red-flags-due-diligence" className="text-apple-accent hover:underline">
            red flags assessment
          </Link>{" "}
          before signing the LOI can reduce the likelihood of post-LOI
          surprises.
        </p>

        <h3 className={h3Class}>Should I search for a business full-time or part-time?</h3>
        <p>
          If your financial situation allows it, full-time searching is
          significantly more effective. Full-time searchers typically close
          in 6&ndash;18 months, while part-time searchers take 12&ndash;24
          months. The difference comes from faster response times (good deals
          move quickly), more capacity for broker relationships and direct
          outreach, and the ability to conduct deeper analysis on potential
          targets. If you cannot search full-time, consider building a
          detailed{" "}
          <Link href="/learn/search-fund-thesis" className="text-apple-accent hover:underline">
            search thesis
          </Link>{" "}
          with narrow criteria so you can focus your limited time on the
          highest-quality opportunities.
        </p>
      </div>
    </article>
  );
}
