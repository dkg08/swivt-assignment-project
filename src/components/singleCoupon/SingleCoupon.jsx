import React from "react";
import "./singleCoupon.scss";

export const SingleCoupon = ({percentOff, code, color}) => {
  return (
    <div className="couponContainer" style={{backgroundColor: color}}>
      <div className="couponWrapper">
        <div className="topSection">{percentOff}% OFF</div>
        <div className="bottomSection">
          <p className="code">
            Code: <br></br>
            <span>{code}</span>
          </p>
          <button className="copyCode">Copy Code</button>
        </div>
      </div>
      <span className="circle left"></span>
      <span className="circle right"></span>
    </div>
  );
};
