import React, { FC } from 'react';

import Restaurants from '../Restaurants/Restaurants';
import './Section.css';
import { ISectionProp } from '../../interface';

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