import React, { useState, useEffect } from "react";
import Modal from "./Modal";
import addTaskMutation from "@/app/graphql/tasks/add-task";
import { TaskPriority } from "@/app/types/task-priority";
import { TaskStatus } from "@/app/types/task-status";
import dynamic from "next/dynamic";
import "react-quill/dist/quill.snow.css"; // Import the styles for the editor
import DatePicker from "react-datepicker"; // Import DatePicker component
import "react-datepicker/dist/react-datepicker.css"; // Import DatePicker styles

const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

interface TaskModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (task: any) => void;
  projectId: string;
  columnId: string;
}

const TaskModal: React.FC<TaskModalProps> = ({
  isOpen,
  onClose,
  onSave,
  projectId,
  columnId,
}) => {
  const [titleInput, setTitleInput] = useState("");
  const [descriptionInput, setDescriptionInput] = useState("");
  const [deadlineInput, setDeadlineInput] = useState<Date | null>(null); // Use Date object
  const [priorityInput, setPriorityInput] = useState<TaskPriority>(
    TaskPriority.LOW
  );
  const [statusInput, setStatusInput] = useState<TaskStatus>(TaskStatus.OPEN);
  const [assigneeInput, setAssigneeInput] = useState("");

  const handleSave = async () => {
    if (!deadlineInput) {
      console.error("Deadline is required.");
      return;
    }

    const fullDateTime = deadlineInput.toISOString(); // Convert to ISO format for backend

    const newTaskDetails = {
      title: titleInput,
      description: descriptionInput,
      deadline: fullDateTime,
      priority: priorityInput,
      status: statusInput,
      columnId,
      projectId,
      assignedToId: assigneeInput,
    };

    try {
      const result = await addTaskMutation(newTaskDetails);
      if (result) {
        onSave(result); // Pass the new task up to be added to the column
        resetForm();
      }
    } catch (error) {
      console.error("Error adding task:", error);
    }

    onClose(); // Close modal whether the operation succeeds or not
  };

  const resetForm = () => {
    setTitleInput("");
    setDescriptionInput("");
    setDeadlineInput(null); // Reset DatePicker
    setPriorityInput(TaskPriority.LOW);
    setStatusInput(TaskStatus.OPEN);
    setAssigneeInput("");
  };

  useEffect(() => {
    // Reset form when modal is closed
    if (!isOpen) {
      resetForm();
    }
  }, [isOpen]);

  return (
    <Modal isOpen={isOpen} onClose={onClose} onSave={handleSave}>
      <div className="space-y-4">
        <h2 className="text-xl font-bold">Add New Task</h2>
        <input
          className="w-full p-2 text-sm bg-customGrey rounded focus:outline-none focus:ring"
          placeholder="Enter task title"
          value={titleInput}
          onChange={(e) => setTitleInput(e.target.value)}
        />

        {/* DatePicker for Deadline */}
        <div>
          <label className="block text-sm text-gray-300">Deadline</label>
          <DatePicker
            selected={deadlineInput}
            onChange={(date) => setDeadlineInput(date)}
            dateFormat="yyyy/MM/dd"
            className="w-full p-2 text-sm bg-customGrey rounded focus:outline-none focus:ring"
            placeholderText="Select deadline"
          />
        </div>

        <ReactQuill
          value={descriptionInput}
          onChange={setDescriptionInput}
          className="bg-customGrey rounded"
        />

        <div className="grid grid-cols-2 gap-4">
          <select
            className="w-full p-2 text-sm bg-customGrey rounded focus:outline-none focus:ring"
            value={priorityInput}
            onChange={(e) => setPriorityInput(e.target.value as TaskPriority)}
          >
            <option value={TaskPriority.LOW}>Low</option>
            <option value={TaskPriority.MEDIUM}>Medium</option>
            <option value={TaskPriority.HIGH}>High</option>
          </select>
          <select
            className="w-full p-2 text-sm bg-customGrey rounded focus:outline-none focus:ring"
            value={statusInput}
            onChange={(e) => setStatusInput(e.target.value as TaskStatus)}
          >
            <option value={TaskStatus.OPEN}>Open</option>
            <option value={TaskStatus.IN_PROGRESS}>In Progress</option>
            <option value={TaskStatus.COMPLETED}>Completed</option>
          </select>
        </div>

        <input
          className="w-full p-2 text-sm bg-customGrey rounded focus:outline-none focus:ring"
          placeholder="Enter assignee ID"
          value={assigneeInput}
          onChange={(e) => setAssigneeInput(e.target.value)}
        />
      </div>
    </Modal>
  );
};

export default TaskModal;
