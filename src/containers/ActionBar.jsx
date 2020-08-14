import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import { updatePreferredConversion } from '../actions/actions';
import { Toggle } from '../components/Toggle';
import * as Constants from '../constants/constants';

export const ActionBar = () => {

    const preferredConversion = useSelector(state => state.weatherData.preferredConversion);
    const dispatch = useDispatch();

    const _handleChangeInFormat = () => {
        dispatch(updatePreferredConversion(preferredConversion === Constants.CELSIUS ? Constants.FARENHEIT : Constants.CELSIUS));
    }

    return (
        <div className="app-nav-bar">
            <p className="app-title">Cloud Sync</p>
            <Toggle 
                onChange={_handleChangeInFormat} 
                fieldValue={preferredConversion === Constants.CELSIUS ? '°C' : '°F'}
                isChecked={preferredConversion === Constants.CELSIUS}
            />
        </div>
    )
}