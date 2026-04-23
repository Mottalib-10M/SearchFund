import Link from "next/link";
import { h1Class, h2Class, h3Class, bodyClass, ulClass } from "./shared-styles";

export default function CapitalGainsTaxByCountryArticle() {
  return (
    <article>
      <h1 className={h1Class}>
        Capital Gains Tax on Business Sales by Country
      </h1>
      <p className="text-sm text-apple-gray-500 mt-3">16 min read</p>

      <div className={bodyClass}>
        <p>
          The tax you pay when selling your acquired business varies
          dramatically by country &mdash; from 0% in some jurisdictions
          to 45%+ in others. Understanding capital gains tax (CGT)
          rates and exemptions is essential for{" "}
          <Link href="/learn/exit-readiness-plan" className="text-apple-accent hover:underline">
            exit planning
          </Link>{" "}
          and can influence where and how you structure your acquisition
          from day one.
        </p>

        <h2 className={h2Class}>United States</h2>
        <ul className={ulClass}>
          <li><strong>Federal rate:</strong> 20% long-term capital gains (assets held &gt;1 year) + 3.8% Net Investment Income Tax (NIIT) = 23.8%</li>
          <li><strong>State taxes:</strong> 0&ndash;13.3% additional (California is highest at 13.3%)</li>
          <li><strong>QSBS exclusion:</strong>{" "}
            <Link href="/learn/qsbs-qualified-small-business-stock" className="text-apple-accent hover:underline">
              Section 1202
            </Link>{" "}
            allows up to $10M (or 10x basis) tax-free for C-Corp shares held 5+ years. The single biggest tax advantage in US ETA</li>
          <li><strong>1031 exchange:</strong> Not applicable to business sales (only real property)</li>
          <li><strong>Installment sale:</strong> Can defer gains by receiving payments over time (Section 453)</li>
          <li><strong>Effective rate:</strong> 0% (with QSBS) to 37% (California, no QSBS)</li>
        </ul>

        <h2 className={h2Class}>France</h2>
        <ul className={ulClass}>
          <li><strong>Flat tax (PFU):</strong> 30% (12.8% income tax + 17.2% social contributions) on capital gains from share sales</li>
          <li><strong>Progressive option:</strong> Can elect progressive income tax rates (up to 45%) instead of flat tax if beneficial</li>
          <li><strong>Holding company exemption:</strong> 88% exemption on gains from subsidiaries held 2+ years (participation exemption for companies)</li>
          <li><strong>Dutreil pact:</strong>{" "}
            <Link href="/learn/dutreil-pact" className="text-apple-accent hover:underline">
              75% exemption
            </Link>{" "}
            on business share transfers (donation/inheritance)</li>
          <li><strong>Retirement exemption:</strong> Full CGT exemption for sellers aged 60+ who retire and sell a business worth &lt;&euro;500K</li>
          <li><strong>Effective rate:</strong> 3.6% (holding + participation exemption) to 30% (flat tax)</li>
        </ul>

        <h2 className={h2Class}>Germany</h2>
        <ul className={ulClass}>
          <li><strong>Individual sellers:</strong> Capital gains taxed at personal income tax rate (up to 45% + 5.5% solidarity surcharge)</li>
          <li><strong>40% exemption:</strong> Teileinkunfteverfahren &mdash; only 60% of gains from qualifying shares are taxable</li>
          <li><strong>Retirement relief (Freibetrag):</strong> &euro;45,000 lifetime exemption for sellers aged 55+ (once per lifetime)</li>
          <li><strong>Corporate sellers:</strong> 95% of gains from qualifying subsidiaries are tax-exempt (participation exemption)</li>
          <li><strong>GmbH vs. asset sale:</strong> Share sales are taxed at shareholder level; asset sales trigger both corporate and personal tax</li>
          <li><strong>Effective rate:</strong> 1.5% (corporate participation exemption) to 27% (individual, 60% rule)</li>
        </ul>

        <h2 className={h2Class}>United Kingdom</h2>
        <ul className={ulClass}>
          <li><strong>CGT rates:</strong> 18% (basic rate) or 24% (higher rate) for individuals (2024 rates)</li>
          <li><strong>Business Asset Disposal Relief (BADR):</strong> 10% rate on the first &pound;1M of qualifying gains (formerly Entrepreneurs&rsquo; Relief)</li>
          <li><strong>Substantial Shareholding Exemption (SSE):</strong> Corporate sellers exempt from CGT on qualifying subsidiary disposals (held 12+ months, 10%+ ownership)</li>
          <li><strong>EIS/SEIS relief:</strong> Tax advantages for qualifying small company investments (not common in ETA)</li>
          <li><strong>Effective rate:</strong> 10% (BADR, first &pound;1M) to 24%</li>
        </ul>

        <h2 className={h2Class}>Spain</h2>
        <ul className={ulClass}>
          <li><strong>CGT rates:</strong> Progressive: 19% (first &euro;6K), 21% (&euro;6K&ndash;&euro;50K), 23% (&euro;50K&ndash;&euro;200K), 27% (&euro;200K&ndash;&euro;300K), 28% (above &euro;300K)</li>
          <li><strong>Participation exemption:</strong> 95% exemption for companies selling 5%+ subsidiaries held 12+ months</li>
          <li><strong>Reinvestment relief:</strong> Deferral available if proceeds are reinvested in another business</li>
          <li><strong>Effective rate:</strong> 1.4% (corporate participation) to 28% (individual)</li>
        </ul>

        <h2 className={h2Class}>Italy</h2>
        <ul className={ulClass}>
          <li><strong>Individual sellers:</strong> 26% flat tax on capital gains from share sales</li>
          <li><strong>PEX (Participation Exemption):</strong> 95% of gains from qualifying subsidiaries are exempt if held 12+ months (effective rate: 1.2%)</li>
          <li><strong>Individual PEX:</strong> Only 49.72% of gains are taxable for individuals holding qualifying shares (effective rate: ~13%)</li>
          <li><strong>Effective rate:</strong> 1.2% (corporate PEX) to 26% (individual, no PEX)</li>
        </ul>

        <h2 className={h2Class}>Other key markets</h2>

        <h3 className={h3Class}>Switzerland</h3>
        <ul className={ulClass}>
          <li>Individuals: capital gains on shares are generally tax-free (Privatverm&ouml;gen)</li>
          <li>Qualification as professional trader can trigger income tax (up to 40%+)</li>
          <li>Companies: participation deduction for 10%+ holdings</li>
          <li><strong>Effective rate:</strong> 0% (individual, non-professional) to 40%+ (professional trader)</li>
        </ul>

        <h3 className={h3Class}>Netherlands</h3>
        <ul className={ulClass}>
          <li>Participation exemption: 100% exemption on gains from 5%+ subsidiaries</li>
          <li>Box 2 taxation: 26.9% on &ldquo;substantial interest&rdquo; (5%+ individual shareholding)</li>
          <li><strong>Effective rate:</strong> 0% (corporate participation) to 26.9% (individual)</li>
        </ul>

        <h3 className={h3Class}>Canada</h3>
        <ul className={ulClass}>
          <li>50% of capital gains included in income (effective rate: 50% of your marginal rate)</li>
          <li>LCGE: ~$1M CAD lifetime capital gains exemption for Qualified Small Business Corporation shares</li>
          <li><strong>Effective rate:</strong> 0% (within LCGE) to ~27% (above LCGE)</li>
        </ul>

        <h2 className={h2Class}>Planning implications for ETA</h2>
        <ul className={ulClass}>
          <li><strong>Structure from day one:</strong> The entity and{" "}
            <Link href="/learn/holding-company-structures" className="text-apple-accent hover:underline">
              holding structure
            </Link>{" "}
            you choose at acquisition determines your exit tax rate</li>
          <li><strong>QSBS planning (US):</strong> Use a{" "}
            <Link href="/learn/c-corp-vs-s-corp-llc" className="text-apple-accent hover:underline">
              C-Corp structure
            </Link>{" "}
            from inception to qualify for Section 1202</li>
          <li><strong>Holding periods:</strong> Most participation exemptions require 12&ndash;24 month holding periods. Plan accordingly</li>
          <li><strong>Cross-border:</strong> If buyer and business are in different countries, double taxation treaties and withholding taxes apply. See{" "}
            <Link href="/learn/cross-border-acquisitions" className="text-apple-accent hover:underline">
              cross-border guide
            </Link></li>
        </ul>

        <p>
          For the complete{" "}
          <Link href="/learn/tax-optimization" className="text-apple-accent hover:underline">
            tax optimization framework
          </Link>{" "}
          and{" "}
          <Link href="/learn/exit-strategies" className="text-apple-accent hover:underline">
            exit strategies
          </Link>, see our related guides.
        </p>
      </div>
    </article>
  );
}
