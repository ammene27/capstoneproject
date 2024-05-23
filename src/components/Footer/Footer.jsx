import React from "react";
import "./Footer.css";
import Logo from "../../assets/images/Logo.svg";
const Footer = () => {
  return (
    <div className="footer">
      <img src={Logo} alt="" />

      <ul>
        <li>Terms and Services</li>
        <li>Privacy Policies</li>
      </ul>
    </div>
  );
};

export default Footer;
