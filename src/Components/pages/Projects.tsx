import React, { FC } from "react";

export const Projects: FC = () => {
  return (
    <>
      <div className="projects__bio-image">
        <h1 className="text-secondary">My Projects</h1>
      </div>

      <div className="projects__items">
        <div className="projects__item">
          <img src="img/project-1.jpg" alt="My Project" />
          <div className="projects__btns">
            <a href="#!" className="projects__btn">
              <i className="fas fa-eye"></i> Preview
            </a>
            <a href="#!" className="projects__btn">
              <i className="fab fa-github"></i> Github
            </a>
          </div>
        </div>
        <div className="projects__item">
          <img src="img/project-2.jpg" alt="My Project" />
          <div className="projects__btns">
            <a href="#!" className="projects__btn">
              <i className="fas fa-eye"></i> Preview
            </a>
            <a href="#!" className="projects__btn">
              <i className="fab fa-github"></i> Github
            </a>
          </div>
        </div>
        <div className="projects__item">
          <img src="img/project-3.jpg" alt="My Project" />
          <div className="projects__btns">
            <a href="#!" className="projects__btn">
              <i className="fas fa-eye"></i> Preview
            </a>
            <a href="#!" className="projects__btn">
              <i className="fab fa-github"></i> Github
            </a>
          </div>
        </div>
        <div className="projects__item">
          <img src="img/project-4.jpg" alt="My Project" />
          <div className="projects__btns">
            <a href="#!" className="projects__btn">
              <i className="fas fa-eye"></i> Preview
            </a>
            <a href="#!" className="projects__btn">
              <i className="fab fa-github"></i> Github
            </a>
          </div>
        </div>
        <div className="projects__item">
          <img src="img/project-5.jpg" alt="My Project" />
          <div className="projects__btns">
            <a href="#!" className="projects__btn">
              <i className="fas fa-eye"></i> Preview
            </a>
            <a href="#!" className="projects__btn">
              <i className="fab fa-github"></i> Github
            </a>
          </div>
        </div>
        <div className="projects__item">
          <img src="img/project-6.jpg" alt="My Project" />
          <div className="projects__btns">
            <a href="#!" className="projects__btn">
              <i className="fas fa-eye"></i> Preview
            </a>
            <a href="#!" className="projects__btn">
              <i className="fab fa-github"></i> Github
            </a>
          </div>
        </div>
      </div>
    </>
  );
};
