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
        <p className="bannerDesciption">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dignissimos
          ab, voluptas eum error omnis, repellendus velit, numquam voluptatibus
          eaque totam quo sunt! Ipsa molestiae doloribus veniam magni possimus,
          quis omnis neque excepturi vero veritatis?
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
