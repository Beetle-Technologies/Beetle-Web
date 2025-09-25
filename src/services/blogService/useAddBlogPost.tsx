import { useState } from "react";
import apiFetch from "../../lib/api";
import { BlogContent } from "../../types";

const useAddBlogPost = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const addBlogPost = async (newPost: BlogContent) => {
    setLoading(true);
    setError(null);

    try {
      await apiFetch("/public/articles", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("access_token")}`,
        },
        body: JSON.stringify(newPost),
      });
    } catch (err: unknown) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError("An unknown error occurred");
      }
    } finally {
      setLoading(false);
    }
  };

  return { addBlogPost, loading, error };
};

export default useAddBlogPost;
