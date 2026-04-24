import { h1Class, h2Class, h3Class, bodyClass, ulClass, olClass } from "./shared-styles";
import Link from "next/link";

export default function DividendRecapitalizationArticle() {
  return (
    <article>
      <h1 className={h1Class}>Dividend Recapitalization: Returning Capital Without Selling</h1>
      <div className={bodyClass}>
        <p>A dividend recapitalization (&quot;dividend recap&quot;) allows a search fund CEO and investors to extract cash from the business without selling it. The company takes on new debt and uses the proceeds to pay a special dividend to shareholders. This strategy lets you return capital to investors, monetize some of your equity, and continue running the business with the potential for additional upside. According to the Stanford GSB 2024 Search Fund Study, approximately 15% of search fund companies that have been held for five or more years pursue a dividend recapitalization before a full exit.</p>
      </div>

      <h2 className={h2Class}>How a Dividend Recap Works</h2>
      <div className={bodyClass}>
        <ol className={olClass}>
          <li><strong>The company borrows:</strong> Typically from a bank or private credit fund, taking on new senior or mezzanine debt</li>
          <li><strong>Proceeds fund a dividend:</strong> The loan proceeds are distributed to equity holders as a special dividend</li>
          <li><strong>Operations continue:</strong> The CEO continues running the business, now with higher debt service</li>
          <li><strong>Equity holders retain ownership:</strong> Unlike a sale, ownership percentages remain the same</li>
        </ol>
      </div>

      <h2 className={h2Class}>When a Dividend Recap Makes Sense</h2>
      <div className={bodyClass}>
        <ul className={ulClass}>
          <li><strong>Strong cash flow:</strong> The business generates enough free cash flow to comfortably service the new debt (typically 2.0x+ DSCR)</li>
          <li><strong>Investor liquidity needs:</strong> Search fund investors may want partial returns before a full exit</li>
          <li><strong>CEO personal liquidity:</strong> You&apos;ve been earning a CEO salary but have significant paper equity. A recap provides some cash.</li>
          <li><strong>Continued growth potential:</strong> You believe the business will be worth significantly more in 2&ndash;3 years</li>
          <li><strong>No compelling exit opportunity:</strong> Market conditions or business trajectory don&apos;t support an optimal exit now</li>
        </ul>
      </div>

      <h2 className={h2Class}>Typical Structure</h2>
      <div className={bodyClass}>
        <ul className={ulClass}>
          <li><strong>Use:</strong> Total debt of 3&ndash;4x EBITDA (including existing debt)</li>
          <li><strong>Dividend size:</strong> Typically 1&ndash;2x EBITDA returned to equity holders</li>
          <li><strong>Debt terms:</strong> 5&ndash;7 year term, amortizing, with rates dependent on credit quality and market conditions</li>
          <li><strong>Lender requirements:</strong> Financial covenants, personal guarantees (sometimes), and restrictions on additional distributions</li>
          <li><strong>Tax treatment:</strong> Dividends are typically taxed as qualified dividends (long-term capital gains rates) if held for more than one year</li>
          <li><strong>Typical timing:</strong> Most recaps occur 3&ndash;5 years post-acquisition, once the business has demonstrated stable cash flows under the new CEO&rsquo;s leadership</li>
        </ul>
      </div>

      <h2 className={h2Class}>Risks &amp; Considerations</h2>
      <div className={bodyClass}>
        <ul className={ulClass}>
          <li><strong>Increased debt burden:</strong> Higher debt service reduces financial flexibility and margin of safety</li>
          <li><strong>Recession vulnerability:</strong> A used business is more exposed to economic downturns</li>
          <li><strong>Growth constraints:</strong> Debt service may limit capital available for reinvestment and growth</li>
          <li><strong>Covenant risk:</strong> Violating loan covenants can trigger default provisions</li>
          <li><strong>Investor alignment:</strong> Not all investors may want a recap &mdash; some prefer to wait for a full exit at a higher valuation</li>
        </ul>
        <p>
          Before pursuing a recap, run a thorough{" "}
          <Link href="/learn/financial-due-diligence" className="text-apple-accent hover:underline">
            financial analysis
          </Link>{" "}
          stress-testing the business against a 20&ndash;30% revenue decline
          scenario. If the company cannot maintain 1.5x debt service coverage
          in a downturn, the recap may carry too much risk. Bain &amp; Company
          research indicates that roughly one in five mid-market dividend
          recaps leads to covenant violations within three years when business
          performance softens.
        </p>
      </div>

      <h2 className={h2Class}>Key Takeaways</h2>
      <div className={bodyClass}>
        <ul className={ulClass}>
          <li>A dividend recap lets you return capital to investors and yourself without selling the business</li>
          <li>Only execute when the business has strong, stable cash flow with 2.0x+ debt service coverage</li>
          <li>Typical structure: 3&ndash;4x total use, 1&ndash;2x EBITDA returned as dividend</li>
          <li>The main risk is reduced financial flexibility &mdash; higher debt limits your ability to invest and weather downturns</li>
          <li>Requires alignment with all equity holders and board approval</li>
        </ul>
      </div>

      <h2 className={h2Class}>Related Resources</h2>
      <ul className={ulClass}>
        <li><Link href="/learn/exit-strategies" className="text-apple-accent hover:underline">Exit Strategies for Search Fund CEOs</Link></li>
        <li><Link href="/learn/debt-structure-optimization" className="text-apple-accent hover:underline">Debt Structures in Acquisition Finance</Link></li>
        <li><Link href="/learn/preparing-company-exit" className="text-apple-accent hover:underline">Preparing Your Company for Exit</Link></li>
        <li><Link href="/learn/investor-relations" className="text-apple-accent hover:underline">Investor Relations & Reporting</Link></li>
      </ul>

      <h2 className={h2Class}>Frequently Asked Questions</h2>

      <h3 className={h3Class}>
        What is a dividend recapitalization?
      </h3>
      <div className={bodyClass}>
        <p>
          A dividend recap is when a company takes on new debt and uses the
          proceeds to pay a special dividend to equity holders. This lets
          investors and the CEO extract cash without selling the business.
          Ownership percentages stay the same, and the CEO continues operating
          the company. It is essentially a used distribution of capital.
        </p>
      </div>

      <h3 className={h3Class}>
        When does a dividend recap make sense for a search fund?
      </h3>
      <div className={bodyClass}>
        <p>
          A recap makes sense when the business has strong, stable cash flow
          (2.0x+ debt service coverage), investors need partial liquidity, and
          the CEO believes the business will be worth significantly more in
          2&ndash;3 years. Typical use is 3&ndash;4x EBITDA with
          1&ndash;2x EBITDA returned as a dividend. It is most common
          3&ndash;5 years post-acquisition when the CEO has demonstrated
          consistent operational performance.
        </p>
      </div>

      <h3 className={h3Class}>
        How is a dividend recapitalization taxed?
      </h3>
      <div className={bodyClass}>
        <p>
          In the United States, dividends from a dividend recap are generally
          taxed as qualified dividends at long-term capital gains rates
          (0&ndash;20%) if the equity has been held for more than one year.
          The new debt proceeds themselves are not taxable income to the
          company, and interest payments on the recap debt are generally
          tax-deductible, subject to the{" "}
          <Link href="/learn/holding-company-tax" className="text-apple-accent hover:underline">
            interest deduction limitations
          </Link>{" "}
          in your jurisdiction.
        </p>
      </div>
    </article>
  );
}
