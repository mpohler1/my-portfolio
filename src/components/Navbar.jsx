import React, {Component} from "react";

class Navbar extends Component {

    render() {
        return (
            <nav className="container-fluid navbar navbar-expand-md navbar-dark p-3 sticky-top navbar-height">
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="container-fluid navbar-nav d-flex">
                        <li className="nav-item mx-auto">
                            <h5 className="h5 nav-link">Home</h5>
                        </li>
                        <li className="nav-item mx-auto">
                            <h5 className="h5 nav-link">My Projects</h5>
                        </li>
                        <li className="nav-item mx-auto">
                            <h5 className="h5 nav-link">Testimonials</h5>
                        </li>
                        <li className="nav-item mx-auto">
                            <h5 className="h5 nav-link">Contact Me</h5>
                        </li>
                        <li className="nav-item mx-auto">
                            <h5 className="h5 nav-link">My Resume</h5>
                        </li>
                    </ul>
                </div>
            </nav>
        )
    }
}

export default Navbar;
