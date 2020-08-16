import React from 'react';

export const AdditionalDetails = (props) => {

    const {
        transformedData,
        weatherData,
        unit
    } = props;

    const dateInfo = new Date().toDateString();

    return (
        <div className="main-data-section">
            <p className="header-text">{`Today, ${dateInfo} | ${new Date().toLocaleTimeString('en-US', { hour12: true })}`}</p>
            <div className="detailed-view">
                <p>Feels Like <span>{transformedData.feelsLike}{unit}</span></p>
                <div className="temperature-panel">
                    <p>Min - <span>{transformedData.tempMin}{unit}</span></p>
                    <p>Max - <span>{transformedData.tempMax}{unit}</span></p>  
                </div>
                <div className="generic-details">
                    <p>Humidity <span>{weatherData.main.humidity}</span></p>
                    <p>Wind speed <span>{weatherData.wind.speed}</span></p>
                </div>
            </div>
        </div>
    )
    
}