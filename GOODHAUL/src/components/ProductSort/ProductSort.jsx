// GOODHAUL: Sort dropdown for the products list

function ProductSort({ sort, setSort }) {
  return (
    <select
      value={sort}
      onChange={(e) => setSort(e.target.value)}
      aria-label="Sort products"
      className="border border-line bg-paper-raised rounded-sm px-4 py-3 text-ink text-sm focus:outline-none focus:ring-2 focus:ring-plum/30"
    >
      <option value="default">Sort: Featured</option>
      <option value="low-high">Price: Low to High</option>
      <option value="high-low">Price: High to Low</option>
      <option value="rating">Highest Rated</option>
      <option value="name">Name: A-Z</option>
    </select>
  );
}

export default ProductSort;
