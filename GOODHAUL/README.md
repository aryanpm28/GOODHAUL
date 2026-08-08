# GOODHAUL — Frontend E-Commerce Store

A fully responsive, frontend-only e-commerce storefront built with React,
React Router and Tailwind CSS. Built as a portfolio project to demonstrate a
complete shopping flow — browse, filter, search, view details, cart, wishlist
and checkout — with clean, reusable, well-organized React code and a design
system of its own rather than an out-of-the-box template look.

> **Note:** This is a frontend-only demo. There is no backend, no real
> payment processing, and no real accounts. Product data is static and lives
> in `src/data/products.js`. Cart, wishlist and recently-viewed items persist
> to the browser's `localStorage` so they survive a refresh.

## Screenshots

| Home | Products |
|---|---|
| ![Home page](docs/screenshots/home.png) | ![Products listing with filters and badges](docs/screenshots/products.png) |

| Product details | Cart |
|---|---|
| ![Product details page](docs/screenshots/product-details.png) | ![Cart page](docs/screenshots/cart.png) |

| Order confirmation | Mobile |
|---|---|
| ![Checkout success page](docs/screenshots/checkout-success.png) | ![Mobile home page](docs/screenshots/mobile-home.png) |

## Features

**Shopping flow**
- Home page with hero + search, promotional strip, shop-by-category grid,
  featured/best-seller products, and a "recently viewed" rail
- Product listing with live search, category / price / rating / stock /
  highlight (New, Sale, Best seller) filters, sorting, and a shareable,
  bookmarkable URL (`?search=&category=&sort=`)
- Product details with breadcrumb navigation, quantity selector, stock
  status, and related products
- Cart with quantity controls, free-shipping progress, GST + shipping
  calculation, and per-item discount pricing
- Wishlist with move-to-cart and remove
- Checkout with a validated shipping form, payment method selection (UI
  only), an order summary, and a mock order confirmation with a generated
  order ID
- Login / Register with validated forms and a password visibility toggle
  (UI only — no real authentication)
- About, Contact, FAQ, Terms, Privacy and a custom 404 page

**Polish**
- **Product badges** — New / Best seller / Sale (with an automatically
  computed discount percentage), filterable from the product listing
- **Breadcrumb navigation** on every product-related page (listing, details,
  cart, checkout, wishlist)
- **Discount-aware pricing** everywhere a product appears — card, details,
  cart line items, and the checkout summary all show the struck-through
  original price next to the current price when an item is on sale
- **Toast notifications** for every action that changes state — add to
  cart, remove from cart, clear cart, add/remove wishlist, move to cart
- **Loading and empty states on every page** — skeleton placeholders while
  data "loads" (Products, Product details, Cart, Wishlist) and a proper
  empty state (with an icon, message and call-to-action) instead of blank
  space or plain text, for empty cart/wishlist, no search results, and an
  unmatched product/route
- Toast rail, cart/wishlist counters, and localStorage persist across
  refreshes
- Fully responsive from 320px mobile up through large desktop

## Tech stack

- [React 19](https://react.dev/) + [Vite](https://vitejs.dev/)
- [React Router v7](https://reactrouter.com/) for routing
- [Tailwind CSS v4](https://tailwindcss.com/) for styling, with a custom
  design-token theme (see `src/index.css`)
- [react-icons](https://react-icons.github.io/react-icons/) for iconography
- Plain React Context + `localStorage` for state (no external state library
  needed for a project this size)

## Design system

The store uses a small custom identity ("GOODHAUL") built around the idea of
a physical price tag — badges, price pills and toasts are rendered as a
perforated tag shape (see `.tag-shape` in `src/index.css`), paired with
Space Grotesk for headings, Inter for body copy, and IBM Plex Mono for
prices and labels.

## Project structure

```
src/
├── assets/              # static images/icons
├── components/
│   ├── ui/               # Button, Input, PriceTag, ProductBadge, skeletons, etc.
│   └── Navbar/, Footer/, Hero/, Categories/, ProductCard/, ...
├── context/              # Cart, Wishlist and Toast context + providers
├── data/                 # static product & category data
├── hooks/                # useLocalStorage, useToast, useRecentlyViewed, useMountLoading
├── pages/                # one component per route
├── utils/                # formatting & pricing helpers
├── App.jsx
└── main.jsx
```

## Getting started

```bash
npm install
npm run dev       # start the dev server
npm run build      # production build
npm run preview    # preview the production build locally
npm run lint        # run ESLint
```

## Possible next steps

- Live search suggestions / recent search history
- Product comparison and quick-view modal
- Dark mode
- Swap the static product data for a real backend / headless commerce API
