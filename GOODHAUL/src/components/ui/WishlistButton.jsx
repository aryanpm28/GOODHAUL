// GOODHAUL: Heart button to add/remove wishlist items

import { useContext } from "react";
import { FiHeart } from "react-icons/fi";
import { WishlistContext } from "../../context/WishlistContextObject.js";
import { useToast } from "../../hooks/useToast";

function WishlistButton({ product, className = "" }) {
  const { isWishlisted, toggleWishlist } = useContext(WishlistContext);
  const { showToast } = useToast();
  const active = isWishlisted(product.id);

  const handleClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    toggleWishlist(product);
    showToast(active ? "Removed from wishlist" : "Saved to wishlist");
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      aria-pressed={active}
      aria-label={active ? "Remove from wishlist" : "Add to wishlist"}
      className={`flex items-center justify-center w-10 h-10 rounded-full bg-paper-raised shadow-sm transition-transform hover:scale-110 ${className}`}
    >
      <FiHeart className={active ? "text-rust" : "text-ink-faint"} fill={active ? "currentColor" : "none"} aria-hidden="true" />
    </button>
  );
}

export default WishlistButton;
