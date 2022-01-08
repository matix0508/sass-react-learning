import React, { FC } from "react";
import { Project } from "../Project";

export const Projects: FC = () => {
  return (
    <>
      <div className="projects__bio-image">
        <h1 className="text-secondary">My Projects</h1>
      </div>

      <div className="projects__items">
        <Project img="project-1.jpg" name="My Project" />
        <Project img="project-2.jpg" name="My Project" />
        <Project img="project-3.jpg" name="My Project" />
        <Project img="project-4.jpg" name="My Project" />
        <Project img="project-5.jpg" name="My Project" />
        <Project img="project-6.jpg" name="My Project" />
      </div>
    </>
  );
};
