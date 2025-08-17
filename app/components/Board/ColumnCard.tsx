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
      onReorder={(newTasks: Task[]) =>
        setTasks((prevTasks) => ({
          ...prevTasks,
          [column]: newTasks,
        }))
      }
      values={tasks}
      className="flex flex-col space-y-2"
    >
      {tasks.map((task) => (
        <Reorder.Item key={task.id} value={task}>
          <TaskCard task={task} />
        </Reorder.Item>
      ))}
    </Reorder.Group>
  </div>
);

export default Column;