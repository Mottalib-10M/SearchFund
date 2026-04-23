import { h1Class, h2Class, h3Class, bodyClass, ulClass, olClass } from "./shared-styles";
import Link from "next/link";

export default function WealthManagementAcquisitionArticle() {
  return (
    <article>
      <h1 className={h1Class}>Acquiring a Wealth Management or Financial Advisory Practice</h1>
      <div className={bodyClass}>
        <p>Wealth management and financial advisory practices represent one of the highest-quality recurring revenue businesses available for acquisition. The US wealth management industry manages $35T+ in assets, and the sector is experiencing a massive succession wave: 40% of financial advisors are over 55, and thousands of practices will change hands in the coming decade. For search fund entrepreneurs, RIAs (Registered Investment Advisors) and financial planning practices offer predictable AUM-based fees, exceptional client retention, and a proven consolidation thesis.</p>
      </div>

      <h2 className={h2Class}>Types of Financial Advisory Businesses</h2>
      <div className={bodyClass}>
        <ul className={ulClass}>
          <li><strong>RIA (Registered Investment Advisor):</strong> Fee-based investment management. AUM fees of 0.5&ndash;1.25% annually. Fiduciary standard. Most attractive model.</li>
          <li><strong>Financial planning:</strong> Comprehensive planning (retirement, tax, estate) plus investment management. Higher per-client value.</li>
          <li><strong>Broker-dealer affiliated:</strong> Commission-based or hybrid. Revenue less predictable than pure fee-based.</li>
          <li><strong>Insurance-focused:</strong> Life insurance, annuities, and benefits planning. Commission + renewal income.</li>
          <li><strong>Tax &amp; wealth:</strong> Combined tax preparation and investment management. Strong client lock-in.</li>
          <li><strong>Multi-family office:</strong> Comprehensive wealth services for high-net-worth families. Premium fees, fewer clients.</li>
        </ul>
      </div>

      <h2 className={h2Class}>Why Wealth Management Is Attractive</h2>
      <div className={bodyClass}>
        <ul className={ulClass}>
          <li><strong>Recurring revenue:</strong> AUM-based fees create 90&ndash;95% recurring revenue with annual compounding as markets grow</li>
          <li><strong>Exceptional retention:</strong> Client retention rates of 95&ndash;98%. Switching advisors is emotionally and logistically difficult.</li>
          <li><strong>Asset-light:</strong> People + software business with minimal physical infrastructure</li>
          <li><strong>Succession wave:</strong> 40% of advisors over 55. Thousands of practices need buyers in the next 5&ndash;10 years.</li>
          <li><strong>Organic growth:</strong> Existing clients add assets (retirement contributions, windfalls) and refer friends/family</li>
          <li><strong>Market tailwind:</strong> AUM-based revenue grows with market appreciation, providing built-in revenue growth</li>
        </ul>
      </div>

      <h2 className={h2Class}>Due Diligence Priorities</h2>
      <div className={bodyClass}>
        <ul className={ulClass}>
          <li><strong>AUM composition:</strong> Total assets under management, average account size, and distribution across clients. Top 10 clients under 30% of AUM.</li>
          <li><strong>Revenue quality:</strong> What percentage is recurring AUM fees vs. commissions or one-time financial planning fees?</li>
          <li><strong>Client demographics:</strong> Average age, withdrawal rates, and growth potential. Aging client base = declining AUM over time.</li>
          <li><strong>Fee schedule:</strong> Average fee rate (target 0.75%+ of AUM) and any fee compression trends</li>
          <li><strong>Regulatory compliance:</strong> SEC or state registration, Form ADV, compliance history, and any regulatory actions</li>
          <li><strong>Technology platform:</strong> Custodian relationships (Schwab, Fidelity, Pershing), portfolio management software, and CRM</li>
          <li><strong>Advisor transition risk:</strong> How dependent is the practice on the founding advisor&apos;s personal relationships?</li>
        </ul>
      </div>

      <h2 className={h2Class}>Post-Acquisition Growth</h2>
      <div className={bodyClass}>
        <ul className={ulClass}>
          <li><strong>Tuck-in acquisitions:</strong> Acquire retiring solo advisors to add AUM at 1.5&ndash;3x revenue multiples</li>
          <li><strong>Next-gen advisors:</strong> Hire younger advisors to build relationships with clients&apos; children (the wealth transfer generation)</li>
          <li><strong>Service expansion:</strong> Add tax planning, estate planning, or insurance services for higher per-client revenue</li>
          <li><strong>Technology:</strong> Modern financial planning software, client portals, and digital onboarding for efficiency</li>
          <li><strong>Market segmentation:</strong> Develop specialized services for niches (physicians, business owners, tech executives)</li>
          <li><strong>Fee optimization:</strong> Implement tiered fee schedules and minimum account sizes to improve average revenue per client</li>
        </ul>
      </div>

      <h2 className={h2Class}>Key Takeaways</h2>
      <div className={bodyClass}>
        <ul className={ulClass}>
          <li>Wealth management offers 90&ndash;95% recurring revenue with 95&ndash;98% client retention &mdash; among the highest quality revenue profiles in any industry</li>
          <li>The succession wave (40% of advisors over 55) creates a massive acquisition opportunity over the next decade</li>
          <li>Client demographics matter: a practice with younger, accumulating clients is far more valuable than one with aging, withdrawing clients</li>
          <li>Regulatory compliance and advisor transition planning are the most critical due diligence areas</li>
          <li>Typical valuations: 2&ndash;3x annual revenue or 6&ndash;12x EBITDA for fee-based RIAs with strong retention and diversified client bases</li>
        </ul>
      </div>

      <h2 className={h2Class}>Related Resources</h2>
      <ul className={ulClass}>
        <li><Link href="/learn/insurance-agency-acquisition" className="text-apple-accent hover:underline">Acquiring an Insurance Brokerage</Link></li>
        <li><Link href="/learn/accounting-practice-acquisition" className="text-apple-accent hover:underline">Acquiring an Accounting Practice</Link></li>
        <li><Link href="/learn/professional-services-acquisition" className="text-apple-accent hover:underline">Acquiring a Professional Services Firm</Link></li>
        <li><Link href="/learn/recurring-revenue-businesses" className="text-apple-accent hover:underline">Recurring Revenue Businesses</Link></li>
      </ul>

      <h2 className={h2Class}>Sources</h2>
      <ul className={ulClass}>
        <li>Cerulli Associates, <em>US RIA Marketplace Report</em> (2024)</li>
        <li>Investment Adviser Association, <em>Investment Adviser Industry Snapshot</em> (2024)</li>
        <li>DeVoe &amp; Company, <em>RIA Deal Book: Annual M&amp;A Report</em> (2024)</li>
      </ul>
    </article>
  );
}
