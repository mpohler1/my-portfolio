import React, {Component} from "react";
import {
    sendMailRequest,
    sendMailSuccess,
    sendMailFailure
} from "../actions/actions";
import {connect} from "react-redux";

class ContactMeForm extends Component {

    render() {
        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="form-group w-100 mx-2">
                        <div className="form-row">
                            <label htmlFor="from">
                                From
                            </label>
                            <input className="form-control"
                                   id="from"
                                   type="text"
                                   placeholder="Your Email Address"
                                   value={this.props.from}/>
                        </div>
                        <div className="form-row">
                            <label htmlFor="subject">
                                Subject
                            </label>
                            <input className="form-control"
                                   id="subject"
                                   type="text"
                                   placeholder="Subject"
                                   value={this.props.subject}/>
                        </div>
                        <div className="form-row">
                            <label htmlFor="body">
                                Message
                            </label>
                            <textarea className="form-control overflow-auto message-body"
                                   id="body"
                                   cols="15"
                                   placeholder="Message Body"
                                   value={this.props.body}/>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div>
                    <button className="btn btn-primary ml-1">
                        Send
                    </button>
                    <button className="btn btn-secondary ml-3 mr-1">
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
        body: state.contactMe.body
    };
};

export default connect(mapStateToProps, {
    sendMailRequest,
    sendMailSuccess,
    sendMailFailure
})(ContactMeForm);
