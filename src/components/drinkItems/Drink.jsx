import React,{useRef} from 'react'
import Slider from 'react-slick'
import { FoodCard } from '../foodCard/FoodCard';
import './drink.scss'
import { drinkData } from '../../foodData';


export const Drink = () => {
  const windowSize = useRef([window.innerWidth, window.innerHeight]);
  const mySize = windowSize.current[0];
    const settings = {
        arrows: false,
        dots: true,
        infinite: true,
        autoplay: false,
        speed: 2000,
        slidesToShow: mySize<=745?(mySize<=480?1:3):4,
        slidesToScroll: 2,
        
      };
  return (
    <div className='drink'>
        <h2>Drink Items</h2>
        <Slider {...settings}>
            {drinkData.map(food=><FoodCard key={food.id} desc={food.desc} image={food.image} price={food.price} prevPrice={food.prevPrice}/>)}
        </Slider>
    </div>
  )
}
