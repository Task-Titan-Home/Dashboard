"use client";
import React, { useState } from "react";
import { Layout } from "../layout/layout"; // adjust path to your Layout component

interface Project {
  id: number;
  name: string;
  description: string;
  status: string;
  contributors: number;
}

export default function ProjectsPage() {
  // Sample project data (could come from an API)
  const [projects, setProjects] = useState<Project[]>([
    {
      id: 1,
      name: "Project Alpha",
      description:
        "A cutting-edge AI project aimed at revolutionizing workflows.",
      status: "Active",
      contributors: 5,
    },
    {
      id: 2,
      name: "Project Beta",
      description: "Developing a modern e-commerce platform for B2B clients.",
      status: "In Review",
      contributors: 8,
    },
    {
      id: 3,
      name: "Project Gamma",
      description: "AI-driven CRM to optimize client interactions.",
      status: "Archived",
      contributors: 2,
    },
  ]);

  const [isModalOpen, setIsModalOpen] = useState(false);

  // Open/close the create project modal
  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  // Handler for creating a new project
  const handleCreateProject = (project: Omit<Project, "id">) => {
    const newProject: Project = {
      id: Date.now(), // or generate unique ID
      ...project,
    };
    setProjects([...projects, newProject]);
    handleCloseModal();
  };

  return (
    <Layout>
      <div className="flex flex-col w-full min-h-screen bg-neutral-900 text-gray-100 px-6 py-8">
        {/* Page Header */}
        <header className="mb-8">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold text-white">All Projects</h1>

            {/* Create New Project Button */}
            <button
              onClick={handleOpenModal}
              className="px-4 py-2 rounded-md bg-purple-600 text-white font-semibold hover:bg-purple-700 transition-colors"
            >
              + Create New Project
            </button>
          </div>
          <p className="text-sm text-gray-400 mt-2">
            Manage and organize all your projects in one place.
          </p>
        </header>

        {/* Search & Filters */}
        <section className="mb-6 flex items-center space-x-3">
          {/* Search Input */}
          <div className="relative flex-1 max-w-xs">
            <input
              type="text"
              placeholder="Search projects..."
              className="w-full px-3 py-2 rounded bg-neutral-800 text-gray-200 placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-purple-600"
            />
            <svg
              className="absolute right-3 top-2.5 w-5 h-5 text-gray-400"
              fill="none"
              stroke="currentColor"
              strokeWidth={1.5}
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-4.35-4.35m0 0A7.5 
                  7.5 0 103.65 3.65a7.5 7.5 
                  0 0012.9 9.05z"
              />
            </svg>
          </div>

          {/* Filter Dropdown */}
          <select className="bg-neutral-800 text-gray-200 px-3 py-2 rounded focus:outline-none focus:ring-1 focus:ring-purple-600">
            <option value="all">All</option>
            <option value="active">Active</option>
            <option value="archived">Archived</option>
          </select>
        </section>

        {/* Projects Table */}
        <section className="overflow-x-auto">
          <table className="w-full table-auto bg-neutral-800 rounded-md overflow-hidden shadow-lg">
            <thead className="bg-neutral-700 text-gray-300 text-sm uppercase">
              <tr>
                <th className="px-4 py-3 text-left">Project Name</th>
                <th className="px-4 py-3 text-left">Description</th>
                <th className="px-4 py-3 text-left">Status</th>
                <th className="px-4 py-3 text-left">Contributors</th>
                <th className="px-4 py-3 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="text-sm">
              {projects.map((project) => (
                <tr
                  key={project.id}
                  className="border-b border-neutral-700 hover:bg-neutral-750 transition-colors"
                >
                  <td className="px-4 py-3 font-medium text-gray-100">
                    {project.name}
                  </td>
                  <td className="px-4 py-3 text-gray-300 truncate max-w-[200px]">
                    {project.description}
                  </td>
                  <td className="px-4 py-3 text-gray-200">
                    <StatusBadge status={project.status} />
                  </td>
                  <td className="px-4 py-3 text-gray-300">
                    {project.contributors}
                  </td>
                  <td className="px-4 py-3 text-right">
                    <button className="text-purple-400 hover:underline">
                      View
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>
      </div>

      {/* Create Project Modal */}
      {isModalOpen && (
        <CreateProjectModal
          onClose={handleCloseModal}
          onCreate={handleCreateProject}
        />
      )}
    </Layout>
  );
}

/** Simple colored badge for "Active", "In Review", "Archived", etc. */
function StatusBadge({ status }: { status: string }) {
  let bgClass = "bg-gray-500";
  if (status === "Active") bgClass = "bg-green-600";
  else if (status === "Archived") bgClass = "bg-gray-500";
  else if (status === "In Review") bgClass = "bg-yellow-600";

  return (
    <span className={`px-2 py-1 rounded text-white text-xs ${bgClass}`}>
      {status}
    </span>
  );
}

/** Modal component to create a new project */
function CreateProjectModal({
  onClose,
  onCreate,
}: {
  onClose: () => void;
  onCreate: (project: {
    name: string;
    description: string;
    status: string;
    contributors: number;
  }) => void;
}) {
  const [name, setName] = useState("");
  const [desc, setDesc] = useState("");
  const [status, setStatus] = useState("Active");
  const [contributors, setContributors] = useState(1);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) return; // Basic validation
    onCreate({
      name,
      description: desc,
      status,
      contributors,
    });
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <div className="bg-neutral-800 rounded-md w-full max-w-md p-6">
        <h2 className="text-xl font-semibold text-white mb-4">
          Create New Project
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Name */}
          <div>
            <label className="block text-gray-300 text-sm mb-1">
              Project Name
            </label>
            <input
              type="text"
              className="w-full px-3 py-2 rounded bg-neutral-700 text-gray-200 placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-purple-600"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          {/* Description */}
          <div>
            <label className="block text-gray-300 text-sm mb-1">
              Description
            </label>
            <textarea
              className="w-full px-3 py-2 rounded bg-neutral-700 text-gray-200 placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-purple-600"
              rows={3}
              value={desc}
              onChange={(e) => setDesc(e.target.value)}
            />
          </div>
          {/* Status */}
          <div>
            <label className="block text-gray-300 text-sm mb-1">Status</label>
            <select
              className="w-full px-3 py-2 rounded bg-neutral-700 text-gray-200 focus:outline-none focus:ring-1 focus:ring-purple-600"
              value={status}
              onChange={(e) => setStatus(e.target.value)}
            >
              <option value="Active">Active</option>
              <option value="In Review">In Review</option>
              <option value="Archived">Archived</option>
            </select>
          </div>
          {/* Contributors */}
          <div>
            <label className="block text-gray-300 text-sm mb-1">
              Number of Contributors
            </label>
            <input
              type="number"
              min={1}
              className="w-full px-3 py-2 rounded bg-neutral-700 text-gray-200 placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-purple-600"
              value={contributors}
              onChange={(e) => setContributors(Number(e.target.value))}
            />
          </div>
          {/* Buttons */}
          <div className="flex items-center justify-end gap-3 pt-2">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 rounded-md bg-gray-600 text-white hover:bg-gray-700 transition-colors"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 rounded-md bg-purple-600 text-white hover:bg-purple-700 transition-colors"
            >
              Create
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
