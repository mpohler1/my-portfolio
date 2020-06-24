import React, {Component} from "react";
import Footer from "./Footer";
import ContactMeModal from "./ContactMeModal";
import {setContactMeModalVisible} from "../actions/actions";
import {connect} from "react-redux";
import {contactInfo} from "../resources/contactInfo";

class ContactMe extends Component {

    render() {
        return (
            <div className="container-fluid page bg-blue center text-white-50 px-0" id="contactMe">
                <div className="row my-auto px-4">
                    <h1 className="display-4 font-weight-light text-white text-center">
                        Like what you see?
                    </h1>
                </div>
                <div className="row mb-auto px-4">
                    <button className="btn btn-lg btn-primary"
                            onClick={() => this.props.setContactMeModalVisible(true)}>
                        Lets Get In Touch
                    </button>
                    <ContactMeModal/>
                </div>
                <div className="row mb-auto px-4">
                    <p className="text-white-50">
                        Or email me directly at
                        <span className="text-white">
                            {" "}{contactInfo.email}
                        </span>
                    </p>
                </div>
                <Footer/>
            </div>
        )
    }
}

const mapStateToProps = state => {return {};};


export default connect(mapStateToProps, {
    setContactMeModalVisible
})(ContactMe);
