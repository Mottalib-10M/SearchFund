import Link from "next/link";
import { h1Class, h2Class, h3Class, bodyClass, ulClass, olClass } from "./shared-styles";

export default function RevenueGrowthPlaybookArticle() {
  return (
    <article>
      <h1 className={h1Class}>Revenue Growth Playbook Post-Acquisition</h1>
      <p className="text-sm text-apple-gray-500 mt-3">9 min read</p>

      <div className={bodyClass}>
        <p>
          Growing revenue is the single most important value creation lever
          available to a search fund CEO. Operational improvements and cost
          reductions matter, but they have a ceiling. Revenue growth, by
          contrast, compounds over time and drives both profitability and
          enterprise value. The challenge is that most acquired SMEs have been
          growing slowly, or not at all, for years. The previous
          owner was often the sole salesperson, there was no marketing function,
          and pricing had not been reviewed in a decade. This playbook provides
          a structured approach to diagnosing revenue opportunities and
          executing a growth plan in the first 12-24 months after
          acquisition.
        </p>

        <h2 className={h2Class}>The 100-day revenue assessment framework</h2>
        <p>
          Before you can grow revenue, you need to understand where it comes
          from, why customers buy, and where the biggest opportunities lie.
          Use the first 100 days to conduct a rigorous assessment.
        </p>
        <ol className={olClass}>
          <li>
            <strong>Revenue decomposition.</strong> Break revenue down by
            customer, product/service line, geography, and channel. Identify
            concentration risk (if one customer represents more than 10% of
            revenue, that is a vulnerability and an opportunity to diversify).
          </li>
          <li>
            <strong>Customer profitability analysis.</strong> Not all revenue is
            created equal. Calculate gross margin by customer and by product.
            You will likely discover that some customers and products are
            significantly more profitable than others, and that some are
            unprofitable.
          </li>
          <li>
            <strong>Win/loss analysis.</strong> Interview the sales team (or the
            former owner) about recent wins and losses. Why do customers choose
            you? Why do they choose competitors? What objections come up most
            frequently?
          </li>
          <li>
            <strong>Customer interviews.</strong> Call your top 20 customers
            personally. Ask what they value most, what you could do better,
            and what additional products or services they wish you offered.
            These conversations will surface growth opportunities you never
            knew existed.
          </li>
          <li>
            <strong>competitive environment.</strong> Map your competitors by
            size, positioning, pricing, and differentiators. Identify gaps in
            the market that you can exploit.
          </li>
        </ol>

        <h2 className={h2Class}>Pricing optimization</h2>
        <p>
          Pricing is the fastest, highest-impact revenue lever available.
          A 5% price increase on a business with 20% net margins increases
          profitability by 25%, with zero additional cost. Yet most
          SMEs have not raised prices in years, and many actively undercharge.
        </p>

        <h3 className={h3Class}>Value-based pricing</h3>
        <p>
          Most SMEs price based on cost-plus or competitive benchmarking.
          Value-based pricing sets prices based on the economic value you
          deliver to the customer. If your service saves a customer $100K per
          year, charging $30K is reasonable even if your cost to deliver is
          only $10K.
        </p>
        <ul className={ulClass}>
          <li>
            Quantify the value you deliver: cost savings, revenue gains,
            risk reduction, time savings, or compliance benefits.
          </li>
          <li>
            Segment customers by willingness to pay. Enterprise customers
            and those in regulated industries typically pay more.
          </li>
          <li>
            Test price increases on new customers first before rolling
            them out to existing accounts.
          </li>
        </ul>

        <h3 className={h3Class}>Eliminating discounting culture</h3>
        <p>
          Many SMEs have an informal discounting culture where salespeople
          (or the former owner) routinely offer 10-20% discounts to
          close deals. This erodes margins and trains customers to expect
          discounts.
        </p>
        <ul className={ulClass}>
          <li>
            Implement a formal discount approval process. Any discount above
            5% should require management approval.
          </li>
          <li>
            Remove discounting authority from front-line salespeople.
          </li>
          <li>
            Replace discounts with value-adds: extended warranties, priority
            service, free training, or additional products bundled at cost.
          </li>
          <li>
            Track discount frequency and average discount percentage as KPIs.
          </li>
        </ul>

        <h3 className={h3Class}>Communicating price increases</h3>
        <ul className={ulClass}>
          <li>
            Give customers 60-90 days&apos; notice before price increases
            take effect.
          </li>
          <li>
            Frame increases around value: &ldquo;We are investing in improved
            service capabilities, expanded support hours, and new product
            features.&rdquo;
          </li>
          <li>
            Implement annual price escalation clauses in all new contracts
            (typically 3-5% per year, tied to CPI or a fixed rate).
          </li>
          <li>
            For your largest customers, deliver the news in person. Never
            surprise a key account with a price increase via email.
          </li>
        </ul>

        <h2 className={h2Class}>Sales development</h2>
        <p>
          In many acquired SMEs, the former owner was the entire sales function.
          Deals came through referrals and relationships built over decades.
          Building a scalable, repeatable sales process is essential for growth.
        </p>

        <h3 className={h3Class}>Building the pipeline</h3>
        <ul className={ulClass}>
          <li>
            Define your ideal customer profile (ICP): industry, company size,
            geography, pain points, and buying process. Not every potential
            customer is worth pursuing.
          </li>
          <li>
            Build a target account list. Use industry directories, LinkedIn
            Sales Navigator, and databases like ZoomInfo or Apollo to identify
            prospects matching your ICP.
          </li>
          <li>
            Implement a multi-channel outreach strategy: email sequences, phone
            calls, LinkedIn messages, and in-person visits for high-value
            targets.
          </li>
          <li>
            Set pipeline targets. A healthy B2B pipeline is typically 3-4x
            the quarterly revenue target.
          </li>
        </ul>

        <h3 className={h3Class}>Hiring your first sales reps</h3>
        <ul className={ulClass}>
          <li>
            Do not hire salespeople until you can articulate the sales process,
            value proposition, and ideal customer profile yourself. If you
            cannot sell the product, a rep will not be able to either.
          </li>
          <li>
            Start with one rep, prove the model, then scale. Hiring three reps
            simultaneously before you have a repeatable process is a common
            and expensive mistake.
          </li>
          <li>
            For SMEs, hire industry-experienced reps with existing relationships
            in your market. They can start contributing faster than generalist
            salespeople.
          </li>
          <li>
            Compensation structure: base salary plus commission. For SMEs,
            a 60/40 or 70/30 base-to-variable split works well. Avoid
            commission-only roles, they attract the wrong candidates
            for relationship-based SME sales.
          </li>
        </ul>

        <h3 className={h3Class}>CRM discipline</h3>
        <ul className={ulClass}>
          <li>
            Every customer interaction, deal, and pipeline opportunity must
            be logged in the CRM. No exceptions.
          </li>
          <li>
            Hold weekly pipeline reviews using CRM data. Inspect deal stages,
            next steps, and close dates. If it is not in the CRM, it does
            not exist.
          </li>
          <li>
            Track conversion rates at each pipeline stage to identify
            bottlenecks and coaching opportunities.
          </li>
        </ul>

        <h2 className={h2Class}>Cross-selling and upselling existing customers</h2>
        <p>
          Your existing customers are your most valuable growth asset. They
          already trust you, understand your value, and have a procurement
          relationship in place. Selling more to existing customers is
          five to seven times cheaper than acquiring new ones.
        </p>
        <ul className={ulClass}>
          <li>
            <strong>Wallet share analysis.</strong> For each major customer,
            estimate the total addressable spend in your category. If a
            customer buys $50K from you but spends $200K annually on services
            you offer, there is $150K of upside.
          </li>
          <li>
            <strong>Product/service bundling.</strong> Create packages that
            combine multiple products or services at a slight discount to the
            a-la-carte price. Bundles increase average order value and reduce
            the customer&apos;s incentive to shop around.
          </li>
          <li>
            <strong>Account management.</strong> Assign dedicated account
            managers to your top 20% of customers. Their job is not just
            customer service, it is proactive relationship development
            and revenue expansion.
          </li>
          <li>
            <strong>Regular business reviews.</strong> Schedule quarterly
            business reviews with key accounts to discuss their needs, share
            insights, and identify new opportunities.
          </li>
        </ul>

        <h2 className={h2Class}>New channel development</h2>

        <h3 className={h3Class}>Digital marketing</h3>
        <p>
          Most acquired SMEs have minimal digital presence. Building a basic
          digital marketing capability can generate a steady stream of inbound
          leads at a fraction of the cost of outbound sales.
        </p>
        <ul className={ulClass}>
          <li>
            <strong>Website optimization.</strong> As part of your broader{" "}
            <Link href="/learn/digital-transformation" className="text-apple-accent hover:underline">digital transformation</Link>, ensure your website clearly
            communicates what you do, who you serve, and why you are different.
            Add case studies, testimonials, and clear calls to action.
          </li>
          <li>
            <strong>Google Ads.</strong> For many B2B and local service
            businesses, Google Ads is the fastest path to inbound leads.
            Start with a $2K-$5K monthly budget and target high-intent
            keywords specific to your industry.
          </li>
          <li>
            <strong>SEO.</strong> Invest in search engine optimization for
            long-term organic visibility. Create content around the questions
            your customers ask. This is a slow burn, expect 6-12
            months before meaningful traffic, but the compound returns
            are significant.
          </li>
          <li>
            <strong>Content marketing.</strong> Publish blog posts, guides,
            case studies, and industry analysis that demonstrates your
            expertise. This builds trust and generates organic traffic.
          </li>
        </ul>

        <h3 className={h3Class}>Strategic partnerships</h3>
        <ul className={ulClass}>
          <li>
            Identify complementary businesses that serve the same customers
            but do not compete with you. Establish referral agreements with
            mutual incentives.
          </li>
          <li>
            Join industry associations and participate actively. Board
            membership and conference speaking positions generate visibility
            and credibility.
          </li>
          <li>
            Explore white-label or reseller arrangements where partners sell
            your products or services under their brand.
          </li>
        </ul>

        <h3 className={h3Class}>Wholesale and distribution</h3>
        <ul className={ulClass}>
          <li>
            If you sell products, consider adding wholesale channels , 
            selling through distributors, retailers, or online marketplaces
            (Amazon Business, Faire, or industry-specific platforms).
          </li>
          <li>
            Wholesale margins are lower, but the volume and reach can be
            significant. Ensure wholesale pricing does not cannibalize your
            direct sales channel.
          </li>
        </ul>

        <h2 className={h2Class}>Geographic expansion</h2>
        <p>
          If your business serves a local or regional market, geographic
          expansion can unlock significant growth, either organically
          (opening new locations, hiring remote salespeople in new territories)
          or through a{" "}
          <Link href="/learn/buy-and-build" className="text-apple-accent hover:underline">buy-and-build acquisition</Link>{" "}
          of a competitor in an adjacent market.
        </p>
        <ul className={ulClass}>
          <li>
            Start with adjacent markets where you can use your existing
            brand, supply chain, and operational infrastructure.
          </li>
          <li>
            Validate demand before committing. Hire a single salesperson in
            the new territory or run a targeted marketing campaign before
            investing in office space and full teams.
          </li>
          <li>
            For service businesses, remote work has expanded the addressable
            market. Consider whether you can serve new geographies without
            a physical presence.
          </li>
        </ul>

        <h2 className={h2Class}>Product and service line extension</h2>
        <ul className={ulClass}>
          <li>
            <strong>Customer-driven development.</strong> The best new products
            and services come from customer requests. If multiple customers ask
            for the same thing, build it.
          </li>
          <li>
            <strong>Adjacent services.</strong> An HVAC company adds plumbing;
            an IT managed services provider adds cybersecurity; a landscaping
            company adds snow removal. These extensions use existing
            customer relationships and operational capabilities.
          </li>
          <li>
            <strong>Recurring revenue.</strong> Convert one-time transactions
            into recurring revenue through maintenance contracts, service
            agreements, subscriptions, or managed service offerings. Recurring
            revenue is valued at 2-3x higher multiples than project-based
            revenue - a key factor in{" "}
            <Link href="/learn/exit-strategies" className="text-apple-accent hover:underline">exit strategy planning</Link>.
          </li>
          <li>
            <strong>Test before you invest.</strong> Offer new services to a
            few friendly customers before building out full capabilities.
            Validate demand and pricing before hiring staff or buying equipment.
          </li>
        </ul>

        <h2 className={h2Class}>Customer success and retention</h2>
        <p>
          Growth is meaningless if you are losing customers as fast as you
          acquire them. For most SMEs, reducing churn by even a few percentage
          points has a dramatic impact on revenue and profitability.
        </p>
        <ul className={ulClass}>
          <li>
            <strong>Measure churn.</strong> Track customer retention rates
            monthly and annually. Understand why customers leave: pricing,
            service quality, competition, or changing needs.
          </li>
          <li>
            <strong>Net Promoter Score (NPS).</strong> Survey customers
            quarterly with a simple NPS question. Follow up personally with
            detractors. Aim for an NPS of 50+ in B2B.
          </li>
          <li>
            <strong>Proactive outreach.</strong> Do not wait for customers to
            complain. Reach out regularly to check satisfaction, address issues
            early, and identify expansion opportunities.
          </li>
          <li>
            <strong>Service level agreements.</strong> Formalize response times,
            resolution targets, and service standards. What gets measured gets
            managed.
          </li>
        </ul>

        <h2 className={h2Class}>Marketing fundamentals for SMEs</h2>
        <p>
          Most SMEs spend less than 2% of revenue on marketing. Increasing this
          to 3-5%, even for a business with $5M in revenue, that
          is only $150K-$250K per year, can have an outsized impact
          when deployed effectively.
        </p>
        <ul className={ulClass}>
          <li>
            <strong>Brand identity.</strong> Invest in professional branding:
            logo, color palette, messaging, and brand guidelines. A
            professional brand signals credibility and quality to customers
            and prospects.
          </li>
          <li>
            <strong>Email marketing.</strong> Build and segment your customer
            email list. Send monthly newsletters, product updates, and
            industry insights. Email marketing has the highest ROI of any
            marketing channel at $36-$42 returned per dollar spent.
          </li>
          <li>
            <strong>Case studies and testimonials.</strong> Document customer
            success stories with specific, quantified results. These are your
            most powerful sales tools.
          </li>
          <li>
            <strong>Trade shows and events.</strong> For many B2B businesses,
            trade shows remain the most effective lead generation channel.
            Attend, exhibit, and speak at the two to three most important
            industry events annually.
          </li>
        </ul>

        <h2 className={h2Class}>Metrics and KPIs to track</h2>
        <p>
          You cannot manage what you do not measure. Build a revenue dashboard
          that the entire leadership team reviews weekly.
        </p>
        <ul className={ulClass}>
          <li>
            <strong>Revenue growth rate</strong> (monthly and year-over-year).
          </li>
          <li>
            <strong>Gross margin</strong> by product, service, and customer. Strong margins support better{" "}
            <Link href="/learn/working-capital-management" className="text-apple-accent hover:underline">working capital management</Link>.
          </li>
          <li>
            <strong>Customer acquisition cost (CAC)</strong> and payback period.
          </li>
          <li>
            <strong>Customer lifetime value (LTV)</strong> and LTV/CAC ratio
            (target 3x or higher).
          </li>
          <li>
            <strong>Pipeline value</strong> and pipeline velocity (average days
            from lead to close).
          </li>
          <li>
            <strong>Win rate</strong> (proposals won divided by proposals
            submitted).
          </li>
          <li>
            <strong>Net revenue retention</strong> (revenue from existing
            customers this year vs. last year, including expansion and churn).
          </li>
          <li>
            <strong>Revenue per employee</strong> as a measure of productivity
            and scalability.
          </li>
        </ul>

        <h2 className={h2Class}>Building a revenue growth roadmap</h2>
        <p>
          With your assessment complete and growth levers identified, build a
          prioritized roadmap that sequences initiatives based on impact,
          effort, and dependencies.
        </p>
        <ol className={olClass}>
          <li>
            <strong>Months 1-3: quick wins.</strong> Pricing optimization,
            eliminating unprofitable customers or products, cross-selling to
            existing accounts, and basic website improvements. These should
            generate incremental revenue with minimal investment.
          </li>
          <li>
            <strong>Months 3-6: build the engine.</strong> CRM
            implementation, sales process definition, hiring the first
            dedicated salesperson, and launching Google Ads. This phase
            requires investment but starts generating pipeline.
          </li>
          <li>
            <strong>Months 6-12: scale.</strong> Add marketing
            capabilities (content, email, SEO), expand the sales team, launch
            new service lines, and explore geographic expansion. Revenue
            growth should be accelerating.
          </li>
          <li>
            <strong>Months 12-24: compound.</strong> Partnerships,
            channel development, recurring revenue programs, and potentially
            add-on acquisitions for faster growth. By this stage, you should
            have a predictable, scalable revenue engine.
          </li>
        </ol>

        <p>
          Revenue growth in an acquired SME is not about revolutionary
          innovation. It is about executing the fundamentals, pricing,
          sales, marketing, and customer success, that were often
          neglected by the previous owner. The businesses that grow fastest
          after acquisition are those where the new CEO brings disciplined
          execution to an already-good business with untapped potential.
        </p>

        <h2 className={h2Class}>Frequently asked questions</h2>

        <h3 className={h3Class}>What is the fastest way to grow revenue after acquiring a business?</h3>
        <p>
          Pricing optimization is the fastest and highest-impact revenue lever available post-acquisition. According to McKinsey&rsquo;s research on pricing strategy, a 5% price increase on a business with 20% net margins increases profitability by 25%, with zero additional cost. Most owner-operated SMEs have not raised prices in 2-5 years, and many actively undercharge relative to the value they deliver. The second fastest lever is cross-selling to existing customers, which Bain &amp; Company research shows costs 5-7x less than acquiring new customers. In the first 100 days, conduct a wallet share analysis of your top 20 accounts to identify expansion opportunities, and implement a structured quarterly business review process that proactively surfaces new needs and builds relationships beyond the initial sale.
        </p>

        <h3 className={h3Class}>How much should an SME spend on marketing after acquisition?</h3>
        <p>
          Most acquired SMEs spend less than 2% of revenue on marketing. Increasing this to 3-5%, even for a $5 million business, that is only $150,000-$250,000 per year, can generate outsized returns when deployed effectively. According to Harvard Business Review, email marketing delivers the highest ROI of any marketing channel at $36-$42 returned per dollar spent, making it the first investment to prioritize. Google Ads is typically the fastest path to inbound leads for B2B and local service businesses, with a starting budget of $2,000-$5,000 per month targeting high-intent industry-specific keywords. SEO is a longer-term investment (6-12 months to see meaningful traffic) but generates compounding organic returns. The key is tracking customer acquisition cost (CAC) and lifetime value (LTV) from the outset, targeting an LTV/CAC ratio of 3x or higher.
        </p>

        <h3 className={h3Class}>When should I hire the first dedicated salesperson?</h3>
        <p>
          Do not hire a salesperson until you have personally sold the product or service for at least 3 months and can articulate the sales process, value proposition, and ideal customer profile. According to Stanford GSB research on search fund CEO strategies, new owners who sell personally before hiring gain critical customer insight, develop empathy for the sales cycle, and can effectively train and manage their first rep. When you are ready to hire, look for industry-experienced reps with existing relationships in your market, they can start contributing faster than generalist salespeople. A 60/40 or 70/30 base-to-variable compensation split works well for SME sales roles, and you should expect the first sale by month 3 and quota attainment by month 6. Start with one rep, prove the model works, and then scale, hiring three reps simultaneously before having a repeatable process is a common and expensive mistake.
        </p>

        <h2 className={h2Class}>Sources</h2>
        <ul className={ulClass}>
          <li>McKinsey &amp; Company, <em>Pricing New Products and Services: The Power of Value-Based Pricing</em> (2024)</li>
          <li>Bain &amp; Company, <em>Customer Retention and Revenue Growth in SMEs</em> (2024)</li>
          <li>Stanford GSB, <em>Revenue Growth Strategies for Search Fund CEOs</em> (2024)</li>
        </ul>
      </div>

        <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">Related Reading</h2>
        <ul className="list-disc pl-6 space-y-2 mb-8">
          <li><Link href="/learn/first-100-days" className="text-apple-accent hover:underline">Search Fund CEO: The First 100 Days</Link></li>
          <li><Link href="/learn/sales-team-development" className="text-apple-accent hover:underline">Sales Team Development Post-Acquisition</Link></li>
          <li><Link href="/learn/marketing-strategy-post-acquisition" className="text-apple-accent hover:underline">Marketing Strategy for Acquired Companies</Link></li>
          <li><Link href="/learn/cross-selling-upselling" className="text-apple-accent hover:underline">Cross-Selling &amp; Upselling in Acquired Companies</Link></li>
          <li><Link href="/learn/kpi-dashboard-post-acquisition" className="text-apple-accent hover:underline">KPI Dashboard for Post-Acquisition Management</Link></li>
          <li><Link href="/learn/pricing-optimization" className="text-apple-accent hover:underline">Pricing Optimization: The Fastest Path to Profit Growth</Link></li>
        </ul>
    </article>
  );
}
