import { h1Class, h2Class, h3Class, bodyClass, ulClass, olClass } from "./shared-styles";
import Link from "next/link";

export default function ETAChinaArticle() {
  return (
    <article>
      <h1 className={h1Class}>ETA in China &amp; Greater China</h1>
      <div className={bodyClass}>
        <p>China, the world&apos;s second-largest economy at $18T+ GDP, has 50 million+ SMEs &mdash; more than any other country. While the Chinese market presents unique challenges for foreign acquirers (regulatory complexity, language, and cultural barriers), the sheer scale of the succession opportunity, combined with a maturing private sector and growing interest in professional management, makes it impossible to ignore for global ETA practitioners.</p>
      </div>

      <h2 className={h2Class}>Market Overview</h2>
      <div className={bodyClass}>
        <ul className={ulClass}>
          <li><strong>Economy:</strong> $18T+ GDP, 1.4B population. World&apos;s largest manufacturing economy and second-largest consumer market.</li>
          <li><strong>SME scale:</strong> 50M+ SMEs generating over 60% of GDP and 80% of urban employment</li>
          <li><strong>First-generation transition:</strong> Entrepreneurs who started businesses in the 1980s&ndash;1990s (reform era) are reaching retirement age</li>
          <li><strong>&ldquo;Rich second generation&rdquo; challenge:</strong> Many founders&apos; children prefer finance, tech, or lifestyle over inheriting manufacturing businesses</li>
          <li><strong>Greater China:</strong> Hong Kong (gateway for international capital), Taiwan (semiconductor and manufacturing), and Mainland China each offer distinct opportunities</li>
        </ul>
      </div>

      <h2 className={h2Class}>Regulatory Environment</h2>
      <div className={bodyClass}>
        <ul className={ulClass}>
          <li><strong>Foreign investment:</strong> &ldquo;Negative list&rdquo; defines restricted/prohibited sectors. Most manufacturing and services are open to foreign investment.</li>
          <li><strong>WFOE:</strong> Wholly Foreign-Owned Enterprise is the standard vehicle for foreign acquirers in permitted sectors</li>
          <li><strong>VIE structures:</strong> Variable Interest Entity structures used for restricted sectors (technology, media, education). Complex but common.</li>
          <li><strong>MOFCOM approval:</strong> Ministry of Commerce review for acquisitions above thresholds or in sensitive sectors</li>
          <li><strong>Capital controls:</strong> Repatriation of profits is generally permitted but subject to tax clearance and SAFE (State Administration of Foreign Exchange) procedures</li>
          <li><strong>Hong Kong:</strong> Common law system, no capital controls, and serves as a holding company jurisdiction for Mainland investments</li>
        </ul>
      </div>

      <h2 className={h2Class}>Target Industries</h2>
      <div className={bodyClass}>
        <ul className={ulClass}>
          <li><strong>Manufacturing:</strong> Consumer products, electronics components, industrial equipment. China&apos;s manufacturing SMEs supply global markets.</li>
          <li><strong>Healthcare &amp; medical devices:</strong> Growing domestic healthcare market with aging population. Policy support for domestic innovation.</li>
          <li><strong>Consumer brands:</strong> Domestic food, beverage, and consumer brands serving China&apos;s massive internal market</li>
          <li><strong>Professional services:</strong> Accounting, consulting, and legal services firms serving cross-border clients</li>
          <li><strong>Technology (Hong Kong/Taiwan):</strong> SaaS, IT services, and hardware. Less regulatory complexity in these markets.</li>
          <li><strong>Education:</strong> Tutoring, professional training, and corporate education. Regulatory restrictions on K-12 but opportunities in professional education.</li>
        </ul>
      </div>

      <h2 className={h2Class}>Challenges</h2>
      <div className={bodyClass}>
        <ul className={ulClass}>
          <li><strong>Regulatory risk:</strong> Government policies can change rapidly and significantly impact industries (as seen in education, technology, and real estate)</li>
          <li><strong>Due diligence complexity:</strong> Financial records may not follow international standards. Related-party transactions and off-book arrangements are common.</li>
          <li><strong>Language &amp; culture:</strong> Mandarin fluency is essential. &ldquo;Guanxi&rdquo; (relationships) drive business more than contracts.</li>
          <li><strong>IP protection:</strong> Intellectual property enforcement has improved but remains a concern in some sectors</li>
          <li><strong>Geopolitical tensions:</strong> US-China relations create uncertainty for cross-border deals and technology transfers</li>
          <li><strong>Capital repatriation:</strong> While legally permitted, the process can be complex and time-consuming</li>
        </ul>
      </div>

      <h2 className={h2Class}>Key Takeaways</h2>
      <div className={bodyClass}>
        <ul className={ulClass}>
          <li>China&apos;s 50M+ SMEs represent the world&apos;s largest succession opportunity by volume</li>
          <li>Hong Kong serves as the preferred gateway and holding company jurisdiction for international investors</li>
          <li>Regulatory risk is the primary concern &mdash; focus on sectors aligned with government policy priorities</li>
          <li>Manufacturing and healthcare offer the most accessible opportunities for foreign acquirers</li>
          <li>Local partners, advisors, and language capability are non-negotiable requirements for success</li>
        </ul>
      </div>

      <h2 className={h2Class}>Related Resources</h2>
      <ul className={ulClass}>
        <li><Link href="/learn/eta-japan" className="text-apple-accent hover:underline">ETA in Japan</Link></li>
        <li><Link href="/learn/eta-south-korea" className="text-apple-accent hover:underline">ETA in South Korea</Link></li>
        <li><Link href="/learn/eta-singapore" className="text-apple-accent hover:underline">ETA in Singapore &amp; Southeast Asia</Link></li>
        <li><Link href="/learn/best-countries-buy-business" className="text-apple-accent hover:underline">Best Countries to Buy a Business</Link></li>
      </ul>

      <h2 className={h2Class}>Frequently asked questions</h2>

      <h3 className={h3Class}>Can foreign investors acquire 100% ownership of Chinese businesses?</h3>

      <div className={bodyClass}>
        <p>Foreign investors can acquire 100% ownership in most sectors through a Wholly Foreign-Owned Enterprise (WFOE) structure, as long as the business does not fall within the &ldquo;Negative List&rdquo; of restricted or prohibited industries. According to MOFCOM&rsquo;s latest guidance, the Negative List has been progressively shortened in recent years, with most manufacturing and services sectors now fully open to foreign ownership. However, sectors such as telecommunications, media, education, and certain technology companies remain restricted and may require Variable Interest Entity (VIE) structures or joint ventures with Chinese partners. The MOFCOM review process is required for acquisitions above certain thresholds or in sensitive sectors, and capital repatriation is subject to State Administration of Foreign Exchange (SAFE) procedures and tax clearance.</p>
      </div>

      <h3 className={h3Class}>Why is Hong Kong commonly used as a holding company jurisdiction for China acquisitions?</h3>

      <div className={bodyClass}>
        <p>Hong Kong serves as the preferred gateway for international capital entering China due to its common law legal system, absence of capital controls, and favorable tax treatment. The Hong Kong&ndash;China Double Taxation Agreement reduces withholding tax on dividends from 10% to 5% for qualifying holding companies, and Hong Kong imposes no capital gains tax. PwC&rsquo;s <em>Doing Business in China Guide</em> notes that over 70% of inbound foreign direct investment into China flows through Hong Kong structures. For search fund entrepreneurs, establishing a Hong Kong holding company (typically a limited company) that owns the WFOE in Mainland China provides a clean, internationally recognized corporate structure that simplifies future fundraising, profit repatriation, and eventual exit.</p>
      </div>

      <h3 className={h3Class}>What are the biggest due diligence challenges when acquiring Chinese SMEs?</h3>

      <div className={bodyClass}>
        <p>Financial record accuracy is the primary due diligence challenge in Chinese SME acquisitions. According to PwC and the All-China Federation of Industry and Commerce, many Chinese SMEs maintain financial records that do not conform to international standards, and related-party transactions, off-book arrangements, and dual bookkeeping (one set for tax authorities, another for internal use) are common. Revenue recognition practices, tax compliance, and social insurance obligations all require careful scrutiny. Additionally, intellectual property protection remains a concern in certain sectors despite improvements in enforcement. Engaging experienced local auditors and legal counsel who understand both Chinese business practices and international acquisition standards is non-negotiable&mdash;generic international advisors without deep China expertise will miss critical issues.</p>
      </div>

      <h2 className={h2Class}>Sources</h2>
      <ul className={ulClass}>
        <li>All-China Federation of Industry and Commerce, <em>Private Enterprise Survey</em> (2024)</li>
        <li>MOFCOM, <em>Foreign Investment Statistical Report</em> (2024)</li>
        <li>PwC, <em>Doing Business in China Guide</em> (2024)</li>
      </ul>
    </article>
  );
}
