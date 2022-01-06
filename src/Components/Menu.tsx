import React, { FC } from "react";
import './Menu.scss'

export const Menu:FC = (props) => {
  return (
    <nav className="nav">
      <ul className="menu-nav">
        {props.children}
      </ul>
    </nav>
  );
}
