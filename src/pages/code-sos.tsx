import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Spinner from "../components/spinner";
import { BASE_URL } from "../constants/api-constant";
import { useToast } from "../hooks/use-toast";

const CodeSos = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState<string>("");
  const { showToast } = useToast();
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    if (!email) return;

    setLoading(true);
    try {
      const response = await fetch(
        `${BASE_URL}/api/v1/accounts/business/external`,
        {
          headers: {
            "Content-Type": "application/json",
          },
          method: "POST",
          body: JSON.stringify({ email: email }),
        }
      );

      const data = await response.json();

      if (response.ok) {
        showToast(
          "A link has been sent to your email",
          "success",
          3000,
          "top-right"
        );
      } else {
        showToast(
          `Error: ${data.errorMessage || "An unknown error occurred"}`,
          "error",
          3000,
          "top-right"
        );
      }
      setEmail("");
      setLoading(false);
    } catch (error) {
      console.error(error);
      showToast(
        "An error occurred while processing your request",
        "error",
        3000,
        "top-right"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-[95%] md:max-w-[500px] mx-auto py-20 text-center flex flex-col items-center min-h-[70dvh]">
      <h1 className="text-2xl py-10 ">
        Do you want to delete all your data on beelte
      </h1>
      <div className="w-full flex flex-col gap-y-5">
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Enter your mail"
          className="w-full border border-gray-800 py-3 px-2"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <div className="w-full flex space-x-10 justify-between">
          <button
            className={`bg-red-500 hover:bg-red-600 py-2 rounded-md w-[200px] text-white `}
            onClick={handleSubmit}
          >
            {loading ? <Spinner /> : "Submit"}
          </button>
          <button
            onClick={() => navigate("/")}
            className="border border-gray-800  hover:bg-gray-800 hover:text-white py-2 px-10 rounded-md w-[200px] bg-transparent"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default CodeSos;
