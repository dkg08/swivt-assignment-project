import React from "react";
import "./foodBannerCard.scss";
import grilledLamb from "../../assets/grilled-lamb.png";

export const FoodBannerCard = () => {
  return (
    <div className="foodBannerCard">
      <div className="bannerLeftSection">
        <h3 className="bannerSubtitle">All Delicacies</h3>
        <h2 className="bannerTitle">
          Grilled
          <br />
          Lamb
        </h2>
        <p className="bannerDescription">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vulputate morbi ultrices at pulvinar feugiat. Ultrices consequat eget magna risus, posuere dui. 
        </p>
        <button className="bannerButton">ADD TO CART</button>
      </div>
      <div className="bannerRightSection">
        <div className="rightImageContainer">
          <img
            src={grilledLamb}
            alt="grilled lamb"
            className="grilledLambImage"
          />
        </div>
      </div>
    </div>
  );
};
