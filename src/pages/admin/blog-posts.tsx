import { useState } from "react";
import { FaPlus } from "react-icons/fa";
import BlogCard from "../../components/blog/blog-card";
import { useToast } from "../../hooks/use-toast";
import useAddBlogPost from "../../services/blogService/useAddBlogPost";
import useDeleteBlogPost from "../../services/blogService/useDeleteBlogPost";
import useEditBlogPost from "../../services/blogService/useEditBlogPost";
import { BlogContent } from "../../types"; // Adjust the import path as necessary
import AddBlogModal from "./add-blog-modal";
import DeleteConfirmationModal from "./delete-confirmation-modal";
import EditBlogModal from "./edit-blog-modal";
import useGetAllBlogPosts from "../../services/blogService/useGetAllBlogPosts";

const BlogPostsPage = () => {
  const { showToast } = useToast();
  const { blogPosts, loading, error, refetch } = useGetAllBlogPosts();
  const {
    addBlogPost,
    loading: addLoading,
    error: addError,
  } = useAddBlogPost();
  const {
    editBlogPost,
    loading: editLoading,
    error: editError,
  } = useEditBlogPost();
  const {
    deleteBlogPost,
    loading: deleteLoading,
    error: deleteError,
  } = useDeleteBlogPost();
  const [isAddOpen, setIsAddOpen] = useState(false);
  const [isEditOpen, setIsEditOpen] = useState(false);
  const [isDeleteOpen, setIsDeleteOpen] = useState(false);
  const [selectedPost, setSelectedPost] = useState<BlogContent | null>(null);

  const handleAdd = async (formData: BlogContent) => {
    await addBlogPost(formData);
    refetch(); // Refetch the blog posts after adding a new post
    if (!addError) {
      showToast("Blog post added successfully", "success");
    } else {
      showToast(`Failed to add blog post: ${error}`, "error");
    }
    setIsAddOpen(false);
  };

  const handleSaveEdit = async (formData: BlogContent) => {
    await editBlogPost(formData);

    refetch(); // Refetch the blog posts after editing a post
    setIsEditOpen(false);
  };

  const handleDelete = async (id: number) => {
    await deleteBlogPost(id);
    refetch(); // Refetch the blog posts after deleting a post
    setIsDeleteOpen(false);
  };

  return (
    <div className="container mx-auto p-4">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-xl font-semibold underline">Blog Posts</h1>
        <button
          onClick={() => setIsAddOpen(true)}
          className="text-sm flex items-center bg-gray-900 text-white px-3 py-2 rounded-md hover:bg-black"
        >
          <FaPlus className="mr-2" />
          Add New Post
        </button>
      </div>

      {error && <div>{error}</div>}
      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {
          blogPosts?.article_links?.length > 0 &&
            !addLoading &&
            blogPosts?.article_links?.map((post, index) => (
              <BlogCard
                key={index}
                {...post}
                showActions
                onDelete={() => {
                  setSelectedPost(post);
                  setIsDeleteOpen(true);
                }}
                onEdit={() => {
                  setSelectedPost(post);
                  setIsEditOpen(true);
                }}
              />
            ))
          // <h1 className="text-2xl font-semibold">No blog posts found</h1>
        }
      </ul>
      {blogPosts?.article_links?.length === 0 && !loading && (
        <h1 className="text-2xl font-semibold">No blog posts found</h1>
      )}
      {loading && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {Array.from({ length: 6 }).map((_, index) => (
            <div key={index} className="animate-pulse">
              <div className="h-48 bg-gray-300 rounded mb-4"></div>
              <div className="h-6 bg-gray-300 rounded mb-2"></div>
              <div className="h-6 bg-gray-300 rounded mb-2"></div>
              <div className="h-6 bg-gray-300 rounded"></div>
            </div>
          ))}
        </div>
      )}

      {/* Modals */}
      <AddBlogModal
        isOpen={isAddOpen}
        onClose={() => setIsAddOpen(false)}
        handleAdd={handleAdd}
        isSubmitting={addLoading}
      />
      {selectedPost && (
        <EditBlogModal
          isOpen={isEditOpen}
          onClose={() => setIsEditOpen(false)}
          handleEdit={handleSaveEdit}
          initialData={selectedPost}
          isSubmitting={editLoading}
          error={editError}
        />
      )}
      {selectedPost && (
        <DeleteConfirmationModal
          isOpen={isDeleteOpen}
          onClose={() => setIsDeleteOpen(false)}
          onDelete={() => handleDelete(selectedPost?.id)}
          isSubmitting={deleteLoading}
          error={deleteError}
        />
      )}
    </div>
  );
};

export default BlogPostsPage;
