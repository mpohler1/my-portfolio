import React, {Component} from "react";
import ProjectGrid from "./ProjectGrid";
import ProjectModal from "./ProjectModal";
import ProjectFilter from "./ProjectFilter";

class Projects extends Component {

    render() {
        return (
            <div className="container-fluid page bg-white text-dark center" id="projects">
                <div className="row my-auto">
                    <h4 className="display-4 font-weight-light">My Projects</h4>
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
