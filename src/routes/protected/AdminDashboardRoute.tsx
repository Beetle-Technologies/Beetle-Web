import React, { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { API_URL } from "../../constants/api-constant";
import Spinner from "../../components/spinner";

const getStoredUser = () => {
  const user = localStorage.getItem("user");
  return user ? JSON.parse(user) : null;
};
const getAccessToken = () => localStorage.getItem("access_token");
const getRefreshToken = () => localStorage.getItem("refresh_token");
const getTokenKey = () => localStorage.getItem("token_key");

// Refresh access token function
const refreshAccessToken = async () => {
  const refreshToken = getRefreshToken();
  const tokenKey = getTokenKey();
  if (!refreshToken || !tokenKey) return null;

  const response = await fetch(`${API_URL}/auth/token`, {
    method: "POST",
    headers: {
      "X-App-Name": "Bloom-Web",
      "Content-Type": "application/json",
      Authorization: `Bearer ${refreshToken}`,
    },
    body: JSON.stringify({ token_key: tokenKey }),
  });

  if (response.ok) {
    const data = await response.json();

    localStorage.setItem("user", JSON.stringify(data.data.account_info));
    localStorage.setItem(
      "access_token",
      data.data.account_credentials.access_token
    );
    localStorage.setItem(
      "refresh_token",
      data.data.account_credentials.refresh_token
    );
    localStorage.setItem("token_key", data.data.account_credentials.token_key);

    return data.data.account_credentials.access_token;
  } else {
    logout();
    return null;
  }
};

const logout = () => {
  localStorage.removeItem("user");
  localStorage.removeItem("access_token");
  localStorage.removeItem("refresh_token");
  localStorage.removeItem("token_key");
  window.location.href = "/admin/login";
};

const AdminDashboardRoute = ({ children }: { children: React.ReactNode }) => {
  const [isAuthorized, setIsAuthorized] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const checkAuth = async () => {
      setIsLoading(true);
      const user = getStoredUser();
      const accessToken = getAccessToken();

      if (!user || user.role !== "admin") {
        logout(); // Redirect if not admin
        return;
      }

      if (!accessToken) {
        // Try to refresh the token if no access token is present
        const newAccessToken = await refreshAccessToken();
        if (!newAccessToken) {
          return; // Refresh failed; redirect
        }
      }

      setIsAuthorized(true); // User is authenticated and has admin role
      setIsLoading(false);
    };

    checkAuth();
  }, []);

  if (isLoading) {
    return (
      <div className="w-screen h-screen flex items-center justify-center">
        <Spinner />
      </div>
    );
  }

  // If authorized, render the children. Otherwise, redirect to login.
  return isAuthorized ? children : <Navigate to="/admin/login" />;
};

export default AdminDashboardRoute;
