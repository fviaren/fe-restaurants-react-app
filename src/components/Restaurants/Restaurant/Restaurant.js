import React from 'react';
import { Blurhash } from "react-blurhash";
import ClassNames from 'classnames';

import './Restaurant.css';

const restaurant = ({data}) => {
    let imageSize = [180,138]
    if(window.innerWidth < 600) {
        imageSize = [100, 93]
    }
    // let closedClass = {ClassNames({
    //     'Closed': closed
    // })}

    return (
        <div className="Restaurant">
            <Blurhash 
                className="Image"
                hash={data.blurhash}
                width={imageSize[0]}
                height={imageSize[1]}
                resolutionX={32}
                resolutionY={32}
                punch={1}
            />
            <div className="Data">
                <h3>{data.name}</h3>
                <div className="Info">
                    <h4 className={ClassNames({
                        'Info': true,
                        'Open': data.online,
                        'Closed': !data.online
                    })}>
                        {data.online ? 'Online' : 'Closed'}
                    </h4>
                    <div className="Rating">
                        <p className="Heart">{'\u2665'}</p>
                        <p>{((Number.parseFloat(data.popularity))*10).toFixed(1)}</p>
                    </div>
                </div>
            </div>
            
        </div>
        
    );
};

export default restaurant;