import React from "react";
import "./catalogCard.scss";

export const CatalogCard = ({ icon, caption }) => {
  return (
    <div className="catalogCard">
      <div className="iconContainer">
        <img src={icon} alt="food-icon" />
      </div>
      <p className="foodCaption">{caption}</p>
    </div>
  );
};
