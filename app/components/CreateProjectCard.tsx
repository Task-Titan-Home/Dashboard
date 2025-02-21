import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const CreateProjectCard: React.FC<{
  isOpen: boolean;
  onClose: () => void;
  onCreate: (name: string, description: string, workspaceId: string) => void;
}> = ({ isOpen, onClose, onCreate }) => {
  const [projectName, setProjectName] = useState("");
  const [projectDescription, setProjectDescription] = useState("");
  const [workspaceId, setWorkspaceId] = useState("");
  const [isMemberModalOpen, setIsMemberModalOpen] = useState(false);
  const [memberEmail, setMemberEmail] = useState("");

  const handleCreateProject = () => {
    onCreate(projectName, projectDescription, workspaceId);
    setProjectName("");
    setProjectDescription("");
    setWorkspaceId("");
    onClose();
  };

  const handleAddMember = () => {
    // Logic to handle member addition
    console.log("Member added:", memberEmail);
    setMemberEmail("");
    setIsMemberModalOpen(false);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50"
          >
            <motion.div
              initial={{ y: "-100vh" }}
              animate={{ y: 0 }}
              exit={{ y: "-100vh" }}
              className="bg-neutral-900 p-8 rounded-lg shadow-lg w-full max-w-md"
            >
              <h2 className="text-2xl mb-6 text-white font-bold">
                Create a New Project
              </h2>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-200">
                  Project Name
                </label>
                <input
                  type="text"
                  value={projectName}
                  onChange={(e) => setProjectName(e.target.value)}
                  className="mt-1 block w-full px-3 py-2 bg-zinc-800  sm:text-sm"
                  placeholder="Enter project name"
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-200">
                  Project Description
                </label>
                <textarea
                  value={projectDescription}
                  onChange={(e) => setProjectDescription(e.target.value)}
                  className=" bg-zinc-800 mt-1 block w-full px-3 py-2   rounded-md shadow-sm focus:outline-none  sm:text-sm"
                  placeholder="Enter project description"
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-200">
                  Workspace ID
                </label>
                <input
                  type="text"
                  value={workspaceId}
                  onChange={(e) => setWorkspaceId(e.target.value)}
                  className="mt-1 bg-zinc-800  block w-full px-3 py-2  rounded-md shadow-sm focus:outline-none sm:text-sm"
                  placeholder="Enter workspace ID"
                />
              </div>
              <div className="flex justify-between items-center">
                <button
                  onClick={() => setIsMemberModalOpen(true)}
                  className="mr-2 px-4 py-2 bg-transparent  hover:text-white transition duration-200"
                  title="Add Members"
                >
                  Add Members
                </button>
                <div>
                  <button
                    onClick={onClose}
                    className="mr-2 px-4 py-2 bg-transparent border-2 border-gray-500 text-gray-500 rounded-md hover:border-red-500 hover:text-red-500 transition duration-200"
                    title="Cancel"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={handleCreateProject}
                    className="px-4 py-2 bg-blue-500 text-black rounded-md hover:bg-blue-600 transition duration-200"
                    title="Create Project"
                  >
                    Create
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Nested Modal for Adding Members */}
          <AnimatePresence>
            {isMemberModalOpen && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50"
              >
                <motion.div
                  initial={{ y: "-100vh" }}
                  animate={{ y: 0 }}
                  exit={{ y: "-100vh" }}
                  className="bg-black p-6 rounded-lg shadow-lg w-full max-w-md"
                >
                  <h2 className="text-xl mb-4 text-gray-900 font-bold">
                    Add Member
                  </h2>
                  <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700">
                      Member Email
                    </label>
                    <input
                      type="email"
                      value={memberEmail}
                      onChange={(e) => setMemberEmail(e.target.value)}
                      className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      placeholder="Enter member email"
                    />
                  </div>
                  <div className="flex justify-end">
                    <button
                      onClick={() => setIsMemberModalOpen(false)}
                      className="mr-2 px-4 py-2 bg-transparent border-2 border-gray-500 text-gray-500 rounded-md hover:border-red-500 hover:text-red-500 transition duration-200"
                      title="Cancel"
                    >
                      Cancel
                    </button>
                    <button
                      onClick={handleAddMember}
                      className="px-4 py-2 bg-blue-500 text-black rounded-md hover:bg-blue-600 transition duration-200"
                      title="Add Member"
                    >
                      Add
                    </button>
                  </div>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </>
      )}
    </AnimatePresence>
  );
};

export default CreateProjectCard;
