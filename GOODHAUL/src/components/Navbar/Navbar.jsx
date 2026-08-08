// GOODHAUL: Top navigation bar (links, cart, wishlist)

import { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { FiHeart, FiShoppingBag, FiMenu, FiX } from "react-icons/fi";
import { CartContext } from "../../context/CartContextObject.js";
import { WishlistContext } from "../../context/WishlistContextObject.js";

const LINKS = [
  { to: "/", label: "Home" },
  { to: "/products", label: "Products" },
];

function Navbar() {
  const { cart } = useContext(CartContext);
  const { wishlist } = useContext(WishlistContext);
  const [menuOpen, setMenuOpen] = useState(false);

  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  const linkClass = ({ isActive }) =>
    `font-body text-sm font-medium transition-colors hover:text-plum ${
      isActive ? "text-plum" : "text-ink"
    }`;

  return (
    <header className="sticky top-0 z-50 bg-paper-raised border-b border-line">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-6">
        <Link to="/" className="font-display text-2xl font-bold text-ink tracking-tight shrink-0">
          GOOD<span className="text-accent-dark">HAUL</span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8" aria-label="Primary">
          {LINKS.map((link) => (
            <NavLink key={link.to} to={link.to} className={linkClass} end={link.to === "/"}>
              {link.label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-5">
          <Link to="/wishlist" className="relative font-body text-sm font-medium text-ink hover:text-plum transition-colors inline-flex items-center gap-1.5" aria-label="Wishlist">
            <FiHeart aria-hidden="true" /> Wishlist
            {wishlist.length > 0 && (
              <span className="absolute -top-2 -right-3 bg-rust text-paper-raised text-[10px] font-mono rounded-full w-4 h-4 flex items-center justify-center">
                {wishlist.length}
              </span>
            )}
          </Link>

          <Link to="/cart" className="relative font-body text-sm font-medium text-ink hover:text-plum transition-colors inline-flex items-center gap-1.5" aria-label="Cart">
            <FiShoppingBag aria-hidden="true" /> Cart
            {totalItems > 0 && (
              <span className="absolute -top-2 -right-3 bg-accent text-ink text-[10px] font-mono rounded-full w-4 h-4 flex items-center justify-center font-semibold">
                {totalItems}
              </span>
            )}
          </Link>

          <Link
            to="/login"
            className="bg-ink text-paper-raised px-5 py-2.5 text-sm font-semibold rounded-sm hover:bg-plum transition-colors"
          >
            Log in
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setMenuOpen((open) => !open)}
          className="md:hidden text-2xl text-ink"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
        >
          {menuOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-paper-raised border-t border-line">
          <nav className="flex flex-col p-6 gap-5" aria-label="Mobile">
            {LINKS.map((link) => (
              <Link key={link.to} to={link.to} onClick={() => setMenuOpen(false)} className="font-body text-ink font-medium">
                {link.label}
              </Link>
            ))}
            <Link to="/wishlist" onClick={() => setMenuOpen(false)} className="font-body text-ink font-medium">
              Wishlist ({wishlist.length})
            </Link>
            <Link to="/cart" onClick={() => setMenuOpen(false)} className="font-body text-ink font-medium">
              Cart ({totalItems})
            </Link>
            <Link
              to="/login"
              onClick={() => setMenuOpen(false)}
              className="bg-ink text-paper-raised px-5 py-2.5 text-sm font-semibold rounded-sm text-center"
            >
              Log in
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}

export default Navbar;
