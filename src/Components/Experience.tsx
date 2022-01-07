import React, { FC } from 'react'

interface IExperienceProps {
    fromTo: string,
    company: string,
    position: string
}

export const Experience:FC<IExperienceProps> = (props) => {
    return (
        <div className="jobs__job">
          <h2 className="text-secondary">{props.fromTo}</h2>
          <h3>{props.company}</h3>
          <h6>F{props.position}</h6>
          <p>
            {props.children}
          </p>
        </div>
    )
}
