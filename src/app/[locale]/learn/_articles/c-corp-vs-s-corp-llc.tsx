import Link from "next/link";
import { h1Class, h2Class, h3Class, bodyClass, ulClass } from "./shared-styles";

export default function CCorpVsSCorpLLCArticle() {
  return (
    <article>
      <h1 className={h1Class}>
        C-Corp vs. S-Corp vs. LLC: US Entity Structures for ETA
      </h1>
      <p className="text-sm text-apple-gray-500 mt-3">15 min read</p>

      <div className={bodyClass}>
        <p>
          Choosing the right entity structure is one of the first and
          most consequential decisions in an acquisition. The structure
          affects your tax bill, liability protection, ability to raise
          capital, and{" "}
          <Link href="/learn/exit-strategies" className="text-apple-accent hover:underline">
            exit options
          </Link>. This guide compares C-Corps, S-Corps, and LLCs
          specifically for search fund and self-funded acquisitions
          in the United States.
        </p>

        <h2 className={h2Class}>C-Corporation</h2>

        <h3 className={h3Class}>How it works</h3>
        <ul className={ulClass}>
          <li>A separate taxable entity. The corporation pays federal income tax at 21% (flat rate)</li>
          <li>Shareholders pay tax again on dividends and capital gains (&ldquo;double taxation&rdquo;)</li>
          <li>Unlimited number and types of shareholders (individuals, institutions, foreign investors)</li>
          <li>Most traditional search funds use C-Corp structures</li>
        </ul>

        <h3 className={h3Class}>Advantages for ETA</h3>
        <ul className={ulClass}>
          <li><strong>QSBS eligibility:</strong> C-Corps qualify for{" "}
            <Link href="/learn/qsbs-qualified-small-business-stock" className="text-apple-accent hover:underline">
              Section 1202 QSBS exclusion
            </Link>{" "}
            &mdash; up to $10M (or 10x basis) in capital gains tax-free at exit. This is the single biggest tax advantage in ETA</li>
          <li><strong>Investor flexibility:</strong> No restriction on shareholder type, number, or nationality. Essential for traditional search funds with institutional investors</li>
          <li><strong>Retain earnings:</strong> Can retain and reinvest profits at the 21% corporate rate without distributing to shareholders</li>
          <li><strong>Established structure:</strong> Well-understood by investors, lenders, and acquirers. Simplifies exit to strategic or PE buyers</li>
        </ul>

        <h3 className={h3Class}>Disadvantages</h3>
        <ul className={ulClass}>
          <li><strong>Double taxation:</strong> Corporate income taxed at 21%, then dividends/distributions taxed again at shareholder level (15&ndash;20% capital gains)</li>
          <li><strong>No pass-through losses:</strong> Operating losses stay at the corporate level and cannot offset the owner&rsquo;s personal income</li>
          <li><strong>Complexity:</strong> More formal governance requirements (board meetings, minutes, bylaws)</li>
        </ul>

        <h2 className={h2Class}>S-Corporation</h2>

        <h3 className={h3Class}>How it works</h3>
        <ul className={ulClass}>
          <li>Pass-through entity: no corporate-level tax. All income/losses flow to shareholders&rsquo; personal returns</li>
          <li>Maximum 100 shareholders, all must be US citizens or residents</li>
          <li>Only one class of stock allowed (no preferred shares)</li>
        </ul>

        <h3 className={h3Class}>Advantages for ETA</h3>
        <ul className={ulClass}>
          <li><strong>No double taxation:</strong> Income taxed once at shareholder level (up to 37% for ordinary income, but 20% for qualified business income deduction)</li>
          <li><strong>QBI deduction:</strong> 20% deduction on qualified business income (Section 199A), effectively reducing the top rate to ~30%</li>
          <li><strong>Pass-through losses:</strong> Operating losses in year 1 (common post-acquisition with bonus depreciation and amortization) offset personal income</li>
          <li><strong>Self-employment tax savings:</strong> S-Corp owners take a &ldquo;reasonable salary&rdquo; and receive remaining profits as distributions (not subject to FICA)</li>
        </ul>

        <h3 className={h3Class}>Disadvantages</h3>
        <ul className={ulClass}>
          <li><strong>No QSBS:</strong> S-Corps do not qualify for Section 1202 QSBS exclusion</li>
          <li><strong>Shareholder restrictions:</strong> Max 100 shareholders, US individuals only. Cannot have institutional investors, foreign investors, or trusts</li>
          <li><strong>One class of stock:</strong> Cannot issue preferred shares, making{" "}
            <Link href="/learn/cap-tables-equity" className="text-apple-accent hover:underline">
              search fund equity structures
            </Link>{" "}
            impossible</li>
          <li><strong>Built-in gains tax:</strong> If converting from C-Corp to S-Corp, there&rsquo;s a 5-year built-in gains recognition period</li>
        </ul>

        <h2 className={h2Class}>LLC (Limited Liability Company)</h2>

        <h3 className={h3Class}>How it works</h3>
        <ul className={ulClass}>
          <li>Flexible entity that can be taxed as a disregarded entity (single member), partnership (multi-member), S-Corp, or C-Corp</li>
          <li>No restrictions on members (individuals, trusts, foreign entities, other LLCs)</li>
          <li>Operating agreement governs rights, distributions, and management</li>
        </ul>

        <h3 className={h3Class}>Advantages for ETA</h3>
        <ul className={ulClass}>
          <li><strong>Maximum flexibility:</strong> Can choose tax treatment (partnership for pass-through, or elect C-Corp for QSBS)</li>
          <li><strong>Pass-through taxation:</strong> Default partnership taxation avoids double taxation</li>
          <li><strong>Multiple classes:</strong> Operating agreement can create preferred returns, waterfalls, and carried interest without stock classes</li>
          <li><strong>Liability protection:</strong> Members&rsquo; personal assets protected from business liabilities</li>
        </ul>

        <h3 className={h3Class}>Disadvantages</h3>
        <ul className={ulClass}>
          <li><strong>Self-employment tax:</strong> Active members may owe self-employment tax on all LLC income (unlike S-Corp salary/distribution split)</li>
          <li><strong>State variations:</strong> LLC laws and fees vary significantly by state</li>
          <li><strong>Less familiar to some investors:</strong> Some institutional search fund investors prefer C-Corp structure</li>
        </ul>

        <h2 className={h2Class}>Which to choose for your acquisition?</h2>

        <h3 className={h3Class}>Traditional search fund → C-Corp</h3>
        <ul className={ulClass}>
          <li>Institutional investors require C-Corp for QSBS eligibility and unrestricted shareholder capacity</li>
          <li>Step-up equity structure requires multiple stock classes (C-Corp supports preferred + common)</li>
          <li>QSBS potential saves $1M+ in taxes at exit</li>
        </ul>

        <h3 className={h3Class}>Self-funded search → S-Corp or LLC</h3>
        <ul className={ulClass}>
          <li>No outside investors means shareholder restrictions don&rsquo;t matter</li>
          <li>Pass-through taxation saves 5&ndash;15% vs. double taxation</li>
          <li>QBI deduction (20%) provides additional tax savings</li>
          <li>First-year losses (amortization, bonus depreciation) offset personal income</li>
        </ul>

        <h3 className={h3Class}>Holding company structure → LLC taxed as C-Corp</h3>
        <ul className={ulClass}>
          <li>Best of both worlds: LLC flexibility + C-Corp tax treatment + QSBS eligibility</li>
          <li>Operating agreement can include complex equity waterfalls</li>
          <li>See{" "}
            <Link href="/learn/holding-company-structures" className="text-apple-accent hover:underline">
              holding company structures
            </Link>{" "}
            for detailed setup</li>
        </ul>

        <p>
          For a broader view of legal structuring, see our{" "}
          <Link href="/learn/search-fund-legal-structure" className="text-apple-accent hover:underline">
            search fund legal structure
          </Link>{" "}
          and{" "}
          <Link href="/learn/tax-optimization" className="text-apple-accent hover:underline">
            tax optimization
          </Link>{" "}
          guides.
        </p>
      </div>
    </article>
  );
}
