// GOODHAUL: Reusable button with variants and sizes

const VARIANTS = {
  primary:
    "bg-ink text-paper-raised hover:bg-plum disabled:bg-ink-faint",
  accent:
    "bg-accent text-ink hover:bg-accent-dark disabled:bg-ink-faint disabled:text-paper-raised",
  outline:
    "bg-transparent text-ink border border-ink hover:bg-ink hover:text-paper-raised disabled:opacity-40",
  ghost:
    "bg-transparent text-ink hover:bg-paper disabled:opacity-40",
  danger:
    "bg-transparent text-rust border border-rust/40 hover:bg-rust hover:text-paper-raised disabled:opacity-40",
};

const SIZES = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-3 text-sm",
  lg: "px-8 py-4 text-base",
};

function Button({
  as: Component = "button",
  variant = "primary",
  size = "md",
  className = "",
  children,
  ...props
}) {
  return (
    <Component
      className={`inline-flex items-center justify-center gap-2 font-body font-semibold tracking-wide rounded-sm transition-colors duration-200 disabled:cursor-not-allowed ${VARIANTS[variant]} ${SIZES[size]} ${className}`}
      {...props}
    >
      {children}
    </Component>
  );
}

export default Button;
