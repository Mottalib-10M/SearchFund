import Link from "next/link";
import { h1Class, h2Class, h3Class, bodyClass, ulClass } from "./shared-styles";

export default function ETAIndiaArticle() {
  return (
    <article>
      <h1 className={h1Class}>
        ETA in India: The World&rsquo;s Largest SME Market
      </h1>
      <p className="text-sm text-apple-gray-500 mt-3">12 min read</p>

      <div className={bodyClass}>
        <p>
          India is the world&rsquo;s fastest-growing major economy and one of the most
          compelling frontiers for{" "}
          <Link href="/learn/what-is-eta" className="text-apple-accent hover:underline">
            ETA
          </Link>{" "}
          globally. With over 63 million MSMEs, a $5 trillion economy, a massive
          succession wave in family businesses, and a young population with a
          median age of 28, India offers an unmatched scale of acquisition
          opportunities &mdash; alongside unique regulatory and cultural
          complexities.
        </p>

        <h2 className={h2Class}>Why India for ETA?</h2>
        <ul className={ulClass}>
          <li><strong>63 million+ MSMEs:</strong> India has the world&rsquo;s largest micro, small, and medium enterprise base, accounting for 30% of GDP and 45% of manufacturing output</li>
          <li><strong>$5 trillion economy:</strong> The 5th largest economy globally, with a domestic consumer base of 1.4 billion people and a rapidly expanding middle class</li>
          <li><strong>Massive succession wave:</strong> Over 70% of Indian family businesses are first-generation, and many founders are now in their 60s&ndash;70s with no clear succession plan. The next decade will see an unprecedented transfer of business ownership</li>
          <li><strong>Young population:</strong> Median age of 28 (vs. 38 in the US, 47 in Japan). India produces 1.5 million engineers and 300,000+ MBA graduates annually &mdash; a deep talent pool for post-acquisition growth</li>
          <li><strong>Growing formalization:</strong> GST implementation, digital payments (UPI), and government programs like Udyam registration are bringing millions of informal businesses into the formal economy, creating more transparent acquisition targets</li>
          <li><strong>Attractive multiples:</strong> 3&ndash;6x EBITDA for most SMEs, with significant variation by sector and geography. Less competitive than US and European markets</li>
        </ul>

        <h2 className={h2Class}>Legal structures</h2>

        <h3 className={h3Class}>Entity types</h3>
        <ul className={ulClass}>
          <li><strong>Private Limited Company (Pvt Ltd):</strong> The most common and preferred structure for acquisitions. Minimum 2 directors and 2 shareholders. Limited liability. Regulated by the Companies Act, 2013</li>
          <li><strong>Limited Liability Partnership (LLP):</strong> Combines the flexibility of a partnership with limited liability. Popular among professional services firms. Lower compliance burden than Pvt Ltd but has restrictions on FDI</li>
          <li><strong>One Person Company (OPC):</strong> Single-member entity with limited liability. Suitable for very small acquisitions. Converts to Pvt Ltd if turnover exceeds &#8377;2 crore or paid-up capital exceeds &#8377;50 lakh</li>
          <li><strong>Acquisition vehicle:</strong> Most buyers create a new Pvt Ltd holdco in India. The holdco acquires 100% of the target&rsquo;s shares. For foreign buyers, the vehicle must comply with FDI regulations under FEMA</li>
        </ul>

        <h3 className={h3Class}>FDI rules &amp; automatic route sectors</h3>
        <ul className={ulClass}>
          <li><strong>Automatic route:</strong> Most sectors allow 100% FDI without government approval &mdash; including IT services, manufacturing, healthcare, education (private), and food processing</li>
          <li><strong>Government route:</strong> Some sectors require prior approval from the relevant ministry &mdash; including defense (&gt;74%), telecom, media, mining, and multi-brand retail</li>
          <li><strong>Restricted sectors:</strong> Certain activities like lottery, gambling, chit funds, and real estate (with exceptions) are prohibited for FDI</li>
          <li><strong>Press Note 3 (PN3):</strong> Investments from countries sharing a land border with India (including China) require mandatory government approval regardless of sector</li>
        </ul>

        <h3 className={h3Class}>Share vs. asset purchase</h3>
        <ul className={ulClass}>
          <li><strong>Share deal:</strong> Most common in India. Buyer acquires equity shares of the target company. Simpler execution but inherits all liabilities including tax, regulatory, and contingent claims</li>
          <li><strong>Slump sale:</strong> Transfer of a business undertaking as a going concern for a lump sum. Tax-efficient for the seller (taxed as capital gains rather than business income). Requires transfer of all assets and liabilities of the undertaking</li>
          <li><strong>Asset deal:</strong> Buyer acquires specific assets (plant, machinery, IP, contracts). Avoids liability inheritance but can be complex due to stamp duty on individual asset transfers and GST implications</li>
        </ul>

        <h2 className={h2Class}>Financing options</h2>
        <ul className={ulClass}>
          <li><strong>SIDBI (Small Industries Development Bank of India):</strong> India&rsquo;s principal development finance institution for MSMEs. Offers acquisition and growth financing at subsidized rates, direct lending, and refinancing through commercial banks</li>
          <li><strong>Commercial banks:</strong> SBI, HDFC Bank, ICICI Bank, Axis Bank, and Kotak Mahindra Bank offer term loans for business acquisition, typically at 10&ndash;14% interest. Require substantial collateral (often 1.5&ndash;2x loan value in property or fixed assets)</li>
          <li><strong>NBFC lending:</strong> Non-Banking Financial Companies like Bajaj Finance, Tata Capital, and Piramal Finance provide more flexible acquisition financing than banks, often at 12&ndash;18% rates. Faster approvals but higher cost of capital</li>
          <li><strong>Seller financing:</strong> Less common in India than in Western markets but growing, especially in professional services and technology businesses. Typically 10&ndash;25% of deal value with 1&ndash;3 year payout periods</li>
          <li><strong>PE/VC ecosystem:</strong> India has a mature private equity market ($70B+ AUM). Firms like Everstone, Multiples, ChrysCapital, and India Value Fund are active in mid-market transactions. Family offices &mdash; Premji Invest, Azim Premji Foundation, and others &mdash; increasingly participate in smaller deals</li>
          <li><strong>Government schemes:</strong> CGTMSE (Credit Guarantee Fund Trust for Micro and Small Enterprises) provides collateral-free loan guarantees up to &#8377;5 crore. MUDRA loans support smaller acquisitions</li>
        </ul>

        <h2 className={h2Class}>tax environment</h2>
        <ul className={ulClass}>
          <li><strong>Corporate tax (lower rate):</strong> 25% (plus surcharge and cess, effective ~25.17%) for companies with annual turnover up to &#8377;400 crore. New manufacturing companies can opt for 15% under Section 115BAB</li>
          <li><strong>Corporate tax (higher rate):</strong> 30% (plus surcharge and cess, effective ~34.94%) for companies with turnover exceeding &#8377;400 crore</li>
          <li><strong>Long-term capital gains (LTCG):</strong> 20% with indexation benefit on sale of unlisted shares held for more than 24 months. 10% on listed shares (above &#8377;1 lakh exemption) held for more than 12 months</li>
          <li><strong>Short-term capital gains (STCG):</strong> 15% on listed shares held for less than 12 months. Unlisted shares held less than 24 months taxed at the applicable income tax slab rate</li>
          <li><strong>GST:</strong> Standard rate of 18% for most services. Manufacturing goods attract rates of 5%, 12%, 18%, or 28% depending on the product category. GST has simplified India&rsquo;s previously fragmented indirect tax system</li>
          <li><strong>No estate or inheritance tax:</strong> India does not levy estate, inheritance, or gift tax (for gifts from relatives), making inter-generational wealth transfer tax-efficient</li>
          <li><strong>Withholding tax:</strong> 10% on dividends to residents, 20% on dividends to non-residents (subject to DTAA). India has Double Taxation Avoidance Agreements with 90+ countries</li>
        </ul>

        <h2 className={h2Class}>Target industries</h2>
        <ul className={ulClass}>
          <li><strong>IT services &amp; BPO:</strong> India&rsquo;s $250B+ IT industry includes thousands of small IT services, staffing, and BPO companies. Many first-generation founders built 50&ndash;500 employee businesses in the 2000s and are now seeking exits. Recurring revenue models, high margins, and export-oriented revenue (USD-denominated) make these attractive</li>
          <li><strong>Healthcare &amp; diagnostics:</strong> Hospital chains, diagnostic labs (pathology, radiology), specialty clinics, and pharmacy chains. India&rsquo;s private healthcare market is $80B+ and growing 15% annually. Massive consolidation opportunity in fragmented markets</li>
          <li><strong>Education &amp; EdTech:</strong> K&ndash;12 private schools, coaching institutes (IIT/medical entrance), vocational training, and EdTech companies. India has 400,000+ private schools and the largest EdTech market outside the US</li>
          <li><strong>Manufacturing:</strong> Auto components, pharmaceuticals (API manufacturing), textiles, chemicals, and food processing. India&rsquo;s PLI (Production Linked Incentive) schemes are driving investment in manufacturing</li>
          <li><strong>Food processing:</strong> India is the world&rsquo;s second-largest food producer but processes only 10% of output. Packaged foods, cold chain logistics, and food services offer strong acquisition targets with government incentive support</li>
          <li><strong>Financial services &amp; fintech:</strong> Insurance brokerages, wealth management, NBFC lending, and fintech companies. India&rsquo;s financial services sector is under-penetrated with massive growth runway driven by digital adoption (1B+ Aadhaar, 300M+ UPI users)</li>
        </ul>

        <h2 className={h2Class}>Key challenges</h2>
        <ul className={ulClass}>
          <li><strong>Regulatory complexity across states:</strong> India has 28 states, each with its own labor laws, licensing requirements, and compliance regimes. Operating across state borders can feel like operating across countries. GST has helped but state-level regulations remain fragmented</li>
          <li><strong>Cultural nuances in family business transactions:</strong> Family dynamics heavily influence deal-making. Founders may have emotional attachment to the business, multiple family members may hold informal stakes, and verbal agreements may override written contracts. Relationship-building and patience are essential</li>
          <li><strong>Infrastructure gaps:</strong> Power reliability, logistics costs (14% of GDP vs. 8% in the US), internet connectivity in Tier 2&ndash;3 cities, and cold chain infrastructure remain challenges depending on the sector and geography</li>
          <li><strong>Land &amp; real estate title issues:</strong> India&rsquo;s land records are often outdated, disputed, or unclear. If the target business owns real estate, title verification is critical and can be time-consuming. Encumbrance certificates and mutation records must be verified at the sub-registrar level</li>
          <li><strong>Informal economy:</strong> Despite rapid formalization, many SMEs still operate with some degree of informality &mdash; cash transactions, under-reported revenue, or informal employment arrangements. Thorough financial{" "}
            <Link href="/learn/due-diligence-checklist" className="text-apple-accent hover:underline">
              due diligence
            </Link>{" "}
            is non-negotiable</li>
          <li><strong>Lengthy legal processes:</strong> Contract enforcement in Indian courts averages 3&ndash;5 years. Arbitration (under the Arbitration and Conciliation Act, 1996) is increasingly preferred for dispute resolution in M&amp;A transactions</li>
        </ul>

        <h2 className={h2Class}>The ETA ecosystem in India</h2>
        <ul className={ulClass}>
          <li><strong>ISB Hyderabad:</strong> The Indian School of Business has been a pioneer in promoting search fund and ETA concepts in India. Faculty research, case studies, and alumni networks are building awareness</li>
          <li><strong>IIM Ahmedabad &amp; IIM Bangalore:</strong> India&rsquo;s top management institutes are producing graduates increasingly interested in entrepreneurship through acquisition rather than traditional startup or corporate paths</li>
          <li><strong>Indian PE/VC community:</strong> India&rsquo;s private equity ecosystem ($70B+ in AUM) provides a strong foundation. Mid-market PE firms, angel networks (Indian Angel Network, Mumbai Angels), and accelerators are beginning to support search fund models</li>
          <li><strong>Growing family office participation:</strong> Indian family offices &mdash; particularly those of first-generation tech entrepreneurs &mdash; are showing interest in backing search fund operators as an alternative asset class. Offices like Premji Invest, Catamaran Ventures (Infosys), and DSP Family Office are active investors</li>
          <li><strong>NASSCOM &amp; industry bodies:</strong> NASSCOM (for IT/BPO), CII, and FICCI provide industry data, networking platforms, and deal flow channels that can be valuable for searchers targeting specific sectors</li>
        </ul>

        <p>
          India&rsquo;s sheer scale, demographic dividend, and the upcoming
          generational transfer in family businesses make it one of the most
          exciting ETA markets in the world. Success requires deep local
          knowledge, cultural sensitivity, strong legal counsel, and patience
          with regulatory processes &mdash; but the opportunity is enormous.
        </p>

        <p>
          For a broader overview of ETA fundamentals, see{" "}
          <Link href="/learn/what-is-eta" className="text-apple-accent hover:underline">
            what is ETA
          </Link>{" "}
          and{" "}
          <Link href="/learn/best-countries-buy-business" className="text-apple-accent hover:underline">
            best countries to buy a business
          </Link>.
        </p>

        <h2 className={h2Class}>Frequently asked questions</h2>

        <h3 className={h3Class}>How large is the business succession opportunity in India?</h3>
        <p>
          India&rsquo;s succession opportunity is unparalleled in scale. According to a 2023 PwC India Family Business Survey, over 70% of Indian family businesses are still run by their first-generation founders, and fewer than 20% have a strong succession plan in place. The Ministry of MSME estimates that there are 63.4 million registered micro, small, and medium enterprises in India, contributing approximately 30% of GDP. As the generation that built businesses during India&rsquo;s post-liberalization era (1991 onward) approaches retirement age, tens of thousands of profitable companies in the &#8377;5&ndash;50 crore revenue range will need new ownership. Unlike in the US or Europe, India lacks a mature broker and M&amp;A advisory infrastructure for sub-$10M deals, creating wide-open deal flow for <Link href="/learn/succession-driven-acquisitions" className="text-apple-accent hover:underline">succession-focused acquirers</Link>.
        </p>

        <h3 className={h3Class}>What are the biggest due diligence risks when acquiring an Indian SME?</h3>
        <p>
          According to Grant Thornton&rsquo;s India M&amp;A Dealtracker, the most critical due diligence risks in Indian SME acquisitions include: (1) tax compliance history, particularly under the pre-GST regime where multiple overlapping indirect taxes created complex liabilities; (2) undisclosed related-party transactions and personal expenses routed through the business; (3) land and property title issues, which affect approximately 25% of transactions involving real estate assets; (4) informal employment practices including unreported cash compensation to workers; and (5) pending or potential litigation, as Indian courts have significant case backlogs. Successful acquirers typically budget 60&ndash;90 days for <Link href="/learn/due-diligence-checklist" className="text-apple-accent hover:underline">due diligence</Link> in India, compared to 30&ndash;45 days in Western markets, and engage both a Big Four firm for financial diligence and a specialized Indian law firm for legal and regulatory review.
        </p>

        <h3 className={h3Class}>Can foreign nationals acquire and operate businesses in India?</h3>
        <p>
          Yes, but with important regulatory considerations. Under India&rsquo;s Foreign Exchange Management Act (FEMA) and the consolidated FDI Policy issued by the Department for Promotion of Industry and Internal Trade (DPIIT), 100% foreign direct investment is permitted under the automatic route in most sectors relevant to ETA, including IT services, manufacturing, healthcare, education (private), and food processing. Foreign buyers typically incorporate a Private Limited Company (Pvt Ltd) in India as an acquisition vehicle and must register the investment with the Reserve Bank of India. According to the World Bank&rsquo;s Ease of Doing Business data, India has improved significantly in recent years, though company incorporation still takes 10&ndash;15 days. Investors from countries sharing a land border with India (including China) require mandatory government approval under Press Note 3 (2020).
        </p>

        <h2 className={h2Class}>Sources</h2>
        <ul className={ulClass}>
          <li>Ministry of MSME, Government of India, <em>Annual Report on MSMEs</em> (2024)</li>
          <li>PwC India, <em>Family Business Survey: India Report</em> (2023)</li>
          <li>IESE Business School, <em>International Search Fund Study</em> (2024)</li>
        </ul>
      </div>
    </article>
  );
}
