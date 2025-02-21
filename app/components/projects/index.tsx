"use client";
import React, { useState, useCallback } from "react";
import CreateProjectCard from "../CreateProjectCard";
import { Providers } from "@/app/providers";
import createProjectMutation from "../../graphql/project/create-project";
import useCurrentProjects from "../../components/hooks/useCurrentProjects";
import { Spinner } from "./spinner";
import ProjectsGrid from "../table2/table2";
import SearchBar from "../SearchBar";
import Filters from "../Filters";
import ProjectDetailsModal from "../ProjectDetailsModal";
import ProjectSelector from "./ProjectSelector";

interface Project {
  id: string;
  name: string;
  description: string;
  // Add other project properties as needed
}

const Projects: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isSelectingProject, setIsSelectingProject] = useState<boolean>(false);
  const { projects, isLoading, isError, mutate } = useCurrentProjects();

  // Create a project
const handleCreateProject = useCallback(
  async (name: string, description: string, workspaceId: string) => {
    if (!workspaceId) {
      alert("Workspace ID is required to create a project.");
      return;
    }

    try {
      await createProjectMutation({
        name,
        description,
        workspaceId, // Make sure workspaceId is not empty
      });
      mutate(); // Refresh projects after creation
    } catch (error) {
      console.error("Error creating project:", error);
      alert("There was an error creating the project. Please try again.");
    }
  },
  [mutate]
);

  // Select an existing project
  const handleProjectSelect = (project: Project) => {
    setSelectedProject(project);
    setIsSelectingProject(false);
  };

  // Open modal to select current project
  const openProjectSelector = () => {
    setIsSelectingProject(true);
  };

  return (
    <Providers applyLayout={true}>
      <div className="my-14 lg:px-6 max-w-[95rem] mx-auto w-full flex flex-col gap-6 text-white">
        {/* Header */}
        <header className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-gray-100">My Projects</h1>
          <button
            onClick={() => setIsModalOpen(true)}
            className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition"
          >
            Create Project
          </button>
        </header>

        {/* Search Bar and Filters */}
        <section className="flex flex-col md:flex-row justify-between items-center mb-6 gap-4 ">
          <SearchBar
            placeholder="Search projects..."
            className=" text-gray-300 placeholder-gray-500 border border-gray-700 rounded-md flex-1"
          />
          <Filters className="bg-zinc-800 text-gray-300 border border-zinc-800 rounded-md" />
        </section>

        {/* Main Content */}
        <main className="bg-neutral-900 p-6 rounded-lg">
          {/* Project Loading States */}
          {isLoading ? (
            <div className="flex justify-center items-center">
              <Spinner />
            </div>
          ) : isError ? (
            <div className="bg-red-800 text-red-200 p-4 rounded-md">
              <p>Error loading projects. Please try again later.</p>
            </div>
          ) : projects.length === 0 ? (
            <div className="bg-yellow-800 text-yellow-200 p-4 rounded-md">
              <p>No projects found. Please create a new project.</p>
            </div>
          ) : (
            <>
              <ProjectsGrid
                projects={projects}
                onProjectClick={handleProjectSelect}
              />

              {/* Button to Select Current Project */}
              <div className="flex justify-end mt-4">
                <button
                  onClick={openProjectSelector}
                  className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 transition"
                >
                  Select Current Project
                </button>
              </div>
            </>
          )}
        </main>

        {/* Create Project Modal */}
        {isModalOpen && (
          <CreateProjectCard
            isOpen={isModalOpen}
            onClose={() => setIsModalOpen(false)}
            onCreate={handleCreateProject}
          />
        )}

        {/* Project Selector Modal */}
        {isSelectingProject && (
          <ProjectSelector
            isOpen={isSelectingProject}
            onClose={() => setIsSelectingProject(false)}
            projects={projects}
            onSelect={handleProjectSelect}
          />
        )}

        {/* Project Details Modal */}
        {selectedProject && (
          <ProjectDetailsModal
            isOpen={!!selectedProject}
            onClose={() => setSelectedProject(null)}
            project={selectedProject}
          />
        )}
      </div>
    </Providers>
  );
};

export default Projects;
