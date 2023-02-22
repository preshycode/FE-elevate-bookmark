import React from "react";
import "./Footer.css";
import images from "../../images";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__wrapper">
        <div className="footer__nav">
          <img src={images.logoBookmark} alt="" />
          <ul>
            <li>
              <a href="">FEATURES</a>
            </li>
            <li>
              <a href="">PRICING</a>
            </li>
            <li>
              <a href="">CONTACT</a>
            </li>
          </ul>
        </div>
        <div className="footer__social">
          <img src={images.iconFacbook} alt="" />
          <img src={images.iconTwitter} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
