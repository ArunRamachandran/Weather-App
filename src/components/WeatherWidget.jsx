import React from 'react';
import LocationIcon from '../static/location_icon.svg';
import { ImageHolder } from '../components/ImageHolder';

export const WeatherWidget = (props) => {

    const {
        unit,
        temp,
        location,
        desc,
        iconCode
    } = props;

    return (
        <div className="weather-widget-main">
            <div className="location-info">
                <ImageHolder src={LocationIcon} customClassName="location-icon"/>
                <p>{location}</p>
            </div>
            <div className="weather-info">
                <h3 className="temperature-value">{temp}{unit}</h3>
                <ImageHolder src={"http://openweathermap.org/img/w/" + iconCode + ".png"} customClassName="weather-icon"/>
            </div>
            <p className="weather-desc">{desc}</p>
        </div>
    )
}