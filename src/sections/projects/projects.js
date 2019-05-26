import React, { Component } from 'react';
import './projects.css'

import Project from '../../components/project/project'

class Projects extends Component {

    constructor(props) {
        super(props);
        this.state = {
            projects: [
                {
                    projectTitle: "China Mobile International (CMI)",
                    projectLink: "www.youtube.com",
                    projectDesc: "Ad cillum cupidatat dolore non nisi nisi.",
                    projectImage: "/images/testing.png"
                },
                {
                    projectTitle: "China Mobile International (CMI)",
                    projectLink: "www.youtube.com",
                    projectDesc: "Ad cillum cupidatat dolore non nisi nisi.",
                    projectImage: "/images/testing.png"
                },
                {
                    projectTitle: "China Mobile International (CMI)",
                    projectLink: "www.youtube.com",
                    projectDesc: "Ad cillum cupidatat dolore non nisi nisi.",
                    projectImage: "/images/testing.png"
                },
                {
                    projectTitle: "China Mobile International (CMI)",
                    projectLink: "www.youtube.com",
                    projectDesc: "Ad cillum cupidatat dolore non nisi nisi.",
                    projectImage: "/images/testing.png"
                },
                {
                    projectTitle: "China Mobile International (CMI)",
                    projectLink: "www.youtube.com",
                    projectDesc: "Ad cillum cupidatat dolore non nisi nisi.",
                    projectImage: "/images/testing.png"
                },
            ]
        }

    }


    render(){
        return (
            <div className="section projects">
                <span className="title">Projects</span>

                {/* Project list */}
                <div className="list">
                    {this.state.projects.map((project, index) => {
                        return (
                            <Project 
                                key={index}
                                projectTItle={project.projectTitle} 
                                projectLink={project.projectLink}
                                projectDesc={project.projectDesc}
                                projectImage={project.projectImage}
                            >
                            </Project>
                        )
                    })}
                </div>

            </div>
        );
    }
}

export default Projects