import React, {Component} from "react";
import {
    sendMailRequest,
    sendMailSuccess,
    sendMailFailure,
    setContactMeModalVisible,
    setEmail,
    setName,
    setBody,
    setErrors
} from "../../actions/actions";
import {connect} from "react-redux";
import validate from "validate.js";
import {CONSTRAINTS} from "../../resources/constraints";
import {sendMail} from "../../service/mailService";
import {SENDING} from "../../resources/mailModes";

class ContactMeForm extends Component {

    handleSendButtonClick() {
        const errors = this.validateForm();

        // "if errors is an empty object"
        if (Object.keys(errors).length === 0 && errors.constructor === Object) {
            this.sendMail();
        }

        this.props.setErrors(errors);
    }

    validateForm() {
        return Object.assign({}, validate({
            name: this.props.name,
            email: this.props.email,
            body: this.props.body
        }, CONSTRAINTS));
    }

    sendMail() {
        this.props.sendMailRequest();
        sendMail(this.props.name, this.props.email, this.props.body).then(([response, json]) => {
            if (response.status === 200) {
                this.props.sendMailSuccess(json);
                this.props.setContactMeModalVisible(false);
            } else {
                this.props.sendMailFailure(json);
            }
        })
    }

    render() {
        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="form-group w-100 mx-2">
                        <div className="form-row">
                            <label htmlFor="name">
                                Name
                                <span className="text-danger">
                                    {" "}{this.props.errors.name}
                                </span>
                            </label>
                            <input className="form-control"
                                   id="name"
                                   type="text"
                                   placeholder="Your Name"
                                   value={this.props.name}
                                   onChange={event => this.props.setName(event.target.value)}/>

                        </div>
                        <div className="form-row">
                            <label htmlFor="email">
                                Email
                                <span className="text-danger">
                                    {" "}{this.props.errors.email}
                                </span>
                            </label>
                            <input className="form-control"
                                   id="from"
                                   type="text"
                                   placeholder="Your Email Address"
                                   value={this.props.email}
                                   onChange={event => this.props.setEmail(event.target.value)}/>
                        </div>
                        <div className="form-row">
                            <label htmlFor="body">
                                Message
                                <span className="text-danger">
                                    {" "}{this.props.errors.body}
                                </span>
                            </label>
                            <textarea className="form-control overflow-auto"
                                      id="body"
                                      rows="7"
                                      placeholder="Message Body"
                                      value={this.props.body}
                                      onChange={event => this.props.setBody(event.target.value)}/>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div>
                        {
                            this.props.mode === SENDING
                                ?
                                    <button className="btn btn-primary ml-1 disabled">
                                        <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"/>
                                        {" "}Sending...
                                    </button>
                                :
                                    <button className="btn btn-primary ml-1"
                                            onClick={() => this.handleSendButtonClick()}>
                                        Send
                                    </button>
                        }

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
        name: state.contactMe.name,
        email: state.contactMe.email,
        body: state.contactMe.body,
        errors: state.contactMe.errors,
        mode: state.mail.mode
    };
};

export default connect(mapStateToProps, {
    sendMailRequest,
    sendMailSuccess,
    sendMailFailure,
    setContactMeModalVisible,
    setEmail,
    setName,
    setBody,
    setErrors
})(ContactMeForm);
