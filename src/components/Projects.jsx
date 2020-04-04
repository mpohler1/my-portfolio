import React, {Component} from "react";
import {projects} from "../resources/projects";
import ProjectGrid from "./ProjectGrid";

class Projects extends Component {

    render() {
        return (
            <div className="container-fluid page bg-white center" id="projects">
                <div className="row content mt-5 mb-5">
                    <h1 className="h1">{projects.title}</h1>
                </div>
                <div className="row mb-5 mt-5">
                    <p>Here is some of my recent work.</p>
                </div>
                <div className="row mb-5 mt-5">
                    <ProjectGrid/>
                </div>
            </div>
        )
    }
}

export default Projects;
