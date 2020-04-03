import React, {Component} from "react";
import {aboutMeTitle, background, skills} from "../resources/resume";

class Resume extends Component {

    render() {
        return (
            <div className="container-fluid page bg-white center p-0 m-0">
                <div className="container py-4 m-0">
                    <h1 className="h1 text-center">{aboutMeTitle}</h1>
                    <div className="container center">
                        <div className="row">
                            <div className="col">
                                {background.map(item => (
                                    <div className="row d-block content">
                                        <h3 className="h3">{item.title}</h3>
                                        {item.headline ? <h5 className="h5">{item.headline}</h5>:null}
                                        <p>
                                            {item.content}
                                            {item.subContent ?
                                                <React.Fragment>
                                                    <br/> {item.subContent}
                                                </React.Fragment>
                                            :null}
                                        </p>
                                    </div>
                                ))}
                                <div className="row d-block">
                                    <h3 className="h3">{skills.title}</h3>
                                    <ul className="list-group">
                                        {skills.content.map(skill => (
                                            <li className="list-group-item">
                                                <h5 className="h5">{skill.name}</h5>
                                                <ul className="list-inline">
                                                    {skill.list.map(tool => <li className="list-inline-item">{tool}</li>)}
                                                </ul>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Resume;
