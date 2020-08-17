import * as Constants from '../constants/constants';

const initialState = {
    isDataInCelcious: true,
    preferredConversion: Constants.CELSIUS,
    preferredLocation: undefined,
    weather: undefined,
    isDataLoading: false
}

const weatherData = (state = initialState, action) => {
    const { type, payload } = action;

    switch (type) {

        case Constants.UPDATE_WEATHER_INFO: 
            return {
                ...state,
                isDataLoading: false,
                preferredLocation: payload.location,
                weather: payload.weather
            }

        case Constants.API_IN_PROGRESS:
            return {
                ...state,
                isDataLoading: true
            }

        case Constants.API_FAILURE:
            return {
                ...state,
                isDataLoading: false,
                weather: undefined
            }

        case Constants.UPDATE_PREFERRED_CONVERSION:
            return {
                ...state,
                preferredConversion: payload
            }

        default:
            return state;
    }
}

export default weatherData;