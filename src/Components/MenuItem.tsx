import React, { FC } from "react";
import classnames from "classnames";
import './MenuItem.scss'

interface IMenuItemProps {
  to: string;
  active: boolean;
}

export const MenuItem: FC<IMenuItemProps> = (props) => {
  const liStyles = classnames("menu-nav", "item", {
    active: props.active,
  });
  return (
    <li className={liStyles}>
      <a href={props.to} className={classnames("menu-nav__link")}>
        {props.children}
      </a>
    </li>
  );
};
