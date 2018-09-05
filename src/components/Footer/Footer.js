import React from "react";
import "./Footer.css";
import logo from "../../logo.svg";

const Foot = () => {
  return (
    <footer className="page-footer">
      <div className="container" />
      <div className="footer-copyright">
        <span className="footerStyle">Clicky Game! <img src={logo}/></span>
      </div>
    </footer>
  );
};

export default Foot;
