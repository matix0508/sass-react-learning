import React, { FC } from "react";
import classnames from "classnames";
import { Link, useLocation } from "react-router-dom";
import { getLocation } from "../utils/getLocation"


interface IMenuItemProps {
  to: string
  opened: boolean,
  onClick: () => void
}

export const MenuItem: FC<IMenuItemProps> = (props) => {
  const loc = useLocation();
  const liStyles = classnames("menu-nav__item", {
    active: getLocation(loc) === props.to,
    open: props.opened
  });
  return (
    <li className={liStyles} onClick={props.onClick}>
      <Link to={props.to} className={classnames("menu-nav__link", {open: props.opened})}>
        {props.children}
      </Link>
    </li>
  );
};
