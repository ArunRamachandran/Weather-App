import React from 'react';
import { mount } from 'enzyme';
import { useDispatch, useSelector, Provider } from "react-redux";
import configureStore from 'redux-mock-store'
import * as Constants from '../constants/constants';
import { updatePreferredConversion } from '../actions/actions';
import { ActionBar } from './ActionBar';
import { Toggle } from '../components/Toggle';

jest.mock('../components/Toggle', () => ({
    Toggle: () => 'Toggle'
}))

const mockStore = configureStore([]);

describe('ActionBar', () => {

    const store = mockStore({
        weatherData: {
            preferredConversion: Constants.CELSIUS,
            weather: []
        }
    })

    const wrapper = mount(<Provider store={store}><ActionBar/></Provider>);

    it('should render Actionbar component', () => {
        expect(wrapper).toBeTruthy();
        expect(wrapper.find(Toggle)).toHaveLength(1);
    })
});
