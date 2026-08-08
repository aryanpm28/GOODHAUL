// GOODHAUL: Hook to show toast notifications from any component

import { useContext } from "react";
import { ToastContext } from "../context/ToastContextObject.js";

export function useToast() {
  const ctx = useContext(ToastContext);
  // Safe fallback if provider is missing
  if (!ctx) return { showToast: () => {} };
  return ctx;
}
