import { h1Class, h2Class, h3Class, bodyClass, ulClass, olClass } from "./shared-styles";
import Link from "next/link";

export default function CybersecurityPostAcquisitionArticle() {
  return (
    <article>
      <h1 className={h1Class}>Cybersecurity in Post-Acquisition Integration</h1>
      <div className={bodyClass}>
        <p>Cybersecurity is one of the most overlooked risks in small business acquisitions. Many SMEs have minimal security infrastructure &mdash; shared passwords, outdated software, no backup strategy, and zero incident response planning. For acquirers, the first 90 days of ownership present both the highest cybersecurity risk (ownership transition creates vulnerabilities) and the best opportunity to establish a security baseline that protects the business and its customers.</p>
      </div>

      <h2 className={h2Class}>Immediate Post-Acquisition Actions (Day 1&ndash;30)</h2>
      <div className={bodyClass}>
        <ol className={olClass}>
          <li><strong>Access audit:</strong> Inventory all system access: who has admin credentials, bank account access, cloud services, email, and critical applications.</li>
          <li><strong>Credential reset:</strong> Change all shared passwords. Implement individual accounts for all users. Enable multi-factor authentication (MFA) everywhere.</li>
          <li><strong>Former owner access:</strong> Revoke or modify former owner&apos;s system access according to the transition agreement. Document what access remains.</li>
          <li><strong>Backup verification:</strong> Verify that data backups exist, are current, and can be restored. Test a restore. Many &ldquo;backup systems&rdquo; are non-functional.</li>
          <li><strong>Vendor access review:</strong> Identify all third parties with system access (IT providers, bookkeepers, consultants). Verify their access is appropriate.</li>
          <li><strong>Insurance review:</strong> Confirm cyber insurance coverage. Update the policy for new ownership. Understand coverage limits and exclusions.</li>
        </ol>
      </div>

      <h2 className={h2Class}>Common SME Security Gaps</h2>
      <div className={bodyClass}>
        <ul className={ulClass}>
          <li><strong>Shared credentials:</strong> One password for the entire team. Common in small businesses. Single point of failure.</li>
          <li><strong>No MFA:</strong> Multi-factor authentication not enabled on email, banking, or cloud services. Biggest single vulnerability.</li>
          <li><strong>Outdated software:</strong> Unpatched operating systems, applications, and plugins. Known vulnerabilities remain exploitable.</li>
          <li><strong>No email security:</strong> No spam filtering, no phishing protection, no email authentication (SPF/DKIM/DMARC).</li>
          <li><strong>Untested backups:</strong> Backup systems exist but haven&apos;t been tested. Discovering backup failure during a crisis is catastrophic.</li>
          <li><strong>No incident response plan:</strong> No documented plan for what to do when a breach occurs. Response time directly impacts damage.</li>
        </ul>
      </div>

      <h2 className={h2Class}>Priority Security Investments</h2>
      <div className={bodyClass}>
        <ul className={ulClass}>
          <li><strong>Password manager:</strong> Deploy a team password manager (1Password, Bitwarden). Eliminate shared credentials. $3&ndash;8/user/month.</li>
          <li><strong>MFA everywhere:</strong> Enable multi-factor authentication on all critical systems: email, banking, cloud storage, and applications.</li>
          <li><strong>Endpoint protection:</strong> Deploy endpoint detection and response (EDR) on all devices. Microsoft Defender or CrowdStrike Falcon for SMBs.</li>
          <li><strong>Email security:</strong> Implement email filtering, phishing protection, and employee training. 90%+ of breaches start with email.</li>
          <li><strong>Backup solution:</strong> Implement 3-2-1 backup strategy: 3 copies, 2 media types, 1 offsite. Test restores quarterly.</li>
          <li><strong>Managed security:</strong> Consider a managed security service provider (MSSP) for 24/7 monitoring. $500&ndash;2,000/month for small businesses.</li>
        </ul>
      </div>

      <h2 className={h2Class}>Employee Training</h2>
      <div className={bodyClass}>
        <ul className={ulClass}>
          <li><strong>Phishing awareness:</strong> Regular phishing simulations and training. Employees are the primary attack vector.</li>
          <li><strong>Password hygiene:</strong> Unique passwords for each service. No password reuse. Password manager adoption.</li>
          <li><strong>Social engineering:</strong> Training on phone-based and in-person social engineering attacks. &ldquo;The CEO emailed and asked me to wire money.&rdquo;</li>
          <li><strong>Incident reporting:</strong> Clear process for reporting suspicious activity. No blame culture &mdash; encourage reporting over hiding.</li>
        </ul>
      </div>

      <h2 className={h2Class}>Key Takeaways</h2>
      <div className={bodyClass}>
        <ul className={ulClass}>
          <li>Conduct a full access audit and credential reset within the first 30 days of ownership &mdash; ownership transitions create peak vulnerability</li>
          <li>Multi-factor authentication (MFA) on all critical systems is the single highest-impact security investment for SMEs</li>
          <li>90%+ of breaches start with email &mdash; invest in email security, phishing training, and password management</li>
          <li>Test your backups quarterly &mdash; an untested backup is not a backup</li>
          <li>Budget $500&ndash;2,000/month for managed security services to provide 24/7 monitoring and incident response</li>
        </ul>
      </div>

      <h2 className={h2Class}>Related Resources</h2>
      <ul className={ulClass}>
        <li><Link href="/learn/first-100-days" className="text-apple-accent hover:underline">First 100 Days</Link></li>
        <li><Link href="/learn/post-acquisition-technology-audit" className="text-apple-accent hover:underline">Technology Audit Post-Acquisition</Link></li>
        <li><Link href="/learn/digital-transformation" className="text-apple-accent hover:underline">Digital Transformation</Link></li>
        <li><Link href="/learn/due-diligence-checklist" className="text-apple-accent hover:underline">Due Diligence Checklist</Link></li>
      </ul>

      <h2 className={h2Class}>Sources</h2>
      <ul className={ulClass}>
        <li>CISA, <em>Cybersecurity Best Practices for Small and Medium Businesses</em> (2024)</li>
        <li>Verizon, <em>Data Breach Investigations Report</em> (2024)</li>
        <li>NIST, <em>Cybersecurity Framework for Small Business</em> (2024)</li>
      </ul>
    </article>
  );
}
