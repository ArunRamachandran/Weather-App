import React from 'react';

export const DataList = (props) => {

    const {
        data,
        key,
        activeLocation
    } = props;

    return (
        <div className={`data-list-layout ${activeLocation === data ? 'selected-card' : ''}`} onClick={() => props.onClick(data)} key={key}>
            <p>{data}</p>
        </div>
    )
}