import Link from "next/link";
import { h1Class, h2Class, h3Class, bodyClass, ulClass } from "./shared-styles";

export default function StrategicVsFinancialSaleArticle() {
  return (
    <article>
      <h1 className={h1Class}>
        Strategic Sale vs. Financial Sale: Maximizing Exit Value
      </h1>
      <p className="text-sm text-apple-gray-500 mt-3">14 min read</p>

      <div className={bodyClass}>
        <p>
          When it&rsquo;s time to{" "}
          <Link href="/learn/exit-strategies" className="text-apple-accent hover:underline">
            exit
          </Link>{" "}
          your acquired company, you have two primary buyer types:
          strategic buyers and financial buyers. Each values the business
          differently, structures deals differently, and has different
          implications for employees, customers, and your post-exit role.
          Understanding these differences helps you maximize exit value.
        </p>

        <h2 className={h2Class}>Strategic buyers</h2>

        <h3 className={h3Class}>Who they are</h3>
        <ul className={ulClass}>
          <li>Competitors in your industry looking to gain market share</li>
          <li>Adjacent companies expanding into your market or service line</li>
          <li>Large corporations seeking &ldquo;tuck-in&rdquo; acquisitions to fill gaps</li>
          <li>Foreign companies entering your geographic market</li>
        </ul>

        <h3 className={h3Class}>Why they pay more</h3>
        <ul className={ulClass}>
          <li><strong>Synergies:</strong> They can eliminate duplicate costs (corporate overhead, insurance, purchasing), generating savings that justify a premium</li>
          <li><strong>Revenue synergies:</strong> Cross-selling your products to their customers (or vice versa) creates value they can pay for today</li>
          <li><strong>Market position:</strong> Eliminating a competitor has strategic value beyond financial metrics</li>
          <li><strong>Typical premium:</strong> Strategic buyers pay 1&ndash;3x EBITDA turns more than financial buyers for the same business</li>
        </ul>

        <h3 className={h3Class}>Typical strategic deal structure</h3>
        <ul className={ulClass}>
          <li><strong>All cash at close:</strong> Most common. Strategic buyers have cash or credit lines to fund acquisitions without complex financing</li>
          <li><strong>Stock + cash:</strong> Public strategic buyers may offer equity in the combined company</li>
          <li><strong>Earn-out component:</strong> 10&ndash;20% tied to post-closing performance, especially for growth businesses</li>
          <li><strong>Transition period:</strong> Shorter (3&ndash;6 months) because the buyer has industry operators who can take over quickly</li>
        </ul>

        <h3 className={h3Class}>Considerations</h3>
        <ul className={ulClass}>
          <li><strong>Employee impact:</strong> Duplicate roles may be eliminated. Your team may face layoffs as the buyer integrates</li>
          <li><strong>Brand/identity:</strong> Your company name and brand may disappear as the business is folded into the buyer</li>
          <li><strong>Speed:</strong> Strategic buyers with acquisition experience can move fast (60&ndash;90 days from LOI to close)</li>
          <li><strong>Confidentiality risk:</strong> Sharing sensitive information with a competitor during DD is risky if the deal falls through</li>
        </ul>

        <h2 className={h2Class}>Financial buyers</h2>

        <h3 className={h3Class}>Who they are</h3>
        <ul className={ulClass}>
          <li>Private equity firms (both platform and add-on acquisitions)</li>
          <li>Other search fund entrepreneurs</li>
          <li>Family offices making direct investments</li>
          <li>Independent sponsors</li>
        </ul>

        <h3 className={h3Class}>How they value</h3>
        <ul className={ulClass}>
          <li>Financial buyers value based on standalone cash flow, not synergies</li>
          <li>They use use ({" "}
            <Link href="/learn/lbo-for-smes" className="text-apple-accent hover:underline">
              LBO
            </Link>{" "}
            analysis) to determine maximum purchase price</li>
          <li>Returns are driven by debt paydown, EBITDA growth, and multiple expansion at their own exit</li>
          <li>Typical discount: 1&ndash;3x EBITDA turns below strategic buyer pricing</li>
        </ul>

        <h3 className={h3Class}>Typical financial buyer deal structure</h3>
        <ul className={ulClass}>
          <li><strong>Used:</strong> 50&ndash;70% debt, 30&ndash;50% equity. The buyer puts less cash at risk and uses use to amplify returns</li>
          <li><strong>
            <Link href="/learn/earn-out-structures" className="text-apple-accent hover:underline">
              Earn-outs
            </Link>:
          </strong> More common than with strategic buyers. Financial buyers want alignment on growth projections</li>
          <li><strong>Equity rollover:</strong> Financial buyers often ask the seller to roll 10&ndash;30% of proceeds into equity in the new entity</li>
          <li><strong>Management retention:</strong> Financial buyers need management to run the business. Your key team is more likely to be retained</li>
          <li><strong>Transition period:</strong> Longer (6&ndash;12 months) because the buyer needs operational handover</li>
        </ul>

        <h3 className={h3Class}>Considerations</h3>
        <ul className={ulClass}>
          <li><strong>Employee continuity:</strong> Financial buyers rarely cut staff. They need the team to execute their value creation plan</li>
          <li><strong>Brand preservation:</strong> The business typically continues operating under its existing name and identity</li>
          <li><strong>Second bite:</strong> If you roll equity, you participate in future upside (the &ldquo;second bite of the apple&rdquo;)</li>
          <li><strong>Your role:</strong> PE buyers may want you to stay as CEO for 2&ndash;3 years. Other financial buyers may bring their own operator</li>
        </ul>

        <h2 className={h2Class}>Which maximizes value?</h2>
        <p>
          The answer depends on your business characteristics:
        </p>
        <ul className={ulClass}>
          <li><strong>Strategic premium likely if:</strong> Clear synergies with known acquirers, complementary product/service fit, geographic overlap, customer base overlap, intellectual property value</li>
          <li><strong>Financial buyer may pay more if:</strong> Standalone growth story is compelling, strong{" "}
            <Link href="/learn/recurring-revenue-models" className="text-apple-accent hover:underline">
              recurring revenue
            </Link>{" "}
            profile, platform for{" "}
            <Link href="/learn/buy-and-build" className="text-apple-accent hover:underline">
              buy-and-build
            </Link>, low customer concentration, strong management team</li>
          <li><strong>Run a dual-track process:</strong> Approach both strategic and financial buyers simultaneously. Competition between buyer types drives the highest price</li>
        </ul>

        <h2 className={h2Class}>Preparing for each buyer type</h2>
        <ul className={ulClass}>
          <li><strong>For strategic buyers:</strong> Emphasize market position, customer relationships, IP, and synergy potential. Prepare a synergy analysis</li>
          <li><strong>For financial buyers:</strong> Emphasize standalone cash flow, growth trajectory, management depth, and{" "}
            <Link href="/learn/exit-readiness-plan" className="text-apple-accent hover:underline">
              buy-and-build potential
            </Link>. Prepare a detailed financial model</li>
          <li><strong>For both:</strong> Clean financials, minimal add-backs, strong{" "}
            <Link href="/learn/quality-of-earnings" className="text-apple-accent hover:underline">
              QoE report
            </Link>, organized data room, and compelling management presentation</li>
        </ul>

        <p>
          For the complete exit planning framework, see our{" "}
          <Link href="/learn/exit-strategies" className="text-apple-accent hover:underline">
            exit strategies guide
          </Link>{" "}
          and{" "}
          <Link href="/learn/exit-readiness-plan" className="text-apple-accent hover:underline">
            18-month exit readiness plan
          </Link>.
        </p>

        <h2 className={h2Class}>Frequently asked questions</h2>

        <h3 className={h3Class}>How much more do strategic buyers typically pay compared to financial buyers?</h3>
        <p>
          According to PitchBook data and the Stanford GSB Search Fund Study, strategic buyers pay a premium of 1&ndash;3x EBITDA turns over financial buyers for comparable businesses. For a company with $2M EBITDA, this translates to $2M&ndash;$6M in additional enterprise value. The premium reflects quantifiable synergies &mdash; cost savings from eliminating duplicate overhead, revenue gains from cross-selling, and strategic value from eliminating a competitor. However, not every business attracts strategic interest. Companies with unique intellectual property, strong customer relationships in desirable geographies, or complementary product lines command the highest premiums. Running a{" "}
          <Link href="/learn/exit-readiness-plan" className="text-apple-accent hover:underline">dual-track process</Link> that engages both buyer types simultaneously creates competitive tension that maximizes valuation.
        </p>

        <h3 className={h3Class}>What is an equity rollover, and should I agree to one?</h3>
        <p>
          An equity rollover is when the seller reinvests 10&ndash;30% of their sale proceeds into the acquiring entity&rsquo;s equity, retaining an ownership stake in the business post-close. According to Bain &amp; Company, approximately 60% of private equity-backed acquisitions in the lower middle market include a rollover component. The advantage is the &ldquo;second bite of the apple&rdquo; &mdash; if the buyer grows the business and sells again at a higher multiple, your rolled equity can generate returns that exceed your original proceeds. The risk is concentration: you are re-investing in a single asset with a new operator. Evaluate the buyer&rsquo;s track record, the governance rights attached to your rolled equity, and whether the rollover is truly optional or a deal requirement.
        </p>

        <h3 className={h3Class}>How long does a strategic sale process take compared to a financial sale?</h3>
        <p>
          Strategic sales typically close faster &mdash; 60&ndash;90 days from signed LOI to closing &mdash; because strategic buyers have industry operators who can quickly evaluate the business and integrate it post-close. Financial buyers, particularly private equity firms, often take 90&ndash;120 days due to more extensive due diligence, third-party{" "}
          <Link href="/learn/quality-of-earnings" className="text-apple-accent hover:underline">quality of earnings</Link> reports, and the need to arrange acquisition financing. According to McKinsey, the total process from initial marketing to close averages 4&ndash;6 months for strategic sales and 6&ndash;9 months for financial buyer processes. However, strategic sales carry higher confidentiality risk since you may be sharing sensitive information with competitors.
        </p>

        <h2 className={h2Class}>Sources</h2>
        <ul className={ulClass}>
          <li>Stanford Graduate School of Business, <em>Search Fund Study: Selected Observations</em> (2024)</li>
          <li>Bain &amp; Company, <em>Global Private Equity Report</em> (2024)</li>
          <li>McKinsey &amp; Company, <em>Strategic vs. Financial Buyers: Exit Planning for Mid-Market Companies</em> (2024)</li>
        </ul>
      </div>
    </article>
  );
}
