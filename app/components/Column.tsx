import React from "react";
import { Reorder } from "framer-motion";
import TaskCard from "./TaskCard";

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
  assignedTo: User;
  priority: string;
  status: string;
}

interface ColumnProps {
  column: string;
  tasks: Task[];
  setIsAddingTask: (column: string) => void;
  setTasks: (columnId: string, newTasks: Task[]) => void;
  onTaskClick: (task: Task) => void;
  updateTaskOrderOnServer: (columnId: string, newTasks: Task[]) => void;
}

const Column: React.FC<ColumnProps> = ({
  column,
  tasks,
  setIsAddingTask,
  setTasks,
  onTaskClick,
  updateTaskOrderOnServer,
}) => {
  const handleReorder = (newTasks: Task[]) => {
    setTasks(column, newTasks); // Update local state
    updateTaskOrderOnServer(column, newTasks); // Update server
  };

  return (
    <div className="flex flex-col flex-shrink-0 w-72 bg-customGrey2 p-4 rounded-lg shadow-md space-y-4">
      <div className="flex items-center justify-between mb-2">
        <div>
          <span className="text-sm font-semibold capitalize">{column}</span>
          <span className="ml-2 text-xs text-gray-500">{tasks.length}</span>
        </div>
        <button
          className="p-1 rounded-full bg-indigo-500 text-white hover:bg-indigo-600 transition-colors"
          onClick={() => setIsAddingTask(column)}
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
            />
          </svg>
        </button>
      </div>
      <Reorder.Group axis="y" values={tasks} onReorder={handleReorder} className="space-y-2">
        {tasks.map((task) => (
          <Reorder.Item key={task.id} value={task} className="mb-2">
            <TaskCard task={task} onClick={onTaskClick} />
          </Reorder.Item>
        ))}
      </Reorder.Group>
    </div>
  );
};

export default Column;
