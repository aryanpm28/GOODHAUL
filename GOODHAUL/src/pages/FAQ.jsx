// GOODHAUL: Frequently asked questions

import InfoPage from "../components/InfoPage/InfoPage";

const FAQS = [
  {
    q: "How long does shipping take?",
    a: "Orders typically ship within 1-2 business days and arrive within 4-6 days, depending on your location.",
  },
  {
    q: "What's your return policy?",
    a: "You can return most items within 7 days of delivery for a full refund, as long as they're unused and in original packaging.",
  },
  {
    q: "Do you ship internationally?",
    a: "Right now we only ship within India. International shipping is on our roadmap.",
  },
  {
    q: "How do I track my order?",
    a: "Once your order ships, you'll receive a tracking link by email. You can also check order status from your account.",
  },
  {
    q: "Is this a real store?",
    a: "No — GOODHAUL is a frontend portfolio project. Products, prices and orders are all illustrative and nothing is actually shipped or charged.",
  },
];

function FAQ() {
  return (
    <InfoPage eyebrow="Help center" title="Frequently asked questions">
      <div className="space-y-6">
        {FAQS.map((item) => (
          <div key={item.q} className="border-b border-line pb-6">
            <h2 className="font-display font-semibold text-ink mb-2">{item.q}</h2>
            <p>{item.a}</p>
          </div>
        ))}
      </div>
    </InfoPage>
  );
}

export default FAQ;
