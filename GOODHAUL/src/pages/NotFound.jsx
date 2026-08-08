// GOODHAUL: 404 page when a route does not exist

import EmptyState from "../components/ui/EmptyState";

function NotFound() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-20">
      <p className="text-center font-mono text-8xl font-bold text-line select-none mb-4">404</p>
      <EmptyState
        icon="🧭"
        title="This page wandered off"
        message="The page you're looking for doesn't exist or may have moved."
        actionLabel="Back to home"
        actionTo="/"
      />
    </div>
  );
}

export default NotFound;
