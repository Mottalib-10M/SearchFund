interface FAQItem {
  question: string;
  answer: string;
}

interface ArticleFAQProps {
  faqs: FAQItem[];
}

export type { FAQItem };

export default function ArticleFAQ({ faqs }: ArticleFAQProps) {
  if (!faqs || faqs.length === 0) return null;

  return (
    <section className="mt-12 pt-8 border-t border-apple-gray-100">
      <h2 className="text-lg font-semibold text-apple-black">
        Frequently Asked Questions
      </h2>
      <dl className="mt-4 space-y-6">
        {faqs.map((faq, i) => (
          <div key={i}>
            <dt className="text-sm font-semibold text-apple-black">
              {faq.question}
            </dt>
            <dd className="mt-1 text-sm text-apple-gray-700 leading-relaxed">
              {faq.answer}
            </dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
