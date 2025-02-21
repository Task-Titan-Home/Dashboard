import { motion } from "framer-motion";
import React, { useState } from "react";

interface AddColumnProps {
  handleAddColumn: (columnInput: string) => void;
}

const AddColumn: React.FC<AddColumnProps> = ({ handleAddColumn }) => {
  const [isAdding, setIsAdding] = useState<boolean>(false);
  const [columnInput, setColumnInput] = useState<string>("");

  const onSubmit = () => {
    handleAddColumn(columnInput);
    setColumnInput(""); // Clear input after adding
    setIsAdding(false); // Go back to "+" after adding
  };

  return (
    <motion.div
      whileHover={{ scale: 1.05 }} // Slight scale on hover
      className="flex flex-col flex-shrink-0 w-72 bg-customGrey3 bg-opacity-10 p-6 rounded-lg shadow-lg transition-all duration-300 hover:bg-opacity-20 hover:shadow-2xl relative"
      style={{ backdropFilter: "blur(15px)" }} // Apply blur for a professional glass effect
    >
      {/* Middle Gradient Effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white via-opacity-20 to-transparent pointer-events-none rounded-lg" />

      {/* Show the "+" sign or the input form depending on state */}
      {!isAdding ? (
        <div className="flex items-center justify-center h-full z-10">
          <button
            className="flex items-center justify-center w-12 h-12 text-indigo-400 bg-transparent border border-indigo-400 rounded-full hover:bg-indigo-500 hover:text-white transition-all duration-200"
            onClick={() => setIsAdding(true)}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 6v6m0 0v6m0-6h6m-6 0H6"
              ></path>
            </svg>
          </button>
        </div>
      ) : (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="w-full"
        >
          {/* Input is now positioned at the top */}
          <div className="w-full">
            <input
              className="w-full h-10 px-4 text-sm text-white bg-gray-800 bg-opacity-20 rounded-full border border-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 placeholder-gray-300"
              type="text"
              value={columnInput}
              onChange={(e) => setColumnInput(e.target.value)}
              placeholder="Enter column name"
            />
          </div>

          {/* Buttons for Add/Cancel are at the bottom */}
          <div className="mt-4 flex justify-between">
            <button
              className="px-4 py-2 text-white bg-indigo-400 rounded-full hover:bg-indigo-500 transition-all duration-200 shadow-md"
              onClick={onSubmit}
            >
              Add
            </button>
            <button
              className="px-4 py-2 text-gray-400 bg-transparent hover:text-white transition-all duration-200"
              onClick={() => setIsAdding(false)}
            >
              Cancel
            </button>
          </div>
        </motion.div>
      )}
    </motion.div>
  );
};

export default AddColumn;
