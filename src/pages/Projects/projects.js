import React from "react";
import ProjectCard from "./ProjectCard";
import projectInfo from "./Projects-Info.json";
import "./projects-style.css";

function Projects() {
    const projectCards = projectInfo.map(project => 
        <ProjectCard 
            key={project.key}
            title={project.head}
            desc={project.desc}
            url={project.link}
            tools={project.tools}
        />
    )

    return (
        <div id="projects" className="container-fluid pt-3 pb-3">
            <div className="row">
                <div className="offset-xl-2 col-xl-8 offset-lg-1 col-lg-10 offset-md-1 col-md-10 offset-sm-1 col-sm-10 offset-1 col-10 pb-5">
                    <h1 className="section-header pb-5" style={{color: "#f7fcfe"}}>My Work</h1>
                    <div className="container-fluid">
                        <div className="row">
                            {projectCards}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Projects