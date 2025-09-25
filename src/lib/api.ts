import { API_URL } from "../constants/api-constant";

const defaultHeaders = {
  "Content-Type": "application/json",
  "X-App-Name": "BLOOM_WEB",
};

const apiFetch = async (endpoint: string, options: RequestInit = {}) => {
  const { headers, ...restOptions } = options;

  const response = await fetch(`${API_URL}${endpoint}`, {
    ...restOptions,
    headers: {
      ...defaultHeaders,
      ...headers,
    },
  });

  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.message || "API request failed");
  }

  return response.json();
};

export default apiFetch;
