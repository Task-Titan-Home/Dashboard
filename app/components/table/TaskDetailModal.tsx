import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const backdropVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const modalVariants = {
  hidden: { opacity: 0, y: "-100vh" },
  visible: { opacity: 1, y: "0" },
};

const TaskDetailModal = ({ task, isOpen, onClose, onSave }) => {
  const [title, setTitle] = useState(task.title);
  const [description, setDescription] = useState(task.description);
  const [deadline, setDeadline] = useState(task.deadline);
  const [status, setStatus] = useState(task.status);
  const [priority, setPriority] = useState(task.priority);
  const [assignedTo, setAssignedTo] = useState(task.assignedTo?.name || "");

  const handleSave = () => {
    const updatedTask = {
      ...task,
      title,
      description,
      deadline,
      status,
      priority,
      assignedTo,
    };
    onSave(updatedTask);
    onClose(); // Close the modal after saving
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center"
          variants={backdropVariants}
          initial="hidden"
          animate="visible"
          exit="hidden"
        >
          <motion.div
            className="bg-zinc-900 p-8 rounded-lg shadow-lg max-w-3xl w-full"
            variants={modalVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
          >
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-xl font-semibold text-white">Edit Task</h3>
              <button
                onClick={onClose}
                className="text-gray-400 hover:text-gray-200"
              >
                Close
              </button>
            </div>
            <div className="grid grid-cols-2 gap-6">
              {/* Task Title */}
              <div>
                <label className="block text-gray-400 mb-2">Task Title</label>
                <input
                  type="text"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  className="w-full px-4 py-2 text-gray-200 bg-zinc-800 rounded focus:outline-none"
                />
              </div>
              {/* Task Deadline */}
              <div>
                <label className="block text-gray-400 mb-2">Deadline</label>
                <input
                  type="date"
                  value={
                    deadline
                      ? new Date(deadline).toISOString().substring(0, 10)
                      : ""
                  }
                  onChange={(e) => setDeadline(e.target.value)}
                  className="w-full px-4 py-2 text-gray-200 bg-zinc-800 rounded focus:outline-none"
                />
              </div>
              {/* Task Status */}
              <div>
                <label className="block text-gray-400 mb-2">Status</label>
                <select
                  value={status}
                  onChange={(e) => setStatus(e.target.value)}
                  className="w-full px-4 py-2 text-gray-200 bg-zinc-800 rounded focus:outline-none"
                >
                  <option value="OPEN">Open</option>
                  <option value="IN_PROGRESS">In Progress</option>
                  <option value="CLOSED">Closed</option>
                </select>
              </div>
              {/* Task Priority */}
              <div>
                <label className="block text-gray-400 mb-2">Priority</label>
                <select
                  value={priority}
                  onChange={(e) => setPriority(e.target.value)}
                  className="w-full px-4 py-2 text-gray-200 bg-zinc-800 rounded focus:outline-none"
                >
                  <option value="LOW">Low</option>
                  <option value="MEDIUM">Medium</option>
                  <option value="HIGH">High</option>
                </select>
              </div>
              {/* Assigned To */}
              <div>
                <label className="block text-gray-400 mb-2">Assigned To</label>
                <input
                  type="text"
                  value={assignedTo}
                  onChange={(e) => setAssignedTo(e.target.value)}
                  className="w-full px-4 py-2 text-gray-200 bg-zinc-800 rounded focus:outline-none"
                />
              </div>
            </div>
            {/* Task Description */}
            <div className="mt-6">
              <label className="block text-gray-400 mb-2">Description</label>
              <textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="w-full px-4 py-2 text-gray-200 bg-zinc-800 rounded focus:outline-none"
                rows="4"
              />
            </div>
            {/* Action Buttons */}
            <div className="mt-8 flex justify-end space-x-4">
              <button
                onClick={onClose}
                className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-500"
              >
                Cancel
              </button>
              <button
                onClick={handleSave}
                className="px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-500"
              >
                Save Changes
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default TaskDetailModal;
