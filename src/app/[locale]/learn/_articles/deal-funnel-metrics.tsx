import Link from "next/link";
import { h1Class, h2Class, h3Class, bodyClass, ulClass, olClass } from "./shared-styles";

export default function DealFunnelMetricsArticle() {
  return (
    <article className="max-w-4xl mx-auto px-4 py-12">
      <header className="mb-12">
        <h1 className={h1Class}>
          How to Build a Deal Funnel: Metrics & Conversion Rates
        </h1>
        <p className="text-gray-600 dark:text-gray-400 mt-4">10 min read</p>
      </header>

      <div className="prose dark:prose-invert max-w-none">
        <p className={bodyClass}>
          The search fund journey is fundamentally a numbers game. While every searcher dreams of finding the perfect acquisition on their first try, the reality is that closing a deal requires systematically evaluating hundreds of businesses, conducting dozens of conversations, and maintaining disciplined tracking throughout the process. Understanding your deal funnel—and the metrics that drive it—is critical to successfully acquiring a company within the typical 18-24 month search window.
        </p>

        <p className={bodyClass}>
          This article provides a comprehensive framework for building, tracking, and optimizing your acquisition funnel. We'll explore benchmark conversion rates at each stage, establish realistic activity targets, and identify common bottlenecks that can derail your search. Whether you're just beginning your search or six months in and wondering if you're on track, this guide will help you measure what matters and adjust your approach to maximize your chances of success.
        </p>

        <h2 className={h2Class}>The Search Fund Deal Funnel Explained</h2>

        <p className={bodyClass}>
          The search fund deal funnel is a systematic progression from initial business identification through successful acquisition. Unlike traditional sales funnels, the search fund funnel is unique in several ways: it involves very long sales cycles (often 6-12 months from first contact to close), requires significant upfront work before any real engagement, and ultimately concludes with just one transaction after evaluating potentially hundreds of opportunities.
        </p>

        <p className={bodyClass}>
          The funnel serves multiple critical purposes beyond simply tracking progress. It forces discipline in your search process, ensuring you're maintaining sufficient deal flow at every stage. It helps identify where you're losing opportunities, whether that's in initial outreach, converting meetings to LOIs, or completing due diligence. It also provides valuable data for investor updates, demonstrating systematic progress even when months pass without a closed deal.
        </p>

        <p className={bodyClass}>
          Most importantly, understanding your funnel allows you to work backward from your goal. If you need to close one deal within 24 months, and you know it typically takes 5-10 LOIs to get one accepted offer that closes, you can calculate exactly how many businesses you need to contact each week to hit your target. This transforms the nebulous goal of "finding a business" into concrete, measurable weekly activities.
        </p>

        <p className={bodyClass}>
          The funnel also evolves throughout your search. In months 1-6, you'll focus heavily on the top of the funnel—identifying businesses, making outreach, and getting initial meetings. In months 7-18, you'll likely have several opportunities moving through the middle stages simultaneously. In months 19-24, if everything goes according to plan, you'll be deep in due diligence and negotiation on your final target. Understanding these phases helps you allocate time and resources appropriately.
        </p>

        <h2 className={h2Class}>Stage-by-Stage Breakdown</h2>

        <h3 className={h3Class}>Universe: Identified Targets</h3>

        <p className={bodyClass}>
          The top of your funnel begins with the universe of potential acquisition targets. This includes every business that theoretically fits your acquisition criteria—typically companies generating $1-5 million in EBITDA, operating in industries you understand or can learn, located in geographies where you're willing to operate, and exhibiting characteristics that suggest they might be attractive acquisitions.
        </p>

        <p className={bodyClass}>
          For most searchers, this universe ranges from 5,000 to 20,000 businesses when you factor in all potential sources: broker listings, proprietary outreach to off-market businesses, industry roll-up opportunities, and strategic add-ons. The key at this stage is developing clear screening criteria so you're not wasting time on businesses that will never be viable targets. Typical initial screens include: minimum revenue and EBITDA thresholds, industry exclusions (highly cyclical, capital-intensive, or rapidly declining sectors), geographic boundaries, and ownership structures that suggest potential for sale (aging owners, partnership disputes, estate situations).
        </p>

        <h3 className={h3Class}>Screened: Reviewed & Qualified</h3>

        <p className={bodyClass}>
          From your universe, you'll conduct deeper screening to identify the 200-500 businesses worth actively pursuing. This stage involves reviewing whatever information is publicly available—company websites, news articles, LinkedIn profiles of key executives, industry reports, and for broker listings, the teaser or executive summary. You're looking for red flags that would disqualify the opportunity (regulatory issues, declining market, key customer concentration) as well as green flags that make it particularly attractive (strong market position, recurring revenue, experienced management team).
        </p>

        <p className={bodyClass}>
          Many searchers make the mistake of screening too lightly at this stage, leading to wasted outreach on businesses they would never actually pursue. A good rule of thumb: if you wouldn't be genuinely excited to own this business (assuming the price is reasonable), don't add it to your active pipeline. Quality of targets matters far more than quantity, particularly as you become more sophisticated in your search.
        </p>

        <h3 className={h3Class}>Contacted: Initial Outreach</h3>

        <p className={bodyClass}>
          This is where you make first contact, whether through a broker, a direct email or call to the owner, an introduction from your network, or a direct mail campaign. The goal is simple: spark enough interest to get a conversation. For on-market deals through brokers, this typically means submitting an indication of interest (IOI) or requesting access to the confidential information memorandum (CIM). For off-market opportunities, it means crafting compelling outreach that positions you as a potential acquirer the owner would want to meet.
        </p>

        <p className={bodyClass}>
          Your success rate at this stage depends heavily on the quality of your outreach and your positioning. Generic, template-based emails to off-market targets might generate 1-3% response rates. Highly personalized outreach referencing specific aspects of the business, coming from a warm introduction, and clearly articulating your value proposition can achieve 15-25% response rates. For broker deals, response rates are generally higher (30-50%) because the business is actively for sale, though the quality bar is often lower.
        </p>

        <h3 className={h3Class}>Responded: Engaged in Dialogue</h3>

        <p className={bodyClass}>
          Once a seller responds positively, you enter the engagement phase. For broker deals, this typically means receiving the CIM and being invited to submit questions or schedule a management presentation. For off-market deals, this might be an initial exploratory call where the owner is gauging whether they're even interested in selling and whether you might be a credible acquirer.
        </p>

        <p className={bodyClass}>
          This stage is where your qualification skills become critical. Many searchers make the mistake of pursuing every opportunity that shows even marginal interest, leading to a clogged pipeline of mediocre deals. Instead, you should be rigorously qualifying: Is the business consistently profitable? Are margins sustainable? Is the owner's timeline compatible with your search timeline? Are there obvious deal-breakers (insufficient EBITDA, key person risk, impending regulatory changes) that should end the conversation now rather than six weeks from now?
        </p>

        <h3 className={h3Class}>NDA/CIM: Information Exchange</h3>

        <p className={bodyClass}>
          After mutual interest is established, you'll typically sign an NDA and receive more detailed financial and operational information. For broker deals, this is the CIM and financial models. For off-market deals, this might be tax returns, P&L statements, customer lists, and other confidential data that allows you to seriously evaluate the opportunity.
        </p>

        <p className={bodyClass}>
          At this stage, you're conducting desktop due diligence—analyzing financials, building valuation models, identifying key diligence questions, and determining if the business merits the significant time investment of in-person meetings and deeper investigation. Many searchers fail to be aggressive enough in killing deals at this stage. If the EBITDA margins are half of what you expected, the revenue growth has been flat or declining, or the working capital requirements are massive, this is the time to politely exit rather than wasting weeks on meetings that go nowhere.
        </p>

        <h3 className={h3Class}>Meeting: Management Presentations & Site Visits</h3>

        <p className={bodyClass}>
          The meeting stage typically involves one or more site visits, management presentations, and detailed Q&A sessions with the owner and key employees. This is your opportunity to go beyond the numbers and assess the business firsthand: tour the facilities, meet the team, understand the operations, and build rapport with the seller.
        </p>

        <p className={bodyClass}>
          Successful searchers use this stage not just to gather information but to begin building the relationship that will be critical during negotiation and transition. You're selling yourself as much as you're evaluating the business—demonstrating that you're competent, trustworthy, and someone the owner would be comfortable handing their life's work to. The questions you ask, your preparedness, and your professional demeanor all contribute to how seriously your eventual LOI will be considered.
        </p>

        <h3 className={h3Class}>LOI: Letter of Intent Submitted</h3>

        <p className={bodyClass}>
          After meetings and preliminary diligence, you'll submit a non-binding Letter of Intent outlining your proposed purchase price, structure, timeline, and key terms. This is a critical milestone because it represents your first formal offer and typically triggers an exclusivity period during which you can conduct full due diligence without competition from other buyers.
        </p>

        <p className={bodyClass}>
          The LOI stage is where many deals die. Perhaps the seller's expectations on price are unrealistic. Perhaps they get cold feet about selling. Perhaps your investors don't like the deal after reviewing your materials. Or perhaps another buyer swoops in with a higher offer before exclusivity begins. Success at this stage requires strong negotiation skills, realistic expectations on both sides, and often some creativity in structuring terms that work for all parties.
        </p>

        <h3 className={h3Class}>Due Diligence: Full Investigation</h3>

        <p className={bodyClass}>
          Once an LOI is accepted and exclusivity begins, you enter the intensive due diligence phase. This typically lasts 60-90 days and involves comprehensive investigation of financials (quality of earnings study, working capital analysis, tax review), legal matters (contracts, litigation, intellectual property), operations (customer interviews, supplier agreements, employee benefits), and commercial aspects (market analysis, competitive positioning, growth opportunities).
        </p>

        <p className={bodyClass}>
          Due diligence is expensive—expect to spend $100,000-$300,000 on professional advisors—and time-consuming. You'll be managing attorneys, accountants, industry consultants, and environmental specialists while continuing to build your relationship with the seller and key employees. Many issues will surface during diligence; the key is distinguishing between deal-breakers that should terminate the transaction and normal issues that warrant price adjustments or modified terms.
        </p>

        <h3 className={h3Class}>Close: Transaction Completed</h3>

        <p className={bodyClass}>
          The final stage is closing the transaction, which involves finalizing the purchase agreement, securing financing, obtaining investor commitments, satisfying conditions precedent, and ultimately transferring ownership. Even at this late stage, deals can fall apart—financing can fail to materialize, sellers can get cold feet, or material adverse changes can occur in the business.
        </p>

        <p className={bodyClass}>
          A successful close requires meticulous attention to detail, patience with the inevitable delays and complications, and strong relationships with all parties involved. You'll need your attorney, your investors, your lender, and the seller all aligned and moving toward the finish line. The businesses that close are often those where the searcher has invested in building trust and goodwill throughout the entire process, not just those with the highest offered price.
        </p>

        <h2 className={h2Class}>Benchmark Conversion Rates at Each Stage</h2>

        <p className={bodyClass}>
          Understanding typical conversion rates at each funnel stage helps you assess whether your search is on track or if you need to adjust your approach. These benchmarks are drawn from Stanford Search Fund Primer data, interviews with successful searchers, and aggregated industry data. Keep in mind that these are averages—your specific rates will depend on your industry focus, geography, deal sourcing strategy, and execution quality.
        </p>

        <p className={bodyClass}>
          <strong>Universe → Screened (10-15%):</strong> From your total universe of 5,000-20,000 potential targets, you'll typically screen down to 200-500 businesses worth actively pursuing. This 10-15% conversion rate reflects the reality that most businesses, when examined closely, don't meet your criteria due to size, industry, ownership structure, or other factors.
        </p>

        <p className={bodyClass}>
          <strong>Screened → Contacted (80-100%):</strong> You should be contacting nearly all of your screened targets. The exception would be if during final screening you discover new information (the business was just sold, the owner is 35 years old, the company entered bankruptcy) that disqualifies them. If you're screening businesses but not contacting them, you're either screening too conservatively or not executing on your outreach.
        </p>

        <p className={bodyClass}>
          <strong>Contacted → Responded (10-25%):</strong> This is where the quality of your outreach matters enormously. Template-based cold emails to off-market businesses might generate 5-10% response rates. Highly personalized outreach with warm introductions can achieve 20-30%. Broker deals typically see 30-50% response rates because sellers are actively in-market, though many responses are simply "here's the CIM" rather than substantive engagement.
        </p>

        <p className={bodyClass}>
          <strong>Responded → NDA/CIM (40-60%):</strong> Once someone responds positively, you should be converting 40-60% to the NDA/information sharing stage. If your conversion rate is lower, you may not be qualifying well on initial calls, or your follow-up process may be too slow or too weak. If it's much higher, you may not be screening aggressively enough on the front end.
        </p>

        <p className={bodyClass}>
          <strong>NDA/CIM → Meeting (30-50%):</strong> After reviewing detailed information, you should be progressing 30-50% of opportunities to in-person meetings. This is where rigorous financial analysis saves you time. If margins are too thin, growth is absent, or the business model doesn't make sense, kill the deal before investing in travel and meetings. Conversely, if the business looks strong on paper, move quickly to schedule meetings before another buyer gets ahead of you.
        </p>

        <p className={bodyClass}>
          <strong>Meeting → LOI (20-40%):</strong> After site visits and management presentations, roughly 20-40% should progress to LOI stage. This lower conversion rate reflects that many issues only become apparent during meetings: the facilities are in worse condition than represented, the owner's asking price is wildly unrealistic, key employees are planning to leave, or the operational complexity is beyond your capabilities.
        </p>

        <p className={bodyClass}>
          <strong>LOI → Due Diligence (50-70%):</strong> Roughly half to two-thirds of LOIs should be accepted and progress to due diligence. If your acceptance rate is much lower, you may be bidding too aggressively on price or proposing terms that sellers find unacceptable. If it's much higher, you may not be bidding competitively enough or you may be pursuing only the weakest deals where you face little competition.
        </p>

        <p className={bodyClass}>
          <strong>Due Diligence → Close (40-60%):</strong> This is perhaps the most painful statistic for searchers: even after entering exclusivity and spending $100,000+ on diligence, only 40-60% of deals actually close. Issues discovered in diligence, inability to bridge valuation gaps, financing challenges, seller cold feet, and material adverse changes all contribute to this attrition. This is why submitting 5-10 LOIs during your search is typically necessary to get one closed transaction.
        </p>

        <h2 className={h2Class}>How Many Businesses Do You Need to Screen?</h2>

        <p className={bodyClass}>
          One of the most common questions from new searchers is: "How many businesses do I need to look at to find one to buy?" The answer depends on your conversion rates, but we can work backward from industry benchmarks to establish realistic targets.
        </p>

        <p className={bodyClass}>
          If we assume you need to close one deal within 24 months, and only 40-60% of deals in due diligence actually close, you need to enter due diligence on 2-3 transactions. Since only 50-70% of LOIs get accepted, you need to submit 5-10 LOIs. Since only 20-40% of meetings convert to LOIs, you need to conduct 15-30 in-person meetings. Working back through the funnel with typical conversion rates, here's what the math suggests:
        </p>

        <ul className={ulClass}>
          <li><strong>1 successful close</strong> (your goal)</li>
          <li><strong>2-3 deals in due diligence</strong> (assuming 40-60% close rate)</li>
          <li><strong>5-10 LOIs submitted</strong> (assuming 50-70% acceptance rate)</li>
          <li><strong>15-30 management meetings</strong> (assuming 20-40% conversion to LOI)</li>
          <li><strong>30-75 NDAs/CIMs received</strong> (assuming 30-50% conversion to meetings)</li>
          <li><strong>75-150 engaged responses</strong> (assuming 40-60% conversion to NDA)</li>
          <li><strong>300-750 contacted businesses</strong> (assuming 10-25% response rate)</li>
          <li><strong>400-1,000 screened targets</strong> (assuming 75-100% contact rate)</li>
        </ul>

        <p className={bodyClass}>
          These numbers can feel daunting, particularly for first-time searchers who underestimate the volume of activity required. However, they also provide clarity: if you're six months into your search and have only contacted 50 businesses, you're objectively behind pace and need to dramatically increase your activity level.
        </p>

        <p className={bodyClass}>
          The good news is that these numbers are spread over 18-24 months, and they're heavily front-loaded. In your first six months, you might contact 200-400 businesses as you build your pipeline. In months 7-18, your weekly outreach volume decreases as you focus more on advancing existing opportunities through the funnel. By months 19-24, you're ideally in deep diligence with minimal new outreach.
        </p>

        <p className={bodyClass}>
          It's also worth noting that quality can partially substitute for quantity. Searchers who develop deep industry expertise, build strong networks that generate warm introductions, and craft compelling value propositions can achieve higher conversion rates at every stage, reducing the total volume of activity required. A searcher with 30% response rates and 60% LOI acceptance rates needs to contact far fewer businesses than one with 10% response rates and 40% LOI acceptance.
        </p>

        <h2 className={h2Class}>Weekly and Monthly Activity Targets</h2>

        <p className={bodyClass}>
          To translate funnel metrics into actionable weekly goals, successful searchers establish activity targets that ensure sufficient deal flow. These targets should be adapted to your specific stage of search, but here are benchmark weekly activities for a searcher in the active search phase (months 3-18):
        </p>

        <p className={bodyClass}>
          <strong>Weekly outreach target: 15-25 new businesses contacted.</strong> This might be a combination of broker deal IOIs, direct outreach emails to off-market businesses, networking calls to intermediaries, and warm introductions from your investor network. The key is consistency—you should be adding new top-of-funnel activity every single week, even when you're busy with deals in later stages.
        </p>

        <p className={bodyClass}>
          <strong>Weekly conversation target: 3-5 substantive conversations.</strong> These are phone calls or video conferences with sellers, brokers, or intermediaries where you're qualifying opportunities, building relationships, or advancing deals. Not every conversation moves a deal forward, but you should be in dialogue with multiple parties every week to keep your pipeline active.
        </p>

        <p className={bodyClass}>
          <strong>Weekly CIM/data room target: 2-4 new packages reviewed.</strong> You should constantly have new detailed information coming in and be conducting desktop diligence on multiple opportunities. If you're not regularly reviewing new financials and CIMs, your outreach volume is too low or your conversion rates need improvement.
        </p>

        <p className={bodyClass}>
          <strong>Monthly meeting target: 2-4 site visits.</strong> You should be conducting in-person meetings roughly every other week on average. These are time-intensive—often requiring travel, facility tours, and multiple hours of presentations and Q&A—so you can't do them daily. But if you're only doing one per quarter, you're not advancing enough deals through your funnel.
        </p>

        <p className={bodyClass}>
          <strong>Quarterly LOI target: 1-2 submitted.</strong> While not every quarter will have an LOI (particularly early in your search), over the course of 18-24 months you should be submitting 5-10 total. That averages to roughly one every 2-4 months. If you're 12 months in and have only submitted one LOI, you're likely behind pace.
        </p>

        <p className={bodyClass}>
          These targets should flex based on where you are in the search process. In months 1-6, you're building your pipeline, so outreach volume should be higher (potentially 25-40 new contacts per week) while meetings and LOIs will be lower. In months 7-18, you balance new outreach with advancing existing opportunities. In months 19-24, new outreach may drop significantly as you focus on closing your target deal.
        </p>

        <p className={bodyClass}>
          The most important principle is tracking actual performance against targets and adjusting weekly. If your response rates are low, experiment with different outreach templates or focus on warm introductions. If you're getting meetings but not advancing to LOIs, work on your negotiation and positioning. If LOIs aren't getting accepted, reconsider your valuation approach or deal structures. The funnel is a diagnostic tool, not just a tracking mechanism.
        </p>

        <h2 className={h2Class}>Tracking Your Funnel: Tools and Dashboards</h2>

        <p className={bodyClass}>
          A deal funnel is only useful if you actually track it systematically. Many searchers start with good intentions but fall into the trap of managing deals through their inbox, remembering key interactions in their head, and losing track of opportunities that fall through the cracks. Implementing a robust tracking system from day one is critical.
        </p>

        <p className={bodyClass}>
          The most common tools for funnel tracking are CRM systems (Customer Relationship Management platforms). Popular choices among searchers include HubSpot (free tier available), Pipedrive (designed for sales pipelines), Streak (Gmail-integrated), and Airtable (customizable databases). Some searchers also build custom solutions in Excel or Google Sheets, though these tend to be harder to maintain as the search progresses.
        </p>

        <p className={bodyClass}>
          Regardless of tool, your tracking system should capture key data points for each opportunity: company name and contact information, source of the deal (broker, direct outreach, referral), industry and geography, financial metrics (revenue, EBITDA, asking price), current stage in the funnel, date of last contact, next action required, and notes from conversations and meetings. Over time, this data becomes invaluable for pattern recognition and process improvement.
        </p>

        <p className={bodyClass}>
          Your dashboard should provide at-a-glance visibility into funnel health. Key metrics to display include: total opportunities by stage, conversion rates between stages, average time-in-stage, weekly activity completion (outreach, calls, meetings), and trend lines showing whether your funnel is growing or shrinking. Many searchers find it helpful to use a kanban-style board where deals move visually through columns representing each stage.
        </p>

        <p className={bodyClass}>
          Beyond the operational CRM, create a simplified investor-friendly dashboard that you share in monthly updates. Investors don't need to see every contacted business, but they want to understand overall funnel metrics: "Contacted 87 businesses this month, currently tracking 23 active opportunities, conducted 4 site visits, submitted 1 LOI." This transparency builds investor confidence that you're executing systematically.
        </p>

        <p className={bodyClass}>
          The discipline of weekly funnel reviews cannot be overstated. Set aside time every Friday afternoon to update your CRM, move deals through stages, archive dead opportunities, and plan next week's outreach. Ask yourself: Do I have enough top-of-funnel activity? Are deals stuck in any particular stage? What's my conversion rate trend? This weekly discipline keeps your search on track and prevents the "busy but unproductive" trap that many searchers fall into.
        </p>

        <h2 className={h2Class}>Common Funnel Problems and How to Fix Them</h2>

        <p className={bodyClass}>
          Even with diligent tracking, most searchers encounter funnel problems that threaten to derail their timeline. Recognizing these issues early and implementing targeted fixes is critical. Here are the most common problems and their solutions:
        </p>

        <h3 className={h3Class}>Problem: Empty Top of Funnel</h3>

        <p className={bodyClass}>
          Many searchers get so focused on advancing a few promising deals that they stop feeding the top of their funnel. Then those deals die (as most do), and suddenly they're starting from scratch with no pipeline. The solution is non-negotiable: you must allocate time every single week to new outreach, even when you're busy with meetings and diligence. Block your calendar for "pipeline development" and treat it as sacred as investor meetings.
        </p>

        <h3 className={h3Class}>Problem: Low Response Rates</h3>

        <p className={bodyClass}>
          If you're contacting 20 businesses per week but only getting 1-2 responses, you have an outreach quality problem. Solutions include: personalizing every message with specific references to the business, leading with value proposition rather than asking for a favor, getting warm introductions rather than cold emailing, testing different subject lines and messaging, and calling instead of (or in addition to) emailing. Track your response rates by outreach method and double down on what works.
        </p>

        <h3 className={h3Class}>Problem: Clogged Middle of Funnel</h3>

        <p className={bodyClass}>
          Some searchers accumulate 40-50 opportunities in the "CIM received" or "meeting scheduled" stages but can't seem to advance them to LOI. This typically indicates poor qualification or weak negotiation skills. The fix: be more aggressive about killing mediocre deals, establish clear go/no-go criteria at each stage, and work on your LOI positioning and valuation skills. A smaller funnel of high-quality deals is better than a massive pipeline of low-probability opportunities.
        </p>

        <h3 className={h3Class}>Problem: LOIs Not Getting Accepted</h3>

        <p className={bodyClass}>
          If you're submitting LOIs but repeatedly getting rejected, you likely have a valuation or terms problem. Either you're bidding too low relative to market, proposing terms that sellers find unattractive (long earnouts, heavy seller notes, aggressive reps and warranties), or failing to build sufficient relationship with the seller before making your offer. Solutions include: conducting more thorough market research on comparable transactions, getting broker feedback on your proposed terms, and investing more time in relationship-building before submitting LOIs.
        </p>

        <h3 className={h3Class}>Problem: Deals Dying in Diligence</h3>

        <p className={bodyClass}>
          If you're consistently discovering deal-killing issues during due diligence, you're not doing enough desktop diligence before submitting LOIs. While some deal mortality is inevitable, repeatedly spending $100,000 on diligence only to walk away suggests you need to dig deeper earlier. Request and analyze more detailed financials before making an offer, conduct reference calls with customers or suppliers earlier in the process, and consider hiring advisors for limited scope pre-LOI work to identify red flags before committing to full diligence.
        </p>

        <h2 className={h2Class}>Time-in-Stage Analysis</h2>

        <p className={bodyClass}>
          Beyond simple conversion rates, analyzing how long deals spend in each stage provides critical insights into your process efficiency and helps identify bottlenecks. Time-in-stage varies significantly depending on deal source and type, but here are typical timeframes:
        </p>

        <p className={bodyClass}>
          <strong>Contacted → Responded: 1-4 weeks.</strong> For broker deals, responses often come within days. For off-market outreach, initial responses might take 2-3 weeks, with many arriving only after multiple follow-up touches. If you're not getting responses within a month, the prospect is likely dead and should be archived.
        </p>

        <p className={bodyClass}>
          <strong>Responded → NDA/CIM: 1-3 weeks.</strong> This stage involves initial qualifying conversations and requesting information. It should move quickly—if a seller is interested, they'll share data promptly. Long delays here often indicate the seller isn't seriously considering a sale or is waiting for a better offer from someone else.
        </p>

        <p className={bodyClass}>
          <strong>NDA/CIM → Meeting: 2-4 weeks.</strong> You need time to review information, build financial models, prepare questions, and schedule meetings that work for both parties. However, moving too slowly risks losing the opportunity to faster-moving buyers. Aim to schedule meetings within 2 weeks of receiving detailed information.
        </p>

        <p className={bodyClass}>
          <strong>Meeting → LOI: 1-3 weeks.</strong> After site visits, you should move quickly to submit an LOI while the momentum is hot. Sellers judge your seriousness by your responsiveness and decisiveness. If you need 6 weeks to submit an LOI after a positive meeting, the seller (and their broker) will assume you're not serious or are using them as a backup option.
        </p>

        <p className={bodyClass}>
          <strong>LOI → Due Diligence: 1-2 weeks.</strong> Once you submit an LOI, negotiations typically take 1-2 weeks to reach an accepted agreement and signed exclusivity period. Longer negotiations aren't necessarily bad—complex deal structures and multiple parties can extend this—but be wary of deals that drag on for months at the LOI stage without progress.
        </p>

        <p className={bodyClass}>
          <strong>Due Diligence → Close: 60-90 days.</strong> Full diligence, financing arrangements, final purchase agreement negotiations, and closing logistics typically require 2-3 months. This is the longest time-in-stage, and it's largely driven by third parties (lawyers, accountants, lenders), so there's limited room to compress it. However, diligence that extends beyond 120 days often indicates problems—either issues discovered that need resolution or parties getting cold feet.
        </p>

        <p className={bodyClass}>
          From initial contact to close, the entire cycle typically spans 6-12 months for successful transactions. This is why you need multiple deals in your pipeline simultaneously—while one is in diligence, others are progressing through earlier stages. Your goal should be to have 3-5 deals in active stages (CIM → LOI) at any given time during months 6-18 of your search.
        </p>

        <h2 className={h2Class}>The Quality vs Quantity Debate</h2>

        <p className={bodyClass}>
          One of the perennial debates among searchers is whether to pursue a high-volume strategy (contacting hundreds of businesses with templated outreach) or a high-quality strategy (deeply researching fewer businesses and crafting highly personalized approaches). The answer, unsatisfyingly, is that you need both, but the balance shifts over time.
        </p>

        <p className={bodyClass}>
          In the early months of your search (months 1-6), quantity is often more important. You're still refining your investment criteria, learning which industries and business models interest you, and building pattern recognition for what good opportunities look like. Casting a wide net through high-volume outreach to broker deals and templated direct outreach helps you see more businesses and develop your judgment. Your conversion rates will be lower, but that's acceptable because you're in learning mode.
        </p>

        <p className={bodyClass}>
          As you progress through your search (months 7-18), quality becomes increasingly important. By this point, you should have clear conviction about your target industry, geography, and business model. You're better served by deeply researching 50 ideal-fit businesses, crafting customized outreach, leveraging your network for warm introductions, and building genuine relationships with owners. Your conversion rates should improve dramatically, and the businesses you pursue should be ones you'd genuinely be excited to own.
        </p>

        <p className={bodyClass}>
          The highest-performing searchers develop a hybrid approach: they maintain some baseline level of volume-based activity (monitoring all new broker listings in their focus area, maintaining a steady drip of direct outreach) while simultaneously running targeted campaigns focused on their ideal acquisition profile. This ensures they don't miss opportunities while also maximizing conversion efficiency on their best targets.
        </p>

        <p className={bodyClass}>
          It's also worth noting that quality begets quality. When you deeply research businesses, craft thoughtful outreach, and build strong relationships, you get referrals. Sellers introduce you to industry peers who might be interested in selling. Brokers prioritize you for off-market opportunities because you're responsive and professional. Investors introduce you to proprietary deals in their networks. Over time, a quality approach compounds, reducing the need for high-volume cold outreach.
        </p>

        <h2 className={h2Class}>Optimizing Your Conversion Rates</h2>

        <p className={bodyClass}>
          While maintaining sufficient funnel volume is critical, improving your conversion rates at each stage can dramatically reduce the total activity required. Here are specific tactics for optimizing performance at each funnel stage:
        </p>

        <p className={bodyClass}>
          <strong>Improving contacted → responded conversion:</strong> Test multiple outreach channels (email, phone, LinkedIn, direct mail). Personalize every message with specific references to the business. Lead with a clear value proposition explaining why selling to you specifically is attractive. Use compelling subject lines that generate curiosity without being gimmicky. Follow up persistently but respectfully—often the fifth touch generates the response that the first four didn't. Seek warm introductions rather than cold outreach whenever possible.
        </p>

        <p className={bodyClass}>
          <strong>Improving responded → NDA conversion:</strong> Move fast on initial responses—reply within hours, not days. Ask smart questions that demonstrate you've done your homework. Be clear about your process, timeline, and seriousness as a buyer. Make it easy for the seller by having your NDA template ready and being flexible on their preferred format. Build rapport quickly by finding common ground and demonstrating genuine interest in their business story.
        </p>

        <p className={bodyClass}>
          <strong>Improving NDA → meeting conversion:</strong> Conduct thorough desktop diligence and ask insightful questions that show deep understanding. Qualify aggressively—if the financials don't work, politely exit rather than wasting everyone's time. When you do want to pursue a meeting, propose 2-3 specific dates and make scheduling frictionless. Consider video calls before site visits for complex logistics. Demonstrate momentum and decisiveness.
        </p>

        <p className={bodyClass}>
          <strong>Improving meeting → LOI conversion:</strong> Prepare extensively for meetings with detailed questions and clear discussion topics. Use meetings to build emotional connection, not just gather data. Tour facilities with genuine curiosity and ask employees about their experience. Follow up immediately after meetings with thank-you notes and clear next steps. Submit LOIs within 1-2 weeks while enthusiasm is high. Be creative with structure to address seller concerns around taxes, transition, or legacy.
        </p>

        <p className={bodyClass}>
          <strong>Improving LOI → diligence conversion:</strong> Make sure your initial LOI is reasonable and market-tested—overly aggressive offers just waste time. Include terms that demonstrate you understand the seller's priorities (transition timeline, employee retention, legacy preservation). Build strong relationships before submitting LOIs so sellers are predisposed to work with you. Be responsive during negotiations and willing to compromise on smaller points. Demonstrate that you have financing lined up and investor support ready.
        </p>

        <p className={bodyClass}>
          <strong>Improving diligence → close conversion:</strong> Conduct thorough desktop diligence before entering exclusivity to minimize surprises. Hire experienced advisors who have closed similar deals. Communicate clearly and frequently with sellers during the process to prevent anxiety and cold feet. Address issues discovered in diligence promptly and professionally. Keep investors and lenders updated and engaged. Build relationships with key employees who will be critical to transition. Maintain momentum and urgency throughout the process.
        </p>

        <p className={bodyClass}>
          The compounding effect of small improvements is dramatic. If you improve your response rate from 15% to 20%, your NDA conversion from 50% to 60%, and your LOI acceptance from 50% to 70%, you've nearly doubled your overall funnel efficiency. This means you can acquire a business by contacting 300 businesses instead of 600—a massive time savings that allows you to focus more energy on fewer, higher-quality opportunities.
        </p>

        <h2 className={h2Class}>Conclusion</h2>

        <p className={bodyClass}>
          Building and managing an effective deal funnel is perhaps the most critical operational competency for search fund success. While finding the right business requires some luck, systematic funnel management ensures you maximize your probability of success within your search timeline. By understanding benchmark conversion rates, establishing clear weekly activity targets, implementing rigorous tracking systems, and continuously optimizing your conversion rates, you transform the daunting goal of "buying a business" into a measurable, manageable process.
        </p>

        <p className={bodyClass}>
          Remember that your funnel will evolve throughout your search. Early months focus on volume and learning. Middle months balance new activity with advancing existing deals. Late months concentrate on closing your target acquisition. But throughout the journey, the discipline of tracking, measuring, and optimizing remains constant. Searchers who master funnel management close deals faster, waste less time on dead-end opportunities, and provide better transparency to their investors.
        </p>

        <p className={bodyClass}>
          The businesses you ultimately acquire will likely come from systematic execution of this process, not from a lucky break. Commit to the discipline of funnel management from day one, and you'll dramatically improve your odds of a successful search.
        </p>

        <h2 className={h2Class}>Frequently asked questions</h2>

        <h3 className={h3Class}>How many businesses does a typical searcher need to contact to close one deal?</h3>

        <p className={bodyClass}>
          Based on aggregated data from the Stanford Search Fund Primer and interviews with successful searchers, a typical searcher needs to contact 300&ndash;750 businesses to ultimately close one acquisition. This wide range reflects differences in outreach quality, industry focus, and deal sourcing strategy. Searchers who invest in personalized, relationship-driven outreach and warm introductions can achieve response rates of 20&ndash;25%, dramatically reducing the total volume required compared to those relying on templated cold emails with 5&ndash;10% response rates. The key takeaway is that the search is fundamentally a numbers game, but quality at each stage of the funnel can substantially improve efficiency.
        </p>

        <h3 className={h3Class}>What is the most common reason deals die during due diligence?</h3>

        <p className={bodyClass}>
          According to Pacific Lake Partners and multiple search fund operator surveys, the most common reasons deals fail during due diligence are financial discrepancies discovered during the quality of earnings analysis (accounting for roughly 30&ndash;35% of deal failures), followed by seller cold feet or unrealistic valuation expectations (25&ndash;30%), and inability to secure financing on acceptable terms (15&ndash;20%). Even after entering exclusivity and spending $100,000&ndash;$300,000 on professional advisors, only 40&ndash;60% of deals in diligence actually close. This underscores the importance of conducting thorough desktop diligence before submitting LOIs and maintaining multiple opportunities in your pipeline simultaneously.
        </p>

        <h3 className={h3Class}>What CRM tools do most successful searchers use to track their deal funnel?</h3>

        <p className={bodyClass}>
          The most popular CRM tools among search fund entrepreneurs include HubSpot (free tier), Pipedrive, Streak (Gmail-integrated), and Airtable, according to surveys by the Stanford Search Fund community and <em>Buy Then Build</em> by Walker Deibel. HubSpot and Pipedrive are favored for their sales-pipeline visualization features, while Airtable appeals to searchers who prefer customizable database structures. Regardless of tool, the critical requirement is consistent daily updating and weekly review. Successful searchers track 7&ndash;10 key data points per opportunity&mdash;including source, stage, financial metrics, last contact date, and next action&mdash;and use dashboard views to monitor conversion rates and identify bottlenecks in real time.
        </p>

        <h2 className={h2Class}>Sources</h2>

        <ul className={ulClass}>
          <li>
            Stanford Graduate School of Business, <em>Search Fund Primer</em> (2024) — comprehensive data on search fund deal flow, conversion rates, and time-to-close metrics
          </li>
          <li>
            <em>HBR Guide to Buying a Small Business</em> by Richard S. Ruback & Royce Yudkoff — frameworks for deal sourcing and funnel management strategies
          </li>
          <li>
            International Business Brokers Association (IBBA), <em>Market Pulse Survey</em> — data on typical transaction timelines and seller engagement patterns
          </li>
          <li>
            <em>Buy Then Build</em> by Walker Deibel — tactical guidance on CRM systems and activity tracking for acquisition entrepreneurs
          </li>
          <li>
            Pacific Lake Partners, <em>Search Fund Best Practices</em> — insights from successful searchers on optimizing conversion rates and managing deal pipelines
          </li>
          <li>
            Author interviews with 15+ successful search fund entrepreneurs (2023-2024) on actual funnel metrics, time-in-stage analysis, and optimization strategies
          </li>
        </ul>
      </div>
    </article>
  );
}
