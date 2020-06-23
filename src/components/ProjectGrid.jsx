import React, {Component} from "react";
import {connect} from "react-redux";
import {fetchProjectsFailure, fetchProjectsRequest, fetchProjectsSuccess, setProjectHovered} from "../actions/actions";
import {fetchProjects} from "../service/projectsService";

class ProjectGrid extends Component{

    determineProjectList() {
        this.props.fetchProjectsRequest();
        fetchProjects().then(([response, json]) => {
            if (response.status === 200) {
                this.props.fetchProjectsSuccess(json);
            } else {
                this.props.fetchProjectsFailure();
            }
        });
    }

    componentDidMount() {
        this.determineProjectList();
    }

    render() {
        return (
            <div className="container-fluid">
                <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-3">
                    {this.props.projects.map(project => (
                        <div className="col p-0 center">
                            <div className="mb-2 mx-2 my-sm-1 mx-sm-1 center position-relative"
                                 onMouseEnter={() => this.props.setProjectHovered(project, true)}
                                 onMouseLeave={() => this.props.setProjectHovered(project, false)}>
                                <div className="text-center project-background text-white rounded center p-3">
                                    <h4>
                                        {project.name}
                                    </h4>
                                    <p>
                                        {project.description}
                                    </p>
                                    <div>
                                        <button className="btn btn-primary mr-2">
                                            Try Demo
                                        </button>
                                        <button className="btn btn-info">
                                            More Info
                                        </button>
                                    </div>
                                </div>
                                {
                                    !project.hovered &&
                                    <img className="card-img-top rounded project-thumbnail"
                                         src={project.previewURL}
                                         alt={project.name}/>

                                }
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        projects: state.projects.projects
    }
};

export default connect(mapStateToProps, {
    fetchProjectsRequest,
    fetchProjectsSuccess,
    fetchProjectsFailure,
    setProjectHovered
})(ProjectGrid);
