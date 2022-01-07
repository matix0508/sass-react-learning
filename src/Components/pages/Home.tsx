import React, { FC } from "react";

export const Home: FC = () => {
  return (
    <>
      <h2>Hi! My Name Is</h2>
      <h1 className="home__name">
        Mike <span className="home__name--last">Smith</span>
      </h1>
      <h2>Web Developer, Designer & Programmer</h2>
    </>
  );
};
