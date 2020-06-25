import React, {Component} from "react";
import {connect} from "react-redux";
import {FAILURE, SUCCESS} from "../../resources/mailModes";
import {resetMailMode} from "../../actions/actions";
import {contactInfo} from "../../resources/contactInfo";

const CLASS_NAME_FOR_SUCCESS = "alert alert-bottom alert-success alert-dismissible show m-4";
const CLASS_NAME_FOR_FAILURE = "alert alert-bottom alert-danger alert-dismissible show m-4";
const SUCCESS_RESPONSE = "";
const FAILURE_RESPONSE = "Please email me directly at " + contactInfo.email;

class MessageAlert extends Component {

    render() {
        return (
            <React.Fragment>
                {
                    (this.props.mode === SUCCESS || this.props.mode === FAILURE) &&
                        <div className="message-alert center">
                            <div className={this.props.mode === SUCCESS ? CLASS_NAME_FOR_SUCCESS : CLASS_NAME_FOR_FAILURE} role="alert">
                                <h4 className="alert-heading">
                                    {this.props.mode === SUCCESS ? "Message Sent Successfully!" : "Message Failed To Send"}
                                </h4>
                                <button className="close" aria-label="Close"
                                        onClick={() => this.props.resetMailMode()}>
                                    <span aria-hidden="true">&times;</span>
                                </button>
                                <p>
                                    {this.props.mode === SUCCESS ? SUCCESS_RESPONSE : FAILURE_RESPONSE}
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
    };
};

export default connect(mapStateToProps, {
    resetMailMode
})(MessageAlert);
