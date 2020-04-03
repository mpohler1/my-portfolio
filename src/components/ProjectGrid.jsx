import React, {Component} from "react";
import {projects} from "../resources/projects";

class ProjectGrid extends Component{

    render() {
        return (
            <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 img-grid">
                {projects.content.map(project => (
                    <div className="col p-0 center">
                        <div className="mb-2 mx-2 my-sm-2 mx-sm-2 center">
                            <img className="card-img-top rounded"
                                 src={project.preview}
                                 alt={project.name}/>
                        </div>
                    </div>
                ))}
            </div>
        );
    }
}

export default ProjectGrid;
