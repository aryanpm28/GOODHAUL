// GOODHAUL: Recently viewed products section

import { useRecentlyViewed } from "../../hooks/useRecentlyViewed";
import { products } from "../../data/products";
import ProductCard from "../ProductCard/ProductCard";

function RecentlyViewed() {
  const { recentIds } = useRecentlyViewed();

  const items = recentIds
    .map((id) => products.find((p) => p.id === id))
    .filter(Boolean);

  if (items.length === 0) return null;

  return (
    <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-t border-line">
      <p className="font-mono text-xs uppercase tracking-widest text-accent-dark mb-2 mt-10">
        Pick up where you left off
      </p>
      <h2 className="font-display text-3xl font-bold text-ink mb-8">Recently viewed</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {items.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}

export default RecentlyViewed;
