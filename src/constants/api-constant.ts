const isDevelopment = process.env.NODE_ENV === "development";

export const BASE_URL = "https://api.example.com";
export const API_URL: string = isDevelopment
  ? import.meta.env.VITE_BASE_API_URL
  : "/api";
