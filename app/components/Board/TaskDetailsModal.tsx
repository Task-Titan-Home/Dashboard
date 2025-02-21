import React from "react";
import { format, parseISO } from "date-fns";
import { FaUserCircle } from "react-icons/fa";
import { motion } from "framer-motion";

interface Task {
  id: string;
  title: string;
  deadline: string;
  description: string;
  labels?: string[];
  assignedToId: string;
  priority: string;
  status: string;
}

interface TaskDetailModalProps {
  task: Task;
  onClose: () => void;
  onSave: (task: Task) => void;
}
 
const TaskDetailModal: React.FC<TaskDetailModalProps> = ({
  task,
  onClose,
  onSave,
}) => {
  const [editableTask, setEditableTask] = React.useState<Task>({
    ...task,
    deadline: task.deadline
      ? format(parseISO(task.deadline), "yyyy-MM-dd")
      : "", // Ensure proper date format for input
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setEditableTask({ ...editableTask, [name]: value });
  };

  const handleSave = () => {
    onSave(editableTask);
    onClose();
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
        className="bg-neutral-900 p-6 rounded-lg shadow-md w-full max-w-lg"
      >
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold text-white">Task Details</h2>
          <button className="text-gray-400 hover:text-white" onClick={onClose}>
            <FaUserCircle size={24} />
          </button>
        </div>
        <div className="mb-4">
          <label className="block text-sm text-gray-500 mb-1">Title</label>
          <input
            type="text"
            name="title"
            value={editableTask.title}
            onChange={handleInputChange}
            className="w-full p-2 bg-neutral-800 text-white rounded-md"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm text-gray-500 mb-1">Deadline</label>
          <input
            type="date"
            name="deadline"
            value={editableTask.deadline}
            onChange={handleInputChange}
            className="w-full p-2 bg-neutral-800 text-white rounded-md"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm text-gray-500 mb-1">
            Description
          </label>
          <textarea
            name="description"
            value={editableTask.description}
            onChange={handleInputChange}
            className="w-full p-2 bg-neutral-800 text-white rounded-md"
            rows={4}
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm text-gray-500 mb-1">Labels</label>
          <div className="flex gap-2 flex-wrap">
            {editableTask.labels?.map((label, index) => (
              <span
                key={index}
                className="px-2 py-1 text-xs text-white bg-indigo-500 rounded"
              >
                {label}
              </span>
            ))}
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div>
            <label className="block text-sm text-gray-500 mb-1">Priority</label>
            <input
              type="text"
              name="priority"
              value={editableTask.priority}
              onChange={handleInputChange}
              className={`w-full p-2 rounded-full text-white ${getPriorityColor(
                editableTask.priority
              )}`}
            />
          </div>
          <div>
            <label className="block text-sm text-gray-500 mb-1">Status</label>
            <input
              type="text"
              name="status"
              value={editableTask.status}
              onChange={handleInputChange}
              className={`w-full p-2 rounded-full text-white ${getStatusColor(
                editableTask.status
              )}`}
            />
          </div>
        </div>
        <div className="flex justify-end space-x-4">
          <button
            className="px-4 py-2 bg-gray-700 text-gray-300 rounded-md hover:bg-gray-600"
            onClick={onClose}
          >
            Cancel
          </button>
          <button
            className="px-4 py-2 bg-indigo-500 text-white rounded-md hover:bg-indigo-600"
            onClick={handleSave}
          >
            Save
          </button>
        </div>
      </motion.div>
    </div>
  );
};

function getPriorityColor(priority: string) {
  switch (priority) {
    case "HIGH":
      return "bg-red-600";
    case "MEDIUM":
      return "bg-yellow-500";
    case "LOW":
      return "bg-green-500";
    default:
      return "bg-gray-400";
  }
}

function getStatusColor(status: string) {
  switch (status) {
    case "OPEN":
      return "bg-blue-500";
    case "IN_PROGRESS":
      return "bg-orange-500";
    case "COMPLETED":
      return "bg-green-700";
    default:
      return "bg-gray-400";
  }
}

export default TaskDetailModal;
