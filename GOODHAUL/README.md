# GOODHAUL – Frontend E-Commerce Store

GOODHAUL is a modern frontend-only e-commerce application built using **React**, **Vite**, and **Tailwind CSS**. It provides a complete online shopping experience with product browsing, filtering, search, wishlist, cart, and checkout in a responsive user interface.

---

## Tech Stack

### Frontend
- React 19
- Vite
- Tailwind CSS
- React Router v7
- React Context API
- React Icons

### Storage
- LocalStorage

---

## Features

### Customer
- Browse Products
- Product Categories
- Live Search
- Product Filters & Sorting
- Product Details
- Shopping Cart
- Wishlist
- Recently Viewed Products
- Checkout Page
- Mock Order Confirmation
- Login & Registration UI

### UI & Experience
- Responsive Design
- Skeleton Loading
- Toast Notifications
- Breadcrumb Navigation
- Discount Pricing
- Product Badges (New, Sale, Best Seller)
- Empty States
- Custom 404 Page

---

## Project Structure

```text
GOODHAUL/
│
├── docs/
├── public/
├── src/
│   ├── assets/
│   ├── components/
│   ├── context/
│   ├── data/
│   ├── hooks/
│   ├── pages/
│   ├── utils/
│   ├── App.jsx
│   └── main.jsx
│
├── package.json
└── README.md
```

---

## Running the Project

### Install Dependencies

```bash
npm install
```

### Start Development Server

```bash
npm run dev
```

Runs on:

```
http://localhost:5173
```

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

---

## Data

This project uses static product data stored in:

```text
src/data/products.js
```

Shopping cart, wishlist, and recently viewed products are stored using the browser's **LocalStorage**.

---

## Future Improvements

- Backend Integration
- User Authentication
- Payment Gateway
- Order History
- Product Reviews & Ratings
- Admin Dashboard
- Inventory Management

---

## Author

**Aryan Patil**

Full Stack Java Developer

**Tech Stack:** Java • Spring Boot • React • Node.js • MySQL
