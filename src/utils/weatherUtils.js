import { CELSIUS, FARENHEIT } from '../constants/constants';

export const convertToFarenheit = (c) => {
    let farenheit =  (c * (9/5)) + 32;
    return roundOffdata(farenheit, 10);
}

export const convertToDegreeCelsius = (f) => {
    let degreeC = ((f - 32) * (5/9)); 
    return roundOffdata(degreeC, 10);
}

export const roundOffdata = (temperature, roundOfValue) => ((Math.round(temperature * roundOfValue)) / roundOfValue)

export const transformWeatherData = (data, unit) => {
    Object.keys(data).forEach((key) => {
        data[key] = FARENHEIT === unit ? convertToFarenheit(data[key]) : roundOffdata(data[key], 1)
    });

    return data;
}

export const abstractTemperatureInfo = (weatherData) => {
    if (weatherData) {
        return {
            temp: weatherData.main.temp,
            feelsLike: weatherData.main.feels_like,
            tempMin: weatherData.main.temp_min,
            tempMax: weatherData.main.temp_max
        }
    } return weatherData;
}