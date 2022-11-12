import React from "react";

const Card = ({ card }) => {
  const { id, icon, description, title, bgClass } = card;
  return (
    <div className={`text-white card p-6 card-side  shadow-xl ${bgClass}`}>
      <figure>
        <img src={icon} alt="icon" />
      </figure>
      <div className="card-body bgClass">
        <h2 className="card-title">{title}</h2>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default Card;
