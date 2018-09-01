import React from "react";
import "./Nav.css";

const Nav = () => {
  return (
    <div className="topStyle">
      <div className="container">
        <div className="row">
          <div className="col m4">Click Game</div>
          <div className="col m4">Click an image to being!</div>
          <div className="col m4">Score:0|Top Score:0</div>
        </div>
      </div>
    </div>
  );
};

export default Nav;
