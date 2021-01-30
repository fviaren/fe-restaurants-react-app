import React, { FC } from 'react';

import Restaurants from '../Restaurants/Restaurants';
import { ISectionProp } from '../../interface';
import './Section.css';

const Section: FC<ISectionProp> = ({ sectionData }) => {
    return (
        <div className="Section">
            <h1>{sectionData.title}</h1>
            <Restaurants
                sectionData={sectionData}
            />
        </div>
    );
};

export default Section;