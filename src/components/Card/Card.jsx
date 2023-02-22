import React from "react";
import "./Card.css";
const Card = ({ cards } = {}) => {
  return (
    <div className="card__wrapper">
      {cards.map((card, index) => (
        <div className={`card` + index}>
          <img className="web-logo" src={card.img} alt="" />
          <h3>{card.heading}</h3>
          <p>{card.para}</p>
          <img className="bgDots" src={card.bgDots} alt="" />
          <button>{card.btn}</button>
        </div>
      ))}
    </div>
  );
};

export default Card;
