import React from "react";
import "./Nav.css";

const Nav = (props) => {
  return (
    <div className="topStyle">
      <div className="container">
        <div className="row">
          <div className="col m4">Click Game</div>
          <div className="col m4">{props.message}</div>
          <div className="col m4">Score: {props.score} | Top Score: {props.topscore}</div>
        </div>
      </div>
    </div>
  );
};

export default Nav;
