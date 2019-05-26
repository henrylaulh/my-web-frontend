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
                    projectLink: "http://www.youtube.com",
                    projectDesc: "Ad cillum cupidatat dolore non nisi nisi.",
                    projectImage: "/images/testing.png"
                },
                {
                    projectTitle: "China Mobile International (CMI)",
                    projectLink: "http://www.youtube.com",
                    projectDesc: "Ad cillum cupidatat dolore non nisi nisi.",
                    projectImage: "/images/testing.png"
                },
                {
                    projectTitle: "China Mobile International (CMI)",
                    projectLink: "http://www.youtube.com",
                    projectDesc: "Ad cillum cupidatat dolore non nisi nisi.",
                    projectImage: "/images/testing.png"
                },
                {
                    projectTitle: "China Mobile International (CMI)",
                    projectLink: "http://www.youtube.com",
                    projectDesc: "Ad cillum cupidatat dolore non nisi nisi.",
                    projectImage: "/images/testing.png"
                },
                {
                    projectTitle: "China Mobile International (CMI)",
                    projectLink: "http://www.youtube.com",
                    projectDesc: "Ad cillum cupidatat dolore non nisi nisi.",
                    projectImage: "/images/testing.png"
                },
            ]
        }

    }

    renderProjectList = () => {
        if(this.state.projects.length){

            var html = [];
            var isOdd = false;

            if(this.state.projects.length % 2 === 1){
                isOdd = true
            }

            for(var i = 0; i < this.state.projects.length; i++){
                var className = ''
                if(isOdd && i === this.state.projects.length - 1){
                    className = 'full-width';
                }
                else if(i%4 === 0 || i%4 === 3){
                    className = 'width-60';
                }
                else{
                    className = 'width-40';
                }
                html.push(
                    <Project
                        key={i}
                        projectClassName={className}
                        projectTitle={this.state.projects[i].projectTitle} 
                        projectLink={this.state.projects[i].projectLink}
                        projectDesc={this.state.projects[i].projectDesc}
                        projectImage={this.state.projects[i].projectImage}
                    >
                    </Project>
                )
            }

            return (
                <div>
                    {html}
                </div>
            )
        }
        else{
            return (
                <div>No projects</div>
            )
        }
    }


    render(){

        return (
            <div className="section projects">
                <span className="title">Projects</span>

                {/* Project list */}
                {/* <div className="list">
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
                </div> */}

                {this.renderProjectList()}

            </div>
        );
    }
}

export default Projects