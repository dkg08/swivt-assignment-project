import React from "react";
import "./rider.scss";
import rider from "../../assets/rider.svg";

export const RiderProgram = () => {
  return (
    <div className="rider">
      <div className="riderWrapper">
        <h3 className="riderSubtitle">Join Our</h3>
        <h2 className="riderTitle">Rider Program</h2>
        <p className="riderDescription">
          Citi977's rider crew is the backbone of Citi977 vision to change how
          people get their Grocery & Foods
        </p>
        <p className="subDescription">
          Be the Citi977 Delivery Hero and earn more!
        </p>
        <button className="riderButton">APPLY</button>
      </div>
      <img src={rider} alt="rider" className="riderVector" />
    </div>
  );
};
