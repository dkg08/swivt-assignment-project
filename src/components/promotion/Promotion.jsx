import React from 'react'
import './promotion.scss'
import promo1 from '../../assets/promotion/promotion1.png'
import promo2 from '../../assets/promotion/promotion2.png'

export const Promotion = () => {
  return (
    <div className='promotion'>
        <div className="promotionCard">
            <img src={promo1} alt="food" />
            <div className="captionBanner">
                </div>
                <div className="text">
                    <p className="promotionDescription"><span className='promo heading'>Promotion of the day!</span><br/>
                    <span className="promo desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ut tortor sem aliquet donec quis eu dolor amet. Eget nibh enim.</span></p>
            </div>
        </div>
        <div className="promotionCard">
            <img src={promo2} alt="food" />
            <div className="captionBanner">
                </div>
                <div className="text">
                    <p className="promotionDescription"><span className='promo heading'>Promotion of the day!</span><br/>
                    <span className="promo desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ut tortor sem aliquet donec quis eu dolor amet. Eget nibh enim.</span></p>
            </div>
        </div>
    </div>
  )
}
