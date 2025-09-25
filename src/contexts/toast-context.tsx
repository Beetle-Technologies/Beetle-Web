import { createContext, useState } from "react";
import Toast from "../components/toast";

type TToastContext = {
  showToast: (
    message: string,
    type?: "success" | "error" | "info",
    duration?: number,
    placement?: "top-left" | "top-right" | "bottom-left" | "bottom-right"
  ) => void;
};

export const ToastContext = createContext<TToastContext | undefined>(undefined);

export const ToastProvider = ({
  children,
}: {
  children: React.ReactElement;
}) => {
  const [toast, setToast] = useState<React.ReactElement | null>(null);

  const showToast = (
    message: string,
    type: "success" | "error" | "info" = "info",
    duration = 3000,
    placement:
      | "top-left"
      | "top-right"
      | "bottom-left"
      | "bottom-right" = "top-right"
  ) => {
    setToast(
      <Toast
        message={message}
        type={type}
        duration={duration}
        placement={placement}
        onClose={() => setToast(null)}
      />
    );
  };
  return (
    <ToastContext.Provider value={{ showToast }}>
      {children}
      {toast}
    </ToastContext.Provider>
  );
};
