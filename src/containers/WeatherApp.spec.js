import React, { useEffect } from 'react';
import { mount } from 'enzyme';
import thunk from 'redux-thunk'
import * as Redux from "react-redux";
import { Helmet } from "react-helmet";
import configureStore from 'redux-mock-store'
import * as Constants from '../constants/constants';

import { ActionBar } from './ActionBar';
import * as action from '../actions/actions';
import { ImageHolder } from '../components/ImageHolder';
import { WeatherWidget } from '../components/WeatherWidget';
import { AdditionalDetails } from '../components/AdditionalDetails';
import { DataList } from '../components/DataList';
import CloudImg from '../static/cloud.svg';
import WeatherBg from '../static/earth_holder.svg';
import * as utils from '../utils/weatherUtils';

import { WeatherApp } from './WeatherApp';

jest.mock('../actions/actions', () => ({
    fetchWeatherInfo: () => jest.fn()
}))
jest.mock('./ActionBar', () => ({
    ActionBar: () => 'ActionBar'
}))
jest.mock('../components/ImageHolder', () => ({
    ImageHolder: () => 'ImageHolder'
}))
jest.mock('../components/WeatherWidget', () => ({
    WeatherWidget: () => 'WeatherWidget'
}))
jest.mock('../components/AdditionalDetails', () => ({
    AdditionalDetails: () => 'AdditionalDetails'
}))
jest.mock('../components/DataList', () => ({
    DataList: () => 'DataList'
}))
jest.mock('../static/cloud.svg', () => 'Cloud')
jest.mock('../static/earth_holder.svg', () => 'earth');

jest.spyOn(utils, 'transformWeatherData')

const middlewares = [thunk]
const mockStore = configureStore(middlewares);

describe('WeatherApp', () => {

    beforeAll(() => jest.spyOn(React, 'useEffect').mockImplementation(React.useLayoutEffect))
    afterAll(() => React.useEffect.mockRestore())

    const store = mockStore({
        activeLocation: 'testLocation',
        weatherData: [],
        preferredConversion: Constants.CELSIUS   
    });

    jest.spyOn(Redux, 'useDispatch');
    jest.spyOn(action, 'fetchWeatherInfo');

    const wrapper = mount(<Redux.Provider store={store}><WeatherApp/></Redux.Provider>);

    it('should render the WeatherApp container', () => {
        expect(wrapper).toBeTruthy();
    })

    it('should dispatch the action on component render', () => {
        expect(Redux.useDispatch).toHaveBeenCalled();
        expect(Redux.useDispatch).toHaveBeenCalledTimes(1);
    })

    it('should render the React-Helment to include meta data', () => {
        expect(wrapper.find(Helmet)).toHaveLength(1);
    })

    it('should render ActionBar within the app container', () => {
        expect(wrapper.find(ActionBar)).toHaveLength(1);
    })
});
