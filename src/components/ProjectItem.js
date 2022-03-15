import React from "react";

function ProjectItem({projInfo}) {
  let count = 0;
  const techList = projInfo.technologies.map(tech => 
  {
    count++
    return <span key={`${tech.name}_${count}`}>{tech}</span>
  })
  
  return (
    <div className="project-item">
      <h3>{projInfo.name}</h3>
      <p>{projInfo.about}</p>
      <div className="technologies">
        {techList}
      </div>
    </div>
  );
}

export default ProjectItem;
