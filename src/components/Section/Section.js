import React from 'react';

import Restaurants from '../Restaurants/Restaurants';

const section = ({sectionData}) => {
    return (
        <div>
            <h1>{sectionData.title}</h1>
            <Restaurants sectionData={sectionData}/>
        </div>
    );
};

export default section;