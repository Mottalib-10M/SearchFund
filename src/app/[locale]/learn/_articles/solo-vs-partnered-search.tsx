import Link from "next/link";
import { h1Class, h2Class, h3Class, bodyClass, ulClass, olClass } from "./shared-styles";

export default function SoloVsPartneredSearchArticle() {
  return (
    <article className="max-w-4xl mx-auto px-6 py-12">
      <h1 className={h1Class}>Solo vs. Partnered Search: Pros, Cons & Data</h1>
      <p className="text-gray-600 mt-4 text-lg">10 min read</p>

      <p className={bodyClass}>
        One of the earliest and most consequential decisions aspiring searchers face is whether to embark on their entrepreneurial journey alone or with a partner. This choice fundamentally shapes the economics, workload, decision-making, and ultimate success probability of your search fund. While approximately 75% of search funds historically have been solo endeavors, the partnered model has gained significant traction in recent years, particularly among younger searchers and those with complementary skill sets.
      </p>

      <p className={bodyClass}>
        Neither approach is inherently superior. The right choice depends on your personality, financial situation, skill gaps, risk tolerance, and personal circumstances. This guide examines both models through multiple lenses - operational, financial, psychological, and statistical - to help you make an informed decision that aligns with your strengths and goals.
      </p>

      <h2 className={h2Class}>Solo Search: Full Control, Full Burden</h2>

      <p className={bodyClass}>
        Solo search represents the traditional search fund model: one individual raises capital, conducts the search, acquires a business, and operates it as CEO. This approach offers maximum autonomy and equity retention but demands extraordinary commitment and resilience. Before deciding, consider using the{" "}
        <Link href="/learn/eta-self-assessment" className="text-apple-accent hover:underline">
          ETA self-assessment framework
        </Link>{" "}
        to evaluate whether your skills, temperament, and finances align with either model.
      </p>

      <h3 className={h3Class}>Advantages of Searching Alone</h3>

      <p className={bodyClass}>
        <strong>Maximum equity ownership.</strong> Solo searchers typically retain 25-30% of post-acquisition equity, compared to 12.5-15% per partner in a paired search. Over a successful five-to-seven-year hold period, this difference can amount to millions of dollars in personal wealth creation. For a business that exits at $50 million, the difference between 27% and 13.5% ownership represents $6.75 million in personal proceeds.
      </p>

      <p className={bodyClass}>
        <strong>Complete decision-making authority.</strong> Solo searchers make all critical decisions without consensus-building: which industries to target, what geographies to prioritize, which deals to pursue, and how aggressively to negotiate. This eliminates the friction inherent in partnership dynamics and allows for rapid pivots when circumstances change. You answer only to your board of directors, not a co-founder with potentially divergent views.
      </p>

      <p className={bodyClass}>
        <strong>Simplified fundraising and governance.</strong> Investors evaluate one person's track record, competencies, and leadership potential. You don't need to convince them that the partnership dynamic will work or that skill sets are truly complementary. Board meetings and investor updates involve one voice and one vision, reducing coordination complexity.
      </p>

      <p className={bodyClass}>
        <strong>Geographic and personal flexibility.</strong> Solo searchers can relocate opportunistically based on where attractive targets emerge. If a compelling opportunity appears in Charlotte or Louisville, you can move without uprooting a partner's family or managing compromise on location. Personal life decisions - marriage, children, family commitments - affect only your own calculus.
      </p>

      <p className={bodyClass}>
        <strong>All proceeds accrue to one household.</strong> The financial upside from a successful acquisition - both annual compensation and exit proceeds - flows to a single family. For searchers supporting dependents or building generational wealth, this concentration can be transformative.
      </p>

      <h3 className={h3Class}>Challenges of Solo Search</h3>

      <p className={bodyClass}>
        <strong>Isolation and psychological burden.</strong> Search is a grueling marathon punctuated by constant rejection. Sellers don't return calls. Deals collapse in diligence. Investors decline to commit. Experiencing these setbacks alone, without a partner to share the emotional load, leads many solo searchers to describe the journey as isolating and mentally exhausting. The lack of a trusted peer for real-time decision-making can intensify stress during critical junctures.
      </p>

      <p className={bodyClass}>
        <strong>Skill set limitations.</strong> Few individuals excel equally at origination, financial modeling, operational strategy, people management, sales, and technology. Solo searchers must either develop proficiency across all domains or compensate with advisors and consultants - which introduces cost and coordination overhead. A solo searcher weak in finance may struggle in negotiations; one uncomfortable with cold outreach may find deal sourcing painfully slow.
      </p>

      <p className={bodyClass}>
        <strong>Operational concentration risk.</strong> Post-acquisition, the entire business depends on one person's judgment, energy, and health. If the solo CEO falls ill, experiences personal crisis, or makes a strategic misstep without a peer to challenge assumptions, the company lacks redundancy. Investors know this and may view solo operators as higher risk, particularly in complex or multi-site businesses.
      </p>

      <p className={bodyClass}>
        <strong>Limited capacity and bandwidth.</strong> Search demands simultaneous excellence in sourcing, evaluation, negotiation, and investor management. Post-acquisition, CEOs face customer relationships, talent management, financial oversight, and strategic initiatives. Doing all of this alone means either working unsustainable hours or accepting that certain functions receive inadequate attention.
      </p>

      <p className={bodyClass}>
        <strong>No peer accountability.</strong> Partners hold each other accountable to high standards and call out weak thinking or complacency. Solo searchers must cultivate this discipline internally or through advisors - a less reliable forcing function. It's easier to rationalize shortcuts, delay difficult decisions, or avoid uncomfortable conversations when no peer is watching.
      </p>

      <h2 className={h2Class}>Partnered Search: Shared Risk, Shared Reward</h2>

      <p className={bodyClass}>
        Partnered search involves two (occasionally three) co-founders who jointly raise capital, split responsibilities during search, and serve as co-CEOs or in complementary executive roles post-acquisition. While less common historically, paired searches have increased as business complexity grows and younger searchers seek shared journeys.
      </p>

      <h3 className={h3Class}>Advantages of Partnering</h3>

      <p className={bodyClass}>
        <strong>Complementary skill sets.</strong> The ideal partnership pairs individuals whose strengths offset each other's weaknesses: finance and operations, sales and technology, strategy and execution. One partner might excel at sourcing and relationship-building while the other brings deep analytical rigor. This division of labor allows simultaneous progress on parallel tracks - one partner running diligence while the other manages investor updates, for example.
      </p>

      <p className={bodyClass}>
        <strong>Emotional resilience and motivation.</strong> Having a partner transforms the psychological experience of search. Rejections sting less when shared. Victories feel more meaningful when celebrated together. Partners provide mutual encouragement during dark periods and reality checks during moments of irrational exuberance. Many partnered searchers report that their co-founder's presence made the difference between persisting and quitting.
      </p>

      <p className={bodyClass}>
        <strong>Enhanced credibility with sellers and investors.</strong> Sellers of $10-30 million businesses often find comfort in two capable leaders rather than one, particularly for companies with complex operations or multiple locations. Partners can divide post-acquisition responsibilities - one focused on sales and growth, the other on operations and finance - in ways that appeal to sellers concerned about transition continuity. Investors may perceive lower risk when leadership redundancy exists.
      </p>

      <p className={bodyClass}>
        <strong>Increased search capacity.</strong> Two searchers can cover twice as much ground: attending more conferences, making more cold calls, pursuing parallel deal processes, and conducting simultaneous site visits. This expanded bandwidth can accelerate time-to-acquisition, which matters given that search capital typically lasts 18-24 months. Parallel processing also enables pursuing backup opportunities while a primary deal progresses.
      </p>

      <p className={bodyClass}>
        <strong>Better decision-making through debate.</strong> Partners stress-test each other's assumptions, challenge biases, and identify blind spots. This dialectic process - "I see opportunity here" met with "but have you considered these risks" - often leads to better outcomes than solo deliberation. Partnerships create built-in red teams that question optimistic projections and catch due diligence gaps.
      </p>

      <p className={bodyClass}>
        <strong>Post-acquisition role clarity.</strong> Rather than one person wearing all hats, partners can specialize: CEO and COO, CEO and CFO, or President-External and President-Internal. This division allows deeper focus and prevents burnout. It also provides coverage during vacations, family emergencies, or periods when one partner needs to focus intensively on a specific initiative.
      </p>

      <h3 className={h3Class}>Challenges of Partnered Search</h3>

      <p className={bodyClass}>
        <strong>Reduced individual equity.</strong> Splitting ownership means each partner receives 12.5-15% rather than 25-30%, effectively halving personal upside. For a successful exit, this difference is substantial. Partners must believe the improved probability of success and enhanced business performance outweigh the diluted stake.
      </p>

      <p className={bodyClass}>
        <strong>Partnership friction and conflict.</strong> Even the strongest partnerships face disagreements about strategy, deal selection, negotiation tactics, post-acquisition priorities, and resource allocation. Without clear governance mechanisms and communication protocols, these conflicts can paralyze decision-making or, in worst cases, destroy the partnership entirely. Searcher divorces - while rare - do happen and create painful investor situations.
      </p>

      <p className={bodyClass}>
        <strong>Misaligned work ethics and contributions.</strong> If one partner consistently works harder, sources more deals, or contributes more value, resentment builds. Unlike corporate environments with annual reviews and promotion paths, search partnerships lock in 50-50 economic splits regardless of relative effort. Partners must address contribution imbalances directly and early, which many find uncomfortable.
      </p>

      <p className={bodyClass}>
        <strong>More complex fundraising.</strong> Investors scrutinize partnership dynamics carefully: How did you meet? How do you handle disagreement? What happens if one of you wants out? Are your skill sets actually complementary or redundant? Have you worked together before or is this a new relationship? Investors may pass if they perceive partnership risk, whereas a strong solo candidate would receive backing.
      </p>

      <p className={bodyClass}>
        <strong>Geographic constraints.</strong> Partners must agree on where to search and where to live post-acquisition. If the best opportunity emerges in Nashville but one partner's spouse has a career in Boston, that deal becomes untenable. These geographic limitations shrink your addressable market and may cause you to pass on optimal targets.
      </p>

      <p className={bodyClass}>
        <strong>Life stage misalignment.</strong> Partners at different life stages - one single and mobile, one with three children in school - face different risk tolerances and constraints. As circumstances evolve during a five-to-seven-year hold, partners may develop divergent preferences about exit timing, growth aggressiveness, or personal time allocation.
      </p>

      <h2 className={h2Class}>The Data: Success Rates and Timing</h2>

      <p className={bodyClass}>
        Stanford's biennial search fund survey provides the most thorough data on solo versus partnered search outcomes. While sample sizes are modest and confounding factors exist, several patterns have emerged consistently across study iterations.
      </p>

      <h3 className={h3Class}>Acquisition Success Rates</h3>

      <p className={bodyClass}>
        Approximately 75% of search funds successfully acquire a company within their search window. This figure holds relatively constant whether examining traditional searches funded by investors or self-funded searches. However, the data show detailed differences when comparing solo versus partnered models.
      </p>

      <p className={bodyClass}>
        Solo searchers acquire companies at rates statistically indistinguishable from partnered teams - both hovering around 74-76% success. This suggests that partnership structure itself doesn't dramatically alter acquisition probability. The primary drivers of acquisition success appear to be capital adequacy, geographic flexibility, industry focus discipline, and searcher persistence rather than team composition.
      </p>

      <p className={bodyClass}>
        What does differ is the timing. Partnered searches close acquisitions approximately 3-4 months faster on average than solo searches: 21-22 months versus 24-26 months from fundraise to close. This acceleration likely reflects the increased capacity to pursue parallel opportunities and the ability to divide diligence workload. For searchers managing finite capital, these months matter significantly.
      </p>

      <h3 className={h3Class}>Post-Acquisition Returns</h3>

      <p className={bodyClass}>
        Post-acquisition performance data present a more complex picture. On an aggregate basis, solo and partnered searches generate similar enterprise-level returns to investors: approximately 3.3-3.8x cash-on-cash over five-to-seven-year holds and IRRs in the mid-to-high 30% range.
      </p>

      <p className={bodyClass}>
        However, because solo searchers retain roughly twice the equity percentage, their absolute dollar returns per person exceed those of partnered searchers - even when the underlying business performs identically. A $40 million exit with 27% solo ownership yields $10.8 million in proceeds; the same exit with 13.5% partnered ownership yields $5.4 million per partner.
      </p>

      <p className={bodyClass}>
        The critical question, then, is whether partnerships drive superior business performance that offsets the dilution. The data here are mixed. Some studies suggest partnered searches show modestly higher revenue growth rates (14-16% CAGR versus 11-13% for solo), potentially reflecting greater operational capacity and complementary skill deployment. But these differences fall within statistical noise and may reflect selection bias: partners might target larger, faster-growing companies rather than inherently driving better growth.
      </p>

      <h3 className={h3Class}>Failure and Mediocrity</h3>

      <p className={bodyClass}>
        Roughly 10-15% of acquired search fund companies fail or return less than invested capital. An additional 25-30% generate modest positive returns but underperform expectations (1.0-2.0x). These outcomes appear to distribute similarly across solo and partnered structures.
      </p>

      <p className={bodyClass}>
        Where partnerships potentially offer advantage is in recovery from early missteps. Anecdotal evidence suggests that partnered teams manage crises more effectively: one partner focuses on firefighting while the other maintains strategic initiatives, preventing complete organizational drift. In truly catastrophic situations - CEO health crisis, family emergency - partners provide continuity that solo operators cannot. However, these scenarios are sufficiently rare that they don't meaningfully shift aggregate statistics.
      </p>

      <h2 className={h2Class}>Economics and Equity Split</h2>

      <p className={bodyClass}>
        Understanding the economic implications of solo versus partnered structures requires examining not just equity percentages but total compensation, opportunity cost, and risk-adjusted returns.
      </p>

      <h3 className={h3Class}>Standard Equity Allocations</h3>

      <p className={bodyClass}>
        Traditional search fund economics follow these patterns:
      </p>

      <ul className={ulClass}>
        <li><strong>Solo searcher:</strong> 25-30% of post-acquisition equity, with 25-27% being most common. Vesting typically occurs over four years with one-year cliff. Some deals include additional earnout potential bringing total to 30-33%.</li>
        <li><strong>Partnered searchers:</strong> 25-30% combined (12.5-15% each). The partnership collectively receives the same equity pool as a solo searcher, simply divided between two people.</li>
        <li><strong>Investors:</strong> 60-70% collectively, with specific allocations depending on search capital raised, acquisition equity contributed, and deal-specific debt structures.</li>
        <li><strong>Management team and options pool:</strong> 5-10% reserved for key hires and employee incentives.</li>
      </ul>

      <p className={bodyClass}>
        These percentages represent post-acquisition, fully diluted ownership. During search, investors typically own preferred units that convert to common equity upon acquisition close. For a thorough breakdown of the financial model, see our guide to{" "}
        <Link href="/learn/searcher-compensation" className="text-apple-accent hover:underline">
          searcher compensation and equity structures
        </Link>.
      </p>

      <h3 className={h3Class}>Annual Compensation</h3>

      <p className={bodyClass}>
        During search, both solo and partnered searchers typically receive $80,000-$120,000 annually from search fund capital, with geographic and experience-based variance. Partnered teams receive this amount per person -$160,000-$240,000 combined - consuming search capital twice as fast.
      </p>

      <p className={bodyClass}>
        Post-acquisition CEO compensation runs $150,000-$250,000 base salary plus annual bonuses tied to performance milestones (typically 25-50% of base). Partnered searchers each receive CEO-equivalent compensation, meaning total leadership comp runs $300,000-$500,000 combined - a meaningful expense for a $15-25 million revenue business.
      </p>

      <p className={bodyClass}>
        This compensation differential affects business cash flow and debt service capacity. A solo operator drawing $200,000 all-in leaves more capital for growth investment or debt reduction than partners collectively drawing $400,000. Investors model this when evaluating acquisition debt levels.
      </p>

      <h3 className={h3Class}>Illustrative Exit Economics</h3>

      <p className={bodyClass}>
        Consider a typical successful search: acquisition at $15 million enterprise value, five-year hold, exit at $40 million - a 2.7x multiple representing healthy but not exceptional performance.
      </p>

      <p className={bodyClass}>
        <strong>Solo searcher with 27% ownership:</strong>
      </p>
      <ul className={ulClass}>
        <li>Exit proceeds: $10.8 million (pre-tax)</li>
        <li>Five-year CEO comp: ~$1.0 million cumulative (post-tax)</li>
        <li>Total wealth creation: ~$11.8 million over five years</li>
        <li>Annual effective comp: ~$2.4 million per year</li>
      </ul>

      <p className={bodyClass}>
        <strong>Partnered searchers with 13.5% each:</strong>
      </p>
      <ul className={ulClass}>
        <li>Exit proceeds per partner: $5.4 million (pre-tax)</li>
        <li>Five-year CEO comp per partner: ~$1.0 million cumulative (post-tax)</li>
        <li>Total wealth creation per partner: ~$6.4 million over five years</li>
        <li>Annual effective comp per partner: ~$1.3 million per year</li>
      </ul>

      <p className={bodyClass}>
        The solo searcher gains approximately $5 million more in absolute terms. However, if the partnership enables faster acquisition (saving four months of search capital) or drives 3-4% higher annual revenue growth through complementary skills, the exit multiple might reach 3.0x ($45 million) instead of 2.7x. At that level, partnered proceeds of $6.1 million each narrow the gap, though solo still outearns in absolute terms.
      </p>

      <p className={bodyClass}>
        Risk-adjusted calculus matters too. If partnership reduces individual stress, prevents burnout, or meaningfully lowers execution risk, partners may rationally accept lower absolute returns in exchange for higher probability of success and better quality of life during the journey. Understanding your{" "}
        <Link href="/learn/financial-runway-planning" className="text-apple-accent hover:underline">
          financial runway requirements
        </Link>{" "}
        is critical for modeling these trade-offs accurately.
      </p>

      <h2 className={h2Class}>Complementary Skill Sets</h2>

      <p className={bodyClass}>
        The case for partnership strengthens dramatically when co-founders bring genuinely complementary capabilities. The most successful pairings exhibit clear skill differentiation that creates operational use.
      </p>

      <h3 className={h3Class}>High-Value Skill Combinations</h3>

      <p className={bodyClass}>
        <strong>Finance and Operations.</strong> One partner with investment banking, private equity, or corporate development experience pairs with another who has P&L management, supply chain, or operational consulting background. The finance partner leads deal sourcing, valuation, and investor relations; the operations partner drives post-acquisition value creation, process improvement, and team building.
      </p>

      <p className={bodyClass}>
        <strong>Sales and Product/Technology.</strong> Particularly relevant for software-enabled services or technology-adjacent businesses, this pairing combines a commercially-oriented partner who understands customer acquisition and market expansion with a technical partner who can evaluate systems, drive digital transformation, and oversee product development.
      </p>

      <p className={bodyClass}>
        <strong>Strategy and Execution.</strong> One partner excels at market analysis, competitive positioning, and long-term planning while the other focuses on day-to-day operations, team management, and tactical execution. This mirrors the classic CEO-COO structure at larger companies.
      </p>

      <p className={bodyClass}>
        <strong>Industry Expert and General Manager.</strong> For searches targeting specific verticals (healthcare, industrials, education), pairing someone with deep sector knowledge with a strong general manager creates powerful combination. The specialist provides industry credibility and technical insight; the generalist brings financial acumen and operational discipline.
      </p>

      <h3 className={h3Class}>Red Flag Combinations</h3>

      <p className={bodyClass}>
        Not all partnerships create value. Avoid these patterns:
      </p>

      <p className={bodyClass}>
        <strong>Redundant skill sets.</strong> Two finance professionals or two consultants often lack meaningful differentiation. If both partners bring the same analytical toolkit and neither has operating experience, you've simply split equity without gaining complementary capabilities. Investors will question why this needs to be a partnership.
      </p>

      <p className={bodyClass}>
        <strong>Gap coverage partnerships.</strong> Forming a partnership primarily because one person lacks confidence or fears loneliness - rather than because the combination creates multiplicative value - builds on weak foundation. Better to develop capabilities through advisors or accept solo path than partner for psychic comfort.
      </p>

      <p className={bodyClass}>
        <strong>Unequal caliber.</strong> If one partner is objectively stronger - better credentials, more relevant experience, higher investor appeal - the equity split creates built-in resentment. The stronger partner feels they've given away value; the weaker feels pressured to prove worth. Both dynamics undermine trust.
      </p>

      <p className={bodyClass}>
        <strong>Friends without professional overlap.</strong> Friendships based on personal compatibility don't necessarily translate to effective working relationships. Many searcher pairs met in business school, became friends socially, and assumed that rapport would carry into professional partnership. When work styles, risk tolerances, or ambition levels misalign, these friendships fracture under pressure.
      </p>

      <h2 className={h2Class}>Common Partnership Pitfalls</h2>

      <p className={bodyClass}>
        Even well-structured partnerships with complementary skills face predictable challenges. Understanding these pitfalls and establishing preventative mechanisms dramatically improves partnership longevity.
      </p>

      <h3 className={h3Class}>Decision-Making Deadlock</h3>

      <p className={bodyClass}>
        Two-person partnerships lack tiebreakers. When partners fundamentally disagree - whether to acquire a particular business, how aggressively to bid, which growth initiatives to fund - someone must yield or compromise must be reached. Without pre-agreed escalation protocols, these standoffs consume time and energy while opportunities slip away.
      </p>

      <p className={bodyClass}>
        Successful partnerships establish decision rights frameworks early: certain domains belong to Partner A (e.g., finance, capital allocation), others to Partner B (operations, team building). For truly joint decisions, they commit to time-bound discussion processes: if consensus isn't reached within 48-72 hours, a predetermined tiebreaker (often an investor board member or advisor) weighs in.
      </p>

      <h3 className={h3Class}>Contribution Imbalance</h3>

      <p className={bodyClass}>
        In most partnerships, contribution levels ebb and flow. During search, one partner may source more deals; the other may carry more diligence load. Post-acquisition, responsibilities split differently. These natural fluctuations become toxic when patterns persist: one partner consistently working evenings and weekends while the other maintains 9-to-5 boundaries, or one partner driving all meaningful initiatives while the other coasts.
      </p>

      <p className={bodyClass}>
        Address this through regular check-ins - quarterly "partnership retrospectives" where both parties candidly assess workload distribution, contribution quality, and satisfaction levels. These conversations feel awkward initially but prevent resentment from calcifying into partnership-ending bitterness.
      </p>

      <h3 className={h3Class}>Role Ambiguity Post-Acquisition</h3>

      <p className={bodyClass}>
        During search, role splits are straightforward: both partners source deals and share diligence. But once you own a business, org charts demand clarity. Who is CEO? Who runs board meetings? Who makes final calls on key hires or major capital expenditures?
      </p>

      <p className={bodyClass}>
        Some partnerships attempt "co-CEO" structures where both partners share ultimate authority. This works only when decision rights are extremely clear and partners have high trust plus complementary judgment. More commonly, successful partnerships designate one person as CEO (often the partner with stronger people leadership skills or investor relationships) and the other as COO, President, or CFO. The non-CEO partner must genuinely embrace this structure, not simply accept it grudgingly.
      </p>

      <h3 className={h3Class}>Life Stage Divergence</h3>

      <p className={bodyClass}>
        Partners who align perfectly at search start may diverge over five-to-seven-year holds. One partner's spouse may receive a job offer requiring relocation; another may face health issues or aging parent care needs. Children arrive, changing risk tolerance and time availability. These are legitimate life events, not partnership failures, but they require proactive communication and often creative problem-solving.
      </p>

      <p className={bodyClass}>
        The partnership agreement should anticipate these scenarios: What happens if a partner needs to step back? How is equity affected? Can one partner buy out the other? Having frameworks before crises hit prevents emotional decision-making during vulnerable moments.
      </p>

      <h3 className={h3Class}>Different Exit Horizons</h3>

      <p className={bodyClass}>
        Five years into ownership, one partner may be ready to exit and monetize, while the other wants to hold another three years and maximize value. These misalignments create serious tension: the ready-to-exit partner may push for a premature sale, while the hold-longer partner blocks attractive offers.
      </p>

      <p className={bodyClass}>
        Sophisticated partnerships establish vesting schedules that allow for divergent timelines - graduated buyout options or drag-along/tag-along rights that balance individual preference with collective interests. Investor board members often mediate these discussions, bringing objective market perspective.
      </p>

      <h2 className={h2Class}>Legal Structure for Partnered Searches</h2>

      <p className={bodyClass}>
        Partnered searches require thoughtful legal architecture that protects both partners and investors while maintaining operational flexibility.
      </p>

      <h3 className={h3Class}>Search Phase Entity</h3>

      <p className={bodyClass}>
        During search, partners typically form a limited liability company (LLC) that receives investor capital. The LLC's operating agreement governs:
      </p>

      <ul className={ulClass}>
        <li><strong>Management rights:</strong> Which decisions require unanimous consent versus simple majority (among partners only, investors typically have limited voting rights during search)</li>
        <li><strong>Compensation:</strong> Annual stipends, expense reimbursement policies, and what happens if one partner leaves during search</li>
        <li><strong>Time commitments:</strong> Full-time dedication requirements and consequences for inadequate contribution</li>
        <li><strong>Termination provisions:</strong> Under what circumstances the partnership can be dissolved and how remaining capital is handled</li>
      </ul>

      <h3 className={h3Class}>Acquisition Structure</h3>

      <p className={bodyClass}>
        Upon acquisition, a new entity (typically a corporation or LLC depending on tax considerations) is formed to acquire the target business. Partners receive equity in this new entity according to pre-negotiated terms. The acquisition entity's governance documents include:
      </p>

      <ul className={ulClass}>
        <li><strong>Board composition:</strong> Typically 3-5 directors including both partners, 2-3 investor representatives, and occasionally an independent</li>
        <li><strong>Reserved matters:</strong> Decisions requiring board approval versus partner autonomy (major capital expenditures, key hires/fires, strategic pivots, debt incurrence above thresholds)</li>
        <li><strong>Equity vesting:</strong> Four-year vesting with one-year cliff is standard; good leaver / bad leaver provisions govern what happens if a partner departs</li>
        <li><strong>Drag-along and tag-along rights:</strong> Protections ensuring both partners participate equally in exit opportunities and preventing one partner from blocking attractive sales</li>
      </ul>

      <h3 className={h3Class}>Partnership Agreement</h3>

      <p className={bodyClass}>
        Separate from the corporate governance documents, partners should execute a detailed partnership agreement addressing:
      </p>

      <ul className={ulClass}>
        <li><strong>Role definition:</strong> Titles, reporting relationships, and primary responsibility areas</li>
        <li><strong>Decision rights:</strong> Specific authority levels and escalation processes for disagreements</li>
        <li><strong>Compensation philosophy:</strong> How annual comp is determined and whether it can diverge between partners based on role or performance</li>
        <li><strong>Performance expectations:</strong> Behavioral standards, work ethic expectations, and consequences for underperformance</li>
        <li><strong>Exit provisions:</strong> Right of first refusal if one partner wants to sell equity; buyout formulas if partnership dissolves</li>
        <li><strong>Dispute resolution:</strong> Mediation and arbitration procedures before escalating to litigation</li>
      </ul>

      <p className={bodyClass}>
        Many searchers, eager to preserve friendship and uncomfortable with adversarial negotiation, skip or shortchange these agreements. This is penny-wise and pound-foolish. The time to negotiate is when the relationship is strong and incentives align, not when conflict has emerged and positions have hardened. Investors increasingly require detailed partnership agreements as a condition of funding, having witnessed too many partnership implosions.
      </p>

      <h2 className={h2Class}>Decision Framework: Which Is Right for You</h2>

      <p className={bodyClass}>
        Choosing between solo and partnered search requires honest self-assessment across multiple dimensions. Consider these questions systematically:
      </p>

      <h3 className={h3Class}>Skill and Experience Assessment</h3>

      <p className={bodyClass}>
        Rate yourself objectively (or get candid feedback from mentors) across key search fund competencies: deal sourcing, financial analysis, negotiation, people leadership, strategic thinking, operational execution, sales, and technology fluency. If you're strong (top quartile) in most areas, solo search is viable. If you have meaningful gaps - particularly in domains critical to your target industries - partnership with someone who fills those gaps creates real value.
      </p>

      <h3 className={h3Class}>Psychological Needs</h3>

      <p className={bodyClass}>
        How do you respond to extended periods of rejection and ambiguity? Can you motivate yourself through long dry spells, or do you need external accountability and encouragement? Are you comfortable making high-stakes decisions alone, or do you prefer sounding board relationships? There's no right answer, but self-awareness here is critical.
      </p>

      <p className={bodyClass}>
        If you're honest with yourself about needing partnership for emotional resilience, don't frame it as weakness - search is brutal, and psychological sustainability matters. But ensure the partnership creates professional value beyond just companionship, or you're simply buying expensive therapy.
      </p>

      <h3 className={h3Class}>Financial Considerations</h3>

      <p className={bodyClass}>
        How much does the absolute dollar difference matter to your life goals? If you're financially secure or view search as a learning opportunity with financial upside, accepting 13.5% instead of 27% may feel immaterial. If you're building primary wealth or supporting dependents on a single income, the dilution may be untenable.
      </p>

      <p className={bodyClass}>
        Run scenarios: calculate after-tax proceeds at 13.5% versus 27% across a range of exit values ($20M, $40M, $60M). Does the difference meaningfully affect your life - ability to pay for children's education, retire parents, achieve financial independence? Or is it "nice to have" money beyond core security?
      </p>

      <h3 className={h3Class}>Geographic and Personal Flexibility</h3>

      <p className={bodyClass}>
        Are you single and mobile, or married with school-age children? Can you relocate anywhere compelling opportunities exist, or are you anchored to specific geographies? If you have constraints, a partner with different constraints might further limit your addressable market. Two partnered searchers both tied to coastal cities eliminate most of the country's attractive search targets.
      </p>

      <h3 className={h3Class}>Potential Partner Evaluation</h3>

      <p className={bodyClass}>
        If considering partnership, assess the specific person rigorously:
      </p>

      <ul className={ulClass}>
        <li>Do their skills genuinely complement yours, or are they similar?</li>
        <li>Have you worked together professionally (not just socialized) and observed each other under stress?</li>
        <li>Are your work ethics and ambition levels comparable?</li>
        <li>Do you share core values around integrity, risk-taking, and people management?</li>
        <li>Can you give and receive critical feedback without defensiveness?</li>
        <li>Are you aligned on life stage, geographic flexibility, and exit timing preferences?</li>
        <li>Do investors you respect find the partnership compelling, or do they raise concerns?</li>
      </ul>

      <p className={bodyClass}>
        If any of these raise red flags, don't assume they'll resolve under pressure - they'll amplify. Better to search solo than with the wrong partner.
      </p>

      <h2 className={h2Class}>Hybrid Models</h2>

      <p className={bodyClass}>
        The binary choice between solo and partnered search isn't absolute. Searchers increasingly adopt hybrid structures that capture benefits from both models.
      </p>

      <h3 className={h3Class}>Solo Search with Operating Partner</h3>

      <p className={bodyClass}>
        Some searchers conduct solo searches but recruit an operating partner post-acquisition. This preserves the solo searcher's equity during search (when dilution hurts most, given uncertainty) but brings in complementary leadership when the acquired business is known and skill gaps are clear.
      </p>

      <p className={bodyClass}>
        The operating partner typically receives 5-10% equity plus meaningful cash compensation and joins the board. This is less than the 12.5-15% a search partner would receive but appropriate given lower risk (joining an already-acquired business rather than searching for years with uncertain outcome).
      </p>

      <p className={bodyClass}>
        This model works particularly well when the acquired business is larger or more complex than the searcher can manage alone, or when specific expertise (e.g., technology transformation, sales scaling) is needed that the searcher lacks. The challenge is recruiting high-caliber operators willing to join small companies with meaningful equity at risk.
      </p>

      <h3 className={h3Class}>Sequential Searching</h3>

      <p className={bodyClass}>
        Some searcher pairs conduct individual solo searches simultaneously, maintaining close coordination and mutual support without formal partnership. If one finds an attractive acquisition first, they close solo. If both find opportunities, they remain independent. If after 12-15 months neither has strong prospects, they consider merging into a formal partnered search.
      </p>

      <p className={bodyClass}>
        This approach preserves flexibility and avoids premature commitment. The downside is confusion for investors (are you searching together or not?) and the difficulty of merging searches mid-process if governance and investor groups differ.
      </p>

      <h3 className={h3Class}>Partnered Search with Asymmetric Equity</h3>

      <p className={bodyClass}>
        When partners bring different experience levels or take different roles (one as clear CEO, the other in a supporting role), they sometimes negotiate unequal equity splits: perhaps 18% and 10% rather than 14% each. This acknowledges different contribution levels and can reduce resentment.
      </p>

      <p className={bodyClass}>
        However, asymmetric structures complicate investor conversations and introduce awkwardness into the partnership. They work best when the junior partner is early-career and views the opportunity primarily as professional development, or when one partner brings unique domain expertise that doesn't translate to CEO capability.
      </p>

      <h3 className={h3Class}>Three-Person Teams</h3>

      <p className={bodyClass}>
        Occasionally, searcher trios form, each receiving roughly 8-10% equity. This is rare and faces skepticism from investors: if three people are required to search for and operate a $15-20 million revenue business, is the business too complex or are the individuals insufficiently capable?
      </p>

      <p className={bodyClass}>
        Three-person teams can work when targeting larger acquisitions ($30M+ revenue) where the scope genuinely justifies multiple executives, or when the team brings exceptionally complementary skills (e.g., one finance expert, one operations leader, one industry specialist). The biggest challenge is decision-making complexity: three-way conversations are exponentially harder than two-way, and even numbers (two votes versus one) prevent deadlock.
      </p>

      <h2 className={h2Class}>Making Your Decision</h2>

      <p className={bodyClass}>
        The solo versus partnered decision should be made thoughtfully but not agonized over endlessly. Talk to 10-15 searchers who have taken each path. Ask them what surprised them, what they'd do differently, and how the choice shaped their experience. Consult with potential investors early - their pattern recognition across dozens of searches provides valuable perspective.
      </p>

      <p className={bodyClass}>
        If you're considering partnership, work together on a project before committing: jointly analyze a business, attend a conference together, or spend a week making sourcing calls side-by-side. Professional compatibility becomes obvious quickly when pressure increases.
      </p>

      <p className={bodyClass}>
        Ultimately, both models work. The question isn't which is objectively better but which aligns with your strengths, addresses your weaknesses, fits your life circumstances, and maximizes your probability of success. Choose deliberately, commit fully, and execute relentlessly - that matters far more than whether you search alone or with a partner at your side.
      </p>

      <h2 className={h2Class}>Frequently Asked Questions</h2>

      <h3 className={h3Class}>Do partnered search funds have better returns than solo?</h3>
      <p className={bodyClass}>
        On an enterprise level, solo and partnered search funds generate similar returns to investors&mdash;approximately 3.3&ndash;3.8x cash-on-cash over five-to-seven-year hold periods. However, because solo searchers retain roughly twice the equity percentage (25&ndash;30% vs. 12.5&ndash;15% each), their per-person absolute dollar returns are significantly higher. The data on whether partnerships drive enough incremental business performance to offset the dilution is inconclusive.
      </p>

      <h3 className={h3Class}>How should search fund partners split roles after acquisition?</h3>
      <p className={bodyClass}>
        The most successful post-acquisition partnerships designate clear roles rather than attempting co-CEO arrangements. Common structures include CEO/COO, CEO/CFO, or President-External/President-Internal. Decision rights for key areas&mdash;capital allocation, hiring, strategy&mdash;should be clearly defined in the partnership agreement before acquisition. Partners who maintain ambiguous role definitions often experience friction within the first 12 months of operations.
      </p>

      <h3 className={h3Class}>What should a search fund partnership agreement include?</h3>
      <p className={bodyClass}>
        A thorough partnership agreement should cover role definitions and reporting relationships, decision rights and escalation procedures for disagreements, compensation philosophy (whether comp can diverge between partners), performance expectations and consequences for underperformance, exit provisions including buyout formulas and right of first refusal, and dispute resolution mechanisms (mediation before litigation). Negotiate these terms when the relationship is strong, not after conflict has emerged.
      </p>

      <h3 className={h3Class}>Can you start solo and add a partner later?</h3>
      <p className={bodyClass}>
        Yes. The &ldquo;solo search with operating partner&rdquo; hybrid model involves conducting the search alone and then recruiting a complementary executive post-acquisition. The operating partner typically receives 5&ndash;10% equity plus competitive compensation&mdash;less than a full search partner would receive, but appropriate given the lower risk of joining an already-acquired business. This model preserves more equity during the search phase while still bringing leadership depth for the operating phase.
      </p>

      <p className={bodyClass}>
        For more on structuring your search, see our guides on <Link href="/learn/getting-started" className="text-apple-accent hover:underline">Getting Started with Search Funds</Link>, <Link href="/learn/fundraising-deck" className="text-apple-accent hover:underline">Building Your Fundraising Deck</Link>, and <Link href="/learn/searcher-compensation" className="text-apple-accent hover:underline">Searcher Compensation Structures</Link>.
      </p>
    </article>
  );
}
