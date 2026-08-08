// GOODHAUL: Checkout form and order confirmation

import { useContext, useState } from "react";
import { Navigate, Link } from "react-router-dom";
import { CartContext } from "../context/CartContextObject.js";
import { formatPrice, formatDecimal, calculateOrderTotals } from "../utils/format";

import Input from "../components/ui/Input";
import Button from "../components/ui/Button";
import Breadcrumb from "../components/ui/Breadcrumb";

const PAYMENT_METHODS = [
  { id: "cod", label: "Cash on delivery" },
  { id: "card", label: "Credit / debit card" },
  { id: "upi", label: "UPI" },
  { id: "netbanking", label: "Net banking" },
];

const INITIAL_FORM = {
  fullName: "",
  email: "",
  phone: "",
  address: "",
  city: "",
  state: "",
  pincode: "",
};

function validate(form) {
  const errors = {};
  if (!form.fullName.trim()) errors.fullName = "Enter your full name";
  if (!/^\S+@\S+\.\S+$/.test(form.email)) errors.email = "Enter a valid email address";
  if (!/^\d{10}$/.test(form.phone)) errors.phone = "Enter a 10-digit phone number";
  if (!form.address.trim()) errors.address = "Enter your delivery address";
  if (!form.city.trim()) errors.city = "Enter your city";
  if (!form.state.trim()) errors.state = "Enter your state";
  if (!/^\d{6}$/.test(form.pincode)) errors.pincode = "Enter a 6-digit PIN code";
  return errors;
}

function generateOrderId() {
  return `GH-${Date.now().toString().slice(-8)}`;
}

