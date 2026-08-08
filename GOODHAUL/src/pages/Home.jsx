// GOODHAUL: Home page — hero, categories, featured products

import Hero from "../components/Hero/Hero";
import PromoStrip from "../components/PromoStrip/PromoStrip";
import Categories from "../components/Categories/Categories";
import FeaturedProducts from "../components/FeaturedProducts/FeaturedProducts";
import RecentlyViewed from "../components/RecentlyViewed/RecentlyViewed";

function Home() {
  return (
    <>
      <Hero />
      <PromoStrip />
      <Categories />
      <FeaturedProducts />
      <RecentlyViewed />
    </>
  );
}

export default Home;
