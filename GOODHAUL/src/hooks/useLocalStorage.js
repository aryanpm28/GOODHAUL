// GOODHAUL: Saves state in browser localStorage so it survives refresh

import { useEffect, useState } from "react";

// Generic localStorage-backed state. Reads once on mount, writes on every change.
// Falls back silently (no crash) if storage is unavailable (private browsing, etc).
export function useLocalStorage(key, initialValue) {
  const [value, setValue] = useState(() => {
    try {
      const stored = window.localStorage.getItem(key);
      return stored ? JSON.parse(stored) : initialValue;
    } catch {
      return initialValue;
    }
  });

  useEffect(() => {
    try {
      window.localStorage.setItem(key, JSON.stringify(value));
    } catch {
      // storage full or unavailable — ignore, app still works in-memory
    }
  }, [key, value]);

  return [value, setValue];
}
