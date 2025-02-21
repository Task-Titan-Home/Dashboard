import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import useSWR from "swr";
import graphqlFetcher from "@/app/graphql/graphql-fetcher"; // Adjust the path based on your structure
import TaskDetailModal from "./TaskDetailModal"; // Assume a modal component
import AddTaskModal from "./AddTaskModal"; // Assume an add task modal component

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

const TableComponent = () => {
  const { data, error, mutate } = useSWR([GET_COLUMNS_QUERY], graphqlFetcher);
  const [selectedTask, setSelectedTask] = useState(null);
  const [isAddTaskModalOpen, setAddTaskModalOpen] = useState(false);

  const columns = data;

  if (error) return <div>Failed to load tasks.</div>;
  if (!data) return <div>Loading tasks...</div>;

  const tableItems = columns.flatMap((column: any) =>
    (column.tasks || []).map((task: any) => ({
      ...task,
      date: task.deadline ? new Date(task.deadline).toLocaleDateString() : "-",
      status: task.status || "Unknown",
      priority: task.priority || "Unknown",
      deadline: task.deadline
        ? new Date(task.deadline).toLocaleDateString()
        : "-",
    }))
  );

  const handleViewDetails = (task: any) => {
    setSelectedTask(task);
  };

  const closeModal = () => {
    setSelectedTask(null);
  };

  const handleAddTask = (newTask) => {
    mutate([...columns, newTask], false);
    setAddTaskModalOpen(false);
  };

  return (
    <div className="w-full px-4 md:px-8">
      <div className="items-start justify-between md:flex">
        <div className="w-full">
          <h3 className="text-gray-300 text-xl font-bold sm:text-2xl">
            Task Management
          </h3>
          <p className="text-gray-400 mt-2">
            Manage your tasks efficiently with an overview of the current tasks,
            their status, priority, and deadlines.
          </p>
        </div>
        <button
          onClick={() => setAddTaskModalOpen(true)}
          className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-500 transition-all duration-200 shadow-md"
        >
          Add Task
        </button>
      </div>
      <div className="mt-12 w-full overflow-auto">
        <table className="w-full table-auto text-sm text-left border-collapse bg-neutral-900 text-white rounded-lg shadow-lg p-4">
          <thead className="text-gray-400 font-medium border-b border-gray-700">
            <tr>
              <th className="py-4 px-6 text-base">Task</th>
              <th className="py-4 px-6 text-base">Start Date</th>
              <th className="py-4 px-6 text-base">Status</th>
              <th className="py-4 px-6 text-base">Priority</th>
              <th className="py-4 px-6 text-base">Deadline</th>
              <th className="py-4 px-6"></th>
            </tr>
          </thead>
          <motion.tbody
            layout
            className="divide-y divide-gray-800"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <AnimatePresence>
              {tableItems.map((item: any, idx: number) => (
                <motion.tr
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                  className="hover:bg-gray-800 transition duration-200 rounded-lg"
                >
                  <td className="px-6 py-4 whitespace-nowrap font-semibold">
                    {item.title}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">{item.date}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span
                      className={`px-3 py-2 rounded-full font-semibold text-xs ${
                        item.status === "OPEN"
                          ? "text-green-400 bg-green-900"
                          : item.status === "IN_PROGRESS"
                          ? "text-yellow-400 bg-yellow-900"
                          : "text-gray-400 bg-gray-900"
                      }`}
                    >
                      {item.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span
                      className={`px-3 py-2 rounded-full font-semibold text-xs ${
                        item.priority === "HIGH"
                          ? "text-red-400 bg-red-900"
                          : item.priority === "MEDIUM"
                          ? "text-yellow-400 bg-yellow-900"
                          : "text-blue-400 bg-blue-900"
                      }`}
                    >
                      {item.priority}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {item.deadline}
                  </td>
                  <td className="px-6 py-4 text-right whitespace-nowrap">
                    <button
                      onClick={() => handleViewDetails(item)}
                      className="py-2 px-4 text-gray-300 hover:text-gray-100 duration-150 hover:bg-gray-600 border rounded-lg border-gray-500 transition-all duration-200"
                    >
                      View Details
                    </button>
                  </td>
                </motion.tr>
              ))}
            </AnimatePresence>
          </motion.tbody>
        </table>
      </div>

      {/* Task Details Modal */}
      {selectedTask && (
        <TaskDetailModal
          task={selectedTask}
          isOpen={Boolean(selectedTask)}
          onClose={closeModal}
        />
      )}

      {/* Add Task Modal */}
      {isAddTaskModalOpen && (
        <AddTaskModal
          isOpen={isAddTaskModalOpen}
          onClose={() => setAddTaskModalOpen(false)}
          onSave={handleAddTask}
        />
      )}
    </div>
  );
};

export default TableComponent;
