import React from 'react';

import Section from '../../components/Section/Section';
import Spinner from '../../components/UI/Spinner/Spinner';
import './Layout.css';

const layout = ({ sections }) => {    
    return (
        <div className="Layout" >
            {sections 
                ? sections.map(section => (
                    <Section 
                        key={section.title}
                        sectionData={section}
                    />
                ))
                : <Spinner />}
            <a className="Credit" href="https://www.freepik.com/vectors/food">Food vector created by bimbimkha - www.freepik.com</a>
        </div>
    );
}

export default layout;
