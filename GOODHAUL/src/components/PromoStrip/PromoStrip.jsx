// GOODHAUL: Promotional strip under the hero

const PROMOS = [
  { icon: "🚚", title: "Free shipping", copy: "On every order over ₹1,999" },
  { icon: "↩", title: "Easy 7-day returns", copy: "Change your mind, no questions asked" },
  { icon: "🏷", title: "Marked-down deals", copy: "New price drops added weekly" },
  { icon: "🔒", title: "Secure checkout", copy: "Your details stay yours" },
];

function PromoStrip() {
  return (
    <section className="bg-ink text-paper-raised">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 grid grid-cols-2 lg:grid-cols-4 gap-8">
        {PROMOS.map((promo) => (
          <div key={promo.title} className="flex items-start gap-3">
            <span className="text-2xl" aria-hidden="true">
              {promo.icon}
            </span>
            <div>
              <p className="font-display font-semibold text-sm">{promo.title}</p>
              <p className="font-body text-xs text-paper/70 mt-1">{promo.copy}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default PromoStrip;
