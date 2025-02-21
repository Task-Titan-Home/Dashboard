import React from "react";

interface ProjectSelectorProps {
  isOpen: boolean;
  onClose: () => void;
  projects: Project[];
  onSelect: (project: Project) => void;
}

const ProjectSelector: React.FC<ProjectSelectorProps> = ({
  isOpen,
  onClose,
  projects,
  onSelect,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-gray-800 p-6 rounded-lg w-full max-w-md mx-auto text-white">
        <h2 className="text-xl font-bold mb-4">Select a Project</h2>
        <ul className="divide-y divide-gray-700">
          {projects.map((project) => (
            <li
              key={project.id}
              className="py-2 cursor-pointer hover:bg-gray-700 transition"
              onClick={() => onSelect(project)}
            >
              {project.name}
            </li>
          ))}
        </ul>
        <div className="mt-4 flex justify-end">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProjectSelector;
