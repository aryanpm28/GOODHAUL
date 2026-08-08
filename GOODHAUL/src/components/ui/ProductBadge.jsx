// GOODHAUL: Sale / new / discount badge on products

const BADGE_STYLES = {
  new: { label: "New", className: "bg-plum text-paper-raised" },
  bestseller: { label: "Best seller", className: "bg-accent text-ink" },
  sale: { label: "Sale", className: "bg-rust text-paper-raised" },
};

// Renders a small tag-shaped ribbon for New / Best Seller / Sale products.
// When the badge is "sale" and both price + originalPrice are given, shows
// the exact discount percentage instead of the generic "Sale" word.
function ProductBadge({ type, price, originalPrice, className = "" }) {
  const config = BADGE_STYLES[type];
  if (!config) return null;

  let label = config.label;
  if (type === "sale" && originalPrice && originalPrice > price) {
    const percentOff = Math.round(((originalPrice - price) / originalPrice) * 100);
    label = `${percentOff}% off`;
  }

  return (
    <span
      className={`tag-shape inline-flex ${config.className} font-mono text-[11px] font-semibold py-1 ${className}`}
    >
      {label}
    </span>
  );
}

export default ProductBadge;
