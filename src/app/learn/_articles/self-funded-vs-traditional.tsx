import { h1Class, h2Class, bodyClass, ulClass } from "./shared-styles";

export default function SelfFundedVsTraditionalArticle() {
  return (
    <article>
      <h1 className={h1Class}>Self-Funded Search vs. Traditional Search Fund</h1>
      <p className="text-sm text-apple-gray-500 mt-3">9 min read</p>

      <div className={bodyClass}>
        <p>
          Aspiring search fund entrepreneurs face a fundamental choice: raise
          a traditional search fund with investor capital, or self-fund the search
          from personal resources. Each path has distinct advantages, risks, and
          economics. This guide helps you decide which model is right for you.
        </p>

        <h2 className={h2Class}>Traditional search fund</h2>
        <ul className={ulClass}>
          <li><strong>Search capital:</strong> $400K-$600K raised from 10-20 investors covers salary, expenses, and deal costs for 18-24 months.</li>
          <li><strong>Searcher equity:</strong> Typically 20-25% of the acquired company, vesting over 4-5 years.</li>
          <li><strong>Investor support:</strong> Access to experienced board members, mentorship, and a built-in network for acquisition financing.</li>
          <li><strong>Structure:</strong> Investors have the right of first refusal on the acquisition equity.</li>
          <li><strong>Risk:</strong> Lower personal financial risk. If no acquisition is made, the investor capital is returned (net of expenses).</li>
        </ul>

        <h2 className={h2Class}>Self-funded search</h2>
        <ul className={ulClass}>
          <li><strong>Search capital:</strong> Funded from personal savings or part-time work. Typically $50K-$150K in out-of-pocket costs.</li>
          <li><strong>Searcher equity:</strong> Potentially 50-80% of the acquired company, depending on deal structure and investor involvement.</li>
          <li><strong>Flexibility:</strong> No obligation to specific investors. Freedom to pursue any deal size, structure, or timeline.</li>
          <li><strong>Structure:</strong> Acquisition financing raised on a deal-by-deal basis using SBA loans (US), bank debt, and/or investor equity.</li>
          <li><strong>Risk:</strong> Higher personal financial risk. The searcher bears all costs if no deal closes.</li>
        </ul>

        <h2 className={h2Class}>Key differences at a glance</h2>
        <div className="overflow-x-auto mt-4">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="border-b border-apple-gray-300">
                <th className="text-left py-2 pr-4 text-apple-black font-medium">Factor</th>
                <th className="text-left py-2 pr-4 text-apple-black font-medium">Traditional</th>
                <th className="text-left py-2 text-apple-black font-medium">Self-funded</th>
              </tr>
            </thead>
            <tbody className="text-apple-gray-700">
              <tr className="border-b border-apple-gray-100"><td className="py-2 pr-4">Searcher equity</td><td className="py-2 pr-4">20-25%</td><td className="py-2">50-80%</td></tr>
              <tr className="border-b border-apple-gray-100"><td className="py-2 pr-4">Personal financial risk</td><td className="py-2 pr-4">Low</td><td className="py-2">High</td></tr>
              <tr className="border-b border-apple-gray-100"><td className="py-2 pr-4">Investor support</td><td className="py-2 pr-4">Strong</td><td className="py-2">Variable</td></tr>
              <tr className="border-b border-apple-gray-100"><td className="py-2 pr-4">Deal size</td><td className="py-2 pr-4">$5M-$30M</td><td className="py-2">$1M-$10M</td></tr>
              <tr className="border-b border-apple-gray-100"><td className="py-2 pr-4">Timeline flexibility</td><td className="py-2 pr-4">18-24 months</td><td className="py-2">Unlimited</td></tr>
              <tr><td className="py-2 pr-4">MBA required?</td><td className="py-2 pr-4">Usually</td><td className="py-2">No</td></tr>
            </tbody>
          </table>
        </div>

        <h2 className={h2Class}>Which path is right for you?</h2>
        <p>
          Choose the <strong>traditional model</strong> if you value mentorship,
          want to pursue larger deals, and prefer lower personal financial risk.
          Choose the <strong>self-funded model</strong> if you want maximum equity
          retention, flexibility on timing and deal criteria, and are comfortable
          with higher personal risk.
        </p>
      </div>
    </article>
  );
}
