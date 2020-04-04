import React, {Component} from "react";
import {connect} from "react-redux";
import {setBackgroundVisibility} from "../actions/actions";

class Navbar extends Component {

    handleScroll() {
        const navbarHeight = 0.10 * window.innerHeight;
        if (!this.props.backgroundIsVisible && window.scrollY > window.innerHeight - navbarHeight) {
            this.props.setBackgroundVisibility(true);
        } else if (this.props.backgroundIsVisible && window.scrollY <= window.innerHeight - navbarHeight) {
            this.props.setBackgroundVisibility(false);
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
            <nav className={"container-fluid navbar navbar-expand-md navbar-dark p-3 sticky-top navbar-height" +
            (this.props.backgroundIsVisible === true ? " bg-blue-dark":"")}>
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
    console.log(state);
    return {
        backgroundIsVisible: state.navbar.backgroundIsVisible
    };
};

export default connect(mapStateToProps, {setBackgroundVisibility})(Navbar);
