// GOODHAUL: Single product page with related items

import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { products } from "../data/products";
import { CartContext } from "../context/CartContextObject.js";
import { useToast } from "../hooks/useToast";
import { useRecentlyViewed } from "../hooks/useRecentlyViewed";
import { useMountLoading } from "../hooks/useMountLoading";

import ProductCard from "../components/ProductCard/ProductCard";
import Breadcrumb from "../components/ui/Breadcrumb";
import PriceTag from "../components/ui/PriceTag";
import RatingStars from "../components/ui/RatingStars";
import QuantityStepper from "../components/ui/QuantityStepper";
import WishlistButton from "../components/ui/WishlistButton";
import ProductBadge from "../components/ui/ProductBadge";
import ProductDetailsSkeleton from "../components/ui/ProductDetailsSkeleton";
import Button from "../components/ui/Button";
import EmptyState from "../components/ui/EmptyState";

function ProductDetails() {
  const { id } = useParams();
  const { addToCart } = useContext(CartContext);
  const { showToast } = useToast();
  const { markViewed } = useRecentlyViewed();
  const loading = useMountLoading(300);

  const product = products.find((p) => p.id === Number(id));
  const [quantity, setQuantity] = useState(1);
  const [trackedId, setTrackedId] = useState(id);

  // Reset quantity when navigating to a different product, adjusted during
  // render rather than in an effect (React's recommended pattern for this).
  if (trackedId !== id) {
    setTrackedId(id);
    setQuantity(1);
  }

  useEffect(() => {
    if (product) markViewed(product.id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [product?.id]);

  if (loading) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <ProductDetailsSkeleton />
      </div>
    );
  }

  if (!product) {
    return (
      <div className="max-w-3xl mx-auto px-4 py-10">
        <EmptyState
          icon="📦"
          title="Product not found"
          message="This item may have sold out or the link is outdated."
          actionLabel="Back to all products"
          actionTo="/products"
        />
      </div>
    );
  }

  const relatedProducts = products
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 4);

  const handleAddToCart = () => {
    addToCart({ ...product, quantity });
    showToast(`${quantity} × ${product.name} added to cart`);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <Breadcrumb
        items={[
          { label: "Home", to: "/" },
          { label: "Products", to: "/products" },
          { label: product.category, to: `/products?category=${encodeURIComponent(product.category)}` },
          { label: product.name },
        ]}
      />

      <div className="grid lg:grid-cols-2 gap-12">
        {/* Image */}
        <div className="relative">
          <img
            src={product.image}
            alt={product.name}
            className="w-full rounded-sm shadow-xl border border-line"
          />
          <WishlistButton product={product} className="absolute top-4 right-4" />
        </div>

        {/* Details */}
        <div>
          <div className="flex items-center gap-2 flex-wrap">
            <span className="tag-shape inline-flex bg-ink text-paper-raised font-mono text-xs py-1.5">
              {product.category}
            </span>
            {product.badge && (
              <ProductBadge type={product.badge} price={product.price} originalPrice={product.originalPrice} />
            )}
          </div>

          <h1 className="font-display text-4xl font-bold mt-5 text-ink">{product.name}</h1>

          <div className="mt-3">
            <RatingStars rating={product.rating} size="lg" />
          </div>

          <div className="mt-6">
            <PriceTag price={product.price} originalPrice={product.originalPrice} size="lg" />
          </div>

          <p className="mt-6 text-ink-soft leading-8">{product.description}</p>

          <div className="mt-6">
            {product.stock ? (
              <span className="text-moss font-semibold text-sm inline-flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-moss inline-block" /> In stock, ready to ship
              </span>
            ) : (
              <span className="text-rust font-semibold text-sm inline-flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-rust inline-block" /> Out of stock
              </span>
            )}
          </div>

          <div className="flex items-center gap-5 mt-8">
            <QuantityStepper
              quantity={quantity}
              onIncrease={() => setQuantity((q) => q + 1)}
              onDecrease={() => setQuantity((q) => Math.max(1, q - 1))}
            />
          </div>

          <Button
            disabled={!product.stock}
            onClick={handleAddToCart}
            variant="primary"
            size="lg"
            className="w-full mt-6"
          >
            {product.stock ? "Add to cart" : "Unavailable"}
          </Button>
        </div>
      </div>

      {relatedProducts.length > 0 && (
        <div className="mt-24 border-t border-line pt-12">
          <p className="font-mono text-xs uppercase tracking-widest text-accent-dark mb-2">
            You might also like
          </p>
          <h2 className="font-display text-3xl font-bold mb-8 text-ink">Related products</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {relatedProducts.map((item) => (
              <ProductCard key={item.id} product={item} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default ProductDetails;
