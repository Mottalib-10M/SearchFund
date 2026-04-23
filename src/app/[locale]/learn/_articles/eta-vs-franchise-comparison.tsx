import Link from "next/link";
import { h1Class, h2Class, h3Class, bodyClass, ulClass } from "./shared-styles";

export default function ETAVsFranchiseComparisonArticle() {
  return (
    <article>
      <h1 className={h1Class}>
        ETA vs. Buying a Franchise: A Deep Comparison
      </h1>
      <p className="text-sm text-apple-gray-500 mt-3">14 min read</p>

      <div className={bodyClass}>
        <p>
          For aspiring business owners, the choice between buying an
          existing independent business through{" "}
          <Link href="/learn/what-is-eta" className="text-apple-accent hover:underline">
            ETA
          </Link>{" "}
          and purchasing a franchise comes down to autonomy vs. system.
          Both paths offer faster time-to-income than starting from
          scratch, but they differ fundamentally in economics, risk
          profile, and long-term potential.
        </p>

        <h2 className={h2Class}>The ETA path</h2>
        <ul className={ulClass}>
          <li><strong>What you buy:</strong> An existing, independent business with established cash flow, customers, and employees</li>
          <li><strong>Cost:</strong> $1M&ndash;$20M enterprise value (funded through{" "}
            <Link href="/learn/sba-7a-loans-complete-guide" className="text-apple-accent hover:underline">
              SBA loans
            </Link>, investor equity, and{" "}
            <Link href="/learn/seller-financing" className="text-apple-accent hover:underline">
              seller financing
            </Link>)</li>
          <li><strong>Autonomy:</strong> Full control over strategy, operations, pricing, marketing, and hiring</li>
          <li><strong>Brand:</strong> You inherit an existing brand (which you can change or improve)</li>
          <li><strong>Returns:</strong>{" "}
            <Link href="/learn/search-fund-returns" className="text-apple-accent hover:underline">
              35%+ median IRR
            </Link>{" "}
            for traditional search funds. Self-funded searchers can earn even more on their personal equity</li>
        </ul>

        <h2 className={h2Class}>The franchise path</h2>
        <ul className={ulClass}>
          <li><strong>What you buy:</strong> The right to operate under an established brand using a proven business system</li>
          <li><strong>Cost:</strong> $100K&ndash;$2M+ initial investment (franchise fee + buildout + working capital). Some franchises require $5M+</li>
          <li><strong>Autonomy:</strong> Limited. The franchisor controls brand, menu/offering, suppliers, pricing, marketing, and store design</li>
          <li><strong>Brand:</strong> Established, recognizable brand with marketing support</li>
          <li><strong>Returns:</strong> Varies widely. Average franchise owner earns $80K&ndash;$150K/year. Top performers earn $300K+. Capital returns of 15&ndash;25% annually for well-performing units</li>
        </ul>

        <h2 className={h2Class}>Head-to-head comparison</h2>

        <h3 className={h3Class}>Financial returns</h3>
        <ul className={ulClass}>
          <li><strong>ETA advantage:</strong> Higher ceiling. Search fund CEOs earn $150K&ndash;$250K salary + 20&ndash;25% equity that can be worth $2M&ndash;$10M+ at exit</li>
          <li><strong>Franchise reality:</strong> Lower ceiling but more predictable. Ongoing royalties (5&ndash;8% of revenue) and marketing fees (2&ndash;4%) reduce margins permanently</li>
          <li><strong>Verdict:</strong> ETA for wealth creation. Franchise for income</li>
        </ul>

        <h3 className={h3Class}>Risk profile</h3>
        <ul className={ulClass}>
          <li><strong>ETA risk:</strong> Business-specific. You inherit one company&rsquo;s customers, employees, and market position. Due diligence reduces but doesn&rsquo;t eliminate risk</li>
          <li><strong>Franchise risk:</strong> System-dependent. Franchisor decisions (pricing changes, brand damage, supply chain) affect your unit. You can be terminated for non-compliance</li>
          <li><strong>Verdict:</strong> Different risks, not necessarily more or less. ETA risk is concentrated; franchise risk is shared</li>
        </ul>

        <h3 className={h3Class}>Autonomy &amp; lifestyle</h3>
        <ul className={ulClass}>
          <li><strong>ETA freedom:</strong> You are the CEO. You set strategy, pricing, hours, culture, and everything else</li>
          <li><strong>Franchise constraints:</strong> Operating manual compliance, territory restrictions, mandatory purchases from approved suppliers, required marketing spend</li>
          <li><strong>Verdict:</strong> ETA for entrepreneurs who want full control. Franchise for operators who want a proven playbook</li>
        </ul>

        <h3 className={h3Class}>Exit potential</h3>
        <ul className={ulClass}>
          <li><strong>ETA exit:</strong> Sell the independent business at 4&ndash;8x EBITDA to PE, strategic, or another search fund</li>
          <li><strong>Franchise exit:</strong> Sell your franchise unit(s). Multiples are typically lower (2&ndash;4x) because the brand and system belong to the franchisor, not you. Franchisor approval is usually required</li>
          <li><strong>Verdict:</strong> ETA for exit value. Franchise exits are constrained by franchisor approval and the inability to sell the brand itself</li>
        </ul>

        <h2 className={h2Class}>When franchise is the better choice</h2>
        <ul className={ulClass}>
          <li>You want a proven system and are comfortable following a playbook</li>
          <li>You have limited business experience and want built-in training and support</li>
          <li>You prioritize brand recognition and marketing infrastructure</li>
          <li>You prefer lower risk and more predictable (if lower) returns</li>
          <li>You want to start a business rather than acquire an existing one</li>
        </ul>

        <h2 className={h2Class}>When ETA is the better choice</h2>
        <ul className={ulClass}>
          <li>You want full autonomy and the ability to shape the business</li>
          <li>You are targeting wealth creation through equity ownership</li>
          <li>You have management experience and can lead an existing team</li>
          <li>You want to avoid ongoing royalties and franchisor control</li>
          <li>You want a clear exit path to PE or strategic buyers at premium multiples</li>
        </ul>

        <p>
          For a broader comparison, see{" "}
          <Link href="/learn/eta-vs-startups" className="text-apple-accent hover:underline">
            ETA vs. startups vs. franchises
          </Link>{" "}
          and{" "}
          <Link href="/learn/buying-vs-starting-business" className="text-apple-accent hover:underline">
            buying vs. starting a business
          </Link>.
        </p>
      </div>
    </article>
  );
}
