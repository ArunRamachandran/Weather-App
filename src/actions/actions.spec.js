import * as actions from './actions';
import * as Constants from '../constants/constants';

describe('Actions', () => {

    const mockSuccessResponse = {};
    const mockJsonPromise = Promise.resolve(mockSuccessResponse); // 2
    const mockFetchPromise = Promise.resolve({
      json: () => mockJsonPromise,
    });
    global.fetch = jest.fn().mockImplementation(() => mockFetchPromise);

    const mockRequestPayload = {"type": "API_IN_PROGRESS"}
    const expectedUrl = "https://api.openweathermap.org/data/2.5/weather?q=Berlin&units=metric&APPID=3d40e9758a09eca50f631a8f51be4b4f"
    
    it('should handle fetchWeatherInfo action', () => {
        const dispatch = jest.fn().mockImplementation(() => Promise.resolve());
        
        const data = actions.fetchWeatherInfo('Berlin')(dispatch);
        expect(dispatch).toHaveBeenCalledWith(mockRequestPayload);
        expect(fetch).toHaveBeenCalledWith(expectedUrl);
    })

    it('should validate action object for updateWeatherInfo', () => {
        const mockPayload = { 
            type: Constants.UPDATE_WEATHER_INFO,
            payload: 'test'
        }
    
        expect(actions.updateWeatherInfo('test')).toEqual(mockPayload)
    })

    it('should validate action object for setAppLoader', () => {
        const mockPayload = { type: Constants.API_IN_PROGRESS };

        expect(actions.setAppLoader()).toEqual(mockPayload);
    })

    it('should validate action object for setAppLoadFailure', () => {
        const mockPayload = { type: Constants.API_FAILURE }

        expect(actions.setAppLoadFailure()).toEqual(mockPayload);
    })

    it('should validate action object for updatePreferredConversion', () => {
        const mockPayload = {
            type: Constants.UPDATE_PREFERRED_CONVERSION,
            payload: 'test'
        }

        expect(actions.updatePreferredConversion('test')).toEqual(mockPayload)
    })
});
