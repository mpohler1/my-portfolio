import React, {Component} from "react";
import {sendMailFailure, sendMailRequest, sendMailSuccess, setContactMeModalVisible} from "../actions/actions";
import {connect} from "react-redux";

class ContactMeModal extends Component {

    render() {
        return (
            <React.Fragment>
                {
                    this.props.modalVisible &&
                    <div className="modal d-block text-dark" role="dialog">
                        <div className="modal-shadow"
                             onClick={() => this.props.setContactMeModalVisible(false)}/>
                        <div className="modal-dialog modal-dialog-centered">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h3>
                                        Contact Me
                                    </h3>
                                    <button type="button"
                                            className="close"
                                            onClick={() => this.props.setContactMeModalVisible(false)}>×
                                    </button>
                                </div>
                                <div className="modal-body">

                                </div>
                                <div className="modal-footer">

                                </div>
                            </div>
                        </div>
                    </div>
                }
            </React.Fragment>
        );
    }
}

const mapStateToProps = state => {
    return {
        modalVisible: state.contactMe.modalVisible,
        from: state.contactMe.from,
        subject: state.contactMe.from,
        body: state.contactMe.body,
        response: state.mail.response
    };
};

export default connect(mapStateToProps, {
    sendMailRequest,
    sendMailSuccess,
    sendMailFailure,
    setContactMeModalVisible
})(ContactMeModal);
