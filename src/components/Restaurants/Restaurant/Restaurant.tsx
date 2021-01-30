import React, { FC, useState, useEffect, useCallback } from 'react';
import { Blurhash } from "react-blurhash";
import ClassNames from 'classnames';

import './Restaurant.css';
import { IRestaurantProp } from '../../../interface';

const getThumbSize = (width: number): [number, number] => {
    if (width < 600) {
        return [100, 93];
    }

    return [180, 138];
};

const Restaurant: FC<IRestaurantProp> = ({ data }) => {
    const [imageSize, setImageSize] = useState(getThumbSize(window.innerWidth));

    const resizeHandler = useCallback(() => setImageSize(getThumbSize(window.innerWidth)), []);

    useEffect(() => {
        window.addEventListener('resize', resizeHandler);
        return () => {
            window.removeEventListener('resize', resizeHandler);
        }
    }, [resizeHandler]);

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
                        <p>{((data.popularity*10).toFixed(1))}</p>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Restaurant;
