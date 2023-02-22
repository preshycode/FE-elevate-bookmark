import React from "react";
import "./Accordion.css";
import images from "../../images";

const Accordion = ({ label, content } = {}) => {
  const [toggle, setToggle] = React.useState(false);

  return (
    <div className="accordion">
      <div className="label" onClick={() => setToggle(!toggle)}>
        <label htmlFor="">{label}</label>
        <img
          src={images.iconArrow}
          alt=""
          className={toggle ? "arrowUp" : ""}
        />
      </div>

      <div className={toggle ? "active__content" : "content"}>
        <p>{content}</p>
      </div>
    </div>
  );
};

export default Accordion;
