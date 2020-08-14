import React from 'react';
import { ImageHolder } from './ImageHolder';
import Tick from '../static/tick.svg';

export const DataCard = (props) => {

    const {
        data,
        key,
        activeLocation
    } = props;

    return (
        <div className={`data-card-layout ${activeLocation === data ? 'selected-card' : ''}`} onClick={() => props.onClick(data)} key={key}>
            <p>{data}</p>
        </div>
    )
}