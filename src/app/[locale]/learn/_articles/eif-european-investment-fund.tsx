import { h1Class, h2Class, h3Class, bodyClass, ulClass, olClass } from "./shared-styles";
import Link from "next/link";

export default function EIFEuropeanInvestmentFundArticle() {
  return (
    <article>
      <h1 className={h1Class}>EIF & European Investment Fund Programs for SME Acquisitions</h1>
      <div className={bodyClass}>
        <p>The European Investment Fund (EIF), part of the European Investment Bank Group, is Europe&apos;s largest provider of SME financing support. While the EIF doesn&apos;t lend directly to businesses, its guarantee programs and fund investments flow through national banks and financial intermediaries across the EU, making acquisition financing more accessible and affordable throughout <Link href="/learn/eta-europe" className="text-apple-accent hover:underline">Europe</Link>.</p>
      </div>

      <h2 className={h2Class}>How the EIF Works</h2>
      <div className={bodyClass}>
        <ul className={ulClass}>
          <li><strong>Indirect model:</strong> The EIF provides guarantees and capital to financial intermediaries (banks, funds, leasing companies) who then lend to SMEs</li>
          <li><strong>Scale:</strong> According to the EIF 2024 Annual Report, the fund deployed over &euro;13.2 billion in new commitments during 2023 alone, supporting hundreds of billions in SME lending across Europe</li>
          <li><strong>Coverage:</strong> Active in all 27 EU member states plus UK, Turkey, and candidate countries</li>
          <li><strong>Risk sharing:</strong> By absorbing part of the credit risk, EIF programs enable banks to lend more and on better terms</li>
        </ul>
      </div>

      <h2 className={h2Class}>InvestEU SME Window</h2>
      <div className={bodyClass}>
        <p>The InvestEU program (successor to EFSI/Juncker Plan) provides the EIF&apos;s primary SME support framework:</p>
        <ul className={ulClass}>
          <li><strong>SME guarantee:</strong> Portfolio guarantees to banks covering 50&ndash;80% of losses on SME loan portfolios</li>
          <li><strong>Impact:</strong> Banks can offer lower interest rates (typically 0.5&ndash;2% below market) and reduced collateral requirements</li>
          <li><strong>Eligible uses:</strong> Business acquisitions, expansion, working capital, equipment, real estate</li>
          <li><strong>Loan size:</strong> Typically &euro;25,000 to &euro;7.5 million per borrower</li>
          <li><strong>Access:</strong> Through accredited financial intermediaries in each country (check EIF website for partner list)</li>
        </ul>
      </div>

      <h2 className={h2Class}>COSME Loan Guarantee Facility</h2>
      <div className={bodyClass}>
        <p>The COSME programme, which ran from 2014 to 2020 and is now integrated into InvestEU, generated over &euro;70 billion in additional financing for European SMEs according to the European Commission&rsquo;s final evaluation. Existing commitments remain active:</p>
        <ul className={ulClass}>
          <li>Counter-guarantees to national guarantee schemes and direct guarantees to banks</li>
          <li>Covers up to 50% of loan losses</li>
          <li>Loans up to &euro;150,000 with simplified procedures</li>
          <li>Particularly useful for smaller acquisitions and self-funded searches</li>
        </ul>
      </div>

      <h2 className={h2Class}>EIF Equity Programs</h2>
      <div className={bodyClass}>
        <ul className={ulClass}>
          <li><strong>European Angels Fund:</strong> Co-invests alongside business angels in SMEs, including buyout and succession deals</li>
          <li><strong>Social Impact Accelerator:</strong> For acquisitions with social impact components</li>
          <li><strong>Fund-of-funds programs:</strong> EIF invests in private equity and venture capital funds that may target search fund-style acquisitions</li>
          <li><strong>European Scale-up Action:</strong> Growth equity support for scaling acquired businesses post-acquisition</li>
        </ul>
      </div>

      <h2 className={h2Class}>Country-Specific EIF Programs</h2>
      <div className={bodyClass}>
        <p>The EIF partners with national institutions to create tailored programs. These country-specific partnerships often offer the best terms for acquisition financing, because the national development bank and the EIF share the risk, enabling intermediary banks to extend more favorable conditions:</p>
        <ul className={ulClass}>
          <li><strong>Germany:</strong> EIF + <Link href="/learn/kfw-germany-business-succession" className="text-apple-accent hover:underline">KfW</Link> co-guarantee programs for Nachfolge (succession) financing</li>
          <li><strong>France:</strong> EIF + <Link href="/learn/bpifrance-acquisition-financing" className="text-apple-accent hover:underline">Bpifrance</Link> enhanced guarantee for business transfers (transmission)</li>
          <li><strong>Italy:</strong> EIF + Fondo di Garanzia additional guarantee layers for SME acquisitions</li>
          <li><strong>Spain:</strong> EIF + ICO enhanced lending programs for entrepreneurs</li>
          <li><strong>Netherlands:</strong> EIF + BMKB complementary guarantee coverage</li>
          <li><strong>Poland:</strong> EIF + BGK (Bank Gospodarstwa Krajowego) SME guarantee programs</li>
          <li><strong>Portugal:</strong> EIF + PME Investimentos guarantees for Portuguese SMEs</li>
        </ul>
      </div>

      <h2 className={h2Class}>How to Access EIF-Backed Financing</h2>
      <div className={bodyClass}>
        <ol className={olClass}>
          <li><strong>Identify intermediaries:</strong> Visit the EIF website&apos;s &quot;Where to get financing&quot; tool, selecting your country and financing type</li>
          <li><strong>Contact your bank:</strong> Ask if they participate in EIF guarantee programs (many major banks do)</li>
          <li><strong>Mention EIF explicitly:</strong> Some banks don&apos;t proactively offer EIF-backed products; you may need to request them</li>
          <li><strong>Compare terms:</strong> EIF-backed loans should offer better rates and lower collateral than standard commercial loans</li>
          <li><strong>National development banks:</strong> In most countries, the national development bank (KfW, Bpifrance, ICO, etc.) is the primary EIF partner</li>
        </ol>
      </div>

      <h2 className={h2Class}>Key Takeaways</h2>
      <div className={bodyClass}>
        <ul className={ulClass}>
          <li>The EIF doesn&apos;t lend directly &mdash; it provides guarantees and capital to banks, improving SME lending terms across Europe</li>
          <li>InvestEU SME Window provides 50&ndash;80% loss coverage, enabling lower rates and reduced collateral for acquisitions</li>
          <li>EIF programs are available in all EU countries through accredited financial intermediaries</li>
          <li>National development banks (KfW, Bpifrance, ICO, etc.) are typically the primary EIF partners</li>
          <li>Always ask your bank if EIF-backed products are available &mdash; they may offer significantly better terms</li>
        </ul>
      </div>

      <h2 className={h2Class}>Related Resources</h2>
      <ul className={ulClass}>
        <li><Link href="/learn/government-financing-programs-global" className="text-apple-accent hover:underline">Government Financing Programs: Global Overview</Link></li>
        <li><Link href="/learn/acquisition-financing" className="text-apple-accent hover:underline">How to Finance an Acquisition</Link></li>
        <li><Link href="/learn/cross-border-acquisitions-europe" className="text-apple-accent hover:underline">Cross-Border Acquisitions in Europe</Link></li>
        <li><Link href="/learn/eta-europe" className="text-apple-accent hover:underline">ETA in Europe: The Opportunity</Link></li>
      </ul>

      <h2 className={h2Class}>Frequently Asked Questions</h2>

      <h3 className={h3Class}>
        Can I get an EIF loan directly?
      </h3>
      <div className={bodyClass}>
        <p>
          No. The EIF does not lend directly to businesses. Instead, it
          provides guarantees and capital to financial intermediaries (banks,
          leasing companies, microfinance institutions) that then lend to
          SMEs on improved terms. To access EIF-backed financing, contact
          your commercial bank or national development bank and ask whether
          they participate in EIF or InvestEU guarantee programs.
        </p>
      </div>

      <h3 className={h3Class}>
        How much cheaper is EIF-backed financing compared to standard bank loans?
      </h3>
      <div className={bodyClass}>
        <p>
          EIF-backed loans typically offer interest rates 0.5&ndash;2
          percentage points below standard commercial rates, plus reduced
          collateral requirements. The exact benefit varies by country and
          intermediary, but the EIF&rsquo;s risk-sharing reduces the bank&rsquo;s
          capital requirement, which translates directly into better pricing
          for borrowers. For acquisition financing in the &euro;500K&ndash;&euro;5M
          range, EIF-backed products can save &euro;5K&ndash;&euro;50K annually in
          interest costs.
        </p>
      </div>

      <h3 className={h3Class}>
        Are EIF programs available for non-EU buyers acquiring EU businesses?
      </h3>
      <div className={bodyClass}>
        <p>
          EIF programs primarily support SMEs established in the EU. If you
          are a non-EU buyer, you can typically still access EIF-backed
          financing by creating an EU holding company (in the target&rsquo;s
          country) as the acquisition vehicle. The loan would be extended to
          the EU entity, not to you personally as a foreign national. Consult
          with your intermediary bank to confirm eligibility.
        </p>
      </div>
    </article>
  );
}
