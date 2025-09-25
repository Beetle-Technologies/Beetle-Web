import { useState } from "react";
import apiFetch from "../../lib/api";
import { BlogContent } from "../../types"; // Adjust the import path as necessary

const useEditBlogPost = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const editBlogPost = async (updatedPost: BlogContent) => {
    setLoading(true);
    setError(null);
    const _updatedPost = {
      title: updatedPost.title,
      link: updatedPost.link,
      subtitle: updatedPost.subtitle,
      image_url: updatedPost.image_url,
      tags: updatedPost.tags,
    };

    try {
      await apiFetch(`/public/articles/${updatedPost.id}`, {
        method: "PATCH",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("access_token")}`,
        },
        body: JSON.stringify(_updatedPost),
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

  return { editBlogPost, loading, error };
};

export default useEditBlogPost;
