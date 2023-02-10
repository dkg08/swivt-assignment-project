import React from 'react'
import './userBenefit.scss'
import benefit1 from '../../assets/benefit/benefit1.svg'
import benefit2 from '../../assets/benefit/benefit2.svg'
import benefit3 from '../../assets/benefit/benefit3.svg'
import benefit4 from '../../assets/benefit/benefit4.svg'

export const UserBenefit = () => {
    const benefitCard = [
        {
            id: 1,
            title: "Superfast Delivery",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consectetur ut quam aliquet nascetur. ",
            icon: benefit1,
        },
        {
            id: 2,
            title: "Best Prices & Offers",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consectetur ut quam aliquet nascetur. ",
            icon: benefit2,
        },
        {
            id: 3,
            icon: benefit3,
            title: "Wide Assortment",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consectetur ut quam aliquet nascetur. "
        },
        {
            id: 4,
            icon: benefit4,
            title: "Easy Returns/Refund",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consectetur ut quam aliquet nascetur. "
        },
        
    ]
  return (
    <div className='benefits'>
        {benefitCard.map(item=>
        <div className='benefitCard' key={item.id}>
            <img src={item.icon} alt={item.title} className="benefitIcon" />
            <h3 className='benefitTitle'>{item.title}</h3>
            <p className="benefitDescription">{item.desc}</p>
        </div>)}
    </div>
  )
}
