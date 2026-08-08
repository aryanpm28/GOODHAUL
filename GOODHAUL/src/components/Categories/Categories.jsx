// GOODHAUL: Category grid on the home page

import Category from "../Category/Category";
import { categories } from "../../data/categories";

function Categories() {
  return (
    <section className="py-20 bg-paper">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <p className="font-mono text-xs uppercase tracking-widest text-accent-dark mb-2">
            Departments
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-ink">
            Shop by category
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
          {categories.map((category) => (
            <Category key={category.id} icon={category.icon} name={category.name} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Categories;
