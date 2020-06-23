import React, {Component} from "react";
import {testimonials} from "../resources/testimonials";

class Testimonials extends Component {

    render() {
        return (
            <div className="container-fluid page bg-white center text-dark" id="testimonials">
                <div className="row my-auto">
                    <h4 className="display-4 font-weight-light">{testimonials.title}</h4>
                </div>
                {testimonials.content.map(testimonial => (
                    <div className="row content mb-auto">
                        <div className="col">
                            <blockquote className="blockquote">
                                <p className="m-0 font-weight-normal">"{testimonial.quote}"</p>
                                <footer className="blockquote-footer">{testimonial.name}, {testimonial.title}</footer>
                            </blockquote>
                        </div>
                    </div>
                ))}
            </div>
        );
    }
}

export default Testimonials;
