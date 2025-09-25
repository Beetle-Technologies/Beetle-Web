import { useState, useEffect, useCallback } from "react";
import apiFetch from "../../lib/api";
import { BlogPosts } from "../../types";

const useGetAllBlogPosts = () => {
  const [blogPosts, setBlogPosts] = useState<BlogPosts>({
    article_links: [],
    meta_data: {},
  });
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const fetchBlogPosts = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const data = await apiFetch("/public/articles");
      setBlogPosts(data);
    } catch (err: unknown) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError("An unknown error occurred");
      }
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchBlogPosts();
  }, [fetchBlogPosts]);

  return { blogPosts, loading, error, refetch: fetchBlogPosts };
};

export default useGetAllBlogPosts;
