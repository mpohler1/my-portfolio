import React, {Component} from "react";
import {connect} from "react-redux";
import {setModalVisible} from "../actions/actions";

class ProjectModal extends Component {

    render() {
        return (
            <React.Fragment>
                {
                    this.props.modalVisible &&
                    <React.Fragment>
                        <div className="modal d-block text-dark" role="dialog">
                            <div className="modal-shadow"
                                 onClick={() => this.props.setModalVisible(false)}/>
                            <div className="modal-dialog modal-dialog-centered">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <h3>
                                            {this.props.project.name}
                                        </h3>
                                        <button type="button"
                                                className="close"
                                                onClick={() => this.props.setModalVisible(false)}>×
                                        </button>
                                    </div>
                                    <div className="modal-body">
                                        <p>
                                            {this.props.project.detailedDescription}
                                        </p>
                                    </div>
                                    <div className="modal-footer">
                                        <div className="container">
                                            <div className="row">
                                                <h5>
                                                    Source Code
                                                </h5>
                                            </div>
                                            {this.props.project.sources.map(source => (
                                                <div className="row">
                                                    <button className="p-0 btn btn-link text-dark text-nowrap"
                                                            onClick={() => window.open(source.url)}>
                                                        {source.name}
                                                    </button>
                                                </div>
                                            ))}
                                            </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </React.Fragment>
                }
            </React.Fragment>
        )
    }
}

const mapStateToProps = state => {
    return {
        modalVisible: state.projects.modalVisible,
        project: state.projects.selectedProject
    }
};

export default connect(mapStateToProps, {
    setModalVisible
})(ProjectModal);
