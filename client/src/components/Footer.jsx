import React from "react";
import Logo from "../img/logo.png";

const Footer = () => {
  return (
    <footer>
      <img className="" src={Logo} alt="logo" />
      <span>
        Made with <b>React and MySQL</b>
      </span>
    </footer>
  );
};

export default Footer;
