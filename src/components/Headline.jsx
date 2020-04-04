import React, {Component} from "react";
import {headline} from "../resources/headline";
import {connect} from "react-redux";
import {Link} from "react-scroll";

class Headline extends Component {

    render() {
        return (
            <div className="container-fluid page center my-auto" id="home"
                 ref={div => div && div.setAttribute(
                     "style", "opacity: " + this.props.opacity
                 )}>
                <div className="row mt-auto mb-3 mb-sm-5">
                    <div className="col-12">
                        <h1 className="display-4 text-white text-left">
                            {headline}
                        </h1>
                    </div>
                </div>
                <div className="row mt-3 mt-sm-5 mb-auto">
                    <div className="col-12">
                        <Link activeClass=""
                              to="projects"
                              spy={true}
                              smooth={true}
                              offset={-(window.innerHeight*.08)}>
                            <button className={
                                this.props.opacity <= 0 ? "btn-outline-light btn-lg" : "btn btn-outline-light btn-lg"
                            }
                                    disabled={this.props.opacity <= 0}>
                                See My Work
                            </button>
                        </Link>
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
