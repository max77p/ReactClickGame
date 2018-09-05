import React from "react";
import "./Nav.css";

const Nav = (props) => {
  return (
    <div className="topStyle">
        <div className="row navRow">
          <div className="col s4 navItem">Click Game</div>
          <div className="col s4 navItem">{props.message}</div>
          <div className="col s4 navItem">Score: {props.score} | Top Score: {props.topscore}</div>
        </div>
    </div>
  );
};

export default Nav;
