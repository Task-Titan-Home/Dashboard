import React, { useState } from "react";
import { Reorder } from "framer-motion";
import TaskCard from "./TaskCard";
import { deleteColumn as deleteColumnMutation } from "../../graphql/tasks/delete-column";
import StaggeredDropDown from "./StaggeredDropDown"; // Import StaggeredDropDown for the dropdown

interface Task {
  id: string;
  title: string;
  description: string;
  deadline: string;
  labels?: string[];
  assignedTo: {
    id: string;
    name: string;
    email: string;
  };
  priority: string;
  status: string;
}

interface ColumnProps {
  columnId: string;
  column: string;
  tasks: Task[];
  setIsAddingTask: (column: string) => void;
  setTasks: (columnId: string, newTasks: Task[]) => void;
  onTaskClick: (task: Task) => void;
  updateTaskOrderOnServer: (columnId: string, newTasks: Task[]) => void;
  onDeleteColumn: (columnId: string) => void;
}

const Column: React.FC<ColumnProps> = ({
  columnId,
  column,
  tasks,
  setIsAddingTask,
  setTasks,
  onTaskClick,
  updateTaskOrderOnServer,
  onDeleteColumn,
}) => {
  const [contextMenu, setContextMenu] = useState<{
    x: number;
    y: number;
  } | null>(null);
  const [showDropdown, setShowDropdown] = useState(false);

  const handleDeleteColumn = async () => {
    try {
      const response = await deleteColumnMutation(columnId);
      if (response) {
        console.log("Column deleted successfully");
        onDeleteColumn(columnId); // Update UI to remove column
      } else {
        console.error("Failed to delete column");
      }
    } catch (error) {
      console.error("Error deleting column:", error);
    }
  };

  const handleContextMenu = (event: React.MouseEvent) => {
    event.preventDefault();
    setContextMenu({ x: event.pageX, y: event.pageY });
    setShowDropdown(true); // Show the dropdown on right-click
  };

  const handleOptionClick = (option: string) => {
    setShowDropdown(false); // Hide the context menu after selecting an option
    if (option === "delete") {
      handleDeleteColumn();
    }
    // Add more actions here for other options like "edit"
  };

  return (
    <div
      className="relative flex flex-col flex-shrink-0 w-72 bg-customGrey2 p-4 rounded-lg shadow-md space-y-4"
      onContextMenu={handleContextMenu} // Trigger the right-click context menu
    >
      {/* Delete Column Button positioned at the top left */}
      <button
        className="absolute top-2 left-2 p-1 rounded-full bg-red-500 text-white hover:bg-red-600 transition-colors"
        onClick={handleDeleteColumn}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9 3v1H5v2h14V4h-4V3H9zM5 7v13a2 2 0 002 2h10a2 2 0 002-2V7H5z"
          />
        </svg>
      </button>

      <div className="flex items-center justify-between mb-2">
        <div>
          <span className="text-sm font-semibold capitalize">{column}</span>
          <span className="ml-2 text-xs text-gray-500">{tasks.length}</span>
        </div>

        {/* Add Task Button */}
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

      <Reorder.Group
        axis="y"
        onReorder={(newTasks) => {
          setTasks(columnId, newTasks);
          updateTaskOrderOnServer(columnId, newTasks);
        }}
        values={tasks}
        className="space-y-2"
      >
        {tasks.map((task) => (
          <Reorder.Item key={task.id} value={task} className="mb-2">
            <TaskCard task={task} onClick={onTaskClick} />
          </Reorder.Item>
        ))}
      </Reorder.Group>

      {/* Custom Dropdown Menu */}
      {showDropdown && contextMenu && (
        <div
          style={{
            position: "absolute",
            top: `${contextMenu.y}px`,
            left: `${contextMenu.x}px`,
            zIndex: 50,
          }}
        >
          <StaggeredDropDown />
        </div>
      )}
    </div>
  );
};

export default Column;
