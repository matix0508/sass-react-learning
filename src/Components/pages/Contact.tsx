import React, { FC } from "react";
import { ContactItem } from "../ContactItem";

export const Contact: FC = () => {
  return (
    <>
      <h2>Contact Me..</h2>

      <div className="contact__list">
        <ContactItem name="email" icon={"envelope"}>
          email@email.com
        </ContactItem>
        <ContactItem name="phone" icon={"mobile"}>
          +1 (555)
        </ContactItem>
        <ContactItem name="address" icon={"marker"}>
          123 Street, Honk Kong
        </ContactItem>
      </div>
    </>
  );
};
