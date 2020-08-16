import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { ActionBar } from './ActionBar';
import { fetchWeatherInfo, updateDisplayFormat, updateLocation } from '../actions/actions';
import * as Constants from '../constants/constants';
import { ImageHolder } from '../components/ImageHolder';
import { WeatherWidget } from '../components/WeatherWidget';
import { DataCard } from '../components/DataCard';
import { transformWeatherData, abstractTemperatureInfo } from '../utils/weatherUtils';

import CloudImg from '../static/cloud.svg';
import WeatherBg from '../static/earth_holder.svg';

export const WeatherApp = () => {

    const activeLocation = useSelector(state => state.weatherData.preferredLocation);
    const weatherData = useSelector(state => state.weatherData.weather);
    const preferredConversion = useSelector(state => state.weatherData.preferredConversion);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchWeatherInfo(Constants.CITIES[0]))
    }, [])

    const _renderBackgroundImage = () => {
        const backgroundLayout = [{
            src: CloudImg,
            className: 'cloud-left-wing'
        }, {
            src: CloudImg,
            className: 'cloud-right-wing'
        }, {
            src: WeatherBg,
            className: 'main-image-bg'
        }];

        return (
            <>
                {
                    backgroundLayout.map((img) => (
                        <ImageHolder src={img.src} customClassName={img.className}/>
                    ))
                }
            </>
        )
    }

    const _updateLocationInfo = (location) => {
        dispatch(fetchWeatherInfo(location));
    }

    const _renderAdditonalWeatherInfo = (transformedData, weatherData, unit) => {
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

    const _renderAvailableCities = () => {
        return (
            <div className="city-list-items">
                <p>Choose a city from the list</p>
                { Constants.CITIES.map(
                    (city, index) => 
                        <DataCard 
                            data={city} 
                            key={index} 
                            activeLocation={activeLocation} 
                            onClick={_updateLocationInfo}
                        />
                    )
                }
            </div>
        )
    }

    const _applyPreferredConversion = (data) => {
        if (data) {
            return transformWeatherData(data, preferredConversion)
        } else return undefined;
    }

    const temperatureInfo = abstractTemperatureInfo(weatherData);
    const transformedData = _applyPreferredConversion(temperatureInfo, preferredConversion);
    const unit = Constants.CELSIUS === preferredConversion ? '°C' : '°F';

    return (
        <>
            <section className="weather-app-container">
                <ActionBar/>
                { transformedData && 
                    <WeatherWidget 
                        unit={unit}
                        temp={transformedData.temp} 
                        location={activeLocation} 
                        desc={weatherData.weather[0].description}
                        iconCode={weatherData.weather[0].icon}
                    /> 
                }
                {_renderBackgroundImage()}
            </section>
                <section className="additional-info-wrapper">
                    { transformedData && _renderAdditonalWeatherInfo(transformedData, weatherData, unit)}
                    {_renderAvailableCities()}
                </section>
        </>
    )
}