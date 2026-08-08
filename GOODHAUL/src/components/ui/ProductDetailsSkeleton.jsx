// GOODHAUL: Loading placeholder for product details

function ProductDetailsSkeleton() {
  return (
    <div className="grid lg:grid-cols-2 gap-12">
      <div className="skeleton w-full aspect-square rounded-sm" />
      <div className="space-y-4">
        <div className="skeleton h-6 w-24 rounded-sm" />
        <div className="skeleton h-10 w-3/4 rounded-sm" />
        <div className="skeleton h-5 w-32 rounded-sm" />
        <div className="skeleton h-9 w-40 rounded-sm mt-2" />
        <div className="skeleton h-4 w-full rounded-sm mt-4" />
        <div className="skeleton h-4 w-5/6 rounded-sm" />
        <div className="skeleton h-12 w-full rounded-sm mt-8" />
      </div>
    </div>
  );
}

export default ProductDetailsSkeleton;
