// GOODHAUL: Brief loading flag on first mount (for skeleton UI)

import { useEffect, useState } from "react";

// Shows `true` briefly on mount, then flips to `false`. Used to render a
// short skeleton-loading state on pages backed by local/synchronous data,
// so the UI doesn't pop in instantly and empty/loaded states both get
// exercised in the UI (useful for demoing the loading skeletons).
export function useMountLoading(delay = 300) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), delay);
    return () => clearTimeout(timer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return loading;
}
