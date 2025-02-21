// ColumnItem.tsx
import React from "react";
import Column from "./Column";

interface ColumnData {
  id: string;
  name: string;
  tasks: Array<{
    id: string;
    title: string;
    description: string;
    deadline: string;
    labels?: string[];
    assignedTo: { id: string; name: string; email: string };
    priority: string;
    status: string;
  }>;
}

interface ColumnItemProps {
  column: ColumnData;
  setIsAddingTask: (id: string | null) => void;
  setTasks: (columnId: string, tasks: ColumnData["tasks"]) => void;
  onTaskClick: (task: ColumnData["tasks"][0]) => void;
  updateTaskOrderOnServer: (
    columnId: string,
    newTasks: ColumnData["tasks"]
  ) => void;
  onDeleteColumn: (columnId: string) => void; // Pass this to the Column component
}

const ColumnItem: React.FC<ColumnItemProps> = ({
  column,
  setIsAddingTask,
  setTasks,
  onTaskClick,
  updateTaskOrderOnServer,
  onDeleteColumn, // Destructure it here
}) => {
  return (
    <Column
      columnId={column.id} // Pass the columnId prop correctly
      column={column.name}
      tasks={column.tasks}
      setIsAddingTask={() => setIsAddingTask(column.id)}
      setTasks={(tasks) => setTasks(column.id, tasks)}
      onTaskClick={onTaskClick}
      updateTaskOrderOnServer={updateTaskOrderOnServer}
      onDeleteColumn={onDeleteColumn} // Pass it down
    />
  );
};

export default ColumnItem;
