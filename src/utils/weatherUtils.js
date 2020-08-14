export const convertToFarenheit = (c) => {
    let farenheit =  (c * (9/5)) + 32;
    return Math.round(farenheit * 10) / 10;
}

export const convertToDegreeCelsius = (f) => {
    let degreeC = ((f - 32) * (5/9)); 
    return Math.round(degreeC * 10) / 10;
}

export const transformWeatherData = (data) => {
    Object.keys(data).forEach((key) => {
        data[key] = convertToFarenheit(data[key])
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