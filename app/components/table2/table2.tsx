import React from "react";

interface Project {
  id: string;
  name: string;
  description: string;
}

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <div className="bg-gray-800 text-white rounded-lg shadow-lg p-4 m-2 w-full md:w-1/3 lg:w-1/4">
      <h3 className="text-xl font-bold mb-2">{project.name}</h3>
      <p className="text-sm text-gray-400">{project.description}</p>
    </div>
  );
};

interface ProjectsGridProps {
  projects: Project[];
}

const ProjectsGrid: React.FC<ProjectsGridProps> = ({ projects }) => {
  return (
    <div className="flex flex-wrap justify-center">
      {projects.map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </div>
  );
};

export default ProjectsGrid;
