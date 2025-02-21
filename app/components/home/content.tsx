import React, { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import { Providers } from "@/app/providers";
import useCurrentProjects from "@/app/graphql/user/get-current-projects";
import useCurrentUserWorkspace from "@/app/graphql/user/get-users-workspace";
import Table from "../table/table";
import createProjectMutation from "@/app/graphql/project/create-project";

const Board = dynamic(() => import("../Board/index"), { ssr: false });
const CreateWorkspace = dynamic(
  () => import("@/app/components/workspace/create-workspace"),
  { ssr: false }
);
const CreateProject = dynamic(
  () => import("@/app/components/projects/create-project"),
  { ssr: false }
);

const VIEW_STORAGE_KEY = "currentView";

export const Content = () => {
  const {
    workspace,
    isLoading: isLoadingWorkspace,
    isError: isErrorWorkspace,
  } = useCurrentUserWorkspace();
  const {
    projects,
    isLoading: isLoadingProjects,
    isError: isErrorProjects,
  } = useCurrentProjects();

  const [currentView, setCurrentView] = useState("board");

  // Retrieve the saved view from localStorage on initial load
  useEffect(() => {
    const savedView = localStorage.getItem(VIEW_STORAGE_KEY);
    if (savedView) {
      setCurrentView(savedView);
    }
  }, []);

  const showBoardView = () => {
    setCurrentView("board");
    localStorage.setItem(VIEW_STORAGE_KEY, "board"); // Save the board view
  };

  const showTableView = () => {
    setCurrentView("table");
    localStorage.setItem(VIEW_STORAGE_KEY, "table"); // Save the table view
  };

  if (isLoadingWorkspace || isLoadingProjects) {
    return <div>Loading workspace and projects information...</div>;
  }

  const handleCreateProject = async (name: any, description: any) => {
    try {
      if (!workspace || !workspace.id) {
        throw new Error("Workspace ID is not available");
      }
      await createProjectMutation({
        name,
        description,
        workspaceId: workspace.id,
      });
      // Refetch projects after creating a new project
    } catch (error) {
      console.error("Error creating project:", error);
    }
  };

  if (!workspace) {
    return (
      <Providers applyLayout={true}>
        <div className="flex flex-col justify-center w-full py-5 px-4 lg:px-0 max-w-[90rem] mx-auto gap-3">
          <CreateWorkspace />
        </div>
      </Providers>
    );
  }

  const hasProjects = Array.isArray(projects) && projects.length > 0;

  return (
    <Providers applyLayout={true}>
      <div className="flex flex-col justify-center w-full py-5 px-3 lg:px-0 max-w-[90rem] mx-auto gap-3">
        {hasProjects ? (
          <div className="flex flex-col justify-center w-full py-5 px-4 lg:px-0 max-w-[90rem] mx-auto gap-3">
            {currentView === "board" ? <Board /> : <Table />}
            <div className="flex justify-end space-x-4 mt-4">
              <button
                className={`px-4 py-2 rounded ${
                  currentView === "board"
                    ? "bg-indigo-600 text-white"
                    : "bg-gray-200 text-gray-700"
                }`}
                onClick={showBoardView}
              >
                Board View
              </button>
              <button
                className={`px-4 py-2 rounded ${
                  currentView === "table"
                    ? "bg-indigo-600 text-white"
                    : "bg-gray-200 text-gray-700"
                }`}
                onClick={showTableView}
              >
                Table View
              </button>
            </div>
          </div>
        ) : (
          <div className="flex flex-col justify-center w-full py-5 px-4 lg:px-0 max-w-[90rem] mx-auto gap-3">
            <CreateProject onCreateProject={handleCreateProject} />
          </div>
        )}
      </div>
    </Providers>
  );
};

export default Content;
