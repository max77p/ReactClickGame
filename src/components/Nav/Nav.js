import React from "react";
import { Navbar, NavItem } from "react-materialize";
import "./Nav.css";
const Nav = () => {
  return (
      
        <Navbar brand="Click Game" right className="testStyle">
          <NavItem>Clicky Game</NavItem>
          <NavItem href="components.html">Components</NavItem>
        </Navbar>
      
  );
};

export default Nav;
