import React, {Component} from "react";
import {connect} from "react-redux";
import {fetchProjectsFailure, fetchProjectsRequest, fetchProjectsSuccess} from "../actions/actions";
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
            <div className="container">
                <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 img-grid">
                    {this.props.projects.map(project => (
                        <div className="col p-0 center">
                            <div className="mb-2 mx-2 my-sm-1 mx-sm-1 center">
                                <img className="card-img-top rounded"
                                     src={project.previewURL}
                                     alt={project.name}/>
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
    fetchProjectsFailure
})(ProjectGrid);
