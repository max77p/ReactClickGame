import React from "react";
import "./Items.css";
// import stew from "../../assets/images/stewie.png";

export const Items = props => {
console.log(props);
  return (
          <div
            role="img"
            aria-label="click item"
            className="col l3 s12 m6 click-item"
            style={{ backgroundImage: `url(${props.characters})` }}
          />
  )
}

""
// style={{ backgroundImage: `url(${x.image})` }}
