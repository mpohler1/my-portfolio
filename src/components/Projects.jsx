import React, {Component} from "react";
import ProjectGrid from "./ProjectGrid";
import ProjectModal from "./ProjectModal";

class Projects extends Component {

    render() {
        return (
            <div className="container-fluid page bg-white center" id="projects">
                <div className="row my-4">
                    <h1 className="h1 font-weight-light">Projects</h1>
                </div>
                <div className="row my-4">
                    <p>Here is some of my recent work.</p>
                </div>
                <div className="row my-4 w-100">
                    <ProjectGrid/>
                    <ProjectModal/>
                </div>
            </div>
        )
    }
}

export default Projects;
