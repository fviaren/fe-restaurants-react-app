import React from 'react';

import Restaurants from '../Restaurants/Restaurants';
import './Section.css';

const section = ({ sectionData }) => {
    return (
        <div className="Section">
            <h1>{sectionData.title}</h1>
            <Restaurants 
                sectionData={sectionData}
            />
        </div>
    );
};

export default section;