import Link from "next/link";

export default function AuthorBox({ locale = "en" }: { locale?: string }) {
  return (
    <div className="mt-12 rounded-xl border border-apple-gray-100 p-6 flex gap-4 items-start">
      <div className="w-12 h-12 rounded-full bg-apple-accent text-white flex items-center justify-center text-lg font-semibold shrink-0">
        SF
      </div>
      <div>
        <p className="font-semibold text-apple-black text-sm">
          SearchFundMarket Editorial Team
        </p>
        <p className="text-sm text-apple-gray-700 mt-1 leading-relaxed">
          Our editorial team combines academic research from Stanford GSB, INSEAD, IESE,
          and HEC with practitioner insights to produce the most comprehensive ETA knowledge
          base in Europe.
        </p>
        <Link
          href={`/${locale}/about/editorial-policy`}
          className="text-sm text-apple-accent hover:underline mt-2 inline-block"
        >
          Read our editorial policy
        </Link>
      </div>
    </div>
  );
}
