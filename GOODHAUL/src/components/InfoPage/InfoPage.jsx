// GOODHAUL: Shared layout for About, FAQ, Terms, Privacy

// Shared shell for lightweight content pages (About, Contact, Terms, etc.)
function InfoPage({ eyebrow, title, children }) {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-16">
      {eyebrow && (
        <p className="font-mono text-xs uppercase tracking-widest text-accent-dark mb-2">{eyebrow}</p>
      )}
      <h1 className="font-display text-4xl font-bold text-ink mb-8">{title}</h1>
      <div className="prose-content space-y-5 text-ink-soft leading-7">{children}</div>
    </div>
  );
}

export default InfoPage;
