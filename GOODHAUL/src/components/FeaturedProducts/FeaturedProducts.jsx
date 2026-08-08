// GOODHAUL: Featured products row on home

import { Link } from "react-router-dom";
import ProductCard from "../ProductCard/ProductCard";
import Button from "../ui/Button";
import { products } from "../../data/products";

function FeaturedProducts() {
  const featured = [
    ...products.filter((p) => p.badge === "bestseller"),
    ...products.filter((p) => p.badge !== "bestseller" && p.rating >= 4.7),
  ].slice(0, 8);

  return (
    <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex items-end justify-between mb-10 flex-wrap gap-4">
        <div>
          <p className="font-mono text-xs uppercase tracking-widest text-accent-dark mb-2">
            Top rated
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-ink">
            Featured products
          </h2>
        </div>

        <Button as={Link} to="/products" variant="outline" size="sm">
          View all products →
        </Button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {featured.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}

export default FeaturedProducts;
