import { h1Class, h2Class, h3Class, bodyClass, ulClass, olClass } from "./shared-styles";
import Link from "next/link";

export default function ETAVsAngelInvestingArticle() {
  return (
    <article>
      <h1 className={h1Class}>ETA vs. Angel Investing: A Comparison</h1>
      <div className={bodyClass}>
        <p>Both entrepreneurship through acquisition (ETA) and angel investing offer paths to business ownership and wealth creation, but they differ fundamentally in control, risk profile, time commitment, and return patterns. ETA involves buying and operating an existing business full-time, while angel investing means making minority equity investments in early-stage startups. This comparison helps aspiring entrepreneurs and investors choose the path that best matches their goals, skills, and risk tolerance.</p>
      </div>

      <h2 className={h2Class}>Control &amp; Involvement</h2>
      <div className={bodyClass}>
        <ul className={ulClass}>
          <li><strong>ETA:</strong> Full operational control as CEO. You run the business daily, make all strategic decisions, and drive value creation.</li>
          <li><strong>Angel:</strong> Minority investor with advisory influence. Board seats are rare for individual angels. Founders make the decisions.</li>
          <li><strong>ETA time commitment:</strong> Full-time, 50&ndash;60+ hours/week during search and post-acquisition. Total career commitment.</li>
          <li><strong>Angel time commitment:</strong> Part-time. Due diligence, mentoring, and portfolio management alongside a primary career.</li>
        </ul>
      </div>

      <h2 className={h2Class}>Risk &amp; Return Profiles</h2>
      <div className={bodyClass}>
        <ul className={ulClass}>
          <li><strong>ETA returns:</strong> Median 2.5&ndash;4x return on equity. Top quartile 5&ndash;10x+. Returns driven by cash flow and operational improvement.</li>
          <li><strong>Angel returns:</strong> Power law distribution. Most investments return 0&ndash;1x. Winners return 10&ndash;100x+. Portfolio approach essential.</li>
          <li><strong>ETA risk:</strong> Concentrated single-asset risk. Your career, capital, and reputation in one business. Lower variance than angel investing.</li>
          <li><strong>Angel risk:</strong> Portfolio diversification reduces individual bet risk. 70&ndash;80% of angel investments lose money. Extreme variance.</li>
          <li><strong>ETA cash flow:</strong> Immediate cash flow from day one via an existing profitable business. Salary + distributions + equity appreciation.</li>
          <li><strong>Angel cash flow:</strong> No cash flow until exit (typically 7&ndash;10+ years). Illiquid investment with uncertain timeline.</li>
        </ul>
      </div>

      <h2 className={h2Class}>Capital Requirements</h2>
      <div className={bodyClass}>
        <ul className={ulClass}>
          <li><strong>ETA search capital:</strong> $400K&ndash;600K raised from investors, or self-funded with personal savings during the search phase.</li>
          <li><strong>ETA acquisition capital:</strong> $2&ndash;10M+ total deal size, with equity, debt, and seller financing. Searcher contributes 5&ndash;20% equity.</li>
          <li><strong>Angel investment:</strong> $5K&ndash;100K per deal. Most angels invest $25K&ndash;50K per startup. Portfolio of 15&ndash;25+ investments recommended.</li>
          <li><strong>Total capital deployed:</strong> ETA requires more total capital but uses leverage. Angel investing requires less per deal but needs portfolio scale.</li>
        </ul>
      </div>

      <h2 className={h2Class}>Skills &amp; Background</h2>
      <div className={bodyClass}>
        <ul className={ulClass}>
          <li><strong>ETA skills:</strong> Operational management, leadership, financial management, and sales. MBA or corporate experience is common but not required.</li>
          <li><strong>Angel skills:</strong> Pattern recognition, market analysis, founder evaluation, and network building. Industry expertise or startup experience is valuable.</li>
          <li><strong>ETA career path:</strong> CEO role with full P&amp;L responsibility. Career-defining commitment with reputational upside.</li>
          <li><strong>Angel career path:</strong> Complementary to primary career. Can lead to venture capital, board roles, or advisor positions.</li>
        </ul>
      </div>

      <h2 className={h2Class}>Key Takeaways</h2>
      <div className={bodyClass}>
        <ul className={ulClass}>
          <li>ETA offers operational control, immediate cash flow, and more predictable returns but requires full-time commitment and concentrated risk</li>
          <li>Angel investing provides portfolio diversification and part-time involvement but has power law returns where most investments lose money</li>
          <li>ETA median returns (2.5&ndash;4x) are more reliable than angel investing, but angel investing&apos;s outlier returns can be dramatically higher</li>
          <li>ETA is ideal for those who want to be operators; angel investing suits those who want to remain investors and advisors</li>
          <li>Some practitioners combine both: using ETA for their primary asset and angel investing for diversification</li>
        </ul>
      </div>

      <h2 className={h2Class}>Related Resources</h2>
      <ul className={ulClass}>
        <li><Link href="/learn/eta-vs-startups" className="text-apple-accent hover:underline">ETA vs. Startups</Link></li>
        <li><Link href="/learn/eta-vs-venture-capital" className="text-apple-accent hover:underline">ETA vs. Venture Capital</Link></li>
        <li><Link href="/learn/search-fund-returns" className="text-apple-accent hover:underline">Search Fund Returns</Link></li>
        <li><Link href="/learn/is-search-fund-good-investment" className="text-apple-accent hover:underline">Is a Search Fund a Good Investment?</Link></li>
      </ul>

      <h2 className={h2Class}>Sources</h2>
      <ul className={ulClass}>
        <li>Stanford GSB, <em>Search Fund Study</em> (2024)</li>
        <li>Angel Capital Association, <em>Angel Investing Returns Study</em> (2024)</li>
        <li>Kauffman Foundation, <em>Angel Investor Performance Project</em> (2024)</li>
      </ul>
    </article>
  );
}
