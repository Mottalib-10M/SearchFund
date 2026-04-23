import Link from "next/link";
import { h1Class, h2Class, h3Class, bodyClass, ulClass } from "./shared-styles";

export default function FamilyOfficesSearchFundsArticle() {
  return (
    <article>
      <h1 className={h1Class}>
        Family Offices as Search Fund Investors
      </h1>
      <p className="text-sm text-apple-gray-500 mt-3">13 min read</p>

      <div className={bodyClass}>
        <p>
          Family offices are increasingly drawn to search fund investing as
          an alternative to traditional PE and venture capital. Their long
          time horizons, direct-investment orientation, and willingness to
          back individual operators make them natural partners for ETA
          entrepreneurs. This guide covers why family offices invest in
          search funds, how to approach them, and how to structure the
          relationship.
        </p>

        <h2 className={h2Class}>Why family offices invest in search funds</h2>
        <ul className={ulClass}>
          <li><strong>Direct ownership alignment:</strong> Family offices value the direct connection between capital and operator. Search funds offer this without the layered fee structures of PE</li>
          <li><strong>Attractive returns:</strong> The search fund asset class has generated{" "}
            <Link href="/learn/search-fund-returns" className="text-apple-accent hover:underline">
              33% aggregate pre-tax IRR
            </Link>{" "}
            &mdash; competitive with top-quartile PE and VC</li>
          <li><strong>Long-horizon capital:</strong> Unlike PE funds with 10-year lifecycles, family offices can hold investments indefinitely. They&rsquo;re patient</li>
          <li><strong>Mentorship opportunity:</strong> Many family office principals are former operators who enjoy mentoring the next generation of entrepreneurs</li>
          <li><strong>Manageable check sizes:</strong> $25K&ndash;$50K search capital + $250K&ndash;$2M acquisition equity fits comfortably in most family office portfolios</li>
          <li><strong>Co-investment optionality:</strong> The ability to invest more at the acquisition stage (and in add-ons) provides flexible capital deployment</li>
        </ul>

        <h2 className={h2Class}>Types of family offices for search funds</h2>

        <h3 className={h3Class}>Single-family offices (SFOs)</h3>
        <ul className={ulClass}>
          <li>Manage wealth for one family, typically $100M+ in assets</li>
          <li>Decision-making is fast (one principal, one decision)</li>
          <li>May have specific industry preferences aligned with the family&rsquo;s operating background</li>
          <li>Often want active involvement (board seats, strategic advice)</li>
        </ul>

        <h3 className={h3Class}>Multi-family offices (MFOs)</h3>
        <ul className={ulClass}>
          <li>Manage wealth for multiple families, typically $500M+ in total AUM</li>
          <li>More institutional in approach (investment committees, formal processes)</li>
          <li>Can pool capital from multiple families for larger commitments</li>
          <li>May have dedicated alternative investment teams that evaluate search funds</li>
        </ul>

        <h2 className={h2Class}>Finding family offices</h2>
        <ul className={ulClass}>
          <li><strong>MBA networks:</strong> Stanford, HBS, and Wharton alumni networks include family office investors. Ask current searchers for introductions</li>
          <li><strong>Search fund conferences:</strong> IESE, Stanford, and independent ETA conferences attract family office investors</li>
          <li><strong>Wealth advisor referrals:</strong> Private bankers and wealth advisors at major institutions can make introductions</li>
          <li><strong>Industry associations:</strong> Family Office Networks, CampdenFB, TIGER 21, and regional family office associations</li>
          <li><strong>Existing search fund investors:</strong> Your early investors can introduce you to their network of family offices</li>
          <li><strong>LinkedIn:</strong> Many family office principals and CIOs are active on LinkedIn. Research their investment interests before reaching out</li>
        </ul>

        <h2 className={h2Class}>Pitching to family offices</h2>
        <ul className={ulClass}>
          <li><strong>Lead with your story:</strong> Family offices invest in people first. Your background, motivation, and character matter more than your financial model</li>
          <li><strong>Respect their time:</strong> Come prepared with a polished{" "}
            <Link href="/learn/fundraising-deck" className="text-apple-accent hover:underline">
              fundraising deck
            </Link>{" "}
            and clear{" "}
            <Link href="/learn/search-fund-thesis" className="text-apple-accent hover:underline">
              thesis
            </Link></li>
          <li><strong>Understand their portfolio:</strong> Research the family&rsquo;s operating history and current investments. Show how your thesis complements their experience</li>
          <li><strong>Be transparent about risks:</strong> Family offices appreciate honesty about the 33% no-acquisition rate and the return distribution</li>
          <li><strong>Offer value beyond the check:</strong> Show that you want their expertise, not just their capital. Ask for specific operational advice or industry introductions</li>
        </ul>

        <h2 className={h2Class}>Structuring the relationship</h2>

        <h3 className={h3Class}>Standard terms</h3>
        <ul className={ulClass}>
          <li>Most family offices accept standard search fund{" "}
            <Link href="/learn/search-fund-investor-economics" className="text-apple-accent hover:underline">
              investor economics
            </Link>{" "}
            (1.5x step-up, pro-rata rights, 20&ndash;25% CEO equity)</li>
          <li>Some may request board observation rights or board seats at the acquisition stage</li>
          <li>Information rights: monthly financial updates, quarterly board packages</li>
        </ul>

        <h3 className={h3Class}>Non-standard asks to watch for</h3>
        <ul className={ulClass}>
          <li><strong>Preferred terms:</strong> Some family offices request preferred equity (guaranteed return before common). This is not standard in search funds &mdash; push back</li>
          <li><strong>Veto rights:</strong> Acquisition approval rights for large investors may be reasonable; operational veto rights are not</li>
          <li><strong>Co-investment exclusivity:</strong> Some want first right on all acquisition equity. Be careful not to lock out other investors</li>
          <li><strong>Reporting overhead:</strong> Excessive reporting requirements can distract from the search. Monthly financials and quarterly updates are sufficient</li>
        </ul>

        <h2 className={h2Class}>Family offices vs. other investor types</h2>
        <ul className={ulClass}>
          <li><strong>vs. individual investors:</strong> Family offices typically write larger checks but may have more formal processes</li>
          <li><strong>vs. fund-of-funds:</strong> Fund-of-funds are more institutional and may provide less personal mentorship, but they bring diversified portfolios and brand credibility</li>
          <li><strong>vs. PE firms:</strong> PE firms expect institutional returns on tight timelines. Family offices are more patient and relationship-oriented</li>
        </ul>

        <p>
          For the complete investor strategy, see our{" "}
          <Link href="/learn/finding-investors" className="text-apple-accent hover:underline">
            finding investors guide
          </Link>{" "}
          and{" "}
          <Link href="/learn/top-search-fund-investors" className="text-apple-accent hover:underline">
            top search fund investors list
          </Link>.
        </p>
      </div>
    </article>
  );
}
