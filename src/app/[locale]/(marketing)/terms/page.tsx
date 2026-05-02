import type { Metadata } from "next";
import { buildMetadata } from "@/lib/meta-snippets";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  return buildMetadata("terms", locale);
}

export default function TermsPage() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-16">
      <h1 className="text-4xl font-semibold text-apple-black tracking-tight">
        Terms of Service
      </h1>
      <p className="text-sm text-apple-gray-500 mt-2">
        Last updated: April 2025
      </p>

      <div className="mt-10 space-y-10 text-apple-gray-700 leading-relaxed">
        <section>
          <h2 className="text-xl font-semibold text-apple-black">
            1. Acceptance of Terms
          </h2>
          <p className="mt-3">
            By accessing or using SearchFundMarket (&ldquo;the Platform&rdquo;),
            you agree to be bound by these Terms of Service. If you do not agree,
            you may not use the Platform.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-apple-black">
            2. Description of Service
          </h2>
          <p className="mt-3">
            SearchFundMarket is an online marketplace that connects search fund
            entrepreneurs, investors, and business sellers. We provide a platform
            for listing businesses for sale, discovering acquisition
            opportunities, and facilitating introductions between parties. We do
            not act as a broker, advisor, or intermediary in any transaction.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-apple-black">
            3. Account Registration
          </h2>
          <ul className="list-disc pl-6 mt-3 space-y-2">
            <li>
              You must provide accurate and complete information when creating an
              account.
            </li>
            <li>
              You are responsible for maintaining the confidentiality of your
              account credentials.
            </li>
            <li>
              You must be at least 18 years old to create an account.
            </li>
            <li>
              One person may not maintain multiple accounts without prior
              approval.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-apple-black">
            4. User Conduct
          </h2>
          <p className="mt-3">You agree not to:</p>
          <ul className="list-disc pl-6 mt-3 space-y-2">
            <li>
              Post false, misleading, or fraudulent information about a business
              or your identity.
            </li>
            <li>Use the Platform for any unlawful purpose.</li>
            <li>
              Harass, abuse, or harm other users through the messaging system.
            </li>
            <li>
              Scrape, crawl, or use automated means to access the Platform
              without permission.
            </li>
            <li>
              Attempt to gain unauthorised access to other accounts or Platform
              systems.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-apple-black">
            5. Listings and Content
          </h2>
          <ul className="list-disc pl-6 mt-3 space-y-2">
            <li>
              Sellers are solely responsible for the accuracy of information in
              their listings.
            </li>
            <li>
              SearchFundMarket does not verify, endorse, or guarantee the
              accuracy of any listing information, including financial data.
            </li>
            <li>
              We reserve the right to remove any listing or content that violates
              these Terms or is deemed inappropriate.
            </li>
            <li>
              By posting content on the Platform, you grant us a non-exclusive,
              worldwide licence to display it in connection with the service.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-apple-black">
            6. No Financial or Legal Advice
          </h2>
          <p className="mt-3">
            SearchFundMarket does not provide financial, legal, or investment
            advice. All information on the Platform is for informational purposes
            only. You should consult qualified professionals before making any
            acquisition or investment decision.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-apple-black">
            7. Limitation of Liability
          </h2>
          <p className="mt-3">
            To the fullest extent permitted by law, SearchFundMarket shall not be
            liable for any indirect, incidental, special, consequential, or
            punitive damages arising from your use of the Platform, including but
            not limited to losses resulting from transactions initiated through
            the Platform.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-apple-black">
            8. Intellectual Property
          </h2>
          <p className="mt-3">
            All content, branding, and technology on the Platform are owned by
            SearchFundMarket or its licensors. You may not copy, modify, or
            distribute any part of the Platform without our written permission.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-apple-black">
            9. Termination
          </h2>
          <p className="mt-3">
            We may suspend or terminate your account at any time if you violate
            these Terms or engage in conduct that is harmful to other users or
            the Platform. You may delete your account at any time by contacting
            us.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-apple-black">
            10. Governing Law
          </h2>
          <p className="mt-3">
            These Terms are governed by and construed in accordance with the laws
            of France. Any disputes arising from these Terms shall be subject to
            the exclusive jurisdiction of the courts of Paris, France.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-apple-black">
            11. Changes to These Terms
          </h2>
          <p className="mt-3">
            We may update these Terms from time to time. Continued use of the
            Platform after changes are posted constitutes acceptance of the
            revised Terms.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-apple-black">
            12. Contact
          </h2>
          <p className="mt-3">
            If you have questions about these Terms, please reach out via our{" "}
            <a
              href="/contact"
              className="text-apple-accent hover:underline"
            >
              contact page
            </a>
            .
          </p>
        </section>
      </div>
    </div>
  );
}
