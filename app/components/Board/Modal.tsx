import React, { FC } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiPlus, FiX } from "react-icons/fi";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: () => void;
  isSaveDisabled: boolean;
}

const Modal: FC<ModalProps> = ({
  isOpen,
  onClose,
  onSave,
  isSaveDisabled,
  children,
}) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="bg-neutral-800 p-6 rounded-lg shadow-lg w-11/12 max-w-3xl"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold text-white">New Task</h2>
              <button
                className="text-gray-400 hover:text-white"
                onClick={onClose}
              >
                <FiX size={24} />
              </button>
            </div>
            {children}
            <div className="flex justify-end mt-4">
              <button
                className="mr-2 px-4 py-2 bg-gray-600 rounded hover:bg-gray-500"
                onClick={onClose}
              >
                Cancel
              </button>
              <button
                className={`px-4 py-2 rounded ${
                  isSaveDisabled
                    ? "bg-gray-600"
                    : "bg-indigo-500 hover:bg-indigo-600 text-white"
                }`}
                onClick={onSave}
                disabled={isSaveDisabled}
              >
                Save
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}; 

export default Modal;
