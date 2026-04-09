import { h1Class, h2Class, h3Class, bodyClass, ulClass, olClass } from "./shared-styles";

export default function FindingInvestorsArticle() {
  return (
    <article>
      <h1 className={h1Class}>How to Find Search Fund Investors</h1>
      <p className="text-sm text-apple-gray-500 mt-3">10 min read</p>

      <div className={bodyClass}>
        <p>
          Raising search capital is the first major milestone for a traditional
          search fund entrepreneur. This guide covers the landscape of search
          fund investors, how to approach them, and what they look for in a
          searcher.
        </p>

        <h2 className={h2Class}>Types of search fund investors</h2>

        <h3 className={h3Class}>Ex-searchers</h3>
        <p>
          Former search fund entrepreneurs who have successfully acquired and
          operated companies. They provide the most relevant mentorship and
          often invest in 5-15 search funds simultaneously. They understand
          the challenges firsthand and are typically the most helpful board members.
        </p>

        <h3 className={h3Class}>Family offices</h3>
        <p>
          Wealthy families looking for alternative investment strategies.
          Family offices often invest patient capital with longer time horizons
          and can be flexible on deal structures. Many European family offices
          have embraced the search fund model.
        </p>

        <h3 className={h3Class}>Institutional investors</h3>
        <p>
          Dedicated search fund investment firms have emerged in both the US
          and Europe. These include firms like Pacific Lake Partners, Relay
          Investments, and others who invest professionally across multiple
          search funds.
        </p>

        <h3 className={h3Class}>Angel investors</h3>
        <p>
          High-net-worth individuals, often entrepreneurs themselves, who invest
          smaller amounts in individual search funds. They may bring valuable
          industry expertise or networks.
        </p>

        <h2 className={h2Class}>How to approach investors</h2>
        <ol className={olClass}>
          <li><strong>Build your thesis first.</strong> Define your target geography, sectors, size criteria, and value creation plan before approaching investors.</li>
          <li><strong>Leverage your network.</strong> Start with your MBA alumni network, professors, and personal connections to get warm introductions.</li>
          <li><strong>Prepare a compelling PPM.</strong> Your Private Placement Memorandum should cover your background, search thesis, target criteria, and the economics of the search fund structure.</li>
          <li><strong>Meet investors in person.</strong> Attend the INSEAD ETA Conference, IESE Search Fund Conference, Stanford CEO Conference, and ETA networking events. INSEAD&apos;s ETA & Search Funds Hub also provides curated introductions between searchers and investors.</li>
          <li><strong>Be persistent but respectful.</strong> Expect the process to take 2-4 months. Most investors pass on many searchers before committing.</li>
        </ol>

        <h2 className={h2Class}>What investors look for</h2>
        <ul className={ulClass}>
          <li><strong>Leadership qualities:</strong> Humility, resilience, intellectual curiosity, and the ability to build trust with sellers and employees.</li>
          <li><strong>Relevant experience:</strong> Prior operating, consulting, or industry experience that will help you evaluate and run a business.</li>
          <li><strong>Clear thesis:</strong> A well-defined search strategy with realistic criteria and a credible value creation plan.</li>
          <li><strong>Coachability:</strong> Willingness to listen to experienced board members and adapt your approach based on their guidance.</li>
        </ul>
      </div>
    </article>
  );
}
