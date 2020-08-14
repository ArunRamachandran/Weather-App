import React from 'react';

export const ImageHolder = (props) => {
    const {
        src,
        customClassName
    } = props;
    return (
        <div className={`image-holder ${customClassName}`}>
            <img src={src}/>
        </div>
    )
}