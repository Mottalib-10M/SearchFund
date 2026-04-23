import Link from "next/link";
import { h1Class, h2Class, h3Class, bodyClass, ulClass } from "./shared-styles";

export default function KfWGermanyBusinessSuccessionArticle() {
  return (
    <article>
      <h1 className={h1Class}>
        KfW Germany: Financing for Business Succession (Nachfolge)
      </h1>
      <p className="text-sm text-apple-gray-500 mt-3">14 min read</p>

      <div className={bodyClass}>
        <p>
          KfW (Kreditanstalt f&uuml;r Wiederaufbau) is Germany&rsquo;s
          state-owned development bank and the most important financing
          partner for business succession (&ldquo;Unternehmensnachfolge&rdquo;)
          in{" "}
          <Link href="/learn/eta-germany" className="text-apple-accent hover:underline">
            Germany
          </Link>. With 700,000 SME owners (&ldquo;Mittelstand&rdquo;)
          approaching retirement over the next decade, KfW&rsquo;s
          succession financing programs are critical for ETA
          entrepreneurs targeting the German market.
        </p>

        <h2 className={h2Class}>Why KfW matters for German acquisitions</h2>
        <ul className={ulClass}>
          <li><strong>Scale:</strong> KfW is one of the world&rsquo;s largest development banks, with &euro;500B+ in assets</li>
          <li><strong>Mittelstand focus:</strong> Germany&rsquo;s 3.5 million SMEs (the &ldquo;Mittelstand&rdquo;) form the backbone of Europe&rsquo;s largest economy. KfW specifically supports their succession</li>
          <li><strong>Indirect lending:</strong> KfW doesn&rsquo;t lend directly &mdash; it provides subsidized loans through commercial banks (Hausbanken) at below-market rates</li>
          <li><strong>Risk-sharing:</strong> KfW assumes 50&ndash;80% of the credit risk, making banks far more willing to lend to first-time acquirers</li>
        </ul>

        <h2 className={h2Class}>Key KfW programs for acquirers</h2>

        <h3 className={h3Class}>1. ERP-Gr&uuml;nderkredit &ndash; Startgeld</h3>
        <ul className={ulClass}>
          <li><strong>Amount:</strong> Up to &euro;125,000</li>
          <li><strong>Term:</strong> 5&ndash;10 years, with 1&ndash;2 year grace period</li>
          <li><strong>Rate:</strong> Fixed, below market (currently 4&ndash;6%)</li>
          <li><strong>Risk assumption:</strong> KfW assumes 80% of the bank&rsquo;s credit risk</li>
          <li><strong>Best for:</strong> Smaller acquisitions or as a complement to larger financing packages</li>
          <li><strong>No collateral required:</strong> The 80% risk-sharing means the Hausbank needs minimal collateral from the borrower</li>
        </ul>

        <h3 className={h3Class}>2. ERP-Gr&uuml;nderkredit &ndash; Universell</h3>
        <ul className={ulClass}>
          <li><strong>Amount:</strong> Up to &euro;25 million</li>
          <li><strong>Term:</strong> Up to 20 years (5&ndash;10 years typical for acquisitions)</li>
          <li><strong>Rate:</strong> Fixed for 10 years, below market rates</li>
          <li><strong>Risk assumption:</strong> KfW assumes 50% of the credit risk</li>
          <li><strong>Best for:</strong> Larger Mittelstand acquisitions (&euro;1M&ndash;&euro;10M+)</li>
          <li><strong>Requirement:</strong> Business must have been operating for less than 5 years under new ownership (qualifying period for &ldquo;Nachfolge&rdquo;)</li>
        </ul>

        <h3 className={h3Class}>3. ERP-Kapital f&uuml;r Gr&uuml;ndung</h3>
        <ul className={ulClass}>
          <li><strong>Amount:</strong> Up to &euro;500,000</li>
          <li><strong>Term:</strong> 15 years, with 7-year grace period on principal</li>
          <li><strong>Function:</strong> Subordinated loan &mdash; acts as quasi-equity, improving your debt/equity ratio</li>
          <li><strong>Rate:</strong> Fixed, slightly above standard KfW rates</li>
          <li><strong>Key benefit:</strong> Reduces the personal equity injection required (similar to Bpifrance&rsquo;s{" "}
            <Link href="/learn/bpifrance-acquisition-financing" className="text-apple-accent hover:underline">
              Pr&ecirc;t Transmission
            </Link>)</li>
          <li><strong>Requirement:</strong> Buyer must contribute at least 10% personal equity</li>
        </ul>

        <h2 className={h2Class}>Typical German acquisition financing structure</h2>
        <ul className={ulClass}>
          <li><strong>Senior bank debt (KfW-subsidized):</strong> 50&ndash;65% of purchase price</li>
          <li><strong>KfW ERP-Kapital (subordinated):</strong> 10&ndash;20%</li>
          <li><strong>Buyer equity:</strong> 15&ndash;25%</li>
          <li><strong>Seller financing (Verk&auml;uferdarlehen):</strong> 0&ndash;15% (less common in Germany but growing)</li>
        </ul>

        <h3 className={h3Class}>Example: &euro;2M Mittelstand acquisition</h3>
        <ul className={ulClass}>
          <li>Senior KfW loan (ERP-Universell): &euro;1,200,000 (60%)</li>
          <li>Subordinated KfW loan (ERP-Kapital): &euro;300,000 (15%)</li>
          <li>Buyer equity: &euro;400,000 (20%)</li>
          <li>Seller note: &euro;100,000 (5%)</li>
          <li>Total: &euro;2,000,000 &mdash; KfW provides 75% of the financing</li>
        </ul>

        <h2 className={h2Class}>How to access KfW financing</h2>
        <ul className={ulClass}>
          <li><strong>Step 1:</strong> Choose your Hausbank (commercial bank). The most active in succession financing: Sparkassen, Volksbanken, Deutsche Bank, Commerzbank</li>
          <li><strong>Step 2:</strong> Apply through your Hausbank &mdash; KfW does not accept direct applications</li>
          <li><strong>Step 3:</strong> The Hausbank assesses the deal and submits the KfW application</li>
          <li><strong>Step 4:</strong> KfW approves within 2&ndash;4 weeks (routine) or 4&ndash;8 weeks (complex)</li>
          <li><strong>Important:</strong> Apply before signing the purchase agreement. KfW will not retroactively finance a completed acquisition</li>
        </ul>

        <h2 className={h2Class}>Additional German support programs</h2>
        <ul className={ulClass}>
          <li><strong>B&uuml;rgschaftsbanken:</strong> Regional guarantee banks that provide 60&ndash;80% guarantees on bank loans (similar to Bpifrance guarantees)</li>
          <li><strong>IHK &amp; HWK advisory:</strong> Chambers of commerce (IHK) and crafts chambers (HWK) offer free succession consulting and matching services</li>
          <li><strong>nexxt-change.org:</strong> Germany&rsquo;s largest business succession marketplace, supported by KfW, DIHK, and federal ministries</li>
          <li><strong>State programs (L&auml;nder):</strong> Bavaria, NRW, Baden-W&uuml;rttemberg, and other states offer additional subsidized loans and grants</li>
        </ul>

        <h2 className={h2Class}>German tax considerations</h2>
        <ul className={ulClass}>
          <li><strong>GmbH vs. UG:</strong> Most acquisitions are structured as GmbH purchases (share deal) or asset deals (Anlageverm&ouml;gen)</li>
          <li><strong>Share deal advantage:</strong> No real estate transfer tax on share acquisitions &lt;90% (Grunderwerbsteuer saving of 3.5&ndash;6.5%)</li>
          <li><strong>Organschaft:</strong> Tax consolidation between holding GmbH and operating GmbH allows interest deduction</li>
          <li><strong>See:</strong>{" "}
            <Link href="/learn/tax-optimization" className="text-apple-accent hover:underline">
              tax optimization strategies
            </Link></li>
        </ul>

        <p>
          For the complete German ETA guide, see{" "}
          <Link href="/learn/eta-germany" className="text-apple-accent hover:underline">
            ETA in Germany
          </Link>.
          For international comparison, see{" "}
          <Link href="/learn/bpifrance-acquisition-financing" className="text-apple-accent hover:underline">
            Bpifrance (France)
          </Link>{" "}
          and{" "}
          <Link href="/learn/sba-7a-loans-complete-guide" className="text-apple-accent hover:underline">
            SBA 7(a) (US)
          </Link>.
        </p>
      </div>
    </article>
  );
}
