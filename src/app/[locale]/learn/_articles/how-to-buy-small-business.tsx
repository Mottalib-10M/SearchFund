import Link from "next/link";
import { h1Class, h2Class, h3Class, bodyClass, ulClass } from "./shared-styles";

export default function HowToBuySmallBusinessArticle() {
  return (
    <article>
      <h1 className={h1Class}>
        How to Buy a Small Business: The Complete Guide
      </h1>
      <p className="text-sm text-apple-gray-500 mt-3">18 min read</p>

      <div className={bodyClass}>
        <p>
          Buying a small business is one of the most reliable paths to wealth
          creation and professional independence. Unlike starting from scratch,
          acquiring an existing business gives you immediate cash flow,
          established customers, proven operations, and a team already in place.
          Whether you are a first-time buyer exploring{" "}
          <Link href="/learn/what-is-eta" className="text-apple-accent hover:underline">
            entrepreneurship through acquisition (ETA)
          </Link>{" "}
          or an experienced operator looking for your next
          venture, this guide walks through the complete process from initial
          decision to successful closing.
        </p>
        <p>
          The search fund model &mdash; detailed in our{" "}
          <Link href="/learn/getting-started" className="text-apple-accent hover:underline">
            complete guide to search funds
          </Link>{" "}
          &mdash; has generated 35% aggregate IRR over 40 years by
          systematically acquiring and operating small businesses. But the
          principles of buying a business extend far beyond the search fund
          model. This guide covers the universal steps that apply to any small
          business acquisition.
        </p>

        <h2 className={h2Class}>Step 1: Define your acquisition criteria</h2>
        <p>
          Before you start looking at businesses, you need to know exactly what
          you are looking for. A clear acquisition thesis prevents you from
          wasting months chasing opportunities that are not a good fit. Define:
        </p>

        <h3 className={h3Class}>Industry focus</h3>
        <p>
          Decide which industries interest you and where you have a competitive
          advantage. Do you have operating experience in a specific sector?
          Do you understand the customer dynamics, regulations, and competitive
          landscape? Search fund data shows that acquirers with prior industry
          experience tend to outperform generalists. Popular sectors include{" "}
          <Link href="/learn/saas-acquisition" className="text-apple-accent hover:underline">
            SaaS
          </Link>,{" "}
          <Link href="/learn/healthcare-acquisition" className="text-apple-accent hover:underline">
            healthcare services
          </Link>,{" "}
          <Link href="/learn/professional-services-acquisition" className="text-apple-accent hover:underline">
            professional services
          </Link>,{" "}
          <Link href="/learn/home-services-acquisition" className="text-apple-accent hover:underline">
            home services
          </Link>, and{" "}
          <Link href="/learn/manufacturing-acquisition" className="text-apple-accent hover:underline">
            manufacturing
          </Link>.
        </p>

        <h3 className={h3Class}>Size and financial profile</h3>
        <p>
          What enterprise value range can you realistically pursue given your
          capital and financing capacity? For first-time buyers, the sweet spot
          is typically $1M&ndash;$5M in enterprise value (roughly $300K&ndash;$1.5M
          in EBITDA). Larger deals ($5M&ndash;$20M) are more common in the
          traditional search fund model, which involves raising capital from
          institutional investors. Set minimum thresholds for revenue, EBITDA
          margin, and growth trajectory. Understanding{" "}
          <Link href="/learn/business-valuation" className="text-apple-accent hover:underline">
            how to value a small business
          </Link>{" "}
          is essential before you start the search.
        </p>

        <h3 className={h3Class}>Geography</h3>
        <p>
          Will you search locally, nationally, or internationally? Most
          first-time buyers start local (within a 2&ndash;3 hour drive) to
          facilitate relationship building and due diligence. However, some
          industries (like SaaS) allow for remote acquisitions. International
          acquirers should review our{" "}
          <Link href="/learn/eta-europe" className="text-apple-accent hover:underline">
            European ETA overview
          </Link>{" "}
          for guidance on cross-border deals.
        </p>

        <h2 className={h2Class}>Step 2: Secure your financing</h2>
        <p>
          Understanding your financing options before you start searching is
          critical. It determines what size deals you can pursue and gives
          sellers confidence that you can close. The main financing sources:
        </p>
        <ul className={ulClass}>
          <li>
            <strong>SBA 7(a) loans:</strong> The US Small Business
            Administration guarantees loans up to $5M for business acquisitions.
            These are the most common financing tool for deals under $5M,
            offering 10-year terms and competitive rates. Our{" "}
            <Link href="/learn/acquisition-financing" className="text-apple-accent hover:underline">
              acquisition financing guide
            </Link>{" "}
            covers the SBA process in detail.
          </li>
          <li>
            <strong>Seller financing:</strong> Many sellers agree to finance
            10&ndash;30% of the purchase price, typically with a 3&ndash;5 year
            note at negotiated interest rates. This aligns incentives and
            reduces the equity needed. See our{" "}
            <Link href="/learn/seller-financing" className="text-apple-accent hover:underline">
              seller financing guide
            </Link>.
          </li>
          <li>
            <strong>Investor equity:</strong> In the traditional search fund
            model, 10&ndash;20 investors co-invest equity alongside the buyer.
            Learn about{" "}
            <Link href="/learn/finding-investors" className="text-apple-accent hover:underline">
              how to find search fund investors
            </Link>.
          </li>
          <li>
            <strong>Personal savings:</strong> Self-funded buyers typically
            invest $50K&ndash;$200K of personal capital as the down payment or
            equity injection.
          </li>
          <li>
            <strong>European government programs:</strong> In France (Bpifrance),
            Germany (KfW), and other EU countries, government-backed programs
            offer favorable terms for business succession acquisitions.
          </li>
        </ul>
        <p>
          A typical capital stack for a small business acquisition might be
          50&ndash;60% bank debt, 10&ndash;20% seller note, and 25&ndash;35%
          buyer equity. Understanding{" "}
          <Link href="/learn/cap-tables-equity" className="text-apple-accent hover:underline">
            cap table economics
          </Link>{" "}
          is important if you are raising investor capital.
        </p>

        <h2 className={h2Class}>Step 3: Source acquisition targets</h2>
        <p>
          Finding the right business to buy is the hardest and most
          time-consuming part of the process. The best acquirers use multiple
          channels simultaneously:
        </p>
        <ul className={ulClass}>
          <li><strong>Business brokers:</strong> Brokers list businesses for sale and connect buyers with sellers. They represent about 50&ndash;60% of all SME transactions. The downside: higher prices (broker-listed businesses typically sell at premium multiples) and competition from other buyers.</li>
          <li><strong>Direct outreach:</strong> Proactively contacting business owners who may not have their business listed for sale. This is the preferred approach for search fund practitioners and yields lower multiples. Our{" "}
            <Link href="/learn/deal-sourcing-strategies" className="text-apple-accent hover:underline">
              deal sourcing strategies
            </Link>{" "}
            guide covers proprietary deal sourcing in depth.</li>
          <li><strong>Online marketplaces:</strong> Platforms like BizBuySell, Axial, MicroAcquire (for SaaS), and country-specific platforms list thousands of businesses for sale.</li>
          <li><strong>Professional networks:</strong> Accountants, lawyers, bankers, and wealth advisors often know of business owners considering a sale before the business hits the market.</li>
          <li><strong>Industry conferences:</strong> Trade shows and industry events put you in touch with business owners in your target sector.</li>
        </ul>

        <h2 className={h2Class}>Step 4: Evaluate and screen opportunities</h2>
        <p>
          Once you have a pipeline of potential targets, systematically evaluate
          each one against your criteria. A typical screening funnel looks like:
        </p>
        <ul className={ulClass}>
          <li><strong>Initial review (15 minutes):</strong> Does the business match your industry, size, and geography criteria? If not, pass immediately.</li>
          <li><strong>Information request:</strong> Request a Confidential Information Memorandum (CIM) or financial summary. Review 3 years of financials, revenue trends, customer concentration, and owner involvement.</li>
          <li><strong>Management meeting:</strong> Meet the owner for 1&ndash;2 hours. Understand the business story, motivation for selling, transition plan, and culture. This is as much about evaluating the opportunity as building rapport with the seller.</li>
          <li><strong>Deep financial analysis:</strong> Analyze adjusted EBITDA, normalize for owner perks, one-time expenses, and market-rate compensation. Understand working capital requirements and capital expenditure needs.</li>
        </ul>

        <h2 className={h2Class}>Step 5: Make an offer (Letter of Intent)</h2>
        <p>
          When you find a business that meets your criteria, you submit a{" "}
          <Link href="/learn/letter-of-intent" className="text-apple-accent hover:underline">
            Letter of Intent (LOI)
          </Link>.
          The LOI outlines the key deal terms: purchase price, structure (asset
          vs. stock), financing contingencies, exclusivity period, transition
          arrangements, and due diligence timeline. Most LOI provisions are
          non-binding except for exclusivity and confidentiality.
        </p>
        <p>
          Negotiation is a critical skill in small business acquisitions. The
          price is rarely the only factor &mdash; sellers care deeply about
          legacy, employee treatment, transition support, and deal certainty.
          Our{" "}
          <Link href="/learn/negotiation-tactics" className="text-apple-accent hover:underline">
            negotiation tactics guide
          </Link>{" "}
          covers strategies for reaching win-win agreements.
        </p>

        <h2 className={h2Class}>Step 6: Conduct due diligence</h2>
        <p>
          Once the LOI is signed and you have exclusivity, the real work begins.
          Due diligence typically takes 60&ndash;90 days and covers:
        </p>
        <ul className={ulClass}>
          <li><strong>Financial due diligence:</strong> A{" "}
            <Link href="/learn/quality-of-earnings" className="text-apple-accent hover:underline">
              Quality of Earnings (QoE)
            </Link>{" "}
            analysis by an independent CPA firm validates the seller&rsquo;s reported EBITDA, normalizes for non-recurring items, and identifies risks.</li>
          <li><strong>Legal due diligence:</strong> Review contracts, leases, employment agreements, litigation history, intellectual property, and regulatory compliance.</li>
          <li><strong>Operational due diligence:</strong> Understand the business processes, key personnel dependencies, technology stack, and customer relationships.</li>
          <li><strong>Commercial due diligence:</strong> Validate the market position, competitive landscape, growth potential, and customer satisfaction.</li>
        </ul>
        <p>
          Our comprehensive{" "}
          <Link href="/learn/due-diligence-checklist" className="text-apple-accent hover:underline">
            due diligence checklist
          </Link>{" "}
          covers every item across all four workstreams. Budget $50K&ndash;$150K
          for professional DD fees.
        </p>

        <h2 className={h2Class}>Step 7: Structure the deal</h2>
        <p>
          How you structure the transaction has major implications for taxes,
          risk, and post-acquisition operations:
        </p>
        <ul className={ulClass}>
          <li>
            <strong>Asset purchase vs. stock purchase:</strong> In an asset
            purchase, you buy specific assets (equipment, inventory, customer
            lists, IP). In a stock purchase, you buy the entire entity including
            liabilities. Asset purchases are more common for SME deals because
            they allow the buyer to step up the asset basis for tax depreciation.
          </li>
          <li>
            <strong>Earn-outs:</strong> If there is a valuation gap between
            buyer and seller expectations, an{" "}
            <Link href="/learn/earn-out-structures" className="text-apple-accent hover:underline">
              earn-out
            </Link>{" "}
            can bridge it by making a portion of the purchase price contingent on
            future performance.
          </li>
          <li>
            <strong>Tax optimization:</strong> The structure of the deal has
            significant tax implications. Our{" "}
            <Link href="/learn/tax-optimization" className="text-apple-accent hover:underline">
              tax optimization guide
            </Link>{" "}
            covers strategies for both US and European acquisitions.
          </li>
          <li>
            <strong>Legal structure:</strong> The choice of entity (LLC, LP,
            SAS, GmbH) depends on your jurisdiction, investors, and tax
            situation. See our{" "}
            <Link href="/learn/search-fund-legal-structure" className="text-apple-accent hover:underline">
              legal structure guide
            </Link>.
          </li>
        </ul>

        <h2 className={h2Class}>Step 8: Close the transaction</h2>
        <p>
          Closing day involves signing the purchase agreement, transferring
          funds, and officially taking ownership. Before close, ensure:
        </p>
        <ul className={ulClass}>
          <li>All financing is committed and funded</li>
          <li>Due diligence findings are resolved or reflected in the price</li>
          <li>Transition agreements are in place (seller consulting period, non-compete, introductions to key customers)</li>
          <li>Insurance policies are bound (D&O, general liability, key person)</li>
          <li>Employee communication plan is prepared</li>
        </ul>

        <h2 className={h2Class}>Step 9: Execute the transition</h2>
        <p>
          The{" "}
          <Link href="/learn/first-100-days" className="text-apple-accent hover:underline">
            first 100 days after acquisition
          </Link>{" "}
          are critical for establishing trust, understanding the business deeply,
          and setting the foundation for long-term success. Key priorities
          include:
        </p>
        <ul className={ulClass}>
          <li>Meet every employee individually and establish open communication</li>
          <li>Understand every customer relationship and revenue driver</li>
          <li>Assess the financial reporting and put proper controls in place</li>
          <li>Identify 2&ndash;3 quick wins that demonstrate competence and build momentum</li>
          <li>Develop a 12-month strategic plan with clear priorities</li>
          <li>Establish a{" "}
            <Link href="/learn/board-governance" className="text-apple-accent hover:underline">
              board and governance structure
            </Link>
          </li>
          <li>Set up{" "}
            <Link href="/learn/investor-relations" className="text-apple-accent hover:underline">
              investor reporting
            </Link>{" "}
            if you have outside investors</li>
        </ul>

        <h2 className={h2Class}>Common mistakes to avoid</h2>
        <p>
          After reviewing hundreds of acquisition case studies and search fund
          outcomes, these are the most common mistakes buyers make:
        </p>
        <ul className={ulClass}>
          <li><strong>Falling in love with a deal:</strong> Emotional attachment clouds judgment. Always maintain discipline on valuation and deal terms.</li>
          <li><strong>Skimping on due diligence:</strong> The $50K&ndash;$100K you spend on DD can save you from a $1M+ mistake.</li>
          <li><strong>Overpaying:</strong> In a competitive market, it is tempting to stretch on price. But overpaying compresses returns and leaves no margin for error.</li>
          <li><strong>Underestimating the transition:</strong> The seller&rsquo;s departure creates more disruption than most buyers expect. Plan for a robust transition period.</li>
          <li><strong>Ignoring culture:</strong> Employees are watching the new owner closely. Early missteps in communication or leadership style can trigger departures.</li>
          <li><strong>Rushing the search:</strong> The average successful search takes 18&ndash;22 months. Patience is essential.</li>
        </ul>
        <p>
          For a deeper dive into failure patterns, read our article on{" "}
          <Link href="/learn/why-search-funds-fail" className="text-apple-accent hover:underline">
            why search funds fail
          </Link>.
        </p>

        <h2 className={h2Class}>Getting started</h2>
        <p>
          Whether you pursue the{" "}
          <Link href="/learn/self-funded-vs-traditional" className="text-apple-accent hover:underline">
            traditional or self-funded search fund model
          </Link>,
          buying a small business is a proven path to financial independence and
          professional fulfillment. The key is rigorous{" "}
          <Link href="/learn/pre-search-preparation" className="text-apple-accent hover:underline">
            preparation
          </Link>,
          disciplined execution, and patience throughout the process. Start by
          reading the{" "}
          <Link href="/learn/eta-reading-list" className="text-apple-accent hover:underline">
            essential ETA reading list
          </Link>,
          building your network, and defining your acquisition thesis. The{" "}
          <Link href="/learn/baby-boomer-succession" className="text-apple-accent hover:underline">
            baby boomer succession wave
          </Link>{" "}
          means the supply of quality businesses for sale is at an all-time
          high, making now the best time to start preparing.
        </p>

        <h2 className={h2Class}>Frequently Asked Questions</h2>

        <h3 className={h3Class}>What is the best way to find a small business to buy?</h3>
        <p>
          The most effective acquirers use a combination of business brokers,
          direct outreach to owners, online marketplaces, and professional
          networks. Direct proprietary outreach typically yields the best
          deals at lower multiples because you avoid competition from other
          buyers. Our{" "}
          <Link href="/learn/deal-sourcing-strategies" className="text-apple-accent hover:underline">
            deal sourcing strategies guide
          </Link>{" "}
          covers each channel in detail.
        </p>

        <h3 className={h3Class}>How much equity do I need to buy a small business?</h3>
        <p>
          Most small business acquisitions require 10 to 25 percent of the
          purchase price as equity. For a $2M deal, that means $200K to
          $500K in equity, with the remainder financed through bank debt
          (SBA 7(a) loans in the US) and seller financing. In a traditional
          search fund, investor equity covers the bulk of this requirement,
          so the searcher contributes primarily sweat equity rather than cash.
        </p>

        <h3 className={h3Class}>Should I buy a business in an industry I already know?</h3>
        <p>
          Prior industry experience helps but is not required. Most
          successful search fund CEOs acquire companies outside their prior
          industry. The transferable skills that matter most are leadership,
          financial management, sales oversight, and strategic thinking.
          That said, developing a solid understanding of your target industry
          during due diligence is essential, and building an{" "}
          <Link href="/learn/advisory-board" className="text-apple-accent hover:underline">
            advisory board
          </Link>{" "}
          with domain expertise compensates for gaps in personal experience.
        </p>
      </div>
    </article>
  );
}
