import React from 'react';
import Slider from 'infinite-react-carousel';

import Restaurant from './Restaurant/Restaurant';
import RespContext from '../../context/resp-context';
import './Restaurants.css';

const restaurants = ({ sectionData }) => {
    const restaurants = sectionData.restaurants.map( restaurant => (
        <Restaurant 
            data={restaurant}
            key={restaurant.name}
        />
    ));
    return ( 
    <RespContext.Consumer>
        {(context) => <Slider
            className="Slider"
            rows={1}
            slidesToShow={context.slidesToShow}
            dots
            arrows
            swipe
            centerPadding={10}
            
        >
            {restaurants}
        </Slider>}
    </RespContext.Consumer>
    )
};

export default restaurants;