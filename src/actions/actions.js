import * as Constants from '../constants/constants';

const fetchWeatherInfo = (city) => {

    return dispatch => {
        dispatch(setAppLoader())

        fetch(`${Constants.BASE_URL}?q=${city}&units=metric&APPID=${Constants.APPID}`)
            .then(response => {
                if (response.ok) { 
                    return response.json()
                }
                throw new Error(response.statusText)
            })
            .then(
                data => {
                    dispatch(updateWeatherInfo({
                        location: city,
                        weather: data
                    }))
                },
                error => {
                    dispatch(setAppLoadFailure())
                }
            )
    }
}

const updateWeatherInfo = (data) => ({
    type: Constants.UPDATE_WEATHER_INFO,
    payload: data
})

const setAppLoader = () => ({
    type: Constants.API_IN_PROGRESS,
})

const setAppLoadFailure = () => ({
    type: Constants.API_FAILURE
})

const updatePreferredConversion = (data) => ({
    type: Constants.UPDATE_PREFERRED_CONVERSION,
    payload: data
})

export {
    fetchWeatherInfo,
    updateWeatherInfo,
    updatePreferredConversion,
    setAppLoader,
    setAppLoadFailure
}