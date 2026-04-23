import { h1Class, h2Class, h3Class, bodyClass, ulClass, olClass } from "./shared-styles";
import Link from "next/link";

export default function LifeAfterSellingArticle() {
  return (
    <article>
      <h1 className={h1Class}>Life After Selling Your Business</h1>
      <div className={bodyClass}>
        <p>You sold your business. The wire transfer cleared. Now what? For many entrepreneurs, the post-sale period is surprisingly challenging. After years of 60-hour weeks, constant problem-solving, and deep personal identity tied to the business, suddenly having unlimited time and money but no clear purpose can feel disorienting. This guide helps former business owners navigate the transition from operator to whatever comes next.</p>
      </div>

      <h2 className={h2Class}>The First 90 Days</h2>
      <div className={bodyClass}>
        <ul className={ulClass}>
          <li><strong>Rest and decompress:</strong> Give yourself permission to do nothing for 30&ndash;90 days. You&apos;ve been running at maximum intensity. Your body and mind need recovery.</li>
          <li><strong>Resist the urge:</strong> Don&apos;t start a new business, make major investments, or commit to anything significant in the first 90 days. Bad decisions often come from restlessness.</li>
          <li><strong>Financial planning:</strong> Work with a wealth advisor to invest proceeds, plan for taxes (particularly capital gains), and create a sustainable withdrawal strategy.</li>
          <li><strong>Transition support:</strong> If you have a transition services agreement with the buyer, honor it fully. A clean transition protects your reputation.</li>
          <li><strong>Process the emotions:</strong> It&apos;s normal to feel lost, relieved, sad, or anxious &mdash; sometimes all in the same day. Talk to other sellers, a coach, or a therapist.</li>
        </ul>
      </div>

      <h2 className={h2Class}>Rebuilding Identity</h2>
      <div className={bodyClass}>
        <ul className={ulClass}>
          <li><strong>Identity shift:</strong> You were &ldquo;the owner of [company].&rdquo; Now you&apos;re not. This identity loss is the #1 challenge former business owners face.</li>
          <li><strong>New introductions:</strong> You&apos;ll need a new answer to &ldquo;What do you do?&rdquo; This seems trivial but is surprisingly important for self-concept.</li>
          <li><strong>Purpose exploration:</strong> Try multiple activities: mentoring, board service, teaching, investing, philanthropy, creative pursuits. Don&apos;t commit too quickly.</li>
          <li><strong>Relationships:</strong> Many business relationships were transactional. Invest in friendships, family, and community that exist independent of your business role.</li>
          <li><strong>Structure:</strong> Create some daily structure. Without the forced rhythm of running a business, days can feel aimless.</li>
        </ul>
      </div>

      <h2 className={h2Class}>Common Post-Sale Paths</h2>
      <div className={bodyClass}>
        <ul className={ulClass}>
          <li><strong>Angel investing:</strong> Deploy capital and expertise into startups. Provides deal flow, mentorship opportunities, and community without full-time commitment.</li>
          <li><strong>Board service:</strong> Join 2&ndash;4 boards as a director or advisor. Share your operational expertise while maintaining flexibility.</li>
          <li><strong>Mentoring &amp; teaching:</strong> Teach at a business school, mentor young entrepreneurs, or join organizations like SCORE or ETA communities.</li>
          <li><strong>Philanthropy:</strong> Start a foundation, fund scholarships, or get involved with nonprofits that align with your values.</li>
          <li><strong>Serial entrepreneurship:</strong> After adequate rest (6&ndash;12 months), start or acquire another business. Many entrepreneurs can&apos;t stay away from building.</li>
          <li><strong>Search fund investing:</strong> Invest in search funds. Provide capital, mentorship, and board service to the next generation of ETA entrepreneurs.</li>
          <li><strong>Lifestyle design:</strong> Travel, hobbies, family time, and personal growth. Design the life you couldn&apos;t live while running a business.</li>
        </ul>
      </div>

      <h2 className={h2Class}>Financial Considerations</h2>
      <div className={bodyClass}>
        <ul className={ulClass}>
          <li><strong>Tax planning:</strong> Work with a tax advisor before closing to minimize capital gains impact. Installment sales, QSB exclusion, and Opportunity Zones.</li>
          <li><strong>Wealth preservation:</strong> Diversify proceeds across asset classes. Avoid concentrating in a single investment or real estate market.</li>
          <li><strong>Lifestyle inflation:</strong> Resist the urge to dramatically increase spending immediately. Understand your sustainable withdrawal rate.</li>
          <li><strong>Estate planning:</strong> Update wills, trusts, and beneficiaries. Consider generation-skipping and charitable trusts.</li>
        </ul>
      </div>

      <h2 className={h2Class}>Key Takeaways</h2>
      <div className={bodyClass}>
        <ul className={ulClass}>
          <li>Take 30&ndash;90 days to rest before making any major decisions &mdash; post-sale restlessness leads to bad investments and premature commitments</li>
          <li>Identity loss is the #1 post-sale challenge &mdash; plan for it by building identity and relationships beyond your business before selling</li>
          <li>Common post-sale paths include angel investing, board service, mentoring, philanthropy, and serial entrepreneurship</li>
          <li>Work with a wealth advisor on tax planning, diversification, and sustainable withdrawal strategies before closing</li>
          <li>The adjustment period takes 6&ndash;24 months &mdash; be patient with yourself and stay connected to support systems</li>
        </ul>
      </div>

      <h2 className={h2Class}>Related Resources</h2>
      <ul className={ulClass}>
        <li><Link href="/learn/emotional-journey-selling" className="text-apple-accent hover:underline">The Emotional Journey of Selling</Link></li>
        <li><Link href="/learn/exit-strategies" className="text-apple-accent hover:underline">Exit Strategies</Link></li>
        <li><Link href="/learn/seller-transition-planning" className="text-apple-accent hover:underline">Seller Transition Planning</Link></li>
        <li><Link href="/learn/why-invest-in-search-funds" className="text-apple-accent hover:underline">Why Invest in Search Funds</Link></li>
      </ul>

      <h2 className={h2Class}>Sources</h2>
      <ul className={ulClass}>
        <li>Bo Burlingham, <em>Finish Big: How Great Entrepreneurs Exit Their Companies on Top</em> (2013)</li>
        <li>Exit Planning Institute, <em>Life After the Exit Survey</em> (2024)</li>
        <li>Vistage, <em>Post-Sale Entrepreneur Transitions Study</em> (2024)</li>
      </ul>
    </article>
  );
}
