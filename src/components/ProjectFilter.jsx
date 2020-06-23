import React, {Component} from "react";
import {ALL_PROJECTS, LARGE_PROJECTS, SMALL_PROJECTS} from "../resources/filterModes";
import {connect} from "react-redux";
import {setFilterMode} from "../actions/actions";

const classListWithActive = "nav-link active";
const classListWithoutActive = "nav-link";

class ProjectFilter extends Component {

    render() {
        return (
            <ul className="nav nav-tabs">
                <li className="nav-item">
                    <button className={this.props.filterMode === ALL_PROJECTS ? classListWithActive : classListWithoutActive}
                            onClick={() => this.props.setFilterMode(ALL_PROJECTS)}>
                        All Projects
                    </button>
                </li>
                <li className="nav-item">
                    <button className={this.props.filterMode === LARGE_PROJECTS ? classListWithActive : classListWithoutActive}
                            onClick={() => this.props.setFilterMode(LARGE_PROJECTS)}>
                        Large Projects
                    </button>
                </li>
                <li className="nav-item">
                    <button className={this.props.filterMode === SMALL_PROJECTS ? classListWithActive : classListWithoutActive}
                            onClick={() => this.props.setFilterMode(SMALL_PROJECTS)}>
                        Small Projects
                    </button>
                </li>
            </ul>
        )
    }
}

const mapStateToProps = state => {
    return {
        filterMode: state.projects.filterMode
    };
};

export default connect(mapStateToProps, {
    setFilterMode
})(ProjectFilter);
