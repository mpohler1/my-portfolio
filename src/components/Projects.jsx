import React, {Component} from "react";
import ProjectGrid from "./ProjectGrid";
import ProjectModal from "./ProjectModal";
import ProjectFilter from "./ProjectFilter";

class Projects extends Component {

    render() {
        return (
            <div className="container-fluid page bg-white center" id="projects">
                <div className="row mt-auto mb-3">
                    <h4 className="display-4 font-weight-light">My Projects</h4>
                </div>
                <div className="row mb-auto">
                    <p>Here is some of my recent work.</p>
                </div>
                <div className="row mb-auto w-100 center">
                    <ProjectFilter/>
                    <ProjectGrid/>
                    <ProjectModal/>
                </div>
            </div>
        )
    }
}

export default Projects;