function Checkout() {
  const { cart, clearCart } = useContext(CartContext);
  const [form, setForm] = useState(INITIAL_FORM);
  const [errors, setErrors] = useState({});
  const [payment, setPayment] = useState("cod");
  const [order, setOrder] = useState(null);

  if (cart.length === 0 && !order) {
    return <Navigate to="/cart" replace />;
  }

  const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const { shipping, tax, total } = calculateOrderTotals(subtotal);

  const handleChange = (field) => (e) => {
    setForm((prev) => ({ ...prev, [field]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate(form);
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length > 0) return;

    const orderId = generateOrderId();
    setOrder({
      id: orderId,
      items: cart,
      total,
      name: form.fullName,
      payment,
    });
    clearCart();
  };

  if (order) {
    return (
      <div className="max-w-2xl mx-auto px-4 py-20 text-center">
        <div className="text-6xl mb-6" aria-hidden="true">
          🎉
        </div>
        <h1 className="font-display text-4xl font-bold text-ink mb-3">Thanks, {order.name.split(" ")[0]}!</h1>
        <p className="text-ink-soft mb-8">
          Your order has been placed. We've sent a confirmation to your email — this is a demo
          store, so nothing actually ships, but here's your receipt.
        </p>

        <div className="bg-paper-raised border border-line rounded-sm p-6 text-left">
          <div className="flex justify-between items-center mb-4">
            <span className="font-mono text-xs uppercase tracking-widest text-ink-soft">Order ID</span>
            <span className="tag-shape bg-accent text-ink font-mono text-sm py-1">{order.id}</span>
          </div>
          <div className="tear-divider my-4" />
          {order.items.map((item) => (
            <div key={item.id} className="flex justify-between text-sm py-1.5">
              <span className="text-ink-soft">
                {item.name} × {item.quantity}
              </span>
              <span className="font-mono text-ink">{formatPrice(item.price * item.quantity)}</span>
            </div>
          ))}
          <div className="tear-divider my-4" />
          <div className="flex justify-between font-bold text-ink">
            <span>Total paid</span>
            <span className="font-mono">{formatDecimal(order.total)}</span>
          </div>
          <p className="text-xs text-ink-faint mt-4 font-mono">
            Payment method: {PAYMENT_METHODS.find((p) => p.id === order.payment)?.label}
          </p>
        </div>

        <Button as={Link} to="/products" variant="primary" size="lg" className="mt-10">
          Continue shopping
        </Button>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <Breadcrumb items={[{ label: "Home", to: "/" }, { label: "Cart", to: "/cart" }, { label: "Checkout" }]} />
      <h1 className="font-display text-4xl font-bold text-ink mb-10">Checkout</h1>

      <form onSubmit={handleSubmit} className="grid lg:grid-cols-2 gap-10" noValidate>
        {/* Shipping details */}
        <div className="bg-paper-raised border border-line rounded-sm p-8">
          <h2 className="font-display text-xl font-bold mb-6 text-ink">Shipping details</h2>

          <div className="grid sm:grid-cols-2 gap-4">
            <Input
              id="fullName"
              label="Full name"
              value={form.fullName}
              onChange={handleChange("fullName")}
              error={errors.fullName}
              className="sm:col-span-2"
              autoComplete="name"
            />
            <Input
              id="email"
              type="email"
              label="Email"
              value={form.email}
              onChange={handleChange("email")}
              error={errors.email}
              autoComplete="email"
            />
            <Input
              id="phone"
              type="tel"
              label="Phone"
              value={form.phone}
              onChange={handleChange("phone")}
              error={errors.phone}
              autoComplete="tel"
              placeholder="10-digit number"
            />
            <Input
              id="address"
              label="Address"
              value={form.address}
              onChange={handleChange("address")}
              error={errors.address}
              className="sm:col-span-2"
              autoComplete="street-address"
            />
            <Input
              id="city"
              label="City"
              value={form.city}
              onChange={handleChange("city")}
              error={errors.city}
              autoComplete="address-level2"
            />
            <Input
              id="state"
              label="State"
              value={form.state}
              onChange={handleChange("state")}
              error={errors.state}
              autoComplete="address-level1"
            />
            <Input
              id="pincode"
              label="PIN code"
              value={form.pincode}
              onChange={handleChange("pincode")}
              error={errors.pincode}
              autoComplete="postal-code"
              placeholder="6-digit code"
            />
          </div>

          <h2 className="font-display text-xl font-bold mt-8 mb-4 text-ink">Payment method</h2>
          <div className="space-y-2.5">
            {PAYMENT_METHODS.map((method) => (
              <label
                key={method.id}
                className="flex items-center gap-3 text-sm text-ink border border-line rounded-sm px-4 py-3 cursor-pointer has-[:checked]:border-plum has-[:checked]:bg-paper"
              >
                <input
                  type="radio"
                  name="payment"
                  value={method.id}
                  checked={payment === method.id}
                  onChange={(e) => setPayment(e.target.value)}
                  className="accent-plum"
                />
                {method.label}
              </label>
            ))}
          </div>
        </div>

        {/* Order summary */}
        <div className="bg-paper-raised border border-line rounded-sm p-8 h-fit lg:sticky lg:top-24">
          <h2 className="font-display text-xl font-bold mb-6 text-ink">Order summary</h2>

          <div className="max-h-64 overflow-y-auto pr-1 space-y-4 mb-6">
            {cart.map((item) => (
              <div key={item.id} className="flex justify-between items-start gap-3 text-sm">
                <div>
                  <p className="font-medium text-ink">{item.name}</p>
                  <p className="text-ink-faint font-mono text-xs mt-0.5 flex items-center gap-2">
                    Qty: {item.quantity}
                    {item.originalPrice && item.originalPrice > item.price && (
                      <span className="line-through">{formatPrice(item.originalPrice)}</span>
                    )}
                  </p>
                </div>
                <p className="font-mono text-ink shrink-0">{formatPrice(item.price * item.quantity)}</p>
              </div>
            ))}
          </div>

          <div className="tear-divider mb-4" />

          <div className="space-y-3 text-sm">
            <div className="flex justify-between text-ink-soft">
              <span>Subtotal</span>
              <span className="font-mono text-ink">{formatPrice(subtotal)}</span>
            </div>
            <div className="flex justify-between text-ink-soft">
              <span>Shipping</span>
              <span className="font-mono text-ink">{shipping === 0 ? "Free" : formatPrice(shipping)}</span>
            </div>
            <div className="flex justify-between text-ink-soft">
              <span>GST (18%)</span>
              <span className="font-mono text-ink">{formatDecimal(tax)}</span>
            </div>
          </div>

          <div className="tear-divider my-4" />

          <div className="flex justify-between text-xl font-bold text-ink mb-6">
            <span>Total</span>
            <span className="font-mono">{formatDecimal(total)}</span>
          </div>

          <Button type="submit" variant="primary" size="lg" className="w-full">
            Place order
          </Button>
        </div>
      </form>
    </div>
  );
}

export default Checkout;
