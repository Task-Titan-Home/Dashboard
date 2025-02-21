import React from "react";

interface ProjectProps {
  project: {
    name: string;
    types: string[];
  };
}

const CurrentProjectView: React.FC<ProjectProps> = ({ project }) => {
  return (
    <article className="article-wrapper">
      <div className="rounded-lg container-project"></div>
      <div className="project-info">
        <div className="flex-pr">
          <div className="project-title text-nowrap">{project.name}</div>
          <div className="project-hover">
            <svg
              style={{ color: "black" }}
              xmlns="http://www.w3.org/2000/svg"
              width="2em"
              height="2em"
              color="black"
              strokeLinejoin="round"
              strokeLinecap="round"
              viewBox="0 0 24 24"
              strokeWidth="2"
              fill="none"
              stroke="currentColor"
            >
              <line y2="12" x2="19" y1="12" x1="5"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </div>
        </div>
        <div className="types">
          {project.types.map((type, index) => (
            <span
              key={index}
              style={{
                backgroundColor: "rgba(165, 96, 247, 0.43)",
                color: "rgb(85, 27, 177)",
              }}
              className="project-type"
            >
              • {type}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
};

export default CurrentProjectView;
