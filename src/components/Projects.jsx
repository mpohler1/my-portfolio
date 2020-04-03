import React, {Component} from "react";
import {projects} from "../resources/projects";

class Projects extends Component {

    render() {
        return (
            <div className="container-fluid bg-white page center">
                <div className="row content">
                    <h1 className="h1">{projects.title}</h1>
                </div>
                <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 img-grid">
                    {projects.content.map(project => (
                        <div className="col m-0 p-0 center">
                            <img className="img-fluid"
                                 src={project.preview}
                                 alt={project.name}/>
                        </div>
                    ))}
                </div>
            </div>
        )
    }
}

export default Projects;
