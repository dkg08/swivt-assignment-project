import React from "react";
import "./singleSlider.scss";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import { FoodBannerCard } from "../foodBannerCard/FoodBannerCard";

export const SingleSlider = () => {
  return (
    <div className="singleSlider">
      <button className="prev arrow">
        <IoIosArrowBack />
      </button>
      <FoodBannerCard />
      <button className="next arrow">
        <IoIosArrowForward />
      </button>
    </div>
  );
};
