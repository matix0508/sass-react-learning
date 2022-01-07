import React, { FC } from "react";
import { Experience } from "../Experience";

export const About: FC = () => {
  return (
    <>
      <div className="about__bio-image">
        <div className="about__bio">
          <h2 className="text-secondary">BIO</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae culpa
            sapiente rerum dolores aliquam, fugiat eveniet commodi. Vel, nihil,
            numquam possimus deserunt officiis rerum in omnis error esse iusto
            quas.
          </p>
        </div>
      </div>

      <div className="jobs">
        <Experience
          fromTo={"2017 - Current"}
          company={"Google"}
          position="Full Stack Developer"
        >
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellat
          vero dolores eum ut, culpa ullam quis quasi exercitationem in
          adipisci.
        </Experience>
        <Experience
          fromTo={"2015 - 2017"}
          company={"Microsoft"}
          position="Front End Developer"
        >
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellat
          vero dolores eum ut, culpa ullam quis quasi exercitationem in
          adipisci.
        </Experience>
        <Experience
          fromTo={"2012 - 2015"}
          company={"Web Design Co."}
          position="Graphic Designer"
        >
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellat
          vero dolores eum ut, culpa ullam quis quasi exercitationem in
          adipisci.
        </Experience>
      </div>
    </>
  );
};
