// GOODHAUL: Shopping cart page with order summary

import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContextObject.js";
import { useToast } from "../hooks/useToast";
import { useMountLoading } from "../hooks/useMountLoading";
import { formatPrice, calculateOrderTotals, FREE_SHIPPING_THRESHOLD } from "../utils/format";

import QuantityStepper from "../components/ui/QuantityStepper";
import Button from "../components/ui/Button";
import EmptyState from "../components/ui/EmptyState";
import Breadcrumb from "../components/ui/Breadcrumb";
import CartItemSkeleton from "../components/ui/CartItemSkeleton";

function Cart() {
  const { cart, increaseQuantity, decreaseQuantity, removeFromCart, clearCart } =
    useContext(CartContext);
  const { showToast } = useToast();
  const loading = useMountLoading(250);

  const handleRemove = (item) => {
    removeFromCart(item.id);
    showToast(`${item.name} removed from cart`);
  };

  const handleClear = () => {
    clearCart();
    showToast("Cart cleared");
  };

  if (loading) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <Breadcrumb items={[{ label: "Home", to: "/" }, { label: "Cart" }]} />
        <div className="grid lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2 space-y-4">
            {Array.from({ length: 3 }).map((_, i) => (
              <CartItemSkeleton key={i} />
            ))}
          </div>
          <div className="skeleton h-64 rounded-sm" />
        </div>
      </div>
    );
  }

  if (cart.length === 0) {
    return (
      <div className="max-w-3xl mx-auto px-4 py-10">
        <Breadcrumb items={[{ label: "Home", to: "/" }, { label: "Cart" }]} />
        <EmptyState
          icon="🛒"
          title="Your cart is empty"
          message="Nothing here yet. Go find something worth tagging."
          actionLabel="Browse products"
          actionTo="/products"
        />
      </div>
    );
  }

  const subtotal = cart.reduce((total, item) => total + item.price * item.quantity, 0);
  const { shipping, tax, total } = calculateOrderTotals(subtotal);
  const amountToFreeShip = Math.max(0, FREE_SHIPPING_THRESHOLD - subtotal);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <Breadcrumb items={[{ label: "Home", to: "/" }, { label: "Cart" }]} />

      <div className="flex items-end justify-between flex-wrap gap-4 mb-10">
        <h1 className="font-display text-4xl font-bold text-ink">Shopping cart</h1>
        <button onClick={handleClear} className="font-mono text-xs text-rust hover:underline">
          Clear cart
        </button>
      </div>

      {amountToFreeShip > 0 && (
        <p className="tag-shape inline-flex bg-moss-bg text-moss font-mono text-xs py-2 mb-8">
          Add {formatPrice(amountToFreeShip)} more for free shipping
        </p>
      )}

      <div className="grid lg:grid-cols-3 gap-10">
        {/* Items */}
        <div className="lg:col-span-2 space-y-4">
          {cart.map((item) => (
            <div
              key={item.id}
              className="flex flex-col sm:flex-row gap-5 bg-paper-raised border border-line rounded-sm p-5"
            >
              <Link to={`/products/${item.id}`} className="shrink-0">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full sm:w-28 h-28 object-cover rounded-sm border border-line"
                />
              </Link>

              <div className="flex-1 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <Link to={`/products/${item.id}`}>
                    <h2 className="font-display font-semibold text-ink hover:text-plum transition-colors">
                      {item.name}
                    </h2>
                  </Link>
                  <p className="font-mono text-sm text-ink-soft mt-1 flex items-center gap-2">
                    {formatPrice(item.price)} each
                    {item.originalPrice && item.originalPrice > item.price && (
                      <span className="line-through text-ink-faint text-xs">
                        {formatPrice(item.originalPrice)}
                      </span>
                    )}
                  </p>
                </div>

                <div className="flex items-center gap-6">
                  <QuantityStepper
                    quantity={item.quantity}
                    onIncrease={() => increaseQuantity(item.id)}
                    onDecrease={() => decreaseQuantity(item.id)}
                    size="sm"
                  />
                  <p className="font-mono font-semibold text-ink w-20 text-right">
                    {formatPrice(item.price * item.quantity)}
                  </p>
                  <button
                    onClick={() => handleRemove(item)}
                    aria-label={`Remove ${item.name}`}
                    className="text-rust hover:text-rust text-sm font-medium"
                  >
                    Remove
                  </button>
                </div>
              </div>
            </div>
          ))}

          <Button as={Link} to="/products" variant="ghost" size="sm">
            ← Continue shopping
          </Button>
        </div>

        {/* Summary */}
        <div className="bg-paper-raised border border-line rounded-sm p-6 h-fit lg:sticky lg:top-24">
          <h2 className="font-display text-xl font-bold mb-6 text-ink">Order summary</h2>

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
              <span className="font-mono text-ink">{formatPrice(tax)}</span>
            </div>
          </div>

          <div className="tear-divider my-5" />

          <div className="flex justify-between text-lg font-bold text-ink mb-6">
            <span>Total</span>
            <span className="font-mono">{formatPrice(total)}</span>
          </div>

          <Button as={Link} to="/checkout" variant="primary" size="lg" className="w-full">
            Proceed to checkout
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Cart;
