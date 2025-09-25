/* eslint-disable @typescript-eslint/no-explicit-any */
import { createContext, useEffect, useState } from "react";
import apiFetch from "../lib/api";

type TLogin = {
  email: string;
  password: string;
};

export type AuthContextType = {
  isAuthenticated: boolean;
  user: any;
  login: ({ email, password }: TLogin) => void;
  logout: () => void;
};

export const AuthContext = createContext<AuthContextType>({
  isAuthenticated: false,
  user: null,
  login: () => {},
  logout: () => {},
});

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    const storedUser = localStorage.getItem("user")
      ? JSON.parse(localStorage.getItem("user") as string)
      : null;
    setUser(storedUser);
  }, []);

  const login = async ({ email, password }: TLogin) => {
    try {
      const data = await apiFetch("/v1/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const { access_token, refresh_token, token_key } =
        data.data.account_credentials;
      const { name, kyc_status, role } = data.data.account_info;

      const isAdmin = role === "admin";
      setUser({ ...data.data.account_info, isAdmin });

      localStorage.setItem("user", JSON.stringify({ name, kyc_status, role }));
      localStorage.setItem("access_token", access_token);
      localStorage.setItem("refresh_token", refresh_token);
      localStorage.setItem("token_key", token_key);
      localStorage.setItem("isAuthenticated", "true");
    } catch (error) {
      throw new Error("Login failed");
    }
  };

  const logout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("access_token");
    localStorage.removeItem("refresh_token");
    localStorage.removeItem("token_key");
    localStorage.removeItem("isAuthenticated");
    setUser(null);
    window.location.href = "/admin/login";
  };

  const isAuthenticated = localStorage.getItem("isAuthenticated") === "true";

  return (
    <AuthContext.Provider value={{ user, isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
