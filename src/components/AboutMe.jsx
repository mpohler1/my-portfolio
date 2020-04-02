import React, {Component} from "react";
import {aboutMeTitle, background, skills} from "../resources/aboutMe";

class AboutMe extends Component {

    render() {
        return (
            <div className="container-fluid page bg-light center">
                <div className="container">
                    <div className="row center pt-3">
                        <h1 className="h1 text-center">{aboutMeTitle}</h1>
                    </div>
                    <div className="row pb-3">
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
            </div>
        )
    }
}

export default AboutMe;
