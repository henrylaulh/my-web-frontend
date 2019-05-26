import React from 'react'

import './project.css'

const project = (props) => {
    return (
        <a href={props.projectLink} target="_blank" className={"project " + props.projectClassName}>
            <div className="inner-div"  style={{ backgroundImage: "url("+props.projectImage+")" }}>
                <span className="title">{props.projectTitle}</span>
            </div>
            <div className="desc">
                <span>{props.projectDesc}</span>
            </div>
        </a>
    )
}

module.exports = project