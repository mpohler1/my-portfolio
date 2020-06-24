import React, {Component} from "react";
import {connect} from "react-redux";
import {
    fetchProjectsRequest,
    fetchProjectsSuccess,
    fetchProjectsFailure,
    setProjectHovered,
    setSelectedProject,
    setProjectsModalVisible
} from "../../actions/actions";
import {fetchProjects} from "../../service/projectsService";
import {ALL_PROJECTS, LARGE_PROJECTS, SMALL_PROJECTS} from "../../resources/filterModes";

class ProjectGrid extends Component{

    moreInfoButtonClick(project) {
        this.props.setSelectedProject(project);
        this.props.setProjectsModalVisible(true);
    }

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
            <div className="container-fluid p-0 m-0">
                <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 p-0 m-0">
                    {this.props.projects.map(project => (
                        <div className="col p-2">
                            <div className="project-box rounded"
                                 onMouseOver={() => this.props.setProjectHovered(project, true)}
                                 onMouseLeave={() => this.props.setProjectHovered(project, false)}>
                                <div className="p-2 center text-white">
                                    <h4>
                                        {project.name}
                                    </h4>
                                    <p>
                                        {project.description}
                                    </p>
                                    <div>
                                        <button className="btn btn-primary mr-3"
                                                onClick={() => window.open(project.liveURL)}>
                                            Try Demo
                                        </button>
                                        <button className="btn btn-info"
                                                onClick={() => this.moreInfoButtonClick(project)}>
                                            More Info
                                        </button>
                                    </div>
                                </div>
                                {
                                    !project.hovered &&
                                        <div>
                                            <img className="card-img rounded border border-dark"
                                                 src={project.previewURL}
                                                 alt={project.name}/>
                                        </div>
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
        projects: state.projects.projects.filter(project => {
            switch(state.projects.filterMode) {
                case LARGE_PROJECTS:
                    return project.large;

                case SMALL_PROJECTS:
                    return !project.large;

                case ALL_PROJECTS:
                default:
                    return true;
            }
        })
    }
};

export default connect(mapStateToProps, {
    fetchProjectsRequest,
    fetchProjectsSuccess,
    fetchProjectsFailure,
    setProjectHovered,
    setSelectedProject,
    setProjectsModalVisible
})(ProjectGrid);
