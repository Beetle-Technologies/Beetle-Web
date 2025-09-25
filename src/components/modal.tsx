import React, { useEffect } from "react";
import ReactDOM from "react-dom";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
  // Prevent scrolling when the modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div
        className="relative bg-white p-6 rounded-lg shadow-lg w-full max-w-xl"
        onClick={(e) => e.stopPropagation()} // Prevent click events from bubbling up to the overlay
      >
        <button
          onClick={onClose}
          className="absolute top-2 right-5 hover:border-b-2 border-b-black font-bold text-2xl"
        >
          &times;
        </button>
        {children}
      </div>
    </div>,
    document.getElementById("modal-root")!
  );
};

export default Modal;
