import React, { useState } from 'react';

export const Toggle = (props) => {

    const {
        isChecked,
        fieldValue
    } = props;

    const _onCHangeHandler = () => {
        props.onChange();
    }

    return (
        <div className="toggle-container">
            <label className="toggle-switch">
                <input type="checkbox" checked={isChecked} onChange={_onCHangeHandler}/>
                <span className="slider round"/>
            </label>
            <div className="inline-text-data">
                <p>{fieldValue}</p>
            </div>
        </div>
    )
}