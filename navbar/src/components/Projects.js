import React from "react";
import projects from "../images/projects.svg";

function Projects() {
  return (
    <div style={{ textAlign: "center", margin: 20 }}>
       <img src={projects} alt="home" style={{width: 300}}/>
      <h1>Projects Page</h1>
    </div>
  );
}

export default Projects;
