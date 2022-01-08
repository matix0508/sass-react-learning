import React, { FC } from 'react'

interface IProjectProps {
    img: string,
    name: string
}

export const Project:FC<IProjectProps> = (props) => {
    return (
        <div className="projects__item">
        <img src={process.env.PUBLIC_URL + `/img/${props.img}`} alt={props.name} />
        <div className="projects__btns">
          <a href="#!" className="projects__btn">
            <i className="fas fa-eye"></i> Preview
          </a>
          <a href="#!" className="projects__btn">
            <i className="fab fa-github"></i> Github
          </a>
        </div>
      </div>
    )
}
