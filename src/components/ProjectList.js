import React from "react";
import ProjectItem from "./ProjectItem";

function ProjectList({ projects }) {
  const projArr = projects.map(proj => <ProjectItem projInfo={proj} key={proj.id} />)
  return (
    <div id="projects">
      <h2>My Projects</h2>
      <div id="project-list">{projArr}</div>
    </div>
  );
}

export default ProjectList;
