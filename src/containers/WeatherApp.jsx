import React, { useEffect} from 'react';
import { useDispatch, useSelector } from "react-redux";
import { Helmet } from "react-helmet";
import { ActionBar } from './ActionBar';
import { fetchWeatherInfo } from '../actions/actions';
import * as Constants from '../constants/constants';
import { ImageHolder } from '../components/ImageHolder';
import { WeatherWidget } from '../components/WeatherWidget';
import { AdditionalDetails } from '../components/AdditionalDetails';
import { DataList } from '../components/DataList';
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

    const _renderAvailableCities = () => {
        return (
            <div className="city-list-items">
                <p>Choose a city from the list</p>
                { Constants.CITIES.map(
                    (city, index) => 
                        <DataList 
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
            <Helmet>
                <title>Cloud Sync - Weather App</title>
                <meta name="description" content="Weather application" />
                <meta name="keywords" cpntent="weather, temperature, location, current weather, open-source, React" />
            </Helmet>
            <div className="weather-app-container">
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
            </div>
            <div className="additional-info-wrapper">
                { transformedData && 
                    <AdditionalDetails 
                        transformedData={transformedData} 
                        weatherData={weatherData}
                        unit={unit}
                    />
                }
                {_renderAvailableCities()}
            </div>
        </>
    )
}