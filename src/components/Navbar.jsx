import React, {Component} from "react";
import {connect} from "react-redux";
import {setBackgroundOpacity} from "../actions/actions";

class Navbar extends Component {
    baseBackgroundColor = [10, 24, 35];

    handleScroll() {
        const bottomOfHeadline = window.innerHeight - (0.08 * window.innerHeight);
        const opacity = (window.scrollY / bottomOfHeadline).toFixed(2);
        if (opacity > 100) {
            this.props.setBackgroundOpacity(1);
        } else {
            this.props.setBackgroundOpacity(opacity);
        }
    }

    componentDidMount() {
        window.addEventListener("scroll", () => this.handleScroll(), { passive: true });
    }

    componentWillUnmount() {
        window.removeEventListener("scroll", () => this.handleScroll());
    }


    render() {
        return (
            <nav className="container-fluid navbar navbar-expand-md navbar-dark p-3 sticky-top navbar-height"
                ref={navbar => navbar && navbar.setAttribute(
                    "style", "background-color: rgba(" +
                    this.baseBackgroundColor[0] + ", " +
                    this.baseBackgroundColor[1] + ", " +
                    this.baseBackgroundColor[2] + ", " +
                    this.props.backgroundOpacity + ")"
                )}>
                <button className="navbar-toggler" type="button">
                    <span className="navbar-toggler-icon"/>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="container-fluid navbar-nav d-flex">
                        <li className="nav-item mx-auto btn">
                            <h5 className="h5 nav-link">Home</h5>
                        </li>
                        <li className="nav-item mx-auto btn">
                            <h5 className="h5 nav-link">My Projects</h5>
                        </li>
                        <li className="nav-item mx-auto btn">
                            <h5 className="h5 nav-link">Testimonials</h5>
                        </li>
                        <li className="nav-item mx-auto btn">
                            <h5 className="h5 nav-link">Contact Me</h5>
                        </li>
                        <li className="nav-item mx-auto btn">
                            <h5 className="h5 nav-link">My Resume</h5>
                        </li>
                    </ul>
                </div>
            </nav>
        )
    }
}

const mapStateToProps = state => {
    return {
        backgroundOpacity: state.navbar.backgroundOpacity
    };
};

export default connect(mapStateToProps, {setBackgroundOpacity})(Navbar);
