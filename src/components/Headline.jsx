import React, {Component} from "react";
import {headline} from "../resources/headline";

class Headline extends Component {

    render() {
        return (
            <div className="container-fluid page center my-auto">
                <div className="row">
                    <div className="col-12">
                        <h1 className="display-4 text-white text-left">{headline}</h1>
                    </div>
                </div>
            </div>
        )
    }
}

export default Headline;
