import React from "react";
import "./Extention.css";
import images from "../../images";
import Card from "../Card/Card";

const cards = [
  {
    img: images.logoChrome,
    heading: "Add to chrome",
    para: "Minimum version 62",
    btn: "Add & Install Extension",
    bgDots: images.bgDots,
  },
  {
    img: images.logoFirefox,
    heading: "Add to firefox",
    para: "Minimum version 55",
    btn: "Add & Install Extension",
    bgDots: images.bgDots,
  },
  {
    img: images.logoOpera,
    heading: "Add to chrome",
    para: "Minimum version 46",
    btn: "Add & Install Extension",
    bgDots: images.bgDots,
  },
];

const Extention = () => {
  return (
    <div className="extention">
      <div className="extention__text">
        <h3>Download the extention</h3>
        <p>
          We’ve got more browsers in the pipeline. Please do let us know if
          you’ve got a favourite you’d like us to prioritize.
        </p>
      </div>

      <div className="extention__cards">
        <Card cards={cards} />
      </div>
    </div>
  );
};

export default Extention;
