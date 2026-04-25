import Link from "next/link";
import { h1Class, h2Class, h3Class, bodyClass, ulClass, olClass } from "./shared-styles";

export default function CybersecurityForAcquiredBusinessesArticle() {
  return (
    <article>
      <h1 className={h1Class}>Cybersecurity for Acquired Businesses: A CEO&rsquo;s Priority List</h1>
      <p className="text-sm text-apple-gray-500 mt-3">11 min read</p>

      <div className={bodyClass}>
        <p>
          When you acquire a small or mid-sized business, you inherit its
          cybersecurity posture, or, more often, the absence of one.
          Most SMEs targeted by search funds have invested little to nothing in
          information security. Passwords are shared, backups are untested,
          software is unpatched, and no one has thought about what happens when
         , not if, a breach occurs. As the new CEO, cybersecurity
          is your responsibility, and the consequences of neglecting it range
          from operational disruption to regulatory fines to complete business
          failure. The good news is that protecting an SME does not require an
          enterprise-grade budget. It requires a disciplined, prioritized
          approach that starts on day one.
        </p>

        <h2 className={h2Class}>Why SMEs are prime cybersecurity targets</h2>
        <p>
          There is a persistent myth that cybercriminals only go after large
          corporations. The reality is exactly the opposite. According to
          Verizon&rsquo;s Data Breach Investigations Report, over 40% of
          cyberattacks target small businesses. The reason is straightforward:
          SMEs have valuable data, customer records, payment information,
          employee Social Security numbers, bank account details, but
          lack the security infrastructure to protect it. They are soft targets.
        </p>
        <ul className={ulClass}>
          <li>
            <strong>Ransomware gangs operate at scale.</strong> Automated tools
            scan millions of IP addresses looking for unpatched systems and
            weak credentials. They do not care whether the target is a Fortune
            500 company or a 30-person HVAC business. If the door is unlocked,
            they walk in.
          </li>
          <li>
            <strong>Supply chain attacks are rising.</strong> Attackers
            increasingly target smaller companies as entry points into larger
            ones. If your acquired business is a vendor or subcontractor to
            larger enterprises, a breach at your company can cascade upstream,
            destroying relationships and triggering liability.
          </li>
          <li>
            <strong>Business email compromise (BEC) is the top threat.</strong>{" "}
            BEC attacks, where criminals impersonate executives or
            vendors to trick employees into wiring money or sharing credentials
            cost businesses over $2.7 billion annually. SMEs without
            email security controls or employee training are especially
            vulnerable.
          </li>
          <li>
            <strong>Post-acquisition is a high-risk period.</strong> Ownership
            transitions create confusion about who is responsible for IT
            systems, passwords, and access controls. Former employees or
            contractors may retain access. New integrations between systems
            create attack surface. Attackers know this.
          </li>
        </ul>

        <h2 className={h2Class}>The first 30 days: your cybersecurity checklist</h2>
        <p>
          During your{" "}
          <Link href="/learn/first-100-days" className="text-apple-accent hover:underline">first 100 days</Link>{" "}
          as CEO, cybersecurity should be addressed in the first 30. The items
          below are not aspirational, they are urgent. A single
          ransomware attack during the transition period can cripple a business
          you have not yet had time to understand.
        </p>

        <h3 className={h3Class}>1. Conduct a technology and access audit</h3>
        <p>
          Before you can secure the business, you need to know what you are
          protecting. Your{" "}
          <Link href="/learn/post-acquisition-technology-audit" className="text-apple-accent hover:underline">post-acquisition technology audit</Link>{" "}
          should include a full inventory of every system, application,
          device, and cloud service the business uses. Document who has access
          to each system and at what privilege level. Identify any former
          employees, contractors, or the previous owner&rsquo;s family members
          who still have active credentials. Revoke access immediately for
          anyone who no longer needs it.
        </p>

        <h3 className={h3Class}>2. Enforce multi-factor authentication (MFA)</h3>
        <p>
          MFA is the single most impactful security control you can deploy.
          Enable it on every business-critical account: email, banking, CRM,
          ERP, cloud storage, accounting software, and any system containing
          customer or financial data. Use authenticator apps (Microsoft
          Authenticator, Google Authenticator) or hardware keys (YubiKey)
          rather than SMS-based codes, which are vulnerable to SIM-swapping
          attacks. MFA alone blocks over 99% of automated credential attacks.
        </p>

        <h3 className={h3Class}>3. Reset and enforce password policies</h3>
        <p>
          In most acquired SMEs, you will find passwords written on sticky
          notes, shared across teams, reused across systems, and unchanged
          for years. Implement a password policy immediately: minimum 14
          characters, unique per account, managed through a business password
          manager such as 1Password Business ($7.99 per user per month) or
          Dashlane Business ($8 per user per month). Force a password reset
          across all critical systems during the first week.
        </p>

        <h3 className={h3Class}>4. Verify backup integrity</h3>
        <p>
          Do not assume backups exist or work. Verify that critical data
          financial records, customer databases, operational systems,
          email archives, is being backed up automatically, encrypted,
          and stored offsite or in the cloud. Then test a restore. A backup
          that has never been tested is not a backup; it is a hope. Implement
          the 3-2-1 rule: three copies of your data, on two different types
          of media, with one copy offsite. Solutions like Veeam, Datto, or
          cloud-native backups (AWS Backup, Azure Backup) cost
          $200-$1,000 per month for a typical SME.
        </p>

        <h3 className={h3Class}>5. Deploy endpoint protection</h3>
        <p>
          Every company device, laptops, desktops, servers, and mobile
          devices used for business, needs managed endpoint protection.
          This goes beyond traditional antivirus: modern endpoint detection
          and response (EDR) tools monitor for suspicious behavior, contain
          threats automatically, and provide forensic data after incidents.
          CrowdStrike Falcon Go, SentinelOne, and Microsoft Defender for
          Business are all suitable for SMEs, costing $5-$12 per
          endpoint per month. Deploy within the first two weeks and ensure
          every device is enrolled.
        </p>

        <h2 className={h2Class}>Cyber insurance: a non-negotiable</h2>
        <p>
          Cyber insurance is not a substitute for security controls, but it is
          an essential backstop. A standalone cyber insurance policy covers
          incident response costs, forensic investigation, legal fees,
          notification expenses, business interruption losses, and ransom
          payments (though paying ransoms is controversial and increasingly
          discouraged). For most SMEs, premiums range from $1,000 to $7,500
          per year depending on industry, revenue, and security posture.
        </p>
        <ul className={ulClass}>
          <li>
            <strong>Apply before you need it.</strong> Insurers increasingly
            require MFA, endpoint protection, and backup verification before
            issuing policies. Completing the first-30-days checklist above
            makes you insurable, and lowers your premiums.
          </li>
          <li>
            <strong>Understand the exclusions.</strong> Read the policy
            carefully. Common exclusions include acts of war (which insurers
            have used to deny claims for state-sponsored attacks), failure to
            patch known vulnerabilities, and pre-existing breaches discovered
            after policy inception.
          </li>
          <li>
            <strong>Use the insurer&rsquo;s resources.</strong> Many cyber
            insurance carriers provide free or discounted security tools,
            incident response hotlines, and tabletop exercise facilitation.
            These resources alone can be worth the premium.
          </li>
          <li>
            <strong>Factor it into your acquisition budget.</strong> If the
            target business had no cyber insurance, the cost of a new policy
            should be included in your post-close operating budget alongside
            other infrastructure investments.
          </li>
        </ul>

        <h2 className={h2Class}>Employee training: your strongest, or weakest, link</h2>
        <p>
          Technology can block many attacks, but employees remain the primary
          attack vector. Phishing emails, social engineering calls, and
          credential theft all exploit human behavior. A security-aware
          workforce is your best defense; an untrained one is your biggest
          vulnerability.
        </p>
        <ul className={ulClass}>
          <li>
            <strong>Launch security awareness training immediately.</strong>{" "}
            Platforms like KnowBe4, Proofpoint Security Awareness, or Ninjio
            provide automated training modules, simulated phishing campaigns,
            and compliance tracking. Costs range from $15-$25 per user
            per year. Deploy within the first 60 days.
          </li>
          <li>
            <strong>Run simulated phishing exercises quarterly.</strong> These
            tests identify employees who are most susceptible and provide
            targeted coaching. Track click rates over time, you should
            see them decline from a typical baseline of 20-30% to under
            5% within six months.
          </li>
          <li>
            <strong>Establish clear reporting procedures.</strong> Employees
            should know exactly what to do when they receive a suspicious
            email, notice unusual system behavior, or accidentally click a
            malicious link. Make reporting easy (a dedicated email address or
            Slack channel) and reward it. Never punish employees for reporting
            potential incidents.
          </li>
          <li>
            <strong>Tailor training to roles.</strong> The finance team needs
            specific training on BEC and wire fraud. Employees with
            administrative access need elevated awareness about privilege
            escalation. Customer-facing staff need training on social
            engineering. One-size-fits-all training misses the highest-risk
            scenarios.
          </li>
        </ul>

        <h2 className={h2Class}>Vendor and third-party risk management</h2>
        <p>
          Your security is only as strong as your weakest vendor. Most SMEs
          share data with dozens of third parties, accounting firms,
          payroll processors, IT consultants, cloud service providers, payment
          processors, and rarely assess those vendors&rsquo; security
          posture.
        </p>
        <ul className={ulClass}>
          <li>
            <strong>Inventory all third-party access.</strong> Document every
            vendor, contractor, and service provider that has access to your
            systems or data. Include their access level, what data they can
            reach, and whether their access is monitored.
          </li>
          <li>
            <strong>Assess critical vendors.</strong> For vendors handling
            sensitive data (payroll, payments, customer PII), request their
            SOC 2 report or security questionnaire responses. If a critical
            vendor cannot demonstrate basic security controls, that is a
            risk you need to manage, either through contractual
            requirements, additional monitoring, or replacing the vendor.
          </li>
          <li>
            <strong>Review contracts for security clauses.</strong> Ensure
            vendor agreements include data protection requirements, breach
            notification obligations, and indemnification provisions. Many
            legacy vendor contracts at acquired SMEs contain no security
            language whatsoever.
          </li>
          <li>
            <strong>Limit vendor access.</strong> Apply the principle of least
            privilege: vendors should have access only to the specific systems
            and data they need, for only as long as they need it. Disable
            vendor accounts when engagements end.
          </li>
        </ul>

        <h2 className={h2Class}>Incident response planning</h2>
        <p>
          An incident response plan is not something you create during a
          crisis, it is something you create so you can function during
          one. Without a plan, a ransomware attack at 2 a.m. on a Friday
          becomes a week of chaos, bad decisions, and preventable damage.
        </p>
        <ol className={olClass}>
          <li>
            <strong>Define roles and responsibilities.</strong> Who leads the
            response? Who communicates with customers? Who contacts the
            insurer? Who handles law enforcement? In an SME, these roles often
            fall to just two or three people, make sure they know it
            before an incident occurs.
          </li>
          <li>
            <strong>Document escalation procedures.</strong> Create a clear
            escalation path: what constitutes a potential incident, who gets
            notified first, and at what point external resources (legal
            counsel, forensic investigators, the cyber insurer&rsquo;s
            hotline) are engaged.
          </li>
          <li>
            <strong>Maintain an emergency contact list.</strong> Keep a printed
            (not just digital) list of critical contacts: your IT provider or
            MSP, cyber insurance carrier, legal counsel, law enforcement cyber
            unit, and key internal stakeholders. If your systems are encrypted
            by ransomware, you will not be able to look up these contacts on
            your computer.
          </li>
          <li>
            <strong>Run tabletop exercises annually.</strong> Walk through a
            realistic scenario, a ransomware attack, a BEC wire fraud,
            or a data breach, with your leadership team. Identify gaps
            in the plan and fix them. Many cyber insurance carriers will
            facilitate these exercises at no additional cost.
          </li>
          <li>
            <strong>Establish communication templates.</strong> Pre-draft
            notification letters for customers, employees, and regulators.
            During a live incident, you will not have time to wordsmith a
            breach notification from scratch while simultaneously trying to
            contain the attack.
          </li>
        </ol>

        <h2 className={h2Class}>Compliance requirements: HIPAA, PCI-DSS, and GDPR</h2>
        <p>
          Depending on your industry and geography, your acquired business may
          be subject to specific cybersecurity and data protection regulations.
          Non-compliance creates legal liability, regulatory fines, and
          reputational damage. Understanding your obligations is part of the{" "}
          <Link href="/learn/first-100-days" className="text-apple-accent hover:underline">first 100 days</Link>{" "}
          assessment.
        </p>
        <ul className={ulClass}>
          <li>
            <strong>HIPAA (healthcare).</strong> If the business handles
            protected health information (PHI), common in healthcare
            services, dental practices, home health, and medical billing
            you must comply with HIPAA&rsquo;s Security Rule. This
            includes encryption of PHI at rest and in transit, access controls,
            audit logging, workforce training, and a documented risk
            assessment. Penalties for non-compliance range from $100 to
            $50,000 per violation, with annual maximums of $1.5 million per
            category.
          </li>
          <li>
            <strong>PCI-DSS (payment card data).</strong> Any business that
            accepts credit card payments must comply with the Payment Card
            Industry Data Security Standard. For most SMEs, this means
            completing an annual Self-Assessment Questionnaire (SAQ),
            maintaining a secure network, protecting cardholder data,
            implementing access controls, and conducting quarterly
            vulnerability scans. Non-compliance can result in fines of
            $5,000-$100,000 per month from payment processors.
          </li>
          <li>
            <strong>GDPR (European data).</strong> If the business collects or
            processes personal data of EU residents, even if the
            business is based outside Europe, GDPR applies. Key
            requirements include lawful basis for data processing, data
            minimization, breach notification within 72 hours, and the right
            to erasure. Fines can reach 4% of annual global revenue or
            &euro;20 million, whichever is higher.
          </li>
          <li>
            <strong>State privacy laws.</strong> In the US, an increasing
            number of states have enacted privacy legislation (California
            CCPA/CPRA, Virginia VCDPA, Colorado CPA, and others). If the
            business serves customers in these states, compliance obligations
            may apply.
          </li>
          <li>
            <strong>Industry-specific regulations.</strong> Financial services
            (GLBA, SOX), government contractors (CMMC/NIST 800-171), and
            education (FERPA) each have their own cybersecurity requirements.
            Identify applicable regulations during your technology audit.
          </li>
        </ul>

        <h2 className={h2Class}>Budgeting for cybersecurity</h2>
        <p>
          A common question from new search fund CEOs is: how much should I
          spend on cybersecurity? The answer depends on business size,
          industry, regulatory requirements, and current maturity, but here
          are practical guidelines.
        </p>
        <ul className={ulClass}>
          <li>
            <strong>Benchmark:</strong> plan to allocate 3-7% of your IT
            budget to security, or roughly $500-$2,000 per employee per
            year for a typical SME. For businesses in regulated industries
            (healthcare, financial services), budget toward the higher end.
          </li>
          <li>
            <strong>Year one costs for a 30-person company.</strong> A
            realistic first-year cybersecurity budget includes: password
            manager ($2,400/year), endpoint protection ($3,600/year), backup
            solution ($6,000/year), security awareness training ($600/year),
            cyber insurance ($3,000-$5,000/year), and MSP security
            services or consultant time ($12,000-$24,000/year). Total:
            approximately $28,000-$42,000, or roughly $1,000-$1,400
            per employee.
          </li>
          <li>
            <strong>Integrate with broader technology spending.</strong> Your
            cybersecurity budget should not exist in isolation. It is a
            component of your overall{" "}
            <Link href="/learn/digital-transformation" className="text-apple-accent hover:underline">digital transformation</Link>{" "}
            investment. Many security improvements, moving to cloud
            platforms, implementing modern ERP systems, upgrading email
            infrastructure, deliver both operational and security
            benefits simultaneously.
          </li>
          <li>
            <strong>Frame it as risk management, not cost.</strong> When
            presenting cybersecurity spending to your board and investors,
            frame it in terms of risk reduction. The average cost of a data
            breach for an SME exceeds $120,000, and that figure does
            not include reputational damage, customer attrition, or the
            management time consumed by incident response. A $30,000 annual
            investment in prevention is cheap insurance.
          </li>
        </ul>

        <h2 className={h2Class}>MSP vs. in-house security: the right model for SMEs</h2>
        <p>
          Most search fund acquisitions involve businesses with fewer than
          100 employees, which means a full-time Chief Information Security
          Officer (CISO) or even a dedicated IT security person is not
          economically justified. You have two primary options.
        </p>

        <h3 className={h3Class}>Managed Security Service Provider (MSP/MSSP)</h3>
        <ul className={ulClass}>
          <li>
            <strong>What they provide:</strong> 24/7 monitoring, endpoint
            management, patch management, firewall administration, email
            security, backup management, vulnerability scanning, and incident
            response support.
          </li>
          <li>
            <strong>Cost:</strong> $100-$250 per endpoint per month for
            a full managed security stack, or $1,000-$3,000 per month
            for a 20-30 person company with basic coverage.
          </li>
          <li>
            <strong>Best for:</strong> businesses under 50 employees without
            internal IT staff. The MSP model provides professional-grade
            security at a fraction of the cost of hiring even one full-time
            security professional.
          </li>
          <li>
            <strong>Selecting a provider:</strong> look for SOC 2 Type II
            certification, experience with your industry, transparent pricing,
            defined SLAs for response times, and references from businesses of
            similar size. Avoid providers that lock you into proprietary tools
            or long-term contracts.
          </li>
        </ul>

        <h3 className={h3Class}>In-house IT with fractional CISO</h3>
        <ul className={ulClass}>
          <li>
            <strong>What this looks like:</strong> a full-time IT manager or
            systems administrator who handles day-to-day technology operations,
            supplemented by a fractional CISO who provides strategic security
            leadership for 8-16 hours per month.
          </li>
          <li>
            <strong>Cost:</strong> the IT manager costs $60,000-$90,000
            per year in salary and benefits; a fractional CISO costs
            $3,000-$8,000 per month depending on scope and seniority.
          </li>
          <li>
            <strong>Best for:</strong> businesses with 50-150 employees,
            regulated industries requiring deeper compliance expertise, or
            companies executing a{" "}
            <Link href="/learn/erp-implementation-post-acquisition" className="text-apple-accent hover:underline">major ERP implementation</Link>{" "}
            that demands ongoing technical oversight.
          </li>
        </ul>

        <h2 className={h2Class}>Board reporting on cyber risk</h2>
        <p>
          As CEO of a search fund portfolio company, you report to a board
          that expects visibility into material risks, and cyber risk
          is now firmly in that category. Integrate cybersecurity into your
          regular board reporting alongside financial performance, operational
          metrics, and strategic initiatives. Your{" "}
          <Link href="/learn/kpi-dashboard-post-acquisition" className="text-apple-accent hover:underline">KPI dashboard</Link>{" "}
          should include security metrics.
        </p>
        <ul className={ulClass}>
          <li>
            <strong>Report quarterly at minimum.</strong> Include a
            cybersecurity summary in every board package: current risk posture,
            incidents (if any), key metrics (phishing simulation results,
            patch compliance rates, backup success rates), and planned
            improvements.
          </li>
          <li>
            <strong>Use a maturity framework.</strong> Frameworks like NIST
            Cybersecurity Framework (CSF) or CIS Controls provide a structured
            way to assess and communicate your security maturity. Start by
            scoring your current state, define a target state, and report
            progress at each board meeting.
          </li>
          <li>
            <strong>Quantify risk in business terms.</strong> Do not present
            cybersecurity as a technical issue. Present it as a business risk:
            potential financial impact, probability of occurrence, and cost of
            mitigation. Boards understand risk-reward tradeoffs; they do not
            understand firewall configurations.
          </li>
          <li>
            <strong>Disclose material incidents promptly.</strong> If a
            security incident occurs that could affect business operations,
            financial results, or customer relationships, notify the board
            immediately, do not wait for the next scheduled meeting.
            Transparency builds trust; surprises destroy it.
          </li>
        </ul>

        <h2 className={h2Class}>A phased roadmap for the first year</h2>
        <p>
          Cybersecurity is not a one-time project. It is an ongoing program
          that matures over time. Here is a realistic phased approach for a
          newly acquired SME.
        </p>

        <h3 className={h3Class}>Days 1-30: Foundation</h3>
        <ol className={olClass}>
          <li>Complete technology and access audit.</li>
          <li>Enable MFA on all critical accounts.</li>
          <li>Enforce password policy and deploy password manager.</li>
          <li>Verify and test backup integrity.</li>
          <li>Deploy endpoint protection on all devices.</li>
          <li>Revoke access for former employees and unneeded accounts.</li>
          <li>Apply for cyber insurance.</li>
        </ol>

        <h3 className={h3Class}>Days 30-90: Hardening</h3>
        <ol className={olClass}>
          <li>Launch employee security awareness training.</li>
          <li>Conduct first simulated phishing exercise.</li>
          <li>Engage MSP or fractional CISO for ongoing support.</li>
          <li>Implement email security (SPF, DKIM, DMARC).</li>
          <li>Review and update vendor contracts with security clauses.</li>
          <li>Begin compliance gap assessment for applicable regulations.</li>
        </ol>

        <h3 className={h3Class}>Days 90-180: Maturation</h3>
        <ol className={olClass}>
          <li>Develop and test incident response plan.</li>
          <li>Conduct first tabletop exercise with leadership team.</li>
          <li>Implement network segmentation for critical systems.</li>
          <li>Deploy vulnerability scanning on a regular cadence.</li>
          <li>Begin board-level cybersecurity reporting.</li>
        </ol>

        <h3 className={h3Class}>Days 180-365: Optimization</h3>
        <ol className={olClass}>
          <li>Achieve compliance with applicable regulatory requirements.</li>
          <li>Implement security monitoring and log aggregation.</li>
          <li>Establish vendor risk management program.</li>
          <li>Refine security budget based on first-year learnings.</li>
          <li>Integrate security metrics into the broader{" "}
            <Link href="/learn/kpi-dashboard-post-acquisition" className="text-apple-accent hover:underline">KPI dashboard</Link>.
          </li>
        </ol>

        <p>
          Cybersecurity in an acquired SME is not about achieving perfection
          it is about systematically reducing risk to a level that
          protects the business, satisfies regulators, and gives your board
          confidence. The companies that treat cybersecurity as a strategic
          priority rather than a back-office cost center are the ones that
          avoid the headline-making breaches that destroy value overnight.
          Start with the fundamentals, build discipline into the process, and
          invest consistently. Your future self, and your investors
          will thank you.
        </p>

        <h2 className={h2Class}>Frequently asked questions</h2>

        <h3 className={h3Class}>How much should an acquired SME spend on cybersecurity annually?</h3>
        <p>
          According to Gartner&rsquo;s IT spending benchmarks, SMEs should allocate 3-7% of their IT budget to security, which translates to roughly $500-$2,000 per employee per year. For a typical 30-person company acquired through a search fund, a realistic first-year cybersecurity budget includes: password manager ($2,400/year), endpoint protection ($3,600/year), backup solution ($6,000/year), security awareness training ($600/year), cyber insurance ($3,000-$5,000/year), and MSP security services ($12,000-$24,000/year), totaling approximately $28,000-$42,000, or roughly $1,000-$1,400 per employee. When presenting this to your{" "}
          <Link href="/learn/board-governance" className="text-apple-accent hover:underline">board</Link>,
          frame it as risk management: the average cost of a data breach for an SME exceeds $120,000, making the annual prevention investment compelling.
        </p>

        <h3 className={h3Class}>What is the single most impactful cybersecurity control I can deploy immediately?</h3>
        <p>
          Multi-factor authentication (MFA). According to Microsoft&rsquo;s security research, MFA blocks over 99.9% of automated credential-stuffing attacks, making it the highest-impact, lowest-cost security control available. Enable MFA on every business-critical account within the first week of ownership: email, banking, CRM, ERP, cloud storage, and accounting software. Use authenticator apps (Microsoft Authenticator, Google Authenticator) or hardware keys (YubiKey) rather than SMS-based codes, which are vulnerable to SIM-swapping attacks. MFA is free or included with most business software platforms, making it the rare security control that costs nothing to deploy and prevents the majority of common attacks.
        </p>

        <h3 className={h3Class}>Does my acquired business need cyber insurance?</h3>
        <p>
          Yes. According to the Insurance Information Institute, standalone cyber insurance is a non-negotiable for any business handling customer data, financial information, or regulated data (HIPAA, PCI-DSS, GDPR). Many general commercial liability policies explicitly exclude cyber incidents, leaving the business fully exposed. Standalone cyber policies cost $1,000-$7,500 per year for most SMEs and cover incident response costs, forensic investigation, legal fees, notification expenses, business interruption losses, and potentially ransom payments. Insurers increasingly require MFA, endpoint protection, and verified backups before issuing policies, completing the first-30-days{" "}
          <Link href="/learn/post-acquisition-technology-audit" className="text-apple-accent hover:underline">technology audit</Link>{" "}
          checklist makes your business insurable and lowers premiums. Apply within the first 30 days of ownership.
        </p>

        <h2 className={h2Class}>Sources</h2>
        <ul className={ulClass}>
          <li>Verizon &mdash; <em>Data Breach Investigations Report (DBIR)</em>, 2024. Thorough analysis of cyberattack patterns, SME vulnerability data, and threat actor methodologies across 10,000+ incidents.</li>
          <li>Gartner &mdash; <em>IT Key Metrics Data: Security Spending Benchmarks</em>, 2024. Industry-standard IT and cybersecurity spending benchmarks by company size, industry, and maturity level.</li>
          <li>Microsoft Security &mdash; <em>Cyber Signals: MFA Effectiveness Data</em>, 2024. Research demonstrating multi-factor authentication&rsquo;s effectiveness at blocking automated credential attacks.</li>
        </ul>
      </div>
    </article>
  );
}
