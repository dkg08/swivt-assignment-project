import React from 'react'
import Slider from 'react-slick'
import { FoodCard } from '../foodCard/FoodCard';
import './breakfast.scss'
import { breakfastData } from '../../foodData';

export const Breakfast = () => {
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
    <div className='drink'>
        <h2>Breakfast Items</h2>
        <Slider {...settings}>
            {breakfastData.map(food=><FoodCard key={food.id} desc={food.desc} image={food.image} price={food.price} prevPrice={food.prevPrice}/>)}
        </Slider>
    </div>
  )
}
