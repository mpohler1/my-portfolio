import React, {Component} from "react";
import {setContactMeModalVisible} from "../actions/actions";
import {connect} from "react-redux";
import ContactMeForm from "./ContactMeForm";

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
                                    <ContactMeForm/>
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
        response: state.mail.response
    };
};

export default connect(mapStateToProps, {
    setContactMeModalVisible
})(ContactMeModal);
