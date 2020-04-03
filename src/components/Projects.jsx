import React, {Component} from "react";
import {projects} from "../resources/projects";
import ProjectGrid from "./ProjectGrid";

class Projects extends Component {

    render() {
        return (
            <div className="container-fluid page bg-white center">
                <div className="row content m-2">
                    <h1 className="h1">{projects.title}</h1>
                </div>
                <ProjectGrid/>
            </div>
        )
    }
}

export default Projects;
