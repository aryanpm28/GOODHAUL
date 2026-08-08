// GOODHAUL: Home page hero banner

import { Link } from "react-router-dom";
import HomeSearch from "../HomeSearch/HomeSearch";
import Button from "../ui/Button";

function Hero() {
  return (
    <section className="bg-paper border-b border-line overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-14 items-center">
          {/* Left: copy */}
          <div>
            <span className="tag-shape inline-flex bg-accent text-ink font-mono text-xs font-medium py-1.5">
              New drops every Friday
            </span>

            <h1 className="mt-6 font-display text-5xl sm:text-6xl lg:text-[4.25rem] font-bold leading-[1.05] text-ink">
              Good gear,
              <br />
              <span className="relative inline-block">
                honestly priced.
                <span
                  className="absolute left-0 -bottom-1 w-full h-3 bg-accent -z-10"
                  aria-hidden="true"
                />
              </span>
            </h1>

            <p className="mt-6 text-lg text-ink-soft leading-8 max-w-md">
              Shoes, electronics, fashion and watches — hand-picked, clearly
              tagged, and shipped fast. No markup games, no fine print.
            </p>

            <div className="mt-8">
              <HomeSearch />
            </div>

            <div className="mt-8 flex flex-wrap gap-4">
              <Button as={Link} to="/products" variant="primary" size="lg">
                Shop now
              </Button>
              <Button as={Link} to="/products?sort=rating" variant="outline" size="lg">
                Explore top rated
              </Button>
            </div>
          </div>

          {/* Right: image with signature tag sticker */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative w-full max-w-md">
              <img
                src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=900"
                alt="Featured smart watch on a plain backdrop"
                className="w-full rounded-sm shadow-2xl"
              />

              <div className="absolute -top-5 -left-5 rotate-[-8deg] tag-shape bg-plum text-paper-raised font-mono text-sm py-2 shadow-lg">
                Free shipping ₹1999+
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
