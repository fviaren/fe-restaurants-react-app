import React, { FC } from 'react';

import Section from '../Section/Section';
import Spinner from '../UI/Spinner/Spinner';
import { ISectionsProp } from '../../interface';
import './Layout.css';

const Layout: FC<ISectionsProp> = ({ sections }) => {    
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

export default Layout;
