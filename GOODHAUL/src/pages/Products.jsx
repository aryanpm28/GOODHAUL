// GOODHAUL: All products page with search, filters, and sort

import { useEffect, useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";

import SearchBar from "../components/SearchBar/SearchBar";
import ProductFilters from "../components/ProductFilters/ProductFilters";
import ProductSort from "../components/ProductSort/ProductSort";
import ProductCard from "../components/ProductCard/ProductCard";
import ProductCardSkeleton from "../components/ui/ProductCardSkeleton";
import EmptyState from "../components/ui/EmptyState";
import Breadcrumb from "../components/ui/Breadcrumb";
import Button from "../components/ui/Button";

import { products } from "../data/products";

const PRICE_CEILING = Math.max(...products.map((p) => p.price));

function Products() {
  const [searchParams, setSearchParams] = useSearchParams();

  const [search, setSearch] = useState(searchParams.get("search") || "");
  const [category, setCategory] = useState(searchParams.get("category") || "All");
  const [sort, setSort] = useState(searchParams.get("sort") || "default");
  const [minRating, setMinRating] = useState(0);
  const [inStockOnly, setInStockOnly] = useState(false);
  const [maxPrice, setMaxPrice] = useState(PRICE_CEILING);
  const [badgeFilter, setBadgeFilter] = useState("all");
  const [filtersOpen, setFiltersOpen] = useState(false);
  const [loading, setLoading] = useState(true);
  const [trackedFilters, setTrackedFilters] = useState([search, category, sort, minRating, inStockOnly, maxPrice, badgeFilter]);

  // Show the skeleton state briefly on mount and whenever filters actually change,
  // adjusting `loading` during render (no synchronous setState inside an effect).
  const currentFilters = [search, category, sort, minRating, inStockOnly, maxPrice, badgeFilter];
  const filtersChanged = currentFilters.some((value, i) => value !== trackedFilters[i]);
  if (filtersChanged) {
    setTrackedFilters(currentFilters);
    if (!loading) setLoading(true);
  }

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 300);
    return () => clearTimeout(timer);
  }, [trackedFilters]);

  // keep the URL shareable/bookmarkable
  useEffect(() => {
    const params = {};
    if (search) params.search = search;
    if (category !== "All") params.category = category;
    if (sort !== "default") params.sort = sort;
    setSearchParams(params, { replace: true });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [search, category, sort]);

  const filteredProducts = useMemo(() => {
    return products
      .filter((product) => {
        const matchesSearch =
          product.name.toLowerCase().includes(search.toLowerCase()) ||
          product.category.toLowerCase().includes(search.toLowerCase());
        const matchesCategory = category === "All" || product.category === category;
        const matchesRating = product.rating >= minRating;
        const matchesStock = !inStockOnly || product.stock;
        const matchesPrice = product.price <= maxPrice;
        const matchesBadge = badgeFilter === "all" || product.badge === badgeFilter;
        return matchesSearch && matchesCategory && matchesRating && matchesStock && matchesPrice && matchesBadge;
      })
      .sort((a, b) => {
        switch (sort) {
          case "low-high":
            return a.price - b.price;
          case "high-low":
            return b.price - a.price;
          case "rating":
            return b.rating - a.rating;
          case "name":
            return a.name.localeCompare(b.name);
          default:
            return 0;
        }
      });
  }, [search, category, sort, minRating, inStockOnly, maxPrice, badgeFilter]);

  const resetFilters = () => {
    setSearch("");
    setCategory("All");
    setSort("default");
    setMinRating(0);
    setInStockOnly(false);
    setMaxPrice(PRICE_CEILING);
    setBadgeFilter("all");
  };

  const filterProps = {
    category,
    setCategory,
    minRating,
    setMinRating,
    inStockOnly,
    setInStockOnly,
    maxPrice,
    setMaxPrice,
    priceCeiling: PRICE_CEILING,
    badgeFilter,
    setBadgeFilter,
    onReset: resetFilters,
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <Breadcrumb items={[{ label: "Home", to: "/" }, { label: "Products" }]} />
      <div className="mb-8">
        <p className="font-mono text-xs uppercase tracking-widest text-accent-dark mb-2">
          {filteredProducts.length} {filteredProducts.length === 1 ? "item" : "items"}
        </p>
        <h1 className="font-display text-4xl font-bold text-ink">All products</h1>
      </div>

      <div className="flex flex-col sm:flex-row gap-3 mb-8">
        <SearchBar value={search} onChange={(e) => setSearch(e.target.value)} />
        <ProductSort sort={sort} setSort={setSort} />
        <Button
          variant="outline"
          size="md"
          className="lg:hidden"
          onClick={() => setFiltersOpen((open) => !open)}
        >
          {filtersOpen ? "Hide filters" : "Filters"}
        </Button>
      </div>

      <div className="grid lg:grid-cols-[240px_1fr] gap-10">
        <div className={`${filtersOpen ? "block" : "hidden"} lg:block`}>
          <ProductFilters {...filterProps} />
        </div>

        <div>
          {loading ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
              {Array.from({ length: 6 }).map((_, i) => (
                <ProductCardSkeleton key={i} />
              ))}
            </div>
          ) : filteredProducts.length === 0 ? (
            <EmptyState
              icon="🔍"
              title="No products match"
              message="Try a different search term or reset your filters to see everything we carry."
              actionLabel="Reset filters"
              onAction={resetFilters}
            />
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Products;
