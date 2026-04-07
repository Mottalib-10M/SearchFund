import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy — SearchFundMarket",
  description:
    "SearchFundMarket privacy policy. Learn how we collect, use, and protect your personal data on our acquisition marketplace.",
  openGraph: {
    title: "Privacy Policy — SearchFundMarket",
    description:
      "How SearchFundMarket collects, uses, and protects your personal data.",
  },
};

export default function PrivacyPage() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-16">
      <h1 className="text-4xl font-semibold text-apple-black tracking-tight">
        Privacy Policy
      </h1>
      <p className="text-sm text-apple-gray-500 mt-2">
        Last updated: April 2025
      </p>

      <div className="mt-10 space-y-10 text-apple-gray-700 leading-relaxed">
        <section>
          <h2 className="text-xl font-semibold text-apple-black">
            1. Introduction
          </h2>
          <p className="mt-3">
            SearchFundMarket (&ldquo;we&rdquo;, &ldquo;our&rdquo;, or
            &ldquo;us&rdquo;) operates the searchfundmarket.com website. This
            Privacy Policy explains how we collect, use, disclose, and safeguard
            your information when you use our platform.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-apple-black">
            2. Information We Collect
          </h2>
          <p className="mt-3">
            We collect information you provide directly when creating an account
            or using our services:
          </p>
          <ul className="list-disc pl-6 mt-3 space-y-2">
            <li>
              <strong>Account information:</strong> name, email address, role
              (searcher, investor, or seller), and profile details.
            </li>
            <li>
              <strong>Listing data:</strong> business information including
              financials, sector, country, and description.
            </li>
            <li>
              <strong>Communications:</strong> messages sent through the
              platform, inquiries, and connection requests.
            </li>
            <li>
              <strong>Usage data:</strong> pages viewed, features used, and
              technical information such as browser type and IP address.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-apple-black">
            3. How We Use Your Information
          </h2>
          <ul className="list-disc pl-6 mt-3 space-y-2">
            <li>To provide, maintain, and improve our platform.</li>
            <li>
              To facilitate connections between searchers, investors, and
              sellers.
            </li>
            <li>
              To send you service-related emails (account verification,
              notifications, inquiries).
            </li>
            <li>To detect and prevent fraud or abuse.</li>
            <li>To comply with legal obligations.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-apple-black">
            4. Information Sharing
          </h2>
          <p className="mt-3">
            We do not sell your personal data. We may share information in the
            following circumstances:
          </p>
          <ul className="list-disc pl-6 mt-3 space-y-2">
            <li>
              <strong>Profile visibility:</strong> your public profile (name,
              role, bio, and professional details) is visible to other registered
              users.
            </li>
            <li>
              <strong>Service providers:</strong> we use third-party services for
              email delivery, hosting, and analytics. These providers process
              data on our behalf under strict contractual obligations.
            </li>
            <li>
              <strong>Legal requirements:</strong> we may disclose information if
              required by law or in response to valid legal requests.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-apple-black">
            5. Data Security
          </h2>
          <p className="mt-3">
            We implement appropriate technical and organisational measures to
            protect your personal data, including encryption in transit (TLS),
            secure authentication, and access controls. However, no method of
            transmission over the Internet is 100% secure.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-apple-black">
            6. Data Retention
          </h2>
          <p className="mt-3">
            We retain your data for as long as your account is active or as
            needed to provide our services. You may request deletion of your
            account and associated data at any time by contacting us.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-apple-black">
            7. Your Rights (GDPR)
          </h2>
          <p className="mt-3">
            If you are located in the European Economic Area, you have the right
            to:
          </p>
          <ul className="list-disc pl-6 mt-3 space-y-2">
            <li>Access the personal data we hold about you.</li>
            <li>Request correction of inaccurate data.</li>
            <li>Request deletion of your data.</li>
            <li>Object to or restrict processing of your data.</li>
            <li>Request portability of your data.</li>
            <li>
              Withdraw consent at any time where processing is based on consent.
            </li>
          </ul>
          <p className="mt-3">
            To exercise any of these rights, please contact us at{" "}
            <a
              href="mailto:privacy@searchfundmarket.com"
              className="text-apple-accent hover:underline"
            >
              privacy@searchfundmarket.com
            </a>
            .
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-apple-black">
            8. Cookies
          </h2>
          <p className="mt-3">
            We use the following types of cookies:
          </p>
          <ul className="list-disc pl-6 mt-3 space-y-2">
            <li>
              <strong>Essential cookies:</strong> required to keep you signed in
              and to ensure the platform functions correctly. These cannot be
              disabled.
            </li>
            <li>
              <strong>Analytics cookies:</strong> we use Google Analytics 4 to
              understand how visitors interact with our platform (pages visited,
              session duration, general location). Google Analytics uses cookies
              such as <code className="text-sm bg-apple-gray-100 px-1 rounded">_ga</code> and{" "}
              <code className="text-sm bg-apple-gray-100 px-1 rounded">_ga_*</code>. This
              data is aggregated and anonymous.
            </li>
          </ul>
          <p className="mt-3">
            When you first visit our site, a cookie consent banner lets you
            choose which cookies to accept. You can change your preference at any
            time by clearing your browser&rsquo;s local storage for this site.
            Analytics cookies are only loaded after you give explicit consent. We
            do not use advertising or tracking cookies.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-apple-black">
            9. Changes to This Policy
          </h2>
          <p className="mt-3">
            We may update this Privacy Policy from time to time. We will notify
            you of significant changes by posting a notice on the platform or
            sending you an email.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-apple-black">
            10. Contact
          </h2>
          <p className="mt-3">
            If you have questions about this Privacy Policy, please contact us
            at{" "}
            <a
              href="mailto:privacy@searchfundmarket.com"
              className="text-apple-accent hover:underline"
            >
              privacy@searchfundmarket.com
            </a>
            .
          </p>
        </section>
      </div>
    </div>
  );
}
