import type { FAQ } from "@/data/types";

export function ServiceFAQs({ faqs }: { faqs: FAQ[] }) {
  return (
    <div className="mt-10 border-t border-border pt-8">
      <h3 className="text-xl font-bold text-heading">Frequently Asked Questions</h3>
      <div className="mt-6 space-y-6">
        {faqs.map((faq) => (
          <div key={faq.question}>
            <h4 className="text-base font-semibold text-heading">{faq.question}</h4>
            <p className="mt-2 text-body leading-relaxed">{faq.answer}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
