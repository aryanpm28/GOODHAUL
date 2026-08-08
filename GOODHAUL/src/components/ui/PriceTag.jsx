// GOODHAUL: Formatted price with optional sale strikethrough

import { formatPrice } from "../../utils/format";

// The signature visual motif of the store: a physical price tag,
// complete with a punched hole, rendered in the mono utility face.
function PriceTag({ price, originalPrice, size = "md", tone = "light" }) {
  const isDiscounted = originalPrice && originalPrice > price;
  const sizeClasses = size === "lg" ? "text-2xl py-2" : "text-base py-1.5";
  const toneClasses =
    tone === "dark"
      ? "bg-ink text-paper-raised"
      : "bg-accent text-ink";

  return (
    <span
      className={`tag-shape inline-flex items-center gap-2 font-mono font-medium ${sizeClasses} ${toneClasses}`}
    >
      {formatPrice(price)}
      {isDiscounted && (
        <span className="text-xs line-through opacity-60">
          {formatPrice(originalPrice)}
        </span>
      )}
    </span>
  );
}

export default PriceTag;
