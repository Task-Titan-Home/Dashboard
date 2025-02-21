import React, { useRef } from "react";
import { format, parseISO, isValid } from "date-fns";
import { FaUserCircle } from "react-icons/fa";

interface User {
  id: string;
  name: string;
  email: string;
}

interface Task {
  id: string;
  title: string;
  description: string;
  deadline: string;
  labels?: string[]; // Make labels optional
  assignedTo: {
    id: string;
    name: string;
    email: string;
  };
  priority: string;
  status: string;
}


interface TaskCardProps {
  task: Task;
  onClick: (task: Task) => void;
}

const TaskCard: React.FC<TaskCardProps> = ({ task, onClick }) => {
  const isDragging = useRef(false);

  const date = parseISO(task.deadline);
  const formattedDate = isValid(date) ? format(date, "PPPP") : "No deadline";

  return (
    <div
      className="flex flex-col bg-customGrey rounded-lg shadow-md p-4 transition-colors duration-150 ease-in-out cursor-pointer"
      onMouseDown={() => {
        isDragging.current = false;
      }}
      onMouseMove={() => {
        isDragging.current = true;
      }}
      onMouseUp={() => {
        if (!isDragging.current) {
          onClick(task);
        }
      }}
    >
      <div className="flex justify-between items-center mb-2">
        <h3 className="text-lg font-semibold">{task.title}</h3>
        <div className="flex items-center">
          <FaUserCircle className="text-gray-500 mr-2" />
          <span className="text-xs text-gray-600">
            {task.assignedTo ? task.assignedTo.name : "Unassigned"}
          </span>
        </div>
      </div>
      <div className="text-xs text-gray-500 mb-1">{formattedDate}</div>
      <p className="text-sm text-gray-700 mb-3">{task.description}</p>
      <div className="flex items-center gap-2 flex-wrap">
        {task.labels?.map((label, index) => (
          <span
            key={index}
            className="px-2 py-1 text-xs text-white bg-indigo-500 rounded"
          >
            {label}
          </span>
        ))}
        <span
          className={`px-3 py-1 text-xs rounded-full text-white ${getPriorityColor(
            task.priority
          )}`}
        > 
          {task.priority}
        </span>
        <span
          className={`px-3 py-1 text-xs rounded-full text-white ${getStatusColor(
            task.status
          )}`}
        >
          {task.status}
        </span>
      </div>
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

export default TaskCard;
