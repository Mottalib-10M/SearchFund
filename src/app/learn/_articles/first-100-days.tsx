import { h1Class, h2Class, bodyClass, ulClass } from "./shared-styles";

export default function First100DaysArticle() {
  return (
    <article>
      <h1 className={h1Class}>Search Fund CEO: The First 100 Days</h1>
      <p className="text-sm text-apple-gray-500 mt-3">9 min read</p>

      <div className={bodyClass}>
        <p>
          The first 100 days after acquiring a company are critical. How you
          navigate this period will set the tone for your entire tenure as CEO.
          Here is a structured approach based on insights from successful search
          fund operators and research from Stanford, IESE, and INSEAD&apos;s ETA &
          Search Funds Hub.
        </p>

        <h2 className={h2Class}>Days 1-30: Listen, learn, and build trust</h2>
        <ul className={ulClass}>
          <li><strong>Meet everyone.</strong> Hold one-on-one conversations with every employee, key customer, and major supplier. Listen more than you talk.</li>
          <li><strong>Shadow the seller.</strong> Spend time with the previous owner understanding daily operations, key relationships, and unwritten rules.</li>
          <li><strong>Map the organization.</strong> Understand reporting lines, decision-making processes, and informal power structures.</li>
          <li><strong>Don&apos;t make changes yet.</strong> Resist the urge to implement improvements. You need to understand the business deeply before changing anything.</li>
          <li><strong>Establish a communication rhythm.</strong> Set up regular team meetings and create open channels for feedback.</li>
        </ul>

        <h2 className={h2Class}>Days 30-60: Diagnose and plan</h2>
        <ul className={ulClass}>
          <li><strong>Identify quick wins.</strong> Look for low-risk improvements that will build credibility with the team — fixing broken processes, addressing long-standing frustrations.</li>
          <li><strong>Assess the management team.</strong> Determine who your key leaders are, where gaps exist, and who may need additional support or development.</li>
          <li><strong>Review financial controls.</strong> Ensure accurate, timely financial reporting. Many SMEs have weak financial infrastructure.</li>
          <li><strong>Set up a board.</strong> Establish a formal board with your investors and independent directors. Use them as a strategic resource.</li>
          <li><strong>Draft your 100-day plan.</strong> Based on your observations, create a prioritized action plan for the next phase.</li>
        </ul>

        <h2 className={h2Class}>Days 60-100: Execute first initiatives</h2>
        <ul className={ulClass}>
          <li><strong>Implement quick wins.</strong> Start with the highest-impact, lowest-risk improvements you identified.</li>
          <li><strong>Upgrade financial reporting.</strong> Implement monthly management reporting, KPI dashboards, and cash flow forecasting.</li>
          <li><strong>Address critical hires.</strong> If key positions need to be filled (CFO, sales manager, etc.), begin the recruiting process.</li>
          <li><strong>Communicate your vision.</strong> Share your strategic direction with the team. Be transparent about your goals and how you plan to achieve them.</li>
          <li><strong>Build your external network.</strong> Join industry associations, attend conferences, and build relationships with potential acquisition targets for future add-ons.</li>
        </ul>

        <h2 className={h2Class}>Common mistakes to avoid</h2>
        <ul className={ulClass}>
          <li>Changing too much too fast — you will lose the trust of employees and customers.</li>
          <li>Ignoring the company culture — the culture is a key asset you paid for.</li>
          <li>Micromanaging — empower your team rather than trying to do everything yourself.</li>
          <li>Underinvesting in the transition period with the seller.</li>
          <li>Neglecting customer relationships in favor of internal operations.</li>
        </ul>
      </div>
    </article>
  );
}
