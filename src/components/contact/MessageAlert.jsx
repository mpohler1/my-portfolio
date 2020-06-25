import React, {Component} from "react";
import {connect} from "react-redux";
import {FAILURE, SUCCESS} from "../../resources/mailModes";
import {resetMailMode} from "../../actions/actions";

const classNameForSuccess = "alert alert-bottom alert-success alert-dismissible show m-4";
const classNameForFailure = "alert alert-bottom alert-danger alert-dismissible show m-4";

class MessageAlert extends Component {

    render() {
        return (
            <React.Fragment>
                {
                    (this.props.mode === SUCCESS || this.props.mode === FAILURE) &&
                        <div className="fixed-bottom center">
                            <div className={this.props.mode === SUCCESS ? classNameForSuccess : classNameForFailure} role="alert">
                                <h4 className="alert-heading">
                                    {this.props.mode === SUCCESS ? "Message Sent Successfully!" : "Message Failed To Send"}
                                </h4>
                                <button className="close" aria-label="Close"
                                        onClick={() => this.props.resetMailMode()}>
                                    <span aria-hidden="true">&times;</span>
                                </button>
                                <p>
                                    {this.props.response}
                                </p>
                            </div>
                        </div>
                }
            </React.Fragment>
        );
    }
}

const mapStateToProps = state => {
    return {
        mode: state.mail.mode,
        response: state.mail.response
    };
};

export default connect(mapStateToProps, {
    resetMailMode
})(MessageAlert);
