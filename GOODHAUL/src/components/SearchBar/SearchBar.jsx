// GOODHAUL: Reusable search input for products page

function SearchBar({ value, onChange, placeholder = "Search products…" }) {
  return (
    <div className="relative flex-1">
      <span className="absolute left-4 top-1/2 -translate-y-1/2 text-ink-faint" aria-hidden="true">
        ⌕
      </span>
      <input
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        aria-label="Search products"
        className="w-full border border-line bg-paper-raised rounded-sm pl-10 pr-4 py-3 text-ink placeholder:text-ink-faint focus:outline-none focus:ring-2 focus:ring-plum/30"
      />
    </div>
  );
}

export default SearchBar;
