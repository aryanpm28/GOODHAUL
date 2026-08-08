// GOODHAUL: Sidebar filters (category, rating, stock, price)

import { products } from "../../data/products";
import { formatPrice } from "../../utils/format";

const categories = ["All", ...new Set(products.map((p) => p.category))];
const ratingOptions = [4, 4.5];

function ProductFilters({
  category,
  setCategory,
  minRating,
  setMinRating,
  inStockOnly,
  setInStockOnly,
  maxPrice,
  setMaxPrice,
  priceCeiling,
  badgeFilter,
  setBadgeFilter,
  onReset,
}) {
  return (
    <aside className="space-y-8">
      <div className="flex items-center justify-between">
        <h2 className="font-display font-semibold text-ink">Filters</h2>
        <button onClick={onReset} className="font-mono text-xs text-plum hover:underline">
          Reset
        </button>
      </div>

      {/* Category */}
      <fieldset>
        <legend className="font-mono text-xs uppercase tracking-widest text-ink-soft mb-3">
          Category
        </legend>
        <div className="space-y-2">
          {categories.map((cat) => (
            <label key={cat} className="flex items-center gap-2.5 text-sm text-ink cursor-pointer">
              <input
                type="radio"
                name="category"
                value={cat}
                checked={category === cat}
                onChange={(e) => setCategory(e.target.value)}
                className="accent-plum"
              />
              {cat}
            </label>
          ))}
        </div>
      </fieldset>

      {/* Badge / highlight */}
      <fieldset>
        <legend className="font-mono text-xs uppercase tracking-widest text-ink-soft mb-3">
          Highlights
        </legend>
        <div className="space-y-2">
          {[
            { value: "all", label: "All items" },
            { value: "new", label: "New" },
            { value: "bestseller", label: "Best sellers" },
            { value: "sale", label: "On sale" },
          ].map((option) => (
            <label key={option.value} className="flex items-center gap-2.5 text-sm text-ink cursor-pointer">
              <input
                type="radio"
                name="badge"
                value={option.value}
                checked={badgeFilter === option.value}
                onChange={(e) => setBadgeFilter(e.target.value)}
                className="accent-plum"
              />
              {option.label}
            </label>
          ))}
        </div>
      </fieldset>

      {/* Price */}
      <div>
        <label htmlFor="price-range" className="font-mono text-xs uppercase tracking-widest text-ink-soft mb-3 block">
          Max price: {formatPrice(maxPrice)}
        </label>
        <input
          id="price-range"
          type="range"
          min="0"
          max={priceCeiling}
          step="100"
          value={maxPrice}
          onChange={(e) => setMaxPrice(Number(e.target.value))}
          className="w-full accent-plum"
        />
      </div>

      {/* Rating */}
      <fieldset>
        <legend className="font-mono text-xs uppercase tracking-widest text-ink-soft mb-3">
          Rating
        </legend>
        <div className="space-y-2">
          <label className="flex items-center gap-2.5 text-sm text-ink cursor-pointer">
            <input
              type="radio"
              name="rating"
              checked={minRating === 0}
              onChange={() => setMinRating(0)}
              className="accent-plum"
            />
            Any rating
          </label>
          {ratingOptions.map((r) => (
            <label key={r} className="flex items-center gap-2.5 text-sm text-ink cursor-pointer">
              <input
                type="radio"
                name="rating"
                checked={minRating === r}
                onChange={() => setMinRating(r)}
                className="accent-plum"
              />
              {r}★ &amp; up
            </label>
          ))}
        </div>
      </fieldset>

      {/* Availability */}
      <label className="flex items-center gap-2.5 text-sm text-ink cursor-pointer">
        <input
          type="checkbox"
          checked={inStockOnly}
          onChange={(e) => setInStockOnly(e.target.checked)}
          className="accent-plum"
        />
        In stock only
      </label>
    </aside>
  );
}

export default ProductFilters;
