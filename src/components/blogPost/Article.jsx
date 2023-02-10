import React from "react";
import "./article.scss";
import rect9 from "../../assets/article/Rectangle9.png";
import production from '../../assets/production.mp4'

export const Article = () => {
  return (
    <div className="article">
      <h2 className="articleTitle">Popular Delicacies</h2>

      <div className="articleTopSection">
        <div className="articleTopLeft">
          <img src={rect9} alt="delicious pizza" />
        </div>
        <div className="articleTopRight">
          <div className="articleTopRightWrapper">
          <h3 className="articleSubtitle">
            Simple, tasty and very healthy vegetable and egg salad
          </h3>
          <p className="recipe">
          <span className="recipeHeader"><strong>Recipe:</strong><br/></span>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pharetra ut bibendum fringilla morbi at ac rhoncus nunc. Sed eu malesuada fusce velit. Nibh in quis at tincidunt iaculis. At magna mattis donec bibendum odio. Id et blandit iaculis lectus pellentesque at aliquet odio commodo. Quis cursus facilisis lobortis hendrerit augue mauris arcu rhoncus. Malesuada sed feugiat consequat, tellus posuere nam nam. Sapien, sit sapien risus, tristique egestas. Nullam feugiat dignissim odio pretium auctor. Ut at tempor, lacinia pellentesque neque lacinia. Justo nulla libero vestibulum aliquam blandit volutpat pretium posuere tristique. Risus dictum turpis bibendum cursus justo, mauris massa, dignissim.

          </p>
          <div className="topRightBottomSection">
            <button className="articleButton">Read Completely</button>
            <div className="articleQuantity">
              <span className="quantityText">Quantity</span>
              <button className="arithmetic minus">-</button>
              <span className="articleAmount">2</span>
              <button className="arithmetic plus">+</button>
            </div>
          </div>
          </div>
        </div>
      </div>

      <div className="articleBottomSection">
        <div className="articleBottomLeft">
          <div className="articleBottomLeftWrapper">
            <h3 className="articleBottomSubtitle">About Company</h3>
            <p className="companyDetail">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pharetra ut bibendum fringilla morbi at ac rhoncus nunc. Sed eu malesuada fusce velit. Nibh in quis at tincidunt iaculis. At magna mattis donec bibendum odio. Id et blandit iaculis lectus pellentesque at aliquet odio commodo. Quis cursus facilisis lobortis hendrerit augue mauris arcu rhoncus. Malesuada sed feugiat consequat, tellus posuere nam nam. Sapien, sit sapien risus, tristique egestas. Nullam feugiat dignissim odio pretium auctor. Ut at tempor, lacinia pellentesque neque lacinia. Justo nulla libero vestibulum aliquam blandit volutpat pretium posuere tristique. Risus dictum turpis bibendum cursus justo, mauris massa, dignissim.

            </p>
          </div>
        </div>

        <div className="articleBottomRight">
          <video src={production} controls />
        </div>
      </div>
    </div>
  );
};
