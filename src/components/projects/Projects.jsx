import React, {Component} from "react";
import ProjectGrid from "./ProjectGrid";
import ProjectModal from "./ProjectModal";
import ProjectFilter from "./ProjectFilter";
import {connect} from "react-redux";

class Projects extends Component {

    render() {
        return (
            <div className="container-fluid page bg-white text-dark center" id="projects">
                <div className="row my-3 my-md-auto">
                    <h4 className="display-4 font-weight-light">My Projects</h4>
                </div>
                <div className="row mb-3 mb-md-auto w-100 center">
                    {
                        this.props.error &&
                        <div className="col center content">
                            <h2 className="font-weight-light text-dark">
                                Sorry, my Projects server seems to be down right now. Please check again later.
                            </h2>
                        </div>
                    }
                    {
                        !this.props.error &&
                        <React.Fragment>
                            <ProjectFilter/>
                            <ProjectGrid/>
                            <ProjectModal/>
                        </React.Fragment>
                    }
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        error: state.projects.error
    }
};


export default connect(mapStateToProps, {})(Projects);
