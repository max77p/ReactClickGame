import React from "react";
import { Navbar, NavItem } from "react-materialize";
import "./Nav.css";

const Nav = () => {
  return (
    <div className="topStyle">
      <div class="container">
        <div class="row">
          <div class="col m4">Click Game</div>
          <div class="col m4">Click an image to being!</div>
          <div class="col m4">Score:0|Top Score:0</div>
        </div>
      </div>
    </div>
  );
};

export default Nav;
