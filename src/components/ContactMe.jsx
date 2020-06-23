import React, {Component} from "react";
import Footer from "./Footer";
import ContactMeModal from "./ContactMeModal";
import {setContactMeModalVisible} from "../actions/actions";
import {connect} from "react-redux";

class ContactMe extends Component {

    render() {
        return (
            <div className="container-fluid page bg-blue center text-white" id="contactMe">
                <div className="row my-auto">
                    <h1 className="display-4 font-weight-light">
                        Like what you see?
                    </h1>
                </div>
                <div className="row mb-auto">
                    <button className="btn btn-lg btn-primary"
                            onClick={() => this.props.setContactMeModalVisible(true)}>
                        Lets Get In Touch
                    </button>
                    <ContactMeModal/>
                </div>
                <div className="row mb-auto border-top border-light w-100">
                    <Footer/>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {return {};};


export default connect(mapStateToProps, {
    setContactMeModalVisible
})(ContactMe);
