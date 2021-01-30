import React, { FC, useState, useEffect }  from 'react';

import Restaurant from './Restaurant/Restaurant';
import './Restaurants.css';
import { ISectionData } from '../../interface';

const Slider = require('infinite-react-carousel')

const Restaurants: FC<ISectionData> = ({ sectionData }) => {
    const [slidesToShow, setSlidesToShow] = useState(0);

    const updateSlides = () => {
        if (window.innerWidth < 800) {
            setSlidesToShow(3)  
        } else if (window.innerWidth < 1100){
            setSlidesToShow(4)
        } else {
            setSlidesToShow(5)
        }
    }

    useEffect(() => {
        updateSlides();
        window.addEventListener('resize', updateSlides);
        return () => {
            window.removeEventListener('resize', updateSlides);
        }
    });

    const restaurants = sectionData.restaurants.map( restaurant => (
        <Restaurant 
            data={restaurant}
            key={restaurant.name}
        />
    ));   
    
    return ( 
        <Slider
            className="Slider"
            rows={1}
            slidesToShow={slidesToShow}
            dots
            arrows
            swipe
            centerPadding={10}
        >
            {restaurants}
        </Slider>
    )
};

export default Restaurants;