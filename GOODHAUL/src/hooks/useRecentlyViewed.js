// GOODHAUL: Tracks recently viewed product IDs in localStorage

import { useLocalStorage } from "./useLocalStorage";

const MAX_ITEMS = 8;

export function useRecentlyViewed() {
  const [recentIds, setRecentIds] = useLocalStorage("goodhaul:recently-viewed", []);

  const markViewed = (id) => {
    setRecentIds((prev) => {
      const withoutCurrent = prev.filter((existingId) => existingId !== id);
      return [id, ...withoutCurrent].slice(0, MAX_ITEMS);
    });
  };

  return { recentIds, markViewed };
}
