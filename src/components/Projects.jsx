import React, {Component} from "react";
import ProjectGrid from "./ProjectGrid";
import ProjectModal from "./ProjectModal";

class Projects extends Component {

    render() {
        return (
            <div className="container-fluid page bg-white center" id="projects">
                <div className="row content mt-5 mb-5">
                    <h1 className="h1 font-weight-light">Projects</h1>
                </div>
                <div className="row mb-5 mt-5">
                    <p>Here is some of my recent work.</p>
                </div>
                <div className="row mb-5 mt-5">
                    <ProjectGrid/>
                    <ProjectModal/>
                </div>
            </div>
        )
    }
}

export default Projects;
