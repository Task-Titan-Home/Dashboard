import React, { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import useSWR from "swr";
import graphqlFetcher from "@/app/graphql/graphql-fetcher";
import AddColumn from "./AddColumn";
import ColumnItem from "./ColumnItems";
import TaskModal from "./TaskModal";
import TaskDetailModal from "./TaskDetailsModal";
import addColumnMutation from "@/app/graphql/tasks/add-column";
import useCurrentProjects from "../hooks/useCurrentProjects";
import updateTaskOrder from "@/app/graphql/tasks/update-task-order";
import { Project } from "@/app/types/project";

const GET_COLUMNS_QUERY = /* GraphQL */ `
  query GetColumns {
    columns {
      id
      name
      tasks {
        id
        title
        description
        deadline
        priority
        status
        assignedTo {
          id
          email
          name
        }
      }
    }
  }
`;

const Columns = () => {
  const { data, error, mutate } = useSWR([GET_COLUMNS_QUERY], graphqlFetcher);
  const {
    projects,
    isLoading: isLoadingProjects,
    isError: isErrorProjects,
  } = useCurrentProjects();
  const [isAddingTask, setIsAddingTask] = useState<string | null>(null);
  const [selectedProjectId, setSelectedProjectId] = useState<string | null>(
    null
  );
  const [selectedTask, setSelectedTask] = useState<Task | null>(null);
  const [selectedColumnId, setSelectedColumnId] = useState<string | null>(null);

  useEffect(() => {
    if (projects.length > 0) {
      setSelectedProjectId(projects[0].id);
    }
  }, [projects]);

  // Handle deleting a column from the UI after mutation
  const handleDeleteColumn = (columnId: string) => {
    mutate((prevData: any) => {
      return prevData.filter(
        (column: { id: string }) => column.id !== columnId
      );
    }, false);
  };

  const handleAddColumn = async (columnInput: string) => {
    if (!columnInput.trim())
      return console.error("Column name cannot be empty.");
    if (!selectedProjectId) return console.error("No project selected");

    const response = await addColumnMutation({
      name: columnInput,
      projectId: selectedProjectId,
    });
    if (response.errors)
      return console.error("Failed to create column:", response.errors);

    mutate((prevData: any) => [...prevData, response], false);
  };

  const handleSaveTask = (newTask: { columnId: any }) => {
    mutate((prevData: any[]) => {
      return prevData.map((column: { id: any; tasks: any }) => {
        if (column.id === newTask.columnId) {
          return { ...column, tasks: [...column.tasks, newTask] };
        }
        return column;
      });
    }, false);
  };

  const handleTaskClick = (task: any) => {
    setSelectedTask(task);
  };

  const handleTaskSave = (updatedTask: { id: any }) => {
    mutate((prevData: any[]) => {
      return prevData.map((column: { tasks: any[] }) => {
        if (column.tasks.some((t: { id: any }) => t.id === updatedTask.id)) {
          return {
            ...column,
            tasks: column.tasks.map((t: { id: any }) =>
              t.id === updatedTask.id ? updatedTask : t
            ),
          };
        }
        return column;
      });
    }, false);
  };

  const updateTaskOrderOnServer = async (
    columnId: string,
    newTasks: Task[]
  ) => {
    try {
      const taskIds = newTasks.map((task) => task.id);
      await updateTaskOrder(columnId, taskIds);
    } catch (error) {
      console.error("Error updating task order on server:", error);
    }
  };

  if (error || isErrorProjects) return <div>Failed to load data</div>;
  if (isLoadingProjects || !data) return <div>Loading...</div>;
  //
  return (
    <div className="flex flex-grow px-10 mt-4 space-x-6 overflow-auto">
      <AnimatePresence>
        {data.map((column) => (
          <motion.div
            key={column.id}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.3 }}
          >
            <ColumnItem
              column={column}
              setIsAddingTask={() => {
                setIsAddingTask(column.id);
                setSelectedColumnId(column.id);
              }}
              setTasks={handleSaveTask}
              onTaskClick={handleTaskClick}
              updateTaskOrderOnServer={updateTaskOrderOnServer}
              onDeleteColumn={handleDeleteColumn}
            />
          </motion.div>
        ))}
      </AnimatePresence>
      <div className="flex-shrink-0 w-6"></div>
      <AddColumn handleAddColumn={handleAddColumn} />
      {isAddingTask && selectedColumnId && selectedProjectId && (
        <TaskModal
          isOpen={isAddingTask !== null}
          onClose={() => setIsAddingTask(null)}
          onSave={handleSaveTask}
          projectId={selectedProjectId}
          columnId={selectedColumnId}
        />
      )}
      {selectedTask && (
        <TaskDetailModal
          task={selectedTask}
          onClose={() => setSelectedTask(null)}
          onSave={handleTaskSave}
        />
      )}
    </div>
  );
};

export default Columns;
