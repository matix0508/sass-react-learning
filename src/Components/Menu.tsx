import classNames from "classnames";
import React, { FC } from "react";

interface IMenuProps {
  opened: boolean
}

export const Menu:FC<IMenuProps> = (props) => {
  return (
    <nav className={classNames(["nav", {open: props.opened}])}>
      <ul className={classNames(["menu-nav", {open: props.opened}])}>
        {props.children}
      </ul>
    </nav>
  );
}
