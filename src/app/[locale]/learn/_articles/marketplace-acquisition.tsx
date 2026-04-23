import { h1Class, h2Class, h3Class, bodyClass, ulClass, olClass } from "./shared-styles";
import Link from "next/link";

export default function MarketplaceAcquisitionArticle() {
  return (
    <article>
      <h1 className={h1Class}>Acquiring an Online Marketplace Business</h1>
      <div className={bodyClass}>
        <p>Online marketplaces &mdash; platforms that connect buyers and sellers and take a commission on transactions &mdash; are among the most defensible and scalable business models available. From vertical B2B marketplaces to niche consumer platforms, marketplace businesses benefit from network effects, recurring transaction revenue, and high switching costs. For search fund entrepreneurs, acquiring an established marketplace with critical mass eliminates the &ldquo;cold start problem&rdquo; that kills most marketplace startups.</p>
      </div>

      <h2 className={h2Class}>Types of Marketplace Businesses</h2>
      <div className={bodyClass}>
        <ul className={ulClass}>
          <li><strong>B2B marketplaces:</strong> Platforms connecting businesses for wholesale, procurement, or professional services. Examples: parts sourcing, commercial real estate, industrial equipment.</li>
          <li><strong>B2C marketplaces:</strong> Consumer-facing platforms for goods or services. Home services, local experiences, specialty retail.</li>
          <li><strong>C2C marketplaces:</strong> Peer-to-peer platforms for buying and selling. Resale, collectibles, local classifieds.</li>
          <li><strong>Managed marketplaces:</strong> Platform handles fulfillment, quality control, or service delivery. Higher take rates but more operational complexity.</li>
          <li><strong>SaaS-enabled marketplaces:</strong> Software tools for suppliers that also aggregate demand. Vertical SaaS with marketplace revenue.</li>
        </ul>
      </div>

      <h2 className={h2Class}>Why Marketplaces Are Attractive</h2>
      <div className={bodyClass}>
        <ul className={ulClass}>
          <li><strong>Network effects:</strong> More buyers attract more sellers, and vice versa. Creates a compounding competitive moat.</li>
          <li><strong>Asset-light model:</strong> Marketplaces don&apos;t hold inventory or employ service providers. Capital-efficient operations.</li>
          <li><strong>High margins:</strong> 60&ndash;80%+ gross margins typical once platform is built. Incremental transactions cost nearly nothing.</li>
          <li><strong>Recurring revenue:</strong> Transaction-based revenue recurs naturally as buyers and sellers continue trading on the platform.</li>
          <li><strong>Switching costs:</strong> Suppliers build ratings, reviews, and customer relationships on the platform. Moving is costly.</li>
          <li><strong>Data advantage:</strong> Transaction data enables pricing intelligence, market insights, and financial services opportunities.</li>
        </ul>
      </div>

      <h2 className={h2Class}>Due Diligence Priorities</h2>
      <div className={bodyClass}>
        <ul className={ulClass}>
          <li><strong>Liquidity:</strong> Are both sides of the marketplace active? Measure match rate, time-to-transaction, and repeat usage.</li>
          <li><strong>Concentration:</strong> What percentage of GMV comes from the top 10 buyers and sellers? High concentration = high risk.</li>
          <li><strong>Take rate:</strong> Commission percentage and trend. Are fees competitive? Is there room to increase without losing suppliers?</li>
          <li><strong>Disintermediation risk:</strong> Do buyers and sellers have incentive to transact off-platform after initial connection?</li>
          <li><strong>Technology:</strong> Platform age, tech stack, scalability, mobile experience, and technical debt assessment.</li>
          <li><strong>Regulatory:</strong> Payment processing compliance, labor classification (for service marketplaces), and data privacy.</li>
        </ul>
      </div>

      <h2 className={h2Class}>Post-Acquisition Growth</h2>
      <div className={bodyClass}>
        <ul className={ulClass}>
          <li><strong>Expand categories:</strong> Add adjacent product or service categories to increase GMV per user.</li>
          <li><strong>Financial services:</strong> Offer payments, lending, insurance, or escrow services to marketplace participants.</li>
          <li><strong>Geographic expansion:</strong> Replicate the marketplace model in new cities, regions, or countries.</li>
          <li><strong>SaaS tools:</strong> Build supplier management tools (CRM, inventory, analytics) that increase stickiness and create subscription revenue.</li>
          <li><strong>Advertising:</strong> Offer promoted listings and advertising to sellers seeking visibility on the platform.</li>
          <li><strong>Data monetization:</strong> Market intelligence, pricing benchmarks, and industry reports derived from transaction data.</li>
        </ul>
      </div>

      <h2 className={h2Class}>Key Takeaways</h2>
      <div className={bodyClass}>
        <ul className={ulClass}>
          <li>Acquiring an established marketplace eliminates the cold start problem that kills 90%+ of marketplace startups</li>
          <li>Network effects and switching costs create powerful moats &mdash; the key is verifying liquidity on both sides</li>
          <li>Disintermediation risk is the primary threat &mdash; assess how well the platform prevents off-platform transactions</li>
          <li>B2B vertical marketplaces often have lower competition and higher defensibility than consumer marketplaces</li>
          <li>Typical valuations: 3&ndash;8x revenue for established marketplaces with strong network effects and growing GMV</li>
        </ul>
      </div>

      <h2 className={h2Class}>Related Resources</h2>
      <ul className={ulClass}>
        <li><Link href="/learn/saas-acquisition" className="text-apple-accent hover:underline">Acquiring a SaaS Business</Link></li>
        <li><Link href="/learn/ecommerce-acquisition" className="text-apple-accent hover:underline">E-Commerce Acquisition Guide</Link></li>
        <li><Link href="/learn/digital-transformation" className="text-apple-accent hover:underline">Digital Transformation</Link></li>
        <li><Link href="/learn/asset-light-vs-asset-heavy" className="text-apple-accent hover:underline">Asset-Light vs. Asset-Heavy Businesses</Link></li>
      </ul>

      <h2 className={h2Class}>Sources</h2>
      <ul className={ulClass}>
        <li>a16z, <em>Marketplace 100: The Most Valuable Marketplace Startups</em> (2024)</li>
        <li>NFX, <em>The Network Effects Manual</em> (2024)</li>
        <li>McKinsey, <em>The Rise of B2B Marketplaces</em> (2024)</li>
      </ul>
    </article>
  );
}
