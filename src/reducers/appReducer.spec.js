import weatherReducer from './appReducer'
import * as Constants from '../constants/constants';
import { createStore } from 'redux';

describe('weatherReducer', () => {
    var store, defaultState;

    beforeEach(() => {
        store = createStore(weatherReducer);
        defaultState = {
            isDataInCelcious: true,
            preferredConversion: Constants.CELSIUS,
            preferredLocation: undefined,
            weather: undefined,
            isDataLoading: false
        }
    })

    it('should return the default state', () => {
        const expectedState = {
            ...defaultState
        };
        expect(store.getState()).toEqual(expectedState);
    })

    it('should handle UPDATE_WEATHER_INFO action type', () => {
        const spyAction = {
            type: Constants.UPDATE_WEATHER_INFO,
            payload: { location: 'Berlin', weather: 'Cloudy' }
        }

        store.dispatch(spyAction);
        expect(store.getState()).toEqual({
            ...defaultState,
            isDataLoading: false,
            preferredLocation: spyAction.payload.location,
            weather: spyAction.payload.weather
        })
    })

    it('should handle API_IN_PROGRESS action type', () => {
        const spyAction = {
            type: Constants.API_IN_PROGRESS
        }

        store.dispatch(spyAction);
        expect(store.getState()).toEqual({
            ...defaultState,
            isDataLoading: true
        })
    })

    it('should handle API_FAILURE action tyepe', () => {
        const spyAction = {
            type: Constants.API_FAILURE
        }

        store.dispatch(spyAction);
        expect(store.getState()).toEqual({
            ...defaultState,
            isDataLoading: false,
            weather: undefined
        })
    })

    it('should handle UPDATE_PREFERRED_CONVERSION action type', () => {
        const spyAction = {
            type: Constants.UPDATE_PREFERRED_CONVERSION,
            payload: 'test payload'
        }

        store.dispatch(spyAction);
        expect(store.getState()).toEqual({
            ...defaultState,
            preferredConversion: spyAction.payload
        })
    })
});
