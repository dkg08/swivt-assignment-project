import React from "react";
import "./coupon.scss";
import { SingleCoupon } from "../singleCoupon/SingleCoupon";

export const Coupon = () => {
  
    //list of data for coupons
  const couponData = [
    {
      id: 1,
      percentOff: 20,
      code: "MDNY20",
      color: "#FCBC08",
    },
    {
      id: 2,
      percentOff: 35,
      code: "MDNY20",
      color: "#EFB55D",
    },
    {
      id: 3,
      percentOff: 10,
      code: "MDNY20",
      color: "#926228",
    },
    { id: 4, percentOff: 50, code: "MDNY20", color: "#EDA3BF" },
  ];
  return (
    <div className="coupon">
      <h3 className="couponHeader">Coupon Code</h3>

      {/* list of coupon cards*/}
      <div className="couponList">
        {couponData.map((coupon) => (
          <SingleCoupon
            key={coupon.id}
            percentOff={coupon.percentOff}
            code={coupon.code}
            color={coupon.color}
          />
        ))}
        {/* <SingleCoupon /> */}
      </div>
    </div>
  );
};
