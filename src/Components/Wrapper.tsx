import React, { FC } from "react";
import { SocialIcons } from "./SocialIcons";
import { Footer } from "./Footer";
import { useLocation } from "react-router-dom";
import { getLocation } from "../utils/getLocation";


export const Wrapper:FC = (props) => {
    const location = useLocation();
    console.log(location.pathname.split('/'))
  return (
    <section className={getLocation(location)}>
        {props.children}
        <SocialIcons />
        <Footer />
    </section>
  );
};

