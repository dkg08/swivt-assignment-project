import React from 'react'
import './foodCard.scss'

export const FoodCard = ({image,desc,price,prevPrice}) => {
  return (
    <div className='foodCard'>
        <div className="topSection">
            <img src={image} alt="coconut" />
        </div>
        <div className="foodDescription">
           <p> {desc}</p>
        </div>
        <div className="bottomSection">
            <div className="bottomLeft">
                <p className='price'>Rs. {price}</p>
                <p className="prevPrice">Rs. {prevPrice}</p>
            </div>
            <button className="add">ADD</button>
        </div>
    </div>
  )
}
