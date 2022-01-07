import classNames from "classnames";
import React, { FC } from "react";

interface IMenuButtonProps {
  onClick: () => void;
  opened: boolean;
}

export const MenuBtn: FC<IMenuButtonProps> = (props) => {
  return (
    <div
      className={classNames(["menu-btn", { open: props.opened }])}
      onClick={props.onClick}
    >
      <span
        className={classNames(["menu-btn__burger", { open: props.opened }])}
      ></span>
    </div>
  );
};
