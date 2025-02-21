import React from "react";
import { Reorder } from "framer-motion";
import TaskCard from "./TaskCard";
interface Task {
  id: string;
  title: string; // The task's title
  description: string; // Description of the task
  deadline: string; // Deadline for the task
  labels: string[]; // Any labels for the task
  assignedTo: string; // Who the task is assigned to
  priority: string; // Task priority (low, medium, high)
  status: string; // Task status (in-progress, completed, etc.)
}


interface ColumnProps {
  column: string;
  tasks: Task[];
  setIsAddingTask: (column: string) => void;
  setTasks: React.Dispatch<React.SetStateAction<{ [key: string]: Task[] }>>;
}

const Column: React.FC<ColumnProps> = ({
  column,
  tasks,
  setIsAddingTask,
  setTasks,
}) => (
  <div className="flex flex-col flex-shrink-0 w-72 bg-customGrey2 p-4 rounded-lg shadow-md">
    <div className="flex items-center flex-shrink-0 h-10 px-2 mb-2">
      <span className="block text-sm font-semibold capitalize">{column}</span>
      <span className="flex items-center justify-center w-5 h-5 ml-2 text-sm font-semibold text-indigo-500 bg-customGrey rounded-full bg-opacity-30">
        {tasks.length}
      </span>
      <button
        className="flex items-center justify-center w-6 h-6 ml-auto text-indigo-500 rounded hover:bg-indigo-500 hover:text-white"
        onClick={() => setIsAddingTask(column)}
      >
        <svg
          className="w-5 h-5"
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
    <Reorder.Group
      axis="y"
      onReorder={(newTasks) =>
        setTasks((prevTasks) => ({
          ...prevTasks,
          [column]: newTasks,
        }))
      }
      values={tasimport React, { useRef } from "react";
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
  labels: string[];
  assignedTo: {
    id: string;
    name: string;
    email: string;
  }; // This version of assignedTo is an object
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
ks}
    >
      {tasks.map((task) => (
        <Reorder.Item key={task.id} value={task}>
          <TaskCard key={task.id} task={task} />
        </Reorder.Item>
      ))}
    </Reorder.Group>
  </div>
);

export default Column;
