// GOODHAUL: Site footer with shop and company links

import { Link } from "react-router-dom";

const FOOTER_LINKS = {
  Shop: [
    { label: "All products", to: "/products" },
    { label: "Wishlist", to: "/wishlist" },
    { label: "Cart", to: "/cart" },
  ],
  Account: [
    { label: "Log in", to: "/login" },
    { label: "Create account", to: "/register" },
  ],
  Store: [
    { label: "About", to: "/about" },
    { label: "Contact", to: "/contact" },
    { label: "FAQ", to: "/faq" },
    { label: "Terms & conditions", to: "/terms" },
    { label: "Privacy policy", to: "/privacy" },
  ],
};

function Footer() {
  return (
    <footer className="bg-plum text-paper-raised mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
        <div className="lg:col-span-1">
          <h2 className="font-display text-2xl font-bold mb-3">
            GOOD<span className="text-accent">HAUL</span>
          </h2>
          <p className="text-paper/70 text-sm leading-6">
            Shoes, electronics, fashion and watches — hand-picked and clearly
            tagged. Fast shipping, honest prices.
          </p>
        </div>

        {Object.entries(FOOTER_LINKS).map(([heading, links]) => (
          <div key={heading}>
            <h3 className="font-mono text-xs uppercase tracking-widest text-accent mb-4">
              {heading}
            </h3>
            <ul className="space-y-2.5">
              {links.map((link) => (
                <li key={link.label}>
                  <Link to={link.to} className="text-sm text-paper/80 hover:text-paper-raised transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="border-t border-plum-soft py-6 text-center text-xs text-paper/60 font-mono">
        © 2026 GOODHAUL. Built as a frontend portfolio project — all products are illustrative.
      </div>
    </footer>
  );
}

export default Footer;
