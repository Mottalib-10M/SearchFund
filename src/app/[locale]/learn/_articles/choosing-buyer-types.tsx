import Link from "next/link";
import { h1Class, h2Class, h3Class, bodyClass, ulClass } from "./shared-styles";

export default function ChoosingBuyerTypesArticle() {
  return (
    <article>
      <h1 className={h1Class}>
        Choosing Between Buyer Types: Search Fund vs. PE vs. Strategic
      </h1>
      <p className="text-sm text-apple-gray-500 mt-3">14 min read</p>

      <div className={bodyClass}>
        <p>
          When selling your business, you will encounter three main buyer
          types: search fund entrepreneurs, private equity firms, and
          strategic acquirers. Each offers different pricing, terms, and
          post-acquisition outcomes. This guide helps you choose the right
          buyer based on your priorities &mdash; price, legacy, employees,
          speed, or deal certainty. According to Bain &amp; Company&rsquo;s
          2024 Global Private Equity Report, the number of PE firms
          targeting lower-middle-market deals ($10M&ndash;$100M enterprise
          value) has more than doubled over the past decade, giving sellers
          more options but making the buyer-type decision more complex.
        </p>

        <h2 className={h2Class}>Search fund buyers</h2>
        <ul className={ulClass}>
          <li><strong>Who they are:</strong> Individual entrepreneurs (often MBA graduates) backed by committed investors. They buy one business and operate it as CEO</li>
          <li><strong>Deal size:</strong> $1M&ndash;$20M enterprise value ($500K&ndash;$5M EBITDA)</li>
          <li><strong>Typical multiple:</strong> 4&ndash;6x EBITDA</li>
          <li><strong>Hold period:</strong> 5&ndash;8 years</li>
          <li><strong>Best for sellers who:</strong> Care about employee welfare, company legacy, and working with an individual rather than a corporation</li>
          <li><strong>Pros:</strong> Personal attention, long-term commitment, employee retention priority, continuity of business name and culture</li>
          <li><strong>Cons:</strong> May offer lower headline price than PE or strategics for larger businesses. Longer due diligence (investor approval required)</li>
          <li><strong>See:</strong>{" "}
            <Link href="/learn/selling-to-search-fund" className="text-apple-accent hover:underline">
              complete guide to selling to a search fund
            </Link></li>
        </ul>

        <h2 className={h2Class}>Private equity firms</h2>
        <ul className={ulClass}>
          <li><strong>Who they are:</strong> Investment firms that buy businesses using investor capital and debt. Managed by professional deal teams</li>
          <li><strong>Deal size:</strong> $10M+ enterprise value ($2M+ EBITDA for lower middle market PE)</li>
          <li><strong>Typical multiple:</strong> 5&ndash;8x EBITDA (higher for larger, growing businesses)</li>
          <li><strong>Hold period:</strong> 3&ndash;5 years (fund lifecycle driven)</li>
          <li><strong>Best for sellers who:</strong> Want the highest possible price and are less concerned about long-term legacy</li>
          <li><strong>Pros:</strong> Higher valuations (especially for $5M+ EBITDA businesses), professional process, access to growth capital</li>
          <li><strong>Cons:</strong> Management changes likely, focus on cost reduction, may consolidate with other portfolio companies, shorter time horizon. The buyer is a fund, not a person</li>
        </ul>

        <h2 className={h2Class}>Strategic acquirers (competitors, adjacent companies)</h2>
        <ul className={ulClass}>
          <li><strong>Who they are:</strong> Companies in your industry or adjacent industries that acquire businesses for strategic reasons (market share, geography, capabilities, talent)</li>
          <li><strong>Deal size:</strong> Any size</li>
          <li><strong>Typical multiple:</strong> 4&ndash;10x EBITDA (highest for businesses with strong strategic fit)</li>
          <li><strong>Hold period:</strong> Permanent (integrated into the acquirer)</li>
          <li><strong>Best for sellers who:</strong> Want the highest possible price and don&rsquo;t mind the business being absorbed into a larger company</li>
          <li><strong>Pros:</strong> Often pay the highest multiples due to synergies (cost savings, cross-selling, market access)</li>
          <li><strong>Cons:</strong> Most likely to restructure, relocate, rebrand, and reduce headcount. Your company identity may disappear</li>
        </ul>

        <h2 className={h2Class}>Individual buyers (no institutional backing)</h2>
        <ul className={ulClass}>
          <li><strong>Who they are:</strong> Individuals buying a business to operate, without institutional investor backing</li>
          <li><strong>Deal size:</strong> $100K&ndash;$5M enterprise value</li>
          <li><strong>Typical multiple:</strong> 2&ndash;4x EBITDA or SDE</li>
          <li><strong>Pros:</strong> May offer the most personal attention, willing to learn from you</li>
          <li><strong>Cons:</strong> Financing uncertainty is the biggest risk. Many individual buyers cannot close because they fail to secure financing. Deal certainty is the lowest of all buyer types</li>
        </ul>

        <h2 className={h2Class}>Decision framework: which buyer is right for you?</h2>

        <h3 className={h3Class}>Priority: Maximum price</h3>
        <ul className={ulClass}>
          <li><strong>Best choice:</strong> Strategic acquirer (synergy premium) or PE firm (competition-driven pricing)</li>
          <li>Run a competitive process with multiple buyers. See{" "}
            <Link href="/learn/strategic-vs-financial-sale" className="text-apple-accent hover:underline">
              strategic vs. financial sale
            </Link></li>
        </ul>

        <h3 className={h3Class}>Priority: Employee protection</h3>
        <ul className={ulClass}>
          <li><strong>Best choice:</strong> Search fund buyer (employee retention is critical to their success)</li>
          <li>Include employee retention commitments in the purchase agreement</li>
        </ul>

        <h3 className={h3Class}>Priority: Legacy &amp; company continuity</h3>
        <ul className={ulClass}>
          <li><strong>Best choice:</strong> Search fund buyer or individual buyer</li>
          <li>Both are more likely to maintain your company name, culture, and community presence</li>
        </ul>

        <h3 className={h3Class}>Priority: Speed &amp; deal certainty</h3>
        <ul className={ulClass}>
          <li><strong>Best choice:</strong> Strategic acquirer (internal capital, no financing contingency) or PE (committed fund capital)</li>
          <li>Search fund and individual buyers have more financing risk</li>
        </ul>

        <h3 className={h3Class}>Priority: Continued involvement</h3>
        <ul className={ulClass}>
          <li><strong>Best choice:</strong> PE firm (may want you to stay as operator with rollover equity) or search fund (transition consulting role)</li>
          <li>Strategic acquirers are least likely to want the seller involved long-term</li>
        </ul>

        <h2 className={h2Class}>Running a competitive process</h2>
        <ul className={ulClass}>
          <li><strong>Why:</strong> Competition increases price by 10&ndash;20% and improves deal terms</li>
          <li><strong>How:</strong> Work with a broker or M&amp;A advisor to approach multiple buyer types simultaneously</li>
          <li><strong>Mix of buyers:</strong> The best processes include 2&ndash;3 buyer types (at least one search fund, one PE, one strategic) to create genuine competition</li>
          <li><strong>Timeline:</strong> Expect 6&ndash;9 months from initial marketing to close</li>
        </ul>
        <p>
          Stanford&rsquo;s 2024 Search Fund Study reports that search fund
          acquisitions have a median close timeline of 7&ndash;9 months from
          initial contact, compared to 4&ndash;6 months for well-funded PE
          firms. However, search fund buyers have among the highest
          completion rates once an LOI is signed, because their investors
          have pre-committed capital for the acquisition.
        </p>

        <h2 className={h2Class}>Frequently asked questions</h2>

        <h3 className={h3Class}>Who pays the most for a small business?</h3>
        <p>
          Strategic acquirers often pay the highest multiples (4&ndash;10x
          EBITDA) because they can realize cost savings and revenue
          synergies. PE firms pay 5&ndash;8x for larger businesses ($5M+
          EBITDA). Search funds typically pay 4&ndash;6x but offer better
          terms for employee protection and legacy continuity.
        </p>

        <h3 className={h3Class}>Should I sell my business to a search fund or private equity?</h3>
        <p>
          Choose a search fund if you prioritize employee retention,
          company legacy, and working with an individual who will operate
          the business for 5&ndash;8 years. Choose PE if you want the
          highest possible price and are less concerned about potential
          management changes, cost restructuring, and a shorter
          3&ndash;5 year hold period.
        </p>

        <h3 className={h3Class}>What is the biggest risk of selling to an individual buyer?</h3>
        <p>
          Financing uncertainty. Many individual buyers without
          institutional backing cannot close because they fail to secure
          bank or SBA financing. Deal certainty is the lowest of all
          buyer types, and many sellers have experienced failed closings
          when individual buyer financing falls through at the last
          stage.
        </p>

        <p>
          For valuation guidance, see{" "}
          <Link href="/learn/what-is-my-business-worth" className="text-apple-accent hover:underline">
            what is my business worth
          </Link>. For{" "}
          <Link href="/learn/prepare-business-for-sale" className="text-apple-accent hover:underline">
            sale preparation
          </Link>{" "}
          and{" "}
          <Link href="/learn/exit-readiness-plan" className="text-apple-accent hover:underline">
            exit planning
          </Link>, see our related guides.
        </p>
      </div>
    </article>
  );
}
