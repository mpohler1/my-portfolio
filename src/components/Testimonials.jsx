import React, {Component} from "react";
import {testimonials} from "../resources/testimonials";

class Testimonials extends Component {

    render() {
        return (
            <div className="container-fluid bg-blue center text-white">
                <div className="row mt-2">
                    <h1 className="h1">{testimonials.title}</h1>
                </div>
                <div className="container center">
                    {testimonials.content.map(testimonial => (
                        <div className="row my-2 content">
                            <div className="col">
                                <blockquote className="blockquote">
                                    <p className="m-0">{testimonial.quote}</p>
                                    <footer className="blockquote-footer">{testimonial.name}, {testimonial.title}</footer>
                                </blockquote>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        );
    }
}

export default Testimonials;
