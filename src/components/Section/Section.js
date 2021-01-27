import React from 'react';

import Restaurants from '../Restaurants/Restaurants';
import './Section.css';

const section = ({ sectionData, slidesToShow }) => {
    return (
        <div className="Section">
            <h1>{sectionData.title}</h1>
            <Restaurants 
                sectionData={sectionData}
                slidesToShow={slidesToShow}
            />
        </div>
    );
};

export default section;