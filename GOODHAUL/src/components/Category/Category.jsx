// GOODHAUL: Single category card

import { Link } from "react-router-dom";

function Category({ icon, name }) {
  return (
    <Link to={`/products?category=${encodeURIComponent(name)}`} className="group block">
      <div className="bg-paper-raised border border-line rounded-sm p-8 text-center transition-all duration-300 group-hover:-translate-y-1 group-hover:shadow-lg group-hover:border-ink">
        <div className="text-4xl mb-4 transition-transform duration-300 group-hover:scale-110" aria-hidden="true">
          {icon}
        </div>
        <h3 className="font-display text-base font-semibold text-ink">{name}</h3>
      </div>
    </Link>
  );
}

export default Category;
