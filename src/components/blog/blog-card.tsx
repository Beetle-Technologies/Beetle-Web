import React from "react";
import { FaEdit, FaTrash } from "react-icons/fa";
import { PiBugBeetle } from "react-icons/pi";
import { BlogContent } from "../../types";

interface BlogCardProps extends BlogContent {
  showActions?: boolean;
  onEdit?: (id: number) => void;
  onDelete?: (id: number) => void;
}

const BlogCard: React.FC<BlogCardProps> = ({
  id,
  title,
  subtitle,
  image_url,
  tags,
  link,
  authors,
  showActions = false,
  onEdit,
  onDelete,
}) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <a href={link} target="_blank" rel="noopener noreferrer">
        {image_url ? (
          <img
            src={image_url}
            alt={title}
            className="w-full h-48 object-cover hover:scale-110 transition ease-in-out duration-500"
          />
        ) : (
          <div className="w-full h-48 bg-gray-200 flex items-center justify-center text-gray-400 font-bold text-4xl">
            {authors[0].name.split(" ").map((part, index) => (
              <span key={index}>{part.charAt(0)}</span>
            ))}
          </div>
        )}
        <div className="p-4">
          <h3 className="text-lg font-bold mb-2 truncate uppercase">{title}</h3>
          <p className="text-gray-600 mb-4 truncate">{subtitle}</p>
          <div className="flex items-center text-gray-500 text-sm mb-4">
            <PiBugBeetle className="mr-2" />
            <span>{authors.map((author) => author.name).join(", ")}</span>
          </div>
          <div className="grid grid-cols-3 gap-x-2 gap-y-2 items-center pb-2">
            {tags.map((tag, index) => (
              <span
                key={index}
                className="bg-gray-200 px-2 py-1 rounded truncate text-xs"
              >
                {tag}
              </span>
            ))}
          </div>
          {showActions && (
            <div className="flex justify-end space-x-4">
              <button
                onClick={() => onEdit && onEdit(id)}
                className="text-yellow-500 hover:text-yellow-600"
              >
                <FaEdit />
              </button>
              <button
                onClick={() => onDelete && onDelete(id)}
                className="text-red-500 hover:text-red-600"
              >
                <FaTrash />
              </button>
            </div>
          )}
        </div>
      </a>
    </div>
  );
};

export default BlogCard;
