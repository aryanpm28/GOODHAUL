// GOODHAUL: Saved wishlist items

import { useContext } from "react";
import { Link } from "react-router-dom";
import { WishlistContext } from "../context/WishlistContextObject.js";
import { CartContext } from "../context/CartContextObject.js";
import { useToast } from "../hooks/useToast";
import { useMountLoading } from "../hooks/useMountLoading";
import { formatPrice } from "../utils/format";

import Button from "../components/ui/Button";
import EmptyState from "../components/ui/EmptyState";
import Breadcrumb from "../components/ui/Breadcrumb";
import ProductBadge from "../components/ui/ProductBadge";
import ProductCardSkeleton from "../components/ui/ProductCardSkeleton";

function Wishlist() {
  const { wishlist, removeFromWishlist } = useContext(WishlistContext);
  const { addToCart } = useContext(CartContext);
  const { showToast } = useToast();
  const loading = useMountLoading(250);

  const handleRemove = (item) => {
    removeFromWishlist(item.id);
    showToast(`${item.name} removed from wishlist`);
  };

  const moveToCart = (item) => {
    addToCart(item);
    removeFromWishlist(item.id);
    showToast(`${item.name} moved to cart`);
  };

  if (loading) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <Breadcrumb items={[{ label: "Home", to: "/" }, { label: "Wishlist" }]} />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {Array.from({ length: 3 }).map((_, i) => (
            <ProductCardSkeleton key={i} />
          ))}
        </div>
      </div>
    );
  }

  if (wishlist.length === 0) {
    return (
      <div className="max-w-3xl mx-auto px-4 py-10">
        <Breadcrumb items={[{ label: "Home", to: "/" }, { label: "Wishlist" }]} />
        <EmptyState
          icon="♡"
          title="Your wishlist is empty"
          message="Save items you're eyeing so you don't lose track of them."
          actionLabel="Browse products"
          actionTo="/products"
        />
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <Breadcrumb items={[{ label: "Home", to: "/" }, { label: "Wishlist" }]} />

      <div className="flex items-end justify-between flex-wrap gap-4 mb-10">
        <div>
          <p className="font-mono text-xs uppercase tracking-widest text-accent-dark mb-2">
            {wishlist.length} saved
          </p>
          <h1 className="font-display text-4xl font-bold text-ink">Wishlist</h1>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {wishlist.map((item) => (
          <div key={item.id} className="bg-paper-raised border border-line rounded-sm overflow-hidden flex flex-col">
            <Link to={`/products/${item.id}`} className="relative block">
              <img src={item.image} alt={item.name} className="w-full h-56 object-cover" />
              {item.badge && (
                <ProductBadge
                  type={item.badge}
                  price={item.price}
                  originalPrice={item.originalPrice}
                  className="absolute top-3 left-3"
                />
              )}
            </Link>

            <div className="p-5 flex flex-col flex-grow gap-2">
              <Link to={`/products/${item.id}`}>
                <h2 className="font-display font-semibold text-ink hover:text-plum transition-colors">
                  {item.name}
                </h2>
              </Link>
              <p className="font-mono font-semibold text-ink flex items-center gap-2">
                {formatPrice(item.price)}
                {item.originalPrice && item.originalPrice > item.price && (
                  <span className="line-through text-ink-faint text-xs font-normal">
                    {formatPrice(item.originalPrice)}
                  </span>
                )}
              </p>

              <div className="mt-auto pt-4 flex gap-2">
                <Button onClick={() => moveToCart(item)} variant="primary" size="sm" className="flex-1">
                  Move to cart
                </Button>
                <Button
                  onClick={() => handleRemove(item)}
                  variant="danger"
                  size="sm"
                  aria-label={`Remove ${item.name} from wishlist`}
                >
                  Remove
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Wishlist;
