// GOODHAUL: Star rating display

function RatingStars({ rating = 0, showValue = true, size = "sm" }) {
  const rounded = Math.round(rating);
  const textSize = size === "lg" ? "text-lg" : "text-sm";

  return (
    <span className={`inline-flex items-center gap-1 font-mono ${textSize}`} aria-label={`Rated ${rating} out of 5`}>
      <span className="text-accent-dark" aria-hidden="true">
        {"★".repeat(rounded)}
        <span className="text-line">{"★".repeat(5 - rounded)}</span>
      </span>
      {showValue && <span className="text-ink-soft">{rating.toFixed(1)}</span>}
    </span>
  );
}

export default RatingStars;
