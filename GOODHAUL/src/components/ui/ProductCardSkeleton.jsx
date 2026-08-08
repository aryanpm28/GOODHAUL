// GOODHAUL: Loading placeholder for a product card

function ProductCardSkeleton() {
  return (
    <div className="bg-paper-raised border border-line rounded-sm overflow-hidden">
      <div className="skeleton w-full h-64" />
      <div className="p-5 space-y-3">
        <div className="skeleton h-3 w-1/3 rounded-sm" />
        <div className="skeleton h-5 w-3/4 rounded-sm" />
        <div className="skeleton h-4 w-full rounded-sm" />
        <div className="skeleton h-10 w-full rounded-sm mt-4" />
      </div>
    </div>
  );
}

export default ProductCardSkeleton;
