import React from "react";
import { Card } from "react-materialize";
import "./Card.css";

const Cardfunc = () => {
  return (
    <Card>
      <div className="gameTitle">
        <div className="logos">
          <h1>Clicky Game!</h1>
          <h5>
            Click on an image to earn points, but don't click on any more than
            once!
          </h5>
        </div>
      </div>
    </Card>
  );
};

export default Cardfunc;
