import React, {Component} from "react";
import {setDrawerOpen} from "../../actions/actions";
import {connect} from "react-redux";
import {Link} from "react-scroll/modules";
import {convertRemToPixels} from "../../service/rem";

class Drawer extends Component {

    render() {
        return (
            <React.Fragment>
                {
                    this.props.drawerOpen &&
                    <React.Fragment>
                        <div className="modal-shadow"
                             onClick={() => this.props.setDrawerOpen(false)}/>

                        <div className="drawer bg-blue-dark navbar navbar-dark border-right border-secondary px-0 m-0 fixed-top">
                            <div className="navbar-nav drawer-list d-flex flex-column flex-nowrap h-100 align-items-start">
                                <Link className="mx-4 my-5 nav-item btn"
                                      activeClass="active"
                                      to="home"
                                      spy={true}
                                      smooth={true}
                                      offset={-convertRemToPixels(5)}
                                      onClick={() => this.props.setDrawerOpen(false)}>
                                    <h5 className="h5 nav-link font-weight-normal">Home</h5>
                                </Link>
                                <Link className="mx-4 mb-5 nav-item btn"
                                      activeClass="active"
                                      to="projects"
                                      spy={true}
                                      smooth={true}
                                      offset={-convertRemToPixels(5)}
                                      onClick={() => this.props.setDrawerOpen(false)}>
                                    <h5 className="h5 nav-link font-weight-normal">My Projects</h5>
                                </Link>
                                <Link className="mx-4 mb-5 nav-item btn"
                                      activeClass="active"
                                      to="testimonials"
                                      spy={true}
                                      smooth={true}
                                      offset={-convertRemToPixels(5)}
                                      onClick={() => this.props.setDrawerOpen(false)}>
                                    <h5 className="h5 nav-link font-weight-normal">Testimonials</h5>
                                </Link>
                                <Link className="mx-4 mb-5 nav-item btn"
                                      activeClass="active"
                                      to="contactMe"
                                      spy={true}
                                      smooth={true}
                                      offset={-convertRemToPixels(5)}
                                      onClick={() => this.props.setDrawerOpen(false)}>
                                    <h5 className="h5 nav-link font-weight-normal">Contact Me</h5>
                                </Link>
                            </div>
                        </div>
                    </React.Fragment>
                }
            </React.Fragment>
        );
    }
}

const mapStateToProps = state => {
    return {
        drawerOpen: state.navbar.drawerOpen
    }
};

export default connect(mapStateToProps, {
    setDrawerOpen
})(Drawer);
