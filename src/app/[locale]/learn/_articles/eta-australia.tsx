import Link from "next/link";
import { h1Class, h2Class, h3Class, bodyClass, ulClass } from "./shared-styles";

export default function ETAAustraliaArticle() {
  return (
    <article>
      <h1 className={h1Class}>
        ETA in Australia &amp; New Zealand
      </h1>
      <p className="text-sm text-apple-gray-500 mt-3">12 min read</p>

      <div className={bodyClass}>
        <p>
          Australia and New Zealand represent a large, English-speaking market
          with a massive succession wave. With 2.5 million SMEs in Australia
          alone, stable legal frameworks, and a growing ETA ecosystem, the
          region offers compelling opportunities for acquisition
          entrepreneurs.
        </p>

        <h2 className={h2Class}>Market opportunity</h2>
        <ul className={ulClass}>
          <li><strong>2.5 million SMEs in Australia</strong> (97% of all businesses). New Zealand adds another 500,000+</li>
          <li><strong>Succession crisis:</strong> 50%+ of Australian business owners are over 50. The ABS estimates $3.5 trillion in business assets will change hands in the next decade</li>
          <li><strong>English-speaking:</strong> No language barriers. Common law legal system similar to the UK and US</li>
          <li><strong>Stable economy:</strong> 30+ years without recession (pre-COVID). Strong regulatory framework and rule of law</li>
          <li><strong>Underserved market:</strong> Very few dedicated search funds operate in ANZ. PE focuses on $20M+ deals, leaving the lower middle market open</li>
        </ul>

        <h2 className={h2Class}>Legal structures</h2>

        <h3 className={h3Class}>Australia</h3>
        <ul className={ulClass}>
          <li><strong>Pty Ltd (Proprietary Limited):</strong> The standard structure for private companies. Minimum 1 director (must be an Australian resident), no minimum capital</li>
          <li><strong>Unit trust:</strong> Common for investment vehicles. A trust holds the shares of the operating company, providing tax and asset protection benefits</li>
          <li><strong>Acquisition structure:</strong> Typically a new Pty Ltd (or trust + Pty Ltd) acquires 100% of the target&rsquo;s shares. Asset deals also common for smaller businesses</li>
          <li><strong>FIRB (Foreign Investment Review Board):</strong> Foreign buyers acquiring businesses above A$289M (2024 threshold) need FIRB approval. Lower thresholds for sensitive sectors (media, telecoms, defense)</li>
        </ul>

        <h3 className={h3Class}>New Zealand</h3>
        <ul className={ulClass}>
          <li><strong>Limited company (Ltd):</strong> Standard structure. No minimum capital, 1+ directors required</li>
          <li><strong>OIO (Overseas Investment Office):</strong> Foreign buyers need OIO consent for significant business acquisitions (&gt;NZ$100M) and any sensitive land purchases</li>
        </ul>

        <h2 className={h2Class}>Financing options</h2>
        <ul className={ulClass}>
          <li><strong>Australian banks:</strong> CBA, Westpac, ANZ, NAB offer acquisition financing. Typical terms: 50&ndash;65% LTV, 3&ndash;7 year term, base rate + 2&ndash;4%</li>
          <li><strong>Non-bank lenders:</strong> Judo Bank, Prospa, and other alternative lenders provide more flexible acquisition financing for SMEs</li>
          <li><strong>Vendor finance:</strong> Very common in Australia &mdash; 20&ndash;40% of purchase price on 3&ndash;5 year terms is standard practice</li>
          <li><strong>Export Finance Australia:</strong> Government-backed financing for businesses with export exposure</li>
          <li><strong>R&amp;D Tax Incentive:</strong> Post-acquisition, businesses with R&amp;D activities can claim a 43.5% tax offset (refundable for companies &lt;A$20M revenue)</li>
          <li><strong>No SBA equivalent:</strong> Australia lacks a direct equivalent to the US SBA program, making vendor finance and bank relationships more critical</li>
        </ul>

        <h2 className={h2Class}>Tax landscape</h2>

        <h3 className={h3Class}>Australia</h3>
        <ul className={ulClass}>
          <li><strong>Corporate tax:</strong> 25% for companies with &lt;A$50M turnover (base rate entities). 30% for larger companies</li>
          <li><strong>Capital gains:</strong> Taxed at the corporate rate. Individuals get a 50% CGT discount for assets held &gt;12 months</li>
          <li><strong>Small business CGT concessions:</strong> Businesses with &lt;A$6M net assets qualify for significant CGT relief on exit (up to 100% exemption for retirement)</li>
          <li><strong>Franking credits (dividend imputation):</strong> Tax paid at the company level creates franking credits that reduce shareholder tax on dividends &mdash; eliminates double taxation</li>
          <li><strong>Stamp duty:</strong> Varies by state (0&ndash;5.5% on asset transfers). Some states have abolished stamp duty on business asset transfers</li>
          <li><strong>GST:</strong> 10% GST applies to most goods and services. Business transfers as &ldquo;going concerns&rdquo; are GST-free</li>
        </ul>

        <h3 className={h3Class}>New Zealand</h3>
        <ul className={ulClass}>
          <li><strong>Corporate tax:</strong> 28%. No distinction by company size</li>
          <li><strong>No capital gains tax:</strong> NZ has no general CGT (though some asset sales may be taxable under specific rules)</li>
          <li><strong>GST:</strong> 15%. Going concern sales can be zero-rated</li>
          <li><strong>Imputation system:</strong> Similar to Australia, eliminates double taxation on dividends</li>
        </ul>

        <h2 className={h2Class}>Target industries</h2>
        <ul className={ulClass}>
          <li><strong>Trades &amp; home services:</strong> Plumbing, electrical, HVAC, landscaping &mdash; highly fragmented with strong recurring revenue potential</li>
          <li><strong>Healthcare:</strong> Dental, physio, allied health practices &mdash; aging population driving demand growth</li>
          <li><strong>IT services &amp; MSPs:</strong> Growing sector with high recurring revenue and strong retention</li>
          <li><strong>Agriculture services:</strong> Farm services, equipment dealers, food processing &mdash; Australia&rsquo;s agricultural backbone</li>
          <li><strong>Mining services:</strong> Australia-specific. Equipment maintenance, logistics, and support services for the mining industry</li>
          <li><strong>Professional services:</strong> Accounting, engineering, and consulting firms with retiring partners</li>
        </ul>

        <h2 className={h2Class}>Practical considerations</h2>
        <ul className={ulClass}>
          <li><strong>Geography:</strong> Australia is vast. Most businesses cluster in Sydney, Melbourne, Brisbane, Perth, and Adelaide metro areas. Factor in geographic concentration when building a roll-up thesis</li>
          <li><strong>Deal sourcing:</strong> Use business brokers (AIBB members), accountants, SEEK Business (online marketplace), and direct outreach to business owners</li>
          <li><strong>Valuation multiples:</strong> 3&ndash;6x EBITDA for most SMEs. Premium multiples (6&ndash;8x) for businesses with recurring revenue, strong management, and growth potential</li>
          <li><strong>Employment law:</strong> Australia has strong employee protections (Fair Work Act). Redundancy payments, unfair dismissal claims, and modern awards add complexity post-acquisition</li>
          <li><strong>Visa requirements:</strong> Non-Australian buyers can use the Business Innovation visa (subclass 188) or Significant Investor visa. Must demonstrate business experience and financial capacity</li>
        </ul>

        <h2 className={h2Class}>ETA ecosystem</h2>
        <ul className={ulClass}>
          <li><strong>Growing community:</strong> The Australian ETA ecosystem is small but growing. Melbourne Business School and AGSM have begun introducing ETA coursework</li>
          <li><strong>Industry groups:</strong> Business SA, chambers of commerce, and COSBOA provide networking and deal flow access</li>
          <li><strong>Advisors:</strong> Mid-tier firms like BDO, Grant Thornton, and HLB Mann Judd are active in SME M&amp;A alongside boutique advisors</li>
          <li><strong>Opportunity:</strong> With minimal search fund competition and a massive succession wave, ANZ offers some of the best risk-adjusted opportunities globally</li>
        </ul>

        <p>
          For the Asia-Pacific context, see{" "}
          <Link href="/learn/eta-japan" className="text-apple-accent hover:underline">
            ETA in Japan
          </Link>{" "}
          and the{" "}
          <Link href="/learn/best-countries-buy-business" className="text-apple-accent hover:underline">
            best countries to buy a business
          </Link>.
        </p>
      </div>
    </article>
  );
}
