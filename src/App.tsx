import React from "react";
import "./App.scss";
import { Menu } from "./Components/Menu";
import { MenuItem } from "./Components/MenuItem";
import { MenuBtn } from "./Components/MenuBtn";
import { Home } from "./Components/pages/Home";

function App() {
  return (
    <>
      <header>
        <MenuBtn />

        <Menu>
          <MenuItem active={true} to="#!">
            Home
          </MenuItem>
        </Menu>
      </header>

      <main>
        <section className="home">
         <Home  />

          <div className="social-icons">
            <a href="#!">
              <i className="fab fa-twitter fa-2x"></i>
            </a>
            <a href="#!">
              <i className="fab fa-facebook fa-2x"></i>
            </a>
            <a href="#!">
              <i className="fab fa-instagram fa-2x"></i>
            </a>
            <a href="#!">
              <i className="fab fa-github fa-2x"></i>
            </a>
          </div>

          <footer>&copy; Copyright 2022</footer>
        </section>
      </main>
    </>
  );
}

export default App;
