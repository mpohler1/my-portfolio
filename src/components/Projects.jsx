import React, {Component} from "react";
import {projects} from "../resources/projects";

class Projects extends Component {

    render() {
        return (
            <div className="container-fluid bg-white center">
                <div className="row content m-2">
                    <h1 className="h1">{projects.title}</h1>
                </div>
                <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 img-grid">
                    {projects.content.map(project => (
                        <div className="col p-0 center">
                            <div className="mb-2 mx-2 mx-md-1 card center">
                                <img className="card-img-top"
                                 src={project.preview}
                                 alt={project.name}/>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        )
    }
}

export default Projects;
