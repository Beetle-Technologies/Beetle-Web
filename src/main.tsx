import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { ToastProvider } from "./contexts/toast-context.tsx";
import App from "./App.tsx";
import { AuthProvider } from "./contexts/auth-context.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <AuthProvider>
      <ToastProvider>
        <App />
      </ToastProvider>
    </AuthProvider>
  </React.StrictMode>
);
