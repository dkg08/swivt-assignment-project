import React from 'react'
import './bestDeals.scss'
import pizza from "../../assets/deals/image 13.png"
import burger from "../../assets/deals/image 14.png"
import special from "../../assets/deals/image 15.png"

export const BestDeals = () => {
  return (
    <div className='bestDeals'>
        <h2 className="dealTitle">Best Deals</h2>
        <div className="dealList">
        <div className="deal">
            <img src={pizza} alt="deal" />
        </div>
        <div className="deal">
            <img src={burger} alt="deal" />
        </div>
        <div className="deal">
            <img src={special} alt="deal" />
        </div>
        </div>
    </div>
  )
}
