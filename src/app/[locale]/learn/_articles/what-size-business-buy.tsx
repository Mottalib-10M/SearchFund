import Link from "next/link";
import { h1Class, h2Class, h3Class, bodyClass, ulClass } from "./shared-styles";

export default function WhatSizeBusinessBuyArticle() {
  return (
    <article>
      <h1 className={h1Class}>
        What Size Business Should I Buy? Revenue &amp; EBITDA Ranges
      </h1>
      <p className="text-sm text-apple-gray-500 mt-3">13 min read</p>

      <div className={bodyClass}>
        <p>
          Business size determines everything: the{" "}
          <Link href="/learn/acquisition-financing" className="text-apple-accent hover:underline">
            financing structure
          </Link>,
          the competitive landscape, the management complexity, and your
          potential returns. Too small and the business can&rsquo;t support
          professional management or debt service. Too large and you face
          intense competition from PE firms. This guide helps you identify
          the right size for your situation.
        </p>

        <h2 className={h2Class}>The size spectrum</h2>

        <h3 className={h3Class}>Main Street ($250K&ndash;$1M EBITDA)</h3>
        <ul className={ulClass}>
          <li><strong>Revenue:</strong> $500K&ndash;$5M</li>
          <li><strong>Employees:</strong> 5&ndash;25</li>
          <li><strong>Purchase price:</strong> $500K&ndash;$4M</li>
          <li><strong>Typical multiple:</strong> 2&ndash;4x EBITDA (often priced as SDE multiple)</li>
          <li><strong>Financing:</strong>{" "}
            <Link href="/learn/sba-7a-loans-complete-guide" className="text-apple-accent hover:underline">
              SBA 7(a) loans
            </Link>,{" "}
            <Link href="/learn/seller-financing" className="text-apple-accent hover:underline">
              seller financing
            </Link></li>
          <li><strong>Pros:</strong> Lower capital requirements, less competition, easier to find</li>
          <li><strong>Cons:</strong> Owner-operated (you ARE the manager), limited growth potential, high{" "}
            <Link href="/learn/owner-dependent-business" className="text-apple-accent hover:underline">
              owner dependency
            </Link></li>
        </ul>

        <h3 className={h3Class}>Lower middle market ($1M&ndash;$3M EBITDA)</h3>
        <ul className={ulClass}>
          <li><strong>Revenue:</strong> $5M&ndash;$15M</li>
          <li><strong>Employees:</strong> 25&ndash;100</li>
          <li><strong>Purchase price:</strong> $4M&ndash;$15M</li>
          <li><strong>Typical multiple:</strong> 3.5&ndash;5.5x EBITDA</li>
          <li><strong>Financing:</strong> SBA 7(a) (up to $5M), conventional bank debt, search fund equity</li>
          <li><strong>Pros:</strong> Existing management layer, professional enough for systems improvement, good leverage for growth</li>
          <li><strong>Cons:</strong> More competitive, higher capital requirements, more complex operations</li>
        </ul>

        <h3 className={h3Class}>Core middle market ($3M&ndash;$10M EBITDA)</h3>
        <ul className={ulClass}>
          <li><strong>Revenue:</strong> $15M&ndash;$50M</li>
          <li><strong>Employees:</strong> 100&ndash;300</li>
          <li><strong>Purchase price:</strong> $15M&ndash;$60M</li>
          <li><strong>Typical multiple:</strong> 5&ndash;8x EBITDA ({" "}
            <Link href="/learn/ebitda-multiples-by-industry" className="text-apple-accent hover:underline">
              industry dependent
            </Link>)</li>
          <li><strong>Financing:</strong> Institutional bank debt, mezzanine, PE equity</li>
          <li><strong>Pros:</strong> Professional management teams, scalable platforms, multiple exit options</li>
          <li><strong>Cons:</strong> Highly competitive (PE territory), requires institutional capital, complex deal structures</li>
        </ul>

        <h2 className={h2Class}>The sweet spot by buyer type</h2>

        <h3 className={h3Class}>Traditional search fund</h3>
        <ul className={ulClass}>
          <li><strong>Target EBITDA:</strong> $1.5M&ndash;$5M</li>
          <li><strong>Why:</strong> Large enough to support professional CEO salary + debt service, small enough to avoid PE competition. Investors typically want $5M&ndash;$20M total enterprise value</li>
          <li><strong>Median deal:</strong> $2.5M EBITDA, $12M purchase price, 4.5x multiple (Stanford 2024)</li>
        </ul>

        <h3 className={h3Class}>Self-funded search</h3>
        <ul className={ulClass}>
          <li><strong>Target EBITDA:</strong> $500K&ndash;$2M</li>
          <li><strong>Why:</strong> SBA financing covers 80&ndash;90% of purchase price, manageable equity injection ($50K&ndash;$300K personal). See{" "}
            <Link href="/learn/how-much-money-buy-business" className="text-apple-accent hover:underline">
              capital requirements
            </Link></li>
          <li><strong>Median deal:</strong> $1M EBITDA, $3.5M purchase price, 3.5x multiple</li>
        </ul>

        <h3 className={h3Class}>Independent sponsor</h3>
        <ul className={ulClass}>
          <li><strong>Target EBITDA:</strong> $3M&ndash;$10M+</li>
          <li><strong>Why:</strong> Deal-by-deal fundraising supports larger transactions. Independent sponsors often have PE backgrounds and institutional relationships. See{" "}
            <Link href="/learn/search-fund-vs-independent-sponsor" className="text-apple-accent hover:underline">
              comparison
            </Link></li>
        </ul>

        <h2 className={h2Class}>Size and financing alignment</h2>
        <p>
          Your target business size must align with available{" "}
          <Link href="/learn/capital-stack-explained" className="text-apple-accent hover:underline">
            capital stack
          </Link>{" "}
          options:
        </p>
        <ul className={ulClass}>
          <li><strong>SBA 7(a) limit:</strong> $5M per loan (US). Effective for businesses with up to ~$1.5M EBITDA at 3&ndash;3.5x leverage</li>
          <li><strong>Conventional bank:</strong> Typically 2.5&ndash;3.5x EBITDA leverage for established businesses</li>
          <li><strong>Seller financing:</strong> 10&ndash;30% of purchase price, available at all sizes</li>
          <li><strong>Equity injection:</strong> 10&ndash;25% required depending on lender (SBA requires 10&ndash;15%)</li>
        </ul>

        <h2 className={h2Class}>Common mistakes by size</h2>

        <h3 className={h3Class}>Buying too small</h3>
        <ul className={ulClass}>
          <li><strong>Job, not a company:</strong> Below $500K EBITDA, you&rsquo;re buying yourself a job, not a business. You&rsquo;ll be the owner-operator, manager, and often the top producer</li>
          <li><strong>No management layer:</strong> Small businesses rarely have middle managers. You do everything or it doesn&rsquo;t get done</li>
          <li><strong>Debt service squeeze:</strong> After loan payments and your salary, there may be no free cash flow for growth or contingencies</li>
          <li><strong>Limited exit options:</strong> Businesses under $1M EBITDA have fewer potential buyers at exit</li>
        </ul>

        <h3 className={h3Class}>Buying too large</h3>
        <ul className={ulClass}>
          <li><strong>PE competition:</strong> Above $5M EBITDA, private equity firms are your competitors. They pay higher multiples and move faster</li>
          <li><strong>Management complexity:</strong> 200+ employee organizations require experienced executive leadership</li>
          <li><strong>Capital requirements:</strong> $10M+ equity checks require institutional investors or a very large personal balance sheet</li>
          <li><strong>Integration risk:</strong> Larger businesses have more complex systems, cultures, and stakeholder dynamics</li>
        </ul>

        <h2 className={h2Class}>The Goldilocks zone</h2>
        <p>
          For most first-time acquirers through ETA, the sweet spot is
          $1M&ndash;$3M EBITDA:
        </p>
        <ul className={ulClass}>
          <li>Large enough to support a CEO salary, debt service, and growth investment</li>
          <li>Small enough to avoid PE competition on price</li>
          <li>Usually has at least a thin management layer</li>
          <li>Multiple financing options available (SBA, bank, search fund equity)</li>
          <li>Enough complexity to create value through professional management</li>
          <li>Strong exit multiples at 5&ndash;7 years if you grow to $3M&ndash;$5M+ EBITDA</li>
        </ul>
        <p>
          For more on sizing your search, see{" "}
          <Link href="/learn/what-makes-good-acquisition-target" className="text-apple-accent hover:underline">
            what makes a good acquisition target
          </Link>{" "}
          and{" "}
          <Link href="/learn/search-fund-thesis" className="text-apple-accent hover:underline">
            how to build your search fund thesis
          </Link>.
        </p>
      </div>
    </article>
  );
}
