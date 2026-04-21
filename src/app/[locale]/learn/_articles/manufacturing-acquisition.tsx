import Link from "next/link";
import { h1Class, h2Class, h3Class, bodyClass, ulClass } from "./shared-styles";

export default function ManufacturingAcquisitionArticle() {
  return (
    <article>
      <h1 className={h1Class}>Acquiring a Manufacturing or Industrial Business</h1>
      <p className="text-sm text-apple-gray-500 mt-3">13 min read</p>

      <div className={bodyClass}>
        <p>
          Manufacturing and industrial businesses are among the most enduring
          acquisition targets for search fund entrepreneurs. While they lack the
          glamour of SaaS or the demographic tailwinds of healthcare, well-run
          manufacturing companies offer tangible assets, deeply entrenched
          customer relationships, and margins that reward operational excellence.
          The US manufacturing sector comprises over 250,000 firms, the vast
          majority of which are small to mid-sized operations with aging owners
          approaching retirement. This succession wave creates a generational
          buying opportunity for searchers willing to master the nuances of
          capital-intensive businesses.
        </p>

        <h2 className={h2Class}>Capital intensity assessment</h2>
        <p>
          Unlike asset-light service businesses, manufacturing acquisitions
          require a thorough understanding of the physical plant and its
          economics. The distinction between maintenance capex and growth capex
          is critical to accurate valuation and cash flow modeling.
        </p>

        <h3 className={h3Class}>Machinery age and replacement capex</h3>
        <p>
          Create a detailed asset register that catalogs every major piece of
          equipment, its acquisition date, useful life, current condition, and
          estimated replacement cost. Manufacturing equipment typically has a
          useful life of 15-25 years for heavy machinery and 7-12 years for
          precision equipment and controls. If the average age of the
          equipment base is within 5 years of end-of-life, you need to budget
          for significant replacement capex within your hold period. A CNC
          machining center might cost $250K-$800K to replace; an industrial
          paint line could run $1M-$3M. These costs must be factored into your
          financial model and reflected in the purchase price.
        </p>

        <h3 className={h3Class}>Maintenance capex vs. growth capex</h3>
        <p>
          Maintenance capex is the annual investment required to keep existing
          equipment operational and output at current levels. For a
          well-maintained manufacturing operation, maintenance capex typically
          runs 2-5% of revenue. Growth capex is additional investment to expand
          capacity, add new capabilities, or automate manual processes. During
          due diligence, ask the seller for historical capex breakdowns over the
          past 5-7 years. A common seller tactic is to underinvest in
          maintenance in the years before a sale, inflating EBITDA at the expense
          of future reliability. If maintenance capex has been declining as a
          percentage of revenue while equipment age is increasing, you likely face
          a deferred maintenance backlog.
        </p>

        <h3 className={h3Class}>Automation opportunities</h3>
        <p>
          Many small manufacturers still rely on manual processes that could be
          partially or fully automated. Robotic welding, automated material
          handling, CNC retrofitting, and quality inspection automation can
          improve throughput by 20-40% while reducing labor costs and defect
          rates. A $200K investment in a robotic welding cell, for example,
          can replace 1.5-2 full-time welders, pay for itself in 18-24 months,
          and produce more consistent quality. Identify these opportunities
          during diligence as post-acquisition value creation levers.
        </p>

        <h2 className={h2Class}>Supply chain due diligence</h2>

        <h3 className={h3Class}>Key supplier concentration</h3>
        <p>
          A strong{" "}
          <Link href="/learn/deal-sourcing-strategies" className="text-apple-accent hover:underline">deal sourcing strategy</Link> should
          also include supply chain evaluation. Map every raw material and component supplier, along with their share
          of total procurement spend. If any single supplier represents more
          than 20% of total material costs, you have concentration risk. Ask
          whether alternative suppliers have been qualified for each critical
          input. The cost of qualifying a new supplier in manufacturing can be
          substantial — some customers require a full re-qualification process
          (including testing and certification) that takes 6-12 months.
        </p>

        <h3 className={h3Class}>Raw material price volatility</h3>
        <p>
          Steel, aluminum, resins, specialty alloys, and other raw materials
          are subject to significant price swings. During 2021-2022, steel
          prices tripled from pre-pandemic levels before partially correcting.
          Assess whether the business has pricing mechanisms to pass through
          raw material cost increases, such as material surcharges, quarterly
          price adjustments, or indexed contracts. A manufacturer that absorbs
          raw material volatility without pass-through mechanisms is exposed
          to margin compression that can erase profitability in a single
          quarter.
        </p>

        <h3 className={h3Class}>Inventory management</h3>
        <p>
          Effective{" "}
          <Link href="/learn/working-capital-management" className="text-apple-accent hover:underline">working capital management</Link> starts
          with inventory. Evaluate inventory levels relative to revenue (inventory turns),
          obsolescence risk, and carrying costs. Manufacturing businesses
          typically carry 30-90 days of raw material and 15-45 days of finished
          goods inventory. Excess inventory ties up working capital and may
          indicate declining demand or poor production planning. Conversely,
          insufficient inventory (less than 15 days of critical materials) creates
          production risk. Inventory valuation should be verified through
          physical counts during{" "}
          <Link href="/learn/due-diligence-checklist" className="text-apple-accent hover:underline">due diligence</Link> — do not rely solely on book
          values.
        </p>

        <h2 className={h2Class}>Workforce considerations</h2>

        <h3 className={h3Class}>Skilled trades shortage</h3>
        <p>
          The manufacturing sector faces a critical skilled labor shortage.
          According to Deloitte and the Manufacturing Institute, the US
          manufacturing sector could have 2.1 million unfilled positions by
          2030. Skilled machinists, welders, electricians, and maintenance
          technicians are increasingly difficult to recruit. During due
          diligence, assess the age distribution of the workforce, local labor
          market conditions, and the company&apos;s ability to attract and
          retain skilled workers. A facility where 40% of skilled tradespeople
          are within 5 years of retirement presents a real succession risk on
          the shop floor.
        </p>

        <h3 className={h3Class}>Training programs</h3>
        <p>
          Companies with formalized training programs, apprenticeships, or
          partnerships with local technical schools have a significant
          competitive advantage in the current labor market. Evaluate whether
          the company has documented standard operating procedures (SOPs) for
          key processes, cross-training programs to reduce single-point-of-failure
          risk, and relationships with vocational programs that create a
          pipeline of new talent.
        </p>

        <h3 className={h3Class}>Union relationships</h3>
        <p>
          If the workforce is unionized, review the collective bargaining
          agreement (CBA) in detail. Key areas include wage escalation
          provisions, benefit obligations (particularly healthcare and pension),
          work rules that may limit operational flexibility, and the CBA
          expiration date. A CBA that expires within 12 months of your
          acquisition closing represents a negotiation risk. Engage a labor
          attorney experienced in manufacturing to review the agreement and
          assess the relationship between management and the union. A
          cooperative relationship is an asset; an adversarial one is a
          liability.
        </p>

        <h3 className={h3Class}>Key-person risk on the shop floor</h3>
        <p>
          In many small manufacturers, critical institutional knowledge resides
          in the heads of one or two senior operators who have been with the
          company for decades. These individuals know how to set up complex
          jobs, troubleshoot equipment problems, and maintain quality standards
          that are not documented anywhere. Identify these key people during
          diligence, assess their retirement timeline, and budget for knowledge
          transfer and documentation as a post-acquisition priority.
        </p>

        <h2 className={h2Class}>Equipment valuation</h2>
        <p>
          Manufacturing equipment can represent 30-60% of a company&apos;s total
          asset value. Understanding the different approaches to equipment
          valuation is essential for structuring the deal and negotiating the
          purchase price.
        </p>
        <ul className={ulClass}>
          <li>
            <strong>Fair market value (FMV):</strong> What a willing buyer would
            pay a willing seller in an arm&apos;s-length transaction. This is the
            most common basis for equipment valuation in acquisitions and is
            typically 40-70% of replacement cost for well-maintained, mid-life
            equipment.
          </li>
          <li>
            <strong>Replacement cost:</strong> The cost to purchase equivalent
            new equipment with the same capabilities. Useful for understanding
            the capital investment required to replicate the business from
            scratch.
          </li>
          <li>
            <strong>Orderly liquidation value:</strong> What the equipment would
            fetch in an auction with reasonable marketing time (3-6 months).
            Typically 20-50% of FMV depending on the specificity and market
            demand for the equipment.
          </li>
          <li>
            <strong>Forced liquidation value:</strong> Fire-sale value with
            minimal marketing time. Typically 15-30% of FMV. This represents
            the absolute floor value of the physical assets.
          </li>
        </ul>
        <p>
          Engage an accredited equipment appraiser from the American Society of
          Appraisers (ASA) or the Association of Machinery and Equipment
          Appraisers (AMEA) to conduct a formal valuation. The cost is typically
          $5K-$20K depending on the size and complexity of the equipment base,
          and it is money well spent.
        </p>

        <h2 className={h2Class}>Environmental liabilities</h2>
        <p>
          Environmental liability is the single largest &quot;hidden risk&quot;
          in manufacturing acquisitions. Contaminated soil, groundwater issues,
          or improper hazardous waste disposal can create remediation obligations
          that cost hundreds of thousands — or millions — of dollars.
        </p>

        <h3 className={h3Class}>Phase I environmental site assessment</h3>
        <p>
          A Phase I ESA is a standard part of manufacturing due diligence. It
          involves a historical review of the property, regulatory database
          searches, and a site inspection to identify potential environmental
          concerns. Cost: $3K-$6K. A Phase I that identifies Recognized
          Environmental Conditions (RECs) will recommend proceeding to a
          Phase II assessment.
        </p>

        <h3 className={h3Class}>Phase II environmental site assessment</h3>
        <p>
          If the Phase I identifies concerns, a Phase II involves actual soil
          and groundwater sampling to determine whether contamination exists
          and its extent. Cost: $15K-$60K depending on the number of samples
          and contaminants tested. If contamination is found, remediation cost
          estimates must be obtained and factored into the purchase price — or
          the seller must remediate before closing.
        </p>

        <h3 className={h3Class}>EPA compliance and permits</h3>
        <p>
          Verify that the business holds all required environmental permits
          (air emissions, wastewater discharge, hazardous waste generation) and
          is in compliance with all permit conditions. Review the past 5 years
          of EPA and state environmental agency correspondence. Any Notices of
          Violation, consent orders, or pending enforcement actions are serious
          red flags that require expert environmental counsel.
        </p>

        <h2 className={h2Class}>Manufacturing-specific metrics</h2>
        <ul className={ulClass}>
          <li>
            <strong>Capacity utilization:</strong> Current output as a percentage
            of maximum theoretical output. Manufacturing businesses typically
            operate at 65-85% utilization. Below 60% suggests excess capacity
            and potential for revenue growth without additional capital investment.
            Above 90% means the facility is constrained and growth requires capex.
          </li>
          <li>
            <strong>Overall Equipment Effectiveness (OEE):</strong> The gold
            standard manufacturing productivity metric, calculated as Availability
            x Performance x Quality. World-class OEE is 85%+. Most small
            manufacturers achieve 55-70%. Improving OEE from 60% to 75% is
            equivalent to adding 25% capacity without buying new equipment.
          </li>
          <li>
            <strong>Scrap rates:</strong> The percentage of material or product
            that is scrapped due to defects. Typical rates vary by industry, but
            scrap above 3-5% of material cost warrants investigation and
            represents a clear improvement opportunity.
          </li>
          <li>
            <strong>On-time delivery (OTD):</strong> The percentage of orders
            delivered by the promised date. Best-in-class manufacturers achieve
            95%+ OTD. Below 90% signals production planning or capacity issues
            that will frustrate customers and eventually erode the customer base.
          </li>
        </ul>

        <h2 className={h2Class}>Lean manufacturing and Six Sigma opportunities</h2>
        <p>
          Many small manufacturers have never implemented formal continuous
          improvement methodologies. Introducing Lean manufacturing principles
          (5S, value stream mapping, pull systems, cellular manufacturing) and
          Six Sigma quality tools can yield dramatic improvements in the first
          12-24 months of ownership. Typical results from a first Lean
          implementation include 15-30% reduction in lead time, 10-20% reduction
          in inventory, 5-15% improvement in labor productivity, and 20-50%
          reduction in defect rates. These improvements drop directly to the
          bottom line and can often be implemented with modest investment in
          training and reorganization rather than expensive capital projects.
        </p>

        <h2 className={h2Class}>Customer concentration</h2>
        <p>
          Customer concentration is a pervasive issue in manufacturing. It is
          not uncommon to find small manufacturers where the top customer
          represents 30-50% of revenue. This creates existential risk — if that
          customer leaves, the business may not survive. Evaluate customer
          concentration rigorously: the top customer should represent no more
          than 15-20% of revenue, and the top 5 customers no more than 50%.
          If concentration exceeds these thresholds, negotiate price protection
          (earnout tied to customer retention), obtain written customer
          commitments, or walk away from the deal.
        </p>

        <h2 className={h2Class}>Technology adoption</h2>

        <h3 className={h3Class}>ERP systems</h3>
        <p>
          Many small manufacturers still run on spreadsheets, QuickBooks, or
          outdated legacy systems. Implementing a modern ERP system (such as
          Epicor, SYSPRO, or Infor for small manufacturers, or NetSuite for
          mid-market) provides real-time visibility into production scheduling,
          inventory, costs, and financial performance. ERP implementation
          typically costs $75K-$300K for a small manufacturer and takes 6-12
          months, but the operational visibility it provides is transformative.
        </p>

        <h2 className={h2Class}>ISO certifications and quality systems</h2>
        <p>
          Many manufacturing customers (particularly aerospace, defense,
          automotive, and medical device companies) require their suppliers to
          hold ISO certifications. The most common is ISO 9001 (quality
          management), followed by AS9100 (aerospace), IATF 16949 (automotive),
          and ISO 13485 (medical devices). Verify current certifications and
          their expiration dates. If the target does not hold certifications
          required by key customers, understand the time and cost to obtain them
          (typically $20K-$50K and 6-12 months for initial ISO 9001
          certification).
        </p>

        <h2 className={h2Class}>The bottom line</h2>
        <p>
          Manufacturing acquisitions reward searchers who are willing to learn
          the physical, operational, and regulatory complexities of making
          things. The barriers to entry — capital intensity, environmental risk,
          workforce challenges — are precisely what keeps valuations reasonable
          (typically 3-6x EBITDA versus 8-15x for SaaS, as our{" "}
          <Link href="/learn/business-valuation" className="text-apple-accent hover:underline">business valuation guide</Link> details)
          and protects well-run operations from easy disruption. A searcher who masters equipment
          valuation, supply chain management, Lean principles, and workforce
          development can acquire a manufacturing business at an attractive
          multiple and create substantial value through operational improvement,
          technology adoption, and customer diversification.
        </p>
      </div>
    </article>
  );
}
