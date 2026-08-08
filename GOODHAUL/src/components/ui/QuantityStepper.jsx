// GOODHAUL: Plus/minus quantity control

function QuantityStepper({ quantity, onIncrease, onDecrease, min = 1, size = "md" }) {
  const pad = size === "sm" ? "px-2.5 py-1 text-sm" : "px-3.5 py-2";

  return (
    <div className="inline-flex items-center border border-line rounded-sm overflow-hidden">
      <button
        type="button"
        onClick={onDecrease}
        disabled={quantity <= min}
        aria-label="Decrease quantity"
        className={`${pad} font-mono text-ink hover:bg-paper disabled:opacity-30 disabled:cursor-not-allowed transition-colors`}
      >
        −
      </button>
      <span className={`${pad} font-mono font-medium min-w-[2.5rem] text-center border-x border-line`}>
        {quantity}
      </span>
      <button
        type="button"
        onClick={onIncrease}
        aria-label="Increase quantity"
        className={`${pad} font-mono text-ink hover:bg-paper transition-colors`}
      >
        +
      </button>
    </div>
  );
}

export default QuantityStepper;
