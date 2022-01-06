import React, { FC } from "react";
import './Home.scss'

export const Home: FC = () => {
  return (
    <>
      <h2>Hi! My Name Is</h2>
      <h1 className="name">
        Mike <span className="name--last">Smith</span>
      </h1>
      <h2>Web Developer, Designer & Programmer</h2>
    </>
  );
};
