import { useState } from "react";
import apiFetch from "../../lib/api";

const useDeleteBlogPost = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const deleteBlogPost = async (postId: number) => {
    setLoading(true);
    setError(null);

    try {
      await apiFetch(`/public/articles/${postId}`, {
        method: "DELETE",
        headers: {
          "X-App-Name": "Bloom-Web",
          Authorization: `Bearer ${localStorage.getItem("access_token")}`,
        },
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

  return { deleteBlogPost, loading, error };
};

export default useDeleteBlogPost;
