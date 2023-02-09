import React from 'react'
import Slider from 'react-slick'
import { FoodCard } from '../foodCard/FoodCard';
import './popularFood.scss'
import { popularFood } from '../../foodData';

export const PopularFood = () => {
    const settings = {
        arrows: false,
        dots: true,
        infinite: true,
        autoplay: false,
        speed: 2000,
        slidesToShow: 4,
        slidesToScroll: 2,
        
      };
  return (
    <div className='popularFood'>
        <h2>Popular Foods</h2>
        <Slider {...settings}>
            {popularFood.map(food=><FoodCard key={food.id} desc={food.desc} image={food.image} price={food.price} prevPrice={food.prevPrice}/>)}
        </Slider>
    </div>
  )
}
