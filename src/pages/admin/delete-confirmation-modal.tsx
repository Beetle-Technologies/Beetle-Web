import React from "react";
import Modal from "../../components/modal";

interface DeleteConfirmationModalProps {
  isOpen: boolean;
  onClose: () => void;
  onDelete: () => void;
  isSubmitting: boolean;
  error: string | null;
}

const DeleteConfirmationModal: React.FC<DeleteConfirmationModalProps> = ({
  isOpen,
  onClose,
  onDelete,
  isSubmitting,
  error,
}) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">
        Confirm Delete
      </h2>
      <p className="text-gray-600 mb-4">
        Are you sure you want to delete this blog post?
      </p>
      {error && <p className="text-red-500 mb-4">{error}</p>}
      <div className="flex justify-end space-x-4">
        <button
          onClick={onClose}
          className="bg-gray-300 text-gray-700 px-4 py-2 rounded-md"
          disabled={isSubmitting}
        >
          Cancel
        </button>
        <button
          onClick={onDelete}
          className="bg-red-600 text-white px-4 py-2 rounded-md"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Deleting..." : "Delete"}
        </button>
      </div>
    </Modal>
  );
};

export default DeleteConfirmationModal;
