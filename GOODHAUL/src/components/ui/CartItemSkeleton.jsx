// GOODHAUL: Loading placeholder for a cart line item

function CartItemSkeleton() {
  return (
    <div className="flex flex-col sm:flex-row gap-5 bg-paper-raised border border-line rounded-sm p-5">
      <div className="skeleton w-full sm:w-28 h-28 rounded-sm shrink-0" />
      <div className="flex-1 space-y-3 py-1">
        <div className="skeleton h-4 w-1/2 rounded-sm" />
        <div className="skeleton h-3 w-1/3 rounded-sm" />
      </div>
    </div>
  );
}

export default CartItemSkeleton;
