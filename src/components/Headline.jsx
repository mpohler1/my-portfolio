import React, {Component} from "react";
import {headline} from "../resources/headline";
import {connect} from "react-redux";

class Headline extends Component {

    render() {
        return (
            <div className="container-fluid page center my-auto"
                 ref={div => div && div.setAttribute(
                     "style", "opacity: " + this.props.opacity
                 )}>
                <div className="row">
                    <div className="col-12">
                        <h1 className="display-4 text-white text-left">
                            {headline}
                        </h1>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        opacity: 1 - (state.navbar.backgroundOpacity * 2).toFixed(2)
    }
};

export default connect(mapStateToProps)(Headline);
