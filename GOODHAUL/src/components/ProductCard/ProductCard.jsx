// GOODHAUL: Product card with image, price, and actions

import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../../context/CartContextObject.js";
import { useToast } from "../../hooks/useToast";
import PriceTag from "../ui/PriceTag";
import RatingStars from "../ui/RatingStars";
import WishlistButton from "../ui/WishlistButton";
import ProductBadge from "../ui/ProductBadge";
import Button from "../ui/Button";

function ProductCard({ product }) {
  const { id, image, name, price, originalPrice, rating, category, stock, badge } = product;
  const { addToCart } = useContext(CartContext);
  const { showToast } = useToast();

  const handleAddToCart = (e) => {
    e.preventDefault();
    addToCart({ id, image, name, price, originalPrice, category });
    showToast(`${name} added to cart`);
  };

  return (
    <div className="group relative bg-paper-raised border border-line rounded-sm overflow-hidden flex flex-col transition-shadow hover:shadow-lg">
      <Link to={`/products/${id}`} className="block">
        <div className="relative overflow-hidden bg-paper">
          <img
            src={image}
            alt={name}
            loading="lazy"
            className="w-full h-64 object-cover group-hover:scale-105 transition duration-500"
          />

          {!stock && (
            <span className="absolute inset-0 bg-ink/50 flex items-center justify-center">
              <span className="tag-shape bg-paper-raised text-ink text-xs font-mono font-semibold py-1.5">
                OUT OF STOCK
              </span>
            </span>
          )}

          <div className="absolute top-3 left-3 flex flex-col items-start gap-1.5">
            <span className="tag-shape bg-ink text-paper-raised text-[11px] font-mono py-1">
              {category}
            </span>
            {badge && <ProductBadge type={badge} price={price} originalPrice={originalPrice} />}
          </div>
        </div>
      </Link>

      <WishlistButton product={product} className="absolute top-3 right-3" />

      <div className="p-5 flex flex-col flex-grow gap-2">
        <Link to={`/products/${id}`}>
          <h3 className="font-display text-lg font-semibold text-ink leading-snug hover:text-plum transition-colors line-clamp-2">
            {name}
          </h3>
        </Link>

        <RatingStars rating={rating} />

        <div className="mt-auto pt-3 flex items-center justify-between gap-3">
          <PriceTag price={price} originalPrice={originalPrice} />
        </div>

        <Button
          onClick={handleAddToCart}
          disabled={!stock}
          variant="primary"
          size="sm"
          className="w-full mt-2"
        >
          {stock ? "Add to cart" : "Unavailable"}
        </Button>
      </div>
    </div>
  );
}

export default ProductCard;
