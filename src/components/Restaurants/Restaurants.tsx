import React, { FC, useState, useEffect, useCallback }  from 'react';
import Slider from 'infinite-react-carousel';

import Restaurant from './Restaurant/Restaurant';
import { ISectionData } from '../../interface';
import './Restaurants.css';

const getSlidesToShow = (width: number): number => {
    if (width < 800) {
        return 3;
    } else if (width < 1100){
        return 4;
    }
    return 5;
};

const Restaurants: FC<ISectionData> = ({ sectionData }) => {
    const [slidesToShow, setSlidesToShow] = useState(getSlidesToShow(window.innerWidth));

    const resizeHandler = useCallback(() => setSlidesToShow(getSlidesToShow(window.innerWidth)), []);

    useEffect(() => {
        window.addEventListener('resize', resizeHandler);
        return () => {
            window.removeEventListener('resize', resizeHandler);
        }
    }, [resizeHandler]);

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