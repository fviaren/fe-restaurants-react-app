import React from 'react';
import Slider from 'infinite-react-carousel';

import Restaurant from './Restaurant/Restaurant';
import './Restaurants.css';

const restaurants = ({ sectionData, slidesToShow }) => {
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

export default restaurants;