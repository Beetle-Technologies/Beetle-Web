import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import Spinner from "../components/spinner";
import { API_URL } from "../constants/api-constant";
import { useToast } from "../hooks/use-toast";

const DeleteAccount = () => {
  const [token, setToken] = useState("");
  const [step, setStep] = useState("authenticate"); // authenticate, confirm, success
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [credentials, setCredentials] = useState({ email: "", password: "" });
  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();
  const { showToast } = useToast();

  // Handle authentication form input changes
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setCredentials((prev) => ({ ...prev, [name]: value }));
  };

  // Handle authentication submission
  const handleAuthenticate = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch(`${API_URL}/public/account/deactivate`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "X-App-Name": "BLOOM_WEB",
        },
        body: JSON.stringify(credentials),
      });

      const data = await response.json();
      setToken(data.data);

      if (response.ok) {
        setStep("confirm");
      } else {
        setError(
          data.errorMessage || "Authentication failed. Please try again."
        );
        showToast(
          `Error: ${data.errorMessage || "Authentication failed"}`,
          "error",
          3000,
          "top-right"
        );
      }
    } catch (err) {
      setError("An unexpected error occurred. Please try again later.");
      showToast(
        "Connection error. Please check your internet connection.",
        "error",
        3000,
        "top-right"
      );
    } finally {
      setIsLoading(false);
    }
  };

  // Handle final account deletion
  const handleDelete = async () => {
    if (!token) {
      setError("Invalid token. Please try again.");
      showToast("Invalid token. Please try again.", "error", 3000, "top-right");
      return;
    }
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch(
        `${API_URL}/public/account/deactivate?token=${token}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            "X-App-Name": "BLOOM_WEB",
          },
        }
      );

      const data = await response.json();

      if (response.ok) {
        setStep("success");

        // Redirect after showing success message
        setTimeout(() => {
          navigate("/");
        }, 3000);
      } else {
        setError(
          data.errorMessage || "Failed to delete account. Please try again."
        );
        showToast(
          `Error: ${data.errorMessage || "An unknown error occurred"}`,
          "error",
          3000,
          "top-right"
        );
      }
    } catch (err) {
      setError("An unexpected error occurred. Please try again later.");
      showToast(
        "Connection error. Please check your internet connection.",
        "error",
        3000,
        "top-right"
      );
    } finally {
      setIsLoading(false);
    }
  };

  // Cancel deletion and go back
  const handleCancel = () => {
    navigate(-1);
  };

  // Authentication screen
  const renderAuthenticateStep = () => (
    <div className="max-w-md w-full mx-auto p-6 bg-white rounded-lg shadow-xl">
      <h1 className="text-2xl font-bold mb-4">Verify Your Identity</h1>
      <p className="mb-6 text-gray-600">
        Please authenticate yourself before proceeding with account deletion.
      </p>

      <form onSubmit={handleAuthenticate}>
        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Email Address
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={credentials.email}
            onChange={handleInputChange}
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="your@email.com"
          />
        </div>

        <div className="mb-6 ">
          <label
            htmlFor="password"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Password
          </label>
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              name="password"
              value={credentials.password}
              onChange={handleInputChange}
              required
              className="relative w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="••••••••"
            />
            {showPassword ? (
              <FaEye
                className="absolute right-3 top-3 text-gray-400 cursor-pointer Z-10"
                onClick={() => setShowPassword(!showPassword)}
              />
            ) : (
              <FaEyeSlash
                className="absolute right-3 top-3 text-gray-400 cursor-pointer Z-10"
                onClick={() => setShowPassword(!showPassword)}
              />
            )}
          </div>
        </div>

        {error && (
          <div className="mb-4 p-3 bg-red-50 border border-red-200 text-red-700 rounded-md text-sm">
            {error}
          </div>
        )}

        <div className="flex justify-between">
          <button
            type="button"
            onClick={handleCancel}
            className="px-4 py-2 text-gray-700 border border-gray-300 rounded-md hover:bg-gray-50"
          >
            Cancel
          </button>
          <button
            type="submit"
            disabled={isLoading}
            className="bg-black text-white px-4 py-2 rounded-md hover:bg-gray-700 disabled:bg-gray-300 flex items-center justify-center min-w-24"
          >
            {isLoading ? <Spinner /> : "Continue"}
          </button>
        </div>
      </form>
    </div>
  );

  // Confirmation screen
  const renderConfirmStep = () => (
    <div className="max-w-md w-full mx-auto p-6 bg-white rounded-lg shadow-xl">
      <div className="text-center mb-6">
        <div className="inline-flex items-center justify-center h-16 w-16 bg-red-100 rounded-full mb-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8 text-red-600"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
            />
          </svg>
        </div>
        <h1 className="text-2xl font-bold mb-2">Delete Your Account</h1>
        <p className="text-gray-600">
          This action cannot be undone. All your data will be permanently
          removed.
        </p>
      </div>

      <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-6">
        <div className="flex">
          <div className="flex-shrink-0">
            <svg
              className="h-5 w-5 text-yellow-400"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <div className="ml-3">
            <p className="text-sm text-yellow-700">
              You will lose access to all your data, settings, and past
              activity.
            </p>
          </div>
        </div>
      </div>

      {error && (
        <div className="mb-6 p-3 bg-red-50 border border-red-200 text-red-700 rounded-md text-sm">
          {error}
        </div>
      )}

      <div className="flex justify-between">
        <button
          onClick={() => setStep("authenticate")}
          className="px-4 py-2 text-gray-700 border border-gray-300 rounded-md hover:bg-gray-50"
        >
          Go Back
        </button>
        <button
          onClick={handleDelete}
          disabled={isLoading}
          className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700 disabled:bg-red-300 flex items-center justify-center min-w-24"
        >
          {isLoading ? <Spinner /> : "Delete Account"}
        </button>
      </div>
    </div>
  );

  // Success screen
  const renderSuccessStep = () => (
    <div className="max-w-md w-full mx-auto p-6 bg-white rounded-lg shadow-xl text-center">
      <div className="inline-flex items-center justify-center h-16 w-16 bg-green-100 rounded-full mb-4">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-8 w-8 text-green-600"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M5 13l4 4L19 7"
          />
        </svg>
      </div>
      <h1 className="text-2xl font-bold mb-2">Account Deleted</h1>
      <p className="mb-6 text-gray-600">
        Your account has been successfully deleted. We're sorry to see you go.
      </p>
      <p className="text-sm text-gray-500">
        Redirecting you to the homepage...
      </p>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center">
      {step === "authenticate" && renderAuthenticateStep()}
      {step === "confirm" && renderConfirmStep()}
      {step === "success" && renderSuccessStep()}
    </div>
  );
};

export default DeleteAccount;
