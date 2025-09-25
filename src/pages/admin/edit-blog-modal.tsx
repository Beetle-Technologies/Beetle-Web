import React, { useEffect, useState } from "react";
import { FaTimes } from "react-icons/fa";
import Modal from "../../components/modal";
import { BlogContent } from "../../types";

interface EditBlogModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialData: BlogContent;
  handleEdit: (formData: BlogContent) => void;
  isSubmitting: boolean;
  error: string | null;
}

const EditBlogModal: React.FC<EditBlogModalProps> = ({
  isOpen,
  onClose,
  initialData,
  handleEdit,
  isSubmitting,
  error,
}) => {
  const [formData, setFormData] = useState<BlogContent>(initialData);
  const [tagInput, setTagInput] = useState("");

  // const [authorInput, setAuthorInput] = useState("");

  useEffect(() => {
    setFormData(initialData);
  }, [initialData]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const addTag = () => {
    if (tagInput.trim() && !formData.tags.includes(tagInput)) {
      setFormData({ ...formData, tags: [...formData.tags, tagInput] });
      setTagInput("");
    }
  };

  const deleteTag = (index: number) => {
    setFormData((prevData) => ({
      ...prevData,
      tags: prevData.tags.filter((_, i) => i !== index),
    }));
  };

  // const addAuthor = () => {
  //   if (
  //     authorInput.trim() &&
  // !formData.authors.some((author) => author.name === authorInput)
  //   ) {
  //     setFormData({
  //       ...formData,
  //       authors: [
  //         ...formData.authors,
  //         { name: authorInput, picture_url: "", picture_hash: "" },
  //       ],
  //     });
  //     setAuthorInput("");
  //   }
  // };

  // const deleteAuthor = (index: number) => {
  //   setFormData((prevData) => ({
  //     ...prevData,
  //     authors: prevData.authors.filter((_, i) => i !== index),
  //   }));
  // };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    handleEdit(formData);
  };

  if (!isOpen) return null;

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <h2 className="text-xl font-bold mb-4">Edit Blog Post</h2>
      <form onSubmit={handleSubmit}>
        {/* Title Input */}
        <div className="mb-4">
          <label className="block text-gray-700">Title</label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 rounded-md p-3 focus:border-gray-500 focus:ring-gray-500"
            placeholder="Enter title"
          />
        </div>

        {/* Subtitle Input */}
        <div className="mb-4">
          <label className="block text-gray-700">Subtitle</label>
          <input
            type="text"
            name="subtitle"
            value={formData.subtitle}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-md p-3 focus:border-gray-500 focus:ring-gray-500"
            placeholder="Enter subtitle"
          />
        </div>

        {/* Link Input */}
        <div className="mb-4">
          <label className="block text-gray-700">Link</label>
          <input
            type="text"
            name="link"
            value={formData.link}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-md p-3 focus:border-gray-500 focus:ring-gray-500"
            placeholder="Enter link"
          />
        </div>

        {/* Image URL Input */}
        <div className="mb-4">
          <label className="block text-gray-700">Image URL</label>
          <input
            type="text"
            name="image_url"
            value={formData.image_url}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-md p-3 focus:border-gray-500 focus:ring-gray-500"
            placeholder="Enter image URL"
          />
        </div>

        {/* Tags Input */}
        <div className="mb-4">
          <label className="block text-gray-700">Tags</label>
          <div className="flex space-x-2">
            <input
              type="text"
              value={tagInput}
              onChange={(e) => setTagInput(e.target.value)}
              className="w-full border border-gray-300 rounded-md p-3 focus:border-gray-500 focus:ring-gray-500"
              placeholder="Add a tag"
            />
            <button
              type="button"
              onClick={addTag}
              className="bg-gray-800 text-white px-4 py-2 rounded-md hover:bg-gray-700"
            >
              Add
            </button>
          </div>
          <div className="mt-2 flex flex-wrap gap-2">
            {formData.tags.map((tag, index) => (
              <span
                key={index}
                className="bg-gray-200 text-gray-700 px-3 py-1 rounded-md flex items-center"
              >
                {tag}
                <FaTimes
                  className="ml-2 cursor-pointer"
                  onClick={() => deleteTag(index)}
                />
              </span>
            ))}
          </div>
        </div>

        {/* Authors Input */}
        {/* <div className="mb-4">
          <label className="block text-gray-700">Authors</label>
          <div className="flex space-x-2">
            <input
              type="text"
              value={authorInput}
              onChange={(e) => setAuthorInput(e.target.value)}
              className="w-full border border-gray-300 rounded-md p-3 focus:border-gray-500 focus:ring-gray-500"
              placeholder="Add an author"
            />
            <button
              type="button"
              onClick={addAuthor}
              className="bg-gray-800 text-white px-4 py-2 rounded-md hover:bg-gray-700"
            >
              Add
            </button>
          </div>
          <div className="mt-2 flex flex-wrap gap-2">
            {formData.authors.map((author, index) => (
              <span
                key={index}
                className="bg-gray-200 text-gray-700 px-3 py-1 rounded-md flex items-center"
              >
                {author.name}
                <FaTimes
                  className="ml-2 cursor-pointer"
                  onClick={() => deleteAuthor(index)}
                />
              </span>
            ))}
          </div>
        </div> */}

        <div className="flex justify-end space-x-4">
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Submitting..." : "Submit"}
          </button>
          <button
            type="button"
            onClick={onClose}
            className="bg-gray-500 text-white px-4 py-2 rounded-md hover:bg-gray-600"
          >
            Cancel
          </button>
        </div>
        {error && <div className="text-red-500 mt-4">{error}</div>}
      </form>
    </Modal>
  );
};

export default EditBlogModal;
