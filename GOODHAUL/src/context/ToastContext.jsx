// GOODHAUL: Global toast notification provider

import { useCallback, useState } from "react";
import { ToastContext } from "./ToastContextObject.js";

let idCounter = 0;

function ToastProvider({ children }) {
  const [toasts, setToasts] = useState([]);

  const dismissToast = useCallback((id) => {
    setToasts((prev) => prev.filter((toast) => toast.id !== id));
  }, []);

  const showToast = useCallback(
    (message, type = "success") => {
      const id = ++idCounter;
      setToasts((prev) => [...prev, { id, message, type }]);
      window.setTimeout(() => dismissToast(id), 2600);
    },
    [dismissToast]
  );

  return (
    <ToastContext.Provider value={{ showToast }}>
      {children}

      <div className="fixed bottom-5 left-1/2 -translate-x-1/2 z-[100] flex flex-col gap-2 w-[calc(100%-2rem)] max-w-sm px-0">
        {toasts.map((toast) => (
          <div
            key={toast.id}
            role="status"
            className={`tag-shape flex items-center gap-2 py-3 pr-5 shadow-lg font-body text-sm font-medium animate-[toast-in_0.25s_ease-out] ${
              toast.type === "error" ? "bg-rust" : "bg-ink"
            }`}
            style={{ color: "#fbfbf7" }}
          >
            {toast.type === "error" ? "⚠" : "✓"} {toast.message}
          </div>
        ))}
      </div>
    </ToastContext.Provider>
  );
}

export default ToastProvider;
