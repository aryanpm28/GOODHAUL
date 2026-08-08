// GOODHAUL: Form input and textarea with label and error

function Input({ label, error, id, className = "", textarea = false, ...props }) {
  const Component = textarea ? "textarea" : "input";
  return (
    <div className={className}>
      {label && (
        <label htmlFor={id} className="block text-xs font-mono uppercase tracking-wide text-ink-soft mb-1.5">
          {label}
        </label>
      )}
      <Component
        id={id}
        className={`w-full border bg-paper-raised rounded-sm px-4 py-3 text-ink placeholder:text-ink-faint focus:outline-none focus:ring-2 focus:ring-plum/30 transition-shadow ${
          error ? "border-rust" : "border-line"
        }`}
        {...props}
      />
      {error && <p className="mt-1.5 text-xs text-rust font-medium">{error}</p>}
    </div>
  );
}

export default Input;
