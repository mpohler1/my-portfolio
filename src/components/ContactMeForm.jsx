import React, {Component} from "react";
import {
    sendMailRequest,
    sendMailSuccess,
    sendMailFailure,
    setContactMeModalVisible,
    setFrom,
    setSubject,
    setBody,
    setErrors
} from "../actions/actions";
import {connect} from "react-redux";
import validate from "validate.js";
import {CONSTRAINTS} from "../resources/constraints";

class ContactMeForm extends Component {

    validateForm() {
        const errors = Object.assign({}, validate({
            from: this.props.from,
            subject: this.props.subject,
            body: this.props.body
        }, CONSTRAINTS));
        this.props.setErrors(errors);
    }

    render() {
        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="form-group w-100 mx-2">
                        <div className="form-row">
                            <label htmlFor="from">
                                From
                                <span className="text-danger">
                                    {" "}{this.props.errors.from}
                                </span>
                            </label>
                            <input className="form-control"
                                   id="from"
                                   type="text"
                                   placeholder="Your Email Address"
                                   value={this.props.from}
                                   onChange={event => this.props.setFrom(event.target.value)}/>
                        </div>
                        <div className="form-row">
                            <label htmlFor="subject">
                                Subject
                                <span className="text-danger">
                                    {" "}{this.props.errors.subject}
                                </span>
                            </label>
                            <input className="form-control"
                                   id="subject"
                                   type="text"
                                   placeholder="Subject"
                                   value={this.props.subject}
                                   onChange={event => this.props.setSubject(event.target.value)}/>
                        </div>
                        <div className="form-row">
                            <label htmlFor="body">
                                Message
                                <span className="text-danger">
                                    {" "}{this.props.errors.body}
                                </span>
                            </label>
                            <textarea className="form-control overflow-auto message-body"
                                      id="body"
                                      cols="15"
                                      placeholder="Message Body"
                                      value={this.props.body}
                                      onChange={event => this.props.setBody(event.target.value)}/>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div>
                    <button className="btn btn-primary ml-1"
                            onClick={() => this.validateForm()}>
                        Send
                    </button>
                    <button className="btn btn-secondary ml-3 mr-1"
                            onClick={() => this.props.setContactMeModalVisible(false)}>
                        Cancel
                    </button>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        from: state.contactMe.from,
        subject: state.contactMe.subject,
        body: state.contactMe.body,
        errors: state.contactMe.errors
    };
};

export default connect(mapStateToProps, {
    sendMailRequest,
    sendMailSuccess,
    sendMailFailure,
    setContactMeModalVisible,
    setFrom,
    setSubject,
    setBody,
    setErrors
})(ContactMeForm);
