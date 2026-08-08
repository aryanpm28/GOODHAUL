// GOODHAUL: Search box used on the home page

import { useState } from "react";
import { useNavigate } from "react-router-dom";

function HomeSearch() {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    if (!search.trim()) return;
    navigate(`/products?search=${encodeURIComponent(search.trim())}`);
  };

  return (
    <form onSubmit={handleSearch} className="flex w-full max-w-md border border-ink bg-paper-raised">
      <input
        type="text"
        placeholder="Search for shoes, watches, gadgets…"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        aria-label="Search products"
        className="flex-1 px-5 py-4 text-ink bg-transparent outline-none placeholder:text-ink-faint"
      />
      <button
        type="submit"
        className="bg-ink text-paper-raised font-mono text-sm font-medium px-6 hover:bg-plum transition-colors"
      >
        Search
      </button>
    </form>
  );
}

export default HomeSearch;
