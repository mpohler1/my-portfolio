import React, {Component} from "react";
import {aboutMeTitle, education, skills, summary, workExperience} from "../resources/aboutMe";

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
                                    <div className="row d-block content">
                                        <h3 className="h3">{summary.title}</h3>
                                        <p>{summary.content}</p>
                                    </div>
                                    <div className="row d-block content">
                                        <h3 className="h3">{education.title}</h3>
                                        <h5 className="h5">{education.school}</h5>
                                        <p>{education.degree}<br/>{education.concentration}</p>
                                    </div>
                                    <div className="row d-block content">
                                        <h3 className="h3">{workExperience.title}</h3>
                                        <h5 className="h5">{workExperience.position}. {workExperience.employer}</h5>
                                        <p>{workExperience.content}</p>
                                    </div>
                                    <div className="row content">
                                        <h3 className="h3">{skills.title}</h3>
                                    </div>
                                    <div className="row d-block">
                                        <ul className="list-group">
                                            {skills.content.map((skill) => (
                                                <li className="list-group-item">
                                                    <h5 className="h5">{skill.name}</h5>
                                                    <ul className="list-inline">
                                                        {skill.list.map((tool) => <li className="list-inline-item">{tool}</li>)}
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
