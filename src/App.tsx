import React, { useState } from "react";
import { Menu } from "./Components/Menu";
import { MenuItem } from "./Components/MenuItem";
import { MenuBtn } from "./Components/MenuBtn";
import { Home } from "./Components/pages/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Wrapper } from "./Components/Wrapper";
import { About } from "./Components/pages/About";
import { Projects } from "./Components/pages/Projects";
import { Contact } from "./Components/pages/Contact";

function App() {
  const [menuOpened, setMenuOpened] = useState(false);
  return (
    <BrowserRouter>
      <header>
        <MenuBtn
          onClick={() => setMenuOpened(!menuOpened)}
          opened={menuOpened}
        />
        <Menu opened={menuOpened}>
          <MenuItem
            to="home"
            opened={menuOpened}
            onClick={() => setMenuOpened(false)}
          >
            Home
          </MenuItem>
          <MenuItem
            to="about"
            opened={menuOpened}
            onClick={() => setMenuOpened(false)}
          >
            About Me
          </MenuItem>
          <MenuItem
            to="project"
            opened={menuOpened}
            onClick={() => setMenuOpened(false)}
          >
            Projects
          </MenuItem>
          <MenuItem
            to="contact"
            opened={menuOpened}
            onClick={() => setMenuOpened(false)}
          >
            Contact
          </MenuItem>
        </Menu>
      </header>

      <main>
        <Routes>
          <Route
            path="home"
            element={
              <Wrapper>
                <Home />
              </Wrapper>
            }
          />
          <Route
            path="about"
            element={
              <Wrapper>
                <About />
              </Wrapper>
            }
          />
          <Route
            path="project"
            element={
              <Wrapper>
                <Projects />
              </Wrapper>
            }
          />
          <Route
            path="contact"
            element={
              <Wrapper>
                <Contact />
              </Wrapper>
            }
          />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
