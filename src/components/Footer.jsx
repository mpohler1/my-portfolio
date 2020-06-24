import React, {Component} from "react";
import {contactInfo} from "../resources/contactInfo";
import {Link} from "react-scroll/modules";
import {convertRemToPixels} from "../service/rem";

class Footer extends Component{

    render() {
        return (
            <div className="container-fluid footer center border-top border-secondary p-0">
                <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 w-100 footer-content my-auto">
                    <div className="col my-2">
                        <div className="container-fluid my-auto">
                            <div className="row w-100 border-bottom border-secondary">
                                <div className="col">
                                    <h5>
                                       Contact
                                    </h5>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col">
                                    <p>
                                        {contactInfo.name}<br/>
                                        {contactInfo.email}<br/>
                                        <a className="text-white" href={contactInfo.linkedIn}>
                                            LinkedIn
                                        </a><br/>
                                        <a className="text-white" href={contactInfo.gitHub}>
                                            GitHub
                                        </a>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col my-2">
                        <div className="container-fluid my-auto">
                            <div className="row w-100 border-bottom border-secondary">
                                <div className="col">
                                    <h5>
                                        Site Navigation
                                    </h5>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col">
                                    <div className="d-flex flex-column flex-nowrap align-items-start">
                                        <Link activeClass="active"
                                              to="home"
                                              spy={true}
                                              smooth={true}
                                              offset={-convertRemToPixels(5)}>
                                            <p className="m-0 btn btn-link text-white-50 text-nowrap p-0">
                                                Home
                                            </p>
                                        </Link>
                                        <Link activeClass="active"
                                              to="projects"
                                              spy={true}
                                              smooth={true}
                                              offset={-convertRemToPixels(5)}>
                                            <p className="m-0 btn btn-link text-white-50 text-nowrap p-0">
                                                My Projects
                                            </p>
                                        </Link>
                                        <Link activeClass="active"
                                              to="testimonials"
                                              spy={true}
                                              smooth={true}
                                              offset={-convertRemToPixels(5)}>
                                            <p className="m-0 btn btn-link text-white-50 text-nowrap p-0">
                                                Testimonials
                                            </p>
                                        </Link>
                                        <Link activeClass="active"
                                              to="contactMe"
                                              spy={true}
                                              smooth={true}
                                              offset={-convertRemToPixels(5)}>
                                            <p className="m-0 btn btn-link text-white-50 text-nowrap p-0">
                                                Contact Me
                                            </p>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col my-2">
                        <div className="container-fluid my-auto">
                            <div className="row w-100 border-bottom border-secondary">
                                <div className="col">
                                    <h5>
                                        About This Website
                                    </h5>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col">
                                    <p>
                                        This website was developed by Mason Pohler using JavaScript, JSX, and CSS. This website was
                                        built using ReactJS, Redux, and Bootstrap. <a className="text-white" href="https://github.com/mpohler1/mpohler1.github.io">View Source</a>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row w-100 border-top border-secondary p-0">
                    <div className="col text-left text-nowrap pt-2 pl-0">
                        <p>
                            &copy; 2020 Mason Pohler
                        </p>
                    </div>
                    <div className="col text-right text-nowrap pt-2 pr-0 float-right">
                        <button className="btn btn-link text-white-50 text-nowrap p-0 float-right">
                            Privacy Policy
                        </button>
                    </div>
                </div>
            </div>
        )
    }
}

export default Footer;
