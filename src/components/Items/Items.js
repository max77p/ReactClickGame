import React from "react";
import "./Items.css";
// import stew from "../../assets/images/stewie.png";

export const Items = props => {
// console.log(props.id);
  return (
    <div className="col l3 s12 m6 individCard" onClick={()=>props.onClick(props.id)}>
      <div
        role="img"
        aria-label="click item"
        className="click-item"
        style={{ backgroundImage: `url(${props.characters})` }}
      />
    </div>
  );
};
// style={{ backgroundImage: `url(${x.image})` }}
