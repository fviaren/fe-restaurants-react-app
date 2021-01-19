import React from 'react';

import Restaurant from './Restaurant/Restaurant';

const restaurants = ({sectionData}) => {
    const restaurants = sectionData.restaurants.map( restaurant => (
            <Restaurant data={restaurant}/>
        ))
    return (
        <div>
            <button>Previous</button>
            {restaurants}
            <button>next</button>
        </div>
    );
};

export default restaurants;