import React from 'react';
import { Blurhash } from "react-blurhash";

const restaurant = ({data}) => {
    return (
        <div>
            <Blurhash 
                hash={data.blurhash}
                width={400}
                height={300}
                resolutionX={32}
                resolutionY={32}
                punch={1}
            />
            <h3>{data.name}</h3>
            <h4>{data.online ? 'Online' : 'Closed'}</h4>
        </div>
        
    );
};

export default restaurant;