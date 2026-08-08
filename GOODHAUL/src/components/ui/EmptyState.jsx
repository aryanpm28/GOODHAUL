// GOODHAUL: Shown when a list or page has no items

import { Link } from "react-router-dom";
import Button from "./Button";

function EmptyState({ icon = "🏷", title, message, actionLabel, actionTo, onAction }) {
  return (
    <div className="flex flex-col items-center text-center py-20 px-6">
      <div className="text-6xl mb-6" aria-hidden="true">
        {icon}
      </div>
      <h2 className="font-display text-2xl font-bold text-ink mb-2">{title}</h2>
      {message && <p className="text-ink-soft max-w-sm mb-8">{message}</p>}
      {actionLabel && onAction && (
        <Button onClick={onAction} variant="primary" size="md">
          {actionLabel}
        </Button>
      )}
      {actionLabel && actionTo && !onAction && (
        <Button as={Link} to={actionTo} variant="primary" size="md">
          {actionLabel}
        </Button>
      )}
    </div>
  );
}

export default EmptyState;
