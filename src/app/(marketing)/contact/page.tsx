import type { Metadata } from "next";
import Link from "next/link";
import { Mail, MessageSquare } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact Us — SearchFundMarket",
  description:
    "Get in touch with the SearchFundMarket team. Questions about listings, partnerships, or the platform? We're here to help.",
  openGraph: {
    title: "Contact SearchFundMarket",
    description:
      "Reach out to the SearchFundMarket team for questions about listings, partnerships, or the platform.",
  },
};

export default function ContactPage() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-16">
      <h1 className="text-4xl font-semibold text-apple-black tracking-tight">
        Contact us
      </h1>
      <p className="text-apple-gray-700 mt-6 text-lg leading-relaxed">
        Have a question about the platform, a listing, or a partnership
        opportunity? We&apos;d love to hear from you.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
        <div className="rounded-2xl border border-apple-gray-300/50 bg-white p-8">
          <div className="w-11 h-11 rounded-xl bg-apple-accent/10 flex items-center justify-center">
            <Mail size={22} strokeWidth={1.5} className="text-apple-accent" />
          </div>
          <h2 className="text-lg font-semibold text-apple-black mt-5">
            Email us
          </h2>
          <p className="text-sm text-apple-gray-700 mt-2 leading-relaxed">
            For general inquiries, partnerships, or press.
          </p>
          <a
            href="mailto:contact@searchfundmarket.com"
            className="text-apple-accent text-sm font-medium mt-4 inline-block hover:underline"
          >
            contact@searchfundmarket.com
          </a>
        </div>

        <div className="rounded-2xl border border-apple-gray-300/50 bg-white p-8">
          <div className="w-11 h-11 rounded-xl bg-apple-accent/10 flex items-center justify-center">
            <MessageSquare
              size={22}
              strokeWidth={1.5}
              className="text-apple-accent"
            />
          </div>
          <h2 className="text-lg font-semibold text-apple-black mt-5">
            Platform support
          </h2>
          <p className="text-sm text-apple-gray-700 mt-2 leading-relaxed">
            Need help with your account, a listing, or a technical issue? Sign
            in and message us from your dashboard.
          </p>
          <Link
            href="/auth/signin"
            className="text-apple-accent text-sm font-medium mt-4 inline-block hover:underline"
          >
            Sign in to your account
          </Link>
        </div>
      </div>

      <section className="mt-16 pt-12 border-t border-apple-gray-100">
        <h2 className="text-2xl font-semibold text-apple-black tracking-tight">
          Frequently asked
        </h2>
        <div className="mt-6 space-y-6">
          <div>
            <h3 className="text-sm font-semibold text-apple-black">
              How long does it take to get a response?
            </h3>
            <p className="text-sm text-apple-gray-700 mt-1 leading-relaxed">
              We typically respond within 24 to 48 hours on business days.
            </p>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-apple-black">
              Can I list my business for free?
            </h3>
            <p className="text-sm text-apple-gray-700 mt-1 leading-relaxed">
              Yes. Creating an account and listing a business on SearchFundMarket
              is completely free.
            </p>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-apple-black">
              I&apos;m an investor. How do I find searchers to back?
            </h3>
            <p className="text-sm text-apple-gray-700 mt-1 leading-relaxed">
              Sign up as an investor, then browse our{" "}
              <Link
                href="/searchers"
                className="text-apple-accent hover:underline"
              >
                searcher directory
              </Link>{" "}
              to find entrepreneurs looking for capital.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
