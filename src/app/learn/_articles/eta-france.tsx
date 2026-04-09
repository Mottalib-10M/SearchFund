import { h1Class, h2Class, h3Class, bodyClass, ulClass } from "./shared-styles";

export default function ETAFranceArticle() {
  return (
    <article>
      <h1 className={h1Class}>ETA in France: How to Acquire a Business</h1>
      <p className="text-sm text-apple-gray-500 mt-3">15 min read</p>

      <div className={bodyClass}>
        <p>
          France is one of the most dynamic markets for Entrepreneurship Through
          Acquisition in Europe. With approximately 700,000 businesses expected
          to change hands in the coming decade and strong government support for
          business transfers, France offers exceptional opportunities for search
          fund entrepreneurs. The presence of top-tier business schools like
          INSEAD in Fontainebleau, HEC Paris, and ESSEC has created a thriving
          ecosystem of searchers, investors, and advisors. INSEAD alumni in
          particular have been at the forefront of ETA in France, leveraging
          the school&apos;s global network to connect with international investors
          while targeting French SMEs.
        </p>

        <h2 className={h2Class}>The French market landscape</h2>
        <p>
          France has over 3.9 million SMEs, representing 99.9% of all companies.
          Many are owned by founders in their late 50s and 60s who have no family
          successor. The French government actively encourages business transfers
          through tax incentives, financing programs (BPI France), and regulatory
          frameworks designed to facilitate ownership transitions.
        </p>

        <h2 className={h2Class}>Legal structures for acquisition</h2>
        <h3 className={h3Class}>Share purchase (cession de parts/actions)</h3>
        <p>
          The most common structure in search fund acquisitions. The buyer
          acquires the shares of the existing company, taking over all assets,
          liabilities, contracts, and employees. This provides continuity for
          clients, suppliers, and staff.
        </p>

        <h3 className={h3Class}>Asset purchase (cession de fonds de commerce)</h3>
        <p>
          Less common for search funds but sometimes used for specific situations.
          The buyer acquires the business assets (goodwill, equipment, inventory,
          contracts) but not the corporate entity or its liabilities.
        </p>

        <h3 className={h3Class}>Holding company structure</h3>
        <p>
          Most search fund acquisitions in France are structured through a
          holding company (holding de reprise) that acquires the target. This
          enables tax-efficient debt service through the &ldquo;integration
          fiscale&rdquo; regime and facilitates future add-on acquisitions.
        </p>

        <h2 className={h2Class}>Financing an acquisition in France</h2>
        <ul className={ulClass}>
          <li><strong>Senior debt:</strong> French banks (BNP, SG, CM-CIC, Banque Populaire) actively finance acquisitions, typically lending 3-4x EBITDA.</li>
          <li><strong>BPI France:</strong> The public investment bank offers co-lending and guarantee programs that reduce risk for commercial banks.</li>
          <li><strong>Seller financing (credit vendeur):</strong> Common in French transactions, typically 15-30% of the price deferred over 2-3 years.</li>
          <li><strong>Search fund investor equity:</strong> The balance is funded by search fund investors through equity.</li>
        </ul>

        <h2 className={h2Class}>Key considerations</h2>
        <ul className={ulClass}>
          <li><strong>Labor law:</strong> French labor regulations are protective of employees. All employment contracts transfer automatically with the business.</li>
          <li><strong>Works council (CSE):</strong> Companies with 11+ employees must inform and consult the CSE before a change of ownership.</li>
          <li><strong>Garantie d&apos;actif et de passif (GAP):</strong> The French equivalent of representations and warranties, essential for buyer protection.</li>
          <li><strong>Earn-out clauses:</strong> Common to bridge valuation gaps and ensure a smooth transition period with the seller.</li>
        </ul>

        <h2 className={h2Class}>Deal sourcing in France</h2>
        <p>
          Successful searchers in France use a combination of direct outreach to
          business owners, intermediary networks (brokers, accountants, notaries),
          and online platforms. Key intermediary networks include CRA
          (Cédants et Repreneurs d&apos;Affaires), BPI France&apos;s transmission platform,
          and regional chambers of commerce.
        </p>
      </div>
    </article>
  );
}
