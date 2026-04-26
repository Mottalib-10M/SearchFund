import Link from "next/link";
import { h1Class, h2Class, h3Class, bodyClass, ulClass } from "./shared-styles";

export default function HowMuchMoneyBuyBusinessArticle() {
  return (
    <article>
      <h1 className={h1Class}>
        How Much Money Do You Need to Buy a Business?
      </h1>
      <p className="text-sm text-apple-gray-500 mt-3">14 min read</p>

      <div className={bodyClass}>
        <p>
          The capital required to buy a business ranges from virtually
          nothing (in a traditional search fund) to hundreds of thousands
          in personal investment (in a self-funded acquisition). The
          answer depends on the deal size, financing structure, and how
          much outside capital you can raise.
        </p>
        <p>
          This guide breaks down the capital requirements by deal size
          and financing approach, with specific numbers for each scenario.
        </p>

        <h2 className={h2Class}>The capital stack: how acquisitions are financed</h2>
        <p>
          Every business acquisition is funded by a combination of debt, seller financing, and equity. Understanding the{" "}
          <Link href="/learn/capital-stack-explained" className="text-apple-accent hover:underline">
            capital stack
          </Link>{" "}
          is essential before evaluating how much you personally need to contribute:
        </p>
        <ul className={ulClass}>
          <li><strong>Senior debt:</strong> Bank loans or{" "}
            <Link href="/learn/sba-7a-loans-complete-guide" className="text-apple-accent hover:underline">
              SBA 7(a) loans
            </Link>{" "}
            - typically 50-70% of the purchase price
          </li>
          <li><strong>Seller financing:</strong>{" "}
            <Link href="/learn/seller-financing" className="text-apple-accent hover:underline">
              Seller notes
            </Link>{" "}
            - typically 5-20% of the purchase price
          </li>
          <li><strong>Equity:</strong> Your personal cash, investor equity, or both - typically 10-30% of the purchase price</li>
        </ul>
        <p>
          The key question: how much of the equity needs to come from
          your own pocket?
        </p>

        <h2 className={h2Class}>By deal size: personal capital required</h2>

        <h3 className={h3Class}>$500K-$1M business (micro-acquisition)</h3>
        <ul className={ulClass}>
          <li><strong>SBA-financed:</strong> $50K-$100K equity injection (10% of purchase price)</li>
          <li><strong>With 15% seller financing:</strong> Reduces equity to $35K-$75K</li>
          <li><strong>Total personal capital:</strong> $50K-$100K including search costs and DD</li>
        </ul>

        <h3 className={h3Class}>$1M-$3M business (small business)</h3>
        <ul className={ulClass}>
          <li><strong>SBA-financed:</strong> $100K-$300K equity injection</li>
          <li><strong>With seller financing + SBA:</strong> $80K-$200K</li>
          <li><strong>Total personal capital:</strong> $100K-$350K including all costs</li>
        </ul>

        <h3 className={h3Class}>$3M-$10M business (lower mid-market)</h3>
        <ul className={ulClass}>
          <li><strong>Self-funded with investors:</strong> $100K-$500K personal equity + investor equity for the rest</li>
          <li><strong>Traditional search fund:</strong> $0-$50K personal (investors fund acquisition equity)</li>
          <li><strong>Total personal capital:</strong> $150K-$600K (self-funded) or $0-$50K (search fund)</li>
        </ul>

        <h3 className={h3Class}>$10M+ business (mid-market)</h3>
        <ul className={ulClass}>
          <li><strong>Traditional search fund:</strong> $0-$50K personal (investors fund the equity)</li>
          <li><strong>Independent sponsor:</strong> $50K-$200K personal + deal-by-deal investor equity</li>
          <li><strong>Requires institutional capital</strong> in almost all cases</li>
        </ul>

        <h2 className={h2Class}>By financing approach</h2>

        <h3 className={h3Class}>Traditional search fund ($0-$50K personal)</h3>
        <p>
          The{" "}
          <Link href="/learn/search-fund-lifecycle" className="text-apple-accent hover:underline">
            traditional search fund model
          </Link>{" "}
          is the lowest personal capital path:
        </p>
        <ul className={ulClass}>
          <li>Investors fund the search ($400K-$600K)</li>
          <li>Investors fund the acquisition equity ($2M-$10M+)</li>
          <li>Searcher earns 20-25% equity through sweat equity</li>
          <li>Some investors ask for $10K-$50K personal investment for alignment</li>
          <li>See our{" "}
            <Link href="/learn/search-fund-cost" className="text-apple-accent hover:underline">
              search fund cost breakdown
            </Link>{" "}
            for details</li>
        </ul>

        <h3 className={h3Class}>SBA 7(a) self-funded ($50K-$300K personal)</h3>
        <p>
          The most popular self-funded approach for businesses under $5M:
        </p>
        <ul className={ulClass}>
          <li>SBA provides up to $5M in loan guarantees</li>
          <li>Required equity injection: 10-15% of purchase price</li>
          <li>Seller financing can count toward equity in some structures</li>
          <li>You own 100% of the equity (minus any seller roll-over)</li>
        </ul>

        <h3 className={h3Class}>Conventional bank loan ($100K-$500K+ personal)</h3>
        <ul className={ulClass}>
          <li>Banks typically require 20-30% equity for acquisition financing</li>
          <li>Stronger personal guarantees and collateral requirements</li>
          <li>Faster processing than SBA but higher equity requirement</li>
        </ul>

        <h3 className={h3Class}>Creative financing ($10K-$100K personal)</h3>
        <p>
          For searchers with limited capital, see our{" "}
          <Link href="/learn/buy-business-no-money-down" className="text-apple-accent hover:underline">
            buying a business with no money down
          </Link>{" "}
          guide. Options include:
        </p>
        <ul className={ulClass}>
          <li>Earn-in arrangements (work for equity before buying)</li>
          <li>Maximum seller financing (50-80% of purchase price)</li>
          <li>ROBS (Rollover for Business Startups) using retirement funds</li>
          <li>Partner with an equity investor</li>
        </ul>

        <h2 className={h2Class}>Beyond the purchase price: hidden costs</h2>
        <p>
          Don&rsquo;t forget these additional capital requirements:
        </p>
        <ul className={ulClass}>
          <li><strong>Due diligence:</strong> $50K-$150K (
            <Link href="/learn/quality-of-earnings" className="text-apple-accent hover:underline">
              QoE
            </Link>,
            legal, environmental)
          </li>
          <li><strong>Transaction legal fees:</strong> $30K-$100K</li>
          <li><strong>Working capital:</strong> 2-3 months of operating expenses as a cash reserve</li>
          <li><strong>Post-close integration costs:</strong> New hires, technology, rebranding</li>
          <li><strong>Personal living expenses:</strong> 3-6 months of personal runway (you may not draw a full salary immediately)</li>
          <li><strong>Lender fees:</strong> 1-3% of loan amount</li>
        </ul>

        <h2 className={h2Class}>Sources of equity capital</h2>
        <ul className={ulClass}>
          <li><strong>Personal savings:</strong> The most straightforward source</li>
          <li><strong>Home equity (HELOC):</strong> Borrow against home equity for the injection</li>
          <li><strong>Retirement funds (ROBS):</strong> Roll over 401(k)/IRA into a C-Corp to fund the acquisition (tax-free but complex)</li>
          <li><strong>Family and friends:</strong> Common for first-time buyers ($25K-$100K contributions)</li>
          <li><strong>Search fund investors:</strong> For larger deals, 10-20 investors contribute acquisition equity</li>
          <li><strong>Private equity / family offices:</strong> For deals above $5M enterprise value</li>
          <li><strong>Seller equity rollover:</strong> The seller retains 5-20% equity as a signal of confidence</li>
        </ul>

        <h2 className={h2Class}>Rules of thumb</h2>
        <ul className={ulClass}>
          <li><strong>Minimum viable capital:</strong> $50K personal net worth opens the door to SBA-financed micro-acquisitions. See our guide on{" "}
            <Link href="/learn/what-makes-good-acquisition-target" className="text-apple-accent hover:underline">
              what makes a good acquisition target
            </Link>{" "}
            at this price range</li>
          <li><strong>Comfortable capital:</strong> $150K-$300K personal gives you flexibility across most small business acquisitions</li>
          <li><strong>Zero personal capital:</strong> Only realistic through the traditional search fund model or a pure earn-in arrangement</li>
          <li><strong>Total budget = 1.2x equity injection:</strong> Always add 20% buffer for DD costs, fees, and working capital surprises</li>
        </ul>

        <h2 className={h2Class}>What determines how much you need</h2>
        <ul className={ulClass}>
          <li><strong>Deal size:</strong> Larger deals require more equity (obvious but critical)</li>
          <li><strong>Financing structure:</strong> SBA vs. conventional vs. seller financing, each has different equity requirements</li>
          <li><strong>Seller flexibility:</strong> A motivated seller willing to carry a large note dramatically reduces your capital needs</li>
          <li><strong>Business quality:</strong> Better businesses (stable cash flow, good assets) are easier to finance with less equity</li>
          <li><strong>Your creditworthiness:</strong> Credit score, net worth, and experience affect lending terms</li>
          <li><strong>Your ETA path:</strong> Whether you pursue a{" "}
            <Link href="/learn/self-funded-vs-traditional" className="text-apple-accent hover:underline">
              self-funded or traditional search fund
            </Link>{" "}
            fundamentally changes personal capital requirements</li>
        </ul>
        <p>
          For an overview of the full acquisition process and how
          financing fits in, see our{" "}
          <Link href="/learn/how-to-buy-small-business" className="text-apple-accent hover:underline">
            how to buy a small business
          </Link>{" "}
          guide and{" "}
          <Link href="/learn/acquisition-financing" className="text-apple-accent hover:underline">
            acquisition financing
          </Link>{" "}
          deep dive.
        </p>

        <h2 className={h2Class}>Frequently Asked Questions</h2>

        <h3 className={h3Class}>Can you buy a business with no money down?</h3>
        <p>
          Yes, but it requires specific structures. The traditional search fund model lets you acquire a business with as little as $0-$50K of personal capital because investors fund both the search and the acquisition equity. Outside of search funds, creative approaches like maximum seller financing (50-80% of purchase price), earn-in arrangements, and ROBS rollovers can dramatically reduce personal capital requirements, though truly zero-dollar deals are rare and require exceptional negotiation.
        </p>

        <h3 className={h3Class}>How much equity do I need for an SBA loan to buy a business?</h3>
        <p>
          SBA 7(a) loans require a minimum equity injection of 10-15% of the total project cost (purchase price plus fees). For a $1M business, that means $100K-$150K in equity. Seller financing can sometimes count toward the equity injection depending on the structure, which can reduce your personal cash outlay. The SBA guarantees up to $5M in loan value, making it the most popular financing tool for acquisitions under $5M.
        </p>

        <h3 className={h3Class}>What is the total cost of buying a business beyond the purchase price?</h3>
        <p>
          Plan for 15-25% above the purchase price in additional costs. This includes due diligence ($50K-$150K for Quality of Earnings, legal, and environmental reviews), transaction legal fees ($30K-$100K), lender fees (1-3% of loan amount), working capital reserves (2-3 months of operating expenses), and 3-6 months of personal living expenses. A good rule of thumb: budget 1.2x your equity injection to account for these extras.
        </p>
      </div>
    </article>
  );
}
