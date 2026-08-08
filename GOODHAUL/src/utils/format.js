// GOODHAUL: Price formatting and order total helpers (GST, shipping)

// Currency + small formatting helpers used across the app.

export function formatPrice(amount) {
  const value = Number(amount) || 0;
  return `₹${value.toLocaleString("en-IN", { maximumFractionDigits: 0 })}`;
}

export function formatDecimal(amount) {
  const value = Number(amount) || 0;
  return `₹${value.toLocaleString("en-IN", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
}

export function slugifyCategory(name) {
  return String(name || "").toLowerCase();
}

// GST + shipping used on cart / checkout so the numbers stay consistent everywhere.
export const GST_RATE = 0.18;
export const FREE_SHIPPING_THRESHOLD = 1999;
export const SHIPPING_FEE = 79;

export function calculateOrderTotals(subtotal) {
  const shipping = subtotal === 0 || subtotal >= FREE_SHIPPING_THRESHOLD ? 0 : SHIPPING_FEE;
  const tax = subtotal * GST_RATE;
  const total = subtotal + shipping + tax;
  return { subtotal, shipping, tax, total };
}
