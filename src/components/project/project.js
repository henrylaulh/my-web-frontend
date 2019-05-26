import React from 'react'

import './project.css'

const project = (props) => {
    return (
        <div className="project">
            <a href={props.projectLink} target="_blank">
                <img className="image" src={props.projectImage} />
                <span className="title">{props.projectTitle}</span>
                <div className="desc">
                    <span>{props.projectDesc}</span>
                </div>
            </a>
        </div>
    )
}

module.exports = project